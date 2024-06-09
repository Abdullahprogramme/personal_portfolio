import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();

        const isNameValid = !!e.target.name.value;
        const isEmailValid = !!e.target.email.value;
        const isMessageValid = !!e.target.message.value;

        setNameValid(isNameValid);
        setEmailValid(isEmailValid);
        setMessageValid(isMessageValid);

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            setTimeout(() => {
                setNameValid(true);
                setEmailValid(true);
                setMessageValid(true);
            }, 3000);
            return;
        }

        emailjs.sendForm('service_jd1hfxr', 'template_1soq30a', e.target, 'F1t6wzZHNWALWRlqi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
            <div name='contact' className="w-full min-h-screen bg-[#0a192f] grid grid-flow-row auto-rows-min justify-center items-center p-4 pt-10">
                <form onSubmit={sendEmail} className="flex flex-col mt-10 max-w-[600px] w-full">
                    <div>
                        <p className="text-4xl font-bold inline border-b-4 border-pink-300 text-[#416D19]">Contact</p>
                        <p className="text-gray-300 py-4">/ Submit the form below or send me an email - abdtariq78@gmail.com /</p>
                    </div>
                    <input className={`bg-[#ccd6f6] p-2 placeholder-black ${!nameValid ? 'border-red-500 border-2' : ''}`} type="text" placeholder="Name" name="name" />
                    <input className={`my-4 p-2 bg-[#ccd6f6] placeholder-black ${!emailValid ? 'border-red-500 border-2' : ''}`} type="text" placeholder="Email" name="email" />
                    <textarea className={`bg-[#ccd6f6] p-2 placeholder-black ${!messageValid ? 'border-red-500 border-2' : ''}`} name="message" placeholder="Message" style={{ resize: 'vertical', maxHeight: '250px', minHeight: '100px' }}></textarea>
                    <button className="text-white border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center">Send</button>
                </form>
                <p className="font-bold text-2xl text-[#416D19] hover:text-pink-500">
                    / Thank you for visiting my portfolio. I hope you liked it. /
                </p>
            </div>
    );
};

export default Contact;
