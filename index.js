const https = require("https");

function printMessage(username, badgeCount, points) {
  `${username} has ${badgeCount} total badges and ${points} points in JavaScript`;
}

const request = https.get("https://teamtreehouse.com/joshpson.json", resp => {
  console.dir(resp);
});

