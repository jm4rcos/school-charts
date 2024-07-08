"use client";

import { BarChartComponent } from "@/components/charts/bar-chart";
import { PieChartComponent } from "@/components/charts/pie-chart";
import CircularProgressBar from "@/components/circular-progressbar";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { SidebarRight } from "./_components/sidebar-right";

const AbsenceTable = dynamic(() => import("@/components/absence-table"), {
  ssr: false,
});

const ChartHeaders = dynamic(
  () => import("@/components/charts/chart-headers"),
  {
    ssr: false,
  }
);

const Dashboard = () => {
  return (
    <main className="flex h-screen relative w-full px-8 justify-center gap-x-8">
      {/* <h1 className="text-5xl">Dashboard de Presença</h1> */}
      {/* <CircularProgressBar percentage={81} /> */}
      <div className="w-full xl:mr-[400px] mr-[300px] max-w-6xl overflow-y-auto flex flex-col pt-10">
        <ChartHeaders />
        <div className="w-full py-6 pr-4 flex flex-col gap-8 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-[#77A6FF] scrollbar-[#77A6FF] scrollbar-track-[#D9E6FF] scrollbar-thin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <BarChartComponent />
            <PieChartComponent />
          </div>
          <AbsenceTable />
        </div>
      </div>
      <div className="absolute pt-10 right-0 h-screen xl:w-[400px] w-[300px]">
        <SidebarRight />
      </div>
    </main>
  );
};

export default Dashboard;
