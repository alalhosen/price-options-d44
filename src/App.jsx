import DaisyNav from "./components/DaisyNav/DaisyNav";

import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

// 
export default function App() {
  return (
    <div>
      <NavBar />
      <DaisyNav />
      <PriceOptions/>
      <h1 className="font-bold text-6xl text-lime-400 underline">
        Hello world!
      </h1>

    </div>


  )
}
