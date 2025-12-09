class Math{
    area_of_circle(req,res){
        if(req.method=="GET")
        {
            res.render('circle')
        }
        else{
            let r=req.body.radius;
            let area=3.14*parseFloat(r)*parseFloat(r);
            res.render('circle',{result:"Area of Circle is "+area})
        }
    }

}

obj= new Math();

module.exports= obj;