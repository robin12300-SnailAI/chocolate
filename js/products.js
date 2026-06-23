// ============================================================
// Australia Workwear - Product Data
// Centralized product database for all pages
// ============================================================

const SITE_CONFIG = {
  name: "Australia Workwear",
  altName: "Ricky Workwear",
  phone: "0406669868",
  phoneRaw: "61406669868",
  email: "samne8161019@hotmail.com",
  address: "Shop No. 298-299, Parklea Market",
  street: "601 Sunnyholt Rd, Parklea Market NSW 2768",
  googleMapsLink: "https://maps.google.com/?q=601+Sunnyholt+Rd+Parklea+NSW+2768",
  description: "Sydney-based workwear and hi-vis safety clothing supplier for businesses across Australia.",
  keywords: "workwear Sydney, workwear supplier Sydney, hi vis workwear Sydney, safety workwear Australia, hi vis clothing Australia, bulk workwear orders"
};

// Image mapping: PDF page number → image file (p001=cover, p002=logo, p003=contents, p004+=products)
const IMG = {
  logo: "assets/img/products/p002_page2_0.jpeg",
  cover: "assets/img/products/p001_page1_0.png",
  // Product pages - each PDF page has ~2 products, using page image as shared reference
  p04: "assets/img/products/p004_page4_0.jpeg", // Work Shirts
  p05: "assets/img/products/p005_page5_0.jpeg", // Safety Shirts start
  p06: "assets/img/products/p006_page6_0.jpeg",
  p07: "assets/img/products/p007_page7_0.jpeg",
  p08: "assets/img/products/p008_page8_0.jpeg",
  p09: "assets/img/products/p009_page9_0.jpeg",
  p10: "assets/img/products/p010_page10_0.jpeg",
  p11: "assets/img/products/p011_page11_0.jpeg",
  p12: "assets/img/products/p012_page12_0.jpeg",
  p13: "assets/img/products/p013_page13_0.jpeg",
  p14: "assets/img/products/p014_page14_0.jpeg",
  p15: "assets/img/products/p015_page15_0.jpeg",
  p16: "assets/img/products/p016_page16_0.jpeg",
  p17: "assets/img/products/p017_page17_0.jpeg",
  p18: "assets/img/products/p018_page18_0.jpeg",
  p19: "assets/img/products/p019_page19_0.jpeg",
  p20: "assets/img/products/p020_page20_0.jpeg",
  p21: "assets/img/products/p021_page21_0.jpeg",
  p22: "assets/img/products/p022_page22_0.jpeg",
  p23: "assets/img/products/p023_page23_0.jpeg",
  p24: "assets/img/products/p024_page24_0.jpeg",
  p25: "assets/img/products/p025_page25_0.jpeg",
  p26: "assets/img/products/p026_page26_0.jpeg",
  p27: "assets/img/products/p027_page27_0.jpeg",
  p28: "assets/img/products/p028_page28_0.jpeg",
  p29: "assets/img/products/p029_page29_0.jpeg",
  p30: "assets/img/products/p030_page30_0.jpeg",
  p31: "assets/img/products/p031_page31_0.jpeg",
  p32: "assets/img/products/p032_page32_0.jpeg",
  p33: "assets/img/products/p033_page33_0.jpeg",
  p34: "assets/img/products/p034_page34_0.jpeg",
  p35: "assets/img/products/p035_page35_0.jpeg",
  p36: "assets/img/products/p036_page36_0.jpeg",
  p37: "assets/img/products/p037_page37_0.jpeg",
  p38: "assets/img/products/p038_page38_0.jpeg",
  p39: "assets/img/products/p039_page39_0.jpeg"
};

// ============================================================
// PRODUCT CATEGORIES
// ============================================================
const CATEGORIES = [
  { id: "workwear-shirts", name: "Workwear Shirts", slug: "workwear-shirts", desc: "Durable cotton drill work shirts for everyday industrial use.", img: IMG.p04 },
  { id: "safetywear-shirts", name: "Safetywear Shirts", slug: "safetywear-shirts", desc: "Hi-vis safety shirts with reflective tape options.", img: IMG.p05 },
  { id: "hi-vis-polos", name: "Hi-Vis & Work Polos", slug: "hi-vis-work-polos", desc: "Hi-vis polo shirts in short sleeve, long sleeve, cotton and polyester options.", img: IMG.p08 },
  { id: "hi-vis-singlet-tshirts", name: "Hi-Vis Singlet & T-Shirts", slug: "hi-vis-singlet-tshirts", desc: "Lightweight hi-vis singlets and t-shirts for warm conditions.", img: IMG.p16 },
  { id: "hi-vis-jumpers-hoodies", name: "Hi-Vis Jumpers & Hoodies", slug: "hi-vis-jumpers-hoodies", desc: "Fleecy hoodies and jumpers with hi-vis options including taped versions.", img: IMG.p17 },
  { id: "hi-vis-vests", name: "Hi-Vis Vests", slug: "hi-vis-vests", desc: "Hi-vis safety vests with 3M reflective tape and reversible options.", img: IMG.p21 },
  { id: "hi-vis-jackets", name: "Hi-Vis & Work Jackets", slug: "hi-vis-work-jackets", desc: "Work jackets from lightweight to fleecy lined, including bomber styles.", img: IMG.p23 },
  { id: "work-shorts", name: "Work Shorts", slug: "work-shorts", desc: "Cotton drill and stretch work shorts in multiple colours.", img: IMG.p27 },
  { id: "work-pants", name: "Work Pants", slug: "work-pants", desc: "Heavy-duty work pants with reinforced patches, stretch fabric, and taped options.", img: IMG.p31 }
];

