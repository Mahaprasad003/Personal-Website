const MY_DOMAIN = 'rezaarkan.com';

const SLUG_TO_PAGE = {
  '': '882cd6dd6e1e482d823b464f326213e5',
  'now': '25b7df64071d420d8f609bf76d9f4114',
  'portfolio': '6000547bed0d441793bfba1498c063e2',
  'resume': '0934b80d2d1544f99dedadb00be9d146',
  'recommendations': '29115129efa44f1a870f390dd2c0a6c0',
  'photos': 'e78c0492a5ec486aa51f4cdb2c6f4603',
  'blog': '29bb193c1a104ba2b832788b57d58cd6',
  'bookmarks': 'e31f043461cd4739b9ec967cb36c0cba',
  'contact': '15364eee2c8b41188a069184f9e108be',
  
  'AI-or-Human-A-semester-project-2dd58996644a433da2a84ad5c1b3b77e': '2dd58996644a433da2a84ad5c1b3b77e',
  'portfolio/ai-or-human': '2dd58996644a433da2a84ad5c1b3b77e',
  'Organizing-a-Design-Workshop-for-Product-Management-ae990852834b40859cf0c7e49cab94a3': 'ae990852834b40859cf0c7e49cab94a3',
  'portfolio/tvlk-design-workshop': 'ae990852834b40859cf0c7e49cab94a3',
  'Lessons-Learned-from-Combining-Travel-Products-9555e9cb44934b198f21337e5a3c82e5': '9555e9cb44934b198f21337e5a3c82e5',
  'portfolio/tvlk-trip': '9555e9cb44934b198f21337e5a3c82e5',
  'Co-leading-A-New-Initiative-bef6b466b2084e48a3d76d5e1599e72a': 'bef6b466b2084e48a3d76d5e1599e72a',
  'portfolio/tvlk-global-train': 'bef6b466b2084e48a3d76d5e1599e72a',
  'Standardizing-Booking-Platform-6be7354482b740b393c0a3e3a7906b2d': '6be7354482b740b393c0a3e3a7906b2d',
  'portfolio/tvlk-booking-form': '6be7354482b740b393c0a3e3a7906b2d',
  'Datafication-and-design-Are-we-designing-the-right-thing-9254c583ef114f18a0436897998a890d': '9254c583ef114f18a0436897998a890d',
  'portfolio/datafication-and-design': '9254c583ef114f18a0436897998a890d',
  'Designing-Life-50d7963ef121462b9a7454a9c0b31813': '50d7963ef121462b9a7454a9c0b31813',
  'portfolio/designing-life': '50d7963ef121462b9a7454a9c0b31813',
  
  'Customizing-Notion-with-Fruition-2829988d7f1e4632ae25070c7f6278fe': '2829988d7f1e4632ae25070c7f6278fe',
  'blog/customizing-notion-with-fruition': '2829988d7f1e4632ae25070c7f6278fe',
  'Guess-how-I-made-the-Guestbook-a4a227d5a1e94ff786f0c2b67bfe915f': 'a4a227d5a1e94ff786f0c2b67bfe915f',
  'blog/guess-how-i-made-the-guestbook': 'a4a227d5a1e94ff786f0c2b67bfe915f',
  'Siri-Says-Good-Morning-2b4b3bb9803f435f8ec9703a7b220dfc': '2b4b3bb9803f435f8ec9703a7b220dfc',
  'blog/siri-says-good-morning': '2b4b3bb9803f435f8ec9703a7b220dfc',
  'Going-Places-A-list-of-things-to-do-in-Copenhagen-a01d2801c2054b178d7eeebeaec5131b': 'a01d2801c2054b178d7eeebeaec5131b',
  'blog/going-places-copenhagen': 'a01d2801c2054b178d7eeebeaec5131b',
  'Finally-new-website-69811fd6281b433cbcbd2fc5daeba511': '69811fd6281b433cbcbd2fc5daeba511',
  'blog/finally-new-website': '69811fd6281b433cbcbd2fc5daeba511',

  'portfolio/tvlk-booking-form/page/1': '5bb00b84094e4c9ab443c0c2620b0e22',
  'portfolio/tvlk-booking-form/page/2': 'bc2f484f6e8f404dbad7ee11a4da5a44',
  'portfolio/tvlk-booking-form/page/3': '2630efd2fcbb4211b1bb30b6a36f2f60',
  'portfolio/tvlk-booking-form/page/4': '7477ba138db64394910c3df1b46ee2e8',
};
const ERROR_PAGE = '';

