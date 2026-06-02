"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Tentang() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-[#2962FF] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Tentang Forwarder Express</h1>
            <p className="text-blue-100 mt-2">
              Partner terpercaya untuk ekspor dan impor Anda
            </p>
          </div>
        </section>

        {/* Visi Misi */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-[#2962FF] text-center">
                <h2 className="text-2xl font-bold mb-4 text-[#2962FF]">Visi</h2>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi perusahaan forwarder terdepan yang memudahkan bisnis
                  ekspor-impor di Indonesia.
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-600 text-center">
                <h2 className="text-2xl font-bold mb-4 text-[#00E5FF]">Misi</h2>
                <p className="text-gray-700 leading-relaxed">
                  Menyediakan layanan forwarder profesional dengan harga kompetitif
                  dan layanan terpercaya.
                </p>
              </div>
              <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-600 text-center">
                <h2 className="text-2xl font-bold mb-4 text-orange-600">Nilai</h2>
                <p className="text-gray-700 leading-relaxed">
                  Integritas, Profesionalisme, Transparansi, dan Kepuasan
                  Pelanggan adalah prioritas utama kami.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sejarah & Pengalaman */}
        <section className="py-16 bg-gradient-to-b from-white to-[#E3F2FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Pengalaman & Kepercayaan</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { number: "15+", label: "Tahun Pengalaman" },
                { number: "500+", label: "Klien Puas" },
                { number: "1000+", label: "Transaksi Berhasil" },
                { number: "50+", label: "Negara Tujuan" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-lg text-center shadow-md">
                  <div className="text-4xl font-bold text-[#2962FF] mb-2">
                    {item.number}
                  </div>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-[#2962FF]">
              <p className="text-gray-700 leading-relaxed">
                Forwarder Express didirikan pada tahun 2010 dengan komitmen untuk
                menyediakan layanan forwarder berkualitas tinggi. Dengan tim
                profesional yang berpengalaman lebih dari 15 tahun di industri
                ekspor-impor, kami telah membantu ratusan klien mencapai target
                bisnis mereka. Kepercayaan klien adalah aset terbesar kami.
              </p>
            </div>
          </div>
        </section>

        {/* Tim */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Tim Profesional Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Budi Santoso",
                  role: "Direktur Utama",
                  bio: "15+ tahun di industri forwarder",
                },
                {
                  name: "Siti Nurhaliza",
                  role: "Manager Ekspor",
                  bio: "Spesialis dokumen ekspor komoditas",
                },
                {
                  name: "Ahmad Rizki",
                  role: "Manager Impor",
                  bio: "Expert customs clearance & impor",
                },
                {
                  name: "Maya Purnama",
                  role: "Customer Success",
                  bio: "Dedicated support untuk klien",
                },
              ].map((member, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="w-full h-40 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-[#2962FF] font-semibold text-sm">{member.role}</p>
                    <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sertifikasi & Legalitas */}
        <section className="py-16 bg-gradient-to-b from-white to-[#E3F2FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Sertifikasi & Legalitas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-green-600 shadow-md">
                <h3 className="font-bold text-lg mb-4">Izin & Sertifikasi</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>Terdaftar di Bea Cukai Direktorat Jenderal Bea dan
                    Cukai</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>Izin Usaha Perdagangan (SIUP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>Surat Izin Usaha Jasa Pengiriman</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>NPWP dan Sertifikat PKP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>Anggota Asosiasi Forwarder Indonesia</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#2962FF] shadow-md">
                <h3 className="font-bold text-lg mb-4">Komitmen Kami</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2962FF] font-bold">✓</span>
                    <span>Semua transaksi 100% legal dan sesuai regulasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2962FF] font-bold">✓</span>
                    <span>Transparansi penuh dalam setiap proses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2962FF] font-bold">✓</span>
                    <span>Garansi layanan profesional dan bertanggung jawab</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2962FF] font-bold">✓</span>
                    <span>Dukungan pelanggan 24/7 (via WhatsApp)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2962FF] font-bold">✓</span>
                    <span>Solusi cepat untuk setiap kendala</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lokasi */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Lokasi Kantor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Kantor Pusat Jakarta</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-bold">Alamat</p>
                      <p className="text-gray-600">
                        Jl. Gatot Subroto No. 123, Jakarta Pusat, 12000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-bold">Telepon</p>
                      <p className="text-gray-600">+62-21-XXXX-XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-gray-600">info@forwarder.id</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <p className="font-bold">WhatsApp</p>
                      <p className="text-gray-600">+62-812-3456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <p className="font-bold">Jam Operasional</p>
                      <p className="text-gray-600">
                        Senin-Jumat: 08:00-17:00 WIB
                        <br />
                        Sabtu: 08:00-13:00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#2962FF] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bergabung dengan Ratusan Klien Kami
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Mari kita wujudkan target ekspor-impor Anda bersama-sama
            </p>
            <a
              href="https://wa.me/621234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#00E5FF] text-white rounded-lg font-bold hover:bg-[#1AE5FF] transition"
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
