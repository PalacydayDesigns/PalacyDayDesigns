export const BRAND = {
  name: "Palacyday Designs",
  subtitle: "Custom Creations",
  email: "palacydaydesigns@gmail.com",
  tagline: "Bespoke mixed-media art for the people, places, and moments you love.",
  logo: "/image.png",
  studio: "A small studio outside Philadelphia, PA",
  hours: "Studio replies Mon–Fri, usually within 24 hours",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/shop", label: "Shop & Services" },
  { href: "/process", label: "How It Works" },
  { href: "/about", label: "About the Artist" },
  { href: "/contact", label: "Custom Inquiry" },
];

export type CategoryKey = "portraits" | "decor" | "stationery" | "logos";

export const GALLERY_CATEGORIES: {
  key: CategoryKey;
  label: string;
  short: string;
  description: string;
}[] = [
  {
    key: "portraits",
    label: "Custom & Family Portraits",
    short: "Portraits",
    description:
      "Watercolor family groupings, pet tributes, and milestone portraits painted from your own reference photos.",
  },
  {
    key: "decor",
    label: "Specialty Decor & Children's Art",
    short: "Decor & Kids",
    description:
      "Nursery and playroom prints, kitchen botanicals, and narrative landscapes scaled for the wall they will live on.",
  },
  {
    key: "stationery",
    label: "Stationery & Event Design",
    short: "Stationery",
    description:
      "Wedding invitations, save-the-dates, and thank-you cards with hand-built typography and print-ready files.",
  },
  {
    key: "logos",
    label: "Logos & Custom Graphics",
    short: "Logos & Graphics",
    description:
      "Branding marks, emblem designs, and custom classroom logos delivered as clean, infinitely scalable vectors.",
  },
];

export type GalleryPiece = {
  slug: string;
  title: string;
  category: CategoryKey;
  medium: string;
  setting: string;
  caption: string;
  imageUrl: string;
  orientation: "portrait" | "landscape" | "square";
  featured: boolean;
  heroEyebrow: string | null;
  heroHeadline: string | null;
  priceNote: string | null;
  sortOrder: number;
};

