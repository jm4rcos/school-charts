export const SortIcon = ({ active }: { active?: boolean }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 20V10M8 20L5 17M8 20L11 17M16 4V14M16 4L19 7M16 4L13 7"
        stroke={active ? "#00B37E" : "#ABB1BD"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
