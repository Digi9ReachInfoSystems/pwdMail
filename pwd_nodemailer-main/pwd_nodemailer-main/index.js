const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "Info@gully2global.com",
    pass: "Shasudigi@217",
  },
});

function createuser(username, useremail, password) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to PWD Training App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background-color: #ffff;
            padding: 20px;
            text-align: center;
        }
        .header img {
            max-width: 150px;
        }
        .content {
            padding: 30px;
        }
        .content h1 {
            color: #DA8D45;
        }
        .content p {
            line-height: 1.6;
        }
        .content .cta-button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 24px;
            background-color: #DA8D45;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
        }
        .footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <img src="https://media.9curry.com/uploads/organization/image/3319/pwd-karnataka-logo.png" alt="PWD Training App Logo">
        </div>

        <!-- Content -->
        <div class="content">
            <h1>Welcome to PWD Training App</h1>
            <p>Dear <strong>${username}</strong>,</p>
            <p>We are excited to inform you that your account has been successfully created on the PWD Training App. Below are your login details:</p>
            <p><strong>User email:</strong> ${useremail}</p>
            <p><strong>Password:</strong> ${password}</p>
            <p>To ensure that your profile is complete, please log in to your account using the app or the web application and update your details. This is an important step in gaining full access to the PWD Training platform.</p>
            <a href="https://p-w-d-project-uszovs.flutterflow.app/" class="cta-button">Login to Your Account</a>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2024 PWD Training App. All rights reserved.</p>
            <p>If you have any questions, please contact our support team at <a href="mailto:support@pwd.com">support@pwdapp.com</a>.</p>
        </div>
    </div>
</body>
</html>
`;
}

function institute(institutename, instituteemail, institutepassword) {
    return `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to PWD Training App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background-color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .header img {
            max-width: 150px;
        }
        .content {
            padding: 30px;
        }
        .content h1 {
            color: #DA8D45;
        }
        .content p {
            line-height: 1.6;
        }
        .content .cta-button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 24px;
            background-color: #DA8D45;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            text-align: center;
        }
        .footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <img src="https://media.9curry.com/uploads/organization/image/3319/pwd-karnataka-logo.png" alt="PWD Training App Logo">
        </div>

        <!-- Content -->
        <div class="content">
            <h1>Welcome to PWD Training App</h1>
            <p>Dear <strong>${institutename}</strong>,</p>
            <p>Your account has been successfully created on the PWD Training App. Below are your login details:</p>
            <p><strong>Institute email:</strong> ${instituteemail}</p>
            <p><strong>Password:</strong> ${institutepassword}</p>
            <p>Please click the button below to log in and access your account:</p>
            <a href="https://p-w-d-project-uszovs.flutterflow.app/" class="cta-button">Login to Your Account</a>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2024 PWD Training App. All rights reserved.</p>
            <p>If you have any questions, please contact our support team at <a href="mailto:support@pwdapp.com">support@pwdapp.com</a>.</p>
        </div>
    </div>
