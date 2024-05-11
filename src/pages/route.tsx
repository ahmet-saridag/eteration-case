import { Outlet } from "react-router-dom";

import Header from "@/components/common/header/header.component";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
