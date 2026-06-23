/**
 * Australia Workwear - Site Generator
 * Generates all HTML pages from product data and templates
 */
const fs = require('fs');
const path = require('path');

// ============================================================
// SHARED TEMPLATES (header, footer, mobile bar)
// ============================================================
const NAV_ITEMS = [
  { href: 'index.html', label: 'Home' },
  {
    label: 'Products ▾', dropdown: true,
    items: [
      { href: 'products/workwear-shirts.html', label: 'Workwear Shirts' },
      { href: 'products/safetywear-shirts.html', label: 'Safetywear Shirts' },
      { href: 'products/hi-vis-work-polos.html', label: 'Hi-Vis & Work Polos' },
      { href: 'products/hi-vis-singlet-tshirts.html', label: 'Singlet & T-Shirts' },
      { href: 'products/hi-vis-jumpers-hoodies.html', label: 'Jumpers & Hoodies' },
      { href: 'products/hi-vis-vests.html', label: 'Hi-Vis Vests' },
      { href: 'products/hi-vis-work-jackets.html', label: 'Jackets' },
      { href: 'products/work-shorts.html', label: 'Work Shorts' },
      { href: 'products/work-pants.html', label: 'Work Pants' }
    ]
  },
  { href: 'bulk-orders/index.html', label: 'Bulk Orders' },
  { href: 'industries/index.html', label: 'Industries' },
  { href: 'locations/index.html', label: 'Locations' },
  { href: 'about/index.html', label: 'About' },
  { href: 'contact/index.html', label: 'Contact' }
];

function getHeader(activePage) {
  return `<!-- Top Industrial Strip -->
<div class="top-strip">
  <div class="top-strip-inner">
    <div class="top-strip-item"><span>&#128205;</span> <span>Shop 298-299, Parklea Market NSW 2768</span></div>
    <div class="top-strip-item"><span>&#128222;</span> <a href="tel:0406669868">0406669868</a> <span style="margin:0 0.5rem;opacity:0.3;">|</span> <span>&#128230;</span> <span>Australia-Wide Delivery</span></div>
  </div>
</div>
<!-- ========== HEADER ========== -->
<header class="site-header" role="banner">
  <div class="header-inner">
    <a href="../index.html" class="logo" aria-label="Australia Workwear Home">
      <span class="logo-text">Australia<span>Workwear</span></span>
    </a>
    <nav class="nav-main" id="mainNav" aria-label="Main Navigation">
      <ul class="nav-links">
        ${NAV_ITEMS.map(item => {
          if (item.dropdown) {
            const isActive = activePage === 'Products';
            return `<li class="nav-dropdown"><a href="../${item.items[0].href}" class="nav-dropdown-toggle${isActive ? ' active' : ''}">${item.label}</a><div class="nav-dropdown-menu">${item.items.map(i => `<a href="../${i.href}">${i.label}</a>`).join('')}</div></li>`;
          }
          return `<li><a href="../${item.href}" class="${activePage === item.label ? 'active' : ''}">${item.label}</a></li>`;
        }).join('\n        ')}
      </ul>
    </nav>
    <div class="header-cta"><a href="tel:0406669868" class="btn btn-phone btn-sm">&#9742; Call Now</a></div>
    <button class="menu-toggle" aria-label="Toggle menu">&#9776;</button>
  </div>
</header>`;
}

function getFooter() {
  return `<!-- ========== FOOTER ========== -->
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <h3>Australia<span>Workwear</span></h3>
        <p>Sydney-based workwear and hi-vis safety clothing supplier. Visit our Parklea Market store or order online with Australia-wide delivery.</p>
        <p style="margin-top:var(--space-4)"><strong>&#128205;</strong> Shop 298-299, Parklea Market<br>601 Sunnyholt Rd, NSW 2768</p>
        <p style="margin-top:var(--space-2)"><strong>&#128222;</strong> <a href="tel:0406669868" style="color:#ff6a00">0406669868</a><br><strong>&#9993;</strong> <a href="mailto:samne8161019@hotmail.com" style="color:#ff6a00">samne8161019@hotmail.com</a></p>
      </div>
      <div class="footer-col">
        <h4>Products</h4>
        <ul>
          <li><a href="products/workwear-shirts.html">Work Shirts</a></li>
          <li><a href="products/safetywear-shirts.html">Safety Shirts</a></li>
          <li><a href="products/hi-vis-work-polos.html">Hi-Vis Polos</a></li>
          <li><a href="products/hi-vis-vests.html">Hi-Vis Vests</a></li>
          <li><a href="products/hi-vis-work-jackets.html">Jackets</a></li>
          <li><a href="products/work-pants.html">Work Pants</a></li>
          <li><a href="products/work-shorts.html">Work Shorts</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about/index.html">About Us</a></li>
          <li><a href="bulk-orders/index.html">Bulk Orders</a></li>
          <li><a href="industries/index.html">Industries</a></li>
          <li><a href="locations/index.html">Locations</a></li>
          <li><a href="faq/index.html">FAQ</a></li>
          <li><a href="contact/index.html">Contact / Quote</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Served Industries</h4>
        <ul>
          <li><a href="industries/construction.html">Construction</a></li>
          <li><a href="industries/road-rail.html">Road & Rail Safety</a></li>
          <li><a href="industries/warehouse-logistics.html">Warehouse & Logistics</a></li>
          <li><a href="industries/cleaning.html">Cleaning Companies</a></li>
          <li><a href="industries/landscaping-trades.html">Landscaping & Trades</a></li>
          <li><a href="industries/hospitality.html">Hospitality & Café</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Australia Workwear / Ricky Workwear. All rights reserved. | Sydney-based workwear supplier serving Australia.</p>
    </div>
  </div>
</footer>

<div class="mobile-fixed-bar">
  <div class="btn-group">
    <a href="tel:0406669868" class="btn btn-phone btn-sm">&#9742; Call</a>
    <a href="contact/index.html#quote" class="btn btn-primary btn-sm">Get Quote</a>
    <a href="https://maps.google.com/?q=601+Sunnyholt+Rd+Parklea+NSW+2768" target="_blank" rel="noopener" class="btn btn-outline-white btn-sm">&#128205; Directions</a>
  </div>
</div>`;
}

function getScripts() {
  return `
<script src="../js/products.js"></script>
<script src="../js/main.js"></script>
<script>
// Scroll reveal animation
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.category-card, .industry-card, .product-card, .faq-item').forEach(el => {
    el.classList.add('reveal'); observer.observe(el);
  });
}
</script>`;
}

