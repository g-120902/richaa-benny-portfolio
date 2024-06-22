'use client'

import { FormEvent, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/16/solid";
import LoadingOverlay from "../common/LoadingOverlay";

function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [alert, setAlert] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value

        });
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setDisabled(true);

        try {
            const res = await fetch('/api/contact', {

                method: 'POST',
                body: JSON.stringify(form),
                headers: {
                    'content-type': 'application/json'
                }
            })

            if (res.ok) {
                setDisabled(false);

            } else {
                setAlert(true);
                setDisabled(false);

            }
        } catch (err: any) {
            console.error("Error:", err)
        }
    }; 

    return (
        <>
            <LoadingOverlay disabled={disabled}/>

            <form onSubmit={onSubmit} className="flex flex-col gap-12 items-center">
                    <p className="text-3xl uppercase">say hello</p>
                    <div className="flex w-full gap-8">
                        <input onChange={handleChange} type="text" placeholder="Name" name="name" id="first-name" autoComplete="given-name" className="block w-1/2 rounded-md border-2 border-skin-inverted px-3.5 py-2 text-gray-900 shadow-sm ring-inset  placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                        <input onChange={handleChange} type="email" placeholder="Email" required={true} name="email" id="email" autoComplete="email" className="block w-1/2 rounded-md border-2 border-skin-inverted px-3.5 py-2 text-gray-900 shadow-sm ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                    </div>



                <div className="sm:col-span-2 w-full">
                    <textarea onChange={handleChange} rows={5} name="message" placeholder="Message" required={true} id="message" className="block w-full rounded-md border-2 border-skin-inverted px-3.5 py-2 text-gray-900 shadow-sm ring-inset shadow-skin-inverted placeholder:text-gray-400 sm:text-sm sm:leading-6"></textarea>
                </div>

                <button
                    disabled={disabled} type="submit"
                    className="bg-black text-white w-11/12 py-2">
                    {"Submit"}
                </button>

                <div className={alert ? "flex bg-yellow-100 rounded-lg p-4 text-sm text-yellow-700 w-6/12 self-center mb-20" : "hidden"} role="alert">
                    <div className="flex gap-2">
                        <InformationCircleIcon className="h-6" />
                        <span className="font-medium">Warning alert!</span> Issue connecting to mailing server.
                    </div>
                </div>
            </form>
        </>
    );
}

export default ContactForm;