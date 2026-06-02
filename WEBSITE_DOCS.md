# Forwarder Express Website

Website profesional untuk jasa forwarder ekspor-impor yang dibangun dengan **Next.js 16** dan **Tailwind CSS**.

## 📋 Daftar Halaman

Website ini memiliki 8 halaman utama:

| Halaman | URL | Deskripsi |
|---------|-----|-----------|
| **Beranda** | `/` | Landing page dengan hero section, value props, layanan, testimoni, dan CTA |
| **Layanan** | `/layanan` | Penjelasan detail layanan ekspor, impor, perizinan, dan dokumentasi |
| **Proses** | `/proses` | Alur kerja 3 langkah (konsultasi → dokumen → pengiriman) |
| **Persyaratan** | `/persyaratan` | Daftar lengkap dokumen yang dibutuhkan |
| **FAQ** | `/faq` | Pertanyaan umum dengan jawaban detail |
| **Tentang** | `/tentang` | Profil perusahaan, visi misi, tim, dan sertifikasi |
| **Kontak** | `/kontak` | Form kontak, informasi lokasi, dan jam operasional |

## 🏗️ Struktur Project

```
app/
├── components/           # Komponen reusable
│   ├── Header.tsx       # Navigation header dengan responsive menu
│   └── Footer.tsx       # Footer dengan links dan info kontak
├── layanan/
│   └── page.tsx         # Halaman layanan
├── proses/
│   └── page.tsx         # Halaman proses
├── persyaratan/
│   └── page.tsx         # Halaman persyaratan dokumen
├── faq/
│   └── page.tsx         # Halaman FAQ
├── tentang/
│   └── page.tsx         # Halaman tentang
├── kontak/
│   └── page.tsx         # Halaman kontak
├── layout.tsx           # Root layout
├── page.tsx             # Halaman beranda
└── globals.css          # Global styles

```

## 🎨 Design & Styling

- **Framework CSS**: Tailwind CSS v4
- **Warna Utama**: 
  - Blue (#2563EB) - Brand color utama
  - Green (#22C55E) - CTA/WhatsApp
  - Gray (#6B7280) - Text secondary
- **Typography**: Inter font dari Google Fonts
- **Layout**: Responsive mobile-first design

## 🔧 Teknologi

- **Framework**: Next.js 16.2.7
- **React**: 19.2.4
- **CSS**: Tailwind CSS 4
- **TypeScript**: 5
- **Package Manager**: npm

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000)

### 3. Build Production
```bash
npm run build
npm start
```

### 4. Lint Code
```bash
npm run lint
```

## 📝 Fitur Utama

### 1. **Header Responsif**
- Logo dan branding
- Navigation menu yang bisa collapse di mobile
- WhatsApp CTA button

### 2. **Hero Section**
- Headline yang menarik
- Call-to-action buttons (Konsultasi & WhatsApp)
- Ilustrasi container/kapal

### 3. **Contact Forms**
- Form konsultasi di halaman beranda
- Form kontak lengkap di halaman kontak
- Integrasi WhatsApp API untuk instant messaging

### 4. **Accordion FAQ**
- Expandable items untuk setiap kategori pertanyaan
- 6 kategori dengan 24+ FAQ items

### 5. **Pricing Estimator** (optional, dapat ditambahkan)
- Form untuk estimasi biaya
- Breakdown harga transparan

## 📱 Responsive Design

Website fully responsive di:
- **Mobile** (320px - 640px)
- **Tablet** (641px - 1024px)
- **Desktop** (1025px+)

## 🔗 External Integrations

### WhatsApp Integration
Semua CTA button terintegrasi dengan WhatsApp:
- Format: `https://wa.me/[NOMOR]?text=[PESAN]`
- Nomor saat ini: **+62-812-3456-7890** (ganti dengan nomor asli)

### Email Integration
- Email kontak: **info@forwarder.id** (ganti dengan email asli)
- Form kontak dikirim via WhatsApp

## 🎯 Customization Guide

### 1. Update Branding
Edit file berikut:
```typescript
// app/components/Header.tsx
<span className="text-white font-bold text-lg">F</span>  // Logo
"Forwarder Express"                                      // Nama brand
```

### 2. Update Kontak
Edit file-file yang ada di footer dan halaman kontak:
```typescript
// Change nomor WhatsApp
https://wa.me/621234567890  → https://wa.me/[NOMOR_BARU]

// Change email
info@forwarder.id  → email@anda.com

// Change alamat
Jl. Gatot Subroto No. 123  → [ALAMAT_ANDA]
```

### 3. Update Warna Brand
Edit Tailwind classes (contoh di Header):
```typescript
bg-blue-600  → bg-[YOUR_COLOR]  // Warna utama
bg-green-500 → bg-[YOUR_COLOR]  // Warna WhatsApp/CTA
```

### 4. Update Konten
Setiap halaman `.tsx` file berisi konten yang mudah diedit. Cari section yang ingin diubah dan update teks/data sesuai kebutuhan.

### 5. Tambah Halaman Baru
Buat folder baru di `app/[nama-halaman]/` dengan file `page.tsx`:
```typescript
"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function HalamanBaru() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Konten halaman */}
      </main>
      <Footer />
    </div>
  );
}
```

## 📊 SEO Optimization

### Title & Meta
Edit di `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Forwarder Express - Ekspor Impor Mudah",
  description: "Jasa forwarder terpercaya...",
};
```

### Suggestions
- Add Open Graph meta tags
- Add structured data (JSON-LD)
- Add sitemap.xml
- Add robots.txt

## 🔒 Security

- Next.js dengan built-in security headers
- No hardcoded sensitive data
- Environment variables untuk config sensitif

## 📈 Performance

- ✓ Prerendered static pages
- ✓ Optimized images (menggunakan Next.js Image component jika ada)
- ✓ Minified CSS dengan Tailwind
- ✓ Zero runtime bloat

## 🐛 Common Issues

### WhatsApp Link Tidak Terbuka
Pastikan format nomor benar: `+62-812-3456-7890` atau `6281234567890`

### Styling Tidak Tampil
Clear cache: `rm -rf .next` lalu `npm run dev`

### Form Tidak Submit
Pastikan nomor WhatsApp sudah benar di environment atau kode

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Hooks](https://react.dev/reference/react/hooks)

## 📄 License

Private Project - Forwarder Express

## ✨ Features Coming Soon (Optional)

- [ ] Blog section untuk artikel ekspor-impor
- [ ] Calculator untuk estimasi biaya
- [ ] Live chat integration
- [ ] Multi-language support (EN/ID)
- [ ] Admin dashboard untuk manage konten
- [ ] Client testimonial slider
- [ ] Service status page

---

**Dibuat untuk:** Forwarder Express  
**Tanggal:** 2 Juni 2026  
**Framework:** Next.js 16 + Tailwind CSS 4
