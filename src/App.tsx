import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SolarSystemPage from "./pages/SolarSystemPage";
import NEOTrackerPage from "./pages/NEOTrackerPage";
import PACEMissionPage from "./pages/PACEMissionPage";
import GalleryPage from "./pages/GalleryPage";
import GamesPage from "./pages/GamesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solar-system" element={<SolarSystemPage />} />
          <Route path="/neo-tracker" element={<NEOTrackerPage />} />
          <Route path="/pace-mission" element={<PACEMissionPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/games" element={<GamesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
