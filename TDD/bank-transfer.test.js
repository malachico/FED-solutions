/*
Write some code to transfer a specified amount of money from one bank account (the payer) to another (the payee)
Write some code to keep a record of the transfer for both bank accounts in a transaction history
Write some code to query a bank account's transaction history for any bank transfers to or from a specific account
 */


class Account {

    constructor(id, balance = 0) {
        this._balance = balance;
        this._id = id;
        this.history = "";
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdrawal(amount) {
        this._balance -= amount;
    }

    get balance() {
        return this._balance;
    }

    set balance(balance) {
        this._balance = balance;
    }

    set id(value) {
        this._id = value;
    }

    get id() {
        return this._id;
    }

    transfer(accountOther, amount) {
        this.withdrawal(amount);
        accountOther.deposit(amount);
        this.history += "transfer to : " + accountOther.id + ", amount : " + amount;
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
    expect(account.balance).toEqual(100);
});

test('check balance after deposit', () => {
    account.deposit(100);
    expect(account.balance).toEqual(100);
});


test('transfer money from account to another', () => {
    account.deposit(100);
    account.transfer(accountOther, 50);
    expect(account.balance).toEqual(50);
    expect(accountOther.balance).toEqual(50);
});


test('keep track of account transfer history', () => {
    account.deposit(100);
    const amount = 50;
    account.transfer(accountOther, amount);
    expect(account.history).toContain("transfer to : " + accountOther.id + ", amount : " + amount);
});
