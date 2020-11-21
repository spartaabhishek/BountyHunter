const express = require("express");
const {db,auth} = require("../firebase/firebaseApp");
const path = require("path");

const router = express.Router();

router.get("/",(req,res)=>{
	res.sendFile("index.html",{root: path.join(__dirname,"../../","build")})
})

router.post('/',(req,res)=>{
	const {uid} = req.body

	auth.getUser(uid)
  		.then(function(userRecord) {
    	
    	console.log('Successfully fetched user data:', userRecord.toJSON());

    	auth.createCustomToken(uid)
  			.then(function(customToken) {
    		
    		res.send({status:"success",token:customToken})
  		})
  			.catch(function(error) {
  			res.send({status:"error"})
    		console.log('Error creating custom token:', error);
  		});

  		})
  		.catch(function(error) {
    	console.log('Error fetching user data:', error);
  		});
})


module.exports = router