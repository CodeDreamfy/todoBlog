module.exports = (app)=>{
  app.get('/admin', (req, res)=>{
    res.render('index', { title: 'Express Admin'})
  })
};
