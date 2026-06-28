/* ============================================
   Niloras — SCRIPT
   ⚙️  UPDATE: Replace 919876543210 with your actual
       WhatsApp number (country code + number, no spaces)

       WhatsApp number — Open script.js line 10, change 919876543210 to your actual number (no spaces or +)

Bird photos — Add your photos to the [images/](C:\Users\Vidhya\nilas-aviary\images) folder with these exact filenames:
african-grey.jpg, cockatiel-grey.jpg, cockatiel-lutino.jpg, budgerigar.jpg, lovebird.jpg, sun-conure.jpg, alexandrine.jpg, ringneck-green.jpg, ringneck-blue.jpg, canary.jpg, zebra-finch.jpg, macaw.jpg
(Until you add photos, a coloured emoji placeholder shows automatically)

Contact details — Search for nilasaviary@gmail.com and Your City, India in index.html and replace with your actual details
   ============================================ */

const WA_NUMBER = '917200911938'; // ← UPDATE THIS

/* ============================================
   BIRD DATA
   ─────────────────────────────────────────
   To add a bird: copy one entry, change the values.
   image: put your photo in the /images/ folder and
          set the filename here (e.g. 'images/myphoto.jpg').
          If the file is missing the emoji shows instead.
   ============================================ */
const birds = [
    {
        id: 1,
        name: 'African Grey Parrot',
        species: 'Psittacus erithacus',
        age: '3–4 Months',
        color: 'Grey & Red Tail',
        gender: 'Male / Female',
        size: '33 cm',
        lifespan: '40–60 Years',
        diet: 'Seeds, Fruits, Nuts',
        talking: 'Excellent Talker',
        price: 45000,
        category: ['parrot', 'exotic'],
        badge: 'Popular',
        available: true,
        emoji: '🦜',
        image: 'images/our_bird.jpg',
        description: 'The African Grey Parrot is considered the most intelligent bird in the world. Renowned for exceptional talking ability and deep emotional bonds with their owners. Our birds are hand-raised from chicks for maximum tameness.'
    },
    {
        id: 2,
        name: 'Cockatiel – Normal Grey',
        species: 'Nymphicus hollandicus',
        age: '6–8 Weeks',
        color: 'Grey & Yellow',
        gender: 'Male / Female',
        size: '30–33 cm',
        lifespan: '15–25 Years',
        diet: 'Seeds, Pellets, Greens',
        talking: 'Whistles & Tunes',
        price: 3500,
        category: ['parrot', 'small'],
        badge: 'Popular',
        available: true,
        emoji: '🐦',
        image: '',
        description: 'Cockatiels are one of the most loved pet birds. Friendly, playful, and easy to care for. Our hand-raised babies are tame and social from a young age — perfect for families and first-time bird owners.'
    },
    {
        id: 3,
        name: 'Cockatiel – Lutino',
        species: 'Nymphicus hollandicus',
        age: '6–8 Weeks',
        color: 'Bright Yellow & White',
        gender: 'Male / Female',
        size: '30–33 cm',
        lifespan: '15–25 Years',
        diet: 'Seeds, Pellets, Greens',
        talking: 'Whistles & Tunes',
        price: 4500,
        category: ['parrot', 'small'],
        badge: 'New',
        available: true,
        emoji: '🌟',
        image: '',
        description: 'The Lutino Cockatiel is a stunning yellow-white mutation of the classic cockatiel. Equally loving and fun, with striking bright coloration. A true showstopper that brings sunshine to any home.'
    },
    {
        id: 4,
        name: 'Budgerigar',
        species: 'Melopsittacus undulatus',
        age: '4–6 Weeks',
        color: 'Various Colours',
        gender: 'Male / Female',
        size: '18–20 cm',
        lifespan: '5–10 Years',
        diet: 'Seeds, Fruits, Greens',
        talking: 'Good Talker',
        price: 1200,
        category: ['small', 'pair'],
        badge: 'Best Value',
        available: true,
        emoji: '💚',
        image: '',
        description: 'Budgies are the perfect starter bird — small, cheerful, and easy to maintain. Available in a beautiful variety of colours. With patience they can learn to talk, whistle tunes, and even do tricks.'
    },
    {
        id: 5,
        name: "Fischer's Lovebird",
        species: 'Agapornis fischeri',
        age: '6–8 Weeks',
        color: 'Green, Orange & Yellow',
        gender: 'Pair Available',
        size: '14–15 cm',
        lifespan: '12–15 Years',
        diet: 'Seeds, Fruits, Greens',
        talking: 'Limited Talking',
        price: 4000,
        category: ['small', 'pair', 'exotic'],
        badge: 'Pair',
        available: true,
        emoji: '❤️',
        image: '',
        description: "Fischer's Lovebirds are affectionate, vibrant birds that thrive in pairs. Their playful personalities and jewel-like colours make them a joy to keep. Best homed as bonded pairs for maximum happiness."
    },
    {
        id: 6,
        name: 'Sun Conure',
        species: 'Aratinga solstitialis',
        age: '3–4 Months',
        color: 'Golden Yellow & Orange',
        gender: 'Male / Female',
        size: '28–30 cm',
        lifespan: '20–30 Years',
        diet: 'Fruits, Seeds, Pellets',
        talking: 'Some Words',
        price: 25000,
        category: ['parrot', 'exotic'],
        badge: 'Rare',
        available: true,
        emoji: '☀️',
        image: 'images/sun-conure.jpg',
        description: 'Sun Conures are breathtakingly beautiful birds with vibrant orange-yellow plumage. Bold, playful, and deeply affectionate — they love being the centre of attention and bond closely with their family.'
    },
    {
        id: 7,
        name: 'Alexandrine Parakeet',
        species: 'Psittacula eupatria',
        age: '2–3 Months',
        color: 'Green with Red Shoulder',
        gender: 'Male / Female',
        size: '56–62 cm',
        lifespan: '25–30 Years',
        diet: 'Seeds, Fruits, Nuts',
        talking: 'Good Talker',
        price: 8500,
        category: ['parrot'],
        badge: null,
        available: true,
        emoji: '🌿',
        image: 'images/lorry.jpg',
        description: 'The Alexandrine Parakeet is one of the largest and most majestic parakeets available. Intelligent and good talkers, they develop deep bonds with their owners over time. A regal addition to any home.'
    },
    {
        id: 8,
        name: 'Indian Ringneck – Green',
        species: 'Psittacula krameri manillensis',
        age: '2–3 Months',
        color: 'Bright Green',
        gender: 'Male / Female',
        size: '38–42 cm',
        lifespan: '20–30 Years',
        diet: 'Seeds, Fruits, Vegetables',
        talking: 'Excellent Talker',
        price: 3500,
        category: ['parrot'],
        badge: null,
        available: true,
        emoji: '🦚',
        image: '',
        description: 'The Indian Ringneck is a popular pet bird loved for its intelligence and talking ability. The classic green coloration is stunning and they can learn many words, phrases, and even songs.'
    },
    {
        id: 9,
        name: 'Indian Ringneck – Blue',
        species: 'Psittacula krameri manillensis',
        age: '2–3 Months',
        color: 'Vibrant Blue',
        gender: 'Male / Female',
        size: '38–42 cm',
        lifespan: '20–30 Years',
        diet: 'Seeds, Fruits, Vegetables',
        talking: 'Excellent Talker',
        price: 8000,
        category: ['parrot', 'exotic'],
        badge: 'New',
        available: true,
        emoji: '💙',
        image: 'images/sun-conure_background.jpg',
        description: 'The Blue Ringneck is a gorgeous colour mutation of the classic IRN. Just as intelligent and vocal as the green variety but with a breathtaking blue plumage that turns every head.'
    },
    {
        id: 10,
        name: 'Canary',
        species: 'Serinus canaria domestica',
        age: '3–4 Months',
        color: 'Yellow / Orange',
        gender: 'Male (Singer)',
        size: '12–14 cm',
        lifespan: '10–15 Years',
        diet: 'Seeds, Fruits, Greens',
        talking: 'Beautiful Singer',
        price: 2500,
        category: ['small'],
        badge: null,
        available: true,
        emoji: '🎵',
        image: '',
        description: 'Canaries are prized for their rich, melodious song. Male canaries fill the room with beautiful music every morning. Perfect for those who love bird song but prefer a low-maintenance companion.'
    },
    {
        id: 11,
        name: 'Zebra Finch Pair',
        species: 'Taeniopygia guttata',
        age: '8–10 Weeks',
        color: 'Grey, White & Orange',
        gender: 'Breeding Pair',
        size: '10 cm',
        lifespan: '5–9 Years',
        diet: 'Seeds, Greens',
        talking: 'Cheerful Chirping',
        price: 1800,
        category: ['small', 'pair'],
        badge: 'Pair',
        available: true,
        emoji: '🐤',
        image: '',
        description: 'Zebra Finches are delightful, low-maintenance birds perfect for beginners and small spaces. Available as breeding pairs, they are social, entertaining to watch, and very hardy birds.'
    },
    {
        id: 12,
        name: 'Blue & Gold Macaw',
        species: 'Ara ararauna',
        age: '4–5 Months',
        color: 'Blue & Gold',
        gender: 'Male / Female',
        size: '76–86 cm',
        lifespan: '50–60 Years',
        diet: 'Fruits, Nuts, Seeds, Pellets',
        talking: 'Excellent Talker',
        price: 120000,
        category: ['parrot', 'exotic'],
        badge: 'Rare',
        available: false,
        emoji: '🦋',
        image: 'images/Macaw.jpg',
        description: 'The Blue & Gold Macaw is the king of companion parrots. Magnificent, intelligent, and long-lived — they are a lifetime commitment and an extraordinary companion. Currently accepting waitlist enquiries.'
    }
];

