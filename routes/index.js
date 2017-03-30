module.exports = (app)=>{
  app.get('/vue', (req, res)=>{
    res.render('vueWiki', { title: 'Vue Wiki'})
  })
};
