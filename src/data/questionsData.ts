import { Question } from '../types';

export const QUESTIONS_DATA: Question[] = [
  // Dars 1: Geografiya faniga kirish
  {
    id: 1,
    lessonId: 1,
    lessonTitle: 'Geografiya faniga kirish',
    question: '“Geografiya” atamasini fanga birinchi bo‘lib qaysi qadimgi olim kiritgan?',
    options: ['Arastu', 'Eratosfen', 'Abu Rayhon Beruniy', 'Ptolemey'],
    correctAnswerIndex: 1,
    explanation: '“Geografiya” atamasini miloddan avvalgi III asrda qadimgi yunon olimi Eratosfen fanga kiritgan.',
    difficulty: 'Oson'
  },
  {
    id: 2,
    lessonId: 1,
    lessonTitle: 'Geografiya faniga kirish',
    question: '“Geografiya” so‘zi yunon tilidan qanday tarjima qilinadi?',
    options: ['Koinot sirlari', 'Tog‘lar haqida ta’limot', 'Yerning tasviri', 'Xaritalar ilmi'],
    correctAnswerIndex: 2,
    explanation: '“Geo” — Yer, “grafein” — yozaman, tasvirlayman degan ma’noni bildiradi, ya’ni “Yerning tasviri” demakdir.',
    difficulty: 'Oson'
  },
  {
    id: 3,
    lessonId: 1,
    lessonTitle: 'Geografiya faniga kirish',
    question: 'Yer sharining aylanasi va radiusini qadimgi davrlarda katta aniqlik bilan o‘lchagan alloma kim?',
    options: ['Abu Rayhon Beruniy', 'Al-Farg‘oniy', 'Ibn Sino', 'Mirzo Ulug‘bek'],
    correctAnswerIndex: 0,
    explanation: 'Buyuk alloma Abu Rayhon Beruniy o‘zining trigonometrik usuli orqali Yer radiusini g‘oyat katta aniqlik bilan hisoblab chiqqan.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 4,
    lessonId: 1,
    lessonTitle: 'Geografiya faniga kirish',
    question: 'Aholi, sanoat, shaharlar va transportni o‘rganuvchi geografiya tarmog‘i qanday nomlanadi?',
    options: ['Fizik geografiya', 'Biogeografiya', 'Iqtisodiy va ijtimoiy geografiya', 'Okeanologiya'],
    correctAnswerIndex: 2,
    explanation: 'Iqtisodiy va ijtimoiy geografiya insoniyat jamiyati, xo‘jalik tarmoqlari va aholi joylashuvini o‘rganadi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 5,
    lessonId: 1,
    lessonTitle: 'Geografiya faniga kirish',
    question: 'Yerning qisqartirilgan va kichraytirilgan uch o‘lchamli sharsimon modeli nima deyiladi?',
    options: ['Xarita', 'Globus', 'Plan', 'Kompas'],
    correctAnswerIndex: 1,
    explanation: 'Globus — Yer sharining qisqartirilgan aniq uch o‘lchamli modelidir.',
    difficulty: 'Oson'
  },

  // Dars 2: Geografik xaritalar va masshtab
  {
    id: 6,
    lessonId: 2,
    lessonTitle: 'Geografik xaritalar va masshtab',
    question: 'Xaritadagi shartli belgilar va ularning izohlari to‘plami nima deyiladi?',
    options: ['Masshtab', 'Legenda', 'Kompas', 'Meridian'],
    correctAnswerIndex: 1,
    explanation: 'Xaritaning chetida yoki burchagida berilgan shartli belgilar tizimi legenda (xarita kaliti) deyiladi.',
    difficulty: 'Oson'
  },
  {
    id: 7,
    lessonId: 2,
    lessonTitle: 'Geografik xaritalar va masshtab',
    question: 'Agar xarita masshtabi 1:1 000 000 bo‘lsa, undagi 1 sm yer yuzidagi qancha masofaga to‘g‘ri keladi?',
    options: ['100 metr', '1 km', '10 km', '100 km'],
    correctAnswerIndex: 2,
    explanation: '1:1 000 000 da 1 sm = 1 000 000 sm = 10 000 metr = 10 kilometrni bildiradi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 8,
    lessonId: 2,
    lessonTitle: 'Geografik xaritalar va masshtab',
    question: 'Yer yuzida shimoliy va janubiy qutblarni tutashtiruvchi xayoliy yarim aylanalar nima deyiladi?',
    options: ['Parallellar', 'Meridianlar', 'Ekvator', 'Gorizont'],
    correctAnswerIndex: 1,
    explanation: 'Qutblarni tutashtiruvchi barcha vertikal chiziqlar meridianlar deb ataladi.',
    difficulty: 'Oson'
  },
  {
    id: 9,
    lessonId: 2,
    lessonTitle: 'Geografik xaritalar va masshtab',
    question: 'Fizik xaritalarda pasttekisliklar qaysi rangda tasvirlanadi?',
    options: ['Jigarrang', 'Ko‘k', 'Yashil', 'Sariq'],
    correctAnswerIndex: 2,
    explanation: 'Fizik xaritalarda balandligi 200 metrgacha bo‘lgan pasttekisliklar an’anaviy tarzda yashil rang bilan bo‘yaladi.',
    difficulty: 'Oson'
  },
  {
    id: 10,
    lessonId: 2,
    lessonTitle: 'Geografik xaritalar va masshtab',
    question: 'Yer sharini Shimoliy va Janubiy yarim sharlarga teng ikkiga bo‘luvchi eng uzun parallel chiziq qaysi?',
    options: ['Grinvich meridiani', 'Tropic', 'Ekvator', 'Qutb doirasi'],
    correctAnswerIndex: 2,
    explanation: 'Ekvator — Yer sharini ikkiga bo‘luvchi 0° li eng uzun parallel chiziqdir.',
    difficulty: 'Oson'
  },

  // Dars 3: O‘zbekistonning geografik o‘rni
  {
    id: 11,
    lessonId: 3,
    lessonTitle: 'O‘zbekistonning geografik o‘rni',
    question: 'O‘zbekiston Respublikasi nechta davlat bilan bevosita chegaradosh?',
    options: ['4 ta', '5 ta', '6 ta', '7 ta'],
    correctAnswerIndex: 1,
    explanation: 'O‘zbekiston 5 ta davlat bilan chegaradosh: Qozog‘iston, Qirg‘iziston, Tojikiston, Afg‘oniston va Turkmaniston.',
    difficulty: 'Oson'
  },
  {
    id: 12,
    lessonId: 3,
    lessonTitle: 'O‘zbekistonning geografik o‘rni',
    question: 'O‘zbekistonning qaysi davlat bilan chegarasi eng qisqa hisoblanadi (137 km)?',
    options: ['Qirg‘iziston', 'Tojikiston', 'Afg‘oniston', 'Turkmaniston'],
    correctAnswerIndex: 2,
    explanation: 'Afg‘oniston bilan chegara atigi 137 km bo‘lib, Amudaryo orqali o‘tadi va O‘zbekistonning eng qisqa chegarasidir.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 13,
    lessonId: 3,
    lessonTitle: 'O‘zbekistonning geografik o‘rni',
    question: 'O‘zbekiston qaysi qit’aning qaysi mintaqasida joylashgan?',
    options: ['Yevropaning sharqida', 'Yevrosiyo qit’asi, Markaziy Osiyo mintaqasida', 'Osiyoning janubida', 'Yaqin Sharqda'],
    correctAnswerIndex: 1,
    explanation: 'O‘zbekiston ulkan Yevrosiyo qit’asining qoq o‘rtasida, Markaziy Osiyo mintaqasida joylashgan.',
    difficulty: 'Oson'
  },
  {
    id: 14,
    lessonId: 3,
    lessonTitle: 'O‘zbekistonning geografik o‘rni',
    question: 'O‘zbekiston dunyo okeaniga chiqish bo‘yicha qanday noyob maqomga ega?',
    options: ['Dengiz bo‘yidagi davlat', 'Ikki davlat osha dengizga chiquvchi (double landlocked)', 'Yarim orol davlati', 'Orol davlati'],
    correctAnswerIndex: 1,
    explanation: 'Dunyoda ochiq okeanga chiqish uchun kamida 2 ta davlat hududidan o‘tish kerak bo‘lgan ikkita davlat bor: O‘zbekiston va Lixtenshteyn.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 15,
    lessonId: 3,
    lessonTitle: 'O‘zbekistonning geografik o‘rni',
    question: 'O‘zbekiston va Afg‘onistonni bog‘lab turuvchi mashhur chegara ko‘prigi qanday ataladi?',
    options: ['Ipak yo‘li ko‘prigi', 'Do‘stlik ko‘prigi', 'Termiz ko‘prigi', 'Amudaryo ko‘prigi'],
    correctAnswerIndex: 1,
    explanation: 'Termiz yaqinidagi Amudaryo ustidan o‘tgan ko‘prik “Do‘stlik ko‘prigi” deb ataladi.',
    difficulty: 'Oson'
  },

  // Dars 4: O‘zbekiston hududi va chegaralari
  {
    id: 16,
    lessonId: 4,
    lessonTitle: 'O‘zbekiston hududi va chegaralari',
    question: 'O‘zbekiston Respublikasining umumiy maydoni qancha?',
    options: ['348,9 ming km²', '448,9 ming km²', '548,9 ming km²', '648,9 ming km²'],
    correctAnswerIndex: 1,
    explanation: 'O‘zbekiston Respublikasining umumiy yer maydoni 448,9 ming kvadrat kilometrni tashkil etadi.',
    difficulty: 'Oson'
  },
  {
    id: 17,
    lessonId: 4,
    lessonTitle: 'O‘zbekiston hududi va chegaralari',
    question: 'O‘zbekistonning eng sharqiy chekka nuqtasi qaysi viloyatda joylashgan?',
    options: ['Farg‘ona', 'Andijon (Xonobod shahri)', 'Namangan', 'Toshkent'],
    correctAnswerIndex: 1,
    explanation: 'O‘zbekistonning eng sharqiy nuqtasi Andijon viloyatining Xonobod shahri atrofiga to‘g‘ri keladi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 18,
    lessonId: 4,
    lessonTitle: 'O‘zbekiston hududi va chegaralari',
    question: 'O‘zbekiston tarkibida nechta viloyat mavjud?',
    options: ['10 ta', '11 ta', '12 ta', '14 ta'],
    correctAnswerIndex: 2,
    explanation: 'O‘zbekiston tarkibida 12 ta viloyat, Qoraqalpog‘iston Respublikasi va Toshkent shahri mavjud.',
    difficulty: 'Oson'
  },
  {
    id: 19,
    lessonId: 4,
    lessonTitle: 'O‘zbekiston hududi va chegaralari',
    question: 'O‘zbekistonning eng g‘arbiy chekka nuqtasi qaysi hududga to‘g‘ri keladi?',
    options: ['Qizilqum cho‘liga', 'Ustyurt platosiga (Qoraqalpog‘iston)', 'Surxondaryoga', 'Xorazm vohasiga'],
    correctAnswerIndex: 1,
    explanation: 'Eng g‘arbiy nuqta Qoraqalpog‘istondagi Ustyurt platosining g‘arbiy qismida joylashgan.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 20,
    lessonId: 4,
    lessonTitle: 'O‘zbekiston hududi va chegaralari',
    question: 'O‘zbekiston g‘arbdan sharqqa tomon taxminan necha kilometrga cho‘zilgan?',
    options: ['925 km', '1100 km', '1425 km', '2000 km'],
    correctAnswerIndex: 2,
    explanation: 'O‘zbekiston g‘arbdan sharqqa tomon taxminan 1425 km, shimoldan janubga esa 925 km masofaga cho‘zilgan.',
    difficulty: 'Qiyin'
  },

  // Dars 5: Relyef
  {
    id: 21,
    lessonId: 5,
    lessonTitle: 'O‘zbekiston relyefi',
    question: 'O‘zbekiston hududining qancha qismini tekisliklar egallaydi?',
    options: ['Qariyb 30%', 'Taxminan 50%', 'Qariyb 78-80%', '95%'],
    correctAnswerIndex: 2,
    explanation: 'O‘zbekiston hududining taxminan 78-80 foizini tekisliklar, qolgan 20-22 foizini esa tog‘lar egallaydi.',
    difficulty: 'Oson'
  },
  {
    id: 22,
    lessonId: 5,
    lessonTitle: 'O‘zbekiston relyefi',
    question: 'O‘zbekistonning eng baland cho‘qqisi qaysi va uning balandligi qancha?',
    options: ['Adelunga (4301 m)', 'Hazrat Sulton (4643 m)', 'Buyuk G‘alaba (7439 m)', 'Bobotog‘ (2292 m)'],
    correctAnswerIndex: 1,
    explanation: 'O‘zbekistonning eng baland cho‘qqisi — Hisor tizmasidagi Hazrat Sulton cho‘qqisi bo‘lib, balandligi 4643 metrdir.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 23,
    lessonId: 5,
    lessonTitle: 'O‘zbekiston relyefi',
    question: 'O‘zbekistondagi eng past botiq qaysi (dengiz sathidan -12 metr past)?',
    options: ['Mingbuloq botig‘i', 'Qoraxitoy botig‘i', 'Boybuloq g‘ori', 'Sho‘rko‘l'],
    correctAnswerIndex: 0,
    explanation: 'Qoraqalpog‘istonda joylashgan Mingbuloq botig‘i O‘zbekistonning eng past nuqtasi bo‘lib, okean sathidan 12 metr pastda joylashgan.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 24,
    lessonId: 5,
    lessonTitle: 'O‘zbekiston relyefi',
    question: 'Quyidagi tog‘ tizmalaridan qaysi biri G‘arbiy Tyanshan tog‘ tizimiga kiradi?',
    options: ['Zarafshon tizmasi', 'Chotqol va Qurama tizmalari', 'Bobotog‘', 'Turkiston tizmasi'],
    correctAnswerIndex: 1,
    explanation: 'Chotqol, Qurama, Piskom va Ugom tizmalari G‘arbiy Tyanshan tog‘ tizimiga mansubdir.',
    difficulty: 'Qiyin'
  },
  {
    id: 25,
    lessonId: 5,
    lessonTitle: 'O‘zbekiston relyefi',
    question: 'O‘zbekistondagi eng yirik qumli cho‘l qaysi?',
    options: ['Qoraqum', 'Qizilqum', 'Saxroi Kabir', 'Gobi'],
    correctAnswerIndex: 1,
    explanation: 'O‘zbekiston hududidagi eng katta qumli cho‘l — Qizilqum cho‘lidir.',
    difficulty: 'Oson'
  },

  // Dars 6: Foydali qazilmalar
  {
    id: 26,
    lessonId: 6,
    lessonTitle: 'Foydali qazilmalar',
    question: 'Qizilqum cho‘lidagi dunyoga mashhur gigant oltin koni qaysi?',
    options: ['Sho‘rtan', 'Muruntov', 'Gazli', 'Angren'],
    correctAnswerIndex: 1,
    explanation: 'Muruntov oltin koni dunyodagi eng yirik ochiq oltin qazib olish karyerlaridan biridir.',
    difficulty: 'Oson'
  },
  {
    id: 27,
    lessonId: 6,
    lessonTitle: 'Foydali qazilmalar',
    question: 'O‘zbekistonda asosiy qo‘ng‘ir ko‘mir koni qaysi shaharda joylashgan?',
    options: ['Angren', 'Chirchiq', 'Navoiy', 'Samarqand'],
    correctAnswerIndex: 0,
    explanation: 'Toshkent viloyatining Angren shahrida mamlakatimizning asosiy ko‘mir havzasi joylashgan.',
    difficulty: 'Oson'
  },
  {
    id: 28,
    lessonId: 6,
    lessonTitle: 'Foydali qazilmalar',
    question: 'Mis va rangli metallar eritiladigan eng yirik kon-metallurgiya kombinati qaysi shaharda?',
    options: ['Buxoro', 'Olmaliq', 'Xiva', 'Jizzax'],
    correctAnswerIndex: 1,
    explanation: 'Olmaliq kon-metallurgiya kombinati (OKMK) mis, molibden va nodir metallarni ishlab chiqarish bo‘yicha ulkan markazdir.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 29,
    lessonId: 6,
    lessonTitle: 'Foydali qazilmalar',
    question: 'Quyidagilardan qaysi biri yonuvchi yoqilg‘i-energetika foydali qazilmasi hisoblanadi?',
    options: ['Marmar', 'Tabiiy gaz', 'Oltin', 'Granit'],
    correctAnswerIndex: 1,
    explanation: 'Tabiiy gaz, neft va ko‘mir yonuvchi foydali qazilmalar guruhiga kiradi.',
    difficulty: 'Oson'
  },
  {
    id: 30,
    lessonId: 6,
    lessonTitle: 'Foydali qazilmalar',
    question: 'Qashqadaryo viloyatidagi yirik tabiiy gaz va gaz-kimyo majmuasi qaysi?',
    options: ['Muruntov', 'Sho‘rtan', 'Chorvoq', 'Bekobod'],
    correctAnswerIndex: 1,
    explanation: 'Sho‘rtan gaz-kimyo majmuasi tabiiy gazdan polietilen va boshqa qimmatli xomashyolar ishlab chiqaradi.',
    difficulty: 'O‘rtacha'
  },

  // Dars 7: Iqlim
  {
    id: 31,
    lessonId: 7,
    lessonTitle: 'Iqlim va uning xususiyatlari',
    question: 'O‘zbekiston iqlimining asosiy turi qanday ta’riflanadi?',
    options: ['Tengiz iqlimi', 'Tropic iqlim', 'Keskin kontinental va quruq', 'Ekvatorial iqlim'],
    correctAnswerIndex: 2,
    explanation: 'O‘zbekiston okeanlardan uzoqda joylashganligi sababli uning iqlimi keskin kontinental va quruqdir.',
    difficulty: 'Oson'
  },
  {
    id: 32,
    lessonId: 7,
    lessonTitle: 'Iqlim va uning xususiyatlari',
    question: 'O‘zbekistonda yiliga o‘rtacha necha soat quyosh nuri tushadi?',
    options: ['1000–1200 soat', '1500–1800 soat', '2800–3000 soat', '4500–5000 soat'],
    correctAnswerIndex: 2,
    explanation: 'O‘zbekistonda yiliga 2800 dan 3000 soatgacha quyosh nuri tushadi, shuning uchun yurtimiz “serquyosh o‘lka” deyiladi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 33,
    lessonId: 7,
    lessonTitle: 'Iqlim va uning xususiyatlari',
    question: 'O‘zbekistonda eng kam yog‘in qaysi tabiiy hududlarda kuzatiladi?',
    options: ['G‘arbiy Tyanshan tog‘larida', 'Farg‘ona vodiysining chekkalarida', 'Qizilqum va Ustyurt cho‘llarida (100 mm dan kam)', 'Zomin tog‘larida'],
    correctAnswerIndex: 2,
    explanation: 'Qizilqum va Ustyurt kabi cho‘llarda yiliga atigi 80-120 mm yog‘in yog‘adi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 34,
    lessonId: 7,
    lessonTitle: 'Iqlim va uning xususiyatlari',
    question: 'Nima sababdan O‘zbekistonda yoz va qish harorati o‘rtasida juda katta farq bo‘ladi?',
    options: ['Okean sohilida joylashgani uchun', 'Qit’aning ichkarisida, okean ta’siridan uzoqligi tufayli', 'Daryolar ko‘pligi sababli', 'Hududda o‘rmonlar ko‘pligi sababli'],
    correctAnswerIndex: 1,
    explanation: 'Quruqlik ichkarisida quruq havo tez isiydi va tez soviydi, bu esa harorat amplitudasining katta bo‘lishiga olib keladi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 35,
    lessonId: 7,
    lessonTitle: 'Iqlim va uning xususiyatlari',
    question: 'Qishda O‘zbekiston hududiga qaysi havo massalari kirib kelganda sovuq harorat hukm suradi?',
    options: ['Ekvatorial havo massalari', 'Arktika va mo‘tadil sovuq havo massalari', 'Hind okeani mussonlari', 'Tropik issiq havo massalari'],
    correctAnswerIndex: 1,
    explanation: 'Shimoldan va Sibirdan kirib keluvchi sovuq arktika havo massalari qishda haroratning keskin pasayishiga olib keladi.',
    difficulty: 'Qiyin'
  },

  // Dars 8: Ichki suvlar tizimi
  {
    id: 36,
    lessonId: 8,
    lessonTitle: 'Ichki suvlar tizimi',
    question: 'O‘zbekiston daryolari dunyo okeaniga chiqa oladimi?',
    options: ['Ha, Tinch okeaniga quyiladi', 'Ha, Shimoliy Muz okeaniga quyiladi', 'Yo‘q, berk ichki oqim havzasiga kiradi', 'Ha, Hind okeaniga quyiladi'],
    correctAnswerIndex: 2,
    explanation: 'O‘zbekiston ichki berk havzada joylashgan bo‘lib, daryolari okeanlarga chiqmaydi.',
    difficulty: 'Oson'
  },
  {
    id: 37,
    lessonId: 8,
    lessonTitle: 'Ichki suvlar tizimi',
    question: 'O‘zbekiston daryolarining asosiy to‘yinish manbai nima?',
    options: ['Tog‘lardagi qor va muzliklar', 'Yozgi musson yomg‘irlari', 'Faqat yerosti artezian suvlari', 'Dengiz suvlari'],
    correctAnswerIndex: 0,
    explanation: 'Daryolarimiz asosan baland Tyanshan va Pomir tog‘laridagi mangu qor va muzliklarning erishidan suv oladi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 38,
    lessonId: 8,
    lessonTitle: 'Ichki suvlar tizimi',
    question: 'Nima uchun daryolarimizda suv sathi yoz oylarida eng yuqori bo‘ladi?',
    options: ['Yozda ko‘p yomg‘ir yoqqanligi uchun', 'Yozgi jaziramada tog‘ muzliklari jadal eriganligi uchun', 'Daryolarga suv quyilganligi uchun', 'Yozda shamol esmaganligi uchun'],
    correctAnswerIndex: 1,
    explanation: 'Yoz oylarida havo harorati baland tog‘larda ham ko‘tarilib, muzliklar shiddat bilan eriydi va daryolarda to‘lin suv davri boshlanadi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 39,
    lessonId: 8,
    lessonTitle: 'Ichki suvlar tizimi',
    question: 'Toshkent viloyatida Chirchiq daryosi havzasida barpo etilgan yirik suv ombori qaysi?',
    options: ['Tuyamo‘yin', 'Andijon suv ombori', 'Chorvoq suv ombori', 'To‘palang'],
    correctAnswerIndex: 2,
    explanation: 'Chorvoq suv ombori Chirchiq va uning irmoqlari (Chotqol, Piskom, Ko‘ksuv) suvidan hosil qilingan mashhur suv omboridir.',
    difficulty: 'Oson'
  },
  {
    id: 40,
    lessonId: 8,
    lessonTitle: 'Ichki suvlar tizimi',
    question: 'Yer qobig‘i ostida to‘plangan va buloqlar orqali chiqadigan chuchuk suvlar nima deyiladi?',
    options: ['Yerosti suvlari', 'Gidrosfera bug‘lari', 'Muzliklar', 'Eroziya'],
    correctAnswerIndex: 0,
    explanation: 'Yer qatlamlari orasida to‘planib oquvchi suvlar yerosti (grunt va artezian) suvlari deb ataladi.',
    difficulty: 'Oson'
  },

  // Dars 9: Daryolar va ko‘llar
  {
    id: 41,
    lessonId: 9,
    lessonTitle: 'Daryolar va ko‘llar',
    question: 'Markaziy Osiyodagi eng uzun daryo qaysi (3019 km)?',
    options: ['Amudaryo', 'Sirdaryo', 'Zarafshon', 'Chirchiq'],
    correctAnswerIndex: 1,
    explanation: 'Sirdaryo — uzunligi 3019 km bo‘lib, Markaziy Osiyoning eng uzun daryosidir.',
    difficulty: 'Oson'
  },
  {
    id: 42,
    lessonId: 9,
    lessonTitle: 'Daryolar va ko‘llar',
    question: 'Markaziy Osiyodagi eng sersuv daryo qaysi?',
    options: ['Zarafshon', 'Sirdaryo', 'Amudaryo', 'Qashqadaryo'],
    correctAnswerIndex: 2,
    explanation: 'Amudaryo suv sarfi bo‘yicha mintaqadagi eng sersuv va qudratli daryo hisoblanadi.',
    difficulty: 'Oson'
  },
  {
    id: 43,
    lessonId: 9,
    lessonTitle: 'Daryolar va ko‘llar',
    question: 'Sirdaryo qaysi ikki daryoning qo‘shilishidan hosil bo‘ladi?',
    options: ['Panj va Vaxsh', 'Norin va Qoradaryo', 'Chirchiq va Ohangaron', 'Surxondaryo va Sherobod'],
    correctAnswerIndex: 1,
    explanation: 'Sirdaryo Farg‘ona vodiysida Norin daryosi bilan Qoradaryoning qo‘shilishidan hosil bo‘ladi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 44,
    lessonId: 9,
    lessonTitle: 'Daryolar va ko‘llar',
    question: 'Qadimda “Oltin sochuvchi daryo” nomi bilan mashhur bo‘lgan, Samarqand va Buxorodan oquvchi daryo qaysi?',
    options: ['Zarafshon', 'Sirdaryo', 'Amudaryo', 'Surxondaryo'],
    correctAnswerIndex: 0,
    explanation: 'Zarafshon so‘zi forscha "zar" — oltin va "afshon" — sochuvchi ma’nolarini bildiradi.',
    difficulty: 'Oson'
  },
  {
    id: 45,
    lessonId: 9,
    lessonTitle: 'Daryolar va ko‘llar',
    question: 'Jizzax va Navoiy viloyatlari hududida joylashgan yirik ko‘llar tizimi qaysi?',
    options: ['To‘dako‘l', 'Aydar-Arnasoy ko‘llar tizimi', 'Chorvoq', 'Sarig‘amish'],
    correctAnswerIndex: 1,
    explanation: 'Aydar-Arnasoy ko‘llar tizimi Mirzacho‘l kollektor suvlari va Chordara suv omboridan tashlangan suvlar hisobiga vujudga kelgan yirik ko‘ldir.',
    difficulty: 'O‘rtacha'
  },

  // Dars 10: Tuproqlar
  {
    id: 46,
    lessonId: 10,
    lessonTitle: 'O‘zbekiston tuproqlari',
    question: 'O‘zbekiston tog‘oldi va tog‘ etaklaridagi eng unumdor va dehqonchilikda qadrlanadigan tuproq turi qaysi?',
    options: ['Sho‘rxok', 'Qumli tuproq', 'Bo‘z tuproq (serozyom)', 'Torflar'],
    correctAnswerIndex: 2,
    explanation: 'Bo‘z tuproqlar ozuqa moddalariga boy bo‘lib, sug‘orilganda g‘oyat saxiy hosil beradi.',
    difficulty: 'Oson'
  },
  {
    id: 47,
    lessonId: 10,
    lessonTitle: 'O‘zbekiston tuproqlari',
    question: 'Tuproqning hosildorligini ta’minlovchi chirindi qismi nima deyiladi?',
    options: ['Gumus', 'Loy', 'Qum', 'Mineral tuz'],
    correctAnswerIndex: 0,
    explanation: 'Gumus (chirindi) — o‘simlik va hayvon qoldiqlari chirishidan hosil bo‘lgan tuproqning eng unumdor qismidir.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 48,
    lessonId: 10,
    lessonTitle: 'O‘zbekiston tuproqlari',
    question: 'Tuproqning shamol va suv oqimi ta’sirida yuvilib yoki uchib ketishi qanday ataladi?',
    options: ['Melioratsiya', 'Eroziya', 'Irriqatsiya', 'Vegetatsiya'],
    correctAnswerIndex: 1,
    explanation: 'Tuproq qatlamining buzilishi va uchib/yuvilib ketishi tuproq eroziyasi deb nomlanadi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 49,
    lessonId: 10,
    lessonTitle: 'O‘zbekiston tuproqlari',
    question: 'Sug‘oriladigan yerlarda suvning me’yoridan ortiq ishlatilishi natijasida qanday salbiy jarayon yuz beradi?',
    options: ['Tuproqning muzlashi', 'Tuproqning sho‘rlanishi', 'Zilzila xavfi', 'O‘rmonlar ko‘payishi'],
    correctAnswerIndex: 1,
    explanation: 'Ortiqcha suv yerosti sho‘r suvlarini ko‘taradi va bug‘lanish natijasida tuproq yuzasida tuz qatlami — sho‘rxoklar hosil bo‘ladi.',
    difficulty: 'Oson'
  },
  {
    id: 50,
    lessonId: 10,
    lessonTitle: 'O‘zbekiston tuproqlari',
    question: 'Tuproqning meliorativ holatini yaxshilash va unumdorligini oshirish tadbirlari nima deyiladi?',
    options: ['Urbanizatsiya', 'Melioratsiya', 'Evolyutsiya', 'Rekultivatsiya'],
    correctAnswerIndex: 1,
    explanation: 'Melioratsiya — yerlarni sho‘rdan tozalash, zovurlar qazish va hosildorlikni oshirishga qaratilgan kompleks tadbirlardir.',
    difficulty: 'Qiyin'
  },

  // Dars 11: O‘simlik va hayvonot dunyosi
  {
    id: 51,
    lessonId: 11,
    lessonTitle: 'O‘simlik va hayvonot dunyosi',
    question: 'Cho‘l qumlarini mustahkamlab, qum ko‘chishini to‘xtatuvchi asosiy yog‘ochsimon o‘simlik qaysi?',
    options: ['Archa', 'Saksovul', 'Terak', 'Chinor'],
    correctAnswerIndex: 1,
    explanation: 'Saksovul o‘zining 10-15 metr chuqurlikkacha yetadigan ildizlari bilan qum barxanlarini mustahkamlaydi.',
    difficulty: 'Oson'
  },
  {
    id: 52,
    lessonId: 11,
    lessonTitle: 'O‘simlik va hayvonot dunyosi',
    question: 'Baland qoyali tog‘larda yashovchi, O‘zbekiston Qizil kitobiga kiritilgan noyob mushuksimon yirtqich qaysi?',
    options: ['Qoplon', 'Qor barsi (ilvirs)', 'Sher', 'Gepard'],
    correctAnswerIndex: 1,
    explanation: 'Qor barsi (ilvirs) G‘arbiy Tyanshan va Pomir-Olayning baland qoyalarida yashovchi eng noyob va xavf ostidagi hayvondir.',
    difficulty: 'Oson'
  },
  {
    id: 53,
    lessonId: 11,
    lessonTitle: 'O‘simlik va hayvonot dunyosi',
    question: 'Daryo bo‘ylaridagi to‘qaylarda o‘suvchi va daryo bo‘yi florasiga xos bo‘lgan daraxt qaysi?',
    options: ['Jiyda va turang‘il', 'Qarag‘ay', 'Yong‘oq', 'Kedr'],
    correctAnswerIndex: 0,
    explanation: 'Daryo bo‘yi to‘qayzorlarida turang‘il (terak turi), jiyda va qiyoqlar keng o‘sadi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 54,
    lessonId: 11,
    lessonTitle: 'O‘simlik va hayvonot dunyosi',
    question: 'Faqat ma’lum bir cheklangan geografik hududdagina uchraydigan o‘simlik va hayvonlar nima deyiladi?',
    options: ['Gibrid', 'Endemik', 'Parazit', 'Madaniy tur'],
    correctAnswerIndex: 1,
    explanation: 'Dunyoning boshqa joyida uchramaydigan, faqat muayyan mintaqaga xos turlar endemik turlar deb ataladi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 55,
    lessonId: 11,
    lessonTitle: 'O‘simlik va hayvonot dunyosi',
    question: 'Quyidagilardan qaysi biri O‘zbekistonning birinchi tashkil etilgan tog‘-o‘rmon qo‘riqxonalaridan biridir?',
    options: ['Chotqol davlat biosfera qo‘riqxonasi', 'Arktika qo‘riqxonasi', 'Taymir', 'Belovej pushchasi'],
    correctAnswerIndex: 0,
    explanation: '1947-yilda tashkil etilgan Chotqol biosfera qo‘riqxonasi tog‘ tabiati va yong‘oqzorlarni saqlab kelmoqda.',
    difficulty: 'O‘rtacha'
  },

  // Dars 12: Tabiiy geografik rayonlar
  {
    id: 56,
    lessonId: 12,
    lessonTitle: 'Tabiiy geografik rayonlar',
    question: 'Har tomondan baland tog‘lar bilan o‘ralgan unumdor qozonsimon vodiy qaysi?',
    options: ['Zarafshon vodiysi', 'Farg‘ona vodiysi', 'Surxon-Sherobod vodiysi', 'Mirzacho‘l'],
    correctAnswerIndex: 1,
    explanation: 'Farg‘ona vodiysi Chotqol, Qurama, Olay va Farg‘ona tizmalari bilan qurshalgan O‘rta Osiyoning eng mashhur vodiysidir.',
    difficulty: 'Oson'
  },
  {
    id: 57,
    lessonId: 12,
    lessonTitle: 'Tabiiy geografik rayonlar',
    question: 'O‘zbekistonning eng janubiy va anor, anjir, xurmo kabi subtropik ekinlar yetishtiriladigan tabiiy rayoni qaysi?',
    options: ['Quyi Amudaryo', 'Surxondaryo rayoni', 'Toshkent-Mirzacho‘l', 'Ustyurt'],
    correctAnswerIndex: 1,
    explanation: 'Surxondaryo viloyati tog‘lar bilan sovuq havodan to‘silgan bo‘lib, eng issiq subtropik iqlimga ega.',
    difficulty: 'Oson'
  },
  {
    id: 58,
    lessonId: 12,
    lessonTitle: 'Tabiiy geografik rayonlar',
    question: 'Ustyurt platosining tik qoyali, jarlikli chekkalari geografiyada nima deyiladi?',
    options: ['Barxan', 'Chink', 'Voha', 'Morena'],
    correctAnswerIndex: 1,
    explanation: 'Ustyurt platosining dengiz yoki pasttekislikka qaragan tik jarliklari “chink” deb ataladi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 59,
    lessonId: 12,
    lessonTitle: 'Tabiiy geografik rayonlar',
    question: 'Qizilqum cho‘li o‘rtasida qad ko‘targan qadimgi qoldiq tog‘lar qaysi?',
    options: ['Tomditov va Quljuqtov', 'Hisor va Zarafshon', 'Chotqol va Piskom', 'Ugom va Qorjontov'],
    correctAnswerIndex: 0,
    explanation: 'Qizilqum cho‘lida Tomditov, Quljuqtov va Bo‘kantov kabi qoldiq tog‘ massivlari mavjud.',
    difficulty: 'Qiyin'
  },
  {
    id: 60,
    lessonId: 12,
    lessonTitle: 'Tabiiy geografik rayonlar',
    question: 'O‘zbekiston tabiiy sharoitiga ko‘ra qaysi ikkita yirik o‘lkaga ajratiladi?',
    options: ['Tundra va Tayga', 'Turon tekislik o‘lkasi va O‘rta Osiyo tog‘li o‘lkasi', 'Sahroi Kabir va Savanna', 'Mo‘tadil va Tropik'],
    correctAnswerIndex: 1,
    explanation: 'O‘zbekiston hududi relyefi jihatidan Turon tekislik o‘lkasi va sharqdagi O‘rta Osiyo tog‘li o‘lkasiga bo‘linadi.',
    difficulty: 'O‘rtacha'
  },

  // Dars 13: Aholi va aholi joylashuvi
  {
    id: 61,
    lessonId: 13,
    lessonTitle: 'Aholi va aholi joylashuvi',
    question: 'Bugungi kunda O‘zbekiston Respublikasi aholisi soni qancha?',
    options: ['20 milliondan ortiq', '28 milliondan ortiq', '37 milliondan ortiq', '55 milliondan ortiq'],
    correctAnswerIndex: 2,
    explanation: 'O‘zbekiston aholisi 37 million kishidan oshgan bo‘lib, Markaziy Osiyoda aholisi eng ko‘p davlatdir.',
    difficulty: 'Oson'
  },
  {
    id: 62,
    lessonId: 13,
    lessonTitle: 'Aholi va aholi joylashuvi',
    question: 'O‘zbekistonda aholi zichligi eng yuqori bo‘lgan viloyat qaysi?',
    options: ['Navoiy viloyati', 'Andijon viloyati', 'Qashqadaryo viloyati', 'Buxoro viloyati'],
    correctAnswerIndex: 1,
    explanation: 'Andijon viloyatida 1 km² ga 750 kishidan ziyod to‘g‘ri kelib, respublikada eng zich hudud hisoblanadi.',
    difficulty: 'Oson'
  },
  {
    id: 63,
    lessonId: 13,
    lessonTitle: 'Aholi va aholi joylashuvi',
    question: 'O‘zbekiston Respublikasining poytaxti qaysi shahar?',
    options: ['Samarqand', 'Buxoro', 'Toshkent', 'Namangan'],
    correctAnswerIndex: 2,
    explanation: 'O‘zbekistonning poytaxti Toshkent shahri bo‘lib, aholisi 3 milliondan oshgan yirik megapolisdir.',
    difficulty: 'Oson'
  },
  {
    id: 64,
    lessonId: 13,
    lessonTitle: 'Aholi va aholi joylashuvi',
    question: 'Shaharlar soni va shahar aholisi ulushining ortib borishi jarayoni nima deyiladi?',
    options: ['Migratsiya', 'Urbanizatsiya', 'Demografiya', 'Aglomeratsiya'],
    correctAnswerIndex: 1,
    explanation: 'Shaharlashish, ya’ni shahar aholisi nufuzining ortishi urbanizatsiya deyiladi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 65,
    lessonId: 13,
    lessonTitle: 'Aholi va aholi joylashuvi',
    question: 'O‘zbekistonning maydoni jihatidan eng yirik, biroq aholi zichligi eng past bo‘lgan viloyati qaysi?',
    options: ['Navoiy viloyati', 'Farg‘ona viloyati', 'Sirdaryo viloyati', 'Xorazm viloyati'],
    correctAnswerIndex: 0,
    explanation: 'Navoiy viloyatining katta qismi Qizilqum cho‘lida joylashgan bo‘lib, hududi juda katta, lekin aholi zichligi past.',
    difficulty: 'O‘rtacha'
  },

  // Dars 14: O‘zbekiston xo‘jaligi
  {
    id: 66,
    lessonId: 14,
    lessonTitle: 'O‘zbekiston xo‘jaligi',
    question: 'O‘zbekistonda yengil avtomobillar ishlab chiqaruvchi birinchi zavod qaysi shaharda barpo etilgan?',
    options: ['Toshkent', 'Asaka', 'Samarqand', 'Navoiy'],
    correctAnswerIndex: 1,
    explanation: 'Andijon viloyatining Asaka shahrida 1996-yilda yengil avtomobil zavodi ochilgan.',
    difficulty: 'Oson'
  },
  {
    id: 67,
    lessonId: 14,
    lessonTitle: 'O‘zbekiston xo‘jaligi',
    question: 'Toshkent, Samarqand va Buxoro shaharlarini bog‘lab turuvchi tezyurar yo‘lovchi poyezdi qanday ataladi?',
    options: ['Sharq', 'Afrosiyob', 'Nasaf', 'Lochin'],
    correctAnswerIndex: 1,
    explanation: '“Afrosiyob” tezyurar elektropoyezdi 250 km/soat tezlikda yo‘lovchilarni manziliga yetkazadi.',
    difficulty: 'Oson'
  },
  {
    id: 68,
    lessonId: 14,
    lessonTitle: 'O‘zbekiston xo‘jaligi',
    question: 'O‘zbekiston qishloq xo‘jaligida qaysi texnika ekini eng katta maydonlarni egallaydi?',
    options: ['Qand lavlagi', 'G‘o‘za (paxta)', 'Kungaboqar', 'Choy'],
    correctAnswerIndex: 1,
    explanation: 'G‘o‘za (paxta) yurtimizning an’anaviy va yetakchi texnika ekini hisoblanadi.',
    difficulty: 'Oson'
  },
  {
    id: 69,
    lessonId: 14,
    lessonTitle: 'O‘zbekiston xo‘jaligi',
    question: 'Sanoatda xomashyo yetishtirishdan to tayyor mahsulot ishlab chiqarishgacha bo‘lgan zanjirni birlashtiruvchi zamonaviy tizim nima deyiladi?',
    options: ['Klaster', 'Monopoliya', 'Konsern', 'Birja'],
    correctAnswerIndex: 0,
    explanation: 'Klaster — paxta, to‘qimachilik va qishloq xo‘jaligida xomashyoni chuqur qayta ishlovchi zamonaviy korxonalar majmuasidir.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 70,
    lessonId: 14,
    lessonTitle: 'O‘zbekiston xo‘jaligi',
    question: 'Qora metallurgiya markazi bo‘lgan va metall prokati ishlab chiqaruvchi zavod qaysi shaharda?',
    options: ['Bekobod', 'Urganch', 'Jizzax', 'Guliston'],
    correctAnswerIndex: 0,
    explanation: 'Bekobod shahrida O‘zbekiston metallurgiya kombinati (O‘zmetkombinat) faoliyat yuritadi.',
    difficulty: 'O‘rtacha'
  },

  // Dars 15: Tabiiy resurslar
  {
    id: 71,
    lessonId: 15,
    lessonTitle: 'Tabiiy resurslar va ulardan oqilona foydalanish',
    question: 'Quyidagilardan qaysi biri tugamaydigan (qayta tiklanuvchi) tabiiy resurs hisoblanadi?',
    options: ['Toshko‘mir', 'Quyosh energiyasi', 'Neft', 'Tabiiy gaz'],
    correctAnswerIndex: 1,
    explanation: 'Quyosh nuri, shamol kuchi va suv to‘lqinlari tabiatda tugamaydigan resurslar guruhiga kiradi.',
    difficulty: 'Oson'
  },
  {
    id: 72,
    lessonId: 15,
    lessonTitle: 'Tabiiy resurslar va ulardan oqilona foydalanish',
    question: 'O‘zbekistonda chuchuk suv resurslarining eng katta qismi (taxminan 90%) nima uchun sarflanadi?',
    options: ['Ichimlik suvi uchun', 'Sanoat korxonalari uchun', 'Qishloq xo‘jaligi ekinlarini sug‘orish uchun', 'Avtomobillarni yuvish uchun'],
    correctAnswerIndex: 2,
    explanation: 'Mamlakatimizda foydalaniladigan suvning 90 foizga yaqini qishloq xo‘jaligi dalalarini sug‘orishga sarflanadi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 73,
    lessonId: 15,
    lessonTitle: 'Tabiiy resurslar va ulardan oqilona foydalanish',
    question: 'Ekinlarni sug‘orishda suvni 40-50% tejovchi eng samarali innovatsion usul qaysi?',
    options: ['Egallardan bostirib oqizish', 'Tomchilatib sug‘orish', 'Daryo toshirish', 'Kanallarni ochib qo‘yish'],
    correctAnswerIndex: 1,
    explanation: 'Tomchilatib sug‘orish suvni to‘g‘ridan-to‘g‘ri o‘simlik ildiziga yetkazadi va suvni ikki barobargacha tejaydi.',
    difficulty: 'Oson'
  },
  {
    id: 74,
    lessonId: 15,
    lessonTitle: 'Tabiiy resurslar va ulardan oqilona foydalanish',
    question: 'Quyosh panellari yordamida quyosh nuridan elektr energiyasi oladigan inshoot nima deyiladi?',
    options: ['Fotoelektr stansiyasi (FES)', 'Gidroelektrstansiya (GES)', 'Issiqlik elektr stansiyasi (IES)', 'Atom stansiyasi (AES)'],
    correctAnswerIndex: 0,
    explanation: 'Quyosh fotoelektr stansiyalari (FES) quyosh nurlarini to‘g‘ridan-to‘g‘ri elektr quvvatiga aylantiradi.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 75,
    lessonId: 15,
    lessonTitle: 'Tabiiy resurslar va ulardan oqilona foydalanish',
    question: 'O‘zbekistonda yirik shamol elektr stansiyalari asosan qaysi hududlarda qurilmoqda?',
    options: ['Toshkent shahri markazida', 'Zarafshon va Qoraqalpog‘istonning keng tekisliklarida', 'Farg‘ona vodiysining bog‘larida', 'Surxondaryo g‘orlarida'],
    correctAnswerIndex: 1,
    explanation: 'Navoiy viloyatining Zarafshon hududi va Qoraqalpog‘istonda kuchli shamol oqimlari mavjud bo‘lib, shamol turbinalari o‘rnatilmoqda.',
    difficulty: 'Qiyin'
  },

  // Dars 16: Ekologik muammolar va Orol fojiasi
  {
    id: 76,
    lessonId: 16,
    lessonTitle: 'Ekologik muammolar va Orol fojiasi',
    question: 'Orol dengizining qurishiga olib kelgan asosiy sabab nima edi?',
    options: ['Meteroit tushishi', 'Amudaryo va Sirdaryo suvlarining haddan tashqari ko‘p sug‘orishga olinishi', 'Zilzila natijasida yer yorilishi', 'Havo haroratining birdaniga 50 darajaga ko‘tarilishi'],
    correctAnswerIndex: 1,
    explanation: 'Paxtachilik va qishloq xo‘jaligini kengaytirish uchun daryo suvlari haddan ortiq burib yuborildi va dengizga suv yetib bormadi.',
    difficulty: 'Oson'
  },
  {
    id: 77,
    lessonId: 16,
    lessonTitle: 'Ekologik muammolar va Orol fojiasi',
    question: 'Orol dengizining qurigan tubida paydo bo‘lgan yangi cho‘l qanday nomlandi?',
    options: ['Qizilqum', 'Orolqum', 'Qoraqum', 'Saxara'],
    correctAnswerIndex: 1,
    explanation: 'Qurigan dengiz tubida 5 million gektardan ziyod maydonda “Orolqum” cho‘li paydo bo‘ldi.',
    difficulty: 'Oson'
  },
  {
    id: 78,
    lessonId: 16,
    lessonTitle: 'Ekologik muammolar va Orol fojiasi',
    question: 'Orol dengizining qurigan tubida chang va tuz bo‘ronlarini to‘xtatish uchun qaysi o‘simlik ekilmoqda?',
    options: ['Bambuk', 'Saksovul', 'Binafsha', 'Archa'],
    correctAnswerIndex: 1,
    explanation: 'Saksovul sho‘r va qurg‘oqchil sharoitga chidamli bo‘lib, millionlab gektar Orol tubiga ekilmoqda.',
    difficulty: 'Oson'
  },
  {
    id: 79,
    lessonId: 16,
    lessonTitle: 'Ekologik muammolar va Orol fojiasi',
    question: 'Orolbo‘yi mintaqasidagi ekologik vaziyatni yaxshilash bo‘yicha tuzilgan xalqaro jamg‘arma qanday nomlanadi?',
    options: ['Orolni qutqarish xalqaro jamg‘armasi (OQXJ)', 'UNESCO', 'Greenpeace', 'Qizil Xoch'],
    correctAnswerIndex: 0,
    explanation: 'Markaziy Osiyo davlatlari hamkorligida Orolni qutqarish xalqaro jamg‘armasi faoliyat olib bormoqda.',
    difficulty: 'O‘rtacha'
  },
  {
    id: 80,
    lessonId: 16,
    lessonTitle: 'Ekologik muammolar va Orol fojiasi',
    question: 'Atrof-muhitni ifloslantirmaslik va tabiiy muvozanatni asrash haqidagi fan qaysi?',
    options: ['Astronomiya', 'Ekologiya', 'Geologiya', 'Tarix'],
    correctAnswerIndex: 1,
    explanation: 'Ekologiya — tirik organizmlarning atrof-muhit bilan o‘zaro munosabatlarini va tabiat musaffoligini o‘rganuvchi fandir.',
    difficulty: 'Oson'
  }
];
