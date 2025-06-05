import React, { useEffect } from 'react';

const WaitlistForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="waitlist" className="section bg-primary-600 dark:bg-primary-900">
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to stop missing what matters?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join our waitlist today and get early access when we launch.
          </p>

          <div
  id="getWaitlistContainer"
  data-waitlist_id="29105"
  data-widget_type="WIDGET_1"
  className="bg-white p-6 rounded-xl shadow-lg mx-auto max-w-md"
/>

        </div>
      </div>

      <link
        rel="stylesheet"
        type="text/css"
        href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
      />
    </section>
  );
};

export default WaitlistForm;
