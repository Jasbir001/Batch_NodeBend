const appointmentModal = require('../Modal/appointment')
class AppointmentController{
    Add_appointment(re,req){
        if (req.method=='GET')
        {
                res.render('home')
        }
        else{
            const data={
                Name: req.body.name,
                Email: req.body.email,
                Phone : req.body.phone,
                Date : req.body.date,
                Time : req.body.time,
                Address : req.body.address,
            }
            appointmentModal.create(data,(err)=>{
                if(err){
                    res.render('home',{msg:"Error in Booking Appointment"}+err)
                }
                else{
                    res.render('home',{msg: Nmae+ " Appointment Booked Successfully"})
                }
            })
        }

    }
}

module.exports = new AppointmentController();