const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


//For this function it works in Gmail Account Security should be actived the less unsure option.

const sendGmail = () => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'example@gmail.com',
            pass: 'passSample'
        }
    })
    var message = {
        from: "example@gmail.com",
        to: "sasisromero10@gmail.com",
        subject: "NodeJS Test Mail",
        text: "This is a test mail from nodejs app",
        html: "<p>HTML message test</p>"
      };
    
    transporter.sendMail(message,(err, info)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Email Sent' + info.response);
        }
    })
}
    

router.get('/', (req, res)=>{
    sendGmail();
    res.send('Received');    
})

module.exports = router;