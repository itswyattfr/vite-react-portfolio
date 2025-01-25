import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-8">
        <div className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-lg border border-dark-600/50 max-w-md w-full text-center">
          <h2 className="text-2xl text-white tracking-wide mb-4">Message Sent</h2>
          <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-8 py-16">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 bg-dark-800/50 backdrop-blur-sm border border-dark-600/50 text-white focus:border-white/30 rounded transition-colors duration-300"
              placeholder="Name"
            />
          </div>
          
          <div>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-dark-800/50 backdrop-blur-sm border border-dark-600/50 text-white focus:border-white/30 rounded transition-colors duration-300"
              placeholder="Email"
            />
          </div>
        </div>
        
        <div>
          <textarea
            id="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-dark-800/50 backdrop-blur-sm border border-dark-600/50 text-white focus:border-white/30 rounded transition-colors duration-300 resize-none"
            placeholder="Message"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3 bg-dark-800/50 backdrop-blur-sm border border-dark-600/50 hover:border-white/30 text-gray-300 hover:text-white rounded flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="tracking-wider">Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span className="tracking-wider">Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;