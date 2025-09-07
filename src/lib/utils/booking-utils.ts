import { Booking, Turf, TimeSlot } from '@/types/turf';

export const generateTimeSlots = (startHour: number = 6, endHour: number = 22, interval: number = 2) => {
  const slots: TimeSlot[] = [];
  
  for (let hour = startHour; hour < endHour; hour += interval) {
    const startTime = `${hour.toString().padStart(2, '0')}:00`;
    const endTime = `${(hour + interval).toString().padStart(2, '0')}:00`;
    
    slots.push({
      startTime,
      endTime,
      available: Math.random() > 0.3, // Random availability for demo
    });
  }
  
  return slots;
};

export const calculateBookingCost = (
  pricePerHour: number,
  duration: number,
  startTime: string
) => {
  let totalCost = pricePerHour * duration;
  
  // Peak hours pricing (6 PM - 10 PM)
  const hour = parseInt(startTime.split(':')[0]);
  if (hour >= 18 && hour < 22) {
    totalCost *= 1.2; // 20% peak hour surcharge
  }
  
  return Math.round(totalCost);
};

export const isTimeSlotAvailable = (
  turf: Turf,
  date: string,
  startTime: string,
  duration: number
) => {
  const availability = turf.availability[date];
  if (!availability) return true; // Assume available if no data
  
  const startHour = parseInt(startTime.split(':')[0]);
  const endHour = startHour + duration;
  
  // Check if all required time slots are available
  for (let hour = startHour; hour < endHour; hour += 2) {
    const timeString = `${hour.toString().padStart(2, '0')}:00`;
    const slot = availability.find(slot => slot.startTime === timeString);
    
    if (!slot || !slot.available) {
      return false;
    }
  }
  
  return true;
};

export const getAvailableTimeSlots = (turf: Turf, date: string) => {
  return turf.availability[date] || generateTimeSlots();
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${displayHour}:${minutes} ${ampm}`;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const generateBookingId = () => {
  return 'BK' + Date.now().toString() + Math.random().toString(36).substr(2, 4).toUpperCase();
};

export const getBookingStatus = (booking: Booking) => {
  const now = new Date();
  const bookingDate = new Date(booking.date);
  const bookingTime = new Date(`${booking.date}T${booking.startTime}`);
  
  if (booking.status === 'cancelled') return 'cancelled';
  if (bookingTime < now) return 'completed';
  if (bookingDate.toDateString() === now.toDateString()) return 'today';
  return booking.status;
};

export const canCancelBooking = (booking: Booking) => {
  const now = new Date();
  const bookingTime = new Date(`${booking.date}T${booking.startTime}`);
  const hoursDifference = (bookingTime.getTime() - now.getTime()) / (1000 * 60 * 60);
  
  return hoursDifference > 24 && booking.status !== 'cancelled';
};

export const mockBookings: Booking[] = [
  {
    id: 'BK123456',
    userId: 'user1',
    turfId: '1',
    date: '2024-01-25',
    startTime: '18:00',
    endTime: '20:00',
    duration: 2,
    totalCost: 192,
    status: 'confirmed',
    playerName: 'John Doe',
    playerPhone: '+91 9876543210',
    playerEmail: 'john.doe@example.com',
    createdAt: '2024-01-20T10:30:00Z'
  },
  {
    id: 'BK789012',
    userId: 'user1',
    turfId: '3',
    date: '2024-01-22',
    startTime: '16:00',
    endTime: '18:00',
    duration: 2,
    totalCost: 120,
    status: 'pending',
    playerName: 'Jane Smith',
    playerPhone: '+91 9876543211',
    playerEmail: 'jane.smith@example.com',
    createdAt: '2024-01-20T14:15:00Z'
  }
];