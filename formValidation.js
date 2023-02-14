function validate() {
    var fullName=document.getElementById("fullname").value;
    var validEmail=document.getElementById("valid-email").value;
    var zipCode=document.getElementById("zipcode").value;
    var mobile=document.getElementById("telephone").value;

    var regExname=/^[A-Za-z]{2,23}/;
    var regExemail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regExzipcode=/^[0-9]{00000,90000}/;
    var regExmobile=/^[0-9]{10}/;

    if(regExname.test(fullName)){
        document.getElementById("para1").innerHTML="";
    }
    else{
        document.getElementById("para1").innerHTML="Name Not Valid";
        return false;
    }

    if(regExemail.test(validEmail)){
        document.getElementById("para2").innerHTML="";
    }
    else{
        document.getElementById("para2").innerHTML="Enter valid Email address";
        return false;
    }

    if(regExzipcode.test(zipCode)){
        document.getElementById("para3").innerHTML="";
    }
    else{
        document.getElementById("para3").innerHTML="Invalid Zipcode";
        return false;
    }

    if(regExmobile.test(mobile)){
        document.getElementById("para4").innerHTML="";
    }
    else{
        document.getElementById("para4").innerHTML="Invalid mobile number";
        return false;
    }
}