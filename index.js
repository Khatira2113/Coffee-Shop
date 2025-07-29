// Login
const username = prompt("👋 Hey there! What's your username? (admin or user)");
const password = prompt("🔐 Please enter your password:");

if ((username === "admin" || username === "user") && password === "2113") {
  const role = username;
  const security = username === "admin" ? "high" : "low";
  alert(`✅ Welcome ${username}! Security level: ${security}`);
} else {
  alert("❌ Access denied. Wrong username or password!");
  throw new Error("Program stopped due to invalid login.");
}

// Coffee Order
const name = prompt("☕ What's your name?");
const age = parseInt(prompt("🎂 How old are you?"));
const coffeeType = prompt("📋 What coffee would you like? (espresso, latte, cappuccino)").toLowerCase();
const cups = parseInt(prompt("🧾 How many cups do you want?"));

let pricePerCup = 0;
if (coffeeType === "espresso") pricePerCup = 2.5;
else if (coffeeType === "latte") pricePerCup = 3.5;
else if (coffeeType === "cappuccino") pricePerCup = 4.0;
else {
  alert("❌ Invalid coffee type. Please refresh and try again.");
  throw new Error("Invalid coffee type");
}

let originalTotal = pricePerCup * cups;
let discount = 0;
if (age < 18 || age > 60) {
  discount = originalTotal * 0.1;
}
let finalTotal = originalTotal - discount;

// Bill Split & Tip
const split = parseInt(prompt("👥 How many people are splitting the bill? (1, 2, or 3)"));
const tipPercent = parseInt(prompt("💸 How much tip do you want to give? (0, 5, 10, 15)"));
let tipAmount = (finalTotal * tipPercent) / 100;
let totalWithTip = finalTotal + tipAmount;
let perPerson = totalWithTip / split;

// Final Result
alert(`👋 Hello ${name}!
You ordered ${cups} ${coffeeType}(s).
Original total: $${originalTotal.toFixed(2)}
Discount: $${discount.toFixed(2)}
Tip: $${tipAmount.toFixed(2)}
Total with Tip: $${totalWithTip.toFixed(2)}
Split between ${split} people: $${perPerson.toFixed(2)} each`);
