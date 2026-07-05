import { Outlet } from "react-router-dom";

import Header from "./Header";
import BottomNav from "./BottomNav";

import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div className="layout">
      <Header />

      <main className="layout-content">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}