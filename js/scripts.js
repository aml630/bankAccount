function Bank(){
  this.accounts = []
}

function Account(userName, initialDeposit) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
}

Account.prototype.deposits = function(deposit) {
  return this.initialDeposit + deposit;
}

Account.prototype.withdrawls = function(withdrawl) {
  return this.initialDeposit - withdrawl;
}


$(function () {
$("#signup").submit(function (event) {
  var name = $(this).find("#yourName").val();
  var balance = parseInt($(this).find("#initialDeposit").val());
  var newAccount = new Account(name, balance);
  $("form").append('<div class = "newBankAccount"' +
  '<p>Deposit money:</p>'+
  '<input class = "deposit" placeholder = "Deposit Amount">'+
  '<p class = "btn btn-info bankDeposit">Submit</p>'+
  '<p>Withdraw Money:</p>'+
  '<input class = "withdraw" placeholder="Withdraw Amount">'+
  '<p class = "btn btn-info bankWithdraw">Submit</p>'+
  '<div>'+
  '<p>Great Job Making A Bank Account <span class = "accountName"> </p>'+
  '</div>'+
  '<p class="balance"></p>'+
  '</div>')

  // $('.newBankAccount').each(function () {
  //   var newName = $(this).find("#yourName").val();
  //   var newBalance = parseInt($(this).find("#initialDeposit").val());
  //   var originalBankAccount = new Account(newName, newBalance);
  //   var firstBank = new Bank();
  //   firstBank.accounts.push(originalBankAccount)
  // })

  $(".balance").text(newAccount.initialDeposit);
  $(".accountName").text(newAccount.userName);
  event.preventDefault();


  $(".bankDeposit").click(function(){
    var deposit = parseInt($(this).find(".deposit").val());
    var newDeposit = (newAccount.initialDeposit + deposit);
    newAccount.initialDeposit = newDeposit;
    $(".balance").text(newDeposit);
  })

  $(".bankWithdraw").click(function(){
    var withdraw = parseInt($(this).find(".withdraw").val());
    var newDeposit = (newAccount.initialDeposit - withdraw);
    newAccount.initialDeposit = newDeposit;
    $(".balance").text(newDeposit);
  })


})



})
