import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Turf } from "@/types/turf";
import { formatCurrency } from "@/lib/utils/booking-utils";

interface TurfCardProps {
  turf: Turf;
}

export function TurfCard({ turf }: TurfCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={turf.images[0]}
          alt={turf.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-black hover:bg-white">
            ⭐ {turf.rating}
          </Badge>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 right-4">
          <Badge className="bg-green-600 hover:bg-green-700">
            {formatCurrency(turf.pricePerHour)}/hr
          </Badge>
        </div>

        {/* Availability Indicator */}
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="bg-white/90 text-green-700 border-green-200">
            ● Available Today
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
          {turf.name}
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>📍</span>
          <span>{turf.location}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
          {turf.description}
        </p>

        {/* Key Details */}
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <span>🏟️</span>
            <span>{turf.size}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🌱</span>
            <span>{turf.surface}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{turf.lighting ? '💡' : '🌙'}</span>
            <span>{turf.lighting ? 'Night Games' : 'Day Only'}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🚗</span>
            <span>{turf.parking ? 'Parking' : 'No Parking'}</span>
          </div>
        </div>
        
        {/* Amenities */}
        <div className="flex flex-wrap gap-1">
          {turf.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="outline" className="text-xs px-2 py-1">
              {amenity}
            </Badge>
          ))}
          {turf.amenities.length > 3 && (
            <Badge variant="outline" className="text-xs px-2 py-1 text-green-600">
              +{turf.amenities.length - 3} more
            </Badge>
          )}
        </div>

        {/* Reviews */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-sm ${i < Math.floor(turf.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                  ⭐
                </span>
              ))}
            </div>
            <span className="text-gray-600">({turf.reviews} reviews)</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2 pt-4">
        <Link href={`/turfs/${turf.id}`} className="flex-1">
          <Button variant="outline" className="w-full hover:border-green-300 hover:bg-green-50">
            View Details
          </Button>
        </Link>
        <Link href={`/booking/${turf.id}`} className="flex-1">
          <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}