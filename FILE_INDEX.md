# 📑 FORWARDER EXPRESS - FILE INDEX & GUIDE

Panduan lengkap semua file yang ada di project ini dan kegunaannya.

---

## 📂 STRUKTUR FOLDER

```
forwarder-project/
├── app/                          # ← Main application folder
│   ├── components/               # Reusable React components
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Footer component
│   ├── layanan/                 # /layanan page
│   │   └── page.tsx
│   ├── proses/                  # /proses page
│   │   └── page.tsx
│   ├── persyaratan/             # /persyaratan page
│   │   └── page.tsx
│   ├── faq/                     # /faq page
│   │   └── page.tsx
│   ├── tentang/                 # /tentang page
│   │   └── page.tsx
│   ├── kontak/                  # /kontak page
│   │   └── page.tsx
│   ├── config.ts                # ⭐ Central configuration
│   ├── layout.tsx               # Root layout template
│   ├── page.tsx                 # Home page (/)
│   ├── globals.css              # Global styles
│   └── favicon.ico              # Website icon
│
├── public/                       # Static assets
│   └── *.svg                    # SVG images
│
├── node_modules/                # Dependencies (auto-generated)
├── .next/                       # Build output (auto-generated)
├── .git/                        # Git version control
│
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration
├── eslint.config.mjs            # ESLint rules
│
├── WEBSITE_DOCS.md              # 📚 Technical documentation
├── PROJECT_SUMMARY.md           # 📋 Roadmap & next steps
├── COMPLETION_REPORT.md         # 📊 Project completion report
├── CHEATSHEET.sh                # 🔧 Developer commands
├── FILE_INDEX.md                # ← Anda di sini
└── README.md                    # Project overview
```

---

## 📖 DOKUMENTASI FILES

| File | Purpose | What to do |
|------|---------|-----------|
| **WEBSITE_DOCS.md** | Dokumentasi teknis lengkap, panduan customization | READ FIRST |
| **PROJECT_SUMMARY.md** | Roadmap, checklist, next steps | Read for planning |
| **COMPLETION_REPORT.md** | Laporan project completion, statistik | Reference |
| **CHEATSHEET.sh** | Developer commands dan tips | Use for development |
| **FILE_INDEX.md** | Daftar ini | Navigation |
| **README.md** | Project overview | Quick reference |

---

## 🖥️ SOURCE CODE FILES

### App Pages (7 files)

#### 1. `app/page.tsx` - HOME PAGE (/)
**Lines**: 1,140 | **Size**: ~35KB  
**What**: Halaman beranda utama website  
**Contains**:
- Hero section dengan CTA
- Value propositions (3 kartu)
- Service offerings (4 kartu)
- Testimonial section
- Contact form
- FAQ footer section

**Edit when**: Ingin mengubah konten halaman utama  
**Example edits**: Title, deskripsi, CTA text, testimonial

---

#### 2. `app/layanan/page.tsx` - SERVICES PAGE (/layanan)
**Lines**: 285 | **Size**: ~11KB  
**What**: Halaman penjelasan layanan ekspor-impor  
**Contains**:
- Layanan Ekspor (checklist)
- Layanan Impor (checklist)
- Perizinan & Dokumentasi
- CTA section

**Edit when**: Ingin tambah/ubah layanan  
**Example edits**: Daftar layanan, descriptions, benefits

---

#### 3. `app/proses/page.tsx` - PROCESS PAGE (/proses)
**Lines**: 260 | **Size**: ~10KB  
**What**: Halaman alur kerja 3-step  
**Contains**:
- Step 1: Konsultasi
- Step 2: Dokumentasi
- Step 3: Pengiriman
- Timeline visual
- FAQ section

**Edit when**: Ingin ubah durasi atau step proses  
**Example edits**: Durasi, deliverable, timeline

---

#### 4. `app/persyaratan/page.tsx` - REQUIREMENTS PAGE (/persyaratan)
**Lines**: 380 | **Size**: ~15KB  
**What**: Halaman daftar dokumen yang diperlukan  
**Contains**:
- Persyaratan umum (perusahaan & pribadi)
- Dokumen ekspor detail
- Dokumen impor detail
- Comparison table
- Important notes