/* ============================================
   SAMPLE REVIEWS (pre-loaded)
   ============================================ */
let reviews = [
    { name: 'Priya Sharma',      bird: 'Cockatiel',         rating: 5, text: 'Absolutely wonderful experience! My cockatiel has been with us for 6 months and is the best thing to happen to our home. Very tame, healthy, and the guidance provided was invaluable.',          initials: 'PS', date: 'December 2024' },
    { name: 'Rahul Venkatesh',   bird: 'African Grey',      rating: 5, text: 'My African Grey was hand-raised and incredibly tame from day one. Nila answered all post-purchase queries on WhatsApp promptly. Already saying 15+ words at 6 months!',                            initials: 'RV', date: 'November 2024' },
    { name: 'Deepa & Anand',     bird: "Fischer's Lovebird",rating: 5, text: 'We got a Fischer\'s Lovebird pair and they are so full of life. Birds were healthy and active as described. Nila was very helpful on diet and cage setup. Highly recommend!',                    initials: 'DA', date: 'October 2024' },
    { name: 'Karthik M',         bird: 'Indian Ringneck',   rating: 5, text: 'Got a Blue IRN for my daughter\'s birthday — best gift ever! The bird is tame, playful, and has already started whistling. Thank you Nila\'s Aviary for such a wonderful bird!',               initials: 'KM', date: 'September 2024' },
    { name: 'Sunita Patel',      bird: 'Canary',            rating: 4, text: 'My canary sings the most beautiful songs every morning! Brought so much joy to our home. The buying process via WhatsApp was smooth and delivery was safe and well-packaged.',                   initials: 'SP', date: 'August 2024' },
    { name: 'Arjun & Family',    bird: 'Sun Conure',        rating: 5, text: 'We were nervous first-time bird owners but Nila\'s team was so patient and thorough. Our Sun Conure is stunning and incredibly playful. Continuous support even after purchase!',               initials: 'AF', date: 'July 2024' }
];

/* ============================================
   UTILITIES
   ============================================ */
function inr(n)  { return '₹' + n.toLocaleString('en-IN'); }
function waLink(msg) { return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`; }

function toast(msg, type = '') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast show' + (type ? ' ' + type : '');
    clearTimeout(t._tm);
    t._tm = setTimeout(() => { t.className = 'toast'; }, 3200);
}

/* ============================================
   NAVBAR
   ============================================ */
const navToggle = document.getElementById('navToggle');
const navMenu   = document.getElementById('navMenu');
const navbar    = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.innerHTML = open ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});
document.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
}));

/* ============================================
   BIRDS — RENDER
   ============================================ */
const BADGE_CLASS = { Popular: 'badge-popular', New: 'badge-new', Pair: 'badge-pair', Rare: 'badge-rare', 'Best Value': 'badge-value', Bestseller: 'badge-popular', Premium: 'badge-rare' };

function renderBirds(list) {
    const grid = document.getElementById('birdsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    if (!list.length) {
        grid.innerHTML = '<div class="no-results"><i class="fas fa-dove"></i><h3>No birds found</h3><p>Try a different search or filter</p></div>';
        return;
    }
    list.forEach(b => {
        const waMsg = `Hi Niloras! I'm interested in the *${b.name}* (${inr(b.price)}). Please share availability and details.`;
        const card = document.createElement('div');
        card.className = 'bird-card';
        card.innerHTML = `
            <div class="img-wrap">
                <img class="card-img" src="${b.image}" alt="${b.name}"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="img-placeholder" style="display:none">${b.emoji}</div>
                ${b.badge ? `<div class="card-badge ${BADGE_CLASS[b.badge] || ''}">${b.badge}</div>` : ''}
                <div class="avail-dot${b.available ? '' : ' out'}" title="${b.available ? 'Available' : 'Waitlist'}"></div>
            </div>
            <div class="card-body">
                <div class="card-title">${b.name}</div>
                <div class="card-sp">${b.species}</div>
                <div class="card-specs">
                    <span class="spec"><i class="fas fa-seedling"></i>${b.age}</span>
                    <span class="spec"><i class="fas fa-palette"></i>${b.color}</span>
                    <span class="spec"><i class="fas fa-comment-dots"></i>${b.talking}</span>
                </div>
                <div class="card-foot">
                    <div>
                        <div class="price-lbl">Price</div>
                        <div class="price-amt">${inr(b.price)}</div>
                    </div>
                    <div class="card-actions">
                        <button class="ic-btn inf-btn" data-id="${b.id}" title="View Details"><i class="fas fa-info"></i></button>
                        <div class="card-qty-wrap" data-id="${b.id}" data-type="bird" data-name="${b.name}" data-price="${b.price}" data-image="${b.image}" data-emoji="${b.emoji}"></div>
                    </div>
                </div>
            </div>`;
        card.addEventListener('click', e => { if (!e.target.closest('.card-actions')) openModal(b.id); });
        card.querySelector('.inf-btn').addEventListener('click', e => { e.stopPropagation(); openModal(b.id); });
        grid.appendChild(card);
    });
    if (typeof refreshAllQtyWraps === 'function') refreshAllQtyWraps();
}

/* ============================================
   FILTER + SEARCH
   ============================================ */
