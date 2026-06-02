import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0D2B6E] to-[#000F2E] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2962FF] to-[#00E5FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">⚡</span>
              </div>
              <span className="font-bold text-lg">Forwarder Express</span>
            </div>
            <p className="text-gray-400 text-sm">
              Jasa forwarder terpercaya untuk kebutuhan ekspor dan impor Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/proses" className="hover:text-white transition">
                  Proses
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="hover:text-white transition">
                  Tentang
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/layanan" className="hover:text-white transition">
                  Ekspor
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition">
                  Impor
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition">
                  Perizinan
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-white transition">
                  Dokumentasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+62-812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:info@forwarder.id" className="hover:text-white">
                  info@forwarder.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Forwarder Express. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
