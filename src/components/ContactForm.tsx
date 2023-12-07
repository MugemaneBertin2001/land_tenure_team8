// components/ContactForm.js
"use client"
import { UserIcon, MailIcon, MailOpenIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import IconInput from './IconInput';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData); // For example, you can log the form data
  };

  return (
    <div className="w-full h-auto mx-auto mt-[-4rem] mb-[-4rem] md:bg-transparent text-white  ">
      <div className="max-w-md mx-auto bg-black bg-opacity-30 rounded-lg p-6 shadow-lg border-[2px] border-pink-700">
      <h2 className="text-2xl font-bold mb-4 text-center text-pink-700">Contact Us</h2>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Name
          </label>
          <IconInput icon={UserIcon} placeholder={"John Doe"} />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-bold mb-2">
            Email
          </label>
         <IconInput icon={MailIcon} placeholder={'johndoe@email.com'}/>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-bold mb-2">
            Message
          </label>
          <div className='relative'>
          <textarea
          placeholder='Type your Message here!'
            rows={4}
            required
            className="border rounded w-full py-2 pl-10 pr-4 text-gray-700"
            
          />
          </div>
        
        </div>
        <button
          type="submit"
          //  id='button'
          className= "border border-black  text-white p-4 px-4 font-semibold rounded self-center w-full"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
