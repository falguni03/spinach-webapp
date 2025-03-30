import { ChefHat, Users, UtensilsCrossed } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "utensils":
        return <UtensilsCrossed className="h-10 w-10 text-green-600" />
      case "users":
        return <Users className="h-10 w-10 text-green-600" />
      case "chefHat":
        return <ChefHat className="h-10 w-10 text-green-600" />
      default:
        return <UtensilsCrossed className="h-10 w-10 text-green-600" />
    }
  }

  return (
    <Card className="flex flex-col h-full">
      <CardContent className="flex-grow pt-6">
        <div className="mb-4">{getIcon()}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href="/contact">Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

