/**
 * Top navigation bar with brand logo and name.
 */
export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-50 bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-start items-center">
        <a href="#" className="flex items-center gap-3 group">
          {/* Replace src with your actual company logo path (e.g., "/my-logo.png") */}
          <img
            src="logo.png"
            alt="Boost & Elevate Logo"
            className="w-10 h-10 rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="font-extrabold text-2xl tracking-tighter text-slate-900 drop-shadow-sm">
            Boost & Elevate
          </span>
        </a>
      </div>
    </header>
  );
};
