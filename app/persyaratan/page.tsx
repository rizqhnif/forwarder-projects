"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Persyaratan() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-[#2962FF] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Persyaratan & Dokumen</h1>
            <p className="text-blue-100 mt-2">
              Daftar lengkap dokumen yang dibutuhkan untuk ekspor dan impor
            </p>
          </div>
        </section>

        {/* General Requirements */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Persyaratan Umum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#2962FF]">
                <h3 className="text-xl font-bold mb-4">Untuk Perusahaan</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2962FF] font-bold">✓</span>
                    <span>NPWP Perusahaan (fotokopi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2962FF] font-bold">✓</span>
                    <span>NIB (Nomor Induk Berusaha)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2962FF] font-bold">✓</span>
                    <span>Akta Pendirian Perusahaan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2962FF] font-bold">✓</span>
                    <span>Surat Izin Usaha Perdagangan (SIUP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2962FF] font-bold">✓</span>
                    <span>API (Angka Pengenal Importir)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-4">Untuk Perorangan</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>KTP (fotokopi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>NPWP Pribadi (jika ada)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>Surat Keterangan Usaha dari Lurah</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>Rekening Koran Bank (3 bulan terakhir)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dokumen Ekspor */}
        <section className="py-16 bg-gradient-to-b from-white to-[#E3F2FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">📤 Dokumen Ekspor</h2>
            <div className="space-y-6">
              {[
                {
                  doc: "Invoice (Faktur)",
                  desc: "Dokumen komersial yang berisi daftar barang, harga, dan syarat pembayaran.",
                  dari: "Penjual/Supplier",
                },
                {
                  doc: "Packing List",
                  desc: "Rincian detail barang yang dikirim (berat, dimensi, jumlah karton, dll).",
                  dari: "Penjual/Supplier",
                },
                {
                  doc: "Sertifikat Asal (Certificate of Origin)",
                  desc: "Bukti bahwa barang berasal dari Indonesia.",
                  dari: "Chamber/Asosiasi Dagang",
                },
                {
                  doc: "Surat Izin Menteri Perdagangan",
                  desc: "Izin khusus untuk barang-barang tertentu (misal: produk pertanian, farmasi).",
                  dari: "Kementerian Perdagangan",
                },
                {
                  doc: "Sertifikat Kesehatan (Health Certificate)",
                  desc: "Untuk produk pertanian, peternakan, dan pangan.",
                  dari: "Dinas Kesehatan/BPOM",
                },
                {
                  doc: "Bill of Lading (B/L)",
                  desc: "Dokumen pengangkutan barang via laut.",
                  dari: "Shipping Agent",
                },
                {
                  doc: "Air Waybill (AWB)",
                  desc: "Dokumen pengangkutan barang via udara.",
                  dari: "Maskapai Udara",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-orange-400 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{item.doc}</h3>
                    <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded">
                      {item.dari}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dokumen Impor */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">📥 Dokumen Impor</h2>
            <div className="space-y-6">
              {[
                {
                  doc: "Invoice Luar Negeri",
                  desc: "Faktur dari penjual/supplier di luar negeri.",
                  dari: "Supplier Luar Negeri",
                },
                {
                  doc: "Bill of Lading (B/L)",
                  desc: "Dokumen pengangkutan barang dari luar negeri (via laut).",
                  dari: "Shipping Line",
                },
                {
                  doc: "Air Waybill (AWB)",
                  desc: "Dokumen pengangkutan barang dari luar negeri (via udara).",
                  dari: "Maskapai Udara",
                },
                {
                  doc: "Surat Keterangan Asal (Certificate of Origin)",
                  desc: "Bukti asal barang dari negara supplier.",
                  dari: "Chamber of Commerce Luar Negeri",
                },
                {
                  doc: "Packing List Luar Negeri",
                  desc: "Rincian detail barang dari pihak supplier.",
                  dari: "Supplier",
                },
                {
                  doc: "Surat Persetujuan Impor (SPI)",
                  desc: "Izin impor khusus untuk barang-barang tertentu.",
                  dari: "Kementerian Terkait",
                },
                {
                  doc: "Sertifikat Fisik/Farmasi",
                  desc: "Untuk barang kategori tertentu yang memerlukan persetujuan khusus.",
                  dari: "Kementerian/Lembaga Bersertifikat",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border-l-4 border-blue-400 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{item.doc}</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded">
                      {item.dari}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-gradient-to-b from-white to-[#E3F2FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Perbandingan Ekspor vs Impor
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-[#2962FF] text-white">
                    <th className="px-4 py-3 text-left">Jenis Dokumen</th>
                    <th className="px-4 py-3 text-center">Ekspor</th>
                    <th className="px-4 py-3 text-center">Impor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { jenis: "Invoice", ekspor: "✓", impor: "✓" },
                    { jenis: "Packing List", ekspor: "✓", impor: "✓" },
                    { jenis: "Bill of Lading/AWB", ekspor: "✓", impor: "✓" },
                    { jenis: "Certificate of Origin", ekspor: "✓", impor: "✓" },
                    { jenis: "Izin Menteri", ekspor: "✓", impor: "-" },
                    { jenis: "SPI (Persetujuan Impor)", ekspor: "-", impor: "✓" },
                    { jenis: "Health Certificate", ekspor: "✓*", impor: "✓*" },
                    { jenis: "PEB/PIB", ekspor: "✓", impor: "✓" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b hover:bg-gradient-to-b from-white to-[#E3F2FD]">
                      <td className="px-4 py-3 font-medium">{row.jenis}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={row.ekspor === "✓" ? "text-[#00E5FF] font-bold" : row.ekspor === "✓*" ? "text-orange-600 font-bold" : "text-gray-400"}>
                          {row.ekspor}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={row.impor === "✓" ? "text-[#00E5FF] font-bold" : row.impor === "✓*" ? "text-orange-600 font-bold" : "text-gray-400"}>
                          {row.impor}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              *Tergantung jenis barang yang diekspor/diimpor
            </p>
          </div>
        </section>

        {/* Catatan Penting */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">⚠️ Catatan Penting</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="font-bold text-yellow-900 mb-2">Dokumen Asli vs Fotokopi</h3>
                <p className="text-gray-700">
                  Beberapa dokumen perlu dalam bentuk asli dengan tanda tangan basah
                  dan stempel resmi. Kami akan jelaskan detail saat konsultasi.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-bold text-blue-900 mb-2">Persyaratan Dapat Berbeda</h3>
                <p className="text-gray-700">
                  Persyaratan dokumen dapat berbeda tergantung jenis barang, negara tujuan/asal,
                  dan regulasi terkini. Kami akan menyesuaikan sesuai kebutuhan spesifik Anda.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="font-bold text-[#00E5FF] mb-2">Kami Siap Membantu</h3>
                <p className="text-gray-700">
                  Jika Anda tidak yakin dokumen mana yang diperlukan, hubungi kami. Kami akan
                  membantu Anda mengidentifikasi dan mengurus semua dokumen yang diperlukan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#2962FF] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Masih Bingung Dokumen Mana yang Diperlukan?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Hubungi tim kami untuk konsultasi lengkap
            </p>
            <a
              href="https://wa.me/621234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#00E5FF] text-white rounded-lg font-bold hover:bg-[#1AE5FF] transition"
            >
              Tanya Dokumen via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
