import React from "react";
import { SVG } from "../../types/svg";

export const ArrowUpIcon = (props: SVG) => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 4.95317C9 4.95317 6.05407 1.22273 5 1.22273C3.94587 1.22273 1 4.9532 1 4.9532"
        stroke="#0F2298"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
