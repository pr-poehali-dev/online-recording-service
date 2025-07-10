import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { masters } from "@/data/masters";

export const MastersSection = () => {
  return (
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {masters.map((master) => (
            <Card
              key={master.id}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-white" size={32} />
                </div>
                <CardTitle className="text-lg">{master.name}</CardTitle>
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
  );
};
