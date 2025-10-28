


import { GridPattern } from "/src/components/ui/shadcn-io/grid-pattern";
import sung from "/src/assets/jin.png";
function App() {
  

  return (
    <>
            <div className="relative  size-full   w-full h-screen overflow-hidden rounded-lg border bg-background p-0">
              <div className="w-full   text-white flex justify-center font-bebas text-5xl bg-black">
                <h1 className="">AniVerse</h1>
              </div>
              <div className="bg-black absolute z-30   top-50 left-50 w-90">
                <h1 className="font-rubik-glitch text-2xl p-2 text-white">Do you want to be a part of the game?</h1>
                <div className=" flex gap-40  pt-10 pb-5 justify-center ">
                <button className="bg-white p-2 font-bebas" >Login</button>
                <button className="bg-white p-2 font-bebas">Sign Up</button>
                </div>
                  
              </div>
              <div className="flex size-full z-40    justify-center   filter  brightness-5  ">
                <img src={sung}></img>
              </div>
     <div className="z-50">

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
