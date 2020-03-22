const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT
global.env_vars = {}
env_vars.SITE_DOMAIN = "http://localhost"
env_vars.MIDDLEWR_URL = process.env.MIDDLEWR_URL

const config = {
  url: `http://localhost:${PORT}`,
  tz: 'America/Sao_Paulo',
  env: NODE_ENV,
  port: PORT,
  mongo: {
    host: `mongodb://localhost/clipping`
  },
  middleware: {url: env_vars.MIDDLEWR_URL}
}
module.exports = config