
import {
  Globe,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Camera,
  ScanFace,
  MapPin,
  Waves,
  Sun,
  CloudSun,
  Moon,
  Snowflake,
  Biohazard,
  Droplets,
  Wind,
  Thermometer,
  ArrowRight,
} from 'lucide-react'

import heroImage from './assets/hero.png'

// ==========================================
// "OCEAN WATCH" LOGO (SVG Component)
// ==========================================
const NewOceanLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 8L85 22V48C85 68 70 85 50 92C30 85 15 68 15 48V22L50 8Z" fill="#0d6e4f" />
    <path d="M50 16L77 27V48C77 63 65 77 50 83C35 77 23 63 23 48V27L50 16Z" fill="#e6f4f1" />
    <path d="M25 55C35 55 40 45 50 45C60 45 65 55 75 55" stroke="#0d6e4f" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M25 65C35 65 40 55 50 55C60 55 65 65 75 65" stroke="#0d6e4f" strokeWidth="3.5" strokeLinecap="round" opacity="0.6" />
    <path d="M38 42C38 34 43 30 50 30C57 30 62 34 62 42C62 46 58 48 50 48C42 48 38 46 38 42Z" fill="#0d6e4f" />
    <path d="M43 40C43 36 46 34 50 34C54 34 57 36 57 40C57 42 54 43 50 43C46 43 43 42 43 40Z" fill="white" />
  </svg>
)

const features = [
  {
    icon: ScanFace,
    title: 'Image Classification',
    description: 'Upload underwater images and discover marine organisms using AI.',
    link: 'Classify an Image',
    href: '#image-classification',
  },
  {
    icon: Camera,
    title: 'Video Detection',
    description: 'Detect Hawksbill turtles in underwater video footage.',
    link: 'Detect Turtles',
    href: '#video-detection',
  },
  {
    icon: MapPin,
    title: 'Observation Map',
    description: 'Explore marine observations and conservation activities.',
    link: 'Explore Map',
    href: '#observation-map',
  },
]

const zones = [
  {
    id: '01',
    name: 'Sunlight Zone',
    subName: 'EPIPELAGIC',
    depth: '0 – 200 M',
    gradient: 'from-[#06b6d4] to-[#14b8a6]',
    icon: Sun,
    description: 'Bright and full of life with coral reefs, photosynthetic phytoplankton, and foraging sea turtles.',
    stats: [
      { icon: Sun, text: '100% Sunlight Penetration' },
      { icon: Thermometer, text: '24°C – 30°C Tropical Waters' },
    ],
    resident: 'Hawksbill Turtle, Parrotfish',
  },
  {
    id: '02',
    name: 'Twilight Zone',
    subName: 'MESOPELAGIC',
    depth: '200 – 1,000 M',
    gradient: 'from-[#3b82f6] to-[#1e40af]',
    icon: CloudSun,
    description: 'Fading light, faint bioluminescence, and creatures with unique visual and baric adaptations.',
    stats: [
      { icon: Sparkles, text: 'Faint Residual Light' },
      { icon: Thermometer, text: '4°C – 12°C Rapid Drop' },
    ],
    resident: 'Lanternfish, Hatchetfish',
  },
  {
    id: '03',
    name: 'Midnight Zone',
    subName: 'BATHYPELAGIC',
    depth: '1,000 – 4,000 M',
    gradient: 'from-[#4338ca] to-[#1e1b4b]',
    icon: Moon,
    description: 'Dark and mysterious realm where only biological light exists, crushing hydrostatic pressure.',
    stats: [
      { icon: Sparkles, text: 'Bioluminescent Signatures' },
      { icon: Wind, text: 'Up to 400 Atmospheres' },
    ],
    resident: 'Anglerfish, Giant Squid',
  },
  {
    id: '04',
    name: 'Abyss',
    subName: 'ABYSSOPELAGIC',
    depth: '4,000 – 6,000 M',
    gradient: 'from-[#334155] to-[#0f172a]',
    icon: Snowflake,
    description: 'Cold, deep, and silent. Water temperatures hover near 2°C with sparse, highly specialized fauna.',
    stats: [
      { icon: Thermometer, text: 'Constant -2°C Temperature' },
      { icon: Droplets, text: 'Perpetual Stillness' },
    ],
    resident: 'Tripod Fish, Deep Sea Cucumber',
  },
  {
    id: '05',
    name: 'Trenches',
    subName: 'HADALPELAGIC',
    depth: '6,000 – 11,000 M',
    gradient: 'from-[#0f172a] to-[#000000]',
    icon: Biohazard,
    description: 'Deepest canyons on Earth, including Indian Ocean Java Trench depths: extreme chemosynthetic habitats.',
    stats: [
      { icon: Wind, text: '1,100+ Atmospheres' },
      { icon: Biohazard, text: 'Chemosynthetic Life' },
    ],
    resident: 'Mariana Snailfish, Amphipods',
  },
]

