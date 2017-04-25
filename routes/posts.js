var express = require('express');
var router = express.Router();
var models = require('../models')


/* GET users listing. */
router.get('/', function(req, res, next) {
  models.Post.findAll({}).then(function(posts){
      res.json(posts)
    })
});

/*GET user by ID*/
router.get('/getbyid/:id', function(req, res, next) {
  let id=req.params.id;
  models.Post.findById(id).then((post)=>{
    res.json(post)
  })
});

/*GET user by attribute*/
router.get('/getbytitle/:title', function(req, res, next) {
  let title=req.params.title;
  models.Post.findOne({where:{title:title}}).then((title)=>{
      res.json (title);
  })
});


/* CREATE User*/
router.get('/create', function(req, res, next) {
  models.Post.create({
    title:'Titulo Post',
    content:'Esto es un post',
    UserId:2,
  }).then((post)=>{
    res.json(post)
  })
});


router.get('/update', function(req, res, next) {
models.Post.update({title:'Otro Titulo'}, {where:{id:2}})
  .then((result)=>{
    res.json(result)
  })
});

/*DELETE user By id*/
router.get('/delete', function(req, res, next) {
  models.Post.findById(1)
    .then((user)=>{
      user.destroy();
    })
    .then(()=>{
        res.json("Post deleted")
    })
});

module.exports = router;
