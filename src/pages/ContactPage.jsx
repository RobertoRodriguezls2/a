import React from 'react';
import { useRef } from 'react';
import Topmenu from '../components/Topmenu'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';





const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully',
                width: '25%'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'oops, something went wrong. Contact me at robertorodriguezls26.0@gmail.com',
                text: error.text,
                width: '25%'
            })
        });
    e.target.reset()
};

const test = (e) => {
    e.preventDefault();
    console.log(e.target)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully',
                width: '25%'
            })
        });
    e.target.reset()
};



function ContactPage() {
    const form = useRef();
    return (
        <>
            <Topmenu />
            <div class="p-10 w-full md:w-96 md:max-w-full mx-auto">
                <div class="p-6 border border-gray-300 sm:rounded-md">
                    <form ref={form}  onSubmit={handleOnSubmit} className="contact-form">
                        <label class="block mb-6" for="name">
                            <span class="text-gray-100">Your name</span>
                            <input
                                id='name'
                                type="name"
                                name="sender"
                                class="
                                form-control
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            text-black
          "
                                placeholder="John Doe"
                            />
                        </label>
                        <label class="block mb-6" for="email">
                            <span class="text-gray-100">Email address</span>
                            <input
                                id='email'
                                type="email"
                                name="from_name"
                                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            text-black
          "
                                placeholder="johndoe@example.com"
                                required
                            />
                        </label>
                        <label class="block mb-6" for="subject">
                            <span class="text-gray-100">Subject</span>
                            <input
                                id='subject'
                                type="subject"
                                name="subject_title"
                                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            text-black
          "
                                placeholder="Title"
                                required
                            />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-100">Message</span>
                            <textarea
                                id='email_body'
                                name="message"
                                class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
            text-black
          "
                                rows="3"
                                placeholder="Tell us what you're thinking about..."
                            ></textarea>
                        </label>
                        <div class="mb-6">
                            <button
                                type="submit"
                                class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                            >
                                Contact Me
                            </button>

                        </div>
                    </form>
                    
                </div>
            </div>
           
        </>

    )
}

export default ContactPage