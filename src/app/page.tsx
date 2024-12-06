import DesktopNav from "./components/navigation/desktop";

export default function Home() {

  const gridDesign = [
    [0, 1, 1, 1],
    [0, 1, 1, 0],
    [1, 1, 0, 0],
  ];

  const $blobClassName = `block bg-black rounded-full scale-x-90 scale-y-90 
    p-2 md:p-4 hover:scale-100 transition delay-100 duration-700 ease-in-out w-[25vw] h-[25vw] lg:max-h-[25vh] lg:max-w-[25vh]`;

  return (
    <main className="h-screen m-auto">
      <DesktopNav />
      <div className="h-3/4 grid grid-cols-4 grid-flow-row gap-4 pt-[20%] md:pt-[6rem] lg:max-h-fit">
        {
          gridDesign.map((innerArr, id) => innerArr.map((elem, idx) => (<div className={elem ? $blobClassName : 'invisible'} key={`${id}-${idx}`}>{ }</div>)))
        }
      </div>
    </main>
  );
}