const PAGE_TITLE = 'Reza Arkan';
const PAGE_DESCRIPTION = 'Design / People / Tech';
const FAVICON_URL = 'https://drive.google.com/uc?id=12MYHtCw_uU3j9eyQ60vBLPe5R74gPIaX';
const IOS_ICON_URL = 'https://drive.google.com/uc?id=14LEFgUMPDiOf8iND-ldq8QKwtksLdkm2';

const OG_URL = 'https://rezaarkan.com';
const OG_TYPE = 'website';
const OG_IMAGE_URL = 'https://i.imgur.com/WgH50dv.jpg';

const META_TWITTER_CARD = 'summary';
const META_TWITTER_SITE = '@rezaarkan';
const META_TWITTER_TITLE = PAGE_TITLE;
const META_TWITTER_DESC = PAGE_DESCRIPTION;
const META_TWITTER_IMAGE = 'https://i.imgur.com/15A1v9d.jpg';
const META_TWITTER_URL = 'https://rezaarkan.com';

const GOOGLE_FONT = 'Poppins';

const CUSTOM_SCRIPT = `<script async src="https://www.googletagmanager.com/gtag/js?id=UA-162915679-1"></script>
<script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-162915679-1');</script>`;
const CUSTOM_CSS = `div.notion-topbar>div>div:nth-child(1n).toggle-mode{display:none!important}div.notion-topbar-mobile>div:nth-child(1n).toggle-mode{display:none!important}div.notion-topbar-mobile>div:nth-child(5){display:none!important}.notion-frame{background-image:linear-gradient(180deg,#fdfbfb 0,#ebedee 100%)!important}@keyframes gradient{0%{background-position:0 50%!important}50%{background-position:100% 50%}100%{background-position:0 50%}}.notion-page-content{padding-bottom:2.5rem!important;padding-top:2.5rem!important;background:#fff;border-radius:1rem;margin:-2.75rem 0 10vh 0}.notion-page-block{position:relative}.notion-scroller>[style="width: 100%; font-size: 14px;"]{margin-bottom:1.5rem}.notion-image-block{pointer-events:none!important}.notion-image-block img{pointer-events:none!important}.notion-callout-block>div>div{border-radius:.5rem!important}.notion-peek-renderer{background:#142025!important;transition:.3s}.notion-peek-renderer>div:nth-child(2){border-radius:.5rem!important;overflow:hidden}.notion-gallery-view>div>div>a{border-radius:.5rem!important}.notion-gallery-view>div>div>a:hover{opacity:.75}.notion-scroller>div:nth-child(2)>div{opacity:0!important;pointer-events:none!important}[data-block-id=c7ef4bd9-4069-480b-a481-3533903733e8]>div>div:nth-child(even),[data-block-id=f34cdbc9-8cd0-42aa-8189-3aa368fd0f37]>div>div:nth-child(even){display:none!important}@media only screen and (min-width:50em){[data-block-id=c7ef4bd9-4069-480b-a481-3533903733e8]>div>div:nth-child(even),[data-block-id=f34cdbc9-8cd0-42aa-8189-3aa368fd0f37]>div>div:nth-child(even){display:block!important}}[data-block-id=c7ef4bd9-4069-480b-a481-3533903733e8]>div>div:nth-child(odd),[data-block-id=f34cdbc9-8cd0-42aa-8189-3aa368fd0f37]>div>div:nth-child(odd){display:inline-block!important;max-width:50%!important}@media only screen and (min-width:50em){[data-block-id=c7ef4bd9-4069-480b-a481-3533903733e8]>div>div:nth-child(odd),[data-block-id=f34cdbc9-8cd0-42aa-8189-3aa368fd0f37]>div>div:nth-child(odd){display:block!important}}[data-block-id="971194ae-0c81-4fc6-a386-382167111c79"]{display:none}@media only screen and (min-width:50em){[data-block-id="971194ae-0c81-4fc6-a386-382167111c79"]{display:block;text-align:right;margin-top:-5.825rem!important;font-size:4rem}}[data-block-id=fcce5ac2-0901-4e52-a247-4684ece3df01]{font-size:.875rem;text-align:center}[data-block-id=fcce5ac2-0901-4e52-a247-4684ece3df01] .notion-record-icon{display:none!important}[data-block-id="6aa56b96-f6bf-4590-82c4-adca0c85b920"]{text-align:center}[data-block-id="6f58376d-b7c3-47a6-8720-d537db62ebf0"]{text-align:center;margin-bottom:-3.5rem!important}[data-block-id="6d7f9450-7f4e-4b6e-a9b8-45bccd9bfdd5"]{text-align:center;font-size:.875rem}[data-block-id="70792c31-f2b7-40b2-94ba-5a3a6c517273"]>div:first-child,[data-block-id=b15a7f0e-0538-4bc7-aaeb-b9494458f5bb]>div:first-child,[data-block-id=ef16e429-9a91-4e22-8391-032d4fe51cd3]>div:first-child{min-height:0!important}[data-block-id="70792c31-f2b7-40b2-94ba-5a3a6c517273"]>div:first-child>div,[data-block-id=b15a7f0e-0538-4bc7-aaeb-b9494458f5bb]>div:first-child>div,[data-block-id=ef16e429-9a91-4e22-8391-032d4fe51cd3]>div:first-child>div{display:none!important}[data-block-id="70792c31-f2b7-40b2-94ba-5a3a6c517273"].notion-selectable.notion-collection_view-block,[data-block-id=b15a7f0e-0538-4bc7-aaeb-b9494458f5bb].notion-selectable.notion-collection_view-block,[data-block-id=ef16e429-9a91-4e22-8391-032d4fe51cd3].notion-selectable.notion-collection_view-block{border:none!important}[data-block-id="70792c31-f2b7-40b2-94ba-5a3a6c517273"].notion-selectable.notion-collection_view-block,[data-block-id=b15a7f0e-0538-4bc7-aaeb-b9494458f5bb].notion-selectable.notion-collection_view-block{padding-top:0!important}[data-block-id="70792c31-f2b7-40b2-94ba-5a3a6c517273"] .notion-list-view,[data-block-id=b15a7f0e-0538-4bc7-aaeb-b9494458f5bb] .notion-list-view{padding-bottom:0!important}[data-block-id="255f5a05-d774-467f-a73f-7079bcc0eeee"]{display:none!important}@media only screen and (min-width:50em){[data-block-id="255f5a05-d774-467f-a73f-7079bcc0eeee"]{display:block!important}}[data-block-id="75a3b99e-f428-430d-a87b-3d5242fe5cce"]{text-align:right;padding-top:1rem}[data-block-id="51ee9852-027b-450e-aa4e-f6f0a1861ec2"]>div:first-child,[data-block-id=ec104b15-ff6e-4400-a848-a88f6139e1ff]>div:first-child,[data-block-id=f70889a1-feaa-4a1d-b00c-d4ee6e29689d]>div:first-child{min-height:0!important}[data-block-id="51ee9852-027b-450e-aa4e-f6f0a1861ec2"]>div:first-child>div,[data-block-id=ec104b15-ff6e-4400-a848-a88f6139e1ff]>div:first-child>div,[data-block-id=f70889a1-feaa-4a1d-b00c-d4ee6e29689d]>div:first-child>div{display:none!important}[data-block-id="183d187c-7b2c-4ce4-9d56-13d715eb2e9b"],[data-block-id="566014b3-8ba6-448f-b305-717f947ca58a"],[data-block-id="99a71a4b-08f7-4c99-945a-ddfbc9df0a1b"],[data-block-id=a1dd0805-87b2-444e-8a6b-90ce0086a1c3],[data-block-id=afad12b7-f88f-419c-9a7f-7e621018b287],[data-block-id=e8e72e41-d5b4-4987-a016-44f8f489b53f],[data-block-id=ff122c47-f4fe-4b7f-b827-703883217388]{display:none!important}[data-block-id="00b8412b-49d8-4a22-a739-a4f666fbd082"]~div img{border-radius:.5rem!important}[data-block-id=e0fa74a3-dfc2-4b66-bcd9-30abfced1863]~div img{border-radius:.5rem!important}[data-block-id="039a5f84-338a-4b2d-bed7-cd2112784fe2"],[data-block-id="43e70b54-3b70-4735-814e-776b5f5dc4fb"],[data-block-id="8371d4f9-4924-4e07-a422-2b871e2d504b"],[data-block-id=a9066f17-df96-43ab-a81a-ccba76c34176],[data-block-id=e11ff443-eddf-42cc-a197-6580c47d1bc5],[data-block-id=f23de68b-e100-4ff2-a4e0-1a3b19eb98d9]{display:none}@media only screen and (min-width:50em){[data-block-id="54db5892-e2da-460e-8dc9-caa48615b902"],[data-block-id="5fc61763-35d2-4ae7-ab98-086e63758bfb"],[data-block-id="69a89fae-e10d-4f22-806c-e37ab3397f7e"],[data-block-id="71a0c46d-f859-4f2c-80e2-b1e6972f5f0e"],[data-block-id=b506d1bf-8ad7-4bb8-81d2-87e43bf21756],[data-block-id=c0b083f9-d63d-4f45-bee7-8b08d5e7e0f6]{display:none}[data-block-id="039a5f84-338a-4b2d-bed7-cd2112784fe2"],[data-block-id="43e70b54-3b70-4735-814e-776b5f5dc4fb"],[data-block-id="8371d4f9-4924-4e07-a422-2b871e2d504b"],[data-block-id=a9066f17-df96-43ab-a81a-ccba76c34176],[data-block-id=e11ff443-eddf-42cc-a197-6580c47d1bc5],[data-block-id=f23de68b-e100-4ff2-a4e0-1a3b19eb98d9]{display:block}}[data-block-id="8a0b343f-5acc-4095-9fce-266148517eda"]{display:none!important}`;

