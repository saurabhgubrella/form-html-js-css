const Credentials = require('../models/credentials_models')

exports.check = function(req,res){
    res.send("Welcome from Credentials Controller !!!!")
}

exports.create_credentials = function(req , res , next){
    console.log("res"+req)
    let credentials = new Credentials({
        userEmailId: req.body.userEmailId,
        userName:req.body.userName,
        userContact:req.body.userContact,
        userPassword:req.body.userPassword 
    });
    credentials.save(function(err){
        if(err){
            return next(err)
        }
        res.send('Credentials Created Successfully')
    })
}

exports.credentials_details = function(req,res , next){
    Credentials.find(function(err , result){
        if(err){
            return next(err)
        }
        res.send(result)
    });
}

exports.get_credentials_by_userEmail_id = function (req, res) {
    console.log(req.params.id,"123")
    Credentials.findOne({userEmailId : req.params.id })
    
  
      .then((slot) => {
        if(slot == null){
            res.status(202).send({message:"failed"})
        }
        else{
            res.status(200).send(slot);
            
        }
        
      })
      .catch((err) => {
        res.status(500);
      });
  };

  exports.delete_account = function(req,res){
    console.log("delete")
    Credentials.findOneAndRemove({userEmailId:req.params.id} , function(err,resp){
        if(err){
            return res.status(409).send(err);
        }
        res.status(200).send({ success: true, data : "Account Delete" });
    })
}

exports.update_password_by_email_id = function(req,res){
    // console.log("req");
    Credentials.findOneAndUpdate({userEmailId:req.params.id},{userPassword:req.body.newpass},function(err,resp){
        if(err){
            //   return next(err);
            return res.send(err);
        }
        res.send('Password Updated successfully');
    })
}

//   exports.login = (req , res) => {
//     Credentials.find({userEmailId : req.params.id })
//     .then(email=>{
//         if(email.length>0){
//             Credentials.find({userEmailId:req.params.id}).then(resp=>{
//                 if(resp.length>0){
//                     return res.status(200).json({success:true , data:"Login success"});
//                 }
//                 else{
//                     return res.status(200).json({success:true , data:"Credentials didn't match"});
//                 }
//             })
           
//         }
//         else{
//             return res.status(202).json({success:true , data:"User not Registered"});
//         }
//     })
//   }