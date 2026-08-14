// app/[location]/page.tsx
import { notFound } from 'next/navigation';
import Link from "next/link";
import { isValidLocation, formatLocationName } from '@/app/lib/location';
import HeroSelector from '@/app/components/HeroSelector';
import AboutSelector from '@/app/components/AboutSelector';

interface LocationPageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function LocationHome({ params }: LocationPageProps) {
  const { location } = await params;

  if (!isValidLocation(location)) {
    notFound();
  }

  const features = [
    { 
      title: "Premium Service", 
      desc: "Top-notch service and attention to detail",
      icon: "⭐"
    },
    { 
      title: "Expert Guides", 
      desc: "Knowledgeable local guides",
      icon: "🎯"
    },
    { 
      title: "Best Experience", 
      desc: "Create lasting memories",
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Dynamic Hero Section based on location */}
      <HeroSelector />

      {/* Dynamic About Section based on location */}
      <AboutSelector />

      {/* Features Section */}
      <section className="py-12 xs:py-14 sm:py-16 md:py-20 bg-[#F5F2E9] dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-3 xs:mb-4">
            Why Choose Us in {formatLocationName(location)}
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 xs:mb-10 sm:mb-12 max-w-2xl mx-auto text-sm xs:text-base">
            Experience the best urban cruising service in {formatLocationName(location)} with our premium fleet and professional drivers.
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-5 xs:p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="text-3xl xs:text-4xl sm:text-5xl mb-3 xs:mb-4">{feature.icon}</div>
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1.5 xs:mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm xs:text-base text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


