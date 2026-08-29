// components/home/vehiclerentalserviceinindia/Map.tsx
"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import gsap from "gsap";

const Map = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isMounted = true;
    let resizeObserver: ResizeObserver | null = null;
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

    const svgElement = svgRef.current;
    const containerElement = containerRef.current;

    if (!svgElement || !containerElement) return;

    const svg = d3.select(svgElement);

    /*
     * ============================================================
     * RESPONSIVE MAP CONFIGURATION
     * ============================================================
     *
     * We keep the original internal SVG coordinate system:
     *
     * 1000 x 550
     *
     * but calculate the projection dynamically according to
     * the available container size.
     *
     * This keeps the existing design while making the map behave
     * properly on mobile, tablet and desktop.
     */

    const getResponsiveDimensions = () => {
      const rect = containerElement.getBoundingClientRect();

      const width = Math.max(rect.width, 320);
      const height = Math.max(rect.height, 250);

      return {
        width,
        height,
      };
    };

    /*
     * ============================================================
     * MAP INITIALIZATION
     * ============================================================
     */

    const initMap = async () => {
      try {
        const topology = await d3.json(
          "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-10m.json"
        );

        if (!isMounted || !topology) return;

        const countries = topojson.feature(
          topology,
          topology.objects.countries
        ).features;

        const india = countries.find(
          (d) => String(d.id) === "356"
        );

        if (!india) {
          throw new Error("India not found");
        }

        /*
         * ========================================================
         * RESPONSIVE PROJECTION
         * ========================================================
         */

        const projection = d3.geoMercator();

        /*
         * Original design uses approximately:
         *
         * [[115, 35], [885, 485]]
         *
         * We keep this visual relationship but calculate the
         * available map area dynamically.
         */

        const internalWidth = 1000;
        const internalHeight = 550;

        const getProjectionExtent = () => {
          const { width, height } = getResponsiveDimensions();

          /*
           * Mobile
           */
          if (width < 480) {
            return [
              [120, 45],
              [880, 500],
            ] as [[number, number], [number, number]];
          }

          /*
           * Tablet
           */
          if (width < 1024) {
            return [
              [105, 38],
              [895, 500],
            ] as [[number, number], [number, number]];
          }

          /*
           * Desktop
           */
          return [
            [95, 30],
            [905, 505],
          ] as [[number, number], [number, number]];
        };

        projection.fitExtent(
          getProjectionExtent(),
          india
        );

        const path = d3.geoPath(projection);

        /*
         * ========================================================
         * DRAW WORLD COUNTRIES
         * ========================================================
         */

        const worldLayer = d3.select("#worldLayer");
        const routeLayer = d3.select("#routeLayer");
        const citiesLayer = d3.select("#citiesLayer");

        worldLayer.selectAll("*").remove();
        routeLayer.selectAll("*").remove();
        citiesLayer.selectAll("*").remove();

        worldLayer
          .selectAll("path")
          .data(countries)
          .join("path")
          .attr("class", (d) =>
            String(d.id) === "356"
              ? "world-country india-outline"
              : "world-country dim"
          )
          .attr("d", path)
          .attr("pathLength", 1)
          .attr("stroke-dasharray", 1)
          .attr("stroke-dashoffset", 1)
          .attr("opacity", 0);

        /*
         * ========================================================
         * INDIA
         * ========================================================
         */

        const indiaD = path(india);

        if (!indiaD) {
          throw new Error("Unable to generate India path");
        }

        const center = path.centroid(india);

        /*
         * India base outline
         */

        const indiaBaseEl = d3
          .select("#indiaOutlineBase")
          .attr("d", indiaD);

        /*
         * India highlight outline
         */

        const indiaOutlineEl = d3
          .select("#indiaOutline")
          .attr("d", indiaD);

        const indiaBaseLength =
          indiaBaseEl.node()?.getTotalLength() || 0;

        const indiaOutlineLength =
          indiaOutlineEl.node()?.getTotalLength() || 0;

        indiaBaseEl
          .attr("stroke-dasharray", indiaBaseLength)
          .attr("stroke-dashoffset", indiaBaseLength);

        indiaOutlineEl
          .attr("stroke-dasharray", indiaOutlineLength)
          .attr("stroke-dashoffset", indiaOutlineLength);

        /*
         * India fill
         */

        d3.select("#indiaFill")
          .attr("d", indiaD);

        /*
         * India inner
         */

        d3.select("#indiaInner")
          .attr("d", indiaD);

        /*
         * ========================================================
         * INDIA ISLANDS
         * ========================================================
         */

        const indiaIslandLayer =
          d3.select("#indiaIslandLayer");

        indiaIslandLayer.selectAll("*").remove();

        const indiaGeometry = india.geometry;

        if (indiaGeometry.type === "MultiPolygon") {
          const islandFeatures = indiaGeometry.coordinates
            .filter((poly) => {
              const feature = {
                type: "Feature" as const,
                properties: {},
                geometry: {
                  type: "Polygon" as const,
                  coordinates: poly,
                },
              };

              const bounds = path.bounds(feature);

              const width =
                bounds[1][0] - bounds[0][0];

              const height =
                bounds[1][1] - bounds[0][1];

              return width < 55 && height < 90;
            })
            .map((poly) => ({
              type: "Feature" as const,
              properties: {},
              geometry: {
                type: "Polygon" as const,
                coordinates: poly,
              },
            }));

          indiaIslandLayer
            .selectAll("path")
            .data(islandFeatures)
            .join("path")
            .attr(
              "class",
              "india-island-highlight"
            )
            .attr("d", path)
            .attr("opacity", 0);
        }

        /*
         * ========================================================
         * INDIA RIPPLE
         * ========================================================
         */

        d3.select("#indiaPulse")
          .attr("cx", center[0])
          .attr("cy", center[1]);

        d3.select("#indiaPulse2")
          .attr("cx", center[0])
          .attr("cy", center[1]);

        /*
         * ========================================================
         * RESPONSIVE ZOOM BOUNDS
         * ========================================================
         */

        const b = path.bounds(india);

        const [[x0, y0], [x1, y1]] = b;

        const { width } = getResponsiveDimensions();

        let pad = 34;

        /*
         * Small mobile
         */

        if (width < 375) {
          pad = 28;
        }

        /*
         * Normal mobile
         */

        else if (width < 480) {
          pad = 30;
        }

        /*
         * Tablet
         */

        else if (width < 1024) {
          pad = 32;
        }

        /*
         * Desktop
         */

        else {
          pad = 34;
        }

        const indiaViewBox = {
          x: x0 - pad,
          y: y0 - pad,
          w: x1 - x0 + pad * 2,
          h: y1 - y0 + pad * 2,
        };

        /*
         * ========================================================
         * CITIES
         * ========================================================
         */

        const cities = [
          {
            name: "Gurugram",
            lon: 77.1025,
            lat: 28.7041,
            dx: 8,
            dy: -6,
          },
          {
            name: "Delhi",
            lon: 77.0266,
            lat: 28.4595,
            dx: 8,
            dy: 8,
          },
          {
            name: "Mumbai",
            lon: 72.8777,
            lat: 19.076,
            dx: 8,
            dy: -5,
          },
          {
            name: "Pune",
            lon: 73.8567,
            lat: 18.5204,
            dx: 8,
            dy: 9,
          },
        ];

        const cityPts = cities.map((city) => {
          const point = projection([
            city.lon,
            city.lat,
          ]);

          return {
            ...city,
            x: point[0],
            y: point[1],
          };
        });

        /*
         * ========================================================
         * ROUTE
         * ========================================================
         */

        const routePts = cityPts.map((city) => [
          city.x,
          city.y,
        ]);

        const routePath = d3
          .line<[number, number]>()
          .curve(
            d3.curveCatmullRom.alpha(0.7)
          )(routePts);

        if (routePath) {
          routeLayer
            .append("path")
            .attr("class", "route")
            .attr("d", routePath)
            .attr("pathLength", 1)
            .attr("stroke-dasharray", 1)
            .attr("stroke-dashoffset", 1);
        }

        routePts.forEach(([x, y]) => {
          routeLayer
            .append("circle")
            .attr("class", "route-dot")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 1.2);
        });

        /*
         * ========================================================
         * CITY GROUPS
         * ========================================================
         */

        const groups = cityPts.map((city) => {
          const group = citiesLayer
            .append("g")
            .attr("class", "pin-group")
            .attr(
              "transform",
              `translate(${city.x}, ${city.y})`
            )
            .attr("opacity", 0)
            .attr("scale", 0);

          group
            .append("circle")
            .attr("class", "pin-halo")
            .attr("r", 5);

          group
            .append("circle")
            .attr("class", "pin-pulse p1")
            .attr("r", 2.5);

          group
            .append("circle")
            .attr("class", "pin-pulse p2")
            .attr("r", 2.5);

          group
            .append("circle")
            .attr("class", "pin-head")
            .attr("r", 2.8);

          group
            .append("circle")
            .attr("class", "pin-core")
            .attr("r", 1);

          group
            .append("line")
            .attr("class", "pin-stem")
            .attr("x1", 0)
            .attr("y1", 2.4)
            .attr("x2", 0)
            .attr("y2", 5);

          group
            .append("line")
            .attr("class", "city-label-line")
            .attr("x1", 5)
            .attr("y1", 0)
            .attr("x2", 7)
            .attr("y2", 0);

          group
            .append("text")
            .attr("class", "city-label")
            .attr("x", city.dx)
            .attr("y", city.dy)
            .text(city.name);

          return group;
        });

        /*
         * ========================================================
         * GSAP TIMELINE
         * ========================================================
         */

        const tl = gsap.timeline({
          defaults: {
            overwrite: "auto",
          },
        });

        const worldNodes =
          worldLayer.selectAll("path").nodes();

        /*
         * ========================================================
         * WORLD FADE IN + INDIA HIGHLIGHT
         * ========================================================
         */

        tl.to(
          worldNodes,
          {
            duration: 1.65,
            opacity: 1,
            strokeDashoffset: 0,
            stagger: {
              each: 0.008,
              from: "center",
            },
            ease: "power2.out",
          },
          0
        )

          .to(
            worldNodes,
            {
              duration: 0.55,
              attr: {
                "stroke-width": 0.9,
              },
              ease: "sine.inOut",
            },
            1.05
          )

          /*
           * ======================================================
           * ZOOM TO INDIA
           * ======================================================
           */

          .to(
            "#map",
            {
              duration: 1.65,
              attr: {
                viewBox: `${indiaViewBox.x} ${indiaViewBox.y} ${indiaViewBox.w} ${indiaViewBox.h}`,
              },
              ease: "power3.inOut",
            },
            2.05
          )

          /*
           * ======================================================
           * DIM WORLD
           * ======================================================
           */

          .to(
            worldNodes,
            {
              duration: 1.1,
              opacity: 0.12,
              ease: "power2.inOut",
            },
            2.35
          )

          /*
           * ======================================================
           * INDIA FILL
           * ======================================================
           */

          .to(
            "#indiaFill",
            {
              duration: 0.7,
              opacity: 1,
              ease: "power2.out",
            },
            3.72
          )

          /*
           * ======================================================
           * INDIA BASE BORDER
           * ======================================================
           */

          .to(
            "#indiaOutlineBase",
            {
              duration: 1.05,
              opacity: 1,
              strokeDashoffset: 0,
              ease: "power2.inOut",
            },
            3.78
          )

          /*
           * ======================================================
           * INDIA GREEN HIGHLIGHT
           * ======================================================
           */

          .to(
            "#indiaOutline",
            {
              duration: 1.05,
              opacity: 1,
              strokeDashoffset: 0,
              ease: "power2.inOut",
            },
            3.82
          )

          /*
           * ======================================================
           * ISLANDS
           * ======================================================
           */

          .to(
            "#indiaIslandLayer path",
            {
              duration: 0.9,
              opacity: 1,
              stagger: 0.04,
              ease: "power2.out",
            },
            4.0
          )

          /*
           * ======================================================
           * INNER INDIA
           * ======================================================
           */

          .to(
            "#indiaInner",
            {
              duration: 0.6,
              opacity: 1,
              ease: "power2.out",
            },
            4.25
          )

          /*
           * ======================================================
           * INDIA PULSE 1
           * ======================================================
           */

          .to(
            "#indiaPulse",
            {
              duration: 0.9,
              opacity: 0.6,
              attr: {
                r: 22,
              },
              ease: "power2.out",
            },
            4.08
          )

          .to(
            "#indiaPulse",
            {
              duration: 0.55,
              opacity: 0,
              attr: {
                r: 38,
              },
              ease: "power2.out",
            },
            4.42
          )

          /*
           * ======================================================
           * INDIA PULSE 2
           * ======================================================
           */

          .to(
            "#indiaPulse2",
            {
              duration: 0.9,
              opacity: 0.4,
              attr: {
                r: 30,
              },
              ease: "power2.out",
            },
            4.28
          )

          .to(
            "#indiaPulse2",
            {
              duration: 0.55,
              opacity: 0,
              attr: {
                r: 48,
              },
              ease: "power2.out",
            },
            4.62
          )

          /*
           * ======================================================
           * ROUTE
           * ======================================================
           */

          .to(
            routeLayer.select(".route").node(),
            {
              duration: 1.6,
              opacity: 1,
              strokeDashoffset: 0,
              ease: "power2.inOut",
            },
            4.8
          );

        /*
         * ========================================================
         * CITY PIN ANIMATIONS
         * ========================================================
         */

        groups.forEach((group, index) => {
          const time = 5 + index * 0.7;

          tl.to(
            group.node(),
            {
              duration: 0.38,
              opacity: 1,
              scale: 0.82,
              ease: "back.out(2.4)",
            },
            time
          )

            .to(
              group.node(),
              {
                duration: 0.18,
                scale: 1.08,
                ease: "power2.out",
              },
              time + 0.38
            )

            .to(
              group.node(),
              {
                duration: 0.18,
                scale: 1,
                ease: "power2.inOut",
              },
              time + 0.56
            )

            /*
             * Pin stem
             */

            .to(
              group
                .select(".pin-stem")
                .node(),
              {
                duration: 0.18,
                opacity: 1,
                ease: "power2.out",
              },
              time + 0.12
            )

            /*
             * City label line
             */

            .to(
              group
                .select(".city-label-line")
                .node(),
              {
                duration: 0.22,
                opacity: 1,
                ease: "power2.out",
              },
              time + 0.22
            )

            /*
             * Pulse 1
             */

            .to(
              group
                .select(".pin-pulse.p1")
                .node(),
              {
                duration: 0.7,
                opacity: 0.7,
                attr: {
                  r: 8,
                },
                ease: "power2.out",
              },
              time + 0.1
            )

            .to(
              group
                .select(".pin-pulse.p1")
                .node(),
              {
                duration: 0.35,
                opacity: 0,
                ease: "power1.out",
              },
              time + 0.55
            )

            /*
             * Pulse 2
             */

            .to(
              group
                .select(".pin-pulse.p2")
                .node(),
              {
                duration: 0.8,
                opacity: 0.35,
                attr: {
                  r: 11,
                },
                ease: "power2.out",
              },
              time + 0.25
            )

            .to(
              group
                .select(".pin-pulse.p2")
                .node(),
              {
                duration: 0.35,
                opacity: 0,
                ease: "power1.out",
              },
              time + 0.72
            )

            /*
             * Halo
             */

            .to(
              group
                .select(".pin-halo")
                .node(),
              {
                duration: 0.45,
                opacity: 0.28,
                ease: "power2.out",
              },
              time
            )

            .to(
              group
                .select(".pin-halo")
                .node(),
              {
                duration: 0.65,
                opacity: 0,
                ease: "power2.out",
              },
              time + 0.4
            );
        });

        /*
         * ========================================================
         * KEEP BORDER BRIGHT
         * ========================================================
         */

        tl.to(
          "#indiaOutlineBase",
          {
            duration: 0.35,
            opacity: 1,
          },
          6.95
        ).to(
          "#indiaOutline",
          {
            duration: 0.35,
            opacity: 1,
          },
          6.95
        );

        /*
         * ========================================================
         * FINAL TITLE
         * ========================================================
         */

        tl.to(
          "#finalTitle",
          {
            duration: 0.6,
            opacity: 0.8,
            ease: "power2.out",
          },
          7.8
        ).to(
          "#finalSub",
          {
            duration: 0.5,
            opacity: 1,
            ease: "power2.out",
          },
          8.0
        );

        /*
         * ========================================================
         * PERPETUAL BREATHING ON PIN CORES
         * ========================================================
         */

        groups.forEach((group, index) => {
          gsap.to(
            group
              .select(".pin-core")
              .node(),
            {
              duration: 1.4,
              opacity: 0.55,
              repeat: -1,
              yoyo: true,
              delay: index * 0.15,
              ease: "sine.inOut",
            }
          );
        });

        /*
         * ========================================================
         * RESPONSIVE RESIZE
         * ========================================================
         *
         * We don't rebuild the entire animation on every resize.
         * Instead, the SVG itself remains responsive through
         * preserveAspectRatio and the D3 projection is recalculated
         * when the component size changes.
         */

        const updateResponsiveMap = () => {
          if (!isMounted) return;

          const { width } =
            getResponsiveDimensions();

          /*
           * Determine responsive projection area.
           */

          let extent: [
            [number, number],
            [number, number]
          ];

          if (width < 375) {
            extent = [
              [130, 55],
              [870, 490],
            ];
          } else if (width < 480) {
            extent = [
              [120, 45],
              [880, 500],
            ];
          } else if (width < 768) {
            extent = [
              [115, 40],
              [885, 500],
            ];
          } else if (width < 1024) {
            extent = [
              [105, 38],
              [895, 500],
            ];
          } else {
            extent = [
              [95, 30],
              [905, 505],
            ];
          }

          projection.fitExtent(
            extent,
            india
          );

          /*
           * Recalculate India path.
           */

          const updatedIndiaPath =
            path(india);

          if (!updatedIndiaPath) return;

          const updatedCenter =
            path.centroid(india);

          /*
           * Update India elements.
           */

          d3.select("#indiaFill")
            .attr("d", updatedIndiaPath);

          d3.select("#indiaInner")
            .attr("d", updatedIndiaPath);

          d3.select("#indiaOutlineBase")
            .attr("d", updatedIndiaPath);

          d3.select("#indiaOutline")
            .attr("d", updatedIndiaPath);

          /*
           * Update ripple center.
           */

          d3.select("#indiaPulse")
            .attr("cx", updatedCenter[0])
            .attr("cy", updatedCenter[1]);

          d3.select("#indiaPulse2")
            .attr("cx", updatedCenter[0])
            .attr("cy", updatedCenter[1]);

          /*
           * Update world paths.
           */

          worldLayer
            .selectAll("path")
            .attr("d", path);

          /*
           * Update island paths.
           */

          indiaIslandLayer
            .selectAll("path")
            .attr("d", path);

          /*
           * Update cities.
           */

          cityPts.forEach((city, index) => {
            const point = projection([
              city.lon,
              city.lat,
            ]);

            city.x = point[0];
            city.y = point[1];

            const group = groups[index];

            group.attr(
              "transform",
              `translate(${city.x}, ${city.y})`
            );
          });

          /*
           * Recalculate route.
           */

          const updatedRoutePts =
            cityPts.map((city) => [
              city.x,
              city.y,
            ]) as [number, number][];

          const updatedRoutePath = d3
            .line<[number, number]>()
            .curve(
              d3.curveCatmullRom.alpha(0.7)
            )(updatedRoutePts);

          if (updatedRoutePath) {
            routeLayer
              .select(".route")
              .attr(
                "d",
                updatedRoutePath
              );
          }

          /*
           * Update route dots.
           */

          routeLayer
            .selectAll(".route-dot")
            .each(function (_, index) {
              const point =
                updatedRoutePts[index];

              if (!point) return;

              d3.select(this)
                .attr("cx", point[0])
                .attr("cy", point[1]);
            });
        };

        /*
         * ========================================================
         * RESIZE OBSERVER
         * ========================================================
         */

        resizeObserver =
          new ResizeObserver(() => {
            if (resizeTimeout) {
              clearTimeout(resizeTimeout);
            }

            resizeTimeout = setTimeout(() => {
              updateResponsiveMap();
            }, 100);
          });

        resizeObserver.observe(
          containerElement
        );

        /*
         * Initial responsive calculation.
         */

        updateResponsiveMap();
      } catch (error) {
        console.error(
          "Error loading map:",
          error
        );
      }
    };

    initMap();

    /*
     * ============================================================
     * CLEANUP
     * ============================================================
     */

    return () => {
      isMounted = false;

      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      if (resizeObserver) {
        resizeObserver.disconnect();
      }

      /*
       * Kill only animations belonging to this SVG.
       */

      if (svgElement) {
        gsap.killTweensOf(
          svgElement.querySelectorAll("*")
        );
      }

      gsap.killTweensOf(svgElement);

      svg.selectAll("*").interrupt();
    };
  }, []);

  /*
   * ==============================================================
   * JSX
   * ==============================================================
   */

  return (
    <div
      ref={containerRef}
      className="map-section"
      aria-label="Urban Cruise India network with full border and city outlines"
    >
      <div className="map-wrap">
        <svg
          ref={svgRef}
          id="map"
          viewBox="0 0 1000 550"
          preserveAspectRatio="xMidYMid meet"
          role="img"
        >
          <defs>
            {/* ==================================================
                GREEN GLOW
            ================================================== */}

            <filter
              id="greenGlow"
              x="-300%"
              y="-300%"
              width="600%"
              height="600%"
            >
              <feGaussianBlur
                stdDeviation="2.1"
                result="b"
              />

              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* ==================================================
                INDIA FILL GLOW
            ================================================== */}

            <filter
              id="indiaFillGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="4.5" />
            </filter>

            {/* ==================================================
                LARGE GLOW
            ================================================== */}

            <filter
              id="largeGlow"
              x="-300%"
              y="-300%"
              width="600%"
              height="600%"
            >
              <feGaussianBlur stdDeviation="8" />
            </filter>

            {/* ==================================================
                SOFT GLOW
            ================================================== */}

            <filter
              id="softGlow"
              x="-300%"
              y="-300%"
              width="600%"
              height="600%"
            >
              <feGaussianBlur stdDeviation="15" />
            </filter>
          </defs>

          {/* ====================================================
              WORLD MAP
          ==================================================== */}

          <g id="worldLayer"></g>

          {/* ====================================================
              INDIA
          ==================================================== */}

          <g id="indiaLayer">
            <path
              id="indiaFill"
              className="india-fill"
              opacity="0"
            />

            <path
              id="indiaOutlineBase"
              className="india-outline-base"
              opacity="0"
              pathLength="1"
            />

            <path
              id="indiaOutline"
              className="india-outline-highlight"
              opacity="0"
              pathLength="1"
            />

            <g id="indiaIslandLayer"></g>

            <path
              id="indiaInner"
              className="india-inner"
              opacity="0"
            />

            <circle
              id="indiaPulse"
              className="india-ripple"
              r="10"
            />

            <circle
              id="indiaPulse2"
              className="india-ripple"
              r="10"
            />
          </g>

          {/* ====================================================
              ROUTE
          ==================================================== */}

          <g id="routeLayer"></g>

          {/* ====================================================
              CITY PINS
          ==================================================== */}

          <g id="citiesLayer"></g>

          {/* ====================================================
              FINAL COPY
          ==================================================== */}

          <g id="finalCopy">
            <text
              id="finalTitle"
              className="final-title"
              x="500"
              y="510"
              textAnchor="middle"
            >
              URBAN CRUISE · INDIA NETWORK
            </text>

            <text
              id="finalSub"
              className="final-sub"
              x="500"
              y="523"
              textAnchor="middle"
            >
              GURUGRAM · DELHI · MUMBAI · PUNE
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Map;