function getBreadcrumbs(items, light = false) {
  const cls = light ? ' breadcrumb-light' : '';
  return `<nav class="breadcrumb${cls}" aria-label="Breadcrumb"><ol>${items.map((item, i) => {
    if (i === items.length - 1) return `<li>${item.label}</li>`;
    return `<li><a href="${item.href}">${item.label}</a></li>`;
  }).join('')}</ol></nav>`;
}

// Product card template — Industrial Spec Sheet Style
function productCard(p) {
  const isTaped = (p.features || []).some(f => f.includes('Reflective tape') || f.includes('X-back') || f.includes('X-pattern'));
  return `<article class="product-card" itemscope itemtype="https://schema.org/Product">
  <div class="product-card-img">
    <img src="${p.img}" alt="${p.name}" loading="lazy" itemprop="image">
    ${isTaped ? '<span class="product-badge taped">TAPED</span>' : '<span class="product-badge">HI-VIS</span>'}
  </div>
  <div class="product-card-body">
    <h3 itemprop="name">${p.name}</h3>
    <span class="product-code" itemprop="sku">CODE: ${p.code}</span>
    <div class="product-specs">
      <span><strong>Fabric:</strong> ${p.fabric}</span>
      <span><strong>Sizes:</strong> ${p.sizes.join(', ')}</span>
      <div class="product-colours">
        ${p.colours.slice(0, 6).map(c => `<span class="colour-dot" title="${c}" style="background:${getColourHex(c)}"></span>`).join('')}
        ${p.colours.length > 6 ? `<span style="font-size:0.72rem;color:#646e82;align-self:center;font-weight:600">+${p.colours.length - 6}</span>` : ''}
      </div>
    </div>
    <div class="product-card-actions">
      <button class="btn btn-primary btn-sm" data-enquire="${encodeURIComponent(p.name)}" data-code="${p.code}">Enquire Now</button>
      <a href="../contact/index.html?product=${encodeURIComponent(p.name)}&code=${p.code}#quote" class="btn btn-secondary btn-sm">Request Quote</a>
    </div>
  </div>
</article>`;
}

function getColourHex(name) {
  const map = {
    'Navy': '#1a2744', 'Black': '#212529', 'White': '#f8f9fa',
    'Orange': '#ff6b1a', 'Yellow': '#ffc107',
    'Khaki': '#c4b896', 'Olive': '#556b2f', 'Grey': '#adb5bd',
    'Dark Grey': '#495057', 'Beige': '#e8dcc4', 'Lime': '#32cd32',
    'Pink': '#ff69b4', 'Camo Grey': '#708090', 'Camo Green': '#556b2f',
    'Orange/Navy': 'linear-gradient(135deg,#ff6b1a 50%,#1a2744 50%)',
    'Yellow/Navy': 'linear-gradient(135deg,#ffc107 50%,#1a2744 50%)',
    'Navy/Yellow': 'linear-gradient(135deg,#1a2744 50%,#ffc107 50%)',
    'Navy/Orange': 'linear-gradient(135deg,#1a2744 50%,#ff6b1a 50%)',
    'Orange/Black': 'linear-gradient(135deg,#ff6b1a 50%,#212529 50%)',
    'Yellow/Black': 'linear-gradient(135deg,#ffc107 50%,#212529 50%)',
    'Black/Lime': 'linear-gradient(135deg,#212529 50%,#32cd32 50%)',
    'Black/Orange': 'linear-gradient(135deg,#212529 50%,#ff6b1a 50%)',
    'Black/Yellow': 'linear-gradient(135deg,#212529 50%,#ffc107 50%)',
    'Yellow/Black': 'linear-gradient(135deg,#ffc107 50%,#212529 50%)',
    'Grey/Orange': 'linear-gradient(135deg,#adb5bd 50%,#ff6b1a 50%)',
    'Grey/Lime': 'linear-gradient(135deg,#adb5bd 50%,#32cd32 50%)',
    'Orange/Grey': 'linear-gradient(135deg,#ff6b1a 50%,#adb5bd 50%)',
    'Yellow/Grey': 'linear-gradient(135deg,#ffc107 50%,#adb5bd 50%)',
    'Grey/Orange':'linear-gradient(135deg,#adb5bd 50%,#ff6b1a 50%)',
    'Grey/Yellow': 'linear-gradient(135deg,#adb5bd 50%,#ffc107 50%)',
    'Navy/Lime': 'linear-gradient(135deg,#1a2744 50%,#32cd32 50%)'
  };
  return map[name] || '#ccc';
}

// ============================================================
// PAGE GENERATORS
// ============================================================

const BASE_DIR = __dirname;

function writePage(filepath, html) {
  const fullpath = path.join(BASE_DIR, filepath);
  fs.mkdirSync(path.dirname(fullpath), { recursive: true });
  fs.writeFileSync(fullpath, html);
  console.log(`✓ ${filepath}`);
}

