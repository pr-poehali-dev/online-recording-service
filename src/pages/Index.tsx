import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedService, setSelectedService] = useState("");
  const [selectedMaster, setSelectedMaster] = useState("");

  const serviceCategories = [
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

  const services = serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      id: `${category.id}-${service.name.toLowerCase().replace(/\s+/g, "-")}`,
      name: service.name,
      price: service.price,
      duration: service.duration,
      category: category.name,
    })),
  );

  const masters = [
    {
      id: "anna",
      name: "Анна Петрова",
      specialization: "Наращивание ресниц, ламинирование",
      experience: "5 лет",
    },
    {
      id: "elena",
      name: "Елена Сидорова",
      specialization: "Перманентный макияж",
      experience: "7 лет",
    },
    {
      id: "maria",
      name: "Мария Иванова",
      specialization: "Брови, коррекция",
      experience: "4 года",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Eye" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-gray-800">
                Beauty Studio
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#masters"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Мастера
              </a>
              <a
                href="#booking"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Запись
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Calendar" className="mr-2" size={16} />
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-amber-100/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                  Красота в каждой
                  <span className="text-primary"> детали</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Профессиональное наращивание ресниц, ламинирование и
                  перманентный макияж. Подчеркните свою естественную красоту с
                  нашими мастерами.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться онлайн
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-4"
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">
                    Довольных клиентов
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-gray-600">Мастера</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/img/2c3b5911-bece-4047-bd45-4a238744c6d2.jpg"
                  alt="Beauty salon interior"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Star" className="text-yellow-400" size={20} />
                  <span className="font-semibold">4.9</span>
                  <span className="text-gray-600 text-sm">(120 отзывов)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-orange-50 to-amber-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональные процедуры для подчеркивания вашей естественной
              красоты
            </p>
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {serviceCategories.map((category) => (
              <Card
                key={category.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white/80 backdrop-blur-sm"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {category.services.length} услуг
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {category.services.slice(0, 3).map((service, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-700 text-sm">
                          {service.name}
                        </span>
                        <span className="text-primary font-semibold text-sm">
                          {service.price}
                        </span>
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="text-center pt-2">
                        <span className="text-gray-500 text-sm">
                          +{category.services.length - 3} ещё
                        </span>
                      </div>
                    )}
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section id="masters" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Наши мастера
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессионалы с многолетним опытом работы в индустрии красоты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {masters.map((master) => (
              <Card
                key={master.id}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{master.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    Опыт работы: {master.experience}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    {master.specialization}
                  </p>
                  <Button variant="outline" className="w-full">
                    Записаться к мастеру
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Онлайн запись
              </h2>
              <p className="text-xl text-gray-600">
                Выберите удобное время и запишитесь на процедуру
              </p>
            </div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Форма записи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Услуга</Label>
                  <Select
                    value={selectedService}
                    onValueChange={setSelectedService}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - {service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="master">Мастер</Label>
                  <Select
                    value={selectedMaster}
                    onValueChange={setSelectedMaster}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите мастера" />
                    </SelectTrigger>
                    <SelectContent>
                      {masters.map((master) => (
                        <SelectItem key={master.id} value={master.id}>
                          {master.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Дата</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <Icon name="Calendar" className="mr-2" size={16} />
                        {selectedDate
                          ? format(selectedDate, "PPP", { locale: ru })
                          : "Выберите дату"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea
                    id="comment"
                    placeholder="Дополнительная информация..."
                    rows={3}
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                  <Icon name="Calendar" className="mr-2" size={18} />
                  Записаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">
                  ул. Красоты, 123
                  <br />
                  г. Москва
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="MessageCircle"
                    className="text-primary"
                    size={24}
                  />
                </div>
                <h3 className="font-semibold mb-2">Чат</h3>
                <p className="text-gray-600">
                  Администратор
                  <br />
                  онлайн
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Instagram" className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-gray-600">@beautystudio</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Eye" className="text-primary" size={28} />
                <h3 className="text-xl font-bold">Beauty Studio</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональные услуги красоты для подчеркивания вашей
                естественной красоты.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="p-2">
                  <Icon name="Phone" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-400">
                <div>Пн-Пт: 10:00 - 20:00</div>
                <div>Сб-Вс: 11:00 - 19:00</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (999) 123-45-67</div>
                <div>info@beautystudio.ru</div>
                <div>г. Москва, ул. Красоты, 123</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Beauty Studio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
