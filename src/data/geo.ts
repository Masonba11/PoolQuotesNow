export interface GeoCoordinates {
  lat: number;
  lng: number;
}

export interface CityGeoData {
  [cityName: string]: GeoCoordinates;
}

export interface StateGeoData {
  lat: number;
  lng: number;
  cities: CityGeoData;
}

export interface GeoData {
  [stateName: string]: StateGeoData;
}

export const GEO_DATA: GeoData = {
  Florida: {
    lat: 27.6648,
    lng: -81.5158,
    cities: {
      Miami: { lat: 25.7617, lng: -80.1918 },
      Orlando: { lat: 28.5383, lng: -81.3792 },
      Tampa: { lat: 27.9506, lng: -82.4572 },
      Jacksonville: { lat: 30.3322, lng: -81.6557 },
      "St. Petersburg": { lat: 27.7676, lng: -82.6403 },
      "Fort Lauderdale": { lat: 26.1224, lng: -80.1373 },
      "Cape Coral": { lat: 26.5629, lng: -81.9495 },
      Sarasota: { lat: 27.3364, lng: -82.5307 },
      Naples: { lat: 26.142, lng: -81.7948 },
      "West Palm Beach": { lat: 26.7153, lng: -80.0534 },
      "Boca Raton": { lat: 26.3683, lng: -80.1289 },
      Kissimmee: { lat: 28.2919, lng: -81.4078 },
      Lakeland: { lat: 28.0395, lng: -81.9498 },
      Bradenton: { lat: 27.4989, lng: -82.5748 },
      "Fort Myers": { lat: 26.6406, lng: -81.8723 },
      "Daytona Beach": { lat: 29.2108, lng: -81.0228 },
      Pensacola: { lat: 30.4213, lng: -87.2169 },
      "Palm Bay": { lat: 28.0345, lng: -80.5887 },
      "Port St. Lucie": { lat: 27.273, lng: -80.3582 },
      Ocala: { lat: 29.1872, lng: -82.1401 },
    },
  },

  Texas: {
    lat: 31.9686,
    lng: -99.9018,
    cities: {
      Houston: { lat: 29.7604, lng: -95.3698 },
      Dallas: { lat: 32.7767, lng: -96.797 },
      "San Antonio": { lat: 29.4241, lng: -98.4936 },
      Austin: { lat: 30.2672, lng: -97.7431 },
      "Fort Worth": { lat: 32.7555, lng: -97.3308 },
      "El Paso": { lat: 31.7619, lng: -106.485 },
      Arlington: { lat: 32.7357, lng: -97.1081 },
      Plano: { lat: 33.0198, lng: -96.6989 },
      "Corpus Christi": { lat: 27.8006, lng: -97.3964 },
      Lubbock: { lat: 33.5779, lng: -101.8552 },
      Laredo: { lat: 27.5036, lng: -99.5075 },
      Irving: { lat: 32.814, lng: -96.9489 },
      Garland: { lat: 32.9126, lng: -96.6389 },
      Frisco: { lat: 33.1507, lng: -96.8236 },
      McKinney: { lat: 33.1972, lng: -96.6398 },
      "Grand Prairie": { lat: 32.7459, lng: -97.0011 },
      Brownsville: { lat: 25.9017, lng: -97.4975 },
      "Round Rock": { lat: 30.5083, lng: -97.6789 },
      Waco: { lat: 31.5493, lng: -97.1467 },
      Killeen: { lat: 31.1171, lng: -97.7278 },
    },
  },

  California: {
    lat: 36.7783,
    lng: -119.4179,
    cities: {
      "Los Angeles": { lat: 34.0522, lng: -118.2437 },
      "San Diego": { lat: 32.7157, lng: -117.1611 },
      "San Jose": { lat: 37.3382, lng: -121.8863 },
      Sacramento: { lat: 38.5816, lng: -121.4944 },
      Fresno: { lat: 36.7378, lng: -119.7871 },
      "Long Beach": { lat: 33.7701, lng: -118.1937 },
      Anaheim: { lat: 33.8366, lng: -117.9143 },
      Riverside: { lat: 33.9806, lng: -117.3755 },
      Bakersfield: { lat: 35.3733, lng: -119.0187 },
      Oakland: { lat: 37.8044, lng: -122.2711 },
      "Santa Ana": { lat: 33.7455, lng: -117.8677 },
      Irvine: { lat: 33.6846, lng: -117.8265 },
      "Chula Vista": { lat: 32.6401, lng: -117.0842 },
      Stockton: { lat: 37.9577, lng: -121.2908 },
      Modesto: { lat: 37.6391, lng: -120.9969 },
      Oxnard: { lat: 34.1975, lng: -119.1771 },
      Fontana: { lat: 34.0922, lng: -117.435 },
      "Huntington Beach": { lat: 33.6595, lng: -117.9988 },
      Glendale: { lat: 34.1425, lng: -118.2551 },
      Fremont: { lat: 37.5483, lng: -121.9886 },
    },
  },

  Arizona: {
    lat: 34.0489,
    lng: -111.0937,
    cities: {
      Phoenix: { lat: 33.4484, lng: -112.074 },
      Tucson: { lat: 32.2226, lng: -110.9747 },
      Mesa: { lat: 33.4152, lng: -111.8315 },
      Chandler: { lat: 33.3062, lng: -111.8413 },
      Gilbert: { lat: 33.3528, lng: -111.789 },
      Scottsdale: { lat: 33.4942, lng: -111.9261 },
      Glendale: { lat: 33.5387, lng: -112.186 },
      Peoria: { lat: 33.5806, lng: -112.2374 },
      Tempe: { lat: 33.4255, lng: -111.94 },
      Surprise: { lat: 33.6292, lng: -112.3679 },
      Goodyear: { lat: 33.4353, lng: -112.3582 },
      Avondale: { lat: 33.4353, lng: -112.3496 },
      Buckeye: { lat: 33.3703, lng: -112.5838 },
      "Queen Creek": { lat: 33.257, lng: -111.6343 },
      Prescott: { lat: 34.54, lng: -112.4685 },
      Flagstaff: { lat: 35.1983, lng: -111.6513 },
      "Casa Grande": { lat: 32.8795, lng: -111.7574 },
      Maricopa: { lat: 33.0581, lng: -112.0476 },
      "Bullhead City": { lat: 35.1478, lng: -114.5683 },
      "Lake Havasu City": { lat: 34.4839, lng: -114.3225 },
    },
  },

  Nevada: {
    lat: 38.8026,
    lng: -116.4194,
    cities: {
      "Las Vegas": { lat: 36.1699, lng: -115.1398 },
      Henderson: { lat: 36.0395, lng: -114.9817 },
      Reno: { lat: 39.5296, lng: -119.8138 },
      "North Las Vegas": { lat: 36.1989, lng: -115.1175 },
      Sparks: { lat: 39.5349, lng: -119.7527 },
      "Carson City": { lat: 39.1638, lng: -119.7674 },
      Pahrump: { lat: 36.2083, lng: -116.0022 },
      "Boulder City": { lat: 35.978, lng: -114.8325 },
      Elko: { lat: 40.8324, lng: -115.7631 },
      Mesquite: { lat: 36.8055, lng: -114.0672 },
      "Spring Valley": { lat: 36.108, lng: -115.245 },
      "Sunrise Manor": { lat: 36.2111, lng: -115.0731 },
      Paradise: { lat: 36.0972, lng: -115.1467 },
      Whitney: { lat: 36.0889, lng: -115.0425 },
      Enterprise: { lat: 36.0253, lng: -115.2419 },
      Winchester: { lat: 36.1397, lng: -115.1283 },
      Summerlin: { lat: 36.1587, lng: -115.3336 },
      "Incline Village": { lat: 39.2515, lng: -119.9723 },
      Laughlin: { lat: 35.1678, lng: -114.573 },
      Fernley: { lat: 39.6077, lng: -119.251 },
    },
  },
};

/**
 * Get state geo coordinates by state name
 */
export function getStateGeo(stateName: string): GeoCoordinates | null {
  const stateData = GEO_DATA[stateName];
  if (!stateData) return null;
  return { lat: stateData.lat, lng: stateData.lng };
}

/**
 * Get city geo coordinates by state name and city name
 */
export function getCityGeo(
  stateName: string,
  cityName: string
): GeoCoordinates | null {
  const stateData = GEO_DATA[stateName];
  if (!stateData) return null;
  const cityData = stateData.cities[cityName];
  if (!cityData) return null;
  return { lat: cityData.lat, lng: cityData.lng };
}
