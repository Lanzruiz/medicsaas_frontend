import * as React from "react";
const ThreeDotsIcon = (props) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <rect x={0} y={0} width={24} height={24} />
      <circle fill="#000000" cx={5} cy={12} r={2} />
      <circle fill="#000000" cx={12} cy={12} r={2} />
      <circle fill="#000000" cx={19} cy={12} r={2} />
    </g>
  </svg>
);
export default ThreeDotsIcon;