let activeFilter = 'all';
document.querySelectorAll('#birdsFilter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#birdsFilter .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        applyFilters();
    });
});
if (document.getElementById('searchInput')) document.getElementById('searchInput').addEventListener('input', applyFilters);

function applyFilters() {
    const q = document.getElementById('searchInput').value.toLowerCase().trim();
    renderBirds(birds.filter(b => {
        const ok = activeFilter === 'all' || b.category.includes(activeFilter);
        const match = !q || b.name.toLowerCase().includes(q) || b.species.toLowerCase().includes(q) || b.color.toLowerCase().includes(q);
        return ok && match;
    }));
}

/* ============================================
   MODAL
   ============================================ */
function openModal(id) {
    const b = birds.find(x => x.id === id);
    if (!b) return;
    const waMsg = `Hi Niloras! I'd like to order the *${b.name}* (${inr(b.price)}). Please confirm availability and next steps.`;
    document.getElementById('modalContent').innerHTML = `
        <img class="modal-img" src="${b.image}" alt="${b.name}"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="modal-ph" style="display:none">${b.emoji}</div>
        <div class="modal-body">
            <div class="modal-name">${b.name}</div>
            <div class="modal-spc">${b.species}</div>
            <div class="modal-price">${inr(b.price)}</div>
            <p class="modal-desc">${b.description}</p>
            <div class="modal-specs">
                ${[
                    ['Age', b.age], ['Colour', b.color], ['Gender', b.gender],
                    ['Size', b.size], ['Lifespan', b.lifespan], ['Diet', b.diet],
                    ['Talking', b.talking],
                    ['Availability', b.available
                        ? '<span style="color:#4CAF50;font-weight:700">✓ Available Now</span>'
                        : '<span style="color:#EF4444;font-weight:700">⚠ Waitlist Only</span>']
                ].map(([l,v]) => `<div><div class="ms-label">${l}</div><div class="ms-val">${v}</div></div>`).join('')}
            </div>
            <div class="modal-actions">
                <a href="${waLink(waMsg)}" class="btn btn-whatsapp" target="_blank">
                    <i class="fab fa-whatsapp"></i> Order on WhatsApp
                </a>
                <button class="btn btn-outline" onclick="closeModal();fillOrder('${b.name.replace(/'/g,"\\'")}')">
                    <i class="fas fa-clipboard-list"></i> Fill Order Form
                </button>
            </div>
        </div>`;
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}
if (document.getElementById('modalClose')) document.getElementById('modalClose').addEventListener('click', closeModal);
if (document.getElementById('modalOverlay')) document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === document.getElementById('modalOverlay')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ============================================
   ORDER FORM
   ============================================ */
function populateSelect() {
    const sel = document.getElementById('orderBird');
    if (!sel) return;

    const items = [
        { group: '🦜 Birds',        options: ['Cockatiels', 'Lovebirds & Parrots', 'Budgies', 'Other Birds'] },
        { group: '🌿 Bird Food',     options: ['Seeds & Pellets', 'Treats & Supplements'] },
        { group: '🏠 Accessories',   options: ['Cages & Perches', 'Toys & Feeders'] },
    ];
    items.forEach(({ group, options }) => {
        const g = document.createElement('optgroup');
        g.label = group;
        options.forEach(name => {
            const o = document.createElement('option');
            o.value = name; o.textContent = name;
            g.appendChild(o);
        });
        sel.appendChild(g);
    });
}

function fillOrder(name) {
    document.getElementById('orderBird').value = name;
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

if (document.getElementById('orderForm')) document.getElementById('orderForm').addEventListener('submit', e => {
    e.preventDefault();
    const name  = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const bird  = document.getElementById('orderBird').value;
    if (!name || !phone || !bird) { toast('Please fill all required fields ★'); return; }
    const waMsg = `🦜 *New Order — Niloras*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📱 *Phone:* ${phone}\n` +
        `🐦 *Product:* ${bird}\n\n` +
        `_Sent from nilasaviary.com_`;
    window.open(waLink(waMsg), '_blank');
    toast('Opening WhatsApp with your inquiry… 🦜', 'green');
    e.target.reset();
});

/* ============================================
   REVIEWS — RENDER
   ============================================ */
function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    reviews.forEach(r => {
        const stars = [...Array(5)].map((_,i) => `<span>${i < r.rating ? '★' : '☆'}</span>`).join('');
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="rv-header">
                <div class="rv-avatar">${r.initials}</div>
                <div><span class="rv-name">${r.name}</span><span class="rv-date">${r.date}</span></div>
            </div>
            <div class="rv-stars">${stars}</div>
            <p class="rv-text">"${r.text}"</p>
            <span class="rv-bird">🐦 ${r.bird}</span>`;
        grid.appendChild(card);
    });
}

/* Review form toggle */
if (document.getElementById('addReviewBtn')) document.getElementById('addReviewBtn').addEventListener('click', () => {
    document.getElementById('reviewFormContainer').style.display = 'block';
    document.getElementById('addReviewBtn').style.display = 'none';
    document.getElementById('reviewFormContainer').scrollIntoView({ behavior: 'smooth' });
});
if (document.getElementById('cancelReview')) document.getElementById('cancelReview').addEventListener('click', () => {
    document.getElementById('reviewFormContainer').style.display = 'none';
    document.getElementById('addReviewBtn').style.display = 'inline-flex';
});

/* Star rating interaction */
let pickedRating = 0;
const starEls = document.querySelectorAll('#starRating .s');
starEls.forEach(s => {
    s.addEventListener('mouseover', () => {
        const v = +s.dataset.v;
        starEls.forEach((x, i) => x.classList.toggle('hover', i < v));
    });
    s.addEventListener('mouseout',  () => starEls.forEach(x => x.classList.remove('hover')));
    s.addEventListener('click', () => {
        pickedRating = +s.dataset.v;
        starEls.forEach((x, i) => x.classList.toggle('on', i < pickedRating));
    });
});

if (document.getElementById('reviewForm')) document.getElementById('reviewForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('reviewName').value.trim();
    const bird = document.getElementById('reviewBird').value.trim();
    const text = document.getElementById('reviewText').value.trim();
    if (!name || !text) { toast('Please fill all required fields'); return; }
    if (!pickedRating)  { toast('Please select a star rating ★'); return; }

    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const now = new Date();
    reviews.unshift({ name, bird: bird || "Niloras bird", rating: pickedRating, text, initials, date: `${MONTHS[now.getMonth()]} ${now.getFullYear()}` });
    renderReviews();
    e.target.reset();
    pickedRating = 0;
    starEls.forEach(s => s.classList.remove('on', 'hover'));
    document.getElementById('reviewFormContainer').style.display = 'none';
    document.getElementById('addReviewBtn').style.display = 'inline-flex';
    toast('Thank you for your review! 🌟', 'green');
});

/* ============================================
   BACK TO TOP
   ============================================ */
const btt = document.getElementById('btt');
window.addEventListener('scroll', () => {
    btt.classList.toggle('show', window.scrollY > 420);
});
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ============================================
   SMOOTH SCROLL (offset for fixed navbar)
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 78, behavior: 'smooth' });
        }
    });
});

/* ============================================
   VIDEOS
   ─────────────────────────────────────────
   HOW TO ADD A VIDEO:

   For YouTube videos:
     type: 'youtube'
     src:  paste the YouTube EMBED URL
           e.g. 'https://www.youtube.com/embed/abc123'
           (from YouTube: Share → Embed → copy the src URL)

   For your own video files:
     type: 'local'
     src:  'videos/yourfile.mp4'
           (put the .mp4 file in the /videos/ folder)

   thumbnail: optional preview image path
              leave as '' to show emoji instead
   ============================================ */
const videos = [
    {
        id: 1,
        title: 'African Grey Parrot Talking',
        bird: 'African Grey Parrot',
        type: 'facebook',
        src: '',
        fbUrl: 'https://www.facebook.com/share/r/18fxfrHJkz/',
        thumbnail: '',
        duration: '',
        emoji: '🦜'
    },
    {
        id: 2,
        title: "Niloras — Instagram Reel",
        bird: 'Featured Bird',
        type: 'instagram',
        src: '',
        igUrl: 'https://www.instagram.com/reel/DRbwX47Aa2D/',
        thumbnail: '',
        duration: '',
        emoji: '📸'
    },
    {
        id: 3,
        title: 'Sun Conure Pair',
        bird: 'Sun Conure',
        type: 'local',
        src: 'videos/Sunconure_pair.mp4',
        thumbnail: '',
        duration: '',
        emoji: '☀️'
    }
];

function renderVideos() {
    const grid = document.getElementById('videosGrid');
    if (!grid) return;
    grid.innerHTML = '';

    if (!videos.length) {
        grid.innerHTML = '<div class="no-videos"><i class="fas fa-video-slash"></i><h3>Videos coming soon!</h3><p>Check back shortly.</p></div>';
        return;
    }

    videos.forEach(v => {
        const card = document.createElement('div');
        card.className = 'video-card';

        const isLocalNoThumb = v.type === 'local' && !v.thumbnail;
        const thumbHTML = v.thumbnail
            ? `<img src="${v.thumbnail}" alt="${v.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : isLocalNoThumb
                ? `<video class="vthumb-vid-${v.id}" src="${v.src}" muted preload="auto" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none;"></video>`
                : '';
        const placeholderStyle = (v.thumbnail || isLocalNoThumb) ? 'display:none' : '';

        card.innerHTML = `
            <div class="video-thumb">
                ${thumbHTML}
                <div class="thumb-placeholder" style="${placeholderStyle}">${v.emoji}</div>
                <div class="play-btn"><i class="fas fa-play"></i></div>
                <div class="video-duration">${v.duration}</div>
                <div class="video-type-badge ${v.type === 'youtube' ? 'badge-yt' : v.type === 'facebook' ? 'badge-fb' : v.type === 'instagram' ? 'badge-ig' : 'badge-local'}">
                    ${v.type === 'youtube' ? '<i class="fab fa-youtube"></i> YouTube' : v.type === 'facebook' ? '<i class="fab fa-facebook"></i> Facebook' : v.type === 'instagram' ? '<i class="fab fa-instagram"></i> Instagram' : '<i class="fas fa-video"></i> Video'}
                </div>
            </div>
            <div class="video-info">
                <div class="video-title">${v.title}</div>
                <div class="video-bird"><i class="fas fa-dove"></i>${v.bird}</div>
            </div>`;

        card.addEventListener('click', () => openVideoModal(v));
        grid.appendChild(card);

        if (isLocalNoThumb) {
            const vidEl = card.querySelector(`.vthumb-vid-${v.id}`);
            if (vidEl) {
                vidEl.addEventListener('loadeddata', () => { vidEl.currentTime = 1; });
            }
        }
    });
}

