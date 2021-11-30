import { React } from "react";
import { PropTypes } from "prop-types";

export function Button({  newContent, onClik }) {
  return (

      <button
        onClick={onClik}
        type="button"
        className="text-center group relative md:w-1/4 w-1/4 mx-2 my-2 py-2 px-8 mb-2 m-8  border-transparent font-black rounded-md bg-cyan-dark text-white hover:bg-cyan-strong hover:text-cyan-dark"
      >
        {"%" + newContent}
      </button>  );
}
Button.propTypes = {
  newContent: PropTypes.number.isRequired,
  onClik: PropTypes.func.isRequired,
};