</body>
</html>
  `;
  }

  function userapprove(username) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Congratulations! Your Account is Approved</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background-color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .header img {
            max-width: 150px;
        }
        .content {
            padding: 30px;
            text-align: center;
        }
        .content h1 {
            color: #28a745; /* Bright green for excitement */
        }
        .content p {
            line-height: 1.6;
            font-size: 16px;
        }
        .content .cta-button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 24px;
            background-color: #28a745;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            font-size: 16px;
        }
        .emoji {
            font-size: 24px;
        }
        .footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <img src="https://media.9curry.com/uploads/organization/image/3319/pwd-karnataka-logo.png" alt="PWD Training App Logo">
        </div>

        <!-- Content -->
        <div class="content">
            <h1>🎉 Congratulations! 🎉</h1>
            <p>Dear <strong>${username}</strong>,</p>
            <p>We're thrilled to inform you that your account has been approved by our admin team! 🎉🎊</p>
            <p>You can now log in to the PWD Training App and access your scheduled training sessions. To get started, click the button below:</p>
            <a href="https://p-w-d-project-uszovs.flutterflow.app/" class="cta-button">Login to Your Account</a>
            <p class="emoji">🎓📅🚀</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2024 PWD Training App. All rights reserved.</p>
            <p>If you have any questions or need assistance, please contact our support team at <a href="mailto:support@pwdapp.com">support@pwdapp.com</a>.</p>
        </div>
    </div>
</body>
</html>
      
  `;
  }

  function userreject(username) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Rejected</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background-color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .header img {
            max-width: 150px;
        }
        .content {
            padding: 30px;
            text-align: center;
        }
        .content h1 {
            color: #dc3545; /* Red for rejection */
        }
        .content p {
            line-height: 1.6;
            font-size: 16px;
        }
        .content .cta-button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 24px;
            background-color: #007bff; /* Blue for the call-to-action */
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            font-size: 16px;
        }
        .emoji {
            font-size: 24px;
        }
        .footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <img src="https://media.9curry.com/uploads/organization/image/3319/pwd-karnataka-logo.png" alt="PWD Training App Logo">
        </div>

        <!-- Content -->
        <div class="content">
            <h1>🚫 Account Rejected 🚫</h1>
            <p>Dear <strong>${username}</strong>,</p>
            <p>We regret to inform you that your account has been rejected by our admin team. 😔</p>
            <p>If you believe this decision was made in error or if you have any questions, please contact our support team.</p>
            <p>The admin will have the opportunity to review and accept your application in the future. Stay tuned for further updates.</p>
            <!--<a href="https://p-w-d-project-uszovs.flutterflow.app/" class="cta-button">Contact Support</a> 
            <p class="emoji">📩🛠️</p>-->
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2024 PWD Training App. All rights reserved.</p>
            <p>If you have any questions or need assistance, please contact our support team at <a href="mailto:support@pwdapp.com">support@pwdapp.com</a>.</p>
        </div>
    </div>
