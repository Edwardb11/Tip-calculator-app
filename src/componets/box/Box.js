import React, { useState } from "react";
import { Button } from "../button/Button";

export default function Box() {
  const [bill, setBill] = useState();
  const [people, setPeople] = useState();
  const [Tip, setTip] = useState();
  const convert = parseFloat(Tip / 100);
  const TipAmount = (bill * convert) / people;
  const total = (bill * convert + parseFloat(bill)) / people;

  // ((bill * (Tip/100))+bill) /people
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12  bg-gray-300 font-black">
        <div className="flex container h-full  space-y-6 bg-gray-100 shadow-2xl border-1 rounded-3xl max-w-1/2 flex-auto  md:max-w-3/4  sm:max-w-full   ">
          <form>
            <div className="flex flex-wrap px-10 py-12 rounded shadow-lg text-black w-full">
              <div className="justify-items-stretch flex-auto max-w-1/2 sm:max-w-full md:max-w-full lg:max-w-1/2 rounded-3xl px-10 py-12  text-black  ">
                <label for="bill">Bill</label>
                <input
                  id="bill"
                  name="bill"
                  type="number"
                  step="any"
                  value={bill}
                  min="1"
                  max="999999999"
                  onChange={(e) => setBill(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-gray-200 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="$"
                />
                <label for="">Select Tip % </label>
                <div className="flex flex-wrap flex-auto">
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
                    className=" group relative md:w-1/4 w-1/4 mx-2 my-1 py-2 px-1 mb-2  border border-transparent text-sm font-medium rounded-md bg-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    placeholder="Custom"
                  />
                </div>
                <label for="">Number of People </label>
                <input
                  id="people"
                  name="people"
                  type="number"
                  min="1"
                  max="999999999"
                  step="any"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-gray-200 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div className="justify-items-stretch flex-auto max-w-1/2 sm:max-w-full md:max-w-full lg:max-w-1/2  rounded-3xl px-10 py-12 shadow-md text-black bg-gray-700">
                <div className="text-white my-1 mb-4">
                  Tip Amount
                  <span className="flex text-gray-400 "> / person </span>
                  <h2 className="text-right text-3xl text-gray-400">
                    {TipAmount != -1 ? TipAmount.toFixed(2) : 0}
                  </h2>
                </div>
                <div className="text-white my-1 mb-5">
                  Total
                  <span className="flex text-gray-400 "> / person </span>
                  <h2 className="text-right text-3xl text-gray-400">
                    {typeof total != -1 ? total.toFixed(2) : 0}
                  </h2>
                </div>
                <button className="bg-gray-500 w-full tex-gray-300   py-2 px-8 border border-transparent text-sm font-medium rounded-md text-white hover:bg-gray-300  hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  RESET
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
