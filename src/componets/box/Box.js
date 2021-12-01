import React, { useState } from "react";
import { Button } from "../button/Button";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as DollarIcon } from "../../images/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "../../images/icon-person.svg";

export default function Box() {
  const [bill, setBill] = useState();
  const [people, setPeople] = useState();
  const [Tip, setTip] = useState();
  const convert = parseFloat(Tip / 100);
  const TipAmount = (bill * convert) / people;
  const total = (bill * convert + parseFloat(bill)) / people;

  return (
    <>
      <div className="w-full relative py-3 bg-cyan-light_gray_f">
        <Logo className="mx-auto absolute inset-x-0 top-2 " />
      </div>
      <div className="min-h-screen flex items-center justify-center py-12  bg-cyan-light_gray_f font-black">
        <div className="min-w-screen flex flex-auto container bg-white shadow-2xl rounded-3xl max-w-1/2  2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-fullmd:max-w-full sm:max-w-full  ">
          <form>
            <div className="flex flex-wrap px-10 py-12 rounded  text-black">
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
                    className="text-right focus:outline-none focus:ring-4 focus:ring-cyan-light_gray_f  font-blackfocus:border-transparent rounded-md block w-full px-3 py-2 mb-7 text-black bg-cyan-light_gray appearance-none "
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
                  <input
                    id="tip"
                    name="tip"
                    type="number"
                    min="1"
                    max="100"
                    value={Tip}
                    onChange={(e) => setTip(e.target.value)}
                    className=" group relative md:w-1/4 w-1/4 mx-2 my-1 py-2 px-1 font-black focus:outline-none focus:ring-4 focus:ring-cyan-light_gray_f   border-transparent rounded-md text-black text-right  bg-cyan-light_gray   hover:bg-white placeholder-cyan-dark "
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
                    placeholder="0"
                    className="appearance-none text-right rounded-md block w-full px-3 py-2 mb-7 border font-black focus:outline-none focus:ring-4 focus:ring-cyan-light_gray_f  text-black border-gray-300 bg-cyan-light_gray"
                  />
                </div>
              </div>
              <div className="justify-items-stretch flex-auto max-w-1/2 2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-full md:max-w-full sm:max-w-full rounded-3xl px-8 py-12 my-1 mb-5 m-2 bg-cyan-dark ">
                <div className="font-semibold text-cyan-light_gray">
                  Tip Amount
                  <span className="flex  text-cyan-dark_gray"> / person </span>
                  <h2 className="text-cyan-strong text-4xl font-bold text-right">
                    $
                    {isNaN(TipAmount) ? (0.0).toFixed(2) : TipAmount.toFixed(2)}
                  </h2>
                </div>
                <div className="font-semibold text-cyan-light_gray">
                  Total
                  <span className="flex text-cyan-dark_gray"> / person </span>
                  <div className="text-cyan-strong text-4xl font-bold text-right">
                    ${isNaN(total) ? (0.0).toFixed(2) : total.toFixed(2)}
                  </div>
                </div>
                <br /> <br /> <br />
                <br />
                <button className="bg-cyan-strong w-full  ppercase  mt-8 md:mt-0   py-2 px-4  border border-transparent rounded-md font-bold text-cyan-dark  hover:text-cyan-dark hover:bg-cyan-light_gray_f  uppercase">
                  reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
