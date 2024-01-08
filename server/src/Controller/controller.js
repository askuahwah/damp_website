const nodemailer = require("nodemailer");

const sendemail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    auth: {
      user: "nedra.abernathy@ethereal.email",
      pass: "66WTUcjqnSahjuNvuT",
    },
  });

  let info = await transporter.sendMail({
    from: '"ashisih 👻" <nedra.abernathy@ethereal.email>', // sender address
    to: "askuahwah@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>",
  });

  res.json(info);
};

module.exports = sendemail;
