import { RegionInfo } from '../types';

export interface GeographicFeature {
  id: string;
  name: string;
  type: 'river' | 'lake' | 'mountain' | 'city';
  description: string;
  x: number;
  y: number;
}

export const REGIONS_DATA: RegionInfo[] = [
  {
    id: 'karakalpakstan',
    name: 'Qoraqalpog‘iston Respublikasi',
    atlasName: 'QORAQALPOGHISTON RESPUBLIKASI',
    color: '#DE5135',
    darkColor: '#B83A20',
    center: 'Nukus shahri',
    areaKm2: 166600,
    population: '2.0 mln kishi',
    landscape: 'Ustyurt platosi, Quyi Amudaryo deltasi, Qizilqum va Orolqum cho‘llari',
    rivers: ['Amudaryo'],
    notableFeatures: [
      'I.V. Savitskiy nomidagi Qoraqalpog‘iston davlat san’at muzeyi ("Cho‘ldagi Luvr")',
      'Moynaqdagi "Kemalar qabristoni" va Orol dengizi sohillari',
      'Quyi Amudaryo davlat biosfera rezervati'
    ],
    economy: ['Tabiiy gaz va neft qazib olish', 'Qishloq xo‘jaligi (sholichilik)', 'Kimyo sanoati (Qo‘ng‘irot soda zavodi)'],
    climate: 'Keskin kontinental, juda quruq, qishi sovuq, yozi issiq va changli',
    // Accurate vector path matching reference atlas map
    pathData: 'M 75 75 L 195 65 L 205 95 L 210 120 L 225 155 L 240 180 L 290 160 L 320 200 L 370 295 L 340 380 L 295 440 L 245 425 L 260 370 L 245 350 L 190 340 L 175 320 L 140 335 L 120 380 L 95 380 L 75 460 L 40 460 L 65 240 Z',
    labelX: 185,
    labelY: 265,
    cities: [
      { name: 'Müynoq', x: 195, y: 140 },
      { name: 'Qünghirot', x: 175, y: 210 },
      { name: 'Nukus', x: 250, y: 275 }
    ]
  },
  {
    id: 'khorezm',
    name: 'Xorazm viloyati',
    atlasName: 'KHORAZM',
    color: '#119E9B',
    darkColor: '#0E7A77',
    center: 'Urganch shahri',
    areaKm2: 6300,
    population: '2.0 mln kishi',
    landscape: 'Amudaryoning quyi oqimi, ekin maydonlari va vohalar, Qoraqum cho‘liga tutash tekislik',
    rivers: ['Amudaryo', 'Shovot va Toshsoqa kanallari'],
    notableFeatures: [
      'Xiva shahridagi Ichan Qal’a (UNESCO butunjahon merosi ob’ekti)',
      'Qadimiy qal’alar: Tuproqqal’a, Qizilqal’a',
      'Pahlavon Mahmud maqbarasi va Kalta Minor'
    ],
    economy: ['Turizm va hunarmandchilik', 'Avtomobilsozlik (Damash va Labo)', 'Sholichilik va paxtachilik'],
    climate: 'Kontinental, quruq, qishi nisbatan sovuq, yozi issiq',
    pathData: 'M 245 350 L 260 370 L 245 425 L 270 440 L 305 435 L 315 470 L 340 480 L 360 445 L 305 385 L 265 355 Z',
    labelX: 300,
    labelY: 420,
    cities: [
      { name: 'Urganch', x: 295, y: 395 },
      { name: 'Xiva', x: 285, y: 440 }
    ]
  },
  {
    id: 'navoiy',
    name: 'Navoiy viloyati',
    atlasName: 'NAWOIY',
    color: '#7C5441',
    darkColor: '#633F2E',
    center: 'Navoiy shahri',
    areaKm2: 110800,
    population: '1.1 mln kishi',
    landscape: 'Qizilqum cho‘lining markaziy qismi, Nurota tog‘ tizmasi, Tomditov va Bo‘kantov qoldiq tog‘lari',
    rivers: ['Zarafshon daryosi (janubiy qismida)'],
    notableFeatures: [
      'Muruntov oltin koni (dunyodagi eng katta ochiq kon)',
      'Sarmishsoy qoyatosh rasmlari (petrogliflar)',
      'Aydarko‘l sohillari va Raboti Malik karvonsaroyi'
    ],
    economy: ['Kon-metallurgiya sanoati (NKMK)', 'Kimyo sanoati (Navoiyazot)', 'Qurilish materiallari (sement, marmar)'],
    climate: 'Keskin kontinental, juda issiq yoz va kam yog‘inli quruq iqlim',
    pathData: 'M 320 200 L 370 295 L 340 380 L 360 445 L 400 445 L 435 480 L 480 465 L 515 435 L 530 450 L 525 480 L 555 460 L 585 410 L 565 340 L 570 310 L 545 300 L 540 260 L 485 245 L 465 200 L 415 190 Z',
    labelX: 450,
    labelY: 285,
    cities: [
      { name: 'Uchquduq', x: 455, y: 310 },
      { name: 'Zarafshon', x: 435, y: 355 },
      { name: 'Nawoiy', x: 520, y: 445 }
    ]
  },
  {
    id: 'bukhara',
    name: 'Buxoro viloyati',
    atlasName: 'BUKHORO',
    color: '#EE9D2D',
    darkColor: '#C47C18',
    center: 'Buxoro shahri',
    areaKm2: 39400,
    population: '2.0 mln kishi',
    landscape: 'Zarafshon daryosining quyi havzasi, Qizilqum cho‘li bilan chegaradosh vohalar',
    rivers: ['Zarafshon daryosi', 'Amu-Buxoro mashina kanali'],
    notableFeatures: [
      'Somoniylar maqbarasi va Minorai Kalon',
      'Ark qal’asi va Labi Hovuz majmuasi',
      'Jayron ekologik markazi (pitomnigi)'
    ],
    economy: ['Xalqaro turizm', 'Gaz va neftni qayta ishlash (Qorovulbozor NEZ, Gazli)', 'To‘qimachilik va ipakchilik'],
    climate: 'Keskin kontinental, yillik yog‘in 120-150 mm',
    pathData: 'M 360 445 L 400 445 L 435 480 L 480 465 L 510 500 L 490 530 L 455 550 L 420 535 L 375 490 L 360 480 Z',
    labelX: 420,
    labelY: 490,
    cities: [
      { name: 'Bukhoro', x: 445, y: 495 },
      { name: 'Qorako‘l', x: 405, y: 525 }
    ]
  },
  {
    id: 'samarkand',
    name: 'Samarqand viloyati',
    atlasName: 'SAMARQAND',
    color: '#119E9B',
    darkColor: '#0E7A77',
    center: 'Samarqand shahri',
    areaKm2: 16400,
    population: '4.2 mln kishi',
    landscape: 'Zarafshon vodiysi, Zarafshon va Turkiston tog‘ tizmalari etaklari, unumdor bo‘z tuproqli vohalar',
    rivers: ['Zarafshon daryosi', 'Qoradaryo', 'Oqdaryo'],
    notableFeatures: [
      'Registon maydoni, Go‘ri Amir va Bibixonim madrasasi',
      'Mirzo Ulug‘bek rasadxonasi va Shohi Zinda majmuasi',
      'Omonqo‘ton g‘ori va Zarafshon milliy tabiat bog‘i'
    ],
    economy: ['Turizm va servis', 'Mashinasozlik (SamAuto avtobuslari, MAN)', 'Uzumchilik, bog‘dorchilik va oziq-ovqat sanoati'],
    climate: 'Mo‘tadil kontinental, qishi yumshoq, yozi issiq va quruq',
    pathData: 'M 480 465 L 515 435 L 530 450 L 525 480 L 555 460 L 575 450 L 600 480 L 610 520 L 565 525 L 535 520 L 510 500 Z',
    labelX: 565,
    labelY: 485,
    cities: [
      { name: 'Samarqand', x: 575, y: 480 },
      { name: 'Kattaqo‘rg‘on', x: 535, y: 465 }
    ]
  },
  {
    id: 'kashkadarya',
    name: 'Qashqadaryo viloyati',
    atlasName: 'QASHQADARYO',
    color: '#E44126',
    darkColor: '#B62C15',
    center: 'Qarshi shahri',
    areaKm2: 28400,
    population: '3.5 mln kishi',
    landscape: 'Qarshi dashti, Zarafshon va Hisor tog‘lari etaklari, Qizilqum cho‘li bilan tutashgan tekisliklar',
    rivers: ['Qashqadaryo', 'Oqsuv', 'Qarshi magistral kanali'],
    notableFeatures: [
      'Shahrisabzdagi Oqsaroy majmuasi (UNESCO ro‘yxatida)',
      'Amir Temur tug‘ilgan Xo‘ja Ilg‘or qishlog‘i',
      'Qarshi ko‘prigi (qadimiy g‘ishtin ko‘prik)'
    ],
    economy: ['Gaz-kimyo sanoati (Sho‘rtan gaz-kimyo majmuasi, GTL zavodi)', 'G‘allachilik va paxtachilik', 'Qorako‘lchilik'],
    climate: 'Keskin kontinental, yoz oylari juda issiq va quruq',
    pathData: 'M 455 550 L 490 530 L 510 500 L 535 520 L 565 525 L 610 520 L 620 545 L 605 585 L 575 620 L 525 610 L 485 575 Z',
    labelX: 540,
    labelY: 560,
    cities: [
      { name: 'Qarshi', x: 545, y: 565 },
      { name: 'Shahrisabz', x: 590, y: 535 }
    ]
  },
  {
    id: 'surkhandarya',
    name: 'Surxondaryo viloyati',
    atlasName: 'SURKHONDARYO',
    color: '#7C5441',
    darkColor: '#633F2E',
    center: 'Termiz shahri',
    areaKm2: 20100,
    population: '2.8 mln kishi',
    landscape: 'Surxon-Sherobod vodiysi, Hisor, Bobotog‘ va Ko‘hitang tog‘lari bilan o‘ralgan subtropik voha',
    rivers: ['Amudaryo', 'Surxondaryo', 'Sheroboddaryo', 'To‘palangdaryo'],
    notableFeatures: [
      'Termiz arxeologiya muzeyi va Qirqqiz qal’asi',
      'Hakim at-Termiziy va Sulton Saodat majmualari',
      'Boysun tog‘lari ("Boysun bahori" xalqaro festivali, UNESCO)',
      'Hazrat Sulton cho‘qqisi (4643 m, O‘zbekistonning eng baland nuqtasi)'
    ],
    economy: ['Subtropik dehqonchilik (anor, xurmo, yupqa tolali paxta)', 'Ko‘mir qazib olish (Sharg‘un, Boysun)', 'Gidroenergetika (To‘palang GES)'],
    climate: 'Quruq subtropik, eng issiq va oftobli hudud, qishi iliq',
    pathData: 'M 575 620 L 605 585 L 620 545 L 640 550 L 655 575 L 675 620 L 650 670 L 610 675 L 585 645 Z',
    labelX: 625,
    labelY: 625,
    cities: [
      { name: 'Denow', x: 645, y: 585 },
      { name: 'Termiz', x: 620, y: 655 }
    ]
  },
  {
    id: 'jizzakh',
    name: 'Jizzax viloyati',
    atlasName: 'JIZZAKH',
    color: '#F2AB2A',
    darkColor: '#C98B18',
    center: 'Jizzax shahri',
    areaKm2: 21200,
    population: '1.5 mln kishi',
    landscape: 'Mirzacho‘lning janubiy qismi, Nurota va Turkiston tog‘ tizmalari, Aydarko‘l sohillari',
    rivers: ['Sanzar daryosi', 'Janubiy Mirzacho‘l kanali'],
    notableFeatures: [
      'Zomin milliy tabiat bog‘i va sharsharalari ("O‘zbekiston Shveytsariyasi")',
      'Temur darvozasi (Ilono‘tti darasi)',
      'Nurota davlat tog‘-yong‘oqzor qo‘riqxonasi'
    ],
    economy: ['Avtomobilsozlik (ADM Jizzax)', 'G‘allachilik va paxtachilik', 'Qurilish materiallari va tog‘ turizmi'],
    climate: 'Quruq kontinental, tog‘li qismlarida salqin va xushmanzara',
    pathData: 'M 585 410 L 565 340 L 585 330 L 615 350 L 635 375 L 645 425 L 635 480 L 600 480 L 575 450 L 555 460 Z',
    labelX: 615,
    labelY: 410,
    cities: [
      { name: 'Jizzakh', x: 630, y: 440 },
      { name: 'Zomin', x: 620, y: 475 }
    ]
  },
  {
    id: 'syrdarya',
    name: 'Sirdaryo viloyati',
    atlasName: 'SIRDARYO',
    color: '#DD5841',
    darkColor: '#B63D28',
    center: 'Guliston shahri',
    areaKm2: 4300,
    population: '0.9 mln kishi',
    landscape: 'Mirzacho‘l tekisligi, Sirdaryo daryosi sohili, dehqonchilik maydonlari',
    rivers: ['Sirdaryo', 'Do‘stlik va Janubiy Mirzacho‘l kanallari'],
    notableFeatures: [
      'Sirdaryo issiqlik elektr stansiyasi (Shirin shahrida)',
      'Mirzacho‘l o‘zlashtirilgan dehqonchilik maydonlari',
      'Sirdaryo sohilidagi baliqchilik ko‘llari'
    ],
    economy: ['Elektr energiyasi ishlab chiqarish (Sirdaryo IES)', 'Paxtachilik va g‘allachilik', 'Qovunchilik va sabzavotchilik'],
    climate: 'Kontinental, shamolli, yillik yog‘in 200–250 mm',
    pathData: 'M 635 375 L 655 355 L 685 365 L 685 410 L 665 440 L 645 425 Z',
    labelX: 665,
    labelY: 395,
    cities: [
      { name: 'Guliston', x: 675, y: 390 },
      { name: 'Shirin', x: 670, y: 430 }
    ]
  },
  {
    id: 'tashkent-region',
    name: 'Toshkent viloyati',
    atlasName: 'TOSHKENT',
    color: '#7C5441',
    darkColor: '#633F2E',
    center: 'Nurafshon shahri',
    areaKm2: 15300,
    population: '3.1 mln kishi',
    landscape: 'Chirchiq va Ohangaron daryolari vodiylari, G‘arbiy Tyanshan (Chotqol, Qurama, Piskom) tog‘lari',
    rivers: ['Chirchiq', 'Ohangaron', 'Sirdaryo'],
    notableFeatures: [
      'Chorvoq suv ombori va Chimyon tog‘ kurorti',
      'Amirsoy dam olish maskani',
      'Chotqol davlat biosfera qo‘riqxonasi'
    ],
    economy: ['Ko‘mir qazib olish (Angren)', 'Rangli metallurgiya (Olmaliq)', 'Qishloq xo‘jaligi va tog‘ turizmi'],
    climate: 'Mo‘tadil kontinental, tog‘larda yog‘ingarchilik 800-1000 mm gacha yetadi',
    pathData: 'M 685 365 L 705 320 L 735 285 L 785 240 L 795 260 L 765 310 L 760 350 L 735 390 L 685 410 Z',
    labelX: 735,
    labelY: 310,
    cities: [
      { name: 'Tashkent', x: 710, y: 335, isCapital: true },
      { name: 'Chirchiq', x: 735, y: 305 },
      { name: 'Angren', x: 755, y: 360 }
    ]
  },
  {
    id: 'tashkent-city',
    name: 'Toshkent shahri',
    atlasName: 'TOSHKENT SHAHRI',
    color: '#1E3A8A',
    darkColor: '#1E40AF',
    center: 'Toshkent',
    areaKm2: 435,
    population: '3.1 mln kishi',
    landscape: 'Chirchiq daryosi vodiysidagi qadimiy voha, Toshkent kanallari (Bo‘zsuv, Anhor, Salor)',
    rivers: ['Bo‘zsuv', 'Anhor', 'Salor kanallari'],
    notableFeatures: [
      'Toshkent teleminorasi (375 m, Markaziy Osiyodagi eng baland inshoot)',
      'Mustaqillik maydoni va Hazrati Imom (Hastimom) majmuasi (Usmon Mus’hafi)',
      'Toshkent metropoliteni (Markaziy Osiyodagi birinchi metro)'
    ],
    economy: ['Axborot texnologiyalari va moliya markazi', 'Mashinasozlik va farmatsevtika', 'Oliy ta’lim va ilmiy-tadqiqot markazi'],
    climate: 'Kontinental, 4 fasl aniq namoyon bo‘ladi',
    pathData: 'M 700 330 L 715 325 L 725 340 L 710 345 Z',
    labelX: 710,
    labelY: 335,
    cities: [
      { name: 'Tashkent (Poytaxt)', x: 710, y: 335, isCapital: true }
    ]
  },
  {
    id: 'namangan',
    name: 'Namangan viloyati',
    atlasName: 'NAMANGAN',
    color: '#119E9B',
    darkColor: '#0E7A77',
    center: 'Namangan shahri',
    areaKm2: 7900,
    population: '3.1 mln kishi',
    landscape: 'Farg‘ona vodiysining shimoliy qismi, Chotqol va Qurama tog‘lari etaklari',
    rivers: ['Sirdaryo', 'Norin daryosi', 'Kosonsoy'],
    notableFeatures: [
      'Axsikent qadimiy arxeologik yodgorligi',
      'Namangan xalqaro gullar festivali',
      'Chortoq shifobaxsh ma’danli suvlari'
    ],
    economy: ['To‘qimachilik va tikuvchilik sanoati', 'Bog‘dorchilik (olma, anjir, o‘rik)', 'Gidroenergetika'],
    climate: 'Kontinental, tog‘ shamollari esib turadigan salqin iqlim',
    pathData: 'M 760 350 L 785 305 L 820 300 L 840 330 L 830 365 L 785 365 Z',
    labelX: 810,
    labelY: 325,
    cities: [
      { name: 'Namangan', x: 815, y: 345 }
    ]
  },
  {
    id: 'andijan',
    name: 'Andijon viloyati',
    atlasName: 'ANDIJON',
    color: '#F2AB2A',
    darkColor: '#C98B18',
    center: 'Andijon shahri',
    areaKm2: 4200,
    population: '3.4 mln kishi',
    landscape: 'Farg‘ona vodiysining sharqiy etaklari, adirlar va unumdor ekinzorlar (aholi eng zich hudud)',
    rivers: ['Qoradaryo', 'Andijonsoy', 'Katta Farg‘ona kanali'],
    notableFeatures: [
      'Zahiriddin Muhammad Bobur memorial bog‘i',
      'Andijon suv ombori (Xonobod)',
      'Bog‘i Shamol xiyoboni'
    ],
    economy: ['Avtomobilsozlik (Asaka UzAuto Motors)', 'Paxtachilik va ipakchilik', 'Hunarmandchilik va sabzavotchilik'],
    climate: 'Iliq mo‘tadil kontinental, shamolsiz tinch vodiy iqlimi',
    pathData: 'M 830 365 L 865 355 L 895 365 L 890 395 L 850 405 L 830 380 Z',
    labelX: 870,
    labelY: 375,
    cities: [
      { name: 'Andijon', x: 875, y: 380 }
    ]
  },
  {
    id: 'fergana',
    name: 'Farg‘ona viloyati',
    atlasName: 'FARGHONA',
    color: '#DE5135',
    darkColor: '#B83A20',
    center: 'Farg‘ona shahri',
    areaKm2: 6800,
    population: '4.1 mln kishi',
    landscape: 'Farg‘ona vodiysining janubiy qismi, Olay tizmasi tog‘ etaklari, Markaziy Farg‘ona qumliklari',
    rivers: ['Sirdaryo', 'Isfayramsoy', 'Shohimardonsoy', 'Katta Farg‘ona kanali'],
    notableFeatures: [
      'Qo‘qon shahridagi Xudoyorxon o‘rdasi',
      'Rishton kulolchilik san’ati markazi',
      'Shohimardon va Chortoq so‘lim tog‘ maskanlari'
    ],
    economy: ['Neftni qayta ishlash (Farg‘ona NQIZ)', 'Kimyo va to‘qimachilik sanoati', 'Hunarmandchilik va bog‘dorchilik'],
    climate: 'Mo‘tadil kontinental, qishi yumshoq, yozi issiq',
    pathData: 'M 735 390 L 785 365 L 830 380 L 850 405 L 840 435 L 785 435 L 745 420 Z',
    labelX: 810,
    labelY: 410,
    cities: [
      { name: 'Qöqon', x: 775, y: 405 },
      { name: 'Farghona', x: 830, y: 415 }
    ]
  }
];

