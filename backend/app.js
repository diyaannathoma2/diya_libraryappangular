const express = require('express');
const MenuData = require('./src/model/Menudata');
const UserData = require('./src/model/Userdata')
const cors = require('cors');
// var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var bodyparser=require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json())
username='admin'
password='1234'

function verifyToken(req,res,next){
    if(!req.headers.authorization)
    {
        return res.status(401).send('Unauthorized request')
    }
    let token=req.headers.authorization.split('')[1]
    if (token=='null')
    {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token,'secretkey')
    console.log(payload)
    if(!payload)
    {
      return res.status(401).send('Unauthorized request')  
    }
    req.userId=payload.subject
    next()

}


app.post('/login', (req,res) =>{
    let userData = req.body
   


    // if(!username) {
    //     res.status(401).send('Invalid Username')
    // }
    // else
    // if (password !==userData.password) {
    //     res.status(401).send('Invalid password')
        
    // }
    // else {
    //     let payload ={subject:username+password}
    //     let token=jwt.sign(payload,'secretkey')
    //     res.status(200).send({token})
    // }






    UserData.findOne({uname:userData.uname}) 
    .then(function(user){
        if (user.password == userData.password) {
            let payload ={subject:username+password}
            let token=jwt.sign(payload,'secretkey')
            res.status(200).send({token})
        }
       
   
       
    })
    .catch(function(){
       res.status(401).send('Invalid Username')
    })
})



app.get('/menu',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    MenuData.find()
        .then(function(menus){
            res.send(menus);
        })
});
// ,verifyToken
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    console.log(req.body);
    var menu = {
        menuId : req.body.menu.menuId,
        menuName : req.body.menu.menuName,
        menuCode : req.body.menu.menuCode,
        releaseDate : req.body.menu.releaseDate,
        description : req.body.menu.description,
        price : req.body.menu.price,
        imageUrl : req.body.menu.imageUrl
    }
    var menu = new MenuData(menu);
    menu.save();

});






// app.get('/signup',function(req,res){
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
//     UserData.find()
//         .then(function(users){
//             res.send(users);
//         })
// });








app.post('/adduser',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    console.log(req.body);
    var user = {
        email : req.body.signup.email,
        uname : req.body.signup.uname,
        password : req.body.signup.password
      
    }
    var user = new UserData(user);
    user.save();

});





app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
      MenuData.findOne({"_id":id})
      .then((menu)=>{
          res.send(menu);
      });
  })








app.put('/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    menuId= req.body.menuId,
    menuName = req.body.menuName,
    menuCode = req.body.menuCode,
    releaseDate = req.body.releaseDate,
    description = req.body.description,
    price = req.body.price,
    imageUrl = req.body.imageUrl
   MenuData.findByIdAndUpdate({"_id":id},
                                {$set:{"menuId":menuId,
                                "menuName":menuName,
                                "menuCode":menuCode,
                                "releaseDate":releaseDate,
                                "description":description,
                                "price":price,
                                "imageUrl":imageUrl}})
   .then(function(){
       res.send();
   })
 })















app.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    MenuData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })




app.listen(3000,function(){
    console.log('listening to port 3000');

});
// app.use(express.json());
// username='admin';
// password='1234';


// function verifyToken(req, res, next) {
//     if(!req.headers.authorization) {
//       return res.status(401).send('Unauthorized request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if(token === 'null') {
//       return res.status(401).send('Unauthorized request')    
//     }
//     let payload = jwt.verify(token, 'secretKey')
//     if(!payload) {
//       return res.status(401).send('Unauthorized request')    
//     }
//     req.userId = payload.subject
//     next()
//   }

// app.post('/insert',verifyToken,function(req,res){
   
//     console.log(req.body);
   
//     var menu = {       
//         menuId : req.body.menu.menutId,
//         menuName : req.body.menu.menuName,
//         menuCode : req.body.menu.menuCode,
//         releaseDate : req.body.menu.releaseDate,
//         description : req.body.menu.description,
//         price : req.body.menu.price,
//         imageUrl : req.body.menu.imageUrl,
//    }       
//    var menu = new menuData(menu);
//    menu.save();
// });
// app.get('/menu',function(req,res){
    
//     menuData.find()
//                 .then(function(menu){
//                     res.send(menu);
//                 });
// });
// app.get('/:id',  (req, res) => {
  
//   const id = req.params.id;
//     menuData.findOne({"_id":id})
//     .then((menu)=>{
//         res.send(menu);
//     });
// })

// app.post('/login', (req, res) => {
//     let userData = req.body
    
      
//         if (!username) {
//           res.status(401).send('Invalid Username')
//         } else 
//         if ( password !== userData.password) {
//           res.status(401).send('Invalid Password')
//         } else {
//           let payload = {subject: username+password}
//           let token = jwt.sign(payload, 'secretKey')
//           res.status(200).send({token})
//         }
      
//     })

//     app.put('/update',(req,res)=>{
//       console.log(req.body)
//       id=req.body._id,
//       menuId= req.body.menuId,
//       menuName = req.body.menuName,
//       menuCode = req.body.menuCode,
//       releaseDate = req.body.releaseDate,
//       description = req.body.description,
//       price = req.body.price,
//       imageUrl = req.body.imageUrl
//      menuData.findByIdAndUpdate({"_id":id},
//                                   {$set:{"menuId":menuId,
//                                   "menuName":menuName,
//                                   "menuCode":menuCode,
//                                   "releaseDate":releaseDate,
//                                   "description":description,
//                                   "price":price,
//                                   "imageUrl":imageUrl}})
//      .then(function(){
//          res.send();
//      })
//    })
   
// app.delete('/remove/:id',(req,res)=>{
   
//      id = req.params.id;
//      menuData.findByIdAndDelete({"_id":id})
//      .then(()=>{
//          console.log('success')
//          res.send();
//      })
//    })
     

// app.listen(3000, function(){
//     console.log('listening to port 3000');
// });

