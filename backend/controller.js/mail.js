var Post = require('../models/post';)
const sgMail = require ('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var PostsController = {

// New: function(req, res) {
//     res.render('/contact', {});
//   },
  Create: function(req, res) {
    var post = new Post(req.body);


    const MSG = {
        to: 'lizzieturney@gmail.com',
        from: 'lizzieturney@gmail.com',
        subject: 'New Lead',
        text: ' ',
        html: '<div style="text-align:center;font-size:22px">' +
        '<h2>You have received a new enquiry!</h2>' +
        '<ul style="text-align: left;font-size:16px">' +
        '<li>First Name: ' + req.body.fName + '</li>' +
        '<li>Last Name: ' + req.body.lName + '</li>' +
        '<li>Mail Address: ' + req.body.email + '</li>' +
        '<li>message: ' + req.body.message + '</li>' +
        '</ul>' +
        '</div>',
    };
    
    sgMail.send(MSG))

    // post.save(function(err) {
    //   if (err) { throw err; }

    //   res.status(201).redirect('/api/email-submit')
    // });
  },

}

module.exports = PostsController;