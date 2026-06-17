/**
 * Editorial content for /learn - SEO-focused articles about off-grid solar
 */

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  list?: { title?: string; items: string[] };
}

export interface LearnArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  sections: ArticleSection[];
  faq?: { q: string; a: string }[];
}

export const LEARN_ARTICLES: LearnArticle[] = [
  {
    slug: "off-grid-solar-explained",
    title: "How Off-Grid Solar Actually Works (and Why It Beats Grid-Tie)",
    metaTitle: "Off-Grid Solar Explained: How It Works & Why It Beats Grid-Tie | VoltSol",
    metaDescription:
      "Learn how off-grid solar systems work, how they differ from grid-tie, and why hybrid DC systems give you energy independence without the utility bill.",
    excerpt:
      "Understand the difference between off-grid and grid-tie solar, and why going off-grid gives you true energy independence.",
    sections: [
      {
        paragraphs: [
          "Most solar systems sold in California today are grid-tie. They feed power back to the utility, spin your meter backward, and still shut off when the grid goes down. You are generating your own electricity but remain tied to the utility company.",
          "Off-grid solar is different. It disconnects you from the utility entirely. Your panels charge a battery. The battery powers your home. When the sun is out, you run on sun. When dark, you run on stored energy. No monthly bill. No net metering rules. No blackout risk.",
        ],
      },
      {
        heading: "Grid-Tie Solar: The Short Version",
        paragraphs: [
          "Grid-tie systems send power to the utility and draw it back when you need it. The grid acts as your battery. This works fine until the grid goes down, then your panels turn off too, even on a sunny day. Most grid-tie installs cost $25,000 to $40,000 and lock you into long-term financing.",
          "You are also subject to net metering policies. In California, NEM 3.0 slashed the rate utilities pay you for exported power from 1:1 to roughly 25 cents on the dollar. That changes the economics dramatically.",
        ],
      },
      {
        heading: "Off-Grid Solar: How It Works",
        paragraphs: [
          "An off-grid system has three core pieces: solar panels, a battery bank, and a charge controller or inverter. Panels make DC power. The battery stores it. The inverter converts it to AC for your appliances, or in some cases the power feeds directly into hybrid AC/DC mini-split units that run on DC during the day.",
          "Because the system is self-contained, you keep running during blackouts. No meter to spin, no export credits, no utility permission needed. You produce what you use.",
        ],
        list: {
          title: "Key advantages of off-grid solar:",
          items: [
            "True energy independence with no monthly utility bill",
            "Power during blackouts and outages",
            "No exposure to rate hikes or changing net metering rules",
            "Lower upfront cost when sized right (systems start under $10,000)",
          ],
        },
      },
      {
        heading: "VoltSol Hybrid Approach",
        paragraphs: [
          "VoltSol uses EG4 hybrid mini-split heat pumps that accept DC solar input directly. During the day, your panels power the AC without converting to grid power first. Excess energy charges an EG4 LiFePO4 battery. At night or during outages, the battery takes over.",
          "This eliminates the inverter losses that grid-tie systems carry. Most VoltSol installs run under $10,000, all-in.",
        ],
      },
    ],
  },
  {
    slug: "eg4-vs-tesla-powerwall",
    title: "EG4 vs Tesla Powerwall vs Enphase: An Honest Comparison",
    metaTitle: "EG4 vs Tesla Powerwall vs Enphase: Battery Comparison 2026 | VoltSol",
    metaDescription:
      "Compare EG4, Tesla Powerwall, and Enphase home batteries on cost, capacity, lifespan, and real-world performance. See which solar battery wins.",
    excerpt:
      "An honest look at how EG4 batteries stack up against Tesla Powerwall and Enphase - cost, cycle life, and real-world durability.",
    sections: [
      {
        paragraphs: [
          "When most people think solar battery, they think Tesla Powerwall. But for many homeowners, it is not the best option.",
          "EG4 LiFePO4 batteries have become the go-to choice for off-grid and hybrid solar installs, especially in the under-$15,000 system category.",
        ],
      },
      {
        heading: "Cycle Life & Warranty",
        paragraphs: [
          "Tesla Powerwall 3: approximately 10 years or 3,650 cycles (whichever comes first). 10-year warranty.",
          "Enphase IQ 5P: approximately 4,000 to 6,000 cycles. 15-year warranty.",
          "EG4 LiFePO4: 8,000+ cycles (LiFePO4 chemistry). 10-year warranty.",
          "EG4 LiFePO4 chemistry is rated for roughly 20 years of daily cycling. LiFePO4 is also safer - it does not thermally run away like lithium-ion NMC cells under stress.",
        ],
      },
      {
        heading: "Cost",
        paragraphs: [
          "Tesla Powerwall 3: approximately $15,000 installed (battery + gateway + labor).",
          "Enphase IQ 5P: approximately $7,000 to $9,000 per 5 kWh unit installed.",
          "EG4 battery (15 kWh): approximately $3,000 to $5,000 (wholesale + install).",
          "For a complete VoltSol system including solar panels, hybrid mini-split, battery, and install, the total is under $10,000.",
        ],
      },
    ],
    faq: [
      { q: "Can I use EG4 batteries with my existing solar panels?", a: "Yes, EG4 batteries integrate with most off-grid and hybrid inverters. Your installer can confirm compatibility." },
      { q: "How long do EG4 batteries actually last?", a: "EG4 LiFePO4 batteries are rated for 8,000+ cycles, which translates to roughly 20 years of daily use. They carry a 10-year manufacturer warranty." },
    ],
  },
  {
    slug: "off-grid-solar-under-10000",
    title: "Off-Grid Solar Under $10,000: Is It Actually Real?",
    metaTitle: "Off-Grid Solar Under $10,000: How VoltSol Does It | Real Systems, Real Savings",
    metaDescription:
      "Yes, off-grid solar under $10,000 is real. Learn how VoltSol uses EG4 hybrid mini-splits to deliver whole-home comfort without the $40k price tag.",
    excerpt:
      "VoltSol proves you do not need $40,000 to go off-grid. Here is how we deliver real systems for under $10k.",
    sections: [
      {
        paragraphs: [
          "The solar industry has trained homeowners to expect big numbers. $30,000. $40,000. Financing for 20 years.",
          "VoltSol installs complete off-grid solar systems for under $10,000. No financing trap. Just a system that works.",
        ],
      },
      {
        heading: "How VoltSol Cuts the Cost",
        paragraphs: [
          "We focus on the biggest energy user: heating and cooling. In California, that is 40 to 60 percent of your bill.",
          "VoltSol systems use EG4 hybrid AC/DC mini-split heat pumps. These units accept DC power directly from solar panels. During the day, the sun runs your AC. Excess power charges an EG4 LiFePO4 battery.",
        ],
      },
    ],
  },
  {
    slug: "solar-mini-split-heat-pump",
    title: "Solar + Mini-Split Heat Pump: The Combo Nobody's Talking About",
    metaTitle: "Solar-Powered Mini-Split Heat Pump: The HVAC Setup That Pays for Itself | VoltSol",
    metaDescription:
      "Solar-powered mini-split heat pumps deliver year-round comfort with zero energy cost. Learn how this overlooked combo works.",
    excerpt:
      "Pair solar with a mini-split heat pump and you get year-round heating and cooling for free.",
    sections: [
      {
        paragraphs: [
          "VoltSol pairs solar with a mini-split heat pump and focuses on heating and cooling.",
          "The result? A system that costs under $10,000, runs your HVAC on sunshine, and pays for itself in under three years.",
        ],
      },
    ],
  },
  {
    slug: "solar-permits-california",
    title: "Do You Need a Permit for Solar in California? County-by-County Basics",
    metaTitle: "California Solar Permits: Do You Need One? County Rules Explained | VoltSol",
    metaDescription:
      "Yes, you need a permit for solar in California, but requirements vary by county. Learn what is required and who handles it.",
    excerpt:
      "California solar permits are required statewide, but rules vary by county.",
    sections: [
      {
        paragraphs: [
          "Every solar installation in California requires a building permit and an electrical permit, at minimum.",
          "VoltSol handles all permitting in every county we serve. You do not file a single form.",
        ],
      },
    ],
  },
  {
    slug: "nem-3-explained",
    title: "NEM 3.0 Explained - and Why Off-Grid Solar Sidesteps It",
    metaTitle: "NEM 3.0 Explained: How It Changed Solar in California & Why Off-Grid Wins | VoltSol",
    metaDescription:
      "NEM 3.0 slashed export credits for California solar. Learn what changed and why off-grid solar sidesteps the problem entirely.",
    excerpt:
      "NEM 3.0 cut solar export credits by 75 percent. Here is what it means for grid-tie systems.",
    sections: [
      {
        paragraphs: [
          "In April 2023, California regulators rolled out NEM 3.0, the biggest change to solar economics in over a decade.",
          "NEM 3.0 cut export credits by roughly 75 percent. Off-grid systems sidestep this entirely because they store power locally.",
        ],
      },
    ],
  },
  {
    slug: "pge-rate-increases-2026",
    title: "PG&E & SMUD Rate Increases: What Rising Rates Mean for Your Bill",
    metaTitle: "PG&E & SMUD Rate Increases 2026: What It Means for Your Bill | VoltSol Energy",
    metaDescription:
      "PG&E and SMUD rates keep climbing. Learn what is driving the increases and how solar helps you opt out.",
    excerpt:
      "Utility rates in Northern California are rising faster than ever.",
    sections: [
      {
        paragraphs: [
          "PG&E rates have increased over 50 percent since 2020. The average residential customer now pays 35 to 45 cents per kWh.",
          "Every rate increase makes solar more attractive.",
        ],
      },
    ],
  },
  {
    slug: "eg4-battery-lifespan",
    title: "How Long Do EG4 LiFePO4 Batteries Last? Cycle Life Explained",
    metaTitle: "EG4 Battery Lifespan: 8,000 Cycles, 20 Years, Explained | VoltSol Energy",
    metaDescription:
      "EG4 LiFePO4 batteries are rated for 8,000+ cycles and approximately 20 years of use. Learn what that means and why LiFePO4 outlasts lithium-ion.",
    excerpt:
      "EG4 batteries last 8,000+ cycles, roughly 20 years of daily use.",
    sections: [
      {
        paragraphs: [
          "EG4 LiFePO4 batteries are rated for 8,000+ cycles, which translates to roughly 20 years of daily use.",
          "EG4 batteries carry a 10-year limited warranty.",
        ],
      },
    ],
  },
];
