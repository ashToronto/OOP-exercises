class Account {

  constructor(username) {
    this.username = username;
    // this.balance = 5000;
    this.transactions = []
  }
  get balance(){
    if (this.transactions.length > 0){
      for (var i = 0; i <= this.transactions.length; i++){
        if (Withdrawal){
          this.transactions[i].amount = this.transactions[i].amount - this.transactions[i+1].amount
        } else if (Deposit){
          this.transactions[i].amount = this.transactions[i].amount + this.transactions[i+1].amount
        }
        return this.transactions[i].amount
      }
    }
  }
  addTransactions(transaction){
    this.transactions.push(transaction);
  }
}

class transaction {
  constructor(amount, account){
    this.amount = amount;
    this.account = account;
  }
  commit() {

    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransactions(this);
  }
}

class Deposit extends transaction {
  get value(){
    return this.amount;
  }
}

class Withdrawal extends transaction {
  get value(){
    return -this.amount;
  }
}

// DRIVER CODE
const myAccount = new Account("snow-patrol");
console.log('starting balnce : ', '\n', myAccount.transactions)

t1 = new Deposit(1200.00, myAccount);
t1.commit();
// console.log('Transaction 1: ','\n', t1);

t2 = new Withdrawal(1100.00, myAccount);
t2.commit();
console.log('Transaction 1: ','\n', t2);

console.log('closing balance: ', myAccount.balance)
