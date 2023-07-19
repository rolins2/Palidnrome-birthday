const birthdate = document.querySelector("#date");
const submitbtn = document.querySelector("#submit");
const outputs = document.querySelector("#output");

submitbtn.addEventListener("click", function clickEventHandler(){
    console.log("Button Clicked");

   
    var d = {day:1,
            month:1,
                year:2020};


                var f = getPrevDate(d);

                console.log(f);
                

                if(checkPalindromeForAllForats(d)){
                    console.log("Is palindrome");
                }
                else{
                    console.log("Not a palindrme");

                    var [chl,date] = nextPalindrome(d);

                    outputs.innerText = "The next palindrome is "+chl + " on " +date.day + " " + date.month + " " +date.year;
                    console.log(chl + "days away");
                    console.log(date.day, date.month,date.year);

                   
                    
                }
    
})

function isLeapYear(year){
    if(year%400 ===0){
        return true;
    }
    if(year % 100 ===0){
        return false;
    }
    if(year % 4 ===0){
        return true;
    }
    return false;

}

function getPrevDate(date){
    var day = date.day -1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month === 3){
        if(isLeapYear){
            if(day < 1)
            {
                day = 29;
                month --;
            }
            } 

        }else{

            console.log("in else loop");
            if(day < 1)
            {
                day = daysInMonth[month -2];
                month--;
            }
        } 
        if(month < 1){
            day = 31;
            month = 12;
            year --;

        }
        return {
            day : day,
            month: month,
            year: year
         }
    }




function getnextDate(date){

    var day = date.day +1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month ===2){
        if(isLeapYear){
            if(day > 29){
                day = 1;
                month = 3;
            }
        } else{
            if(day > 28){
                day = 1;
                month = 3;
            }
        }
    } else{
        if (day > daysInMonth[month-1]){
            day = 1;
            month ++;
        }
    }
    if(month > 12){
        month = 1;
        year++;

    }

    return {
       day : day,
       month: month,
       year: year
    }

}

function prevPalindrome(date){
    var prevDate =  getPrevDate(date);
}

function nextPalindrome(date){

    

    var nextDate = getnextDate(date);
    var ctr=0;

    while(1){

        ctr++;
        var isPalindrome =checkPalindromeForAllForats(nextDate);

        if (isPalindrome){
            break;
        }
        nextDate = getnextDate(nextDate);

    }


    return [ctr, nextDate];



}

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