</body>
</html>

    `;
  }

  function trainingcancelrequest(trainingname,username) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Training Cancellation Request</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background-color: #f5f5dc; /* Light beige */
            padding: 20px;
            text-align: center;
            color: #333333;
        }
        .header img {
            max-width: 150px;
        }
        .content {
            padding: 30px;
            text-align: center;
        }
        .content h1 {
            color: #cc9428; /* Golden yellow */
        }
        .content p {
            line-height: 1.6;
            font-size: 16px;
        }
        .footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <img src="https://media.9curry.com/uploads/organization/image/3319/pwd-karnataka-logo.png" alt="PWD Training App Logo">
        </div>

        <!-- Content -->
        <div class="content">
            <h2>📩 Training Cancellation Request 📩</h2>
            <p>Dear Admin,</p>
            <p>A cancellation request has been submitted for the following training session:</p>
            <p><strong>Training Name:</strong>${trainingname}</p>
            <p><strong>User Name:</strong>${username}</p>
            <p>Please review the request and take the necessary action. If you have any questions, contact the user directly or reach out to support.</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2024 PWD Training App. All rights reserved.</p>
            <p>If you need assistance, please contact support at <a href="mailto:support@pwdapp.com">support@pwdapp.com</a>.</p>
        </div>
    </div>
</body>
</html>
    

    `;
  }

  function trainingcomplaint(trainingname,username,description) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Training Complaint</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background-color: #f5f5dc; /* Light beige */
            padding: 20px;
            text-align: center;
            color: #333333;
        }
        .header img {
            max-width: 150px;
        }
        .content {
            padding: 30px;
            text-align: center;
        }
        .content h2 {
            color: #cc9428; /* Golden yellow */
        }
        .content p {
            line-height: 1.6;
            font-size: 16px;
        }
        .footer {
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <img src="https://media.9curry.com/uploads/organization/image/3319/pwd-karnataka-logo.png" alt="PWD Training App Logo">
        </div>

        <!-- Content -->
        <div class="content">
            <h2>📩 Training Complaint Received 📩</h2>
            <p>Dear Admin,</p>
            <p>A complaint has been submitted regarding the following training session:</p>
            <p><strong>Training Name:</strong>${trainingname}</p>
            <p><strong>User Name:</strong>${username}</p>
            <p><strong>About:</strong>${description}</p>
            <p>Please review the complaint and take the necessary action. If you have any questions, contact the user directly or reach out to support.</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2024 PWD Training App. All rights reserved.</p>
            <p>If you need assistance, please contact support at <a href="mailto:support@pwdapp.com">support@pwdapp.com</a>.</p>
        </div>
    </div>
</body>
</html>

    `;
  }

  function trainingsession(institutename,trainingname,trainingdescription,startdate,enddate,
    trainingtimings,numberofstudents,traininglocation ) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Training Session Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #e0f7fa;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background-color: #f0f0f0;
            padding: 20px;
            text-align: center;
            color: #ffffff;
        }
        .header img {
            max-width: 120px;
        }
        .content {
            padding: 30px;
            text-align: left;
        }
        .content h1 {
            color: #00796b;
            font-size: 24px;
            margin-bottom: 20px;
        }
        .content p {
            font-size: 16px;
            line-height: 1.6;
            margin: 10px 0;
        }
        .content .info {
            margin-top: 20px;
            border: 1px solid #00796b;
            padding: 15px;
            border-radius: 4px;
            background-color: #e0f2f1;
        }
        .content .info p {
            margin: 5px 0;
        }
        .footer {
            background-color: #00796b;
            color: #ffffff;
            text-align: center;
            padding: 20px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <img src="https://media.9curry.com/uploads/organization/image/3319/pwd-karnataka-logo.png" alt="PWD Training App Logo">
        </div>

        <!-- Content -->
        <div class="content">
            <h1>📚 Training Session Details 📚</h1>
            <p>Dear ${institutename},</p>
            <p>We are pleased to provide you with the details of the upcoming training session. Below are the specifics:</p>

            <div class="info">
                <p><strong>Training Name:</strong>${trainingname}</p>
                <p><strong>Description:</strong>${trainingdescription}</p>
                <p><strong>From:</strong>${startdate} <strong>To:</strong>${enddate}</p>
                <p><strong>Timings:</strong>${trainingtimings}</p>
                <p><strong>Number of Students:</strong>${numberofstudents}</p>
                <p><strong>Location:</strong>${traininglocation}</p>
            </div>

            <p>If you have any questions or need further information, please feel free to reach out to us.</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>© 2024 PWD Training App. All rights reserved.</p>
            <p>If you have any questions or need assistance, please contact our support team at <a href="mailto:support@pwdapp.com" style="color: #ffffff; text-decoration: none;">support@pwdapp.com</a>.</p>
        </div>
    </div>
</body>
</html>

    `;
  }



  

// POST endpoint to send email
app.post("/send-pwdemail", async (req, res) => {
  const { email, username, useremail, password } = req.body;

  if (!email || !username || !useremail || !password) {
    return res
      .status(400)
      .send({ error: "email, username, useremail, and password parameters are required" });
  }

  const htmlContent = createuser(username, useremail, password);

  try {
    let info = await transporter.sendMail({
      from: "Info@gully2global.com", // Sender address
      to: email, // List of receivers
      subject: "Account creation", // Subject line
      html: htmlContent, // HTML body content
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ error: "Failed to send email" });
  }
});

