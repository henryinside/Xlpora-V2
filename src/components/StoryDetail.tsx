import React, { useState } from 'react';
import { Story, Review } from '../types';
import {
  Play,
  GitFork,
  Star,
  Award,
  BookOpen,
  Map,
  Users,
  MessageSquare,
  ArrowLeft,
  CheckCircle2,
  Lock,
  Heart,
  Share2
} from 'lucide-react';

interface StoryDetailProps {
  story: Story;
  onBack: () => void;
  onStartReading: (sceneId?: string) => void;
  unlockedEndings: string[];
}

export const StoryDetail: React.FC<StoryDetailProps> = ({
  story,
  onBack,
  onStartReading,
  unlockedEndings
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'characters' | 'endings' | 'reviews'>('info');
  const [userRating, setUserRating] = useState<number>(5);
  const [reviewComment, setReviewComment] = useState<string>('');
  const [reviewsList, setReviewsList] = useState<Review[]>([
    {
      id: 'rev-1',
      userName: 'Siti Rahma',
      userAvatar: 'SR',
      rating: 5,
      date: '2 jam yang lalu',
      comment: 'Seru banget pilihan ceritanya! Setelah Bab 7 pas nemu pilihan Binal Mode vs Penolakan, tensinya berasa banget.',
      endingReached: 'Ending A: Gelombang Dendam'
    },
    {
      id: 'rev-2',
      userName: 'Bima Sakti',
      userAvatar: 'BS',
      rating: 5,
      date: 'Kemarin',
      comment: 'Format baca di Xplora Play rapi banget, spasinya enak dibaca di HP. Saya berhasil dapet Ending C pas kabur naik bus kota.',
      endingReached: 'Ending C: Kebebasan'
    },
    {
      id: 'rev-3',
      userName: 'Dewi Lestari',
      userAvatar: 'DL',
      rating: 4,
      date: '3 hari lalu',
      comment: 'Karakter Pak Andre sama Rektor bener-bener bikin emosi campur aduk. Cerita pilihan bercabang terbaik di aplikasi ini!',
      endingReached: 'Ending D: Pertaruhan Janji'
    }
  ]);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewComment.trim()) return;
    const newRev: Review = {
      id: `rev-${Date.now()}`,
      userName: 'Kamu (Pembaca)',
      userAvatar: 'KM',
      rating: userRating,
      date: 'Baru saja',
      comment: reviewComment,
      endingReached: unlockedEndings.length > 0 ? `Unlocked ${unlockedEndings.length} Endings` : 'Pembaca Baru'
    };
    setReviewsList([newRev, ...reviewsList]);
    setReviewComment('');
  };

  const characters = [
    {
      name: 'Irene (20 Tahun)',
      role: 'Tokoh Utama',
      description: 'Mahasiswi ilmu komunikasi Universitas Aura Bhakti yang polos, mendambakan kasih sayang dan keberanian sejati.',
      avatarBg: 'bg-rose-500'
    },
    {
      name: 'Andre (28 Tahun)',
      role: 'Dosen Pembimbing',
      description: 'Dosen muda berpenampilan atletis dan hangat, namun terikat hutang keluarga dan pertunangan paksa dengan Bu Talia.',
      avatarBg: 'bg-amber-600'
    },
    {
      name: 'Bu Talia',
      role: 'Dosen Biologi & Tunangan',
      description: 'Tunangan Andre yang posesif dan berkuasa, selalu mengawasi gerak-gerik Irene di lingkungan kampus.',
      avatarBg: 'bg-purple-600'
    },
    {
      name: 'Sang Rektor',
      role: 'Pimpinan Kampus',
      description: 'Pria berkuasa dan licik yang memegang video rahasia K10 untuk menekan dan mengendalikan takdir Irene.',
      avatarBg: 'bg-stone-700'
    }
  ];

  const endingsList = [
    {
      id: 'scene-ending-a',
      code: 'ending_disappointed',
      name: 'Ending A: Gelombang Dendam & Pembalasan Binal',
      desc: 'Terbakar rasa kecewa pada Andre & Talia, Irene masuk ke kantor Rektor secara agresif demi melampiaskan dendam.',
      badge: 'Kepasrahan Binal'
    },
    {
      id: 'scene-ending-b',
      code: 'ending_giveup',
      name: 'Ending B: Pasrah Tanpa Jiwa (Boneka Rektor)',
      desc: 'Demi menjaga rahasia video agar Andre dan dirinya tidak hancur, Irene menyerahkan raga menjadi boneka penurut Rektor.',
      badge: 'Boneka Rahasia'
    },
    {
      id: 'scene-ending-c',
      code: 'ending_fleeting',
      name: 'Ending C: Kebebasan di Atas Bus Kota',
      desc: 'Mengarahkan harga diri, Irene memutar arah, mematikan ponsel, dan melangkah naik bus kota meninggalkan kampus.',
      badge: 'Kebebasan'
    },
    {
      id: 'scene-ending-d',
      code: 'ending_secret',
      name: 'Ending D: Pertaruhan Janji & Menahan Rahasia',
      desc: 'Irene menuntut Andre memutuskan Talia, memblokir Rektor, dan menghadapi badai rahasia esok hari bersama-sama.',
      badge: 'Kepastian Cinta'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      {/* Top Navigation */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs font-semibold text-stone-400 hover:text-stone-100 transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali ke Katalog
      </button>

      {/* Main Header Banner */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Cover */}
        <div className="w-44 sm:w-52 shrink-0 aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-stone-700/60 mx-auto md:mx-0">
          <img src={story.coverImage} alt={story.title} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-rose-600 text-white font-bold text-xs rounded-full">
              {story.ageRating}
            </span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold text-xs rounded-full flex items-center gap-1">
              <GitFork className="w-3.5 h-3.5" />
              Interactive Story
            </span>
            <span className="text-xs text-stone-400 font-medium">Oleh {story.author}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
            {story.title}
          </h1>

          {/* Rating & Stats */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300 pt-1">
            <div className="flex items-center gap-1 text-amber-400 font-bold text-sm">
              <Star className="w-4 h-4 fill-amber-400" />
              {story.rating} <span className="text-stone-400 font-normal text-xs">(1,420 Rating)</span>
            </div>
            <span>•</span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-stone-400" />
              9 Bab Lengkap
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-amber-300 font-semibold">
              <Award className="w-3.5 h-3.5" />
              {unlockedEndings.length} / {story.totalEndings} Ending Terbuka
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {story.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-stone-800 text-stone-300 text-[11px] rounded-lg border border-stone-700/60">
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onStartReading()}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 via-rose-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-stone-950 font-bold text-sm rounded-xl shadow-lg shadow-rose-950/40 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-stone-950" />
              Mulai Membaca Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-800 pb-2">
        <button
          onClick={() => setActiveTab('info')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'info'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Sinopsis & Cerita
        </button>

        <button
          onClick={() => setActiveTab('characters')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'characters'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Panduan Tokoh ({characters.length})
        </button>

        <button
          onClick={() => setActiveTab('endings')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'endings'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Daftar 4 Endings ({unlockedEndings.length}/4)
        </button>

        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'reviews'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          Ulasan Pembaca ({reviewsList.length})
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === 'info' && (
        <div className="space-y-6 bg-stone-900 border border-stone-800 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-stone-100">Ringkasan Sinopsis</h3>
          <p className="text-sm text-stone-300 leading-relaxed font-normal">
            {story.synopsis}
          </p>

          <div className="pt-4 border-t border-stone-800 space-y-3">
            <h4 className="font-semibold text-sm text-amber-300 flex items-center gap-1.5">
              <GitFork className="w-4 h-4" />
              Titik Cabang Keputusan Utama:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1">
                <span className="text-amber-400 font-bold block">1. Setelah Bab 2 (Ruang BP)</span>
                <p className="text-stone-400">Pilihan ke 2a (Bayangkan Memelukku) atau 2b (Realita).</p>
              </div>
              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1">
                <span className="text-rose-400 font-bold block">2. Setelah Bab 7 (Kantor Rektor)</span>
                <p className="text-stone-400">Pilihan ke 7a (Binal Mode) atau 7b (Penolakan & Histeria).</p>
              </div>
              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-1">
                <span className="text-emerald-400 font-bold block">3. Setelah Bab 9 (Lorong Kampus)</span>
                <p className="text-stone-400">Pilihan ke Ending A, Ending B, Ending C, atau Ending D.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'characters' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {characters.map((c) => (
            <div key={c.name} className="bg-stone-900 border border-stone-800 rounded-2xl p-5 flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl ${c.avatarBg} text-white font-bold flex items-center justify-center shrink-0 shadow-md`}>
                {c.name.charAt(0)}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-stone-100 text-sm">{c.name}</h4>
                <span className="text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md inline-block">
                  {c.role}
                </span>
                <p className="text-xs text-stone-300 leading-relaxed pt-1">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'endings' && (
        <div className="space-y-4">
          <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-4 flex items-center justify-between">
            <span className="text-xs text-stone-300 font-medium">
              Koleksi Akhir Cerita (Ending) Terbuka: <strong className="text-amber-400">{unlockedEndings.length} dari 4</strong>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {endingsList.map((e) => {
              const isUnlocked = unlockedEndings.includes(e.id) || unlockedEndings.includes(e.code);
              return (
                <div
                  key={e.id}
                  className={`bg-stone-900 border rounded-2xl p-5 space-y-2 transition-all ${
                    isUnlocked ? 'border-emerald-500/50 shadow-lg shadow-emerald-950/20' : 'border-stone-800 opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-100">{e.name}</span>
                    {isUnlocked ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Terbuka
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-stone-500 bg-stone-800 px-2 py-0.5 rounded-md">
                        <Lock className="w-3.5 h-3.5" /> Terkunci
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">{e.desc}</p>
                  <button
                    onClick={() => onStartReading(e.id)}
                    className="text-[11px] font-semibold text-amber-400 hover:underline pt-1 inline-block cursor-pointer"
                  >
                    {isUnlocked ? 'Baca Ulang Ending Ini' : 'Coba Jalur Ini'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="space-y-6">
          {/* Add Review Form */}
          <form onSubmit={handleAddReview} className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-3">
            <h4 className="font-bold text-sm text-stone-100">Tulis Ulasan Kamu</h4>
            <div className="flex items-center gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  onClick={() => setUserRating(s)}
                  className={`w-5 h-5 cursor-pointer ${s <= userRating ? 'fill-amber-400 text-amber-400' : 'text-stone-600'}`}
                />
              ))}
            </div>
            <textarea
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              placeholder="Bagaimana pendapatmu tentang alur cerita bercabang Gairah Irene?"
              rows={3}
              className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-stone-950 font-bold text-xs rounded-xl hover:bg-amber-400 transition-colors cursor-pointer"
            >
              Kirim Ulasan
            </button>
          </form>

          {/* Reviews List */}
          <div className="space-y-3">
            {reviewsList.map((r) => (
              <div key={r.id} className="bg-stone-900 border border-stone-800 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center font-bold text-xs text-amber-300">
                      {r.userAvatar}
                    </div>
                    <div>
                      <span className="font-bold text-xs text-stone-200">{r.userName}</span>
                      <span className="text-[10px] text-stone-500 ml-2">{r.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">{r.comment}</p>
                {r.endingReached && (
                  <span className="inline-block text-[10px] text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded-md font-semibold">
                    {r.endingReached}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
