class Emp{
    Add_Employee(req,res)
    {
        if(req.method=='GET')
        {
            res.render('Employee')
        }
        else{
            
        }
    }
}


obj = new Emp();
module.exports=obj;