import React from 'react';

import SideNav from './side-bar/SideBar';
import Header from './header/Header';


interface EmployersLayoutProps { element : any }


const EmployersLayout: React.FC<EmployersLayoutProps>  = ({element}) => {

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

export default EmployersLayout;
