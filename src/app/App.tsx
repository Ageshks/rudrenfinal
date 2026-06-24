import React, { useEffect, useState } from "react";
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
} from "lucide-react";

// Images
import imgHeroBg from "@/imports/Desktop4/97c894af9823ff82129bfbbb48427d94a2ce3f4c.png";
import imgLogo from "@/imports/Desktop4/logo.png";
import imgLogoFooter from "@/imports/Desktop4/f182632a468e9600d6b8aa35d2faf1758a10c1fc.png";
import imgArrow from "@/imports/Desktop4/1dcf11f743fb3e361f22adc9ceb9aa0081b688c1.png";
import imgService1 from "@/imports/Desktop4/88d960a48e0d9b74509537c5e4d3951c88418ace.png";
import imgService2 from "@/imports/Desktop4/e67c4f4570e04e2cb93d1f281464508a812c963f.png";
import imgServiceIcon from "@/imports/Desktop4/94a2b25219698f5290352e3a76eb545a689ab047.png";
import imgContactBg from "@/imports/Desktop4/263d454e41dee8500846eccac52cd410f16bc360.png";
import imgAbout1 from "@/imports/Desktop4/2e7331c34a976c7ab0994b36cfd511fdd4b390d3.png";
import imgAbout2 from "@/imports/Desktop4/f93556e8367633aee462667f8f07d0a1ec0deae9.png";
import imgHowWeWork1 from "@/imports/Desktop4/140a2a095936fa62f60027fa4cddc0091317025a.png";
import imgHowWeWork2 from "@/imports/Desktop4/283dae3bc8f6e671e7796987e514a441a314b83c.png";
import imgWhyChoose from "@/imports/Desktop4/0f6f140d69bde65948e2a520a4b9cd46f5367828.png";

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
import imgLocation from "@/imports/Desktop4/a0e3732eca3e5d33fbd79aeec2dbced27b03a22e.png";

