'use client';

import Sidebar from '@/components/organisms/Sidebar/index';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64 p-4 md:ml-0">
        {children}
      </main>
    </div>
  );
}