// --- PRODUCTS INDEX ---
function genProductsIndex() {
  const cats = [
    ['workwear-shirts', 'Workwear Shirts', 'Durable cotton drill work shirts for everyday industrial use.', 'assets/img/products/p004_page4_0.jpeg'],
    ['safetywear-shirts', 'Safetywear Shirts', 'Hi-vis safety shirts with reflective tape options for road and rail workers.', 'assets/img/products/p005_page5_0.jpeg'],
    ['hi-vis-polos', 'Hi-Vis & Work Polos', 'Hi-vis polo shirts — short sleeve, long sleeve, cotton or polyester.', 'assets/img/products/p008_page8_0.jpeg'],
    ['hi-vis-singlet-tshirts', 'Hi-Vis Singlet & T-Shirts', 'Lightweight hi-vis singlets and t-shirts for warm conditions.', 'assets/img/products/p016_page16_0.jpeg'],
    ['hi-vis-jumpers-hoodies', 'Hi-Vis Jumpers & Hoodies', 'Fleecy hoodies and jumpers with hi-vis options including taped versions.', 'assets/img/products/p017_page17_0.jpeg'],
    ['hi-vis-vests', 'Hi-Vis Vests', 'Hi-vis safety vests with 3M reflective tape and reversible options.', 'assets/img/products/p021_page21_0.jpeg'],
    ['hi-vis-jackets', 'Hi-Vis & Work Jackets', 'Work jackets from lightweight to fleecy lined, including bomber styles.', 'assets/img/products/p023_page23_0.jpeg'],
    ['work-shorts', 'Work Shorts', 'Cotton drill and stretch work shorts in multiple colours.', 'assets/img/products/p027_page27_0.jpeg'],
    ['work-pants', 'Work Pants', 'Heavy-duty work pants with reinforced patches, stretch fabric, taped options.', 'assets/img/products/p031_page31_0.jpeg']
  ];

  let catCards = cats.map(([id, name, desc, img]) =>
    `<a href="${id}.html" class="category-card"><div class="category-card-img"><img src="${img}" alt="${name}" loading="lazy"></div><div class="category-card-body"><h3>${name}</h3><p>${desc}</p><span class="category-count">View Products →</span></div></a>`
  ).join('');

  writePage('products/index.html', `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>All Workwear Products | Hi-Vis Shirts Polos Vests Jackets Pants Shorts</title>
<meta name="description" content="Browse the full range of Australia Workwear products: work shirts, hi-vis polos, safety vests, jackets, hoodies, work pants and shorts. Request a bulk quote today.">
<link rel="canonical" href="https://australiaworkwear.com.au/products/">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
${getHeader('Products')}
<section class="page-hero">
  <div class="container">
    ${getBreadcrumbs([{href:'../index.html',label:'Home'},{href:'products/index.html',label:'Products'}], true)}
    <h1>Our Full Product Range</h1>
    <p>Browse all categories of workwear, hi-vis safety clothing and uniforms for Australian businesses.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="accent-bar accent-bar-lg"></span>
      <h2>Product Categories</h2>
      <p>Select a category to view products, specifications and request a quote.</p>
          </div>
    <div class="category-grid">${catCards}</div>
  </div>
</section>
<section class="cta-banner">
  <div class="container">
    <h2>Can't Find What You Need?</h2>
    <p>Contact us with your requirements — we can source specific workwear for your business.</p>
    <div class="btn-group">
      <a href="../contact/index.html#quote" class="btn btn-primary btn-lg">Request a Custom Quote</a>
      <a href="tel:0406669868" class="btn btn-outline-white btn-lg">&#9742; Call 0406669868</a>
    </div>
  </div>
</section>
${getFooter()}
<script type="application/ld+json">@{context:"https://schema.org",type:"CollectionPage",name:"All Workwear Products",url:"https://australiaworkwear.com.au/products/",description:"Browse full range of Australia Workwear products."}</script>
${getScripts()}
</body></html>`);
}

// --- PRODUCT CATEGORY PAGE ---
function genProductCategory(catKey) {
  // This is a template function - actual data comes from JS
  // We generate static pages for each category with embedded data references
  const cat = CATEGORIES.find(c => c.id === catKey);
  if (!cat) return;

  writePage(`products/${cat.slug}.html`, `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${cat.name} Supplier Sydney | ${cat.name} Australia</title>
<meta name="description" content="Buy ${cat.name.toLowerCase()} from Australia Workwear Sydney. Quality ${cat.desc.replace('.', '')} Bulk orders welcome. Request a quote online or visit our Parklea Market store.">
<link rel="canonical" href="https://australiaworkwear.com.au/products/${cat.slug}">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
${getHeader(cat.name)}
<section class="page-hero">
  <div class="container">
    ${getBreadcrumbs([{href:'../index.html',label:'Home'},{href:'index.html',label:'Products'},{href:`${cat.slug}.html`,label:cat.name}], true)}
    <h1>${cat.name}</h1>
    <p>${cat.desc} Available in multiple colours and sizes. Contact us for bulk pricing.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="accent-bar accent-bar-lg"></span>
      <h2>Our ${cat.name}</h2>
      <p>Click on any product to view details and request a quote.</p>
          </div>
    <div class="product-grid" id="productGrid">
      <!-- Products loaded by JS from products.js -->
    </div>
  </div>
</section>
<section class="cta-banner">
  <div class="container">
    <h2>Need Bulk ${cat.name}?</h2>
    <p>Tell us what you need — we'll provide a fast, competitive quote.</p>
    <div class="btn-group">
      <a href="../contact/index.html?productCategory=${encodeURIComponent(cat.name)}#quote" class="btn btn-primary btn-lg">Request a Quote</a>
      <a href="tel:0406669868" class="btn btn-outline-white btn-lg">&#9742; Call 0406669868</a>
    </div>
  </div>
</section>
${getFooter()}
<script type="application/ld+json">@{"@context":"https://schema.org","@type":"ItemList","name":"${cat.name}","numberOfItems":PRODUCTS["${cat.id}"]?.length||0,"itemListElement":(PRODUCTS["${cat.id}"]||[]).map((p,i)=>({"@type":"ListItem","position":i+1,"url":"https://australiaworkwear.com.au/products/"+p.id}))}</script>
${getScripts()}
<script>
const grid = document.getElementById('productGrid');
if (grid && PRODUCTS["${cat.id}"]) {
  PRODUCTS["${cat.id}"].forEach(function(p) {
    var isTaped = (p.features || []).some(function(f) { return f.indexOf('Reflective tape') >= 0 || f.indexOf('X-back') >= 0 || f.indexOf('X-pattern') >= 0; });
    var html = '<article class="product-card" itemscope itemtype="https://schema.org/Product">';
    html += '<div class="product-card-img"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy" itemprop="image">';
    html += isTaped ? '<span class="product-badge taped">TAPED</span>' : '<span class="product-badge">HI-VIS</span>';
    html += '</div><div class="product-card-body">';
    html += '<h3 itemprop="name">'+p.name+'</h3>';
    html += '<span class="product-code" itemprop="sku">CODE: '+p.code+'</span>';
    html += '<div class="product-specs"><span><strong>Fabric:</strong> '+p.fabric+'</span><span><strong>Sizes:</strong> '+p.sizes.join(', ')+'</span></div>';
    html += '<div class="product-card-actions">';
    html += '<button class="btn btn-primary btn-sm" data-enquire="'+encodeURIComponent(p.name)+'" data-code="'+p.code+'">Enquire Now</button>';
    html += '<a href="../contact/index.html?product='+encodeURIComponent(p.name)+'&code='+p.code+'#quote" class="btn btn-secondary btn-sm">Request Quote</a>';
    html += '</div></div></article>';
    grid.innerHTML += html;
  });
}
</script>
</body></html>`);
}

