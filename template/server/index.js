import Koa from 'koa'
import Nuxt from 'nuxt'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const router = require('koa-router')();

// router.all("/",async (ctx,next) => {
//   let deviceAgent = ctx.req.headers['user-agent'];
//   deviceAgent = deviceAgent.toLowerCase();
//   if (deviceAgent.match(/(iphone|ipod|ipad|android)/)) {
//     ctx.redirect("http://baidu.com")
//   } else {
//     ctx.redirect("/test")
//   }
// })
router.get("/api",async ( ctx, next )=>{
    console.log("ctx======",ctx)
    return ctx.response.body={a:11}
})
app.use(router.routes());
// Start nuxt.js
async function start () {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config)
  // Build in development
  if (config.dev) {
    try {
      await nuxt.build()
    } catch (e) {
      console.error(e) // eslint-disable-line no-console
      process.exit(1)
    }
  }

  app.use(async (ctx, next) => {
    console.log("afterctx======",ctx)
    let deviceAgent = ctx.req.headers['user-agent'];
    deviceAgent = deviceAgent.toLowerCase();
    //console.log('[User-Agent]: ' + deviceAgent);
    if (deviceAgent.match(/(iphone|ipod|ipad|android)/)) {
      ctx.redirect("http://baidu.com")
    } else {
      ctx.status = 200 // koa defaults to 404 when it sees that status is unset
      await nuxt.render(ctx.req, ctx.res)
    }
  // ctx.status = 200 // koa defaults to 404 when it sees that status is unset
  //   await nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