function openVideoModal(v) {
    document.getElementById('videoModalTitle').textContent = v.title;

    const wrapper = document.getElementById('videoWrapper');
    if (v.type === 'youtube') {
        wrapper.innerHTML = `<iframe src="${v.src}?autoplay=1&rel=0" allowfullscreen allow="autoplay"></iframe>`;
    } else if (v.type === 'facebook') {
        wrapper.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:40px;text-align:center;background:#1877F2;border-radius:0 0 var(--rl) var(--rl)">
                <i class="fab fa-facebook" style="font-size:4rem;color:#fff;margin-bottom:18px"></i>
                <p style="color:#fff;font-size:1.05rem;margin-bottom:22px">This video is hosted on Facebook.<br>Click below to watch it.</p>
                <a href="${v.fbUrl}" target="_blank" style="background:#fff;color:#1877F2;padding:12px 28px;border-radius:50px;font-weight:700;font-size:1rem;text-decoration:none">
                    <i class="fab fa-facebook"></i> Watch on Facebook
                </a>
            </div>`;
    } else if (v.type === 'instagram') {
        wrapper.innerHTML = `
            <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;text-align:center;background:linear-gradient(135deg,#405DE6,#833AB4,#E1306C,#FD1D1D);border-radius:0 0 var(--rl) var(--rl)">
                <i class="fab fa-instagram" style="font-size:4rem;color:#fff;margin-bottom:18px"></i>
                <p style="color:#fff;font-size:1.05rem;margin-bottom:22px">This video is hosted on Instagram.<br>Click below to watch the reel.</p>
                <a href="${v.igUrl}" target="_blank" style="background:#fff;color:#E1306C;padding:12px 28px;border-radius:50px;font-weight:700;font-size:1rem;text-decoration:none;display:inline-flex;align-items:center;gap:8px">
                    <i class="fab fa-instagram"></i> Watch on Instagram
                </a>
            </div>`;
    } else {
        wrapper.innerHTML = `<video controls autoplay><source src="${v.src}" type="video/mp4">Your browser does not support video.</video>`;
    }

    document.getElementById('videoModalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    document.getElementById('videoModalOverlay').classList.remove('open');
    document.getElementById('videoWrapper').innerHTML = '';
    document.body.style.overflow = '';
}

if (document.getElementById('videoModalClose')) document.getElementById('videoModalClose').addEventListener('click', closeVideoModal);
if (document.getElementById('videoModalOverlay')) document.getElementById('videoModalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('videoModalOverlay')) closeVideoModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeVideoModal(); } });

/* ============================================
   FOOD PRODUCTS DATA
   ─────────────────────────────────────────
   To add a product: copy one entry, change values.
   image: put your photo in images/food/ folder
          e.g. 'images/food/myphoto.jpg'
          Emoji shows automatically until you add a photo.
   ============================================ */
const foodProducts = [
    { id:'f1',  name:'Cockatiel Seed Mix',      subtitle:'Premium Blend · 500g',      emoji:'🌾', image:'images/food/Cocktail_Seed.png',        category:['seeds'],        badge:'Popular',    unit:'₹250 / 500g' },
    { id:'f2',  name:'African Grey Parrot Mix', subtitle:'Nut & Seed Blend · 1kg',    emoji:'🥜', image:'images/food/bird_food.png',             category:['seeds'],        badge:'Bestseller', unit:'₹550 / kg' },
    { id:'f3',  name:'Budgerigar Seed Mix',     subtitle:'Vitamin Enriched · 500g',   emoji:'🌿', image:'images/food/Budgies_seed.png',          category:['seeds'],        badge:null,         unit:'₹180 / 500g' },
    { id:'f4',  name:'Sprouting Seeds Kit',     subtitle:'3-Seed Blend · 500g',       emoji:'🌱', image:'images/food/Sprouting_seed.png',        category:['seeds'],        badge:null,         unit:'₹220 / 500g' },
    { id:'f5',  name:'Parrot Pellets',          subtitle:'Balanced Diet · 500g',      emoji:'🟡', image:'images/food/parrot_pellets.png',        category:['pellets'],      badge:'New',        unit:'₹480 / 500g' },
    { id:'f9',  name:'Sunflower Seeds',         subtitle:'High Protein · 500g',       emoji:'🌻', image:'images/food/Sunflower_seed.png',        category:['treats'],       badge:null,         unit:'₹350 / 500g' },
    { id:'f10', name:'Calcium Supplement',      subtitle:'Liquid Drops · 100ml',      emoji:'💊', image:'',                                      category:['supplements'],  badge:null,         unit:'₹280 / bottle' },
    { id:'f11', name:'Multivitamin Drops',      subtitle:'All-Bird Formula · 100ml',  emoji:'🩺', image:'',                                      category:['supplements'],  badge:'New',        unit:'₹320 / bottle' },
    { id:'f12', name:'Cuttlebone Mineral Block',subtitle:'Natural Calcium · 3pc',     emoji:'🦴', image:'images/food/CuttleBone.png',            category:['supplements'],  badge:null,         unit:'₹150 / 3pc' },
];

/* ============================================
   ACCESSORIES DATA
   ─────────────────────────────────────────
   To add an item: copy one entry, change values.
   image: put your photo in images/accessories/ folder
          e.g. 'images/accessories/myphoto.jpg'
   ============================================ */
const accessories = [
    { id:'a1',  name:'Blue Steel Cage',    subtitle:'38×28×28 cm · Powder Coated', emoji:'🏠', images:['images/accessories/bird-cage-for-small-birds-blue-metal-38x28x28-cm.webp','images/accessories/bird-cage-for-small-blue-metal.png','images/accessories/bird-cage-for-small-birds-blue-metal-38x28x28-cm1.webp'], category:['cage'], badge:'Popular', unit:'₹749' },
    { id:'a2',  name:'Black Steel Cage',   subtitle:'Heavy Duty · Powder Coated',  emoji:'🏰', images:['images/accessories/bird-cage-for-small-black-metal2.png','images/accessories/bird-cage-for-small-black-metal.png','images/accessories/bird-cage-for-small-birds-blue-metal-38x28x28-cm1.webp'],          category:['cage'], badge:'Premium', unit:'₹749' },
    { id:'a3',  name:'Pink Steel Cage',          subtitle:'Small Birds · Stylish',       emoji:'🌸', images:['images/accessories/bird-cage-for-small-pink-metal.png','images/accessories/bird-cage-for-small-pink-metal (2).png','images/accessories/bird-cage-for-small-birds-blue-metal-38x28x28-cm1.webp'], category:['cage'], badge:null, unit:'₹749' },
    { id:'a3b', name:'Light Pink Cage',    subtitle:'Small Birds · Pastel',        emoji:'🌷', images:['images/accessories/bird-cage-for-small-lite-pink-metal.png','images/accessories/bird-cage-for-small-birds-blue-metal-38x28x28-cm1.webp'],      category:['cage'], badge:'New',  unit:'₹749' },
    { id:'a4',  name:'Wooden T-Perch',          subtitle:'Natural Wood · Large',       emoji:'🌳', image:'images/accessories/t-perch.jpg',        category:['perch'],   badge:null,       unit:'₹280' },
    { id:'a5',  name:'Rope Perch Set',          subtitle:'Braided Cotton · 2pc',       emoji:'🪢', image:'images/accessories/rope-perch.jpg',    category:['perch'],   badge:'Popular',  unit:'₹350 / set' },
    { id:'a6',  name:'Java Wood Perch',         subtitle:'Natural Branch · Medium',    emoji:'🌿', image:'images/accessories/java-perch.jpg',    category:['perch'],   badge:'New',      unit:'₹420' },
    { id:'a7',  name:'Foraging Toy Set',        subtitle:'3-Piece Activity Bundle',    emoji:'🎯', image:'images/accessories/toy.webp', category:['toy'],     badge:'Popular',  unit:'₹450 / set' },
    { id:'a8',  name:'Bird Swing',              subtitle:'Wooden & Rope · Small',      emoji:'🎠', image:'images/accessories/swing.webp',          category:['toy'],     badge:null,       unit:'₹220' },
    { id:'a9',  name:'Bell & Ring Toy',         subtitle:'Stainless Steel · Safe',     emoji:'🔔', image:'images/accessories/bell-toy.jpg',       category:['toy'],     badge:null,       unit:'₹180' },
    { id:'a10', name:'Steel Feeder Bowl Set',   subtitle:'Stainless Steel · 2pc',      emoji:'🥣', image:'images/accessories/feeder-bowls.jpg',  category:['feeder'],  badge:null,       unit:'₹250 / set' },
    { id:'a11', name:'Auto Water Dispenser',    subtitle:'Bottle Style · 300ml',       emoji:'💧', image:'images/accessories/water-dispenser.jpg',category:['feeder'],  badge:'New',      unit:'₹320' },
    { id:'a12', name:'Bird Harness & Leash',    subtitle:'Adjustable · Size S/M/L',    emoji:'🎀', image:'images/accessories/harness.jpg',        category:['other'],   badge:'New',      unit:'₹480' },
    { id:'a13', name:'Grooming Kit',            subtitle:'Nail Clipper + Brush Set',   emoji:'✂️', image:'images/accessories/grooming.jpg',       category:['other'],   badge:null,       unit:'₹650 / kit' },
    { id:'a14', name:'Cockatiel Nesting Box',   subtitle:'Wooden · With Entry Perch',  emoji:'🪺', image:'images/accessories/nest-box.jpg',       category:['other'],   badge:null,       unit:'₹380' },

    /* ---- Fish Accessories ---- */
    { id:'f-a1', name:'Aquarium Tank',          subtitle:'Glass · 30L Starter Kit',    emoji:'🐠', image:'', category:['fish'],    badge:'Popular',  unit:'₹1,299' },
    { id:'f-a2', name:'Internal Filter',        subtitle:'Silent Motor · 30–60L',      emoji:'💧', image:'', category:['fish'],    badge:null,        unit:'₹450' },
    { id:'f-a3', name:'LED Aquarium Light',     subtitle:'White & Blue · 30cm',        emoji:'💡', image:'', category:['fish'],    badge:'New',       unit:'₹380' },
    { id:'f-a4', name:'Air Pump',               subtitle:'Dual Outlet · Quiet',        emoji:'🫧', image:'', category:['fish'],    badge:null,        unit:'₹280' },
    { id:'f-a5', name:'Aquarium Gravel',        subtitle:'Natural Pebbles · 1kg',      emoji:'🪨', image:'', category:['fish'],    badge:null,        unit:'₹180' },
    { id:'f-a6', name:'Fish Food',              subtitle:'Flakes & Pellets · 100g',    emoji:'🌾', image:'', category:['fish'],    badge:null,        unit:'₹120' },
    { id:'f-a7', name:'Aquarium Net',           subtitle:'Fine Mesh · 15cm',           emoji:'🕸️', image:'', category:['fish'],    badge:null,        unit:'₹80' },
    { id:'f-a8', name:'Water Conditioner',      subtitle:'Dechlorinator · 100ml',      emoji:'🧪', image:'', category:['fish'],    badge:null,        unit:'₹150' },

    /* ---- Cat & Dog Accessories ---- */
    { id:'p-a1', name:'Premium Pet Collar',     subtitle:'Adjustable · S / M / L',     emoji:'🎀', image:'', category:['pets'],    badge:'Popular',   unit:'₹199' },
    { id:'p-a2', name:'Retractable Leash',      subtitle:'5m · Auto-Lock',             emoji:'🦮', image:'', category:['pets'],    badge:null,        unit:'₹349' },
    { id:'p-a3', name:'Pet Food Bowl Set',      subtitle:'Stainless Steel · 2pc',      emoji:'🥣', image:'', category:['pets'],    badge:null,        unit:'₹220' },
    { id:'p-a4', name:'Plush Squeaky Toy',      subtitle:'Dog & Cat Safe · Assorted',  emoji:'🧸', image:'', category:['pets'],    badge:'Popular',   unit:'₹150' },
    { id:'p-a5', name:'Grooming Brush',         subtitle:'De-shedding · All Breeds',   emoji:'🪮', image:'', category:['pets'],    badge:null,        unit:'₹280' },
    { id:'p-a6', name:'Pet Carry Bag',          subtitle:'Breathable Mesh · Medium',   emoji:'👜', image:'', category:['pets'],    badge:'New',       unit:'₹699' },
    { id:'p-a7', name:'Scratching Post',        subtitle:'Sisal Rope · 45cm',          emoji:'🐱', image:'', category:['pets'],    badge:null,        unit:'₹450' },
    { id:'p-a8', name:'Automatic Pet Feeder',   subtitle:'Programmable · 1.5L',        emoji:'⏰', image:'', category:['pets'],    badge:'New',       unit:'₹1,199' },
];

function parsePrice(unit) {
    const m = String(unit).match(/(\d[\d,]*)/);
    return m ? parseInt(m[1].replace(',', '')) : 0;
}

/* ============================================
   FOOD — RENDER
   ============================================ */
function renderFood(list) {
    const grid = document.getElementById('foodGrid');
    if (!grid) return;
    grid.innerHTML = '';
    if (!list.length) {
        grid.innerHTML = '<div class="no-results"><i class="fas fa-seedling"></i><h3>No products found</h3><p>Try a different filter</p></div>';
        return;
    }
    list.forEach(p => {
        const imgs = p.images || (p.image ? [p.image] : []);
        const mainImg = imgs[0] || '';
        const waMsg = `Hi Niloras! I'd like to order *${p.name}* (${p.unit}). Please confirm availability and delivery details.`;
        const card = document.createElement('div');
        card.className = 'bird-card';
        card.innerHTML = `
            <div class="img-wrap">
                <img class="card-img" src="${mainImg}" alt="${p.name}"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="img-placeholder food-ph" style="display:none">${p.emoji}</div>
                ${p.badge ? `<div class="card-badge ${BADGE_CLASS[p.badge] || 'badge-popular'}">${p.badge}</div>` : ''}
                ${imgs.length > 1 ? `<div class="multi-photo-badge"><i class="fas fa-images"></i> ${imgs.length}</div>` : ''}
            </div>
            <div class="card-body">
                <div class="card-title">${p.name}</div>
                <div class="card-sp">${p.subtitle}</div>
                <div class="card-foot">
                    <div>
                        <div class="price-lbl">Price</div>
                        <div class="price-amt">${p.unit}</div>
                    </div>
                    <div class="card-actions">
                        <div class="card-qty-wrap" data-id="${p.id}" data-type="food" data-name="${p.name}" data-price="${parsePrice(p.unit)}" data-image="${imgs[0] || ''}" data-emoji="${p.emoji}"></div>
                    </div>
                </div>
            </div>`;
        card.querySelector('.img-wrap').addEventListener('click', () => openImageLightbox(imgs, p.name));
        grid.appendChild(card);
    });
    if (typeof refreshAllQtyWraps === 'function') refreshAllQtyWraps();
}

