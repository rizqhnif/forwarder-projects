/**
 * Site Configuration
 * PT. Safe Shipping Services
 */

export const siteConfig = {
  // Brand Information
  brand: {
    name: "Safe Shipping Services",
    tagline: "International Freight Forwarder",
    logo: "SAFE",
  },

  // Contact Information
  contact: {
    whatsapp: "+62-812-3456-7890",
    email: "info@safeshipping.net",
    phone: "(62-21) 2945 2306",
    phoneAlt: "(62-21) 2945 2304",
    fax: "(62-21) 2945 2304",
    address: "Jl. Kebon Bawang V No.16/2B RT/RW.011/08, Kel. Kebon Kosong Kec. Tanjung Priok - Jakarta Utara",
    website: "www.safeshipping.net",
  },

  // Branches
  branches: [
    {
      city: "Pontianak",
      address: "Jl. H.Rais arrahman, Gunung palong 1 No.3, Pontianak, Kal Bar, Indonesia",
      phone: "(+62 561) 8104029",
      fax: "(+62 561) 8104029",
    },
    {
      city: "Palembang",
      address: "Jl. Yos Sudorso Komp.lemabang Mas No.138 DD Rt.002/01, Kel. 3 Ilir, Kec. Ilir Timur II, Palembang Sumatera Selatan, Indonesia",
      phone: "(+62) 711 5625 131",
      fax: "(+62) 711 5625 132",
    },
  ],

  // Business Hours
  businessHours: {
    weekday: "Senin-Jumat: 08:00-17:00 WIB",
    saturday: "Sabtu: 08:00-13:00 WIB",
    closed: "Minggu & Hari Libur",
  },

  // Company Information
  company: {
    yearFounded: 2007,
    yearsExperience: 17,
    clientCount: 500,
    successfulTransactions: 1000,
    countries: 50,
    member: "ALFI / ILFA",
  },

  // Services
  services: [
    {
      icon: "🚢",
      title: "Sea Freight",
      description: "FCL & LCL ocean freight forwarding ke seluruh dunia dengan jaringan agen global.",
    },
    {
      icon: "✈️",
      title: "Air Freight",
      description: "Layanan air freight komprehensif dengan distribusi harian terjamin ke/dari semua bandara utama.",
    },
    {
      icon: "🏝️",
      title: "Domestic Inter-Island",
      description: "Distribusi antar pulau di Indonesia secara efisien dan kompetitif.",
    },
    {
      icon: "🏭",
      title: "Warehousing",
      description: "Gudang operasional penuh dan customs container Freight Station (CFS).",
    },
    {
      icon: "🚛",
      title: "Inland Trucking",
      description: "Distribusi domestik untuk semua jenis kargo, full maupun partial truck loads.",
    },
    {
      icon: "📦",
      title: "Personal Effect",
      description: "Layanan global freight untuk pengiriman barang bawaan pribadi ke seluruh dunia.",
    },
    {
      icon: "📋",
      title: "Custom Clearance",
      description: "Proses clearance cepat menggunakan EDI System sebagai PPJK Company resmi.",
    },
  ],

  // Value Propositions
  valueProps: [
    {
      icon: "✅",
      title: "Member ALFI / ILFA",
      description: "Terdaftar dan diakui secara resmi sebagai anggota asosiasi forwarder internasional.",
    },
    {
      icon: "⚡",
      title: "EDI System",
      description: "Custom clearance elektronik dengan EDI System untuk proses yang cepat dan akurat.",
    },
    {
      icon: "🌍",
      title: "Jaringan Global",
      description: "Representasi di sebagian besar wilayah industri dunia dengan worldwide agencies network.",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "PT Maju Jaya",
      review: "Proses sea freight kami jadi sangat mudah dan cepat. Safe Shipping sangat direkomendasikan!",
      rating: 5,
    },
    {
      name: "CV Berkah Usaha",
      review: "Tim mereka sangat profesional dan responsif. Semua dokumen selesai tepat waktu.",
      rating: 5,
    },
    {
      name: "PT Sukses Bersama",
      review: "Harga kompetitif dan layanan terbaik. Kami rekomendasikan ke seluruh mitra bisnis.",
      rating: 5,
    },
  ],

  // Timeline (Estimasi durasi)
  timeline: {
    consultation: "1-2 hari kerja",
    documentation: "3-7 hari kerja",
    delivery: "5-14 hari",
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
