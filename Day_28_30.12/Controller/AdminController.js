const admin_model = require('../Modal/Admin')
const notify_model =require('../Modal/Notification')
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
class sub_admin extends Admin
{
       notification(req,res)
    {
         if(!req.session.admin_user)
        {
             res.render('Admin/Admin_Login',{mesg:"Login Here...."})
        }
        else 
        {
             if(req.method=='GET')
             {
                 res.render('Admin/push_notification')
             }
             else 
             {
                const data={
                    title:req.body.title,
                    message:req.body.message,
                    publishby:req.session.admin_user
                }
               notify_model.add_notification(data,(err)=>
                {
                    if(err)
                    {
                        res.render('Admin/push_notification',{mesg:" Error Check Server"})
                    }
                    else 
                    {
                        res.render('Admin/push_notification',{mesg:" Notification Added Successfully"})
                    }
                })
             }
        }
    }
}


module.exports=new sub_admin