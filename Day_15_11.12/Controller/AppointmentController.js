const appointmentModal = require('../Modal/Appointment')
class AppointmentController{
    Add_appointment(req, res){
     
            const data = {
                Name:req.body.name,
                    Email:req.body.email,
                    Phone:req.body.phone,
                    Date:req.body.date,
                    Time:req.body.time,
                    address:req.body.address
            }
            appointmentModal.create(data,(err)=>{
                if(err){
                    res.render('Home',{msg:"Error in Booking Appointment"})
                }
                else{
                    res.render('Home',{msg:" Appointment Booked Successfully"})
                }
            })
        }
}


module.exports = new AppointmentController()