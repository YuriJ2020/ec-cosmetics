const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Bodyparser Middleware
// app.use(express.urlencoded({ extended: true }));

// Static Folder
// app.use(express.static(path.join(__dirname, "public")));

// Signup Route
app.post("/signup", (req, res) => {
  const { email } = req.body;
  console.log("Express Response Body:", req.body);
  console.log(req.body);

  // Make sure fields are filled
  // if (!firstName || !lastName || !email) {
  //   res.redirect("/fail.html");
  // }

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        // merge_fields: {
        //   FNAME: firstName,
        //   LNAME: lastName,
        // },
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
  request(options, (err, response, body) => {
    console.log("MailChimp Error:", err);
    // console.log("response:", response);
    console.log("MailChimp Body:", body);
    // if (err) {
    //   res.redirect("/fail.html");
    // } else {
    //   if (response.statusCode === 200) {
    //     res.redirect("/success.html");
    //   } else {
    //     res.redirect("/fail.html");
    //   }
    // }
  });
  res.status(200).json({});
});

const PORT = 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));