// ==========================================
// FEATURED SPECIES
// ==========================================
const species = [
  {
    name: 'Hawksbill Turtle',
    scientificName: 'Eretmochelys imbricata',
    description: 'Vital for maintaining healthy coral reefs by grazing on sponges that...',
    image: 'photo-1518467166778-b88f373ffec7',
    location: 'Sri Lanka Resident',
    status: 'Critically Endangered',
    statusColor: 'red',
    sightings: 'Sightings: 432 verified',
  },
  {
    name: 'Blue Tang',
    scientificName: 'Paracanthurus hepatus',
    description: 'Key reef herbivore that controls macroalgal blooms, ensuring...',
    image: 'photo-1544551763-46a013bb70d5',
    location: 'Indo-Pacific',
    status: 'Least Concern',
    statusColor: 'green',
    sightings: 'Sightings: 1,840 verified',
  },
  {
    name: 'Staghorn Coral',
    scientificName: 'Acropora cervicornis',
    description: 'Rapidly building cornerstone reef structure susceptible to...',
    image: 'photo-1546026423-cc4642628d2b',
    location: 'Eastern Shelf',
    status: 'Vulnerable',
    statusColor: 'gray',
    sightings: 'Sightings: 619 colonies',
  },
  {
    name: 'Giant Manta Ray',
    scientificName: 'Mobula birostris',
    description: 'Pelagic filter feeder traversing deep trenches and migratory...',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=800&q=85',
    location: 'Southern Trench',
    status: 'Vulnerable',
    statusColor: 'gray',
    sightings: 'Sightings: 215 acoustic logs',
  },
]

