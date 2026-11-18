const routeStops = [
  {
    name: { en: 'Lizheng Gate', zh: '丽正门' },
    description: {
      en: 'The grand southern entrance to the Mountain Resort, once used by the Qing imperial court.',
      zh: '避暑山庄的正南门，曾是清代皇帝和朝廷出入山庄的重要门户。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/0D1AF06A1B41EA13CC14F14014A7A601.jpg',
    source: 'https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/190.html',
    shortRoute: true,
  },
  {
    name: { en: 'Danbo Jingcheng Hall', zh: '澹泊敬诚殿' },
    description: {
      en: 'A sandalwood hall where emperors held ceremonies and received officials and guests.',
      zh: '以楠木建成的宫殿，皇帝曾在这里举行典礼、接见官员和宾客。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/66F174F8BB37907C6E7159EA226D1E82.jpg',
    source: 'https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/77.html',
    shortRoute: true,
  },
  {
    name: { en: 'Yanbo Zhishuang Hall', zh: '烟波致爽殿' },
    description: {
      en: 'A former imperial residence overlooking the resort’s lakes and green hills.',
      zh: '清代皇帝在山庄的寝宫之一，可感受宫殿与湖山相映的景致。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/9B8C0690FA1FC5CBD37232AA7AB7F571.jpg',
    source: 'https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/85.html',
    shortRoute: true,
  },
  {
    name: { en: 'Wanhe Songfeng Hall', zh: '万壑松风殿' },
    description: {
      en: 'A quiet palace retreat named for the sound of wind moving through the surrounding pines.',
      zh: '位于松林环绕的高处，殿名描绘了山风吹过松林的声音。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/E763F7B2439E0CD4F6E45371C58F0DF7.jpg',
    source: 'https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/87.html',
    shortRoute: true,
  },
  {
    name: { en: 'Yanxun Pavilion', zh: '延薰山馆' },
    description: {
      en: 'A pavilion on Ruyi Islet where the Kangxi Emperor once handled state affairs and welcomed visitors.',
      zh: '如意洲上的一处宫殿，康熙皇帝曾在此处理政务、接见来宾。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/AE7DDFF3E45397A3152AEE1FD2FA6C8C.jpg',
    source: 'https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/36.html',
    shortRoute: true,
  },
  {
    name: { en: 'Yanyu Tower', zh: '烟雨楼' },
    description: {
      en: 'A lakeside pavilion inspired by the famous Yanyu Tower in Jiaxing, Zhejiang.',
      zh: '临湖而建的楼阁，仿照浙江嘉兴的烟雨楼修建。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/C516C1B40F770CC84978E41DCC31E833.jpg',
    source: 'https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/73.html',
    shortRoute: true,
  },
  {
    name: { en: 'Jinshan Island', zh: '金山岛' },
    description: {
      en: 'An island landscape with pavilions inspired by Jinshan in Zhenjiang.',
      zh: '岛上亭阁借鉴江苏镇江金山景色，是湖区的标志性景观。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/0F85DEB9BB65F24912F99B1EA768BA0E.jpg',
    source: 'https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/39.html',
    shortRoute: false,
  },
  {
    name: { en: 'Rehe Spring', zh: '热河泉' },
    description: {
      en: 'A natural spring that gives the Rehe region its name and feeds the resort’s lakes.',
      zh: '山庄内著名的天然泉眼，也是湖区水系的重要来源之一。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/5EAFB111D6104A965764A4F1EB98DC6D.jpg',
    source: 'https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/40.html',
    shortRoute: false,
  },
  {
    name: { en: 'Wenjin Pavilion', zh: '文津阁' },
    description: {
      en: 'A royal library built to keep the Complete Library of the Four Treasuries.',
      zh: '清代皇家藏书楼，曾用于收藏《四库全书》。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/310F2BDB716415EF86E752DC29062B7E.jpg',
    source: 'https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/75.html',
    shortRoute: false,
  },
];

const copy = {
  en: {
    resort: 'CHENGDE\nMOUNTAIN RESORT', chineseName: '承德避暑山庄',
    title: 'Explore<br>Chengde', introduction: '',
    description: 'Between mountains and waters,<br>meet history, and meet a new you.',
    themes: ['LANDSCAPES', 'ARCHITECTURE', 'PEOPLE', 'STORIES'], begin: 'BEGIN<br>JOURNEY',
    photoAlt: 'Historic Chengde pavilion reflected in the lake', chooseLanguage: 'Choose language', journeyThemes: 'Journey themes', beginLabel: 'Begin journey',
    plan: {
      eyebrow: '01  /  PLAN YOUR VISIT', title: 'Plan Your Visit', subtitle: 'Make it your own.',
      timeQuestion: 'How much time do you have?', hour: 'hours',
      route2Name: 'Essential Highlights', route2Detail: 'A focused route through the palace and lake areas.',
      route3Name: 'Extended Discovery', route3Detail: 'Adds famous lake and plain-area landmarks.',
      searchLabel: 'Search route stops', searchPlaceholder: 'Try a place name, like Lake or Hall',
      noMatches: 'No stops match. Try another word or clear your search.',
      continue: 'Continue', back: 'Back to welcome',
    },
    preparation: {
      eyebrow: '03  /  YOUR ROUTE', title: 'Your Route Preview', description: 'A clear path through Chengde, shaped around your available time.',
      prototype: 'SUGGESTED STOPS', routeTitle: 'Your stop-by-stop guide',
      route2Note: '2-hour route · A focused walk through the palace and lake areas. Timing is an estimate.',
      route3Note: '3-hour route · Adds more time in the lake and plain areas. Timing is an estimate.',
      count: 'Showing', stops: 'stops', photoCredit: 'Photos: Chengde Mountain Resort official website. Select a photo to view its source.',
      back: 'Back to planning', step: 'STOP',
    },
  },
  zh: {
    resort: '承德\n避暑山庄', chineseName: 'CHENGDE MOUNTAIN RESORT',
    title: '探索<br>承德', introduction: '',
    description: '于山水间遇见历史，<br>也遇见崭新的自己。', themes: ['山水', '建筑', '人物', '故事'], begin: '开启<br>旅程',
    photoAlt: '倒映在湖水中的承德古建筑', chooseLanguage: '选择语言', journeyThemes: '旅程主题', beginLabel: '开启旅程',
    plan: {
      eyebrow: '01  /  规划您的游览', title: '规划您的游览', subtitle: '定制专属于您的旅程。',
      timeQuestion: '您有多少游览时间？', hour: '小时',
      route2Name: '精华路线', route2Detail: '精选宫殿区和湖区景点。',
      route3Name: '深度路线', route3Detail: '增加湖区和平原区的著名景点。',
      searchLabel: '搜索路线景点', searchPlaceholder: '试试输入景点名称，例如“湖”或“殿”',
      noMatches: '没有找到匹配的景点。请换个词，或清空搜索。',
      continue: '继续', back: '返回欢迎页',
    },
    preparation: {
      eyebrow: '03  /  您的路线', title: '您的路线预览', description: '根据您的游览时间，清晰探索承德山水与文化。',
      prototype: '推荐景点', routeTitle: '逐站游览指南',
      route2Note: '2 小时路线 · 精选宫殿区和湖区景点，时间为预计值。',
      route3Note: '3 小时路线 · 增加湖区和平原区景点，时间为预计值。',
      count: '共', stops: '个景点', photoCredit: '图片来源：避暑山庄官方网站。点击图片可查看原始来源。',
      back: '返回时间选择', step: '第',
    },
  },
};

const state = { language: 'en', page: 'welcome' };

// selectedDuration: visitors need the route preview to remember whether they chose 2 or 3 hours
let selectedDuration = 120;
let searchText = '';

function getCopy(path) {
  return path.split('.').reduce((value, key) => value[key], copy[state.language]);
}

// render: redraws the selected route stop cards and page controls from state
function render() {
  const content = copy[state.language];
  const isEnglish = state.language === 'en';
  document.documentElement.lang = isEnglish ? 'en' : 'zh-CN';

  document.querySelectorAll('[data-copy]').forEach((element) => { element.textContent = getCopy(element.dataset.copy); });
  document.querySelectorAll('[data-copy-html]').forEach((element) => { element.innerHTML = getCopy(element.dataset.copyHtml); });
  document.querySelectorAll('[data-photo]').forEach((element) => { element.setAttribute('aria-label', content.photoAlt); });
  document.querySelectorAll('.language-switcher').forEach((switcher) => { switcher.setAttribute('aria-label', content.chooseLanguage); });
  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === state.language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  document.querySelectorAll('[data-page]').forEach((section) => { section.hidden = section.dataset.page !== state.page; });
  document.querySelector('.welcome-page').classList.toggle('welcome-page--zh', !isEnglish);
  document.querySelector('.plan-page').classList.toggle('plan-page--zh', !isEnglish);
  document.querySelector('.preparation-page').classList.toggle('preparation-page--zh', !isEnglish);

  const themeIndex = document.querySelector('#theme-index');
  themeIndex.setAttribute('aria-label', content.journeyThemes);
  themeIndex.querySelectorAll(':scope > span:not(.theme-index__dot)').forEach((item) => item.remove());
  content.themes.forEach((theme) => {
    const item = document.createElement('span');
    item.textContent = theme;
    themeIndex.append(item);
  });

  document.querySelector('#start-button').setAttribute('aria-label', content.beginLabel);
  document.querySelector('[data-go="welcome"]').setAttribute('aria-label', content.plan.back);
  document.querySelector('[data-go="plan"]').setAttribute('aria-label', content.preparation.back);
  document.querySelector('.duration-options').setAttribute('aria-label', content.plan.timeQuestion);
  document.querySelector('.route-search-label').textContent = content.preparation.searchLabel;
  document.querySelector('#route-search').placeholder = content.preparation.searchPlaceholder;

  document.querySelectorAll('[data-duration]').forEach((button) => {
    const selected = Number(button.dataset.duration) === selectedDuration;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-checked', String(selected));
  });

  const routeList = document.querySelector('#route-stops');
  routeList.replaceChildren();
  let shown = 0;

  routeStops.forEach((stop) => {
    if (selectedDuration === 120 && !stop.shortRoute) return;

    shown += 1;
    const item = document.createElement('li');
    item.className = 'route-stop-card';
    const photoLink = document.createElement('a');
    photoLink.className = 'route-stop-card__photo-link';
    photoLink.href = stop.source;
    photoLink.target = '_blank';
    photoLink.rel = 'noreferrer';
    photoLink.setAttribute('aria-label', `${stop.name[state.language]} — ${content.preparation.photoCredit}`);
    const photo = document.createElement('img');
    photo.className = 'route-stop-card__photo';
    photo.src = stop.image;
    photo.alt = stop.name[state.language];
    photo.loading = 'lazy';
    photoLink.append(photo);

    const copyBox = document.createElement('div');
    copyBox.className = 'route-stop-card__copy';
    const number = document.createElement('p');
    number.className = 'route-stop-card__number';
    number.textContent = isEnglish ? `${content.preparation.step} ${String(shown).padStart(2, '0')}` : `${content.preparation.step}${shown}`;
    const heading = document.createElement('h3');
    heading.textContent = stop.name[state.language];
    const description = document.createElement('p');
    description.className = 'route-stop-card__description';
    description.textContent = stop.description[state.language];
    copyBox.append(number, heading, description);
    item.append(photoLink, copyBox);
    routeList.append(item);
  });

  document.querySelector('#route-time-note').textContent = selectedDuration === 120
    ? content.preparation.route2Note
    : content.preparation.route3Note;
  document.querySelector('#route-count').textContent = isEnglish
    ? `${content.preparation.count} ${shown} ${content.preparation.stops}`
    : `${content.preparation.count}${shown}${content.preparation.stops}`;
  routeList.setAttribute('aria-label', content.preparation.routeTitle);
  document.querySelector('#route-no-matches').textContent = content.preparation.noMatches;
  document.querySelector('#route-no-matches').hidden = shown !== 0;
}

document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => {
  state.language = button.dataset.language;
  render();
}));
document.querySelector('#start-button').addEventListener('click', () => {
  state.page = 'plan';
  render();
});
document.querySelectorAll('[data-go]').forEach((button) => button.addEventListener('click', () => {
  state.page = button.dataset.go;
  render();
}));
document.querySelectorAll('[data-duration]').forEach((button) => button.addEventListener('click', () => {
  selectedDuration = Number(button.dataset.duration);
  render();
}));
document.querySelector('#plan-form').addEventListener('submit', (event) => {
  event.preventDefault();
  state.page = 'preparation';
  render();
});

document.querySelector('#route-search').addEventListener('input', (event) => {
  searchText = event.target.value;
  render();
});

render();
