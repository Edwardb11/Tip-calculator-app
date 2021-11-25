import { LockClosedIcon } from "@heroicons/react/solid";

export default function Example() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gray-300">
        <div className="container h-full  space-y-6 bg-gray-100 shadow-2xl border-1 rounded-3xl max-w-1/2">
          <div className="flex flex-wrap px-10 py-12 rounded shadow-lg text-black w-full">
            <div className="justify-items-stretch flex-auto   max-w-1/2 sm:max-w-full md:max-w-full lg:max-w-1/2 rounded-3xl px-10 py-12 shadow-md text-black">
              <form>
                <label for="bill">Bill</label>
                <input
                  id="text"
                  name="bill"
                  type="bill"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="$"
                />
                <label for="btnfive">Select Tip % </label>
                <button
                  type="submit"
                  id="btnfive"
                  className="Short group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  %5
                </button>
              </form>
            </div>
            <div className="justify-items-stretch flex-auto max-w-1/2 sm:max-w-full md:max-w-full lg:max-w-1/2  rounded-3xl px-10 py-12 shadow-md text-black bg-gray-700">
              <div className="text-white">Tip Amount</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
