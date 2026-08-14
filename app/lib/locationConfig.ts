// app/lib/locationConfig.ts

export interface LocationConfig {
  phone: string;
  email: string;
  address: string;
}

export const locationConfigs: Record<string, LocationConfig> = {
  'delhi': {
    phone: '+91 9324048224',
    email: 'delhi@urbancruise.in',
    address: 'C/o 4C Plus, 3rd Floor, Mahalaxmi Plaza, Sector 3 Vaishali, Gaziabad- UP-201010'
  },
  'mumbai': {
    phone: '+91 8369681231',
    email: 'booking@urbancruise.in',
    address: 'Laxmi Sadan, B-203, ठाकुर, Phase 1, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101'
  },
  'pune': {
    phone: '+91 9987717487',
    email: 'pune@urbancruise.in',
    address: 'MIDC Knowledge Park, 2nd Floor, Tower 5, World Trade Center, Kharadi, Pune, Maharashtra 411014'
  },
  'gurugram': {
    phone: '+91 8928946056',
    email: 'gurugram@urbancruise.in',
    address: 'C/o 4C Plus, 3rd Floor, Mahalaxmi Plaza, Sector 3 Vaishali, Gaziabad- UP-201010'
  },
};

export function getLocationConfig(location: string): LocationConfig {
  return locationConfigs[location] || {
    phone: '+91 8928946056',
    email: 'booking@urbancruise.in',
    address: 'Laxmi Sadan, B-203, ठाकुर, Phase 1, Thakur Village, Kandivali East, Mumbai, Maharashtra 400101'
  };
}

