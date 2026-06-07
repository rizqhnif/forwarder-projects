import Link from "next/link";

const COLS = [
  {
    title: "Layanan",
    links: [
      { href: "/layanan", label: "Ekspor" },
      { href: "/layanan", label: "Impor" },
      { href: "/layanan", label: "Perizinan" },
      { href: "/layanan", label: "Dokumentasi" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { href: "/tentang",    label: "Tentang Kami" },
      { href: "/proses",     label: "Proses Kerja" },
      { href: "/faq",        label: "FAQ" },
      { href: "/kontak",     label: "Kontak" },
    ],
  },
  {
    title: "Lainnya",
    links: [
      { href: "/persyaratan", label: "Persyaratan" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#17171c", color: "#fff", padding: "80px 32px 0" }}>
      {/* Newsletter */}
      <div style={{ paddingBottom: 32, borderBottom: "1px solid rgba(255,255,255,0.12)", marginBottom: 32 }}>
        <p style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 12,
          letterSpacing: "0.28px",
          textTransform: "uppercase",
          color: "#ff7759",
          marginBottom: 12,
        }}>
          Ekspor & Impor Mudah
        </p>
        <h2 style={{
          fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          fontSize: 32,
          fontWeight: 400,
          letterSpacing: "-0.5px",
          marginBottom: 12,
        }}>
          Tetap update info logistik
        </h2>
        <p style={{ fontSize: 12, color: "#93939f", marginBottom: 16, maxWidth: 440, lineHeight: 1.5 }}>
          Daftarkan email Anda untuk mendapatkan info terbaru seputar regulasi ekspor-impor dan promo layanan.
        </p>
        <form
          style={{ display: "flex", gap: 8, maxWidth: 400 }}
          onSubmit={e => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="email@perusahaan.com"
            style={{
              flex: 1,
              fontFamily: "inherit",
              fontSize: 14,
              padding: "10px 16px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 8,
              background: "rgba(255,255,255,0.06)",
              color: "#fff",
              outline: "none",
            }}
          />
          <button type="submit" style={{
            background: "none", border: "none",
            color: "#fff", cursor: "pointer",
            fontSize: 20, padding: "0 12px",
          }}>
            →
          </button>
        </form>
      </div>

      {/* Columns */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: 32,
        marginBottom: 32,
      }}>
        {/* Brand col */}
        <div>
          <p style={{
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontSize: 18, fontWeight: 500,
            letterSpacing: "-0.3px",
            marginBottom: 12,
            display: "flex",
            alignItems: "baseline",
            gap: 4,
          }}>
            <span style={{ color: "#c0392b", fontWeight: 700 }}>SAFE</span>
            <span style={{ fontSize: 16 }}>Shipping Services</span>
          </p>
          <p style={{ fontSize: 13, color: "#93939f", lineHeight: 1.5 }}>
            International Freight Forwarder dan Customs Broker sejak 2007.
          </p>
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6 }}>
            <a href="none" style={{ fontSize: 13, color: "#93939f", textDecoration: "none" }}>📞 (021) - 22436058</a>
            <span style={{ fontSize: 13, color: "#93939f", }}>📍 RUKO ENGGANO LAMA BLOK B. 12 JALAN ENGGANO RAYA NO 15 RT. 000 RW. 000, TANJUNG PRIOK, TANJUNG PRIOK, KOTA ADM. JAKARTA UTARA, DKI JAKARTA
            </span>
            <span style={{ fontSize: 13, color: "#93939f" }}>🌐 info@safeshippingservices.net</span>
          </div>
        </div>

        {COLS.map(col => (
          <div key={col.title}>
            <p style={{
              fontSize: 12, fontWeight: 500,
              letterSpacing: "0.5px", textTransform: "uppercase",
              color: "#fff", marginBottom: 16,
            }}>
              {col.title}
            </p>
            <ul style={{ listStyle: "none" }}>
              {col.links.map(l => (
                <li key={l.label} style={{ marginBottom: 12 }}>
                  <Link href={l.href} style={{ fontSize: 13, color: "#93939f", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#93939f")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "24px 0 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <span style={{ fontSize: 12, color: "#93939f" }}>© 2026 PT. Safe Shipping Services. All rights reserved. Member of ALFI / ILFA.</span>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privasi", "Syarat & Ketentuan"].map(label => (
            <Link key={label} href="#" style={{
              fontSize: 12, color: "#93939f",
              textDecoration: "underline",
            }}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
