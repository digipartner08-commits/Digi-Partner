import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  const links = [
    { name: "Home", id: "home" },
    { name: "Service", id: "service" },
    { name: "Process", id: "process" },
    { name: "Portfolio", id: "portfolio" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress((window.scrollY / totalHeight) * 100);

      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.getAttribute("id");
        }
      });

      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-orange-500 z-[9999] transition-all duration-200"
        style={{ width: `${progress}%` }}
      />

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => handleClick("home")}
            className="cursor-pointer group relative"
          >
            <img
              src={logo}
              alt="logo"
              className="
                w-[75px] md:w-[100px]
                object-contain
                transition-all duration-500
                group-hover:scale-110
                drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]
                group-hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.9)]
              "
            />

            <span
              className="
                absolute inset-0 rounded-full blur-2xl opacity-0
                group-hover:opacity-50
                transition duration-500
                bg-orange-500 -z-10
              "
            />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`relative text-sm transition duration-300 ${
                  active === link.id
                    ? "text-orange-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-orange-400 transition-all duration-500 ease-out ${
                    active === link.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => handleClick("contact")}
            className="hidden md:block px-5 py-2 bg-orange-500 text-black rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Let's Talk
          </button>

          {/* MOBILE MENU ICON */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer z-[1001] p-2"
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MOBILE MENU (COMPACT FIX) */}
      <div
        className={`fixed top-0 right-0 h-full w-[78%] sm:w-[65%] bg-black z-[1000] transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* TOP BAR (NO EXTRA SPACE) */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">


          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-xl leading-none"
          >
            ✖
          </button>
        </div>

        {/* MENU ITEMS (TIGHT) */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-50px)] space-y-4">

          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`text-base transition duration-300 ${
                active === link.id
                  ? "text-orange-400"
                  : "text-white hover:text-orange-400"
              }`}
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => handleClick("contact")}
            className="mt-3 px-5 py-2 bg-orange-500 text-black rounded-full text-xs font-semibold"
          >
            Let's Talk
          </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;