// --- BULK ORDERS PAGE ---
function genBulkOrders() {
  return writePage('bulk-orders/index.html', `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bulk Workwear Orders Australia | Wholesale Workwear Supplier Sydney</title>
<meta name="description" content="Order workwear in bulk for construction, cleaning, logistics, warehousing, landscaping, trades, road work, rail work and hospitality businesses. Sydney-based supplier with Australia-wide delivery.">
<link rel="canonical" href="https://australiaworkwear.com.au/bulk-orders/">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
${getHeader('Bulk Orders')}
<section class="page-hero">
  <div class="container">
    ${getBreadcrumbs([{href:'../index.html',label:'Home'},{href:'bulk-orders/index.html',label:'Bulk Orders'}], true)}
    <h1>Bulk Workwear Orders for Australian Businesses</h1>
    <p>We supply large-volume workwear orders for companies across every industry. Get competitive pricing on hi-vis clothing, safety gear and work uniforms.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="two-col-layout">
      <div>
        <h2>How Bulk Ordering Works</h2>
        <ol style="padding-left:var(--space-lg);font-size:1rem;color:var(--grey-700);">
          <li style="margin-bottom:var(--space-md)"><strong>Tell us what you need</strong> — Use our quote form below or call us. Provide product codes if you have them.</li>
          <li style="margin-bottom:var(--space-md)"><strong>We confirm availability & price</strong> — We check stock and send you a detailed quote within 24 hours.</li>
          <li style="margin-bottom:var(--space-md)"><strong>You approve the order</strong> — Review quantities, sizes, colours and total cost.</li>
          <li style="margin-bottom:var(--space-md)"><strong>Production or dispatch</strong> — We prepare your order. Embroidery/printing available on request.</li>
          <li><strong>Delivery or pickup</strong> — Ship across Australia or collect from our Sydney Parklea Market store.</li>
        </ol>

        <h2 style="margin-top:var(--space-2xl)">We Serve These Industries</h2>
        <div class="tag-list">
          <span class="tag">&#128736; Construction & Building</span>
          <span class="tag">&#128678 Road Work & Maintenance</span>
          <span class="tag">&#128739 Rail Operations</span>
          <span class="tag">&#128230 Warehouse & Logistics</span>
          <span class="tag">&#128267 Cleaning Companies</span>
          <span class="tag">&#127795 Landscaping & Gardening</span>
          <span class="tag">&#128188 Trade Services (Plumbing, Electrical, etc.)</span>
          <span class="tag">&#127869 Hospitality & Cafes</span>
          <span class="tag">&#127970 Manufacturing & Factory</span>
          <span class="tag">&#128218 Mining Support</span>
          <span class="tag">&#128652 Transport & Freight</span>
          <span class="tag">&#127974 Security & Events</span>
        </div>

        <div style="background:var(--yellow-light);border-left:4px solid var(--orange);padding:var(--space-lg);border-radius:0 var(--radius-md) var(--radius-md) 0;margin-top:var(--space-xl)">
          <strong style="color:var(--navy);font-size:1.05rem">&#128161; No minimum order quantity required.</strong>
          <p style="margin-bottom:0;margin-top:0.25rem;font-size:0.95rem">Whether you need 10 units or 1000+, we provide flexible ordering tailored to your business size.</p>
        </div>
      </div>

      <aside class="contact-sidebar">
        <h3 style="margin-bottom:var(--space-lg)">Quick Quote Options</h3>
        <div class="contact-item">
          <div class="contact-icon">&#9993;</div>
          <div><h4>Email Us</h4><p><a href="mailto:samne8161019@hotmail.com">samne8161019@hotmail.com</a></p></div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">&#128222;</div>
          <div><h4>Call Direct</h4><p><a href="tel:0406669868">0406669868</a></p></div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">&#127970;</div>
          <div><h4>Visit Store</h4><p>Shop 298-299<br>Parklea Market NSW 2768</p></div>
        </div>
        <a href="../contact/index.html#quote" class="btn btn-primary btn-lg" style="width:100%;margin-top:var(--space-lg)">&#128220; Request Bulk Quote Form</a>
      </aside>
    </div>
  </div>
</section>

<section class="section section-grey">
  <div class="container">
    <div class="section-header">
      <span class="accent-bar accent-bar-lg"></span>
      <h2>Popular Bulk Order Categories</h2>
      <p>These are our most frequently ordered products for business customers.</p>
          </div>
    <div class="category-grid">
      <a href="../products/hi-vis-work-polos.html" class="category-card"><div class="category-card-body"><h3>Hi-Vis Polos</h3><p>Most popular for construction, logistics and trade teams.</p><span class="category-count">15 Products →</span></div></a>
      <a href="../products/safetywear-shirts.html" class="category-card"><div class="category-card-body"><h3>Safety Shirts</h3><p>With reflective tape for road/rail compliance.</p><span class="category-count">7 Products →</span></div></a>
      <a href="../products/hi-vis-vests.html" class="category-card"><div class="category-card-body"><h3>Hi-Vis Vests</h3><p>Essential safety gear for high-risk worksites.</p><span class="category-count">5 Products →</span></div></a>
      <a href="../products/work-pants.html" class="category-card"><div class="category-card-body"><h3>Work Pants</h3><p>Durable heavy-duty options with reinforced patches.</p><span class="category-count">12 Products →</span></div></a>
      <a href="../products/hi-vis-jumpers-hoodies.html" class="category-card"><div class="category-card-body"><h3>Hoodies & Jumpers</h3><p>Cold weather workwear with hi-vis options.</p><span class="category-count">8 Products →</span></div></a>
      <a href="../products/work-shorts.html" class="category-card"><div class="category-card-body"><h3>Work Shorts</h3><p>Summer workwear in cotton drill or stretch fabric.</p><span class="category-count">7 Products →</span></div></a>
    </div>
  </div>
</section>
${getFooter()}
${getScripts()}
</body></html>`);
}

