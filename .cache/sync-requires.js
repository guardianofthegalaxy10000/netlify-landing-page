const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ethan/netlify-landing-page/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ethan/netlify-landing-page/src/pages/404.js"))),
  "component---src-pages-how-it-works-js": hot(preferDefault(require("/Users/ethan/netlify-landing-page/src/pages/how-it-works.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ethan/netlify-landing-page/src/pages/index.js"))),
  "component---src-pages-pricing-js": hot(preferDefault(require("/Users/ethan/netlify-landing-page/src/pages/pricing.js")))
}

