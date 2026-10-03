import React from "react";
import FrontBody from "./front.jsx";
import BackBody from "./back.jsx";
import "./style.css";

const MaleAnatomy = ({ onPartSelect }) => {
  return (
    <div className="preview">
           <div id="organswrapper" className="col-md-8 m-top-20">
               <div id="frt_base">
                   <FrontBody onPartSelect={onPartSelect} />
                   <BackBody onPartSelect={onPartSelect} />
               </div>
           </div>
    </div>
  );
};

export default MaleAnatomy;
