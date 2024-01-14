const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "tanakaalden@gmail.com",
      pass: "rqgkcrdoorrdgxmt",
    },
});

module.exports = transporter
