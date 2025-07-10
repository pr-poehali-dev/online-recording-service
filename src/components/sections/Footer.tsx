import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { COMPANY_NAME, CONTACT_INFO } from "@/data/constants";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Eye" className="text-primary" size={28} />
              <h3 className="text-xl font-bold">{COMPANY_NAME}</h3>
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
              <div>Пн-Пт: {CONTACT_INFO.workingHours.weekdays}</div>
              <div>Сб-Вс: {CONTACT_INFO.workingHours.weekends}</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <div>{CONTACT_INFO.phone}</div>
              <div>{CONTACT_INFO.email}</div>
              <div>{CONTACT_INFO.address}</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {COMPANY_NAME}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
