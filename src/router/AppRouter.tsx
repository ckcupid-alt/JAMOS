import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Watchlist from "../pages/Watchlist";
import Market from "../pages/Market";
import AI from "../pages/AI";
import Settings from "../pages/Settings";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/watchlist" element={<Watchlist />} />

        <Route path="/market" element={<Market />} />

        <Route path="/ai" element={<AI />} />

        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}