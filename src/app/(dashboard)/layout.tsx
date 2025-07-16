'use client';

import Sidebar from '@/components/organisms/Sidebar/index';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="md:w-64 w-0 h-screen fixed top-0 left-0 z-50">
        <Sidebar />
      </div>
      <main className="flex-1 flex flex-col overflow-y-auto md:mt-0 mt-10 md:ml-64">
        <div className="p-4">
          {children}
        </div>
      </main>
    </div>
  );
}