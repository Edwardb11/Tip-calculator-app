import React, { useState } from "react";
import { Button } from "../button/Button";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as DollarIcon } from "../../images/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "../../images/icon-person.svg";

export default function Box() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [Tip, setTip] = useState("");

  const [showCustom, setShowCustom] = useState(false);
  const convert = parseFloat(Tip / 100);
  const TipAmount = (bill * convert) / people;
  const total = (bill * convert + parseFloat(bill)) / people;
  const reset = () => {
    setBill("");
    setTip("");
    setPeople("");
    setShowCustom(false);
  };
  return (
    <div className="min-h-screen bg-cyan-light_gray_f py-10">
      <header className="w-full py-12">
        <Logo className="mx-auto" />
      </header>
      <main>
        <div className="flex  flex-auto justify-center py-12  font-black">
          <div className=" flex flex-wrap  bg-white shadow-2xl px-10 py-12 rounded-3xl max-w-1/2 2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-full md:max-w-full sm:max-w-full   ">
              <div className="flex-auto  max-w-1/2 2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-full md:max-w-full sm:max-w-full text-gray-600">
                <label
                  for="bill"
                  className="block text-cyan-dark_gray font-semibold mb-2"
                >
                  Bill
                </label>
                <div className="bg-cyan-light_gray relative">
                  <DollarIcon className="absolute top-2.5 left-3" />
                  <input
                    id="bill"
                    name="bill"
                    type="number"
                    step="any"
                    value={bill}
                    min="1"
                    onChange={(e) => setBill(e.target.value)}
                    required
                    className="text-right focus:outline-none  text-2xl focus:ring-2 focus:ring-cyan-dark   font-black focus:border-transparent rounded-md block w-full px-3 py-2 mb-7 text-black bg-cyan-light_gray  "
                    placeholder="0"
                  />
                </div>
                <span className="block text-cyan-dark_gray font-semibold mb-2">
                  Select Tip %
                </span>
                <div className="flex flex-wrap flex-auto mb-7">
                  <Button onClik={() => setTip(5)} newContent={5}></Button>
                  <Button onClik={() => setTip(10)} newContent={10}></Button>
                  <Button onClik={() => setTip(15)} newContent={15}></Button>
                  <Button onClik={() => setTip(25)} newContent={25}></Button>
                  <Button onClik={() => setTip(50)} newContent={50}></Button>
                  {showCustom ? (
                    <input
                      type="number"
                      placeholder="Custom"
                      className=" group relative md:w-1/4 w-1/4 mx-2 my-1 text-2xl py-2 px-1 font-black focus:outline-none focus:ring-2 focus:ring-cyan-dark     border-transparent rounded-md text-right  bg-cyan-light_gray   hover:bg-white placeholder-cyan-dark"
                      onChange={(e) => setTip(e.target.value)}
                    />
                  ) : (
                    <button
                      className=" group relative md:w-1/4 w-1/4 mx-2 my-1 text-2xl py-2 px-1 font-black focus:outline-none focus:ring-2 focus:ring-cyan-dark     border-transparent rounded-md  text-right  bg-cyan-light_gray   hover:bg-white placeholder-cyan-dark"
                      onClick={() => setShowCustom(true)}
                    >
                      Custom
                    </button>
                  )}
                </div>
                <label
                  for="people"
                  className="block text-cyan-dark_gray font-semibold mb-2"
                >
                  Number of People
                </label>
                <div className="bg-cyan-light_gray  relative">
                  <PersonIcon className="absolute top-2.5 left-3" />
                  <input
                    id="people"
                    name="people"
                    type="number"
                    min="0"
                    step="any"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    required
                    placeholder="1"
                    className="text-right rounded-md block w-full text-2xl px-3 py-2 mb-7 border font-black focus:outline-none focus:ring-2 focus:ring-cyan-dark    text-black  bg-cyan-light_gray   hover:bg-white  "
                  />
                </div>
              </div>
              <div className="flex-auto  max-w-1/2 2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-full md:max-w-full sm:max-w-full rounded-3xl px-8 py-12 my-1 mb-5 m-2 bg-cyan-dark ">
                <div className="flex flex-col ">
                  <div className="flex justify-between items-center">
                    <div className="text-cyan-light_gray font-semibold py-5">
                      Tip Amount
                      <span className="block text-cyan-dark_gray">/person</span>
                    </div>
                    <div className="text-cyan-strong text-5xl  font-bold">
                      $
                      {isNaN(TipAmount)
                        ? (0.0).toFixed(2)
                        : TipAmount.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-cyan-light_gray py-6">
                      Total
                      <span className="block text-cyan-dark_gray">/person</span>
                    </div>
                    <div className="text-cyan-strong text-5xl font-bold">
                      ${isNaN(total) ? (0.0).toFixed(2) : total.toFixed(2)}
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <button onClick={()=> reset()} className="bg-cyan-dark_btn    w-full  ppercase  mt-8 md:mt-0   py-2 px-4  border border-transparent rounded-md font-semibold text-cyan-dark  hover:text-cyan-dark hover:bg-cyan-light_gray_f  uppercase">
                  reset
                </button>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}
