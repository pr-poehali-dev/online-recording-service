import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { COMPANY_NAME } from "@/data/constants";

export const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Eye" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-gray-800">{COMPANY_NAME}</h1>
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
  );
};
