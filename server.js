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
    res.jsonp(formatData(req, res))
},

server.use(jsonServer.rewriter({
    '/api/': '/',                       // allows us to prefix all calls with "api"
    '/users/:id/messages': '/messages',
    '/users/:id/messages/:msgid': '/messages/:msgid'
}))

server.use(router);

server.listen(3000);


///////////////

function formatData(req, res) {

  // new API response format
  var formatted = {
    data: {},
    meta: {},
    error: {}
  };
  console.log(req.body);
  // add pagination data
  if(req.path.indexOf("messages") > -1) {
    formatted.meta = {
      limit: 5,
      page: 1,
      last: 5
    };
    formatted.meta.count = res.locals.data.length;
  }

  formatted.data = res.locals.data;

  return formatted;
}