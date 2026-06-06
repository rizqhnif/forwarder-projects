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

const checkItems = (items: string[]) => (
  <ul
    style={{
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}
  >
    {items.map((item) => (
      <li
        key={item}
        style={{
          fontSize: 15,
          color: "#616161",
          paddingLeft: 24,
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
);

export default function Layanan() {
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
        <section style={{ padding: "50px 32px 64px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 16 }}>Layanan Kami</p>
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
              Total logistics solution untuk bisnis Anda
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
              Sea freight, air freight, trucking, warehousing, custom clearance,
              dan personal effect — semua dalam satu atap sejak 2007.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="https://wa.me/6281314705885?text=Saya%20ingin%20konsultasi%20tentang%20layanan%20ekspor-impor"
                target="_blank"
                rel="noopener noreferrer"
                style={S.pillBtn}
              >
                Konsultasi Gratis
              </a>
              <Link href="/proses" style={S.pillOutline}>
                Lihat Proses →
              </Link>
            </div>
          </div>
        </section>

        {/* Ekspor & Impor cards */}
        <section className="w-full flex justify-center" style={{ padding: "0 32px 80px", background: "#fff" }}>
          <div
              className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
            {/* Sea Freight */}
            <div
              style={{
                background: "#003c33",
                borderRadius: 22,
                padding: 40,
                color: "#fff",
              }}
            >
              <p
                style={{
                  ...S.mono,
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 20,
                }}
              >
                Ocean Freight
              </p>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                Sea Freight — FCL & LCL
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.6,
                  marginBottom: 28,
                }}
              >
                Full Container Load dan Less Container Load ocean freight
                forwarding ke seluruh dunia dengan worldwide agencies network.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 32,
                }}
              >
                {[
                  "Handling FCL / LCL shipment worldwide",
                  "Worldwide agencies network",
                  "Project cargo handling",
                  "NVOCC operation",
                  "Ex-Work Terms Services",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.75)",
                      paddingLeft: 20,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#a8f0a0",
                        fontWeight: 600,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6281314705885"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...S.pillBtn, background: "#fff", color: "#17171c" }}
              >
                Tanya Sea Freight
              </a>
            </div>

            {/* Air Freight */}
            <div
              style={{ background: "#eeece7", borderRadius: 22, padding: 40 }}
            >
              <p style={{ ...S.mono, marginBottom: 20 }}>Air Freight</p>
              <h2
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: "#17171c",
                  marginBottom: 16,
                }}
              >
                Air Freight — Daily Distribution
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "#616161",
                  lineHeight: 1.6,
                  marginBottom: 28,
                }}
              >
                Layanan air freight komprehensif dengan distribusi harian
                terjamin ke dan dari semua bandara utama di dunia.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginBottom: 32,
                }}
              >
                {[
                  "Worldwide consolidation",
                  "Import / Export Custom Clearance",
                  "Import / Export Documentation",
                  "Confirmed Departure and Arrival",
                ].map((item) => (
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
              <a
                href="https://wa.me/6281314705885"
                target="_blank"
                rel="noopener noreferrer"
                style={S.pillBtn}
              >
                Tanya Air Freight
              </a>
            </div>
          </div>
        </section>

        {/* Layanan Lainnya */}
        <section style={{ padding: "80px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 12 }}>Layanan Lainnya</p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.4px",
                color: "#17171c",
                marginBottom: 40,
                maxWidth: 540,
              }}
            >
              Layanan logistik lengkap dari satu pintu
            </h2>
            
            {/* PERBAIKAN 1: Grid Template Columns dipindah ke className Tailwind */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#d9d9dd] rounded-lg overflow-hidden border border-[#d9d9dd]"
            >
              {[
                {
                  title: "Domestic Inter-Island",
                  desc: "Distribusi antar pulau di seluruh Indonesia secara efisien dan kompetitif.",
                  items: [
                    "Port to port service",
                    "Door to door service",
                    "Stuffing & Striping service",
                  ],
                },
                {
                  title: "Cargo Warehousing",
                  desc: "Gudang operasional penuh dan Customs Container Freight Station (CFS).",
                  items: [
                    "Export & Import Bonded CFS",
                    "Non-bonded distribution center",
                    "PGB / BWT (Bonded Warehouse Transaction)",
                    "Temporary storage / Free Zone Area",
                  ],
                },
                {
                  title: "Inland Trucking",
                  desc: "Distribusi domestik untuk semua jenis kargo, full dan partial truck loads.",
                  items: [
                    "Containerized transport",
                    "Bulky cargo transit",
                    "Project cargo delivery",
                  ],
                },
                {
                  title: "Custom Clearance",
                  desc: "Sebagai PPJK Company dengan EDI System untuk proses clearance cepat dan akurat.",
                  items: [
                    "Electronic custom clearance (EDI)",
                    "Import & export clearance",
                    "Product-specific compliance",
                    "Latest customs release initiatives",
                  ],
                },
                {
                  title: "Personal Effect",
                  desc: "Layanan global freight untuk pengiriman barang bawaan pribadi ke seluruh dunia.",
                  items: [
                    "Global coverage",
                    "Door to door personal goods",
                    "Documentation handling",
                  ],
                },
              ].map((svc) => (
                <div
                  key={svc.title}
                  style={{ background: "#fff", padding: 28 }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#17171c",
                      marginBottom: 8,
                    }}
                  >
                    {svc.title}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#93939f",
                      lineHeight: 1.5,
                      marginBottom: 16,
                    }}
                  >
                    {svc.desc}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {svc.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: 13,
                          color: "#616161",
                          paddingLeft: 18,
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
              ))}
            </div>
          </div>
        </section>

        {/* Paket layanan */}
        <section style={{ padding: "80px 32px", background: "#eeece7" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 12 }}>Paket Layanan</p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.4px",
                color: "#17171c",
                marginBottom: 32,
              }}
            >
              Pilih paket yang sesuai kebutuhan
            </h2>
            
            {/* PERBAIKAN 2: Grid Template Columns dipindah ke className Tailwind */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
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
                    "Import/Export Custom Clearance",
                    "Import/Export Documentation",
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
                    background: "#fff",
                    borderRadius: 8,
                    padding: 32,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <span style={{ ...S.mono }}>{p.label}</span>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 400,
                      lineHeight: 1.2,
                      color: "#17171c",
                    }}
                  >
                    {p.title}
                  </h3>
                  <hr
                    style={{ border: "none", borderTop: "1px solid #e5e7eb" }}
                  />
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                      flex: 1,
                    }}
                  >
                    {p.features.map((f) => (
                      <li
                        key={f}
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
                        padding: "8px 16px",
                      }}
                    >
                      Tanya Sekarang
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legalitas */}
        <section style={{ padding: "80px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 12 }}>Legalitas & Kepercayaan</p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.4px",
                color: "#17171c",
                marginBottom: 40,
              }}
            >
              Sertifikat & Dokumen Legal
            </h2>
            
            {/* Grid berubah jadi 2 atau 3 kolom agar rapi karena sudah center */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "NPWP Perusahaan", file: "/legal/npwp.pdf" },
                { name: "Akte Perubahan", file: "/legal/akte-perubahan.pdf" },
                { name: "Sertifikat ISO 9001", file: "/legal/sertifikat-iso.pdf" },
                { name: "Audit Report", file: "/legal/audit-report.pdf" },
                { name: "Dokumen Tambahan", file: "/legal/dokumen-tambahan.pdf" },
              ].map((doc) => (
                <a
                  key={doc.name}
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-4 p-8 border border-[#e5e7eb] rounded-2xl hover:border-[#003c33] hover:shadow-md transition-all bg-white group min-h-[140px] text-center"
                >
                  {/* Icon */}
                  <div className="bg-[#f3f4f6] p-4 rounded-xl text-[#003c33]">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  </div>
                  <span className="font-semibold text-[#17171c] text-lg">{doc.name}</span>
                </a>
              ))}
            </div>
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
                  maxWidth: 480,
                }}
              >
                Butuh layanan forwarder profesional?
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.7)",
                  marginTop: 12,
                }}
              >
                Hubungi kami sekarang untuk penawaran terbaik
              </p>
            </div>
            <a
              href="https://wa.me/6281314705885"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...S.pillBtn, background: "#fff", color: "#17171c" }}
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
