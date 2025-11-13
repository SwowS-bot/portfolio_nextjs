// Works/Projects Data
// Complete data structure for all portfolio projects

export interface Work {
  id: string;
  title: string;
  number?: string;
  role: string[];
  year: string;
  description: string;
  url?: string;
  coverImage: string;
  backgroundImage: string;
  images: string[];
}

export const worksData: Work[] = [
  // Films & TV Drama Series
  {
    id: 'chiem-doat',
    title: 'Chiếm Đoạt',
    role: ['Producer Assistant'],
    year: '2023',
    description:
      'Feature film directed by Thắng Vũ. Worked as Producer Assistant, coordinating production activities and supporting the production team throughout the filming process.',
    coverImage: '/images/producer-assistant---feature-film-chiem-oat---director-thang-vu.jpg',
    backgroundImage: '/images/producer-assistant---feature-film-chiem-oat---director-thang-vu.jpg',
    images: [
      '/images/producer-assistant---feature-film-chiem-oat---director-thang-vu.jpg',
    ],
  },
  {
    id: 'hung-long-phong-ba-2',
    title: 'Hưng Long Phong Ba 2',
    role: ['Producer Assistant'],
    year: '2023',
    description:
      'TV Drama Series for Galaxy Play. Served as Producer Assistant, managing various aspects of production for this television drama series.',
    coverImage: '/images/hung-long-phong-ba-2---galaxy-play.jpg',
    backgroundImage: '/images/hung-long-phong-ba-2---galaxy-play.jpg',
    images: [
      '/images/hung-long-phong-ba-2---galaxy-play.jpg',
    ],
  },
  {
    id: 'cuoc-chien-ha-luu',
    title: 'Cuộc Chiến Hạ Lưu',
    role: ['Producer Assistant'],
    year: '2023',
    description:
      'VieON Original TV Drama Series. Worked as Producer Assistant on this compelling television drama series exploring themes of social dynamics and personal struggles.',
    coverImage: '/images/producer-assistant---tv-drama-series-cuoc-chien-ha-luu---vieon-original.jpg',
    backgroundImage: '/images/producer-assistant---tv-drama-series-cuoc-chien-ha-luu---vieon-original.jpg',
    images: [
      '/images/producer-assistant---tv-drama-series-cuoc-chien-ha-luu---vieon-original.jpg',
    ],
  },
  {
    id: 'love-without-border',
    title: 'Love Without Border',
    role: ['Producer Assistant'],
    year: '2023',
    description:
      'Short film directed by Joe Epstein. Served as Producer Assistant on this international short film project exploring themes of love transcending boundaries.',
    coverImage: '/images/producer-assistant---short-film-love-without-border---director-joe-epstein.jpg',
    backgroundImage: '/images/producer-assistant---short-film-love-without-border---director-joe-epstein.jpg',
    images: [
      '/images/producer-assistant---short-film-love-without-border---director-joe-epstein.jpg',
    ],
  },
  
  // Music Videos - Producer
  {
    id: 'khong-con-toc-bay',
    title: 'Không còn tóc bay',
    role: ['Producer'],
    year: '2022',
    description:
      'Stop-motion music video showcasing innovative animation techniques. Produced this unique visual project combining music with frame-by-frame animation.',
    coverImage: '/images/producer---music-video-stop-motion-khong-con-toc-bay.png',
    backgroundImage: '/images/producer---music-video-stop-motion-khong-con-toc-bay-2.png',
    images: [
      '/images/producer---music-video-stop-motion-khong-con-toc-bay.png',
      '/images/producer---music-video-stop-motion-khong-con-toc-bay-2.png',
    ],
  },
  {
    id: 'con-chim-sau',
    title: 'Con Chim Sâu - Kiên Trịnh',
    role: ['Producer'],
    year: '2022',
    description:
      'Stop-motion music video for artist Kiên Trịnh. Produced this artistic music video featuring intricate stop-motion animation and creative storytelling.',
    coverImage: '/images/producer---music-video-stop-motion-con-chim-sau---kien-trinh.png',
    backgroundImage: '/images/producer---music-video-stop-motion-con-chim-sau---kien-trinh.png',
    images: [
      '/images/producer---music-video-stop-motion-con-chim-sau---kien-trinh.png',
    ],
  },
  
  // Freelance Projects
  {
    id: 'paper-short-film',
    title: 'Paper',
    role: ['Department Coordinator'],
    year: '2022',
    description:
      'Short film project. Worked as Department Coordinator, managing departmental operations and ensuring smooth coordination between different production units.',
    coverImage: '/images/freelance-department-coordinator---short-film-paper.jpg',
    backgroundImage: '/images/freelance-department-coordinator---short-film-paper.jpg',
    images: [
      '/images/freelance-department-coordinator---short-film-paper.jpg',
    ],
  },
  {
    id: 'anh-mong-mer',
    title: 'Anh Mộng Mer - Xanh Biếc Band',
    role: ['Department Coordinator'],
    year: '2022',
    description:
      'Music video soundtrack for Xanh Biếc Band. Coordinated various departments to create this memorable music video production.',
    coverImage: '/images/freelance-department-coordinator---music-video-soundtrack-anh-mong-mer---xanh-biec-band.png',
    backgroundImage: '/images/freelance-department-coordinator---music-video-soundtrack-anh-mong-mer---xanh-biec-band.png',
    images: [
      '/images/freelance-department-coordinator---music-video-soundtrack-anh-mong-mer---xanh-biec-band.png',
    ],
  },
  {
    id: 'giesu-chua-ben-con',
    title: 'Giêsu, Chúa Bên Con - Lumen Choir',
    role: ['Department Coordinator'],
    year: '2022',
    description:
      'Music video for Lumen Choir. Coordinated production departments for this spiritual and uplifting music video project.',
    coverImage: '/images/freelance-department-coordinator---music-video-giesu-chua-ben-con---lumen-choir.png',
    backgroundImage: '/images/freelance-department-coordinator---music-video-giesu-chua-ben-con---lumen-choir.png',
    images: [
      '/images/freelance-department-coordinator---music-video-giesu-chua-ben-con---lumen-choir.png',
    ],
  },
  {
    id: 'whiskey-double-shot',
    title: 'Whiskey Double Shot',
    role: ['Set Designer'],
    year: '2022',
    description:
      'Music video project. Worked as Set Designer, creating and managing the visual environment and set pieces for this stylish music video.',
    coverImage: '/images/freelance-set-designer---music-video-whiskey-double-shot.png',
    backgroundImage: '/images/freelance-set-designer---music-video-whiskey-double-shot.png',
    images: [
      '/images/freelance-set-designer---music-video-whiskey-double-shot.png',
    ],
  },
  
  // Event Organization
  {
    id: 'roi-christopher-wong',
    title: 'Rọi - Christopher Wong Orchestra',
    role: ['Project Manager'],
    year: '2022',
    description:
      'Music video project featuring Christopher Wong with orchestral arrangement. Managed the entire project from conception to completion.',
    coverImage: '/images/project-manager---music-video-roi---christopher-wong-hoa-tau-orchestra.png',
    backgroundImage: '/images/project-manager---music-video-roi---christopher-wong-hoa-tau-orchestra.png',
    images: [
      '/images/project-manager---music-video-roi---christopher-wong-hoa-tau-orchestra.png',
    ],
  },
  {
    id: 'phia-sau-mot-nhan-vat',
    title: 'Phía sau một nhân vật',
    role: ['Event Organizer'],
    year: '2022',
    description:
      'Special event exploring the stories behind characters. Served as part of the organizing committee for this unique cultural event.',
    coverImage: '/images/ban-to-chuc-su-kien-phia-sau-mot-nhan-vat.png',
    backgroundImage: '/images/ban-to-chuc-su-kien-phia-sau-mot-nhan-vat-h.png',
    images: [
      '/images/ban-to-chuc-su-kien-phia-sau-mot-nhan-vat.png',
      '/images/ban-to-chuc-su-kien-phia-sau-mot-nhan-vat-1.png',
      '/images/ban-to-chuc-su-kien-phia-sau-mot-nhan-vat-2.png',
      '/images/ban-to-chuc-su-kien-phia-sau-mot-nhan-vat-3.png',
      '/images/ban-to-chuc-su-kien-phia-sau-mot-nhan-vat-4.png',
      '/images/ban-to-chuc-su-kien-phia-sau-mot-nhan-vat-h.png',
    ],
  },
  
  // TVC - Production Team
  {
    id: 'pantene-phuc-hoi-hu-ton',
    title: 'Pantene - Phục hồi hư tổn',
    role: ['Production Team'],
    year: '2023',
    description:
      'Commercial for Pantene hair care products. Worked as part of the production team on this professional advertising campaign.',
    coverImage: '/images/production-team---pantene-phuc-hoi-hu-ton.png',
    backgroundImage: '/images/production-team---pantene-phuc-hoi-hu-ton.png',
    images: [
      '/images/production-team---pantene-phuc-hoi-hu-ton.png',
    ],
  },
  {
    id: 'nutriboost',
    title: 'Nutriboost',
    role: ['Production Team'],
    year: '2023',
    description:
      'Commercial campaign for Nutriboost beverage brand. Contributed as production team member on this engaging advertising project.',
    coverImage: '/images/production-team---nutriboost-1.png',
    backgroundImage: '/images/production-team---nutriboost-2.png',
    images: [
      '/images/production-team---nutriboost-1.png',
      '/images/production-team---nutriboost-2.png',
    ],
  },
  {
    id: 'pringles-pop-into-drama',
    title: 'Pringles - Pop into the Drama',
    role: ['Production Team'],
    year: '2023',
    description:
      'Creative commercial campaign for Pringles. Part of the production team delivering this fun and engaging advertising content.',
    coverImage: '/images/production-team---pringles-pop-into-the-drama.png',
    backgroundImage: '/images/production-team---pringles-pop-into-the-drama.png',
    images: [
      '/images/production-team---pringles-pop-into-the-drama.png',
    ],
  },
  {
    id: 'vinamilk-optimum-gold',
    title: 'Vinamilk Optimum Gold',
    role: ['Production Team'],
    year: '2023',
    description:
      'Premium product commercial for Vinamilk. Worked as part of the production team on this high-quality advertising campaign.',
    coverImage: '/images/production-team---vinamilk-optimum-gold.png',
    backgroundImage: '/images/production-team---vinamilk-optimum-gold.png',
    images: [
      '/images/production-team---vinamilk-optimum-gold.png',
    ],
  },
  {
    id: 'dont-overthink-it',
    title: "Don't Overthink It! - Bùi Công Nam x Ice+",
    role: ['Production Team'],
    year: '2023',
    description:
      'Collaborative commercial featuring Bùi Công Nam for Ice+ brand. Contributed to production team for this creative advertising project.',
    coverImage: '/images/production-team---dont-overthink-it---bui-cong-nam-x-ice.png',
    backgroundImage: '/images/production-team---dont-overthink-it---bui-cong-nam-x-ice.png',
    images: [
      '/images/production-team---dont-overthink-it---bui-cong-nam-x-ice.png',
    ],
  },
  {
    id: 'kv-thums-up-charged',
    title: 'Thums Up Charged',
    role: ['Production Team'],
    year: '2023',
    description:
      'Key visual campaign for Thums Up Charged beverage. Part of the production team creating impactful visual content for this brand.',
    coverImage: '/images/production-team---kv-thums-up-charged-1.png',
    backgroundImage: '/images/production-team---kv-thums-up-charged-2.png',
    images: [
      '/images/production-team---kv-thums-up-charged-1.png',
      '/images/production-team---kv-thums-up-charged-2.png',
    ],
  },
  
].map((work, index) => ({ ...work, number: (index + 1).toString().padStart(2, '0') }));

// Helper function to get work by ID
export function getWorkById(id: string): Work | undefined {
  return worksData.find((work) => work.id === id);
}

// Helper function to get next work
export function getNextWork(currentId: string): Work | null {
  const currentIndex = worksData.findIndex((work) => work.id === currentId);
  if (currentIndex === -1 || currentIndex === worksData.length - 1) {
    return null;
  }
  return worksData[currentIndex + 1];
}

// Helper function to get previous work
export function getPrevWork(currentId: string): Work | null {
  const currentIndex = worksData.findIndex((work) => work.id === currentId);
  if (currentIndex === -1 || currentIndex === 0) {
    return null;
  }
  return worksData[currentIndex - 1];
}