// --- INDUSTRIES INDEX ---
function genIndustriesIndex() {
  const cards = INDUSTRIES.map(ind => 
    `<a href="${ind.id}.html" class="industry-card"><div class="industry-icon">&#128187;</div><h3>${ind.name}</h3><p>${ind.metaDesc.substring(0, 120)}...</p><span class="btn btn-primary btn-sm" style="margin-top:auto;display:inline-flex">View Details →</span></a>`
  ).join('');

  writePage('industries/index.html', `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Workwear by Industry | Construction, Safety, Warehouse, Cleaning Uniforms</title>
<meta name="description" content="Find the right workwear for your industry. We supply construction, road work, warehouse, cleaning, trade, hospitality and small business uniforms across Australia.">
<link rel="canonical" href="https://australiawear.com.au/industries/">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
${getHeader('Industries')}
<section class="page-hero">
  <div class="container">
    ${getBreadcrumbs([{href:'../index.html',label:'Home'},{href:'industries/index.html',label:'Industries'}], true)}
    <h1>Workwear Solutions by Industry</h1>
    <p>Every industry has different workwear needs. Find your industry and see recommended products for your team.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="industry-grid">${cards}</div>
  </div>
</section>
<section class="cta-banner">
  <div class="container"><h2>Don't See Your Industry?</h2><p>We supply workwear to all types of businesses. Contact us with your requirements.</p>
    <div class="btn-group"><a href="../contact/index.html#quote" class="btn btn-primary btn-lg">Contact Us</a></div>
  </div>
</section>
${getFooter()}
${getScripts()}
</body></html>`);
}

// --- INDUSTRY DETAIL PAGE ---
function genIndustryDetail(ind) {
  const recProducts = ind.recommendedCats.flatMap(key => (PRODUCTS[key] || []).slice(0, 2));
  const productHTML = recProducts.map(p => productCard(p)).join('');

  writePage(`industries/${ind.id}.html`, `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${ind.title}</title>
<meta name="description" content="${ind.metaDesc}">
<link rel="canonical" href="https://australiaworkwear.com.au/industries/${ind.id}">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
${getHeader('Industries')}
<section class="page-hero">
  <div class="container">
    ${getBreadcrumbs([{href:'../../index.html',label:'Home'},{href:'../industries/index.html',label:'Industries'},{href:`${ind.id}.html`,label:ind.name}], true)}
    <h1>${ind.h1}</h1>
    <p>${ind.desc}</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="two-col-layout">
      <div>
        <h2>Why Choose Australia Workwear for ${ind.name}?</h2>
        <p style="font-size:1rem;line-height:1.8;color:var(--grey-700)">As a Sydney-based workwear supplier, we understand the unique demands of ${ind.name.toLowerCase()}. Our range of hi-vis clothing, safety shirts, polos, jackets, vests, shorts and pants are designed for daily use in demanding environments.</p>
        <ul style="padding-left:var(--space-lg);margin-top:var(--space-lg)">
          <li style="margin-bottom:var(--space-sm);color:var(--grey-700)">Competitive bulk pricing for teams of any size</li>
          <li style="margin-bottom:var(--space-sm);color:var(--grey-700)">Quote by product code for fast, accurate pricing</li>
          <li style="margin-bottom:var(--space-sm);color:var(--grey-700)">Visit our Sydney store to check sizes and samples</li>
          <li style="margin-bottom:var(--space-sm);color:var(--grey-700)">Australia-wide delivery available</li>
        </ul>
        <a href="../../contact/index.html?industry=${encodeURIComponent(ind.name)}#quote" class="btn btn-primary btn-lg" style="margin-top:var(--space-xl)">Request a ${ind.name} Quote</a>
      </div>
      <aside class="contact-sidebar">
        <h3>Get Started</h3>
        <a href="../../contact/index.html#quote" class="btn btn-primary btn-lg" style="width:100%;margin-bottom:var(--space-md)">Request Quote</a>
        <a href="tel:0406669868" class="btn btn-phone btn-lg" style="width:100%">&#9742; Call 0406669868</a>
        <hr style="border-color:var(--grey-200);margin:var(--space-lg) 0">
        <p style="font-size:0.88rem;color:var(--grey-500)">Not sure which products suit your industry? Call us and we'll recommend the right workwear for your team.</p>
      </aside>
    </div>
  </div>
</section>
<section class="section section-grey">
  <div class="container">
    <div class="section-header">
      <span class="accent-bar accent-bar-lg"></span>
      <h2>Recommended Products for ${ind.name}</h2>
          </div>
    <div class="product-grid">${productHTML}</div>
  </div>
</section>
<section class="cta-banner">
  <div class="container"><h2>Ready to Outfit Your ${ind.name} Team?</h2>
    <p>Send us your requirements and we'll respond with a competitive bulk quote within 24 hours.</p>
    <div class="btn-group">
      <a href="../../contact/index.html?industry=${encodeURIComponent(ind.name)}#quote" class="btn btn-primary btn-lg">Request Quote Now</a>
      <a href="tel:0406669868" class="btn btn-outline-white btn-lg">&#9742; Or Call Us</a>
    </div>
  </div>
</section>
${getFooter()}
<script type="application/ld+json">@{"@context":"https://schema.org","@type":"WebPage","name":"${ind.h1}","description":"${ind.metaDesc}"}</script>
${getScripts()}
</body></html>`);
}

// --- LOCATIONS INDEX ---
function genLocationsIndex() {
  const cards = LOCATIONS.filter(l => l.id !== 'australia').map(loc =>
    `<a href="${loc.id}.html" class="industry-card"><div class="industry-icon">&#128205;</div><h3>Workwear Supplier ${loc.name}</h3><p>Sydney-based workwear supplier delivering to ${loc.name}${loc.state ? ', '+loc.state : ''}. Bulk orders welcome.</p><span class="btn btn-primary btn-sm" style="margin-top:auto;display:inline-flex">View Details →</span></a>`
  ).join('');

  writePage('locations/index.html', `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Workwear Locations | Sydney, Melbourne, Brisbane, Adelaide, Perth, Canberra</title>
<meta name="description" content="Australia Workwear is based in Sydney but delivers workwear and hi-vis safety clothing to Melbourne, Brisbane, Adelaide, Perth, Canberra and all Australian cities.">
<link rel="canonical" href="https://australiawear.com.au/locations/">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
${getHeader('Locations')}
<section class="page-hero">
  <div class="container">
    ${getBreadcrumbs([{href:'../index.html',label:'Home'},{href:'locations/index.html',label:'Locations'}], true)}
    <h1>Australia-Wide Workwear Delivery</h1>
    <p>We are a Sydney-based workwear supplier serving businesses across all states and territories.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="industry-grid">${cards}</div>
    <div style="text-align:center;margin-top:var(--space-2xl);padding:var(--space-xl);background:var(--grey-50);border-radius:var(--radius-lg)">
      <h3 style="margin-bottom:var(--space-sm)">Based in Sydney, Serving Australia</h3>
      <p style="max-width:600px;margin:0 auto;color:var(--grey-600)">Our physical store is at Shop 298-299, Parklea Market, NSW 2768. From here we pack and ship workwear to businesses in every state and territory.</p>
    </div>
  </div>
</section>
<section class="cta-banner">
  <div class="container"><h2>Where Are You Located?</h2><p>Tell us your city and we'll arrange delivery. Bulk quotes available nationwide.</p>
    <div class="btn-group"><a href="../contact/index.html#quote" class="btn btn-primary btn-lg">Request a Quote</a></div>
  </div>
</section>
${getFooter()}
${getScripts()}
</body></html>`);
}

