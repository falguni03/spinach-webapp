import { Leaf, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Menu Hero Section */}
      <section className="py-12 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Our Menu</h1>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="max-w-3xl text-muted-foreground mb-8">
              All our meals are 100% vegetarian, prepared with fresh ingredients and delivered in eco-friendly
              packaging.
            </p>
            <div className="flex items-center justify-center mb-8 bg-green-100 px-4 py-2 rounded-full">
              <Leaf className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">All meals are vegetarian</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-6 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Alert className="bg-green-50 border-green-200">
              <X className="h-5 w-5 text-red-500 mr-2" />
              <AlertDescription className="text-base font-medium">Sunday Closed</AlertDescription>
            </Alert>
            <Alert className="bg-green-50 border-green-200">
              <Check className="h-5 w-5 text-green-600 mr-2" />
              <AlertDescription className="text-base font-medium">Free Home Delivery</AlertDescription>
            </Alert>
            <Alert className="bg-green-50 border-green-200">
              <Check className="h-5 w-5 text-green-600 mr-2" />
              <AlertDescription className="text-base font-medium">Food-grade Disposable Tiffins</AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Meal Plans Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meal Plans</h2>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">
              Choose from our variety of meal plans designed to suit your appetite and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tini Tiny Tummy Meal */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">Tini Tiny Tummy Meal</CardTitle>
                <CardDescription className="mt-2">2 chapati, 1 sabji / Rice Bowl</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div>
                      <span className="font-medium">10 days</span>
                      <p className="text-sm text-muted-foreground">₹70 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹700</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div>
                      <span className="font-medium">20 days</span>
                      <p className="text-sm text-muted-foreground">₹65 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹1300</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">25 days</span>
                      <p className="text-sm text-muted-foreground">₹60 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹1500</span>
                  </li>
                </ul>
              </CardContent>
              {/* <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Select Plan</Button>
              </CardFooter> */}
            </Card>

            {/* Tini Tiny Tummy Meal 2.0 */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">Tini Tiny Tummy Meal 2.0</CardTitle>
                <CardDescription className="mt-2">
                  4 days - 2 chapati and sabji
                  <br />2 days - rice bowl
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div>
                      <span className="font-medium">10 days</span>
                      <p className="text-sm text-muted-foreground">₹70 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹700</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div>
                      <span className="font-medium">20 days</span>
                      <p className="text-sm text-muted-foreground">₹65 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹1300</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">25 days</span>
                      <p className="text-sm text-muted-foreground">₹60 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹1500</span>
                  </li>
                </ul>
              </CardContent>
              {/* <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Select Plan</Button>
              </CardFooter> */}
            </Card>

            {/* Small Tummy Meal */}
            <Card className="flex flex-col h-full border-green-500 shadow-lg">
              <div className="bg-green-500 text-white text-center py-2 text-sm font-medium">Most Popular</div>
              <CardHeader>
                <CardTitle className="text-xl">Small Tummy Meal</CardTitle>
                <CardDescription className="mt-2">3 chapati, 1 sabji</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div>
                      <span className="font-medium">10 days</span>
                      <p className="text-sm text-muted-foreground">₹75 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹750</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div>
                      <span className="font-medium">20 days</span>
                      <p className="text-sm text-muted-foreground">₹70 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹1400</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">25 days</span>
                      <p className="text-sm text-muted-foreground">₹65 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹1625</span>
                  </li>
                </ul>
              </CardContent>
              {/* <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Select Plan</Button>
              </CardFooter> */}
            </Card>

            {/* Balanced Belly Meal */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">Balanced Belly Meal</CardTitle>
                <CardDescription className="mt-2">2/3 chapati, 1 sabji, rice, dal, salad</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div>
                      <span className="font-medium">10 days</span>
                      <p className="text-sm text-muted-foreground">₹95 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹950</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <div>
                      <span className="font-medium">20 days</span>
                      <p className="text-sm text-muted-foreground">₹90 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹1800</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">25 days</span>
                      <p className="text-sm text-muted-foreground">₹85 per meal</p>
                    </div>
                    <span className="text-lg font-bold">₹2125</span>
                  </li>
                </ul>
              </CardContent>
              {/* <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Select Plan</Button>
              </CardFooter> */}
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Items Section */}
      <section className="py-12 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Additional Items</h2>
            <div className="w-20 h-1 bg-green-500 mb-6"></div>
            <p className="max-w-3xl text-muted-foreground">Customize your meal with these additional items.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex justify-between items-center pb-4 border-b">
                    <div>
                      <span className="font-medium">Wheat Roti/Chapati</span>
                      <p className="text-sm text-muted-foreground">Traditional whole wheat flatbread</p>
                    </div>
                    <span className="text-lg font-bold">₹12 each</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">Jowar/Bajra Chapati</span>
                      <p className="text-sm text-muted-foreground">Nutritious millet flatbread</p>
                    </div>
                    <span className="text-lg font-bold">₹20 each</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Order?</h2>
            <p className="max-w-2xl text-muted-foreground mb-8">
              Contact us today to start your meal plan or for any questions you might have.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

