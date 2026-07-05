import type { ReactNode } from "react";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

import "./Layout.css";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <Header />

      <main className="layout__content">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}

export default Layout;