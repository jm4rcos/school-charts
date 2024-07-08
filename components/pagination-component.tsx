"use client";

import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`?page=${page}`);
    }
  };

  return (
    <PaginationComponent>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index + 1} className="hidden md:inline-flex">
            <PaginationLink
              className="cursor-pointer"
              isActive={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationComponent>
  );
}
