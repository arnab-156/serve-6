'use client';
import { useState } from "react";
import DesktopNav from "./components/navigation/desktop";
import { Modal } from "./components/modal";
import { Contact } from "./components/contact";
import { About } from "./components/about";
import { Blogs } from "./components/blogs";
import { Resources } from "./components/resources";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const gridDesign = [
    [0, "about", "blogs", "home"],
    [0, "social", "interviews", 0],
    ["contact", "resources", 0, 0],
  ];

  const $blobClassName = `block bg-black rounded-full scale-x-90 scale-y-90 p-2 md:p-4 font-black 
  hover:scale-100 focus:scale-100 transition delay-100 duration-700 ease-in-out capitalize 
  w-[25vw] h-[25vw] lg:max-h-[25vh] lg:max-w-[25vh] content-center focus:text-4xl hover:text-4xl
  text-transparent hover:text-white focus:text-white focus:shadow-2xl focus:shadow-indigo-500/50 
  hover:shadow-indigo-500/50 hover:shadow-2xl
  btnAnimation`;

  const handleOnClick = (isOpen: boolean, title: string | number) => {
    if (typeof title === 'string') {
      setModalTitle(title);
    }
    setIsModalOpen(!isOpen);
  };

  const showContent = (title: string) => {
    switch (title) {
      case 'about':
        return (<About />);
      case 'blogs':
        return (<Blogs />);
      case 'contact':
        return (<Contact />);
      case 'resources':
        return (<Resources />);
      case 'default':
        return (<Contact />);
    }
  };

  return (
    <main className={`h-screen m-auto ${isModalOpen ? 'bg-indigo-800' : ''}`}>
      <DesktopNav isModalOpen={isModalOpen} func={handleOnClick} />
      <div className={`h-3/4 grid grid-cols-4 grid-flow-row gap-4 pt-[20%] md:pt-[6rem] lg:max-h-fit`}>
        {
          gridDesign.map((innerArr, id) => innerArr.map((elem, idx) => (
            <button
              onClick={() => handleOnClick(isModalOpen, elem)}
              tabIndex={isModalOpen ? -1 : 0}
              type="button"
              data-modal-target="default-modal" data-modal-toggle="default-modal"
              className={elem ? $blobClassName : 'invisible'}
              key={`${id}-${idx}`}
            >
              <span className="hover:underline focus:underline">{elem}</span>
            </button>
          )))
        }
      </div>
      {
        isModalOpen && (
          <Modal
            title={modalTitle}
            onClose={() => setIsModalOpen(false)}
          >
            {
              showContent(modalTitle)
            }
          </Modal>)
      }
    </main>
  );
}
