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
                    res.render('Home',{msg:data.Name +" Appointment Booked Successfully"})
                }
            })
        }

    //     get_records(req,res)
    // {
    //      const data={
    //          Email:req.session.patient_email
    //      }
    //      if(!req.session.patient_email)
    //         {
    //             res.render('Login',{mesg:"Please Login Here"})
    //         }
    //         else 
    //         {
    //             appointmentModel.list_appointment_search(data,(err,result)=>
    //             {
    //                  if(err)
    //                  {
    //                      res.render('PAppointment_List',{mesg:"Error While Fetch Contact Admin"})
    //                  }
    //                  else 
    //                  {
    //                      if(result.length>0)
    //                      {
                            
    //                         res.render('PAppointment_List',{datas:result})
    //                      }
    //                      else 
    //                      {
    //                         res.render('PAppointment_List',{mesg:"Not Any Appointment Exists Realted To This Account"})
    //                      }
    //                  }
    //             })
    //         }
    // }
}


module.exports = new AppointmentController()