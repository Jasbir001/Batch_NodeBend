class contact 
{
    Enquire_Contact(req,res)
    {
    if(req.method=='GET')
        {
            res.render('Contact')
        }
    else
        {

        }
    }
}

module.exports =new contact()