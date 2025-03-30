import Link from "next/link"
import Image from "next/image"
import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Us</h2>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              At Spinach, we provide healthy, high-quality tiffins designed for students and professionals who have
              moved to a new city. Homemade meals crafted with fresh vegetables and wholesome sunflower oil. Nutritious,
              delicious, and budget-friendly—because you deserve a meal that feels like home! Join Spinach today for
              wholesome, delicious tiffins delivered to your doorstep!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/tiffin1.jpeg"
                alt="Fresh ingredients"
                width={600}
                height={400}
                className="rounded-lg shadow-md mx-auto"
                style={{ width: "450px", height: "460px" }}
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground">
                We believe everyone deserves access to nutritious, home-style meals regardless of their busy schedule.
                Our mission is to provide convenient, healthy, and affordable meal options that don&#39;t compromise on
                taste or quality.
              </p>
              <h3 className="text-2xl font-bold">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-500 mr-2" />
                  Fresh ingredients sourced locally
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-500 mr-2" />
                  Nutritionally balanced meals
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-500 mr-2" />
                  Eco-friendly packaging
                </li>
                <li className="flex items-center">
                  <Leaf className="h-5 w-5 text-green-500 mr-2" />
                  Affordable pricing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              We offer a variety of services to meet your needs, from daily tiffin delivery to catering for special
              events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Tiffin Services"
              description="Daily or weekly meal plans delivered right to your doorstep. Perfect for students and working professionals."
              icon="utensils"
            />
            <ServiceCard
              title="House Party Orders"
              description="Special menu options for house parties and small gatherings. Impress your guests with our delicious food."
              icon="users"
            />
            <ServiceCard
              title="Catering Services"
              description="Full-service catering for events of all sizes. We handle everything from setup to cleanup."
              icon="chefHat"
            />
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/menu">View Our Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              Have questions or ready to order? Get in touch with us today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">We're available 7 days a week</p>
              <Button className="bg-green-600 hover:bg-green-700"><a href="tel:+919850580979">Call Now</a></Button>
            </div>

            <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
              <p className="font-medium text-green-600">spinachfoods@gmail.com</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                </div>
  <h3 className="text-xl font-medium mb-2">Service Available In</h3>
  <p className="text-muted-foreground mb-4">We deliver fresh homemade meals!</p>
  <p className="text-center text-muted-foreground">Currently serving in Pune.</p>
</div>


          </div>
        </div>
      </section>
    </div>
  )
}

