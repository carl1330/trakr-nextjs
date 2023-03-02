import {FaSignOutAlt, FaUserAlt, FaUserCog} from 'react-icons/fa'
import type React from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import {AddHabitModal} from './TrakrComponents';

export default function Navbar() {
    return(
        <div className="fixed w-screen h-14 px-default-paddingx flex flex-row justify-between items-center">
            <div className="font-bold text-xl">
                trakr.
            </div>
            <div className='flex flex-row'>
                <AddHabitModal />
                <NavbarDropdown />
            </div>
        </div>
    );
}

export const NavbarButton: React.FC<{
    icon: JSX.Element;
    type?: string;
    onClick?: () => void;
}> = (props) => {
    return (
        <button onClick={props.onClick} className='hover:bg-[#D4D4D4] p-2 rounded-sm transition-all mx-2'>
            {props.icon}
        </button>
    )
} 

const NavbarDropdown: React.FC<{

}> = (props) => {
    return (
        <div>
            <Menu as="div" className="fixed">
                <Menu.Button as="div">
                    <NavbarButton icon={<FaUserAlt />} />
                </Menu.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                <Menu.Items as="div" className="relative right-[50%] flex flex-col shadow-xl rounded">
                        <Menu.Item as="div">{({ active }) => (
                            <Link href="/account"><div className={`${active ? 'flex flex-row items-center gap-2 bg-[#D4D4D4] cursor-pointer py-2 px-5 rounded' : 'flex flex-row items-center gap-2 py-2 px-5 rounded'}`}><FaUserCog/>Account</div></Link>
                        )}
                        </Menu.Item>
                        <Menu.Item>{({ active }) => (
                            <Link href="/signout"><div className={`${active ? 'flex flex-row items-center gap-2 bg-[#D4D4D4] cursor-pointer py-2 px-5 rounded' : 'flex flex-row items-center gap-2 py-2 px-5 rounded'}`}><FaSignOutAlt/>Sign out</div></Link>
                        )}
                        </Menu.Item>
                </Menu.Items>
                </Transition>
        </Menu>
      </div>
    );
}
