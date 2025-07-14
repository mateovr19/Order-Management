'use client';

import Sidebar from '@/components/organisms/Sidebar/index';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <div className="md:w-64 w-0">
        <Sidebar />
      </div>
      <main className="flex-1 ml-0 p-4 mt-10 md:mt-0">
        {children}
      </main>
    </div>
  );
}