export const PORTFOLIO_SEED: GalleryPiece[] = [
  {
    slug: "whitlock-family-autumn",
    title: "The Whitlock Family, Autumn",
    category: "portraits",
    medium: "Digital Watercolor & Overpainting",
    setting: "Stair landing gallery wall — 18×24 in. framed giclée",
    caption:
      "Five people, one very patient terrier, and a single blurry phone photo from a windy October hike. Base lighting was concepted digitally, then every face was hand-painted over on the tablet so the likenesses stayed true and the washes stayed loose.",
    imageUrl: "/art/family-portrait.jpg",
    orientation: "portrait",
    featured: true,
    heroEyebrow: "Custom & Family Portraits",
    heroHeadline: "Your people, painted the way you remember them",
    priceNote: "Commissions from $95",
    sortOrder: 1,
  },
  {
    slug: "barkley-sixteen-good-years",
    title: "Barkley — Sixteen Good Years",
    category: "portraits",
    medium: "Wet-on-wet digital watercolor, ink line accents",
    setting: "Memorial gift — 12×12 in. print with hand-lettered name plate",
    caption:
      "A pet tribute commissioned by a family three weeks after saying goodbye. Warm amber was pulled into the violet wash so the pigment feels alive rather than somber, and the eyes were rendered last, slowly, at full resolution.",
    imageUrl: "/art/pet-tribute.jpg",
    orientation: "square",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Pet tributes from $75",
    sortOrder: 2,
  },
  {
    slug: "graduation-studio-proof",
    title: "Commencement — Studio Proof",
    category: "portraits",
    medium: "Digital painting, proofed against physical swatches",
    setting: "Graduation gift — matted 11×14 in. proof",
    caption:
      "Every commission gets a soft proof pinned next to real pigment swatches before print. It is the fastest way to catch a violet that reads beautifully on screen and turns muddy on cotton rag paper.",
    imageUrl:
      "https://images.pexels.com/photos/7859494/pexels-photo-7859494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    orientation: "portrait",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Milestone portraits from $85",
    sortOrder: 3,
  },
  {
    slug: "anniversary-living-room-install",
    title: "Anniversary Portrait, Installed",
    category: "portraits",
    medium: "Digital hybrid portrait, archival giclée",
    setting: "Living room feature wall — 24×36 in.",
    caption:
      "A fortieth-anniversary piece sized to the sofa below it. Scale planning happens before the first brushstroke: I mock the artwork into a photo of your actual room so the finished frame never feels a size too small.",
    imageUrl:
      "https://images.pexels.com/photos/10313987/pexels-photo-10313987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    orientation: "portrait",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Large-format commissions from $150",
    sortOrder: 4,
  },
  {
    slug: "balloons-over-hollow-hills",
    title: "Balloons Over Hollow Hills",
    category: "decor",
    medium: "Digital Watercolor & Gouache Overpainting",
    setting: "Nursery / toddler room — 16×20 in. print or instant download",
    caption:
      "Built for a nursery with a low afternoon sun, so the palette leans lilac instead of primary. The tiny houses along the ridge were added one at a time by request — the family wanted their own street in the painting.",
    imageUrl: "/art/nursery-balloons.jpg",
    orientation: "portrait",
    featured: true,
    heroEyebrow: "Specialty Decor & Children's Art",
    heroHeadline: "Rooms that tell a story before bedtime",
    priceNote: "Downloads from $15",
    sortOrder: 5,
  },
  {
    slug: "herb-trio-kitchen",
    title: "Herb Trio — Kitchen Study",
    category: "decor",
    medium: "Digital watercolor with vector line overlay",
    setting: "Kitchen or breakfast nook — set of three 8×10 in. prints",
    caption:
      "Rosemary, sage, and lavender painted in indigo so the set reads as art rather than clip-art. The outlines are true vectors laid over painted washes, which keeps the edges razor sharp at any print size.",
    imageUrl: "/art/kitchen-decor.jpg",
    orientation: "portrait",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Sets from $24",
    sortOrder: 6,
  },
  {
    slug: "dusk-ridge-no-3",
    title: "Dusk Ridge, No. 3",
    category: "decor",
    medium: "Generative base plate, fully hand-overpainted",
    setting: "Bedroom or office statement wall — 40×20 in. panorama",
    caption:
      "A narrative landscape from the Quiet Country series. Atmosphere and fog density were concepted generatively, then the ridgelines, water reflection, and star field were repainted by hand until the horizon glow felt earned.",
    imageUrl: "/art/mountain-landscape.jpg",
    orientation: "landscape",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Panoramic prints from $65",
    sortOrder: 7,
  },
  {
    slug: "eucalyptus-entry-set",
    title: "Eucalyptus Study, Entryway Set",
    category: "decor",
    medium: "Digital watercolor, warm-neutral print profile",
    setting: "Entry console styling — 11×14 in. framed",
    caption:
      "Commissioned to sit beside a very green plant without competing with it. The print profile was warmed two points so the paper matches the client's oak frames instead of fighting them.",
    imageUrl:
      "https://images.pexels.com/photos/8903651/pexels-photo-8903651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    orientation: "landscape",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Framed prints from $45",
    sortOrder: 8,
  },
  {
    slug: "harbor-fog-diptych",
    title: "Harbor Fog — Playroom Diptych",
    category: "decor",
    medium: "Layered digital washes, composited in Photoshop",
    setting: "Shared kids' room — two 18×18 in. panels",
    caption:
      "Two panels painted as one continuous horizon, then split so each child got half of the same sea. The seam was composited by hand so the pigment carries across the gap between frames.",
    imageUrl:
      "https://images.pexels.com/photos/7244319/pexels-photo-7244319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    orientation: "landscape",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Diptychs from $95",
    sortOrder: 9,
  },
  {
    slug: "desert-bloom-reading-nook",
    title: "Desert Bloom, Reading Nook",
    category: "decor",
    medium: "Digital watercolor with dry-brush texture pass",
    setting: "Reading corner — 16×20 in. framed print",
    caption:
      "A quiet piece for a loud house. The dry-brush pass at the end is what keeps a digital wash from looking plastic — it reintroduces the tooth of real cold-press paper.",
    imageUrl:
      "https://images.pexels.com/photos/8235834/pexels-photo-8235834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    orientation: "landscape",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Prints from $45",
    sortOrder: 10,
  },
  {
    slug: "ashgrove-wedding-suite",
    title: "The Ashgrove Wedding Suite",
    category: "stationery",
    medium: "Hand-built typography, watercolor borders, vector crop marks",
    setting: "Autumn vineyard wedding — invitation, details card, RSVP",
    caption:
      "A three-piece suite with a painted indigo border, vellum overlay, and violet wax seal. Every line of type was kerned by hand and delivered as press-ready CMYK with bleed, plus a matching digital version for texting the details.",
    imageUrl: "/art/wedding-suite.jpg",
    orientation: "landscape",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Suites from $120",
    sortOrder: 11,
  },
  {
    slug: "gratitude-card-collection",
    title: "The Gratitude Card Collection",
    category: "stationery",
    medium: "Digital watercolor, gold foil-effect linework",
    setting: "Thank-you notes & seasonal greetings — A2 folded cards",
    caption:
      "A ten-card collection painted for a family who sends real mail. Each motif was drawn at 600 dpi and paired with a lined envelope color sampled directly from the artwork.",
    imageUrl: "/art/greeting-cards.jpg",
    orientation: "landscape",
    featured: true,
    heroEyebrow: "Stationery & Event Design",
    heroHeadline: "Paper worth keeping in the drawer",
    priceNote: "Card sets from $75",
    sortOrder: 12,
  },
  {
    slug: "ceremony-signage-suite",
    title: "Ceremony Signage & Menu Set",
    category: "stationery",
    medium: "Vector lettering over painted texture plates",
    setting: "Day-of event styling — welcome sign, menus, place cards",
    caption:
      "Day-of pieces built from the same painted plates as the invitation so the whole event feels like one hand made it. Signage was output at 300 dpi at full size, not scaled up from a card.",
    imageUrl:
      "https://images.pexels.com/photos/8843706/pexels-photo-8843706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    orientation: "portrait",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Day-of add-ons from $95",
    sortOrder: 13,
  },
  {
    slug: "save-the-date-series",
    title: "Save-the-Date Series, Styled",
    category: "stationery",
    medium: "Photo compositing, custom type lockup",
    setting: "Styled flat lay for client social announcement",
    caption:
      "Save-the-dates that had to work as a mailed card and an Instagram announcement. Two crops, one type lockup, and a compositing pass that dropped the couple's engagement photo into a painted frame.",
    imageUrl:
      "https://images.pexels.com/photos/6958778/pexels-photo-6958778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    orientation: "landscape",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Save-the-dates from $85",
    sortOrder: 14,
  },
  {
    slug: "wildbloom-brand-mark",
    title: "Wildbloom — Brand Mark & Collateral",
    category: "logos",
    medium: "Vector emblem, painted texture plate, print collateral",
    setting: "Boutique florist identity — cards, letterhead, tags",
    caption:
      "A painted bloom reduced to a mark that still reads at 16 pixels. Delivered as a full package: primary and stacked lockups, a one-color stamp version, SVG/EPS/PNG exports, and a short usage guide.",
    imageUrl: "/art/logo-mockup.jpg",
    orientation: "landscape",
    featured: true,
    heroEyebrow: "Logos & Custom Graphics",
    heroHeadline: "Marks that hold up at any size",
    priceNote: "Logo packages from $300",
    sortOrder: 15,
  },
  {
    slug: "room-214-classroom-crest",
    title: "Room 214 — Classroom Crest",
    category: "logos",
    medium: "Hand-drawn crest, vectorized and color-locked",
    setting: "High school classroom — door decal, syllabus header, shirts",
    caption:
      "Built for my own students first. A crest that survives a photocopier, a vinyl cutter, and a screen-printed hoodie needs different files for each — so the package ships with all three.",
    imageUrl:
      "https://images.pexels.com/photos/7859093/pexels-photo-7859093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    orientation: "portrait",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Classroom & team emblems from $300",
    sortOrder: 16,
  },
  {
    slug: "vector-build-emblem",
    title: "Vector Build — Emblem Refinement",
    category: "logos",
    medium: "Bézier curve construction over painted sketch",
    setting: "Process capture from the digital workbench",
    caption:
      "The unglamorous middle of a logo project: a painted sketch underneath, anchor points on top, and an hour spent pulling handles until the curve stops looking almost right.",
    imageUrl:
      "https://images.pexels.com/photos/8768118/pexels-photo-8768118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    orientation: "landscape",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: null,
    sortOrder: 17,
  },
  {
    slug: "type-lockup-exploration",
    title: "Type Lockup Exploration",
    category: "logos",
    medium: "Custom lettering, spacing and kerning studies",
    setting: "Brand kit development — round two concepts",
    caption:
      "Nine lockups, one survivor. Custom letterforms get drawn rather than typed, which is why a Palacyday wordmark never quite matches a font you can download.",
    imageUrl:
      "https://images.pexels.com/photos/5904072/pexels-photo-5904072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    orientation: "landscape",
    featured: false,
    heroEyebrow: null,
    heroHeadline: null,
    priceNote: "Brand kits from $450",
    sortOrder: 18,
  },
];

