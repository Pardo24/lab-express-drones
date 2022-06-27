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
  const dronAEditar= Drones.findById(req.params.id)
  .then(()=>res.render("/drones/update-form.hbs", dronAEditar))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
