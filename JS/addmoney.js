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

    }
    else
    {
        console.log("Invalid Pin");
        alert("Invalid Pin");
        return;
    }


})