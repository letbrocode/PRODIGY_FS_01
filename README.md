# 🔐 Mern Auth

A full-featured MERN authentication system with email verification, password reset, route protection, and a responsive frontend dashboard.

Demo: https://simple-mern-auth-84un.onrender.com/login

## 🚀 Features

- User signup/login with JWT  
- Gmail-based email verification flow (via OAuth2)  
- Forgot/reset password support  
- Protected dashboard routes  
- Fullstack MERN setup  
- Fully deployed on Render 


## 📦 Tech Stack

- **Frontend**: React, Tailwind CSS, Axios  
- **Backend**: Node.js, Express, JWT, bcryptjs  
- **Database**: MongoDB (Mongoose)  
- **Email Service**: Gmail SMTP with OAuth2 (Nodemailer + Google APIs)  
- **Deployment**: Render.com

## 📧 Email Service (Gmail SMTP via OAuth2)

We use **Gmail SMTP with OAuth2** for sending all transactional emails including:

- ✉️ Account Verification  
- 🙌 Welcome Email  
- 🔁 Password Reset  
- ✅ Reset Confirmation

### 🔐 How It Works

- **Nodemailer** uses Gmail's SMTP endpoint  
- Authenticated using **OAuth2 credentials**  
- Secure and avoids app password usage  
- Requires a **Google Cloud project** with Gmail API enabled

## 🛠️ Setup

1. Clone the repo and install dependencies:

```bash
git clone 
```
2. Setup .env file

```bash
# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# MongoDB Database
MONGO_URI=your_mongodb_connection_string

# JWT Secret Key
JWT_SECRET=your_jwt_secret

# Gmail SMTP (OAuth2) Config for Nodemailer
# Get these from Google Cloud Console + OAuth Playground
MAIL_CLIENT_ID=your_google_oauth_client_id
MAIL_CLIENT_SECRET=your_google_oauth_client_secret
MAIL_REDIRECT_URI=https://developers.google.com/oauthplayground
MAIL_REFRESH_TOKEN=your_generated_refresh_token

# Email Details
MAIL_SENDER=your_verified_gmail@gmail.com     # Used as "from" in emails
MAIL_USER=your_verified_gmail@gmail.com       # Same as above (can be optional)

```

3. Run this app locally

```shell
npm run build
```

4. Start the app

```shell
npm run start
```











