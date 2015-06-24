/**
 * Created by justin on 6/23/15.
 */
var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults);

// Returns an Express router
var router = jsonServer.router('../db.json');

router.render = function (req, res) {
    res.jsonp({
        data: res.locals.data,
        meta: {},
        error: {}
    })
},

server.use(jsonServer.rewriter({
    '/api/': '/',                       // allows us to prefix all calls with "api"
    '/users/:id/messages': '/messages',
    '/users/:id/messages/:msgid': '/messages/:msgid'
}))

server.use(router);

server.listen(3000);