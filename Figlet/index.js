const figlet = require('figlet');

figlet("Mithu Gambler", function (err, data) {
    if (err) {
      console.log("Something went wrong...", err);
      return;
    }
    console.log(data);
  });