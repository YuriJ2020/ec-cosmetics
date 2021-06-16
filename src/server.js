const express = require("express");
const request = require("request");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {
  const { email } = req.body;
  console.log("Express Response Body:", req.body);
  console.log(req.body);

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
      },
    ],
  };

  const postData = JSON.stringify(data);
  console.log("MailChimp Post Data:", data);

  const options = {
    url: "https://us1.api.mailchimp.com/3.0/lists/8c55884915",
    method: "POST",
    headers: {
      Authorization: "auth ec437e22f7fe6503675a4a1669da7223-us1",
    },
    body: postData,
  };
  request(options, (err, _, body) => {
    console.log("MailChimp Error:", err);
    console.log("MailChimp Body:", body);
  });
  res.status(200).json({});
});

const PORT = 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));
