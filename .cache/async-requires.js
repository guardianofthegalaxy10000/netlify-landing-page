// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/ethan/netlify-landing-page/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/ethan/netlify-landing-page/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-how-it-works-js": () => import("/Users/ethan/netlify-landing-page/src/pages/how-it-works.js" /* webpackChunkName: "component---src-pages-how-it-works-js" */),
  "component---src-pages-index-js": () => import("/Users/ethan/netlify-landing-page/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-pricing-js": () => import("/Users/ethan/netlify-landing-page/src/pages/pricing.js" /* webpackChunkName: "component---src-pages-pricing-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/ethan/netlify-landing-page/.cache/data.json")

