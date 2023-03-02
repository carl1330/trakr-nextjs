import {FaRegPlusSquare, FaUserAlt} from 'react-icons/fa'
import type React from 'react'
import type { IconType } from 'react-icons';

export default function Navbar() {
    return(
        <div className="fixed w-screen h-14 px-default-paddingx flex flex-row justify-between items-center">
            <div className="font-bold text-xl">
                trakr.
            </div>
            <div className='flex flex-row gap-5'>
                <NavbarButton icon={<FaRegPlusSquare />}/>
                <NavbarButton icon={<FaUserAlt />}/>
            </div>
        </div>
    );
}

const NavbarButton: React.FC<{
    icon: JSX.Element;
    type?: string;
    onClick?: () => void;
}> = (props) => {
    return (
        <button className='hover:bg-[#D4D4D4] p-2 rounded-sm'>
            {props.icon}
        </button>
    )
}