const PAGE_TO_SLUG = {};
const slugs = [];
const pages = [];
Object.keys(SLUG_TO_PAGE).forEach(slug => {
  const page = SLUG_TO_PAGE[slug];
  slugs.push(slug);
  pages.push(page);
  PAGE_TO_SLUG[page] = slug;
});

addEventListener('fetch', event => {
  event.respondWith(fetchAndApply(event.request));
});

function generateSitemap() {
  let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  slugs.forEach(
    (slug) =>
      (sitemap +=
        '<url><loc>https://' + MY_DOMAIN + '/' + slug + '</loc></url>')
  );
  sitemap += '</urlset>';
  return sitemap;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function handleOptions(request) {
  if (request.headers.get('Origin') !== null &&
    request.headers.get('Access-Control-Request-Method') !== null &&
    request.headers.get('Access-Control-Request-Headers') !== null) {
    // Handle CORS pre-flight request.
    return new Response(null, {
      headers: corsHeaders
    });
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        'Allow': 'GET, HEAD, POST, PUT, OPTIONS',
      }
    });
  }
}

async function fetchAndApply(request) {
  if (request.method === 'OPTIONS') {
    return handleOptions(request);
  }
  let url = new URL(request.url);
  url.hostname = 'www.notion.so';
  if (url.pathname === '/robots.txt') {
    return new Response('Sitemap: https://' + MY_DOMAIN + '/sitemap.xml');
  }
  if (url.pathname === '/sitemap.xml') {
    let response = new Response(generateSitemap());
    response.headers.set('content-type', 'application/xml');
    return response;
  }
  let fullPathname = request.url.replace("https://" + MY_DOMAIN, "");
  let response;
  if (url.pathname.startsWith('/app') && url.pathname.endsWith('js')) {
    response = await fetch(url.toString());
    let body = await response.text();
    response = new Response(body.replace(/www.notion.so/g, MY_DOMAIN).replace(/notion.so/g, MY_DOMAIN), response);
    response.headers.set('Content-Type', 'application/x-javascript');
    return response;
  } else if ((url.pathname.startsWith('/api'))) {
    // Forward API
    response = await fetch(url.toString(), {
      body: request.body,
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
      },
      method: 'POST',
    });
    response = new Response(response.body, response);
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  } else if (slugs.indexOf(url.pathname.slice(1)) > -1) {
    const pageId = SLUG_TO_PAGE[url.pathname.slice(1)];
    return Response.redirect('https://' + MY_DOMAIN + '/' + pageId, 301);
  } else {
    response = await fetch(url.toString(), {
      body: request.body,
      headers: request.headers,
      method: request.method,
    });
    response = new Response(response.body, response);
    response.headers.delete('Content-Security-Policy');
    response.headers.delete('X-Content-Security-Policy');
  }

  return appendJavascript(response, SLUG_TO_PAGE);
}

