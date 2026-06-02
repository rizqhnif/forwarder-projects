"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Proses() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#2962FF] to-[#00E5FF] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Alur Proses Kami</h1>
            <p className="text-blue-100 mt-2">
              Tiga langkah mudah menuju ekspor-impor sukses
            </p>
          </div>
        </section>

        {/* Main Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Step 1 */}
            <div className="mb-16">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#2962FF] to-[#00E5FF] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                  1
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Konsultasi</h2>
                  <p className="text-gray-600 mb-6">
                    Tim kami akan mendengarkan kebutuhan Anda, memberikan saran
                    rute terbaik, estimasi biaya, dan timeline proses.
                  </p>
                  <div className="bg-gradient-to-br from-white to-[#E3F2FD] p-6 rounded-lg border-l-4 border-[#2962FF]">
                    <h3 className="font-bold mb-3 text-gray-900">Apa yang kami lakukan:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Assess kebutuhan ekspor/impor Anda</li>
                      <li>✓ Analisis rute dan metode pengiriman terbaik</li>
                      <li>✓ Berikan estimasi biaya transparan</li>
                      <li>✓ Jelaskan timeline dan proses keseluruhan</li>
                      <li>✓ Koordinasi jadwal untuk memulai</li>
                    </ul>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <strong>⏱️ Durasi:</strong> 1-2 hari kerja
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-12 bg-gradient-to-b from-[#2962FF] to-[#00E5FF]"></div>
            </div>

            {/* Step 2 */}
            <div className="mb-16">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#2962FF] to-[#00E5FF] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                  2
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Persiapan Dokumen</h2>
                  <p className="text-gray-600 mb-6">
                    Kami mengurus semua dokumen yang diperlukan, verifikasi
                    dengan pihak yang berwenang, dan pastikan semuanya lengkap
                    dan sesuai regulasi.
                  </p>
                  <div className="bg-gradient-to-br from-white to-[#E3F2FD] p-6 rounded-lg border-l-4 border-[#2962FF]">
                    <h3 className="font-bold mb-3 text-gray-900">Dokumen yang diurus:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Siapkan/verifikasi dokumen dari klien</li>
                      <li>✓ Urus izin dan sertifikat yang diperlukan</li>
                      <li>✓ Koordinasi dengan instansi pemerintah</li>
                      <li>✓ Double-check semua dokumen</li>
                      <li>✓ Update klien progress secara berkala</li>
                    </ul>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <strong>⏱️ Durasi:</strong> 3-7 hari kerja (tergantung jenis barang)
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center mb-8">
              <div className="w-1 h-12 bg-gradient-to-b from-[#2962FF] to-[#00E5FF]"></div>
            </div>

            {/* Step 3 */}
            <div className="mb-16">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#2962FF] to-[#00E5FF] text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                  3
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Pengiriman & Clearance</h2>
                  <p className="text-gray-600 mb-6">
                    Barang dikirimkan melalui kapal/pesawat sesuai rencana,
                    diurus di kepabeanan, dan diterima di tujuan dengan selamat.
                  </p>
                  <div className="bg-gradient-to-br from-white to-[#E3F2FD] p-6 rounded-lg border-l-4 border-[#2962FF]">
                    <h3 className="font-bold mb-3 text-gray-900">Proses pengiriman:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Arrange pengiriman via kapal/pesawat</li>
                      <li>✓ Tracking real-time barang Anda</li>
                      <li>✓ Handle customs clearance di tujuan</li>
                      <li>✓ Bayar bea cukai & administrasi</li>
                      <li>✓ Pengiriman final ke alamat penerima</li>
                    </ul>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <strong>⏱️ Durasi:</strong> 5-14 hari (tergantung rute & transportasi)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Visual */}
        <section className="py-16 bg-gradient-to-b from-white to-[#E3F2FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Timeline Estimasi</h2>
            <div className="bg-white p-8 rounded-xl shadow-md border-2 border-[#2962FF]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#00E5FF] mb-2">
                    1-2 Hari
                  </div>
                  <p className="text-gray-600">Konsultasi & Planning</p>
                </div>
                <div>
                  <div className="text-gray-400 hidden md:flex justify-center text-4xl">
                    →
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#00E5FF] mb-2">
                    3-7 Hari
                  </div>
                  <p className="text-gray-600">Persiapan Dokumen</p>
                </div>
                <div>
                  <div className="text-gray-400 hidden md:flex justify-center text-4xl">
                    →
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="text-4xl font-bold text-[#00E5FF] mb-2">
                    5-14 Hari
                  </div>
                  <p className="text-gray-600">Pengiriman & Clearance</p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-[#FFF3E0] border border-[#FFB74D] rounded-lg">
                <p className="text-sm text-gray-800">
                  <strong>⏱️ Catatan:</strong> Waktu dapat berbeda tergantung
                  jenis barang, rute, dan completeness dokumen. Hubungi kami
                  untuk estimasi spesifik.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Pertanyaan Umum
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Bagaimana jika saya belum punya semua dokumen?",
                  a: "Tidak masalah! Itulah mengapa Anda membutuhkan forwarder. Kami akan membantu Anda mengurus dan melengkapi semua dokumen yang diperlukan.",
                },
                {
                  q: "Apakah ada jaminan keberhasilan?",
                  a: "Kami berkomitmen penuh untuk menyelesaikan proses dengan sukses mengikuti regulasi yang berlaku. Jika ada hambatan, kami komunikasikan segera kepada Anda.",
                },
                {
                  q: "Berapa biaya layanan forwarder?",
                  a: "Biaya berbeda-beda tergantung jenis barang, rute, dan kompleksitas dokumen. Kami berikan penawaran detail setelah konsultasi.",
                },
                {
                  q: "Bagaimana tracking barang?",
                  a: "Kami memberikan nomor tracking dan update real-time melalui email/WhatsApp di setiap tahap pengiriman.",
                },
              ].map((faq, i) => (
                <details key={i} className="bg-gradient-to-br from-white to-[#E3F2FD] p-4 rounded-lg border-l-4 border-[#2962FF]">
                  <summary className="font-bold cursor-pointer text-lg text-gray-900">
                    {faq.q}
                  </summary>
                  <p className="text-gray-600 mt-3 ml-4">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#2962FF] to-[#00E5FF] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Siap Memulai Ekspor-Impor Anda?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Hubungi kami sekarang untuk konsultasi gratis
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