export type Offering = {
  slug: string;
  name: string;
  category: "decor" | "portraits" | "branding";
  format: string;
  blurb: string;
  includes: string;
  priceLow: number;
  priceHigh: number;
  priceSuffix: string;
  turnaround: string;
  imageUrl: string;
  badge: string | null;
  sortOrder: number;
};

export const SHOP_CATEGORIES: {
  key: Offering["category"];
  label: string;
  kicker: string;
  priceBand: string;
  description: string;
}[] = [
  {
    key: "decor",
    label: "Wall Art & Specialty Decor",
    kicker: "Downloads & Prints",
    priceBand: "$15–$35 downloads · $45–$95 printed",
    description:
      "Narrative landscapes, stylized prints, and curated room decor for children's rooms, kitchens, and quiet corners. Buy the file and print it locally, or let the studio handle print-on-demand on archival cotton rag.",
  },
  {
    key: "portraits",
    label: "Custom Portraits",
    kicker: "Bespoke Commissions",
    priceBand: "$75–$150+ per portrait",
    description:
      "Family, holiday, graduation, and watercolor memorial portraits painted from your reference photos. Every commission is a hybrid: generative base lighting, then hours of hand overpainting until the likeness is right.",
  },
  {
    key: "branding",
    label: "Graphic Design & Branding",
    kicker: "Stationery & Identity",
    priceBand: "$75–$200 stationery · $300–$800 logo packages",
    description:
      "Custom invitations, greeting cards, and professional logo design with hand-built typography, press-ready files, and vector deliverables that scale from a business card to a gymnasium banner.",
  },
];

