import React from "react";
import { SVG } from "../../types/svg";

const GoBackIcon = (props: SVG) => {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.5 3.54449H13"
        stroke="#0F2298"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.06061 4.66545L2.78543 5.19795C3.95978 6.06074 4.54696 6.4921 5.02348 6.29534C5.49998 6.09858 5.49998 5.42471 5.49998 4.07699V3.01199C5.49998 1.66427 5.49998 0.990421 5.02348 0.793648C4.54696 0.596882 3.95979 1.02827 2.78544 1.89104L2.06061 2.42353C1.35353 2.94302 1 3.2028 1 3.54449C1 3.88618 1.35353 4.14596 2.06061 4.66545Z"
        stroke="#0F2298"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default GoBackIcon;
