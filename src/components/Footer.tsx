import { Link } from "react-router-dom";
import hrwlLogo from "@/assets/hrwl-logo-white.png";
import hrwlLogoBlack from "@/assets/Hrwl-Logo-black.svg";
import { useTheme } from "next-themes";
import { Instagram, Linkedin, Youtube, Music2, ArrowUpRight } from "lucide-react";

interface FooterProps {
  catchphrase?: string;
}

const Footer = ({ catchphrase = "Let's create something worth watching." }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <img 
              src={theme === "dark" ? hrwlLogoBlack : hrwlLogo} 
              alt="HRWL" 
              className="h-8 w-auto mb-8" 
            />
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 max-w-md leading-tight">
              {catchphrase}
            </h3>
            <p className="text-background/50 leading-relaxed max-w-md mb-8">
              Freelance Motion Designer specializing in brand films and commercials for ambitious brands.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Youtube, href: "https://youtube.com/@hrwl", label: "YouTube" },
                { icon: Instagram, href: "https://instagram.com/hrwl", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com/in/hrwl", label: "LinkedIn" },
                { icon: Music2, href: "https://tiktok.com/@hrwl", label: "TikTok" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-background/5 flex items-center justify-center hover:bg-background/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/40">Explore</h4>
              <nav className="flex flex-col gap-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "Work", path: "/work" },
                  { name: "About", path: "/about" },
                  { name: "Blog", path: "/blog" }
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/40">Services</h4>
              <nav className="flex flex-col gap-3">
                {["Brand Films", "Commercials", "Motion Design", "Creative Direction"].map((item) => (
                  <span key={item} className="text-background/60 text-sm">{item}</span>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/40">Connect</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/inquiries" className="text-background/60 hover:text-background transition-colors text-sm flex items-center gap-1 group">
                  Start Inquiry
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <a href="mailto:hello@hrwl.co" className="text-background/60 hover:text-background transition-colors text-sm">
                  hello@hrwl.co
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">
                  Shop
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/40 text-sm">
              © {currentYear} HRWL LTD. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm">
              <Link to="/terms" className="text-background/40 hover:text-background/60 transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-background/40 hover:text-background/60 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
