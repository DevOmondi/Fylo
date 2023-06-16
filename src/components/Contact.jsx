// import React from 'react'

const Contact = () => {
  return (
    <div className="text-center text-white mt-[10em] mx-11 bg-[#1B2330] p-6 rounded-md">
      <h1 className="text-lg font-bold mb-3">Get early access today</h1>
      <p className="text-xs">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="mt-8">
        <input
          type="email"
          className="py-[0.6em] mx-auto w-[100%]  rounded-full text-center"
          placeholder="email@example.com"
        />
        <button className="text-white bg-gradient-to-r from-primary to-secondary py-[0.6em] px-[3em] rounded-full mt-5 mx-auto">
          Get Started For Free
        </button>
      </div>
    </div>
  );
};

export default Contact;
