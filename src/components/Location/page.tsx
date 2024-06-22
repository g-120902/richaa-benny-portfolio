import { MapIcon, EnvelopeOpenIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import IconWithText from "../common/IconWithText";
import ContactForm from "./ContactForm";


export default function Location(): JSX.Element {

    return (
        <>
            <section className="h-fit w-screen overflow-hidden">
                <div className="flex h-full w-full md:flex-row flex-col-reverse">
                    <div className="md:w-1/2 w-screen flex flex-col">
                        <div className="w-full flex justify-center md:gap-40  gap-8 items-center py-10 top-0">
                            <IconWithText text="Mauritius" title="Location" icon={<MapIcon className="h-10 w-10 text-red-800" />} />
                            <IconWithText text="bennyrichaa17@gmail.com" title="Email" icon={<EnvelopeOpenIcon className="h-10 w-10 text-red-800" />} />
                            <IconWithText text="loupe1217" title="Discord" icon={<ChatBubbleOvalLeftEllipsisIcon className="h-10 w-10 text-red-800" />} />
                        </div>
                        <ContactForm />
                    </div>

                    <iframe
                        className="w-screen h-screen md:w-screen border-0 md:h-150"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991141.0330247742!2d57.761861134416904!3d-20.758639335325174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5933dc9be269%3A0xb6dc7013aacfdda7!2sMauritius%20Island!5e0!3m2!1sen!2smu!4v1719049606842!5m2!1sen!2smu"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </>
    );
}
