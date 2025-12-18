const usermodel=require('../Modal/useraccount')
const bcrpyt=require('bcryptjs')
class Auth 
{
      checkAuth(req,res)
     {
         if(req.method=='GET')
         {
          res.render('Login')
         }
         else 
         {
            const data={
                Email:req.body.email
            }
            usermodel.check_login(data,async (err,result)=>{
                            if (err)
                            {
                                res.render('Login',{mesg:" Error in Login"})
                            }
                            else
                            {
                                
                                if(result.length>0)
                                {
                                    const dbpass=result[0].password 
                                    const ismatch=await bcrypt.compare(req.body.password,dbpass)
                                    if(ismatch)
                                    {
                                       res.render('PDashboard')
                                    }
                                    else 
                                    {
                                        res.render('Login',{mesg:" Incorrect Password!!"})
                                    }
                                }
                                else 
                                {
                                    res.render('Login',{mesg:" Email-Id Not Registered"})
                                }
                            }
                        })
         }
     }

    async create_user(req,res)
     {
            if(req.method=='GET')
            {
                res.render('Newuser')
            }
            else 
            {
                 if(req.body.password!=req.body.cpassword)
                 {
                     res.render('Newuser',{mesg:"Password Mismatch"})
                 }
                 else 
                 {
                       const bcrpyt_salt=await bcrpyt.genSalt(10)
                       const hpassw=await bcrpyt.hash(req.body.password,bcrpyt_salt)
                        const data={
                        Name:req.body.username,
                        Email:req.body.email,
                        Password:hpassw,
                        Gender:req.body.gender,
                        Address:req.body.address
                        }
                        usermodel.create(data,(err)=>{
                            if (err)
                            {
                                res.render('Newuser',{mesg:" Error in Account Creation"})
                            }
                            else
                            {
                                res.render('Newuser',{mesg:data.Name+" Account created Successfully"})
                            }
                        })
                }
            }
     }
     Patients_dashboard(req,res)
     {
         if(req.method=='GET')
         {
            res.render('PDashboard')
         }
         else 
         {

         }
     }
}
module.exports=new Auth();