"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Clock, Coffee, Users, Wifi, ChevronRight, Star, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import img from "../asset/love.png";

export default function Home() {
  const footerItems = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Terms", href: "#terms" },
    { name: "Privacy", href: "#privacy" },
    { name: "Creation by TusharDevelops", href: "https://tusharchaurasiya.in/" },
  ]
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              StudyTown
            </Link>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              Join Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-grid">
        <div className="absolute inset-0 mesh-gradient opacity-10" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-gradient" />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="inline-block animate-bounce-slow">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">
                  StudyTown
                </h1>
              </span>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-pulse-slow">
              Your perfect study sanctuary with a focused environment and premium amenities
            </p>
            <div className="flex items-center justify-center gap-3 mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 hover:from-blue-600 hover:via-purple-600 hover:to-blue-700 animate-gradient shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Join Now <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-2 hover:bg-blue-500/10 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            {/* Stats with animated counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
            <div className="glass-effect rounded-xl p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2">500+</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Active Members</p>
            </div>
            <div className="glass-effect rounded-xl p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2">24/7</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Access</p>
            </div>
            <div className="glass-effect rounded-xl p-4 sm:p-6 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2">₹1000</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Monthly</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-5" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            About StudyTown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                  alt="Shipra Singh - Founder"
                  width={600}
                  height={600}
                  className="object-cover rounded-lg transform group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block">
                <h3 className="text-2xl font-bold mb-2">Meet Our Founder</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
              <h4 className="text-xl text-gradient">Shipra Singh</h4>
              <p className="text-muted-foreground">
                With over a decade of experience in education and a passion for creating optimal learning environments, 
                Shipra Singh founded StudyTown with a vision to provide students and professionals with a sanctuary 
                for focused study and academic excellence.
              </p>
              <p className="text-muted-foreground">
                Under her leadership, StudyTown has grown into a thriving community of learners, 
                maintaining its core values of accessibility, quality, and academic support.
              </p>
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="relative z-10">Read More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-background" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-hover p-6 backdrop-blur-sm bg-white/80 border border-blue-500/20"
              >
                <div className="text-center">
                  <div className="inline-block p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors duration-300 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            What Our Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 backdrop-blur-sm bg-white/80 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow">{testimonial.text}</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/50 to-background" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <Card className="p-6 sm:p-8 backdrop-blur-sm bg-white/80 border-2 border-blue-500/20">
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email Us", content: "contact@studytown.com" },
                { icon: Phone, title: "Call Us", content: "+91 98765 43210" },
                { icon: MapPin, title: "Visit Us", content: "123 Study Street, Knowledge City, 110001" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6 sm:p-8 backdrop-blur-sm bg-white/80 border-2 border-blue-500/20">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 sm:mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-blue-500/20 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 sm:mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-blue-500/20 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">Message</label>
                <textarea
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg border border-blue-500/20 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-sm sm:text-base py-2 sm:py-3">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-background py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              StudyTown
            </h3>
            <p className="text-muted-foreground mt-2">Your perfect study sanctuary</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            {footerItems.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center text-sm text-muted-foreground hover:text-primary transition-colors ${
                  idx === footerItems.length - 1
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
                    : ""
                }`}
              >
                {idx === footerItems.length - 1 && (
                  <Image
                    src={img} // Replace with the correct path to your image
                    alt="Tushar Develops"
                    width={20}
                    height={20}
                    className="object-cover rounded-full mr-2"
                  />
                )}
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
    </main>
  );
}

const services = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Study Spaces",
    description: "Private and shared study areas designed for maximum focus and comfort"
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "High-Speed Internet",
    description: "Lightning-fast WiFi to support all your research needs"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Refreshments",
    description: "Complimentary coffee, tea, and light snacks to keep you energized"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Access",
    description: "Study whenever suits you best with round-the-clock access"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Study Groups",
    description: "Dedicated spaces for collaborative learning and group discussions"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Resource Library",
    description: "Access to academic resources, books, and study materials"
  }
];

const testimonials = [
  {
    text: "StudyTown has completely transformed my study routine. The environment is perfect for focused learning.",
    name: "Priya Sharma",
    title: "Medical Student",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    text: "The 24/7 access and peaceful environment have helped me prepare better for my competitive exams.",
    name: "Rahul Kumar",
    title: "UPSC Aspirant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    text: "Best study space in the city! The amenities and community make it worth every penny.",
    name: "Neha Patel",
    title: "Law Student",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];