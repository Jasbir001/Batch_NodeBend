const mysql= require("../Databsae/myconnect")
class Employee{
    Add_Employee(req,res)
    {
        if(req.method=="GET")
            {
                res.render("Employee")
            }
        else
            {
                const{} =req.body;
                const {emp_name,emp_age}=req.body
                const emp_photo=req.file.filename
                const q = `insert into emp (name, age ,photo) values ('${emp_name}', '${emp_age}','${emp_photo}')`
                mysql.query(q,(err,result)=>
                {
                    if(err)
                    {
                        res.render("Employee", {msg:"Error in Insertion"})
                        console.log(err)
                    }
                    else
                    {
                        res.render("Employee", {msg:emp_name +" Employee Added Successfully"})
                    }
                })
            }
    }
    view_Employee(req,res)
    {
        const q=`select * from emp`
        mysql.query(q,(err,result)=>{
            if(err){
                res.send("Error in Feching Employee Data ")
            }
            else{
                res.render("ViewEmp",{data:result})
            }
        })
    }

}




obj= new Employee();
module.exports=obj;





