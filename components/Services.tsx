import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Heart, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Herbal Consultations",
      description: "Personalized consultations to find the right herbs for your wellness journey."
    },
    {
      icon: <Heart className="h-8 w-8 text-green-500" />,
      title: "Wellness Programs",
      description: "Comprehensive programs combining herbs, nutrition, and lifestyle guidance."
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Educational Workshops",
      description: "Learn about herbal medicine, preparation methods, and sustainable practices."
    }
  ];

  return (
    <section id="services" className="py-20 bg-green-50">
      <div className="container mx-auto px-4 py-12 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl  font-bold text-green-800 mb-4">
            Our Wellness Services
          </h2>
          <p className="text-xl text-green-600 max-w-2xl mx-auto">
            Comprehensive herbal wellness solutions tailored to your unique needs and health goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 bg-white border-green-100">
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <CardHeader>
                <CardTitle className="text-green-800 font-serif text-xl mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
