import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import CircularProgressBar from "./circular-progressbar";
import Pagination from "./pagination-component";
import { sortBy } from "lodash";
import { fakeStudentsData, Student } from "@/data/students-data";
// import { SortIcon } from "./sort-icon";
import { cn } from "@/lib/utils";
import { ArrowDownAZIcon, ArrowUpDownIcon } from "lucide-react";
// import { SortAZIcon } from "./sort-az-icon";

export default function AbsenceTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<keyof Student | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const params = useSearchParams();
  const pageParam = params.get("page");

  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    if (pageParam) {
      setCurrentPage(parseInt(pageParam, 10));
    }
  }, [pageParam]);

  const students = useMemo(() => {
    let sortedStudents = [...fakeStudentsData];

    if (sortField) {
      sortedStudents = sortBy(sortedStudents, [sortField]);
      if (sortOrder === "desc") {
        sortedStudents = sortedStudents.reverse();
      }
    }

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return sortedStudents.slice(startIndex, endIndex);
  }, [currentPage, sortField, sortOrder]);

  const handleSort = (field: keyof Student) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const studentRows = students.map((student) => {
    const variant = student.status === "Presente" ? "success" : "destructive";
    return (
      <TableRow key={student.id}>
        <TableCell className="font-bold max-w-[120px] text-center flex justify-center">
          <CircularProgressBar radius={16} percentage={student.progress} />
        </TableCell>
        <TableCell className="trucante text-nowrap overflow-hidden text-ellipsis max-w-[120px]">
          {student.name}
        </TableCell>
        <TableCell className="text-center">{student.classroom}</TableCell>
        {/* <TableCell className="text-center">{student.group}</TableCell> */}
        <TableCell className="text-center">{student.absences}</TableCell>
        <TableCell className="text-right">
          <Badge variant={variant}>{student.status}</Badge>
        </TableCell>
      </TableRow>
    );
  });

  const thOptions = [
    { label: "Progresso", value: "progress", icon: ArrowUpDownIcon },
    { label: "Nome", value: "name", icon: ArrowDownAZIcon },
    { label: "Turma", value: "classroom", icon: ArrowUpDownIcon },
    // { label: "Grupo", value: "group", icon: SortIcon },
    { label: "Faltas", value: "absences", icon: ArrowUpDownIcon },
    { label: "Status", value: "status", icon: ArrowUpDownIcon },
  ];

  return (
    <div className="w-full space-y-4">
      <Table className="w-full bg-white rounded-xl overflow-hidden">
        <TableCaption>Total de alunos: {fakeStudentsData.length}</TableCaption>
        <TableHeader>
          <TableRow className="bg-[var(--foreground)] font-semibold">
            {thOptions.map((option) => {
              const { icon: Icon } = option;
              const active = sortField === option.value;
              return (
                <TableHeadComponent
                  key={option.value}
                  align="left"
                  className={option.value === "progress" ? "max-w-[120px]" : ""}
                  onClick={() => handleSort(option.value as keyof Student)}
                >
                  <div className="flex items-center gap-1">
                    <Icon
                      className={cn(
                        `w-4 h-4`,
                        active ? `text-[#00B37E]` : `text-[#ABB1BD]`
                      )}
                    />
                    <p
                      className={cn(
                        `font-semibold cursor-pointer`,
                        active ? `text-[#00B37E]` : `text-[#ABB1BD]`
                      )}
                    >
                      {option.label}
                    </p>
                  </div>
                </TableHeadComponent>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>{studentRows}</TableBody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(fakeStudentsData.length / ITEMS_PER_PAGE)}
      />
    </div>
  );
}

interface TableHeadProps {
  children: React.ReactNode;
  onClick?: () => void;
  align?: "left" | "right" | "center";
  className?: string;
}

const TableHeadComponent = ({
  children,
  onClick,
  align = "center",
  className,
}: TableHeadProps) => (
  <th
    onClick={onClick}
    className={cn(
      `px-6 py-4 font-semibold cursor-pointer text-${align}`,
      className
    )}
  >
    {children}
  </th>
);
