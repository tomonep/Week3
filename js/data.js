// Yacht data
const yachtsData = [
  {
    "id": 1,
    "name": "Ocean Majesty",
    "brand": "Sunseeker",
    "category": "Motor Yacht",
    "price": 2500000,
    "length": 75,
    "year": 2023,
    "location": "Monaco",
    "description": "Luxurious motor yacht with state-of-the-art amenities, spacious deck areas, and elegant interior design. Perfect for entertaining guests or family vacations.",
    "specifications": {
      "beam": 18.5,
      "draft": 5.2,
      "engines": "Twin MTU 16V 2000 M96",
      "maxSpeed": 28,
      "cruisingSpeed": 24,
      "fuelCapacity": 8500,
      "waterCapacity": 2000,
      "cabins": 4,
      "berths": 8,
      "crew": 4
    },
    "features": ["Air Conditioning", "Generator", "Bow Thruster", "WiFi", "Jacuzzi", "Tender Garage", "Stabilizers"],
    "images": ["luxury-yacht", "yacht-interior", "yacht-deck"]
  },
  {
    "id": 2,
    "name": "Wind Spirit",
    "brand": "Beneteau",
    "category": "Sailing Yacht",
    "price": 850000,
    "length": 45,
    "year": 2022,
    "location": "French Riviera",
    "description": "Beautiful sailing yacht combining performance and comfort. Ideal for passionate sailors seeking adventure on the open seas.",
    "specifications": {
      "beam": 14.2,
      "draft": 7.8,
      "engines": "Volvo Penta D3-110",
      "maxSpeed": 18,
      "cruisingSpeed": 8,
      "fuelCapacity": 380,
      "waterCapacity": 570,
      "cabins": 3,
      "berths": 6,
      "crew": 2
    },
    "features": ["Air Conditioning", "Generator", "Bow Thruster", "WiFi", "Electric Winches", "Autopilot"],
    "images": ["sailing-yacht", "yacht-sailing", "yacht-cabin"]
  },
  {
    "id": 3,
    "name": "Explorer Pro",
    "brand": "Nordhavn",
    "category": "Expedition Yacht",
    "price": 4200000,
    "length": 90,
    "year": 2024,
    "location": "Seattle",
    "description": "Robust expedition yacht built for long-range cruising and exploration. Designed to handle any weather condition with ultimate comfort.",
    "specifications": {
      "beam": 22.0,
      "draft": 6.5,
      "engines": "Caterpillar C32 ACERT",
      "maxSpeed": 15,
      "cruisingSpeed": 12,
      "fuelCapacity": 15000,
      "waterCapacity": 3500,
      "cabins": 5,
      "berths": 10,
      "crew": 6
    },
    "features": ["Air Conditioning", "Generator", "Bow Thruster", "WiFi", "Stabilizers", "Tender Garage", "Crane", "Satellite Communication"],
    "images": ["expedition-yacht", "yacht-bridge", "yacht-lounge"]
  },
  {
    "id": 4,
    "name": "Speed Demon",
    "brand": "Cigarette Racing",
    "category": "Sport Yacht",
    "price": 1200000,
    "length": 35,
    "year": 2023,
    "location": "Miami",
    "description": "High-performance sport yacht designed for speed enthusiasts. Sleek design meets cutting-edge technology for the ultimate thrill.",
    "specifications": {
      "beam": 10.5,
      "draft": 3.2,
      "engines": "Triple Mercury Racing 450R",
      "maxSpeed": 85,
      "cruisingSpeed": 45,
      "fuelCapacity": 1200,
      "waterCapacity": 150,
      "cabins": 1,
      "berths": 2,
      "crew": 1
    },
    "features": ["Air Conditioning", "WiFi", "Sport Seating", "Performance Monitoring", "GPS Navigation"],
    "images": ["sport-yacht", "yacht-cockpit", "yacht-speed"]
  },
  {
    "id": 5,
    "name": "Classic Beauty",
    "brand": "Hinckley",
    "category": "Classic Yacht",
    "price": 1800000,
    "length": 55,
    "year": 2021,
    "location": "Newport",
    "description": "Timeless classic yacht with traditional craftsmanship and modern conveniences. Perfect blend of heritage and innovation.",
    "specifications": {
      "beam": 16.0,
      "draft": 4.8,
      "engines": "Caterpillar C7.1",
      "maxSpeed": 22,
      "cruisingSpeed": 18,
      "fuelCapacity": 1800,
      "waterCapacity": 800,
      "cabins": 3,
      "berths": 6,
      "crew": 3
    },
    "features": ["Air Conditioning", "Generator", "Bow Thruster", "WiFi", "Teak Decking", "Custom Interior"],
    "images": ["classic-yacht", "yacht-woodwork", "yacht-galley"]
  },
  {
    "id": 6,
    "name": "Mega Luxe",
    "brand": "Lurssen",
    "category": "Super Yacht",
    "price": 25000000,
    "length": 150,
    "year": 2024,
    "location": "Mediterranean",
    "description": "Ultra-luxurious super yacht with unparalleled amenities. Features multiple decks, spa, cinema, and helicopter pad.",
    "specifications": {
      "beam": 25.0,
      "draft": 7.2,
      "engines": "Twin Caterpillar 3516C",
      "maxSpeed": 16,
      "cruisingSpeed": 14,
      "fuelCapacity": 45000,
      "waterCapacity": 8000,
      "cabins": 8,
      "berths": 16,
      "crew": 20
    },
    "features": ["Air Conditioning", "Generator", "Bow Thruster", "WiFi", "Helicopter Pad", "Spa", "Cinema", "Gym", "Beach Club", "Tender Garage"],
    "images": ["super-yacht", "yacht-luxury", "yacht-helicopter"]
  }
];

