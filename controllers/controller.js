import nodemailer from "nodemailer";
import expressAsyncHandler from "express-async-handler";
export const welcome = (req, res) => {
  res.send("only for message server");
};
// createList
//sendauto email for password recovery

export const sendemailauto = expressAsyncHandler(async (req, res) => {
  console.log("routereched")
  console.log(req.body.Email);
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {

    to: process.env.EMAIL,
    subject: "Contact From Portofolio Site",
    html: `<div>
    <h1>Portofolio site alert Check</h1>
    ${req.body.Email}
      <p>
      ${req.body.Desc}
      </p>
      
      </div>`,
  };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(404).send("email invalid");
      } else {
        res.status(200).send("email sent" + info.response);
      }
    });
  } catch (error) {
    res.status(404).send("email invalid");
  }
});
