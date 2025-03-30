import Image from "next/image"
import Link from "next/link"
import { Users, UtensilsCrossed, ChefHat } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* About Hero Section */}
      <section className="py-12 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Spinach</h1>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              At Spinach, we provide healthy, high-quality tiffins designed for students and professionals who have
              moved to a new city. Homemade meals crafted with fresh vegetables and wholesome sunflower oil. Nutritious,
              delicious, and budget-friendly—because you deserve a meal that feels like home!
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Our story"
                width={600}
                height={500}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <p className="text-muted-foreground">
                Spinach was founded in 2018 by a group of friends who experienced firsthand the challenges of finding
                healthy, home-style food while living away from home. What started as a small operation serving just 10
                customers has now grown into a beloved tiffin service catering to hundreds of students and professionals
                daily.
              </p>
              <p className="text-muted-foreground">
                Our founder, Priya, moved to the city for her studies and struggled to find nutritious meals that
                reminded her of home. She started cooking for herself and a few friends, and word quickly spread about
                her delicious, healthy meals. That's how Spinach was born – out of a genuine need for wholesome food
                that feels like home.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to operate with the same passion and commitment to quality that we started with.
                Every meal is prepared with care, using fresh ingredients and traditional recipes with a modern twist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              We offer a range of food services to meet different needs and occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <UtensilsCrossed className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tiffin Services</h3>
              <p className="text-muted-foreground mb-6">
                Our core offering is daily tiffin delivery service. We provide nutritious, home-style meals delivered
                right to your doorstep. Choose from our various meal plans to suit your needs and budget.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted-foreground">Daily, weekly, and monthly plans</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted-foreground">Customizable meal options</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted-foreground">Punctual delivery</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/menu">View Meal Plans</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">House Party Orders</h3>
              <p className="text-muted-foreground mb-6">
                Planning a house party or small gathering? Let us take care of the food. We offer special menu options
                designed for sharing and enjoying with friends and family.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted-foreground">Variety of appetizers and main courses</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted-foreground">Customizable menu options</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted-foreground">Convenient delivery and setup</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <ChefHat className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Catering Services</h3>
              <p className="text-muted-foreground mb-6">
                For larger events and corporate functions, our catering service provides a complete food solution. From
                setup to cleanup, we handle everything so you can focus on your event.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted-foreground">Corporate events and functions</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted-foreground">Weddings and special occasions</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted-foreground">Full-service staff available</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact">Contact for Catering</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Try Spinach?</h2>
            <p className="max-w-2xl text-muted-foreground mb-8">
              Join Spinach today for wholesome, delicious tiffins delivered to your doorstep!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/menu">View Our Menu</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

