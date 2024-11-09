import catImg1 from "../assets/Images/categoryImg/catImg1.png";
import catImg2 from "../assets/Images/categoryImg/catImg2.png";
import catImg3 from "../assets/Images/categoryImg/catImg3.png";
import catImg4 from "../assets/Images/categoryImg/catImg4.png";
import catImg5 from "../assets/Images/categoryImg/catImg5.png";
import catImg6 from "../assets/Images/categoryImg/catImg6.png";
import catImg7 from "../assets/Images/categoryImg/catImg7.png";
import catImg8 from "../assets/Images/categoryImg/catImg8.png";
import catImg9 from "../assets/Images/categoryImg/catImg19.png";
import catImg10 from "../assets/Images/categoryImg/catImg10.png";
import catImg11 from "../assets/Images/categoryImg/catImg11.png";
import catImg12 from "../assets/Images/categoryImg/catImg12.png";
import catImg13 from "../assets/Images/categoryImg/catImg13.png";
import catImg14 from "../assets/Images/categoryImg/catImg14.png";
import catImg15 from "../assets/Images/categoryImg/catImg15.png";
import catImg16 from "../assets/Images/categoryImg/catImg16.png";
import catImg17 from "../assets/Images/categoryImg/catImg17.png";
import catImg18 from "../assets/Images/categoryImg/catImg18.png";
import catImg19 from "../assets/Images/categoryImg/catImg19.png";
import catImg20 from "../assets/Images/categoryImg/catImg20.png";

export interface CategoryProps {
  id: number;
  img: string;
  title: string;
  descriptions: string[];
}