**Edit when**: Ada perubahan regulasi dokumen  
**Example edits**: Dokumen baru, hapus dokumen, deskripsi

---

#### 5. `app/faq/page.tsx` - FAQ PAGE (/faq)
**Lines**: 280 | **Size**: ~11KB  
**What**: Halaman pertanyaan yang sering diajukan  
**Contains**:
- 6 kategori FAQ
- 24+ Q&A pairs
- Expandable accordions

**Edit when**: Ada pertanyaan klien yang sering  
**Example edits**: Tambah FAQ, ubah jawaban, kategori baru

---

#### 6. `app/tentang/page.tsx` - ABOUT PAGE (/tentang)
**Lines**: 310 | **Size**: ~12KB  
**What**: Halaman profil perusahaan  
**Contains**:
- Visi, Misi, Nilai
- Statistik perusahaan
- Team members (4 profiles)
- Sertifikasi & legalitas
- Lokasi kantor

**Edit when**: Update profil perusahaan  
**Example edits**: Visi/misi, team, sertifikat, statistik

---

#### 7. `app/kontak/page.tsx` - CONTACT PAGE (/kontak)
**Lines**: 320 | **Size**: ~13KB  
**What**: Halaman kontak dan form  
**Contains**:
- Info kontak cards
- Jam operasional
- Contact form (6 fields)
- Map placeholder
- Quick links

**Edit when**: Ubah kontak atau info kantor  
**Example edits**: No. telepon, email, alamat, jam kerja

---

### Components (2 files)

#### 8. `app/components/Header.tsx`
**Lines**: 120 | **Size**: ~4KB  
**What**: Komponen navigasi responsive  
**Features**:
- Logo/branding
- Navigation menu
- Mobile menu toggle
- WhatsApp CTA button
- Sticky positioning

**Edit when**: Ubah logo, nama brand, atau styling  
**Common edits**:
```typescript
<span className="text-white font-bold text-lg">F</span>  // Logo
"Forwarder Express"  // Brand name
"SIUP"               // Nav links
```

---

#### 9. `app/components/Footer.tsx`
**Lines**: 125 | **Size**: ~4KB  
**What**: Komponen footer dengan info  
**Contains**:
- Company info
- Quick links (4 kolom)
- Contact info
- Copyright

**Edit when**: Ubah link navigasi atau info kontak  
**Common edits**: Links, contact info, social media

---

### Configuration & Core (2 files)

#### 10. `app/config.ts` ⭐ PENTING
**Lines**: 140 | **Size**: ~4KB  
**What**: Centralized configuration untuk seluruh website  
**Contains**:
- Brand information
- Contact details
- Business hours
- Company statistics
- Services list
- Team members
- Testimonials
- Timeline info
- Helper functions

**EDIT THIS**: Untuk customize data perusahaan  
**Why**: Semua halaman membaca dari sini, jadi cukup update di satu tempat

**Example customization**:
```typescript
export const siteConfig = {
  brand: {
    name: "Nama Perusahaan Anda",  // ← UBAH INI
    tagline: "Tagline Anda",       // ← UBAH INI
  },
  contact: {
    whatsapp: "+62-YOUR-NUMBER",   // ← UBAH INI
    email: "your@email.com",       // ← UBAH INI
    // ... dst
  }
};
```

---

#### 11. `app/layout.tsx`
**Lines**: 30 | **Size**: ~1KB  
**What**: Root layout untuk seluruh aplikasi  
**Contains**:
- HTML meta tags (title, description)
- Font setup (Inter)
- Global layout structure
- Body configuration

**Edit when**: Ubah title, meta description, font  
**Common edits**:
```typescript
export const metadata: Metadata = {
  title: "Judul Website Anda",          // ← UBAH
  description: "Deskripsi website...",  // ← UBAH
};
```

---

#### 12. `app/globals.css`
**Lines**: 5 | **Size**: <1KB  
**What**: Global CSS styles  
**Contains**:
- Tailwind CSS imports
- Global utility classes (minimal)

**Edit when**: Tambah global CSS rules  
**Note**: Kebanyakan styling menggunakan Tailwind classes di JSX