export const OFFERINGS_SEED: Offering[] = [
  {
    slug: "narrative-landscape-download",
    name: "Narrative Landscape — Instant Download",
    category: "decor",
    format: "Digital download",
    blurb:
      "A single piece from the Quiet Country series, delivered as print-ready files sized for the three most common frames.",
    includes:
      "300 dpi JPG + PDF|Sized for 8×10, 11×14, 16×20|Personal-use license|Instant delivery",
    priceLow: 15,
    priceHigh: 35,
    priceSuffix: "",
    turnaround: "Immediate",
    imageUrl: "/art/mountain-landscape.jpg",
    badge: "Best seller",
    sortOrder: 1,
  },
  {
    slug: "childrens-room-art-set",
    name: "Children's Room Art Set",
    category: "decor",
    format: "Digital download · set of three",
    blurb:
      "Three coordinated pieces for a nursery or playroom, palette-matched so they hang together without matching too hard.",
    includes:
      "Three 300 dpi files|Optional name personalization|Sized for 8×10 and 11×14|Personal-use license",
    priceLow: 24,
    priceHigh: 35,
    priceSuffix: "",
    turnaround: "24–48 hrs with personalization",
    imageUrl: "/art/nursery-balloons.jpg",
    badge: null,
    sortOrder: 2,
  },
  {
    slug: "kitchen-botanical-trio",
    name: "Kitchen Botanical Trio",
    category: "decor",
    format: "Digital download or printed set",
    blurb:
      "Indigo herb studies with vector linework — the set that quietly pulls a kitchen gallery wall together.",
    includes:
      "Three coordinated studies|Download or printed set|Warm or cool paper profile|Frame-size guidance included",
    priceLow: 18,
    priceHigh: 65,
    priceSuffix: "",
    turnaround: "Immediate (download) · 5–7 days (print)",
    imageUrl: "/art/kitchen-decor.jpg",
    badge: null,
    sortOrder: 3,
  },
  {
    slug: "archival-giclee-print",
    name: "Archival Giclée Print",
    category: "decor",
    format: "Print on demand",
    blurb:
      "Any studio piece printed on 100% cotton rag with pigment inks, packed flat, and shipped ready to frame.",
    includes:
      "Museum-grade cotton rag|Pigment inks rated 100+ years|Sizes 11×14 up to 24×36|Signed on the reverse",
    priceLow: 45,
    priceHigh: 95,
    priceSuffix: "",
    turnaround: "5–8 business days",
    imageUrl:
      "https://images.pexels.com/photos/8235834/pexels-photo-8235834.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "Print on demand",
    sortOrder: 4,
  },
  {
    slug: "signature-family-portrait",
    name: "Signature Watercolor Family Portrait",
    category: "portraits",
    format: "Bespoke commission",
    blurb:
      "The studio's flagship piece: your family painted in loose violet and indigo washes, with real likenesses under the pigment.",
    includes:
      "Up to 4 subjects (+$25 each after)|Two revision rounds|High-resolution file included|Optional archival print add-on",
    priceLow: 95,
    priceHigh: 150,
    priceSuffix: "+",
    turnaround: "2–3 weeks",
    imageUrl: "/art/family-portrait.jpg",
    badge: "Most requested",
    sortOrder: 5,
  },
  {
    slug: "pet-tribute-portrait",
    name: "Pet Tribute & Memorial Portrait",
    category: "portraits",
    format: "Bespoke commission",
    blurb:
      "A gentle single-subject portrait for a companion who earned it, painted with warmth rather than sentimentality.",
    includes:
      "Single pet, painted from your photos|Optional hand-lettered name|Digital file + print-ready export|Rush option available",
    priceLow: 75,
    priceHigh: 120,
    priceSuffix: "",
    turnaround: "10–14 days",
    imageUrl: "/art/pet-tribute.jpg",
    badge: null,
    sortOrder: 6,
  },
  {
    slug: "milestone-portrait",
    name: "Milestone Portrait — Holiday, Graduation, Newborn",
    category: "portraits",
    format: "Bespoke commission",
    blurb:
      "Mark the year that mattered. Graduation caps, first Christmases, retirements, and anniversaries all get the same treatment.",
    includes:
      "Custom composition & background|Hand-lettered date or quote|Two revision rounds|Gift-ready digital preview card",
    priceLow: 85,
    priceHigh: 150,
    priceSuffix: "+",
    turnaround: "2–3 weeks",
    imageUrl:
      "https://images.pexels.com/photos/7859494/pexels-photo-7859494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: null,
    sortOrder: 7,
  },
  {
    slug: "wedding-stationery-suite",
    name: "Wedding Stationery Suite",
    category: "branding",
    format: "Stationery design",
    blurb:
      "Invitation, details card, and RSVP built around one painted motif, with press-ready files your printer will thank you for.",
    includes:
      "3-piece suite design|Hand-kerned custom typography|CMYK press files with bleed|Matching digital/text version",
    priceLow: 120,
    priceHigh: 200,
    priceSuffix: "",
    turnaround: "2–4 weeks",
    imageUrl: "/art/wedding-suite.jpg",
    badge: "Event favorite",
    sortOrder: 8,
  },
  {
    slug: "greeting-card-collection",
    name: "Greeting & Thank-You Card Set",
    category: "branding",
    format: "Stationery design",
    blurb:
      "A personal card collection — holiday, thank-you, or announcement — painted and typeset as a coordinated family.",
    includes:
      "Up to 5 card designs|Envelope liner color match|Print-ready + digital exports|Optional photo compositing",
    priceLow: 75,
    priceHigh: 140,
    priceSuffix: "",
    turnaround: "10–14 days",
    imageUrl: "/art/greeting-cards.jpg",
    badge: null,
    sortOrder: 9,
  },
  {
    slug: "signature-logo-package",
    name: "Signature Logo Package",
    category: "branding",
    format: "Brand identity",
    blurb:
      "Full identity development for small businesses and creators: discovery, concepts, refinement, and a complete file library.",
    includes:
      "3 concept directions|Primary, stacked & one-color lockups|SVG, EPS, PDF, PNG exports|Color, type & usage guide",
    priceLow: 300,
    priceHigh: 800,
    priceSuffix: "",
    turnaround: "3–5 weeks",
    imageUrl: "/art/logo-mockup.jpg",
    badge: "Full identity",
    sortOrder: 10,
  },
  {
    slug: "classroom-team-emblem",
    name: "Classroom & Small-Team Emblem",
    category: "branding",
    format: "Brand identity · compact",
    blurb:
      "A focused emblem package for teachers, clubs, and small teams — built to survive a copier, a vinyl cutter, and a hoodie press.",
    includes:
      "2 concept directions|Vector emblem + wordmark|Screen-print & vinyl-ready files|Educator rate available",
    priceLow: 300,
    priceHigh: 450,
    priceSuffix: "",
    turnaround: "2–3 weeks",
    imageUrl:
      "https://images.pexels.com/photos/7859093/pexels-photo-7859093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badge: "Educator rate",
    sortOrder: 11,
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Concepting & Direction",
    subtitle: "Mood boards and structural planning",
    body: "We start with a conversation and your reference photos. I build a small mood board — palette, paper feel, framing, the emotional temperature of the piece — and block out composition thumbnails so we agree on the bones before any pigment is laid down.",
    details: [
      "Reference photo review and subject list",
      "Palette study pulled from your room or event colors",
      "Composition thumbnails and scale mockups",
    ],
    image:
      "https://images.pexels.com/photos/7147721/pexels-photo-7147721.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    number: "02",
    title: "The Hybrid Pipeline",
    subtitle: "Generative imaging for base textures and lighting",
    body: "Generative tools are used the way a photographer uses a lighting rig: to rough in atmosphere, pigment bleed, and paper grain fast. These plates are raw material only — never a finished piece — and they are always directed by the composition we approved in step one.",
    details: [
      "Base texture and paper-grain plates",
      "Lighting and atmosphere studies",
      "Direction stays with the artist, always",
    ],
    image: "/art/mountain-landscape.jpg",
  },
  {
    number: "03",
    title: "The Digital Workbench",
    subtitle: "Hand painting, vectorizing, and Photoshop compositing",
    body: "This is where the hours go. Faces, hands, fur, and every focal edge are hand-painted on the tablet at full resolution. Logos and linework are rebuilt as true Bézier vectors. Layers are composited in Photoshop with masks, not filters, so nothing looks machine-smoothed.",
    details: [
      "Stylus overpainting at 100% zoom",
      "Vector rebuilds for marks and linework",
      "Layer-by-layer compositing and masking",
    ],
    image:
      "https://images.pexels.com/photos/8768118/pexels-photo-8768118.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    number: "04",
    title: "Final Polish",
    subtitle: "Custom typography, resolution enhancement, print prep",
    body: "Names and dates are hand-lettered or kerned by hand — never dropped in at default spacing. The file is upscaled and sharpened for its final size, soft-proofed against real paper stock, and delivered with bleed, crop marks, and the color profile your printer needs.",
    details: [
      "Hand-lettering and custom kerning",
      "Resolution enhancement to final print size",
      "Soft proofing, bleed, and CMYK/RGB exports",
    ],
    image: "/art/wedding-suite.jpg",
  },
];

