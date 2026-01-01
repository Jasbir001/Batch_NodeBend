const contact_modal = require('../Modal/contact')
class contact 
{
    Enquire_Contact(req, res)
    {
    if(req.method=='GET')
        {
            res.render('Contact')
        }
    else
       {
                    const data = {
                    Name:req.body.name,
                    Email:req.body.email,
                    Subject:req.body.subject,
                    Message:req.body.message        
            }
            contact_modal.create(data,(err)=>{
                if(err){
                    res.render('Contact',{msg:'Something went wrong'})
                }
                else{
                    res.render('Contact',{msg:"Your enquiry has been submitted successffuly"})
                }
            })
       }
    }
}

module.exports = new contact();