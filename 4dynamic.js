const express=require('express');
const ali=express();

ali.set('view engine','ejs');

ali.listen(8088);

ali.get('/',(req,res)=>{

    //dont net setheder content-type and most time dont need setststuscodeess
    res.render('index');
    }) 
    //route to about page
ali.get('/about',(req,res)=>{

    //dont net setheder content-type and most time dont need setststuscodeess
    res.render('about');
    //redirect from aboutme to about
})