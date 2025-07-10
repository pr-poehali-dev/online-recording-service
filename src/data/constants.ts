import { ContactInfo, SocialLinks } from "@/types";

export const CONTACT_INFO: ContactInfo = {
  address: "г. Москва, ул. Красоты, 123",
  phone: "+7 (999) 123-45-67",
  email: "info@beautystudio.ru",
  workingHours: {
    weekdays: "10:00 - 20:00",
    weekends: "11:00 - 19:00",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  instagram: "@beautystudio",
  telegram: "@beautystudio_chat",
  whatsapp: "+79991234567",
};

export const HERO_IMAGE = "/img/2c3b5911-bece-4047-bd45-4a238744c6d2.jpg";

export const COMPANY_NAME = "Beauty Studio";

export const STATS = {
  clients: "500+",
  masters: "5",
  experience: "10+",
} as const;
