const path = require('path')

const World = require('./world/world.js')

const express = require('express')
let app = express()

class Server {
  constructor() {
    /* Setup web server */
    app.use(express.static(path.join(__dirname, 'static')));
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');

    // configure primary route
    app.get('/', (req, res, next) => {
      res.render('index')
    })

    const server = require('http').Server(app);
    server.listen(3000);

    /* Spawn and configure the World */

    let world = new World()
  }
}

module.exports = Server
