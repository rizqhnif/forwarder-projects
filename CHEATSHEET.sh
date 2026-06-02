#!/bin/bash

# ================================================
# Forwarder Express - Developer Cheat Sheet
# ================================================

# 1️⃣  SETUP & INSTALLATION
echo "=== SETUP ==="
npm install                    # Install dependencies
npm run dev                    # Start dev server (http://localhost:3000)

# 2️⃣  DEVELOPMENT COMMANDS
echo "=== DEVELOPMENT ==="
npm run dev                    # Development server
npm run build                  # Production build
npm run start                  # Start production server
npm run lint                   # Lint code

# 3️⃣  GIT COMMANDS
echo "=== GIT ==="
git add .                      # Stage all changes
git commit -m "message"        # Commit
git push origin main           # Push to main
git log --oneline             # View commit history

# 4️⃣  USEFUL SHORTCUTS

# Clear cache
rm -rf .next

# Install specific package
npm install [package-name]

# Update all packages
npm update

# Check for vulnerabilities
npm audit

# Format code (if prettier installed)
npx prettier --write .

# 5️⃣  FOLDER STRUCTURE REFERENCE

# Edit halaman:
# app/page.tsx                    → Beranda
# app/layanan/page.tsx            → Layanan
# app/proses/page.tsx             → Proses
# app/persyaratan/page.tsx        → Persyaratan
# app/faq/page.tsx                → FAQ
# app/tentang/page.tsx            → Tentang
# app/kontak/page.tsx             → Kontak

# Komponen reusable:
# app/components/Header.tsx       → Navigation
# app/components/Footer.tsx       → Footer

# Config:
# app/config.ts                   → Settings (customize di sini!)

# 6️⃣  COMMON EDITING TASKS

echo "=== QUICK EDITS ==="

# Change company name
# File: app/config.ts → brand.name

# Change WhatsApp number
# File: app/config.ts → contact.whatsapp

# Change email
# File: app/config.ts → contact.email

# Change address
# File: app/config.ts → contact.address

# Update hero title
# File: app/page.tsx → <h1> tag

# Update services
# File: app/layanan/page.tsx → services array

# 7️⃣  TESTING

echo "=== TESTING ==="

# Test production build
npm run build && npm run start

# Test specific page
# Visit: http://localhost:3000/[route]
# Routes: /, /layanan, /proses, /persyaratan, /faq, /tentang, /kontak

# 8️⃣  DEPLOYMENT

echo "=== DEPLOYMENT ==="

# Deploy to Vercel
vercel

# Deploy to Netlify
npm run build  # Build terlebih dahulu

# Self-hosted
npm run build
npm start

# 9️⃣  TAILWIND CSS TIPS

echo "=== TAILWIND CLASSES ==="

# Responsive breakpoints
# sm:   640px
# md:   768px
# lg:  1024px
# xl:  1280px
# 2xl: 1536px

# Example: md:grid-cols-2 (2 columns on tablet+)

# Common utilities:
# flex, grid, m-4 (margin), p-4 (padding)
# bg-blue-600 (background), text-white
# rounded-lg, shadow-md, border
# hover:bg-blue-700, transition
# text-center, text-left, justify-center

# 🔟  USEFUL LINKS

echo "=== RESOURCES ==="
echo "Next.js Docs: https://nextjs.org/docs"
echo "Tailwind Docs: https://tailwindcss.com/docs"
echo "React Docs: https://react.dev"
echo "TypeScript: https://www.typescriptlang.org/docs"
echo "Vercel Docs: https://vercel.com/docs"

# ================================================
# TIPS & TRICKS
# ================================================

echo "=== TIPS ==="

# 1. Selalu test di mobile sebelum push
#    Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)

# 2. Gunakan Lighthouse untuk performance check
#    Chrome DevTools → Lighthouse → Generate report

# 3. Clear browser cache jika ada styling issue
#    DevTools → Settings → Network → Disable cache

# 4. Use console.log untuk debug
#    console.log("value:", variableName)

# 5. VSCode Extensions yang berguna:
#    - Tailwind CSS IntelliSense
#    - ES7+ React/Redux/React-Native
#    - Prettier

# ================================================
