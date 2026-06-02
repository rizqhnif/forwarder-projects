"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    komoditas: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ${formData.nama} (${formData.email}) ingin konsultasi tentang ekspor/impor ${formData.komoditas}`;
    window.open(
      `https://wa.me/621234567890?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Futuristic Gradient */}
        <section className="bg-gradient-to-r from-[#2962FF] via-[#1E53E5] to-[#00E5FF] text-white py-20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00E5FF] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2962FF] rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Ekspor & Impor Tanpa Ribet
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Platform digital untuk mengelola ekspor-impor dengan cepat,
                  transparansi penuh, dan sistem tracking real-time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#konsultasi"
                    className="px-6 py-3 bg-white text-[#2962FF] rounded-lg font-bold hover:bg-[#E3F2FD] transition text-center shadow-xl"
                  >
                    Konsultasi Gratis
                  </Link>
                  <a
                    href="https://wa.me/621234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#00E5FF] text-gray-900 rounded-lg font-bold hover:bg-[#1AE5FF] transition text-center shadow-xl"
                  >
                    WhatsApp Sekarang
                  </a>
                </div>
              </div>
              <div className="hidden md:flex">
                <div className="w-full h-64 bg-gradient-to-br from-[#E3F2FD] to-[#B3E5FC] rounded-lg flex items-center justify-center border-2 border-[#00E5FF] border-opacity-50 shadow-2xl">
                  <svg
                    className="w-48 h-48 text-[#2962FF]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8 4m-8-4v10M7 7l5-2.5 5 2.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props - Sleek Cards */}
        <section className="py-16 bg-gradient-to-b from-[#E3F2FD] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Mengapa Memilih Kami?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Izin & Dokumen Lengkap",
                  desc: "Kami handle semua perizinan dan dokumen yang dibutuhkan sesuai regulasi.",
                },
                {
                  icon: "🚀",
                  title: "Proses Cepat & Transparan",
                  desc: "Update real-time dan komunikasi terbuka di setiap tahap proses.",
                },
                {
                  icon: "🔐",
                  title: "Tim Berpengalaman",
                  desc: "Tim profesional dengan pengalaman puluhan tahun di industri forwarder.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-l-4 border-[#2962FF] hover:border-[#00E5FF] bg-gradient-to-br from-white to-[#E3F2FD] group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#2962FF] transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layanan Utama - Service Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Layanan Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "🚢",
                  title: "Ekspor",
                  desc: "Kirim produk Anda ke seluruh dunia dengan aman.",
                },
                {
                  icon: "📥",
                  title: "Impor",
                  desc: "Terima barang dari luar negeri dengan lancar.",
                },
                {
                  icon: "📋",
                  title: "Perizinan",
                  desc: "Urus semua izin yang diperlukan untuk ekspor-impor.",
                },
                {
                  icon: "✅",
                  title: "Dokumentasi",
                  desc: "Kelengkapan dokumen sesuai standar internasional.",
                },
              ].map((svc, i) => (
                <Link
                  key={i}
                  href="/layanan"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border-t-4 border-[#2962FF] hover:border-[#00E5FF] bg-gradient-to-br from-white to-[#E3F2FD] cursor-pointer text-center group"
                >
                  <div className="text-5xl mb-3 flex justify-center group-hover:scale-110 transition">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#2962FF] transition">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{svc.desc}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/layanan"
                className="inline-block px-6 py-3 bg-[#2962FF] text-white rounded-lg font-bold hover:bg-[#1E53E5] transition shadow-lg hover:shadow-xl"
              >
                Lihat Semua Layanan
              </Link>
            </div>
          </div>
        </section>

        {/* Testimoni - Gradient Backgrounds */}
        <section className="py-16 bg-gradient-to-b from-white to-[#E3F2FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Testimoni Klien
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "PT Maju Jaya",
                  review:
                    "Terima kasih Forwarder Express! Proses ekspor udang kami jadi sangat mudah dan cepat.",
                  rating: 5,
                },
                {
                  name: "CV Berkah Usaha",
                  review:
                    "Tim mereka sangat profesional dan responsif. Semua dokumen selesai tepat waktu.",
                  rating: 5,
                },
                {
                  name: "PT Sukses Bersama",
                  review:
                    "Harga kompetitif dan layanan terbaik. Kami rekomendasikan ke mitra bisnis kami.",
                  rating: 5,
                },
              ].map((testi, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#00E5FF] hover:shadow-lg transition bg-gradient-to-br from-white to-[#E3F2FD]"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-gray-900">
                      {testi.name}
                    </h4>
                    <span className="text-[#00E5FF] text-xl">
                      {"⭐".repeat(testi.rating)}
                    </span>
                  </div>
                  <p className="text-gray-600 italic">"{testi.review}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Konsultasi - Modern Style */}
        <section id="konsultasi" className="py-16 bg-gradient-to-b from-[#E3F2FD] to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Konsultasi Gratis
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Isi form di bawah dan tim kami akan menghubungi Anda dalam 1 jam.
            </p>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-xl border-2 border-[#E3F2FD]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama Lengkap"
                  required
                  value={formData.nama}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#E3F2FD] rounded-lg focus:outline-none focus:border-[#2962FF] transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#E3F2FD] rounded-lg focus:outline-none focus:border-[#2962FF] transition"
                />
              </div>
              <input
                type="text"
                name="komoditas"
                placeholder="Komoditas / Barang"
                value={formData.komoditas}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-[#E3F2FD] rounded-lg focus:outline-none focus:border-[#2962FF] transition mb-6"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#2962FF] to-[#00E5FF] text-white rounded-lg font-bold hover:shadow-lg transition shadow-lg"
              >
                Kirim Konsultasi
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
