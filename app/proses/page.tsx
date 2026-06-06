"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

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

const steps = [
  {
    num: "01",
    title: "Konsultasi",
    duration: "1–2 hari kerja",
    desc: "Tim kami mendengarkan kebutuhan Anda, memberikan saran rute terbaik, estimasi biaya, dan timeline proses.",
    items: [
      "Assess kebutuhan ekspor/impor Anda",
      "Analisis rute dan metode pengiriman terbaik",
      "Estimasi biaya yang transparan",
      "Penjelasan timeline dan proses keseluruhan",
      "Koordinasi jadwal untuk memulai",
    ],
  },
  {
    num: "02",
    title: "Persiapan Dokumen",
    duration: "3–7 hari kerja",
    desc: "Kami mengurus semua dokumen yang diperlukan, verifikasi dengan pihak berwenang, dan pastikan semuanya lengkap sesuai regulasi.",
    items: [
      "Siapkan & verifikasi dokumen dari klien",
      "Urus izin dan sertifikat yang diperlukan",
      "Koordinasi dengan instansi pemerintah",
      "Double-check semua dokumen",
      "Update klien progress secara berkala",
    ],
  },
  {
    num: "03",
    title: "Pengiriman & Clearance",
    duration: "5–14 hari",
    desc: "Barang dikirimkan melalui kapal atau pesawat sesuai rencana, diurus di kepabeanan, dan diterima di tujuan.",
    items: [
      "Arrange pengiriman via kapal/pesawat",
      "Tracking real-time barang Anda",
      "Handle customs clearance di tujuan",
      "Bayar bea cukai & administrasi",
      "Pengiriman final ke alamat penerima",
    ],
  },
];

const faqs = [
  {
    q: "Bagaimana jika saya belum punya semua dokumen?",
    a: "Tidak masalah! Kami akan membantu Anda mengurus dan melengkapi semua dokumen yang diperlukan.",
  },
  {
    q: "Apakah ada jaminan keberhasilan?",
    a: "Kami berkomitmen penuh untuk menyelesaikan proses dengan sukses mengikuti regulasi yang berlaku. Jika ada hambatan, kami komunikasikan segera.",
  },
  {
    q: "Berapa biaya layanan forwarder?",
    a: "Biaya berbeda-beda tergantung jenis barang, rute, dan kompleksitas dokumen. Kami berikan penawaran detail setelah konsultasi.",
  },
  {
    q: "Bagaimana tracking barang?",
    a: "Kami memberikan nomor tracking dan update real-time melalui email/WhatsApp di setiap tahap pengiriman.",
  },
];

