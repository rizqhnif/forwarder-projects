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
};

const eksporDocs = [
  {
    doc: "Invoice (Faktur)",
    desc: "Dokumen komersial berisi daftar barang, harga, dan syarat pembayaran.",
    dari: "Penjual/Supplier",
  },
  {
    doc: "Packing List",
    desc: "Rincian detail barang yang dikirim (berat, dimensi, jumlah karton, dll).",
    dari: "Penjual/Supplier",
  },
  {
    doc: "Sertifikat Asal (COO)",
    desc: "Bukti bahwa barang berasal dari Indonesia.",
    dari: "Chamber/Asosiasi Dagang",
  },
  {
    doc: "Surat Izin Menteri Perdagangan",
    desc: "Izin khusus untuk barang-barang tertentu (produk pertanian, farmasi).",
    dari: "Kementerian Perdagangan",
  },
  {
    doc: "Sertifikat Kesehatan",
    desc: "Untuk produk pertanian, peternakan, dan pangan.",
    dari: "Dinas Kesehatan/BPOM",
  },
  {
    doc: "Bill of Lading (B/L)",
    desc: "Dokumen pengangkutan barang via laut.",
    dari: "Shipping Agent",
  },
  {
    doc: "Air Waybill (AWB)",
    desc: "Dokumen pengangkutan barang via udara.",
    dari: "Maskapai Udara",
  },
];

const imporDocs = [
  {
    doc: "Invoice Luar Negeri",
    desc: "Faktur dari penjual/supplier di luar negeri.",
    dari: "Supplier Luar Negeri",
  },
  {
    doc: "Bill of Lading (B/L)",
    desc: "Dokumen pengangkutan barang dari luar negeri via laut.",
    dari: "Shipping Line",
  },
  {
    doc: "Air Waybill (AWB)",
    desc: "Dokumen pengangkutan barang dari luar negeri via udara.",
    dari: "Maskapai Udara",
  },
  {
    doc: "Sertifikat Asal (COO)",
    desc: "Bukti asal barang dari negara supplier.",
    dari: "Chamber of Commerce Luar Negeri",
  },
  {
    doc: "Packing List Luar Negeri",
    desc: "Rincian detail barang dari pihak supplier.",
    dari: "Supplier",
  },
  {
    doc: "Surat Persetujuan Impor (SPI)",
    desc: "Izin impor khusus untuk barang-barang tertentu.",
    dari: "Kementerian Terkait",
  },
  {
    doc: "Sertifikat Fisik/Farmasi",
    desc: "Untuk barang kategori tertentu yang memerlukan persetujuan khusus.",
    dari: "Kementerian/Lembaga Bersertifikat",
  },
];

const tableRows = [
  { jenis: "Invoice", ekspor: true, impor: true },
  { jenis: "Packing List", ekspor: true, impor: true },
  { jenis: "Bill of Lading / AWB", ekspor: true, impor: true },
  { jenis: "Certificate of Origin", ekspor: true, impor: true },
  { jenis: "Izin Menteri", ekspor: true, impor: false },
  { jenis: "SPI (Persetujuan Impor)", ekspor: false, impor: true },
  { jenis: "Health Certificate", ekspor: "opt", impor: "opt" },
  { jenis: "PEB / PIB", ekspor: true, impor: true },
];

function Check({ val }: { val: boolean | string }) {
  if (val === true)
    return (
      <span style={{ color: "#003c33", fontWeight: 700, fontSize: 16 }}>✓</span>
    );
  if (val === "opt")
    return <span style={{ color: "#93939f", fontSize: 13 }}>✓*</span>;
  return <span style={{ color: "#d9d9dd" }}>—</span>;
}

