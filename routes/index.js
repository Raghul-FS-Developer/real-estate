var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var nodemailer = require("nodemailer");
require("dotenv").config();
var sell = require("../models/schema1");
var users = require("../models/schema2");
var mongodb = require('mongodb')
var upload = require("../middleware/upload");

mongoose
  .connect(process.env.URL)
  .then(() => console.log("db connected successfully"));

const { hashing, hashCompare, createjwt, auth } = require("../library/auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});


router.post("/selling", upload.single("avatar"), async (req, res) => {
  try {
    
    const login = await users.findOne({ email: req.body.email });
    let token1 = await createjwt({ email: req.body.email });
    
    if (login) {
      if (login.ValidityStatus == "Active") {
        const compare = await hashCompare(req.body.password, login.password);
        if (compare) {
          let result = await sell({categories:req.body.categories,
          location:req.body.location,
          number:req.body.number,
          price:req.body.price,
          type:req.body.type,
          rooms:req.body.rooms,
         
          });
          if (req.file) {
            result.avatar = req.file.path;
          }
         
          
          result.save((err,data) => {
            if (err) {
              console.log(err);
              res.json({ statuscode: 400, message: "something went wrong" });
            } else {
              res.json({
                statuscode: 200,
               
                     });
                      console.log(data)
                    }
          });
        } else {
          res.json({
            statuscode: 400,
            message: "wrong password",
          });
        }
      } else {
        res.json({
          statuscode: 400,
          message: '"account is InActive , Check Your Mail For Activaton Link',
        });
        let { name } = login;

        var sender = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "stackdeveloper112@gmail.com",
            pass: process.env.pass,
          },
        });
        var composeMail = {
          from: "stackdeveloper112@gmail.com",
          to: req.body.email,
          subject: `Account-verification`,
          text: "",
          html: `<h2>Hello ${name}</h2>
        <p>We've recieved a request to verify your account associated with your email.
        You can register your account by clicking the link below</p>
        <a href=https://frontreal.herokuapp.com/register-confirm/${token1}>Register verification</a>
        <p><b>Note:</b>The link expires 5 minutes from now</p>
        </div>`,
        };

        sender.sendMail(composeMail, (error) => {
          if (error) {
            console.log(error);
          }
        });
      }
    } else {
      res.json({
        statuscode: 400,
        message: "user does not exist",
      });
    }
  } catch (error) {
    console.log(error);
  }
});


router.delete('/delete/:id' ,async(req,res)=>{
  try {
   
    let result= await sell.deleteOne({_id: mongodb.ObjectId(req.params.id)})
    if(result){
   res.json({
     statuscode:200,
     message:'deleted successfully'
      })

    }else{
      res.json({
        statuscode:400,
        message:'deletion failed' 
      })
    }
  } catch (error) {
     console.log(error)
  }
})

router.get("/apartment", async (req, res) => {
  try {
    let result = await sell.find({ categories: "Apartment" });
    res.json({
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/villa", async (req, res) => {
  try {
    let result = await sell.find({ categories: "Villa" });
    res.json({
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/commercial", async (req, res) => {
  try {
    let result = await sell.find({ categories: "Commercial" });
    res.json({
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/all", async (req, res) => {
  try {
    let result = await sell.find({ type: "Sell" });
    res.json({
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});
router.get("/renting", async (req, res) => {
  try {
    let result = await sell.find({ type: "Rent" });
    res.json({
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});
router.post("/register", async (req, res) => {
  try {
    const hash = await hashing(req.body.password);
    req.body.password = hash;
    let token = await createjwt({ email: req.body.email });
    const register = await users(req.body);

    register.save((err, data) => {
      if (err) {
        console.log(err);
        res.json({ statuscode: 400, message: "Email Already Exist" });
      } else {
        res.json({
          statuscode: 200,
        });
        let { name } = data;

        var sender = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "stackdeveloper112@gmail.com",
            pass: process.env.pass,
          },
        });
        var composeMail = {
          from: "stackdeveloper112@gmail.com",
          to: req.body.email,
          subject: `Account-verification`,
          text: "",
          html: `<h2>Hello ${name}</h2>
        <p>We've recieved a request to verify your account associated with your email.
        You can register your account by clicking the link below</p>
        <a href=https://frontreal.herokuapp.com/register-confirm/${token}>Register verification</a>
        <p><b>Note:</b>The link expires 5 minutes from now</p>
        </div>`,
        };

        sender.sendMail(composeMail, (error) => {
          if (error) {
            console.log(error);
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
    send.json({ message: "something went wrong" });
  }
});
router.post("/register-confirm/:token", async (req, res) => {
  try {
    let mail = await auth(req.params.token);
    console.log(mail);
    if (mail) {
      await users.updateOne(
        { email: mail },
        { $set: { ValidityStatus: "Active" } }
      );
      res.json({
        statuscode: 200,
      });
    } else {
      res.json({ statuscode: 400 });
      console.log("expired");
    }
  } catch (error) {
    console.log(error);
  }
});
router.post("/forgot-password", async (req, res) => {
  try {
    let step = await users.findOne({ email: req.body.email });

    if (step) {
      const { name } = step;
      let token = await createjwt({ email: req.body.email });

      var sender = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "stackdeveloper112@gmail.com",
          pass: process.env.pass,
        },
      });
      var composeMail = {
        from: "stackdeveloper112@gmail.com",
        to: req.body.email,
        subject: `Reset-password-verification`,
        text: "",
        html: `<h2>Hello ${name}</h2>
      <p>We've recieved a request to reset the password for your account associated with your email.
      You can reset your password by clicking the link below</p>
      <a href=https://frontreal.herokuapp.com/forgot-confirm/${token}> Reset Password</a>
      <p><b>Note:</b>The link expires 5 minutes from now</p>
      </div>`,
      };

      sender.sendMail(composeMail, (error) => {
        if (error) {
          console.log(error);
        }
      });

      res.json({ statuscode: 200 });
    } else {
      res.json({ statuscode: 400, message: "Email does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/forgot-confirm/:token", async (req, res) => {
  try {
    let mail = await auth(req.params.token);

    if (mail) {
      let pass = await hashing(req.body.password);
      await users.updateOne({ email: mail }, { $set: { password: pass } });

      res.json({
        statuscode: 200,
        message: "password changed successfullly",
      });
    } else {
      res.json({
        message: "token expired",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
