import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { getTransporter } from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const transporter = await getTransporter();
  try {
    const response = await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: email,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    });
    console.log("Email send successfully!", response);
  } catch (error) {
    console.log(`Error sending verification`, error);
    throw new Error(`Error sending verification email ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const transporter = await getTransporter();
  try {
    const response = await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: email,
      subject: "Welcome email",
      html: WELCOME_EMAIL_TEMPLATE.replace("{userName}", name),
    });
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error("Error sending welcome email", error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetUrl) => {
  const transporter = await getTransporter();
  try {
    const response = await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: email,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
    });

    console.log("Password reset email sent successfully", response);
  } catch (error) {
    console.error(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email, ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const transporter = await getTransporter();
  try {
    const response = await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: email,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log("Reset success email sent successfully", response);
  } catch (error) {
    console.error(`Error sending password reset success email`, error);

    throw new Error(`Error sending password reset success email: ${error}`);
  }
};
