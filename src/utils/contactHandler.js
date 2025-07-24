import emailjs from '@emailjs/browser';

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
};

emailjs.init(EMAILJS_CONFIG.publicKey);

async function contactHandler(formData) {
  const { name, email, message } = formData;

  console.log(EMAILJS_CONFIG)
  try {
    const templateData = {
      name: name,
      email: email,
      message: message,
      timestamp: new Date().toLocaleString(),
    };

    // Send notification email to yourself
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      templateData
    );

    // Send auto-reply to the contact
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.autoReplyTemplateId,
      templateData
    );

    return {
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    };

  } catch (error) {
    console.error('Email sending failed:', error);

    return {
      success: false,
      message: 'There was an error sending your message. Please try again later.'
    };
  }

}

export default contactHandler;