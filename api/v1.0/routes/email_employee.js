var multer  = require('multer');
var path = require('path');




router.post('/createuser', function (req, res, next) {
    var data = req.body;
    usercreate(data).then(host => {
        return res.status(200).json({
            message: "success",
            statuscode: "200",
        });

    })
        .catch(err => {
            console.log("Error_Promised_Occured")
            console.error(err);
        });

});

function usercreate(data){
    return new Promise(async (resolve, reject) => {
        try {
            var email = data.email;
            var name = data.name;
            var insuser = await userdata(data);

// send email
    var transporter2 = nodemailer.createTransport({
        host: 'smtp.googlemail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'bala10decoders@gmail.com',
            pass: 'Abc@12345'
        }
    })

    mailOptions = {
        from: 'bala10decoders@gmail.com',
        to: email,
        subject: "Employee Acknowledgement",
        html: '<h2>Your details are added successfully. We will contact soon</h2>'
    }

    transporter2.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    });

            resolve('success')
           
        } catch (error) {
            return reject(error);
        }
    });
 
}

async function userdata(data) {
    const createinsrt = await user.create(data);
    return createinsrt;
  }

   ///get data
    ///getsliderforall
router.post('/getuser', function (req, res) {
    user.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});
///edit user details

router.get('/edituser', function (req, res) {
    user.findOne({email:req.body.email}, function (_err, user) {
        res.send(user);
    });
});
///update user
router.post('/updateuser', function (req, res, _next) {
    user.update({email:req.body.email }, {
        $set: {
            name:req.body.name,
            contact:req.body.contact
        }
    }, function (err, _user) {
        if (err) {
            res.status(200).json({
                message: "Update Not sucessfully",
                statuscode: "202"
            });
        }
        else {
            res.status(200).json({
                message: "Update  sucessfully",
                statuscode: "200"
            });

        }
    })
});

// delete user
router.delete('/deleteuser', function (req, res) {
    user.deleteOne({email:req.body.email}, function (err, _user) {
        if (err) throw err;
        res.status(200).json({
            message: "user deleted sucessfully",
            statuscode: "200"
        });
    });
});

///upload -image 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images")
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now()+".jpg")
    }
  })

    
var upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb){
        var filetypes = /jpeg|jpg|png/;
        var mimetype = filetypes.test(file.mimetype);
  
        var extname = filetypes.test(path.extname(
                    file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
      
        cb("Error: File upload only supports the "
                + "following filetypes - " + filetypes);
      } 
}).single("mypic");       
  

    
router.post("/uploadProfilePicture",function (req, res, next) {
    upload(req,res,function(err) {
        if(err) {
            res.send(err)
        }
        else {
            console.log(res);
            user.updateOne({email:req.query.email }, {
                $set: {
                    profile_img:req.file.filename,
                }
            }, function (err, _user) {
                if (err) {
                    res.status(200).json({
                        message: "Image Upload Failed",
                        statuscode: "202"
                    });
                }
                else {
                    res.status(200).json({
                        message: "Image Upload Success",
                        statuscode: "200"
                    });
        
                }
            })
        }
    })
})

// // resume upload
// const upload= multer({ dest: 'public/files'});
// router.post('/uploadResume', upload.single('myFile'), function (req, res, next) {
//     user.updateOne({email:req.query.email }, {
//         $set: {
//             resume_doc:req.file.filename,
//         }
//     }, function (err, _user) {
//         if (err) {
//             res.status(200).json({
//                 message: "Doc Upload Failed",
//                 statuscode: "202"
//             });
//         }
//         else {
//             res.status(200).json({
//                 message: "Doc Upload Success",
//                 statuscode: "200"
//             });

//         }
//     })
// })

module.exports = router;
