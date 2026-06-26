/* ============================================
   NILA'S AVIARY — SCRIPT
   ⚙️  UPDATE: Replace 919876543210 with your actual
       WhatsApp number (country code + number, no spaces)

       WhatsApp number — Open script.js line 10, change 919876543210 to your actual number (no spaces or +)

Bird photos — Add your photos to the [images/](C:\Users\Vidhya\nilas-aviary\images) folder with these exact filenames:
african-grey.jpg, cockatiel-grey.jpg, cockatiel-lutino.jpg, budgerigar.jpg, lovebird.jpg, sun-conure.jpg, alexandrine.jpg, ringneck-green.jpg, ringneck-blue.jpg, canary.jpg, zebra-finch.jpg, macaw.jpg
(Until you add photos, a coloured emoji placeholder shows automatically)

Contact details — Search for nilas.aviary@gmail.com and Your City, India in index.html and replace with your actual details
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
        image: 'images/african-grey.jpg',
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
        image: 'images/cockatiel-grey.jpg',
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
        image: 'images/cockatiel-lutino.jpg',
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
        image: 'images/budgerigar.jpg',
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
        image: 'images/lovebird.jpg',
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
        image: 'images/alexandrine.jpg',
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
        image: 'images/ringneck-green.jpg',
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
        image: 'images/ringneck-blue.jpg',
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
        image: 'images/canary.jpg',
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
        image: 'images/zebra-finch.jpg',
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
        image: 'images/macaw.jpg',
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
    grid.innerHTML = '';
    if (!list.length) {
        grid.innerHTML = '<div class="no-results"><i class="fas fa-dove"></i><h3>No birds found</h3><p>Try a different search or filter</p></div>';
        return;
    }
    list.forEach(b => {
        const waMsg = `Hi Nila's Aviary! I'm interested in the *${b.name}* (${inr(b.price)}). Please share availability and details.`;
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
                        <a href="${waLink(waMsg)}" class="ic-btn wa-btn" target="_blank" title="Order on WhatsApp"
                           onclick="event.stopPropagation()"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>`;
        card.addEventListener('click', e => { if (!e.target.closest('.card-actions')) openModal(b.id); });
        card.querySelector('.inf-btn').addEventListener('click', e => { e.stopPropagation(); openModal(b.id); });
        grid.appendChild(card);
    });
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
document.getElementById('searchInput').addEventListener('input', applyFilters);

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
    const waMsg = `Hi Nila's Aviary! I'd like to order the *${b.name}* (${inr(b.price)}). Please confirm availability and next steps.`;
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
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === document.getElementById('modalOverlay')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ============================================
   ORDER FORM
   ============================================ */
function populateSelect() {
    const sel = document.getElementById('orderBird');

    const birdsGroup = document.createElement('optgroup');
    birdsGroup.label = '🦜 Birds';
    birds.forEach(b => {
        const o = document.createElement('option');
        o.value = b.name;
        o.textContent = `${b.name} — ${inr(b.price)}${b.available ? '' : ' (Waitlist)'}`;
        birdsGroup.appendChild(o);
    });
    sel.appendChild(birdsGroup);

    const foodGroup = document.createElement('optgroup');
    foodGroup.label = '🌿 Bird Food';
    foodProducts.forEach(p => {
        const o = document.createElement('option');
        o.value = p.name;
        o.textContent = `${p.name} — ${p.unit}`;
        foodGroup.appendChild(o);
    });
    sel.appendChild(foodGroup);

    const accGroup = document.createElement('optgroup');
    accGroup.label = '🏠 Accessories';
    accessories.forEach(p => {
        const o = document.createElement('option');
        o.value = p.name;
        o.textContent = `${p.name} — ${p.unit}`;
        accGroup.appendChild(o);
    });
    sel.appendChild(accGroup);
}

