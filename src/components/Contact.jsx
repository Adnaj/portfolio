import React from 'react';

const Contact = () => {
  return (
    <div
      id="contact"
      name="contact"
      className="w-full h-screen bg-[#0d1224] flex justify-center items-center p-4"
    >
      <form
        action="mailto:adnajmuhammed@gmail.com"
        method="POST"
        encType="text/plain"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl text-white font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className="text-[#e5e7eb] py-4">
            Send me an email directly.
          </p>
        </div>

        <input
          className="bg-[#10172d] text-white w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-0 transition-all duration-300 p-2"
          type="text"
          placeholder="Name"
          name="Name"
          required
        />

        <input
          className="bg-[#10172d] text-white w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-0 transition-all duration-300 my-4 p-2"
          type="email"
          placeholder="Email"
          name="Email"
          required
        />

        <input
          className="bg-[#10172d] mb-4 text-white w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-0 transition-all duration-300 p-2"
          type="tel"
          placeholder="Phone Number"
          name="Phone"
        />

        <textarea
          className="bg-[#10172d] text-white w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-0 transition-all duration-300 p-2"
          name="Message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>

        <button
          type="submit"
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;