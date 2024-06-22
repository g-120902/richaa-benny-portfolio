'use client'

import { useState } from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";

export default function Portfolio(): JSX.Element {
    const [isSelected, setIsSelected] = useState("Unreal Engine");

    const handleButton = (btnType: string) => {
        setIsSelected(btnType)
    };

    return (
        <>
            <section className="h-fit w-screen overflow-hidden bg-gray-100">
                <div className="flex flex-col items-center py-20 w-full h-full">

                    <div className="flex flex-col items-center gap-4 w-fit">
                        <p className="uppercase text-3xl">Portfolio</p>
                        <span className="h-1 bg-red-800 w-1/6" />
                    </div >
                    <div className="flex p-10 justify-center gap-3">
                        <div onClick={() => handleButton("3D")}
                            className={`py-1 text-gray-700 px-4 cursor-pointer w-fit h-fit bg-white hover:text-red-800 hover:border-b-2 hover:border-red-800${isSelected == "3D" ? 'text-red-800 bg-slate-300 border-b-2 border-red-800' : ''}`}>
                            3D
                        </div>
                        <div onClick={() => handleButton("Unreal Engine")}
                            className={`py-1 text-gray-700 px-4 cursor-pointer w-fit h-fit bg-white hover:text-red-800  hover:border-b-2 hover:border-red-800${isSelected == "Unreal Engine" ? 'text-red-800 bg-slate-300 border-b-2 border-red-800' : ''}`}>
                            Unreal Engine
                        </div>
                        <div onClick={() => handleButton("Motion Graphics")}
                            className={`py-1 text-gray-700 px-4 cursor-pointer w-fit h-fit bg-white hover:text-red-800  hover:border-b-2 hover:border-red-800${isSelected == "Motion Graphics" ? 'text-red-800 bg-slate-300 border-b-2 border-red-800' : ''}`}>
                            Motion Graphics
                        </div>
                        <div onClick={() => handleButton("Cinematography")}
                            className={`py-1 text-gray-700 px-4 cursor-pointer w-fit h-fit bg-white hover:text-red-800  hover:border-b-2 hover:border-red-800${isSelected == "Cinematography" ? 'text-red-800 bg-slate-300 border-b-2 border-red-800' : ''}`}>
                            Cinematography
                        </div>
                    </div>
                    <section className="h-fit">
                        <div className={`flex md:flex-row flex-col gap-4 justify-center w-full ${isSelected == "3D" ? `` : `hidden`}`}>
                            <div className="md:w-1/3 w-screen">
                                <Splide>
                                    <SplideSlide>
                                        <Image src="/assets/images/3D/3D character/Yennefer1.jpg" alt="Image 1" width={1000} height={400} />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <Image src="/assets/images/3D/3D character/Yennefer2.jpg" alt="Image 1" width={1000} height={400} />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <Image src="/assets/images/3D/3D character/Yennefer3.jpg" alt="Image 1" width={1000} height={400} />
                                    </SplideSlide>
                                </Splide>
                            </div>
                            <div className="md:w-1/3 w-screen">

                                <Splide>
                                    <SplideSlide>
                                        <Image src="/assets/images/3D/Bridge/First picture.jpg" alt="Image 1" width={1000} height={400} />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <Image src="/assets/images/3D/Bridge/second picture.jpg" alt="Image 1" width={1000} height={400} />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <Image src="/assets/images/3D/Bridge/Third picture.jpg" alt="Image 1" width={1000} height={400} />
                                    </SplideSlide>
                                </Splide>
                            </div>

                            <div className="md:w-1/3 w-screen">

                                <Splide>
                                    <SplideSlide>
                                        <Image src="/assets/images/3D/Temple/temple.jpg" alt="Image 1" width={1000} height={400} />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <Image src="/assets/images/3D/Temple/2.jpg" alt="Image 1" width={1000} height={400} />
                                    </SplideSlide>
                                    <SplideSlide>
                                        <Image src="/assets/images/3D/Temple/3.jpg" alt="Image 1" width={1000} height={400} />
                                    </SplideSlide>
                                </Splide>
                            </div>
                        </div>
                        <div className={`flex md:flex-row flex-col gap-4 justify-center w-full ${isSelected == "Motion Graphics" ? `` : `hidden`}`}>
                            <div className="md:w-1/3 w-screen">
                                <video className="inset-0 h-full w-full" controls>
                                    <source src="/assets/videos/motion graphics/20 years from now.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="md:w-1/3 w-screen">
                                <video className="inset-0 h-full w-full" controls>
                                    <source src="/assets/videos/motion graphics/Harry Potter.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="md:w-1/3 w-screen">
                                <video className="inset-0 h-full w-full" controls>
                                    <source src="/assets/videos/motion graphics/Imaginary Animal.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="md:w-1/3 w-screen">
                                <video className="inset-0 h-full w-full" controls>
                                    <source src="/assets/videos/motion graphics/Introduction scene.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className={`flex md:flex-row flex-col gap-4 justify-center w-screen ${isSelected == "Unreal Engine" ? `` : `hidden`}`}>
                            <div className="md:w-1/2 w-screen">
                                <iframe
                                    width="100%"
                                    height="600"
                                    src="https://www.youtube.com/embed/dhNYhtuw0Xc"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                            <div className="md:w-1/2 w-screen">
                                <iframe
                                    width="100%"
                                    height="600"
                                    src="https://www.youtube.com/embed/XzRTMBHSh_U"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className={`flex md:flex-row flex-col gap-4 justify-center w-screen ${isSelected == "Cinematography" ? `` : `hidden`}`}>
                            <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/xjUTLDXqJ50"
                                title="YouTube video player"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                    </section>

                </div >
            </section >
        </>
    );
}
