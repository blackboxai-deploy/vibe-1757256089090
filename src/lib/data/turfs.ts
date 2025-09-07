import { Turf } from '@/types/turf';

export const turfs: Turf[] = [
  {
    id: '1',
    name: 'Champion Sports Arena',
    location: 'Downtown Sports Complex, City Center',
    description: 'Premium artificial turf with professional lighting and excellent drainage. Perfect for football, cricket, and multi-sport activities.',
    pricePerHour: 80,
    images: [
      'https://placehold.co/800x600?text=Champion+Sports+Arena+main+field+with+professional+lighting+and+artificial+turf',
      'https://placehold.co/800x600?text=Champion+Sports+Arena+changing+rooms+and+facilities',
      'https://placehold.co/800x600?text=Champion+Sports+Arena+parking+area+and+entrance'
    ],
    amenities: ['Professional Lighting', 'Changing Rooms', 'Parking', 'First Aid', 'Equipment Rental'],
    rating: 4.8,
    reviews: 156,
    size: '100x60 meters',
    surface: 'Artificial Turf',
    lighting: true,
    parking: true,
    changeRooms: true,
    availability: {
      '2024-01-20': [
        { startTime: '06:00', endTime: '08:00', available: true },
        { startTime: '08:00', endTime: '10:00', available: false },
        { startTime: '10:00', endTime: '12:00', available: true },
        { startTime: '14:00', endTime: '16:00', available: true },
        { startTime: '16:00', endTime: '18:00', available: true },
        { startTime: '18:00', endTime: '20:00', available: false },
        { startTime: '20:00', endTime: '22:00', available: true }
      ]
    }
  },
  {
    id: '2',
    name: 'Elite Football Ground',
    location: 'Sports Valley, North District',
    description: 'FIFA standard football ground with natural grass and modern amenities. Ideal for professional matches and tournaments.',
    pricePerHour: 120,
    images: [
      'https://placehold.co/800x600?text=Elite+Football+Ground+FIFA+standard+natural+grass+field',
      'https://placehold.co/800x600?text=Elite+Football+Ground+stadium+seating+and+scoreboard',
      'https://placehold.co/800x600?text=Elite+Football+Ground+professional+goal+posts+and+markings'
    ],
    amenities: ['Natural Grass', 'Stadium Seating', 'Scoreboard', 'Referee Room', 'Medical Room'],
    rating: 4.9,
    reviews: 203,
    size: '105x68 meters',
    surface: 'Natural Grass',
    lighting: true,
    parking: true,
    changeRooms: true,
    availability: {
      '2024-01-20': [
        { startTime: '06:00', endTime: '08:00', available: true },
        { startTime: '08:00', endTime: '10:00', available: true },
        { startTime: '10:00', endTime: '12:00', available: false },
        { startTime: '14:00', endTime: '16:00', available: false },
        { startTime: '16:00', endTime: '18:00', available: true },
        { startTime: '18:00', endTime: '20:00', available: true },
        { startTime: '20:00', endTime: '22:00', available: false }
      ]
    }
  },
  {
    id: '3',
    name: 'Urban Cricket Hub',
    location: 'Metro Sports Center, East Wing',
    description: 'Multi-purpose ground suitable for cricket, football, and other sports. Features quality artificial turf with excellent bounce.',
    pricePerHour: 60,
    images: [
      'https://placehold.co/800x600?text=Urban+Cricket+Hub+multi+purpose+artificial+turf+ground',
      'https://placehold.co/800x600?text=Urban+Cricket+Hub+cricket+pitch+and+wickets+setup',
      'https://placehold.co/800x600?text=Urban+Cricket+Hub+spectator+stands+and+boundary+rope'
    ],
    amenities: ['Artificial Turf', 'Cricket Pitch', 'Boundary Rope', 'Spectator Stands', 'Equipment Storage'],
    rating: 4.6,
    reviews: 89,
    size: '90x55 meters',
    surface: 'Artificial Turf',
    lighting: true,
    parking: false,
    changeRooms: true,
    availability: {
      '2024-01-20': [
        { startTime: '06:00', endTime: '08:00', available: false },
        { startTime: '08:00', endTime: '10:00', available: true },
        { startTime: '10:00', endTime: '12:00', available: true },
        { startTime: '14:00', endTime: '16:00', available: true },
        { startTime: '16:00', endTime: '18:00', available: false },
        { startTime: '18:00', endTime: '20:00', available: true },
        { startTime: '20:00', endTime: '22:00', available: true }
      ]
    }
  },
  {
    id: '4',
    name: 'Premier League Turf',
    location: 'Sports City, Central Plaza',
    description: 'Professional grade turf with excellent drainage and lighting. Perfect for competitive matches and training sessions.',
    pricePerHour: 100,
    images: [
      'https://placehold.co/800x600?text=Premier+League+Turf+professional+grade+field+with+excellent+drainage',
      'https://placehold.co/800x600?text=Premier+League+Turf+high+quality+lighting+system+for+night+games',
      'https://placehold.co/800x600?text=Premier+League+Turf+modern+facilities+and+player+benches'
    ],
    amenities: ['Professional Drainage', 'High-Quality Lighting', 'Player Benches', 'Ball Storage', 'Refreshments'],
    rating: 4.7,
    reviews: 124,
    size: '95x62 meters',
    surface: 'Hybrid Turf',
    lighting: true,
    parking: true,
    changeRooms: true,
    availability: {
      '2024-01-20': [
        { startTime: '06:00', endTime: '08:00', available: true },
        { startTime: '08:00', endTime: '10:00', available: true },
        { startTime: '10:00', endTime: '12:00', available: true },
        { startTime: '14:00', endTime: '16:00', available: false },
        { startTime: '16:00', endTime: '18:00', available: false },
        { startTime: '18:00', endTime: '20:00', available: true },
        { startTime: '20:00', endTime: '22:00', available: true }
      ]
    }
  },
  {
    id: '5',
    name: 'Community Sports Field',
    location: 'Neighborhood Park, West Side',
    description: 'Affordable community ground perfect for casual games and practice sessions. Well-maintained with basic amenities.',
    pricePerHour: 40,
    images: [
      'https://placehold.co/800x600?text=Community+Sports+Field+affordable+well+maintained+grass+ground',
      'https://placehold.co/800x600?text=Community+Sports+Field+basic+amenities+and+simple+goal+posts',
      'https://placehold.co/800x600?text=Community+Sports+Field+open+space+for+casual+games+and+practice'
    ],
    amenities: ['Natural Grass', 'Goal Posts', 'Water Fountain', 'Basic Seating', 'Free Parking'],
    rating: 4.3,
    reviews: 67,
    size: '80x50 meters',
    surface: 'Natural Grass',
    lighting: false,
    parking: true,
    changeRooms: false,
    availability: {
      '2024-01-20': [
        { startTime: '06:00', endTime: '08:00', available: true },
        { startTime: '08:00', endTime: '10:00', available: true },
        { startTime: '10:00', endTime: '12:00', available: false },
        { startTime: '14:00', endTime: '16:00', available: true },
        { startTime: '16:00', endTime: '18:00', available: true },
        { startTime: '18:00', endTime: '20:00', available: false }
      ]
    }
  },
  {
    id: '6',
    name: 'Victory Sports Complex',
    location: 'Sports District, South Bay',
    description: 'State-of-the-art sports complex with multiple facilities. Features premium artificial turf and comprehensive amenities.',
    pricePerHour: 150,
    images: [
      'https://placehold.co/800x600?text=Victory+Sports+Complex+state+of+the+art+premium+artificial+turf',
      'https://placehold.co/800x600?text=Victory+Sports+Complex+comprehensive+amenities+and+modern+facilities',
      'https://placehold.co/800x600?text=Victory+Sports+Complex+multiple+fields+and+training+areas'
    ],
    amenities: ['Premium Turf', 'VIP Lounge', 'Professional Coaching', 'Video Analysis', 'Cafe'],
    rating: 4.9,
    reviews: 298,
    size: '110x70 meters',
    surface: 'Premium Artificial Turf',
    lighting: true,
    parking: true,
    changeRooms: true,
    availability: {
      '2024-01-20': [
        { startTime: '06:00', endTime: '08:00', available: false },
        { startTime: '08:00', endTime: '10:00', available: false },
        { startTime: '10:00', endTime: '12:00', available: true },
        { startTime: '14:00', endTime: '16:00', available: true },
        { startTime: '16:00', endTime: '18:00', available: true },
        { startTime: '18:00', endTime: '20:00', available: false },
        { startTime: '20:00', endTime: '22:00', available: true }
      ]
    }
  }
];

export const getFeaturedTurfs = () => {
  return turfs.filter(turf => turf.rating >= 4.7);
};

export const getTurfById = (id: string) => {
  return turfs.find(turf => turf.id === id);
};

export const searchTurfs = (query: string, filters?: {
  location?: string;
  priceRange?: [number, number];
  surface?: string;
  amenities?: string[];
}) => {
  let filtered = turfs;

  if (query) {
    filtered = filtered.filter(turf => 
      turf.name.toLowerCase().includes(query.toLowerCase()) ||
      turf.location.toLowerCase().includes(query.toLowerCase()) ||
      turf.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (filters?.location) {
    filtered = filtered.filter(turf => 
      turf.location.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  if (filters?.priceRange) {
    const [min, max] = filters.priceRange;
    filtered = filtered.filter(turf => turf.pricePerHour >= min && turf.pricePerHour <= max);
  }

  if (filters?.surface) {
    filtered = filtered.filter(turf => turf.surface === filters.surface);
  }

  if (filters?.amenities && filters.amenities.length > 0) {
    filtered = filtered.filter(turf => 
      filters.amenities!.every(amenity => turf.amenities.includes(amenity))
    );
  }

  return filtered;
};