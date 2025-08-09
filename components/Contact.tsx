import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Ready to discover the healing power of herbs? Contact our expert herbalists today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div className="flex flex-col items-center">
            <Phone className="h-8 w-8 text-green-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-green-100">+234 903 444 5915</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="h-8 w-8 text-green-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-green-100">botaniqa@herbal.com</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="h-8 w-8 text-green-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-green-100">Suite B14, Greenhouse Plaza <br /> Admiralty Way, Lekki Phase 2, Lagos, Nigeria. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
