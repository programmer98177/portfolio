export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-2 flex items-center justify-between">

        {/* LEFT: LOGO WITH GLOW */}
        <div className="flex items-center gap-3">
          <div className="relative rounded-full p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse">
            <div className="rounded-full bg-gray-800 p-1">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: PORTFOLIO TEXT */}
        <div className="text-right">
          <div className="text-xs uppercase tracking-wider text-gray-300">
            PORTFOLIO
          </div>
          <div className="text-xl md:text-2xl font-semibold">
            VyralXAgency.marketing.co
          </div>
        </div>

      </div>
    </header>
  );
}
