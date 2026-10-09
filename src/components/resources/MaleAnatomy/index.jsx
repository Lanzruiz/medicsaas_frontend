import React from "react";
import FrontBody from "./front.jsx";
import BackBody from "./back.jsx";
import "./style.css";

const MaleAnatomy = ({ onPartSelect }) => {
  const [visibleSide, setVisibleSide] = React.useState("front");

  return (
    <div className="preview">
      <div id="organswrapper" className="col-md-8 m-top-20">
        <div id="frt_base">
          <FrontBody
            hidden={visibleSide !== "front"}
            onPartSelect={onPartSelect}
            onViewChange={setVisibleSide}
          />
          <BackBody
            hidden={visibleSide !== "back"}
            onPartSelect={onPartSelect}
            onViewChange={setVisibleSide}
          />
        </div>
      </div>
    </div>
  );
};

export default MaleAnatomy;
