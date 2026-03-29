import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";
// import AkioAgent from "./components/AkioAgent"; // Temporarily disabled
import Index from "./pages/Index";
import Work from "./pages/Work";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import CaseStudy from "./pages/CaseStudy";
import Inquiry from "./pages/Inquiry";
import BlogPost from "./pages/BlogPost";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
        <Route path="/work/:id" element={<PageTransition><CaseStudy /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/inquiry" element={<PageTransition><Inquiry /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <TooltipProvider>
        <LoadingScreen />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          {/* <AkioAgent /> — Temporarily disabled */}
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
