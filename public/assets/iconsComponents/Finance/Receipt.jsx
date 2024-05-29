import * as React from "react";

function Receipt(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 7.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C6.28 3 7.12 3 8.8 3h6.4c1.68 0 2.52 0 3.162.327a3 3 0 011.311 1.311C20 5.28 20 6.12 20 7.8V21l-2.75-2-2.5 2L12 19l-2.75 2-2.5-2L4 21V7.8z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Receipt;