/* ============================================
   ACCESSORIES — RENDER
   ============================================ */
function renderAccessories(list) {
    const grid = document.getElementById('accGrid');
    if (!grid) return;
    grid.innerHTML = '';
    if (!list.length) {
        grid.innerHTML = '<div class="no-results"><i class="fas fa-home"></i><h3>No products found</h3><p>Try a different filter</p></div>';
        return;
    }
    list.forEach(p => {
        const imgs = p.images || (p.image ? [p.image] : []);
        const mainImg = imgs[0] || '';
        const waMsg = `Hi Niloras! I'd like to order *${p.name}* (${p.unit}). Please confirm availability.`;
        const card = document.createElement('div');
        card.className = 'bird-card';
        card.innerHTML = `
            <div class="img-wrap">
                <img class="card-img" src="${mainImg}" alt="${p.name}"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="img-placeholder acc-ph" style="display:none">${p.emoji}</div>
                ${p.badge ? `<div class="card-badge ${BADGE_CLASS[p.badge] || 'badge-popular'}">${p.badge}</div>` : ''}
                ${imgs.length > 1 ? `<div class="multi-photo-badge"><i class="fas fa-images"></i> ${imgs.length}</div>` : ''}
            </div>
            <div class="card-body">
                <div class="card-title">${p.name}</div>
                <div class="card-sp">${p.subtitle}</div>
                <div class="card-foot">
                    <div>
                        <div class="price-lbl">Price</div>
                        <div class="price-amt">${p.unit}</div>
                    </div>
                    <div class="card-actions">
                        <div class="card-qty-wrap" data-id="${p.id}" data-type="accessory" data-name="${p.name}" data-price="${parsePrice(p.unit)}" data-image="${imgs[0] || ''}" data-emoji="${p.emoji}"></div>
                    </div>
                </div>
            </div>`;
        card.querySelector('.img-wrap').addEventListener('click', () => openImageLightbox(imgs, p.name));
        grid.appendChild(card);
    });
    if (typeof refreshAllQtyWraps === 'function') refreshAllQtyWraps();
}

