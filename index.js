const https = require("https");

function printMessage(username, badgeCount) {
  console.log(`${username} has ${badgeCount} total badges`);
}

function getProfile(username) {
  const request = https.get(
    `https://teamtreehouse.com/${username}.json`,
    response => {
      let body = "";
      let count = 0;
      response.on("data", data => {
        body += data.toString();
        count += 1;
      });
      response.on("end", () => {
        const profile = JSON.parse(body);
        printMessage(username, profile.badges.length);
      });
    }
  );
}

// console.log(process.argv);

const users = ["chalkers", "alenaholligan", "joshpson"];

users.forEach(getProfile);
