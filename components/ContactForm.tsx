"use client";

import { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Send to WhatsApp
  const handleWhatsApp = () => {
    if (!formData.name || !formData.message) {
      toast.error("Please fill in your name and message.");
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Hello! I'm ${formData.name}.\n\nMessage: ${formData.message}\n\nContact Info:\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );

    const whatsappNumber = "2349034445915"; // No "+" or spaces
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");
    toast.success("Your WhatsApp message is ready. Click send in WhatsApp.");
  };

  // Send to Email
    const handleEmail = async () => {
  if (!formData.name || !formData.message) {
    toast.error("Please fill in your name and message.");
    return;
  }

  try {
    const res = await axios.post("/api/contactForm", formData);

    if (res.status === 200) {
      toast.success("Your message has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong. Please try again later.");
  }
};
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-green-200 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-serif text-green-800 mb-2">
                Send Us a Message
              </CardTitle>
              <p className="text-green-600">
                Have questions about our products? We would love to hear from
                you!
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-green-700">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-green-700">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-green-700">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your inquiry..."
                  rows={5}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send via WhatsApp
                </Button>
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
                  size="lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send via Email
                </Button>
              </div>

              <p className="text-sm text-green-500 text-center">
                * Required fields
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
