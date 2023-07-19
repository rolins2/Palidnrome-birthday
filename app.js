const birthdate = document.querySelector("#date");
const submitbtn = document.querySelector("#submit");
const output = document.querySelector("#output");

submitbtn.addEventListener("click", function clickEventHandler(){
    console.log("Button Clicked");
    var d = {day:29,
            month:2,
                year:2023};
                dateToString(d)
    
})

function getDate(){
    var dates = birthdate.value;
   var dateList = dates.split("-");
    var date = {
        day: dateList[2],
        month: dateList[1],
        year: dateList[0]
    }

    return date;

}

function reverseString(str){


     tem = str.split("");
    var listofchars = tem.reverse();
    rev = listofchars.join("");

    return rev;


}

function checkPalindrome(date){
    var rev = reverseString(date);
    console.log(rev);
    if(rev === date){
        console.log("Is Palindrome");
        return true;
    }
    else{
        console.log("Not palindrome");
        return false;
    }

}

function dateToString(date){
    var dateInstr = {day:"",month:"",year:""};

    if(date.day < 10){
        dateInstr.day = "0"+date.day;
    }else{
        dateInstr.day = date.day.toString();
    }
    if(date.month < 10){
        dateInstr.month = "0"+date.month;
    }else{
        dateInstr.month = date.month.toString();
    }
    dateInstr.year = date.year.toString();


    console.log(dateInstr);

     return dateInstr;
}