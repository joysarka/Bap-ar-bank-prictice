function getInputValue (inputId){
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    const amountValue = parseFloat(inputAmountText);
     // clear input 
     inputFeild.value = '';
    return amountValue;
  }
  
function updateTotalFeild (totalFeildId, amount){
    // debugger;
    const totalElemt = document.getElementById(totalFeildId);
    const totalText = totalElemt.innerText;
    const previesTotal = parseFloat(totalText);
    totalElemt.innerText =  previesTotal + amount ;
}

function getCurrentBalance (){
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previesTotalBalance = parseFloat(balanceTotalText);
  return previesTotalBalance;
}
  
function updateBalnce (depositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previesTotalBalance = parseFloat(balanceTotalText);    

    if(isAdd == true){
      balanceTotal.innerText = previesTotalBalance +  depositAmount ;
    }
    else{
      balanceTotal.innerText = previesTotalBalance -  depositAmount ;
    }
  
}

document.getElementById('deposit-button').addEventListener('click', function(){

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0){
      updateTotalFeild ('deposit-total', depositAmount);
      updateBalnce (depositAmount, true);
    }
  

})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const  withdrawAmount = getInputValue ('withdraw-input');
    const currentBalance = getCurrentBalance ();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance ){
      updateTotalFeild ('withdraw-total', withdrawAmount);
      updateBalnce (withdrawAmount, false);
  
    }
   
})