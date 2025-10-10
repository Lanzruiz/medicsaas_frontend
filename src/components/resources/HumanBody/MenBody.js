import React, { useState } from "react";
import "./menbody.css";
import "./variables.css";
import MenBodySvgComponent from "./MenBodySvgComponent";
import MenBackBodySvgComponent from "./MenBackBodySvgComponent";

const HumanBody = () => {
  //   const [selectedArea, setSelectedArea] = useState("");

  const handlePieceClick = (event) => {
    // sc-body-model-svg__path--active
    // Get the id or class of the clicked path
    const pathClass = event.target.getAttribute("class");
    console.log(">>", pathClass);

    // Remove 'sc-body-model-svg__path--active' from all paths
    const activePath = document.querySelector(
      ".sc-body-model-svg__path--active"
    );
    if (activePath) {
      activePath.classList.remove("sc-body-model-svg__path--active");
    }

    // Check if the element exists
    if (pathClass) {
      // Add the 'newClass' and remove the 'originalClass'
      event.target.setAttribute(
        "class",
        `${pathClass} sc-body-model-svg__path--active`
      );
    }
  };

  return (
    <div>
      <div className="sc-body-model evidence-search-body-widget__body-model">
        <div className="ui-dropdown ui-dropdown--compact sc-body-model__dropdown">
          <MenBodySvgComponent handlePieceClick={handlePieceClick} />
        </div>
      </div>
    </div>
  );
};

export default HumanBody;
