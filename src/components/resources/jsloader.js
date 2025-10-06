import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Jsloader = ({ scriptUrl }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true; // Load asynchronously to avoid blocking rendering
    document.body.appendChild(script); // Append to the body

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [scriptUrl]); // Re-run effect if scriptUrl changes

  return null; // This component doesn't render any visible elements
};

export default Jsloader;