type Page = "home" | "products" | "about" | "services" | "industries" | "contact";
type ProductCategory = "all" | "atlanta" | "itipack";
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
    { label: "Contact", page: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-[1440px] mx-auto px-6 h-[90px] flex items-center justify-between">
        <button onClick={() => navigate("home")} className="flex-shrink-0">
          <img src={imgLogo} alt="Rudren Solutions" className="h-[90px] sm:h-[100px] md:h-[120px] lg:h-[200px] w-auto" />
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(({ label, page }) => (
            <div key={page} className="relative">
              {page === "products" ? (
                <div className="relative">
                  <button
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    className={`font-['Inter',sans-serif] font-bold text-[18px] text-white hover:text-[#cd0606] transition-colors ${
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
                  onClick={() => navigate(page)}
                  className={`font-['Inter',sans-serif] font-bold text-[18px] text-white hover:text-[#cd0606] transition-colors ${
                    current === page ? "text-[#cd0606]" : ""
                  }`}
                >
                  {label}
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("contact")}
          className="hidden lg:flex items-center gap-1.5 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[6px] px-4 h-[36px]"
        >
          <span className="font-['Inter',sans-serif] font-bold text-[13px] text-white">Get Started</span>
          <img src={imgArrow} alt="" className="h-3.5 w-auto" />
        </button>

        {/* Mobile hamburger */}
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
              className={`text-left font-['Inter',sans-serif] font-bold text-[18px] text-white hover:text-[#cd0606] transition-colors ${
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
            <span className="font-['Inter',sans-serif] font-bold text-[18px] text-white">Get Started</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Rudren Solutions LLP
            </h3>

            <p className="text-white/70 leading-relaxed max-w-md text-sm">
              Delivering innovative packaging solutions, machinery supply,
              cargo packaging, and on-site packaging services for industries
              across India.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#cd0606] transition-all flex items-center justify-center"
              >
                FB
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#cd0606] transition-all flex items-center justify-center"
              >
                IN
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#cd0606] transition-all flex items-center justify-center"
              >
                LI
              </a>
            </div>
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
    <div className="bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] border-b-2 border-[#cd0606] overflow-hidden">
      <div className="h-[150px] overflow-hidden">
        <img src={img} alt={label} className="w-full h-full object-cover" />
      </div>
      <div className="py-3 px-3 text-center">
        <p className="font-['Inter',sans-serif] font-bold text-[14px] text-black">{label}</p>
      </div>
    </div>
  );
}

function ProductModal({ product, onClose, navigate }: { product: ProductInfo; onClose: () => void; navigate: (p: Page) => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10 bg-black/55 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 w-full max-w-[1000px] overflow-hidden rounded-[30px] border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
        >
          ×
        </button>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[24px]">
            <img src={product.img} alt={product.name} className="h-[350px] w-full object-cover" />
          </div>
          <div className="flex flex-col justify-between rounded-[24px] bg-white/80 p-8 shadow-[0px_20px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl">
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
      <div className="relative h-[220px] overflow-hidden">
        <img src={img} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/70 px-4 py-3 text-white transition-transform duration-300 group-hover:translate-y-0">
          <span className="font-semibold">View Details</span>
        </div>
      </div>
      <div className="p-5 border-t-2 border-[#cd0606] text-left">
        <p className="font-['Inter',sans-serif] font-bold text-[17px] text-black">{name}</p>
      </div>
    </button>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

function HomePage({ navigate }: { navigate: (p: Page) => void }) {
  const [heroVisible, setHeroVisible] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    { img: imgHeroBg, badge: "INDUSTRIAL PACKAGING", title: "PACKAGING BUILT\nAROUND YOUR\nOPERATION", desc: "From requirement assessment and material supply to dedicated on-site packaging teams — Rudren Solutions manages your entire packaging process, so your team can focus on what they do best." },
    { img: imgService1, badge: "ONSITE PACKAGING", title: "DEDICATED\nONSITE PACKAGING\nSOLUTIONS", desc: "Our expert teams deploy directly to your facility, managing packaging operations with precision, efficiency, and complete accountability — ensuring seamless integration with your production line." },
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
      img: imgTap1,
      name: "ALL TYPES OF TAPES",
      desc: "High-performance packaging tape designed for strong adhesion, smooth application, and secure transport handling.",
      features: ["Strong tear resistance", "Residue-free removal", "Multi-surface adhesion"],
    },
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
          onClick={() => setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-6 top-1/2 z-20 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <span className="text-white text-2xl">‹</span>
        </button>

        <button
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

        <div className="relative z-10 w-full px-10 md:px-16 pt-[90px] pb-16">
          <div className="max-w-[760px]">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <span className="font-['Inter',sans-serif] font-bold text-[12px] sm:text-[13px] text-white uppercase tracking-wider">
                {heroSlides[heroSlide].badge}
              </span>
            </div>
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[56px] md:text-[72px] leading-tight mb-6 whitespace-pre-line">
              {heroSlides[heroSlide].title.split('\n').map((line, i) => (
                <span key={i}>
                  {line.includes('AROUND') || line.includes('ONSITE') || line.includes('PREMIUM') ? (
                    <span className="text-[#cd0606]">{line}</span>
                  ) : (
                    line
                  )}
                  {i < heroSlides[heroSlide].title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="font-['Inter',sans-serif] text-white text-[18px] leading-relaxed max-w-[620px] mb-8">
              {heroSlides[heroSlide].desc}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => navigate("contact")}
                className="flex items-center gap-2 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[8px] px-5 h-[46px]"
              >
                <span className="font-['Inter',sans-serif] font-bold text-white text-[15px]">Get Consultation</span>
                <img src={imgArrow} alt="" className="h-4 w-auto" />
              </button>
              <button
                onClick={() => navigate("products")}
                className="flex items-center gap-2 border border-white rounded-[8px] px-5 h-[46px] hover:bg-white/10 transition-colors"
              >
                <span className="font-['Inter',sans-serif] font-bold text-white text-[15px]">Explore Products</span>
                <img src={imgArrow} alt="" className="h-4 w-auto" />
              </button>
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
              <img src={imgAbout2} alt="Warehouse operations" data-parallax-speed="0.12" className="w-full h-full object-cover rounded-[30px] shadow-[0px_20px_60px_rgba(0,0,0,0.12)]" />
            </div>
          </div>

          <div className="text-center mb-10">
            <div className="w-[66px] h-[4px] bg-[#cd0606] mx-auto mb-4" />
            <h2 className="font-['Inter',sans-serif] font-bold text-[40px] text-black mb-4">HOW WE WORK</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10">
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
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-['Inter',sans-serif] font-bold text-[32px] md:text-[40px] text-black leading-tight text-center">
              Why Companies Choose Rudren
            </h2>
            <div className="w-[66px] h-[4px] bg-[#cd0606] mx-auto mt-4" />
          </div>
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
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12">
            <div className="w-[66px] h-[4px] bg-[#cd0606] mb-4" />
            <h2 className="font-['Inter',sans-serif] font-bold text-[56px] text-black leading-tight">
              What We <span className="text-[#cd0606]">Offer</span>
            </h2>
          </div>
          <p className="font-['Inter',sans-serif] text-[20px] text-black max-w-[550px] mb-12">
            Innovative solutions designed to improve efficiency, ensure safety and drive your business forward
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Service card 1 */}
            <div className="bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="h-[240px] overflow-hidden">
                <img src={imgService1} alt="Packaging Solutions" data-parallax-speed="0.12" className="w-full h-full object-cover" />
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
            {/* Service card 2 */}
            <div className="bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="h-[240px] overflow-hidden">
                <img src={imgService2} alt="Machinery & Tools Supply" data-parallax-speed="0.12" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-[55px] h-[55px] bg-[#cd0606] rounded-full flex items-center justify-center">
                    <img src={imgServiceIcon} alt="" className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="font-['Inter',sans-serif] font-bold text-[20px] text-black">Machinery & Tools Supply</h3>
                </div>
                <div className="w-[41px] h-[4px] bg-[#cd0606] mb-3" />
                <p className="font-['Inter',sans-serif] text-[15px] text-black/80">
                  PET & steel strapping tools, stretch wrapping machines, pneumatic nailers, staplers, and packaging consumables for industrial operations.
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Inter',sans-serif] font-bold text-[40px] text-black">
              Industries <span className="text-[#cd0606]">We Serve</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            {industries1.map((ind) => (
              <IndustryCard key={ind.label} img={ind.img} label={ind.label} />
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {industries2.map((ind) => (
              <IndustryCard key={ind.label} img={ind.img} label={ind.label} />
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate("industries")}
              className="inline-flex items-center gap-3 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[10px] px-8 h-[56px]"
            >
              <span className="font-['Inter',sans-serif] font-bold text-white text-[18px]">View All Industries</span>
              <img src={imgArrow} alt="" className="h-5 w-auto" />
            </button>
          </div>
        </div>
      </section>

      {/* Products teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="font-['Inter',sans-serif] font-bold text-[40px] text-black">
              Our <span className="text-[#cd0606]">Products</span>
            </h2>
            <p className="font-['Inter',sans-serif] font-bold text-[28px] text-[#cd0606] mt-2">Premium Packaging Consumables</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 mb-10">
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
    if (initialCategory && (initialCategory === "all" || initialCategory === "atlanta" || initialCategory === "itipack")) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const allProducts: ProductInfo[] = [
    {
      img: imgTap2,
      name: "ALL TYPES OF TAPES",
      brand: "all",
      desc: "High-quality packaging tape engineered to secure pallet loads and protect goods during transport.",
      features: ["Strong adhesion", "Smooth unwind", "Residue-free removal"],
    },
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
    ? allProducts
    : allProducts.filter((p) => p.brand === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[90px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" data-parallax-speed="0.16" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[52px] md:text-[64px] leading-tight">
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
                className={`flex-shrink-0 px-8 py-4 font-['Inter',sans-serif] font-bold text-[16px] border-b-[3px] transition-colors ${
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
          <div className="mb-10">
            <h2 className="font-['Inter',sans-serif] font-bold text-[32px] text-black">
              {activeCategory === "all" && "Premium Packaging Consumables"}
              {activeCategory === "atlanta" && <><span className="text-[#cd0606]">Atlanta</span> Products</>}
              {activeCategory === "itipack" && <><span className="text-[#cd0606]">Itipack</span> Products</>}
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
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} navigate={navigate} />
      )}

      {/* Machinery section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-10">
            <SectionHeading pre="Packaging " highlight="Machinery" post=" & Tools" />
            <p className="font-['Inter',sans-serif] text-[17px] text-black/70 mt-4 max-w-[650px]">
              We supply and service a complete range of industrial packaging machinery including strapping machines, stretch wrapping equipment, pneumatic nailers, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[10px] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <img src={imgService1} alt="Packaging machinery" className="w-full h-[280px] object-cover" />
              <div className="p-5 bg-white border-t-2 border-[#cd0606]">
                <h3 className="font-['Inter',sans-serif] font-bold text-[20px] text-black">Strapping Machines</h3>
                <p className="font-['Inter',sans-serif] text-[15px] text-black/70 mt-2">
                  Semi-automatic and fully automatic PET & steel strapping machines for high-volume operations.
                </p>
              </div>
            </div>
            <div className="rounded-[10px] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <img src={imgService2} alt="Wrapping machines" className="w-full h-[280px] object-cover" />
              <div className="p-5 bg-white border-t-2 border-[#cd0606]">
                <h3 className="font-['Inter',sans-serif] font-bold text-[20px] text-black">Stretch Wrapping Machines</h3>
                <p className="font-['Inter',sans-serif] text-[15px] text-black/70 mt-2">
                  Turntable, rotary arm, and orbital stretch wrappers for pallet and bundle wrapping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#18196d]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="font-['Inter',sans-serif] font-bold text-white text-[36px] mb-4">
            Need a Custom Packaging Solution?
          </h2>
          <p className="font-['Inter',sans-serif] text-white/80 text-[18px] mb-8 max-w-[560px] mx-auto">
            Talk to our experts and get a tailored recommendation for your operation.
          </p>
          <button
            onClick={() => navigate("contact")}
            className="inline-flex items-center gap-3 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[8px] px-8 h-[56px]"
          >
            <span className="font-['Inter',sans-serif] font-bold text-white text-[18px]">Get Consultation</span>
            <img src={imgArrow} alt="" className="h-5 w-auto" />
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
      <section className="relative pt-[90px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" data-parallax-speed="0.16" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[52px] md:text-[64px]">
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
              <h2 className="font-['Inter',sans-serif] font-bold text-[52px] text-black leading-tight mb-6">
                {"Goa's Industrial"}<br />
                {"packaging solutions"}<br />
                Company
              </h2>
              <p className="font-['Inter',sans-serif] text-[20px] text-black leading-relaxed">
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
              <img src={imgAbout2} alt="Rudren Solutions operations" className="w-full h-full object-cover rounded-[12px]" />
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
      img: imgService2,
      name: "STRETCH WRAPPING MACHINES",
      brand: "atlanta",
      desc: "Stretch wrapping machines for secure pallet wrapping and consistent package protection.",
      features: ["Automated wrapping", "Adjustable tension", "Fast cycle times"],
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
                      {Icon && <Icon className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-white/85 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />}
                    </div>
                    <div className="relative px-6 pb-8 pt-14">
                      <div className="absolute left-1/2 top-0 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-white text-white shadow-[0px_10px_24px_rgba(0,0,0,0.22)] transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: item.accent }}>
                        {Icon && <Icon className="h-9 w-9" strokeWidth={1.8} />}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "End-to-End Service", desc: "From material assessment to on-site packaging teams, we handle the entire process so you don't have to." },
              { title: "Industry Expertise", desc: "Decades of experience across pharma, chemicals, food processing, heavy engineering, and export logistics." },
              { title: "Goa's Trusted Partner", desc: "Local presence with deep understanding of Goa's industrial landscape and supply chain requirements." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] p-6 border-b-2 border-[#cd0606]">
                <h3 className="font-['Inter',sans-serif] font-bold text-[20px] text-black mb-3">{item.title}</h3>
                <p className="font-['Inter',sans-serif] text-[15px] text-black/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
      img: imgService1,
      title: "Complete Packaging",
      desc: "Comprehensive packaging solutions that combine practical design with protective efficiency, helping your products stay secure and presentable.",
      icon: PackageOpen,
    },
    {
      img: imgAbout2,
      title: "Onsite Packaging",
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
      img: imgHeroBg,
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
      <section className="relative pt-[90px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" data-parallax-speed="0.16" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[52px] md:text-[64px]">
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
            <h2 className="font-['Inter',sans-serif] font-bold text-[36px] md:text-[46px] text-black leading-tight">
              Discover our Tailored Solutions
            </h2>
            <div className="w-[66px] h-[4px] bg-[#cd0606] mx-auto mt-5" />
            <p className="font-['Inter',sans-serif] text-[18px] text-black/70 mt-5 max-w-[760px] mx-auto leading-relaxed">
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
                      <h3 className="font-['Inter',sans-serif] font-bold text-[22px] text-black leading-tight">{s.title}</h3>
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
            <h2 className="font-['Inter',sans-serif] font-bold text-[40px] text-black">HOW WE WORK</h2>
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

      <section className="py-14 bg-[#18196d] text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="font-['Inter',sans-serif] font-bold text-white text-[32px] mb-4">Ready to discuss your plant&apos;s packaging?</h2>
          <p className="font-['Inter',sans-serif] text-white/80 text-[17px] mb-8">Tell us your throughput, product type, and current challenges. We&apos;ll come back with a specific proposal.</p>
          <button
            onClick={() => navigate("contact")}
            className="inline-flex items-center gap-3 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[8px] px-8 h-[56px]"
          >
            <span className="font-['Inter',sans-serif] font-bold text-white text-[18px]">Request a Site Survey</span>
            <img src={imgArrow} alt="" className="h-5 w-auto" />
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
      <section className="relative pt-[90px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" data-parallax-speed="0.16" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[52px] md:text-[64px]">
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

// ─── CONTACT PAGE ─────────────────────────────────────────────────────────────

function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="relative pt-[90px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" data-parallax-speed="0.16" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[52px] md:text-[64px]">
              Contact <span className="text-[#cd0606]">Page</span>
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
              <h2 className="font-['Inter',sans-serif] font-bold text-[32px] text-black mb-8">Get in Touch</h2>
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
                    <input
                      type="text"
                      placeholder="Service Required"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full h-[50px] border border-[#d9d9d9] rounded-[5px] px-4 font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#cd0606] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-['Inter',sans-serif] text-[13px] text-[#97918b] mb-1">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-[#d9d9d9] rounded-[5px] px-4 py-3 font-['Inter',sans-serif] text-[14px] focus:outline-none focus:border-[#cd0606] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-[50px] bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[5px] flex items-center justify-center gap-3"
                  >
                    <span className="font-['Inter',sans-serif] font-bold text-white text-[18px]">SEND ENQUIRY</span>
                    <img src={imgArrow} alt="" className="h-5 w-auto" />
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
    if (category && (category === "all" || category === "atlanta" || category === "itipack")) {
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
        {page === "contact" && <ContactPage />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
