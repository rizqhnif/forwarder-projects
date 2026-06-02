"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs = [
    {
      category: "Umum",
      items: [
        {
          q: "Apa itu forwarder?",
          a: "Forwarder adalah perusahaan jasa yang mengurus proses ekspor-impor barang, mulai dari persiapan dokumen, perizinan, hingga pengiriman ke tujuan. Kami membantu klien yang belum memiliki pengalaman atau kapasitas internal untuk menangani proses ekspor-impor sendiri.",
        },
        {
          q: "Kapan saya membutuhkan jasa forwarder?",
          a: "Anda membutuhkan jasa forwarder ketika: (1) ingin ekspor/impor tapi tidak punya pengalaman, (2) belum memiliki izin dan dokumen lengkap, (3) tidak punya waktu untuk mengurus sendiri, atau (4) ingin proses yang lebih cepat dan efisien.",
        },
        {
          q: "Apakah forwarder legal?",
          a: "Ya, forwarder adalah profesi yang legal dan diakui secara resmi. Kami memiliki izin usaha dan terdaftar di sistem kepabeanan nasional. Semua layanan kami sesuai dengan regulasi yang berlaku.",
        },
      ],
    },
    {
      category: "Layanan & Proses",
      items: [
        {
          q: "Apa saja layanan yang Anda tawarkan?",
          a: "Kami menawarkan: (1) Layanan Ekspor, (2) Layanan Impor, (3) Perizinan dan Dokumentasi, (4) Customs Clearance, dan (5) Consulting ekspor-impor.",
        },
        {
          q: "Berapa lama proses ekspor-impor?",
          a: "Rata-rata proses ekspor-impor membutuhkan waktu: Konsultasi (1-2 hari) → Persiapan Dokumen (3-7 hari) → Pengiriman & Clearance (5-14 hari). Total sekitar 2-3 minggu, tergantung jenis barang dan rute.",
        },
        {
          q: "Berapa biaya jasa forwarder?",
          a: "Biaya bervariasi tergantung: (1) Jenis barang, (2) Rute/negara tujuan, (3) Berat/volume barang, (4) Kompleksitas dokumen, dan (5) Metode pengiriman. Kami memberikan penawaran detail setelah konsultasi awal.",
        },
        {
          q: "Apakah ada biaya tersembunyi?",
          a: "Tidak ada biaya tersembunyi. Kami memberikan breakdown biaya yang transparan dan detail. Jika ada biaya tambahan, kami komunikasikan terlebih dahulu sebelum eksekusi.",
        },
      ],
    },
    {
      category: "Dokumen & Izin",
      items: [
        {
          q: "Apa saja dokumen yang saya harus siapkan?",
          a: "Dokumen bergantung pada jenis barang. Secara umum: Invoice, Packing List, NPWP, dan KTP/Akta Pendirian Perusahaan. Untuk barang tertentu ada persyaratan tambahan (sertifikat kesehatan, izin khusus, dll). Hubungi kami untuk daftar lengkap.",
        },
        {
          q: "Bagaimana jika saya belum punya semua dokumen?",
          a: "Tidak masalah! Kami akan membantu Anda mengurus dan melengkapi dokumen yang diperlukan. Kami bekerja sama dengan berbagai instansi pemerintah untuk percepatan proses.",
        },
        {
          q: "Berapa lama proses pengurusan izin?",
          a: "Durasi tergantung jenis izin. Rata-rata 2-7 hari kerja. Beberapa izin khusus (misal: barang tertentu) bisa lebih lama. Kami akan memberikan estimasi akurat saat konsultasi.",
        },
        {
          q: "Apakah izin yg diurus bersifat permanen?",
          a: "Beberapa izin bersifat permanen (misal: NIB), beberapa per transaksi (misal: SPI untuk impor). Kami akan jelaskan detail saat konsultasi.",
        },
      ],
    },
    {
      category: "Pengiriman & Tracking",
      items: [
        {
          q: "Bagaimana cara tracking barang?",
          a: "Kami memberikan nomor tracking dan update status real-time melalui email/WhatsApp. Anda bisa mengetahui posisi barang dari Indonesia hingga tiba di tujuan.",
        },
        {
          q: "Bagaimana jika ada delay atau masalah?",
          a: "Jika ada delay, kami akan segera mengidentifikasi penyebab dan melakukan tindakan korektif. Kami selalu komunikasi dengan Anda dan update perkembangan terbaru.",
        },
        {
          q: "Apakah Anda asuransikan barang?",
          a: "Kami dapat mengatur asuransi pengiriman. Jenis dan besarnya tergantung nilai barang dan preferensi Anda. Kami akan jelaskan opsi asuransi saat konsultasi.",
        },
        {
          q: "Bagaimana jika barang rusak atau hilang?",
          a: "Jika ada kerusakan/kehilangan, kami akan segera laporkan ke pihak pengangkut dan asuransi (jika ada). Kami akan bantu proses claim untuk penggantian/kompensasi.",
        },
      ],
    },
    {
      category: "Kontrak & Pembayaran",
      items: [
        {
          q: "Apa syarat dan ketentuan layanan?",
          a: "Kami akan memberikan penawaran (quotation) dan perjanjian layanan yang jelas sebelum dimulai. Semua syarat dan ketentuan akan didiskusikan dan disepakati bersama.",
        },
        {
          q: "Bagaimana sistem pembayaran?",
          a: "Sistem pembayaran biasanya: DP 50% saat kontrak, DP 30% saat dokumen siap, dan sisanya 20% saat barang tiba. Kami fleksibel sesuai kesepakatan.",
        },
        {
          q: "Apa metode pembayaran yang diterima?",
          a: "Kami menerima: Transfer bank, Cheque, e-Wallet, dan Cash. Untuk kemudahan, kami lebih prefer transfer bank ke rekening kami.",
        },
        {
          q: "Bagaimana jika ada perubahan order?",
          a: "Perubahan order dapat dilakukan selama barang belum dikirim. Jika ada perubahan, harga mungkin berubah dan kami akan menginformasikan kepada Anda.",
        },
      ],
    },
    {
      category: "Hubungan & Support",
      items: [
        {
          q: "Siapa contact person saya?",
          a: "Setiap klien akan ditugaskan satu dedicated account manager. Dia adalah kontak utama Anda untuk semua pertanyaan dan update proses.",
        },
        {
          q: "Jam operasional Anda?",
          a: "Jam kerja kami: Senin-Jumat 08:00-17:00, Sabtu 08:00-13:00 (WIB). Untuk kasus urgent, Anda bisa menghubungi emergency line kami di WhatsApp.",
        },
        {
          q: "Bagaimana cara menghubungi Anda?",
          a: "Anda bisa menghubungi kami melalui: (1) WhatsApp +62-812-3456-7890, (2) Email: info@forwarder.id, (3) Telepon: +62-21-XXXX-XXXX, atau (4) Datang langsung ke kantor kami.",
        },
        {
          q: "Apakah ada konsultasi gratis?",
          a: "Ya, kami menyediakan konsultasi gratis untuk menjelaskan layanan dan memahami kebutuhan Anda. Cukup hubungi kami via WhatsApp atau email.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-[#2962FF] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Pertanyaan Umum (FAQ)</h1>
            <p className="text-blue-100 mt-2">
              Jawaban atas pertanyaan yang sering diajukan klien
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqs.map((section, sIdx) => (
              <div key={sIdx} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-[#2962FF] pb-2 border-b-2 border-[#2962FF]">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, iIdx) => {
                    const itemId = `${sIdx}-${iIdx}`;
                    const isOpen = openId === itemId;

                    return (
                      <div
                        key={itemId}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenId(isOpen ? null : itemId)}
                          className="w-full px-6 py-4 flex justify-between items-start hover:bg-gradient-to-b from-white to-[#E3F2FD] transition text-left"
                        >
                          <span className="font-bold text-gray-900 pr-4">
                            {item.q}
                          </span>
                          <span className="text-2xl text-[#2962FF] flex-shrink-0">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-gradient-to-b from-white to-[#E3F2FD] border-t">
                            <p className="text-gray-700 leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gradient-to-b from-white to-[#E3F2FD]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Masih Ada Pertanyaan?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Jangan ragu untuk menghubungi kami. Tim kami siap menjawab semua
              pertanyaan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/621234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#00E5FF] text-white rounded-lg font-bold hover:bg-[#1AE5FF] transition"
              >
                Chat WhatsApp
              </a>
              <a
                href="mailto:info@forwarder.id"
                className="px-6 py-3 bg-[#2962FF] text-white rounded-lg font-bold hover:bg-[#1E53E5] transition"
              >
                Kirim Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
