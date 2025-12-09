const mysql=require('../Databsae/myconnect')
class Student{
    Add_student(req,res)
    {
        if(req.method=="GET")
        {
            res.render('student')
        }
        else
        {
            //  const name=req.body.name
            //  const roll=req.body.roll
            //  const branch=req.body.branch

            const {name,roll,branch,address}=req.body
            const q=`insert into student(name,roll,branch,address) values ('${name}','${roll}','${branch}','${address}')`
        
            mysql.query(q,(err)=>{
                if(err)
                {
                    res.render('student',{msg:"Roll no "+roll+ " Already Exists"})
                }
                else
                {
                    res.render('student',{msg:name+" Reistered Successfully"})
                }
            })
        }
    }
}

obj= new Student();

module.exports=obj;
