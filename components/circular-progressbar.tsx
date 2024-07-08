import React from "react";

interface CircularProgressBarProps {
  percentage: number;
  radius?: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  radius = 40,
}) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  const strokeWidth = radius > 30 ? 10 : 4;
  const textSizeClass = radius < 20 ? "text-xs" : "text-xl";

  function progressBarColor(percentage: number): string {
    switch (true) {
      case percentage <= 25:
        return "text-[var(--danger)]";
      case percentage <= 50:
        return "text-[var(--warning)]";
      case percentage <= 80:
        return "text-[var(--yellow)]";
      case percentage <= 100:
        return "text-[var(--success)]";
      default:
        return "text-[var(--light-blue)]";
    }
  }

  return (
    <svg
      width={radius * 2 + strokeWidth}
      height={radius * 2 + strokeWidth}
      className="block"
    >
      <circle
        className="text-gray-300"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={radius + strokeWidth / 2}
        cy={radius + strokeWidth / 2}
      />
      <circle
        className={progressBarColor(percentage)}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={radius + strokeWidth / 2}
        cy={radius + strokeWidth / 2}
        style={{ transition: "stroke-dashoffset 0.35s" }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className={`text-black ${textSizeClass}`}
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;
