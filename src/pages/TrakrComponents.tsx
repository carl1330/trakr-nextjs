import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NavbarButton } from "./Navbar";
import { FaRegPlusSquare } from "react-icons/fa";

const colors = {
    purple: "bg-[#9F7FE2]",
    red: "bg-red-400",
    gray: "bg-[#BEBEBE]"
}

export const TrakrButton: React.FC<{
    onClick: () => void;
    color?: string;
    children: string; 
}> = (props) => {
    return (
        <button onClick={props.onClick} className={`py-2 w-full rounded-md ${props.color && props.color + ' text-white'}`}>{props.children}</button>
    )
}

export const TrakrFormInput: React.FC<{
    type: string;
    title?: string;
    defaultValue?: string;
    placeholder?: string;
    width?: string;
}> = (props) => {
    return(
        <div className="flex flex-col">
            {props.title}
            <input defaultValue={props.defaultValue} placeholder={props.placeholder} className={`h-10 border-x border-y border-[#BEBEBE] rounded shadow w-80`}/>
        </div>
    )
}

export const AddHabitModal = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
    <>
    <NavbarButton icon={<FaRegPlusSquare />} onClick={openModal}/>


    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>

    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
    <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="flex flex-col bg-white px-11 py-6 rounded-md">
        <Dialog.Title className="font-bold text-2xl text-center">Create new habit</Dialog.Title>
        <Dialog.Description className="text-center">
            You can do it!
        </Dialog.Description>

        <div className="flex flex-col gap-7">
            <TrakrFormInput title="Habit name" type="input" width=""/>
            <TrakrFormInput title="Habit description" type="input" width="100px"/>
            <div>
                <TrakrButton onClick={() => setIsOpen(false)} color={colors.purple}>Add new habit</TrakrButton>
                <TrakrButton onClick={() => setIsOpen(false)}>Cancel</TrakrButton>
            </div>
        </div>
      </Dialog.Panel>   
    </div>
    </Dialog>
    </>
    )
}