// ============================================================
// ALL PRODUCTS - organized by category
// Each product maps to a PDF page image
// ============================================================
const PRODUCTS = {

  // ========== 1. WORKWEAR SHIRTS (PDF p04) ==========
  "workwear-shirts": [
    {
      id: "work-ss-drill-shirt-90119", code: "90119#", name: "Work S/S Drill Shirt", category: "Workwear Shirts", categorySlug: "workwear-shirts",
      fabric: "100% Cotton", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Navy"],
      img: IMG.p04, features: ["Short sleeve", "Cotton drill", "2 chest pockets"]
    },
    {
      id: "work-ls-drill-shirt-90118", code: "90118#", name: "Work L/S Drill Shirt", category: "Workwear Shirts", categorySlug: "workwear-shirts",
      fabric: "100% Cotton", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Navy"],
      img: IMG.p04, features: ["Long sleeve", "Cotton drill", "Button closure"]
    }
  ],

  // ========== 2. SAFETYWEAR SHIRTS (PDF p05-p09) ==========
  "safetywear-shirts": [
    {
      id: "hi-vis-ss-drill-shirt-90117", code: "90117#", name: "Hi Vis S/S Drill Shirt", category: "Safetywear Shirts", categorySlug: "safetywear-shirts",
      fabric: "100% Cotton", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p05, features: ["Two-tone hi-vis", "Short sleeve", "Cotton drill"]
    },
    {
      id: "hi-vis-ls-drill-shirt-90116", code: "90116#", name: "Hi Vis L/S Drill Shirt", category: "Safetywear Shirts", categorySlug: "safetywear-shirts",
      fabric: "100% Cotton", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p05, features: ["Two-tone hi-vis", "Long sleeve", "Cotton drill"]
    },
    {
      id: "taped-hi-vis-ss-drill-shirt-J0077", code: "J0077#", name: "Taped Hi Vis S/S Drill Shirt", category: "Safetywear Shirts", categorySlug: "safetywear-shirts",
      fabric: "100% Cotton", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p06, features: ["Reflective tape", "Short sleeve", "Hi-vis compliant"]
    },
    {
      id: "taped-hi-vis-ls-drill-shirt-J0078", code: "J0078#", name: "Taped Hi Vis L/S Drill Shirt", category: "Safetywear Shirts", categorySlug: "safetywear-shirts",
      fabric: "100% Cotton", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p06, features: ["Reflective tape", "Long sleeve", "Hi-vis compliant"]
    },
    {
      id: "road-worker-ls-drill-shirt-J0081", code: "J0081", name: "Road Worker L/S Drill Shirt X Back 3M Tape", category: "Safetywear Shirts", categorySlug: "safetywear-shirts",
      fabric: "100% Cotton", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["White"],
      img: IMG.p07, features: ["X-back 3M tape", "Road worker design", "Long sleeve"]
    },
    {
      id: "rail-worker-ls-drill-shirt-J0080", code: "J0080", name: "Rail Worker L/S Drill Shirt X Back 3M Tape", category: "Safetywear Shirts", categorySlug: "safetywear-shirts",
      fabric: "100% Cotton", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange"],
      img: IMG.p07, features: ["X-back 3M tape", "Rail worker design", "Long sleeve"]
    },
    {
      id: "ladies-taped-lightweight-ls-drill-shirt-J0076", code: "J0076", name: "Ladies Taped Lightweight L/S Drill Shirt", category: "Safetywear Shirts", categorySlug: "safetywear-shirts",
      fabric: "100% Cotton", sizes: ["XXS","XS","S","M","L","XL","2XL","3XL"], colours: ["Pink/Navy"],
      img: IMG.p09, features: ["Women's fit", "Lightweight", "Reflective tape"]
    }
  ],

  // ========== 3. HI-VIS & WORK POLOS (PDF p08-p16) ==========
  "hi-vis-polos": [
    {
      id: "hi-vis-ss-polo-8060", code: "8060", name: "Hi Vis S/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p08, features: ["Short sleeve", "Hi-vis polo", "Polyester"]
    },
    {
      id: "hi-vis-ss-polo-1310", code: "1310", name: "Hi Vis S/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p08, features: ["Short sleeve", "Classic fit"]
    },
    {
      id: "hi-vis-ls-polo-1312", code: "1312", name: "Hi Vis L/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p09, features: ["Long sleeve", "Hi-vis polo"]
    },
    {
      id: "hi-vis-work-ss-polo-9060", code: "9060", name: "Hi Vis & Work S/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Navy/Yellow","Navy/Orange","Yellow/Navy","Orange/Navy"],
      img: IMG.p10, features: ["Multi-colour options", "Short sleeve"]
    },
    {
      id: "hi-vis-work-ls-polo-3055", code: "3055", name: "Hi Vis & Work L/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Navy","Yellow/Navy","Navy/Orange","Navy/Yellow"],
      img: IMG.p10, features: ["Long sleeve", "Multi-colour"]
    },
    {
      id: "hi-vis-work-ss-polo-9068", code: "9068", name: "Hi Vis & Work S/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Yellow/Black","Black/Lime","Orange/Black","Black/Orange"],
      img: IMG.p11, features: ["Contrast colour options"]
    },
    {
      id: "hi-vis-work-ls-polo-9072", code: "9072", name: "Hi Vis & Work L/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Black/Lime","Orange/Black","Yellow/Black","Black/Orange"],
      img: IMG.p11, features: ["Long sleeve", "Contrast options"]
    },
    {
      id: "hi-vis-ss-polo-1319", code: "1319", name: "Hi Vis S/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p12, features: ["Standard fit", "Short sleeve"]
    },
    {
      id: "hi-vis-ss-polo-1318", code: "1318", name: "Hi Vis S/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Black","Yellow/Black"],
      img: IMG.p12, features: ["Dark contrast option"]
    },
    {
      id: "work-ss-polo-6018", code: "6018", name: "Work S/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Grey/Orange","Grey/Lime"],
      img: IMG.p13, features: ["Work polo (non-hi-vis)", "Short sleeve"]
    },
    {
      id: "hi-vis-work-ss-polo-1713", code: "1713", name: "Hi Vis & Work S/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Yellow/Black","Black/Orange","Black/Yellow","Orange/Black"],
      img: IMG.p13, features: ["Wide colour range"]
    },
    {
      id: "hi-vis-ss-cotton-polo-2030", code: "2030", name: "Hi Vis S/S Cotton Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Cotton", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p14, features: ["Cotton fabric", "Breathable"]
    },
    {
      id: "hi-vis-ls-cotton-polo-2032", code: "2032", name: "Hi Vis L/S Cotton Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Cotton", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Yellow/Navy","Orange/Navy"],
      img: IMG.p14, features: ["Cotton fabric", "Long sleeve"]
    },
    {
      id: "taped-hi-vis-ss-polo-1315", code: "1315", name: "Taped Hi Vis S/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p15, features: ["Reflective tape", "Short sleeve"]
    },
    {
      id: "taped-hi-vis-ls-polo-6021", code: "6021", name: "Taped Hi Vis L/S Polo Shirt", category: "Hi-Vis & Work Polos", categorySlug: "hi-vis-work-polos",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p15, features: ["Reflective tape", "Long sleeve"]
    }
  ],

  // ========== 4. HI-VIS SINGLET & T-SHIRTS (PDF p16) ==========
  "hi-vis-singlet-tshirts": [
    {
      id: "hi-vis-singlet-5092", code: "5092", name: "Hi Vis Singlet", category: "Hi-Vis Singlet & T-Shirts", categorySlug: "hi-vis-singlet-tshirts",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p16, features: ["Sleeveless", "Lightweight", "Summer wear"]
    },
    {
      id: "hi-vis-ss-tshirt-1735", code: "1735", name: "Hi Vis S/S T-Shirt", category: "Hi-Vis Singlet & T-Shirts", categorySlug: "hi-vis-singlet-tshirts",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange/Black","Yellow/Black"],
      img: IMG.p16, features: ["Short sleeve t-shirt", "Hi-vis basic"]
    }
  ],

  // ========== 5. HI-VIS JUMPERS & HOODIES (PDF p17-p20) ==========
  "hi-vis-jumpers-hoodies": [
    {
      id: "hi-vis-halfzip-fleecy-hoodie-10032", code: "10032", name: "Hi Vis 1/2 Zip Fleecy Hoodie", category: "Hi-Vis Jumpers & Hoodies", categorySlug: "hi-vis-jumpers-hoodies",
      fabric: "100% Polyester", sizes: ["S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p17, features: ["Half zip", "Fleece lining", "Kangaroo pocket"]
    },
    {
      id: "hi-vis-halfzip-fleecy-hoodie-1927", code: "1927", name: "Hi Vis 1/2 Zip Fleecy Hoodie", category: "Hi-Vis Jumpers & Hoodies", categorySlug: "hi-vis-jumpers-hoodies",
      fabric: "100% Polyester", sizes: ["S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p17, features: ["Alternative half zip style"]
    },
    {
      id: "hi-vis-fullzip-fleecy-hoodie-J0082", code: "J0082", name: "Hi Vis Full Zip Fleecy Hoodie", category: "Hi-Vis Jumpers & Hoodies", categorySlug: "hi-vis-jumpers-hoodies",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Yellow/Navy","Orange/Navy"],
      img: IMG.p18, features: ["Full zip", "Fleece lined"]
    },
    {
      id: "hi-vis-work-fullzip-fleecy-hoodie-1588", code: "1588", name: "Hi Vis & Work F/Zip Fleecy Hoodie", category: "Hi-Vis Jumpers & Hoodies", categorySlug: "hi-vis-jumpers-hoodies",
      fabric: "20% Cotton 80% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Grey","Yellow/Grey","Grey/Orange","Grey/Yellow","Navy/Lime"],
      img: IMG.p18, features: ["Full zip", "Multiple colours", "Cotton blend"]
    },
    {
      id: "taped-hi-vis-fullzip-fleecy-hoodie-1585", code: "1585", name: "Taped Hi Vis F/Zip Fleecy Hoodie", category: "Hi-Vis Jumpers & Hoodies", categorySlug: "hi-vis-jumpers-hoodies",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p19, features: ["Reflective tape", "Full zip", "Fleece"]
    },
    {
      id: "taped-hi-vis-fullzip-fleecy-hoodie-1586", code: "1586", name: "Taped Hi Vis F/Zip Fleecy Hoodie", category: "Hi-Vis Jumpers & Hoodies", categorySlug: "hi-vis-jumpers-hoodies",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Yellow/Navy","Orange/Navy"],
      img: IMG.p19, features: ["Alternative taped hoodies"]
    },
    {
      id: "hi-vis-fur-lining-jacket-1788", code: "1788", name: "Hi Vis Fur Lining Jacket", category: "Hi-Vis Jumpers & Hoodies", categorySlug: "hi-vis-jumpers-hoodies",
      fabric: "100% Polyester", sizes: ["S","M","L","XL","2XL","3XL","4XL"], colours: ["Yellow","Orange"],
      img: IMG.p20, features: ["Fur lined", "Cold weather", "Hi-vis"]
    },
    {
      id: "poly-cotton-hoodie-2020", code: "2020", name: "Poly/Cotton Hoodie", category: "Hi-Vis Jumpers & Hoodies", categorySlug: "hi-vis-jumpers-hoodies",
      fabric: "40% Cotton 60% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Black"],
      img: IMG.p20, features: ["Basic hoodie", "Cotton blend"]
    }
  ],

  // ========== 6. HI-VIS VESTS (PDF p21-p23) ==========
  "hi-vis-vests": [
    {
      id: "taped-hi-vis-vest-60531", code: "60531", name: "Taped Hi Vis Vest", category: "Hi-Vis Vests", categorySlug: "hi-vis-vests",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange","Yellow"],
      img: IMG.p21, features: ["Reflective tape", "Hi-vis vest"]
    },
    {
      id: "taped-xback-hi-vis-vest-60532", code: "60532", name: "Taped X Back Hi Vis Vest", category: "Hi-Vis Vests", categorySlug: "hi-vis-vests",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL","5XL"], colours: ["Orange"],
      img: IMG.p21, features: ["X-back tape design"]
    },
    {
      id: "taped-hi-vis-reversible-vest-6540", code: "6540", name: "Taped Hi Vis Reversible Vest", category: "Hi-Vis Vests", categorySlug: "hi-vis-vests",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Yellow","Orange"],
      img: IMG.p22, features: ["Reversible", "Dual colour"]
    },
    {
      id: "xtape-hi-vis-reversible-vest-6543", code: "6543", name: '"X Tape" Hi Vis Reversible Vest', category: "Hi-Vis Vests", categorySlug: "hi-vis-vests",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange"],
      img: IMG.p22, features: ['X-pattern tape', "Reversible"]
    },
    {
      id: "hi-vis-reversible-vest-6539", code: "6539", name: "Hi Vis Reversible Vest", category: "Hi-Vis Vests", categorySlug: "hi-vis-vests",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Yellow","Orange"],
      img: IMG.p23, features: ["Reversible", "No tape version"]
    }
  ],

  // ========== 7. HI-VIS & WORK JACKETS (PDF p23-p26) ==========
  "hi-vis-jackets": [
    {
      id: "flannelette-check-jackets-1528", code: "1528", name: "Flannelette Check Jackets", category: "Hi-Vis & Work Jackets", categorySlug: "hi-vis-work-jackets",
      fabric: "35% Cotton 65% Polyester", sizes: ["M","L","XL","2XL","3XL","4XL"], colours: ["Navy","Black"],
      img: IMG.p23, features: ["Flannelette check", "Warm", "Classic style"]
    },
    {
      id: "work-bomber-jacket-2266", code: "2266", name: "Work Bomber Jacket", category: "Hi-Vis & Work Jackets", categorySlug: "hi-vis-work-jackets",
      fabric: "100% Polyester", sizes: ["S","M","L","XL","2XL","3XL","4XL"], colours: ["Black","Navy"],
      img: IMG.p24, features: ["Bomber style", "Lightweight jacket"]
    },
    {
      id: "hi-vis-bomber-jacket-2868", code: "2868", name: "Hi Vis Bomber Jacket", category: "Hi-Vis & Work Jackets", categorySlug: "hi-vis-work-jackets",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p24, features: ["Hi-vis bomber", "Two-tone"]
    },
    {
      id: "taped-hi-vis-bomber-jacket-2258", code: "2258", name: "Taped Hi Vis Bomber Jacket", category: "Hi-Vis & Work Jackets", categorySlug: "hi-vis-work-jackets",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p25, features: ["Reflective tape", "Bomber style"]
    },
    {
      id: "xtape-hi-vis-bomber-jacket-2259", code: "2259", name: '"X Tape" Hi Vis Bomber Jacket', category: "Hi-Vis & Work Jackets", categorySlug: "hi-vis-work-jackets",
      fabric: "100% Polyester", sizes: ["S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Navy"],
      img: IMG.p25, features: ["X-back tape", "Bomber jacket"]
    },
    {
      id: "hi-vis-jackets-fleecy-lining-90877", code: "90877", name: "Hi Vis Jackets Fleecy Lining", category: "Hi-Vis & Work Jackets", categorySlug: "hi-vis-work-jackets",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p26, features: ["Fleece lined", "Warm", "Hi-vis"]
    },
    {
      id: "hi-vis-jackets-mesh-lining-90878", code: "90878", name: "Hi Vis Jackets Mesh Lining", category: "Hi-Vis & Work Jackets", categorySlug: "hi-vis-work-jackets",
      fabric: "100% Polyester", sizes: ["XS","S","M","L","XL","2XL","3XL","4XL"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p26, features: ["Mesh lined", "Breathable", "Hi-vis"]
    }
  ],

  // ========== 8. WORK SHORTS (PDF p27-p30) ==========
  "work-shorts": [
    {
      id: "stretch-work-shorts-1805", code: "1805", name: "Stretch Work Shorts", category: "Work Shorts", categorySlug: "work-shorts",
      fabric: "95% Cotton 5% Spandex", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44","46"], colours: ["Black","Navy","Khaki","White"],
      img: IMG.p27, features: ["Stretch fabric", "Comfort fit"]
    },
    {
      id: "cotton-drill-work-shorts-1105", code: "1105", name: "Cotton Drill Work Shorts", category: "Work Shorts", categorySlug: "work-shorts",
      fabric: "100% Cotton", sizes: ["30","32","34","36","38","40","42","44","46"], colours: ["Black","Navy","Khaki","White"],
      img: IMG.p28, features: ["Cotton drill", "Durable"]
    },
    {
      id: "cotton-drill-work-shorts-B160", code: "B160", name: "Cotton Drill Work Shorts", category: "Work Shorts", categorySlug: "work-shorts",
      fabric: "100% Cotton", sizes: ["30","32","34","36","38","40","42","44","46"], colours: ["Black","Navy","Khaki","White"],
      img: IMG.p28, features: ["Alternative cotton drill style"]
    },
    {
      id: "stretch-plain-shorts-1740", code: "1740", name: "Stretch Plain Shorts", category: "Work Shorts", categorySlug: "work-shorts",
      fabric: "97% Cotton 3% Elastin", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44"], colours: ["Black","Navy","Khaki","Olive"],
      img: IMG.p29, features: ["Plain front", "Stretch comfort"]
    },
    {
      id: "stretch-camo-shorts-1741", code: "1741", name: "Stretch Camo Shorts", category: "Work Shorts", categorySlug: "work-shorts",
      fabric: "97% Cotton 3% Elastin", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44"], colours: ["Camo Grey","Camo Green"],
      img: IMG.p29, features: ["Camo pattern", "Stretch"]
    },
    {
      id: "elastic-waist-cargo-shorts-6933", code: "6933", name: "Elastic Waist Cargo Shorts", category: "Work Shorts", categorySlug: "work-shorts",
      fabric: "35% Cotton 65% Polyester", sizes: ["S","M","L","XL","2XL","3XL","4XL"], colours: ["Black","Navy","Khaki","White","Olive","Dark Grey","Beige"],
      img: IMG.p30, features: ["Elastic waist", "Cargo pockets"]
    },
    {
      id: "sport-shorts-2035", code: "2035", name: "Sport Shorts", category: "Work Shorts", categorySlug: "work-shorts",
      fabric: "100% Polyester", sizes: ["S","M","L","XL","2XL","3XL","4XL"], colours: ["Black","Navy"],
      img: IMG.p30, features: ["Lightweight sport style"]
    }
  ],

  // ========== 9. WORK PANTS (PDF p31-p39) ==========
  "work-pants": [
    {
      id: "taped-stretch-cuffed-work-pants-1821", code: "1821", name: "Taped Stretch Cuffed Work Pants", category: "Work Pants", categorySlug: "work-pants",
      fabric: "95% Cotton 5% Spandex", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44","46"], colours: ["Navy"],
      img: IMG.p31, features: ["Reflective tape", "Cuffed", "Stretch"]
    },
    {
      id: "taped-cotton-drill-work-pants-1108", code: "1108", name: "Taped Cotton Drill Work Pants", category: "Work Pants", categorySlug: "work-pants",
      fabric: "100% Cotton", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44","46"], colours: ["Black","Navy","White"],
      img: IMG.p32, features: ["Reflective tape", "Cotton drill"]
    },
    {
      id: "work-pants-reinforced-patches-1120", code: "1120", name: "Work Pants With Reinforced Patches", category: "Work Pants", categorySlug: "work-pants",
      fabric: "100% Cotton", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44","46"], colours: ["Black","Navy","Khaki","White"],
      img: IMG.p32, features: ["Reforced knee patches", "Heavy duty"]
    },
    {
      id: "cotton-drill-work-pants-1103", code: "1103", name: "Cotton Drill Work Pants", category: "Work Pants", categorySlug: "work-pants",
      fabric: "100% Cotton", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44","46"], colours: ["Black","Navy","Khaki","White"],
      img: IMG.p33, features: ["Standard cotton drill pants"]
    },
    {
      id: "stretch-cuffed-work-pants-1808", code: "1808", name: "Stretch Cuffed Work Pants", category: "Work Pants", categorySlug: "work-pants",
      fabric: "95% Cotton 5% Spandex", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44","46"], colours: ["Black","Navy","Khaki","White"],
      img: IMG.p33, features: ["Stretch fabric", "Cuffed hem"]
    },
    {
      id: "elastic-waist-stretch-cuffed-pants-1838", code: "1838", name: "Elastic Waist Stretch Cuffed Pants", category: "Work Pants", categorySlug: "work-pants",
      fabric: "95% Cotton 5% Spandex", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44"], colours: ["Black","Navy","Khaki","White"],
      img: IMG.p34, features: ["Elastic waist", "Stretch cuffed"]
    },
    {
      id: "cuffed-stretch-pants-1738", code: "1738", name: "Cuffed Stretch Pants", category: "Work Pants", categorySlug: "work-pants",
      fabric: "97% Cotton 3% Elastin", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44"], colours: ["Black","Navy","Khaki","Olive"],
      img: IMG.p35, features: ["Cuffed hem", "Elastin blend"]
    },
    {
      id: "cuffed-stretch-camo-pants-1739", code: "1739", name: "Cuffed Stretch Camo Pants", category: "Work Pants", categorySlug: "work-pants",
      fabric: "97% Cotton 3% Elastin", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44"], colours: ["Camo Grey","Camo Green"],
      img: IMG.p35, features: ["Camo pattern", "Stretch cuffed"]
    },
    {
      id: "extra-work-pants-1", code: "WP01", name: "Premium Cargo Work Pants", category: "Work Pants", categorySlug: "work-pants",
      fabric: "100% Cotton", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44","46"], colours: ["Black","Navy","Khaki"],
      img: IMG.p36, features: ["Extra cargo pockets", "Heavy duty"]
    },
    {
      id: "extra-work-pants-2", code: "WP02", name: "Hi Vis Work Pants", category: "Work Pants", categorySlug: "work-pants",
      fabric: "100% Cotton", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44","46"], colours: ["Orange/Navy","Yellow/Navy"],
      img: IMG.p37, features: ["Hi-vis two-tone", "Work pants"]
    },
    {
      id: "extra-work-pants-3", code: "WP03", name: "Stretch Slim Fit Work Pants", category: "Work Pants", categorySlug: "work-pants",
      fabric: "95% Cotton 5% Spandex", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44"], colours: ["Black","Navy"],
      img: IMG.p38, features: ["Slim fit", "Stretch comfort"]
    },
    {
      id: "extra-work-pants-4", code: "WP04", name: "Utility Multi-Pocket Work Pants", category: "Work Pants", categorySlug: "work-pants",
      fabric: "100% Cotton", sizes: ["28","29","30","31","32","33","34","36","38","40","42","44","46"], colours: ["Black","Navy","Khaki"],
      img: IMG.p39, features: ["Multi-pocket utility", "Tool loops"]
    }
  ]
};

