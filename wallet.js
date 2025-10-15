let Username = "Alex";
let balance = 1000;
let amountAdded = 500;
let amountSpent = 700;

function updateWallet(name, balance, amountAdded, amountSpent) {
  if (name === "guest") {
    return "Access Denied";
  } else {
    let finalBalance = balance + amountAdded - amountSpent;
    return finalBalance;
  }
}

let result = updateWallet(Username, balance, amountAdded, amountSpent);

// Print final balance or access message
console.log("Final Balance:", result);

// Check if the result is a number before comparing
if (typeof result === "number" && result > 0) {
  console.log("Balance is greater than 0");
} else if (result === "Access Denied") {
  console.log(result);
} else {
  console.log("Balance is not greater than 0");
}

// Print data type of result
console.log("Data Type:", typeof result);
