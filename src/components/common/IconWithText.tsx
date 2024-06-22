'use client'
import { FC, ReactNode } from 'react';

interface IconWithTextProps {
    icon: ReactNode;
    text: string;
    title: string;
}

const IconWithText: FC<IconWithTextProps> = ({ icon, text, title }) => {
    return (
        <div className='flex flex-col items-center gap-2 w-48 text-center'>
            <p>{icon}</p>
            <p className='text-black md:text-lg text-sm'>{title}</p>
            <p className='text-black md:text-base text-xs'>{text}</p>

        </div>
    );
}

export default IconWithText;
