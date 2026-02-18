console.log("Machiene Added");

//ekhane o jekuno ekta element er id niye input value ta amake dibe. 

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;

}


function getBalance()
{
    const balanceElement = document.getElementById('balance');

    const balance = balanceElement.innerText;

    console.log("Current Balance : ", balance);

    return Number(balance);
}

function setBalance( amount)
{
    const currentBalance  = document.getElementById('balance');

    currentBalance.innerText = amount;

}



function showOnly(id)
{
    console.log("Show Only working");
    const addmoney = document.getElementById('add-money');
    const cashout = document.getElementById('cash-out');
    const transaction = document.getElementById('history');
    const transferMoney = document.getElementById('transfer-money');
    const bonus_sec = document.getElementById('get-bonus');
    const payoo = document.getElementById('pay');

    // console.log(`Add Money = ${addmoney}, CashOut = ${cashout}`);

    // hide all
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transaction.classList.add("hidden");
    transferMoney.classList.add("hidden");
    bonus_sec.classList.add('hidden');
    payoo.classList.add('hidden');

    // show only one which was id

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');



}
