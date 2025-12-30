const admin_model = require('../Modal/Admin')
class Admin 
{
    Check_admin(req,res)
    {
         if(req.method=='GET')
         {
             res.render('Admin/Admin_Login')
         }
         else 
         {
             const data={
                username:req.body.username,
                password:req.body.password
             }
             admin_model.admin_login(data,(err,result)=>
            {
                 if(err)
                 {
                     res.render('Admin/Admin_Login',{mesg:"Error While Checking"})
                 }
                 else 
                 {
                      if(result.length>0)
                      {
                          const userpassword=result[0].password 
                          if(data.password==userpassword)
                          {
                              req.session.admin_user=data.username
                              res.redirect('/admin_dashboard')
                          }
                          else 
                          {
                            res.render('Admin/Admin_Login',{mesg:"Inccorect Password",usernames:req.body.username})
                          }
                      }
                      else 
                      {
                         res.render('Admin/Admin_Login',{mesg:"username Not Exists"})
                      }
                 }
            })
         }
    }
    Dashboard(req,res)
    {
        if(!req.session.admin_user)
        {
             res.render('Admin/Admin_Login',{mesg:"Login Here...."})
        }
        else 
        {
           res.render('Admin/Dashboard')
        }
    }
    Logout(req,res)
    {
         if(!req.session.admin_user)
        {
             res.render('Admin/Admin_Login',{mesg:"Login Here...."})
        }
        else 
        {
            req.session.destroy()
            res.render('Admin/Admin_Login',{mesg:"Logout Successfully..."})
        }
    }

}



module.exports=new Admin();