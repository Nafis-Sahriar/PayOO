console.log("Add money JS connected");

document.getElementById('add-money-btn').addEventListener('click', function(){

    console.log("Add Money Button Clicked");

    //1- get the bank acount

    const bankAccount = getValueFromInput('add-money-bank');
    // console.log(bankAccount);

    if(bankAccount==='Banks')
    {
        console.log("Bank Not Selected");
        alert("Please Select a bank first");
        return;
    }

    //2 - get bank account number

    const acno = getValueFromInput('add-money-number');
    
    if(acno.length!=11)
    {
        alert("Invalid AC No");
        return;
    }

    //3 - get the amount 

    const amount = getValueFromInput('add-money-amount');

    if(amount<=0 || amount>100000)
    {
        alert("Invalid Amount");
        return;
    }

    const newBalance = getBalance() + Number(amount);

    console.log(newBalance);

    const pin = getValueFromInput('add-money-pin');
    if(pin==='1234')
    {
        alert(`Add Money success - ${amount}$ from ${bankAccount} 
        at ${new Date()}`);
        setBalance(newBalance);

        //_______________________Transaction History________________________||

        //1 -- History Container niye ashbo
        //2 -- New Div create korte hobe 
        //3 -- New Div er vitor Inner HTML likhte hobe 
        //4 -- New div ta history container e append korbo

        //1
        const history = document.getElementById('history-container');

        //2
        const newHistory = document.createElement("div");

        //3
        newHistory.innerHTML=
        `
        
             <div class="transaction-card p-5 bg-base-100 mb-5 rounded-md ">

                    <div class="flex gap-3">
                        <img src="./assets/opt-1.png" alt="">
                        <p class="font-bold">Add Money Successful!</p>    
                    </div>
                    <br>

                    Bank -${bankAccount} 
                    Ac No-${acno} Amount --> ${amount} 
                  
            at ${new Date()}
              New Balance :: ${newBalance}
            </div>
          
        `

        //4
        history.prepend(newHistory);

                const recentContainer = document.getElementById('recent_container');

        const newRecent = document.createElement('div');

        newRecent.innerHTML=
        `
              <div class="w-full bg-purple-100 p-5 mt-5 rounded-xl flex gap-3">

                    <div class="w-[60px]"><img src="./assets/opt-1.png" alt=""> </div>      
                    <div>
                      <p class="font-bold">Add Money</p>
                      From Bank A/C - ${acno}|
                      Amount -${amount}
                        
                    </div>
                 </div>
        `

        recentContainer.prepend(newRecent);

    }
    else
    {
        console.log("Invalid Pin");
        alert("Invalid Pin");
        return;
    }


})