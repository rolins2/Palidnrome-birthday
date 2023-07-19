const birthdate = document.querySelector("#date");
const submitbtn = document.querySelector("#submit");
const output = document.querySelector("#output");

submitbtn.addEventListener("click", function clickEventHandler(){
    console.log("Button Clicked");
    var d = {day:5,
            month:2,
                year:2020};
                

                if(checkPalindromeForAllForats(d)){
                    console.log("Is palindrome");
                }
                else{
                    console.log("Not a palindrme");
                }
    
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
    
    if(rev === date){
        
        return true;
    }
    else{
        
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

     return dateInstr;
}

function getAllDateFormats(date){
    var dateInStr = dateToString(date);
     var ddmmyyyy = dateInStr.day + dateInStr.month + dateInStr.year;
     var mmddyyyy = dateInStr.month + dateInStr.day + dateInStr.year;
    var yyyymmdd = dateInStr.year + dateInStr.month + dateInStr.day;
    var ddmmyy = dateInStr.day + dateInStr.month + dateInStr.year.slice(-2);
    var mmddyy = dateInStr.month + dateInStr.day+ dateInStr.year.slice(-2);
    var yymmdd = dateInStr.year.slice(-2) + dateInStr.month + dateInStr.day;
   

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromeForAllForats(date){
    var arr = getAllDateFormats(date);
 

    var flag = false;
    for(var i=0; i < arr.length;i++){
        
        if(checkPalindrome(arr[i])){



            flag = true;
            break;

        }
        
        

    }
    return flag;
}