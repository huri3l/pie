import { ComponentProps } from "react";

function DecorativeCircles(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44}
      height={80}
      viewBox="0 0 44 80"
      fill="none"
      {...props}
    >
      <circle cx={22} cy={22} r={21.5} stroke="#000" strokeOpacity={0.75} />
      <circle cx={22} cy={38.5} r={21.5} stroke="#000" strokeOpacity={0.5} />
      <circle cx={22} cy={57.2} r={21.5} stroke="#000" strokeOpacity={0.25} />
    </svg>
  );
}

export default DecorativeCircles;
