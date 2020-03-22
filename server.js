const app = require('express')()
const bodyParser = require('body-parser')
const server = require('http').Server(app)
const next = require('next')
const routes = require('./server/routes')
const config = require('./config')
const {port} = config
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({extended: true}))
	app.use('/api', routes);
	app.get('*', (req, res) => {
		return nextHandler(req, res)
	})
	server.listen(port, (err) => {
		if (err) throw err
		console.log(`< `)
		console.log(`- Ready on localhost:${port}`)
		console.log(`- Node environment: ${process.env.NODE_ENV}`)
		console.log(`- Project version: ${process.env.npm_package_version}`)
		console.log(`> `)
	})
})