export default function Proses() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
      }}
    >
      <Header />

      <main style={{ flex: 1 }}>
        {/* Hero */}
        <section style={{ padding: "80px 32px 64px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 16 }}>Alur Proses</p>
            <h1
              style={{
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-1.44px",
                color: "#17171c",
                maxWidth: 700,
                marginBottom: 24,
              }}
            >
              Tiga langkah menuju ekspor-impor sukses
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#616161",
                maxWidth: 520,
                lineHeight: 1.5,
                marginBottom: 40,
              }}
            >
              Proses yang jelas, transparan, dan didampingi tim profesional dari
              awal hingga barang tiba.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section style={{ padding: "0 32px 80px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            {steps.map((step, i) => (
              <div key={step.num}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: 48,
                    paddingTop: 48,
                    paddingBottom: 48,
                    borderTop: "1px solid #d9d9dd",
                  }}
                  className="step-grid"
                >
                  {/* Number */}
                  <div>
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: 64,
                        fontWeight: 400,
                        color: "#d9d9dd",
                        lineHeight: 1,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  {/* Content */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: 8,
                        marginBottom: 12,
                      }}
                    >
                      <h2
                        style={{
                          fontSize: 28,
                          fontWeight: 400,
                          letterSpacing: "-0.3px",
                          color: "#17171c",
                        }}
                      >
                        {step.title}
                      </h2>
                      <span
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: "0.3px",
                          color: "#93939f",
                          background: "#eeece7",
                          padding: "4px 10px",
                          borderRadius: 99,
                          whiteSpace: "nowrap",
                        }}
                      >
                        ⏱ {step.duration}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 16,
                        color: "#616161",
                        lineHeight: 1.6,
                        marginBottom: 24,
                        maxWidth: 560,
                      }}
                    >
                      {step.desc}
                    </p>
                    <div
                      style={{
                        background: "#eeece7",
                        borderRadius: 8,
                        padding: 24,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          color: "#93939f",
                          marginBottom: 14,
                        }}
                      >
                        Yang kami lakukan
                      </p>
                      <ul
                        style={{
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                        }}
                      >
                        {step.items.map((item) => (
                          <li
                            key={item}
                            style={{
                              fontSize: 14,
                              color: "#616161",
                              paddingLeft: 20,
                              position: "relative",
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 0,
                                color: "#003c33",
                                fontWeight: 600,
                              }}
                            >
                              ✓
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline summary */}
        <section style={{ padding: "80px 32px", background: "#eeece7" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 12 }}>Timeline Estimasi</p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 400,
                letterSpacing: "-0.4px",
                color: "#17171c",
                marginBottom: 40,
              }}
            >
              Total estimasi 2–3 minggu
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
              className="three-col"
            >
              {[
                {
                  label: "Konsultasi",
                  duration: "1–2 Hari",
                  note: "Planning & kick-off",
                },
                {
                  label: "Persiapan Dokumen",
                  duration: "3–7 Hari",
                  note: "Izin & kelengkapan",
                },
                {
                  label: "Pengiriman",
                  duration: "5–14 Hari",
                  note: "Clearance & delivery",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ background: "#fff", borderRadius: 8, padding: 28 }}
                >
                  <p style={{ ...S.mono, marginBottom: 12 }}>{item.label}</p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                      fontSize: 40,
                      fontWeight: 400,
                      letterSpacing: "-0.8px",
                      color: "#17171c",
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {item.duration}
                  </p>
                  <p style={{ fontSize: 14, color: "#93939f" }}>{item.note}</p>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 24,
                background: "#fff",
                borderRadius: 8,
                padding: "16px 24px",
                borderLeft: "3px solid #17171c",
              }}
            >
              <p style={{ fontSize: 14, color: "#616161" }}>
                <strong style={{ color: "#17171c" }}>Catatan:</strong> Waktu
                dapat berbeda tergantung jenis barang, rute, dan kelengkapan
                dokumen. Hubungi kami untuk estimasi spesifik.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "80px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 12 }}>FAQ</p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 400,
                letterSpacing: "-0.4px",
                color: "#17171c",
                marginBottom: 40,
              }}
            >
              Pertanyaan umum
            </h2>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{ borderTop: "1px solid #d9d9dd", padding: "24px 0" }}
              >
                <details>
                  <summary
                    style={{
                      fontSize: 17,
                      fontWeight: 400,
                      color: "#17171c",
                      cursor: "pointer",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    {faq.q}
                    <span
                      style={{ fontSize: 20, color: "#93939f", flexShrink: 0 }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#616161",
                      lineHeight: 1.6,
                      marginTop: 16,
                      paddingRight: 32,
                    }}
                  >
                    {faq.a}
                  </p>
                </details>
              </div>
            ))}
            <div style={{ borderTop: "1px solid #d9d9dd" }} />
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "#003c33",
            color: "#fff",
            padding: "80px 32px",
            margin: "0 32px 80px",
            borderRadius: 22,
          }}
          className="full-bleed-mobile"
        >
          <div
            style={{
              maxWidth: 960,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 32,
            }}
          >
            <div>
              <p
                style={{
                  ...S.mono,
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 16,
                }}
              >
                Mulai Sekarang
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "-0.4px",
                  maxWidth: 440,
                }}
              >
                Siap memulai ekspor-impor Anda?
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.7)",
                  marginTop: 12,
                }}
              >
                Hubungi kami untuk konsultasi gratis
              </p>
            </div>
            <a
              href="https://wa.me/6281314705885"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...S.pillBtn, background: "#fff", color: "#17171c" }}
            >
              Konsultasi via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .step-grid { align-items: start; }
        @media (max-width: 768px) {
          .step-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .full-bleed-mobile { margin: 0 !important; border-radius: 0 !important; }
        }
        @media (max-width: 1024px) {
          .three-col { grid-template-columns: repeat(2, 1fr) !important; }
        }
        details summary::-webkit-details-marker { display: none; }
        details[open] summary span { transform: rotate(45deg); display: inline-block; }
      `}</style>
    </div>
  );
}
