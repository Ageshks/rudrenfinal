import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Boxes,
  Building2,
  ClipboardCheck,
  Factory,
  PackageOpen,
  ShieldCheck,
  ShipWheel,
  Lightbulb,
  MapPin,
  PackageCheck,
  TrendingUp,
  Users,
  Wrench,
  MessageCircle,
  Settings,
} from "lucide-react";

// Images
import imgHeroBg from "@/imports/Desktop4/97c894af9823ff82129bfbbb48427d94a2ce3f4c.png";
import imgLogo from "@/imports/Desktop4/temp.png";
import imgLogoFooter from "@/imports/Desktop4/f182632a468e9600d6b8aa35d2faf1758a10c1fc.png";
import imgArrow from "@/imports/Desktop4/1dcf11f743fb3e361f22adc9ceb9aa0081b688c1.png";
import imgService1 from "@/imports/Desktop4/hero2.png";
import imgService2 from "@/imports/Desktop4/e67c4f4570e04e2cb93d1f281464508a812c963f.png";
import imgServiceIcon from "@/imports/Desktop4/94a2b25219698f5290352e3a76eb545a689ab047.png";
import imgContactBg from "@/imports/Desktop4/263d454e41dee8500846eccac52cd410f16bc360.png";
import imgAbout1 from "@/imports/Desktop4/2e7331c34a976c7ab0994b36cfd511fdd4b390d3.png";
import imgAbout2 from "@/imports/Desktop4/hero3.png";
import imgAbout4 from "@/imports/Desktop4/f93556e8367633aee462667f8f07d0a1ec0deae9.png";
import imgHowWeWork1 from "@/imports/Desktop4/140a2a095936fa62f60027fa4cddc0091317025a.png";
import imgHowWeWork2 from "@/imports/Desktop4/283dae3bc8f6e671e7796987e514a441a314b83c.png";
import imgWhyChoose from "@/imports/Desktop4/0f6f140d69bde65948e2a520a4b9cd46f5367828.png";
import imgService4 from "@/imports/Desktop4/88d960a48e0d9b74509537c5e4d3951c88418ace.png";
import imgService5 from "@/imports/Desktop4/operational.png";


// tools and tackles images
import stellstrappingtool from "@/imports/Desktop4/steelstrapping tool.jpg"
import tools1 from "@/imports/Desktop4/composite strapping tool.webp"
import tools2 from "@/imports/Desktop4/industrial strapper.jpg"
import tools3 from "@/imports/Desktop4/nail gun.webp"
import tools4 from "@/imports/Desktop4/strap dispenser.jpg";

// Product images
import imgTap2 from "@/imports/Desktop4/be287914b7360e76e54cac06a9378852e3325f72.png";
import imgTap1 from "@/imports/Desktop4/74e1b2b50aa84ffd774e63fb6b1a4037e4231a80.png";
import imgTap26 from "@/imports/Desktop4/9fa626f9faebe5c95346a336e4406f44726bb9f6.png";
import imgTap27 from "@/imports/Desktop4/62f33ea27bfcfeedfc019d8a33225f563b0bb05c.png";
import imgTap28 from "@/imports/Desktop4/350fa1a7bb3cd26c4d9a028cf3d3c902d5405395.png";
import imgTap29 from "@/imports/Desktop4/a81788e50288050bfeb411a1ae8fed326b5227fc.png";
import imgTap30 from "@/imports/Desktop4/1ce86bb8d65aec1e862422d4df6e5ba129d7710f.png";
import imgTap31 from "@/imports/Desktop4/cad8e5bb604e3f5bfa219a8d1759eb1d8aaf40de.png";
import imgTap32 from "@/imports/Desktop4/17c77d652cadf7eaeaade2ac5cae076d55a66969.png";
import imgTap33 from "@/imports/Desktop4/b0a88ca9b70930c3687640b040801a66710e3da4.png";
import imgTap34 from "@/imports/Desktop4/220b3ff6972e9c45a18e356bd057b773f7858898.png";
import imgTap35 from "@/imports/Desktop4/a8e408a555374bb666f2706c92044b2d3b92973d.png";
import imgTap36 from "@/imports/Desktop4/9e4108870a017c68f06063510fa6ca196b46c5f1.png";

// Itipack product images
import imgItipack1 from "@/imports/Desktop4/itipack/1.jpg";
import imgItipack2 from "@/imports/Desktop4/itipack/2.jpg";
import imgItipack3 from "@/imports/Desktop4/itipack/3.jpg";
import imgItipack4 from "@/imports/Desktop4/itipack/4.jpg";
import imgItipack5 from "@/imports/Desktop4/itipack/5.jpg";
import imgItipack6 from "@/imports/Desktop4/itipack/6.jpg";
import imgItipack7 from "@/imports/Desktop4/itipack/7.png";
import imgItipack8 from "@/imports/Desktop4/itipack/8.png";
import imgItipack9 from "@/imports/Desktop4/itipack/9.png";
import imgItipack10 from "@/imports/Desktop4/itipack/10.png";
import imgItipack11 from "@/imports/Desktop4/itipack/11.png";
import imgItipack12 from "@/imports/Desktop4/itipack/12.png";
import imgItipack13 from "@/imports/Desktop4/itipack/13.png";
import imgItipack14 from "@/imports/Desktop4/itipack/14.png";
import imgItipack15 from "@/imports/Desktop4/itipack/15.png";
import imgItipack16 from "@/imports/Desktop4/itipack/16.png";
import imgItipack17 from "@/imports/Desktop4/itipack/17.png";
import iti11 from "@/imports/Desktop4/iti/iti11.png";
import iti12 from "@/imports/Desktop4/iti/iti12.png";
import iti14 from "@/imports/Desktop4/iti/iti14.png";
import iti18 from "@/imports/Desktop4/iti/iti18.png";
import iti20 from "@/imports/Desktop4/iti/iti20.png";
import iti21 from "@/imports/Desktop4/iti/iti21.png";
import iti22 from "@/imports/Desktop4/iti/iti22.png";
import iti23 from "@/imports/Desktop4/iti/iti23.png";
import iti24 from "@/imports/Desktop4/iti/iti24.png";
import iti25 from "@/imports/Desktop4/iti/iti25.png";
import iti27 from "@/imports/Desktop4/iti/iti27.png";




// Atlanta product images
import imgAtlantaSemi1 from "@/imports/Desktop4/atlanta semi 1.jpg";
import imgAtlantaSemi2 from "@/imports/Desktop4/atlanta semi 2.jpg";
import imgAtlantaSemi3 from "@/imports/Desktop4/atlanta semi 3.jpg";
import imgAtlantaSemi4 from "@/imports/Desktop4/atlanta semi 4.jpg";
import imgAtlantaSemi5 from "@/imports/Desktop4/atlanta semi 5.jpg";
import imgAtlantaSemi6 from "@/imports/Desktop4/atlanta semi 6.jpg";
import imgAtlantaAuto1 from "@/imports/Desktop4/atlanta auto 1.jpg";
import imgAtlantaAuto2 from "@/imports/Desktop4/atlanta auto 2.jpg";
import imgAtlantaAuto3 from "@/imports/Desktop4/atlanta auto 3.jpg";
import imgAtlantaAuto4 from "@/imports/Desktop4/atlanta auto 4.jpg";
import imgAtlantaAuto5 from "@/imports/Desktop4/atlanta auto 5.jpg";
import imgAtlantaAuto6 from "@/imports/Desktop4/atlanta auto 6.jpg";
import imgAtlantaAuto7 from "@/imports/Desktop4/atlanta auto 7.jpg";
import eva from "@/imports/Desktop4/EVA.png";
import omegadouble from "@/imports/Desktop4/Omega-Double.png";
import omega from "@/imports/Desktop4/omega.png";
import SYNTHESI from "@/imports/Desktop4/SYNTHESI.png";
import MYTHO from "@/imports/Desktop4/mytho.png";



// Industry images - row 1
import imgInd1 from "@/imports/Desktop4/4b100d619ce1eb929bab789d67c1c07bf9a07a7e.png";
import imgInd2 from "@/imports/Desktop4/5d212aaa06aeb6b33e5e6140a79aa8d3d5f2a9c0.png";
import imgInd3 from "@/imports/Desktop4/3b0ff27aaab726f8e21a99bab935ff5adfa7978c.png";
import imgInd4 from "@/imports/Desktop4/8746574c61bd20aeaf03bddc4a9333135149a834.png";
// row 2
import imgInd5 from "@/imports/Desktop4/745d14adf6f2875c84bac9fd5e56993f12692698.png";
import imgInd6 from "@/imports/Desktop4/bef683c9605a203fd2cffc07c1f7aced84c9ade0.png";
import imgInd7 from "@/imports/Desktop4/2edb0b34e47249ee645ed0b65da2d65b1dfb0791.png";
import imgInd8 from "@/imports/Desktop4/a1bd9fcc0d9e2234a1a7217060d86fdb8990ba23.png";
// row 3
import imgInd9 from "@/imports/Desktop4/f99cbd6bf35639ea01b671aca47679b828655cdd.png";
import imgInd10 from "@/imports/Desktop4/7c660ed760f8614acac44ed963734c6a22ecb300.png";
import imgInd11 from "@/imports/Desktop4/b8f91832dff27c345a43aaf247571dd2a9e8b435.png";
import imgInd12 from "@/imports/Desktop4/946cc2697c181c67c89993a70c5bdb30c53d2057.png";

// Contact icons
import imgPhone from "@/imports/Desktop4/2c89a6aa5ab0caa033725718ec1ab3f6835795db.png";
import imgEmail from "@/imports/Desktop4/10b4759fa9a08551c8744271de4155e6ce13fea3.png";
const imgLocation = "";

