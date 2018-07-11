/*
Write some code to transfer a specified amount of money from one bank account (the payer) to another (the payee)
Write some code to keep a record of the transfer for both bank accounts in a transaction history
Write some code to query a bank account's transaction history for any bank transfers to or from a specific account
 */


class Account {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdrawal(amount) {
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }

    transfer (accountOther, number) {
        this.withdrawal(number);
        accountOther.deposit(number);
    }
}


let account, accountOther;

beforeEach(() => {
    account = new Account();
    accountOther = new Account();
});

test('add money to account', () => {
    account.deposit(100);
});


test('check balance after deposit', () => {
    account.deposit(100);
    expect(account.getBalance()).toEqual(100);
});

test('check balance after deposit', () => {
    account.deposit(100);
    expect(account.getBalance()).toEqual(100);
});


test('transfer money from account to another', () => {
    account.deposit(100);
    account.transfer(accountOther, 50);
    expect(account.getBalance()).toEqual(50);
    expect(accountOther.getBalance()).toEqual(50);

});
