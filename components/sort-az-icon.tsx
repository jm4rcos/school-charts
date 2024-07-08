export const SortAZIcon = ({ active }: { active?: boolean }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 8H20.5L16.5 16H20.5M4.5 16V10C4.5 9.46957 4.71071 8.96086 5.08579 8.58579C5.46086 8.21071 5.96957 8 6.5 8C7.03043 8 7.53914 8.21071 7.91421 8.58579C8.28929 8.96086 8.5 9.46957 8.5 10V16M4.5 13H8.5M11.5 12H13.5"
        stroke={active ? "#00B37E" : "#ABB1BD"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