// --- LOCATION DETAIL PAGE ---
function genLocationDetail(loc) {
  const otherLocs = LOCATIONS.filter(l => l.id !== loc.id && l.id !== 'australia').slice(0, 4);

  writePage(`locations/${loc.id}.html`, `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${loc.title}</title>
<meta name="description" content="${loc.metaDesc}">
<link rel="canonical" href="https://australiawear.com.au/locations/${loc.id}">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
${getHeader('Locations')}
<section class="page-hero">
  <div class="container">
    ${getBreadcrumbs([{href:'../../index.html',label:'Home'},{href:'../locations/index.html',label:'Locations'},{href:`${loc.id}.html`,label:loc.name}], true)}
    <h1>${loc.h1}</h1>
    <p>${loc.desc} We deliver quality workwear and hi-vis safety clothing to ${loc.name}${loc.state ? ' (' + loc.state + ')' : ''} and surrounding areas.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="two-col-layout">
      <div>
        <h2>Workwear Delivered to ${loc.name}</h2>
        <p style="font-size:1rem;line-height:1.8;color:var(--grey-700)">Although our physical showroom is in Sydney at Parklea Market, we regularly ship workwear to ${loc.name}-based businesses. Whether you're in ${loc.state || 'this area'} or regional locations nearby, we can supply:</p>
        <ul style="padding-left:var(--space-lg);margin-top:var(--space-md)">
          <li style="margin-bottom:var(--space-sm);color:var(--grey-700)">Hi-vis safety shirts and polos</li>
          <li style="margin-bottom:var(--space-sm);color:var(--grey-700)">Reflective tape vests and jackets</li>
          <li style="margin-bottom:var(--space-sm);color:var(--grey-700)">Work pants, shorts and drill shirts</li>
          <li style="margin-bottom:var(--space-sm);color:var(--grey-700)">Hoodies and cold-weather gear</li>
          <li style="margin-bottom:var(--space-sm);color:var(--grey-700)">Bulk order packages with mixed sizes</li>
        </ul>
        <div style="display:flex;gap:var(--space-md);margin-top:var(--space-xl);flex-wrap:wrap">
          <a href="../../contact/index.html?cityState=${encodeURIComponent(loc.name)}#quote" class="btn btn-primary btn-lg">Request ${loc.name} Quote</a>
          <a href="tel:0406669868" class="btn btn-phone btn-lg">&#9742; Call Us</a>
        </div>
      </div>
      <aside class="contact-sidebar">
        <h3>Our Base</h3>
        <div class="contact-item"><div class="contact-icon">&#127970;</div><div><h4>Store Address</h4><p>Shop 298-299<br>Parklea Market NSW 2768</p></div></div>
        <div class="contact-item"><div class="contact-icon">&#128222;</div><div><h4>Phone</h4><p><a href="tel:0406669868">0406669868</a></p></div></div>
        <div class="contact-item"><div class="contact-icon">&#128205;</div><div><h4>Delivery</h4><p>To ${loc.name} &amp; all of ${loc.state||'Australia'}</p></div></div>
      </aside>
    </div>
  </div>
</section>
<section class="section section-grey">
  <div class="container">
    <div class="section-header"><h2>We Also Serve</h2><div class="highlight-line"></div></div>
    <div class="industry-grid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">
      ${otherLocs.map(l => `<a href="${l.id}.html" class="industry-card"><h3>${l.name}</h3><p style="font-size:0.85rem">Workwear delivered to ${l.name}</p></a>`).join('')}
    </div>
  </div>
</section>
<section class="cta-banner">
  <div class="container"><h2>Need Workwear in ${loc.name}?</h2><p>Contact us for a no-obligation quote. Fast response, competitive pricing, Australia-wide delivery.</p>
    <div class="btn-group"><a href="../../contact/index.html?cityState=${encodeURIComponent(loc.name)}#quote" class="btn btn-primary btn-lg">Get Your Quote</a></div>
  </div>
</section>
${getFooter()}
${getScripts()}
</body></html>`);
}

