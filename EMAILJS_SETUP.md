# EmailJS Setup Guide

To connect the contact form to your professional email (info@rudren.com), follow these steps:

## 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

## 2. Add Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the authentication steps
- Copy the **Service ID**

## 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```
Subject: New Enquiry from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Service Required: {{service}}

Message:
{{message}}
```

- Copy the **Template ID**

## 4. Get Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key**

## 5. Configure Environment Variables
Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Form
- Fill out the contact form on your website
- Submit it
- Check your inbox at info@rudren.com

**Note:** The `.env` file is gitignored for security. Never commit it to version control.