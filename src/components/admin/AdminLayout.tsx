import React from 'react';
import Header from './Header';
import SideNav from './SideBar';

interface AdminLayoutProps { element : any }


const AdminLayout: React.FC<AdminLayoutProps>  = ({element}) => {

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F5E2EF]">
      <Header />
      <div className="flex flex-1">
        <SideNav />
        <main className="flex-1 p-4">
          <section>
            {element}
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
