// Enum Kota Indonesia
export enum KotaIndonesia {
  // Pulau Jawa
  Jakarta = 'Jakarta',
  Surabaya = 'Surabaya',
  Bandung = 'Bandung',
  Semarang = 'Semarang',
  Yogyakarta = 'Yogyakarta',
  Malang = 'Malang',
  Bogor = 'Bogor',
  Depok = 'Depok',
  Tangerang = 'Tangerang',
  Bekasi = 'Bekasi',
  Cirebon = 'Cirebon',
  Tasikmalaya = 'Tasikmalaya',
  Pekalongan = 'Pekalongan',
  Tegal = 'Tegal',
  Magelang = 'Magelang',
  Surakarta = 'Surakarta',
  Kediri = 'Kediri',
  Blitar = 'Blitar',
  Pasuruan = 'Pasuruan',
  Mojokerto = 'Mojokerto',
  Madiun = 'Madiun',
  Probolinggo = 'Probolinggo',
  Batu = 'Batu',
  Cilegon = 'Cilegon',
  Serang = 'Serang',
  
  // Pulau Sumatera
  Medan = 'Medan',
  Palembang = 'Palembang',
  Padang = 'Padang',
  Pekanbaru = 'Pekanbaru',
  Bandar_Lampung = 'Bandar Lampung',
  Batam = 'Batam',
  Jambi = 'Jambi',
  Bengkulu = 'Bengkulu',
  Binjai = 'Binjai',
  Bukittinggi = 'Bukittinggi',
  Dumai = 'Dumai',
  Gunungsitoli = 'Gunungsitoli',
  Langsa = 'Langsa',
  Lhokseumawe = 'Lhokseumawe',
  Lubuklinggau = 'Lubuklinggau',
  Metro = 'Metro',
  Padang_Panjang = 'Padang Panjang',
  Padang_Sidempuan = 'Padang Sidempuan',
  Pagar_Alam = 'Pagar Alam',
  Pangkalpinang = 'Pangkalpinang',
  Pariaman = 'Pariaman',
  Payakumbuh = 'Payakumbuh',
  Pematangsiantar = 'Pematangsiantar',
  Prabumulih = 'Prabumulih',
  Sabang = 'Sabang',
  Sibolga = 'Sibolga',
  Sungai_Penuh = 'Sungai Penuh',
  Tanjungbalai = 'Tanjungbalai',
  Tanjungpinang = 'Tanjungpinang',
  Tebing_Tinggi = 'Tebing Tinggi',
  Banda_Aceh = 'Banda Aceh',
  
  // Pulau Kalimantan
  Pontianak = 'Pontianak',
  Balikpapan = 'Balikpapan',
  Banjarmasin = 'Banjarmasin',
  Samarinda = 'Samarinda',
  Palangkaraya = 'Palangkaraya',
  Banjarbaru = 'Banjarbaru',
  Singkawang = 'Singkawang',
  Tarakan = 'Tarakan',
  
  // Pulau Sulawesi
  Makassar = 'Makassar',
  Manado = 'Manado',
  Palu = 'Palu',
  Gorontalo = 'Gorontalo',
  Kendari = 'Kendari',
  Bitung = 'Bitung',
  Palopo = 'Palopo',
  Parepare = 'Parepare',
  Tomohon = 'Tomohon',
  Kotamobagu = 'Kotamobagu',
  
  // Pulau Bali dan Nusa Tenggara
  Denpasar = 'Denpasar',
  Mataram = 'Mataram',
  Kupang = 'Kupang',
  Bima = 'Bima',
  
  // Maluku dan Papua
  Ambon = 'Ambon',
  Jayapura = 'Jayapura',
  Sorong = 'Sorong',
  Ternate = 'Ternate',
  Tidore = 'Tidore',
  Tual = 'Tual',

  // Kategori Khusus
  Bali = 'Bali' // Bali sebagai provinsi (bukan hanya kota Denpasar)
}
  