/* ============================================
   IMAGE LIGHTBOX (multi-photo gallery)
   ============================================ */
let _lbImgs = [], _lbIdx = 0;

function openImageLightbox(imgs, title) {
    _lbImgs = Array.isArray(imgs) ? imgs : [imgs];
    _lbIdx = 0;
    _renderLightbox(title || '');
}

function _renderLightbox(title) {
    let lb = document.getElementById('imgLightbox');
    if (!lb) {
        lb = document.createElement('div');
        lb.id = 'imgLightbox';
        lb.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.93);display:flex;flex-direction:column;align-items:center;justify-content:center;';
        lb.innerHTML = `
            <button id="lbClose" style="position:absolute;top:18px;right:22px;background:rgba(255,255,255,.15);border:none;color:#fff;font-size:1.5rem;width:42px;height:42px;border-radius:50%;cursor:pointer;">&times;</button>
            <div id="lbCounter" style="position:absolute;top:22px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,.7);font-size:.85rem;letter-spacing:1px;"></div>
            <div style="display:flex;align-items:center;gap:16px;max-width:95vw;">
                <button id="lbPrev" style="background:rgba(255,255,255,.15);border:none;color:#fff;font-size:1.4rem;width:44px;height:44px;border-radius:50%;cursor:pointer;flex-shrink:0;">&#8249;</button>
                <img id="lbImg" style="max-width:80vw;max-height:78vh;object-fit:contain;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.6);display:block;">
                <button id="lbNext" style="background:rgba(255,255,255,.15);border:none;color:#fff;font-size:1.4rem;width:44px;height:44px;border-radius:50%;cursor:pointer;flex-shrink:0;">&#8250;</button>
            </div>
            <div id="lbThumbs" style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;justify-content:center;max-width:90vw;"></div>`;
        document.body.appendChild(lb);
        document.getElementById('lbClose').addEventListener('click', e => { e.stopPropagation(); lb.style.display = 'none'; });
        lb.addEventListener('click', e => { if (e.target === lb) lb.style.display = 'none'; });
        document.getElementById('lbPrev').addEventListener('click', e => { e.stopPropagation(); _lbIdx = (_lbIdx - 1 + _lbImgs.length) % _lbImgs.length; _updateLightbox(); });
        document.getElementById('lbNext').addEventListener('click', e => { e.stopPropagation(); _lbIdx = (_lbIdx + 1) % _lbImgs.length; _updateLightbox(); });
        document.addEventListener('keydown', e => {
            if (lb.style.display === 'none') return;
            if (e.key === 'ArrowLeft')  { _lbIdx = (_lbIdx - 1 + _lbImgs.length) % _lbImgs.length; _updateLightbox(); }
            if (e.key === 'ArrowRight') { _lbIdx = (_lbIdx + 1) % _lbImgs.length; _updateLightbox(); }
            if (e.key === 'Escape')     { lb.style.display = 'none'; }
        });
    }
    lb.style.display = 'flex';
    _updateLightbox();
}

