import React from "react";
import emailjs from 'emailjs-com';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jd1hfxr', 'template_1soq30a', e.target, 'F1t6wzZHNWALWRlqi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
}

const Contact = () => {
    return (
        <>
        <div name='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form onSubmit={sendEmail} className="flex flex-col mt-4 max-w-[600px] w-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-300 text-[#416D19]">Contact</p>
                    <p className="text-gray-300 py-4">/ Submit the form below or send me an email - abdtariq78@gmail.com /</p>
                </div>
                <input className='bg-[#ccd6f6] p-2 placeholder-black' type="text" placeholder="Name" name="name" />
                <input className='my-4 p-2 bg-[#ccd6f6] placeholder-black' type="text" placeholder="Email" name="email" />
                <textarea className='bg-[#ccd6f6] p-2 placeholder-black' name="message" rows="10" placeholder="Message"></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Send</button>
            </form>
        </div>
        <div className="w-full bg-[#0a192f] flex justify-center items-center">
            <span className="font-bold text-2xl text-[#416D19]">
                / Thank you for visiting my portfolio. I hope you liked it. /
            </span>
        </div>
    </>
    );
    };

export default Contact;
