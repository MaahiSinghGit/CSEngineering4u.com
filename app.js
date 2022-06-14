const express = require("express");
const path = require("path");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contact', {useNewUrlParser: true});
const bodyparser = require('body-parser')
const app = express();
const port = 8000;
// define contact scheema 
var contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  subject: String,
  message:String,
});
var contact = mongoose.model('contact', contactSchema);

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
// ENDPOINTS
app.get('/', (req, res)=>{
  const params = { }
  res.status(200).render('home.pug', params);
});
app.get('/home.pug', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
});
app.get('/contact.pug', (req, res)=>{
  const params = { }
  res.status(200).render('contact.pug', params);
});
app.get('/c.pug', (req, res)=>{
  const params = { }
  res.status(200).render('c.pug', params);
});
app.get('/c1.pug', (req, res)=>{
  const params = { }
  res.status(200).render('c1.pug', params);
});
app.get('/c2.pug', (req, res)=>{
  const params = { }
  res.status(200).render('c2.pug', params);
});
app.get('/cpp.pug', (req, res)=>{
  const params = { }
  res.status(200).render('cpp.pug', params);
});
app.get('/cpp1.pug', (req, res)=>{
  const params = { }
  res.status(200).render('cpp1.pug', params);
});

app.get('/java.pug', (req, res)=>{
  const params = { }
  res.status(200).render('java.pug', params);
});
app.get('/java1.pug', (req, res)=>{
  const params = { }
  res.status(200).render('java1.pug', params);
});
app.get('/about.pug', (req, res)=>{
  const params = { }
  res.status(200).render('about.pug', params);
});
app.post('/contact', (req, res)=>{

  var myData= new contact(req.body);
  myData.save().then(()=>{
    const params={ }
    res.render('contactrest.pug',params)
  }).catch(()=>{
    res.status(400). res.render('contactresf.pug',params)
  });

});

  // START THE SERVER
  app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
  
 