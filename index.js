const https = require("https");

function printMessage(username, badgeCount, points) {
  `${username} has ${badgeCount} total badges and ${points} points in JavaScript`;
}

const request = https.get(
  "https://teamtreehouse.com/joshpson.json",
  response => {
    let body = "";
    let count = 0;
    response.on("data", data => {
      body += data.toString();
      count += 1;
    });
    response.on("end", () => console.log(body, count));
  }
);
