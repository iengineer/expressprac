const express = require('express');
// We create our own server named app
// Express server handling reqs and res
const app = express();
// We can now link to files stored in the public folder
app.use(express.static('public'));
// Set configuration values
// Telling express we want to use the /views/ folder for rendering HTML
app.set('view engine', 'ejs');

//http://localhost:3000/
//                      |
//                      |
//      ----------------]
//      |
app.get('/', (request, response, next) => {
  console.log('HOMEPAGE was requested!');
// We are now rendering pages using views
// views/home.ejs
  response.render('home.ejs');
});



//http://localhost:3000/about/
//                      |
//                      |
//          ------------]
//          |
app.get ('/about', (req, res, next) => {
  console.log('ABOUT was requested!');
  //views/about.ejs
  res.render('about.ejs');
});

app.get('/gallery', (req, res, next) => {
  console.log('GALLERY was requested!');
  //views/gallery.ejs
  res.render('gallery.ejs');
});

// This is how we start the server.
// http://localhost:3000
//          |
//          |
app.listen(3000, () => {
  console.log('Application started on port: 3000');
});
