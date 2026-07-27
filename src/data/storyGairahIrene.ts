import { Story } from '../types';

export const gairahIreneStory: Story = {
  id: 'gairah-irene',
  title: 'Gairah Irene',
  author: 'Xplora Studio',
  coverImage: '/src/assets/images/gairah_irene_cover_1785146491606.jpg',
  synopsis:
    'Irene (20), mahasiswi Universitas Aura Bhakti, terjebak dalam pusaran gairah dan ancaman terlarang dengan Dosen Pembimbingnya, Andre (28). Ketika rahasia mereka terekam oleh sang Rektor, Irene dihadapkan pada pilihan-pilihan ekstrem yang akan menentukan jalan hidupnya. Mampukah ia mempertahankan harga diri, ataukah ia tenggelam dalam takdir yang berbahaya?',
  category: 'Romance',
  ageRating: '18+',
  isInteractive: true,
  totalEndings: 4,
  readCount: 142500,
  rating: 4.9,
  chaptersCount: 9,
  tags: ['Interaktif', 'Bercabang', 'Romance Drama', 'Dosen & Mahasiswi', 'Multiple Endings', 'Dewasa 18+'],
  initialSceneId: 'scene-1',
  scenes: {
    'scene-1': {
      id: 'scene-1',
      title: 'Bab 1: Bisikan dan Mimpi',
      chapterNumber: 1,
      content: [
        'Cinta itu buta. Tapi di kampus ini, cinta itu bahaya.',
        'Namaku Irene, 20 tahun. Aku hanya mahasiswi biasa yang sedang mengejar kelulusan di Universitas Aura Bhakti. Namun di balik semuanya, ada hati yang mencari tempat untuk berlabuh, juga jiwa yang ingin menjadi wanita seutuhnya.',
        'Dan dia... Andre, 28 tahun. Dosen Pembimbing Akademik yang baru. Tatapannya menawarkan perlindungan, namun senyumnya menjanjikan dosa.',
        'Hujan deras menghantam jendela kelas. Langit sore berwarna ungu pekat. Kampus sudah sepi, hanya ada aku di sini.',
        'Pintu kelas terbuka perlahan. Sosok tinggi itu masuk. Andre. Jalannya yang tegap sesuai dengan tubuhnya yang atletis.',
        '"Irene... Aku tahu kamu menungguku." Suaranya berat, menggema di ruang kosong ini.',
        'Aku melangkah mendekatinya. Jarak kami menipis. Aroma parfumnya yang maskulin bercampur wangi hujan memabukkan. Dia mengangkat tangannya, menyentuh pipiku dengan punggung jarinya yang hangat.',
        '"Ini salah, Irene. Tapi kenapa terasa begitu benar?"',
        '"Tidak ada yang melihat kita, Pak..." bisikku.',
        'Tanganku mulai membuka kancing kemejaku perlahan. Aku melepaskan rok ke bawah sambil menatap matanya. Napasnya memburu. Dia menarik pinggangku, menempelkan tubuhku padanya. Aku bisa merasakan detak jantungnya yang menggila.',
        'Bibir kami bertemu. Bukan ciuman ragu-ragu, melainkan ledakan hasrat yang tertahan lama. Dunia seakan berhenti berputar. Kami tenggelam dalam rasa dan saling berbalas ciuman.',
        'Dia mengangkat tubuhku ke atas meja. "Kamu milikku, Irene," bisiknya di telingaku, membuat sekujur tubuhku merinding hebat. Lalu dia melepaskan kait braku…',
        'Tiba-tiba, suara guntur menggelegar sangat keras! Disusul benda keras menghantam meja.',
        '"IRENE! Malah tidur! Kerjakan soal di papan tulis sekarang!"',
        'Suara Bu Talia melengking. Aku terkaget, sadar bahwa kemesraan tadi hanya mimpi. Segera aku berjalan ke depan kelas dengan malu.'
      ],
      choices: [
        {
          id: 'choice-to-scene-2',
          text: 'Lanjutkan ke Ruang BP',
          description: 'Mencari kesempatan berbicara dengan Pak Andre',
          targetSceneId: 'scene-2',
          badge: 'Lanjut Cerita'
        }
      ]
    },

    'scene-2': {
      id: 'scene-2',
      title: 'Bab 2: Ruang BP & Godaan',
      chapterNumber: 2,
      content: [
        'Saat istirahat, seluruh kampus gempar. Mahasiswi-mahasiswi berbisik di setiap sudut, membicarakan senyum Andre, matanya, dan kelembutannya sebagai Dosen Pembimbing Akademik.',
        'Aku melihatnya berjalan sendirian di lorong sepi. Ini kesempatanku untuk mewujudkan mimpiku. Aku merapikan bajuku dan berjalan mendekat, menyapanya dengan sopan.',
        '"Selamat pagi, Irene. Kamu terlihat bersemangat hari ini," ucapnya dengan suara bariton yang hangat.',
        'Karena gugup, kakiku tersandung dan dengan sigap dia menolongku. "Hati-hati, Irene. Jangan sampai terluka." Sentuhannya membekas panas di kulitku.',
        'Tiba-tiba Bu Talia menghampiri kami, "Ehem. Andre, rapat senat lima menit lagi. Dan kamu, Irene, masuk kelas, sudah mulai jam kuliah."',
        'Bu Talia, tunangan Andre sekaligus Dosen Biologi. Tatapannya tajam, seolah dia bisa mencium aroma niatku.',
        'Siang itu, aku beralasan butuh konseling akademik. Di ruangan tertutup itu, hanya ada kami berdua. Aku membayangkan... lebih dari sekadar curhat.',
        'Aku duduk di kursi di seberang meja Andre. Rokku tersingkap tinggi hingga terlihat seksi dan menggoda.'
      ],
      choices: [
        {
          id: 'choice-2a',
          text: 'Pilihan 2a: Bayangkan Dia Memelukku',
          description: 'Hanyut dalam fantasi romantis dan bayangan pelukan Andre',
          targetSceneId: 'scene-2a',
          badge: 'Hasrat Fantasi'
        },
        {
          id: 'choice-2b',
          text: 'Pilihan 2b: Realita Saat Ini',
          description: 'Menghadapi kenyataan percakapan konseling dan konflik nyata',
          targetSceneId: 'scene-2b',
          badge: 'Jalur Realita'
        }
      ]
    },

    'scene-2a': {
      id: 'scene-2a',
      title: 'Bab 2a: Bayangkan Dia Memelukku',
      chapterNumber: 2,
      content: [
        'Dunia di luar ruangan tertutup ini seolah lenyap seketika. Suara rintik hujan yang menghantam kaca jendela ruangan terasa samar, terkalahkan oleh gemuruh debar dada yang kian tak terkendali.',
        'Aku tidak bisa hanya duduk diam menatapnya dari seberang meja. Ada magnet kuat yang menyedot seluruh keberanianku.',
        'Aku berdiri perlahan dari kursi. Setiap langkahku terasa berat namun pasti, mendekati pintu kayu ruangan tersebut. Dengan jemari yang sedikit gemetar, aku memutar kunci. Bunyi \'klik\' yang pelan namun tegas memecah keheningan, mengunci kami berdua dalam dimensi yang terpisah dari norma kampus.',
        'Andre menoleh saat mendengar bunyi itu. Senyum tipis yang sarat akan pesona misterius terukir di sudut bibirnya—senyum yang selalu membuat pertahananku runtuh. Dia tidak marah, tidak pula terkejut. Justru ada binar gairah dan kehangatan yang mendalam di balik manik matanya yang tajam.',
        '"Nakal ya kamu, Irene..." bisiknya lembut. Suara baritonnya bagaikan alunan musik yang memabukkan, bergema langsung di lubuk hatiku.',
        'Dia beranjak dari kursi kebesarannya. Langkah kakinya yang tenang dan berwibawa mengitari meja kayu tebal itu, perlahan namun pasti memangkas jarak di antara kami. Setiap incinya melangkah, aroma parfum maskulin bertema woody dan vanilla bercampur wangi hujan samar menusuk indera penciumanku, menciptakan rasa aman sekaligus hasrat yang tak terbatasi.',
        'Aku mundur hingga punggungku menyentuh dinding dingin ruangan. Namun rasa dingin itu seketika sirna saat Andre menyudutkanku. Kedua tangannya yang kekar dan maskulin bertumpu di dinding, tepat di kiri dan kanan kepalaku, mengunciku sepenuhnya dalam lingkaran pesonanya.',
        '"Aku sudah menahan diri sejak pertama kali kamu melangkah masuk ke ruangan ini, Irene," bisiknya pelan, napas hangatnya berembus lembut menerpa kening dan pipiku. Ada getaran kerinduan yang sangat dalam dari setiap kata yang diucapkannya.',
        'Tangannya yang hangat dan lembut bergerak turun dari dinding, perlahan menyusuri garis rahangku, lalu membelai leher jenjangku dengan kelembutan yang amat sangat. Sentuhan jemarinya bagaikan aliran listrik bertegangan rendah yang menyengat halus, membuatku memejamkan mata dan mendongak pasrah, menyerahkan seluruh diriku pada buaian rasanya.',
        '"Pak... Andre..." namaku memanggilnya dengan nada lirih yang nyaris hilang, tertahan oleh gejolak rasa di dada.',
        '"Panggil aku Andre jika kita sedang berdua seperti ini," bisiknya penuh kehangatan. Tatapan matanya yang teduh mengunci mataku. Di sana, aku tidak menemukan sosok Dosen Pembimbing yang kaku dan penuh aturan, melainkan seorang pria dewasa yang penuh kasih sayang, merindukan kehangatan jiwa yang sama sepertiku.',
        'Dia mendekatkan tubuhnya. Pinggangku disambut oleh dekapan tangannya yang kuat namun begitu protektif. Dia menarik tubuhku makin merapat, menyatukan dua dada yang berdetak dalam irama yang sama cepatnya. Aku bisa merasakan kehangatan tubuhnya meresap melalui kain pakaian kami, seolah hendak meleburkan dua insan menjadi satu kesatuan yang utuh.',
        '"Kamu terlalu indah untuk sekadar jadi impian, Irene," tutur Andre dengan nada suara yang begitu lembut dan penuh ketulusan. "Di tempat ini, di balik semua kerumitan dunia, kamu adalah satu-satunya hal yang terasa nyata bagiku."',
        'Perlahan, wajahnya semakin mendekat. Waktu seakan berhenti berputar. Tatapannya turun ke bibirku, lalu kembali menatap mataku seolah meminta izin secara tersirat. Aku membalas tatapannya, memberikan kepasrahan penuh. Jemari tanganku terangkat secara alami, meremas pelan bagian dada kemejanya, menyerap kehangatan tubuh yang selama ini hanya bisa kuharapkan dari kejauhan.',
        'Bibirnya hampir menyentuh bibirku—hanya berjarak sejuta mil. Hembusan napasnya yang hangat beraroma kopi dan mint terasa begitu manis di kulit bibirku. Jantungku berdegup amat kencang, bagaikan deru drum yang hendak meledak karena puncak romantisme yang begitu membuncah...',
        'Namun tepat sebelum penyatuan manis itu terjadi, sebuah kejutan tak kasat mata menyentak jiwaku. Sentuhan fantasi yang begitu sempurna itu perlahan memudar, memaksaku tertarik kembali secara mendadak ke alam realita.'
      ],
      choices: [
        {
          id: 'choice-from-2a-to-2b',
          text: 'Lanjutkan ke Realita',
          description: 'Kembali ke kenyataan bersama Pak Andre',
          targetSceneId: 'scene-2b'
        }
      ]
    },

    'scene-2b': {
      id: 'scene-2b',
      title: 'Bab 2b: Realita & Tamparan',
      chapterNumber: 2,
      content: [
        '"Kamu terlihat cemas, Irene. Ada yang mengganggumu?" Suara aslinya membuyarkan fantasiku.',
        'Dia mencondongkan tubuhnya, terlalu dekat.',
        '"Cuma lagi galau aja Pak," jawabku.',
        'Dia menghela napas, lalu berdiri mengitari meja. Tangannya yang maskulin menyentuh bahuku pelan. "Galau itu biasa kok. Tapi kamu bisa cerita semua, jangan dipendam sendiri."',
        'Aku memberanikan diri menyentuh punggung tangannya di bahuku. Dia tidak menariknya. Ruangan ini mendadak terasa sempit dan panas.',
        'Dia menatap tanganku yang menyentuhnya, lalu beralih ke mataku. "Irene... kamu anak yang cerdas. Apa kamu bahagia di rumah?"',
        '"Rumah sepi, Pak. Orang tua sibuk. Saya merasa... kosong." Aku menunduk, memasang wajah sedih yang kutahu dia sukai.',
        'Jempolnya mengusap bahuku pelan. "Anak secantik kamu pasti banyak yang naksir di kampus. Pacarmu tidak menghiburmu?"',
        '"Tidak ada, Pak. Cowok-cowok di sini kekanak-kanakan. Saya tidak tertarik dengan mereka." Aku menatapnya intens.',
        'Sudut bibirnya terangkat sedikit. "Oh? Jadi seleramu yang lebih... dewasa?" Tatapannya berubah, bukan lagi tatapan Dosen ke Mahasiswa.',
        '"Seseorang yang bisa mengerti saya. Ya, seperti Bapak contohnya," kataku setengah berbisik. Keheningan di antara kami menjadi sangat berat.',
        '"Irene..." bisiknya, suaranya parau. "Apakah kamu memikirkan apa yang saya pikirkan?"',
        'Aku berdiri, wajah kami kini sejajar. Aku bisa merasakan hembusan napas hangatnya yang berbau kopi. Jarak di antara kami menipis.',
        'Tepat saat wajah kami semakin mendekat, suara langkah kaki terdengar keras mendekati pintu. Andre melompat mundur dengan panik.',
        'Saat keluar ruangan, Talia sudah menunggu. PLAK! Tamparan keras mendarat di pipiku.',
        '"Jauhi tunanganku, jalang kecil!"',
        'Pulang kuliah, Andre menemukanku menangis di halte. "Maafkan Talia, Irene. Dia... posesif." Dia mengelus rambutku. Hujan mulai turun deras, menyamarkan air mataku.',
        'Kami duduk berdua di halte yang remang-remang, terisolasi dari dunia. Andre melepas jaketnya dan menyampirkannya di bahuku. Wangi maskulinnya menyelimutiku, membuatku merasa aman sekaligus liar.',
        '"Bapak baik sekali padaku... kenapa?" tanyaku pelan.',
        'Matanya menatapku dalam. "Karena kamu berbeda, Irene. Aku merasakan sesuatu pada dirimu." Tangannya menyeka air hujan di pipiku.'
      ],
      choices: [
        {
          id: 'choice-from-2b-to-3',
          text: 'Lanjutkan ke Perpustakaan',
          description: 'Melangkah ke pertemuan rahasia berikutnya',
          targetSceneId: 'scene-3',
          badge: 'Melanjutkan'
        }
      ]
    },

    'scene-3': {
      id: 'scene-3',
      title: 'Bab 3: Janji di Perpustakaan',
      chapterNumber: 3,
      content: [
        'Beberapa hari telah berlalu sejak insiden di ruang konseling itu. Suasana kampus perlahan tenang, namun kehangatan di antara kami justru kian membara secara tersembunyi.',
        'Sore itu, perpustakaan kampus sudah mulai sepi. Hanya ada riak angin sore yang menembus jendela semi-terbuka dan deretan rak buku tua yang menjulang tinggi, menyembunyikan kami dari pandangan dunia luar.',
        'Aku sedang berdiri di lorong paling ujung, berpura-pura mencari buku referensi untuk tugas akhirku, ketika sebuah langkah kaki yang familier terdengar mendekat. Aroma parfum maskulin bertema woody bercampur vanilla langsung merayapi inderaku sebelum sosoknya benar-benar terlihat.',
        '"Cari buku apa, Ren?" suara bariton Pak Andre berbisik tepat di belakang telingaku, membuat bulu kudukku merinding seketika.',
        'Aku menoleh perlahan. Pak Andre berdiri begitu dekat, terlindung oleh rimbunnya rak buku di kiri dan kanan kami. Kemejanya digulung hingga siku, membuatnya terlihat santai dan memikat.',
        '"Aku cari kamu," bisikku berani, menatap langsung ke dalam manik matanya yang dalam.',
        'Senyum tipis terukir di sudut bibirnya. Dia menggeser posisinya, mempersempit jarak hingga punggungku bersandar pada rak kayu tebal di belakangku. Kedua tangannya terangkat, bertumpu pada rak di sisi kiri dan kanan kepalaku, mengunciku dalam ruang pribadi yang intens dan tenang.',
        '"Kenapa? Kangen ya?" tuturnya lembut. Jemari tangannya terangkat menyelipkan helai rambutku ke belakang telinga. "Aku juga kangen kok."',
        '"Bagaimana dengan Bu Talia?" tanyaku pelan, menyuarakan kecemasan yang terpendam sejak hari itu.',
        'Andre menghela napas panjang, menatapku penuh kejujuran. "Aku dan Talia cuma dijodohin orang tua, ini bukan keinginanku. Orang tuaku berhutang banyak pada orang tua Talia. Mereka menjodohkanku dengan Talia begitu mengetahui Talia menyukaiku."',
        'Ungkapan jujurnya melelehkan seluruh keraguan dalam hatiku. Kami menghabiskan menit-menit berharga itu untuk saling bertukar cerita tentang masa lalu, impian yang belum terwujud, dan rasa sepi yang ternyata sama-sama kami rasakan.',
        'Di antara aroma kertas tua dan kesunyian perpustakaan, kami bukan lagi Dosen dan Mahasiswi, melainkan dua jiwa yang saling menemukan pelabuhan.',
        'Tatapannya makin dalam, menyusuri garis bibirku dengan pendar gairah dan kasih sayang yang berpadu. Wajahnya mendekat, hingga hembusan napas hangatnya yang beraroma kopi terasa menyapu kulitku. Tangannya mulai berani, dengan nakal masuk ke dalam rokku dan meraba pahaku.',
        'Sebelum suasana makin tak terkendali di tempat umum ini, Pak Andre menahan lajunya, lalu berbisik dengan suara parau yang bergetar rendah di telingaku.',
        '"Besok... besok kita ketemu di ruang kelas K10 setelah jam kuliah, kalau udah sepi ya. Kita perlu bicara tanpa gangguan."',
        'Aku mengangguk pelan dengan jantung yang berdegup kencang, menatap langkahnya yang menjauh meninggalkan ruang perpustakaan yang mendadak terasa makin hangat.'
      ],
      choices: [
        {
          id: 'choice-to-scene-4',
          text: 'Datang ke Ruang Kelas K10',
          description: 'Menemui Andre di kelas kosong di tengah hujan deras',
          targetSceneId: 'scene-4',
          badge: 'Pertemuan Rahasia'
        }
      ]
    },

    'scene-4': {
      id: 'scene-4',
      title: 'Bab 4: Ruang Kelas K10',
      chapterNumber: 4,
      content: [
        'Hujan deras di luar seakan hendak merubuhkan atap gedung kampus Aura Bhakti. Pintu ruang kelas K10 yang sepi meluapkan aroma udara dingin berpadu wangi tanah dan hujan.',
        'Pakaianku sedikit basah, menempel di kulit dan mencetak bentuk tubuhku saat aku bergegas masuk. Di dalam ruangan yang hanya diterangi remang cahaya sore, Andre sudah menunggu. Begitu aku melangkah masuk, bunyi klik kunci pintu yang diputar Andre bergaung sangat keras, mengunci kami sepenuhnya dari dunia luar.',
        'Tidak ada jalan kembali setelah ini.',
        'Andre berdiri di dekat meja dosen, menatapku dengan mata yang perlahan menggelap oleh gejolak yang ditahannya sekian lama.',
        '"Kamu seharusnya tidak di sini, Ren... Ini bahaya buat kamu, buat masa depanmu," bisiknya dengan suara bariton yang parau dan bergetar.',
        'Aku mendekatinya tanpa ragu, memangkas jarak hingga helaan napas kami saling beradu. "Tapi Bapak yang minta aku datang, kan?" kataku lembut namun menantang, mendongak menatap matanya. "Bukankah ini yang kita nantikan, Pak? Aku tahu kok yang Bapak mau."',
        'Andre menghela napas berat, matanya memancarkan perjuangan batin antara moralitas dan rasa cinta yang amat dalam. "Aku mencintaimu, Irene…" tuturnya penuh keputusasaan dan kehangatan yang melelehkan dadaku. "Rasa ini membakar hatiku tiap kali melihatmu. Kamu bukan sekadar mahasiswi buatku, kamu adalah pelabuhan jiwa yang selama ini aku cari."',
        '"Kalau begitu aku berhenti memanggil dirimu \'Pak\' ya," bisikku lirih. Jemariku bergerak pelan membuka satu per satu kancing atas kemejaku, membiarkannya terbuka hingga memperlihatkan belahan dadaku yang dibalut bra berwarna merah menyala.',
        'Tatapan Andre mengunci warna merah itu, lalu kembali menatap mataku yang membara. Suatu pelepasan emosi yang brutal seolah meledak di dalam dirinya. Benteng pertahanannya runtuh total.',
        'Andre menarik pinggangku secara kasar dan impulsif, membenturkan tubuhku ke tubuh tegapnya, dan melumat bibirku dengan ciuman yang memabukkan. "Kamu cantik banget hari ini, Ren."',
        'Ciuman itu bukan lagi usapan ragu-ragu; itu adalah ledakan gairah dan rasa lapar yang terpendam. Kami saling melumat dengan kelaparan yang buas, saling menghisap dan bertukar kehangatan seolah esok hari takkan pernah datang.',
        'Tangannya yang hangat dan bernafsu bergerak liar, menjelajah punggungku, memainkan tali braku dengan tidak sabar hingga kaitan itu terlepas. Tanpa membuang waktu, dia mengeluarkan puncak dadaku dari persembunyiannya. Mulutnya langsung gencar bermain di sana, menyedot dan melumatnya hingga aku terperanjat, melemparkan kepala ke belakang dalam erangan yang tak tertahan.',
        '"Ndre... ahh, Andre..." desahku serak, memanggil namanya untuk pertama kali tanpa sebutan formal.',
        '"Kamu milikku, Irene. Cuma milikku," bisiknya di antara sedotan panasnya di dadaku, menyalurkan rasa memiliki yang begitu dominan dan protektif.',
        'Dia mencengkeram pinggangku, menyerap tubuhku sepenuhnya, lalu mengangkat tubuhku ke atas meja dosen. Kontras antara meja yang dingin dan kehangatan tubuh Andre yang membakar membuat sekujur sarafku bergetar hebat. Moral, etika, dan batas status dosen-mahasiswa lenyap tak berbekas, terbakar habis oleh kobaran cinta dan gairah mentah.',
        'Dia kembali meluncurkan ciuman panasnya, napas kami saling memburu, dada kami yang tak berbusana bersatu rapat. "Kini kamu adalah milikku, sayang..." bisiknya parau, menatap dalam ke manik matanya dengan pendar kehangatan dan ketulusan yang membuncah.',
        'Aku melirik sejenak ke lantai; celana dalamku dan celana dalamnya kini sudah tergeletak berserakan di bawah meja. Dan tanpa sadar tubuh kami sudah menyatu tanpa penghalang.',
        '"Kamu terlihat luar biasa, sayang... indah sekali," puji Andre dengan suara berat yang menggetarkan hatiku.',
        'Jantungku seolah berhenti berdetak sesaat sebelum akhirnya berpacu dua kali lebih cepat saat jemari dan telapak tangannya mulai bermain indah dan intens di istana sensitifku. Usapan dan permainannya yang lihai membuat tubuhku melengkung pasrah dan basah.',
        '"Ahhh... sayang... Ndre...!"',
        'Ada rasa sakit yang manis dan desiran hangat luar biasa saat aku membiarkannya masuk lebih dalam ke hidupku. Ini adalah pertama kalinya aku bercinta, pertama kalinya menyerahkan seluruh raga dan mahkotaku kepada seorang pria.',
        'Rasa tegang dan nyeri yang asing seketika menyentak, tetapi perlahan mencair berganti kenikmatan mendalam saat sentuhan lembut dan tatapan penuh cinta dari Andre menyapu ketakutanku. Bukan hanya tubuhku yang ia buka, tapi juga gerbang menuju kedewasaan dan cinta sejati yang selama ini hanya kusaksikan dari jauh.',
        '"Lihat aku, sayang," bisik Andre dengan suara berat yang bergetar karena menahan dorongan gairah yang hebat. Dia menatapku lurus, membelai pipiku sambil memberikan dorongan yang semakin dalam, makin cepat, dan makin intens. "Lihat betapa aku memujamu."',
        '"I love you, sayang... Aku ini sekarang sepenuhnya milikmu," balasku berbisik parau sambil menatap matanya yang dipenuhi buaian asmara.',
        'Aku merasa seolah jiwaku sedang ditarik keluar dari raga, terbang melayang mengikuti setiap ayunan dan hentakan liar yang ia berikan. Helai demi helai pakaian kami telah tertanggal seluruhnya, menyisakan dua raga yang bertelanjang bulat, saling memeluk dan melebur. Jantungku kian berdegup kencang, tak ada lagi jarak, tak ada lagi rahasia di antara kami.',
        '"Ahh... ahhhh..." Kami saling mendesah kencang, melepas seluruh kepenatan, beban hidup, dan kerinduan terlarang ini dalam ritme penyatuan yang makin cepat, panas, dan tak terkendali.',
        'Hingga tepat di puncak pergolakan emosi dan gairah kami yang paling hebat, entakan-entakan terakhir itu melontarkan kami berdua ke puncak kenikmatan yang memabukkan. Kami terengah-engah dalam pelukan erat, menikmati setiap detik pelepasan emosi yang brutal dan saling memuaskan hingga napas kami perlahan kembali teratur.',
        'Saat Andre merebahkan kepalanya di bahuku dengan tatapan penuh kehangatan, mataku tak sengaja menangkap sekilas bayangan yang bergemelut di balik jendela kaca kelas.',
        '"Ndre... sebentar," bisikku kaku, rasa curiga mendadak menyelinap di antara sisa-sisa gairah kami. "Aku... aku seperti lihat ada orang yang ngintip dari balik jendela."',
        'Andre menoleh pelan ke arah jendela yang kini tampak sepi dan remang, lalu kembali menatapku sambil mengelus pipiku lembut. "Nggak ada apa-apa, sayang... Lupakan aja, kamu mungkin cuma salah lihat karena capek," ucapnya berusaha menenangkanku.',
        'Meski kata-katanya menyejukkan, ada ganjalan aneh yang tersisa di dalam dadaku saat kami perlahan merapikan pakaian masing-masing dan bersiap meninggalkan ruangan itu.'
      ],
      choices: [
        {
          id: 'choice-to-scene-5',
          text: 'Pulang ke Rumah',
          description: 'Merenungkan kejadian di kamar tidur',
          targetSceneId: 'scene-5',
          badge: 'Malam Sunyi'
        }
      ]
    },

    'scene-5': {
      id: 'scene-5',
      title: 'Bab 5: Teror Pesan Semalam',
      chapterNumber: 5,
      content: [
        'Malam melingkupi kota dengan hening yang pekat. Di dalam kamar tidurku yang remang, udara terasa begitu berat dan sepi. Tubuhku masih terasa lemas, menyisakan desiran hangat dan jejak-jejak sentuhan Andre dari peristiwa romantis sore tadi di ruang kelas K10.',
        'Setiap kali membayangkan bisikan cintanya dan bagaimana raga kami melebur di atas meja dosen, ada senyum tipis yang terukir di bibirku. Untuk pertama kalinya, aku merasa begitu diinginkan, begitu dicintai, dan merasa menjadi seorang wanita seutuhnya.',
        'Aku berbaring di atas kasur, memeluk bantal sambil menatap langit-langit kamar. Mengingat kembali kehangatan pelukannya di tengah gemuruh hujan sore tadi membuat dadaku berdesir bahagia. Rasa sakit yang manis di tubuhku seolah menjadi bukti nyata bahwa Andre adalah milikku, dan aku adalah miliknya.',
        'BZZZZ... BZZZZ...',
        'Dering getar ponsel di atas meja nakas mendadak memecah keheningan malam, mengejutkanku dari lamunan indah.',
        'Aku meraih ponsel itu dengan santai, mengira itu adalah pesan manis dari Andre yang mengucapkan selamat tidur atau sekadar menanyakan kabarku. Namun, layar menunjukkan sebuah nomor asing yang tidak tersimpan di kontakku. Tanpa prasangka buruk, aku membuka gelembung pesan WhatsApp tersebut.',
        'Hanya ada satu file video berdurasi singkat tanpa teks pendamping.',
        'Dengan rasa penasaran, aku menekan tombol play. Detik berikutnya, seluruh darah di tubuhku rasanya mendadak berhenti mengalir. Mukaku pucat pasi, dan jantungku berdegup amat kencang hingga terasa menyengat di dada.',
        'Layar ponsel menampilkan rekaman sudut atas yang sangat jelas dari luar jendela ruang kelas K10. Di dalam video itu... tampak diriku dan Andre.',
        'Siluet kami yang bertelanjang bulat, pergolakan gairah kami di atas meja, erangan kami, hingga setiap detail intim yang kami lakukan terekam dengan begitu sempurna. Tidak ada ruang untuk mengelak. Itu benar-benar kami.',
        'Ponsel di tanganku hampir saja terlepas karena jemariku bergetar hebat. Rasa mual yang parah mendadak menyerang perutku. Bayangan tentang kecurigaanku sore tadi—tentang bayangan yang bergemelut di balik jendela yang disanggah Andre sebagai "salah lihat"—kini menjelma menjadi mimpi buruk nyata yang paling mengerikan.',
        'Sebelum aku sempat mencerna ketakutan ini, sebuah pesan teks susulan masuk dari nomor yang sama:',
        '"Datang ke ruangan saya besok pulang kuliah. Sendirian. Atau video ini akan viral di grup orang tua mahasiswa, senat kampus, dan kementerian besok malam. - Rektor"',
        'Duniaku serasa runtuh seketika. Kata demi kata di layar itu membakar mataku.',
        'Rektor... Pria berkuasa yang paling ditakuti di kampus Aura Bhakti dialah yang memegang rekaman maut ini.',
        'Aku terduduk kaku di tepi kasur, memeluk diriku sendiri yang gemetar hebat dalam kegelapan kamar. Air mata dingin mulai menetes satu per satu membahasi pipiku. Ketakutan yang membakar menyelubungi seluruh pikiranku.',
        'Jika video ini menyebar, karier Andre sebagai dosen akan hancur total, nama baiknya akan tercemar selamanya, dan dia bisa dipenjara. Sementara aku... aku akan dikeluarkan dari kampus dengan rasa malu yang harus kubawa seumur hidup.',
        'Hari yang semula terasa begitu manis dan penuh kepuasan romantis, kini berubah menjadi penjara teror yang menyiksa, mengurungku dalam pilihan yang tak menawarkan jalan keluar.'
      ],
      choices: [
        {
          id: 'choice-to-scene-6',
          text: 'Menghadapi Pagi di Kantin',
          description: 'Menemui Andre dengan rahasia teror Rektor yang dipendam',
          targetSceneId: 'scene-6',
          badge: 'Dilema Besar'
        }
      ]
    },

    'scene-6': {
      id: 'scene-6',
      title: 'Bab 6: Kantin & Senyum Palsu',
      chapterNumber: 6,
      content: [
        'Pagi harinya, kantin utama Universitas Aura Bhakti riuh oleh riak tawa, denting sendok, dan perbincangan riang para mahasiswa. Namun bagiku, seluruh hiruk-pikuk itu terasa samar dan jauh. Suasana kantin yang cerah justru membuat dadaku kian sesak.',
        'Aku duduk sendirian di meja sudut, menatap cangkir teh yang sudah dingin dengan mata sembap dan pikiran yang melayang jauh ke pesan teror Rektor semalam. Setiap detik yang berlalu terasa seperti hitungan mundur menuju eksekusi mati.',
        'Tiba-tiba, aroma parfum maskulin bertema woody dan vanilla yang sangat kukenal merebak pelan.',
        'Andre berjalan masuk ke area kantin. Dia tampak begitu tampan dan segar dengan kemeja putih rapi yang terpasang sempurna. Senyum hangat terukir di wajahnya saat dia menyapa beberapa mahasiswa yang lewat. Dia terlihat begitu tenang, begitu bahagia, sama sekali tidak menyadari badai destruktif yang sedang menantinya di ujung hari.',
        'Langkah kaki Andre berbelok perlahan menuju mejaku. Saat melewatiku dengan berpura-pura santai demi menjaga formalitas di depan umum, dia membungkuk sedikit dan berbisik tepat di samping telingaku.',
        '"Kamu makin cantik hari ini, Ren... Pasti gara-gara kejadian manis kemarin sore, ya?" candanya dengan nada bariton yang hangat dan menggoda.',
        'Jantungku berdegup kencang—bukan lagi karena gejolak asmara yang memabukkan, melainkan karena rasa takut yang mengiris sembilu. Aku berusaha memaksakan senyum tipis agar dia tidak curiga, meski mataku menatapnya dengan keputusasaan yang dalam.',
        '"Bapak bisa saja..." jawabku sangat lirih, hampir berupa bisikan tipis yang tertahan di tenggorokan.',
        'Andre terkekeh pelan. Tanpa menarik perhatian mahasiswa lain yang lalu lalang, jemarinya secara diam-diam meletakkan sekaleng kopi dingin di sudut mejaku.',
        '"Biar semangat belajarnya, sayang," bisiknya lagi penuh perhatian.',
        'Perhatian kecil yang terasa begitu manis itu justru membuat tenggorokanku semakin tersumbat. Di bawah meja kayu kantin, saat dia berpura-pura merapikan posisi berdirinya, jari kelingking Andre menyentuh dan menyapu punggung tanganku sekilas.',
        'Sentuhan hangat dan lembut yang biasanya mampu menghapus seluruh beban hidupku, kini terasa begitu menyakitkan—seperti sebuah lambaian perpisahan sebelum segalanya hancur lebur.',
        '"Makasih ya... sayang," kataku pelan, membalas menggenggam jari kelingkingnya sekilas di bawah meja sebelum melepaskannya dengan berat hati.',
        'Maafkan aku, Andre... Maafkan aku, jerit hatiku dalam diam. Aku tidak bisa memberitahumu tentang video itu. Jika kamu tahu, kamu pasti akan bertindak nekat, dan karier serta masa depanmu sebagai dosen akan hancur seketika. Biar aku yang menanggung ketakutan ini sendiri.',
        'Andre menatapku dalam-dalam, menangkap keheningan yang tak biasa dari diriku. Dia mencondongkan tubuh sedikit, menatap mataku penuh harap. "Nanti malam mampir ke tempatku, ya? Aku mau masak enak buat kita berdua. Kita rayakan momen kemarin."',
        'Dada rasa diimpit beban berkuintal-kuintal. Aku tahu nanti malam aku tidak akan pernah bisa menikmati makan malam romantis bersamanya. Setelah jam kuliah ini berakhir, aku harus melangkah menuju ruangan lantai atas—menemui sang \'eksekutor\' yang memegang takdir kami berdua.',
        'Aku mengangguk kaku dengan wajah dipaksakan tenang. "Iya, Ndre... nanti aku usahakan."',
        '"Aku tunggu ya," bisiknya lembut dengan senyum paling tulus yang pernah kulihat.',
        'Dia kemudian berbalik dan melangkah pergi meninggalkan kantin, menyisakan sekaleng kopi dingin dan sekeping hati yang hancur berkeping-keping di atas meja. Aku menatap punggungnya yang menjauh dengan air mata yang menetes pelan, menyadari bahwa kehidupan dan hubungan kami tidak akan pernah sama lagi setelah hari ini.'
      ],
      choices: [
        {
          id: 'choice-to-scene-7',
          text: 'Masuk ke Kantor Rektor',
          description: 'Melangkah memasuki pintu ruangan Rektor yang paling ditakuti',
          targetSceneId: 'scene-7',
          badge: 'Ruang Teror'
        }
      ]
    },

    'scene-7': {
      id: 'scene-7',
      title: 'Bab 7: Kantor Rektor & Pemerasan',
      chapterNumber: 7,
      content: [
        'Aku tiba di depan pintu kayu besar itu. Saat kubuka perlahan, Rektor sudah menunggu di kursi besarnya. Tatapannya licik, seolah singa yang melihat mangsa masuk ke kandangnya dengan sukarela.',
        '"Duduk, Irene. Gak perlu takut," sambut Rektor.',
        '"S-soal video itu, Pak?" suaraku hampir tidak keluar. Ruangan ini berbau pengharum ruangan yang menyengat, membuatku jadi mual.',
        'Dia meletakkan tablet di atas meja. Video itu berputar. Aku dan Andre. Jelas sekali.',
        '"Sangat mengecewakan. Video ini bisa menghancurkan karir Pak Andre. Dan masa depanmu."',
        '"Saya mohon, Pak. Jangan hancurkan Pak Andre. Ini salah saya... saya yang menggodanya," aku berbohong demi melindunginya. Air mata mulai menetes.',
        'Dia berdiri dari kursi besarnya, berjalan perlahan mengelilingiku. "Saya bisa saja menghapusnya sekarang juga. Tapi di dunia ini, tidak ada yang gratis, Irene. Aku benci bagaimana dia menatapku dengan rasa \'lapar\' yang begitu terang-terangan."',
        'Tangannya yang kekar dan dingin menyentuh bahuku, lalu turun perlahan.',
        '"Kamu nakal dengan Andre... kenapa tidak nakal dengan saya juga?"',
        'Aku seketika menepis tangannya. Dia menamparku, membuatku ketakutan. "Cukup Pak!" Aku merasa seperti mangsa yang sedang diperiksa oleh pemangsa.',
        '"Kamu sudah tahu keinginanku kan? Bagaimana jika lakukan sekarang."',
        'Aku tahu persis apa yang diinginkannya, ini seperti di film-film yang pernah aku tonton.',
        'Air mataku semakin banyak menetes. "Sshh... nggak perlu nangis Ren. Ingat ini untuk kebaikanmu juga. Sekarang, fokus saja pada tugasmu."',
        '"Kamu ingin cepat selesai, kan? Biarkan saya membukanya."',
        'Jemarinya yang dingin mulai membuka satu per satu kancing kemeja yang kupakai. Udara AC di ruangan ini terasa menusuk kulitku yang mulai terbuka.',
        '"Indah sekali... jauh lebih sempurna dari yang saya bayangkan."',
        'Aku terdiam dan seolah membiarkan dia mengagumi belahan dadaku yang dibalut bra. Dia memuji tubuhku seolah aku adalah barang pajangan.',
        '"Kamu memang gadis paling cantik di kampus ini," tambahnya sambil berbisik di telingaku. Entah kenapa kalimatnya kali ini membuatku bangga hingga tanpa sadar menghentikan tangisanku.',
        'Setelah berbisik, bibirnya merayap di leherku dan jemarinya menarik braku ke bawah hingga puncakku keluar dari persembunyiannya.'
      ],
      choices: [
        {
          id: 'choice-7a',
          text: 'Pilihan 7a: Binal Mode (Terbawa Suasana)',
          description: 'Membiarkan diri terbawa suasana dan menaklukkan Rektor secara agresif',
          targetSceneId: 'scene-7a',
          badge: 'Penaklukan Gelap'
        },
        {
          id: 'choice-7b',
          text: 'Pilihan 7b: Penolakan & Histeria',
          description: 'Melawan, menampar Rektor, namun terpaksa menyerah di bawah ancaman',
          targetSceneId: 'scene-7b',
          badge: 'Perlawanan Terdesak'
        }
      ]
    },

    'scene-7a': {
      id: 'scene-7a',
      title: 'Bab 7a: Kantor Rektor Binal Mode',
      chapterNumber: 7,
      content: [
        'Kami saling bertatapan hingga matanya berpaling, melahap setiap lekuk tubuhku yang setengah terbuka dengan binar lapar yang tak tertahankan. Aku mengamatinya memandangi puncakku dengan rasa kagum yang begitu pekat dan intim, di mana aku merasa sangat diinginkan.',
        '"Benar-benar cantik sempurna," pujinya dengan suara berat yang parau.',
        'Tanpa membuang waktu, telapak tangannya yang hangat dan lihai langsung menerjang dan memainkan puncak dadaku. Mendengar lagi pujiannya yang begitu intens, seluruh pertahanan tubuhku kian melunak dan runtuh.',
        'Rasanya bagaikan ada kejutan aliran listrik liar yang meledak dari dadaku, menjalar cepat menembus hingga ke perut bagian bawah. Aku membencinya—sungguh membenci fakta bahwa aku berada di posisi ini—tapi kenapa tubuhku justru memberikan reaksi yang begitu membara dan membakar?',
        '"Kenapa jantungmu berdetak begitu kencang? Kamu takut... atau kamu mulai menyukainya?" tanyanya menggoda dengan nada yang sarat akan dominasi.',
        'Dia menunduk cepat, menyesap dan bermain dengan gencar menggunakan mulut dan lidah panasnya di area puncakku.',
        '"Kamu terasa begitu manis... Ah, lihat ini, tubuhmu tidak bisa berbohong padaku."',
        '"Ah... ahh.. udah Pak cukup..."',
        'Saat lidahnya yang basah dan mahir menyengat puncak sensitifku, aku tersentak hebat, tak mampu lagi menahan erangan yang lolos dari tenggorokanku. Rasa jijik memuncak di kepala, namun di saat yang sama, sebuah desiran hangat yang brutal meledak di sekujur tubuhku.',
        '"Kamu mendesah, sayang. Katakan, apa ini terasa lebih enak daripada cara Andre mencicipimu?" tanyanya menantang.',
        'Pertanyaan itu terdengar sangat menjijikkan, tapi lebih enak? Bukan tentang lebih enak, sensasi ini benar-benar terasa membakar dan nikmat. Aku merasa kotor karena tubuhku telah mengkhianati akal sehatku sendiri. Dia memang sangat pintar dan binal dalam memainkan saraf-saraf peka di tubuhku. Pergerakannya semakin intens dan cepat; tangannya yang bebas mulai merayap dan menjelajah ke area lain dengan cengkeraman yang menuntut, sementara mulutnya tetap gencar mengeksplorasi puncak dadaku tanpa memberi jeda untuk bernapas.',
        '"Jangan ditahan, kalau kamu menikmatinya..."',
        'Aku ingin menangis kencang untuk meratapi nasibku, tapi yang keluar dari bibirku justru helaan napas pendek, berat, dan panas.',
        '"Lihat dirimu sekarang. Begitu berantakan di depan saya. Siapa sangka mahasiswi baik-baik ini bisa seberani ini?" Dia membelai pipiku yang membara. "Akhirnya kamu sadar juga kalau melawan saya itu percuma."',
        'Dia membuka celananya dengan terburu-buru, dan pusakanya terlihat sudah memegang kendali, tampak sedikit basah oleh gairah yang membuncah. Aku tahu apa yang harus aku lakukan. Didorong oleh campuran rasa pasrah, intimidasi, dan pelepasan emosi yang brutal, aku segera meluruh dan berlutut di hadapannya.',
        'Jantungku berdetak kian kencang dan liar; ini pertama kalinya aku memberikan servis ekstrem seperti ini.',
        'Mengingat kembali adegan-adegan liar yang pernah kutonton di film dewasa, aku melucuti sisa kemeja dan braku sepenuhnya. Tanpa ragu, aku menghimpitkan kedua puncak dadaku yang bertelanjang bulat untuk menjepit dan meremas pusakanya, mencoba memuaskannya dengan himpitan hangat tubuhku.',
        '"Ah... terus, Ren... enak banget!" erangnya panik oleh kejutan nikmat.',
        'Sensasi ini terasa begitu asing dan liar. Di satu sisi aku sedang memegang kendali penuh atas kenikmatannya, meski di sisi lain jiwaku sedang terhina. Jemariku ikut bekerja gila-gilaan, memainkan dan mengocok pusakanya sambil mata kami saling mengunci intens. Aku menggerakkan tanganku secepat dan sekuat yang aku bisa—aku ingin seluruh kegilaan dan tensi yang membakar ini segera mencapai puncaknya!',
        '"Kamu memang sudah ahli ya," racau sang Rektor, membelai rambutku seolah ini adalah buaian cinta. Namun setiap inci tubuhku yang ia raba rasanya makin hina sekaligus memabukkan. Kapan ini berakhir? Apa aku harus terlihat lebih liar agar dia cepat puas?',
        'Aku melepaskan himpitan dadaku, lalu menggunakan mulut dan lidahku secara agresif untuk melumat dan memuaskannya.',
        '"Ahh.. ahhh.. Nah, gitu Ren!"',
        'Martabatku luruh dalam setiap erangan puas yang keluar dari mulutnya.',
        '"Sshhh... Ren. Lidahmu... kamu benar-benar punya bakat yang berbahaya."',
        'Dia terlihat sangat menikmati, tubuhnya terombang-ambing oleh kenikmatan. Aku menjilati dan melumat pusakanya dari ujung ke ujung tanpa ampun. Aku mulai menemukan ritme yang liar dan cepat, menggunakan lidahku dengan jauh lebih berani, mengikuti insting gelap yang bahkan tidak sadar aku miliki. Lihat dia... pria berkuasa ini kini bertekuk lutut dan pasrah karena permainanku. Aku menatap matanya dalam-dalam sambil melumat makin cepat, makin dalam, dan makin brutal.',
        '"Ah enak ini Ren... ahh.. ahhh...!"',
        'Tubuhnya menegang hebat, hentakan dadanya memburu saat kepuasan yang luar biasa menghantamnya. Pikiranku seketika kosong saat semburan hangat membanjiri mulutku. Rasa mual di tenggorokan perlahan bercampur dengan kepuasan kelam yang meledak. Aku ingin dia tahu bahwa dalam kehancuranku, aku telah menaklukkannya sampai tak berdaya.',
        'Aku membiarkan sebagian cairan hangat itu menetes di bibirku, meleleh jatuh hingga ke dagu dan dadaku. Lalu aku mengangkat jemariku, menyapu tetesan yang tersisa di bibir, dan menjilatinya di depan matanya.',
        '"Kamu... kamu benar-benar menikmatinya. Kamu cewek yang luar biasa, Ren..." Napas Rektor terengah-engah, menatapku dengan sorot mata yang dipenuhi rasa puas dan takjub sambil membelai kepalaku.',
        'Melihat binar kepuasan yang hancur di matanya, aku merasakan sebuah pencapaian yang sakit dan pekat. Aku merasa sangat kotor... sekaligus merasa begitu berkuasa dan diinginkan.',
        '"Lihat dirimu... betapa berantakannya dirimu. Seandainya Andre melihat ini... Kamu lebih suka di sini kan?"',
        '"Aku bisa buat yang lebih dari ini kalau Bapak mau tutup mulut soal aku dan Andre," balasku dingin namun tajam.',
        'Aku lalu berdiri, membiarkannya menarik dan mencumbu bibirku dengan sisa-sisa gairah yang tertinggal.',
        '"Wow Ren, selain cantik kamu memang mahasiswa yang nakal dan liar."',
        'Ruangan ber-AC yang dingin itu menjadi saksi bisu bagaimana aku membiarkan diriku melayani pria lain, bahkan memberikan servis panas yang belum pernah kuberikan pada Andre sekalipun. Apakah aku sudah menghianati Andre?'
      ],
      choices: [
        {
          id: 'choice-from-7a-to-8',
          text: 'Lanjutkan ke Rumah Andre',
          description: 'Mencari perlindungan dan kehangatan sejati',
          targetSceneId: 'scene-8',
          badge: 'Pelarian Malam'
        }
      ]
    },

    'scene-7b': {
      id: 'scene-7b',
      title: 'Bab 7b: Penolakan & Pemaksaan',
      chapterNumber: 7,
      content: [
        'Rasa malu seketika muncul, dan segera aku menutupi dadaku dengan tanganku. Kesadaranku pulih seketika; bayangan wajah Andre hadir di benakku, membuat nuraniku berontak. Aku tidak bisa membiarkan diriku diperlakukan seperti barang pajangan yang bisa dinikmati sesuka hati.',
        '"Jangan, Pak! Cukup!" teriakku histeris sambil menepis tangannya dan menampar mukanya sekuat tenaga.',
        'Rektor tersentak, tetapi tatapan matanya bukannya meredup, melainkan kian liar dan tajam bagai pemangsa yang terprovokasi. "Kamu berani melawan saya, Irene? Kamu lupa apa yang saya punya?" ancamnya dengan suara rendah yang mengintimidasi.',
        'Tangannya menunjuk ke arah tablet di meja kayu tebalnya, tempat rekaman rahasia itu terus berjalan. Dalam hitungan detik, dia menghempaskan tubuhku ke tepi meja kayu besarnya dengan kasar. Kertas-kertas kerja terdorong berantakan, jatuh berserakan ke lantai.',
        '"Hapus video itu, Pak! Tolong... !" jeritku dengan air mata yang menetes semakin deras. Aku memutar tubuhku, mencoba melangkah cepat menuju pintu kayu besar ruangan tersebut, berniat melarikan diri dari cengkeraman ketakutan ini.',
        'Namun, sebelum jemariku sempat menyentuh gagang pintu, Rektor melangkah cepat. Langkah kakinya yang berat bergaung di lantai ruangan sebelum jemarinya yang cengkeramannya seperti besi mencengkeram pergelangan tanganku dengan kasar. Dia menarik tubuhku kembali, menyudutkanku ke dinding dingin tepat di samping meja kerjanya. Punggungku menghantam dinding, dan kedua tangannya menahan bahuku hingga aku tak bisa berkutik.',
        '"Kamu pikir kamu punya posisi untuk menawar, Irene?" bisiknya tajam tepat di depan wajahku, napasnya yang menyengat menerpa kulitku. "Satu klik dari saya detik ini juga, dan seluruh kampus—termasuk senat, rektorat, dan grup orang tua mahasiswa—akan melihat kelakuanmu dan Andre. Andre akan dipecat secara tidak hormat, karirnya hancur total, dan kamu akan dikeluarkan dengan nama yang tercemar selamanya."',
        '"Tolong, Pak... saya mohon..." tangisku terisak-isak, memohon kesempatannya sambil mencoba memalingkan wajah dan menepis jemarinya dari tubuhku. "Jangan Pak…"',
        '"Kalau kamu mau videonya gak kesebar, kamu harus turuti aturan main saya," potongnya dingin tanpa bergeming sedikit pun.',
        'Napasku terengah-engah, dada membusung naik-turun menahan sesak dan amarah yang membakar, namun dominasi kekuasaannya dan ancaman kehancuran total bagi aku dan Andre melumpuhkan seluruh pertahananku. Tubuhku gemetar hebat. Dalam hening ruangan yang hanya diisi oleh suara pendingin udara dan isak tangisku, aku menyadari ketidakberdayaanku. Tanganku yang semula menolak perlahan terkulai lemas di sisi tubuh.',
        '"Lepaskan...!" jeritku, namun suara itu berubah menjadi desahan pasrah saat bibirnya menghantam bibirku tanpa rasa ampun.',
        'Ciuman itu tidak lagi lembut atau penuh buaian; itu adalah benturan fisik yang kasar dan dominan. Aku sempat menggigit bibirnya hingga merintih, tetapi rasa asin darah samar di lidah justru memicu ketegangan yang makin membara di antara kami. Pertahananku runtuh total, kian tenggelam dalam situasi ini.',
        'Dengan ritme yang makin cepat, dia menatap matanya tajam, menciumiku dengan ganas. Jemariku yang semula menolak kini mencengkeram bahunya, meremas kemejanya hingga kusut. Udara di ruangan dingin itu seolah membakar.',
        '"Puas, Pak? Ini yang Bapak mau?!" bisikku menantang tepat di depan wajahnya, mataku menyala oleh campuran air mata dan amarah yang pekat.',
        '"Lebih dari yang saya bayangkan..." jawabnya terengah-engah, langsung menarik braku hingga terlepas dan membenamkan wajahnya dengan gairah yang brutal pada puncakku.',
        'Sentuhan dan keahliannya yang intens menghantam titik-titik sensitifku tanpa jeda untuk bernapas. Gelombang kenikmatan yang gelap dan liar menjalar cepat dari perut hingga ke seluruh ujung sarafku. Aku mendongak, melengkungkan tubuhku di atas meja, mencoba melupakan seluruh beban, rasa sakit, dan tekanan mental menjadi erangan keras yang menggema di setiap sudut ruang rektorat yang tertutup rapat. Tubuhku terbanting ke lantai yang dingin disusul tubuhnya yang panas membara.',
        'Tanpa membuang waktu, gerakan demi gerakan terjadi begitu cepat dan impulsif. Kain penghalang di antara kami terlepas satu per satu hingga sekarang tidak ada lagi. Tak ada lagi kata ragu atau bisikan romantis; yang ada hanya pelepasan emosi mentah yang meledak-ledak. Setiap dorongan, benturan raga, dan sentuhan beritme tinggi itu menghasilkan rentetan suara tegas: plak, plak, plak! - yang menggema kencang di indera pendengaranku.',
        'Suara benturan itu terus terngiang berulang-ulang di telingaku, menjadi penanda yang menyengat bahwa raga ini sedang dicicipi tanpa ampun oleh pria di hadapanku. Setiap dorongan dan sentuhan terasa seperti penyaluran dendam dan pasrah yang menyatu. Aku membiarkan diriku terbawa arus, bahkan sesekali aku bergerak menantang balik dominasinya.',
        'Saat ritme permainan makin liar dan ketegangan mendekati puncaknya, rasa panik mendadak menyengat kesadaranku.',
        '"Ahh.. ahh,, Pak... jangan keluarin di dalam!" bisikku terengah-engah sambil meremas bahunya kencang.',
        'Rektor justru terkekeh rendah, menghentikan hentakannya sejenak dan menatap mataku penuh dominasi yang pekat. "Bukan begitu bilangnya, Ren..." bisiknya parau tepat di depan telingaku. "Bilang dulu: \'Keluarin di luar, sayang\'... baru nanti saya keluarkan di luar."',
        'Aku mengertakkan gigi, kemarahan dan harga diriku bergejolak hebat. Namun menatap tatapannya yang tak tergoyahkan, aku tahu aku tak punya pilihan. Dengan napas yang memburu dan kepasrahan yang pekat, aku menatap matanya rapat-rapat.',
        '"...Keluarin di luar ya sayang," ucapku lirih, membuang sisa gengsi terakhirku.',
        'Rektor tersenyum puas secara mengintimidasi. "Nah, gitu dong..."',
        'Ketika puncaknya menghantam, erangan napas kami beradu kencang memecah sunyi. Tubuhku bergetar hebat dalam kepuasan kelam yang meledak seketika, meninggalkan keheningan yang pekat dan napas yang terengah-engah di atas lantai. Sementara cairan hangat keluar menyembur di atas perutku menjadi tanda tubuhku baru saja dimilikinya.',
        'Aku berdiri dengan rambut berantakan sambil membersihkan cairan itu, menatap Pak Rektor yang masih mengatur napasnya yang memburu dengan tatapan puas. Lantai ruangan dingin itu menjadi saksi betapa mahalnya harga yang harus kubayar demi nama baikku dan Andre.'
      ],
      choices: [
        {
          id: 'choice-from-7b-to-8',
          text: 'Lanjutkan ke Rumah Andre',
          description: 'Mencari perlindungan dan kehangatan sejati',
          targetSceneId: 'scene-8',
          badge: 'Pelarian Malam'
        }
      ]
    },

    'scene-8': {
      id: 'scene-8',
      title: 'Bab 8: Kehangatan Rumah Andre',
      chapterNumber: 8,
      content: [
        'Langkah kakiku tersentak-sentak saat berlari menembus kegelapan malam, menyusuri jalanan kecil menuju kediaman Andre. Napasku memburu hebat, dada terasa sesak bukan hanya karena kelelahan fisik, melainkan oleh beban trauma dan penderitaan dari ruangan Rektor tadi.',
        'Namun, begitu sorot mataku menangkap pendar cahaya lampu gantung berwarna hangat yang memancar dari jendela rumah Andre, ketakutanku perlahan menyurut. Rumah mungil ini seolah menjadi satu-satunya tempat perlindungan di tengah dunia yang makin kejam.',
        'Dengan jemari yang gemetar, aku memutar gagang pintu dan mengetuknya pelan. Pintu terbuka, dan dalam hitungan detik, sosok Andre berdiri di hadapanku. Dia mengenakan kaus polos santai yang melekat pas di dadanya yang tegap dan celana kain longgar.',
        '"Irene? Kamu kenapa, sayang? Kenapa napasmu sampai ngos-ngosan begitu?" tanya Andre penuh kekhawatiran. Matanya berbinar teduh, langsung menyapu penampilanku yang berantakan.',
        'Sebelum dia sempat bertanya lebih lanjut, aku melempar diriku ke dalam pelukannya. Tanganku melingkar erat di pinggangnya, membenamkan wajahku tepat di ceruk lehernya.',
        'Aroma masakan rumah yang hangat bercampur wangi maskulin khas woody-vanilla milik Andre langsung menyambut inderaku—sebuah kontras yang begitu nyata dan melegakan dibandingkan bau harum menyengat yang mengintimidasi di kantor Rektor tadi. Aku memejamkan mata erat-erat, meresapi setiap detik dekapannya, tak ingin dia melihat sisa ketakutan atau derai air mata yang tertahan di mataku.',
        '"Aku... aku cuma capek banget, Ndre. Cuma ingin ketemu kamu," dustaku dengan suara yang diredam di dadanya.',
        'Andre menghela napas lembut. Dia mengusap punggungku penuh kehangatan, lalu menuntun langkahku masuk dan mengunci pintu. Dia membawaku duduk di sofa empuk yang ada di ruang tengah. Suasana rumah begitu tenang, hanya diiringi detak jam dinding dan keheningan malam yang syahdu.',
        'Andre tidak mencecarku dengan bermacam pertanyaan. Tangannya yang hangat bergerak perlahan, membelai rambutku dengan kelembutan yang amat sangat, lalu mendaratkan ciuman dalam di keningku.',
        '"Apapun yang bikin kamu tertekan hari ini, kita hadapi sama-sama ya, Irene," bisiknya penuh komitmen. "Di sini kamu aman. Cuma ada aku dan kamu."',
        'Kata-katanya meluluhkan seluruh dinding pertahananku. Untuk sesaat, dunia luar yang penuh intrik seolah lenyap seketika. Tidak ada ancaman Rektor, tidak ada bayang-bayang Bu Talia, dan tidak ada penderitaan. Yang tersisa hanyalah aku dan dia di dalam gelembung cinta yang teramat rapuh namun begitu indah.',
        'Tatapanku beradu dengan matanya yang cokelat pekat. Ada pendar gairah dan kasih sayang yang membara di sana—sebuah pendar tulus yang belum pernah kurasakan dari pria manapun. Irene yang rapuh malam ini mendadak haus akan bukti nyata bahwa pria di hadapanku ini benar-benar mencintaiku.',
        '"Andre... tolong cintai aku malam ini," bisikku lirih, menatap tepat di bibirnya.',
        'Senyum hangat terukir di wajah Andre. Tanpa mengulur waktu, dia menangkup kedua pipiku dengan telapak tangannya yang hangat. Wajahnya mendekat perlahan, hingga napas hangatnya yang beraroma mint menyapu permukaan kulit wajahku. Bibir kami bertemu dalam sebuah ciuman yang lambat, lembut, dan penuh keharusan.',
        'Ciuman itu bukan lagi sekadar pemuasan hasrat kilat seperti di kelas K10, melainkan penyatuan dua jiwa yang saling merindukan penawar sepi.',
        'Lidah Andre menyapu lembut garis bibirku, memintaku untuk membukanya. Saat aku menyambut permainannya, desahan pelan lolos dari tenggorokanku. Tanganku merambat naik, meremas jemari di tengkuknya, menarik tubuhnya agar semakin merapat. Andre menggeser posisinya, menindih tubuhku perlahan di atas sofa tanpa memberi beban berat, membungkus seluruh keberadaanku dalam kehangatan fisiknya.',
        'Sentuhannya merayap turun dengan kelembutan yang memabukkan. Jemari tangannya yang maskulin menyusuri garis leherku, turun ke bahu, lalu bergerak perlahan membuka satu per satu kancing kemejaku. Setiap kali kain kemejaku terkuak dan udara malam menyentuh kulitku, Andre menyambutnya dengan kecupan-kecupan hangat. Bibirnya merayap dari tulang selangka, turun menyusuri dada, memberikan usapan dan ciuman yang memicu desiran hangat yang membakar dari dalam perutku.',
        '"Kamu begitu indah, Irene... sangat indah," bisiknya parau di tengah sapuan bibirnya.',
        'Napas Andre kian memburu saat jemarinya melepaskan kait braku. Dia menatap seluruh lekuk tubuh atasku dengan penuh kekaguman yang jujur, tanpa ada tatapan \'pemangsa\' yang licik—hanya ada cinta dan ketakjuban seorang pria pada wanita yang dipujanya.',
        'Kepala Andre tertunduk, bibirnya memanjakan setiap inci kulit sensitifku, memicu getaran kehangatan yang membuat kakiku melemas dan jemariku meremas kain sofanya kuat-kuat.',
        '"Ah... Andre..." namaku memanggilnya dalam desahan napas yang terengah-engah.',
        'Sentuhan jemarinya berani merayap turun, menyusuri pinggangku, melintasi lekuk paha, dan menyibak kehangatan yang paling tersembunyi. Usapan lembut dan ritmis yang berpadu dengan gerakan bibirnya menciptakan gelombang kenikmatan yang begitu intens, mengikis habis seluruh memori pahit dan rasa kotor yang sempat merayapi jiwaku beberapa jam lalu.',
        'Bersama Andre, setiap sentuhan terasa suci, bernilai, dan sarat akan romantisme. Kami melebur dalam kehangatan cinta yang membara malam itu. Setiap dorongan lembut dan irama yang kami ciptakan terasa seperti tarian dua insan yang tak ingin terpisahkan oleh takdir. Desahan demi desahan halus beradu di dalam ruangan yang remang, menyatukan detak jantung kami dalam irama yang serasi hingga mencapai puncak kenikmatan yang melayang dan melelahkan secara indah.',
        'Beberapa waktu berlalu, kami terbaring berdampingan di sofa di bawah selimut tebal yang disampirkan Andre. Tubuhku bersandar penuh di dadanya yang bertelanjang, mendengarkan detak jantungnya yang perlahan kembali normal. Jemari Andre tak berhenti mengelus rambut dan bahuku yang terbuka, menyalurkan rasa aman yang amat dalam.',
        'Namun, dentang jam dinding yang berbunyi menyadarkanku pada batas waktu 24 jam dari ancaman Rektor yang kian mendekat. Realita kejam itu kembali menampar wajahku.',
        'Dengan berat hati, aku menggeser selimut dan mulai merapikan pakaianku kembali. Andre memiringkan tubuhnya, menatapku dengan raut heran dan penuh kasih.',
        '"Kenapa buru-buru, sayang? Inap di sini saja malam ini," ajaknya lembut sambil meraih jemariku dan mencium punggung tanganku.',
        'Aku tersenyum tipis, menutupi kecemasan yang kembali menggerogoti dada. Aku mendekatkan wajahku dan mendaratkan ciuman manis di pipinya—sebuah ciuman yang penuh dengan ketakutan tersembunyi bahwa ini mungkin menjadi momen mesra terakhir di antara kami.',
        '"Aku harus pulang, Ndre. Nanti orang rumah dicariin," dustaku pelan. "Makasih buat malam ini..."',
        'Aku berdiri dan berjalan menuju pintu. Sebelum melangkah keluar menembus dinginnya malam, aku menoleh sekali lagi, menatap wajah Andre yang tersenyum penuh kehangatan padaku dari dalam rumah—sebuah bayangan indah yang ingin kurekam abadi di kepala sebelum menghadapi badai esok hari.'
      ],
      choices: [
        {
          id: 'choice-to-scene-9',
          text: 'Berjalan di Lorong Kampus Besoknya',
          description: 'Menyaksikan kenyataan pahit di depan ruang dosen',
          targetSceneId: 'scene-9',
          badge: 'Kenyataan Pahit'
        }
      ]
    },

    'scene-9': {
      id: 'scene-9',
      title: 'Bab 9: Lorong Kampus & Persimpangan Takdir',
      chapterNumber: 9,
      content: [
        'Keesokan harinya di lorong kampus. Hatiku hancur berkeping-keping saat melihat pemandangan di depan ruang Dosen.',
        'Talia bercumbu dengan Andre, lalu mereka saling bermanja. Tangannya menepuk dada Andre akrab lalu membenarkan kerahnya. "Kamu tuh ya, kalau nggak ada aku pasti berantakan."',
        'Andre tidak menepisnya. Dia justru tersenyum—senyum yang sama yang dia berikan padaku semalam. "Makasih ya, Tal."',
        'Rasa cemburu dan putus asa bercampur aduk. Apakah aku hanya pelarian? Sementara dia masih punya tunangan yang \'sempurna\' di mata publik?',
        'Air mata kemarahan menggenang. Aku merasa dikhianati oleh Andre, dan ditekan oleh Rektor. Aku sendirian dalam perang ini.',
        'Langkah kakiku membawaku melewati ruangan Rektor. Pintunya sedikit terbuka. Aku bisa melihatnya ada di dalam.',
        'Ini saatnya menentukan takdirku.'
      ],
      choices: [
        {
          id: 'choice-ending-a',
          text: 'Ending A: Balas Dendam & Pembalasan Binal',
          description: 'Masuk ke kantor Rektor dengan dendam, menyerahkan diri sepenuhnya demi melupakan Andre',
          targetSceneId: 'scene-ending-a',
          badge: 'Ending A: Kecewa & Dendam'
        },
        {
          id: 'choice-ending-b',
          text: 'Ending B: Pasrah Menjadi Boneka Rektor',
          description: 'Menyerahkan raga demi menjaga rahasia, mematikan nurani menjadi boneka penurut',
          targetSceneId: 'scene-ending-b',
          badge: 'Ending B: Boneka Rahasia'
        },
        {
          id: 'choice-ending-c',
          text: 'Ending C: Kabur & Selamatkan Harga Diri',
          description: 'Memutar arah, mematikan ponsel, dan melangkah naik bus kota meninggalkan kampus',
          targetSceneId: 'scene-ending-c',
          badge: 'Ending C: Kebebasan'
        },
        {
          id: 'choice-ending-d',
          text: 'Ending D: Menuntut Kepastian & Tahan Rahasia',
          description: 'Memblokir nomor Rektor, menuntut Andre memutuskan Talia, dan menghadapi takdir bersama',
          targetSceneId: 'scene-ending-d',
          badge: 'Ending D: Kepastian Cinta'
        }
      ]
    },

    'scene-ending-a': {
      id: 'scene-ending-a',
      title: 'Bab Ending A: Kecewa & Balas Dendam',
      chapterNumber: 9,
      isEnding: true,
      endingType: 'A',
      endingTitle: 'Ending A: Gelombang Dendam & Kepasrahan Binal',
      endingBadge: 'Kekecewaan & Pembalasan',
      content: [
        'Langkah kakiku di lorong kampus terasa amat berat, seakan membawa berkuintal-kuintal beban kekecewaan. Bayangan Andre yang tersenyum dan menerima perhatian manis dari Talia di depan ruang dosen terus berputar, membakar nuraniku hingga menjadi abu.',
        'Semua pengorbananku, rasa takutku akan video ancaman itu, dan kepasrahan raga yang sudah kuberikan... ternyata hanya berbalas pengkhianatan. Aku merasa dicampakkan, hanya dijadikan pelarian sesaat di antara hubungannya yang manis dengan sang tunangan.',
        'Rasa cemburu, amarah, dan kekecewaan yang bergulung-gulung meledak menjadi pelepasan emosi yang brutal. Jika cinta dan kesetiaan tidak ada artinya bagi Andre, maka aku tidak perlu lagi berpura-pura menjadi mahasiswi polos yang berbelas kasih!',
        'Dengan napas memburu dan mata yang menyala merah oleh air mata kemarahan, aku mendorong pintu kantor Rektor hingga terbuka. Sang Rektor, yang sedang duduk di kursi besarnya, terkejut sejenak sebelum bibirnya mengukir senyum licik yang penuh kemenangan.',
        'Tanpa mengucap sepatah kata pun, aku melangkah lebar mendekatinya. Sebelum dia sempat berdiri sepenuhnya, aku menarik kerah kemejanya secara kasar, memangkas jarak, dan menghantam bibirnya dengan ciuman yang ganas dan penuh tenaga. Ciuman itu bukan lagi kelembutan, melainkan luapan amarah, dendam, dan pencerahan kelam untuk melampiaskan seluruh kekesalanku pada Andre.',
        'Rektor menyambut keganasanku dengan erangan puas. Dia mencengkeram pinggangku, menarik tubuhku ke atas sofa kulit di ruangannya. Udara pendingin ruangan terasa membakar saat kami saling melucuti sisa-sisa pakaian tanpa sedikit pun rasa ragu. Tak ada lagi kata penolakan, tak ada lagi air mata ketakutan—yang ada hanyalah dua raga yang beradu dalam ritme yang panas dan liar.',
        '"Ahh... Pak... ahh..." desahku parau saat sentuhannya yang begitu ahli mulai menguasai seluruh saraf sensitifku.',
        '"Kamu luar biasa, Irene... Mhh, begitu indah, begitu cantik..." bisik Rektor dengan suara berat yang bergetar karena menahan kenikmatan yang membuncah. Dialah pria berkuasa yang kini bertekuk lutut, mengagumiku sepenuhnya.',
        '"Ngghh... ahh... buat aku lupakan dia, Pak..." balasku lirih, menyapukan jemariku di dadanya, menyerahkan hatiku yang patah untuk disembuhkan oleh gejolak gairah ini.',
        '"Sshh... aku akan buat kamu lupa segalanya, Irene... Ahh, kamu milikku sekarang, cuma milikku..." ucapnya penuh kehangatan yang memabukkan, membelai pipiku dan mencium bibirku dengan intensitas yang dalam.',
        'Rentetan suara benturan raga yang rapat dan tegas bergaung kencang di seluruh ruangan, memecah kesunyian kantor rektorat. Setiap hentakan liar yang kuberikan dan kuterima menjadi penyaluran atas sakit hatiku. Aku melengkungkan tubuhku, membalas setiap pergerakannya dengan keberanian dan keganasan yang tak pernah aku bayangkan sebelumnya.',
        '"Ahhh... ahh... enak banget, Pak... ahh, aku suka..." erangku penuh kepasrahan dan gairah yang membakar.',
        '"Mhh... Irene... kamu sempurna, sayang... Ahh, begitu nikmat..." sahutnya terengah-engah, meremas pinggangku makin erat.',
        'Tensi gairah yang membara dan emosi mentah yang meluap-luap mendorong kami mendekati batas puncak penyatuan yang hebat. Saraf-saraf tubuhku bergetar hebat dalam buaian kenikmatan kelam. Saat aku merasakan ketegangan Rektor mencapai puncaknya, kesadaran dan keputusasaanku menyatu menjadi satu keputusan ekstrem. Aku mencengkeram erat punggungnya, menarik tubuhnya makin merapat tanpa memberi celah sedikit pun.',
        '"Jangan dikeluarkan di luar, Pak..." bisikku parau dan intens tepat di telinganya, menatap matanya dengan tatapan yang liar dan penuh penyerahan total. "Keluarkan di dalam... Miliki aku seutuhnya!"',
        'Pernyataan itu bertindak bagaikan pemicu gila bagi sang Rektor. "Ahh... Irene... sayangku!"',
        'Dengan erangan berat yang menggema kencang, dia memberikan hentakan terakhirnya yang paling dalam dan melepaskan seluruh cairan hangatnya membanjiri bagian terdalam diriku.',
        '"Ahhhhh...!"',
        'Puncak kenikmatan dan pelepasan emosi yang brutal meledak seketika, membuat tubuhku bergetar hebat dalam pelukannya. Di dalam kegelapan ruangan itu, aku memejamkan mata rapat-rapat, merayakan kehancuran cintaku pada Andre dan kelahiranku yang baru sebagai wanita yang tak lagi punya rasa takut.'
      ]
    },

    'scene-ending-b': {
      id: 'scene-ending-b',
      title: 'Bab Ending B: Menyerah & Boneka Rektor',
      chapterNumber: 9,
      isEnding: true,
      endingType: 'B',
      endingTitle: 'Ending B: Pasrah Tanpa Jiwa (Boneka Rektor)',
      endingBadge: 'Boneka Rahasia',
      content: [
        'Ancaman itu akhirnya merobohkan seluruh pertahananku. Rasa takut akan hancurnya karier Andre dan kehancuran masa depanku sendiri menekanku begitu dalam, hingga tak ada lagi ruang untuk melawan.',
        'Saat aku melangkah masuk ke ruangan Rektor, aku sudah memutuskan untuk mematikan nurani dan rasa bahagiaku. Demi menjaga rahasia itu tetap terkunci rapat, aku menyerahkan diriku sepenuhnya—menjadi boneka penurut yang bernyawa.',
        'Rektor tidak membuang waktu. Tatapan matanya yang sarat akan dominasi dan rasa lapar langsung melahap seluruh ragaku. Begitu pintu terkunci rapat, dia menarik tubuhku dengan kasar, membenturkanku ke meja kerjanya yang dingin.',
        '"Pilihan yang bijak, Irene..." bisiknya parau, tepat di depan telingaku sebelum melumat bibirku dengan ciuman yang mendominasi tanpa ampun.',
        'Tidak ada lagi kelembutan. Pelepasan emosi yang terjadi di antara kami terasa begitu brutal, meledak-ledak, dan serba terburu-buru. Aku membiarkan kemeja dan braku tersingkap kasar, membiarkan jemarinya yang dingin dan lihai mencengkeram dan mengeksplorasi setiap inci tubuhku tanpa jeda untuk bernapas.',
        '"Nghh... ahh..."',
        'Erangan demi erangan lolos begitu saja dari tenggorokanku. Aku membenci diriku sendiri, namun desiran hangat dan gairah yang membakar justru meledak liar di sekujur saraf sensitifku. Tubuhku mengkhianati pikiranku; setiap kali bibir dan tangannya mempermainkan titik-titik sensitifku, reaksi fisikku tak mampu berbohong.',
        '"Lihat dirimu, Irene... Kamu pasrah, tapi tubuhmu begitu menginginkannya," kekeh Rektor di tengah desahan napasnya yang memburu.',
        'Pakaian kami tertanggal di lantai, menyisakan penyatuan raga yang panas dan serba cepat. Suara benturan raga yang rapat dan tegas bergaung nyaring di seluruh penjuru kantor rektorat yang tertutup rapat, membilas habis sisa-sisa harga diri yang pernah kumiliki. Setiap dorongan dan hentakan liar yang dia berikan kuhantam balik dengan pergerakan yang sama ganasnya—sebuah pelepasan emosi mentah atas ketidakberdayaan dan keputusasaan yang meluap.',
        '"Ahh... ahh... Pak..." desahku pasrah, membiarkan rasa nikmat yang gelap menyeretku makin dalam.',
        '"Terus, Irene... Pasrah saja pada saya..." erangnya penuh kemenangan, meremas pinggangku kencang saat ritme permainannya mencapai kecepatan maksimal.',
        'Tensi gairah yang membara membawa kami ke ambang batas. Dalam gejolak kenikmatan fisik yang membakar itu, jiwaku terasa terbang menjauh, meninggalkanku yang hanya menjadi wadah pemuas hasratnya. Saat puncaknya menghantam, erangan keras kami beradu memecah keheningan ruangan. Dia melepaskan seluruh ketegangannya, meninggalkan kepuasan yang pekat di atas tubuhku yang terengah-engah.',
        'Ketika segalanya berakhir dan keheningan kembali menguasai ruangan, aku berdiri perlahan, merapikan pakaianku yang berantakan dengan jemari yang kaku. Mataku menatap kosong ke arah jendela. Demi rahasia aku dan Andre, aku telah membiarkan Rektor melakukan apa pun yang dia inginkan. Aku telah menyerahkan ragaku, dan kini... aku resmi menjadi boneka tanpa jiwa.'
      ]
    },

    'scene-ending-c': {
      id: 'scene-ending-c',
      title: 'Bab Ending C: Melarikan Diri & Menyimpan Harga Diri',
      chapterNumber: 9,
      isEnding: true,
      endingType: 'C',
      endingTitle: 'Ending C: Kebebasan di Atas Bus Kota',
      endingBadge: 'Melarikan Diri & Harga Diri',
      content: [
        'Langkah kakiku tertahan tepat di depan pintu kantor Rektor yang sedikit terbuka. Di dalam sana, aku bisa melihat sosok pria berkuasa itu sedang duduk menungguku, menatap layar tabletnya dengan senyum licik yang memuakkan.',
        'Namun, ketika aku memalingkan wajah ke arah lorong, bayangan Andre yang tersenyum manis bersama Talia kembali menghantam dadaku.',
        'Rasa mual dan sesak yang luar biasa mendadak memenuhi dadaku. Untuk apa aku mengorbankan harga diriku? Untuk pria yang bahkan tidak bisa lepas dari tunangannya? Dan untuk apa aku menyerahkan tubuhku pada monster berjas yang memanfaatkan kekuasaannya?',
        'Cukup. Sesuatu di dalam diriku meledak—bukan gairah, melainkan sebuah keputusasaan yang berubah menjadi keberanian liar. Aku mengepalkan tangan erat-erat, memutar tubuhku, lalu berlari sekencang-kencangnya meninggalkan lorong itu.',
        '"Irene?!" suara panggilan samar terdengar dari kejauhan, entah dari Andre atau Rektor, tapi aku tidak peduli lagi.',
        'Aku terus berlari melintasi koridor kampus yang mulai sepi. Angin sore menampar wajahku, bercampur dengan air mata yang akhirnya menetes deras membahasi pipi. Sepatuku beradu keras dengan lantai batu, menimbulkan gema panjang yang mengiringi pelarianku. Aku menerobos gerbang utama Universitas Aura Bhakti tanpa sekali pun menoleh ke belakang.',
        'Dunia kampus yang penuh kebohongan, manipulasi, dan cinta terlarang itu perlahan menjauh di belakangku. Napasku memburu, dadaku naik-turun menahan sakit yang membakar di paru-paru, tapi untuk pertama kalinya setelah sekian lama... aku merasa bisa bernapas.',
        'Aku berhenti di pinggir jalan raya yang ramai, menyapu air mata dengan punggung tanganku. Ponsel di dalam tas terus bergetar tanpa henti—panggilan masuk dari Andre, disusul rentetan pesan ancaman dari Rektor. Dengan tangan yang gemetar, aku mematikan daya ponselku, memutus seluruh akses mereka kepadaku.',
        'Aku telah memilih untuk lari. Aku mengacuhkan seluruh ancaman Rektor, dan aku membuang Andre dari hidupku.',
        'Akankah Rektor benar-benar menyebarkan video itu dan menghancurkan semuanya? Apakah esok hari namaku dan Andre akan tercemar di seluruh kampus? Aku tidak tahu. Tapi saat aku melangkah naik ke atas bus kota yang melaju menjauhi tempat itu, aku tahu satu hal: setidaknya hari ini, jiwa dan harga diriku masih milikku sepenuhnya.'
      ]
    },

    'scene-ending-d': {
      id: 'scene-ending-d',
      title: 'Bab Ending D: Menuntut Kepastian & Tahan Rahasia',
      chapterNumber: 9,
      isEnding: true,
      endingType: 'D',
      endingTitle: 'Ending D: Pertaruhan Janji & Menahan Rahasia',
      endingBadge: 'Kepastian Cinta & Takdir',
      content: [
        'Pemandangan di lorong kampus tadi siang—melihat Andre tersenyum dan bermanja dengan Talia—menjadi titik balik dalam dadaku. Rasa cemburu dan amarah yang membakar akhirnya mengalahkan rasa takutku pada ancaman Rektor. Aku tidak mau lagi menjadi korban pasif yang dipermainkan dari dua arah.',
        'Tanpa menemui Rektor yang sedang menungguku di ruangannya, aku memilih berbalik arah. Aku pulang dan menunggu hingga jam kuliah usai, lalu menyuruh Andre datang ke kontrakannya sore itu juga.',
        'Saat Andre melangkah masuk ke rumahnya dengan wajah lelah, aku tidak menyambutnya dengan pelukan hangat seperti biasa. Aku berdiri di tengah ruangan dengan tangan terlipat di dada dan mata yang menatapnya tajam.',
        '"Irene? Kamu kenapa? Ada masalah di kampus?" tanya Andre cemas, melangkah mendekat dan berusaha menyentuh bahuku.',
        'Aku melangkah mundur, menghindar. "Aku mau kita bicara serius, Ndre. Soal kita... dan soal Bu Talia."',
        'Andre mendesah pelan, raut wajahnya berubah bersalah. "Ren, kita kan sudah bahas ini di perpustakaan. Kamu tahu situasiku sama Talia, orang tuaku berutang—"',
        '"Aku gak peduli lagi soal utang orang tuamu, Ndre!" potongku tegas dengan suara bergetar menahan emosi. "Aku capek jadi rahasia! Aku capek lihat kamu tersenyum sama dia di depan umum seolah aku gak pernah ada! Kalau kamu memang cinta sama aku, kalau aku memang berarti buat kamu... putuskan Talia sekarang juga."',
        'Andre terpaku, matanya melebar terkejut melihat keberanian dan ketegasanku. "Ren... ini gak semudah itu. Tolong kasih aku waktu. Aku perlu cari cara yang pas buat omong ke Talia dan orang tua kami tanpa bikin kekacauan besar."',
        '"Berapa lama?" tanyaku dingin. "Aku butuh kepastian, Ndre. Aku gak mau cuma jadi simpananmu."',
        'Andre memegang kedua tanganku erat-erat, menatap mataku dengan tatapan memohon yang sangat dalam. "Aku janji, Ren. Kasih aku waktu. Aku pasti bakal selesaikan semuanya sama Talia. Kamu satu-satunya wanita yang aku inginkan."',
        'Aku menatap mata pria yang kucintai itu, mencoba mencari kebenaran di balik kata-katanya. Akhirnya, aku mengangguk perlahan, membiarkan diriku memegang janjinya sekali lagi.',
        'Malam itu, ponselku terus bergetar menunjukkan pesan-pesan bernada ancaman dan kemarahan dari Rektor karena aku tidak muncul di ruangannya. Namun, aku memilih untuk memblokir nomornya dan sama sekali tidak menghiraukan ancaman video tersebut. Aku menolak untuk menyerahkan tubuhku demi menyelamatkan karier pria yang bahkan belum sepenuhnya menjadi milikku.',
        'Apakah Rektor akan benar-benar menyebarkan video panas kami di kelas K10 ke grup senat dan orang tua siswa besok pagi? Apakah karier Andre dan masa depanku akan hancur lebur esok hari?',
        'Aku tidak tahu. Di balik pintu yang terkunci malam ini, aku hanya bisa bersandar di bahu Andre dalam diam, menyimpan rahasia bahaya itu rapat-rapat, dan menunggu esok membawa kepastian... atau kehancuran total bagi kami berdua.'
      ]
    }
  }
};
