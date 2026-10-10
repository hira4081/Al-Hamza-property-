import { photos } from "@/assets/photos";

export type PropertyArea =
  | "Gulshan-e-Usman"
  | "Gulshan-e-Maymar"
  | "Rabia Enclave"
  | "Capital Society"
  | "Saadi Town"
  | "Police Society";
export type PropertyType = "House" | "Apartment";

export type Property = {
  slug: string;
  name: string;
  area: PropertyArea;
  scheme: string;
  type: PropertyType;
  beds: number;
  baths: number;
  areaLabel: string;
  areaValue: string;
  price: number;
  featured: boolean;
  status: string;
  image: string;
  gallery: string[];
  blurb: string;
  description: string;
  features: string[];
};

export const PROPERTIES: Property[] = [
  {
    slug: "the-usman-residence",
    name: "The Usman Residence",
    area: "Gulshan-e-Usman",
    scheme: "Phase 1, Scheme 33",
    type: "House",
    beds: 6,
    baths: 6,
    areaLabel: "240 Sq. Yd.",
    areaValue: "2,160 sq ft",
    price: 44_000_000,
    featured: true,
    status: "Ready to move",
    image: photos.usmanExt,
    gallery: [photos.usmanExt, photos.maymarInt, photos.bungalowDay],
    blurb: "Brand-new west-open G+1 on a 40-ft road — drawing, dining, and six attached bedrooms.",
    description:
      "A 240-square-yard west-open house in Gulshan-e-Usman Phase 1. Ground-plus-one, six bedrooms with attached baths, two American kitchens, drawing and dining, and a tiled car porch. Sweet line, KE, and Sui gas are connected. Built for a large family that wants Scheme 33 convenience without compromising on finish.",
    features: [
      "West open, 40-ft road",
      "Ground + one",
      "Two American kitchens",
      "Drawing & dining",
      "Car porch for one",
      "KE, Sui gas, sweet water",
    ],
  },
  {
    slug: "maymar-villa",
    name: "Maymar Villa",
    area: "Gulshan-e-Maymar",
    scheme: "Sector T, Gulshan-e-Maymar",
    type: "House",
    beds: 6,
    baths: 7,
    areaLabel: "240 Sq. Yd.",
    areaValue: "2,160 sq ft",
    price: 42_500_000,
    featured: true,
    status: "Brand new",
    image: photos.maymarExt,
    gallery: [photos.maymarExt, photos.maymarInt, photos.bungalowDay],
    blurb: "Owner-built Sector T villa near park and masjid — marble drawing room, two kitchens.",
    description:
      "Owner-constructed 240-square-yard house in Gulshan-e-Maymar Sector T. Six bedrooms, seven baths, marble floors, a formal drawing room with chandelier, and two modern kitchens. Walking distance to the park and masjid, on a 40-ft society road. Dreamworld and Bin Hashim are a short drive.",
    features: [
      "Sector T, 40-ft road",
      "Owner built, brand new",
      "Marble drawing room",
      "Two kitchens + dirty kitchen",
      "Near park & masjid",
      "All utilities connected",
    ],
  },
  {
    slug: "capital-society-house",
    name: "Capital Society House",
    area: "Capital Society",
    scheme: "Sector 35-A, Scheme 33",
    type: "House",
    beds: 6,
    baths: 6,
    areaLabel: "240 Sq. Yd.",
    areaValue: "2,160 sq ft",
    price: 55_000_000,
    featured: true,
    status: "Brand new, G+1",
    image: photos.capitalExt,
    gallery: [photos.capitalExt, photos.maymarInt, photos.bungalowDay],
    blurb: "Brand-new 240-yard double storey in Capital Cooperative Housing Society — 40-ft road.",
    description:
      "A brand-new 240-square-yard ground-plus-one in Capital Society, Scheme 33 Sector 35-A. Six bedrooms, six baths, drawing and dining, two kitchens. Capital is a settled, boundary-walled society with gas, electricity, and sweet water on the plot. Priced against recent 240-yard closes in the society.",
    features: [
      "Capital CHS, Sector 35-A",
      "Brand new G+1",
      "40-ft society road",
      "Gated, 24/7 security",
      "KE, Sui gas, sweet water",
      "Lease and transfer ready",
    ],
  },
  {
    slug: "saadi-town-block-5",
    name: "Saadi Town Block 5",
    area: "Saadi Town",
    scheme: "Block 5, Saadi Town",
    type: "House",
    beds: 4,
    baths: 5,
    areaLabel: "120 Sq. Yd.",
    areaValue: "1,080 sq ft",
    price: 20_000_000,
    featured: true,
    status: "West open, G+1",
    image: photos.saadiExt,
    gallery: [photos.saadiExt, photos.maymarInt, photos.usmanExt],
    blurb: "West-open 120-yard G+1 in Block 5 — CBM NOC society, two-bed DD each floor.",
    description:
      "A 120-square-yard west-open house in Saadi Town Block 5, Scheme 33. Ground-plus-one, four bedrooms, five baths, drawing and lounge. Saadi Town holds a Cantonment Board Malir NOC. Block 5 is among the most lived-in blocks — carpeted roads, masjid, and market on a short walk.",
    features: [
      "CBM NOC, Block 5",
      "West open",
      "Two-bed DD each floor",
      "Gated society",
      "Near masjid and market",
      "All utilities connected",
    ],
  },
  {
    slug: "police-society-villa",
    name: "Police Society Villa",
    area: "Police Society",
    scheme: "Police Society, Scheme 33",
    type: "House",
    beds: 5,
    baths: 6,
    areaLabel: "240 Sq. Yd.",
    areaValue: "2,160 sq ft",
    price: 50_000_000,
    featured: true,
    status: "Brand new",
    image: photos.policeExt,
    gallery: [photos.policeExt, photos.maymarInt, photos.capitalExt],
    blurb: "Brand-new 240-yard on a 40-ft road — A-class finish, ten minutes from the airport.",
    description:
      "A brand-new 240-square-yard house in Police Society, Scheme 33. Five bedrooms, six baths, finished in A-class materials. The society sits on Jinnah Avenue with Saadi Road and the Superhighway on three sides — about ten minutes to Jinnah International. Boundary wall, 24-hour security, sweet water and gas.",
    features: [
      "Brand new, 240 sq yd",
      "40-ft road",
      "Gated, 24-hour security",
      "Near Jinnah Avenue / airport",
      "SSGC and KE installed",
      "Map approved, completion plan",
    ],
  },
  {
    slug: "rabia-sky-residence",
    name: "Rabia Sky Residence",
    area: "Rabia Enclave",
    scheme: "Rabia Enclave, Scheme 33",
    type: "Apartment",
    beds: 2,
    baths: 2,
    areaLabel: "1,050 Sq. Ft.",
    areaValue: "117 Sq. Yd.",
    price: 12_000_000,
    featured: true,
    status: "Furnished",
    image: photos.rabiaInt,
    gallery: [photos.rabiaInt, photos.rabiaExt, photos.maymarInt],
    blurb: "Highway-facing 2-bed DD, furnished and ready — opposite the Superhighway corridor.",
    description:
      "A furnished two-bed drawing-dining apartment in Rabia Enclave, Scheme 33. Highway-facing, lift access, assigned parking, and 24/7 security. Five minutes from Sohrab Goth and Memon Medical, with the Superhighway on the doorstep. Ideal for a small family or an investor who wants a ready tenant.",
    features: [
      "Highway-facing",
      "2 bed drawing + dining",
      "Furnished, ready to move",
      "Lift & car parking",
      "24/7 society security",
      "Near Sohrab Goth & MMI",
    ],
  },
  {
    slug: "usman-corner-house",
    name: "Usman Corner House",
    area: "Gulshan-e-Usman",
    scheme: "Phase 1, Block 2",
    type: "House",
    beds: 4,
    baths: 4,
    areaLabel: "120 Sq. Yd.",
    areaValue: "1,080 sq ft",
    price: 23_200_000,
    featured: false,
    status: "Used, well kept",
    image: photos.bungalowDay,
    gallery: [photos.bungalowDay, photos.usmanExt, photos.maymarInt],
    blurb: "Corner 120-yard house with two-bed DD on the ground floor — quiet block, leased.",
    description:
      "A 120-square-yard corner house in Gulshan-e-Usman Phase 1, Block 2. Four bedrooms, four baths, drawing-dining on the ground floor. Corner plot with extra light, KDA-leased papers. A practical family home at a Scheme 33 price that still leaves room in the budget.",
    features: [
      "Corner plot",
      "KDA leased",
      "Ground-floor DD",
      "Four attached baths",
      "Quiet residential block",
      "Sweet water + gas",
    ],
  },
  {
    slug: "maymar-family-home",
    name: "Maymar Family Home",
    area: "Gulshan-e-Maymar",
    scheme: "Sector T, near park",
    type: "House",
    beds: 4,
    baths: 5,
    areaLabel: "240 Sq. Yd.",
    areaValue: "2,160 sq ft",
    price: 37_500_000,
    featured: false,
    status: "Owner occupied",
    image: photos.maymarInt,
    gallery: [photos.maymarInt, photos.maymarExt, photos.bungalowDay],
    blurb: "G+1, two-bed DD on each floor — near park, masjid, and the Sector T market.",
    description:
      "A 240-square-yard ground-plus-one in Gulshan-e-Maymar Sector T, planned as two-bed drawing-dining on each floor. Four bedrooms, five baths, owner-constructed, close to the park, masjid, school, and local market. A family house with a rental option on one floor if you need it later.",
    features: [
      "Two-bed DD each floor",
      "Near park, masjid, market",
      "Owner constructed",
      "Separate floor entry",
      "40-ft society road",
      "All utilities",
    ],
  },
  {
    slug: "capital-120-house",
    name: "Capital 120 House",
    area: "Capital Society",
    scheme: "Capital Society, Scheme 33",
    type: "House",
    beds: 4,
    baths: 4,
    areaLabel: "120 Sq. Yd.",
    areaValue: "1,080 sq ft",
    price: 24_000_000,
    featured: false,
    status: "Single storey, leased",
    image: photos.saadiExt,
    gallery: [photos.saadiExt, photos.capitalExt, photos.maymarInt],
    blurb: "Leased 120-yard single storey — settled block, families already living on the street.",
    description:
      "A 120-square-yard single-storey house in Capital Society. Four bedrooms, four baths, leased papers. About 70% of the society is already built and occupied, so you are moving onto a lived-in street, not a file-only pocket. A straightforward family house with room to go up later.",
    features: [
      "Leased 120 sq yd",
      "Single storey",
      "Settled, occupied block",
      "Four beds, four baths",
      "Boundary-walled society",
      "Gas, electricity, water",
    ],
  },
  {
    slug: "saadi-town-240",
    name: "Saadi Town 240 House",
    area: "Saadi Town",
    scheme: "Saadi Town, Scheme 33",
    type: "House",
    beds: 6,
    baths: 6,
    areaLabel: "240 Sq. Yd.",
    areaValue: "2,160 sq ft",
    price: 39_500_000,
    featured: false,
    status: "Six bed, G+1",
    image: photos.capitalExt,
    gallery: [photos.capitalExt, photos.maymarInt, photos.saadiExt],
    blurb: "Six-bed 240-yard in Saadi Town — drawing, dining, and a quiet inner street.",
    description:
      "A 240-square-yard ground-plus-one in Saadi Town, Scheme 33. Six bedrooms, six baths, drawing and dining. Saadi Town is a Pakland project with CBM NOC, seven residential blocks, and wide carpeted roads. Priced on recent 10-marla closes in the society.",
    features: [
      "240 sq yd, six beds",
      "CBM NOC",
      "Drawing & dining",
      "Carpeted society roads",
      "Gated community",
      "All utilities",
    ],
  },
  {
    slug: "police-society-120",
    name: "Police Society 120",
    area: "Police Society",
    scheme: "Police Society, Scheme 33",
    type: "House",
    beds: 4,
    baths: 5,
    areaLabel: "120 Sq. Yd.",
    areaValue: "1,080 sq ft",
    price: 25_500_000,
    featured: false,
    status: "West open, G+1",
    image: photos.policeExt,
    gallery: [photos.policeExt, photos.usmanExt, photos.maymarInt],
    blurb: "West-open 120-yard G+1 on a 40-ft road — leased, map approved, meters installed.",
    description:
      "A 120-square-yard west-open ground-plus-one in Police Society, Scheme 33. Four bedrooms with attached baths, two lounges, two American kitchens, two drawing rooms, one parking inside. Leased, map approved, SSGC and KE already installed. Easy access to Jinnah Avenue, Saadi Road, and the Superhighway.",
    features: [
      "West open, 40-ft road",
      "Leased, map approved",
      "Two American kitchens",
      "Meters already installed",
      "Gated, peaceful society",
      "Near airport road",
    ],
  },
  {
    slug: "rabia-highway-view",
    name: "Rabia Highway View",
    area: "Rabia Enclave",
    scheme: "Rabia Enclave, Scheme 33",
    type: "Apartment",
    beds: 2,
    baths: 2,
    areaLabel: "1,000 Sq. Ft.",
    areaValue: "111 Sq. Yd.",
    price: 9_800_000,
    featured: false,
    status: "Ready possession",
    image: photos.rabiaExt,
    gallery: [photos.rabiaExt, photos.rabiaInt],
    blurb: "2-bed DD, west open, cash buyers preferred — near PSO and the Daewoo terminal.",
    description:
      "A 1,000-square-foot two-bed drawing-dining apartment in Rabia Enclave. West open, ready possession, a short walk from the Superhighway services. Priced for a first home or a straightforward investment. Cash preferred; papers are clear.",
    features: [
      "West open",
      "Ready possession",
      "2 bed drawing + dining",
      "Near Superhighway / PSO",
      "Clear papers",
      "Covered parking",
    ],
  },
  {
    slug: "usman-west-open",
    name: "Usman West-Open",
    area: "Gulshan-e-Usman",
    scheme: "Phase 1, Block 2",
    type: "House",
    beds: 4,
    baths: 5,
    areaLabel: "120 Sq. Yd.",
    areaValue: "1,080 sq ft",
    price: 25_000_000,
    featured: false,
    status: "Brand new",
    image: photos.usmanExt,
    gallery: [photos.usmanExt, photos.bungalowDay, photos.maymarInt],
    blurb: "Brand-new 120-yard, next-to-corner, west open — independent house, not a banglow pair.",
    description:
      "A brand-new 120-square-yard independent house in Gulshan-e-Usman Phase 1. West open and next-to-corner, four bedrooms, five baths. Finished this year, so you are not buying someone else's wear. Suitable for a growing family that wants new construction inside a settled society.",
    features: [
      "Brand new",
      "West open, next-to-corner",
      "Independent house",
      "Four beds, five baths",
      "Modern elevation",
      "Utilities on connection",
    ],
  },
  {
    slug: "maymar-sector-v",
    name: "Maymar Sector V House",
    area: "Gulshan-e-Maymar",
    scheme: "Sector V, Gulshan-e-Maymar",
    type: "House",
    beds: 6,
    baths: 6,
    areaLabel: "240 Sq. Yd.",
    areaValue: "2,160 sq ft",
    price: 38_500_000,
    featured: false,
    status: "G+1, 2025 build",
    image: photos.bungalowDay,
    gallery: [photos.bungalowDay, photos.maymarInt, photos.maymarExt],
    blurb: "Six-bed G+1 in Sector V — drawing, dining, servant quarter, and a quiet inner street.",
    description:
      "A 240-square-yard ground-plus-one in Gulshan-e-Maymar Sector V. Six bedrooms, six baths, drawing and dining, a servant quarter, and a single car porch. 2025 construction. A slightly quieter pocket than Sector T, at a firmer price for the size.",
    features: [
      "Sector V",
      "2025 construction",
      "Servant quarter",
      "Drawing & dining",
      "Six attached baths",
      "Single car porch",
    ],
  },
  {
    slug: "rabia-furnished-suite",
    name: "Rabia Furnished Suite",
    area: "Rabia Enclave",
    scheme: "Rabia Enclave, Scheme 33",
    type: "Apartment",
    beds: 2,
    baths: 2,
    areaLabel: "1,050 Sq. Ft.",
    areaValue: "117 Sq. Yd.",
    price: 10_500_000,
    featured: false,
    status: "Furnished",
    image: photos.rabiaInt,
    gallery: [photos.rabiaInt, photos.rabiaExt],
    blurb: "Furnished 2-bed lounge apartment — rooftop garden building with gym and kids' play area.",
    description:
      "A furnished two-bed lounge apartment in Rabia Enclave. The building has a rooftop garden, gym, and a small play area. Five minutes to Sohrab Goth, ten to Faria Chowk. Priced between a bare shell and a fully done unit — furniture stays.",
    features: [
      "Furniture included",
      "Rooftop garden building",
      "Gym & kids' play area",
      "2 bed + lounge",
      "Assigned parking",
      "Near Sohrab Goth",
    ],
  },
];

export function getProperty(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function featuredProperties(): Property[] {
  return PROPERTIES.filter((p) => p.featured);
}

export function similarProperties(slug: string, limit = 3): Property[] {
  const current = getProperty(slug);
  if (!current) return PROPERTIES.slice(0, limit);
  return PROPERTIES.filter((p) => p.slug !== slug && p.area === current.area)
    .concat(PROPERTIES.filter((p) => p.slug !== slug && p.area !== current.area))
    .slice(0, limit);
}