// Helper: get all products as flat array
function getAllProducts() {
  let all = [];
  for (const catKey of Object.keys(PRODUCTS)) {
    all = all.concat(PRODUCTS[catKey]);
  }
  return all;
}

// Helper: find product by ID
function findProductById(id) {
  const all = getAllProducts();
  return all.find(p => p.id === id);
}

// Helper: find product by code
function findProductByCode(code) {
  const all = getAllProducts();
  return all.find(p => p.code === code || p.code === code + '#');
}

// Industries data for SEO pages
const INDUSTRIES = [
  {
    id: "construction", name: "Construction Workwear", title: "Construction Workwear Supplier | Safety Clothing for Builders & Trades",
    metaDesc: "High-quality construction workwear, hi-vis safety shirts, hard hats, boots and protective gear for builders, tradespeople and construction sites across Australia. Request a bulk quote today.",
    h1: "Construction Workwear & Safety Clothing",
    desc: "We supply reliable workwear and safety clothing for construction companies, building sites, trade contractors and civil works projects across Australia.",
    recommendedCats: ["safetywear-shirts", "hi-vis-polos", "hi-vis-vests", "hi-vis-jackets", "work-pants"]
  },
  {
    id: "road-rail", name: "Road Work & Rail Work Safety Clothing", title: "Road & Rail Work Safety Clothing | Hi-Vis with 3M Reflective Tape",
    metaDesc: "Specialist road worker and rail worker safety shirts with X-back 3M reflective tape. Compliant hi-vis clothing for road crews and rail maintenance teams. Bulk orders welcome.",
    h1: "Road Work & Rail Work Safety Clothing",
    desc: "Our road worker and rail worker shirts feature X-back 3M reflective tape designs that meet Australian safety standards for high-risk environments.",
    recommendedCats: ["safetywear-shirts", "hi-vis-vests"]
  },
  {
    id: "warehouse-logistics", name: "Warehouse & Logistics Workwear", title: "Warehouse & Logistics Workwear | Uniforms for Distribution Centres",
    metaDesc: "Durable workwear for warehouses, distribution centres, logistics companies and freight operations. Polos, shirts, pants and safety vests with bulk ordering available Australia-wide.",
    h1: "Warehouse & Logistics Workwear",
    desc: "From warehouse operatives to forklift drivers and logistics coordinators — we supply practical, comfortable workwear that lasts through daily warehouse operations.",
    recommendedCats: ["hi-vis-polos", "hi-vis-vests", "work-pants", "work-shorts", "workwear-shirts"]
  },
  {
    id: "cleaning", name: "Cleaning Company Uniforms", title: "Cleaning Company Uniforms | Professional Workwear for Cleaning Teams",
    metaDesc: "Professional cleaning company uniforms, polos, shirts and work pants for commercial cleaners, domestic cleaning services and facility management teams across Australia.",
    h1: "Cleaning Company Uniforms & Workwear",
    desc: "Present your cleaning team with professional branded workwear. We supply easy-care polos, shirts and pants ideal for commercial and domestic cleaning services.",
    recommendedCats: ["hi-vis-polos", "workwear-shirts", "work-pants"]
  },
  {
    id: "landscaping-trades", name: "Landscaping & Trade Workwear", title: "Landscaping & Trade Workwear | Durable Outdoor Work Clothing",
    metaDesc: "Tough workwear for landscapers, gardeners, plumbers, electricians and trade professionals. Heavy-duty shorts, pants, shirts and hi-vis gear built for outdoor work.",
    h1: "Landscaping & Trade Workwear",
    desc: "Trades and landscaping work demands durable, comfortable clothing. Our range includes reinforced work pants, stretch shorts and breathable polos for all-day outdoor work.",
    recommendedCats: ["work-shorts", "work-pants", "hi-vis-polos", "hi-vis-jackets"]
  },
  {
    id: "hospitality", name: "Hospitality & Café Workwear", title: "Hospitality & Café Workwear | Uniforms for Restaurants & Cafes",
    metaDesc: "Workwear for hospitality businesses including restaurants, cafes, catering services and hotels. Polos, shirts, aprons and uniforms for kitchen and front-of-house staff.",
    h1: "Hospitality & Café Workwear",
    desc: "Whether you run a café, restaurant, hotel or catering service, we can outfit your team with comfortable, professional-looking workwear at competitive bulk prices.",
    recommendedCats: ["hi-vis-polos", "workwear-shirts", "hi-vis-jumpers-hoodies"]
  },
  {
    id: "small-business", name: "Small Business Uniforms", title: "Small Business Uniforms Australia | Affordable Workwear for SMEs",
    metaDesc: "Affordable small business uniforms and workwear for SMEs across Australia. From startup teams to growing companies — we provide flexible bulk ordering with no minimum order hassle.",
    h1: "Small Business Uniforms & Workwear",
    desc: "Running a small business? We make it easy to get quality workwear for your team without large corporate minimums. Request a quote for any quantity.",
    recommendedCats: ["hi-vis-polos", "workwear-shirts", "hi-vis-jackets", "work-pants"]
  }
];

