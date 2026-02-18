console.log("Bonus JS Running....");

document.getElementById('bonus-btn').addEventListener('click', function(){


    // Get the Cupon code

    const cuponCode = getValueFromInput('bonus-code');

    if(cuponCode==='bonus100')
    {
        //kichu kaj hobe
         
          const newBalance= getBalance() + 1000;

          setBalance(newBalance);

          alert("Congratulations! You got bonus $1000");

        const history = document.getElementById('history-container');

        //2
        const newHistory = document.createElement("div");

        //3
        newHistory.innerHTML=
        `
        
             <div class="transaction-card p-5 bg-base-100 mb-5 rounded-md ">

                    <div class="flex gap-3">
                        <img src="./assets/opt-4.png" alt="">
                        <p class="font-bold">Bonus Recieved</p>    
                    </div>
                    <br>

                 Amount --> 1000 
                  
            at ${new Date()}
              New Balance :: ${newBalance}
            </div>
          
        `

        //4
        history.prepend(newHistory);





    }
    else
    {
        alert("Invalid Cupon Code");
    }



    



})
