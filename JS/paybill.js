console.log("Pay Bill JS Running..... ");

document.getElementById('bill-pay-btn').addEventListener('click', function(){

    
    // biller select validation first
    
    
    // then biller er number ante hobe. 
    // validate korte hobe 11 digit kina

    // then amount ante hobe, new balance calculate kore if else diye validate korte hobe

    // finally pin validate kore balance cet kore dite hobe. 

    // getting the select validation first

    const biller = getValueFromInput('pay-bill-biller');
    console.log(biller);

    if(biller==='Select To Pay')
    {
        alert("Please select biller first");
        return;
    }

    // biller validation complete

    // get the biller acount no and verify 

    const billerAcount = getValueFromInput('biller-number');
    if(billerAcount.length!=11)
    {
        alert("Invalid Biller Ac No. Must contain 11 digit");
        return;
    }

    //get the amount validation and calculate new amount after payment


    const billAmount = getValueFromInput('biller-amount');
    if(billAmount<=0)
    {
        alert('Invalid Amount');
        return;
    }


    const currentBalance = getBalance();

    if(Number(billAmount)>currentBalance)
    {
        console.log("Insufficient Balance Triggered");
        alert("Insufficient Balance | Add some money first");
        return;
    }

    const newBalance = currentBalance- Number(billAmount);

    // notun balance set hoye geche, 
    // bear pin validation hoye gele balance update kore dibo . 


    const pin = getValueFromInput('bill-pin');
    if(pin==='1234')
    {
        alert('Payment Succesfull!');

        setBalance(newBalance);

        // ebar history add korte hobe. 


          const history = document.getElementById('history-container');

        //2
        const newHistory = document.createElement("div");

        //3
        newHistory.innerHTML=
        `
        
             <div class="transaction-card p-5 bg-base-100 mb-5 rounded-md ">

                    <div class="flex gap-3">
                        <img src="./assets/opt-5.png" alt="">
                        <p class="font-bold">Payment Successful!</p>    
                    </div>
                    <br>

                    Biller -${biller} 
                    Ac No-${billerAcount} Amount --> ${billAmount} 
                  
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
                    
                    <div class="w-[60px]"><img src="./assets/opt-5.png" alt=""> </div> 
                    <div>
                    <p class="font-bold">Bill Paid</p>
                        ${biller} |
                        Amount - ${billAmount} | A/c - ${billerAcount}
                        
                    </div>
                 </div>
        `

        recentContainer.prepend(newRecent);



    }
    else
    {
        console.log("Invalid Pin Triggered");
        alert("Invalid Pin Number | Payment Aborted");
        return;
    }
})