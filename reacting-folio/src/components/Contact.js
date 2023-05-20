import React from "react";

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen Pastel bg-gradient-to-tl gradient-to-bl from-blue-400 to-emerald-400 flex justify-center items-center p-4">
            <form method="POST"action="https://getform.io/f/11c5f68d-c96a-495c-ae1c-b1a6b8351a1a" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-white text-white">Contact</p>
                    <p className="text-white py-4">I would love to hear from you. You can reach me by filling out the form below.</p>
                </div>
                <input className="my-4 p-2" type="text" placeholder="Name" name="name"></input>
                <input className="my-4 p-2" type="email" placeholder="Email" name="email"></input>
                <textarea className="my-4 p-2" name="message" rows="10" placeholder="Your message here"></textarea>
                <button className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-blue-400">Say Hi</button>
            </form>
        </div>
    )
}




export default Contact 
