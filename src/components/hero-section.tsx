"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  // This would be customizable by the site owner
  // const [backgroundImage, setBackgroundImage] = useState("/placeholder.svg?height=800&width=1600")

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
      <Image
        src="/bg.jpeg"
        alt="Fresh healthy food"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>


      {/* Content */}
      <div className="relative h-full">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl space-y-6">
            {/* Logo would be customizable */}
            <div className="/90 p-4 rounded-lg inline-block mb-4 flex items-center">
              <Image
                src="/logo6.jpeg"
                alt="Spinach Logo"
                width={200}
                height={80}
                className="h-16 w-auto"
                style={{ width: "140px", height: "150px" }}
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Homemade Meals Delivered to Your Doorstep
            </h1>

            <p className="text-xl text-white/90 max-w-xl">
              Nutritious, delicious, and budget-friendly tiffin service for students and professionals. Because you
              deserve a meal that feels like home!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/menu">View Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

