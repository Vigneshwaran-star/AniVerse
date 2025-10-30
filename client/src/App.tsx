


import { GridPattern } from "/src/components/ui/shadcn-io/grid-pattern";
import sung from "/src/assets/jin.png";
import X from "/src/assets/X.png";
import Xsymbol from "/src/assets/Xsymbol.svg";
function App() {
  

  return (
    <>
            <div className="relative  size-full   w-full h-screen overflow-hidden rounded-lg border bg-background p-0">
              <div className="w-full absolute z-20 text-white flex justify-center font-bebas text-5xl bg-black">
                <h1 className="">AniVerse</h1>
              </div>
              <div className="bg-black absolute z-30   top-50 left-50 w-90">
                <h1 className="font-rubik-glitch text-2xl p-2 text-white">Do you want to be a part of the game?</h1>
                <div className=" flex gap-40  pt-10 pb-5 justify-center ">
                <button className="bg-white p-2 font-bebas" >Login</button>
                <button className="bg-white p-2 font-bebas">Sign Up</button>
                </div>
              </div>
              <div className="bg-black absolute z-30 flex justify-center   bottom-1/5 right-60 w-90">
                <h1 className="font-bebas text-2xl pt-11 pb-10 pl-17 pr-0 text-white ">Follow the rules <br/> or be <br/> <span className="font-bebas line-through text-3xl text-red-700">Banished</span></h1>
              </div>
              <div className="flex size-full absolute z-40 top-10   justify-center   filter  brightness-100  ">
                <img src={sung}></img>
              </div>
              <div className="bg-black  z-30 absolute pb-40 bottom-1/10 left-60 w-90">
                <h1 className="text-3xl flex justify-center  font-bebas text-white">Wanna  be </h1>
              </div>
              <div className="absolute w-70 z-40  bottom-15 left-50">

              <img src={X} className=""></img>
              </div>
              <div>
              <img src={Xsymbol} className="absolute w-30 z-40  bottom-30 left-96"></img>
              </div>
     <div className="absolute w-full h-screen z-50">

      <GridPattern

width={20}
height={20}
x={-1}
y={-1}    
/>
</div>
    </div>
     
    
    </>
  )
}

export default App
