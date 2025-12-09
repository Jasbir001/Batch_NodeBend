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


    Display_Student(req,res){
        const q=`select * from student`
        mysql.query(q,(err,result)=>{
            if(err){
                res.render('Display', {msg:"Error in fetching Data"})
            }
            else{
                res.render('Display',{data:result})
            }
        })
    }

    Delete_Student(req,res)
    {
        const r=req.params.roll
        const q =`delete from student where roll='${r}'`
        mysql.query(q,(err)=>{
            if(err){
                res.send('Error in Deletion')
            }
            else{
                this.Display_Student(req,res)
            }
        })
    }

    Update_Student(req,res)
    {
        const r=req.params.roll
        const q =`update student set name =${name}, ${branch}, ${addresss} where roll='${r}'`
        mysql.query(q,(err)=>{
            if(err){
                res.send('Error in Deletion')
            }
            else{
                this.Display_Student(req,res)
            }
        })
    }




}



obj= new Student();


module.exports=obj;
