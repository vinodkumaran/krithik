export interface Review {
  id: number;
  name: string;
  location: string;
  city: string;
  state: string;
  rating: number;
  review: string;
  serviceType: string;
  tripType: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    state: "Tamil Nadu",
    rating: 5,
    review: "We booked Krithik Tours & Travels Palani for a family trip from Chennai to Kodaikanal. They arranged a clean A/C car with an experienced tour driver and provided smooth pickup from Madurai railway station. The driver guided us to all major sightseeing places like Coaker's Walk, Pine Forest, and Kodai Lake. Very professional service and perfect for families travelling from Chennai to hill stations.",
    serviceType: "Railway Station Pickup",
    tripType: "Family Trip"
  },
  {
    id: 2,
    name: "Ankit Verma",
    location: "New Delhi",
    city: "Delhi",
    state: "Delhi",
    rating: 5,
    review: "As travellers from Delhi, we were looking for a reliable travel agency for a Palani one-day trip. Krithik Tours & Travels arranged timely pickup from Dindigul railway station with a comfortable A/C vehicle. The driver was polite, guided us well for Palani Murugan Temple darshan, and managed the schedule perfectly. Highly recommended for outstation pilgrims visiting Palani.",
    serviceType: "Temple Tour",
    tripType: "One Day Trip"
  },
  {
    id: 3,
    name: "Sivakumar & Family",
    location: "Dindigul, Tamil Nadu",
    city: "Dindigul",
    state: "Tamil Nadu",
    rating: 5,
    review: "We booked Krithik Tours & Travels near Palani for a Yercaud trip from Dindigul. The A/C van was neat and the driver was very friendly and knowledgeable about Yercaud sightseeing spots like Lady's Seat and Yercaud Lake. Safe driving on hill roads and excellent service. Best travels for short hill station trips from Dindigul.",
    serviceType: "A/C Van Service",
    tripType: "Hill Station Trip"
  },
  {
    id: 4,
    name: "Prakash Nair",
    location: "Bangalore, Karnataka",
    city: "Bangalore",
    state: "Karnataka",
    rating: 5,
    review: "Our group travelled from Bangalore to Munnar and booked Krithik Tours & Travels for the entire tour. The A/C mini van was spacious and ideal for group travel. The driver handled long-distance driving comfortably and covered all major Munnar attractions including tea gardens and waterfalls. Great coordination and affordable group tour package from Bangalore.",
    serviceType: "Group Tour",
    tripType: "Multi-Day Trip"
  },
  {
    id: 5,
    name: "Suresh & Group",
    location: "Chennai, Tamil Nadu",
    city: "Chennai",
    state: "Tamil Nadu",
    rating: 5,
    review: "We organized an Arupadai Veedu group tour from Chennai with Krithik Tours & Travels Palani. Our 12-member group travelled comfortably in a well-maintained bus with an experienced tour driver. Temple visits, timings, and route planning were handled smoothly. Excellent choice for temple tours, pilgrimage travel, and group bookings in Tamil Nadu.",
    serviceType: "Group Travel by Bus",
    tripType: "Temple Tour"
  }
];