// --- ABOUT PAGE ---
function genAbout() {
  writePage('about/index.html', `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About Australia Workwear | Sydney-Based Hi-Vis & Safety Clothing Supplier</title>
<meta name="description" content="Learn about Australia Workwear — a Sydney-based workwear and hi-vis safety clothing supplier located at Parklea Market. Visit our store or order online with Australia-wide delivery.">
<link rel="canonical" href="https://australiawear.com.au/about/">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
${getHeader('About')}
<section class="page-hero">
  <div class="container">
    ${getBreadcrumbs([{href:'../index.html',label:'Home'},{href:'about/index.html',label:'About Us'}], true)}
    <h1>About Australia Workwear</h1>
    <p>Sydney-based workwear and hi-vis safety clothing supplier for businesses across Australia.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="two-col-layout">
      <div>
        <h2>Who We Are</h2>
        <p style="font-size:1.05rem;line-height:1.8;color:var(--grey-700)"><strong>Australia Workwear</strong> is a Sydney-based supplier of workwear, hi-vis safety clothing and uniforms for businesses across Australia. Our physical store is located at <strong>Shop 298-299, Parklea Market, 601 Sunnyholt Rd, NSW 2768</strong>.</p>
        <p style="font-size:1.05rem;line-height:1.8;color:var(--grey-700)">We supply reliable workwear including hi-vis shirts, safety polos, reflective vests, work jackets, fleecy hoodies, heavy-duty work pants, cotton drill shorts and much more.</p>
        
        <h2 style="margin-top:var(--space-2xl)">What We Offer</h2>
        <div class="industry-grid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">
          <div class="industry-card" style="padding:var(--space-md)"><div class="industry-icon">&#128086;</div><h3 style="font-size:0.95rem">60+ Products</h3></div>
          <div class="industry-card" style="padding:var(--space-md)"><div class="industry-icon">&#127970;</div><h3 style="font-size:0.95rem">Sydney Store</h3></div>
          <div class="industry-card" style="padding:var(--space-md)"><div class="industry-icon">&#128722;</div><h3 style="font-size:0.95rem">Nationwide Delivery</h3></div>
          <div class="industry-card" style="padding:var(--space-md)"><div class="industry-icon">&#128200;</div><h3 style="font-size:0.95rem">Bulk Orders</h3></div>
          <div class="industry-card" style="padding:var(--space-md)"><div class="industry-icon">&#128196;</div><h3 style="font-size:0.95rem">Quote by Code</h3></div>
          <div class="industry-card" style="padding:var(--space-md)"><div class="industry-icon">&#9989;</div><h3 style="font-size:0.95rem">Size Sampling</h3></div>
        </div>

        <h2 style="margin-top:var(--space-2xl)">Why Businesses Choose Us</h2>
        <ul style="padding-left:var(--space-lg);line-height:2">
          <li><strong>Sydney physical store</strong> — Come see samples, try on sizes, talk to us face-to-face</li>
          <li><strong>Bulk order specialists</strong> — Competitive pricing on volume orders of any size</li>
          <li><strong>Australia-wide shipping</strong> — We deliver to all states and territories</li>
          <li><strong>Wide product range</strong> — Hi-vis, safety wear, work polos, jackets, pants, shorts, vests, hoodies</li>
          <li><strong>Flexible quoting</strong> — By product code, category or custom requirement</li>
          <li><strong>No retail markup</strong> — Business-focused pricing without retail overheads</li>
        </ul>
      </div>
      
      <aside class="contact-sidebar">
        <h3>Visit Our Store</h3>
        <div class="map-embed">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.45!2d150.9546!3d-33.7548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ1JzEyLjEiTiAxNTDCsDU3JzE2LjYiRQ!5e0!3m2!1sen!2sau!4v1" allowfullscreen loading="lazy"></iframe>
        </div>
        <div style="margin-top:var(--space-lg)">
          <div class="contact-item"><div class="contact-icon">&#128205;</div><div><h4>Address</h4><p>Shop 298-299, Parklea Market<br>601 Sunnyholt Rd<br>NSW 2768</p></div></div>
          <div class="contact-item"><div class="contact-icon">&#128222;</div><div><h4>Phone</h4><p><a href="tel:0406669868">0406669868</a></p></div></div>
          <div class="contact-item"><div class="contact-icon">&#9993;</div><div><h4>Email</h4><p><a href="mailto:samne8161019@hotmail.com">samne8161019@hotmail.com</a></p></div></div>
          <div class="contact-item"><div class="contact-icon">&#128336;</div><div><h4>Hours</h4><p>Parklea Market hours<br>(Wed–Sun)</p></div></div>
        </div>
      </aside>
    </div>
  </div>
</section>
${getFooter()}
${getScripts()}
</body></html>`);
}

