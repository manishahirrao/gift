export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image?: string;
  featured?: boolean;
  specifications?: string;
  capacity?: string;
  size?: string;
  colors?: string[];
  model?: string;
}

export const products: Product[] = [
  // Premium Gift Combo - 6 in 1
  {
    id: "H934",
    name: "6 in 1 Executive Gift Set",
    category: "Premium Gift Combo",
    description: "Complete executive gift set with diary, flask, pen, keychain, pendrive, and card holder",
    image: "/Premium_Gift_Combo_6_in_1.webp",
    specifications: "Premium black box packaging, ideal for corporate gifting",
    capacity: "500ml Flask",
    size: "L-24.7cm X W-23.6cm X H-8cm",
    featured: true
  },
  {
    id: "H935",
    name: "6 in 1 Corporate Gift Set",
    category: "Premium Gift Combo",
    description: "Professional gift combo with A5 diary, flask, metal pen, keychain, pendrive, business card holder",
    image: "/Premium_Gift_Combo_6_in_1_01.webp",
    specifications: "Elegant packaging with custom branding options",
    capacity: "500ml Flask, 16GB/32GB Pendrive",
    size: "L-27cm X W-23.3cm X H-8cm",
    colors: ["Black", "Blue", "Red"]
  },
  {
    id: "H936",
    name: "6 in 1 Premium Business Set",
    category: "Premium Gift Combo",
    description: "Business gift set with planner diary, vacuum flask, roller pen, keychain, pendrive, card holder",
    image: "/Premium_Gift_Combo_6_in_1_03.webp",
    specifications: "Professional presentation box with pen holder top",
    capacity: "500ml Flask",
    size: "L-26cm X W-24cm X H-8cm"
  },

  // Premium Gift Combo - 4 in 1
  {
    id: "H927",
    name: "4 in 1 Compact Gift Set",
    category: "Premium Gift Combo",
    description: "Compact gift set with diary, metal keychain, pen, and business card holder",
    image: "/Premium_Gift_Combo_4_in_1_01.webp",
    specifications: "Compact cardboard box packaging, space-efficient design",
    size: "L-22.2cm X W-24.5cm X H-3.5cm",
    colors: ["Black", "Blue"]
  },
  {
    id: "H928",
    name: "4 in 1 Executive Set",
    category: "Premium Gift Combo",
    description: "Executive gift combo with A5 diary, metal keychain, pen, dual card holder",
    image: "/Premium_Gift_Combo_4_in_1_02.jpeg",
    specifications: "Premium packaging with dual-sided business card holder",
    size: "L-23cm X W-25cm X H-4cm",
    colors: ["Black", "Brown"]
  },

  // Premium Gift Combo - 3 in 1
  {
    id: "H941",
    name: "3 in 1 Essential Gift Set",
    category: "Premium Gift Combo",
    description: "Essential gift combo with diary, pen, and keychain",
    image: "/Premium_Gift_Combo_3_in_1_01.webp",
    specifications: "Compact tri-combo set, budget-friendly option",
    size: "L-20cm X W-18cm X H-3cm"
  },
  {
    id: "H950",
    name: "3 in 1 Classic Gift Set",
    category: "Premium Gift Combo",
    description: "Classic gift set with diary, metal pen, and keychain",
    image: "/Premium_Gift_Combo_3_in_1_02.webp",
    specifications: "Traditional gift combination, professional appearance",
    size: "L-21cm X W-19cm X H-3.5cm"
  },
  {
    id: "H942",
    name: "3 in 1 Professional Set",
    category: "Premium Gift Combo",
    description: "Professional gift set with diary, pen, and card holder",
    image: "/Premium_Gift_Combo_3_in_1_03.webp",
    specifications: "Professional packaging with card holder",
    size: "L-22cm X W-20cm X H-3cm"
  },
  {
    id: "H943",
    name: "3 in 1 Deluxe Set",
    category: "Premium Gift Combo",
    description: "Deluxe gift combo with premium diary, pen, and keychain",
    image: "/Premium_Gift_Combo_3_in_1_04.webp",
    specifications: "Deluxe packaging with premium finish",
    size: "L-23cm X W-21cm X H-4cm"
  },
  {
    id: "H944",
    name: "3 in 1 Premium Set",
    category: "Premium Gift Combo",
    description: "Premium gift set with high-quality diary, pen, and keychain",
    image: "/Premium_Gift_Combo_3_in_1_05.webp",
    specifications: "Premium quality materials, elegant presentation",
    size: "L-24cm X W-22cm X H-4cm"
  },

  // Premium Gift Combo - 2 in 1
  
  {
    id: "H923",
    name: "2 in 1 Professional Set",
    category: "Premium Gift Combo",
    description: "Professional gift combo with A5 diary and metal pen",
    image: "/Premium_Gift_Combo_2_in_1_01.webp",
    specifications: "Sleek packaging with pen clip attachment",
    size: "L-22.5cm X W-15cm"
  },
  {
    id: "H924",
    name: "2 in 1 Classic Set",
    category: "Premium Gift Combo",
    description: "Classic combination of A5 diary with matching metal pen",
    image: "/Premium_Gift_Combo_2_in_1_03.webp",
    specifications: "Traditional design with modern functionality",
    size: "L-22.5cm X W-15cm"
  },

  // Office Diaries
  {
    id: "H1079",
    name: "Office Planner Diary With Documents Holder",
    category: "Office Diaries",
    description: "Documents Holder You can Keep Aadhar Card, Pan Card, ATM Card, ID Card, Envelope, Letter, Cheque and Many More",
    image: "/Office_Diaries.jpeg",
    specifications: "Diary Type: Planner Diary, Cover Material: PU Leather, Inside Pages: 200 nos., Diary Pages Thickness: 100 GSM",
    size: "H-23.2cm X W-17.5cm"
  },
  {
    id: "H1049",
    name: "Office Planner Diary with Mobile Holder & Documents Holder",
    category: "Office Diaries",
    description: "Documents Holder You can Keep Aadhar Card, Pan Card, ATM Card, ID Card, Envelope, Letter, Cheques and Many More",
    image: "/Office_Diaries_01.jpeg",
    specifications: "Diary Type: Planner Diary, Cover Material: PU Leather, Inside Pages: 200 nos., Diary Pages Thickness: 100 GSM",
    size: "H-23.3cm X W-17cm"
  },
  {
    id: "H1075",
    name: "Office Planner Diary With Documents Holder",
    category: "Office Diaries",
    description: "Documents Holder You can Keep Aadhar Card, Pan Card, ATM Card, ID Card, Envelope, Letter, Cheques and Many More",
    image: "/Office_Diaries_02.jpeg",
    specifications: "Diary Type: Planner Diary, Cover Material: PU Leather, Inside Pages: 200 nos., Diary Pages Thickness: 100 GSM",
    size: "H-23.5 cm X W-17cm"
  },
  {
    id: "H1052",
    name: "A5 Size Office Notebook Diary",
    category: "Office Diaries",
    description: "Office Notebook Diary",
    image: "/Office_Diaries_03.webp",
    specifications: "Diary Type: Office Notebook Diary, Cover Material: PU Leather, Inside Pages: 232 nos., Diary Pages Thickness: 80GSM",
    size: "H-21.2cm X W-14.7cm"
  },
  {
    id: "H1006",
    name: "A5 Size Wooden Cover Office Notebook Diary",
    category: "Office Diaries",
    description: "Wooden Cover Notebook Diary",
    image: "/Office_Diaries_04.jpeg",
    specifications: "Diary Type: Notebook Diary, Cover Material: Wooden Cover, Inside Pages: 232 nos., Diary Pages Thickness: 80GSM",
    size: "H-22.5cm X W-15cm"
  },
  {
    id: "H1007",
    name: "Premium Office Diary",
    category: "Office Diaries",
    description: "Premium quality office diary with leather finish",
    image: "/Office_Diaries_05.jpeg",
    specifications: "Diary Type: Office Diary, Cover Material: PU Leather, Inside Pages: 200 nos.",
    size: "H-22cm X W-16cm"
  },
  {
    id: "H1008",
    name: "Executive Office Diary",
    category: "Office Diaries",
    description: "Executive diary with document holder",
    image: "/Office_Diaries_06.jpeg",
    specifications: "Diary Type: Executive Diary, Cover Material: Premium Leather, Inside Pages: 200 nos.",
    size: "H-23cm X W-17cm"
  },
  {
    id: "H1009",
    name: "Professional Office Diary",
    category: "Office Diaries",
    description: "Professional diary with pen holder",
    image: "/Office_Diaries_07.jpeg",
    specifications: "Diary Type: Professional Diary, Cover Material: PU Leather, Inside Pages: 200 nos.",
    size: "H-22.5cm X W-16.5cm"
  },
  {
    id: "H1010",
    name: "Classic Office Diary",
    category: "Office Diaries",
    description: "Classic design office diary",
    image: "/Office_Diaries_08.jpeg",
    specifications: "Diary Type: Classic Diary, Cover Material: PU Leather, Inside Pages: 200 nos.",
    size: "H-23cm X W-17cm"
  },
  {
    id: "H1011",
    name: "Modern Office Diary",
    category: "Office Diaries",
    description: "Modern style office diary",
    image: "/Office_Diaries_09.jpeg",
    specifications: "Diary Type: Modern Diary, Cover Material: PU Leather, Inside Pages: 200 nos.",
    size: "H-22cm X W-16cm"
  },
  {
    id: "H1012",
    name: "Corporate Office Diary",
    category: "Office Diaries",
    description: "Corporate office diary with branding space",
    image: "/Office_Diaries_10.jpeg",
    specifications: "Diary Type: Corporate Diary, Cover Material: PU Leather, Inside Pages: 200 nos.",
    size: "H-23.5cm X W-17.5cm"
  },

  // Eco-Diaries
  {
    id: "H2001",
    name: "Eco-Friendly Diary",
    category: "Eco-Diaries",
    description: "Sustainable eco-friendly diary with recycled paper",
    image: "/Eco_Diaries.webp",
    specifications: "Diary Type: Eco Diary, Cover Material: Recycled Materials, Inside Pages: 200 nos., Paper: Recycled Paper",
    size: "H-21cm X W-15cm"
  },
  {
    id: "H2002",
    name: "Green Eco Diary",
    category: "Eco-Diaries",
    description: "Environmentally friendly diary with green cover",
    image: "/Eco_Diaries_01.jpeg",
    specifications: "Diary Type: Eco Diary, Cover Material: Recycled Materials, Inside Pages: 200 nos.",
    size: "H-22cm X W-16cm"
  },
  {
    id: "H2003",
    name: "Sustainable Eco Diary",
    category: "Eco-Diaries",
    description: "Sustainable diary with bamboo cover",
    image: "/Eco_Diaries_02.jpeg",
    specifications: "Diary Type: Eco Diary, Cover Material: Bamboo, Inside Pages: 200 nos.",
    size: "H-21.5cm X W-15.5cm"
  },
  {
    id: "H2004",
    name: "Organic Eco Diary",
    category: "Eco-Diaries",
    description: "Organic materials eco diary",
    image: "/Eco_Diaries_03.jpeg",
    specifications: "Diary Type: Eco Diary, Cover Material: Organic Materials, Inside Pages: 200 nos.",
    size: "H-22cm X W-16cm"
  },
  {
    id: "H2005",
    name: "Recycled Paper Diary",
    category: "Eco-Diaries",
    description: "Diary made from 100% recycled paper",
    image: "/Eco_Diaries_02.jpeg",
    specifications: "Diary Type: Eco Diary, Cover Material: Recycled Materials, Inside Pages: 200 nos., Paper: 100% Recycled",
    size: "H-21cm X W-15cm"
  },

  // Ball Pens
  {
    id: "H3001",
    name: "Premium Metal Ball Pen",
    category: "Ball Pens",
    description: "Sleek metal ball pen with smooth ink flow and professional finish",
    image: "/Pen_01.jpeg",
    specifications: "Pen Type: Ball Pen, Material: Metal Body, Ink Color: Blue/Black, Refillable: Yes",
    size: "L-14cm X D-1cm"
  },
  {
    id: "H3002",
    name: "Executive Twist Pen",
    category: "Ball Pens",
    description: "Executive twist-action ball pen with premium metal construction",
    image: "/Pen_02.jpeg",
    specifications: "Pen Type: Twist Ball Pen, Material: Metal, Ink Color: Blue/Black, Grip: Comfort",
    size: "L-14.5cm X D-1.2cm"
  },
  {
    id: "H3003",
    name: "Professional Gel Pen",
    category: "Ball Pens",
    description: "Professional gel pen with ergonomic grip and smooth writing",
    image: "/Pen_03.jpeg",
    specifications: "Pen Type: Gel Pen, Material: Metal, Ink Color: Blue/Black, Grip: Rubber",
    size: "L-14cm X D-1cm"
  },
  {
    id: "H3004",
    name: "Classic Ballpoint Pen",
    category: "Ball Pens",
    description: "Classic design ballpoint pen with reliable performance",
    image: "/Pen_04.jpeg",
    specifications: "Pen Type: Ballpoint, Material: Metal, Ink Color: Blue/Black, Style: Classic",
    size: "L-13.5cm X D-1cm"
  },
  {
    id: "H3005",
    name: "Modern Stylish Pen",
    category: "Ball Pens",
    description: "Modern stylish pen with contemporary design and smooth writing",
    image: "/Pen_05.jpeg",
    specifications: "Pen Type: Ball Pen, Material: Metal, Ink Color: Blue/Black, Design: Modern",
    size: "L-14cm X D-1.1cm"
  },
  {
    id: "H3006",
    name: "Deluxe Metal Pen",
    category: "Ball Pens",
    description: "Deluxe metal pen with premium finish and comfortable grip",
    image: "/Pen_06.jpeg",
    specifications: "Pen Type: Ball Pen, Material: Metal, Ink Color: Blue/Black, Finish: Deluxe",
    size: "L-14.5cm X D-1.2cm"
  },
  {
    id: "H3007",
    name: "Elegant Stylish Pen",
    category: "Ball Pens",
    description: "Elegant stylish pen with sophisticated design and smooth writing",
    image: "/Pen_07.jpeg",
    specifications: "Pen Type: Ball Pen, Material: Metal, Ink Color: Blue/Black, Design: Elegant",
    size: "L-14cm X D-1cm"
  },
  {
    id: "H3008",
    name: "Corporate Branded Pen",
    category: "Ball Pens",
    description: "Corporate pen with customizable branding space and professional look",
    image: "/Pen_08.jpeg",
    specifications: "Pen Type: Ball Pen, Material: Metal, Ink Color: Blue/Black, Branding: Customizable",
    size: "L-14cm X D-1cm"
  },
  {
    id: "H3009",
    name: "Business Executive Pen",
    category: "Ball Pens",
    description: "Business executive pen designed for professional use and corporate gifts",
    image: "/Pen_09.jpeg",
    specifications: "Pen Type: Ball Pen, Material: Metal, Ink Color: Blue/Black, Use: Business",
    size: "L-14.5cm X D-1.1cm"
  },
  {
    id: "H3010",
    name: "Luxury Metal Ball Pen",
    category: "Ball Pens",
    description: "Luxury metal ball pen with premium finish and exceptional writing experience",
    image: "/Pen_10.jpeg",
    specifications: "Pen Type: Ball Pen, Material: Premium Metal, Ink Color: Blue/Black, Quality: Luxury",
    size: "L-15cm X D-1.2cm"
  },

  // Keychains
  {
    id: "H4001",
    name: "Premium Metal Keychain",
    category: "Keychains",
    description: "Durable metal keychain with customizable logo engraving space",
    image: "/Key_Chains_01.jpeg",
    specifications: "Material: Premium Metal, Finish: Polished, Customization: Logo Engraving",
    size: "L-5cm X W-3cm"
  },
  {
    id: "H4002",
    name: "Executive Metal Keychain",
    category: "Keychains",
    description: "Executive style metal keychain with professional finish and branding area",
    image: "/Key_Chains_02.jpeg",
    specifications: "Material: Stainless Steel, Finish: Matte, Customization: Logo/Text",
    size: "L-6cm X W-3.5cm"
  },
  {
    id: "H4003",
    name: "Corporate Gift Keychain",
    category: "Keychains",
    description: "Corporate gift keychain with premium metal construction and elegant design",
    image: "/Key_Chains_03.jpeg",
    specifications: "Material: Zinc Alloy, Finish: Chrome, Customization: Company Logo",
    size: "L-5.5cm X W-3cm"
  },
  {
    id: "H4004",
    name: "Classic Round Keychain",
    category: "Keychains",
    description: "Classic round metal keychain with traditional design and durable build",
    image: "/Key_Chains_04.jpeg",
    specifications: "Material: Brass, Finish: Antique, Customization: Engraving",
    size: "L-5cm X W-3cm"
  },
  {
    id: "H4005",
    name: "Modern Rectangle Keychain",
    category: "Keychains",
    description: "Modern rectangular keychain with sleek design and contemporary styling",
    image: "/Key_Chains_05.jpeg",
    specifications: "Material: Aluminum, Finish: Brushed, Customization: Laser Engraving",
    size: "L-6cm X W-3.5cm"
  },
  {
    id: "H4006",
    name: "Luxury Gift Keychain",
    category: "Keychains",
    description: "Luxury keychain with premium metal finish and sophisticated design",
    image: "/Key_Chains_06.jpeg",
    specifications: "Material: Titanium Finish, Finish: Polished, Customization: Premium Engraving",
    size: "L-5.5cm X W-3cm"
  },
  {
    id: "H4007",
    name: "Elegant Designer Keychain",
    category: "Keychains",
    description: "Elegant designer keychain with unique styling and premium materials",
    image: "/Key_Chains_07.jpeg",
    specifications: "Material: Designer Metal, Finish: Elegant, Customization: Custom Design",
    size: "L-5cm X W-3cm"
  },

  // Water Bottles
  {
    id: "H5001",
    name: "Premium Stainless Steel Bottle",
    category: "Water Bottle",
    description: "Premium grade stainless steel water bottle with double-wall insulation",
    image: "/Bottle_01.jpeg",
    specifications: "Material: 304 Stainless Steel, Capacity: 750ml, Insulation: Double Wall Vacuum",
    size: "H-25cm X D-7cm",
    featured: true
  },
  {
    id: "H5002",
    name: "Sports Fitness Bottle",
    category: "Water Bottle",
    description: "Sports fitness bottle with leak-proof cap and carrying strap",
    image: "/Bottle_02.jpeg",
    specifications: "Material: Stainless Steel, Capacity: 500ml, Features: Leak-proof, Sports Cap",
    size: "H-22cm X D-6.5cm"
  },
  {
    id: "H5003",
    name: "Executive Business Bottle",
    category: "Water Bottle",
    description: "Executive business water bottle with premium finish and professional look",
    image: "/Bottle_03.jpeg",
    specifications: "Material: Stainless Steel, Capacity: 1000ml, Features: Premium Finish, Business Class",
    size: "H-28cm X D-7.5cm"
  },
  {
    id: "H5004",
    name: "Classic Water Bottle",
    category: "Water Bottle",
    description: "Classic design water bottle",
    image: "/Bottle_04.jpeg",
    specifications: "Material: Stainless Steel, Capacity: 750ml, Features: Classic Design",
    size: "H-25cm X D-7cm"
  },
  {
    id: "H5005",
    name: "Modern Water Bottle",
    category: "Water Bottle",
    description: "Modern style water bottle with sleek design",
    image: "/Bottle_05.jpeg",
    specifications: "Material: Stainless Steel, Capacity: 600ml, Features: Modern Design",
    size: "H-24cm X D-6.5cm"
  },
  {
    id: "H5006",
    name: "Deluxe Water Bottle",
    category: "Water Bottle",
    description: "Deluxe water bottle with premium features",
    image: "/Bottle_06.jpeg",
    specifications: "Material: Stainless Steel, Capacity: 800ml, Features: Premium",
    size: "H-26cm X D-7cm"
  },
  {
    id: "H5007",
    name: "Corporate Water Bottle",
    category: "Water Bottle",
    description: "Corporate water bottle with branding space",
    image: "/Bottle_07.jpeg",
    specifications: "Material: Stainless Steel, Capacity: 750ml, Features: Branding Space",
    size: "H-25cm X D-7cm"
  },
  {
    id: "H5008",
    name: "Professional Water Bottle",
    category: "Water Bottle",
    description: "Professional water bottle for office use",
    image: "/Bottle_08.jpeg",
    specifications: "Material: Stainless Steel, Capacity: 700ml, Features: Professional",
    size: "H-24.5cm X D-6.8cm"
  },
  {
    id: "H5009",
    name: "Compact Water Bottle",
    category: "Water Bottle",
    description: "Compact size water bottle for travel",
    image: "/Bottle_09.webp",
    specifications: "Material: Stainless Steel, Capacity: 350ml, Features: Compact",
    size: "H-18cm X D-5.5cm"
  },
  {
    id: "H5010",
    name: "Large Water Bottle",
    category: "Water Bottle",
    description: "Large capacity water bottle for long use",
    image: "/Bottle_10.webp",
    specifications: "Material: Stainless Steel, Capacity: 1500ml, Features: Large Capacity",
    size: "H-32cm X D-8cm"
  },
  {
    id: "H5011",
    name: "Mini Water Bottle",
    category: "Water Bottle",
    description: "Mini size water bottle for kids and short use",
    image: "/Bottle_11.webp",
    specifications: "Material: Stainless Steel, Capacity: 250ml, Features: Mini Size",
    size: "H-15cm X D-5cm"
  },

  // Mix Products (placeholder items for other categories)
  {
    id: "H6001",
    name: "Travel Laptop Bag",
    category: "Travel/Laptop Bag",
    description: "Premium laptop bag for travel and office use",
    image: "/Laptop_bags_01.jpeg",
    specifications: "Material: Premium Fabric, Laptop Compartment: 15.6 inch",
    size: "L-40cm X W-30cm X H-10cm"
  },
  {
    id: "H6002",
    name: "Executive Laptop Bag",
    category: "Travel/Laptop Bag",
    description: "Executive style laptop bag with multiple compartments",
    image: "/Laptop_bags_02.jpeg",
    specifications: "Material: Premium Leather, Laptop Compartment: 15.6 inch",
    size: "L-42cm X W-32cm X H-12cm"
  },
  {
    id: "H6003",
    name: "Business Laptop Bag",
    category: "Travel/Laptop Bag",
    description: "Business laptop bag with professional design",
    image: "/Laptop_bags_03.jpeg",
    specifications: "Material: Premium Fabric, Laptop Compartment: 15.6 inch",
    size: "L-40cm X W-30cm X H-10cm"
  },
  {
    id: "H6004",
    name: "Modern Laptop Bag",
    category: "Travel/Laptop Bag",
    description: "Modern style laptop bag with sleek design",
    image: "/Laptop_bags_04.jpeg",
    specifications: "Material: Premium Fabric, Laptop Compartment: 15.6 inch",
    size: "L-38cm X W-28cm X H-8cm"
  },
  {
    id: "H6005",
    name: "Compact Laptop Bag",
    category: "Travel/Laptop Bag",
    description: "Compact laptop bag for daily commute",
    image: "/Laptop_bags_05.jpeg",
    specifications: "Material: Premium Fabric, Laptop Compartment: 14 inch",
    size: "L-35cm X W-25cm X H-8cm"
  },
  // General Bags Category
  {
    id: "B7001",
    name: "Corporate Messenger Bag",
    category: "Bags",
    description: "Professional messenger bag for corporate executives",
    image: "/Bags_04.jpg",
    specifications: "Material: Premium Leather, Multiple Compartments",
    size: "L-40cm X W-30cm X H-10cm",
    featured: true
  },
  {
    id: "B7002",
    name: "Business Backpack",
    category: "Bags",
    description: "Stylish business backpack with laptop sleeve",
    image: "/Bags_05.jpg",
    specifications: "Material: Water-resistant Fabric, Laptop Sleeve: 15.6 inch",
    size: "L-45cm X W-32cm X H-15cm"
  },
  {
    id: "B7003",
    name: "Executive Travel Bag",
    category: "Bags",
    description: "Luxury travel bag for business trips",
    image: "/Bags_06.jpg",
    specifications: "Material: Premium Canvas, Multiple Pockets",
    size: "L-50cm X W-35cm X H-20cm"
  },
  {
    id: "B7004",
    name: "Professional Briefcase",
    category: "Bags",
    description: "Classic briefcase with modern features",
    image: "/Bags_07.jpg",
    specifications: "Material: Genuine Leather, Lockable Compartments",
    size: "L-42cm X W-28cm X H-12cm"
  },
  {
    id: "B7005",
    name: "Casual Business Bag",
    category: "Bags",
    description: "Versatile bag for casual and business use",
    image: "/Bags_08.jpg",
    specifications: "Material: Premium Fabric, Adjustable Strap",
    size: "L-38cm X W-25cm X H-18cm"
  },
  {
    id: "B7006",
    name: "Luxury Handbag",
    category: "Bags",
    description: "Elegant handbag for corporate professionals",
    image: "/Bags_09.jpg",
    specifications: "Material: Premium Leather, Gold Hardware",
    size: "L-30cm X W-20cm X H-15cm"
  },
  {
    id: "B7007",
    name: "Corporate Tote Bag",
    category: "Bags",
    description: "Spacious tote bag for office essentials",
    image: "/Bags_10.jpg",
    specifications: "Material: Durable Canvas, Inner Pocket",
    size: "L-35cm X W-25cm X H-20cm"
  },
  {
    id: "B7008",
    name: "Designer Crossbody Bag",
    category: "Bags",
    description: "Stylish crossbody bag for daily use",
    image: "/Bags_12.jpg",
    specifications: "Material: Synthetic Leather, Adjustable Strap",
    size: "L-28cm X W-22cm X H-8cm"
  },
  {
    id: "B7009",
    name: "Executive Portfolio Bag",
    category: "Bags",
    description: "Professional portfolio bag for meetings",
    image: "/Bags_13.jpg",
    specifications: "Material: Premium Fabric, Document Holder",
    size: "L-40cm X W-30cm X H-5cm"
  },
  {
    id: "B7010",
    name: "Business Travel Duffel",
    category: "Bags",
    description: "Compact duffel bag for short business trips",
    image: "/Bags_14.jpg",
    specifications: "Material: Water-resistant Nylon, Side Pockets",
    size: "L-45cm X W-25cm X H-25cm"
  },
  // College/Corporate Tshirts Category
  {
    id: "T8001",
    name: "Corporate Polo T-Shirt",
    category: "College/Corporate Tshirts",
    description: "Premium polo shirt for corporate professionals",
    image: "/T-shirt_01.jpg",
    specifications: "Material: Cotton Blend, Collar Style: Polo",
    size: "S, M, L, XL, XXL",
    colors: ["White", "Black", "Navy Blue", "Royal Blue"],
    featured: true
  },
  {
    id: "T8002",
    name: "Executive Round Neck T-Shirt",
    category: "College/Corporate Tshirts",
    description: "Comfortable round neck t-shirt for office wear",
    image: "/T-shirt_02.jpg",
    specifications: "Material: 100% Cotton, Fit: Regular",
    size: "S, M, L, XL, XXL",
    colors: ["White", "Black", "Gray", "Navy"]
  },
  {
    id: "T8003",
    name: "Corporate Collared T-Shirt",
    category: "College/Corporate Tshirts",
    description: "Professional collared t-shirt with company logo space",
    image: "/T-shirt_03.jpg",
    specifications: "Material: Polyester Blend, Collar: Button-down",
    size: "S, M, L, XL, XXL",
    colors: ["White", "Light Blue", "Pink", "Yellow"]
  },
  {
    id: "T8004",
    name: "Business V-Neck T-Shirt",
    category: "College/Corporate Tshirts",
    description: "Elegant v-neck t-shirt for business casual",
    image: "/T-shirt_04.jpg",
    specifications: "Material: Cotton Elastane, Neck: V-Shape",
    size: "S, M, L, XL, XXL",
    colors: ["Black", "White", "Navy", "Gray"]
  },
  {
    id: "T8005",
    name: "Corporate Sports T-Shirt",
    category: "College/Corporate Tshirts",
    description: "Athletic fit t-shirt for corporate events",
    image: "/T-shirt_05.jpg",
    specifications: "Material: Dry-Fit Fabric, Fit: Athletic",
    size: "S, M, L, XL, XXL",
    colors: ["Red", "Blue", "Green", "Black"]
  },
  {
    id: "T8006",
    name: "Premium Corporate T-Shirt",
    category: "College/Corporate Tshirts",
    description: "High-quality t-shirt for executive meetings",
    image: "/T-shirt_06.jpg",
    specifications: "Material: Premium Cotton, Finish: Anti-wrinkle",
    size: "S, M, L, XL, XXL",
    colors: ["White", "Black", "Navy Blue"]
  },
  {
    id: "T8007",
    name: "College Branded T-Shirt",
    category: "College/Corporate Tshirts",
    description: "Perfect t-shirt for college events and branding",
    image: "/T-shirt_07.jpg",
    specifications: "Material: Cotton Polyester, Print Area: Large",
    size: "S, M, L, XL, XXL",
    colors: ["White", "Black", "Red", "Blue"]
  },
  {
    id: "T8008",
    name: "Corporate Henley T-Shirt",
    category: "College/Corporate Tshirts",
    description: "Stylish henley t-shirt for corporate casual",
    image: "/T-shirt_08.jpg",
    specifications: "Material: Cotton Blend, Buttons: 3-Button Placket",
    size: "S, M, L, XL, XXL",
    colors: ["Gray", "Navy", "White", "Black"]
  },
  {
    id: "T8009",
    name: "Executive Pique T-Shirt",
    category: "College/Corporate Tshirts",
    description: "Luxury pique t-shirt for senior executives",
    image: "/T-shirt_09.jpg",
    specifications: "Material: Pique Cotton, Texture: Woven",
    size: "S, M, L, XL, XXL",
    colors: ["White", "Navy", "Black", "Burgundy"]
  },
  {
    id: "T8010",
    name: "Corporate Team T-Shirt",
    category: "College/Corporate Tshirts",
    description: "Team t-shirt perfect for corporate team building",
    image: "/T-shirt_10.jpg",
    specifications: "Material: Quick-Dry Fabric, Logo Space: Front & Back",
    size: "S, M, L, XL, XXL",
    colors: ["Various Colors Available"]
  },
  {
    id: "T8011",
    name: "Business Casual T-Shirt",
    category: "College/Corporate Tshirts",
    description: "Versatile t-shirt for business casual environments",
    image: "/T-shirt_11.jpg",
    specifications: "Material: Soft Cotton, Fit: Slim",
    size: "S, M, L, XL, XXL",
    colors: ["White", "Light Gray", "Blue", "Black"]
  },
  {
    id: "T8012",
    name: "Premium Corporate Polo",
    category: "College/Corporate Tshirts",
    description: "Premium polo shirt for high-end corporate branding",
    image: "/T-shirt_12.jpg",
    specifications: "Material: Egyptian Cotton, Embroidery Ready",
    size: "S, M, L, XL, XXL",
    colors: ["White", "Navy", "Black", "Forest Green"]
  },
  {
    id: "H6006",
    name: "Travel Organizer Bag",
    category: "Travel Organizer Bag",
    description: "Multi-pocket travel organizer bag",
    image: "/Travel_bags_01.jpeg",
    specifications: "Material: Nylon, Compartments: Multiple",
    size: "L-25cm X W-20cm X H-8cm"
  },
  {
    id: "H6007",
    name: "Premium Travel Organizer",
    category: "Travel Organizer Bag",
    description: "Premium travel organizer with dedicated compartments",
    image: "/Travel_bags_02.jpeg",
    specifications: "Material: Premium Fabric, Compartments: Multiple",
    size: "L-28cm X W-22cm X H-10cm"
  },
  {
    id: "H6008",
    name: "Business Travel Organizer",
    category: "Travel Organizer Bag",
    description: "Business travel organizer for professionals",
    image: "/Travel_bags_03.jpeg",
    specifications: "Material: Premium Leather, Compartments: Multiple",
    size: "L-26cm X W-20cm X H-9cm"
  },
  {
    id: "H6009",
    name: "Compact Travel Organizer",
    category: "Travel Organizer Bag",
    description: "Compact travel organizer for essentials",
    image: "/Travel_bags_04.jpeg",
    specifications: "Material: Nylon, Compartments: Essential",
    size: "L-22cm X W-18cm X H-7cm"
  },
  {
    id: "H6010",
    name: "Lightweight Travel Organizer",
    category: "Travel Organizer Bag",
    description: "Lightweight travel organizer for easy carrying",
    image: "/Travel_bags_05.jpeg",
    specifications: "Material: Lightweight Fabric, Compartments: Basic",
    size: "L-20cm X W-16cm X H-6cm"
  },
  {
    id: "H6011",
    name: "Mini Travel Organizer",
    category: "Travel Organizer Bag",
    description: "Mini travel organizer for quick trips",
    image: "/Travel_bags_06.jpeg",
    specifications: "Material: Compact Fabric, Compartments: Minimal",
    size: "L-18cm X W-14cm X H-5cm"
  },
  {
    id: "H6012",
    name: "Premium Tea-Coffee Mug",
    category: "Tea-Coffee Mugs",
    description: "Premium ceramic mug for tea and coffee",
    image: "/Tea-Coffee_Mug_01.jpeg",
    specifications: "Material: Ceramic, Capacity: 350ml",
    size: "H-10cm X D-8cm"
  },
  {
    id: "H6013",
    name: "Executive Tea-Coffee Mug",
    category: "Tea-Coffee Mugs",
    description: "Executive style mug with premium finish",
    image: "/Tea-Coffee_Mug_02.jpeg",
    specifications: "Material: Ceramic, Capacity: 400ml",
    size: "H-11cm X D-8.5cm"
  },
  {
    id: "H6014",
    name: "Classic Tea-Coffee Mug",
    category: "Tea-Coffee Mugs",
    description: "Classic design ceramic mug",
    image: "/Tea-Coffee_Mug_03.jpeg",
    specifications: "Material: Ceramic, Capacity: 350ml",
    size: "H-10cm X D-8cm"
  },
  {
    id: "H6015",
    name: "Modern Tea-Coffee Mug",
    category: "Tea-Coffee Mugs",
    description: "Modern style mug with sleek design",
    image: "/Tea-Coffee_Mug_04.jpeg",
    specifications: "Material: Ceramic, Capacity: 450ml",
    size: "H-12cm X D-9cm"
  },
  {
    id: "H6016",
    name: "Corporate Tea-Coffee Mug",
    category: "Tea-Coffee Mugs",
    description: "Corporate mug with branding space",
    image: "/Tea-Coffee_Mug_05.jpeg",
    specifications: "Material: Ceramic, Capacity: 400ml",
    size: "H-11cm X D-8.5cm"
  },
  {
    id: "H6017",
    name: "Compact Tea-Coffee Mug",
    category: "Tea-Coffee Mugs",
    description: "Compact mug for personal use",
    image: "/Tea-Coffee_Mug_06.jpeg",
    specifications: "Material: Ceramic, Capacity: 250ml",
    size: "H-8cm X D-6cm"
  },
  {
    id: "H6018",
    name: "Adjustable Laptop Stand",
    category: "Laptop/Mobile Stand",
    description: "Adjustable laptop stand for ergonomic use",
    image: "/Stand_01.jpeg",
    specifications: "Material: Aluminum, Adjustable: Yes",
    size: "L-25cm X W-20cm X H-15cm"
  },
  {
    id: "H6019",
    name: "Portable Laptop Stand",
    category: "Laptop/Mobile Stand",
    description: "Portable laptop stand for mobile use",
    image: "/Stand_02.jpeg",
    specifications: "Material: Aluminum, Portable: Yes",
    size: "L-23cm X W-18cm X H-12cm"
  },
  {
    id: "H6020",
    name: "Foldable Laptop Stand",
    category: "Laptop/Mobile Stand",
    description: "Foldable laptop stand for easy storage",
    image: "/Stand_03.jpeg",
    specifications: "Material: Aluminum, Foldable: Yes",
    size: "L-24cm X W-19cm X H-13cm"
  },
  {
    id: "H6021",
    name: "Ergonomic Laptop Stand",
    category: "Laptop/Mobile Stand",
    description: "Ergonomic laptop stand for comfort",
    image: "/Stand_04.jpeg",
    specifications: "Material: Aluminum, Ergonomic: Yes",
    size: "L-26cm X W-21cm X H-14cm"
  },
  {
    id: "H6022",
    name: "Desktop Laptop Stand",
    category: "Laptop/Mobile Stand",
    description: "Desktop laptop stand for office use",
    image: "/Stand_05.jpeg",
    specifications: "Material: Aluminum, Desktop: Yes",
    size: "L-25cm X W-20cm X H-15cm"
  },
  {
    id: "H6023",
    name: "High-Speed USB Pendrive",
    category: "USB Pendrive",
    description: "High-speed USB pendrive for data storage",
    image: "/USB_Pendrive_01.webp",
    specifications: "Capacity: 32GB, USB Version: 3.0",
    size: "L-5cm X W-2cm X H-0.8cm"
  },
  {
    id: "H6024",
    name: "Premium USB Pendrive",
    category: "USB Pendrive",
    description: "Premium USB pendrive with metal body",
    image: "/USB_Pendrive_02.webp",
    specifications: "Capacity: 64GB, USB Version: 3.0",
    size: "L-5.5cm X W-2.2cm X H-0.9cm"
  },
  {
    id: "H6025",
    name: "Professional USB Pendrive",
    category: "USB Pendrive",
    description: "Professional USB pendrive for business use",
    image: "/USB_Pendrive_03.jpeg",
    specifications: "Capacity: 128GB, USB Version: 3.0",
    size: "L-6cm X W-2.5cm X H-1cm"
  },
  {
    id: "H6026",
    name: "Compact USB Pendrive",
    category: "USB Pendrive",
    description: "Compact USB pendrive for portability",
    image: "/USB_Pendrive_04.jpeg",
    specifications: "Capacity: 16GB, USB Version: 3.0",
    size: "L-4cm X W-1.8cm X H-0.7cm"
  },
  {
    id: "H6027",
    name: "Stylish USB Pendrive",
    category: "USB Pendrive",
    description: "Stylish USB pendrive with modern design",
    image: "/USB_Pendrive_05.jpeg",
    specifications: "Capacity: 64GB, USB Version: 3.0",
    size: "L-5.2cm X W-2.1cm X H-0.8cm"
  },
  {
    id: "H6028",
    name: "Corporate Gift Set",
    category: "Mix Products",
    description: "Complete corporate gift set with multiple items",
    image: "/Multi_Products_01.jpeg",
    specifications: "Items: Multiple, Packaging: Premium Box",
    size: "L-30cm X W-25cm X H-10cm"
  },
  {
    id: "H6029",
    name: "Executive Gift Bundle",
    category: "Mix Products",
    description: "Executive gift bundle with luxury items",
    image: "/Multi_Products_02.jpeg",
    specifications: "Items: Executive, Packaging: Premium Box",
    size: "L-32cm X W-28cm X H-12cm"
  },
  {
    id: "H6030",
    name: "Professional Gift Set",
    category: "Mix Products",
    description: "Professional gift set for office use",
    image: "/Multi_Products_03.jpeg",
    specifications: "Items: Professional, Packaging: Standard Box",
    size: "L-25cm X W-20cm X H-8cm"
  },
  {
    id: "H6031",
    name: "Business Gift Collection",
    category: "Mix Products",
    description: "Business gift collection with essentials",
    image: "/Multi_Products_04.jpeg",
    specifications: "Items: Business, Packaging: Professional Box",
    size: "L-28cm X W-22cm X H-9cm"
  },
  {
    id: "H6032",
    name: "Premium Corporate Package",
    category: "Mix Products",
    description: "Premium corporate package with high-end items",
    image: "/Multi_Products_05.jpeg",
    specifications: "Items: Premium, Packaging: Luxury Box",
    size: "L-35cm X W-30cm X H-15cm"
  },
  {
    id: "H6033",
    name: "Deluxe Gift Bundle",
    category: "Mix Products",
    description: "Deluxe gift bundle with exclusive items",
    image: "/Multi_Products_06.jpeg",
    specifications: "Items: Deluxe, Packaging: Deluxe Box",
    size: "L-33cm X W-28cm X H-14cm"
  },
  {
    id: "H6034",
    name: "Luxury Gift Set",
    category: "Mix Products",
    description: "Luxury gift set with premium items",
    image: "/Multi_Products_07.jpeg",
    specifications: "Items: Luxury, Packaging: Luxury Box",
    size: "L-34cm X W-29cm X H-13cm"
  },
  {
    id: "H6035",
    name: "Exclusive Collection",
    category: "Mix Products",
    description: "Exclusive collection of corporate gifts",
    image: "/Multi_Products_08.jpeg",
    specifications: "Items: Exclusive, Packaging: Exclusive Box",
    size: "L-30cm X W-25cm X H-11cm"
  },
  // Hospital/Medical Products from Surya Traders Quotation

  {
    id: "ST001",
    name: "Patient Kurta Pajama",
    category: "Hospital Garments",
    description: "Patient wear kurta pajama for hospital use",
    image: "/man-gray-pajamas-comfy-sleepwear-apparel-full-body.jpg",
    specifications: "Material: Cotton Blend, Style: Patient Wear",
    size: "S, M, L, XL, XXL"
  },
  {
    id: "ST002",
    name: "Tafta Apron",
    category: "Hospital Garments",
    description: "Tafta fabric apron for hospital staff",
    image: "/portrait-smiling-young-woman-pointing-fingers-her-red-apron.jpg",
    specifications: "Material: Tafta Fabric, Style: Full Apron",
    size: "S, M, L, XL, XXL"
  },
  {
    id: "ST004",
    name: "Apron",
    category: "Hospital Garments",
    description: "General purpose apron for hospital use",
    image: "/freepik__apron-sturdy-cotton-bib-apron-with-front-pocket-st__78077.png",
    specifications: "Material: Cotton Blend, Style: Standard Apron",
    size: "S, M, L, XL, XXL"
  },
  {
    id: "ST005",
    name: "Kurta Pajama (Scrub)",
    category: "Hospital Garments",
    description: "Scrub style kurta pajama for medical staff",
    image: "/freepik__kurta-pajama-scrub-soft-wrinkleresistant-fabric-de__78078.png",
    specifications: "Material: Cotton Blend, Style: Scrub",
    size: "S, M, L, XL, XXL"
  },
  {
    id: "ST006",
    name: "Kurta Pajama Without Elastic (Staff)",
    category: "Hospital Garments",
    description: "Staff kurta pajama without elastic waistband",
    image: "/freepik__kurta-pajama-without-elastic-for-staff-flat-button__78080.png",
    specifications: "Material: Cotton Blend, Waist: Without Elastic",
    size: "S, M, L, XL, XXL"
  },
  {
    id: "ST007",
    name: "Baby Kit",
    category: "Hospital Garments",
    description: "Complete baby kit for newborns in hospital",
    image: "/freepik__baby-kit-including-knitted-beanie-organic-bib-sili__24818.png",
    specifications: "Material: Soft Cotton, Type: Newborn Kit",
    size: "Newborn, 0-3 Months"
  },
  {
    id: "ST008",
    name: "Staffline Designer Kurta Pajama",
    category: "Hospital Garments",
    description: "Designer kurta pajama for hospital staffline",
    image: "/freepik__staffline-designer-kurta-pajama-short-asymmetrical__24819.png",
    specifications: "Material: Premium Cotton, Style: Designer",
    size: "S, M, L, XL, XXL"
  },
  {
    id: "ST009",
    name: "Surgeon Gown Tafta",
    category: "Hospital Garments",
    description: "Surgeon gown made of tafta fabric",
    image: "/freepik__surgeon-gown-tafta-emerald-green-tafta-fabric-with__24820.png",
    specifications: "Material: Tafta Fabric, Style: Full Surgeon Gown",
    size: "S, M, L, XL, XXL"
  },
  {
    id: "ST010",
    name: "Surgeon Gown Plain",
    category: "Hospital Garments",
    description: "Plain surgeon gown for operation theatre",
    image: "/freepik__surgeon-gown-plain-light-blue-disposable-material-__32486.png",
    specifications: "Material: Cotton Blend, Style: Plain Surgeon Gown",
    size: "S, M, L, XL, XXL"
  },
  {
    id: "ST012",
    name: "Staff Kurta Pajama (Spun)",
    category: "Hospital Garments",
    description: "Spun fabric kurta pajama for hospital staff",
    image: "/freepik__staff-kurta-pajama-spun-in-ivory-cotton-tailored-f__32488.png",
    specifications: "Material: Spun Fabric, Style: Staff Wear",
    size: "S, M, L, XL, XXL"
  },
  {
    id: "ST013",
    name: "Staff Kurta Pajama (Designer)",
    category: "Hospital Garments",
    description: "Designer kurta pajama for hospital staff",
    image: "/freepik__staff-kurta-pajama-designer-tailored-ivory-kurta-w__32489.png",
    specifications: "Material: Premium Cotton, Style: Designer Staff Wear",
    size: "S, M, L, XL, XXL"
  },
  {
    id: "ST014",
    name: "Female Gown Patient",
    category: "Hospital Garments",
    description: "Patient gown specially designed for female patients",
    image: "/freepik__female-patient-in-a-flowing-white-gown-iv-line-on-__66052.png",
    specifications: "Material: Soft Cotton, Style: Female Patient Gown",
    size: "S, M, L, XL, XXL"
  },
  {
    id: "ST003",
    name: "Cut Sheet Plain",
    category: "Hospital Linen",
    description: "Plain cut sheet for hospital beds",
    image: "/freepik__cut-sheet-plain-clean-white-paper-layout-with-prec__32485.png",
    specifications: "Material: Cotton, Type: Plain",
    size: "Standard"
  },
  {
    id: "ST011",
    name: "Bed Sheet Sky Line",
    category: "Hospital Linen",
    description: "Sky line pattern bed sheet for hospital beds",
    image: "/freepik__bed-sheet-skyline-of-crumpled-white-sheets-forming__60344.png",
    specifications: "Material: Cotton, Pattern: Sky Line",
    size: "Single, Double"
  },
  {
    id: "ST015",
    name: "Plain Sheet",
    category: "Hospital Linen",
    description: "Plain white sheet for hospital use",
    image: "/freepik__plain-sheet-of-white-paper-crisp-edges-slight-pape__60345.png",
    specifications: "Material: Cotton, Type: Plain White",
    size: "Single, Double"
  },
  {
    id: "ST016",
    name: "Heavy Bed Sheet",
    category: "Hospital Linen",
    description: "Heavy duty bed sheet for hospital beds",
    image: "/freepik__heavy-bed-sheet-woolblend-blanket-in-muted-forest-__60346.png",
    specifications: "Material: Heavy Cotton, Type: Heavy Duty",
    size: "Single, Double"
  },
  {
    id: "ST017",
    name: "Blue Line Bed Sheet",
    category: "Hospital Linen",
    description: "Blue line striped bed sheet for hospital use",
    image: "/freepik__blue-line-bed-sheet-sateen-finish-with-bold-cobalt__60347.png",
    specifications: "Material: Cotton, Pattern: Blue Line Stripe",
    size: "Single, Double"
  },
  {
    id: "ST018",
    name: "Gorakhpur Bed Sheet",
    category: "Hospital Linen",
    description: "Gorakhpur style bed sheet for hospital use",
    image: "/freepik__gorakhpur-bed-sheet__66051.png",
    specifications: "Material: Cotton, Style: Gorakhpur Weave",
    size: "Single, Double"
  }

  
];

export const categories = [
  "All",
  "Premium Gift Combo",
  "Office Diaries",
  "Eco-Diaries",
  "Ball Pens",
  "Bags",
  "College/Corporate Tshirts",
  "Travel/Laptop Bag",
  "Travel Organizer Bag",
  "Keychains",
  "Water Bottle",
  "Tea-Coffee Mugs",
  "Laptop/Mobile Stand",
  "USB Pendrive",
  "Mix Products",
  "Hospital Garments",
  "Hospital Linen",
];
