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

const stats = [
  { number: "17+", label: "Tahun Pengalaman" },
  { number: "500+", label: "Klien Puas" },
  { number: "1000+", label: "Transaksi Berhasil" },
  { number: "50+", label: "Negara Tujuan" },
];

const team = [
  { name: "Budi Santoso", role: "Direktur Utama", bio: "15+ tahun di industri forwarder Indonesia." },
  { name: "Siti Nurhaliza", role: "Manager Ekspor", bio: "Spesialis dokumen ekspor komoditas pertanian & farmasi." },
  { name: "Ahmad Rizki", role: "Manager Impor", bio: "Expert customs clearance & regulasi impor." },
  { name: "Maya Purnama", role: "Customer Success", bio: "Dedicated support untuk kepuasan klien." },
];

export default function Tentang() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fff" }}>
      <Header />

      <main style={{ flex: 1 }}>

        {/* Hero */}
        <section style={{ padding: "80px 32px 64px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 16 }}>Tentang Kami</p>
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
              International Freight Forwarder sejak 2007
            </h1>
            <p style={{ fontSize: 18, color: "#616161", maxWidth: 520, lineHeight: 1.5, marginBottom: 40 }}>
              PT. Safe Shipping Services — full services International Freight Forwarder & Logistics company, member of ALFI / ILFA.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/kontak" style={S.pillBtn}>Hubungi Kami</Link>
              <Link href="/layanan" style={S.pillOutline}>Lihat Layanan →</Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "0 32px 80px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              background: "#d9d9dd",
              borderRadius: 8,
              overflow: "hidden",
            }} className="stats-grid">
              {stats.map((s) => (
                <div key={s.label} style={{ background: "#fff", padding: "32px 24px", textAlign: "center" }}>
                  <p style={{
                    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                    fontSize: 48,
                    fontWeight: 400,
                    letterSpacing: "-1px",
                    color: "#17171c",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}>
                    {s.number}
                  </p>
                  <p style={{ fontSize: 13, color: "#93939f" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visi Misi */}
        <section style={{ padding: "80px 32px", background: "#eeece7" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 40 }}>Nilai Perusahaan</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="three-col">
              {[
                {
                  label: "Visi",
                  title: "Menjadi forwarder terdepan",
                  body: "Menjadi perusahaan forwarder terdepan yang memudahkan bisnis ekspor-impor di Indonesia.",
                },
                {
                  label: "Misi",
                  title: "Layanan profesional & kompetitif",
                  body: "Menyediakan layanan forwarder profesional dengan harga kompetitif dan kepercayaan penuh.",
                },
                {
                  label: "Nilai",
                  title: "Integritas & transparansi",
                  body: "Integritas, profesionalisme, transparansi, dan kepuasan pelanggan adalah prioritas utama kami.",
                },
              ].map((v) => (
                <div key={v.label} style={{ background: "#fff", borderRadius: 8, padding: 28 }}>
                  <p style={{ ...S.mono, marginBottom: 12 }}>{v.label}</p>
                  <h3 style={{ fontSize: 20, fontWeight: 400, color: "#17171c", lineHeight: 1.3, marginBottom: 12 }}>{v.title}</h3>
                  <p style={{ fontSize: 14, color: "#616161", lineHeight: 1.6 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section style={{ padding: "80px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }} className="two-col">
              <div>
                <p style={{ ...S.mono, marginBottom: 16 }}>Cerita Kami</p>
                <h2 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 400,
                  letterSpacing: "-0.4px",
                  color: "#17171c",
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}>
                  Berdiri sejak 2007, tumbuh bersama klien
                </h2>
                <p style={{ fontSize: 15, color: "#616161", lineHeight: 1.7, marginBottom: 16 }}>
                  PT. Safe Shipping Services didirikan dengan visi menjadi market leader di industri freight forwarding. Dimulai dengan komitmen untuk menyediakan comprehensive menu of service, kami kini telah menjadi salah satu perusahaan paling stabil dan dedicated di bidang ini.
                </p>
                <p style={{ fontSize: 15, color: "#616161", lineHeight: 1.7 }}>
                  Dengan pengalaman lebih dari 17 tahun, kami menyediakan integrated total logistics solution via air, ocean, inland transportation, dan warehousing — dengan tim spesialis beranalitik dan berpengalaman operasional.
                </p>
              </div>
              <div style={{
                background: "#003c33",
                borderRadius: 22,
                padding: 40,
                color: "#fff",
              }}>
                <p style={{ ...S.mono, color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>Sertifikasi & Legalitas</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    "Member of ALFI / ILFA",
                    "Terdaftar sebagai PPJK Company di Direktorat Jenderal Bea dan Cukai",
                    "Electronic Custom Clearance (EDI System)",
                    "Izin Usaha Jasa Freight Forwarding",
                    "NPWP dan Sertifikat PKP",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", paddingLeft: 20, position: "relative", lineHeight: 1.5 }}>
                      <span style={{ position: "absolute", left: 0, color: "#a8f0a0", fontWeight: 600 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ padding: "80px 32px", background: "#eeece7" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 12 }}>Tim Kami</p>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 400,
              letterSpacing: "-0.4px",
              color: "#17171c",
              marginBottom: 40,
            }}>
              Profesional berpengalaman
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="team-grid">
              {team.map((member, i) => {
                const colors = ["#003c33", "#17171c", "#1863dc", "#9b60aa"];
                return (
                  <div key={member.name} style={{ background: "#fff", borderRadius: 8, overflow: "hidden" }}>
                    <div style={{ height: 120, background: colors[i % colors.length] }} />
                    <div style={{ padding: 20 }}>
                      <p style={{ fontSize: 15, fontWeight: 500, color: "#17171c", marginBottom: 4 }}>{member.name}</p>
                      <p style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.4px", color: "#93939f", marginBottom: 8 }}>{member.role}</p>
                      <p style={{ fontSize: 13, color: "#616161", lineHeight: 1.5 }}>{member.bio}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Kantor & Cabang */}
        <section style={{ padding: "80px 32px", background: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ ...S.mono, marginBottom: 12 }}>Our Offices & Branches</p>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 400,
              letterSpacing: "-0.4px",
              color: "#17171c",
              marginBottom: 40,
            }}>
              3 Lokasi di Indonesia
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "#d9d9dd",
              borderRadius: 8,
              overflow: "hidden",
            }} className="three-col">
              {[
                {
                  city: "Jakarta Utara",
                  label: "Kantor Pusat",
                  address: "Jl. Kebon Bawang V No.16/2B RT/RW.011/08, Kel. Kebon Kosong, Kec. Tanjung Priok",
                  phone: "(62-21) 2945 2306 - 308",
                  fax: "(62-21) 2945 2304",
                },
                {
                  city: "Pontianak",
                  label: "Kalimantan Barat",
                  address: "Jl. H.Rais arrahman, Gunung palong 1 No.3",
                  phone: "(+62 561) 8104029",
                  fax: "(+62 561) 8104029",
                },
                {
                  city: "Palembang",
                  label: "Sumatera Selatan",
                  address: "Jl. Yos Sudorso Komp.lemabang Mas No.138 DD Rt.002/01, Kel. 3 Ilir, Kec. Ilir Timur II",
                  phone: "(+62) 711 5625 131",
                  fax: "(+62) 711 5625 132",
                },
              ].map((office) => (
                <div key={office.city} style={{ background: "#fff", padding: 28 }}>
                  <p style={{ ...S.mono, marginBottom: 8 }}>{office.label}</p>
                  <p style={{ fontSize: 20, fontWeight: 400, color: "#17171c", marginBottom: 12 }}>{office.city}</p>
                  <p style={{ fontSize: 13, color: "#616161", lineHeight: 1.6, marginBottom: 12 }}>{office.address}</p>
                  <p style={{ fontSize: 13, color: "#93939f" }}>📞 {office.phone}</p>
                  <p style={{ fontSize: 13, color: "#93939f" }}>📠 {office.fax}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          background: "#003c33",
          color: "#fff",
          padding: "80px 32px",
          margin: "0 32px 80px",
          borderRadius: 22,
        }} className="full-bleed-mobile">
          <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32 }}>
            <div>
              <p style={{ ...S.mono, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Bergabung</p>
              <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.4px", maxWidth: 440 }}>
                Bergabung dengan ratusan klien kami
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginTop: 12 }}>
                Mari wujudkan target ekspor-impor Anda bersama kami
              </p>
            </div>
            <a
              href="https://wa.me/621234567890"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...S.pillBtn, background: "#fff", color: "#17171c" }}
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .full-bleed-mobile { margin: 0 !important; border-radius: 0 !important; }
        }
        @media (max-width: 1024px) {
          .three-col { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}