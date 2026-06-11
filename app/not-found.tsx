import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1a202c] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden font-sans">
          {/* Decorative elements */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#CC1C1C]/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              pointerEvents: "none",
            }}
          />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* 404 Heading */}
            <div className="mb-8">
              <h1 className="text-[120px] md:text-[180px] font-black text-white mb-2 drop-shadow-lg leading-none">
                404
              </h1>
              <div className="inline-block bg-[#CC1C1C] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Page Not Found
              </div>
            </div>

            {/* Main message */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-8">
              Page Not Found
            </h2>
            <p className="text-slate-300 text-lg mb-12 leading-relaxed">
              The page you are looking for doesn't exist or has been moved.
            </p>

            {/* Suggestion */}
            <div className="mb-12">
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-wide mb-8">
                Let's get you back on track:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Home Button */}
                <Link
                  href="/"
                  className="group flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-6 h-6 text-[#CC1C1C] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <span className="font-semibold text-white text-sm">Return to Home</span>
                </Link>

                {/* Companies Button */}
                <Link
                  href="/en/companies"
                  className="group flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-semibold text-white text-sm">Browse Our Partners</span>
                </Link>

                {/* Contact Button */}
                <Link
                  href="/en/contact"
                  className="group flex flex-col items-center gap-3 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="font-semibold text-white text-sm">Contact Us</span>
                </Link>
              </div>

              {/* Primary CTA */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#CC1C1C] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#A01515] transition-colors duration-200 shadow-lg cursor-pointer"
              >
                Return to Home
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Additional help text */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-slate-400 text-sm">
                Still looking for something?{" "}
                <Link
                  href="/en/contact"
                  className="text-[#CC1C1C] hover:text-red-400 font-semibold transition-colors cursor-pointer"
                >
                  Get in touch with our team
                </Link>
              </p>
            </div>
          </div>
        </div>
  );
}
