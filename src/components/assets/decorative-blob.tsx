import { ComponentProps } from "react";

function DecorativeBlob(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={110}
      height={110}
      viewBox="0 0 110 110"
      fill="none"
      {...props}
    >
      <circle cx={55} cy={55} r={55} fill="#1D7D1C" />
    </svg>
  );
}

export default DecorativeBlob;
