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
    <div className="h-screen bg-cyan-light_gray_f py-10">
      <header className="w-full py-12">
        <Logo className="mx-auto" />
      </header>
       <main>
      <div className="flex items-center justify-center py-12  font-black">
        <div className=" flex flex-auto container bg-white shadow-2xl rounded-3xl max-w-1/2  md:max-w-full sm:max-w-full max-w-screen-lg  ">
          <div className="flex flex-wrap px-10 py-12 rounded  max-w-full  text-black">
            <div className="justify-items-stretch flex-auto max-w-1/2 2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-full md:max-w-full sm:max-w-full  rounded-3xl px-8 py-12 my-1 mb-5 m-2 text-gray-600">
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
                  className="text-right focus:outline-none focus:ring-4 focus:ring-cyan-light_gray_f  font-black focus:border-transparent rounded-md block w-full px-3 py-2 mb-7 text-black bg-cyan-light_gray  "
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
                    className=" group relative md:w-1/4 w-1/4 mx-2 my-1 py-2 px-1 font-black focus:outline-none focus:ring-4 focus:ring-cyan-light_gray_f   border-transparent rounded-md text-black text-right  bg-cyan-light_gray   hover:bg-white placeholder-cyan-dark"
                    onChange={(e) => setTip(e.target.value)}
                  />
                ) : (
                  <button
                    className="bg-cyan-light_gray text-center placeholder-cyan-dark font-bold text-cyan-dark_gray custom-button"
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
                  className="text-right rounded-md block w-full px-3 py-2 mb-7 border font-black focus:outline-none focus:ring-4 focus:ring-cyan-light_gray_f  text-black  bg-cyan-light_gray   hover:bg-white  "
                />
              </div>
            </div>
            <div className="justify-items-stretch flex-auto max-w-1/2 2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-full md:max-w-full sm:max-w-full rounded-3xl px-8 py-12 my-1 mb-5 m-2 bg-cyan-dark ">
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="flex justify-between items-center">
                  <div className="text-cyan-light_gray font-semibold">
                    Tip Amount
                    <span className="block text-cyan-dark_gray">/person</span>
                  </div>
                  <div className="text-cyan-strong text-5xl  font-bold">
                    $
                    {isNaN(TipAmount) ? (0.0).toFixed(2) : TipAmount.toFixed(2)}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-cyan-light_gray">
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
              <button
                className="mt-8 md:mt-0 bg-cyan-strong rounded py-2 px-4  w-full font-bold uppercase"
                onClick={reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
