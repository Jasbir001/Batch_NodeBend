class Admin{
    Check_admin(req,res)
    {
        if(req.metod=='GET')
        {
            res.render('Admin/Admin_Login.ejs')
        }
        else{

        }
    }
}

module.exports = new Admin 