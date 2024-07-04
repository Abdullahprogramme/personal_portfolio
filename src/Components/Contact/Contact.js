// import React, { useState } from "react";
// import emailjs from 'emailjs-com';
// import { FiUser, FiMail, FiSend } from 'react-icons/fi';

// const Contact = () => {
//     const [nameValid, setNameValid] = useState(true);
//     const [emailValid, setEmailValid] = useState(true);
//     const [messageValid, setMessageValid] = useState(true);
//     const [isEmailSent, setIsEmailSent] = useState('');

//     const sendEmail = (e) => {
//         e.preventDefault();

//         const isNameValid = !!e.target.name.value;
//         const isEmailValid = !!e.target.email.value;
//         const isMessageValid = !!e.target.message.value;

//         setNameValid(isNameValid);
//         setEmailValid(isEmailValid);
//         setMessageValid(isMessageValid);

//         if (!isNameValid || !isEmailValid || !isMessageValid) {
//             setTimeout(() => {
//                 setNameValid(true);
//                 setEmailValid(true);
//                 setMessageValid(true);
//             }, 3000);
//             return;
//         } else {

//         emailjs.sendForm('service_jd1hfxr', 'template_1soq30a', e.target, 'F1t6wzZHNWALWRlqi')
//             .then((result) => {
//                 setIsEmailSent('Email sent successfully');
//                 setTimeout(() => {
//                     setIsEmailSent('');
//                 } , 5000);
//             }, (error) => {
//                 setIsEmailSent('Email not sent');
//                 setTimeout(() => {
//                     setIsEmailSent('');
//                 } , 5000);
//             });
//         e.target.reset();
//         }
//     }

//     return (
//             <div name='contact' className="w-full min-h-screen bg-[#0a192f] grid grid-flow-row auto-rows-min justify-center items-center p-4 pt-10">
//                 <form onSubmit={sendEmail} className="flex flex-col mt-10 max-w-[600px] w-full">
//                     <div>
//                         <p className="text-4xl font-bold inline border-b-4 border-pink-300 text-[#416D19]">Contact</p>
//                         <p className="text-gray-300 py-4">/ Submit the form below or send me an email - abdtariq78@gmail.com /</p>
//                     </div>
//                     <input className={`bg-[#ccd6f6] p-2 placeholder-black ${!nameValid ? 'border-red-500 border-2' : ''}`} type="text" placeholder="Name" name="name" />
//                     <input className={`my-4 p-2 bg-[#ccd6f6] placeholder-black ${!emailValid ? 'border-red-500 border-2' : ''}`} type="text" placeholder="Email" name="email" />
//                     <textarea className={`bg-[#ccd6f6] p-2 placeholder-black ${!messageValid ? 'border-red-500 border-2' : ''}`} name="message" placeholder="Message" style={{ resize: 'vertical', maxHeight: '250px', minHeight: '100px' }}></textarea>
//                     {isEmailSent && <p className="text-white text-center pt-2">{isEmailSent}</p>}
//                     <button className="text-white border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center">Send</button>
//                 </form>
//                 {/* <p className="font-bold text-2xl text-[#416D19] hover:text-pink-500">
//                     / Thank you for visiting my portfolio. I hope you liked it. /
//                 </p> */}
//             </div>
//     );
// };

// export default Contact;

import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { MdSend } from 'react-icons/md';
import DisplayLottie from "../Lottie/DisplayLottie";
import Shape from "../Lottie/Shape.json";
import NotificationBar from "./NotificationBar";

const Contact = () => {
    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);
    const [isEmailSent, setIsEmailSent] = useState('');
    const [notification, setNotification] = useState({ message: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();

        const isNameValid = !!e.target.name.value;
        const isEmailValid = !!e.target.email.value;
        const isMessageValid = !!e.target.message.value;

        setNameValid(isNameValid);
        setEmailValid(isEmailValid);
        setMessageValid(isMessageValid);

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            setNotification({ message: 'Please fill out all the fields', type: 'error' });
            setTimeout(() => {
                setNameValid(true);
                setEmailValid(true);
                setMessageValid(true);
                setNotification({ message: '', type: '' });
            }, 3000);
            return;
        } else {
            emailjs.sendForm('service_jd1hfxr', 'template_1soq30a', e.target, 'F1t6wzZHNWALWRlqi')
                .then((result) => {
                    setIsEmailSent('Email sent successfully');
                    setNotification({ message: 'Email sent successfully', type: 'success' });
                    setTimeout(() => {
                        setIsEmailSent('');
                        setNotification({ message: '', type: '' });
                    }, 5000);
                }, (error) => {
                    setIsEmailSent('Email not sent');
                    setNotification({ message: 'Email not sent', type: 'error' });
                    setTimeout(() => {
                        setIsEmailSent('');
                        setNotification({ message: '', type: '' });
                    }, 5000);
                });
            e.target.reset();
        }
    };

    return (
        <div name="contact" className="relative h-[1000px] bg-[#0a192f] flex justify-center items-center p-4">
            <form onSubmit={sendEmail} className="w-full max-w-lg" style={{ position: 'relative', zIndex: 2 }}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-center inline border-b-4 border-pink-300 text-[#416D19] mb-4">Contact</h2>
                    <p className="text-white text-center mb-8 py-2">/ Submit the form below or send me an email - abdtariq78@gmail.com /</p>
                </div>
                
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${!nameValid ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="name" type="text" placeholder="Abdullah Tariq" name="name" />
                        {!nameValid && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${!emailValid ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="email" type="email" placeholder="abdtariq78@gmail.com" name="email" />
                        {!emailValid && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea style={{ resize: 'vertical', maxHeight: '250px', minHeight: '50px' }} className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${!messageValid ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="message" placeholder="Your message..." name="message"></textarea>
                        {!messageValid && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                    </div>
                </div>
                {isEmailSent && <div className="text-center py-4">
                    <p className={`text-${isEmailSent === 'Email sent successfully' ? 'green' : 'red'}-500`}>{isEmailSent}</p>
                </div>}
                <div className="flex justify-center">
                    <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex items-center justify-center" type="submit">
                        <MdSend className="mr-2" /> Send
                    </button>
                </div>

                {notification.message && (
                    <NotificationBar
                        message={notification.message}
                        type={notification.type}
                        onClose={() => setNotification({ message: '', type: '' })}
                    />
                )}


            </form>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{zIndex: 1}}>
                <DisplayLottie animationData={Shape} />
            </div>
        </div>
    );
};

export default Contact;