function _updateLightbox() {
    const lb = document.getElementById('imgLightbox');
    document.getElementById('lbImg').src = _lbImgs[_lbIdx];
    document.getElementById('lbCounter').textContent = _lbImgs.length > 1 ? `${_lbIdx + 1} / ${_lbImgs.length}` : '';
    document.getElementById('lbPrev').style.visibility = _lbImgs.length > 1 ? 'visible' : 'hidden';
    document.getElementById('lbNext').style.visibility = _lbImgs.length > 1 ? 'visible' : 'hidden';
    const thumbs = document.getElementById('lbThumbs');
    thumbs.innerHTML = _lbImgs.length > 1 ? _lbImgs.map((src, i) =>
        `<img src="${src}" data-i="${i}" style="width:60px;height:60px;object-fit:cover;border-radius:6px;cursor:pointer;opacity:${i===_lbIdx?1:.45};border:2px solid ${i===_lbIdx?'#F4A300':'transparent'};transition:all .2s;">`
    ).join('') : '';
    thumbs.querySelectorAll('img').forEach(t => t.addEventListener('click', e => { e.stopPropagation(); _lbIdx = +t.dataset.i; _updateLightbox(); }));
}

/* ============================================
   FOOD FILTER
   ============================================ */
let activeFoodFilter = 'all';
document.querySelectorAll('#foodFilter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#foodFilter .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFoodFilter = btn.dataset.filter;
        renderFood(foodProducts.filter(p => activeFoodFilter === 'all' || p.category.includes(activeFoodFilter)));
    });
});

/* ============================================
   ACCESSORIES FILTER
   ============================================ */
let activeAccFilter = 'all';
document.querySelectorAll('#accFilter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#accFilter .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeAccFilter = btn.dataset.filter;
        renderAccessories(accessories.filter(p => activeAccFilter === 'all' || p.category.includes(activeAccFilter)));
    });
});

/* Auto-activate filter from URL hash (#fish, #pets) */
(function() {
    const hash = location.hash.replace('#', '');
    if (hash) {
        const btn = document.querySelector(`#accFilter .filter-btn[data-filter="${hash}"]`);
        if (btn) { btn.click(); setTimeout(() => document.getElementById('accessories')?.scrollIntoView({ behavior: 'smooth' }), 100); }
    }
})();

/* ============================================
   PRODUCT CAROUSEL (Home Page)
   ============================================ */
const CAR_BIRD_IDS = [6, 1, 2, 5, 4, 9];
const CAR_FOOD_IDS = ['f1', 'f7', 'f5', 'f2', 'f8'];
const CAR_ACC_IDS  = ['a1', 'a2', 'a7', 'a5', 'a12'];
const CAR_GAP_PX   = 22;
const CAR_DELAY_MS = 3000;

let _carIdx = 0, _carReal = 0, _carTimer = null, _carBusy = false;

function _carItems() {
    const out = [];
    CAR_BIRD_IDS.map(id => birds.find(b => b.id === id)).filter(Boolean)
        .forEach(d => out.push({ kind:'bird', d }));
    CAR_FOOD_IDS.map(id => foodProducts.find(f => f.id === id)).filter(Boolean)
        .forEach(d => out.push({ kind:'food', d }));
    CAR_ACC_IDS.map(id => accessories.find(a => a.id === id)).filter(Boolean)
        .forEach(d => out.push({ kind:'acc', d }));
    return out;
}

function _carMakeCard(item) {
    const card = document.createElement('div');
    card.className = 'bird-card carousel-card';
    const { kind, d } = item;
    if (kind === 'bird') {
        const wa = waLink(`Hi Niloras! I'm interested in *${d.name}* (${inr(d.price)}).`);
        card.innerHTML = `
            <div class="img-wrap">
                <img class="card-img" src="${d.image}" alt="${d.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="img-placeholder" style="display:none">${d.emoji}</div>
                ${d.badge ? `<div class="card-badge ${BADGE_CLASS[d.badge]||''}">${d.badge}</div>` : ''}
                <div class="avail-dot${d.available?'':' out'}"></div>
                <div class="car-cat-label"><i class="fas fa-dove"></i> Bird</div>
            </div>
            <div class="card-body">
                <div class="card-title">${d.name}</div>
                <div class="card-sp">${d.species}</div>
                <div class="card-foot">
                    <div><div class="price-lbl">Price</div><div class="price-amt">${inr(d.price)}</div></div>
                    <div class="card-actions">
                        <a href="${wa}" class="ic-btn wa-btn" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>`;
        card.addEventListener('click', e => { if (!e.target.closest('.card-actions')) window.location.href = 'birds.html'; });
    } else if (kind === 'food') {
        const imgs = d.images || (d.image ? [d.image] : []);
        const wa = waLink(`Hi Niloras! I'd like to order *${d.name}* (${d.unit}).`);
        card.innerHTML = `
            <div class="img-wrap">
                <img class="card-img" src="${imgs[0]||''}" alt="${d.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="img-placeholder food-ph" style="display:none">${d.emoji}</div>
                ${d.badge ? `<div class="card-badge ${BADGE_CLASS[d.badge]||'badge-popular'}">${d.badge}</div>` : ''}
                <div class="car-cat-label"><i class="fas fa-seedling"></i> Food</div>
            </div>
            <div class="card-body">
                <div class="card-title">${d.name}</div>
                <div class="card-sp">${d.subtitle}</div>
                <div class="card-foot">
                    <div><div class="price-lbl">Price</div><div class="price-amt">${d.unit}</div></div>
                    <div class="card-actions">
                        <a href="${wa}" class="ic-btn wa-btn" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>`;
        card.addEventListener('click', e => { if (!e.target.closest('.card-actions')) window.location.href = 'food.html'; });
    } else {
        const imgs = d.images || (d.image ? [d.image] : []);
        const wa = waLink(`Hi Niloras! I'd like to order *${d.name}* (${d.unit}).`);
        card.innerHTML = `
            <div class="img-wrap">
                <img class="card-img" src="${imgs[0]||''}" alt="${d.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="img-placeholder acc-ph" style="display:none">${d.emoji}</div>
                ${d.badge ? `<div class="card-badge ${BADGE_CLASS[d.badge]||'badge-popular'}">${d.badge}</div>` : ''}
                ${imgs.length > 1 ? `<div class="multi-photo-badge"><i class="fas fa-images"></i> ${imgs.length}</div>` : ''}
                <div class="car-cat-label"><i class="fas fa-home"></i> Accessories</div>
            </div>
            <div class="card-body">
                <div class="card-title">${d.name}</div>
                <div class="card-sp">${d.subtitle}</div>
                <div class="card-foot">
                    <div><div class="price-lbl">Price</div><div class="price-amt">${d.unit}</div></div>
                    <div class="card-actions">
                        <a href="${wa}" class="ic-btn wa-btn" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>`;
        card.addEventListener('click', e => { if (!e.target.closest('.card-actions')) window.location.href = 'accessories.html'; });
    }
    return card;
}

