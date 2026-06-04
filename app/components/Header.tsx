"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/layanan",      label: "Layanan" },
  { href: "/proses",       label: "Proses" },
  { href: "/persyaratan",  label: "Persyaratan" },
  { href: "/faq",          label: "FAQ" },
  { href: "/tentang",      label: "Tentang" },
  { href: "/kontak",       label: "Kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      {/* Announcement bar */}
      <div style={{
        background: "#000",
        color: "#fff",
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        fontFamily: "inherit",
      }}>
        Layanan freight & logistik profesional — sea, air, trucking, warehousing.{" "}
        <Link href="/kontak" style={{ color: "#fff", textDecoration: "underline", marginLeft: 6 }}>
          Hubungi kami
        </Link>
      </div>

      {/* Main nav */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        height: 60,
        borderBottom: "1px solid #d9d9dd",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          fontSize: 20,
          fontWeight: 500,
          color: "#17171c",
          letterSpacing: "-0.5px",
          textDecoration: "none",
          display: "flex",
          alignItems: "baseline",
          gap: 4,
        }}>
          <span style={{ color: "#c0392b", fontWeight: 700, letterSpacing: "-0.5px" }}>SAFE</span>
          <span style={{ fontWeight: 400, fontSize: 16, color: "#17171c" }}>Shipping Services</span>
        </Link>

        {/* Desktop links */}
        <ul style={{
          display: "flex",
          gap: 32,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <Link href={l.href} style={{
                fontSize: 14,
                color: "#212121",
                textDecoration: "none",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#93939f")}
              onMouseLeave={e => (e.currentTarget.style.color = "#212121")}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="desktop-nav">
          <a href="https://wa.me/621234567890" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, color: "#212121", textDecoration: "none" }}
          >
            WhatsApp
          </a>
          <Link href="/kontak" style={{
            background: "#17171c",
            color: "#fff",
            fontSize: 14,
            fontWeight: 500,
            padding: "12px 24px",
            borderRadius: 32,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}>
            Konsultasi Gratis
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="hamburger"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            flexDirection: "column",
            gap: 5,
          }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: "#212121", borderRadius: 2 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#212121", borderRadius: 2 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#212121", borderRadius: 2 }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "#fff",
          borderBottom: "1px solid #d9d9dd",
          padding: "16px 32px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}>
        <Link href="/" style={{ fontSize: 16, color: "#212121", textDecoration: "none", display: "flex", alignItems: "baseline", gap: 4 }} onClick={() => setOpen(false)}>
            <span style={{ color: "#c0392b", fontWeight: 700 }}>SAFE</span>
            <span style={{ fontSize: 14 }}>Shipping Services</span>
          </Link>
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href}
              style={{ fontSize: 16, color: "#212121", textDecoration: "none" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/kontak" style={{
            marginTop: 8,
            background: "#17171c", color: "#fff",
            fontSize: 14, fontWeight: 500,
            padding: "12px 24px",
            borderRadius: 32,
            textDecoration: "none",
            alignSelf: "flex-start",
          }} onClick={() => setOpen(false)}>
            Konsultasi Gratis
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
