import { Story } from '../types';

export const dummyStories: Story[] = [
  {
    id: 'takdir-sang-ceo',
    title: 'Takdir Sang CEO & Sekretaris Rahasia',
    author: 'Karin Wijaya',
    coverImage: '/src/assets/images/ceo_secret_cover_1785146506206.jpg',
    synopsis:
      'Lia terpaksa menyamar sebagai sekretaris pribadi Aris, CEO muda yang terkenal dingin dan tak tersentuh. Ketika rahasia keluarga terungkap di malam gala, Lia harus memilih antara profesi, balas dendam, atau pesona sang CEO.',
    category: 'Romance',
    ageRating: '18+',
    isInteractive: true,
    totalEndings: 3,
    readCount: 98400,
    rating: 4.8,
    chaptersCount: 12,
    tags: ['Interaktif', 'CEO Romance', 'Secret Identity', 'Drama'],
    initialSceneId: 'ceo-scene-1',
    scenes: {
      'ceo-scene-1': {
        id: 'ceo-scene-1',
        title: 'Bab 1: Pintu Lift Lantai 40',
        chapterNumber: 1,
        content: [
          'Dentang pintu lift lantai 40 gedung perkantoran Megah Tower berbunyi pelan.',
          'Aris berdiri memunggungiku, memegang segelas espresso panas. Bahunya yang tegap dibalut jas Armani pesanan khusus.',
          '"Sekretaris Lia," panggilnya tanpa menoleh. "Dokumen akuisisi sudah kamu persiapkan?"',
          'Jantungku berdegup kencang. Di dalam tas kulitku, ada berkas asli yang bisa menghancurkan perusahaan ini... sekaligus bukti kejahatan pamannya pada keluargaku.',
          'Ini saatnya menentukan langkah pertamaku.'
        ],
        choices: [
          {
            id: 'ceo-c1',
            text: 'Serahkan Berkas Asli',
            description: 'Mengungkapkan kejujuran pada Aris',
            targetSceneId: 'ceo-scene-2a',
            badge: 'Jalur Kejujuran'
          },
          {
            id: 'ceo-c2',
            text: 'Tukar dengan Berkas Palsu',
            description: 'Melindungi rencana balas dendam',
            targetSceneId: 'ceo-scene-2b',
            badge: 'Jalur Intrik'
          }
        ]
      },
      'ceo-scene-2a': {
        id: 'ceo-scene-2a',
        title: 'Bab 2: Pengakuan di Ruang Kerja',
        chapterNumber: 2,
        content: [
          'Aris menatap berkas di tangannya. Matanya membelalak kaget saat membaca isi dokumen tersebut.',
          '"Lia... dari mana kamu mendapatkan ini?" suaranya tertahan.',
          'Aku melangkah mendekat. "Karena aku adalah putri dari mendiang direktur utama yang dulu kalian singkirkan..."'
        ],
        choices: [
          {
            id: 'ceo-end',
            text: 'Kembali ke Katalog',
            description: 'Gairah Irene adalah cerita lengkap utama. Cerita ini dummy preview.',
            targetSceneId: 'ceo-scene-1',
            badge: 'Dummy Preview'
          }
        ]
      },
      'ceo-scene-2b': {
        id: 'ceo-scene-2b',
        title: 'Bab 2: Topeng Penyamaran',
        chapterNumber: 2,
        content: [
          'Aris mengambil berkas palsu tanpa curiga sedikit pun. Dia tersenyum tipis—sebuah pemandangan langka.',
          '"Kerja bagus, Lia. Malam ini kamu ikut saya ke Gala Dinner."'
        ],
        choices: [
          {
            id: 'ceo-end2',
            text: 'Kembali ke Katalog',
            description: 'Gairah Irene adalah cerita lengkap utama. Cerita ini dummy preview.',
            targetSceneId: 'ceo-scene-1',
            badge: 'Dummy Preview'
          }
        ]
      }
    }
  },
  {
    id: 'misteri-malam-merah',
    title: 'Misteri Malam Merah: Kamar 404',
    author: 'Reza Noir',
    coverImage: '/src/assets/images/mystery_hotel_cover_1785146518754.jpg',
    synopsis:
      'Detektif Erika menyelidiki kasus hilangnya pewaris kaya di Hotel Grand Aurora pada malam penuh kabut merah. Setiap keputusan investigasi menentukan hidup mati target dan terungkapnya konspirasi rahasia.',
    category: 'Thriller',
    ageRating: '18+',
    isInteractive: true,
    totalEndings: 5,
    readCount: 76200,
    rating: 4.7,
    chaptersCount: 15,
    tags: ['Interaktif', 'Misteri', 'Detektif', 'Noir', 'Pilihan Bebas'],
    initialSceneId: 'hotel-scene-1',
    scenes: {
      'hotel-scene-1': {
        id: 'hotel-scene-1',
        title: 'Bab 1: Jejak di Kamar 404',
        chapterNumber: 1,
        content: [
          'Hujan asam mengguyur kaca jendela kamar 404 Hotel Grand Aurora.',
          'Kunci kamar tergantung longgar. Di atas meja nakas tua, ada jam saku antik yang berdetak terbalik dan surat bersimbah lilin merah.',
          'Suara langkah sepatu bergaung di lorong luar. Seseorang sedang menuju ke sini!'
        ],
        choices: [
          {
            id: 'h-c1',
            text: 'Sembunyi di Belakang Tirai',
            description: 'Mengamati penyusup dari tempat tersembunyi',
            targetSceneId: 'hotel-scene-2a',
            badge: 'Taktik Senyap'
          },
          {
            id: 'h-c2',
            text: 'Siapkan Pistol & Hadapi Pintu',
            description: 'Menyerbu penyusup secara langsung',
            targetSceneId: 'hotel-scene-2b',
            badge: 'Konfrontasi'
          }
        ]
      },
      'hotel-scene-2a': {
        id: 'hotel-scene-2a',
        title: 'Bab 2: Bayangan Malam',
        chapterNumber: 2,
        content: [
          'Pintu terbuka pelan. Sosok bertopeng hitam melangkah masuk memegang koper perak...'
        ],
        choices: [
          {
            id: 'h-end',
            text: 'Kembali ke Katalog',
            description: 'Gairah Irene adalah cerita lengkap utama.',
            targetSceneId: 'hotel-scene-1'
          }
        ]
      },
      'hotel-scene-2b': {
        id: 'hotel-scene-2b',
        title: 'Bab 2: Penyergapan Terbuka',
        chapterNumber: 2,
        content: [
          'Pintu didobrak! Pria misterius itu terkejut melihat todongan pistolku...'
        ],
        choices: [
          {
            id: 'h-end2',
            text: 'Kembali ke Katalog',
            description: 'Gairah Irene adalah cerita lengkap utama.',
            targetSceneId: 'hotel-scene-1'
          }
        ]
      }
    }
  },
  {
    id: 'bayangan-tahta',
    title: 'Bayangan Di Balik Tahta',
    author: 'Arya Sastra',
    coverImage: '/src/assets/images/gairah_irene_cover_1785146491606.jpg', // uses aesthetic cover
    synopsis:
      'Di Kekaisaran Nusantara Kerajaan Astina, Putri Kirana dihadapkan pada perebutan takhta antara pangeran pemberontak dan panglima perang. Siapakah yang akan ia beri dukungan?',
    category: 'Fantasy',
    ageRating: '13+',
    isInteractive: true,
    totalEndings: 4,
    readCount: 54100,
    rating: 4.9,
    chaptersCount: 18,
    tags: ['Interaktif', 'Kerajaan', 'Intrik Politik', 'Kekaisaran'],
    initialSceneId: 'tahta-1',
    scenes: {
      'tahta-1': {
        id: 'tahta-1',
        title: 'Bab 1: Malam Penobatan',
        chapterNumber: 1,
        content: [
          'Lilin-lilin emas menerangi aula istana Astina. Mahkota kekaisaran berkilau di atas bantalan beludru.',
          'Panglima Mahardika mendekatiku, membisikkan peringatan tentang kudeta yang direncanakan Pangeran Danendra malam ini.'
        ],
        choices: [
          {
            id: 't-c1',
            text: 'Beri Isyarat pada Pengawal Istana',
            description: 'Mengamankan istana secara mendadak',
            targetSceneId: 'tahta-1',
            badge: 'Keamanan'
          }
        ]
      }
    }
  }
];
