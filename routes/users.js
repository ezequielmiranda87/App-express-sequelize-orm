var express = require('express');
var router = express.Router();
var models = require('../models')


/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll({include:[models.Post]}).then(function(results){
      res.json(results)
    })
});

/*GET user by ID*/
router.get('/getbyid/:id', function(req, res, next) {
  let id=req.params.id;
  models.User.findById(id).then((user)=>{
    res.json(user)
  })
});

/*GET user by attribute*/
router.get('/getbyusername/:username', function(req, res, next) {
  let username=req.params.username;
  models.User.findOne({where:{username:username}}).then((user)=>{
      res.json (user);
  })
});


/* CREATE User*/
router.get('/create', function(req, res, next) {
  models.Post.create({
    title:'superman',
    content:'superman@superman.com',
    UserId:1,
    fecha_nac:'2017-01-01'
   }).then((user)=>{
    res.json(user)
  })

});

router.get('/update', function(req, res, next) {
models.User.update({username:'otrosuperheroe'}, {where:{id:2}})
  .then((result)=>{
    res.json(result)
  })
});

/*DELETE user By id*/
router.get('/delete', function(req, res, next) {
  models.User.findById(3)
    .then((user)=>{
      user.destroy();
    })
    .then(()=>{
        res.json("user deleted")
    })
});

module.exports = router;