const photo = (id: string) =>
  id.startsWith('http')
    ? id
    : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=85`

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f8fafc] text-slate-900 font-sans">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-teal-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
        <div className="flex w-full items-center justify-between gap-4 px-4 py-3 lg:px-10">

          <a href="#" className="flex shrink-0 items-center gap-3 group relative">
            <div className="absolute -inset-2 bg-teal-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative transition-transform duration-300 group-hover:scale-105 drop-shadow-md">
              <NewOceanLogo className="w-10 h-10" />
            </div>
            <div className="relative">
              <h1 className="text-[1.15rem] font-black tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors">
                OCEAN<span className="text-teal-600">WATCH</span>
              </h1>
              <p className="text-[9px] tracking-[3px] text-teal-600/80 font-bold">
                PROTECT OUR OCEANS
              </p>
            </div>
          </a>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-2 text-sm font-bold text-slate-600">
            {['Home', 'Classify', 'Detect', 'Observations', 'Map', 'Learn', 'Species'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-teal-50 hover:text-teal-700 ${
                  index === 0 ? 'bg-teal-50/80 text-teal-700' : ''
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-slate-50 rounded-full px-3 py-1.5 border border-slate-200/60">
              <Globe size={14} className="text-slate-500" />
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500">
                <button className="transition hover:text-teal-700">EN</button>
                <span className="text-slate-300">|</span>
                <button className="transition hover:text-teal-700">සිං</button>
                <span className="text-slate-300">|</span>
                <button className="transition hover:text-teal-700">தமி</button>
              </div>
            </div>

            <button className="relative overflow-hidden group rounded-full bg-gradient-to-r from-teal-600 to-teal-800 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-teal-700/30 transition-all duration-300 hover:shadow-teal-700/50 hover:-translate-y-0.5">
              <span className="relative z-10 flex items-center gap-2">
                Sign In
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                <div className="relative h-full w-8 bg-white/30" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex w-full flex-col items-center justify-between gap-12 px-4 py-12 md:flex-row lg:gap-16 lg:px-10 lg:py-20">
        <div className="w-full md:w-1/2">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-teal-200/60 bg-teal-50/50 px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-teal-800 shadow-sm backdrop-blur-sm transition hover:bg-teal-50">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
            </span>
            <span className="tracking-wide">INDIAN OCEAN BIO-TELEMETRY ACTIVE</span>
            <span className="text-teal-300">•</span>
            <span className="tracking-wide text-teal-600">SRI LANKA HUB</span>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-[1.15] tracking-tight text-[#0f172a] sm:text-5xl lg:text-[3.5rem]">
            <span className="block w-full">Discover Sri Lanka's</span>
            <span className="relative inline-block mt-2 text-[#0d6e4f]">
              underwater world
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
            <span className="font-semibold text-slate-800">AI-powered</span> marine identification and{' '}
            <span className="font-semibold text-teal-700">Hawksbill turtle</span> detection built for field
            conservationists, dive teams, and citizen scientists across{' '}
            <span className="font-semibold text-slate-800">coastal Sri Lanka</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#explore" className="flex items-center gap-2 rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800">
              <Camera size={18} /> Classify an Image
            </a>
            <a href="#about" className="flex items-center gap-2 rounded-lg border border-teal-200 bg-white px-6 py-3 text-sm font-semibold text-teal-800 transition hover:bg-teal-50">
              <ScanFace size={18} /> Detect Hawksbill
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">14,280+</h3>
              <p className="mt-1 text-sm text-slate-500 font-medium">Reef Sightings</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">94.6%</h3>
              <p className="mt-1 text-sm text-slate-500 font-medium">Grad-CAM Confidence</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">5 Zones</h3>
              <p className="mt-1 text-sm text-slate-500 font-medium">Pelagic Bathymetry</p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[400px] md:w-1/2 lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
          <img src={heroImage} alt="Sri Lankan underwater marine ecosystem" className="h-full w-full object-cover object-center" />
          <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-slate-900/80 p-4 backdrop-blur-sm border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-teal-500/20 p-2 rounded-lg">
                <ShieldCheck size={20} className="text-teal-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm flex items-center gap-2">
                  Hawksbill Turtle <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                </h3>
                <p className="text-slate-300 text-xs italic">Eretmochelys imbricata</p>
              </div>
            </div>
            <div className="text-right">
              <span className="bg-red-500/20 text-red-300 text-[10px] font-bold px-2 py-0.5 rounded border border-red-500/30">
                Critically Endangered
              </span>
              <p className="text-teal-400 text-[10px] font-semibold mt-1">94% Match</p>
            </div>
          </div>
        </div>
      </section>

      
{/* MAIN FEATURES - MODERN DESIGN */}
<section id="features" className="relative w-full overflow-hidden bg-[#f0fdfa] px-4 py-20 lg:px-10">

  {/* Background decoration */}
  <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
  <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

  <div className="relative z-10 w-full">

    {/* Section Heading */}
    <div className="mb-12 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal-700 shadow-sm">
        <Waves size={15} />
        Explore Ocean Watch
      </span>

      <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
        Discover. Explore. <span className="text-teal-600">Protect.</span>
      </h2>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
        Explore marine life with AI-powered tools and contribute to ocean conservation.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 gap-7 md:grid-cols-3">

      {features.map((feature, index) => {
        const Icon = feature.icon

        const cardStyles = [
          {
            icon: 'bg-teal-100 text-teal-700',
            glow: 'bg-teal-300/30',
            number: '01',
            label: 'AI CLASSIFICATION',
          },
          {
            icon: 'bg-blue-100 text-blue-700',
            glow: 'bg-blue-300/30',
            number: '02',
            label: 'VIDEO ANALYSIS',
          },
          {
            icon: 'bg-cyan-100 text-cyan-700',
            glow: 'bg-cyan-300/30',
            number: '03',
            label: 'MARINE OBSERVATIONS',
          },
        ][index]

        return (
          <a
            key={feature.title}
            href={feature.href}
className="group relative min-h-[360px] w-full overflow-hidden rounded-[2rem] border border-white bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_55px_rgba(13,148,136,0.15)]"          >

            {/* Decorative Glow */}
            <div className={`absolute -right-16 -top-16 h-48 w-48 rounded-full ${cardStyles.glow} blur-3xl transition-transform duration-700 group-hover:scale-150`} />

            {/* Card Number */}
            <div className="relative flex items-center justify-between">
              <span className="text-[11px] font-black tracking-[0.2em] text-slate-400">
                {cardStyles.label}
              </span>

              <span className="text-4xl font-black text-slate-100 transition-colors duration-300 group-hover:text-teal-100">
                {cardStyles.number}
              </span>
            </div>

            {/* Icon */}
            <div className={`relative mt-8 flex h-16 w-16 items-center justify-center rounded-2xl ${cardStyles.icon} shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
              <Icon size={30} strokeWidth={1.8} />
            </div>

            {/* Text */}
            <div className="relative mt-7">
              <h3 className="text-xl font-extrabold text-slate-800 transition-colors duration-300 group-hover:text-teal-700">
                {feature.title}
              </h3>

              <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">
                {feature.description}
              </p>
            </div>

            {/* Bottom Link */}
            <div className="relative mt-6 flex items-center justify-between">
              <span className="text-sm font-extrabold text-teal-700">
                {feature.link}
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-teal-700 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white group-hover:translate-x-1">
                <ArrowRight size={19} />
              </span>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500 group-hover:w-full" />

          </a>
        )
      })}

    </div>
  </div>
