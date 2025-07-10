import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { HERO_IMAGE, STATS } from "@/data/constants";

export const HeroSection = () => {
  return (
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
                <div className="text-2xl font-bold text-primary">
                  {STATS.clients}
                </div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {STATS.masters}
                </div>
                <div className="text-sm text-gray-600">Мастеров</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {STATS.experience}
                </div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={HERO_IMAGE}
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
  );
};
