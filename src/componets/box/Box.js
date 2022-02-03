import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { ReactComponent as DollarIcon } from "../../images/icon-dollar.svg";
import { ReactComponent as PersonIcon } from "../../images/icon-person.svg";

export default function Box() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [Tip, setTip] = useState("");
  const [TipC, setTipC] = useState("");
  const [TipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const reset = () => {
    setBill("");
    setTip("");
    setTipC("");
    setPeople("");
    setTipAmount(0);
    setTotal(0);
  };

  useEffect(() => {
    if (Tip) {
      if (Tip && bill && people > 0) {
        let convert = parseFloat(Tip / 100);
        let TipAmount = ((bill * convert) / people).toFixed(2);
        let total = ((bill * convert + parseFloat(bill)) / people).toFixed(2);
        setTipAmount(TipAmount);
        setTotal(total);
        setTipC("");
      }
      if (total.length >= 9 || TipAmount.length >= 9) {
        let convert = parseFloat(Tip / 100);
        let TipAmount = ((bill * convert) / people).toExponential(4);
        let total = (
          (bill * convert + parseFloat(bill)) /
          people
        ).toExponential(4);
        setTipAmount(TipAmount);
        setTotal(total);
        setTipC("");
      }
    }
  }, [bill, Tip, people]);
  useEffect(() => {
    if (TipC) {
      if (TipC && bill && people > 0) {
        let convert = parseFloat(TipC / 100);
        let TipAmount = ((bill * convert) / people).toFixed(2);
        let total = ((bill * convert + parseFloat(bill)) / people).toFixed(2);
        setTipAmount(TipAmount);
        setTotal(total);
        setTip("");
      }
      if (total.length >= 9 || TipAmount.length >= 9) {
        let convert = parseFloat(TipC / 100);
        let TipAmount = ((bill * convert) / people).toExponential(4);
        let total = (
          (bill * convert + parseFloat(bill)) /
          people
        ).toExponential(4);
        setTipAmount(TipAmount);
        setTotal(total);
        setTip("");
      }
    }
  }, [bill, TipC, people]);

  return (
    <div className="h-screen bg-cyan-light_gray_f  ">
      <header className="mx-auto py-16 2xl:py-16 xl:py-16 lg:py-12 md:py-5 sm:py-0">
        <h1 className="text-cyan-title mx-auto font-semibold  text-center  text-2xl tracking-widest uppercase">
          spli <br />
          tter
        </h1>
      </header>
      <main className="bg-cyan-light_gray_f py-16 2xl:py-16 xl:py-16 lg:py-0 md:py-0 sm:py-0">
        <div className=" flex justify-center font-black">
          <div className="flex flex-auto flex-wrap px-7 py-7  rounded-3xl  shadow-lg bg-white  text-black     max-w-1/2  2xl:max-w-3/4 xl:max-w-3/4 lg:max-w-3/4 md:max-w-full sm:max-w-full">
            <div className="  flex-auto mx-2  max-w-1/2 2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-full md:max-w-full sm:max-w-full">
              <label
                htmlFor="bill"
                className="block text-cyan-dark_gray font-semibold mb-2 sm:mb-0"
              >
                Bill
              </label>
              <div className="bg-cyan-light_gray relative">
                <DollarIcon className="absolute top-4 left-3 z-10" />
                <input
                  id="bill"
                  name="bill"
                  type="number"
                  step="any"
                  value={bill}
                  min="1"
                  onChange={(e) => setBill(e.target.value)}
                  required
                  className="text-right group relative focus:outline-none  text-2xl focus:ring-2 focus:ring-cyan-dark border  font-semibold focus:border-transparent rounded-md block w-full px-3 py-2 mb-5 text-black bg-cyan-light_gray  "
                  placeholder="0"
                />
              </div>
              <span className="block text-cyan-dark_gray font-semibold mb-2 sm:mb-0">
                Select Tip %
              </span>
              <div className="flex flex-wrap  mb-5  sm:-mx-5 sm:mb-1  -mx-3 sm:justify-center ">
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
                  value={TipC}
                  maxLength="100"
                  onChange={(e) => setTipC(e.target.value)}
                  className=" group relative  w-btn  p-3  m-2 pl-8  sm:w-2/5 text-left focus:outline-none  text-2xl   focus:ring-2 focus:ring-cyan-dark   font-semibold focus:border-transparent rounded-md block text-black bg-cyan-light_gray "
                  placeholder="Custom"
                />
              </div>
              <label
                htmlFor="people"
                className="block text-cyan-dark_gray font-semibold mb-2 sm:mb-0"
              >
                Number of People
              </label>
              {people === 0 && (
                <div className=" text-red-500 text-right">Can't be zero</div>
              )}
              <div className="bg-cyan-light_gray  relative">
                <PersonIcon className="absolute top-4 left-3 z-10" />
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
                  className={` group relative  text-right rounded-md block w-full text-2xl px-3 py-2 mb-7 border font-black    text-black  bg-cyan-light_gray   hover:bg-white ${
                    people === 0
                      ? "outline-none ring-2 ring-red-500 focus:ring-red-500 "
                      : "focus:outline-none focus:ring-2 focus:ring-cyan-dark    focus:border-transparent"
                  }`}
                />
              </div>
            </div>
            <div className="flex-auto max-w-1/2 2xl:max-w-1/2 xl:max-w-1/2 lg:max-w-full md:max-w-full sm:max-w-full rounded-3xl  mx-2   px-5 py-10   bg-cyan-dark ">
              <div className="flex flex-col">
                <div className="flex justify-between items-center ">
                  <div className="text-cyan-light_gray font-semibold ">
                    Tip Amount
                    <span className="block text-cyan-dark_gray">/person</span>
                  </div>
                  <div className="text-cyan-strong text-4xl font-bold">
                    ${TipAmount === 0 ? "0.00" : TipAmount}
                  </div>
                </div>
                <div className="flex justify-between items-center my-5">
                  <div className="font-semibold text-cyan-light_gray my-4">
                    Total
                    <span className="block text-cyan-dark_gray">/person</span>
                  </div>
                  <div className="text-cyan-strong text-4xl font-bold ">
                    ${total === 0 ? "0.00" : total}
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-4 2xl:mt-12 xl:mt-12  lg:mt-12 md:mt-0 sm:-mt-8">
                <button
                  onClick={() => reset()}
                  className="bg-cyan-dark_btn    w-full  mt-9 md:mt-0 p-3 border border-transparent rounded-md font-semibold text-cyan-dark  hover:text-cyan-dark hover:bg-cyan-light_gray_f  uppercase"
                >
                  reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center tracking-wide  text-center  ">
          <p>
            Challenge by<span> </span>
            <a
              href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX"
              target="_blank"
              className="text-blue-800  "
            >
              Frontend Mentor.<span> </span>
            </a>
            Coded by 👑
            <a
              href="https://github.com/Edwardb11/Tip-calculator-app"
              target="_blank"
              className="text-blue-800  "
            >
              Edwardb11👑
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
