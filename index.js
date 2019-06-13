'use strict';

// Create express app
var express = require('express'),
  // Import body-parser
  bodyParser = require('body-parser'),
  Realm = require('realm');

var app = express();

// Create post schema
let PostSchema = {
  name: 'Post',
  properties: {
    timestamp: 'date',
    title: 'string', 
    content: 'string'
  }
};

// Create Realm instance and assign it to blog realm
var blogRealm = new Realm({
  // Create a db 
  path: 'blog.realm',
  schema: [PostSchema]
});

// body-parser
app.use(bodyParser.urlencoded({extended: true}));
// Process ejs
app.set('view engine', 'ejs');

// Handle get request
// Callback function with 2 arguments
app.get('/', function(req, res) {
  let posts = blogRealm.objects('Post').sorted('timestamp', true);
  res.render('index.ejs', {posts: posts});
});

// Get request returns the content of write.html file 
app.get('/write', function(req, res) {
  res.sendFile(__dirname + "/write.html");
});

// Post request, specify the path and set a callback function with 2 arguments
app.post('/write', function(req, res) {
  let title = req.body['title'],
    content = req.body['content'],
    timestamp = new Date();

  blogRealm.write(() => {
    // Create post object
    blogRealm.create('Post', {title: title, content: content, timestamp: timestamp});
  });
  res.sendFile(__dirname + "/write-complete.html");
});

// Port
app.listen(3000, function() {
  console.log("Start!")
})