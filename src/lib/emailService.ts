import emailjs from 'emailjs-com';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<void> => {
  // EmailJS configuration
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    // Fallback to mailto if EmailJS is not configured
    const subject = encodeURIComponent('Portfolio Contact Form');
    const body = encodeURIComponent(`
      Name: ${formData.name}
      Email: ${formData.email}
      
      Message:
      ${formData.message}
    `);
    
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    return;
  }

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Portfolio Owner'
      },
      publicKey
    );
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};