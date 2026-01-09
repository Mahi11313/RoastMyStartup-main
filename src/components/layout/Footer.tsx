import { Link } from "react-router-dom";
import { Flame, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t-4 border-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Flame className="h-8 w-8 text-primary fill-primary" />
              <span>RoastMyStartup</span>
            </Link>
            <p className="text-secondary-foreground/80 max-w-md">
              Brutally honest AI feedback for startup ideas. 
              Because your friends are too nice to tell you the truth.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/roast" className="hover:text-primary transition-colors">
                  Get Roasted
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t-4 border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2024 RoastMyStartup. All feelings hurt intentionally.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 border-4 border-secondary-foreground/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 border-4 border-secondary-foreground/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
