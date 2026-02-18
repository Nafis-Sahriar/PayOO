console.log("Transfer Money JS Running...");

document.getElementById('transfer-btn').addEventListener('click', function()
{


    //1 Get the Transfer account number and validate

    //2 Get the transfer amount and validate if its more than balance or not

    // get the pin code and validate if the pin is wrong. 

    // transfer the value -- newBalance = balance-transferedamount.

    // set the new balance in Balance section

    // add transaction history

    const accountNumber = getValueFromInput('transfer-number');
    console.log(accountNumber);

    if(accountNumber.length != 11)
    {
        alert("Enter Valid User no of 11 Digit");
        return;
    }

    // ekhane ar kaj nei . 

    const transferAmount = getValueFromInput('transfer-amount');

    const currentBalance = getBalance();

    console.log(currentBalance);

    if(currentBalance< Number(transferAmount))
    {
        console.log("Insufficient Balance Triggered");
        alert("Insufficient Balance | Please Enter valid Transfer Amount");
        return;
    }

    const newBalance = currentBalance - Number(transferAmount);
    // ebar pin code thik hole balance update hobe , ar nahole return;


    const transferPin = getValueFromInput('transfer-pin');

    if(transferPin==='1234')
    {
        console.log("Correct Pin Triggered");
        // set new balance + add in transaction 

        setBalance(newBalance);
        // set balance done. 
        alert(`Send Money Succesful | TO Ac No: ${accountNumber} Amount --> ${transferAmount} ||
            at ${new Date()}`);

        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML=
        `
        
             <div class="transaction-card p-5 bg-base-100 mb-5 rounded-md ">

                    <div class="flex gap-3">
                        <img src="./assets/opt-3.png" alt="">
                        <p class="font-bold">Send Money Successful!</p>    
                    </div>
                    <br>

                    Reciever's Ac No: ${accountNumber} Amount --> ${transferAmount}
                
            at ${new Date()}
             New Balance :: ${newBalance}
            </div>
          
        `

        history.prepend(newHistory);

        


        
    }
    else
    {
        console.log("Incorrect Pin Triggered");
        alert("Invalid Pin Code");
        return;
    }

    

    


    










})