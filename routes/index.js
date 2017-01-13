module.exports = (app)=>{
  app.get('/', (req,res)=>{
    res.render('index', { title: 'Admin Express'})
  })
  app.get('/admin', (req, res)=>{
    res.render('index', { title: 'Express Admin'})
  })
};