</section>


      {/* OCEAN ZONES */}
      <section id="explore" className="relative w-full px-4 py-24 lg:px-10 bg-[#f8fafc] overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-200/30 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative mb-16 text-center z-10">
          <h2 className="text-4xl font-black text-slate-900 lg:text-5xl tracking-tighter uppercase">
            Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Depths</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 font-semibold tracking-wide">
            Scroll to dive through five ocean zones <span className="inline-block animate-bounce text-teal-600 font-bold text-xl">↓</span>
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10 perspective-1000">
          {zones.map((zone) => {
            const TopIcon = zone.icon
            return (
              <div
                key={zone.name}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:border-white"
              >
                <div className={`relative bg-gradient-to-br ${zone.gradient} p-6 text-white h-[200px] flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
                    <div className="absolute top-10 right-0 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
                  </div>

                  <div className="relative flex items-center justify-between z-10">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-black tracking-widest backdrop-blur-md border border-white/20 shadow-sm">
                      {zone.depth}
                    </span>
                    <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md border border-white/20 group-hover:animate-bounce shadow-lg">
                      <TopIcon size={20} className="text-white drop-shadow-lg" />
                    </div>
                  </div>

                  <div className="relative z-10 mt-6">
                    <h3 className="text-2xl font-black leading-tight drop-shadow-md">{zone.name}</h3>
                    <p className="text-[10px] font-bold tracking-[0.25em] text-white/80 uppercase mt-1.5">
                      {zone.subName}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-6 justify-between bg-white">
                  <div>
                    <p className="text-xs leading-relaxed text-slate-600 font-medium group-hover:text-slate-800 transition-colors">
                      {zone.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {zone.stats.map((stat, i) => {
                        const StatIcon = stat.icon
                        return (
                          <div key={i} className="flex items-center gap-3 text-[11px] text-slate-600 font-bold">
                            <div className="p-1.5 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 group-hover:scale-110 transition-all duration-300">
                              <StatIcon size={14} className="shrink-0" />
                            </div>
                            <span>{stat.text}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#f0f4f8] to-[#e2e8f0] p-4 border border-slate-200/60 group-hover:border-teal-200/50 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-teal-400/10 rounded-bl-full"></div>

                    <p className="text-[10px] font-black text-teal-700 uppercase mb-1 tracking-wider flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                      Key Resident:
                    </p>
                    <p className="text-[11px] font-bold text-slate-800 leading-snug">
                      {zone.resident}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FEATURED SPECIES */}
      <section id="species" className="w-full px-4 py-20 lg:px-10 bg-[#f4f7f9] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="relative">
              <div className="absolute -left-4 top-1 h-8 w-1.5 bg-gradient-to-b from-teal-400 to-blue-600 rounded-full"></div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight pl-2">Featured Species</h2>
              <p className="mt-2 text-base text-slate-600 font-medium pl-2">
                A glimpse of amazing marine life found around Sri Lanka and the Indian Ocean.
              </p>
            </div>
            <a
              href="#species"
              className="group flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200/60 transition-all hover:shadow-md"
            >
              View all species
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {species.map((item) => (
              <article
                key={item.name}
                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-teal-100"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={photo(item.image)}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-widest backdrop-blur-md border shadow-sm ${
                      item.statusColor === 'red' ? 'bg-red-500/90 text-white border-red-400/50' :
                      item.statusColor === 'green' ? 'bg-emerald-500/90 text-white border-emerald-400/50' :
                      'bg-slate-700/90 text-white border-slate-600/50'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${item.statusColor === 'red' ? 'bg-red-200' : item.statusColor === 'green' ? 'bg-emerald-200' : 'bg-slate-300'}`}></span>
                      {item.status}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <span className="flex items-center gap-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                      <MapPin size={10} />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-teal-800 transition-colors">{item.name}</h3>
                    <p className="text-[11px] text-slate-500 font-bold italic mb-3">{item.scientificName}</p>
                    <p className="text-xs leading-relaxed text-slate-600 font-medium line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <p className="text-[11px] font-extrabold text-slate-600 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                      {item.sightings}
                    </p>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-teal-600 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-teal-600/30 cursor-pointer group-hover:rotate-[-45deg]">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSERVATION CTA */}
      <section className="w-full px-4 py-16 lg:px-10 bg-white">
        <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-3xl bg-[#0d766e] p-8 lg:p-12 shadow-[0_10px_40px_rgba(13,118,110,0.2)]">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold tracking-wider text-teal-50 border border-white/10 mb-4 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300"></span>
              CITIZEN TELEMETRY NETWORK
            </div>

            <h2 className="text-2xl lg:text-[2rem] font-bold leading-tight mb-3">
              Spotted a Hawksbill or Coral Bleaching Event?
            </h2>

            <p className="text-sm lg:text-base leading-relaxed text-teal-50/90 font-medium">
              Log your sighting coordinates in real-time. Verified logs inform national marine spatial plans and immediate reef protection protocols.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="#submit"
              className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0d766e] transition-all duration-300 hover:bg-teal-50 hover:shadow-lg hover:-translate-y-0.5"
            >
              Submit Sighting
            </a>
            <a
              href="#api"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/30"
            >
              Live Telemetry API
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="about" className="w-full bg-[#0f172a] text-slate-300">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-14 lg:px-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 text-white">
              <NewOceanLogo className="w-9 h-9" />
              <h2 className="text-lg font-bold">OCEAN WATCH</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Discover marine life, learn about our oceans and support marine conservation in Sri Lanka.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a href="#" className="hover:text-teal-400 transition">Home</a>
              <a href="#image-classification" className="hover:text-teal-400 transition">Classify</a>
              <a href="#video-detection" className="hover:text-teal-400 transition">Detect</a>
              <a href="#observations" className="hover:text-teal-400 transition">Observations</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Discover</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a href="#observation-map" className="hover:text-teal-400 transition">Map</a>
              <a href="#learn" className="hover:text-teal-400 transition">Learn</a>
              <a href="#species" className="hover:text-teal-400 transition">Species</a>
              <a href="#explore" className="hover:text-teal-400 transition">Ocean Zones</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Learn & Protect</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Explore, understand and protect Sri Lanka's underwater ecosystems.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-teal-400">
              <Sparkles size={16} /> Discover the Ocean
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="flex flex-col md:flex-row w-full items-center justify-between px-4 py-6 text-xs text-slate-500 lg:px-10 gap-2">
            <p>© 2026 Ocean Watch. All rights reserved.</p>
            <p className="tracking-widest uppercase">Discover • Learn • Protect</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
