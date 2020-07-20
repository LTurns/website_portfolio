const express = require('express'); //needed to launch server
const cors = require('cors'); //needed to disable sendgrid security
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express(); //alias from the express function

app.use(cors()); 
app.use(bodyParser.json());
var jsonParser = bodyParser.json()
// means the request body of html is being passed through json 
// We know that in this instance it is being passed as json because the header (think about cors) 
// has the content type of json file. The content-type on contact.js is what enabled the req.body to come back
// with the correct content, instead of simply "undefined".
app.use(bodyParser.urlencoded({extended:false}));
// means the request body of the html (react) is being passed through url (API)
app.listen(4000, () => console.log('Example app listening on port 4000!'))

app.get('/', (req, res) => {
    res.send("Welcome to my form"); 
});

app.post('/api/form', jsonParser, (req, res)=> {
    var data = req.body 
    let smtpTransport = nodemailer.createTransport({
        service:'Gmail', 
        port: 4000, 
        auth: {
            user: 'lizziesoftware@gmail.com', 
            pass: 'princeamos1'
        }
    })

    let mailOptions={
        from: data.email,
        to: 'lizziesoftware@gmail.com', 
        subject: 'Message from website',
        html: `<h5> Message below: </h5>
        
        <ul> 
        <li> First Name: ${data.fName} </li>
        <li> Last Name: ${data.lName} </li>
        <li> Email: ${data.email} </li>
        <li> Message: ${data.message} </li>
        </ul> `
    }; 

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error){
            res.send(error)
        } else (
            res.send('success!')
        )
    })

    smtpTransport.close();
})


