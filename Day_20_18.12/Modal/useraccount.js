const db=require("../Databsae/myconnect")
const { list_appointment } = require("./Appointment")

const user= 
{ 
    create : (data, callback)=>
    {
        const q = `insert into user (name, email, password, gender, address) values ('${data.Name}','${data.Email}','${data.Password}','${data.gender}','${data.Address}')`
        db.query(q,callback)
    },
    delete:(data, callback)=>
    {
        const q =`delete from user where id =${data.id}`
        db.query(q,callback)
    },
    list_appointment:(callback)=>{
        const q= `select * from user`
        db.query(q,callback)
    },
    check_login:(data,callback)=>
    {
        const q = `select * from use where email = '${data.Email}'`
        db.query(q,callback)
    }
}

module.exports= user