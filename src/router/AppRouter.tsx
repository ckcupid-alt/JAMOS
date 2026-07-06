import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../layout/Layout";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Watchlist from "../pages/Watchlist";
import Market from "../pages/Market";
import AI from "../pages/AI";
import Settings from "../pages/Settings";
import Statistics from "../pages/Statistics";

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/watchlist" element={<Watchlist />} />

        <Route path="/market" element={<Market />} />

        <Route path="/ai" element={<AI />} />

        <Route path="/statistics" element={<Statistics />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}