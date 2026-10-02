import { Lesson } from '../types';

export const LESSONS_DATA: Lesson[] = [
  {
    id: 1,
    slug: 'geografiya-faniga-kirish',
    order: 1,
    title: 'Geografiya faniga kirish',
    shortDescription: 'Geografiya fani nimani o‘rganadi, uning kelib chiqishi va zamonaviy ahamiyati haqida asosiy tushunchalar.',
    difficulty: 'Oson',
    durationMinutes: 15,
    category: 'Umumiy tushunchalar',
    objectives: [
      'Geografiya so‘zining ma’nosi va kelib chiqishini bilib olish',
      'Tabiiy va iqtisodiy-ijtimoiy geografiyaning farqini tushunish',
      'O‘zbekiston tabiatini o‘rganish nima uchun muhimligini anglash'
    ],
    sections: [
      {
        heading: 'Geografiya so‘zining kelib chiqishi',
        content: '“Geografiya” qadimgi yunoncha so‘z bo‘lib, “geo” — Yer va “grafein” — yozaman, tasvirlayman degan ma’nolarni bildiradi, ya’ni “Yerning tasviri” demakdir. Bu atamani fanga miloddan avvalgi III asrda yashagan qadimgi yunon olimi Eratosfen kiritgan.',
        subpoints: [
          'Eratosfen birinchi bo‘lib Yer sharining o‘lchamini katta aniqlik bilan hisoblab chiqqan',
          'Geografiya eng qadimgi fanlardan biri hisoblanadi',
          'Hozirgi kunda geografiya shunchaki tasvirlash emas, balki tabiat va inson o‘rtasidagi bog‘liqlikni tadqiq qiluvchi fandir'
        ]
      },
      {
        heading: 'Geografiya fanining asosiy tarmoqlari',
        content: 'Zamonaviy geografiya fani ikki yirik sohaga bo‘linadi: Tabiiy geografiya (fizik geografiya) — Yer yuzasining tabiiy sharoiti, tog‘lar, daryolar, iqlim va tuproqni o‘rganadi. Iqtisodiy va ijtimoiy geografiya esa aholi, sanoat, qishloq xo‘jaligi va shaharlarni o‘rganadi.'
      },
      {
        heading: 'Buyuk allomalarimizning geografiyaga hissasi',
        content: 'O‘rta Osiyo mutafakkirlari Muhammad al-Xorazmiy, Abu Rayhon Beruniy, Mahmud Qoshg‘ariy va Mirzo Ulug‘bek jahon geografiya faniga ulkan hissa qo‘shganlar. Xususan, Abu Rayhon Beruniy Yer radiusini juda aniq hisoblab, g‘arbda hali noma’lum bo‘lgan qit’a (Amerika) mavjudligini bashorat qilgan.'
      }
    ],
    keyFacts: [
      '“Geografiya” atamasi fanga Eratosfen tomonidan kiritilgan.',
      'Abu Rayhon Beruniy Yerning aylanasi va radiusini aniq hisoblagan.',
      'O‘zbekiston tabiiy geografiyasi Turon tekisligi va O‘rta Osiyo tog‘ tizimlarini qamrab oladi.'
    ],
    keyTerms: ['Geografiya', 'Eratosfen', 'Tabiiy geografiya', 'Iqtisodiy geografiya', 'Globus'],
    summary: 'Geografiya — Yer sayyorasi, uning tabiati, boyliklari va aholisini o‘rganuvchi asosiy tabiatshunoslik fanidir.'
  },
  {
    id: 2,
    slug: 'geografik-xaritalar-va-masshtab',
    order: 2,
    title: 'Geografik xaritalar va masshtab',
    shortDescription: 'Globus, geografik xarita turlari, shartli belgilar hamda masshtab yordamida masofalarni aniqlash qoidalari.',
    difficulty: 'O‘rtacha',
    durationMinutes: 20,
    category: 'Xaritashunoslik',
    objectives: [
      'Globus va geografik xaritaning farqini aniqlash',
      'Masshtab turlari (sonli, nomli, chiziqli) bilan ishlashni o‘rganish',
      'Xaritalardagi shartli belgilar va ranglar mohiyatini bilish'
    ],
    sections: [
      {
        heading: 'Globus va xarita',
        content: 'Globus — Yerning kichraytirilgan uch o‘lchamli modeli hisoblanadi. Geografik xarita esa Yer yuzasi yoki uning ma’lum bir qismining tekislikda (qog‘ozda) masshtab va shartli belgilar yordamida kichraytirib tasvirlangan shaklidir.',
        subpoints: [
          'Globusda quruqlik va okeanlar shakli buzilmasdan aks etadi',
          'Xaritada kattaroq hududlarni bir qarashda ko‘rish qulay',
          'Xaritalar mavzusiga ko‘ra umumgeografik va maxsus (iqlim, relyef, siyosiy) xaritalarga bo‘linadi'
        ]
      },
      {
        heading: 'Masshtab va uning turlari',
        content: 'Masshtab — yer yuzidagi haqiqiy masofa xaritada necha marta kichraytirilganini ko‘rsatuvchi kasr sondir. Masalan, 1:1 000 000 masshtab xaritadagi 1 sm yer yuzidagi 1 000 000 sm, ya’ni 10 km ga teng ekanligini bildiradi.'
      },
      {
        heading: 'Xaritalardagi balandlik va chuqurlik ranglari',
        content: 'Fizik xaritalarda balandliklar va chuqurliklar qatlamlar ranglari orqali belgilanadi. Yashil rang — pasttekisliklarni, sariq va jigarrang — qirlar va baland tog‘larni, ko‘k rang esa dengiz va ko‘llarni bildiradi.'
      }
    ],
    keyFacts: [
      'Masshtab 3 xil bo‘ladi: sonli, nomli va chiziqli.',
      'Parallellar va meridianlar kesishuvidan daraja to‘ri (geografik koordinatalar) hosil bo‘ladi.',
      'Xaritaning pastki qismida joylashgan shartli belgilar to‘plami legenda deyiladi.'
    ],
    keyTerms: ['Masshtab', 'Legenda', 'Meridian', 'Parallel', 'Koordinata'],
    summary: 'Xaritalar — geografiyaning tili bo‘lib, Yer yuzasining makoniy xususiyatlarini masshtab orqali o‘rganishga xizmat qiladi.'
  },
  {
    id: 3,
    slug: 'ozbekistonning-geografik-orni',
    order: 3,
    title: 'O‘zbekistonning geografik o‘rni',
    shortDescription: 'O‘zbekistonning Yevrosiyo qit’asidagi o‘rni, dengizlardan uzoqligi va qo‘shni davlatlar bilan chegaralari.',
    difficulty: 'Oson',
    durationMinutes: 18,
    category: 'Hudud va joylashuv',
    objectives: [
      'O‘zbekistonning jahon xaritasidagi o‘rnini ko‘rsata olish',
      'Mamlakatimiz qaysi davlatlar bilan chegaradosh ekanini bilish',
      '“Double landlocked” (dengizga chiqish uchun ikki davlat osha o‘tish) tushunchasini o‘rganish'
    ],
    sections: [
      {
        heading: 'Markaziy Osiyodagi markaziy o‘rin',
        content: 'O‘zbekiston Respublikasi Markaziy Osiyoning qoq o‘rtasida joylashgan. U shimol va shimoli-sharqda Qozog‘iston, sharq va janubi-sharqda Qirg‘iziston va Tojikiston, janubda Afg‘oniston, janubi-g‘arbda esa Turkmaniston bilan chegaradosh.',
        subpoints: [
          'O‘zbekiston mintaqadagi barcha 5 ta davlat bilan bevosita chegaradosh yagona davlatdir',
          'Chegaralarning umumiy uzunligi qariyb 7000 kilometrni tashkil etadi',
          'Afg‘oniston bilan chegara Amudaryo orqali o‘tadi va Termiz shahri yaqinidagi Do‘stlik ko‘prigi bilan bog‘lanadi'
        ]
      },
      {
        heading: 'Dunyo okeanidan uzoqlik',
        content: 'O‘zbekiston dunyo okeanidan eng uzoq masofada joylashgan davlatlardan biri. Dunyoda ochiq okeanga chiqish uchun kamida ikki davlat chegarasini kesib o‘tish lozim bo‘lgan ikkita davlat bor: O‘zbekiston va Lixtenshteyn.'
      }
    ],
    keyFacts: [
      'O‘zbekiston Markaziy Osiyoning barcha mamlakatlari bilan chegaradosh.',
      'Eng qisqa xalqaro chegara Afg‘oniston bilan (137 km).',
      'O‘zbekiston dunyodagi ikkita "ikki qavatli quruqlik ichi" (double landlocked) davlatning biridir.'
    ],
    keyTerms: ['Markaziy Osiyo', 'Chegara', 'Do‘stlik ko‘prigi', 'Quruqlik ichidagi davlat'],
    summary: 'O‘zbekiston Markaziy Osiyo markazida qulay tranzit va geosiyosiy chorrahada joylashgan bo‘lib, 5 ta qo‘shni davlat bilan chegaradosh.'
  },
  {
    id: 4,
    slug: 'ozbekiston-hududi-va-chegaralari',
    order: 4,
    title: 'O‘zbekiston hududi va chegaralari',
    shortDescription: 'O‘zbekiston maydoni, chekka nuqtalari, ma’muriy-hududiy bo‘linishi va mintaqaviy xususiyatlari.',
    difficulty: 'O‘rtacha',
    durationMinutes: 18,
    category: 'Hudud va joylashuv',
    objectives: [
      'O‘zbekiston maydonining o‘lchamini eslab qolish',
      'Mamlakatimizning to‘rtta chekka nuqtasini xaritada aniqlash',
      '12 ta viloyat, Qoraqalpog‘iston Respublikasi va Toshkent shahrini bilish'
    ],
    sections: [
      {
        heading: 'Hudud maydoni va o‘lchamlari',
        content: 'O‘zbekiston Respublikasining umumiy maydoni 448,9 ming kvadrat kilometrni tashkil etadi. Hududining kattaligi bo‘yicha O‘zbekiston Buyuk Britaniya, Italiya kabi davlatlardan kattaroqdir. G‘arbdan sharqqa tomon cho‘zilishi taxminan 1425 km, shimoldan janubga esa 925 km ni tashkil etadi.'
      },
      {
        heading: 'Chekka nuqtalar',
        content: 'O‘zbekistonning to‘rtta asosiy geografik chekka nuqtalari quyidagilardir:',
        subpoints: [
          'Shimoliy chekka nuqta — Ustyurt platosining shimoliy qismi (Qoraqalpog‘iston)',
          'Janubiy chekka nuqta — Surxondaryo viloyatining Termiz shahri yaqini (Afg‘oniston chegarasi)',
          'G‘arbiy chekka nuqta — Ustyurt platosining g‘arbi (Qoraqalpog‘iston)',
          'Sharqiy chekka nuqta — Andijon viloyatining Xonobod shahri atrofi'
        ]
      },
      {
        heading: 'Ma’muriy tuzilishi',
        content: 'Mamlakatimiz tarkibiga Qoraqalpog‘iston Respublikasi, 12 ta viloyat (Andijon, Buxoro, Farg‘ona, Jizzax, Xorazm, Namangan, Navoiy, Qashqadaryo, Samarqand, Sirdaryo, Surxondaryo, Toshkent viloyati) hamda respublika ahamiyatiga ega bo‘lgan Toshkent shahri kiradi.'
      }
    ],
    keyFacts: [
      'O‘zbekiston maydoni 448 900 km².',
      'Sharqdan g‘arbgacha masofa 1425 km.',
      'O‘zbekiston tarkibida 12 ta viloyat, Toshkent shahri va Qoraqalpog‘iston Respublikasi mavjud.'
    ],
    keyTerms: ['448.9 ming km²', 'Chekka nuqta', 'Qoraqalpog‘iston', 'Viloyat'],
    summary: 'O‘zbekiston ulkan maydon va xilma-xil ma’muriy birlashmalarga ega bo‘lib, g‘arbdan sharqqa keng cho‘zilgan davlatdir.'
  },
  {
    id: 5,
    slug: 'ozbekiston-relyefi',
    order: 5,
    title: 'O‘zbekiston relyefi',
    shortDescription: 'Tekisliklar, qirlar, platolar, Tyanshan va Hisor-Olay tog‘ tizimlari, O‘zbekistonning eng baland cho‘qqisi.',
    difficulty: 'O‘rtacha',
    durationMinutes: 22,
    category: 'Tabiat va yer yuzasi',
    objectives: [
      'Relyefning asosiy shakllari (tekislik va tog‘lar) nisbatini bilish',
      'Qizilqum, Ustyurt, Qarshi dashtining joylashuvini o‘rganish',
      'Mamlakatimizning eng baland cho‘qqisini aniqlash'
    ],
    sections: [
      {
        heading: 'Relyefning umumiy xususiyati',
        content: 'O‘zbekiston relyefi xilma-xil bo‘lib, asosan ikki qismga bo‘linadi: tekisliklar (hududning taxminan 78-80 foizi) va tog‘lar hamda tog‘oldi qirlari (hududning 20-22 foizi). Hudud g‘arbdan sharqqa tomon asta-sekin ko‘tarilib boradi.'
      },
      {
        heading: 'Tekisliklar va cho‘llar',
        content: 'Mamlakatimizning g‘arbiy va shimoliy qismlarini Turon pasttekisligi, Qizilqum cho‘li va Ustyurt platosi egallagan. Shuningdek, Mirzacho‘l, Qarshi dashti va Markaziy Farg‘ona kabi keng tekisliklar mavjud.',
        subpoints: [
          'Qizilqum — O‘zbekistonning eng katta qumli cho‘li',
          'Ustyurt platosi — tik qoyali qirlar (chinklar) bilan o‘ralgan baland tekislik',
          'Eng past botiq — Qoraqalpog‘istondagi Mingbuloq botig‘i (dengiz sathidan -12 metr past)'
        ]
      },
      {
        heading: 'Tog‘ tizimlari va eng baland nuqta',
        content: 'Sharqiy va janubi-sharqiy hududlarda G‘arbiy Tyanshan (Chotqol, Qurama, Piskom tizmalari) va Hisor-Olay (Hisor, Zarafshon, Turkiston tizmalari) tog‘lari qad ko‘targan. O‘zbekistonning eng baland nuqtasi — Hisor tizmasidagi Hazrat Sulton cho‘qqisi bo‘lib, balandligi 4643 metrga yetadi.'
      }
    ],
    keyFacts: [
      'O‘zbekiston hududining qariyb 78% qismini tekisliklar tashkil qiladi.',
      'Eng baland nuqta: Hazrat Sulton cho‘qqisi (4643 m).',
      'Eng chuqur pastlik: Mingbuloq botig‘i (-12 m).'
    ],
    keyTerms: ['Relyef', 'Qizilqum', 'Ustyurt', 'Hazrat Sulton', 'G‘arbiy Tyanshan', 'Hisor-Olay'],
    summary: 'O‘zbekiston relyefi g‘arbdagi keng tekislik va cho‘llardan sharqdagi qorli muhtasham tog‘largacha xilma-xil landshaftlarni o‘z ichiga oladi.'
  },
  {
    id: 6,
    slug: 'foydali-qazilmalar',
    order: 6,
    title: 'Foydali qazilmalar',
    shortDescription: 'Oltin, tabiiy gaz, neft, ko‘mir, rangli metallar va O‘zbekistonning boy yerosti konlari.',
    difficulty: 'O‘rtacha',
    durationMinutes: 20,
    category: 'Yer boyliklari',
    objectives: [
      'Yonuvchi, rudali va noruda foydali qazilmalarni ajratish',
      'Muruntov oltin koni va Gazli gaz konining ahamiyatini bilish',
      'Tog‘-kon sanoatining yirik markazlarini xaritada aniqlash'
    ],
    sections: [
      {
        heading: 'Boy yerosti xazinasi',
        content: 'O‘zbekiston hududi Mendeleyev davriy jadvalidagi deyarli barcha kimyoviy elementlarga ega. Qazilma boyliklar paydo bo‘lishi va ishlatilishiga ko‘ra uch guruhga bo‘linadi: yoqilg‘i-energetika (gaz, neft, ko‘mir), rudali (oltin, mis, kumush, volfram, qo‘rg‘oshin) va noruda (toshko‘mir, marmar, fosforit, osh tuzi).'
      },
      {
        heading: 'Oltin va qimmatbaho metallar',
        content: 'Qizilqum cho‘lidagi Muruntov oltin koni jahondagi eng yirik ochiq usulda qazib olinadigan oltin konlaridan biridir. Zarafshon, Navoiy va Olmaliq shaharlarida yirik metallurgiya majmualari faoliyat yuritadi.',
        subpoints: [
          'Muruntov koni dunyodagi eng toza sifatli oltin beruvchi manbalardan biridir',
          'Olmaliq kon-metallurgiya kombinatida mis, molibden va kumush eritiladi'
        ]
      },
      {
        heading: 'Yoqilg‘i-energetika zaxiralari',
        content: 'Tabiiy gaz va neft konlari asosan Buxoro-Xiva (Gazli, Sho‘rtan, Muborak) hamda Surxondaryo va Ustyurt hududlarida joylashgan. Toshko‘mir asosan Toshkent viloyatining Angren (qo‘ng‘ir ko‘mir) va Surxondaryoning Sharg‘un va Boysun konlaridan olinadi.'
      }
    ],
    keyFacts: [
      'Muruntov koni dunyodagi eng yirik oltin konlari qatoriga kiradi.',
      'Angren havzasi O‘zbekistonning asosiy ko‘mir bazasi hisoblanadi.',
      'Sho‘rtan va Gazli — O‘zbekistonning eng yirik tabiiy gaz konlaridandir.'
    ],
    keyTerms: ['Muruntov', 'Olmaliq', 'Gazli', 'Sho‘rtan', 'Angren', 'Foydali qazilma'],
    summary: 'O‘zbekiston oltin, tabiiy gaz, uran, mis va ko‘mir zaxiralari bo‘yicha dunyoning yetakchi davlatlaridan biridir.'
  },
  {
    id: 7,
    slug: 'iqlim-va-uning-xususiyatlari',
    order: 7,
    title: 'Iqlim va uning xususiyatlari',
    shortDescription: 'Keskin kontinental iqlim, jazirama yoz, quyoshli kunlar, yog‘inlarning taqsimlanishi va havo massalari.',
    difficulty: 'O‘rtacha',
    durationMinutes: 18,
    category: 'Iqlim va atmosfera',
    objectives: [
      'Keskin kontinental iqlim belgilarini tushuntirib bera olish',
      'Quyosh radiatsiyasi va quyoshli kunlar ko‘pligi sababini bilish',
      'Yog‘ingarchilikning tog‘lar va tekisliklar bo‘yicha taqsimlanishini o‘rganish'
    ],
    sections: [
      {
        heading: 'Iqlimning asosiy turi',
        content: 'O‘zbekiston iqlimi keskin kontinental va quruq (arid) iqlim hisoblanadi. Buning asosiy sababi — hududning jahon okeanlaridan uzoqda, Yevrosiyo qit’asining ichki qismida joylashganligidir.',
        subpoints: [
          'Yoz fasli juda issiq, quruq va uzoq davom etadi',
          'Qish fasli esa qisqa, biroq sovuq arktika havo massalari kirib kelganda harorat keskin pasayishi mumkin',
          'Kunduzgi va tungi havo harorati o‘rtasida katta farq (amplituda) kuzatiladi'
        ]
      },
      {
        heading: 'Quyosh nuri va yog‘ingarchilik',
        content: 'O‘zbekiston serquyosh o‘lka deb ataladi: yiliga 2500 dan 3000 soatgacha quyosh nuri tushadi (yiliga 280-300 quyoshli kun). Yog‘inlar notekis taqsimlangan: cho‘l va tekisliklarda yiliga atigi 100-200 mm yog‘in yog‘sa, tog‘oldi va baland tog‘larda bu ko‘rsatkich 800-1000 mm gacha yetadi.'
      }
    ],
    keyFacts: [
      'O‘zbekiston iqlimi keskin kontinentaldir.',
      'Yillik quyoshli soatlar soni 2800–3000 soatga yetadi.',
      'Eng kam yog‘in Qizilqum va Ustyurtda (100 mm dan kam), eng ko‘p yog‘in G‘arbiy Tyanshan yonbag‘irlarida yog‘adi.'
    ],
    keyTerms: ['Kontinental iqlim', 'Quyosh radiatsiyasi', 'Yillik amplituda', 'Yog‘ingarchilik'],
    summary: 'O‘zbekiston jazirama quyoshli yoz, o‘zgaruvchan qish va quruq havoli keskin kontinental iqlimga ega.'
  },
  {
    id: 8,
    slug: 'ichki-suvlar-tizimi',
    order: 8,
    title: 'Ichki suvlar tizimi',
    shortDescription: 'O‘zbekistonning daryolari, ko‘llari, yerosti suvlari, muzliklar va sun’iy suv omborlarining umumiy tuzilishi.',
    difficulty: 'O‘rtacha',
    durationMinutes: 19,
    category: 'Suv havzalari',
    objectives: [
      'O‘zbekiston daryolarining to‘yinish manbalarini (qor va muzlik) bilish',
      'Yerosti suvlarining ahamiyatini tushunish',
      'Suv omborlari nima uchun qurilganini izohlay olish'
    ],
    sections: [
      {
        heading: 'Suv havzalarining o‘ziga xosligi',
        content: 'O‘zbekiston ichki oqimli havzada joylashgan, ya’ni daryolari ochiq okeanga yetib bormaydi. Barcha daryolar Orol dengizi yoki cho‘l qumlari, ichki botiqlar havzasiga tegishlidir.'
      },
      {
        heading: 'Daryolarning to‘yinishi',
        content: 'O‘zbekiston daryolari asosan baland tog‘lardagi qor va abadiy muzliklarning erishidan, shuningdek bahorgi yomg‘irlardan to‘yinadi. Shu sababli daryolarda suvning ko‘payishi (to‘lin suv davri) yoz oylarida — dalalar sug‘oriladigan eng zarur paytda sodir bo‘ladi.'
      },
      {
        heading: 'Suv omborlari va kanallar',
        content: 'Qishloq xo‘jaligini suv bilan ta’minlash va elektr energiyasi ishlab chiqarish maqsadida ko‘plab sun’iy suv omborlari barpo etilgan: Chorvoq, To‘palang, Tuyamo‘yin, Andijon, Quyimozor va Qizilqum kanallari.'
      }
    ],
    keyFacts: [
      'O‘zbekiston daryolari berk havzaga mansub bo‘lib, okeanga chiqmaydi.',
      'Daryolar to‘yinish turiga ko‘ra qor-muzlik to‘yinishli daryolar guruhiga kiradi.',
      'Chorvoq suv ombori Toshkent viloyatining asosiy suv va energiya manbaidir.'
    ],
    keyTerms: ['Berk havza', 'To‘lin suv davri', 'Muzlik', 'Suv ombori', 'To‘yinish'],
    summary: 'Ichki suvlar asosan baland tog‘ muzliklaridan boshlanib, qurg‘oqchil dalalar va aholi punktlarini hayotbaxsh suv bilan ta’minlaydi.'
  },
  {
    id: 9,
    slug: 'daryolar-va-kollar',
    order: 9,
    title: 'Daryolar va ko‘llar',
    shortDescription: 'Amudaryo, Sirdaryo, Zarafshon daryolari, Orol dengizi tarixi, Aydarko‘l va boshqa ko‘llar.',
    difficulty: 'O‘rtacha',
    durationMinutes: 20,
    category: 'Suv havzalari',
    objectives: [
      'Amudaryo va Sirdaryoning uzunligi va oqim yo‘lini bilish',
      'Zarafshon va Chirchiq daryolarining iqtisodiy ahamiyatini tushunish',
      'Aydar-Arnasoy ko‘llar tizimining paydo bo‘lishini o‘rganish'
    ],
    sections: [
      {
        heading: 'Amudaryo — eng sersuv daryo',
        content: 'Amudaryo Markaziy Osiyodagi eng sersuv va ikkinchi eng uzun daryodir (umumiy uzunligi 2540 km, Panj daryosi boshlanishidan hisoblaganda 2640 km). U Vaxsh va Panj daryolarining qo‘shilishidan hosil bo‘lib, Tojikiston, Afg‘oniston, O‘zbekiston va Turkmaniston hududlari bo‘ylab oqadi.'
      },
      {
        heading: 'Sirdaryo — eng uzun daryo',
        content: 'Sirdaryo Markaziy Osiyodagi eng uzun daryo bo‘lib, umumiy uzunligi 3019 km ni tashkil etadi. U Farg‘ona vodiysida Norin va Qoradaryo daryolarining qo‘shilishidan hosil bo‘ladi va O‘zbekiston, Tojikiston va Qozog‘iston hududlaridan o‘tadi.'
      },
      {
        heading: 'Zarafshon, Chirchiq va Ko‘llar',
        content: 'Zarafshon ("Oltin sochuvchi") daryosi Samarqand, Navoiy va Buxoro vohalarini sug‘oradi. Ko‘llardan eng kattalari: Aydar-Arnasoy ko‘llar tizimi, To‘dako‘l, shuningdek, fojiali ravishda qurigan Orol dengizining qoldiq qismlaridir.'
      }
    ],
    keyFacts: [
      'Sirdaryo — Markaziy Osiyoning eng uzun daryosi (3019 km).',
      'Amudaryo — eng sersuv daryo (2540 km).',
      'Aydarko‘l — sun’iy ravishda oqova suvlarning to‘planishidan vujudga kelgan yirik ko‘ldir.'
    ],
    keyTerms: ['Amudaryo', 'Sirdaryo', 'Zarafshon', 'Aydarko‘l', 'Orol'],
    summary: 'Amudaryo va Sirdaryo — yurtimizning ikki buyuk daryosi bo‘lib, qadimiy sivilizatsiyalar aynan shu daryolar bo‘yida shakllangan.'
  },
  {
    id: 10,
    slug: 'tuproqlar',
    order: 10,
    title: 'O‘zbekiston tuproqlari',
    shortDescription: 'Bo‘z tuproqlar, cho‘l qumli tuproqlari, sho‘rxoklar, tuproq unumdorligi va uni himoya qilish.',
    difficulty: 'O‘rtacha',
    durationMinutes: 17,
    category: 'Tabiat va yer yuzasi',
    objectives: [
      'O‘zbekistonda tarqalgan asosiy tuproq turlarini bilish',
      'Bo‘z tuproqlar nima uchun paxta va g‘allachilikda qadrlanishini tushunish',
      'Tuproq sho‘rlanishi va eroziyaga qarshi kurash choralarini o‘rganish'
    ],
    sections: [
      {
        heading: 'Tuproq qoplamining o‘ziga xosligi',
        content: 'O‘zbekistonda tekisliklardan tog‘larga ko‘tarilgan sari tuproq turlari vertikal mintaqaviylik qonuni bo‘yicha o‘zgarib boradi. Cho‘llarda sur-qo‘ng‘ir va qumli tuproqlar, tog‘ etaklarida esa unumdor bo‘z tuproqlar keng tarqalgan.'
      },
      {
        heading: 'Bo‘z tuproqlar (Serozyom)',
        content: 'Tog‘ oldi va tog‘ etaklaridagi bo‘z tuproqlar O‘zbekiston dehqonchiligining asosiy boyligidir. Ular tarkibida gumus (chirindi) miqdori 1-4 foizni tashkil etib, sun’iy sug‘orilganda g‘oyat yuqori hosil beradi.'
      },
      {
        heading: 'Tuproqni muhofaza qilish muammolari',
        content: 'Sug‘oriladigan yerlarda eng asosiy xavf — bu tuproq sho‘rlanishi va shamol/suv eroziyasidir. Sho‘rni yuvish, zovurlar (drenaj) qazish va tejamkor tomchilatib sug‘orish usullarini qo‘llash tuproqni saqlashga yordam beradi.'
      }
    ],
    keyFacts: [
      'Bo‘z tuproqlar (serozyom) O‘zbekiston qishloq xo‘jaligining eng unumdor tuprog‘idir.',
      'Cho‘l mintaqasida qumli tuproqlar va sho‘rxoklar ustunlik qiladi.',
      'Tomchilatib sug‘orish tuproq sho‘rlanishining oldini oladi.'
    ],
    keyTerms: ['Bo‘z tuproq', 'Gumus', 'Sho‘rxok', 'Eroziya', 'Melioratsiya'],
    summary: 'Tuproq — xalqimizning asosiy non-rizqi manbai bo‘lib, uni sho‘rlanish va yemirilishdan asrash davlat ahamiyatiga molik vazifadir.'
  },
  {
    id: 11,
    slug: 'osimlik-va-hayvonot-dunyosi',
    order: 11,
    title: 'O‘simlik va hayvonot dunyosi',
    shortDescription: 'Cho‘l florasi (saksovul, yantoq), tog‘ o‘rmonlari (archa, yong‘oqzor), Qizil kitobga kiritilgan nodir hayvonlar.',
    difficulty: 'Oson',
    durationMinutes: 19,
    category: 'Biologik xilma-xillik',
    objectives: [
      'Cho‘l o‘simliklarining qurg‘oqchilikka moslashish xususiyatlarini bilish',
      'Tog‘lardagi yong‘oqzor va archazorlarning tabiatdagi o‘rnini anglash',
      'O‘zbekiston Qizil kitobiga kiritilgan hayvonlarni aniqlash'
    ],
    sections: [
      {
        heading: 'Cho‘l mintaqasi o‘simlik va hayvonlari',
        content: 'Cho‘l o‘simliklari (oq va qora saksovul, yantoq, cherkez) juda chuqur ildiz otishi va barglarining maydaligi yoki tikan shaklida bo‘lishi bilan qurg‘oqchilikka moslashgan. Hayvonlardan jayron, sirtlon, qum bo‘g‘ma iloni, kaltakesaklar va qoraquloq uchraydi.'
      },
      {
        heading: 'Tog‘ o‘rmonlari va alp o‘tloqlari',
        content: 'G‘arbiy Tyanshan va Pomir-Olay tog‘ yonbag‘irlarida noyob archazorlar, yong‘oqzorlar, yovvoyi olma va pista butazorlari joylashgan. Bu yerda tog‘ qo‘yi (arxar), burama shoxli echki (morxo‘r), Tyanshan qo‘ng‘ir ayig‘i va qor barsi (ilvirs) yashaydi.'
      },
      {
        heading: 'Nodir turlarni asrash — Qizil kitob',
        content: 'Yo‘qolib ketish xavfi ostida bo‘lgan o‘simlik va hayvonlar O‘zbekiston Respublikasi Qizil kitobiga kiritilgan. Ularni muhofaza qilish uchun Chotqol, Zomin, Surxon, Nurota va Qizilqum davlat qo‘riqxonalari hamda milliy bog‘lar tashkil etilgan.'
      }
    ],
    keyFacts: [
      'Saksovul — cho‘l qumlarini ko‘chishdan to‘xtatuvchi asosiy o‘simlik.',
      'Qor barsi (ilvirs) O‘zbekistonning eng baland qoyalarida yashovchi nodir yirtqich.',
      'Chotqol biosfera qo‘riqxonasi UNESCO butunjahon merosi ro‘yxatiga kiritilgan.'
    ],
    keyTerms: ['Saksovul', 'Qor barsi', 'Qizil kitob', 'Qo‘riqxona', 'Endemik'],
    summary: 'O‘zbekiston tabiati cho‘l florasidan tortib tog‘ archazorlari va noyob jonivorlargacha boy biologik xilma-xillikka ega.'
  },
  {
    id: 12,
    slug: 'tabiiy-geografik-rayonlar',
    order: 12,
    title: 'Tabiiy geografik rayonlar',
    shortDescription: 'Ustyurt, Qizilqum, Quyi Amudaryo, Farg‘ona vodiysi, Zarafshon, Janubiy O‘zbekiston va Toshkent-Mirzacho‘l rayonlari.',
    difficulty: 'Qiyin',
    durationMinutes: 24,
    category: 'Mintaqalar geografiyasi',
    objectives: [
      'O‘zbekiston qanday tabiiy geografik rayonlarga bo‘linishini bilish',
      'Farg‘ona vodiysining tabiat mo‘jizalarini tushuntirish',
      'Turon tekisligi va tog‘li rayonlarning farqini anglash'
    ],
    sections: [
      {
        heading: 'Tabiiy rayonlashtirish nima?',
        content: 'Hududning relyefi, iqlimi, suvlari, tuprog‘i hamda o‘simlik-hayvonot dunyosi bir xilligi asosida tabiiy geografik rayonlar ajratiladi. O‘zbekiston ikkita yirik o‘lka — Turon tekislik o‘lkasi va O‘rta Osiyo tog‘li o‘lkasiga bo‘linadi.'
      },
      {
        heading: 'Asosiy tabiiy rayonlar',
        content: 'O‘zbekiston tarkibida quyidagi yirik tabiiy hududlar ajratiladi:',
        subpoints: [
          'Ustyurt rayoni — g‘arbdagi plato, qirlari chinklar bilan chegaralangan',
          'Qizilqum rayoni — ulkan qumli cho‘l va qoldiq tog‘lar (Tomditov, Quljuqtov)',
          'Farg‘ona vodiysi — har tomondan baland tog‘lar bilan o‘ralgan subtropik iqlimli unumdor vodiy',
          'Zarafshon rayoni — qadimiy dehqonchilik vohalari va daryo vodiysi',
          'Surxondaryo rayoni — O‘zbekistonning eng iliq, subtropik ekinlar yetishtiriladigan janubiy rayoni'
        ]
      }
    ],
    keyFacts: [
      'Farg‘ona vodiysi tog‘lar bilan qurshalgan berk qozonsimon botiqdir.',
      'Surxondaryo eng janubiy va eng issiq tabiiy rayon hisoblanadi (anori va xurmosi bilan mashhur).',
      'Qizilqumda qoldiq tog‘lar (Tomditov, Muruntov) mavjud.'
    ],
    keyTerms: ['Farg‘ona vodiysi', 'Chink', 'Plato', 'Tabiiy rayonlashtirish', 'Voha'],
    summary: 'O‘zbekistonning har bir tabiiy rayoni o‘ziga xos landshafti, boyliklari va iqlimiy xususiyatlariga ega.'
  },
  {
    id: 13,
    slug: 'aholi-va-aholi-joylashuvi',
    order: 13,
    title: 'Aholi va aholi joylashuvi',
    shortDescription: 'O‘zbekiston aholisi soni, o‘sish sur’ati, zichligi, shaharlar va qishloqlar aholisi, milliy tarkib.',
    difficulty: 'Oson',
    durationMinutes: 18,
    category: 'Aholi va jamiyat',
    objectives: [
      'O‘zbekiston aholisi sonini bilish (37+ million kishi)',
      'Aholi zichligi eng yuqori va eng past hududlarni xaritada topish',
      'Yirik shahar aglomeratsiyalarini o‘rganish'
    ],
    sections: [
      {
        heading: 'Aholi soni va demografik o‘sish',
        content: 'O‘zbekiston — Markaziy Osiyodagi aholisi eng ko‘p davlat bo‘lib, bugungi kunda aholi soni 37 million nafardan oshgan. Aholining aksariyati yoshlardan iborat bo‘lib, har yili aholi soni qariyb 700-800 ming nafarga ko‘paymoqda.'
      },
      {
        heading: 'Aholi joylashuvi va zichligi',
        content: 'Aholi hududlar bo‘yicha juda notekis joylashgan. Mamlakat bo‘yicha o‘rtacha zichlik 1 km² ga 80 kishidan to‘g‘ri kelsa, Farg‘ona, Andijon va Namangan viloyatlarida bu ko‘rsatkich 600-750 kishigacha yetadi (dunyodagi eng zich hududlardan biri). Qoraqalpog‘iston va Navoiyning cho‘l tumanlarida esa 1 km² ga atigi 8-10 kishi to‘g‘ri keladi.'
      },
      {
        heading: 'Yirik shaharlar va milliy totuvlik',
        content: 'Mamlakat poytaxti — Toshkent shahri bo‘lib, aholisi 3 milliondan ziyod. Boshqa yirik shaharlar: Samarqand, Namangan, Andijon, Farg‘ona, Buxoro, Nukus va Qarshi. O‘zbekistonda 130 dan ortiq millat va elat vakillari ahil-inoq istiqomat qiladi.'
      }
    ],
    keyFacts: [
      'O‘zbekiston aholisi 37 milliondan oshgan (Markaziy Osiyoda 1-o‘rin).',
      'Andijon viloyati — respublikamizdagi aholi eng zich joylashgan hudud.',
      'Toshkent — mintaqadagi eng yirik megapolis shahar.'
    ],
    keyTerms: ['Aholi zichligi', 'Demografiya', 'Urbanizatsiya', 'Megapolis', 'Aglomeratsiya'],
    summary: 'O‘zbekiston yosh, mehnatkash va tez o‘suvchi ko‘p millatli aholiga ega bo‘lib, vohalarda aholi zichligi g‘oyat yuqoridir.'
  },
  {
    id: 14,
    slug: 'ozbekiston-xojaligi',
    order: 14,
    title: 'O‘zbekiston xo‘jaligi',
    shortDescription: 'Sanoat, qishloq xo‘jaligi, avtomobilsozlik, to‘qimachilik, transport va energetika tarmoqlari.',
    difficulty: 'O‘rtacha',
    durationMinutes: 21,
    category: 'Iqtisodiyot',
    objectives: [
      'O‘zbekiston sanoatining yetakchi tarmoqlarini bilish',
      'Dehqonchilik va chorvachilikning asosiy yo‘nalishlarini ajratish',
      'Avtomobilsozlik va to‘qimachilik klasterlarining o‘rnini anglash'
    ],
    sections: [
      {
        heading: 'Sanoat tarmoqlari',
        content: 'O‘zbekiston zamonaviy sanoatlashgan davlatdir. Asosiy tarmoqlar: energetika (issiqlik va gidroelektr stansiyalari, quyosh va shamol elektr stansiyalari), metallurgiya (Navoiy, Bekobod, Olmaliq), mashinasozlik va avtomobilsozlik (Asaka, Samarqand, Pitnak, Jizzax).'
      },
      {
        heading: 'Qishloq xo‘jaligi',
        content: 'Yurtimiz qishloq xo‘jaligida dehqonchilik ustunlik qiladi: g‘alla, paxta, meva-sabzavot, poliz ekinlari va uzumchilik yetakchi o‘rin tutadi. Mamlakatimizda yetishtirilgan gilos, qovun, anor va quritilgan mevalar dunyoning o‘nlab davlatlariga eksport qilinadi.'
      },
      {
        heading: 'Transport va tranzit salohiyati',
        content: 'O‘zbekiston orqali Buyuk Ipak yo‘li o‘tgan. Bugungi kunda zamonaviy temir yo‘llar (Afrosiyob tezyurar poyezdi), Toshkent-Samarqand-Buxoro magistrallari hamda xalqaro aeroportlar mamlakatimizni jahon bilan bog‘laydi.'
      }
    ],
    keyFacts: [
      'Asaka avtomobil zavodi Markaziy Osiyodagi birinchi yengil avtomobil zavodidir.',
      'O‘zbekiston dunyoda gilos va quritilgan mevalar eksporti bo‘yicha oldingi o‘rinlarda turadi.',
      '“Afrosiyob” tezyurar poyezdi 250 km/soat tezlikda harakatlanadi.'
    ],
    keyTerms: ['Avtomobilsozlik', 'To‘qimachilik', 'Klaster', 'Qayta tiklanuvchi energiya', 'Eksport'],
    summary: 'O‘zbekiston qudratli sanoat, rivojlangan qishloq xo‘jaligi va yuqori tranzit infratuzilmasiga ega jadal rivojlanayotgan davlatdir.'
  },
  {
    id: 15,
    slug: 'tabiiy-resurslar-va-oqilona-foydalanish',
    order: 15,
    title: 'Tabiiy resurslar va ulardan oqilona foydalanish',
    shortDescription: 'Suv, yer, quyosh va shamol energiyasi zaxiralari, resurslarni tejash va "yashil" iqtisodiyot.',
    difficulty: 'O‘rtacha',
    durationMinutes: 19,
    category: 'Tabiat va ekologiya',
    objectives: [
      'Tuganmas va tugaydigan tabiiy resurslarni ajrata olish',
      'Quyosh va shamol energiyasining ulkan istiqbolini tushunish',
      'Suvni tejash nima sababdan hayot-mamot masalasi ekanini bilish'
    ],
    sections: [
      {
        heading: 'Tabiiy resurslar tasnifi',
        content: 'Tabiiy resurslar tabiatda inson foydalanadigan barcha ne’matlardir. Ular ikki guruhga bo‘linadi: tugaydigan resurslar (neft, gaz, ko‘mir, ma’danlar) va tugamaydigan resurslar (quyosh nuri, shamol kuchi, dengiz to‘lqinlari).'
      },
      {
        heading: 'Yashil energiya — kelajak poydevori',
        content: 'O‘zbekistonda yiliga 300 kungacha quyosh charaqlab turganligi sababli ulkan quyosh energetikasi salohiyati mavjud. Navoiy, Samarqand, Surxondaryo va Buxoroda yirik fotoelektr (quyosh) va shamol elektr stansiyalari ishga tushirilmoqda.'
      },
      {
        heading: 'Suv tejamkorligi texnologiyalari',
        content: 'O‘zbekistonda iste’mol qilinadigan chuchuk suvning qariyb 90 foizi qishloq xo‘jaligida ishlatiladi. Tomchilatib va yomg‘irlatib sug‘orish, kanallarni betonlash orqali suv isrofgarchiligini 30-40 foizga qisqartirish mumkin.'
      }
    ],
    keyFacts: [
      'O‘zbekiston quyosh energiyasi salohiyati 50 milliard tonna neft ekvivalentiga teng.',
      'Chuchuk suv zaxiralari eng qimmatli tabiiy resurs hisoblanadi.',
      'Tomchilatib sug‘orish usuli suvni 50% gacha tejaydi.'
    ],
    keyTerms: ['Qayta tiklanuvchi energiya', 'Quyosh elektr stansiyasi (FES)', 'Tomchilatib sug‘orish', 'Yashil iqtisodiyot'],
    summary: 'Tabiiy boyliklarni, ayniqsa suv va energiyani tejab ishlatish yurtimizning kelajagi va ekologik barqarorligi garovidir.'
  },
  {
    id: 16,
    slug: 'ekologik-muammolar-va-orol-fojiasi',
    order: 16,
    title: 'Ekologik muammolar va Orol fojiasi',
    shortDescription: 'Orol dengizining qurishi oqibatlari, Orolqum cho‘lining paydo bo‘lishi, saksovulzorlar barpo etish va tabiatni asrash.',
    difficulty: 'O‘rtacha',
    durationMinutes: 20,
    category: 'Tabiat va ekologiya',
    objectives: [
      'Orol dengizi nima sababdan quriganini bilish',
      'Orolqum cho‘li va tuz bo‘ronlarining atrof-muhitga ta’sirini tushunish',
      'Orol tubida saksovul ekish va xalqaro choralarni o‘rganish'
    ],
    sections: [
      {
        heading: 'Orol dengizi fojiasi sabablari',
        content: 'XX asrning ikkinchi yarmida paxta va sholi maydonlarini haddan tashqari kengaytirish natijasida Amudaryo va Sirdaryo suvlari sug‘orishga ko‘p miqdorda olindi. Natijada Orol dengiziga quyiladigan suv miqdori keskin kamayib, dengiz sathi 30 metrga yaqin pasaydi va uning maydoni 10 barobarga qisqardi.'
      },
      {
        heading: 'Orolqum cho‘li va uning ta’siri',
        content: 'Qurigan dengiz tubida 5 million gektardan ortiq maydonda yangi "Orolqum" cho‘li paydo bo‘ldi. Har yili bu yerdan yuz millionlab tonna zaharli tuz va changlar shamol orqali minglab kilometr uzoqliklarga tarqalmoqda.'
      },
      {
        heading: 'Orolbo‘yini qutqarish chora-tadbirlari',
        content: 'O‘zbekiston davlati tashabbusi bilan dengizning qurigan tubida millionlab gektar maydonda saksovul va boshqa sho‘rga chidamli o‘simliklar ekilmoqda. Saksovul ildizlari qumni mahkamlab, chang va tuz bo‘ronlarining ko‘tarilishini sezilarli darajada to‘xtatadi.'
      }
    ],
    keyFacts: [
      'Orol dengizi ilgari maydoni bo‘yicha dunyodagi to‘rtinchi eng katta ko‘l bo‘lgan.',
      'Dengizning qurigan tubida Orolqum cho‘li hosil bo‘ldi.',
      'Orol tubiga saksovulzorlar barpo etish tabiatni saqlab qolishning eng samarali usulidir.'
    ],
    keyTerms: ['Orol fojiasi', 'Orolqum', 'Tuz bo‘ronlari', 'Ekologiya', 'Saksovulzor'],
    summary: 'Orol dengizini saqlash va mintaqa ekologiyasini yaxshilash butun insoniyatning burchi va davrimizning eng muhim vazifasidir.'
  }
];