export const kotaCoordinates: { [key in KotaIndonesia]: { latitude: number; longitude: number } } = {
  // Pulau Jawa
  [KotaIndonesia.Jakarta]: { latitude: -6.2088, longitude: 106.8456 },
  [KotaIndonesia.Surabaya]: { latitude: -7.2575, longitude: 112.7521 },
  [KotaIndonesia.Bandung]: { latitude: -6.9175, longitude: 107.6191 },
  [KotaIndonesia.Semarang]: { latitude: -6.9667, longitude: 110.4167 },
  [KotaIndonesia.Yogyakarta]: { latitude: -7.7956, longitude: 110.3695 },
  [KotaIndonesia.Malang]: { latitude: -7.9666, longitude: 112.6326 },
  [KotaIndonesia.Bogor]: { latitude: -6.5944, longitude: 106.7892 },
  [KotaIndonesia.Depok]: { latitude: -6.4025, longitude: 106.7942 },
  [KotaIndonesia.Tangerang]: { latitude: -6.1783, longitude: 106.6319 },
  [KotaIndonesia.Bekasi]: { latitude: -6.2349, longitude: 106.9896 },
  [KotaIndonesia.Cirebon]: { latitude: -6.7057, longitude: 108.5559 },
  [KotaIndonesia.Tasikmalaya]: { latitude: -7.3274, longitude: 108.2207 },
  [KotaIndonesia.Pekalongan]: { latitude: -6.8892, longitude: 109.6646 },
  [KotaIndonesia.Tegal]: { latitude: -6.8686, longitude: 109.1402 },
  [KotaIndonesia.Magelang]: { latitude: -7.4711, longitude: 110.2178 },
  [KotaIndonesia.Surakarta]: { latitude: -7.5755, longitude: 110.8243 },
  [KotaIndonesia.Kediri]: { latitude: -7.8480, longitude: 112.0178 },
  [KotaIndonesia.Blitar]: { latitude: -8.0983, longitude: 112.1651 },
  [KotaIndonesia.Pasuruan]: { latitude: -7.6469, longitude: 112.9060 },
  [KotaIndonesia.Mojokerto]: { latitude: -7.4658, longitude: 112.4401 },
  [KotaIndonesia.Madiun]: { latitude: -7.6311, longitude: 111.5239 },
  [KotaIndonesia.Probolinggo]: { latitude: -7.7543, longitude: 113.2159 },
  [KotaIndonesia.Batu]: { latitude: -7.8720, longitude: 112.5251 },
  [KotaIndonesia.Cilegon]: { latitude: -6.0027, longitude: 106.0119 },
  [KotaIndonesia.Serang]: { latitude: -6.1153, longitude: 106.1498 },

  // Pulau Sumatera
  [KotaIndonesia.Medan]: { latitude: 3.5952, longitude: 98.6722 },
  [KotaIndonesia.Palembang]: { latitude: -2.9909, longitude: 104.7567 },
  [KotaIndonesia.Padang]: { latitude: -0.9471, longitude: 100.4172 },
  [KotaIndonesia.Pekanbaru]: { latitude: 0.5071, longitude: 101.4478 },
  [KotaIndonesia.Bandar_Lampung]: { latitude: -5.4291, longitude: 105.2611 },
  [KotaIndonesia.Batam]: { latitude: 1.1301, longitude: 104.0523 },
  [KotaIndonesia.Jambi]: { latitude: -1.6101, longitude: 103.6131 },
  [KotaIndonesia.Bengkulu]: { latitude: -3.8004, longitude: 102.2655 },
  [KotaIndonesia.Binjai]: { latitude: 3.6001, longitude: 98.4854 },
  [KotaIndonesia.Bukittinggi]: { latitude: -0.3056, longitude: 100.3692 },
  [KotaIndonesia.Dumai]: { latitude: 1.6670, longitude: 101.4429 },
  [KotaIndonesia.Gunungsitoli]: { latitude: 1.2803, longitude: 97.6150 },
  [KotaIndonesia.Langsa]: { latitude: 4.4700, longitude: 97.9682 },
  [KotaIndonesia.Lhokseumawe]: { latitude: 5.1801, longitude: 97.1507 },
  [KotaIndonesia.Lubuklinggau]: { latitude: -3.2967, longitude: 102.8617 },
  [KotaIndonesia.Metro]: { latitude: -5.1136, longitude: 105.3067 },
  [KotaIndonesia.Padang_Panjang]: { latitude: -0.4580, longitude: 100.3995 },
  [KotaIndonesia.Padang_Sidempuan]: { latitude: 1.3787, longitude: 99.2734 },
  [KotaIndonesia.Pagar_Alam]: { latitude: -4.0216, longitude: 103.2469 },
  [KotaIndonesia.Pangkalpinang]: { latitude: -2.1316, longitude: 106.1139 },
  [KotaIndonesia.Pariaman]: { latitude: -0.6268, longitude: 100.1200 },
  [KotaIndonesia.Payakumbuh]: { latitude: -0.2159, longitude: 100.6334 },
  [KotaIndonesia.Pematangsiantar]: { latitude: 2.9600, longitude: 99.0600 },
  [KotaIndonesia.Prabumulih]: { latitude: -3.4206, longitude: 104.2229 },
  [KotaIndonesia.Sabang]: { latitude: 5.8933, longitude: 95.3164 },
  [KotaIndonesia.Sibolga]: { latitude: 1.7370, longitude: 98.7791 },
  [KotaIndonesia.Sungai_Penuh]: { latitude: -2.0561, longitude: 101.3913 },
  [KotaIndonesia.Tanjungbalai]: { latitude: 2.9667, longitude: 99.8000 },
  [KotaIndonesia.Tanjungpinang]: { latitude: 0.9188, longitude: 104.4583 },
  [KotaIndonesia.Tebing_Tinggi]: { latitude: 3.3263, longitude: 99.1625 },
  [KotaIndonesia.Banda_Aceh]: { latitude: 5.5483, longitude: 95.3238 },

  // Pulau Kalimantan
  [KotaIndonesia.Pontianak]: { latitude: -0.0263, longitude: 109.3425 },
  [KotaIndonesia.Balikpapan]: { latitude: -1.2654, longitude: 116.8311 },
  [KotaIndonesia.Banjarmasin]: { latitude: -3.3186, longitude: 114.5944 },
  [KotaIndonesia.Samarinda]: { latitude: -0.5022, longitude: 117.1536 },
  [KotaIndonesia.Palangkaraya]: { latitude: -2.2166, longitude: 113.9167 },
  [KotaIndonesia.Banjarbaru]: { latitude: -3.4422, longitude: 114.8327 },
  [KotaIndonesia.Singkawang]: { latitude: 0.9088, longitude: 108.9872 },
  [KotaIndonesia.Tarakan]: { latitude: 3.3274, longitude: 117.5785 },

  // Pulau Sulawesi
  [KotaIndonesia.Makassar]: { latitude: -5.1477, longitude: 119.4327 },
  [KotaIndonesia.Manado]: { latitude: 1.4748, longitude: 124.8421 },
  [KotaIndonesia.Palu]: { latitude: -0.8915, longitude: 119.8707 },
  [KotaIndonesia.Gorontalo]: { latitude: 0.5435, longitude: 123.0595 },
  [KotaIndonesia.Kendari]: { latitude: -3.9985, longitude: 122.5120 },
  [KotaIndonesia.Bitung]: { latitude: 1.4454, longitude: 125.1980 },
  [KotaIndonesia.Palopo]: { latitude: -2.9925, longitude: 120.1974 },
  [KotaIndonesia.Parepare]: { latitude: -4.0135, longitude: 119.6255 },
  [KotaIndonesia.Tomohon]: { latitude: 1.3256, longitude: 124.8039 },
  [KotaIndonesia.Kotamobagu]: { latitude: 0.7333, longitude: 124.3167 },

  // Pulau Bali dan Nusa Tenggara
  [KotaIndonesia.Denpasar]: { latitude: -8.6705, longitude: 115.2126 },
  [KotaIndonesia.Mataram]: { latitude: -8.5849, longitude: 116.1175 },
  [KotaIndonesia.Kupang]: { latitude: -10.1772, longitude: 123.6070 },
  [KotaIndonesia.Bima]: { latitude: -8.4601, longitude: 118.7267 },

  // Maluku dan Papua
  [KotaIndonesia.Ambon]: { latitude: -3.6954, longitude: 128.1814 },
  [KotaIndonesia.Jayapura]: { latitude: -2.5486, longitude: 140.6985 },
  [KotaIndonesia.Sorong]: { latitude: -0.8795, longitude: 131.2561 },
  [KotaIndonesia.Ternate]: { latitude: 0.7930, longitude: 127.3840 },
  [KotaIndonesia.Tidore]: { latitude: 0.6833, longitude: 127.4000 },
  [KotaIndonesia.Tual]: { latitude: -5.6288, longitude: 132.7518 },

  // Kategori Khusus
  [KotaIndonesia.Bali]: { latitude: -8.3405, longitude: 115.0920 }
};