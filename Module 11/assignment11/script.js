let statement = document.getElementById("message");
bd_image=document.getElementById("birthday_image");

// get the current date
// compare that against the birthday entered
let today = new Date();
let month = today.getMonth();       //get the month
let day = today.getDate();          //get the date

//get the birthday
let bday = new Date(2000, 3, 12);    //enter YOUR birthday
let bd_month = bday.getMonth();
let bd_day = bday.getDate();

if (month == bd_month && day == bd_day){
    message = "🎉 Happy Birthday! 🍰";
    bd_image.src = "bday.gif"
    console.log(message);
}else{
    message = "It's not your birthday, yet."
    bd_image.src="sadbday.gif"
    console.log(message);
}
statement.innerHTML= "<h1>"+ message + "</h1>";