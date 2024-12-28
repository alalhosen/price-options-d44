// import DaisyNav from "./components/DaisyNav/DaisyNav";

import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

//
export default function App() {
  return (
    <div>
      <NavBar />
      <h1 className="bg-red-500 font-bold text-6xl text-lime-400 underline">
        Hello world!
      </h1>
      {/* <DaisyNav /> */}
      <PriceOptions />
      <LineChart></LineChart>
    </div>
  );
}
