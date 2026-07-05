import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitted(false);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      console.warn("Web3Forms access key is not set. Falling back to local logging.");
      console.log('Form submission (no API key):', formState);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 5000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: 'New Portfolio Contact Form Submission',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitError('Failed to send message. Please check your network connection.');
      console.error('Contact submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        {/* Left side: contact information info */}
        <div className="contact-info">
          <h3 className="info-title">Let's Create Something Great</h3>
          <p className="info-description">
            I am always open to discussing new projects, creative opportunities, or partnerships. Drop me a line or send an email directly, and let's bring your ideas to life.
          </p>

          <div className="info-details">
            <div className="info-item">
              <div className="info-icon-wrapper">
                <Mail size={18} />
              </div>
              <div className="info-text">
                <span className="info-label">Email</span>
                <a href="mailto:saurashp@gmail.com" className="info-value">saurashp@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <Phone size={18} />
              </div>
              <div className="info-text">
                <span className="info-label">Phone</span>
                <a href="tel:+918002309248" className="info-value">+91 8002309248</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-wrapper">
                <MapPin size={18} />
              </div>
              <div className="info-text">
                <span className="info-label">Location</span>
                <span className="info-value">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: actual contact form */}
        <div className="contact-form-wrapper glass-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
                rows={5}
                className="form-input form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="btn-neon btn-neon-cyan submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'} <Send size={16} />
            </button>
          </form>
          {submitted && (
            <div className="form-status status-success">
              ✓ Message sent successfully! I will get back to you soon.
            </div>
          )}
          {submitError && (
            <div className="form-status status-error">
              ✗ {submitError}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
