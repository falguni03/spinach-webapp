import { Phone, Mail, MapPin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Hero Section */}
      <section className="py-12 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              Have questions or ready to order? Get in touch with us today and we&apos;ll be happy to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-green-50 border-none">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">We&apos;re available 7 days a week</p>
                <p className="font-medium text-green-600">+91 9850580979</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  <a href="tel:+919850580979">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-none">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
                <p className="font-medium text-green-600">spinachfoods@gmail.com</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  <a href="mailto:spinachfoods@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-none">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Instagram className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Follow Us</h3>
                <p className="text-muted-foreground mb-4">Check out our Instagram</p>
                <p className="font-medium text-green-600">@spinach_meals</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  <a href="https://instagram.com/spinach_meals" target="_blank" rel="noopener noreferrer">
                    Follow on Instagram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              {/* <h2 className="text-3xl font-bold tracking-tight mb-6">Our Location</h2> */}
              <p className="text-muted-foreground mb-8">
                {/* Visit our kitchen or reach out to us for any inquiries. We're conveniently located and ready to serve
                you with the best tiffin meals in town. */}
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Service Available In</h3>
                    <p className="text-muted-foreground">
                    Currently serving in Pune.
                      {/* 123 Healthy Street, Food District
                      <br />
                      Your City, 12345 */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+91 9850580979</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">spinachfoods@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Instagram className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium">Instagram</h3>
                    <p className="text-muted-foreground">@spinach_meals</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <a href="tel:+919850580979">Call Now</a>
                </Button>
              </div>
            </div>

            <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden bg-gray-200">
              {/* This would be replaced with an actual map */}
              <div className="w-full h-full flex items-center justify-center bg-green-100">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  {/* <h3 className="text-xl font-bold mb-2">Our Location</h3> */}
                  {/* <p className="text-muted-foreground">
                    123 Healthy Street, Food District
                    <br />
                    Your City, 12345
                  </p> */}
                  <p className="mt-4 text-sm text-muted-foreground">Pune</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Business Hours</h2>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              We're available to serve you throughout the week. Here&apos;s when you can reach us.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { day: "Monday", hours: "8:00 AM - 8:00 PM" },
                { day: "Tuesday", hours: "8:00 AM - 8:00 PM" },
                { day: "Wednesday", hours: "8:00 AM - 8:00 PM" },
                { day: "Thursday", hours: "8:00 AM - 8:00 PM" },
                { day: "Friday", hours: "8:00 AM - 8:00 PM" },
                { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
                { day: "Sunday", hours: "Closed", isClosed: true },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between p-4 ${item.isClosed ? "bg-red-50 text-red-800" : "bg-white"} rounded-lg shadow-sm`}
                >
                  <span className="font-medium">{item.day}</span>
                  <span className={item.isClosed ? "font-bold" : "text-muted-foreground"}>{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-muted-foreground">
              <p>
                * Delivery hours may vary based on your location. Please contact us for specific delivery times in your
                area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              Find answers to some of the most common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
               {
                question: "What if I need to skip a day?",
                answer:
                  "For subscription plans, you can pause or skip deliveries by notifying us at least 24 hours in advance.",
              },
              {
                question: "How do I place an order?",
                answer:
                  "You can place an order through our website, by calling us, or by sending an email. For regular tiffin service, we recommend subscribing to one of our meal plans.",
              },
              {
                question: "What areas do you deliver to?",
                answer:
                  "We currently deliver to most areas within the city. Please contact us with your specific location to confirm if we deliver to your area.",
              },
              // {
              //   question: "Can I customize my meals?",
              //   answer:
              //     "Yes, we offer meal customization options, especially for customers with dietary restrictions or preferences. Please let us know your requirements when placing an order.",
              // },
              {
                question: "How is the food packaged?",
                answer:
                  "We use food-grade disposable tiffins for all our meals. The packaging is designed to keep your food fresh and warm until delivery.",
              },
             
            ].map((item, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
            Don&apos;t see your question here? Feel free to contact us directly.
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href="tel:+919850580979">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