function fillOrder(name) {
    document.getElementById('orderBird').value = name;
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('orderForm').addEventListener('submit', e => {
    e.preventDefault();
    const name  = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const city  = document.getElementById('orderCity').value.trim();
    const bird  = document.getElementById('orderBird').value;
    const msg   = document.getElementById('orderMessage').value.trim();
    if (!name || !phone || !bird) { toast('Please fill all required fields ★'); return; }
    const waMsg = `🦜 *New Order — Nila's Aviary*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📱 *Phone:* ${phone}\n` +
        `📍 *City:* ${city || 'Not specified'}\n` +
        `🐦 *Bird:* ${bird}\n` +
        `💬 *Message:* ${msg || '—'}\n\n` +
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
document.getElementById('addReviewBtn').addEventListener('click', () => {
    document.getElementById('reviewFormContainer').style.display = 'block';
    document.getElementById('addReviewBtn').style.display = 'none';
    document.getElementById('reviewFormContainer').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cancelReview').addEventListener('click', () => {
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

document.getElementById('reviewForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('reviewName').value.trim();
    const bird = document.getElementById('reviewBird').value.trim();
    const text = document.getElementById('reviewText').value.trim();
    if (!name || !text) { toast('Please fill all required fields'); return; }
    if (!pickedRating)  { toast('Please select a star rating ★'); return; }

    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const now = new Date();
    reviews.unshift({ name, bird: bird || "Nila's Aviary bird", rating: pickedRating, text, initials, date: `${MONTHS[now.getMonth()]} ${now.getFullYear()}` });
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
        title: "Nila's Aviary — Instagram Reel",
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
        title: 'Lovebird Pair Playing',
        bird: "Fischer's Lovebird",
        type: 'youtube',
        src: 'https://www.youtube.com/embed/VIDEO_ID_3',
        thumbnail: '',
        duration: '2:10',
        emoji: '❤️'
    },
    {
        id: 4,
        title: 'Sun Conure — Daily Routine',
        bird: 'Sun Conure',
        type: 'youtube',
        src: 'https://www.youtube.com/embed/VIDEO_ID_4',
        thumbnail: '',
        duration: '3:22',
        emoji: '☀️'
    },
    {
        id: 5,
        title: 'Indian Ringneck Speaking Words',
        bird: 'Indian Ringneck',
        type: 'youtube',
        src: 'https://www.youtube.com/embed/VIDEO_ID_5',
        thumbnail: '',
        duration: '1:30',
        emoji: '💙'
    },
    {
        id: 6,
        title: 'Budgies — Flock in Aviary',
        bird: 'Budgerigar',
        type: 'youtube',
        src: 'https://www.youtube.com/embed/VIDEO_ID_6',
        thumbnail: '',
        duration: '2:05',
        emoji: '💚'
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

        const thumbHTML = v.thumbnail
            ? `<img src="${v.thumbnail}" alt="${v.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : '';
        const placeholderStyle = v.thumbnail ? 'display:none' : '';

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

document.getElementById('videoModalClose').addEventListener('click', closeVideoModal);
document.getElementById('videoModalOverlay').addEventListener('click', e => {
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
    { id:'f1',  name:'Cockatiel Seed Mix',      subtitle:'Premium Blend · 500g',      emoji:'🌾', image:'images/food/cockatiel-seed.jpg',      category:['seeds'],        badge:'Popular',    unit:'₹250 / 500g' },
    { id:'f2',  name:'African Grey Parrot Mix', subtitle:'Nut & Seed Blend · 1kg',    emoji:'🥜', image:'images/food/parrot-mix.jpg',           category:['seeds'],        badge:'Bestseller', unit:'₹550 / kg' },
    { id:'f3',  name:'Budgerigar Seed Mix',     subtitle:'Vitamin Enriched · 500g',   emoji:'🌿', image:'images/food/budgie-seed.jpg',          category:['seeds'],        badge:null,         unit:'₹180 / 500g' },
    { id:'f4',  name:'Sprouting Seeds Kit',     subtitle:'3-Seed Blend · 500g',       emoji:'🌱', image:'images/food/sprouting.jpg',            category:['seeds'],        badge:null,         unit:'₹220 / 500g' },
    { id:'f5',  name:'Parrot Pellets',          subtitle:'Balanced Diet · 500g',      emoji:'🟡', image:'images/food/parrot-pellets.jpg',       category:['pellets'],      badge:'New',        unit:'₹480 / 500g' },
    { id:'f6',  name:'Cockatiel Pellets',       subtitle:'Small Bite · 500g',         emoji:'🟠', image:'images/food/cockatiel-pellets.jpg',    category:['pellets'],      badge:null,         unit:'₹420 / 500g' },
    { id:'f7',  name:'Millet Spray Bundle',     subtitle:'Natural Treat · Pack of 5', emoji:'🌾', image:'images/food/millet-spray.jpg',         category:['treats'],       badge:'Popular',    unit:'₹120 / 5pc' },
    { id:'f8',  name:'Dried Fruit & Veggie Mix',subtitle:'Mixed Treats · 200g',       emoji:'🍎', image:'images/food/fruit-mix.jpg',            category:['treats'],       badge:null,         unit:'₹320 / 200g' },
    { id:'f9',  name:'Eggfood (Breeding)',      subtitle:'High Protein · 500g',       emoji:'🥚', image:'images/food/eggfood.jpg',              category:['treats'],       badge:null,         unit:'₹350 / 500g' },
    { id:'f10', name:'Calcium Supplement',      subtitle:'Liquid Drops · 100ml',      emoji:'💊', image:'images/food/calcium.jpg',              category:['supplements'],  badge:null,         unit:'₹280 / bottle' },
    { id:'f11', name:'Multivitamin Drops',      subtitle:'All-Bird Formula · 100ml',  emoji:'🩺', image:'images/food/vitamins.jpg',             category:['supplements'],  badge:'New',        unit:'₹320 / bottle' },
    { id:'f12', name:'Cuttlebone Mineral Block',subtitle:'Natural Calcium · 3pc',     emoji:'🦴', image:'images/food/cuttlebone.jpg',           category:['supplements'],  badge:null,         unit:'₹150 / 3pc' },
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
    { id:'a7',  name:'Foraging Toy Set',        subtitle:'3-Piece Activity Bundle',    emoji:'🎯', image:'images/accessories/foraging-toys.jpg', category:['toy'],     badge:'Popular',  unit:'₹450 / set' },
    { id:'a8',  name:'Bird Swing',              subtitle:'Wooden & Rope · Small',      emoji:'🎠', image:'images/accessories/swing.jpg',          category:['toy'],     badge:null,       unit:'₹220' },
    { id:'a9',  name:'Bell & Ring Toy',         subtitle:'Stainless Steel · Safe',     emoji:'🔔', image:'images/accessories/bell-toy.jpg',       category:['toy'],     badge:null,       unit:'₹180' },
    { id:'a10', name:'Steel Feeder Bowl Set',   subtitle:'Stainless Steel · 2pc',      emoji:'🥣', image:'images/accessories/feeder-bowls.jpg',  category:['feeder'],  badge:null,       unit:'₹250 / set' },
    { id:'a11', name:'Auto Water Dispenser',    subtitle:'Bottle Style · 300ml',       emoji:'💧', image:'images/accessories/water-dispenser.jpg',category:['feeder'],  badge:'New',      unit:'₹320' },
    { id:'a12', name:'Bird Harness & Leash',    subtitle:'Adjustable · Size S/M/L',    emoji:'🎀', image:'images/accessories/harness.jpg',        category:['other'],   badge:'New',      unit:'₹480' },
    { id:'a13', name:'Grooming Kit',            subtitle:'Nail Clipper + Brush Set',   emoji:'✂️', image:'images/accessories/grooming.jpg',       category:['other'],   badge:null,       unit:'₹650 / kit' },
    { id:'a14', name:'Cockatiel Nesting Box',   subtitle:'Wooden · With Entry Perch',  emoji:'🪺', image:'images/accessories/nest-box.jpg',       category:['other'],   badge:null,       unit:'₹380' },
];

/* ============================================
   FOOD — RENDER
   ============================================ */
function renderFood(list) {
    const grid = document.getElementById('foodGrid');
    grid.innerHTML = '';
    if (!list.length) {
        grid.innerHTML = '<div class="no-results"><i class="fas fa-seedling"></i><h3>No products found</h3><p>Try a different filter</p></div>';
        return;
    }
    list.forEach(p => {
        const imgs = p.images || (p.image ? [p.image] : []);
        const mainImg = imgs[0] || '';
        const waMsg = `Hi Nila's Aviary! I'd like to order *${p.name}* (${p.unit}). Please confirm availability and delivery details.`;
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
                        <a href="${waLink(waMsg)}" class="ic-btn wa-btn" target="_blank" title="Order on WhatsApp">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>`;
        card.querySelector('.img-wrap').addEventListener('click', () => openImageLightbox(imgs, p.name));
        grid.appendChild(card);
    });
}

/* ============================================
   ACCESSORIES — RENDER
   ============================================ */
function renderAccessories(list) {
    const grid = document.getElementById('accGrid');
    grid.innerHTML = '';
    if (!list.length) {
        grid.innerHTML = '<div class="no-results"><i class="fas fa-home"></i><h3>No products found</h3><p>Try a different filter</p></div>';
        return;
    }
    list.forEach(p => {
        const imgs = p.images || (p.image ? [p.image] : []);
        const mainImg = imgs[0] || '';
        const waMsg = `Hi Nila's Aviary! I'd like to order *${p.name}* (${p.unit}). Please confirm availability.`;
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
                        <a href="${waLink(waMsg)}" class="ic-btn wa-btn" target="_blank" title="Order on WhatsApp">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>`;
        card.querySelector('.img-wrap').addEventListener('click', () => openImageLightbox(imgs, p.name));
        grid.appendChild(card);
    });
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

/* ============================================
   INIT
   ============================================ */
renderBirds(birds);
renderReviews();
renderVideos();
populateSelect();
renderFood(foodProducts);
renderAccessories(accessories);
