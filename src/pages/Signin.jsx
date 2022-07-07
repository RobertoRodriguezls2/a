import React from 'react'
import Button from '../components/Button'
import './Signin.css'

export default function Signin() {
    return (
        <>
            <div className='container'>
                <div class="card sm:h-[auto] sm:w-[96] w-196 bg-base-100 shadow-xl  bg-carbon/[.25]">
                <form className='form' class="px-10 p-10 ">
                        <label class="block mb-6">
                            <span class="text-gray-100 ">Your name</span>
                            <input
                                type="text"
                                name="name"
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
          "
                                placeholder="John Doe"
                                
                            />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-100">Email address</span>
                            <input
                                name="email"
                                type="email"
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
          "
                                placeholder="johndoe@example.com"
                                required
                                
                            />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-100">Password</span>
                            <input
                                type="password"
                                name="password"
                                id="password"
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
          "
                                htmlFor='password'
                                required
                                
                            />
                        </label>

                        <div className="butn">
                            <Button btnmsg={'Register'}/>
                        </div>
                    </form>
                   
                   
                </div>
            </div>

        </>

    )
}
