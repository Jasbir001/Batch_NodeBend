class Chandigarh
{
    swap_number(req,res)
    {
        if(req.method == "GET")
        {
            res.render('swap')
        }
        else{
            let a = req.body.a;
            let b = req.body.b;
            let temp=a;
            a=b;
            b=temp;
            res.render('swap',{result: `After swappinh A=${a} and B=${b}`})
            // bresult:`Before Swapping:A=${req.body.a} and B:=${req.body.b}`
            
        }
    }
}

obj= new Chandigarh;
module.exports= obj;