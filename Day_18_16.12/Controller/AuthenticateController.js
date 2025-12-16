

class Auth 
{
    checkAuth(req,res)
    {
        if(req.method=="GET")
        {
            res.render('Login')
        }
        else{

        }

    }
    create_user(req,res)
    {
        if(req.method=='GET')
        {
            res.render('Newuser')
        }
        else{
            
        }
    }
    Patients_dashboard(req,res)
    {
        if(req.method=='GET')
        {
            res.render('PDashboard')
        }
        {
            
        }
    }
}

module.exports = new Auth();