import DesktopNav from "./components/navigation/desktop";

export default function Home() {


  const gridDesign = [
    [0, 1, 1, 1],
    [0, 1, 1, 0],
    [1, 1, 0, 0],
  ];

  const $className = `block bg-black rounded-full scale-x-95 scale-y-90 
    p-2 md:p-4 hover:scale-100 transition delay-100 duration-700 ease-in-out`;

  return (
    <main className="h-screen m-auto">
      <DesktopNav />
      <div className="h-3/4 grid grid-cols-4 grid-flow-row gap-4">
        {
          gridDesign.map((innerArr, id) => innerArr.map((elem, idx) => (<div className={elem ? $className : 'invisible'} key={`${id}-${idx}`}>{ }</div>)))
        }
      </div>
    </main>
  );
}
