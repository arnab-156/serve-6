import React from "react";
import type { NextPage } from 'next';

interface NavProps {
    func: (isOpen: boolean, title: string | number) => void,
    isModalOpen: boolean,
};

const DesktopNav: NextPage<NavProps> = ({ isModalOpen, func }) => {
    const $btnclassName = "flex justify-center space-around items-center p-2 m-2 h-10 hover:underline rounded-md";

    const itemList: Array<string> = ["About", "Blogs", "Resources", "Contact"];
    return (
        <nav className={`flex flex-row-reverse md:flex-row flex-grow w-full z-10 justify-evenly
        fixed bottom-0 left-0 right-0 md:top-0 border-black border-y-4
        p-2 max-h-20
        `}>
            {

                itemList.map((item, id) => (<button
                    onClick={() => func(isModalOpen, item)}
                    tabIndex={isModalOpen ? -1 : 0}
                    type="button"
                    className={$btnclassName}
                    key={`${item}-${id}`}
                >
                    {item}
                </button>
                ))
            }
        </nav>
    )
}

export default DesktopNav;