export const PROCESS_PROMISE = [
  {
    title: "Software serves the artist",
    body: "No commission ships as a raw generation. Every piece passes through hand painting, hand typesetting, and human judgment about what to keep.",
  },
  {
    title: "You see it before it ships",
    body: "Watermarked proofs arrive at the halfway mark and again before final delivery, with two revision rounds baked into every commission.",
  },
  {
    title: "Files that actually print",
    body: "Deliverables come sized, profiled, and bleeding correctly — because a beautiful piece that prints muddy is not a finished piece.",
  },
];

export const ABOUT_TIMELINE = [
  {
    year: "Then",
    title: "A kid who wouldn't stop drawing",
    body: "Margins full of sketches, sketchbooks full of everything else. Drawing was never a phase — it was just how I paid attention to the world.",
  },
  {
    year: "Next",
    title: "Pencil to pixels",
    body: "Years of hands-on Photoshop and digital design work for real deadlines and real clients taught me the discipline that free-hand drawing alone never could.",
  },
  {
    year: "Personal",
    title: "Designed for the people I love",
    body: "My own wedding invitations, save-the-dates, and thank-you notes. Portraits for family, for colleagues, for friends going through hard seasons.",
  },
  {
    year: "Now",
    title: "Teaching by day, painting by night",
    body: "I teach high school, and I design for my own classroom — logos, crests, posters, handouts. Students notice when something is made with care. So do clients.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Patrick took a grainy photo from 1987 and gave us a portrait of my parents that my mother cried over. Twice.",
    author: "Dana R.",
    detail: "Anniversary commission",
  },
  {
    quote:
      "Our invitation suite looked like it came from a studio three times the price, and he answered every email within a day.",
    author: "Marcus & Elise",
    detail: "Wedding stationery suite",
  },
  {
    quote:
      "The classroom crest he designed ended up on our door, our shirts, and every syllabus in the department.",
    author: "K. Alvarez",
    detail: "Educator emblem package",
  },
];

