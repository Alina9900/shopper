import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  // 👩 Women's Category
  {
    id: 1,
    name: "Floral Peplum Hem Blouse",
    category: "women",
    image: p1_img,
    new_price: 49.99,
    old_price: 79.99,
    description: "A soft chiffon blouse with flutter sleeves and a flattering peplum design. Perfect for brunch or casual outings.",
  },
  {
    id: 2,
    name: "V-Neck Ruffled Floral Top",
    category: "women",
    image: p2_img,
    new_price: 59.5,
    old_price: 99.99,
    description: "Lightweight ruffled top with V-neck and floral print, offering both comfort and elegance.",
  },
  {
    id: 3,
    name: "Polka Dot Puff Sleeve Blouse",
    category: "women",
    image: p3_img,
    new_price: 44.0,
    old_price: 75.0,
    description: "Trendy puff sleeve blouse with classic polka dots — a must-have for your summer wardrobe.",
  },
  {
    id: 4,
    name: "Lace Detail High-Neck Top",
    category: "women",
    image: p4_img,
    new_price: 70.0,
    old_price: 110.0,
    description: "Elegant lace-detailed high-neck top with a semi-sheer finish, ideal for formal evenings.",
  },
  {
    id: 5,
    name: "Floral Print Wrap Top",
    category: "women",
    image: p5_img,
    new_price: 55.5,
    old_price: 90.0,
    description: "A wrap-style top featuring a delicate floral print and tie waist, offering a feminine silhouette.",
  },
  {
    id: 6,
    name: "Sleeveless Pleated Silk Blouse",
    category: "women",
    image: p6_img,
    new_price: 62.0,
    old_price: 99.5,
    description: "Luxurious silk blouse with subtle pleats, designed for comfort and sophistication.",
  },
  {
    id: 7,
    name: "Casual Striped Cotton Shirt",
    category: "women",
    image: p7_img,
    new_price: 48.0,
    old_price: 70.5,
    description: "A breathable cotton shirt with minimal stripes — perfect for office or daily wear.",
  },
  {
    id: 8,
    name: "Balloon Sleeve Peplum Top",
    category: "women",
    image: p8_img,
    new_price: 54.0,
    old_price: 85.5,
    description: "Stylish peplum top with balloon sleeves, designed for a playful yet elegant look.",
  },
  {
    id: 9,
    name: "Ruched Crop Top",
    category: "women",
    image: p9_img,
    new_price: 38.0,
    old_price: 65.0,
    description: "Trendy ruched crop top that pairs well with jeans or skirts for a chic casual vibe.",
  },
  {
    id: 10,
    name: "Chiffon Button-Up Blouse",
    category: "women",
    image: p10_img,
    new_price: 66.0,
    old_price: 100.5,
    description: "Lightweight chiffon blouse with button-up closure and a smooth finish for everyday elegance.",
  },
  {
    id: 11,
    name: "Satin Evening Top",
    category: "women",
    image: p11_img,
    new_price: 72.5,
    old_price: 115.0,
    description: "Soft satin evening top with a glossy sheen and minimalistic design, ideal for date nights.",
  },
  {
    id: 12,
    name: "Casual Denim Shirt",
    category: "women",
    image: p12_img,
    new_price: 58.0,
    old_price: 90.5,
    description: "Classic denim shirt with button details, offering a rugged yet stylish casual look.",
  },

  // 👨 Men's Category
  {
    id: 13,
    name: "Men Green Zippered Bomber Jacket",
    category: "men",
    image: p13_img,
    new_price: 95.0,
    old_price: 140.0,
    description: "Stylish green bomber jacket with front zip and ribbed cuffs for a sporty urban look.",
  },
  {
    id: 14,
    name: "Men Black Leather Jacket",
    category: "men",
    image: p14_img,
    new_price: 120.0,
    old_price: 190.0,
    description: "Premium black leather jacket that adds a bold and timeless edge to your wardrobe.",
  },
  {
    id: 15,
    name: "Men Slim Fit Denim Jacket",
    category: "men",
    image: p15_img,
    new_price: 88.0,
    old_price: 130.0,
    description: "Light blue denim jacket with a slim fit cut, perfect for layering over T-shirts.",
  },
  {
    id: 16,
    name: "Men Puffer Winter Jacket",
    category: "men",
    image: p16_img,
    new_price: 135.0,
    old_price: 200.0,
    description: "Warm and lightweight puffer jacket designed to keep you cozy during cold days.",
  },
  {
    id: 17,
    name: "Men Grey Cotton Casual Jacket",
    category: "men",
    image: p17_img,
    new_price: 78.0,
    old_price: 120.0,
    description: "Comfortable cotton jacket with a zip-up design for casual everyday wear.",
  },
  {
    id: 18,
    name: "Men Sporty Zip-Up Hoodie",
    category: "men",
    image: p18_img,
    new_price: 65.0,
    old_price: 99.5,
    description: "Soft fleece hoodie with front zip and adjustable hood for relaxed weekend comfort.",
  },
  {
    id: 19,
    name: "Men Blue Slim Fit Blazer",
    category: "men",
    image: p19_img,
    new_price: 110.0,
    old_price: 160.0,
    description: "Elegant slim-fit blazer in deep blue color, tailored for modern formal style.",
  },
  {
    id: 20,
    name: "Men Cotton Overshirt",
    category: "men",
    image: p20_img,
    new_price: 74.5,
    old_price: 105.0,
    description: "Soft cotton overshirt with chest pockets — versatile enough for layering or solo wear.",
  },
  {
    id: 21,
    name: "Men Regular Fit Parka",
    category: "men",
    image: p21_img,
    new_price: 145.0,
    old_price: 220.0,
    description: "Durable parka with a removable hood and warm lining, ideal for cold winters.",
  },
  {
    id: 22,
    name: "Men Vintage Suede Jacket",
    category: "men",
    image: p22_img,
    new_price: 160.0,
    old_price: 240.0,
    description: "Classic suede finish jacket with button-up closure, offering a vintage-inspired look.",
  },
  {
    id: 23,
    name: "Men Lightweight Windbreaker",
    category: "men",
    image: p23_img,
    new_price: 85.0,
    old_price: 125.0,
    description: "A breathable, lightweight windbreaker designed for outdoor comfort and style.",
  },
  {
    id: 24,
    name: "Men Full-Zip Fleece Jacket",
    category: "men",
    image: p24_img,
    new_price: 99.0,
    old_price: 150.0,
    description: "Cozy fleece jacket with a full zip and side pockets — a winter essential.",
  },

  // 👦 Kids' Category
  {
    id: 25,
    name: "Boys Orange Colourblocked Hoodie",
    category: "kid",
    image: p25_img,
    new_price: 35.0,
    old_price: 55.0,
    description: "Bright orange colorblocked hoodie made from soft cotton for all-day comfort.",
  },
  {
    id: 26,
    name: "Girls Unicorn Printed Hoodie",
    category: "kid",
    image: p26_img,
    new_price: 40.0,
    old_price: 65.0,
    description: "Adorable unicorn printed hoodie that keeps your little one warm and happy.",
  },
  {
    id: 27,
    name: "Boys Navy Cotton Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 30.0,
    old_price: 50.0,
    description: "Comfortable navy blue sweatshirt with soft fleece lining for extra warmth.",
  },
  {
    id: 28,
    name: "Girls Pink Polka Dot Sweatshirt",
    category: "kid",
    image: p28_img,
    new_price: 42.0,
    old_price: 70.0,
    description: "Polka dot pink sweatshirt crafted with breathable fabric for everyday play.",
  },
  {
    id: 29,
    name: "Boys Striped Pullover",
    category: "kid",
    image: p29_img,
    new_price: 28.0,
    old_price: 45.0,
    description: "Stylish striped pullover that pairs perfectly with denim or joggers.",
  },
  {
    id: 30,
    name: "Girls Bunny Ears Hoodie",
    category: "kid",
    image: p30_img,
    new_price: 38.5,
    old_price: 60.0,
    description: "Cute pink hoodie with bunny ear details — soft, cozy, and playful.",
  },
  {
    id: 31,
    name: "Boys Blue Printed Hoodie",
    category: "kid",
    image: p31_img,
    new_price: 33.0,
    old_price: 52.0,
    description: "Blue hoodie with fun cartoon print and ribbed cuffs for active comfort.",
  },
  {
    id: 32,
    name: "Girls Cartoon Sweatshirt",
    category: "kid",
    image: p32_img,
    new_price: 29.5,
    old_price: 48.0,
    description: "Cartoon printed sweatshirt made with organic cotton — soft and durable.",
  },
  {
    id: 33,
    name: "Boys Dinosaur Hoodie",
    category: "kid",
    image: p33_img,
    new_price: 36.0,
    old_price: 58.0,
    description: "Dinosaur-themed hoodie that’s both fun and comfortable for daily wear.",
  },
  {
    id: 34,
    name: "Girls Yellow Heart Hoodie",
    category: "kid",
    image: p34_img,
    new_price: 41.0,
    old_price: 65.0,
    description: "Bright yellow hoodie with heart motifs, designed to spread cheer.",
  },
  {
    id: 35,
    name: "Boys Red Printed Sweatshirt",
    category: "kid",
    image: p35_img,
    new_price: 32.0,
    old_price: 50.0,
    description: "Red sweatshirt with cool graphic print — soft and perfect for school days.",
  },
  {
    id: 36,
    name: "Girls Purple Unicorn Hoodie",
    category: "kid",
    image: p36_img,
    new_price: 39.5,
    old_price: 62.0,
    description: "Purple hoodie featuring a cute unicorn design, great for cozy evenings.",
  },
];

export default all_product;
