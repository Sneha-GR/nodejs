// capitalizeName.js

function capitalizeName(fullName) {
  const parts = fullName.split(" ");
  const first = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  const last = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
  return first + " " + last;
}

module.exports = capitalizeName;
