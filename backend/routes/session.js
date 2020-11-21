const express = require("express");
const {db,auth} = require("../firebase/firebaseApp");

const router = express.Router();

app.post("/sessionLogin",(req,res)=>{
    const idToken = req.body.idToken.toString();
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    auth.createSessionCookie(idToken, {expiresIn})
      .then((sessionCookie) => {
      // Set cookie policy for session cookie.
       const options = {maxAge: expiresIn, httpOnly: true, secure: true};
       res.cookie('session', sessionCookie, options);
       res.send(JSON.stringify({status: 'success'}));
      })
      .catch(error => {
       res.status(401).send('UNAUTHORIZED REQUEST!');
      });
});
    
module.exports = router