document.getElementById('cashout-btn').addEventListener('click', function()
{

    // console.log("Cashout Button Clicked"); //--> ok

  
    // 1. Get the agent Number and Validate 

        const agentNumber = document.getElementById('cashout-number');
        const number = agentNumber.value;

        console.log(number); 

        //validation_Number
        if(number.length !=11)
        {
            alert("Invalid Agent Number");
            return;
        }

        // 2. Get the amount, validate, convert to Number
        const cashoutAmountInput = document.getElementById('cashout-amount');
        const cashoutAmount=cashoutAmountInput.value;
        console.log(cashoutAmount);

        // 3. Get the current balance, validate, convert to number 

        const balanceElement = document.getElementById('balance');
        console.log(balanceElement);



        // This is My Own Way {
        // const balanceValue = parseInt(balanceElement.innerText);
        // console.log(balanceValue);

        // const newBalance = balanceValue-parseInt(cashoutAmount);

        // console.log(newBalance);}

        // Instructor's Way --> 

         const balance = balanceElement.innerText;

         const newBalance = Number(balance-cashoutAmount);
         console.log(newBalance);

         if(newBalance<=0)
         {
            alert("Invalid Amount");
            return;
         }



         // Pin validation

         const cashoutPinInput = document.getElementById('cashout-pin');
         const pin = cashoutPinInput.value;
         console.log(pin);

         if(pin==='1234')
         {
            alert("Cashout Successful");
            // console.log(newBalance);
            balanceElement.innerText=newBalance;

         }
         else
         {
            alert("Invalid Pin");
            return;
         }

    // 3. Get the current balance, validate, convert to number 
    // 4. Calculate the new balance 
    // 5. Get the pin , and verify 
    //    >> true:: show an alert --> Set balance
    //    >> false:: show an alert --> Error--> Return


    







})