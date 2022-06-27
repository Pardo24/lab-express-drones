const express = require('express');
const router = express.Router();
const Drones = require("../models/Drone.model")
// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drones
    .find()
  .then((result)=>{
    res.render("drones/list.hbs", {result})
  })
  .catch((err)=>{console.log(err)})
});

router.get('/drones/create', (req, res, next) => {
res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  Drones.create(req.body)
  .then(()=>{res.redirect("/drones")})
  .catch((err)=> res.render("drones/create-form.hbs"))
});

router.get('/drones/:id/edit', (req, res, next) => {

  Drones.findById(req.params.id)
  .then((susu)=>res.render("drones/update-form.hbs", susu))
});

router.post('/drones/:id/edit', (req, res, next) => {
const {id} = req.params;
const {name, propellers, maxSpeed} = req.body
 Drones.findByIdAndUpdate(id, {name, propellers, maxSpeed}, {new:true}) 
 .then((response)=>{
 console.log(response)
 res.redirect("/drones")}
 )

 .catch((err)=>
 console.log(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  const {id} =req.params
Drones.findByIdAndDelete(id)
.then(()=> res.redirect("/drones"))
.catch((err)=> console.log(err))
});

module.exports = router;
