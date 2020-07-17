// var restify = require('restify');
// var nodemailer = require("nodemailer");
// var bodyParser = require("body-parser");
// var corsMiddleware = require("restify-cors-middleware");
// var http = require('http');

// var cors = corsMiddleware({
// 	preflightMaxAge: 5, 
// 	origins: ['*'], 
// 	allowHeaders: ['API-Token'], 
// 	exposeHeaders: ['API-Token-Expiry']
// });

// var server = restify.createServer();
// server.pre(cors.preflight);
// server.use(cors.actual);
// server.use(restify.plugins.queryParser({
// 	mapParams: true
// }));
// server.use(restify.plugins.bodyParser({
// 	mapParams: true
// }));

// server.use(
//     function crossOrigin(req,res,next){
//         res.header("Access-Control-Allow-Origin", "*"); // the client could be a mobile app so we must allow POSTs from any origin
//         res.header("Access-Control-Allow-Headers", "X-Requested-With");
//         return next();
//     }
// );

// server.use(restify.plugins.fullResponse());

// var smtpTransport = nodemailer.createTransport({
// 	service: 'Gmail', 
// 	auth: {
// 		user: 'lizzieturney@gmail.com', 
// 		pass: 'hellome23'
// 	}
// }); 

// server.post('/email', function create(req, res, next){

// 	var mail = {
// 		from: req.params.email,
// 		to: 'lizzieturney@gmail.com', 
// 		subject: 'Website Enquiry',
// 		html: "name: <br>" + req.params.nom + "</br> message <br>" + req.params.message +" </br>email </br>" + req.params.email,
// 	}

// 	smtpTransport.sendMail(mail, function(error, response){
// 		if(error){
// 			console.log("Email sending error");
// 			console.log(error);
// 		} else {
// 			console.log("success!")
// 		}
// 		smtpTransport.close();
// 	});

// 	res.send(201, req.params);
// });

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(3000);



const express = require('express')
const bodyParser = require('body-parser')
// cross origin resource sharing
const cors = require('cors')
const sendGrid = require('@sendGrid/mail')

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/api', (req, res, next) => {
  res.send('API Staus: Running')
})

//listen on port 3030 on local host
app.listen(3030, '0.0.0.0');