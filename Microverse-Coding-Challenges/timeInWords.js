function timeInWords(h, m) {
    let hour = "";
    let hWord = "";
    let minutesArr = ["0", "1", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "15", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "30"]
    if (m > 30) h = h+1;
    switch (h) {
        case 1:
            hour = "one"; break;
        case 2:
            hour = "two"; break;
        case 3:
            hour = "three"; break;
        case 4:
            hour = "four"; break;
        case 5:
            hour = "five"; break;
        case 6:
            hour = "six"; break;
        case 7:
            hour = "seven"; break;
        case 8:
            hour = "eight"; break;
        case 9:
            hour = "nine"; break;
        case 10:
            hour = "ten"; break;
        case 11:
            hour = "eleven"; break;
        case 12:
            hour = "twelve"; break;
        default:
            break;
    }
    
    if (m > 1 && m < 30 && m != 15) {
       hWord = minutesArr[m] + " minutes past " + hour;
    }
    switch (m) {
        case 1:
            hWord = "one minute past " + hour; break;
        case 15:
            hWord = "quarter past " + hour; break;
        case 30:
            hWord = "half past " + hour; break;
        case 45:
            hWord = "quarter to " + hour; break;
        case 0:
            hWord = hour + " o' clock"; break;
        default:
            break;
    }
    if (m > 30 && m <= 59 && m != 45) {
        m = 60 - m;
        hWord = minutesArr[m] + " minutes to " + hour;
    }
    return hWord;
}
