import React, { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
// import { Container } from "react-bootstrap";
// import SignInForm from "../SignIn";

function Showhidetab() {
  const [showtab, setShowtab] = useState(1);

  //   focus:bg-[#00df9a] focus:text-black
  const handletab = (e) => {
    setShowtab(e);
  };

  return (
    <div>
      <h1 className="font-bold text-4xl w-full justify-between text-center rounded-lg py-20 mb-2 px-4 pb-5 text-black ">
        SCHEDULE
      </h1>
      <div className="md:flex w-full">
        {/* friday */}
        <div className="w-full">
          <button
            id="btn-fri"
            onClick={() => handletab(1)}
            className="bg-black w-full font-medium md:my-4 mx-auto md:mx-0 py-2 text-[#00df9a] focus:bg-[#00df9a] focus:text-black"
          >
            <div className="text-xl">Friday</div>
            <div className="text-base pt-4">July, 19th</div>
            <div className="text-base">Hall Open: 2:30 Pm</div>
          </button>
        </div>

        <div className="w-full">
          <button
            id=""
            onClick={() => handletab(2)}
            className="bg-black w-full font-medium md:my-4 mx-auto md:mx-0 py-2 text-[#00df9a] focus:bg-[#00df9a] focus:text-black"
          >
            <div className="text-xl">Friday</div>
            <div className="text-base pt-4">July, 19th</div>
            <div className="text-base">Hall Open: 2:30 Pm</div>
          </button>
        </div>
      </div>
      <div>
        <div id="content-fri" className={showtab === 1 ? "block" : "hidden"}>
          <div className="bg-gray-300 mt-2 md:mt-0 divide-y divide-black">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full justify-between text-left bg-gray-300 px-4 py-2 text-sm font-medium text-black">
                    <span>10:00 AM</span>
                    <span className="pl-2 md:pl-3">
                      MST World Premiere JP Only (8packs)
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                    <h1 className="font-bold ">Tournament Info</h1>
                    <p className="px-4 mt-2 mb-2">
                      Players will receive a FREE MST Pre-release Promo card for
                      participating in the event. This card will be distributed
                      only during round 1
                    </p>
                    <div className="flex">
                      <h1 className="font-bold">Entry Fee : </h1>
                      <p className="px-2">10,000 Jpy</p>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full justify-between text-left bg-gray-300 px-4 py-2 text-sm font-medium text-black">
                    <span>10:00 AM</span>
                    <span className="pl-2 md:pl-3">
                      MST World Premiere JP Only (8packs)
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                    <h1 className="font-bold ">Tournament Info</h1>
                    <p className="px-4 mt-2 mb-2">
                      Players will receive a FREE MST Pre-release Promo card for
                      participating in the event. This card will be distributed
                      only during round 1
                    </p>
                    <div className="flex">
                      <h1 className="font-bold">Entry Fee : </h1>
                      <p className="px-2">10,000 Jpy</p>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
        <div className={showtab === 2 ? "block" : "hidden"}>
          <div className="bg-gray-300 mt-2 md:mt-0 divide-y divide-black">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full justify-between text-left bg-gray-300 px-4 py-2 text-sm font-medium text-black">
                    <span>10:00 AM</span>
                    <span className="pl-2 md:pl-3">
                      MST World Premiere JP Only (8packs)
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                    <h1 className="font-bold ">Tournament Info</h1>
                    <p className="px-4 mt-2 mb-2">
                      Players will receive a FREE MST Pre-release Promo card for
                      participating in the event. This card will be distributed
                      only during round 1
                    </p>
                    <div className="flex">
                      <h1 className="font-bold">Entry Fee : </h1>
                      <p className="px-2">10,000 Jpy</p>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full justify-between text-left bg-gray-300 px-4 py-2 text-sm font-medium text-black">
                    <span>10:00 AM</span>
                    <span className="pl-2 md:pl-3">
                      MST World Premiere JP Only (8packs)
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm">
                    <h1 className="font-bold ">Tournament Info</h1>
                    <p className="px-4 mt-2 mb-2">
                      Players will receive a FREE MST Pre-release Promo card for
                      participating in the event. This card will be distributed
                      only during round 1
                    </p>
                    <div className="flex">
                      <h1 className="font-bold">Entry Fee : </h1>
                      <p className="px-2">10,000 Jpy</p>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Showhidetab;
