import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/data/constants";

export const ContactsSection = () => {
  return (
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
              <p className="text-gray-600">{CONTACT_INFO.address}</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600">{CONTACT_INFO.phone}</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" className="text-primary" size={24} />
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
              <p className="text-gray-600">{SOCIAL_LINKS.instagram}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
