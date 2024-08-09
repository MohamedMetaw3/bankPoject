let welcomeLabel = document.querySelector(".welcome");
let dateLabel = document.querySelector(".date");
let balanceLabel = document.querySelector(".balance__value");
let sumInLabel = document.querySelector(".summary__value--in");
let sumOutLabel = document.querySelector(".summary__value--out");
let sumInterestLabel = document.querySelector(".summary__value--interest");
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnLoginClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

let currentAccount;

const account1 = {
  owner: "Mazen Ahmed",
  movements: [5000, 34000, -150, 5550, -50, -90],
  interestRate: 1.5,
  pin: 111,
};

const account2 = {
  owner: "Ali Mohamed",
  movements: [600, 5000, -180, 5550, -50, -90],
  interestRate: 1.2,
  pin: 222,
};
const account3 = {
  owner: "yasmin Ahmed",
  movements: [900, 8000, -50, 620, -540, -90],
  interestRate: 0.5,
  pin: 333,
};

const accounts = [account1, account2, account3];
// CREATE USERNAME FUNCTION
const createUsername = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsername(accounts);

// DISPLAY MOVEMENTS-------------------------------->
const displayMovements = (movements) => {
  containerMovements.innerHTML = "";
  movements.forEach((mov, i) => {
    const movementsHtml = `
    <div class="movements__row">
          <div class="movements__type movements__type--deposit">2 deposit</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", movementsHtml);
  });
};
displayMovements(account1.movements);
