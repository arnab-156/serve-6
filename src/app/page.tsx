'use client';
import { useState } from "react";

import DesktopNav from "./components/navigation/desktop";
import { Modal } from "./components/modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const gridDesign = [
    [0, "about", "blogs", "home"],
    [0, "social", "interviews", 0],
    ["contact", "resources", 0, 0],
  ];

  const $blobClassName = `block bg-black rounded-full scale-x-90 scale-y-90 p-2 md:p-4 hover:scale-100 transition delay-100 duration-700 ease-in-out w-[25vw] h-[25vw] lg:max-h-[25vh] lg:max-w-[25vh] content-center hover:text-white focus:text-white focus:shadow-2xl focus:shadow-indigo-500/50`;


  // modal component is needed. 1. right now simple open close with click.
  // based on input, finds from library and shows modal.

  return (
    <main className="h-screen m-auto">
      <DesktopNav />
      <div className="h-3/4 grid grid-cols-4 grid-flow-row gap-4 pt-[20%] md:pt-[6rem] lg:max-h-fit">
        {
          gridDesign.map((innerArr, id) => innerArr.map((elem, idx) => (<button onClick={() => setIsModalOpen(true)} tabIndex={0} type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className={elem ? $blobClassName : 'invisible'} key={`${id}-${idx}`}>{elem}</button>)))
        }
      </div>
      {
        isModalOpen && (
          <Modal
            title="CURRENT BUTTON CLICK"
            onClose={() => setIsModalOpen(false)}
          >
            <p>Content Coming Soon.</p>
          </Modal>)
      }
    </main>
  );
}
