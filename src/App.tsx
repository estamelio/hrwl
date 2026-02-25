import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import Work from "./pages/Work";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import TheOneYouKeep from "./pages/case-studies/TheOneYouKeep";
import HrwlVisualIdentity from "./pages/case-studies/HrwlVisualIdentity";
import CoinbaseCommercial from "./pages/case-studies/CoinbaseCommercial";
import PersonalBranding from "./pages/case-studies/PersonalBranding";
import Inquiries from "./pages/Inquiries";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
        <Route path="/work/the-one-you-keep" element={<PageTransition><TheOneYouKeep /></PageTransition>} />
        <Route path="/work/hrwl-visual-identity" element={<PageTransition><HrwlVisualIdentity /></PageTransition>} />
        <Route path="/work/coinbase-commercial" element={<PageTransition><CoinbaseCommercial /></PageTransition>} />
        <Route path="/work/personal-branding" element={<PageTransition><PersonalBranding /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/inquiries" element={<PageTransition><Inquiries /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
