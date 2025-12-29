const admin_modal = require('../Modal/')
const notify_modal = require('../Modal/Notification')

class Admin {


    chec
}













class sub_admin extends Admin {
    notification(req,res)
    {
        if(!req.session.admin_user)
        {
            res.render('Admin/Admin_Login',{mesg:"Login Here......"})
        }
        else{
            if(req.method=='GET')
            {
                res.render('Admin/push_notification')
            }
            else{
                const data = {
                    title:req.body.title,
                    message:req.body.message,
                    publishby:req.session.admin_user
                }
                notify_modal.add_notification(data, (err)=>{
                    if(err)
                    {
                        res.render('Admin/push_notification',{mesg:"Error Check server"})
                    }
                    else{
                        res.render('Admin/push_notification',{mesg:"Notification Addded Successfully"})
                    }
                })
            }
        }
    }
}