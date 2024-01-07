// DashboardLayout.tsx
import React , {ReactNode} from 'react';
import SideNavbar from "@/components/dashboard/sidebar/SideNavbar";
import TopNavbar from "@/components/dashboard/topNavBar/TopNavbar";

interface DashboardLayoutProps {
    children: ReactNode;
  }
  
  function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
    <div className="flex flex-col h-screen">
      <TopNavbar />
      <div className='flex h-full'>
      <div className='w-1/8 bg-gray-200 mt-20'>
          <SideNavbar />
        </div>
        <div className='flex-grow bg-white text-black p-8'>
          <div className='w-full text-center'>
            <h1 className='text-4xl font-bold'>Dashboard</h1>
            <div className='mt-4 text-lg'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;




