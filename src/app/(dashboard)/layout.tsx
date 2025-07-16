'use client';

import Sidebar from '@/components/organisms/Sidebar/index';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="md:w-64 w-0 h-screen">
        <Sidebar />
      </div>
      <main className="flex-1 flex flex-col h-screen overflow-hidden md:mt-0 mt-10">
        <div className="flex-1 overflow-hidden p-4">
          {children}
        </div>
      </main>
    </div>
  );
}