export interface Service {
  name: string;
  price: string;
  duration: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  image: string;
  services: Service[];
  additional?: Service[];
}

export interface Master {
  id: string;
  name: string;
  specialization: string;
  experience: string;
}

export interface ProcessedService {
  id: string;
  name: string;
  price: string;
  duration: string;
  category: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  master: string;
  date: Date | undefined;
  comment: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: {
    weekdays: string;
    weekends: string;
  };
}

export interface SocialLinks {
  instagram: string;
  telegram: string;
  whatsapp: string;
}
