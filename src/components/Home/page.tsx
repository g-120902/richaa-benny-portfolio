import Image from 'next/image';
import React from 'react';

export default function Home(): JSX.Element {
    return (
        <>
            <section className="relative h-screen w-screen overflow-hidden">
                <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop>
                    <source src="/assets/videos/home.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="relative z-10 w-full text-center text-white font-primary">
                    <div className="absolute flex w-full justify-start h-fit p-20">
                            <Image className="h-40 w-fit rounded-lg" src="/assets/images/logos/logo.jpg" alt="logo" width={1621} height={2013} />

                        <div className='flex flex-col items-start'>
                            <p className='text-6xl'>Richaa</p>
                            <p className='text-6xl'>Benny</p>
                            <p className='text-3xl font-bold'>vfx & motion graphics</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