// Image mapping for Unsplash images
const imageMap = {
  "luxury-yacht": "https://images.unsplash.com/photo-1734410308581-f6d5d5ed7286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvciUyMHlhY2h0JTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU5NjM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-interior": "https://images.unsplash.com/photo-1598448056086-307e98ef5c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGludGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU2NjUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-deck": "https://images.unsplash.com/photo-1607144415124-701c6f774006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlciUyMHlhY2h0JTIwZGVja3xlbnwxfHx8fDE3NTg1OTYzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "sailing-yacht": "https://images.unsplash.com/photo-1643572550056-1c538160ed0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMHNhaWxpbmd8ZW58MXx8fHwxNzU4NTgyODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-sailing": "https://images.unsplash.com/photo-1643572550056-1c538160ed0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMHNhaWxpbmd8ZW58MXx8fHwxNzU4NTgyODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-cabin": "https://images.unsplash.com/photo-1598448056086-307e98ef5c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGludGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU2NjUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "expedition-yacht": "https://images.unsplash.com/photo-1734410308581-f6d5d5ed7286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvciUyMHlhY2h0JTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU5NjM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-bridge": "https://images.unsplash.com/photo-1607144415124-701c6f774006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlciUyMHlhY2h0JTIwZGVja3xlbnwxfHx8fDE3NTg1OTYzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-lounge": "https://images.unsplash.com/photo-1598448056086-307e98ef5c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGludGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU2NjUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "sport-yacht": "https://images.unsplash.com/photo-1653467213110-796a9d12ab97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMHlhY2h0JTIwc3BlZWR8ZW58MXx8fHwxNzU4NTk2MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-cockpit": "https://images.unsplash.com/photo-1653467213110-796a9d12ab97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMHlhY2h0JTIwc3BlZWR8ZW58MXx8fHwxNzU4NTk2MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-speed": "https://images.unsplash.com/photo-1653467213110-796a9d12ab97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMHlhY2h0JTIwc3BlZWR8ZW58MXx8fHwxNzU4NTk2MzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "classic-yacht": "https://images.unsplash.com/photo-1643572550056-1c538160ed0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMHNhaWxpbmd8ZW58MXx8fHwxNzU4NTgyODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-woodwork": "https://images.unsplash.com/photo-1598448056086-307e98ef5c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGludGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU2NjUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-galley": "https://images.unsplash.com/photo-1598448056086-307e98ef5c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGludGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU2NjUzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "super-yacht": "https://images.unsplash.com/photo-1597430203235-a8d35b24b37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGhlbGljb3B0ZXIlMjBsdXh1cnl8ZW58MXx8fHwxNzU4NTk2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-luxury": "https://images.unsplash.com/photo-1734410308581-f6d5d5ed7286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvciUyMHlhY2h0JTIwbHV4dXJ5fGVufDF8fHx8MTc1ODU5NjM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "yacht-helicopter": "https://images.unsplash.com/photo-1597430203235-a8d35b24b37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGhlbGljb3B0ZXIlMjBsdXh1cnl8ZW58MXx8fHwxNzU4NTk2MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
};

// Get image URL function
function getImageUrl(imageKey) {
  return imageMap[imageKey] || imageMap["luxury-yacht"];
}