"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
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
  input: {
    fontFamily: "inherit",
    fontSize: 15,
    padding: "12px 16px",
    border: "1px solid #e5e7eb",
    borderRadius: 4,
    background: "#fff",
    color: "#212121",
    outline: "none",
    width: "100%",
  } as React.CSSProperties,
};

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Nama: ${formData.nama}\nEmail: ${formData.email}\nTelepon: ${formData.telepon}\nPerusahaan: ${formData.perusahaan}\nSubjek: ${formData.subjek}\n\nPesan:\n${formData.pesan}`.trim();
    window.open(
      `https://wa.me/6281314705885?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const focusStyle = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    e.currentTarget.style.borderColor = "#9b60aa";
  };
  const blurStyle = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    e.currentTarget.style.borderColor = "#e5e7eb";
  };

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
        <section
          className="page-hero"
          style={{ padding: "80px 32px 64px", background: "#fff" }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 16 }}>Kontak</p>
            <h1
              style={{
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-1.44px",
                color: "#17171c",
                maxWidth: 600,
                marginBottom: 24,
              }}
            >
              Hubungi tim kami
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#616161",
                maxWidth: 520,
                lineHeight: 1.5,
              }}
            >
              Siap membantu Anda kapan saja. Respon cepat via WhatsApp dalam 1
              jam pada jam kerja.
            </p>
          </div>
        </section>

        {/* Contact channels */}
        <section style={{ padding: "0 32px 80px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                background: "#d9d9dd",
                borderRadius: 8,
                overflow: "hidden",
              }}
              className="three-col"
            >
              {[
                {
                  icon: "💬",
                  label: "WhatsApp",
                  value: "+62-813-1470-5885",
                  href: "https://wa.me/6281314705885",
                  note: "Respon dalam 1 jam",
                },
                {
                  icon: "📧",
                  label: "Email",
                  value: "info@safeshippingservices.net",
                  href: "mailto:info@safeshippingservices.net",
                  note: "Balasan dalam 24 jam",
                },
                {
                  icon: "📍",
                  label: "Kantor Pusat",
                  value:
                    "Ruko Enggano Lama BLOK B. 12 jl. Enggano No 15 RT. 000 RW. 000, Tanjung Priok, KOTA ADM. Jakarta Utara, DKI Jakarta",
                  href: null,
                  note: "Sen–Jum 08:00–17:00 WIB",
                },
              ].map((ch) => (
                <div key={ch.label} style={{ background: "#fff", padding: 28 }}>
                  <span
                    style={{ fontSize: 28, display: "block", marginBottom: 12 }}
                  >
                    {ch.icon}
                  </span>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      color: "#93939f",
                      marginBottom: 8,
                    }}
                  >
                    {ch.label}
                  </p>
                  {ch.href ? (
                    <a
                      href={ch.href}
                      target={ch.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 15,
                        color: "#1863dc",
                        textDecoration: "underline",
                        textUnderlineOffset: 3,
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      {ch.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontSize: 15,
                        color: "#17171c",
                        marginBottom: 6,
                      }}
                    >
                      {ch.value}
                    </p>
                  )}
                  <p style={{ fontSize: 13, color: "#93939f" }}>{ch.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section style={{ padding: "80px 32px", background: "#eeece7" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ background: "#fff", borderRadius: 22, padding: 48 }}>
              <p style={{ ...S.mono, marginBottom: 16 }}>Kirim Pesan</p>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 32,
                  fontWeight: 400,
                  letterSpacing: "-0.32px",
                  color: "#17171c",
                  marginBottom: 32,
                }}
              >
                Formulir Konsultasi
              </h2>
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                  className="form-grid"
                >
                  <input
                    type="text"
                    name="nama"
                    placeholder="Nama Lengkap *"
                    required
                    value={formData.nama}
                    onChange={handleChange}
                    style={S.input}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={S.input}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                  className="form-grid"
                >
                  <input
                    type="tel"
                    name="telepon"
                    placeholder="Nomor Telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                    style={S.input}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                  <input
                    type="text"
                    name="perusahaan"
                    placeholder="Nama Perusahaan"
                    value={formData.perusahaan}
                    onChange={handleChange}
                    style={S.input}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>
                <select
                  name="subjek"
                  value={formData.subjek}
                  onChange={handleChange}
                  style={{
                    ...S.input,
                    marginBottom: 16,
                    appearance: "none" as const,
                  }}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                >
                  <option value="">Pilih Subjek *</option>
                  <option value="Konsultasi Ekspor">Konsultasi Ekspor</option>
                  <option value="Konsultasi Impor">Konsultasi Impor</option>
                  <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                  <option value="Komplain/Saran">Komplain / Saran</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                <textarea
                  name="pesan"
                  placeholder="Pesan Anda *"
                  required
                  value={formData.pesan}
                  onChange={handleChange}
                  rows={5}
                  style={{
                    ...S.input,
                    marginBottom: 24,
                    resize: "vertical" as const,
                  }}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
                <button
                  type="submit"
                  style={{
                    ...S.pillBtn,
                    width: "100%",
                    justifyContent: "center",
                    padding: "14px 24px",
                  }}
                >
                  Kirim via WhatsApp
                </button>
                <p
                  style={{
                    fontSize: 12,
                    color: "#93939f",
                    marginTop: 12,
                    textAlign: "center",
                  }}
                >
                  Pesan akan dikirim ke WhatsApp tim kami
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Info tambahan */}
        <section style={{ padding: "80px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                alignItems: "start",
              }}
              className="two-col"
            >
              <div>
                <p style={{ ...S.mono, marginBottom: 20 }}>Informasi Kontak</p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  {[
                    { label: "Telepon", value: "(62-21) 2945 2306 - 308" },
                    { label: "Fax", value: "(62-21) 2945 2304" },
                    {
                      label: "Jam Kerja",
                      value:
                        "Senin–Jumat: 08:00–17:00 WIB\nSabtu: 08:00–13:00 WIB\nMinggu & Libur: Tutup",
                    },
                    { label: "Email", value: "info@safeshipping.net" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        borderBottom: "1px solid #e5e7eb",
                        paddingBottom: 16,
                      }}
                    >
                      <p
                        style={{
                          fontSize: 12,
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: "0.4px",
                          color: "#93939f",
                          marginBottom: 4,
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontSize: 14,
                          color: "#17171c",
                          lineHeight: 1.6,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div>
                <p style={{ ...S.mono, marginBottom: 20 }}>
                  Cari Informasi Lain?
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  {[
                    {
                      href: "/faq",
                      icon: "❓",
                      title: "FAQ",
                      desc: "Pertanyaan yang sering diajukan",
                    },
                    {
                      href: "/layanan",
                      icon: "🚢",
                      title: "Layanan",
                      desc: "Pelajari layanan ekspor & impor kami",
                    },
                    {
                      href: "/persyaratan",
                      icon: "📋",
                      title: "Persyaratan",
                      desc: "Cek dokumen yang dibutuhkan",
                    },
                    {
                      href: "/proses",
                      icon: "⚙️",
                      title: "Proses",
                      desc: "Alur kerja dari awal hingga selesai",
                    },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        padding: "16px 20px",
                        background: "#eeece7",
                        borderRadius: 8,
                        textDecoration: "none",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#e5e3de")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#eeece7")
                      }
                    >
                      <span style={{ fontSize: 24, flexShrink: 0 }}>
                        {link.icon}
                      </span>
                      <div>
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#17171c",
                            marginBottom: 2,
                          }}
                        >
                          {link.title}
                        </p>
                        <p style={{ fontSize: 13, color: "#93939f" }}>
                          {link.desc}
                        </p>
                      </div>
                      <span
                        style={{
                          marginLeft: "auto",
                          color: "#93939f",
                          fontSize: 18,
                        }}
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }

          /* Reduce hero padding and heading size on mobile */
          .page-hero { padding: 40px 16px 32px !important; }
          .page-hero h1 { font-size: 28px !important; line-height: 1.08 !important; max-width: 100% !important; }
        }
      `}</style>
    </div>
  );
}
