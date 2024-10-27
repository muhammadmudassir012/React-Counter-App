import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./Redux/CounterSlice/CounterSlice";
import { AiOutlineReload } from "react-icons/ai";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const Addition = () => {
    dispatch(increment());
  };

  const Subtraction = () => {
    dispatch(decrement());
  };

  const Reset = () => {
    dispatch(reset());
  };

  return (

    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-gray-900">
  <div className="bg-gray-900 shadow-lg rounded-3xl p-10 w-80 text-center transform transition duration-300 hover:shadow-2xl">
    <h1 className="text-4xl font-extrabold text-white mb-6">Counter App</h1>

    <p className="text-8xl font-extrabold text-white mb-8 transition duration-300 ease-in-out transform shadow-lg">
      {counter}
    </p>

    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <button
          onClick={Addition}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Increment
        </button>
        <button
          onClick={Subtraction}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Decrement
        </button>
      </div>

      <button
        onClick={Reset}
        className="flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <AiOutlineReload className="mr-2 text-lg" /> Reset
      </button>
    </div>
  </div>
</div>



    // <div className="flex items-center justify-center h-screen bg-gradient-radial from-blue-500 to-indigo-600">
    //   <div className="bg-white shadow-2xl rounded-2xl p-10 w-80 text-center transform transition duration-500 hover:scale-105">
    //     <h1 className="text-4xl font-bold text-gray-800 mb-6">Counter App</h1>

    //     <p className="text-7xl font-bold text-blue-600 mb-8 transition duration-300 ease-in-out transform shadow-lg">
    //       {counter}
    //     </p>

    //     <div className="flex flex-col space-y-4">
    //       <div className="flex space-x-4">
    //         <button
    //           onClick={Addition}
    //           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300 transform hover:scale-105 shadow-lg"
    //         >
    //           Increment
    //         </button>
    //         <button
    //           onClick={Subtraction}
    //           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300 transform hover:scale-105 shadow-lg"
    //         >
    //           Decrement
    //         </button>
    //       </div>

    //       <button
    //         onClick={Reset}
    //         className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300 transform hover:scale-105 shadow-lg"
    //       >
    //         <AiOutlineReload className="mr-2 text-lg" /> Reset
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
