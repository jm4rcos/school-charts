const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex bg-[var(--background)] w-full min-h-screen items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
