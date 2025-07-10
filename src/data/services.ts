import { ServiceCategory } from "@/types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "lashes",
    name: "Наращивание ресниц",
    image:
      "https://cdn.poehali.dev/files/3128eed5-585b-4e9c-8be5-b45784c51169.jpg",
    services: [
      { name: "Классика", price: "2000₽", duration: "2 часа" },
      { name: "Полуторный объём", price: "2200₽", duration: "2.5 часа" },
      { name: "Двойной объём", price: "2300₽", duration: "2.5 часа" },
      { name: "Тройной объём", price: "2500₽", duration: "3 часа" },
      { name: "Гиперобъём (4D)", price: "2700₽", duration: "3 часа" },
      { name: "Гиперобъём (5-6D)", price: "2900₽", duration: "3 часа" },
    ],
    additional: [
      { name: "Лучи, Ким", price: "200₽" },
      { name: "Снятие ресниц без наращивания", price: "300₽" },
      { name: "Цветные вставки", price: "100₽" },
      { name: "Праздничные дни", price: "500₽" },
    ],
  },
  {
    id: "top-master",
    name: "Услуги топ-мастера",
    image:
      "https://cdn.poehali.dev/files/2233b12c-46d8-4e36-b7db-98142c9c71db.jpg",
    services: [
      { name: "Классика", price: "1900₽", duration: "2 часа" },
      { name: "Полуторный объём", price: "2000₽", duration: "2.5 часа" },
      { name: "Двойной объём", price: "2100₽", duration: "2.5 часа" },
      { name: "Тройной объём", price: "2300₽", duration: "3 часа" },
      { name: "Гиперобъём (4D)", price: "2500₽", duration: "3 часа" },
      { name: "Гиперобъём (5-6D)", price: "2700₽", duration: "3 часа" },
    ],
    additional: [
      { name: "Лучи, Ким", price: "200₽" },
      { name: "Снятие ресниц без наращивания", price: "300₽" },
      { name: "Цветные вставки", price: "100₽" },
      { name: "Праздничные дни", price: "500₽" },
    ],
  },
  {
    id: "brows",
    name: "Брови и ресницы",
    image:
      "https://cdn.poehali.dev/files/22467f5c-48d7-43db-900c-24a58b7b1824.jpg",
    services: [
      {
        name: "Коррекция и окрашивание бровей - нить/пинцет",
        price: "1000₽",
        duration: "45 мин",
      },
      {
        name: "Коррекция и окрашивание бровей - воск/пинцет",
        price: "1200₽",
        duration: "45 мин",
      },
      {
        name: "Коррекция бровей - пинцет/нить",
        price: "700₽",
        duration: "30 мин",
      },
      {
        name: "Ламинирование ресниц + BOTOX",
        price: "1600-1800₽",
        duration: "1.5 часа",
      },
      {
        name: "Ламинирование нижних ресниц",
        price: "750₽",
        duration: "30 мин",
      },
      {
        name: "Долговременная укладка бровей + BOTOX",
        price: "1600-1900₽",
        duration: "1.5 часа",
      },
    ],
    additional: [
      { name: "Прореживание бровей", price: "500₽" },
      { name: "Окрашивание ресниц", price: "450₽" },
      { name: "Удаление волос верхняя губа", price: "400₽" },
      { name: "BOTOX+COLLAGEN+VITAMIN B", price: "400₽" },
    ],
  },
  {
    id: "pmu",
    name: "Перманентный макияж",
    image:
      "https://cdn.poehali.dev/files/0520d55a-61ba-4251-9d8c-200e3fae16de.jpg",
    services: [
      {
        name: "Перманентный макияж бровей (Пудра)",
        price: "7000₽",
        duration: "3 часа",
      },
      {
        name: "Коррекция перманента бровей",
        price: "3000₽",
        duration: "2 часа",
      },
      {
        name: "Обновление перманентного макияжа бровей",
        price: "4000₽",
        duration: "2 часа",
      },
      { name: "Консультация", price: "500₽", duration: "30 мин" },
    ],
  },
];