// Location pages data for SEO
const LOCATIONS = [
  {
    id: "sydney", name: "Sydney", state: "NSW", title: "Workwear Supplier Sydney | Hi-Vis & Safety Clothing Store",
    metaDesc: "Visit our Sydney workwear store at Parklea Market or order online. We supply hi-vis clothing, safety shirts, polos, jackets, vests, shorts and pants with same-day pickup available.",
    h1: "Sydney Workwear Supplier – Visit Our Parklea Market Store",
    desc: "Australia Workwear is based in Sydney, NSW. Our physical store is located at Shop 298-299, Parklea Market, 601 Sunnyholt Rd, NSW 2768."
  },
  {
    id: "melbourne", name: "Melbourne", state: "VIC", title: "Workwear Supplier Melbourne | Hi-Vis Clothing Delivered to VIC",
    metaDesc: "Looking for a workwear supplier in Melbourne? Order hi-vis clothing, safety shirts, polos, jackets and uniforms from our Sydney-based store with Australia-wide delivery to Melbourne and Victoria.",
    h1: "Workwear Supplier for Melbourne Customers",
    desc: "Based in Sydney but serving all of Australia — we deliver workwear and hi-vis safety clothing to Melbourne, Geelong and throughout Victoria."
  },
  {
    id: "brisbane", name: "Brisbane", state: "QLD", title: "Workwear Supplier Brisbane | Hi-Vis & Safety Workwear QLD",
    metaDesc: "Order workwear and hi-vis safety clothing for Brisbane and Queensland businesses. Sydney-based supplier with Australia-wide delivery. Bulk quotes available for construction and trade businesses.",
    h1: "Workwear Supplier for Brisbane & Queensland",
    desc: "Queensland businesses can rely on us for quality workwear delivered to Brisbane, Gold Coast and regional Queensland locations."
  },
  {
    id: "adelaide", name: "Adelaide", state: "SA", title: "Workwear Supplier Adelaide | Safety Workwear Delivered to SA",
    metaDesc: "Need workwear in Adelaide? Order hi-vis polos, safety shirts, work pants and jackets from our Sydney-based supplier with fast delivery across South Australia.",
    h1: "Workwear Supplier for Adelaide & South Australia",
    desc: "We supply Adelaide and SA businesses with the same quality workwear and hi-vis safety clothing available at our Sydney store."
  },
  {
    id: "perth", name: "Perth", state: "WA", title: "Workwear Supplier Perth | Hi-Vis Workwear Western Australia",
    metaDesc: "Perth and WA businesses can order workwear, hi-vis clothing and safety uniforms from our Sydney-based store. Fast Australia-wide shipping to Perth and regional WA.",
    h1: "Workwear Supplier for Perth & Western Australia",
    desc: "From mining support to construction and trade businesses in Perth — we deliver quality workwear across Western Australia."
  },
  {
    id: "canberra", name: "Canberra", state: "ACT", title: "Workwear Supplier Canberra | ACT Workwear & Hi-Vis Clothing",
    metaDesc: "Canberra-based government departments and businesses can order workwear, hi-vis safety clothing and uniforms from our Sydney store with delivery to ACT.",
    h1: "Workwear Supplier for Canberra & ACT",
    desc: "Serving Canberra and the Australian Capital Territory with reliable workwear and safety clothing delivered from our Sydney base."
  },
  {
    id: "australia", name: "Australia", state: "", title: "Workwear Supplier Australia | Hi-Vis Safety Clothing Nationwide",
    metaDesc: "Australia-wide workwear supplier based in Sydney. Hi-vis clothing, safety shirts, polos, jackets, vests, shorts and pants for businesses across all states. Bulk orders with delivery.",
    h1: "Australia-Wide Workwear & Hi-Vis Safety Clothing Supplier",
    desc: "We are a Sydney-based workwear supplier serving businesses across every Australian state and territory. Order online or visit our Parklea Market store."
  }
];

// FAQ data
const FAQS = [
  { q: "Do you have a physical store in Sydney?", a: "Yes, we are located at Shop 298-299, Parklea Market, 601 Sunnyholt Rd, NSW 2768. You can visit us Monday–Sunday during market hours." },
  { q: "Do you deliver outside Sydney?", a: "Yes, we can support workwear enquiries and delivery across Australia including Melbourne, Brisbane, Adelaide, Perth, Canberra and regional areas." },
  { q: "Can I request a bulk quote?", a: "Yes, businesses can request quotes by product code, quantity, size and colour. Use our Request a Quote form or call us on 0406669868." },
  { q: "Do you sell hi-vis clothing?", a: "Yes, we supply a full range of hi-vis clothing including hi-vis shirts, polos, vests, jackets, hoodies and workwear pants." },
  { q: "Can I visit the store to check sizes?", a: "Yes, customers can visit our Sydney store to check product samples, try on sizes and place bulk orders in person." },
  { q: "Do you list prices online?", a: "This website is designed for enquiries and bulk quotes. Please contact us via the quote form or call 0406669868 for current pricing and availability." }
];
