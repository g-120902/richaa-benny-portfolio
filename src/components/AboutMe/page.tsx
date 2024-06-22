import Image from "next/image";
import { UserIcon, ComputerDesktopIcon, CpuChipIcon, MapPinIcon } from "@heroicons/react/24/outline";
import IconWithText from "../common/IconWithText";

export default function AboutMe(): JSX.Element {

    return (
        <>
            <section className="h-fit w-screen overflow-hidden">
                <div className="flex flex-col items-center py-20 w-full h-full">
                    <div className="flex flex-col items-center gap-1 w-fit">
                        <p className="uppercase text-sm">Get to know me</p>
                        <span className="h-0.5 bg-red-800 w-1/6" />
                        <Image  alt="pfp" src={"/assets/images/pfp.jpeg"} width={120} height={120} className="m-3 rounded-full w-40 h-40 border-gray-200 border-spacing-0.5 border-2" />
                    </div>
                    <div className="flex h-full py-10 md:w-4/6  gap-20 md:flex-row flex-col md:items-start justify-center">
                        <IconWithText
                            text="I'm Richaa Benny and I'm a generalist vfx artist"
                            title="Who am I ?"
                            icon={<UserIcon className="h-10 w-10 text-red-800" />}
                        />
                        <IconWithText
                            text="I have a background in 3D modelling, cinematography and post production"
                            title="What do I do ?"
                            icon={<ComputerDesktopIcon className="h-10 w-10 text-red-800" />}
                        />
                        <IconWithText
                            text="Using sodtwares such as Autodesk Maya, Unreal Engine, After Effects, Adobe Premier Pro"
                            title="How do I do it ?"
                            icon={<CpuChipIcon className="h-10 w-10 text-red-800" />}
                        />
                        <IconWithText
                            text="From Mauritius, a small island in the Indian Ocean"
                            title="Where I am based"
                            icon={<MapPinIcon className="h-10 w-10 text-red-800" />}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
