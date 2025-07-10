import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { serviceCategories } from "@/data/services";
import { ProcessedService } from "@/types";

export const ServicesSection = () => {
  const services: ProcessedService[] = serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      id: `${category.id}-${service.name.toLowerCase().replace(/\s+/g, "-")}`,
      name: service.name,
      price: service.price,
      duration: service.duration,
      category: category.name,
    })),
  );

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональные процедуры для подчеркивания вашей естественной
            красоты
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="hover:shadow-lg transition-shadow duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Sparkles" className="text-primary" size={20} />
                  <Badge variant="secondary" className="text-xs">
                    {service.duration}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {service.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {service.price}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Выбрать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
