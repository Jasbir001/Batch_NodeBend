

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
}

module.exports = new Auth();