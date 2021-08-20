 

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
   
  //  const depositInput = document.getElementById('deposit-input');
  //  const depositAmountText = depositInput.value;
  //  const depositAmount = parseFloat(depositAmountText) ;
  // console.log(depositAmount); 

    const depositAmount = getInputValue('deposit-input');

    //  const depositTotal = document.getElementById('deposit-total');
    //  const depositTotalText = depositTotal.innerText;
    //  const previesDepositTotal = parseFloat(depositTotalText);
    //  depositTotal.innerText = depositTotalText + depositAmount;

    updateTotalFeild ('deposit-total', depositAmount);

      
    // update balance 
    //  const balanceTotal = document.getElementById('balance-total');
    //  const balanceTotalText = balanceTotal.innerText;
    //  const previesTotalBalance = parseFloat(balanceTotalText);
    //  balanceTotal.innerText = previesTotalBalance +  depositAmount ;
      
    updateBalnce (depositAmount, true);
  //  depositInput.value = '';

})



// withdraw part 

document.getElementById('withdraw-button').addEventListener('click', function(){
     
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    const  withdrawAmount = getInputValue ('withdraw-input');


    // const withdrawTotal = document.getElementById('withdraw-total');
    //  const withdrawTotalValue = withdrawTotal.innerText;
    //  const withdrawTotalText = parseFloat(withdrawTotalValue);
    //  withdrawTotal.innerText = withdrawAmount;
    //  withdrawTotal.innerText = parseFloat(withdrawTotalText)  + parseFloat(withdrawAmount) ;

     updateTotalFeild ('withdraw-total', withdrawAmount);



  // const balanceTotal = document.getElementById('balance-total');
  // const balanceTotalText = balanceTotal.innerText;
  // const previesBalanceTotal = parseFloat(balanceTotalText);
  // balanceTotal.innerText = previesBalanceTotal - withdrawAmount ;  

    updateBalnce (withdrawAmount, false);

  // withdrawInput.value = '';

})