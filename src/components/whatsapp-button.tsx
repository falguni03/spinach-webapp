"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const phoneNumber = "919850580979" // Replace with your actual WhatsApp number
  const message = "Hi"

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center gap-2 px-4 py-6"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="font-medium">Chat with us</span>
      </Button>
    </div>
  )
}

