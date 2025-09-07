import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedTurfs } from "@/lib/data/turfs";
import { formatCurrency } from "@/lib/utils/booking-utils";

export default function HomePage() {
  const featuredTurfs = getFeaturedTurfs();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-blue-600/10 to-transparent"></div>
        <div className="container mx-auto text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Book Premium Sports Turfs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Discover and reserve professional-grade sports facilities for football, cricket, and more. 
              Premium turfs with modern amenities at competitive prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/turfs">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-6">
                  Browse All Turfs
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-green-200 hover:bg-green-50">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose TurfBook?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the best sports turf booking platform with premium facilities and seamless booking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏟️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Facilities</h3>
              <p className="text-gray-600">
                Professional-grade turfs with modern amenities, lighting, changing rooms, and parking facilities
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Booking</h3>
              <p className="text-gray-600">
                Simple and intuitive booking process. Select your preferred time slot and book instantly
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden fees. Get the best value for premium sports facilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Turfs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Featured Turfs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our top-rated sports turfs with excellent facilities and customer reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTurfs.map((turf) => (
              <Card key={turf.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={turf.images[0]}
                    alt={turf.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600">
                      ⭐ {turf.rating}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{turf.name}</CardTitle>
                  <p className="text-gray-600 text-sm">{turf.location}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg text-green-600">
                        {formatCurrency(turf.pricePerHour)}/hour
                      </span>
                      <span className="text-sm text-gray-500">
                        {turf.reviews} reviews
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {turf.amenities.slice(0, 3).map((amenity) => (
                        <Badge key={amenity} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                      {turf.amenities.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{turf.amenities.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="gap-2">
                  <Link href={`/turfs/${turf.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
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
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/turfs">
              <Button size="lg" variant="outline" className="border-green-200 hover:bg-green-50">
                View All Turfs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Premium Turfs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10K+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25K+</div>
              <div className="text-green-100">Bookings Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Book Your Perfect Turf?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of sports enthusiasts who trust TurfBook for their game reservations
          </p>
          <Link href="/turfs">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-6">
              Start Booking Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}