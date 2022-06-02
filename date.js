    module.exports.getDate=getDate;
    
    function getDate(){
    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var day = (today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    return day;
    }
    module.exports.getDay=getDay;
    function getDay(){
    var today = new Date();
    var options = { weekday: 'long'};
    var day = (today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    return day;
    }
    console.log(module.exports)
    // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    // console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016
    // var currentDay=today.getDay();
    // var day = "";
    // if(currentDay===0){
    //     day = "Sunday";
    //     // res.render("list", {kindOfDay:day});
    //     // res.sendFile( __dirname+ "/index.html");
    // }else if(currentDay===1){
    //     day = "Monday";
    //     // res.render("list", {kindOfDay:day});
    //     // res.send("Today is a weekday :(");
    // }else if(currentDay===2){
    //     day = "Tuesday";
    // }
    // else if(currentDay===3){
    //     day = "Wednesday";
    // }
    // else if(currentDay===4){
    //     day = "Thursday";
    // }
    // else if(currentDay===5){
    //     day = "Friday";
    // }
    // else{
    //     day = "Saturday";
    // }