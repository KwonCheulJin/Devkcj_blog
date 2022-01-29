module.exports = {
  title: `Devkcj.com`,
  description: `찰스의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.devkcj.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `KwonCheulJin/Devkcj_blog`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `권철진`,
    bio: {
      role: `개발자`,
      description: ['지속적으로 노력하는', '능동적으로 일하는', '몰입하여 일하는'],
      thumbnail: '', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/KwonCheulJin`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `chkftm12@gamil.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.09 ~',
        activity: '교보문고 VCMS 프로젝트 투입',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.09 ~',
        activity: '갯츠비 탬플릿 블로그 오픈!',
        links: {
          post: '',
          github: 'https://github.com/KwonCheulJin/Devkcj_blog',
          demo: '',
        },
      },
      {
        date: '2021.08 ~',
        activity: 'SI 프리픽스 입사',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.02 ~ 2021.05',
        activity: '구공팩토리 부트캠프 프론트엔드과정 수료',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Stock Community Site Project',
        description:
          '2030 건강한 주식투자자를 위한 주식 커뮤니티사이트, MVC 디자인 패턴 및 바닐라자바스크립만 사용하여 각각의 역할에 맞는 기능을 분배해 주고 연결해 주려고 노력하였습니다. 프론트 동료 1명과 백엔드 1명이서 디자인부터 구현까지 경험해보았습니다.',
        techStack: ['JavaScript', 'CSS3', 'HTML5', 'Chart.js'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: 'https://github.com/kdh92417/stock_team_project',
          demo: '',
        },
      },
    ],
  },
};
