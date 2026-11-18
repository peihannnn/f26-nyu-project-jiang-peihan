const routeStops = [
  {
    name: { en: 'Lizheng Gate', zh: '丽正门' },
    description: {
      en: 'The grand southern entrance to the Mountain Resort, once used by the Qing imperial court.',
      zh: '避暑山庄的正南门，曾是清代皇帝和朝廷出入山庄的重要门户。',
    },
    details: {
      en: 'First built during the Kangxi reign and rebuilt in 1754 under the Qianlong Emperor, the gate marked the formal entrance to the resort. Officials dismounted here before entering; only the emperor and his parents could pass the stone markers on horseback or by sedan.',
      zh: '丽正门初建于康熙年间，乾隆十九年（1754年）重修，是进入山庄的正式门户。官员需在门外下马或下轿步行入园，只有皇帝及其父母可骑马或乘轿通过下马碑。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/0D1AF06A1B41EA13CC14F14014A7A601.jpg',
    shortRoute: true,
  },
  {
    name: { en: 'Danbo Jingcheng Hall', zh: '澹泊敬诚殿' },
    description: {
      en: 'A sandalwood hall where emperors held ceremonies and received officials and guests.',
      zh: '以楠木建成的宫殿，皇帝曾在这里举行典礼、接见官员和宾客。',
    },
    details: {
      en: 'Built in 1711 and rebuilt with nanmu wood in 1754, this hall hosted major ceremonies, court audiences, and meetings with visiting leaders and envoys. Its name expresses a traditional ideal of quiet, principled living.',
      zh: '澹泊敬诚殿始建于1711年，1754年改用楠木重建，曾用于举行重大庆典、接受百官朝觐及接见来访的首领和使节。殿名表达了清静自持、修身养德的传统理念。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/66F174F8BB37907C6E7159EA226D1E82.jpg',
    shortRoute: true,
  },
  {
    name: { en: 'Yanbo Zhishuang Hall', zh: '烟波致爽殿' },
    description: {
      en: 'A former imperial residence overlooking the resort’s lakes and green hills.',
      zh: '清代皇帝在山庄的寝宫之一，可感受宫殿与湖山相映的景致。',
    },
    details: {
      en: 'Built in 1710, Yanbo Zhishuang was an imperial residence with a main hall, heated rooms, and a Buddhist shrine. The Kangxi Emperor named it for the refreshing air around the hills and lake; the Jiaqing and Xianfeng emperors both died here.',
      zh: '烟波致爽殿建于1710年，是皇帝寝宫，殿内设有明厅、暖阁和佛堂。康熙皇帝以周围山岭与澄澈湖水带来的清爽之气为它题名；嘉庆、咸丰两位皇帝均在此去世。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/9B8C0690FA1FC5CBD37232AA7AB7F571.jpg',
    shortRoute: true,
  },
  {
    name: { en: 'Wanhe Songfeng Hall', zh: '万壑松风殿' },
    description: {
      en: 'A quiet palace retreat named for the sound of wind moving through the surrounding pines.',
      zh: '位于松林环绕的高处，殿名描绘了山风吹过松林的声音。',
    },
    details: {
      en: 'The name evokes wind moving through pine-covered valleys. This stop sits along the northern palace route, before the path continues toward the resort’s lakes and island gardens.',
      zh: '“万壑松风”描绘山风穿过松林、回荡于山谷的景象。它位于山庄北线的宫殿区域，继续前行便可走向湖区和岛上园林。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/E763F7B2439E0CD4F6E45371C58F0DF7.jpg',
    shortRoute: true,
  },
  {
    name: { en: 'Yanxun Pavilion', zh: '延薰山馆' },
    description: {
      en: 'A pavilion on Ruyi Islet where the Kangxi Emperor once handled state affairs and welcomed visitors.',
      zh: '如意洲上的一处宫殿，康熙皇帝曾在此处理政务、接见来宾。',
    },
    details: {
      en: 'Yanxun Shanguan is one of the named scenic places on Ruyi Islet. The resort’s official guide describes the islet as an early area where Qing emperors lived and handled government affairs; several of the resort’s celebrated views are grouped here.',
      zh: '延薰山馆是如意洲上的著名景点之一。景区导览介绍，如意洲是清帝较早起居和处理政务的区域，山庄多个著名景观集中在这座岛上。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/AE7DDFF3E45397A3152AEE1FD2FA6C8C.jpg',
    shortRoute: true,
  },
  {
    name: { en: 'Yanyu Tower', zh: '烟雨楼' },
    description: {
      en: 'A lakeside pavilion inspired by the famous Yanyu Tower in Jiaxing, Zhejiang.',
      zh: '临湖而建的楼阁，仿照浙江嘉兴的烟雨楼修建。',
    },
    details: {
      en: 'This lake-area landmark takes its name and design inspiration from Yanyu Tower in Jiaxing, Zhejiang. Its waterside setting is a good place to pause and notice how the resort brings landscapes from different parts of China into one garden.',
      zh: '这座湖区名楼的名称和设计灵感来自浙江嘉兴烟雨楼。可以在临水一侧稍作停留，留意山庄如何把各地风景意象融入同一座园林。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/C516C1B40F770CC84978E41DCC31E833.jpg',
    shortRoute: true,
  },
  {
    name: { en: 'Jinshan Island', zh: '金山岛' },
    description: {
      en: 'An island landscape with pavilions inspired by Jinshan in Zhenjiang.',
      zh: '岛上亭阁借鉴江苏镇江金山景色，是湖区的标志性景观。',
    },
    details: {
      en: 'Jinshan is part of the resort’s lake district. The official route guide places it among the island and waterside landmarks, and its pavilions recall the scenery of Jinshan in Zhenjiang, Jiangsu.',
      zh: '金山岛位于山庄湖区。景区路线将它列为湖岛景观之一，岛上的亭阁借鉴了江苏镇江金山的风景意象。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/0F85DEB9BB65F24912F99B1EA768BA0E.jpg',
    shortRoute: false,
  },
  {
    name: { en: 'Rehe Spring', zh: '热河泉' },
    description: {
      en: 'A natural spring that gives the Rehe region its name and feeds the resort’s lakes.',
      zh: '山庄内著名的天然泉眼，也是湖区水系的重要来源之一。',
    },
    details: {
      en: 'Rehe is a natural spring in the resort and a named stop on the lake-area routes. The spring and its water landscape help explain why waterways are such a central part of the garden’s layout.',
      zh: '热河泉是山庄内的天然泉眼，也是湖区路线中的重要景点。泉水与水景能帮助游客理解水系为何成为山庄园林布局的重要部分。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/5EAFB111D6104A965764A4F1EB98DC6D.jpg',
    shortRoute: false,
  },
  {
    name: { en: 'Wenjin Pavilion', zh: '文津阁' },
    description: {
      en: 'A royal library built to keep the Complete Library of the Four Treasuries.',
      zh: '清代皇家藏书楼，曾用于收藏《四库全书》。',
    },
    details: {
      en: 'Wenjin Pavilion was built as a royal library to preserve the imperial collection known as the Complete Library of the Four Treasuries. It stands in the resort’s northern plain area, where open grassland and water features create a different feel from the palace courtyards.',
      zh: '文津阁是清代皇家藏书楼，专为收藏钦定《四库全书》而建。它位于山庄北部平原区，周围开阔的草地和水景与宫殿庭院呈现出不同的游览感受。',
    },
    image: 'https://www.bishushanzhuang.com.cn/Upload/album/310F2BDB716415EF86E752DC29062B7E.jpg',
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
      continue: 'Continue', back: 'Back to welcome',
    },
    preparation: {
      eyebrow: '03  /  YOUR ROUTE', title: 'Your Route Preview', description: 'A clear path through Chengde, shaped around your available time.',
      prototype: 'SUGGESTED STOPS', routeTitle: 'Your stop-by-stop guide',
      route2Note: '2-hour route · A focused walk through the palace and lake areas. Timing is an estimate.',
      route3Note: '3-hour route · Adds more time in the lake and plain areas. Timing is an estimate.',
      count: 'Showing', stops: 'stops', searchLabel: 'Search route stops', searchPlaceholder: 'Try a place name, like Lake or Hall',
      noMatches: 'No stops match. Try another word or clear your search.', openDetails: 'TAP TO READ MORE',
      photoCredit: 'Photos: Chengde Mountain Resort official website. Select a card to read more.',
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
      continue: '继续', back: '返回欢迎页',
    },
    preparation: {
      eyebrow: '03  /  您的路线', title: '您的路线预览', description: '根据您的游览时间，清晰探索承德山水与文化。',
      prototype: '推荐景点', routeTitle: '逐站游览指南',
      route2Note: '2 小时路线 · 精选宫殿区和湖区景点，时间为预计值。',
      route3Note: '3 小时路线 · 增加湖区和平原区景点，时间为预计值。',
      count: '共', stops: '个景点', searchLabel: '搜索路线景点', searchPlaceholder: '试试输入景点名称，例如“湖”或“殿”',
      noMatches: '没有找到匹配的景点。请换个词，或清空搜索。', openDetails: '点击卡片了解更多',
      photoCredit: '图片来源：避暑山庄官方网站。点击卡片可查看详细介绍。',
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

// Does a stop's name or description contain the search text? Returns true or false.
function matchesSearch(stop) {
  const stopText = `${stop.name.en} ${stop.name.zh} ${stop.description.en} ${stop.description.zh}`.toLowerCase();
  return stopText.includes(searchText.trim().toLowerCase());
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
    if (!matchesSearch(stop)) return;

    shown += 1;
    const item = document.createElement('li');
    const card = document.createElement('details');
    card.className = 'route-stop-card';
    const summary = document.createElement('summary');
    summary.className = 'route-stop-card__summary';
    const photo = document.createElement('img');
    photo.className = 'route-stop-card__photo';
    photo.src = stop.image;
    photo.alt = stop.name[state.language];
    photo.loading = 'lazy';

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
    const hint = document.createElement('p');
    hint.className = 'route-stop-card__hint';
    hint.textContent = content.preparation.openDetails;
    copyBox.append(number, heading, description, hint);
    summary.append(photo, copyBox);

    const detailsText = document.createElement('p');
    detailsText.className = 'route-stop-card__details';
    detailsText.textContent = stop.details[state.language];
    card.append(summary, detailsText);
    item.append(card);
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
