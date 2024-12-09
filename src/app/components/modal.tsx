import React from "react";
import type { NextPage } from 'next';

interface ModalProps {
    onClose: () => void,
    children: React.ReactNode,
    title: string,
};

export const Modal: NextPage<ModalProps> = ({ onClose, children, title }) => (
    <div id="default-modal" aria-hidden="true" className={`h-screen w-screen overflow-y-auto overflow-x-hidden 
    fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative p-4 w-full h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow w-full h-full">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900 capitalize">
                        {title}
                    </h3>
                    <button type="button"
                        className="text-gray-400 bg-transparent hover:bg-indigo-200 hover:text-indigo-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal"
                        onClick={onClose}
                        tabIndex={1}
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5 space-y-4 h-[80vh] overflow-y-scroll">
                    {children}
                </div>
                {/* <!-- Modal footer --> */}
                <div className="items-center p-2 border-t border-gray-200 rounded-b">
                    <button
                        tabIndex={1}
                        type="button"
                        className="flex flex-end grow md:grow-0 text-white bg-black hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
);