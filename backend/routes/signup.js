const express = require("express");
const {db,auth} = require("../firebase/firebaseApp");


const router = express.Router();

router.get("/",(req,res)=>{
	res.sendFile("index.html",{root: path.join(__dirname,"../../","build")})
})

router.post('/',(req,res)=>{
	
	auth.createUser(req.body)
  		.then(function(userRecord) {
    	
    	console.log('Successfully fetched user data:', userRecord.id);
    	res.send({status:"success"})
  		})
  		.catch(function(error) {
  		res.send({status:"error"})
    	console.log('Error fetching user data:', error);
  		});
})


module.exports = router