import { React } from "react";
import { PropTypes } from "prop-types";

export function Button({  newContent, onClik }) {
  return (

      <button
        onClick={onClik}
        type="button"
        className=" group relative md:w-1/4 w-1/4 mx-2 my-1 py-2 px-8 mb-2 justify-center  border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-300  hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {"%" + newContent}
      </button>  );
}
Button.propTypes = {
  newContent: PropTypes.number.isRequired,
  onClik: PropTypes.func.isRequired,
};
