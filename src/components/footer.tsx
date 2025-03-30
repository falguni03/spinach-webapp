import Link from "next/link"
import Image from "next/image"
import {Instagram} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="#" className="inline-block">
              {/* <Image
                src="/logo.jpeg"
                alt="Spinach Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                style={{ width: "110px", height: "60px" }}
              /> */}
            </Link>
            <p className="text-green-200 max-w-xs">
              Nutritious, delicious, and budget-friendly tiffin service for students and professionals.
            </p>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-green-200 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link> */}
              <Link href="https://www.instagram.com/spinach_meals/#" className="text-green-200 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              {/* <Link href="#" className="text-green-200 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-green-200 hover:text-white">
                  Menu
                </Link>
              </li>
              <li>
                {/* <Link href="/about" className="text-green-200 hover:text-white">
                  About Us
                </Link> */}
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-green-200 hover:text-white">
                  Tiffin Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white">
                  House Party Orders
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white">
                  Corporate Orders
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-green-200">
              <li>Phone: +91 9850580979</li>
              <li>Email: spinachfoods@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* <div className="mt-12 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm">
            &copy; {new Date().getFullYear()} Spinach Tiffin Service. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-green-200 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-green-200 hover:text-white text-sm">
              Privacy Policy
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