class MetaRewriter {
  element(element) {
    if (PAGE_TITLE !== '') {
      if (element.getAttribute('property') === 'og:title'
        || element.getAttribute('property') === 'og:site_name'
        || element.getAttribute('name') === 'twitter:title') {
        element.setAttribute('content', PAGE_TITLE);
      }
      if (element.tagName === 'title') {
        element.setInnerContent(PAGE_TITLE);
      }
    }
    if (PAGE_DESCRIPTION !== '') {
      if (element.getAttribute('name') === 'description'
        || element.getAttribute('property') === 'og:description'
        || element.getAttribute('name') === 'twitter:description') {
        element.setAttribute('content', PAGE_DESCRIPTION);
      }
    }
    if (element.getAttribute('property') === 'og:url') {
      element.setAttribute('content', OG_URL);
    }
    if (element.getAttribute('name') === 'apple-itunes-app') {
      element.remove();
    }
    if (element.getAttribute('property') === 'og:type') {
      element.setAttribute('content', OG_TYPE);
    }
    if (element.getAttribute('property') === 'og:image') {
      element.setAttribute('content', OG_IMAGE_URL);
    }
    if (element.tagName === 'link' && element.getAttribute('rel') === 'shortcut icon') {
      element.setAttribute('href', FAVICON_URL);
    }
    if (element.tagName === 'link' && element.getAttribute('rel') === 'apple-touch-icon') {
      element.setAttribute('href', IOS_ICON_URL);
    }
    if (element.getAttribute('name') === 'twitter:card') {
      element.setAttribute('content', META_TWITTER_CARD);
    }
    if (element.getAttribute('name') === 'twitter:site') {
      element.setAttribute('content', META_TWITTER_SITE);
    }
    if (element.getAttribute('name') === 'twitter:image') {
      element.setAttribute('content', META_TWITTER_IMAGE);
    }
    if (element.getAttribute('name') === 'twitter:url') {
      element.setAttribute('content', META_TWITTER_URL);
    }
  }
}