app.post("/send-instituteemail", async (req, res) => {
    const { email,institutename,instituteemail,institutepassword } = req.body;
  
    if (!email || 
        !institutename ||
         !instituteemail|| 
         !institutepassword) {
      return res
        .status(400)
        .send({ error: "email, institutename, instituteemail, and institutepassword parameters are required" });
    }
  
    const htmlContent = institute(institutename, instituteemail, institutepassword);
  
    try {
      let info = await transporter.sendMail({
        from: "Info@gully2global.com", // Sender address
        to: email, // List of receivers
        subject: "Institute Account created", // Subject line
        html: htmlContent, // HTML body content
      });
  
      console.log("Message sent: %s", info.messageId);
      res.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ error: "Failed to send email" });
    }
  });

  app.post("/user-approve", async (req, res) => {
    const { email,username} = req.body;
  
    if (!email || 
        !username) {
      return res
        .status(400)
        .send({ error: "email,and password parameters are required" });
    }
  
    const htmlContent = userapprove(username);
  
    try {
      let info = await transporter.sendMail({
        from: "Info@gully2global.com", // Sender address
        to: email, // List of receivers
        subject: "Account Approved", // Subject line
        html: htmlContent, // HTML body content
      });
  
      console.log("Message sent: %s", info.messageId);
      res.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ error: "Failed to send email" });
    }
  });

  app.post("/user-reject", async (req, res) => {
    const { email,username} = req.body;
  
    if (!email || 
        !username) {
      return res
        .status(400)
        .send({ error: "email,and username parameters are required" });
    }
  
    const htmlContent = userreject(username);
  
    try {
      let info = await transporter.sendMail({
        from: "Info@gully2global.com", // Sender address
        to: email, // List of receivers
        subject: "Account Rejected", // Subject line
        html: htmlContent, // HTML body content
      });
  
      console.log("Message sent: %s", info.messageId);
      res.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ error: "Failed to send email" });
    }
  });

  app.post("/training-cancel", async (req, res) => {
    const { email,trainingname,username} = req.body;
  
    if (!email || 
        !trainingname||
        !username) {
      return res
        .status(400)
        .send({ error: "email,trainingname and username parameters are required" });
    }
  
    const htmlContent = trainingcancelrequest(trainingname,username);
  
    try {
      let info = await transporter.sendMail({
        from: "Info@gully2global.com", // Sender address
        to: email, // List of receivers
        subject: "Training Cancellation Request", // Subject line
        html: htmlContent, // HTML body content
      });
  
      console.log("Message sent: %s", info.messageId);
      res.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ error: "Failed to send email" });
    }
  });

  app.post("/complaint", async (req, res) => {
    const { email,trainingname,username,description} = req.body;
  
    if (!email || 
        !trainingname||
        !username||
        !description) {
      return res
        .status(400)
        .send({ error: "email,trainingname and username parameters are required" });
    }
  
    const htmlContent = trainingcomplaint(trainingname,username,description);
  
    try {
      let info = await transporter.sendMail({
        from: "Info@gully2global.com", // Sender address
        to: email, // List of receivers
        subject: "Complaint", // Subject line
        html: htmlContent, // HTML body content
      });
  
      console.log("Message sent: %s", info.messageId);
      res.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ error: "Failed to send email" });
    }
  });
  app.post("/training-session", async (req, res) => {
    const { email,institutename,trainingname,trainingdescription,startdate,enddate,
        trainingtimings,numberofstudents,traininglocation} = req.body;
  
    if (!email || 
        !institutename||
        !trainingname||
        !trainingdescription||
        !startdate||
        !enddate||
        !trainingtimings||
        !numberofstudents||
        !traininglocation
         ) {
      return res
        .status(400)
        .send({ error: "email,trainingname and username parameters are required" });
    }
  
    const htmlContent = trainingsession(institutename,trainingname,trainingdescription,startdate,enddate,
        trainingtimings,numberofstudents,traininglocation );
  
    try {
      let info = await transporter.sendMail({
        from: "Info@gully2global.com", // Sender address
        to: email, // List of receivers
        subject: "Training session details", // Subject line
        html: htmlContent, // HTML body content
      });
  
      console.log("Message sent: %s", info.messageId);
      res.status(200).send({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ error: "Failed to send email" });
    }
  });

// Start the server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