function _carApply(idx, animate) {
    const track = document.getElementById('carTrack');
    if (!track || !track.children.length) return;
    const cw = track.children[0].offsetWidth;
    track.style.transition = animate ? 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none';
    track.style.transform = `translateX(-${idx * (cw + CAR_GAP_PX)}px)`;
    const realIdx = ((idx % _carReal) + _carReal) % _carReal;
    document.querySelectorAll('.car-dot').forEach((d, i) => d.classList.toggle('active', i === realIdx));
}

function _carAdvance() {
    if (_carBusy) return;
    const next = _carIdx + 1;
    _carApply(next, true);
    _carIdx = next;
    if (next >= _carReal) {
        _carBusy = true;
        clearInterval(_carTimer);
        setTimeout(() => {
            _carIdx = 0;
            _carApply(0, false);
            _carBusy = false;
            _carAutoPlay();
        }, 580);
    }
}

function _carAutoPlay() {
    clearInterval(_carTimer);
    _carTimer = setInterval(_carAdvance, CAR_DELAY_MS);
}

function initCarousel() {
    const track = document.getElementById('carTrack');
    const viewport = document.getElementById('carViewport');
    if (!track || !viewport) return;

    const items = _carItems();
    _carReal = items.length;
    _carIdx  = 0;
    track.innerHTML = '';

    // Real cards + 1 clone of first card for seamless loop
    items.forEach(item => track.appendChild(_carMakeCard(item)));
    track.appendChild(_carMakeCard(items[0]));

    // Dots
    const dotsEl = document.getElementById('carDots');
    if (dotsEl) {
        dotsEl.innerHTML = items.map((_, i) =>
            `<button class="car-dot${i===0?' active':''}" data-i="${i}"></button>`).join('');
        dotsEl.querySelectorAll('.car-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                if (_carBusy) return;
                _carIdx = +dot.dataset.i;
                _carApply(_carIdx, true);
                _carAutoPlay();
            });
        });
    }

    document.getElementById('carPrev')?.addEventListener('click', () => {
        if (_carBusy) return;
        _carIdx = _carIdx <= 0 ? _carReal - 1 : _carIdx - 1;
        _carApply(_carIdx, true);
        _carAutoPlay();
    });
    document.getElementById('carNext')?.addEventListener('click', () => {
        if (_carBusy) return;
        _carAdvance();
        _carAutoPlay();
    });

    viewport.addEventListener('mouseenter', () => clearInterval(_carTimer));
    viewport.addEventListener('mouseleave', _carAutoPlay);

    _carApply(0, false);
    _carAutoPlay();
}

/* ============================================
   HERO GLASS CARD — MINI PRODUCT SLIDER
   ============================================ */
let _gcIdx = 0, _gcTimer = null;

function initGcSlider() {
    const slider = document.getElementById('gcSlider');
    const dotsEl = document.getElementById('gcDots');
    if (!slider) return;

    const items = _carItems();

    items.forEach((item, i) => {
        const { kind, d } = item;
        const slide = document.createElement('div');
        slide.className = 'gc-slide' + (i === 0 ? ' active' : '');

        const img   = kind === 'bird' ? d.image : (d.images ? d.images[0] : d.image) || '';
        const emoji = d.emoji;
        const name  = d.name;
        const price = kind === 'bird' ? inr(d.price) : d.unit;
        const cat   = kind === 'bird' ? 'Bird' : kind === 'food' ? 'Food' : 'Accessories';
        const waMsg = encodeURIComponent(`Hi Niloras! I'm interested in *${name}*. Please share details.`);

        slide.innerHTML = `
            <div class="gc-slide-img-wrap">
                <img src="${img}" alt="${name}"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="gc-slide-emoji-fb">${emoji}</div>
            </div>
            <div class="gc-slide-info">
                <div class="gc-slide-cat">${cat}</div>
                <div class="gc-slide-name">${name}</div>
            </div>`;
        slider.appendChild(slide);
    });

    if (dotsEl) {
        dotsEl.innerHTML = items.map((_, i) =>
            `<button class="${i === 0 ? 'active' : ''}" data-i="${i}"></button>`).join('');
        dotsEl.querySelectorAll('button').forEach(d =>
            d.addEventListener('click', () => _gcGoTo(+d.dataset.i)));
    }

    _gcTimer = setInterval(() => _gcGoTo((_gcIdx + 1) % items.length), 2500);
}

function _gcGoTo(idx) {
    const slides = document.querySelectorAll('#gcSlider .gc-slide');
    const dots   = document.querySelectorAll('#gcDots button');
    slides[_gcIdx]?.classList.remove('active');
    dots[_gcIdx]?.classList.remove('active');
    _gcIdx = idx;
    slides[_gcIdx]?.classList.add('active');
    dots[_gcIdx]?.classList.add('active');
}

/* ============================================
   TICKER STRIP
   ============================================ */
function initTicker() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;
    const items = _carItems();
    const seg = items.map(({ kind, d }) => {
        const icon  = kind === 'bird' ? '🦜' : kind === 'food' ? '🌿' : '🏠';
        const price = kind === 'bird' ? inr(d.price) : (d.unit || '');
        return `<span class="ticker-item">${icon} <strong>${d.name}</strong>${price ? ` <span class="ti-price">${price}</span>` : ''}</span><span class="ticker-sep">✦</span>`;
    }).join('');
    track.innerHTML = seg + seg;
}

/* ============================================
   PRODUCT SHOWCASE — AUTO-SCROLL ROWS
   ============================================ */
function initShowcase() {
    const r1 = document.getElementById('scRow1');
    const r2 = document.getElementById('scRow2');
    if (!r1) return;
    const all = _carItems();

    function cardHTML({ kind, d }) {
        const img   = kind === 'bird' ? (d.image || '') : (d.images ? d.images[0] : (d.image || ''));
        const emoji = d.emoji || (kind === 'food' ? '🌿' : '🏠');
        const bgCls = kind === 'bird' ? 'sc-birds-bg' : kind === 'food' ? 'sc-food-bg' : 'sc-acc-bg';
        const cat   = kind === 'bird' ? 'Bird' : kind === 'food' ? 'Food' : 'Accessory';
        const price = kind === 'bird' ? inr(d.price) : (d.unit || '');
        const link  = kind === 'bird' ? 'birds.html' : kind === 'food' ? 'food.html' : 'accessories.html';
        return `<a href="${link}" class="sc-card">
            ${img ? `<img src="${img}" alt="${d.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.removeProperty('display')">` : ''}
            <div class="sc-emoji-fb ${bgCls}"${img ? ' style="display:none"' : ''}>${emoji}</div>
            <div class="sc-card-info">
                <div class="sc-card-cat">${cat}</div>
                <div class="sc-card-name">${d.name}</div>
                ${price ? `<div class="sc-card-price">${price}</div>` : ''}
            </div>
        </a>`;
    }

    const cards = all.map(cardHTML).join('');
    r1.innerHTML = cards + cards;
    if (r2) {
        const rev = [...all].reverse().map(cardHTML).join('');
        r2.innerHTML = rev + rev;
    }
}

/* ============================================
   INIT
   ============================================ */
renderBirds(birds);
renderReviews();
renderVideos();
populateSelect();
renderFood(foodProducts);
renderAccessories(accessories);
initCarousel();
initGcSlider();
initTicker();
initShowcase();