class HeadRewriter {
  element(element) {
    if (GOOGLE_FONT !== '') {
      element.append(`<link href="https://fonts.googleapis.com/css?family=${GOOGLE_FONT.replace(' ', '+')}:Regular,Bold,Italic&display=swap" rel="stylesheet">
      <style>* { font-family: "${GOOGLE_FONT}" !important; }</style>`, {
       html: true
      });
    }
    element.append(`<style>
    div.notion-topbar > div > div:nth-child(3) { display: none !important; }
    div.notion-topbar > div > div:nth-child(4) { display: none !important; }
    div.notion-topbar > div > div:nth-child(5) { display: none !important; }
    div.notion-topbar > div > div:nth-child(6) { display: none !important; }
    div.notion-topbar-mobile > div:nth-child(3) { display: none !important; }
    div.notion-topbar-mobile > div:nth-child(4) { display: none !important; }
    div.notion-topbar > div > div:nth-child(1n).toggle-mode { display: block !important; }
    div.notion-topbar-mobile > div:nth-child(1n).toggle-mode { display: block !important; }
    </style>`, {
      html: true
    })
  }
}

class BodyRewriter {
  constructor(SLUG_TO_PAGE) {
    this.SLUG_TO_PAGE = SLUG_TO_PAGE;
  }
  element(element) {
    element.append(`<div style="display:none">Powered by <a href="http://fruitionsite.com">Fruition</a></div>
    <script>
    const SLUG_TO_PAGE = ${JSON.stringify(this.SLUG_TO_PAGE)};
    const PAGE_TO_SLUG = {};
    const slugs = [];
    const pages = [];
    const el = document.createElement('div');
    let redirected = false;
    Object.keys(SLUG_TO_PAGE).forEach(slug => {
      const page = SLUG_TO_PAGE[slug];
      slugs.push(slug);
      pages.push(page);
      PAGE_TO_SLUG[page] = slug;
    });
    function getPage() {
      return location.pathname.slice(-32);
    }
    function getSlug() {
      return location.pathname.slice(1);
    }
    function updateSlug() {
      const slug = PAGE_TO_SLUG[getPage()];
      if (slug != null) {
        history.replaceState(history.state, '', '/' + slug);
      }
    }
    function onDark() {
      el.innerHTML = '<div style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgb(46, 170, 220); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(12px) translateY(0px);"></div></div></div></div>';
      document.body.classList.add('dark');
      __console.environment.ThemeStore.setState({ mode: 'dark' });
    };
    function onLight() {
      el.innerHTML = '<div style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgba(135, 131, 120, 0.3); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(0px) translateY(0px);"></div></div></div></div>';
      document.body.classList.remove('dark');
      __console.environment.ThemeStore.setState({ mode: 'light' });
    }
    function toggle() {
      if (document.body.classList.contains('dark')) {
        onLight();
      } else {
        onDark();
      }
    }
    function addDarkModeButton(device) {
      const nav = device === 'web' ? document.querySelector('.notion-topbar').firstChild : document.querySelector('.notion-topbar-mobile');
      el.className = 'toggle-mode';
      el.addEventListener('click', toggle);
      nav.appendChild(el);
      onLight();
    }
    const observer = new MutationObserver(function() {
      if (redirected) return;
      const nav = document.querySelector('.notion-topbar');
      const mobileNav = document.querySelector('.notion-topbar-mobile');
      if (nav && nav.firstChild && nav.firstChild.firstChild
        || mobileNav && mobileNav.firstChild) {
        redirected = true;
        updateSlug();
        addDarkModeButton(nav ? 'web' : 'mobile');
        const onpopstate = window.onpopstate;
        window.onpopstate = function() {
          if (slugs.includes(getSlug())) {
            const page = SLUG_TO_PAGE[getSlug()];
            if (page) {
              history.replaceState(history.state, 'bypass', '/' + page);
            }
          }
          onpopstate.apply(this, [].slice.call(arguments));
          updateSlug();
        };
      }
    });
    observer.observe(document.querySelector('#notion-app'), {
      childList: true,
      subtree: true,
    });
    const replaceState = window.history.replaceState;
    window.history.replaceState = function(state) {
      if (arguments[1] !== 'bypass' && slugs.includes(getSlug())) return;
      return replaceState.apply(window.history, arguments);
    };
    const pushState = window.history.pushState;
    window.history.pushState = function(state) {
      const dest = new URL(location.protocol + location.host + arguments[2]);
      const id = dest.pathname.slice(-32);
      if (pages.includes(id)) {
        arguments[2] = '/' + PAGE_TO_SLUG[id];
      }
      return pushState.apply(window.history, arguments);
    };
    const open = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function() {
      arguments[1] = arguments[1].replace('${MY_DOMAIN}', 'www.notion.so');
      return open.apply(this, [].slice.call(arguments));
    };
  </script>${CUSTOM_SCRIPT}<style>${CUSTOM_CSS}</style>`, {
      html: true
    });
  }
}

async function appendJavascript(res, SLUG_TO_PAGE) {
  return new HTMLRewriter()
    .on('title', new MetaRewriter())
    .on('meta', new MetaRewriter())
    .on('link', new MetaRewriter())
    .on('head', new HeadRewriter())
    .on('body', new BodyRewriter(SLUG_TO_PAGE))
    .transform(res);
}