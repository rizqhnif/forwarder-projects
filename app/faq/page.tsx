"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useState } from "react";

const S = {
  mono: {
    fontFamily: "'Courier New', monospace",
    fontSize: 12,
    letterSpacing: "0.28px",
    textTransform: "uppercase" as const,
    color: "#93939f",
  },
  pillBtn: {
    display: "inline-flex",
    alignItems: "center",
    background: "#17171c",
    color: "#fff",
    fontSize: 14,
    fontWeight: 500,
    padding: "12px 24px",
    borderRadius: 32,
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
  pillOutline: {
    display: "inline-flex",
    alignItems: "center",
    background: "transparent",
    color: "#17171c",
    fontSize: 14,
    fontWeight: 500,
    padding: "12px 24px",
    borderRadius: 30,
    textDecoration: "none",
    border: "1px solid #17171c",
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
};

const faqs = [
  {
    category: "Umum",
    items: [
      { q: "Apa itu forwarder?", a: "Forwarder adalah perusahaan jasa yang mengurus proses ekspor-impor barang, mulai dari persiapan dokumen, perizinan, hingga pengiriman ke tujuan. Kami membantu klien yang belum memiliki pengalaman atau kapasitas internal untuk menangani proses ekspor-impor sendiri." },
      { q: "Kapan saya membutuhkan jasa forwarder?", a: "Anda membutuhkan jasa forwarder ketika ingin ekspor/impor tapi tidak punya pengalaman, belum memiliki izin dan dokumen lengkap, tidak punya waktu untuk mengurus sendiri, atau ingin proses yang lebih cepat dan efisien." },
      { q: "Apakah forwarder legal?", a: "Ya, forwarder adalah profesi yang legal dan diakui secara resmi. Kami memiliki izin usaha dan terdaftar di sistem kepabeanan nasional. Semua layanan kami sesuai dengan regulasi yang berlaku." },
    ],
  },
  {
    category: "Layanan & Proses",
    items: [
      { q: "Apa saja layanan yang ditawarkan?", a: "Kami menawarkan: Layanan Ekspor, Layanan Impor, Perizinan dan Dokumentasi, Customs Clearance, dan Consulting ekspor-impor." },
      { q: "Berapa lama proses ekspor-impor?", a: "Rata-rata: Konsultasi 1–2 hari → Persiapan Dokumen 3–7 hari → Pengiriman & Clearance 5–14 hari. Total sekitar 2–3 minggu, tergantung jenis barang dan rute." },
      { q: "Berapa biaya jasa forwarder?", a: "Biaya bervariasi tergantung jenis barang, rute/negara tujuan, berat/volume barang, kompleksitas dokumen, dan metode pengiriman. Kami memberikan penawaran detail setelah konsultasi awal." },
      { q: "Apakah ada biaya tersembunyi?", a: "Tidak ada biaya tersembunyi. Kami memberikan breakdown biaya yang transparan dan detail. Jika ada biaya tambahan, kami komunikasikan terlebih dahulu sebelum eksekusi." },
    ],
  },
  {
    category: "Dokumen & Izin",
    items: [
      { q: "Dokumen apa yang harus saya siapkan?", a: "Dokumen bergantung pada jenis barang. Secara umum: Invoice, Packing List, NPWP, dan KTP/Akta Pendirian Perusahaan. Untuk barang tertentu ada persyaratan tambahan. Hubungi kami untuk daftar lengkap." },
      { q: "Bagaimana jika saya belum punya semua dokumen?", a: "Tidak masalah! Kami akan membantu Anda mengurus dan melengkapi dokumen yang diperlukan. Kami bekerja sama dengan berbagai instansi pemerintah untuk percepatan proses." },
      { q: "Berapa lama proses pengurusan izin?", a: "Durasi tergantung jenis izin. Rata-rata 2–7 hari kerja. Beberapa izin khusus bisa lebih lama. Kami akan memberikan estimasi akurat saat konsultasi." },
      { q: "Apakah izin bersifat permanen?", a: "Beberapa izin bersifat permanen (misal: NIB), beberapa per transaksi (misal: SPI untuk impor). Kami akan jelaskan detail saat konsultasi." },
    ],
  },
  {
    category: "Pengiriman & Tracking",
    items: [
      { q: "Bagaimana cara tracking barang?", a: "Kami memberikan nomor tracking dan update status real-time melalui email/WhatsApp. Anda bisa mengetahui posisi barang dari Indonesia hingga tiba di tujuan." },
      { q: "Bagaimana jika ada delay atau masalah?", a: "Jika ada delay, kami segera mengidentifikasi penyebab dan melakukan tindakan korektif. Kami selalu komunikasi dengan Anda dan update perkembangan terbaru." },
      { q: "Apakah barang diasuransikan?", a: "Kami dapat mengatur asuransi pengiriman. Jenis dan besarnya tergantung nilai barang dan preferensi Anda. Kami jelaskan opsi asuransi saat konsultasi." },
      { q: "Bagaimana jika barang rusak atau hilang?", a: "Jika ada kerusakan/kehilangan, kami segera laporkan ke pihak pengangkut dan asuransi (jika ada). Kami bantu proses claim untuk penggantian/kompensasi." },
    ],
  },
  {
    category: "Pembayaran",
    items: [
      { q: "Bagaimana sistem pembayaran?", a: "Sistem pembayaran biasanya: DP 50% saat kontrak, 30% saat dokumen siap, dan sisanya 20% saat barang tiba. Kami fleksibel sesuai kesepakatan." },
      { q: "Apa metode pembayaran yang diterima?", a: "Kami menerima transfer bank, cheque, e-wallet, dan cash. Untuk kemudahan, kami lebih prefer transfer bank." },
      { q: "Bagaimana jika ada perubahan order?", a: "Perubahan order dapat dilakukan selama barang belum dikirim. Jika ada perubahan, harga mungkin berubah dan kami akan menginformasikan kepada Anda." },
    ],
  },
  {
    category: "Dukungan",
    items: [
      { q: "Jam operasional Anda?", a: "Jam kerja kami: Senin–Jumat 08:00–17:00, Sabtu 08:00–13:00 (WIB). Untuk kasus urgent, Anda bisa menghubungi WhatsApp kami." },
      { q: "Bagaimana cara menghubungi?", a: "Via WhatsApp +62-812-3456-7890, email info@forwarder.id, telepon +62-21-XXXX-XXXX, atau datang langsung ke kantor kami di Jakarta." },
      { q: "Apakah ada konsultasi gratis?", a: "Ya, kami menyediakan konsultasi gratis untuk menjelaskan layanan dan memahami kebutuhan Anda. Cukup hubungi kami via WhatsApp atau email." },
    ],
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff" }}>
      <Header />

      <main style={{ flex: 1 }}>

        {/* Hero */}
        <section style={{ padding: "80px 32px 64px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 16 }}>FAQ</p>
            <h1 style={{
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontSize: "clamp(40px, 5vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-1.44px",
              color: "#17171c",
              maxWidth: 700,
              marginBottom: 24,
            }}>
              Pertanyaan yang sering diajukan
            </h1>
            <p style={{ fontSize: 18, color: "#616161", maxWidth: 520, lineHeight: 1.5 }}>
              Jawaban atas pertanyaan umum dari klien kami. Tidak menemukan jawabannya? Hubungi kami langsung.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section style={{ padding: "0 32px 80px", background: "#fff" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {faqs.map((section, sIdx) => (
              <div key={sIdx} style={{ marginBottom: 56 }}>
                <p style={{
                  fontSize: 12,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  color: "#17171c",
                  marginBottom: 0,
                  paddingBottom: 12,
                  borderBottom: "1px solid #17171c",
                }}>
                  {section.category}
                </p>
                {section.items.map((item, iIdx) => {
                  const itemId = `${sIdx}-${iIdx}`;
                  const isOpen = openId === itemId;

                  return (
                    <div key={itemId} style={{ borderBottom: "1px solid #d9d9dd" }}>
                      <button
                        onClick={() => setOpenId(isOpen ? null : itemId)}
                        style={{
                          width: "100%",
                          background: "none",
                          border: "none",
                          padding: "20px 0",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 24,
                          cursor: "pointer",
                          textAlign: "left",
                        }}
                      >
                        <span style={{ fontSize: 16, fontWeight: 400, color: "#17171c", lineHeight: 1.4 }}>
                          {item.q}
                        </span>
                        <span style={{
                          fontSize: 20,
                          color: "#93939f",
                          flexShrink: 0,
                          transition: "transform 0.2s",
                          transform: isOpen ? "rotate(45deg)" : "none",
                          display: "inline-block",
                        }}>
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div style={{ paddingBottom: 20, paddingRight: 48 }}>
                          <p style={{ fontSize: 15, color: "#616161", lineHeight: 1.7 }}>
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section style={{ padding: "80px 32px", background: "#eeece7" }}>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            <p style={{ ...S.mono, marginBottom: 16 }}>Masih Butuh Bantuan?</p>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 400,
              letterSpacing: "-0.4px",
              color: "#17171c",
              marginBottom: 16,
            }}>
              Belum menemukan jawaban?
            </h2>
            <p style={{ fontSize: 16, color: "#616161", lineHeight: 1.6, marginBottom: 32 }}>
              Tim kami siap menjawab semua pertanyaan Anda secara langsung.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/621234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={S.pillBtn}
              >
                Chat via WhatsApp
              </a>
              <a
                href="mailto:info@forwarder.id"
                style={S.pillOutline}
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