type Page = "home" | "products" | "about" | "services" | "industries" | "tools" | "contact";
type ProductCategory = "all" | "atlanta" | "atlanta-semi" | "atlanta-auto" | "itipack";
type ProductInfo = {
  img: string;
  name: string;
  desc: string;
  features: string[];
  brand?: string;
};

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar({ current, navigate }: { current: Page; navigate: (p: Page, category?: ProductCategory) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const links: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "services" },
    { label: "Products", page: "products" },
    { label: "Tools & Tackles", page: "tools" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo - top left */}
        <button onClick={() => navigate("home")} className="flex-shrink-0 bg-transparent">
          <img src={imgLogo} alt="Rudren Solutions" className="h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] w-auto transform scale-125 hover:scale-130 transition-transform bg-transparent" />
        </button>

        {/* Desktop nav - right side */}
        <div className="relative top-4 hidden lg:flex items-center gap-8">
          {links.map(({ label, page }) => (
            <div key={page} className="relative">
              {page === "products" ? (
                <div className="relative">
                  <button
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    className={`font-['Inter',sans-serif] font-bold text-[14px] text-white hover:text-[#cd0606] transition-colors ${
                      current === page ? "text-[#cd0606]" : ""
                    }`}
                  >
                    {label}
                  </button>
                  {productsDropdownOpen && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-[8px] shadow-[0px_10px_30px_rgba(0,0,0,0.2)] overflow-hidden"
                    >
                      <button
                        onClick={() => {
                          navigate("products", "all");
                          setProductsDropdownOpen(false);
                        }}
                        className="w-full text-left px-6 py-3 font-['Inter',sans-serif] font-bold text-[15px] text-black hover:bg-[#cd0606] hover:text-white transition-colors"
                      >
                        All Products
                      </button>
                      <button
                        onClick={() => {
                          navigate("products", "atlanta");
                          setProductsDropdownOpen(false);
                        }}
                        className="w-full text-left px-6 py-3 font-['Inter',sans-serif] font-bold text-[15px] text-black hover:bg-[#cd0606] hover:text-white transition-colors"
                      >
                        Atlanta
                      </button>
                      <button
                        onClick={() => {
                          navigate("products", "itipack");
                          setProductsDropdownOpen(false);
                        }}
                        className="w-full text-left px-6 py-3 font-['Inter',sans-serif] font-bold text-[15px] text-black hover:bg-[#cd0606] hover:text-white transition-colors"
                      >
                        Itipack
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => {
                    navigate(page);
                    setProductsDropdownOpen(false);
                  }}
                  className={`font-['Inter',sans-serif] font-bold text-[14px] text-white hover:text-[#cd0606] transition-colors ${
                    current === page ? "text-[#cd0606]" : ""
                  }`}
                >
                  {label}
                </button>
              )}
            </div>
          ))}
          <button
            onClick={() => navigate("contact")}
            className={`flex items-center gap-1.5 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[6px] px-4 h-[36px] ${current === "contact" ? "invisible" : ""}`}
          >
            <span className="font-['Inter',sans-serif] font-bold text-[12px] text-white">Get Started</span>
            <img src={imgArrow} alt="" className="h-3.5 w-auto" />
          </button>
        </div>

        {/* Mobile hamburger - right side */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-[5px] p-2"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm px-6 pb-6 flex flex-col gap-4">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => { navigate(page); setMenuOpen(false); }}
                  className={`text-left font-['Inter',sans-serif] font-bold text-[14px] text-white hover:text-[#cd0606] transition-colors ${
                    current === page ? "text-[#cd0606]" : ""
                  }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => { navigate("contact"); setMenuOpen(false); }}
            className="flex items-center gap-2 bg-[#cd0606] rounded-[8px] px-5 py-3 w-fit"
          >
            <span className="font-['Inter',sans-serif] font-bold text-[12px] text-white">Get Started</span>
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <footer className="bg-[#18196d] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-14">
        <h3 className="text-2xl font-bold text-white mb-4 text-left">
          Rudren 
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15">
          
          {/* Company Info */}
          <div>
            <p className="text-white/70 leading-relaxed max-w-md text-sm">
              Delivering innovative packaging solutions, machinery supply,
              cargo packaging, and on-site packaging services for industries
              across India.
            </p>

            {/* <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#cd0606] transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#cd0606] transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#cd0606] transition-all flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              {(["home", "about", "services", "contact"] as Page[]).map(
                (p) => (
                  <button
                    key={p}
                    onClick={() => navigate(p)}
                    className="text-left hover:text-[#cd0606] transition-colors capitalize"
                  >
                    {p}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Products
            </h4>

            <div className="flex flex-col gap-3 text-sm text-white/70">
              {[
                "Wrapping Machines",
                "Strapping Machines",
                "Packaging Tools",
                "All Products",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => navigate("products")}
                  className="text-left hover:text-[#cd0606] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              Contact Us
            </h4>

            <div className="space-y-4 text-sm text-white/70">
              <div>
                <p className="font-medium text-white mb-1">
                  Phone
                </p>
                <p>+91 96070 24997</p>
              </div>

              <div>
                <p className="font-medium text-white mb-1">
                  Email
                </p>
                <a
                  href="mailto:info@rudren.com"
                  className="hover:text-[#cd0606] transition-colors"
                >
                  info@rudren.com
                </a>
              </div>

              <div>
                <p className="font-medium text-white mb-1">
                  Location
                </p>
                <p>Goa, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-white/50 text-sm text-center md:text-left">
              © 2026 Rudren Solutions. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-white/60">
              <button className="hover:text-white transition-colors">
                Privacy Policy
              </button>

              <button className="hover:text-white transition-colors">
                Terms & Conditions
              </button>

              <button className="hover:text-white transition-colors">
                Sitemap
              </button>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Section heading helper ───────────────────────────────────────────────────

function SectionHeading({ pre, highlight, post }: { pre?: string; highlight: string; post?: string }) {
  return (
    <div className="mb-2">
      <h2 className="font-['Inter',sans-serif] font-bold text-[40px] text-black leading-tight">
        {pre && <span>{pre}</span>}
        <span className="text-[#cd0606]">{highlight}</span>
        {post && <span>{post}</span>}
      </h2>
      <div className="w-[66px] h-[4px] bg-[#cd0606] mt-3" />
    </div>
  );
}

// ─── Industry card ────────────────────────────────────────────────────────────

function IndustryCard({ img, label }: { img: string; label: string }) {
  return (
    <div
      className="relative w-[240px] h-[220px] rounded-[24px] overflow-hidden shadow-[0px_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0px_30px_80px_rgba(0,0,0,0.4)] bg-white transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image Section - full card height */}
      <div className="relative h-full w-full overflow-hidden">
        <img src={img} alt={label} className="w-full h-full object-cover" />
      </div>

      {/* Bottom Overlay with Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/90 via-white/80 to-transparent">
        <h3 className="font-['Inter',sans-serif] font-bold text-[14px] text-black text-center leading-tight">
          {label}
        </h3>
      </div>
    </div>
  );
}

function ProductModal({ product, onClose, navigate }: { product: ProductInfo; onClose: () => void; navigate: (p: Page) => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 py-2 sm:px-4 sm:py-6 bg-black/55 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 w-full max-w-[95vw] sm:max-w-[1000px] max-h-[95vh] overflow-y-auto rounded-[12px] sm:rounded-[30px] border border-white/20 bg-white/10 p-2 sm:p-6 shadow-2xl backdrop-blur-xl">
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute right-1 top-1 sm:right-6 sm:top-6 z-20 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-white bg-[#cd0606] text-white text-lg sm:text-xl font-bold shadow-lg hover:bg-[#a80404] transition-colors"
        >
          ×
        </button>
        <div className="grid gap-3 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[8px] sm:rounded-[24px] bg-white">
            <img src={product.img} alt={product.name} className="h-[250px] sm:h-[400px] md:h-[500px] w-full object-contain" />
          </div>
          <div className="flex flex-col justify-between rounded-[8px] sm:rounded-[24px] bg-white/90 p-3 sm:p-8 shadow-[0px_20px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#cd0606]">Product Details</span>
              <h3 className="mt-4 text-[32px] font-bold text-[#101010]">{product.name}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-slate-700">{product.desc}</p>
              <div className="mt-6 space-y-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#cd0606]" />
                    <p className="text-[15px] text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[13px] uppercase tracking-[0.35em] text-slate-500">Need help selecting?</p>
                <p className="text-[14px] text-slate-600">Our team can recommend the best option.</p>
              </div>
              <button
                onClick={() => navigate("contact")}
                className="inline-flex items-center justify-center rounded-[10px] bg-[#cd0606] px-6 py-3 font-semibold text-white transition hover:bg-[#a80404]"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Product card ─────────────────────────────────────────────────────────────

function ProductCard({ img, name, onClick }: { img: string; name: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-[0px_10px_40px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0px_20px_50px_rgba(0,0,0,0.12)]"
    >
      <div className="relative h-[280px] sm:h-[320px] md:h-[350px] overflow-hidden">
        <img src={img} alt={name} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/70 px-4 py-3 text-white transition-transform duration-300 group-hover:translate-y-0">
          <span className="font-semibold">View Details</span>
        </div>
      </div>
      <div className="p-3 sm:p-5 border-t-2 border-[#cd0606] text-center">
        <p className="font-['Inter',sans-serif] font-bold text-[12px] sm:text-[14px] text-black leading-tight line-clamp-2">{name}</p>
      </div>
    </button>
  );
}

// ─── Industry Carousel ───────────────────────────────────────────────────────

function IndustryCarousel() {
  const allIndustries = [
    { img: imgInd1, label: "PHARMACEUTICAL" },
    { img: imgInd2, label: "CHEMICAL" },
    { img: imgInd3, label: "FISH & SEAFOOD PROCESSING" },
    { img: imgInd4, label: "MINING & MINERALS" },
    { img: imgInd5, label: "HEAVY ENGINEERING" },
    { img: imgInd6, label: "STEEL & ALUMINIUM" },
    { img: imgInd7, label: "FOOD PROCESSING" },
    { img: imgInd8, label: "EXPORT AND LOGISTICS" },
    { img: imgInd9, label: "GLASS & CERAMICS" },
    { img: imgInd10, label: "ENERGY & POWER" },
    { img: imgInd11, label: "SHIPPING" },
    { img: imgInd12, label: "CARGO SECURING" },
  ];

  // Duplicate items 2 times for seamless infinite loop
  const duplicatedIndustries = [...allIndustries, ...allIndustries];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex gap-5 animate-scroll">
        {duplicatedIndustries.map((ind, idx) => (
          <div key={idx} className="flex-shrink-0">
            <IndustryCard img={ind.img} label={ind.label} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  const [heroVisible, setHeroVisible] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    { img: imgHeroBg, badge: "INDUSTRIAL PACKAGING", title: "PACKAGING BUILT\nAROUND YOUR\nOPERATION", desc: "From requirement assessment and material supply to dedicated on-site packaging teams — Rudren Solutions manages your entire packaging process, so your team can focus on what they do best." },
    { img: imgService1, badge: "ON-SITE PACKAGING", title: "DEDICATED\nON-SITE PACKAGING\nSOLUTIONS", desc: "Our expert teams deploy directly to your facility, managing packaging operations with precision, efficiency, and complete accountability — ensuring seamless integration with your production line." },
    { img: imgAbout2, badge: "OUR PRODUCTS", title: "PREMIUM\nPACKAGING\nCONSUMABLES", desc: "From high-performance tapes and strapping to stretch films and machinery — we supply a comprehensive range of industrial packaging materials trusted by manufacturers across Goa." },
  ];

  useEffect(() => {
    const timer = window.setTimeout(() => setHeroVisible(true), 100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const industries1 = [
    { img: imgInd1, label: "PHARMACEUTICAL" },
    { img: imgInd2, label: "CHEMICAL" },
    { img: imgInd3, label: "FISH & SEAFOOD PROCESSING" },
    { img: imgInd4, label: "MINING & MINERALS" },
  ];
  const industries2 = [
    { img: imgInd5, label: "HEAVY ENGINEERING" },
    { img: imgInd6, label: "STEEL & ALUMINIUM" },
    { img: imgInd7, label: "FOOD PROCESSING" },
    { img: imgInd8, label: "EXPORT AND LOGISTICS" },
  ];

  const [selectedProduct, setSelectedProduct] = useState<ProductInfo | null>(null);
  const products: ProductInfo[] = [
   
    {
      img: imgTap26,
      name: "STEEL STRAP",
      desc: "Durable steel strapping ideal for heavy loads and industrial packaging applications that demand maximum strength.",
      features: ["Heavy-duty performance", "Corrosion resistant finish", "High load stability"],
    },
    {
      img: imgTap27,
      name: "PET STRAP",
      desc: "Flexible PET strapping for secure bundling, pallet stabilization, and reliable protection in transit.",
      features: ["High elongation", "Lightweight strength", "Safe handling"],
    },
    {
      img: imgTap28,
      name: "COMPOSITE STRAP",
      desc: "Composite strapping engineered for strong tension and fast application on a wide variety of packaged goods.",
      features: ["High yield strength", "Consistent tension", "Easy to seal"],
    },
     {
      img: imgTap1,
      name: "ALL TYPES OF TAPES",
      desc: "High-performance packaging tape designed for strong adhesion, smooth application, and secure transport handling.",
      features: ["Strong tear resistance", "Residue-free removal", "Multi-surface adhesion"],
    },
  ];

  const closeProductModal = () => setSelectedProduct(null);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => (
            <img
              key={idx}
              src={slide.img}
              alt=""
              data-parallax-speed="0.22"
              className={`absolute w-full h-full object-cover object-center transition-opacity duration-1000 ${
                idx === heroSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Slider Controls */}
        <button
          type="button"
          aria-label="Previous hero slide"
          onClick={() => setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30 lg:inline-flex"
        >
          <span className="text-white text-2xl">‹</span>
        </button>

        <button
          type="button"
          aria-label="Next hero slide"
          onClick={() => setHeroSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 z-20 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <span className="text-white text-2xl">›</span>
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === heroSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-16 pt-[90px] pb-12 md:pb-16">
          <div className="max-w-[760px]">
            <div className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-4 md:mb-6">
              <span className="font-['Inter',sans-serif] font-bold text-[10px] sm:text-[12px] md:text-[13px] text-white uppercase tracking-wider">
                {heroSlides[heroSlide].badge}
              </span>
            </div>
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight mb-4 md:mb-6 whitespace-pre-line">
              {heroSlides[heroSlide].title.split('\n').map((line, i) => (
                <span key={i}>
                   {(heroSlide === 0 && (i === 0 || i === 2)) || (heroSlide !== 0 && (line.includes('ON-SITE') || line.includes('PREMIUM'))) ? (
                    <span className="text-[#cd0606]">{line}</span>
                  ) : (
                    line
                  )}
                  {i < heroSlides[heroSlide].title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="font-['Inter',sans-serif] text-white text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-[620px] mb-6 md:mb-8">
              {heroSlides[heroSlide].desc}
            </p>
            <div className="flex flex-wrap gap-3">
              {heroSlide === 1 && (
                <button
                  onClick={() => navigate("contact")}
                  className="flex items-center gap-2 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[8px] px-5 h-[46px]"
                >
                  <span className="font-['Inter',sans-serif] font-bold text-white text-[15px]">Get Consultation</span>
                  <img src={imgArrow} alt="" className="h-4 w-auto" />
                </button>
              )}
              {heroSlide === 2 && (
                <button
                  onClick={() => navigate("products")}
                  className="flex items-center gap-2 border border-white rounded-[8px] px-5 h-[46px] hover:bg-white/10 transition-colors"
                >
                  <span className="font-['Inter',sans-serif] font-bold text-white text-[15px]">Explore Products</span>
                  <img src={imgArrow} alt="" className="h-4 w-auto" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About + How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-14 items-center mb-16">
            <div>
              <div className="uppercase tracking-[0.35em] font-['Inter',sans-serif] text-[#cd0606] text-[14px] mb-4">ABOUT</div>
              <h2 className="font-['Inter',sans-serif] font-bold text-[48px] md:text-[56px] text-black leading-tight mb-6">
                Goa&apos;s Industrial<br />packaging solutions<br />Company
              </h2>
              <p className="font-['Inter',sans-serif] text-[18px] text-black/80 leading-relaxed max-w-[620px] mb-8">
                Rudren Solutions delivers complete industrial packaging solutions for manufacturers, processors, and exporters across Goa. We provide the right materials, tools, and on-site support to manage packaging operations end-to-end.
              </p>
              <button
                onClick={() => navigate("contact")}
                className="flex items-center gap-3 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[8px] px-7 h-[56px]"
              >
                <span className="font-['Inter',sans-serif] font-bold text-white text-[18px]">Get in Touch</span>
                <img src={imgArrow} alt="" className="h-5 w-auto" />
              </button>
            </div>

            <div className="relative h-[520px] overflow-hidden rounded-[30px]">
              <div className="absolute -right-8 top-8 w-[68%] h-[90%] bg-[#cd0606]/10 rounded-[40px] -z-10" />
              <img src={imgAbout4} alt="Warehouse operations" data-parallax-speed="0.12" className="w-full h-full object-cover rounded-[30px] shadow-[0px_20px_60px_rgba(0,0,0,0.12)]" />
            </div>
          </div>

          <div className="text-center mb-10">
            <div className="w-[66px] h-[4px] bg-[#cd0606] mx-auto mb-4" />
            <h2 className="font-['Inter',sans-serif] font-bold text-[28px] sm:text-[32px] md:text-[40px] text-black mb-4">How We Work</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 xl:gap-10">
            {[
              {
                step: "01",
                title: "Understand Your Requirements",
                desc: "We listen, assess, and understand your needs to deliver the best packaging solution.",
                color: "#cd0606",
                icon: ClipboardCheck,
              },
              {
                step: "02",
                title: "Design the Right Solution",
                desc: "We design customized solutions using the right products, machinery, and expertise.",
                color: "#082343",
                icon: Lightbulb,
              },
              {
                step: "03",
                title: "Supply & Deploy",
                desc: "We supply quality products and deploy them efficiently at your site to ensure smooth operations.",
                color: "#cd0606",
                icon: PackageCheck,
              },
              {
                step: "04",
                title: "Support & Improve",
                desc: "We provide continuous support and look for ways to improve your packaging performance.",
                color: "#082343",
                icon: TrendingUp,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  {index < 3 && (
                    <div className="hidden xl:block absolute left-[calc(100%-6px)] top-[43%] z-20 w-12 border-t-2 border-dashed border-[#082343]/70">
                      <span className="absolute -right-1 -top-[5px] h-0 w-0 border-y-[5px] border-l-[9px] border-y-transparent" style={{ borderLeftColor: index === 1 ? "#cd0606" : "#082343" }} />
                    </div>
                  )}
                  <div className="group relative min-h-[285px] rounded-[999px] bg-white px-6 pb-8 pt-16 text-center shadow-[0px_14px_35px_rgba(8,35,67,0.14)] ring-1 ring-black/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0px_24px_55px_rgba(8,35,67,0.22)]">
                    <div className="absolute left-1/2 top-0 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-white text-white shadow-[0px_12px_26px_rgba(8,35,67,0.22)] transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: item.color }}>
                      <div className="flex h-full w-full items-center justify-center">
                        <Icon className="h-10 w-10" strokeWidth={1.8} />
                      </div>
                    </div>
                    <div className="absolute inset-x-6 top-4 h-[115px] rounded-t-full border-t border-x opacity-80 transition-opacity duration-500 group-hover:opacity-100" style={{ borderColor: item.color }} />
                    <p className="relative font-['Inter',sans-serif] text-[44px] font-bold leading-none mb-4" style={{ color: item.color }}>
                      {item.step}
                    </p>
                    <h3 className="relative font-['Inter',sans-serif] font-bold text-[15px] sm:text-[16px] uppercase leading-tight mb-4" style={{ color: item.color }}>
                      {item.title}
                    </h3>
                    <p className="relative font-['Inter',sans-serif] text-[14px] text-black/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Companies Choose Rudren */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-8 md:mb-10">
            <h2 className="font-['Inter',sans-serif] font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-black leading-tight text-center">
              Why Companies Choose Rudren
            </h2>
            <div className="w-[66px] h-[4px] bg-[#cd0606] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "One Accountable Partner",
                desc: "Single point of contact from consultation to execution.",
                accent: "#145bd7",
                icon: Users,
                visual: "from-[#163a71] via-[#1d63ba] to-[#d7e9ff]",
              },
              {
                title: "Goa-Based, Operationally Present",
                desc: "Local support with quick response and site visits.",
                accent: "#2e7d32",
                icon: MapPin,
                visual: "from-[#1f5f31] via-[#5b9b4b] to-[#dff2d8]",
              },
              {
                title: "Requirement-Led Solutions",
                desc: "Packaging solutions designed around your operations.",
                accent: "#ff7900",
                icon: Boxes,
                visual: "from-[#9b4b00] via-[#ff7900] to-[#ffe0bf]",
              },
              {
                title: "Industrial-Grade Capability",
                desc: "Quality materials, trained teams, and proven processes.",
                accent: "#082343",
                icon: Factory,
                visual: "from-[#082343] via-[#274b75] to-[#d8e4f0]",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative min-h-[250px] sm:min-h-[300px] lg:min-h-[390px] overflow-hidden rounded-[10px] bg-white text-center shadow-[0px_10px_28px_rgba(8,35,67,0.16)] ring-1 ring-black/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0px_26px_60px_rgba(8,35,67,0.24)]"
                >
                  <div className={`relative h-[170px] overflow-hidden bg-gradient-to-br ${item.visual}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
                    <Icon className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-white/85 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div className="relative px-6 pb-8 pt-14">
                    <div className="absolute left-1/2 top-0 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-white text-white shadow-[0px_10px_24px_rgba(0,0,0,0.22)] transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: item.accent }}>
                      <Icon className="h-9 w-9" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-['Inter',sans-serif] font-bold text-[18px] sm:text-[20px] uppercase leading-tight mb-4" style={{ color: item.accent }}>
                      {item.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] text-[15px] text-black/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[6px] transition-all duration-500 group-hover:h-[9px]" style={{ backgroundColor: item.accent }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-8 md:mb-12">
            <div className="w-[66px] h-[4px] bg-[#cd0606] mb-4" />
            <h2 className="font-['Inter',sans-serif] font-bold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[56px] text-black leading-tight">
              What We <span className="text-[#cd0606]">Offer</span>
            </h2>
          </div>
          <p className="font-['Inter',sans-serif] text-[16px] sm:text-[18px] md:text-[20px] text-black max-w-[550px] mb-8 md:mb-12">
            Innovative solutions designed to improve efficiency, ensure safety and drive your business forward
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Service card 1 */}
            <div className="bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="h-[240px] overflow-hidden">
                <img src={imgService4} alt="Packaging Solutions" data-parallax-speed="0.12" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-[55px] h-[55px] bg-[#cd0606] rounded-full flex items-center justify-center">
                    <img src={imgServiceIcon} alt="" className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="font-['Inter',sans-serif] font-bold text-[20px] text-black">Packaging Solutions</h3>
                </div>
                <div className="w-[41px] h-[4px] bg-[#cd0606] mb-3" />
                <p className="font-['Inter',sans-serif] text-[15px] text-black/80">
                  Requirement-led industrial packaging tailored to your product, storage, and transit needs.
                </p>
              </div>
            </div>
            {/* Service card 2 - Featured */}
            <div className="bg-white rounded-[10px] shadow-[0px_8px_16px_rgba(205,6,6,0.2)] overflow-hidden ring-2 ring-[#cd0606]">
              <div className="h-[240px] overflow-hidden relative">
                <img src={imgAbout4} alt="Onsite Packaging" data-parallax-speed="0.12" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-[#cd0606] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-[55px] h-[55px] bg-[#cd0606] rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-['Inter',sans-serif] font-bold text-[20px] text-black">On-site Packaging</h3>
                </div>
                <div className="w-[41px] h-[4px] bg-[#cd0606] mb-3" />
                <p className="font-['Inter',sans-serif] text-[15px] text-black/80">
                  Dedicated on-site packaging teams deployed at your facility to manage packaging operations with precision and efficiency.
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate("services")}
            className="flex items-center gap-3 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[10px] px-8 h-[60px]"
          >
            <span className="font-['Inter',sans-serif] font-bold text-white text-[20px]">View All Services</span>
            <img src={imgArrow} alt="" className="h-5 w-auto" />
          </button>
        </div>
      </section>

      {/* Industries We Serve (preview) */}
      <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-['Inter',sans-serif] font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-black">
              Industries <span className="text-[#cd0606]">We Serve</span>
            </h2>
          </div>
        </div>
        <IndustryCarousel />
      </section>

      {/* Products teaser */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="font-['Inter',sans-serif] font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-black">
              Our <span className="text-[#cd0606]">Products</span>
            </h2>
            <p className="font-['Inter',sans-serif] font-bold text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-[#cd0606] mt-2">Premium Packaging Consumables</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-6 md:mt-10 mb-6 md:mb-10">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                img={product.img}
                name={product.name}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate("products")}
              className="inline-flex items-center gap-3 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[10px] px-8 h-[56px]"
            >
              <span className="font-['Inter',sans-serif] font-bold text-white text-[18px]">View All Products</span>
              <img src={imgArrow} alt="" className="h-5 w-auto" />
            </button>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeProductModal} navigate={navigate} />
      )}
    </>
  );
}

// ─── PRODUCTS PAGE ────────────────────────────────────────────────────────────

function ProductsPage({ navigate, initialCategory }: { navigate: (p: Page, category?: ProductCategory) => void; initialCategory?: ProductCategory }) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(initialCategory || "all");
  const [selectedProduct, setSelectedProduct] = useState<ProductInfo | null>(null);

  useEffect(() => {
    if (initialCategory && (initialCategory === "all" || initialCategory === "atlanta" || initialCategory === "atlanta-semi" || initialCategory === "atlanta-auto" || initialCategory === "itipack")) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const allProducts: ProductInfo[] = [
    
    {
      img: imgTap26,
      name: "STEEL STRAP",
      brand: "all",
      desc: "Durable steel strapping for heavy-duty bundling, pallet stabilization, and industrial load control.",
      features: ["High tensile strength", "Rust-resistant finish", "Reliable sealing"],
    },
    {
      img: imgTap27,
      name: "PET STRAP",
      brand: "all",
      desc: "Flexible PET strapping that offers excellent strength and safer handling for a wide range of packaging applications.",
      features: ["Lightweight strength", "Good elongation", "Weather resistant"],
    },
    {
      img: imgTap28,
      name: "COMPOSITE STRAP",
      brand: "all",
      desc: "Composite strapping combines strength and consistency for efficient automated and manual sealless packaging.",
      features: ["High break load", "Consistent tension", "Easy to seal"],
    },
    {
      img: imgTap2,
      name: "ALL TYPES OF TAPES",
      brand: "all",
      desc: "High-quality packaging tape engineered to secure pallet loads and protect goods during transport.",
      features: ["Strong adhesion", "Smooth unwind", "Residue-free removal"],
    },
    {
      img: imgTap29,
      name: "NON-RESIDUAL TAPES",
      brand: "all",
      desc: "Clean-release tape for applications where residue-free removal is essential after packaging or bundling.",
      features: ["No adhesive residue", "Strong hold", "Clean finish"],
    },
    {
      img: imgTap30,
      name: "ALL TYPES OF SEALS",
      brand: "all",
      desc: "A complete range of sealing solutions for strapping, bundling, and transport security.",
      features: ["Secure locking", "High durability", "Wide compatibility"],
    },
    {
      img: imgTap31,
      name: "GALVANIZED BUCKLES",
      brand: "all",
      desc: "Corrosion-resistant buckles engineered for safe and reliable strapping connections.",
      features: ["Galvanized coating", "Strong grip", "Easy installation"],
    },
    {
      img: imgTap32,
      name: "STRETCH FILM",
      brand: "all",
      desc: "Industrial stretch film for pallet wrapping and load containment, designed for excellent cling and tear resistance.",
      features: ["High puncture resistance", "Superior cling", "Load stability"],
    },
    {
      img: imgAtlantaSemi1,
      name: "SEMI-AUTO WRAPPER",
      brand: "atlanta-semi",
      desc: "Semi-automatic stretch wrapper for medium-volume operations with easy manual loading.",
      features: ["Semi-automatic", "Easy operation", "Cost-effective"],
    },
    {
      img: imgAtlantaSemi2,
      name: "SEMI-AUTO TURNTABLE WRAPPER",
      brand: "atlanta-semi",
      desc: "Semi-automatic turntable wrapper for standard pallet wrapping with manual film application.",
      features: ["Turntable base", "Manual operation", "Compact design"],
    },
    {
      img: imgAtlantaSemi3,
      name: "SEMI-AUTO ROTARY ARM WRAPPER",
      brand: "atlanta-semi",
      desc: "Semi-automatic rotary arm wrapper for heavy loads with rotating arm mechanism.",
      features: ["Rotary arm", "Heavy load capacity", "Semi-auto control"],
    },
    {
      img: imgAtlantaSemi4,
      name: "SEMI-AUTO ORBITAL WRAPPER",
      brand: "atlanta-semi",
      desc: "Semi-automatic orbital stretch wrapper for long and irregular shaped loads.",
      features: ["Orbital system", "Versatile loading", "Manual film feed"],
    },
    {
      img: imgAtlantaSemi5,
      name: "SEMI-AUTO RING WRAPPER",
      brand: "atlanta-semi",
      desc: "Semi-automatic ring wrapper for rotating film application around stationary loads.",
      features: ["Ring mechanism", "Stationary load", "Consistent tension"],
    },
    {
      img: SYNTHESI,
      name: "SYNTHESI WITH ARM",
      brand: "atlanta-semi",
      desc: "Semi-automatic ring wrapper for rotating film application around stationary loads.",
      features: ["The installation does not require the presence of a technician and can be done directly by the customer", "The turntable for wrapping any type of pallet", "Can be placed in rooms without full height"],
    },
    {
      img: eva,
      name: "EVA",
      brand: "atlanta-semi",
      desc: "Semi-automatic ring wrapper for rotating film application around stationary loads.",
      features: ["Maximum handling simplicity", "Cost-effectiveness by using thin or pre-stretched film", "Consistent tension"],
    },
     
    {
      img: imgAtlantaAuto3,
      name: "AUTO TURNTABLE WRAPPER",
      brand: "atlanta-auto",
      desc: "Fully automatic turntable wrapper with PLC control and touch screen interface.",
      features: ["Fully automatic", "PLC control", "Touch screen HMI"],
    },
    {
      img: imgAtlantaAuto4,
      name: "AUTO ROTARY ARM WRAPPER",
      brand: "atlanta-auto",
      desc: "High-speed automatic rotary arm wrapper for high-volume production lines.",
      features: ["High-speed", "Automatic film cutting", "Production line ready"],
    },
    {
      img: imgAtlantaAuto5,
      name: "AUTO ORBITAL WRAPPER",
      brand: "atlanta-auto",
      desc: "Fully automatic orbital wrapper with conveyor system for continuous operation.",
      features: ["Fully automatic", "Conveyor system", "Continuous operation"],
    },
    {
      img: imgAtlantaAuto6,
      name: "AUTO RING WRAPPER",
      brand: "atlanta-auto",
      desc: "High-speed automatic ring wrapper for maximum throughput and efficiency.",
      features: ["High-speed ring", "Automatic operation", "Maximum throughput"],
    },
    {
      img: imgAtlantaAuto7,
      name: "AUTO ROTARY TURRET WRAPPER",
      brand: "atlanta-auto",
      desc: "Advanced rotary turret wrapper with multiple wrapping stations for maximum versatility.",
      features: ["Rotary turret", "Multiple stations", "Maximum versatility"],
    },
    {
      img: MYTHO,
      name: "MYTHO A WITH MAST",
      brand: "atlanta-auto",
      desc: "Fully-automatic ring wrapper for rotating film application around stationary loads.",
      features: ["Easy transport and installation", "Compact machine", "Compact, space-saving machine suitable for small workplaces"],
    },
     {
      img: omegadouble,
      name: "OMEGA DOUBLE",
      brand: "atlanta-auto",
      desc: "Fully-automatic ring wrapper for rotating film application around stationary loads.",
      features: ["Hi-speed ring wrapping machine", "Compact machine", "The patented ring rotation system without sliding contacts allows constant film pre-stretch"],
    },
    {
      img: omega,
      name: "OMEGA",
      brand: "atlanta-auto",
      desc: "Fully-automatic ring wrapper for rotating film application around stationary loads.",
      features: ["Hi speed ring wrapping machine", "Compact machine", "Small footprint in transport"],
    },
    {
      img: imgAtlantaAuto1,
      name: "ROTARY ARM WRAPPER",
      brand: "atlanta-auto",
      desc: "Rotary arm stretch wrapper for heavy and unstable loads with 360-degree wrapping capability.",
      features: ["Rotary arm system", "Heavy load capacity", "Stable wrapping"],
    },
    {
      img: imgAtlantaAuto2,
      name: "TURNTABLE WRAPPER",
      brand: "atlanta-auto",
      desc: "Turntable stretch wrapper for standard pallet wrapping with reliable performance.",
      features: ["Turntable system", "Standard operations", "Reliable performance"],
    },
    {
      img: imgTap33,
      name: "WOVEN STRAP & BUCKLE",
      brand: "atlanta",
      desc: "Atlanta woven straps and buckles offer heavy-duty support for cargo bundling and industrial packaging.",
      features: ["High load capacity", "Durable weave", "Easy tensioning"],
    },
    {
      img: imgTap34,
      name: "ALL TYPES OF LDPE",
      brand: "atlanta",
      desc: "Versatile LDPE packaging films and sheets for cushioning, wrapping, and moisture protection.",
      features: ["Flexible film", "Moisture barrier", "Soft touch"],
    },
    {
      img: imgTap35,
      name: "DUNNAGE AIR BAGS",
      brand: "itipack",
      desc: "Inflatable dunnage airbags designed to secure cargo and eliminate movement during transit.",
      features: ["Fast inflation", "Reusable design", "Strong protection"],
    },
    {
      img: imgTap36,
      name: "ANGLE BOARD",
      brand: "itipack",
      desc: "Rigid angle board for edge protection, pallet reinforcement, and improved load stability.",
      features: ["Heavy-duty support", "Stacking protection", "Easy handling"],
    },
  ];

  const categories: { id: ProductCategory; label: string; desc: string }[] = [
    { id: "all", label: "All Products", desc: "Complete range of industrial packaging consumables and machinery." },
    { id: "atlanta", label: "Atlanta", desc: "Atlanta-brand stretch films, woven straps, and wrapping machinery for heavy-duty industrial use." },
    { id: "itipack", label: "Itipack", desc: "Itipack strapping machines, dunnage air bags, and industrial packaging tools for automated operations." },
  ];

  const filtered = activeCategory === "all"
    ? allProducts.filter((p) => p.brand !== "atlanta" && p.brand !== "atlanta-semi" && p.brand !== "atlanta-auto")
    : activeCategory === "atlanta"
    ? allProducts.filter((p) => p.brand === "atlanta" || p.brand === "atlanta-semi" || p.brand === "atlanta-auto")
    : activeCategory === "atlanta-auto"
    ? allProducts.filter((p) => p.brand === "atlanta-auto")
    : allProducts.filter((p) => p.brand === activeCategory);

  const atlantaSemiAuto = allProducts.filter((p) => p.brand === "atlanta-semi");
  const atlantaFullyAuto = allProducts.filter((p) => p.brand === "atlanta-auto");

  return (
    <>
      {/* Hero */}
      <section className="relative mt-[60px] sm:mt-[70px] md:mt-[80px] lg:mt-[100px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" data-parallax-speed="0.16" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight">
              Our <span className="text-[#cd0606]">Products</span>
            </h1>
            <div className="w-[66px] h-[4px] bg-[#cd0606] mt-4" />
            <p className="font-['Inter',sans-serif] text-white text-[18px] mt-4 max-w-[600px]">
              Premium packaging consumables for every industrial need
            </p>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-[90px] z-40">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-6 py-4 font-['Inter',sans-serif] font-bold text-[14px] sm:text-[16px] border-b-[3px] transition-colors ${
                  activeCategory === cat.id
                    ? "border-[#cd0606] text-[#cd0606]"
                    : "border-transparent text-black/60 hover:text-black"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category description */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-['Inter',sans-serif] text-[16px] text-black/60">
            {categories.find((c) => c.id === activeCategory)?.desc}
          </p>
        </div>
      </section>

      {/* Premium Packaging Consumables */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          {activeCategory === "atlanta" ? (
            <>
              {/* Semi Automatic Section */}
              <div className="mb-12">
                <h2 className="font-['Inter',sans-serif] font-bold text-[32px] text-black mb-2">
                  <span className="text-[#cd0606]">Atlanta</span> Semi Automatic Wrapping Machine
                </h2>
                <div className="w-[66px] h-[4px] bg-[#cd0606] mb-6" />
                <p className="font-['Inter',sans-serif] text-[16px] text-black/60 mb-6">
                  Semi-automatic stretch wrapping machines for medium-volume operations.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {atlantaSemiAuto.map((p) => (
                    <ProductCard key={p.name} img={p.img} name={p.name} onClick={() => setSelectedProduct(p)} />
                  ))}
                </div>
              </div>

              {/* Fully Automatic Section */}
              <div>
                <h2 className="font-['Inter',sans-serif] font-bold text-[32px] text-black mb-2">
                  <span className="text-[#cd0606]">Atlanta</span> Fully Automatic Wrapping Machine
                </h2>
                <div className="w-[66px] h-[4px] bg-[#cd0606] mb-6" />
                <p className="font-['Inter',sans-serif] text-[16px] text-black/60 mb-6">
                  Fully automatic stretch wrapping machines for high-volume operations.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {atlantaFullyAuto.map((p) => (
                    <ProductCard key={p.name} img={p.img} name={p.name} onClick={() => setSelectedProduct(p)} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {activeCategory === "itipack" ? (
                <>
                  {/* Wrapping Machines Section */}
                  <div className="mb-12">
                    <h2 className="font-['Inter',sans-serif] font-bold text-[32px] text-black mb-2">
                      <span className="text-[#cd0606]">Itipack</span> Wrapping Machines
                    </h2>
                    <div className="w-[66px] h-[4px] bg-[#cd0606] mb-6" />
                    <p className="font-['Inter',sans-serif] text-[16px] text-black/60 mb-6">
                      High-performance stretch wrapping machines for efficient pallet and bundle wrapping.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                      {[
                        { img: imgItipack1, name: "Tube - Automatic Strapping", desc: "Heavy-duty stretch wrapping machine for standard pallet operations.", features: ["Robust construction", "Easy operation", "Reliable performance"] },
                        { img: imgItipack2, name: "Steel - Automatic Strapping", desc: "Advanced stretch wrapper with adjustable tension control.", features: ["Adjustable tension", "Smooth operation", "Low maintenance"] },
                        { img: imgItipack3, name: "Wood - Automatic Strapping", desc: "Complete wrapping system for high-volume operations.", features: ["High capacity", "Automated controls", "Energy efficient"] },
                        { img: imgItipack4, name: "Sheets - Automatic Strapping", desc: "Versatile wrapping solution for various load sizes.", features: ["Versatile design", "Quick setup", "User-friendly interface"] },
                        { img: imgItipack5, name: "Beverage - Automatic Strapping", desc: "Specialized pallet wrapping machine for secure load containment.", features: ["Pallet optimized", "Consistent wrapping", "Safety features"] },
                        { img: imgItipack6, name: "Fiber - Automatic Strapping", desc: "Efficient bundle wrapping for smaller loads.", features: ["Compact design", "Flexible operation", "Cost-effective"] },
                      ].map((product) => (
                        <ProductCard key={product.name} img={product.img} name={product.name} onClick={() => setSelectedProduct(product)} />
                      ))}
                    </div>
                  </div>

                  {/* Steel Wrapping Tools Section */}
                  <div className="mb-12">
                    <h2 className="font-['Inter',sans-serif] font-bold text-[32px] text-black mb-2">
                      <span className="text-[#cd0606]">Itipack</span> Steel Wrapping Tools
                    </h2>
                    <div className="w-[66px] h-[4px] bg-[#cd0606] mb-6" />
                    <p className="font-['Inter',sans-serif] text-[16px] text-black/60 mb-6">
                      Professional-grade steel strapping and wrapping tools for industrial applications.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                      {[
                        { img: imgItipack7, name: "ITI  - 30", desc: "Heavy-duty steel strapping tool for secure bundling.", features: ["Heavy-duty", "Ergonomic grip", "Durable build"] },
                        { img: imgItipack8, name: "ITI - 40", desc: "Professional strapping tool for tensioning and sealing.", features: ["Precision tensioning", "Quick sealing", "Reliable performance"] },
                        { img: imgItipack9, name: "ITI - 41", desc: "Versatile wrapping tool for various applications.", features: ["Multi-purpose", "Easy handling", "Robust design"] },
                        { img: imgItipack10, name: "ITI - 42", desc: "Specialized wrapping tool for steel materials.", features: ["Steel compatible", "Smooth operation", "Long-lasting"] },
                        { img: imgItipack11, name: "ITI - 44", desc: "Precision cutting tool for steel strapping.", features: ["Clean cuts", "Safety guard", "Easy maintenance"] },
                        { img: imgItipack12, name: "ITI - 45", desc: "High-tension tool for secure strapping.", features: ["High tension", "Adjustable settings", "Professional grade"] },
                        { img: imgItipack13, name: "ITI - 51", desc: "Efficient sealing tool for steel straps.", features: ["Secure seals", "Quick operation", "Reliable results"] },
                        { img: imgItipack14, name: "ITI - 52", desc: "All-in-one tool for strapping operations.", features: ["Multi-function", "Time-saving", "Cost-effective"] },
                        { img: imgItipack15, name: "ITI - 61", desc: "Pneumatic-powered tool for high-volume operations.", features: ["Pneumatic power", "High speed", "Reduced fatigue"] },
                        { img: imgItipack16, name: "ITI - 62", desc: "Complete accessory kit for wrapping tools.", features: ["Complete set", "Organized storage", "Essential components"]},
                        { img: imgItipack17, name: "ITI - 84", desc: "Cordless battery-powered strapping tool.", features: ["Cordless", "Portable", "Rechargeable"]  },
                      ].map((product) => (
                        <ProductCard key={product.name} img={product.img} name={product.name} onClick={() => setSelectedProduct(product)} />
                      ))}
                    </div>
                  </div>
                      {/* {plastic strapping tools section} */}
                  <div>
                    <h2 className="font-['Inter',sans-serif] font-bold text-[32px] text-black mb-2">
                      <span className="text-[#cd0606]">Itipack</span> Plastic Wrapping Tools
                    </h2>
                    <div className="w-[66px] h-[4px] bg-[#cd0606] mb-6" />
                    <p className="font-['Inter',sans-serif] text-[16px] text-black/60 mb-6">
                      Professional-grade plastic strapping and wrapping tools for industrial applications.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                      {[
                        { img: iti11, name: "ITI  - 11", desc: "Pneumatic strapping tool for PP and PET strap", features: ["Studied for 16mm and 19mm PP strap and 13mm / 16mm / 19mm PET strap",] },
                        { img: iti12, name: "ITI - 12", desc: "Pneumatic strapping tool studied for 16mm and 19mm PET strap.", features: ["Studied for 16mm and 19mm PET strap.", "providing a maximum tensioning force of 5000N or 6000N",] },
                        { img: iti14, name: "ITI - 14", desc: "Pneumatic plastic strapping tool for heavy duty applications", features: ["Studied for 25mm and 32mm PET strap.", "tensioning force of up to 6000N",] },
                        { img: iti18, name: "ITI - 18", desc: "Pure welding device.", features: ["Studied for 16mm / 19mm / 25mm / 32mm PP and PET strap.", "compact and versatile", "Lightweight and powerful"] },
                        { img: iti20, name: "ITI - 20", desc: "Battery strapping tool for plastic strap", features: ["Well-known battery strapping tool for plastic strap", "l suitable for 13mm and 16mm PP and PET strap,", "2Ah Lithium-Polymer battery"] },
                        { img: iti21, name: "ITI - 21", desc: "Battery tool series for plastic strap", features: ["Suitable for 16mm and 19 mm PP and PET strap", "heavy duty application like bricks", "3Ah Lithium Polymer Battery"] },
                        { img: iti22, name: "ITI - 22", desc: "Entry level strapping tool ", features: ["Multiple light applications with 13/16 mm PP and PET straps", "friction weld seal technology", "Cost-effective"] },
                        { img: iti23, name: "ITI - 23", desc: "High tension manual strapping tool", features: ["Suitable for 16 and 19 mm PET strap.", " heavy duty application", "3Ah Lithium Polymer Battery"] },
                        { img: iti24, name: "ITI - 24", desc: "Three operating modes battery strapping tool", features: ["Studied for 13 / 16 mm PP and PET strap.", "Lightweight", "long life Lithium Polymer battery"]},
                        { img: iti25, name: "ITI - 25", desc: "Easy-to-be-used battery strapping tool", features: ["Studied for 16 / 19 mm PP and PET strap.", "Brushless motors to grant low maintenance", "long life Lithium Polymer battery"]  },
                        { img: iti27, name: "ITI - 27", desc: "Battery strapping tool equipped with Brushless motors", features: ["Studied for 19/25/32 MM PET strap.", "Portable", "Brushless motors to grant low maintenance"]  },

                      ].map((product) => (
                        <ProductCard key={product.name} img={product.img} name={product.name} onClick={() => setSelectedProduct(product)} />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="font-['Inter',sans-serif] font-bold text-[32px] text-black">
                      {activeCategory === "all" && "Premium Packaging Consumables"}
                    </h2>
                    <div className="w-[66px] h-[4px] bg-[#cd0606] mt-3" />
                    <p className="font-['Inter',sans-serif] text-[16px] text-black/60 mt-3">
                      We supply a comprehensive range of industrial packaging materials suitable for strapping, wrapping, sealing, and securing your goods.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filtered.map((p) => (
                      <ProductCard key={p.name} img={p.img} name={p.name} onClick={() => setSelectedProduct(p)} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} navigate={navigate} />
      )}

      {/* CTA */}
      <section className="py-8 md:py-12 bg-[#18196d]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-['Inter',sans-serif] font-bold text-white text-[28px] md:text-[32px] lg:text-[36px] mb-3 md:mb-4 leading-tight">
            Let's Solve Your Packaging Challenges
          </h2>
          <p className="font-['Inter',sans-serif] text-white/80 text-[13px] md:text-[14px] lg:text-[15px] mb-3 md:mb-4">
            Talk with our experts about your packaging requirements. We'll help you find the perfect solution for your business needs.
          </p>
          <button
            onClick={() => navigate("contact")}
            className="inline-flex items-center gap-2 bg-[#cd0606] hover:bg-[#a80404] transition-all rounded-[6px] px-4 md:px-6 h-[38px] md:h-[44px] hover:scale-105 shadow-lg hover:shadow-xl mt-2"
          >
            <span className="font-['Inter',sans-serif] font-bold text-white text-[13px] md:text-[14px]">Talk to Rudren</span>
            <img src={imgArrow} alt="" className="h-3 w-auto md:h-4" />
          </button>
        </div>
      </section>
    </>
  );
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────

function AboutPage({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <>
      {/* Hero */}
      <section className="relative mt-[60px] sm:mt-[70px] md:mt-[80px] lg:mt-[100px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" data-parallax-speed="0.16" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
              About <span className="text-[#cd0606]">Us</span>
            </h1>
            <div className="w-[66px] h-[4px] bg-[#cd0606] mt-4" />
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <div className="w-[66px] h-[4px] bg-[#cd0606] mb-6" />
              <h2 className="font-['Inter',sans-serif] font-bold text-[40px] md:text-[48px] text-black leading-tight mb-6">
                {"Goa's Industrial"}<br />
                {"packaging solutions"}<br />
                Company
              </h2>
              <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-black leading-relaxed">
                Rudren Solutions delivers complete industrial packaging solutions for manufacturers, processors, and exporters across Goa. We provide the right materials, tools, and on-site support to manage packaging operations end-to-end.
              </p>
              <button
                onClick={() => navigate("contact")}
                className="mt-8 flex items-center gap-3 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[8px] px-7 h-[56px]"
              >
                <span className="font-['Inter',sans-serif] font-bold text-white text-[18px]">Get in Touch</span>
                <img src={imgArrow} alt="" className="h-5 w-auto" />
              </button>
            </div>
            <div className="relative h-[500px]">
              <img src={imgAbout4} alt="Rudren Solutions operations" className="w-full h-full object-cover rounded-[12px]" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 overflow-hidden rounded-[10px] border-4 border-white shadow-xl">
                <img src={imgAbout1} alt="Team at work" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Why Choose Rudren */}
          <div className="mb-12">
            <div className="w-[66px] h-[4px] bg-[#cd0606] mb-6" />
            <h2 className="font-['Inter',sans-serif] font-bold text-[36px] text-black mb-8">
              Why Companies Choose Rudren
            </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "One Accountable Partner",
                desc: "Single point of contact from consultation to execution.",
                accent: "#145bd7",
                icon: Users,
                visual: "from-[#163a71] via-[#1d63ba] to-[#d7e9ff]",
              },
              {
                title: "Goa-Based, Operationally Present",
                desc: "Local support with quick response and site visits.",
                accent: "#2e7d32",
                icon: MapPin,
                visual: "from-[#1f5f31] via-[#5b9b4b] to-[#dff2d8]",
              },
              {
                title: "Requirement-Led Solutions",
                desc: "Packaging solutions designed around your operations.",
                accent: "#ff7900",
                icon: Boxes,
                visual: "from-[#9b4b00] via-[#ff7900] to-[#ffe0bf]",
              },
              {
                title: "Industrial-Grade Capability",
                desc: "Quality materials, trained teams, and proven processes.",
                accent: "#082343",
                icon: Factory,
                visual: "from-[#082343] via-[#274b75] to-[#d8e4f0]",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative min-h-[390px] overflow-hidden rounded-[10px] bg-white text-center shadow-[0px_10px_28px_rgba(8,35,67,0.16)] ring-1 ring-black/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0px_26px_60px_rgba(8,35,67,0.24)]"
                >
                  <div className={`relative h-[170px] overflow-hidden bg-gradient-to-br ${item.visual}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
                    <Icon className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-white/85 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div className="relative px-6 pb-8 pt-14">
                    <div className="absolute left-1/2 top-0 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-white text-white shadow-[0px_10px_24px_rgba(0,0,0,0.22)] transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: item.accent }}>
                      <Icon className="h-9 w-9" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-['Inter',sans-serif] font-bold text-[18px] sm:text-[20px] uppercase leading-tight mb-4" style={{ color: item.accent }}>
                      {item.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] text-[15px] text-black/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[6px] transition-all duration-500 group-hover:h-[9px]" style={{ backgroundColor: item.accent }} />
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block px-4 py-2 bg-[#0F172A]/5 rounded-full mb-6">
              <span className="font-['Inter',sans-serif] font-bold text-[12px] md:text-[13px] text-[#0F172A] uppercase tracking-[0.2em]">
                Our Purpose
              </span>
            </div>
            <h2 className="font-['Inter',sans-serif] font-bold text-[36px] md:text-[48px] lg:text-[56px] text-[#0F172A] leading-tight mb-6">
              Driving Better Packaging Operations Across Goa
            </h2>
            <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-black/70 max-w-[800px] mx-auto leading-relaxed">
              Every solution we provide is guided by a clear vision and a commitment to helping industrial businesses operate more efficiently, safely, and reliably.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16">
            {/* Vision Card */}
            <div
              className="relative bg-white rounded-[32px] p-10 md:p-12 shadow-[0px_4px_20px_rgba(0,0,0,0.06)] border border-black/5 hover:shadow-[0px_20px_60px_rgba(205,6,6,0.15)] transition-all duration-500 overflow-hidden"
            >
              {/* Red Gradient Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#cd0606]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#cd0606]/30 flex items-center justify-center bg-gradient-to-br from-[#cd0606]/10 to-transparent">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#cd0606]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div className="inline-block px-4 py-1.5 bg-[#cd0606]/10 rounded-full mb-4">
                <span className="font-['Inter',sans-serif] font-bold text-[13px] md:text-[14px] text-[#cd0606] uppercase tracking-[0.15em]">
                  Vision
                </span>
              </div>

              {/* Heading */}
              <h3 className="font-['Inter',sans-serif] font-bold text-[24px] md:text-[28px] text-[#0F172A] mb-4 leading-tight">
                Where We Aim To Be
              </h3>

              {/* Content */}
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] text-black/70 leading-relaxed">
                To be the most trusted industrial packaging partner for every manufacturer, processor, and exporter operating in Goa.
              </p>
            </div>

            {/* Mission Card */}
            <div
              className="relative bg-white rounded-[32px] p-10 md:p-12 shadow-[0px_4px_20px_rgba(0,0,0,0.06)] border border-black/5 hover:shadow-[0px_20px_60px_rgba(15,23,42,0.15)] transition-all duration-500 overflow-hidden"
            >
              {/* Blue Gradient Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#0F172A]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#0F172A]/30 flex items-center justify-center bg-gradient-to-br from-[#0F172A]/10 to-transparent">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#0F172A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
              </div>

              {/* Label */}
              <div className="inline-block px-4 py-1.5 bg-[#0F172A]/10 rounded-full mb-4">
                <span className="font-['Inter',sans-serif] font-bold text-[13px] md:text-[14px] text-[#0F172A] uppercase tracking-[0.15em]">
                  Mission
                </span>
              </div>

              {/* Heading */}
              <h3 className="font-['Inter',sans-serif] font-bold text-[24px] md:text-[28px] text-[#0F172A] mb-4 leading-tight">
                How We Deliver Value
              </h3>

              {/* Content */}
              <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] text-black/70 leading-relaxed">
                To deliver reliable, fit-for-purpose industrial packaging solutions through expert material supply, professional tools and machinery, and dedicated on-site packaging teams.
              </p>
            </div>
          </div>

          {/* Bottom Highlight */}
          <div
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-[#0F172A]/5 via-[#cd0606]/5 to-[#0F172A]/5 rounded-[24px] px-10 py-6 md:px-16 md:py-8">
              <p className="font-['Inter',sans-serif] font-bold text-[20px] md:text-[24px] lg:text-[28px] text-[#0F172A] leading-relaxed">
                Reliable Packaging. Local Accountability.{' '}
                <span className="text-[#cd0606]">Long-Term Partnership.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Inter',sans-serif] font-bold text-[36px] md:text-[48px] text-black mb-4">What We Stand For</h2>
            <div className="w-[66px] h-[4px] bg-[#cd0606] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Trusted Partnerships",
                desc: "Building long-term relationships through transparency, responsiveness, and consistently dependable performance.",
                icon: Users,
              },
              {
                title: "Packaging Expertise",
                desc: "Deep industry knowledge applied to real storage, handling, and transit conditions for optimal protection.",
                icon: Lightbulb,
              },
              {
                title: "Fit-for-Purpose Solutions",
                desc: "Every solution is customised around your specific product, process, and operational environment.",
                icon: Settings,
              },
              {
                title: "Quality Commitment",
                desc: "Consistent standards from material selection through to delivery and on-site execution.",
                icon: ShieldCheck,
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] p-6 border-b-2 border-[#cd0606] hover:-translate-y-2 transition-all duration-500 hover:shadow-[0px_12px_30px_rgba(0,0,0,0.2)]"
                >
                  <div className="w-14 h-14 rounded-full bg-[#cd0606] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-['Inter',sans-serif] font-bold text-[18px] text-black mb-3">{value.title}</h3>
                  <p className="font-['Inter',sans-serif] text-[14px] text-black/70 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Inter',sans-serif] font-bold text-[36px] md:text-[48px] text-black mb-4">Our Commitment To Every Client</h2>
            <div className="w-[66px] h-[4px] bg-[#cd0606] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Complete Packaging Supply",
                desc: "From materials to machinery, we provide everything you need for seamless packaging operations.",
                icon: PackageOpen,
              },
              {
                title: "Bespoke Solutions",
                desc: "Tailored packaging strategies designed around your unique operational requirements and constraints.",
                icon: Settings,
              },
              {
                title: "Expertise",
                desc: "Decades of combined experience across diverse industrial sectors ensuring optimal results every time.",
                icon: Lightbulb,
              },
              {
                title: "Client-First",
                desc: "Your success is our priority. We listen, adapt, and deliver solutions that truly work for your business.",
                icon: Users,
              },
              {
                title: "Integrity",
                desc: "Transparent pricing, honest communication, and ethical practices in every engagement.",
                icon: ShieldCheck,
              },
              {
                title: "Quality Assurance",
                desc: "Rigorous quality checks at every stage to ensure consistent, reliable performance.",
                icon: ClipboardCheck,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] p-6 border-l-4 border-[#cd0606] hover:-translate-y-2 transition-all duration-500 hover:shadow-[0px_12px_30px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#cd0606]/10 flex items-center justify-center group-hover:bg-[#cd0606] transition-colors duration-500">
                      <Icon className="h-6 w-6 text-[#cd0606] group-hover:text-white transition-colors duration-500" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-['Inter',sans-serif] font-bold text-[16px] sm:text-[18px] text-black mb-2">{item.title}</h3>
                      <p className="font-['Inter',sans-serif] text-[14px] text-black/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 px-5 py-10 sm:rounded-[24px] sm:px-8 sm:py-12 md:px-12 lg:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(205,6,6,0.15),transparent_50%)]" />
            <div className="relative text-center">
              <h2 className="mx-auto mb-4 whitespace-nowrap font-['Inter',sans-serif] text-[clamp(8px,2.3vw,33px)] font-bold leading-tight text-white">
                Ready to work with a packaging partner who builds around your operation?
              </h2>
              <p className="mx-auto mb-7 max-w-[1200px] font-['Inter',sans-serif] text-[15px] leading-relaxed text-slate-300 sm:mb-8 sm:text-base md:text-lg">
                Tell us about your facility, your products, and your packaging challenges. We'll come back with a proposal tailored specifically to your requirements.
              </p>
              <button
                type="button"
                onClick={() => navigate("contact")}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#cd0606] px-6 py-3 shadow-[0px_8px_20px_rgba(205,6,6,0.3)] transition-all hover:bg-[#a80404] hover:shadow-[0px_12px_30px_rgba(205,6,6,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:h-14 sm:w-auto sm:px-8 sm:py-0"
              >
                <span className="font-['Inter',sans-serif] text-base font-bold text-white sm:text-lg">Talk to Rudren</span>
                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── SERVICES PAGE ────────────────────────────────────────────────────────────

function ServicesPage({ navigate }: { navigate: (p: Page) => void }) {
  const services = [
    {
      img: imgService4,
      title: "Complete Packaging",
      desc: "Comprehensive packaging solutions that combine practical design with protective efficiency, helping your products stay secure and presentable.",
      icon: PackageOpen,
    },
    {
      img: imgAbout4,
      title: "On-site Packaging",
      desc: "Dedicated on-site packaging teams deployed at your facility to manage packaging operations with precision and efficiency.",
      icon: Users,
    },
    {
      img: imgAbout1,
      title: "Cargo Securing & Ship Lashing",
      desc: "Expert cargo securing and ship lashing support using reliable methods to protect goods during transit and maritime transport.",
      icon: ShieldCheck,
    },
    {
      img: imgService5,
      title: "Operational Contract",
      desc: "Structured operational packaging contracts designed for clarity, efficiency, and smooth long-term collaboration.",
      icon: ClipboardCheck,
    },
    {
      img: imgInd8,
      title: "Packaging Audits",
      desc: "Detailed packaging audits that help reduce waste, improve product protection, and optimize your packaging strategy.",
      icon: PackageCheck,
    },
    {
      img: imgService2,
      title: "Technical Services",
      desc: "Technical service support for packaging operations, machinery performance, troubleshooting, and smoother day-to-day output.",
      icon: Wrench,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative mt-[60px] sm:mt-[70px] md:mt-[80px] lg:mt-[100px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" data-parallax-speed="0.16" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
              Our <span className="text-[#cd0606]">Services</span>
            </h1>
            <div className="w-[66px] h-[4px] bg-[#cd0606] mt-4" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-14 text-center">
            <p className="font-['Inter',sans-serif] font-bold text-[15px] uppercase tracking-[0.28em] text-[#cd0606] mb-3">
              What We Offer
            </p>
            <h2 className="font-['Inter',sans-serif] font-bold text-[28px] md:text-[36px] text-black leading-tight">
              Discover our Tailored Solutions
            </h2>
            <div className="w-[66px] h-[4px] bg-[#cd0606] mx-auto mt-5" />
            <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] text-black/70 mt-5 max-w-[760px] mx-auto leading-relaxed">
              Complete industrial packaging services for securing cargo, improving plant operations, auditing packaging performance, and supporting technical execution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((s, index) => {
              const Icon = s.icon;
              return (
              <div key={s.title} className="group bg-white rounded-[12px] shadow-[0px_12px_34px_rgba(8,35,67,0.14)] ring-1 ring-black/5 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0px_26px_60px_rgba(8,35,67,0.22)]">
                <div className="relative h-[235px] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white/95 font-['Inter',sans-serif] text-[18px] font-bold text-[#cd0606] shadow-[0px_10px_24px_rgba(0,0,0,0.2)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="relative p-7 pt-12">
                  <div className="absolute -top-8 left-7 flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-white bg-[#cd0606] text-white shadow-[0px_12px_26px_rgba(205,6,6,0.28)] transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-8 w-8" strokeWidth={1.8} />
                  </div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-['Inter',sans-serif] font-bold text-[18px] md:text-[20px] text-black leading-tight">{s.title}</h3>
                      <div className="w-[44px] h-[4px] bg-[#cd0606] mt-3" />
                    </div>
                  </div>
                  <p className="font-['Inter',sans-serif] text-[15px] text-black/80 leading-relaxed">{s.desc}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12">
            <div className="w-[66px] h-[4px] bg-[#cd0606] mb-4" />
            <h2 className="font-['Inter',sans-serif] font-bold text-[40px] text-black">How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Requirement Assessment",
                desc: "We begin with a thorough evaluation of your packaging needs, materials handled, and operational constraints.",
                color: "#cd0606",
                icon: ClipboardCheck,
              },
              {
                step: "02",
                title: "Solution Design",
                desc: "We design a packaging solution — materials, equipment, and processes — tailored to your specific requirements.",
                color: "#082343",
                icon: Lightbulb,
              },
              {
                step: "03",
                title: "Execution & Support",
                desc: "We deploy materials, machinery, and teams on-site, with ongoing support and replenishment.",
                color: "#cd0606",
                icon: PackageCheck,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  {index < 2 && (
                    <div className="hidden md:block absolute left-[calc(100%-6px)] top-[43%] z-20 w-12 border-t-2 border-dashed border-[#082343]/70">
                      <span className="absolute -right-1 -top-[5px] h-0 w-0 border-y-[5px] border-l-[9px] border-y-transparent" style={{ borderLeftColor: index === 0 ? "#cd0606" : "#082343" }} />
                    </div>
                  )}
                  <div className="group relative min-h-[285px] rounded-[999px] bg-white px-6 pb-8 pt-16 text-center shadow-[0px_14px_35px_rgba(8,35,67,0.14)] ring-1 ring-black/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0px_24px_55px_rgba(8,35,67,0.22)]">
                    <div className="absolute left-1/2 top-0 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-white text-white shadow-[0px_12px_26px_rgba(8,35,67,0.22)] transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: item.color }}>
                      <div className="flex h-full w-full items-center justify-center">
                        <Icon className="h-10 w-10" strokeWidth={1.8} />
                      </div>
                    </div>
                    <div className="absolute inset-x-6 top-4 h-[115px] rounded-t-full border-t border-x opacity-80 transition-opacity duration-500 group-hover:opacity-100" style={{ borderColor: item.color }} />
                    <p className="relative font-['Inter',sans-serif] text-[44px] font-bold leading-none mb-4" style={{ color: item.color }}>
                      {item.step}
                    </p>
                    <h3 className="relative font-['Inter',sans-serif] font-bold text-[15px] sm:text-[16px] uppercase leading-tight mb-4" style={{ color: item.color }}>
                      {item.title}
                    </h3>
                    <p className="relative font-['Inter',sans-serif] text-[14px] text-black/75 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-[#18196d]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-['Inter',sans-serif] font-bold text-white text-[28px] md:text-[32px] lg:text-[36px] mb-3 md:mb-4 leading-tight">
            Need a Custom Packaging Solution?
          </h2>
          <p className="font-['Inter',sans-serif] text-white/80 text-[14px] md:text-[15px] lg:text-[16px] mb-4 md:mb-6 max-w-[700px] mx-auto">
            Talk to our experts and get a tailored recommendation for your operation.
          </p>
          <button
            onClick={() => navigate("contact")}
            className="inline-flex items-center gap-2 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[6px] px-4 md:px-6 h-[38px] md:h-[44px]"
          >
            <span className="font-['Inter',sans-serif] font-bold text-white text-[13px] md:text-[14px]">Talk to Rudren</span>
            <img src={imgArrow} alt="" className="h-3 w-auto md:h-4" />
          </button>
        </div>
      </section>
    </>
  );
}

// ─── INDUSTRIES PAGE ──────────────────────────────────────────────────────────

function IndustriesPage() {
  const all = [
    { img: imgInd1, label: "PHARMACEUTICAL" },
    { img: imgInd2, label: "CHEMICAL" },
    { img: imgInd3, label: "FISH & SEAFOOD PROCESSING" },
    { img: imgInd4, label: "MINING & MINERALS" },
    { img: imgInd5, label: "HEAVY ENGINEERING" },
    { img: imgInd6, label: "STEEL & ALUMINIUM" },
    { img: imgInd7, label: "FOOD PROCESSING" },
    { img: imgInd8, label: "EXPORT AND LOGISTICS" },
    { img: imgInd9, label: "GLASS & CERAMICS" },
    { img: imgInd10, label: "ENERGY & POWER" },
    { img: imgInd11, label: "SHIPPING" },
    { img: imgInd12, label: "CARGO SECURING" },
  ];

  return (
    <>
      <section className="relative mt-[60px] sm:mt-[70px] md:mt-[80px] lg:mt-[100px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" data-parallax-speed="0.16" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
              Industries <span className="text-[#cd0606]">We Serve</span>
            </h1>
            <div className="w-[66px] h-[4px] bg-[#cd0606] mt-4" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-['Inter',sans-serif] text-[18px] text-black/70 max-w-[700px] mb-12">
            We serve a wide spectrum of industries across Goa and beyond, delivering packaging solutions that meet the unique demands of each sector.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {all.map((ind) => (
              <IndustryCard key={ind.label} img={ind.img} label={ind.label} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── TOOLS & TACKLES PAGE ─────────────────────────────────────────────────────

function ToolsPage({ navigate }: { navigate: (p: Page) => void }) {
  const tools = [
    {
      img: stellstrappingtool,
      name: "Steel Strapping Tools",
      desc: "An excellent solution for securing shipments and safeguarding storage of cartons, cardboard boxes, and pallets.",
      features: ["High tensile strength", "Secure shipment protection", "Versatile application"],
    },
    {
      img: tools1,
      name: "Composite Strapping Tool",
      desc: "Made of high quality low carbon steel alloy in advanced processing manufacture for superior performance.",
      features: ["Premium steel alloy", "Advanced manufacturing", "Superior durability"],
    },
    {
      img: tools2,
      name: "Industrial Stapler",
      desc: "Precision in every staple, delivers reliability, durability, and unmatched performance for efficiency.",
      features: ["Precision stapling", "High durability", "Efficient operation"],
    },
    {
      img: tools3,
      name: "Nail Gun",
      desc: "Precision and powerful, ensures efficiency, accuracy, and reliability for construction and carpentry.",
      features: ["Precision driving", "Powerful performance", "Construction ready"],
    },
    {
      img: tools4,
      name: "Strap Dispenser",
      desc: "Strapping dispensers are required for efficient strapping operations when using tools or automatic machines.",
      features: ["Efficient dispensing", "Tool compatible", "Smooth operation"],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative mt-[60px] sm:mt-[70px] md:mt-[80px] lg:mt-[100px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" data-parallax-speed="0.16" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
              Tools <span className="text-[#cd0606]">&</span> <span className="text-[#cd0606]">Tackles</span>
            </h1>
            <div className="w-[66px] h-[4px] bg-[#cd0606] mt-4" />
            <p className="font-['Inter',sans-serif] text-white text-[18px] mt-4 max-w-[600px]">
              Professional-grade strapping and packaging tools for industrial applications
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12">
            <div className="w-[66px] h-[4px] bg-[#cd0606] mb-4" />
            <h2 className="font-['Inter',sans-serif] font-bold text-[28px] sm:text-[32px] md:text-[40px] text-black mb-4">
              Our <span className="text-[#cd0606]">Tools</span> Range
            </h2>
            <p className="font-['Inter',sans-serif] text-[16px] sm:text-[18px] text-black/70 max-w-[700px] mb-8">
              High-quality strapping and packaging tools designed for durability, efficiency, and ease of use in industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="group bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] p-6 border-b-2 border-[#cd0606] hover:-translate-y-2 transition-all duration-500 hover:shadow-[0px_12px_30px_rgba(0,0,0,0.2)]"
              >
                <div className="relative h-[180px] overflow-hidden rounded-[8px] mb-4 bg-gray-50">
                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-['Inter',sans-serif] font-bold text-[18px] text-black mb-2">{tool.name}</h3>
                <p className="font-['Inter',sans-serif] text-[14px] text-black/70 leading-relaxed mb-4">{tool.desc}</p>
                <div className="space-y-2">
                  {tool.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#cd0606] flex-shrink-0" />
                      <p className="text-[13px] text-black/60 leading-tight">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center sm:mt-12 lg:mt-16">
  <div className="inline-block w-full rounded-2xl bg-gradient-to-r from-[#0F172A]/5 via-[#cd0606]/5 to-[#0F172A]/5 px-4 py-8 sm:rounded-[24px] sm:px-8 md:px-12 md:py-10 lg:px-16">

    <div className="mx-auto max-w-[1200px]">
      <h3 className="mb-4 whitespace-nowrap font-['Inter',sans-serif] text-[clamp(11px,4vw,48px)] font-bold leading-tight text-[#0F172A]">
        Let's Solve Your Packaging Challenges
      </h3>

      <p className="mx-auto mb-6 max-w-[600px] font-['Inter',sans-serif] text-[15px] leading-relaxed text-black/70 sm:text-base md:text-lg">
        Talk with our experts about your packaging requirements. We'll help you find the perfect solution for your business needs.
      </p>
    </div>

    <button
      type="button"
      onClick={() => navigate("contact")}
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-[#cd0606] px-6 py-3 shadow-[0px_8px_20px_rgba(205,6,6,0.3)] transition-all hover:bg-[#a80404] hover:shadow-[0px_12px_30px_rgba(205,6,6,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cd0606] focus-visible:ring-offset-2 sm:h-14 sm:w-auto sm:px-8 sm:py-0"
    >
      <span className="font-['Inter',sans-serif] text-base font-bold text-white sm:text-lg">
        Contact Us
      </span>
      <img src={imgArrow} alt="" className="h-5 w-auto shrink-0" />
    </button>

  </div>
</div>
        </div>
      </section>
    </>
  );
}

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────

function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "0c7f73ba-e313-48b5-a9a6-deaa61e6932b",

        subject: `New Enquiry - ${form.service}`,

        name: form.name,
        company: form.company,
        phone: form.phone,
        email: form.email,
        service: form.service,
        message: form.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSent(true);

      setForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } else {
      console.error(result);
      alert("Failed to send enquiry");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <section className="relative mt-[60px] sm:mt-[70px] md:mt-[80px] lg:mt-[100px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" data-parallax-speed="0.16" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="font-['Inter',sans-serif] font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
                Contact <span className="text-[#cd0606]">Us</span>
              </h1>
             <div className="w-[66px] h-[4px] bg-[#cd0606] mt-4" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[12px] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.15)]">
            {/* Form */}
            <div className="bg-white p-10">
              <h2 className="font-['Inter',sans-serif] font-bold text-[32px] text-black mb-8">Talk to Rudren</h2>
              {sent ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-16 h-16 bg-[#cd0606] rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-3xl">✓</span>
                  </div>
                  <h3 className="font-['Inter',sans-serif] font-bold text-[22px] text-black mb-2">Enquiry Sent!</h3>
                  <p className="font-['Inter',sans-serif] text-[16px] text-black/70">{"We'll get back to you within 24 hours."}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Inter',sans-serif] text-[13px] text-[#97918b] mb-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-[50px] border border-[#d9d9d9] rounded-[5px] px-4 font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#cd0606] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['Inter',sans-serif] text-[13px] text-[#97918b] mb-1">Company Name</label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full h-[50px] border border-[#d9d9d9] rounded-[5px] px-4 font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#cd0606] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Inter',sans-serif] text-[13px] text-[#97918b] mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full h-[50px] border border-[#d9d9d9] rounded-[5px] px-4 font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#cd0606] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['Inter',sans-serif] text-[13px] text-[#97918b] mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full h-[50px] border border-[#d9d9d9] rounded-[5px] px-4 font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#cd0606] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-['Inter',sans-serif] text-[13px] text-[#97918b] mb-1">Service Required</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full h-[50px] border border-[#d9d9d9] rounded-[5px] px-4 font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#cd0606] transition-colors bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Complete Packaging">Complete Packaging</option>
                      <option value="Onsite Packaging">On-site Packaging</option>
                      <option value="Cargo Securing & Ship Lashing">Cargo Securing & Ship Lashing</option>
                      <option value="Operational Contract">Operational Contract</option>
                      <option value="Packaging Audits">Packaging Audits</option>
                      <option value="Technical Services">Technical Services</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-['Inter',sans-serif] text-[13px] text-[#97918b] mb-1">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Let's Find the Perfect Packaging Solution for Your Business"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-[#d9d9d9] rounded-[5px] px-4 py-3 font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#cd0606] transition-colors resize-none"
                    />
                  </div>
                  <button
  type="submit"
  disabled={loading}
  className="w-full h-[50px] bg-[#cd0606] hover:bg-[#a80404] disabled:bg-gray-400 rounded-[5px]"
>
  {loading ? "Sending..." : "SEND ENQUIRY"}
</button>
                </form>
              )}
            </div>

            {/* Direct contact panel */}
            <div className="relative">
              <img src={imgContactBg} alt="" className="w-full h-full object-cover absolute inset-0" />
              <div className="relative z-10 p-10 flex flex-col justify-center h-full min-h-[500px]">
                <h2 className="font-['Inter',sans-serif] font-bold text-white text-[32px] mb-8">Direct Contact</h2>
                <div className="space-y-6">
                  <div>
                    <p className="font-['Inter',sans-serif] text-white/70 text-[14px] uppercase tracking-widest mb-1">PHONE</p>
                    <div className="flex items-center gap-3">
                      <img src={imgPhone} alt="" className="w-8 h-8 object-contain" />
                      <p className="font-['Inter',sans-serif] text-white text-[18px]">+91 96070 24997</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-['Inter',sans-serif] text-white/70 text-[14px] uppercase tracking-widest mb-1">EMAIL</p>
                    <div className="flex items-center gap-3">
                      <img src={imgEmail} alt="" className="w-8 h-8 object-contain" />
                      <a href="mailto:info@rudren.com" className="font-['Inter',sans-serif] text-white text-[18px] underline hover:text-white/80 transition-colors">
                        info@rudren.com
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="font-['Inter',sans-serif] text-white/70 text-[14px] uppercase tracking-widest mb-1">LOCATION</p>
                    <div className="flex items-center gap-3">
                      <img src={imgLocation} alt="" className="w-8 h-8 object-contain" />
                      <p className="font-['Inter',sans-serif] text-white text-[18px]">Goa, India</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-['Inter',sans-serif] text-white/70 text-[14px] uppercase tracking-widest mb-1">BUSINESS HOURS</p>
                    <p className="font-['Inter',sans-serif] text-white text-[18px]">Monday – Saturday</p>
                    <p className="font-['Inter',sans-serif] text-white text-[18px]">9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [productCategory, setProductCategory] = useState<ProductCategory>("all");

  useEffect(() => {
    let ticking = false;
    const updateParallax = () => {
      const elements = document.querySelectorAll<HTMLElement>("[data-parallax-speed]");
      elements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed ?? "0.15");
        const rect = el.getBoundingClientRect();
        const y = -rect.top * speed;
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateParallax);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (p: Page, category?: ProductCategory) => {
    setPage(p);
    if (category && (category === "all" || category === "atlanta" || category === "atlanta-semi" || category === "atlanta-auto" || category === "itipack")) {
      setProductCategory(category);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-['Inter',sans-serif]">
      <Navbar current={page} navigate={navigate} />
      <main className="flex-1">
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "products" && <ProductsPage navigate={navigate} initialCategory={productCategory} />}
        {page === "about" && <AboutPage navigate={navigate} />}
        {page === "services" && <ServicesPage navigate={navigate} />}
        {page === "industries" && <IndustriesPage />}
        {page === "tools" && <ToolsPage navigate={navigate} />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer navigate={navigate} />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919607024997"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" strokeWidth={1.8} />
      </a>
    </div>
  );
}
