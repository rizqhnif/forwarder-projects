"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function Kontak() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    perusahaan: "",
    subjek: "",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `
Nama: ${formData.nama}
Email: ${formData.email}
Telepon: ${formData.telepon}
Perusahaan: ${formData.perusahaan}
Subjek: ${formData.subjek}

Pesan:
${formData.pesan}
    `.trim();
    window.open(
      `https://wa.me/621234567890?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-[#2962FF] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Hubungi Kami</h1>
            <p className="text-blue-100 mt-2">
              Tim kami siap membantu Anda kapan saja
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#2962FF] text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-3">Alamat</h3>
                <p className="text-gray-600">
                  Jl. Gatot Subroto No. 123
                  <br />
                  Jakarta Pusat, 12000
                  <br />
                  Indonesia
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600 text-center">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
                <a
                  href="https://wa.me/621234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E5FF] font-bold hover:underline"
                >
                  +62-812-3456-7890
                </a>
                <p className="text-gray-600 text-sm mt-2">
                  Response cepat dalam 1 jam
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-600 text-center">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-3">Email</h3>
                <a
                  href="mailto:info@forwarder.id"
                  className="text-orange-600 font-bold hover:underline"
                >
                  info@forwarder.id
                </a>
                <p className="text-gray-600 text-sm mt-2">
                  Kami balas dalam 24 jam
                </p>
              </div>
            </div>

            {/* Additional Contact Info */}
            <div className="bg-gradient-to-b from-white to-[#E3F2FD] p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak Lengkap</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-2">📞 Telepon</h3>
                    <a href="tel:+62212345678" className="text-[#2962FF] hover:underline">
                      +62-21-XXXX-XXXX
                    </a>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-2">📠 Fax</h3>
                    <p className="text-gray-600">+62-21-XXXX-XXXX</p>
                  </div>
                </div>
                <div>
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-2">🕐 Jam Operasional</h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 08:00 - 17:00 WIB
                      <br />
                      Sabtu: 08:00 - 13:00 WIB
                      <br />
                      Minggu & Libur: Tutup
                    </p>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-2">🚨 Darurat</h3>
                    <p className="text-gray-600">
                      WhatsApp 24/7: +62-812-3456-7890
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gradient-to-b from-white to-[#E3F2FD]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Kirim Pesan ke Kami
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Isi form di bawah dan kami akan segera menghubungi Anda
            </p>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama Lengkap *"
                  required
                  value={formData.nama}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2962FF]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2962FF]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="tel"
                  name="telepon"
                  placeholder="Nomor Telepon"
                  value={formData.telepon}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2962FF]"
                />
                <input
                  type="text"
                  name="perusahaan"
                  placeholder="Nama Perusahaan"
                  value={formData.perusahaan}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2962FF]"
                />
              </div>

              <select
                name="subjek"
                value={formData.subjek}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2962FF] mb-6"
              >
                <option value="">Pilih Subjek *</option>
                <option value="Konsultasi Ekspor">Konsultasi Ekspor</option>
                <option value="Konsultasi Impor">Konsultasi Impor</option>
                <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                <option value="Komplain/Saran">Komplain/Saran</option>
                <option value="Lainnya">Lainnya</option>
              </select>

              <textarea
                name="pesan"
                placeholder="Pesan Anda *"
                required
                value={formData.pesan}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2962FF] mb-6"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#2962FF] text-white rounded-lg font-bold hover:bg-[#1E53E5] transition"
              >
                Kirim Pesan via WhatsApp
              </button>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Pesan akan dikirim melalui WhatsApp ke nomor kami
              </p>
            </form>
          </div>
        </section>

        {/* Map & Additional Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Lokasi Kami</h2>
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <svg
                  className="w-24 h-24 text-gray-500 mx-auto mb-4"
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
                <p className="text-gray-600">
                  Google Maps akan ditampilkan di sini
                </p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Jl. Gatot Subroto No. 123, Jakarta Pusat
            </p>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Cari Informasi Lain?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="/faq"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">❓</div>
                <h3 className="font-bold text-lg mb-2">FAQ</h3>
                <p className="text-gray-600 text-sm">
                  Lihat pertanyaan yang sering diajukan
                </p>
              </a>
              <a
                href="/layanan"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">🚢</div>
                <h3 className="font-bold text-lg mb-2">Layanan</h3>
                <p className="text-gray-600 text-sm">
                  Pelajari layanan kami lebih lanjut
                </p>
              </a>
              <a
                href="/persyaratan"
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">📋</div>
                <h3 className="font-bold text-lg mb-2">Persyaratan</h3>
                <p className="text-gray-600 text-sm">
                  Cek dokumen yang dibutuhkan
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
