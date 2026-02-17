document.getElementById('log-in-btn').addEventListener('click', function()
{
    // console.log("Log IN Button Clicked");

    //step - 1 Get the inputed mobile number

    //step - 2 Get the pin
    
    //step - 3 - Match pin & Mobile Number
    //3.1 --> true :: >> alert > Homepage
    //3.2 --> false:: >> alert > Return

    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    // console.log(contactNumber); 

    // same way te pin input ani.

    const inputPin = document.getElementById('input-pin');

    const pin = inputPin.value;

    // console.log(pin);

    // ok, phone and pin retrieved

    if(contactNumber=='01234567890' && pin=='1234')
    {
        alert("Log in Successful");

        // Now, after log in, let the user go to home page, 
        //window

        window.location.replace("./home.html");
        // replace diye korle back page e ashar option thakbe na

        window.location.assign("./home.html");
        // assign diye korle back page e abar ashte parbe. 

    }
    else
    {
        alert("Incorrect Credentials | Log in Failed");
        return;
    }

})