// Portfolio Work Data
// Complete data structure for portfolio projects

export interface Photo {
  id: string;
  title: string;
  location: string;
  thumbnail: string;
  fullImage: string;
  chapter: 'freelance' | 'manager' | 'producer';
}

export interface PhotoChapter {
  id: 'freelance' | 'manager' | 'producer';
  title: string;
  description: string;
}

export const photoChapters: PhotoChapter[] = [
  {
    id: 'freelance',
    title: 'Freelance',
    description: 'Department Coordinator and Set Designer work for various productions.',
  },
  {
    id: 'manager',
    title: 'Manager & Event Organization',
    description: 'Project management and event organization for music videos and charity events.',
  },
  {
    id: 'producer',
    title: 'Producer & Producer Assistant',
    description: 'Film, TV drama, and music video production work.',
  },
];

export const photosData: Photo[] = [
  // Freelance Projects
  {
    id: 'paper',
    title: 'Department Coordinator',
    location: 'Short film "Paper"',
    thumbnail: '/images/freelance-department-coordinator---short-film-paper.jpg',
    fullImage: '/images/freelance-department-coordinator---short-film-paper.jpg',
    chapter: 'freelance',
  },
  {
    id: 'anh-mong-mer',
    title: 'Department Coordinator',
    location: 'Music Video "Soundtrack: Anh Mộng Mer" - Xanh Biếc Band',
    thumbnail: '/images/freelance-department-coordinator---music-video-soundtrack-anh-mong-mer---xanh-biec-band.png',
    fullImage: '/images/freelance-department-coordinator---music-video-soundtrack-anh-mong-mer---xanh-biec-band.png',
    chapter: 'freelance',
  },
  {
    id: 'giesu-chua-ben-con',
    title: 'Department Coordinator',
    location: 'Music Video "Giêsu, Chúa Bên Con" - Lumen Choir',
    thumbnail: '/images/freelance-department-coordinator---music-video-giesu-chua-ben-con---lumen-choir.png',
    fullImage: '/images/freelance-department-coordinator---music-video-giesu-chua-ben-con---lumen-choir.png',
    chapter: 'freelance',
  },
  {
    id: 'whiskey-double-shot',
    title: 'Set Designer',
    location: 'Music Video "Whiskey Double Shot"',
    thumbnail: '/images/freelance-set-designer---music-video-whiskey-double-shot.png',
    fullImage: '/images/freelance-set-designer---music-video-whiskey-double-shot.png',
    chapter: 'freelance',
  },
  // Manager & Event Organization
  {
    id: 'roi-christopher-wong',
    title: 'Project Manager',
    location: 'Music Video "Rọi" - Christopher Wong (Hòa tấu Orchestra)',
    thumbnail: '/images/project-manager---music-video-roi---christopher-wong-hoa-tau-orchestra.png',
    fullImage: '/images/project-manager---music-video-roi---christopher-wong-hoa-tau-orchestra.png',
    chapter: 'manager',
  },
  {
    id: 'phia-sau-mot-nhan-vat',
    title: 'Ban tổ chức',
    location: 'Sự kiện "Phía sau một nhân vật"',
    thumbnail: '/images/ban-to-chuc-su-kien-phia-sau-mot-nhan-vat.png',
    fullImage: '/images/ban-to-chuc-su-kien-phia-sau-mot-nhan-vat.png',
    chapter: 'manager',
  },
  // Producer & Producer Assistant
  {
    id: 'chiem-oat',
    title: 'Producer Assistant',
    location: 'Feature film "Chiếm Đoạt" - Director Thắng Vũ',
    thumbnail: '/images/producer-assistant---feature-film-chiem-oat---director-thang-vu.jpg',
    fullImage: '/images/producer-assistant---feature-film-chiem-oat---director-thang-vu.jpg',
    chapter: 'producer',
  },
  {
    id: 'hung-long-phong-ba-2',
    title: 'Producer Assistant',
    location: 'TV Drama Series "Hưng Long Phong Ba 2" - Galaxy Play',
    thumbnail: '/images/hung-long-phong-ba-2---galaxy-play.jpg',
    fullImage: '/images/hung-long-phong-ba-2---galaxy-play.jpg',
    chapter: 'producer',
  },
  {
    id: 'cuoc-chien-ha-luu',
    title: 'Producer Assistant',
    location: 'TV Drama Series "Cuộc Chiến Hạ Lưu" - VieON Original',
    thumbnail: '/images/producer-assistant---tv-drama-series-cuoc-chien-ha-luu---vieon-original.jpg',
    fullImage: '/images/producer-assistant---tv-drama-series-cuoc-chien-ha-luu---vieon-original.jpg',
    chapter: 'producer',
  },
  {
    id: 'love-without-border',
    title: 'Producer Assistant',
    location: 'Short Film "Love Without Border" - Director Joe Epstein',
    thumbnail: '/images/producer-assistant---short-film-love-without-border---director-joe-epstein.jpg',
    fullImage: '/images/producer-assistant---short-film-love-without-border---director-joe-epstein.jpg',
    chapter: 'producer',
  },
  {
    id: 'khong-con-toc-bay',
    title: 'Producer',
    location: 'Music Video Stop-motion "Không còn tóc bay"',
    thumbnail: '/images/producer---music-video-stop-motion-khong-con-toc-bay.png',
    fullImage: '/images/producer---music-video-stop-motion-khong-con-toc-bay.png',
    chapter: 'producer',
  },
  {
    id: 'con-chim-sau',
    title: 'Producer',
    location: 'Music Video Stop-motion "Con Chim Sâu" - Kiên Trịnh',
    thumbnail: '/images/producer---music-video-stop-motion-con-chim-sau---kien-trinh.png',
    fullImage: '/images/producer---music-video-stop-motion-con-chim-sau---kien-trinh.png',
    chapter: 'producer',
  },
];

// Helper function to get photos by chapter
export function getPhotosByChapter(chapter: 'freelance' | 'manager' | 'producer'): Photo[] {
  return photosData.filter((photo) => photo.chapter === chapter);
}

// Helper function to get photo by ID
export function getPhotoById(id: string): Photo | undefined {
  return photosData.find((photo) => photo.id === id);
}

// Get chapter info
export function getChapterInfo(chapterId: 'freelance' | 'manager' | 'producer'): PhotoChapter | undefined {
  return photoChapters.find((chapter) => chapter.id === chapterId);
}