---

### Build & Config Files

#### `package.json`
**What**: Project dependencies dan npm scripts  
**Scripts**:
```json
{
  "dev": "npm run dev",              // Start dev server
  "build": "next build",             // Build production
  "start": "next start",             // Start production
  "lint": "eslint"                   // Lint code
}
```

#### `tsconfig.json`
**What**: TypeScript compiler configuration  
**Edit when**: Perlu strict mode atau path alias baru

#### `next.config.ts`
**What**: Next.js specific configuration  
**Edit when**: Perlu custom webpack config atau plugins

#### `postcss.config.mjs`
**What**: PostCSS configuration untuk Tailwind  
**Edit when**: Seldom (usually not needed)

---

## 🔍 QUICK REFERENCE - EDITING GUIDE

### I want to change... WHERE DO I EDIT?

| Want to Change | File | Line ~No |
|----------------|------|----------|
| **Website Title** | `app/layout.tsx` | 8 |
| **Company Name** | `app/config.ts` | 8 |
| **WhatsApp Number** | `app/config.ts` | 18 |
| **Email** | `app/config.ts` | 19 |
| **Address** | `app/config.ts` | 21 |
| **Business Hours** | `app/config.ts` | 25-28 |
| **Logo/Brand** | `app/components/Header.tsx` | 30-35 |
| **Hero Title** | `app/page.tsx` | 50-60 |
| **Services List** | `app/config.ts` | 80-110 |
| **Team Members** | `app/config.ts` | 160-190 |
| **Testimonials** | `app/config.ts` | 210-240 |
| **Colors/Theme** | Multiple files | Search "blue-600" |
| **FAQ Items** | `app/faq/page.tsx` | 15+ |
| **Dokumen List** | `app/persyaratan/page.tsx` | 40+ |

---

## 📝 FILE EDITING EXAMPLES

### Example 1: Update Nomor WhatsApp
```typescript
// File: app/config.ts
// Line: 18

BEFORE:
export const siteConfig = {
  contact: {
    whatsapp: "+62-812-3456-7890",

AFTER:
export const siteConfig = {
  contact: {
    whatsapp: "+62-815-1234-5678",
```

### Example 2: Add Team Member
```typescript
// File: app/config.ts
// Around line 160

BEFORE:
team: [
  { name: "Budi", role: "CEO", bio: "..." },
],

AFTER:
team: [
  { name: "Budi", role: "CEO", bio: "..." },
  { name: "Anda", role: "Manager", bio: "Bio Anda" },  // ← Tambah
],
```

### Example 3: Update Hero Title
```typescript
// File: app/page.tsx
// Around line 50-55

BEFORE:
<h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
  Ekspor & Impor Tanpa Ribet
</h1>

AFTER:
<h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
  Ekspor Impor Indonesia Mudah & Cepat
</h1>
```

---

## 🚀 FILE SIZE SUMMARY

```
App Pages:           ~97 KB (7 files)
Components:          ~8 KB (2 files)
Config & Core:       ~5 KB (2 files)
Documentation:       ~30 KB (4 files)
Build Output:        ~50 KB (optimized, gzipped)

Total Source:        ~140 KB
Total Docs:          ~30 KB
```

**Note**: Actual sizes vary with minification/compression

---

## ✅ HOW TO USE THIS GUIDE

1. **First Time**: Read `WEBSITE_DOCS.md` for full guide
2. **Want to Change Something**: Find it in this table above
3. **Need Developer Commands**: Check `CHEATSHEET.sh`
4. **Stuck?**: Check inline comments in .tsx files
5. **Want to Deploy**: Read `PROJECT_SUMMARY.md`

---

## 🔗 RELATED FILES

- **Docs**: WEBSITE_DOCS.md, PROJECT_SUMMARY.md
- **Commands**: CHEATSHEET.sh
- **Build Config**: package.json, tsconfig.json
- **Style Config**: tailwind.config.ts (if exists)

---

**Last Updated**: 2 Juni 2026  
**Version**: 1.0.0  
**Status**: Production Ready

Semoga panduan ini membantu! Selamat coding! 🚀
