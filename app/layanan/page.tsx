"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Layanan() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#2962FF] to-[#00E5FF] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Layanan Kami</h1>
            <p className="text-blue-100 mt-2">
              Solusi lengkap untuk kebutuhan ekspor dan impor Anda
            </p>
          </div>
        </section>

        {/* Layanan Ekspor */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="w-full h-64 bg-gradient-to-br from-[#E3F2FD] to-[#B3E5FC] rounded-lg flex items-center justify-center border-2 border-[#2962FF]">
                  <svg
                    className="w-32 h-32 text-[#2962FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">🚢 Layanan Ekspor</h2>
                <p className="text-gray-600 mb-4">
                  Kami membantu Anda mengirimkan produk ke seluruh dunia dengan
                  lancar dan aman.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl text-[#00E5FF]">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Handling Dokumen Ekspor</h4>
                      <p className="text-gray-600 text-sm">
                        Invoice, Packing List, NPWP, Surat Izin, dll.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl text-[#00E5FF]">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Koordinasi dengan Kepabeanan</h4>
                      <p className="text-gray-600 text-sm">
                        Pengurusan bea cukai dan customs clearance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl text-[#00E5FF]">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Logistik & Pengiriman</h4>
                      <p className="text-gray-600 text-sm">
                        Arrangement dengan berbagai kapal & maskapai.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/621234567890?text=Saya%20ingin%20konsultasi%20tentang%20layanan%20ekspor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#2962FF] text-white rounded-lg font-bold hover:bg-[#1E53E5] transition shadow-lg"
                >
                  Konsultasi Ekspor
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Layanan Impor */}
        <section className="py-16 bg-gradient-to-b from-white to-[#E3F2FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-64 bg-gradient-to-br from-[#E3F2FD] to-[#B3E5FC] rounded-lg flex items-center justify-center border-2 border-[#2962FF]">
                  <svg
                    className="w-32 h-32 text-[#2962FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8H3m0 0h18"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">📥 Layanan Impor</h2>
                <p className="text-gray-600 mb-4">
                  Proses impor barang dari luar negeri dengan mulus dan
                  terpercaya.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl text-[#00E5FF]">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Persiapan Dokumen Impor</h4>
                      <p className="text-gray-600 text-sm">
                        Invoice luar negeri, Bill of Lading, Surat Keterangan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl text-[#00E5FF]">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Customs Entry & Clearance</h4>
                      <p className="text-gray-600 text-sm">
                        Pengurusan masuk barang ke Indonesia.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl text-[#00E5FF]">✓</span>
                    <div>
                      <h4 className="font-bold text-gray-900">Pelepasan & Pengiriman</h4>
                      <p className="text-gray-600 text-sm">
                        Pelepasan barang dan pengiriman ke tujuan Anda.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/621234567890?text=Saya%20ingin%20konsultasi%20tentang%20layanan%20impor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#2962FF] text-white rounded-lg font-bold hover:bg-[#1E53E5] transition shadow-lg"
                >
                  Konsultasi Impor
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Perizinan & Dokumentasi */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              📋 Perizinan & Dokumentasi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Izin & Surat (Ekspor)",
                  items: [
                    "Surat Izin Menteri Perdagangan",
                    "Sertifikat Kesehatan (HS)",
                    "Surat Keterangan Asal (SKA)",
                    "NPWP & NIB",
                  ],
                },
                {
                  title: "Izin & Surat (Impor)",
                  items: [
                    "Surat Persetujuan Impor (SPI)",
                    "Sertifikat Fisik/Farmasi",
                    "Angka Pengenal Impor (API)",
                    "Rekomendasi Kesehatan",
                  ],
                },
                {
                  title: "Dokumen Pengiriman",
                  items: [
                    "Invoice Komersial",
                    "Packing List",
                    "Bill of Lading (B/L)",
                    "Air Waybill (AWB)",
                  ],
                },
                {
                  title: "Dokumen Kepabeanan",
                  items: [
                    "PIB (Pemberitahuan Impor Barang)",
                    "PEB (Pemberitahuan Ekspor Barang)",
                    "Manifest Barang",
                    "Deklarasi Pabean",
                  ],
                },
              ].map((doc, i) => (
                <div key={i} className="bg-gradient-to-br from-white to-[#E3F2FD] p-6 rounded-xl border-2 border-[#2962FF] border-opacity-30 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{doc.title}</h3>
                  <ul className="space-y-2">
                    {doc.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="text-[#00E5FF] font-bold">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#2962FF] to-[#00E5FF] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Butuh Layanan Forwarder?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik
            </p>
            <a
              href="https://wa.me/621234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-[#2962FF] rounded-lg font-bold hover:bg-[#E3F2FD] transition shadow-xl"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
