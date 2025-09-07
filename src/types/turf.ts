export interface Turf {
  id: string;
  name: string;
  location: string;
  description: string;
  pricePerHour: number;
  images: string[];
  amenities: string[];
  rating: number;
  reviews: number;
  size: string;
  surface: string;
  lighting: boolean;
  parking: boolean;
  changeRooms: boolean;
  availability: {
    [key: string]: TimeSlot[];
  };
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
  price?: number;
}

export interface Booking {
  id: string;
  userId: string;
  turfId: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  totalCost: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  playerName: string;
  playerPhone: string;
  playerEmail: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  bookings: Booking[];
}

export interface BookingFormData {
  date: string;
  startTime: string;
  duration: number;
  playerName: string;
  playerPhone: string;
  playerEmail: string;
}