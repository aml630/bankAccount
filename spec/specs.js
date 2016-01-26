describe('Account', function() {
  it("will display name and initial amount", function () {
    var testAccount = new Account("Erik", 10);
    expect(testAccount.userName).to.equal("Erik");
    expect(testAccount.initialDeposit).to.equal(10);
  });

 it("will add to account balance", function (){
    var testAccount = new Account("Erik", 10);
    expect(testAccount.deposits(5)).to.equal(15);
 });

 it("will subract from account balance", function () {
   var testAccount = new Account("Erik", 10);
   expect(testAccount.withdrawls(5)).to.equal(5);
 });

});

describe('Bank', function () {
  it("will have many accounts inside its array", function () {
    var testBank = new Bank();
    expect(testBank.accounts).to.eql([])
  });
});
