// Enum Kota Indonesia
export enum KotaIndonesia {
    Jakarta = 'Jakarta',
    Surabaya = 'Surabaya',
    Bandung = 'Bandung',
    Medan = 'Medan',
    Yogyakarta = 'Yogyakarta',
    Bali = 'Bali',
    Makassar = 'Makassar',
    Palembang = 'Palembang',
    Semarang = 'Semarang',
    Malang = 'Malang',
  }
  
  // Mapped values: each city has longitude and latitude
  export const kotaCoordinates = {
    [KotaIndonesia.Jakarta]: { latitude: -6.2088, longitude: 106.8456 },
    [KotaIndonesia.Surabaya]: { latitude: -7.2575, longitude: 112.7521 },
    [KotaIndonesia.Bandung]: { latitude: -6.9175, longitude: 107.6191 },
    [KotaIndonesia.Medan]: { latitude: 3.5952, longitude: 98.6722 },
    [KotaIndonesia.Yogyakarta]: { latitude: -7.7956, longitude: 110.3695 },
    [KotaIndonesia.Bali]: { latitude: -8.3405, longitude: 115.0920 },
    [KotaIndonesia.Makassar]: { latitude: -5.1477, longitude: 119.4328 },
    [KotaIndonesia.Palembang]: { latitude: -2.9978, longitude: 104.7753 },
    [KotaIndonesia.Semarang]: { latitude: -6.9667, longitude: 110.4167 },
    [KotaIndonesia.Malang]: { latitude: -8.0816, longitude: 112.6349 },
  };
  