export const GEOGRAPHIC_LANDMARKS: GeographicFeature[] = [
  { id: 'tashkent-pt', name: 'Toshkent', type: 'city', description: 'O‘zbekiston poytaxti, 3+ mln aholi', x: 710, y: 335 },
  { id: 'samarkand-pt', name: 'Samarqand', type: 'city', description: 'Registon maydoni, qadimiy poytaxt', x: 575, y: 480 },
  { id: 'bukhara-pt', name: 'Buxoro', type: 'city', description: 'Minorai Kalon, qadimiy savdo shahri', x: 445, y: 495 },
  { id: 'khiva-pt', name: 'Xiva', type: 'city', description: 'Ichan Qal’a, ochiq osmon ostidagi muzey', x: 285, y: 440 },
  { id: 'nukus-pt', name: 'Nukus', type: 'city', description: 'Qoraqalpog‘iston markazi, Savitskiy muzeyi', x: 250, y: 275 },
  { id: 'termiz-pt', name: 'Termiz', type: 'city', description: 'Eng janubiy shahar, Do‘stlik ko‘prigi', x: 620, y: 655 },
  { id: 'andijan-pt', name: 'Andijon', type: 'city', description: 'Bobur yurti, Asaka avtozavodi', x: 875, y: 380 },
  { id: 'namangan-pt', name: 'Namangan', type: 'city', description: 'Gullar shahri, to‘qimachilik markazi', x: 815, y: 345 },
  { id: 'fergana-pt', name: 'Farg‘ona', type: 'city', description: 'Chinorlar shahri, neftni qayta ishlash', x: 830, y: 415 },
  { id: 'hazrat-sulton', name: 'Hazrat Sulton (4643 m)', type: 'mountain', description: 'O‘zbekistonning eng baland cho‘qqisi', x: 635, y: 550 },
  { id: 'amudaryo', name: 'Amudaryo daryosi', type: 'river', description: 'Eng sersuv daryo (2540 km)', x: 380, y: 510 },
  { id: 'sirdaryo', name: 'Sirdaryo daryosi', type: 'river', description: 'Eng uzun daryo (3019 km)', x: 675, y: 360 },
  { id: 'zarafshon', name: 'Zarafshon daryosi', type: 'river', description: 'Samarqand va Buxoroni sug‘oruvchi daryo', x: 500, y: 450 },
  { id: 'aydarkol', name: 'Aydarko‘l ko‘li', type: 'lake', description: 'Cho‘l bag‘ridagi ulkan ko‘l', x: 550, y: 340 },
  { id: 'chorvoq', name: 'Chorvoq suv ombori', type: 'lake', description: 'G‘arbiy Tyanshan tog‘lari bag‘ridagi marvarid', x: 745, y: 290 }
];
