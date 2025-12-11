const db=require("../Databsae/myconnect")

const Appointment= 
{ create:(data, callback)=>
    {
    const sql = `insert into appointment (name, email,phone,date, time,adddress) values ('${data.Name}','${data.Email}','${data.Phone}','${data.Date}','${data.Time}','${data.Address}')`
    db.query(q,callback)
    },
    delete : (data, callback)=>
    {
        const q =`delete from appointment where id =${data.id}`
        db.query(q,callback)
    },
    list_appointment:(callback)=>{
        const q= `select * from appointment`
        db.query(q,callback)
    }
}

module.exports= Appointment