import React, { useState } from "react";
import { Button } from "../button/Button";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as DollarIcon } from "../../images/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "../../images/icon-person.svg";

export default function Box() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [Tip, setTip] = useState("");

  const convert = parseFloat(Tip / 100);
  const TipAmount = (bill * convert) / people;
  const total = (bill * convert + parseFloat(bill)) / people;
  const reset = () => {
    setBill("");
    setTip("");
    setPeople("");
  };

  return (
    //   sm:max-w-full md:max-w-full  lg:max-w-full xl:max-w-1/2 2xl:max-w-1/2
    <div className="h-screen bg-cyan-light_gray_f  ">
      <header className="w-full py-12">
        <Logo className="mx-auto" />
      </header>
      <main>
        <div className=" flex justify-center font-black">
          <div className="flex flex-auto flex-wrap px-7 py-7  rounded-3xl  shadow-lg bg-white  text-black     max-w-1/2  2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-1/2 md:max-w-full sm:max-w-full">
            <div className="  justify-items-stretch flex-auto mx-2  max-w-1/2 2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-full md:max-w-full sm:max-w-full">
              <label
                for="bill"
                className="block text-cyan-dark_gray font-semibold"
              >
                Bill
              </label>
              <div className="bg-cyan-light_gray relative">
                <DollarIcon className="absolute top-2.5 left-3 z-10" />
                <input
                  id="bill"
                  name="bill"
                  type="number"
                  step="any"
                  value={bill}
                  min="1"
                  onChange={(e) => setBill(e.target.value)}
                  required
                  className="text-right group relative focus:outline-none  text-2xl focus:ring-2 focus:ring-cyan-dark   font-semibold focus:border-transparent rounded-md block w-full px-3 py-2 mb-7 text-black bg-cyan-light_gray  "
                  placeholder="0"
                />
              </div>
              <span className="block text-cyan-dark_gray font-semibold ">
                Select Tip %
              </span>
              <div className="flex flex-wrap flex-auto mb-5  sm:-mx-5  md:-mx-1  md:justify-start sm:justify-center ">
                <Button onClik={() => setTip(5)} newContent={5}></Button>
                <Button onClik={() => setTip(10)} newContent={10}></Button>
                <Button onClik={() => setTip(15)} newContent={15}></Button>
                <Button onClik={() => setTip(25)} newContent={25}></Button>
                <Button onClik={() => setTip(50)} newContent={50}></Button>

                <input
                  id="tip"
                  name="tip"
                  type="number"
                  min="1"
                  value={Tip}
                  onChange={(e) => setTip(e.target.value)}
                  className=" group relative  w-1/4 mx-2 my-2 py-2 px-1  sm:w-2/5 text-center focus:outline-none  text-2xl focus:ring-2 focus:ring-cyan-dark   font-semibold focus:border-transparent rounded-md block text-black bg-cyan-light_gray "
                  placeholder="Custom"
                />
              </div>
              <label
                for="people"
                className="block text-cyan-dark_gray font-semibold mb-2"
              >
                Number of People
              </label>
              <div className="bg-cyan-light_gray  relative">
                <PersonIcon className="absolute top-2.5 left-3 z-10" />
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
                  className=" group relative  text-right rounded-md block w-full text-2xl px-3 py-2 mb-7 border font-black focus:outline-none focus:ring-2 focus:ring-cyan-dark    text-black  bg-cyan-light_gray   hover:bg-white  "
                />
              </div>
            </div>
            <div className="justify-items-stretch flex-auto max-w-1/2 2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-full md:max-w-full sm:max-w-full rounded-3xl  mx-2   px-5 py-10   bg-cyan-dark ">
              <div className="flex flex-col ">
                <div className="flex justify-between items-center">
                  <div className="text-cyan-light_gray font-semibold ">
                    Tip Amount
                    <span className="block text-cyan-dark_gray">/person</span>
                  </div>
                  <div className="text-cyan-strong text-5xl  font-bold">
                    $
                    {isNaN(TipAmount) ? (0.0).toFixed(2) : TipAmount.toFixed(2)}
                  </div>
                </div>
                <div className="flex justify-between items-center my-5">
                  <div className="font-semibold text-cyan-light_gray my-4">
                    Total
                    <span className="block text-cyan-dark_gray">/person</span>
                  </div>
                  <div className="text-cyan-strong text-5xl font-bold">
                    ${isNaN(total) ? (0.0).toFixed(2) : total.toFixed(2)}
                  </div>
                </div>
              </div>

              <div className="  py-10 inset-x-0 bottom-0">
                <button
                  onClick={() => reset()}
                  className="bg-cyan-dark_btn     w-full  mt-8 md:mt-0 py-2 px-4  border border-transparent rounded-md font-semibold text-cyan-dark  hover:text-cyan-dark hover:bg-cyan-light_gray_f  uppercase"
                >
                  reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
