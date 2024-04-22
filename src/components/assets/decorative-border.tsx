import { ComponentProps } from "react";

function DecorativeBorder(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={227}
      height={348}
      viewBox="0 0 227 348"
      fill="none"
      {...props}
    >
      <rect
        x={0.5}
        y={0.5}
        width={226}
        height={347}
        rx={113}
        stroke="url(#paint0_linear_4_70)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4_70"
          x1={113.5}
          y1={0}
          x2={113.5}
          y2={348}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#060606" />
          <stop offset={0.5} stopColor="#363636" stopOpacity={0.3} />
          <stop offset={1} stopColor="#666" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default DecorativeBorder;
