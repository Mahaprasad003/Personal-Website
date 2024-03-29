const MY_DOMAIN = 'mahaprasad.ml';
  
const SLUG_TO_PAGE = {
  '': '2953e802795e441a9f2683362c35bb37',
  'contact': 'fa44c425588e43278a19c7024fa3d290',
  'portfolio': 'cfe57550e69c458b9fffab72c705dcae',
  'resources': 'b132ff521b5648c499925c611a5d8968',
  'blog': 'ba95bf1ad9d54eb79cb9883e4c601bf0',
  'reading list': '8d371c00c809456fa56c7f5569a44c78',
  'super threads': '6b053ed3487a4167b8c97745b9defc5c',
  'user experience design': '31653d9f08c54e4a942c183e308af4f6',
  'personal brand': 'af8360562287484e96fdf75b044f3cab',
  'finance': 'cd86509eabbb4fa398f8666cfc5956e5',
  'crypto': 'ee852ebffc6c484f84391df03bab012b'
};

const ERROR_PAGE = '';

const PAGE_TITLE = 'Mahaprasad Mohanty';
const PAGE_DESCRIPTION = 'Follow along on my voyage';
const FAVICON_URL = 'https://imgur.com/a/rrK5awN';
const IOS_ICON_URL = 'https://imgur.com/a/rrK5awN';

const OG_URL = 'mahaprasad.ml';
const OG_TYPE = 'website';
const OG_IMAGE_URL = 'https://imgur.com/a/qHipUTr';

 const META_TWITTER_CARD = 'summary';
 const META_TWITTER_SITE = '@mahaprasad_';
 const META_TWITTER_TITLE = PAGE_TITLE;
 const META_TWITTER_DESC = PAGE_DESCRIPTION;
 const META_TWITTER_IMAGE = 'https://imgur.com/a/rrK5awN';
 const META_TWITTER_URL = 'mahaprasad.ml';

const GOOGLE_FONT = "Mulish";

const CUSTOM_SCRIPT = `<script async src=""></script>`;
  
const CUSTOM_CSS = `/* General */
div.notion-topbar > div > div:nth-child(1n).toggle-mode {
	display: none !important;	
}
div.notion-topbar-mobile > div:nth-child(1n).toggle-mode {
	display: none !important;	
}
div.notion-topbar-mobile > div:nth-child(5) {
	display: none !important;	
}
.notion-frame {
	background-image: linear-gradient(180deg, #fdfbfb 0%, #D4E9F3 100%) !important;
	/* background: linear-gradient(45deg,#ee7752,#e73c7e,#0a769c,#14daab) !important;
	background-size: 130% 100% !important;
	animation: gradient 8s ease infinite; */
}
@keyframes gradient {
	0% {
		background-position: 0% 50% !important;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.notion-page-content {
    padding-bottom: 2.5rem !important;
    padding-top: 2.5rem !important;
    background: #fff;
    border-radius: 1rem;
    margin: -2.75rem 0 10vh 0;
}
.notion-page-block {
    position: relative;
}
.notion-scroller > [style="width: 100%; font-size: 14px;"] {
    margin-bottom: 1.5rem;
}
.notion-image-block {
    pointer-events: none !important;
}
.notion-image-block img {
    pointer-events: none !important;
}
.notion-callout-block > div > div {
    border-radius: 0.5rem !important;   
}
.notion-peek-renderer {
    background: #142025 !important;
    transition: 0.3s;
}
.notion-peek-renderer > div:nth-child(2) {
    border-radius: 0.5rem !important;
    overflow: hidden;
}
.notion-gallery-view > div > div > a {
    border-radius: 0.5rem !important;	
}
.notion-gallery-view > div > div > a:hover {
    opacity: 0.75;	
}
.notion-scroller > div:nth-child(2) > div {
	opacity: 0 !important;
	pointer-events: none !important;
}


`;

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
      <style>* { font-family: "${GOOGLE_FONT}"; }</style>`, {
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