"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { useState } from "react";

const S = {
  // reusable inline style helpers
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

export default function Home() {
  const [form, setForm] = useState({ nama: "", email: "", komoditas: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo, saya ${form.nama} (${form.email}) ingin konsultasi tentang ekspor/impor ${form.komoditas}`;
    window.open(
      `https://wa.me/6281314705885?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
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
        {/* ── Hero ──────────────────────────────────────── */}
        <section
          style={{
            padding: "55px 32px",
            textAlign: "center",
            background: "#fff",
          }}
        >
          <p style={{ ...S.mono, marginBottom: 24 }}>
            International Freight Forwarder & Logistics
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontSize: "clamp(48px, 7vw, 96px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-1.92px",
              color: "#17171c",
              maxWidth: 900,
              margin: "0 auto 24px",
            }}
          >
            Solusi Logistik Global Terpercaya
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#616161",
              maxWidth: 520,
              margin: "0 auto 32px",
              lineHeight: 1.4,
            }}
          >
            PT. Safe Shipping Services — Sea freight, air freight, trucking,
            warehousing, dan custom clearance sejak 2007. Member of ALFI / ILFA.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 80,
            }}
          >
            <Link href="#konsultasi" style={S.pillBtn}>
              Konsultasi Gratis
            </Link>
            <a
              href="https://wa.me/6281314705885"
              target="_blank"
              rel="noopener noreferrer"
              style={S.pillOutline}
            >
              WhatsApp Sekarang
            </a>
          </div>

          {/* Hero media cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr",
              gap: 16,
              maxWidth: 960,
              margin: "0 auto",
            }}
            className="hero-grid"
          >
            {/* Photo card */}
            <div
              style={{
                backgroundImage: "url('forwarding-transport(1).png')",
                backgroundSize: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: 22,
                aspectRatio: "16/10",
                display: "flex",
                alignItems: "flex-end",
                padding: 24,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* blur + dark overlay agar teks terbaca */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backdropFilter: "blur(1px)",
                  WebkitBackdropFilter: "blur(6px)",
                  background: "rgba(56, 54, 54, 0.45)",
                  borderRadius: 22,
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <p
                  style={{
                    ...S.mono,
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: 8,
                  }}
                >
                  Freight Forwarder Sejak 2007
                </p>
                <p
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  Sea, air, trucking & warehousing
                  <br />
                  dalam satu solusi logistik terpadu.
                </p>
              </div>
            </div>

            {/* Console card */}
            <div
              style={{
                background: "#17171c",
                color: "#fff",
                borderRadius: 8,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                textAlign: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 500 }}>
                  Status Pengiriman
                </span>
                <span
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: 10,
                    letterSpacing: "0.2px",
                    textTransform: "uppercase",
                    padding: "2px 8px",
                    borderRadius: 9999,
                    background: "rgba(237,252,233,0.2)",
                    color: "#a8f0a0",
                  }}
                >
                  ● Aktif
                </span>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["Sea Freight", "Air Freight", "Custom Clearance"].map((b) => (
                  <span
                    key={b}
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.2px",
                      padding: "3px 8px",
                      borderRadius: 9999,
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 4,
                  padding: 12,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.5,
                }}
              >
                FCL shipment 20ft — Tanjung Priok → Port of Osaka, Jepang.
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 4,
                  padding: 12,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.5,
                }}
              >
                Dokumen lengkap. COO, packing list, dan B/L siap. EDI customs
                clearance dalam proses.
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust strip ───────────────────────────────── */}
        <section
          style={{
            padding: "80px 32px",
            background: "#fff",
            textAlign: "center",
          }}
        >
          <p style={{ ...S.mono, marginBottom: 32 }}>
            Member of ALFI / ILFA — Berdiri sejak 2007
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 56,
              flexWrap: "wrap",
            }}
          >
            {[
              "PT Pelindo",
              "Garuda Indonesia Cargo",
              "Pos Logistik",
              "Pelni",
              "Samudera Indonesia",
            ].map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#d9d9dd",
                  letterSpacing: "-0.3px",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* ── Capability cards ──────────────────────────── */}
        <section style={{ padding: "80px 32px", background: "#fff" }}>
          <p style={{ ...S.mono, marginBottom: 12 }}>Layanan Kami</p>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(32px, 3vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.48px",
              marginBottom: 32,
              maxWidth: 540,
            }}
          >
            Total logistics solution dalam satu platform
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
                title: "Sea Freight",
                desc: "FCL & LCL ocean freight forwarding ke seluruh dunia — worldwide agencies network dan NVOCC operation.",
                href: "/layanan",
              },
              {
                title: "Air Freight",
                desc: "Layanan air freight harian ke/dari semua bandara utama, termasuk customs clearance dan dokumentasi.",
                href: "/layanan",
              },
              {
                title: "Domestic Inter-Island",
                desc: "Distribusi antar pulau di seluruh Indonesia — port to port, door to door, dan stuffing & striping.",
                href: "/layanan",
              },
              {
                title: "Warehousing",
                desc: "Gudang CFS bonded dan non-bonded, PGB (BWT), dan temporary storage/free zone area.",
                href: "/layanan",
              },
              {
                title: "Inland Trucking",
                desc: "Distribusi darat untuk semua jenis kargo — containerized, bulky cargo, dan project cargo delivery.",
                href: "/proses",
              },
              {
                title: "Custom Clearance",
                desc: "Proses clearance cepat via EDI System sebagai PPJK Company resmi terdaftar di bea cukai.",
                href: "/proses",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  padding: 24,
                  borderTop: "1px solid #d9d9dd",
                  background: "#fff",
                }}
              >
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 400,
                    lineHeight: 1.3,
                    marginBottom: 12,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    color: "#616161",
                    lineHeight: 1.5,
                    marginBottom: 16,
                  }}
                >
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  style={{
                    fontSize: 14,
                    color: "#1863dc",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                  }}
                >
                  Pelajari lebih →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── Dark feature band ─────────────────────────── */}
        <section
          style={{
            background: "#003c33",
            color: "#fff",
            padding: "80px 32px",
            margin: "0 32px",
            borderRadius: 22,
          }}
          className="full-bleed-mobile"
        >
          <p
            style={{
              ...S.mono,
              color: "rgba(255,255,255,0.5)",
              marginBottom: 24,
            }}
          >
            Keunggulan Kami
          </p>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(36px, 4vw, 60px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-1.2px",
              maxWidth: 640,
              marginBottom: 24,
            }}
          >
            Layanan freight forwarder yang profesional
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 520,
              marginBottom: 32,
            }}
          >
            Dibangun sebagai PPJK Company resmi, member ALFI / ILFA, dengan
            jaringan worldwide agencies network.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link
              href="/kontak"
              style={{ ...S.pillBtn, background: "#fff", color: "#17171c" }}
            >
              Mulai Sekarang
            </Link>
            <Link
              href="/tentang"
              style={{
                ...S.pillOutline,
                color: "rgba(255,255,255,0.9)",
                borderColor: "rgba(255,255,255,0.4)",
              }}
            >
              Tentang Kami
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginTop: 48,
            }}
            className="three-col"
          >
            {[
              {
                title: "Member ALFI / ILFA",
                body: "Terdaftar dan diakui sebagai anggota resmi asosiasi forwarder nasional dan internasional.",
              },
              {
                title: "EDI System",
                body: "Custom clearance elektronik dengan EDI System untuk proses yang cepat dan sesuai regulasi bea cukai.",
              },
              {
                title: "Worldwide Network",
                body: "Representasi di sebagian besar wilayah industri dunia dengan jaringan worldwide agencies network.",
              },
            ].map((c) => (
              <div
                key={c.title}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 8,
                  padding: 24,
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 400, marginBottom: 12 }}>
                  {c.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.5,
                  }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Product / service cards ───────────────────── */}
        {/* style={{ padding: "80px 32px", background: "#fff" }} */}
        <section style={{ padding: "80px 32px", background: "#fff" }}>
          <p style={{ ...S.mono, marginBottom: 12 }}>Paket Layanan</p>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(32px, 3vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.48px",
              marginBottom: 32,
            }}
          >
            Pilih paket yang sesuai
          </h2>
          {/* style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,  }} */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {[
              {
                label: "Ocean",
                title: "Sea Freight",
                features: [
                  "FCL & LCL shipment worldwide",
                  "Worldwide agencies network",
                  "Project cargo handling",
                  "NVOCC operation",
                  "Ex-Work Terms Services",
                ],
              },
              {
                label: "Air",
                title: "Air Freight",
                features: [
                  "Daily distribution guarantee",
                  "Import/Export custom clearance",
                  "Import/Export documentation",
                  "Confirmed departure & arrival",
                  "Worldwide consolidation",
                ],
              },
              {
                label: "Full Service",
                title: "Total Logistics",
                features: [
                  "Sea & Air Freight",
                  "Domestic inter-island",
                  "Cargo warehousing (CFS)",
                  "Inland trucking",
                  "Custom clearance (EDI)",
                ],
              },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#eeece7",
                  borderRadius: 8,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <span style={{ ...S.mono }}>{p.label}</span>
                <h3 style={{ fontSize: 24, fontWeight: 400, lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <hr
                  style={{ border: "none", borderTop: "1px solid #e5e7eb" }}
                />
                {/* style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }} */}
                <ul className="flex flex-col gap-2 list-none text-xs md:text-sm">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      style={{
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
                          fontWeight: 500,
                        }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto" }}>
                  <Link
                    href="/kontak"
                    style={{
                      ...S.pillOutline,
                      fontSize: 13,
                      padding: "6px 14px",
                      borderRadius: 30,
                    }}
                  >
                    Tanya Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimoni (research-table style) ─────────── */}
        <section style={{ padding: "80px 32px", background: "#fff" }}>
          <p style={{ ...S.mono, marginBottom: 12 }}>Testimoni</p>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(32px, 3vw, 48px)",
              fontWeight: 400,
              letterSpacing: "-0.48px",
              marginBottom: 32,
            }}
          >
            Kata klien kami
          </h2>
          {[
            {
              name: "PT Maju Jaya",
              review:
                "Proses sea freight kami jadi sangat lancar. Tim Safe Shipping sangat profesional dan responsif!",
              date: "Jan 2026",
            },
            {
              name: "CV Berkah Usaha",
              review:
                "Custom clearance via EDI System benar-benar cepat. Semua dokumen beres tepat waktu.",
              date: "Feb 2026",
            },
            {
              name: "PT Sukses Bersama",
              review:
                "Layanan warehousing dan trucking mereka sangat andal. Kami rekomendasikan ke seluruh mitra bisnis.",
              date: "Mar 2026",
            },
          ].map((t) => (
            <div
              key={t.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 24,
                alignItems: "center",
                padding: "24px 0",
                borderTop: "1px solid #d9d9dd",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#212121",
                    marginBottom: 6,
                  }}
                >
                  {t.name}
                </p>
                <p style={{ fontSize: 16, color: "#616161", lineHeight: 1.5 }}>
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>
              {/* style={{ fontSize: 14, color: "#93939f", whiteSpace: "nowrap" }} */}
              <span className="text-[14px] text-[#93939f] whitespace-nowrap">
                {t.date}
              </span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #d9d9dd" }} />
        </section>

        {/* ── Contact form ──────────────────────────────── */}
        <section
          id="konsultasi"
          style={{ padding: "80px 32px", background: "#eeece7" }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 22,
              padding: 32,
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontSize: 32,
                fontWeight: 400,
                letterSpacing: "-0.32px",
                marginBottom: 24,
              }}
            >
              Konsultasi Gratis
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
                {[
                  { name: "nama", type: "text", placeholder: "Nama Lengkap" },
                  { name: "email", type: "email", placeholder: "Email Kerja" },
                ].map((f) => (
                  <input
                    key={f.name}
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    required
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    style={{
                      fontFamily: "inherit",
                      fontSize: 15,
                      padding: "12px 16px",
                      border: "1px solid #e5e7eb",
                      borderRadius: 4,
                      background: "#fff",
                      color: "#212121",
                      outline: "none",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#9b60aa")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e5e7eb")
                    }
                  />
                ))}
              </div>
              <input
                type="text"
                name="komoditas"
                placeholder="Komoditas / Jenis Barang"
                value={form.komoditas}
                onChange={handleChange}
                style={{
                  width: "100%",
                  fontFamily: "inherit",
                  fontSize: 15,
                  padding: "12px 16px",
                  border: "1px solid #e5e7eb",
                  borderRadius: 4,
                  background: "#fff",
                  color: "#212121",
                  outline: "none",
                  marginBottom: 24,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#9b60aa")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
              />
              <button type="submit" style={S.pillBtn}>
                Kirim Konsultasi via WhatsApp
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid  { grid-template-columns: 1fr !important; }
          .three-col  { grid-template-columns: 1fr !important; }
          .form-grid  { grid-template-columns: 1fr !important; }
          .full-bleed-mobile { margin: 0 !important; border-radius: 0 !important; }
        }
        @media (max-width: 1024px) {
          .three-col { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
