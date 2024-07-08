import { AtomIcon } from "lucide-react";

export const SidebarRight = () => {
  return (
    <div className="w-full h-full p-10 flex flex-col rounded-tl-3xl bg-[var(--foreground)]">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl">Matemática</h1>
        <AtomIcon className="text-[var(--success)]" />
      </div>
    </div>
  );
};