// --- CONTACT / QUOTE PAGE ---
function genContact() {
  writePage('contact/index.html', `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Request a Quote | Contact Australia Workwear Sydney</title>
<meta name="description" content="Request a workwear quote from Australia Workwear Sydney. Fill in our form or call 0406669868 for bulk pricing on hi-vis clothing, safety shirts, polos, vests, jackets and more.">
<link rel="canonical" href="https://australiawear.com.au/contact/">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
${getHeader('Contact')}
<section class="page-hero">
  <div class="container">
    ${getBreadcrumbs([{href:'../index.html',label:'Home'},{href:'contact/index.html',label:'Request a Quote'}], true)}
    <h1>Request a Workwear Quote</h1>
    <p>Fill in the form below or call us directly. We'll respond with pricing and availability within 24 hours.</p>
  </div>
</section>
<section class="section" id="quote">
  <div class="container">
    <div class="two-col-layout">
      <div class="quote-form-container" id="quoteFormContainer">
        <form id="quoteForm" action="#" method="post" novalidate>
          <div id="formMessage"></div>
          
          <div class="form-row">
            <div class="form-group"><label for="qName">Full Name *</label><input type="text" id="qName" name="name" class="form-control" placeholder="Your full name" required></div>
            <div class="form-group"><label for="qCompany">Company Name</label><input type="text" id="qCompany" name="companyName" class="form-control" placeholder="Your company name"></div>
          </div>
          
          <div class="form-row">
            <div class="form-group"><label for="qEmail">Email Address *</label><input type="email" id="qEmail" name="email" class="form-control" placeholder="your@email.com" required></div>
            <div class="form-group"><label for="qPhone">Phone Number *</label><input type="tel" id="qPhone" name="phone" class="form-control" placeholder="04XX XXX XXX" required></div>
          </div>
          
          <div class="form-row">
            <div class="form-group"><label for="qCity">City / State</label><input type="text" id="qCity" name="cityState" class="form-control" placeholder="e.g. Sydney, NSW"></div>
            <div class="form-group"><label for="qIndustry">Industry</label>
              <select id="qIndustry" name="industry" class="form-control">
                <option value="">Select your industry...</option>
                <option value="Construction">Construction & Building</option>
                <option value="Road/Rail Work">Road Work & Rail Work</option>
                <option value="Warehouse/Logistics">Warehouse & Logistics</option>
                <option value="Cleaning">Cleaning Company</option>
                <option value="Landscaping">Landscaping & Gardening</option>
                <option value="Trades">Trade Services (Plumber, Electrician etc.)</option>
                <option value="Hospitality">Hospitality & Cafe</option>
                <option value="Small Business">Small Business</option>
                <option value="Manufacturing">Manufacturing & Factory</option>
                <option value="Mining">Mining Support</option>
                <option value="Transport">Transport & Freight</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group"><label for="qCategory">Product Category</label>
              <select id="qCategory" name="productCategory" class="form-control">
                <option value="">Select a category...</option>
                <option value="Workwear Shirts">Workwear Shirts</option>
                <option value="Safetywear Shirts">Safetywear Shirts</option>
                <option value="Hi-Vis & Work Polos">Hi-Vis & Work Polos</option>
                <option value="Hi-Vis Singlet & T-Shirts">Hi-Vis Singlet & T-Shirts</option>
                <option value="Hi-Vis Jumpers & Hoodies">Hi-Vis Jumpers & Hoodies</option>
                <option value="Hi-Vis Vests">Hi-Vis Vests</option>
                <option value="Hi-Vis & Work Jackets">Hi-Vis & Work Jackets</option>
                <option value="Work Shorts">Work Shorts</option>
                <option value="Work Pants">Work Pants</option>
                <option value="Multiple Categories">Multiple Categories</option>
              </select>
            </div>
            <div class="form-group"><label for="qCode">Product Code (if known)</label><input type="text" id="qCode" name="productCode" class="form-control" placeholder="e.g. 8060, J0077"></div>
          </div>

          <div class="form-row">
            <div class="form-group"><label for="qQty">Quantity Required</label><input type="text" id="qQty" name="quantity" class="form-control" placeholder="e.g. 50 units, 20 sets"></div>
            <div class="form-group"><label for="qDelivery">Delivery or Pickup?</label>
              <select id="qDelivery" name="deliveryPickup" class="form-control">
                <option value="">Select preference...</option>
                <option value="Sydney Pick-up">Sydney Pick-up (from Parklea Market)</option>
                <option value="Delivered to my address">Delivered to my address</option>
                <option value="Either is fine">Either is fine</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group"><label for="qSizes">Sizes Required</label><input type="text" id="qSizes" name="sizesRequired" class="form-control" placeholder="e.g. S, M, L, XL (10 each)"></div>
            <div class="form-group"><label for="qColours">Colours Required</label><input type="text" id="qColours" name="coloursRequired" class="form-control" placeholder="e.g. Orange/Navy, Navy"></div>
          </div>

          <div class="form-group">
            <label for="qMessage">Additional Message</label>
            <textarea id="qMessage" name="message" class="form-control" rows="4" placeholder="Tell us about your requirements... embroidery needed? specific deadline? special requests?"></textarea>
          </div>

          <div style="display:flex;gap:var(--space-md);flex-wrap:wrap;margin-top:var(--space-lg)">
            <button type="submit" class="btn btn-primary btn-lg" style="flex:1">&#128220; Submit Quote Request</button>
            <a href="tel:0406669868" class="btn btn-phone btn-lg">&#9742; Prefer to Call</a>
          </div>
        </form>
      </div>

      <aside class="contact-sidebar">
        <h3>Other Ways to Reach Us</h3>
        <div class="contact-item"><div class="contact-icon">&#128222;</div><div><h4>Call Direct</h4><p><a href="tel:0406669868" style="font-size:1.2rem">0406669868</a></p><p class="form-hint">Available during market hours</p></div></div>
        <div class="contact-item"><div class="contact-icon">&#9993;</div><div><h4>Email Us</h4><p><a href="mailto:samne8161019@hotmail.com">samne8161019@hotmail.com</a></p><p class="form-hint">For written enquiries</p></div></div>
        <div class="contact-item"><div class="contact-icon">&#127970;</div><div><h4>Visit Our Store</h4><p>Shop 298-299<br>Parklea Market<br>NSW 2768</p><p class="form-hint">Check sizes & samples in person</p></div></div>
        <div class="contact-item"><div class="contact-icon">&#128205;</div><div><h4>Directions</h4><p><a href="https://maps.google.com/?q=601+Sunnyholt+Rd+Parklea+NSW+2768" target="_blank" rel="noopener">Open Google Maps →</a></p></div></div>
      </aside>
    </div>
  </div>
</section>
<section class="section section-grey">
  <div class="container">
    <div class="section-header">
      <span class="accent-bar accent-bar-lg"></span>
      <h2>Frequently Asked Questions</h2>
          </div>
    <div class="faq-list" id="faqListContact">
      <!-- Populated by JS -->
    </div>
  </div>
</section>
${getFooter()}
<script type="application/ld+json">@{"@context":"https://schema.org","@type":"ContactPage","name":"Request a Workwear Quote"}</script>
${getScripts()}
<script>
const faqEl = document.getElementById('faqListContact');
if (faqEl && typeof FAQS !== 'undefined') {
  FAQS.forEach(function(f, i) {
    var activeClass = (i === 0) ? ' active' : '';
    faqEl.innerHTML += '<div class="faq-item'+activeClass+'"><button class="faq-question">'+f.q+'</button><div class="faq-answer"><div class="faq-answer-inner">'+f.a+'</div></div></div>';
  });
}
</script>
</body></html>`);
}

// --- FAQ PAGE ---
function genFAQ() {
  let faqItems = FAQS.map((f, i) =>
    `<div class="faq-item${i === 0 ? ' active' : ''}"><button class="faq-question">${f.q}</button><div class="faq-answer"><div class="faq-answer-inner">${f.a}</div></div></div>`
  ).join('');

  writePage('faq/index.html', `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FAQ | Australia Workwear - Common Questions About Our Service</title>
<meta name="description" content="Frequently asked questions about Australia Workwear: store location, delivery areas, bulk ordering, hi-vis products, sizing, pricing and more.">
<link rel="canonical" href="https://australiawear.com.au/faq/">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
${getHeader('FAQ')}
<section class="page-hero">
  <div class="container">
    ${getBreadcrumbs([{href:'../index.html',label:'Home'},{href:'faq/index.html',label:'FAQ'}], true)}
    <h1>Frequently Asked Questions</h1>
    <p>Everything you need to know about ordering workwear from Australia Workwear.</p>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="faq-list" id="faqListFull">${faqItems}</div>
  </div>
</section>
<section class="cta-banner">
  <div class="container"><h2>Still Have Questions?</h2><p>We're happy to help. Call or message us anytime.</p>
    <div class="btn-group">
      <a href="../contact/index.html#quote" class="btn btn-primary btn-lg">Request a Quote</a>
      <a href="tel:0406669868" class="btn btn-outline-white btn-lg">&#9742; Call 0406669868</a>
    </div>
  </div>
</section>
${getFooter()}
<script type="application/ld+json">@{"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(f=>({"@type":"Question","name":f.q,"acceptedAnswer":{"@type":"Answer","text":f.a}}))}</script>
${getScripts()}
</body></html>`);
}

// ============================================================
// MAIN EXECUTION
// ============================================================

console.log('🏗️ Generating Australia Workwear website...\n');

genProductsIndex();
genBulkOrders();
genIndustriesIndex();
genLocationsIndex();
genAbout();
genContact();
genFAQ();

// Generate each product category page
CATEGORIES.forEach(cat => genProductCategory(cat.id));

// Generate each industry page
INDUSTRIES.forEach(ind => genIndustryDetail(ind));

// Generate each location page
LOCATIONS.forEach(loc => genLocationDetail(loc));

console.log('\n✅ All pages generated successfully!');