export default function Persyaratan() {
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
            <p style={{ ...S.mono, marginBottom: 16 }}>Persyaratan & Dokumen</p>
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
              Dokumen lengkap untuk ekspor & impor
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#616161",
                maxWidth: 520,
                lineHeight: 1.5,
              }}
            >
              Daftar lengkap dokumen yang dibutuhkan — kami bantu Anda
              menyiapkan dan mengurus semuanya.
            </p>
          </div>
        </section>

        {/* Persyaratan Umum */}
        <section style={{ padding: "0 32px 80px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                color: "#17171c",
                marginBottom: 24,
              }}
            >
              Persyaratan Umum
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
              }}
              className="two-col"
            >
              <div
                style={{ background: "#eeece7", borderRadius: 8, padding: 28 }}
              >
                <p style={{ ...S.mono, marginBottom: 16 }}>Untuk Perusahaan</p>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {[
                    "NPWP Perusahaan (fotokopi)",
                    "NIB (Nomor Induk Berusaha)",
                    "Akta Pendirian Perusahaan",
                    "Surat Izin Usaha Perdagangan (SIUP)",
                    "API (Angka Pengenal Importir)",
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
              </div>
              <div
                style={{ background: "#eeece7", borderRadius: 8, padding: 28 }}
              >
                <p style={{ ...S.mono, marginBottom: 16 }}>Untuk Perorangan</p>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {[
                    "KTP (fotokopi)",
                    "NPWP Pribadi (jika ada)",
                    "Surat Keterangan Usaha dari Lurah",
                    "Rekening Koran Bank (3 bulan terakhir)",
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
              </div>
            </div>
          </div>
        </section>

        {/* Dokumen Ekspor */}
        <section style={{ padding: "80px 32px", background: "#eeece7" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 12 }}>Ekspor</p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 400,
                letterSpacing: "-0.4px",
                color: "#17171c",
                marginBottom: 32,
              }}
            >
              Dokumen Ekspor
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                background: "#d9d9dd",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              {eksporDocs.map((item) => (
                <div
                  key={item.doc}
                  style={{
                    background: "#fff",
                    padding: "20px 28px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 24,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "#17171c",
                        marginBottom: 4,
                      }}
                    >
                      {item.doc}
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#616161",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
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
                      flexShrink: 0,
                    }}
                  >
                    {item.dari}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dokumen Impor */}
        <section style={{ padding: "80px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 12 }}>Impor</p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 400,
                letterSpacing: "-0.4px",
                color: "#17171c",
                marginBottom: 32,
              }}
            >
              Dokumen Impor
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                background: "#d9d9dd",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              {imporDocs.map((item) => (
                <div
                  key={item.doc}
                  style={{
                    background: "#fff",
                    padding: "20px 28px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 24,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 500,
                        color: "#17171c",
                        marginBottom: 4,
                      }}
                    >
                      {item.doc}
                    </p>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#616161",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
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
                      flexShrink: 0,
                    }}
                  >
                    {item.dari}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ padding: "80px 32px", background: "#eeece7" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 12 }}>Perbandingan</p>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 400,
                letterSpacing: "-0.4px",
                color: "#17171c",
                marginBottom: 32,
              }}
            >
              Ekspor vs Impor
            </h2>
            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#17171c" }}>
                    <th
                      style={{
                        padding: "14px 24px",
                        textAlign: "left",
                        fontSize: 12,
                        fontWeight: 500,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      Jenis Dokumen
                    </th>
                    <th
                      style={{
                        padding: "14px 24px",
                        textAlign: "center",
                        fontSize: 12,
                        fontWeight: 500,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      Ekspor
                    </th>
                    <th
                      style={{
                        padding: "14px 24px",
                        textAlign: "center",
                        fontSize: 12,
                        fontWeight: 500,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      Impor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={row.jenis}
                      style={{
                        borderBottom: "1px solid #f0f0f0",
                        background: i % 2 === 0 ? "#fff" : "#fafafa",
                      }}
                    >
                      <td
                        style={{
                          padding: "14px 24px",
                          fontSize: 14,
                          color: "#17171c",
                          fontWeight: 400,
                        }}
                      >
                        {row.jenis}
                      </td>
                      <td style={{ padding: "14px 24px", textAlign: "center" }}>
                        <Check val={row.ekspor} />
                      </td>
                      <td style={{ padding: "14px 24px", textAlign: "center" }}>
                        <Check val={row.impor} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#93939f", marginTop: 12 }}>
              *Tergantung jenis barang yang diekspor/diimpor
            </p>
          </div>
        </section>

        {/* Catatan penting */}
        <section style={{ padding: "80px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 32 }}>Catatan Penting</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  title: "Dokumen Asli vs Fotokopi",
                  body: "Beberapa dokumen perlu dalam bentuk asli dengan tanda tangan basah dan stempel resmi. Kami akan jelaskan detail saat konsultasi.",
                },
                {
                  title: "Persyaratan Dapat Berbeda",
                  body: "Persyaratan dokumen dapat berbeda tergantung jenis barang, negara tujuan/asal, dan regulasi terkini. Kami menyesuaikan sesuai kebutuhan spesifik Anda.",
                },
                {
                  title: "Kami Siap Membantu",
                  body: "Tidak yakin dokumen mana yang diperlukan? Hubungi kami. Tim kami akan membantu mengidentifikasi dan mengurus semua dokumen yang dibutuhkan.",
                },
              ].map((note) => (
                <div
                  key={note.title}
                  style={{ borderLeft: "3px solid #17171c", paddingLeft: 20 }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: "#17171c",
                      marginBottom: 6,
                    }}
                  >
                    {note.title}
                  </p>
                  <p
                    style={{ fontSize: 14, color: "#616161", lineHeight: 1.6 }}
                  >
                    {note.body}
                  </p>
                </div>
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
                Butuh Bantuan?
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
                Masih bingung dokumen mana yang diperlukan?
              </h2>
            </div>
            <a
              href="https://wa.me/6281314705885"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...S.pillBtn, background: "#fff", color: "#17171c" }}
            >
              Tanya via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
          .full-bleed-mobile { margin: 0 !important; border-radius: 0 !important; }
        }
      `}</style>
    </div>
  );
}
