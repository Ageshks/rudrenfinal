import { useState } from "react";

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

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar({ current, navigate }: { current: Page; navigate: (p: Page) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "services" },
    { label: "Products", page: "products" },
    { label: "Industries", page: "industries" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-6 h-[90px] flex items-center justify-between">
        <button onClick={() => navigate("home")} className="flex-shrink-0">
          <img src={imgLogo} alt="Rudren Solutions" className="h-[80px] w-auto" />
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`font-['Inter',sans-serif] font-bold text-[18px] text-white hover:text-[#cd0606] transition-colors ${
                current === page ? "text-[#cd0606]" : ""
              }`}
            >
              {label}
            </button>
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
    <footer className="bg-[#18196d] pt-12 pb-8">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo + tagline */}
          <div>
            <img src={imgLogoFooter} alt="Rudren Solutions" className="h-[80px] w-auto mb-4" />
            <p className="font-['Inter',sans-serif] text-white/70 text-[15px] leading-relaxed">
              Goa's trusted partner for industrial packaging solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Inter',sans-serif] font-bold text-white text-[18px] mb-3">Quick Links</h4>
            <div className="w-12 h-[3px] bg-[#cd0606] mb-4" />
            <div className="flex flex-col gap-3">
              {(["home","about","services","industries","contact"] as Page[]).map((p) => (
                <button key={p} onClick={() => navigate(p)} className="text-left font-['Inter',sans-serif] text-white text-[16px] hover:text-[#cd0606] transition-colors capitalize">
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-['Inter',sans-serif] font-bold text-white text-[18px] mb-3">Our Products</h4>
            <div className="w-12 h-[3px] bg-[#cd0606] mb-4" />
            <div className="flex flex-col gap-3">
              {["Wrapping Machines", "All Products", "Strapping Machines"].map((t) => (
                <button key={t} onClick={() => navigate("products")} className="text-left font-['Inter',sans-serif] text-white text-[16px] hover:text-[#cd0606] transition-colors">
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Services + Contact */}
          <div>
            <h4 className="font-['Inter',sans-serif] font-bold text-white text-[18px] mb-3">Our Services</h4>
            <div className="w-12 h-[3px] bg-[#cd0606] mb-4" />
            <div className="flex flex-col gap-3 mb-6">
              {["Packaging Solutions", "Machinery & Tools Supply", "On-Site Packaging Teams", "Cargo & Export Packaging"].map((t) => (
                <button key={t} onClick={() => navigate("services")} className="text-left font-['Inter',sans-serif] text-white text-[16px] hover:text-[#cd0606] transition-colors">
                  {t}
                </button>
              ))}
            </div>
            <h4 className="font-['Inter',sans-serif] font-bold text-white text-[18px] mb-3">Contact Us</h4>
            <div className="w-12 h-[3px] bg-[#cd0606] mb-4" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <img src={imgPhone} alt="" className="w-8 h-8 object-contain" />
                <span className="font-['Inter',sans-serif] text-white text-[15px]">+91 96070 24997</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={imgEmail} alt="" className="w-8 h-8 object-contain" />
                <a href="mailto:info@rudren.com" className="font-['Inter',sans-serif] text-white text-[15px] underline hover:text-[#cd0606] transition-colors">info@rudren.com</a>
              </div>
              <div className="flex items-center gap-2">
                <img src={imgLocation} alt="" className="w-8 h-8 object-contain" />
                <span className="font-['Inter',sans-serif] text-white text-[15px]">Goa, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="font-['Inter',sans-serif] text-white/50 text-[14px]">
            © 2026 Rudren Solutions. All rights reserved.
          </p>
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

// ─── Product card ─────────────────────────────────────────────────────────────

function ProductCard({ img, name }: { img: string; name: string }) {
  return (
    <div className="bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
      <div className="h-[200px] overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 border-t-2 border-[#cd0606]">
        <p className="font-['Inter',sans-serif] font-bold text-[17px] text-black">{name}</p>
      </div>
    </div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

function HomePage({ navigate }: { navigate: (p: Page) => void }) {
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

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={imgHeroBg} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 w-full px-10 md:px-16 pt-[90px] pb-16">
          <div className="max-w-[760px]">
            <div className="w-[107px] h-[4px] bg-[#cd0606] mb-6" />
            <h1 className="font-['Inter',sans-serif] font-bold text-white text-[56px] md:text-[72px] leading-tight mb-6">
              PACKAGING BUILT<br />
              <span className="text-[#cd0606]">AROUND </span>YOUR<br />
              OPERATION
            </h1>
            <p className="font-['Inter',sans-serif] text-white text-[18px] leading-relaxed max-w-[620px] mb-8">
              From requirement assessment and material supply to dedicated on-site packaging teams — Rudren Solutions manages your entire packaging process, so your team can focus on what they do best.
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

            <div className="relative h-[520px]">
              <div className="absolute -right-8 top-8 w-[68%] h-[90%] bg-[#cd0606]/10 rounded-[40px] -z-10" />
              <img src={imgAbout2} alt="Warehouse operations" className="w-full h-full object-cover rounded-[30px] shadow-[0px_20px_60px_rgba(0,0,0,0.12)]" />
              <div className="absolute -bottom-10 left-0 w-[52%] h-[260px] overflow-hidden rounded-[24px] border-4 border-white shadow-xl">
                <img src={imgAbout1} alt="Industrial packaging" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <div className="w-[66px] h-[4px] bg-[#cd0606] mx-auto mb-4" />
            <h2 className="font-['Inter',sans-serif] font-bold text-[40px] text-black mb-4">HOW WE WORK</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Understand Your Requirements",
                desc: "We listen, assess, and understand your needs to deliver the best packaging solution.",
              },
              {
                step: "02",
                title: "Design the Right Solution",
                desc: "We design customized solutions using the right products, machinery, and expertise.",
              },
              {
                step: "03",
                title: "Supply & Deploy",
                desc: "We supply quality products and deploy them efficiently at your site to ensure smooth operations.",
              },
              {
                step: "04",
                title: "Support & Improve",
                desc: "We provide continuous support and look for ways to improve your packaging performance.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-[24px] border border-black/5 shadow-[0px_10px_30px_rgba(0,0,0,0.08)] p-8 text-center">
                <div className="mx-auto mb-5 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#cd0606] text-white text-[28px] font-bold">
                  {item.step}
                </div>
                <h3 className="font-['Inter',sans-serif] font-bold text-[18px] text-black mb-3">{item.title}</h3>
                <p className="font-['Inter',sans-serif] text-[15px] text-black/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
                <img src={imgService1} alt="Packaging Solutions" className="w-full h-full object-cover" />
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
                <img src={imgService2} alt="Machinery & Tools Supply" className="w-full h-full object-cover" />
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
            <ProductCard img={imgTap1} name="ALL TYPES OF TAPES" />
            <ProductCard img={imgTap26} name="STEEL STRAP" />
            <ProductCard img={imgTap27} name="PET STRAP" />
            <ProductCard img={imgTap28} name="COMPOSITE STRAP" />
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
    </>
  );
}

// ─── PRODUCTS PAGE ────────────────────────────────────────────────────────────

type ProductCategory = "all" | "atlanta" | "itipack";

function ProductsPage({ navigate }: { navigate: (p: Page) => void }) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");

  const allProducts = [
    { img: imgTap2, name: "ALL TYPES OF TAPES", brand: "all" },
    { img: imgTap26, name: "STEEL STRAP", brand: "all" },
    { img: imgTap27, name: "PET STRAP", brand: "all" },
    { img: imgTap28, name: "COMPOSITE STRAP", brand: "all" },
    { img: imgTap29, name: "NON-RESIDUAL TAPES", brand: "all" },
    { img: imgTap30, name: "ALL TYPES OF SEALS", brand: "all" },
    { img: imgTap31, name: "GALVANIZED BUCKLES", brand: "all" },
    { img: imgTap32, name: "STRETCH FILM", brand: "all" },
    { img: imgTap33, name: "WOVEN STRAP & BUCKLE", brand: "atlanta" },
    { img: imgTap34, name: "ALL TYPES OF LDPE", brand: "atlanta" },
    { img: imgTap35, name: "DUNNAGE AIR BAGS", brand: "itipack" },
    { img: imgTap36, name: "ANGLE BOARD", brand: "itipack" },
    { img: imgService1, name: "STRAPPING MACHINES", brand: "itipack" },
    { img: imgService2, name: "STRETCH WRAPPING MACHINES", brand: "atlanta" },
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
          <img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
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
              <ProductCard key={p.name} img={p.img} name={p.name} />
            ))}
          </div>
        </div>
      </section>

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
          <img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
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
            <div className="rounded-[12px] overflow-hidden">
              <img src={imgWhyChoose} alt="Why choose Rudren" className="w-full h-auto max-h-[400px] object-cover" />
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
      title: "Packaging Solutions",
      desc: "Requirement-led industrial packaging tailored to your product, storage, and transit needs. We assess, plan, and execute packaging strategies that reduce damage, improve handling, and cut costs.",
    },
    {
      img: imgService2,
      title: "Machinery & Tools Supply",
      desc: "PET & steel strapping tools, stretch wrapping machines, pneumatic nailers, staplers, and packaging consumables for industrial operations. Supplied, installed, and serviced by our team.",
    },
    {
      img: imgAbout1,
      title: "On-Site Packaging Teams",
      desc: "Dedicated, trained packaging teams deployed directly to your facility. We manage attendance, supervision, and output — you get results without the overhead of managing a packaging workforce.",
    },
    {
      img: imgAbout2,
      title: "Cargo & Export Packaging",
      desc: "Specialized export-grade packaging compliant with international transit standards. We ensure your goods reach their destination without damage, delay, or compliance issues.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-[90px]">
        <div className="relative h-[340px] overflow-hidden">
          <img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
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
          <div className="mb-14">
            <SectionHeading pre="What We " highlight="Offer" />
            <p className="font-['Inter',sans-serif] text-[20px] text-black mt-4 max-w-[600px]">
              Innovative solutions designed to improve efficiency, ensure safety and drive your business forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
                <div className="h-[240px] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-[48px] h-[48px] bg-[#cd0606] rounded-full flex items-center justify-center flex-shrink-0">
                      <img src={imgServiceIcon} alt="" className="w-7 h-7 object-contain" />
                    </div>
                    <h3 className="font-['Inter',sans-serif] font-bold text-[20px] text-black">{s.title}</h3>
                  </div>
                  <div className="w-[41px] h-[4px] bg-[#cd0606] mb-4" />
                  <p className="font-['Inter',sans-serif] text-[15px] text-black/80 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
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
          <div className="rounded-[12px] overflow-hidden mb-10">
            <img src={imgHowWeWork1} alt="How we work" className="w-full h-auto max-h-[380px] object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Requirement Assessment", desc: "We begin with a thorough evaluation of your packaging needs, materials handled, and operational constraints." },
              { step: "02", title: "Solution Design", desc: "We design a packaging solution — materials, equipment, and processes — tailored to your specific requirements." },
              { step: "03", title: "Execution & Support", desc: "We deploy materials, machinery, and teams on-site, with ongoing support and replenishment." },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] p-7">
                <div className="text-[48px] font-['Inter',sans-serif] font-bold text-[#cd0606] mb-3">{item.step}</div>
                <h3 className="font-['Inter',sans-serif] font-bold text-[20px] text-black mb-3">{item.title}</h3>
                <p className="font-['Inter',sans-serif] text-[15px] text-black/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#18196d] text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <h2 className="font-['Inter',sans-serif] font-bold text-white text-[32px] mb-4">Ready to Streamline Your Packaging?</h2>
          <p className="font-['Inter',sans-serif] text-white/80 text-[17px] mb-8">Contact us today for a free consultation and site assessment.</p>
          <button
            onClick={() => navigate("contact")}
            className="inline-flex items-center gap-3 bg-[#cd0606] hover:bg-[#a80404] transition-colors rounded-[8px] px-8 h-[56px]"
          >
            <span className="font-['Inter',sans-serif] font-bold text-white text-[18px]">Get Started</span>
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
          <img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
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
          <img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
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
              <div className="absolute inset-0 bg-[#cd0606]/85" />
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

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-['Inter',sans-serif]">
      <Navbar current={page} navigate={navigate} />
      <main className="flex-1">
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "products" && <ProductsPage navigate={navigate} />}
        {page === "about" && <AboutPage navigate={navigate} />}
        {page === "services" && <ServicesPage navigate={navigate} />}
        {page === "industries" && <IndustriesPage />}
        {page === "contact" && <ContactPage />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
