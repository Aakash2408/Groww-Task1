function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {

    var name = document.Form.name.value;
    var email = document.Form.email.value;
    var mobile = document.Form.mobile.value;
    var txtPANCard= document.Form.txtPANCard.value;
    var txtAadharCard=document.Form.txtAadharCard.value;
    var state =  document.Form.state.value;
    var gender = document.Form.gender.value;

    

    var nameErr = emailErr = mobileErr = pancardErr = aadharErr = stateErr = genderErr = true;
    

    if(name == "") {
        printError("nameErr", "Please enter your name");
        var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
            var elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = false;
            var elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

            
        }
    }
    

    if(email == "") {
        printError("emailErr", "Please enter your email address");
         var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("emailErr", "");
            emailErr = false;
             var elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }
    
 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
        var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
            var elem = document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
            var elem = document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }
    
    if(txtPANCard==""){
        printError("pancardErr","Please enter your pancard number");
        var elem=document.getElementById("txtPANCard");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else {
        var regex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (regex.test(txtPANCard)) {
            printError("pancardErr", "");
            pancardErr = false;
            var elem = document.getElementById("txtPANCard");
            elem.classList.add("input-1");
            elem.classList.remove("input-2"); 
        }
        else{
            printError("pancardErr", "Please enter a valid 10 digit alphanumeric number");
            var elem = document.getElementById("txtPANCard");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");


                  }
    }
    if(txtAadharCard==""){
        printError("aadharErr","Please enter your aadhar number");
        var elem=document.getElementById("txtAadharCard");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else {
        var regex = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
        if (regex.test(txtAadharCard)) {
            printError("aadharErr", "");
            pancardErr = false;
            var elem = document.getElementById("txtAadharCard");
            elem.classList.add("input-1");
            elem.classList.remove("input-2"); 
        }
        else{
            printError("aadharErr", "Please enter a valid 12 digit aadhar number with spaces");
            var elem = document.getElementById("txtAadharCard");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");


                  }
    }
    if(state == "Select") {
        printError("stateErr", "Please select your state");
        var elem = document.getElementById("state");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("stateErr", "");
        stateErr = false;
        var elem = document.getElementById("state");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    

    if(gender == "") {
        printError("genderErr", "Please select your gender");
        var elem = document.getElementById("gender");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    } else {
        printError("genderErr", "");
        genderErr = false;
        var elem = document.getElementById("gender");
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
    }
    
    
    if((nameErr || emailErr || mobileErr || pancardErr || aadharcardErr || stateErr || genderErr) == true) {
       return false;
    } 
};