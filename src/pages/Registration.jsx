import React from "react";
import Batur from "../assets/BH_Bali_Logo_White2.png";

const Registration = () => {
  return (
    <div className="w-full py-[9rem] px-2">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-3 ">
        <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 hover:z-0 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Tourism Package
          </h2>
          <p className="text-center text-4xl font-bold ">$---</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-2 py-3 text-black"
            type="button"
          >
            Register
          </button>
        </div>

        {/* <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">
            Battle Hardened
          </h2>
          <p className="text-center text-4xl font-bold ">$---</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">3 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 30 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-2 py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">Super Armory</h2>
          <p className="text-center text-4xl font-bold ">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-2 py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8">Pro Quest</h2>
          <p className="text-center text-4xl font-bold ">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 Users Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-2 py-3 text-black">
            Start Trial
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Registration;

// <!-- Modal toggle -->
// <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
//   Toggle modal
// </button>

// <!-- Main modal -->
// <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
//     <div class="relative p-4 w-full max-w-2xl max-h-full">
//         <!-- Modal content -->
//         <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//             <!-- Modal header -->
//             <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                 <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
//                     Terms of Service
//                 </h3>
//                 <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
//                     <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                     </svg>
//                     <span class="sr-only">Close modal</span>
//                 </button>
//             </div>
//             <!-- Modal body -->
//             <div class="p-4 md:p-5 space-y-4">
//                 <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
//                     With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
//                 </p>
//                 <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
//                     The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
//                 </p>
//             </div>
//             <!-- Modal footer -->
//             <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
//                 <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
//                 <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
//             </div>
//         </div>
//     </div>
// </div>
