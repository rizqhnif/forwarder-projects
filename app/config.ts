/**
 * Site Configuration
 * Edit file ini untuk customize website Anda
 */

export const siteConfig = {
  // Brand Information
  brand: {
    name: "Forwarder Express",
    tagline: "Ekspor & Impor Tanpa Ribet",
    logo: "F",
  },

  // Contact Information
  contact: {
    whatsapp: "+62-812-3456-7890",
    email: "info@forwarder.id",
    phone: "+62-21-XXXX-XXXX",
    fax: "+62-21-XXXX-XXXX",
    address: "Jl. Gatot Subroto No. 123, Jakarta Pusat, 12000, Indonesia",
  },

  // Business Hours
  businessHours: {
    weekday: "Senin-Jumat: 08:00-17:00 WIB",
    saturday: "Sabtu: 08:00-13:00 WIB",
    closed: "Minggu & Hari Libur",
  },

  // Company Information
  company: {
    yearFounded: 2010,
    yearsExperience: 15,
    clientCount: 500,
    successfulTransactions: 1000,
    countries: 50,
  },

  // Services
  services: [
    {
      icon: "🚢",
      title: "Ekspor",
      description: "Kirim produk Anda ke seluruh dunia dengan aman",
    },
    {
      icon: "📥",
      title: "Impor",
      description: "Terima barang dari luar negeri dengan lancar",
    },
    {
      icon: "📋",
      title: "Perizinan",
      description: "Urus semua izin yang diperlukan untuk ekspor-impor",
    },
    {
      icon: "✅",
      title: "Dokumentasi",
      description: "Kelengkapan dokumen sesuai standar internasional",
    },
  ],

  // Value Propositions
  valueProps: [
    {
      icon: "✅",
      title: "Izin & Dokumen Lengkap",
      description:
        "Kami handle semua perizinan dan dokumen yang dibutuhkan sesuai regulasi.",
    },
    {
      icon: "⚡",
      title: "Proses Cepat & Transparan",
      description:
        "Update real-time dan komunikasi terbuka di setiap tahap proses.",
    },
    {
      icon: "👥",
      title: "Tim Berpengalaman",
      description:
        "Tim profesional dengan pengalaman puluhan tahun di industri forwarder.",
    },
  ],

  // Team Members
  team: [
    {
      name: "Budi Santoso",
      role: "Direktur Utama",
      bio: "15+ tahun di industri forwarder",
    },
    {
      name: "Siti Nurhaliza",
      role: "Manager Ekspor",
      bio: "Spesialis dokumen ekspor komoditas",
    },
    {
      name: "Ahmad Rizki",
      role: "Manager Impor",
      bio: "Expert customs clearance & impor",
    },
    {
      name: "Maya Purnama",
      role: "Customer Success",
      bio: "Dedicated support untuk klien",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "PT Maju Jaya",
      review:
        "Terima kasih Forwarder Express! Proses ekspor udang kami jadi sangat mudah dan cepat.",
      rating: 5,
    },
    {
      name: "CV Berkah Usaha",
      review:
        "Tim mereka sangat profesional dan responsif. Semua dokumen selesai tepat waktu.",
      rating: 5,
    },
    {
      name: "PT Sukses Bersama",
      review:
        "Harga kompetitif dan layanan terbaik. Kami rekomendasikan ke mitra bisnis kami.",
      rating: 5,
    },
  ],

  // Timeline (Estimasi durasi)
  timeline: {
    consultation: "1-2 hari kerja",
    documentation: "3-7 hari kerja",
    delivery: "5-14 hari",
  },

  // Colors (Jika ingin custom, sesuaikan dengan Tailwind classes)
  colors: {
    primary: "blue-600",
    primaryHover: "blue-700",
    secondary: "green-500",
    secondaryHover: "green-600",
  },
};

// Helper function untuk generate WhatsApp link
export const getWhatsAppLink = (message: string) => {
  const phone = siteConfig.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

// Helper function untuk format nomor telepon
export const formatPhone = (phone: string) => {
  return phone.replace(/\D/g, "");
};