export const FAQS = [
  {
    q: "What reference photos work best?",
    a: "Natural light, faces unobstructed, and the highest resolution your phone can manage. Old or slightly blurry photos are absolutely workable — a large part of the craft is reconstructing detail that the camera lost.",
  },
  {
    q: "Do you really use AI?",
    a: "As one tool among many, for base textures, lighting studies, and rapid concepting. Likenesses, focal edges, typography, and vector work are done by hand. Nothing leaves the studio as a raw generation.",
  },
  {
    q: "How do revisions work?",
    a: "Two revision rounds are included with every commission and stationery suite. Additional rounds are billed at a flat $25 each, and structural changes are always discussed before any extra cost.",
  },
  {
    q: "Can I print the files myself?",
    a: "Yes. Downloads and commissions include print-ready files with the correct resolution and color profile, plus a short guide on paper stocks that flatter watercolor washes.",
  },
  {
    q: "Do you offer rush timelines?",
    a: "Often. Rush service adds 25% to the commission price when the calendar allows it — email the studio with your date before ordering and I'll tell you honestly whether it's possible.",
  },
];

export const PROJECT_TYPES = [
  "Custom family portrait",
  "Pet tribute / memorial portrait",
  "Milestone portrait (graduation, holiday, newborn)",
  "Children's room or nursery art",
  "Kitchen / specialty decor print",
  "Wedding or event stationery",
  "Greeting & thank-you card set",
  "Logo or brand identity package",
  "Classroom / team emblem",
  "Something else entirely",
];

export const BUDGET_RANGES = [
  "Not sure yet",
  "$15–$75",
  "$75–$150",
  "$150–$300",
  "$300–$800",
  "$800+",
];

export const TIMELINES = [
  "Flexible",
  "Within 2 weeks",
  "Within a month",
  "1–3 months out",
  "Specific date (noted below)",
];