export const category: CategoryProps[] = [
  {
    id: 1,
    img: catImg1,
    title: "Accessories",
    descriptions: [
      "Handbags and purses",
      "Wallets and clutches",
      "Belts and suspenders",
      "Hats and caps",
      "Scarves and wraps",
      "Sunglasses and eyewear",
      "Watches and wristbands",
      "Jewelry",
    ],
  },
  {
    id: 2,
    img: catImg2,
    title: "Arts and Crafts",
    descriptions: [
      "Drawing and painting supplies",
      "Sculpting tools and clay",
      "Scrapbooking supplies",
      "DIY kits",
      "Sewing and knitting supplies",
      "Art prints and posters",
      "Crafting books and instructional guides",
    ],
  },
  {
    id: 3,
    img: catImg3,
    title: "Antiques and Collectibles",
    descriptions: [
      "Vintage furniture",
      "Antique jewelry and watches",
      "Collectible coins and currency",
      "Historical memorabilia",
      "Artifacts and archaeological finds",
      "Retro toys and games",
      "Rare books and manuscripts",
      "Sports memorabilia",
    ],
  },
  {
    id: 4,
    img: catImg4,
    title: "Babies and Toddlers",
    descriptions: [
      "Baby care essentials",
      "Nursery furniture sets",
      "Scrapbooking supplies",
      "Baby feeding supplies",
      "Baby gear",
      "Toddler toys",
      "Childproofing equipment",
      "Educational toys and books",
    ],
  },
  {
    id: 5,
    img: catImg5,
    title: "Cameras and Optics",
    descriptions: [
      "DSLR cameras",
      "Mirrorless cameras",
      "Point-and-shoot cameras",
      "Camera lenses",
      "Binoculars and telescopes",
      "Camera accessories",
      "Photography lighting equipment",
      "Lens filters and cleaning kits",
    ],
  },
  {
    id: 6,
    img: catImg6,
    title: "Electronics",
    descriptions: [
      "Televisions",
      "Cameras",
      "Audio equipment",
      "Gaming consoles",
      "Wearable devices",
    ],
  },
  {
    id: 7,
    img: catImg7,
    title: "Food and Beverages",
    descriptions: [
      "Groceries",
      "Gourmet foods",
      "Beverages",
      "Snacks",
      "Confectionery",
      "Health foods",
    ],
  },
  {
    id: 8,
    img: catImg8,
    title: "Furniture and Decor",
    descriptions: [
      "Living room furniture",
      "Bedroom furniture",
      "Dining room furniture",
      "Home decor items",
      "Indoor plants and planters",
      "Mirrors and wall shelves",
      "Accent furniture",
    ],
  },
  {
    id: 9,
    img: catImg9,
    title: "Health and Medic",
    descriptions: [
      "Vitamins and supplements",
      "Over-the-counter medications",
      "Medical equipment",
      "First aid kits and supplies",
      "Orthopedic braces and supports",
      "Mobility aids",
      "Personal hygiene products",
      "Health monitors and fitness trackers",
    ],
  },
  {
    id: 10,
    img: catImg10,
    title: "Home and Garden",
    descriptions: [
      "Gardening tools and equipment",
      "Outdoor furniture",
      "Lawn care products",
      "Outdoor decor",
      "Planters and gardening accessories",
      "Home improvement tools",
      "Storage solutions",
      "Landscaping materials",
    ],
  },
  {
    id: 11,
    img: catImg11,
    title: "Luggage and Bags",
    descriptions: [
      "Suitcases",
      "Carry-on bags",
      "Duffel bags",
      "Travel accessories",
      "Travel-sized toiletries",
      "Outdoor gear suitable for travel",
      "Travel-related apparel",
    ],
  },
  {
    id: 12,
    img: catImg12,
    title: "Mobile and Tablets",
    descriptions: ["Smartphones", "Tablets", "Accessories", "VR Equipment"],
  },
  {
    id: 13,
    img: catImg13,
    title: "Musical Instruments",
    descriptions: [
      "Guitars",
      "Keyboards and pianos",
      "Drums and percussion instruments",
      "Wind instruments",
      "String instruments",
      "Amplifiers and sound equipment",
      "Music stands and accessories",
      "Sheet music and instructional books",
    ],
  },
  {
    id: 14,
    img: catImg14,
    title: "Office Supplies & Stationery",
    descriptions: [
      "Pens and pencils",
      "Paper products",
      "Desk organizers",
      "Office furniture (desks, chairs)",
      "Printers and ink cartridges",
      "Presentation supplies",
    ],
  },
  {
    id: 15,
    img: catImg15,
    title: "Sporting Facilities",
    descriptions: [
      "Exercise equipment",
      "Sports gear",
      "Athletic footwear",
      "Fitness accessories",
      "Sports apparel",
      "Outdoor recreation equipment",
      "Team sports equipment",
      "Sports watches and fitness trackers",
    ],
  },
  {
    id: 16,
    img: catImg16,
    title: "Toys and Games",
    descriptions: [
      "Action figures",
      "Dolls",
      "Board games",
      "Puzzles",
      "Outdoor toys",
      "Video games",
    ],
  },
  {
    id: 17,
    img: catImg17,
    title: "Vehicle Parts",
    descriptions: [
      "Engine parts",
      "Braking system components",
      "Suspension and steering parts",
      "Exterior accessories",
      "Interior accessories",
      "Performance upgrades",
      "Lighting and electrical components",
      "Maintenance and repair tools",
    ],
  },
  {
    id: 18,
    img: catImg18,
    title: "Clothing and Fashion",
    descriptions: [
      "Tops",
      "Bottoms",
      "Dresses and jumpsuits",
      "Outerwear",
      "Activewear",
      "Footwear",
    ],
  },
  {
    id: 19,
    img: catImg19,
    title: "Pet Supplies",
    descriptions: [
      "Pet food",
      "Toys",
      "Beds and furniture",
      "Grooming supplies",
      "Collars, leashes, and harnesses",
      "Health and wellness products",
    ],
  },
  {
    id: 20,
    img: catImg20,
    title: "Cosmetics and Beauty",
    descriptions: [
      "Skincare products",
      "Makeup products",
      "Haircare products",
      "Fragrances",
      "Bath and body products",
      "Beauty tools and accessories",
      "Nail care products",
      "Men's grooming products",
    ],
  },
];
