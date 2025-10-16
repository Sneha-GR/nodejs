// app.js

const manager = require("./managerInfo");
const capitalizeName = require("./capitalizeName");

const capitalizedName = capitalizeName(manager.name);
const upperRole = manager.role.toUpperCase();
const roleLength = manager.role.length;
const searchInventory = manager.role.search("inventory");

console.log("Manager Name:", capitalizedName);
console.log("Manager Role (Uppercase):", upperRole);
console.log("Number of Characters in Role:", roleLength);
console.log(
  searchInventory !== -1
    ? `"inventory" found at position ${searchInventory}`
    : `"inventory" not found`
);
