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

// function setBalance()
