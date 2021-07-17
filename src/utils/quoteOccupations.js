/** @format */

export const getOccupationOptions = (occupation) => {
  return originArray
    .filter((item) =>
      item.text.toLowerCase().includes(occupation.toLowerCase())
    )
    .map((item) => ({ value: item.text, label: item.text }));
};

export const getDataListOccupationOptions = (occupation) => {
  return originArray
    .filter((item) =>
      item.text.toLowerCase().includes(occupation.toLowerCase())
    )
    .map((item) => item.text);
};

const originArray = [
  {
    id: "499914",
    text: "Abalone Diver",
  },
  {
    id: "451116",
    text: "Abattoir Inspector",
  },
  {
    id: "451117",
    text: "Abattoir Supervisor",
  },
  {
    id: "900001",
    text: "Account Executive",
  },
  {
    id: "221112",
    text: "Accountant",
  },
  {
    id: "221111",
    text: "Accountant (qualified)",
  },
  {
    id: "614111",
    text: "Accounts Clerk",
  },
  {
    id: "253816",
    text: "Acrobat",
  },
  {
    id: "253811",
    text: "Actor",
  },
  {
    id: "229316",
    text: "Actuary",
  },
  {
    id: "229315",
    text: "Actuary (qualified)",
  },
  {
    id: "239414",
    text: "Acupuncturist",
  },
  {
    id: "239413",
    text: "Acupuncturist (qualified)",
  },
  {
    id: "222117",
    text: "Advertising Specialist",
  },
  {
    id: "254124",
    text: "Aerial Photographer",
  },
  {
    id: "900002",
    text: "Aerobics Instructor",
  },
  {
    id: "212911",
    text: "Aeronautical Engineer",
  },
  {
    id: "631317",
    text: "Aged or Disabled Person Carer",
  },
  {
    id: "211421",
    text: "Agricultural Adviser",
  },
  {
    id: "711911",
    text: "Agricultural and Horticultural Harvester",
  },
  {
    id: "212913",
    text: "Agricultural Engineer",
  },
  {
    id: "254126",
    text: "Agricultural Pilot",
  },
  {
    id: "211419",
    text: "Agricultural Scientist",
  },
  {
    id: "900003",
    text: "Agronomist",
  },
  {
    id: "900131",
    text: "Agronomist (field work)",
  },
  {
    id: "254113",
    text: "Air Traffic Controller",
  },
  {
    id: "411411",
    text: "Aircraft Maintenance Engineer",
  },
  {
    id: "254111",
    text: "Aircraft Pilot",
  },
  {
    id: "254130",
    text: "Aircraft Refueller",
  },
  {
    id: "499915",
    text: "Aircraft Safety Equipment Worker",
  },
  {
    id: "499916",
    text: "Airline Staff",
  },
  {
    id: "499918",
    text: "Airline Staff (office work)",
  },
  {
    id: "791414",
    text: "Alarm Installer/Fixer",
  },
  {
    id: "349111",
    text: "Ambulance Officer",
  },
  {
    id: "104",
    text: "Ammunition Worker",
  },
  {
    id: "339116",
    text: "Amusement Centre Employee",
  },
  {
    id: "339115",
    text: "Amusement Centre Manager",
  },
  {
    id: "231211",
    text: "Anaesthetist",
  },
  {
    id: "211311",
    text: "Anatomist/Physiologist",
  },
  {
    id: "639915",
    text: "Animal Attendant",
  },
  {
    id: "131222",
    text: "Animal Breeder, Trainer, Groomer",
  },
  {
    id: "791320",
    text: "Antenna Erector (over 10m)",
  },
  {
    id: "791416",
    text: "Antenna Erector (under 10m)",
  },
  {
    id: "900004",
    text: "Anthropologist",
  },
  {
    id: "900005",
    text: "Antique Dealer",
  },
  {
    id: "131225",
    text: "Apiarist",
  },
  {
    id: "494117",
    text: "Apparel Cutter",
  },
  {
    id: "223117",
    text: "Applications and Analyst Programmer",
  },
  {
    id: "131411",
    text: "Aquaculture Farmer",
  },
  {
    id: "252918",
    text: "Archaeologist",
  },
  {
    id: "252919",
    text: "Archaeologist (field work)",
  },
  {
    id: "212111",
    text: "Architect",
  },
  {
    id: "212112",
    text: "Architect (field work)",
  },
  {
    id: "212114",
    text: "Architectural Draftsperson",
  },
  {
    id: "229915",
    text: "Archivist",
  },
  {
    id: "831113",
    text: "Armoured Car Escort",
  },
  {
    id: "900006",
    text: "Art Dealer",
  },
  {
    id: "900007",
    text: "Artificial Inseminator",
  },
  {
    id: "253112",
    text: "Artist - Freelance",
  },
  {
    id: "102",
    text: "Asbestos Industry Worker or Miner",
  },
  {
    id: "211912",
    text: "Astronomer",
  },
  {
    id: "900008",
    text: "Attorney",
  },
  {
    id: "599913",
    text: "Auctioneer",
  },
  {
    id: "599914",
    text: "Auctioneer - Livestock",
  },
  {
    id: "599916",
    text: "Auctioneer - Real Estate",
  },
  {
    id: "239911",
    text: "Audiologist",
  },
  {
    id: "239912",
    text: "Audiometrist",
  },
  {
    id: "221214",
    text: "Auditor",
  },
  {
    id: "221213",
    text: "Auditor (qualified)",
  },
  {
    id: "253511",
    text: "Author",
  },
  {
    id: "421212",
    text: "Automotive Electrician",
  },
  {
    id: "421211",
    text: "Automotive Electrician (qualified)",
  },
  {
    id: "122312",
    text: "Avon/Amway/Tupperware Seller or Distributor",
  },
  {
    id: "711115",
    text: "Backhoe Operator",
  },
  {
    id: "900009",
    text: "Bacteriologist",
  },
  {
    id: "831216",
    text: "Baggage Handler",
  },
  {
    id: "619919",
    text: "Bailiff or Sheriff",
  },
  {
    id: "451212",
    text: "Baker",
  },
  {
    id: "900129",
    text: "Baker (final year apprenticeship)",
  },
  {
    id: "900128",
    text: "Baker (first year apprenticeship)",
  },
  {
    id: "900130",
    text: "Baker (intermediate year apprenticeship)",
  },
  {
    id: "451211",
    text: "Baker (qualified)",
  },
  {
    id: "254129",
    text: "Balloonist",
  },
  {
    id: "611112",
    text: "Bank Clerk",
  },
  {
    id: "321113",
    text: "Bank Manager",
  },
  {
    id: "614311",
    text: "Bank Worker",
  },
  {
    id: "632211",
    text: "Bar Attendant",
  },
  {
    id: "632214",
    text: "Bar Manager",
  },
  {
    id: "632215",
    text: "Bar Manager (with bar work)",
  },
  {
    id: "900010",
    text: "Barista",
  },
  {
    id: "252111",
    text: "Barrister",
  },
  {
    id: "108",
    text: "Battery or Tyre Sales",
  },
  {
    id: "921109",
    text: "Battery Repairs and Fitting",
  },
  {
    id: "239921",
    text: "Beach Inspector",
  },
  {
    id: "639511",
    text: "Beautician",
  },
  {
    id: "639512",
    text: "Beautician (working from home)",
  },
  {
    id: "131213",
    text: "Beef Cattle Farmer (Owner/Manager)",
  },
  {
    id: "339915",
    text: "Betting Agency (TAB) Branch Manager",
  },
  {
    id: "811511",
    text: "Betting Agency (TAB) Counter Clerk",
  },
  {
    id: "999920",
    text: "Bicycle Dealer or Repairer",
  },
  {
    id: "491311",
    text: "Binder and Finisher",
  },
  {
    id: "211317",
    text: "Biochemist",
  },
  {
    id: "211322",
    text: "Biologist",
  },
  {
    id: "212915",
    text: "Biomedical Engineer",
  },
  {
    id: "412311",
    text: "Blacksmith",
  },
  {
    id: "791211",
    text: "Blasting Worker",
  },
  {
    id: "791413",
    text: "Blind/Awning/Screen Installer",
  },
  {
    id: "332911",
    text: "Boarding House Manager",
  },
  {
    id: "332912",
    text: "Boarding Kennel Proprietor",
  },
  {
    id: "498114",
    text: "Boat Builder and Repairer",
  },
  {
    id: "498113",
    text: "Boat Builder and Repairer (qualified)",
  },
  {
    id: "621214",
    text: "Boat Salesperson",
  },
  {
    id: "711920",
    text: "Bobcat Operator",
  },
  {
    id: "412216",
    text: "Boilermaker",
  },
  {
    id: "412214",
    text: "Boilermaker (qualified)",
  },
  {
    id: "499124",
    text: "Bomb Disposal",
  },
  {
    id: "253513",
    text: "Book Editor",
  },
  {
    id: "591111",
    text: "Bookkeeper",
  },
  {
    id: "321221",
    text: "Bookmaker",
  },
  {
    id: "211313",
    text: "Botanist",
  },
  {
    id: "211314",
    text: "Botanist (field work)",
  },
  {
    id: "900011",
    text: "Bottleshop Attendant",
  },
  {
    id: "900012",
    text: "Bouncer/Crowd Control",
  },
  {
    id: "399304",
    text: "Boxer",
  },
  {
    id: "731412",
    text: "Bread Vendor (deliveries)",
  },
  {
    id: "238214",
    text: "Brewery/Distillery - Chemist",
  },
  {
    id: "238216",
    text: "Brewery/Distillery - Worker",
  },
  {
    id: "911126",
    text: "Brick Cleaner",
  },
  {
    id: "441412",
    text: "Bricklayer",
  },
  {
    id: "441411",
    text: "Bricklayer (qualified)",
  },
  {
    id: "991922",
    text: "Bricklayer's Labourer",
  },
  {
    id: "499217",
    text: "Broadcasting Technician",
  },
  {
    id: "900123",
    text: "Builder (final year apprenticeship)",
  },
  {
    id: "900122",
    text: "Builder (first year apprenticeship)",
  },
  {
    id: "900124",
    text: "Builder (intermediate year apprenticeship)",
  },
  {
    id: "991918",
    text: "Builder's Labourer",
  },
  {
    id: "312118",
    text: "Building Industry, Supervisor",
  },
  {
    id: "312117",
    text: "Building Inspector",
  },
  {
    id: "791411",
    text: "Building Insulation Installer",
  },
  {
    id: "831934",
    text: "Building Wrecker",
  },
  {
    id: "711113",
    text: "Bulldozer Operator",
  },
  {
    id: "731211",
    text: "Bus Driver",
  },
  {
    id: "731212",
    text: "Bus Driver (long distance)",
  },
  {
    id: "900132",
    text: "Business Analyst",
  },
  {
    id: "900106",
    text: "Business Analyst (qualified)",
  },
  {
    id: "129111",
    text: "Business Development Manager",
  },
  {
    id: "129979",
    text: "Business Manager",
  },
  {
    id: "451111",
    text: "Butcher",
  },
  {
    id: "900013",
    text: "Butler",
  },
  {
    id: "492212",
    text: "Cabinetmaker",
  },
  {
    id: "492211",
    text: "Cabinetmaker (qualified)",
  },
  {
    id: "431313",
    text: "Cable Jointer",
  },
  {
    id: "431314",
    text: "Cable or Wire Maker",
  },
  {
    id: "431315",
    text: "Cable TV Installer",
  },
  {
    id: "900014",
    text: "Cake Decorator",
  },
  {
    id: "900015",
    text: "Call Centre Worker",
  },
  {
    id: "499213",
    text: "Camera Operator (Film, Television or Video)",
  },
  {
    id: "900016",
    text: "Canteen Worker",
  },
  {
    id: "900017",
    text: "Canvas Goods Manufacturer",
  },
  {
    id: "831917",
    text: "Car Park Attendant",
  },
  {
    id: "621212",
    text: "Car Salesperson",
  },
  {
    id: "831919",
    text: "Car Wash Employee",
  },
  {
    id: "831921",
    text: "Car Wrecker",
  },
  {
    id: "332511",
    text: "Caravan Park and Camping Ground Manager",
  },
  {
    id: "231240",
    text: "Cardiologist",
  },
  {
    id: "251317",
    text: "Careers Counsellor",
  },
  {
    id: "831411",
    text: "Caretaker",
  },
  {
    id: "441114",
    text: "Carpenter",
  },
  {
    id: "900117",
    text: "Carpenter (final year apprenticeship)",
  },
  {
    id: "900116",
    text: "Carpenter (first year apprenticeship)",
  },
  {
    id: "900118",
    text: "Carpenter (intermediate year apprenticeship)",
  },
  {
    id: "441113",
    text: "Carpenter (qualified)",
  },
  {
    id: "441111",
    text: "Carpenter and Joiner",
  },
  {
    id: "911115",
    text: "Carpet Cleaner",
  },
  {
    id: "442314",
    text: "Carpet Layer",
  },
  {
    id: "212311",
    text: "Cartographer",
  },
  {
    id: "639414",
    text: "Casino Cashier",
  },
  {
    id: "639413",
    text: "Casino Manager",
  },
  {
    id: "639415",
    text: "Casino Worker",
  },
  {
    id: "632213",
    text: "Caterer",
  },
  {
    id: "632212",
    text: "Caterer (qualified)",
  },
  {
    id: "900133",
    text: "Ceiling Fixer",
  },
  {
    id: "900018",
    text: "Ceiling Fixer (qualified)",
  },
  {
    id: "831918",
    text: "Cellarman/Bartender",
  },
  {
    id: "712917",
    text: "Cement Production Plant Operator",
  },
  {
    id: "999980",
    text: "Cement Renderer",
  },
  {
    id: "900019",
    text: "Cemetery or Crematory Worker",
  },
  {
    id: "731311",
    text: "Chauffer",
  },
  {
    id: "829111",
    text: "Checkout Operator/Cashier",
  },
  {
    id: "621313",
    text: "Checkout Supervisor",
  },
  {
    id: "332211",
    text: "Chef/Cook",
  },
  {
    id: "900126",
    text: "Chef/Cook (final year apprenticeship)",
  },
  {
    id: "900125",
    text: "Chef/Cook (first year apprenticeship)",
  },
  {
    id: "900127",
    text: "Chef/Cook (intermediate year apprenticeship)",
  },
  {
    id: "212917",
    text: "Chemical Engineer",
  },
  {
    id: "211111",
    text: "Chemist",
  },
  {
    id: "111212",
    text: "Chief Executive Officer/General Manager",
  },
  {
    id: "111211",
    text: "Chief Executive Officer/General Manager (qualified)",
  },
  {
    id: "129511",
    text: "Child Care Co-ordinator",
  },
  {
    id: "631211",
    text: "Child Care Worker",
  },
  {
    id: "631212",
    text: "Child Care Worker (working from home)",
  },
  {
    id: "900020",
    text: "Chimney Sweep",
  },
  {
    id: "900021",
    text: "Chiropodist",
  },
  {
    id: "238711",
    text: "Chiropractor",
  },
  {
    id: "253818",
    text: "Circus Performer",
  },
  {
    id: "212411",
    text: "Civil Engineer",
  },
  {
    id: "911179",
    text: "Cleaner",
  },
  {
    id: "611111",
    text: "Clerk",
  },
  {
    id: "599111",
    text: "Clerk of Court/Articled Clerk",
  },
  {
    id: "721111",
    text: "Clothing Machinist",
  },
  {
    id: "494119",
    text: "Clothing Patternmaker",
  },
  {
    id: "332411",
    text: "Club Manager - Licensed Premises",
  },
  {
    id: "900022",
    text: "Coal Miner",
  },
  {
    id: "253912",
    text: "Commentator - Radio or Television",
  },
  {
    id: "911111",
    text: "Commercial or Office Cleaner",
  },
  {
    id: "321217",
    text: "Commodities Trader",
  },
  {
    id: "431614",
    text: "Communications Linesperson (over 10m)",
  },
  {
    id: "431613",
    text: "Communications Linesperson (under 10m)",
  },
  {
    id: "431611",
    text: "Communications Technician",
  },
  {
    id: "251213",
    text: "Community Worker",
  },
  {
    id: "121211",
    text: "Company Secretary",
  },
  {
    id: "253717",
    text: "Composer",
  },
  {
    id: "900023",
    text: "Compositor",
  },
  {
    id: "331176",
    text: "Computer Programmer",
  },
  {
    id: "223125",
    text: "Computer Programmer (qualified)",
  },
  {
    id: "223123",
    text: "Computer Salesperson",
  },
  {
    id: "223179",
    text: "Computing Professional",
  },
  {
    id: "329411",
    text: "Computing Support Technician",
  },
  {
    id: "900138",
    text: "Concierge",
  },
  {
    id: "991717",
    text: "Concrete Contractor",
  },
  {
    id: "991712",
    text: "Concrete Cutter",
  },
  {
    id: "991713",
    text: "Concrete Finisher",
  },
  {
    id: "991715",
    text: "Concrete Form Worker (under 10m)",
  },
  {
    id: "991714",
    text: "Concrete Paving Driver",
  },
  {
    id: "991716",
    text: "Concrete Steel Fixer (under 10m)",
  },
  {
    id: "991711",
    text: "Concreter",
  },
  {
    id: "451915",
    text: "Confectioner",
  },
  {
    id: "254911",
    text: "Conservator",
  },
  {
    id: "711111",
    text: "Construction Plant Operator",
  },
  {
    id: "711112",
    text: "Construction Project Manager",
  },
  {
    id: "791318",
    text: "Construction Rigger (over 10m)",
  },
  {
    id: "791317",
    text: "Construction Rigger (under 10m)",
  },
  {
    id: "900024",
    text: "Conveyancer",
  },
  {
    id: "451381",
    text: "Cook",
  },
  {
    id: "451311",
    text: "Cook (qualified)",
  },
  {
    id: "253124",
    text: "Coppersmith",
  },
  {
    id: "253419",
    text: "Copywriter",
  },
  {
    id: "111120",
    text: "Coroner",
  },
  {
    id: "251379",
    text: "Counsellor",
  },
  {
    id: "811411",
    text: "Courier",
  },
  {
    id: "811406",
    text: "Courier - Car",
  },
  {
    id: "811402",
    text: "Courier - Cyclist",
  },
  {
    id: "811404",
    text: "Courier - Motorcyclist",
  },
  {
    id: "811408",
    text: "Courier - Van/Truck",
  },
  {
    id: "599211",
    text: "Court or Legal Secretary",
  },
  {
    id: "619917",
    text: "Court Orderly",
  },
  {
    id: "991913",
    text: "Crane Chaser",
  },
  {
    id: "712211",
    text: "Crane, Hoist or Lift Operator",
  },
  {
    id: "591211",
    text: "Credit and Loans Officer",
  },
  {
    id: "614113",
    text: "Credit Clerk",
  },
  {
    id: "131379",
    text: "Crop Farmer (Owner/Manager)",
  },
  {
    id: "639411",
    text: "Croupier",
  },
  {
    id: "339211",
    text: "Customer Service Manager",
  },
  {
    id: "619411",
    text: "Customs Inspector",
  },
  {
    id: "131215",
    text: "Dairy Farmer (Owner/Manager)",
  },
  {
    id: "131216",
    text: "Dairy Process Worker",
  },
  {
    id: "249115",
    text: "Dance Teacher",
  },
  {
    id: "253813",
    text: "Dancer or Choreographer",
  },
  {
    id: "612113",
    text: "Data Entry Operator",
  },
  {
    id: "619913",
    text: "Debt Collector",
  },
  {
    id: "619916",
    text: "Debt Collector (field work)",
  },
  {
    id: "900025",
    text: "Deck Hand",
  },
  {
    id: "499111",
    text: "Defence Force Member",
  },
  {
    id: "331186",
    text: "Delicatessen - Employee",
  },
  {
    id: "731411",
    text: "Delivery Driver",
  },
  {
    id: "900026",
    text: "Demolition Worker",
  },
  {
    id: "900134",
    text: "Demolition Worker (explosives)",
  },
  {
    id: "349211",
    text: "Dental Hygienist",
  },
  {
    id: "639111",
    text: "Dental Nurse",
  },
  {
    id: "349216",
    text: "Dental Prosthesist",
  },
  {
    id: "238113",
    text: "Dental Specialist",
  },
  {
    id: "238114",
    text: "Dental Surgeon",
  },
  {
    id: "349215",
    text: "Dental Technician",
  },
  {
    id: "238111",
    text: "Dentist",
  },
  {
    id: "331187",
    text: "Department Store (deliveries)",
  },
  {
    id: "231213",
    text: "Dermatologist",
  },
  {
    id: "599911",
    text: "Despatch Clerk",
  },
  {
    id: "498312",
    text: "Diamond - Cutter/Polisher/Setter",
  },
  {
    id: "900027",
    text: "Die Maker",
  },
  {
    id: "411114",
    text: "Diesel Mechanic",
  },
  {
    id: "239311",
    text: "Dietitian",
  },
  {
    id: "129211",
    text: "Director of Nursing",
  },
  {
    id: "253613",
    text: "Director/Producer (Film, Television, Radio or Stage)",
  },
  {
    id: "342117",
    text: "Disabilities Services Officer",
  },
  {
    id: "253712",
    text: "Disc Jockey (DJ)",
  },
  {
    id: "499913",
    text: "Diver",
  },
  {
    id: "900105",
    text: "Doctor",
  },
  {
    id: "131224",
    text: "Dog Breeder",
  },
  {
    id: "639920",
    text: "Dog Groomer",
  },
  {
    id: "461414",
    text: "Dog Trainer",
  },
  {
    id: "911113",
    text: "Domestic Cleaner",
  },
  {
    id: "831311",
    text: "Domestic Housekeeper/Cleaner",
  },
  {
    id: "829315",
    text: "Door-to-Door Salesperson",
  },
  {
    id: "443115",
    text: "Drainer",
  },
  {
    id: "900028",
    text: "Draper",
  },
  {
    id: "312114",
    text: "Draughtsperson",
  },
  {
    id: "711922",
    text: "Dredger Operator",
  },
  {
    id: "494115",
    text: "Dressmaker",
  },
  {
    id: "494116",
    text: "Dressmaker (working from home)",
  },
  {
    id: "498611",
    text: "Driller",
  },
  {
    id: "731214",
    text: "Driver - Coach",
  },
  {
    id: "731215",
    text: "Driver - Coach (long distance)",
  },
  {
    id: "639913",
    text: "Driving Instructor",
  },
  {
    id: "992120",
    text: "Drover",
  },
  {
    id: "831515",
    text: "Drycleaner",
  },
  {
    id: "831514",
    text: "Drycleaner (Owner/Manager)",
  },
  {
    id: "991212",
    text: "Earthmoving Contractor (Owner/Operator)",
  },
  {
    id: "991211",
    text: "Earthmoving Labourer",
  },
  {
    id: "252211",
    text: "Economist",
  },
  {
    id: "253411",
    text: "Editor",
  },
  {
    id: "129315",
    text: "Education Inspector",
  },
  {
    id: "249311",
    text: "Education Officer",
  },
  {
    id: "212511",
    text: "Electrical Engineer",
  },
  {
    id: "431112",
    text: "Electrical Fitter",
  },
  {
    id: "431311",
    text: "Electrical Powerline Tradesperson",
  },
  {
    id: "431111",
    text: "Electrician",
  },
  {
    id: "900114",
    text: "Electrician (final year apprenticeship)",
  },
  {
    id: "900113",
    text: "Electrician (first year apprenticeship)",
  },
  {
    id: "900115",
    text: "Electrician (intermediate year apprenticeship)",
  },
  {
    id: "431511",
    text: "Electronic Equipment Tradesperson",
  },
  {
    id: "212513",
    text: "Electronics Engineer",
  },
  {
    id: "412613",
    text: "Electroplater",
  },
  {
    id: "431116",
    text: "Elevator Mechanic/Installer",
  },
  {
    id: "900029",
    text: "Embalmer",
  },
  {
    id: "900030",
    text: "Employment Agent",
  },
  {
    id: "900031",
    text: "Enameller",
  },
  {
    id: "231246",
    text: "Endocrinologist",
  },
  {
    id: "900032",
    text: "Endodontist",
  },
  {
    id: "411521",
    text: "Engraver",
  },
  {
    id: "341111",
    text: "Enrolled Nurse",
  },
  {
    id: "253781",
    text: "Entertainer",
  },
  {
    id: "900033",
    text: "Entomologist",
  },
  {
    id: "900034",
    text: "Environmental Scientist",
  },
  {
    id: "331188",
    text: "Equipment Hire - Repair/Service",
  },
  {
    id: "900035",
    text: "Estimator",
  },
  {
    id: "900036",
    text: "Event Manager",
  },
  {
    id: "711121",
    text: "Excavator Operator",
  },
  {
    id: "399912",
    text: "Exterior Designer/Decorator",
  },
  {
    id: "921479",
    text: "Factory Worker",
  },
  {
    id: "992111",
    text: "Farm Hand",
  },
  {
    id: "461111",
    text: "Farm Overseer/Manager",
  },
  {
    id: "412313",
    text: "Farrier",
  },
  {
    id: "253311",
    text: "Fashion Designer",
  },
  {
    id: "331189",
    text: "Fast Food/Takeaway - Employee",
  },
  {
    id: "991915",
    text: "Fencing Contractor",
  },
  {
    id: "254212",
    text: "Ferry Captain",
  },
  {
    id: "900037",
    text: "Fibreglass Worker",
  },
  {
    id: "253617",
    text: "Film and Video Editor",
  },
  {
    id: "499224",
    text: "Film Distributor",
  },
  {
    id: "253618",
    text: "Film Technician",
  },
  {
    id: "321279",
    text: "Financial Dealer and Broker",
  },
  {
    id: "321311",
    text: "Financial Planner",
  },
  {
    id: "498511",
    text: "Fire Fighter",
  },
  {
    id: "799413",
    text: "Fishing Hand",
  },
  {
    id: "900038",
    text: "Fishmonger",
  },
  {
    id: "339111",
    text: "Fitness Centre Manager",
  },
  {
    id: "639611",
    text: "Fitness Instructor",
  },
  {
    id: "411211",
    text: "Fitter",
  },
  {
    id: "599613",
    text: "Flight Attendant",
  },
  {
    id: "254117",
    text: "Flight Engineer",
  },
  {
    id: "442311",
    text: "Floor Sander/Finisher",
  },
  {
    id: "498411",
    text: "Florist",
  },
  {
    id: "498412",
    text: "Florist (deliveries)",
  },
  {
    id: "254119",
    text: "Flying Instructor",
  },
  {
    id: "921411",
    text: "Food Technologist",
  },
  {
    id: "399315",
    text: "Footballer",
  },
  {
    id: "721221",
    text: "Footwear Production Machine Operator",
  },
  {
    id: "712901",
    text: "Foreman",
  },
  {
    id: "799513",
    text: "Forest Timber Worker",
  },
  {
    id: "211413",
    text: "Forester",
  },
  {
    id: "711211",
    text: "Forklift Driver",
  },
  {
    id: "412511",
    text: "Foundry Worker",
  },
  {
    id: "492913",
    text: "French Polisher/Furniture Finisher",
  },
  {
    id: "131317",
    text: "Fruit and Nut Grower (Owner/Manager)",
  },
  {
    id: "900039",
    text: "Fruit Packer/Picker",
  },
  {
    id: "900040",
    text: "Fruiterer/Greengrocer",
  },
  {
    id: "339929",
    text: "Funeral Director",
  },
  {
    id: "731113",
    text: "Furniture Removalist",
  },
  {
    id: "900041",
    text: "Furniture Restorer",
  },
  {
    id: "494124",
    text: "Furrier",
  },
  {
    id: "321213",
    text: "Futures Trader",
  },
  {
    id: "992214",
    text: "Garage Door Installer",
  },
  {
    id: "254131",
    text: "Garage/Service Station (Owner/Manager)",
  },
  {
    id: "999111",
    text: "Garbage Collector",
  },
  {
    id: "992213",
    text: "Garden Labourer",
  },
  {
    id: "462311",
    text: "Gardener",
  },
  {
    id: "443113",
    text: "Gasfitter",
  },
  {
    id: "231248",
    text: "Gastroenterologist",
  },
  {
    id: "498313",
    text: "Gem Cutter and Polisher",
  },
  {
    id: "2",
    text: "Generic 1: Professional",
  },
  {
    id: "3",
    text: "Generic 2: White Collar Qualified",
  },
  {
    id: "4",
    text: "Generic 3: Medical",
  },
  {
    id: "5",
    text: "Generic 4: Clerical - No Manual",
  },
  {
    id: "6",
    text: "Generic 5: Clerical - Light Manual",
  },
  {
    id: "7",
    text: "Generic 6: Qualified Blue Collar/Trades",
  },
  {
    id: "8",
    text: "Generic 7: Unqualified Blue Collar",
  },
  {
    id: "9",
    text: "Generic 8: Heavy Manual",
  },
  {
    id: "10",
    text: "Generic 9: Special Risk",
  },
  {
    id: "211324",
    text: "Geneticist",
  },
  {
    id: "211211",
    text: "Geologist",
  },
  {
    id: "211213",
    text: "Geophysicist",
  },
  {
    id: "232322",
    text: "Geriatric Nurse",
  },
  {
    id: "498213",
    text: "Glass Blower",
  },
  {
    id: "498211",
    text: "Glazier - Glass Tradesperson",
  },
  {
    id: "253120",
    text: "Goldsmith",
  },
  {
    id: "399313",
    text: "Golfer",
  },
  {
    id: "711119",
    text: "Grader Operator",
  },
  {
    id: "253313",
    text: "Graphic Designer",
  },
  {
    id: "900042",
    text: "Grave Digger",
  },
  {
    id: "462211",
    text: "Greenkeeper",
  },
  {
    id: "632112",
    text: "Guest House (Owner/Manager)",
  },
  {
    id: "411519",
    text: "Gunsmith",
  },
  {
    id: "339114",
    text: "Gym (Owner/Manager)",
  },
  {
    id: "399319",
    text: "Gymnastics Coach",
  },
  {
    id: "900043",
    text: "Gynaecologist",
  },
  {
    id: "231254",
    text: "Haematologist",
  },
  {
    id: "493111",
    text: "Hairdresser",
  },
  {
    id: "900120",
    text: "Hairdresser (final year apprenticeship)",
  },
  {
    id: "900119",
    text: "Hairdresser (first year apprenticeship)",
  },
  {
    id: "900121",
    text: "Hairdresser (intermediate year apprenticeship)",
  },
  {
    id: "493112",
    text: "Hairdresser (working from home)",
  },
  {
    id: "999311",
    text: "Handyperson",
  },
  {
    id: "900044",
    text: "Harbour Pilot",
  },
  {
    id: "129312",
    text: "Headmaster/Headmistress",
  },
  {
    id: "239920",
    text: "Health Inspector",
  },
  {
    id: "254122",
    text: "Helicopter Pilot",
  },
  {
    id: "252911",
    text: "Historian",
  },
  {
    id: "1",
    text: "Homemaker",
  },
  {
    id: "131223",
    text: "Horse Breeder",
  },
  {
    id: "461411",
    text: "Horse Trainer",
  },
  {
    id: "399325",
    text: "Horseriding Coach",
  },
  {
    id: "900045",
    text: "Horticulturist",
  },
  {
    id: "831922",
    text: "Hospital Orderly/Wardsperson",
  },
  {
    id: "332311",
    text: "Hotel or Motel Manager",
  },
  {
    id: "632111",
    text: "Hotel Service Supervisor",
  },
  {
    id: "731118",
    text: "House Mover",
  },
  {
    id: "791418",
    text: "House Restumper",
  },
  {
    id: "121311",
    text: "Human Resource Manager",
  },
  {
    id: "900046",
    text: "Hypnotherapist",
  },
  {
    id: "253319",
    text: "Illustrator/Cartoonist",
  },
  {
    id: "119211",
    text: "Importer or Exporter",
  },
  {
    id: "238213",
    text: "Industrial Chemist",
  },
  {
    id: "212919",
    text: "Industrial Engineer",
  },
  {
    id: "229115",
    text: "Industrial Relations Officer",
  },
  {
    id: "729911",
    text: "Industrial Spray Painter",
  },
  {
    id: "122411",
    text: "Information Technology Manager",
  },
  {
    id: "599311",
    text: "Insurance Agent",
  },
  {
    id: "321219",
    text: "Insurance Broker",
  },
  {
    id: "614411",
    text: "Insurance Clerk",
  },
  {
    id: "599413",
    text: "Insurance Investigator",
  },
  {
    id: "599415",
    text: "Insurance Loss Adjuster",
  },
  {
    id: "599411",
    text: "Insurance Risk Surveyor",
  },
  {
    id: "349113",
    text: "Intensive Care Ambulance Paramedic",
  },
  {
    id: "399911",
    text: "Interior Decorator",
  },
  {
    id: "253317",
    text: "Interior Designer",
  },
  {
    id: "252913",
    text: "Interpreter",
  },
  {
    id: "811915",
    text: "Interviewer",
  },
  {
    id: "900047",
    text: "Investor",
  },
  {
    id: "900048",
    text: "Iridologist",
  },
  {
    id: "900049",
    text: "Ironing Contractor",
  },
  {
    id: "900050",
    text: "Ironmonger",
  },
  {
    id: "992122",
    text: "Jackeroo/Jilleroo",
  },
  {
    id: "831412",
    text: "Janitor",
  },
  {
    id: "498311",
    text: "Jeweller",
  },
  {
    id: "399311",
    text: "Jockey",
  },
  {
    id: "441115",
    text: "Joiner",
  },
  {
    id: "253479",
    text: "Journalist",
  },
  {
    id: "111113",
    text: "Judge",
  },
  {
    id: "900051",
    text: "Juice Vendor",
  },
  {
    id: "900052",
    text: "Keyboard Operator",
  },
  {
    id: "900053",
    text: "Kiln Worker",
  },
  {
    id: "900054",
    text: "Kinesiologist",
  },
  {
    id: "993111",
    text: "Kitchenhand",
  },
  {
    id: "721215",
    text: "Knitting Machine Operator",
  },
  {
    id: "129914",
    text: "Laboratory Assistant/Technician",
  },
  {
    id: "129913",
    text: "Laboratory Scientist",
  },
  {
    id: "999979",
    text: "Labourer",
  },
  {
    id: "632113",
    text: "Landlord",
  },
  {
    id: "212113",
    text: "Landscape Architect",
  },
  {
    id: "462314",
    text: "Landscape Gardener",
  },
  {
    id: "462313",
    text: "Landscape Gardener (qualified)",
  },
  {
    id: "900055",
    text: "Lapidarist",
  },
  {
    id: "900056",
    text: "Lathe Operator",
  },
  {
    id: "831511",
    text: "Laundry Worker",
  },
  {
    id: "599113",
    text: "Law Clerk",
  },
  {
    id: "639922",
    text: "Lawnmowing Contractor",
  },
  {
    id: "900057",
    text: "Lawyer",
  },
  {
    id: "831923",
    text: "Leaflet and Newspaper Deliverer",
  },
  {
    id: "229211",
    text: "Librarian",
  },
  {
    id: "619211",
    text: "Library Assistant",
  },
  {
    id: "119113",
    text: "Licensed Builder",
  },
  {
    id: "831920",
    text: "Lifeguard",
  },
  {
    id: "431115",
    text: "Lift Mechanic",
  },
  {
    id: "499221",
    text: "Light Technician",
  },
  {
    id: "461479",
    text: "Linotyper/Lithographer",
  },
  {
    id: "900058",
    text: "Livestock Broker",
  },
  {
    id: "131279",
    text: "Livestock Farmer (Owner/Manager)",
  },
  {
    id: "711117",
    text: "Loader Operator",
  },
  {
    id: "411515",
    text: "Locksmith",
  },
  {
    id: "711917",
    text: "Logging Plant Operator",
  },
  {
    id: "831213",
    text: "Luggage Porter or Doorperson",
  },
  {
    id: "411201",
    text: "Machinist (Metal or Wood)",
  },
  {
    id: "111115",
    text: "Magistrate",
  },
  {
    id: "811211",
    text: "Mail Clerk",
  },
  {
    id: "900059",
    text: "Mail Contractor",
  },
  {
    id: "619915",
    text: "Mail Supervisor",
  },
  {
    id: "499227",
    text: "Make Up Artist",
  },
  {
    id: "229411",
    text: "Management Consultant",
  },
  {
    id: "900060",
    text: "Managing Director",
  },
  {
    id: "339979",
    text: "Managing Supervisor (Sales and Service)",
  },
  {
    id: "900061",
    text: "Manicurist",
  },
  {
    id: "900135",
    text: "Manicurist (working from home)",
  },
  {
    id: "339940",
    text: "Marina (Owner/Manager)",
  },
  {
    id: "211319",
    text: "Marine Biologist",
  },
  {
    id: "211320",
    text: "Marine Biologist (field work)",
  },
  {
    id: "254217",
    text: "Marine Surveyor",
  },
  {
    id: "131321",
    text: "Market Gardener",
  },
  {
    id: "222115",
    text: "Market Research Analyst",
  },
  {
    id: "900062",
    text: "Market Stall Holder",
  },
  {
    id: "222113",
    text: "Marketing Specialist",
  },
  {
    id: "900063",
    text: "Martial Arts Instructor",
  },
  {
    id: "349411",
    text: "Masseur",
  },
  {
    id: "349412",
    text: "Masseur (working from home)",
  },
  {
    id: "254213",
    text: "Master Fisherman",
  },
  {
    id: "829913",
    text: "Materials Recycler (Scrap Metal Dealer)",
  },
  {
    id: "229311",
    text: "Mathematician",
  },
  {
    id: "921313",
    text: "Meat Boner and Slicer",
  },
  {
    id: "900064",
    text: "Meat Packer",
  },
  {
    id: "921311",
    text: "Meatworks Labourer",
  },
  {
    id: "900111",
    text: "Mechanic (final year apprenticeship)",
  },
  {
    id: "900110",
    text: "Mechanic (first year apprenticeship)",
  },
  {
    id: "900112",
    text: "Mechanic (intermediate year apprenticeship)",
  },
  {
    id: "212611",
    text: "Mechanical Engineer",
  },
  {
    id: "999915",
    text: "Mechanic's Assistant",
  },
  {
    id: "129213",
    text: "Medical Administrator",
  },
  {
    id: "239111",
    text: "Medical Diagnostic Radiographer",
  },
  {
    id: "311111",
    text: "Medical Laboratory Technical Officer",
  },
  {
    id: "231111",
    text: "Medical Practitioner",
  },
  {
    id: "211511",
    text: "Medical Scientist",
  },
  {
    id: "900065",
    text: "Merchant Banker",
  },
  {
    id: "211913",
    text: "Meteorologist",
  },
  {
    id: "811911",
    text: "Meter Reader",
  },
  {
    id: "900066",
    text: "Microbiologist",
  },
  {
    id: "731414",
    text: "Milk Vendor (deliveries)",
  },
  {
    id: "900067",
    text: "Milliner",
  },
  {
    id: "791113",
    text: "Mining - Assayer",
  },
  {
    id: "791114",
    text: "Mining - Boilermaker",
  },
  {
    id: "791116",
    text: "Mining - Carpenter",
  },
  {
    id: "791118",
    text: "Mining - Clerical/Admin",
  },
  {
    id: "791120",
    text: "Mining - driver/operator - Bogger",
  },
  {
    id: "791121",
    text: "Mining - driver/operator - Crane",
  },
  {
    id: "791122",
    text: "Mining - driver/operator - Dump truck",
  },
  {
    id: "791123",
    text: "Mining - driver/operator - Excavator",
  },
  {
    id: "791124",
    text: "Mining - driver/operator - Jumbo",
  },
  {
    id: "791128",
    text: "Mining - Electrician",
  },
  {
    id: "791129",
    text: "Mining - Engineer (field work)",
  },
  {
    id: "791130",
    text: "Mining - Engineer (office only)",
  },
  {
    id: "791131",
    text: "Mining - Explosives handler",
  },
  {
    id: "791152",
    text: "Mining - Firefighter",
  },
  {
    id: "791133",
    text: "Mining - Fitter/Turner",
  },
  {
    id: "791135",
    text: "Mining - Geologist (field work)",
  },
  {
    id: "791136",
    text: "Mining - Geologist (office only)",
  },
  {
    id: "791125",
    text: "Mining - Labourer",
  },
  {
    id: "791139",
    text: "Mining - Maintenance supervisor",
  },
  {
    id: "791140",
    text: "Mining - Maintenance worker",
  },
  {
    id: "791141",
    text: "Mining - Mechanic",
  },
  {
    id: "791142",
    text: "Mining - Metallurgist",
  },
  {
    id: "791126",
    text: "Mining - Mill operator",
  },
  {
    id: "791144",
    text: "Mining - Mine deputy/ manager",
  },
  {
    id: "791146",
    text: "Mining - Miner/Driller",
  },
  {
    id: "791147",
    text: "Mining - O.H. and S. manager",
  },
  {
    id: "791150",
    text: "Mining - Plant operator",
  },
  {
    id: "791151",
    text: "Mining - Plumber",
  },
  {
    id: "791153",
    text: "Mining - Safety officer",
  },
  {
    id: "791154",
    text: "Mining - Sandblaster",
  },
  {
    id: "791155",
    text: "Mining - Shotfirer",
  },
  {
    id: "791156",
    text: "Mining - Supervisor",
  },
  {
    id: "791157",
    text: "Mining - Surveyor",
  },
  {
    id: "791127",
    text: "Mining - Truck driver",
  },
  {
    id: "791212",
    text: "Mining - Underground - Carpenter",
  },
  {
    id: "791213",
    text: "Mining - Underground - driver/operator - bogger",
  },
  {
    id: "791214",
    text: "Mining - Underground - driver/operator - crane",
  },
  {
    id: "791215",
    text: "Mining - Underground - driver/operator - dump truck",
  },
  {
    id: "791216",
    text: "Mining - Underground - driver/operator - excavator",
  },
  {
    id: "791217",
    text: "Mining - Underground - driver/operator - jumbo",
  },
  {
    id: "791218",
    text: "Mining - Underground - driver/operator - mill",
  },
  {
    id: "791219",
    text: "Mining - Underground - driver/operator - truck",
  },
  {
    id: "791220",
    text: "Mining - Underground - Electrician",
  },
  {
    id: "791132",
    text: "Mining - Underground - Explosives handler",
  },
  {
    id: "791221",
    text: "Mining - Underground - Fitter/Turner",
  },
  {
    id: "791134",
    text: "Mining - Underground - Geologist",
  },
  {
    id: "791222",
    text: "Mining - Underground - Maintenance worker",
  },
  {
    id: "791223",
    text: "Mining - Underground - Mechanic",
  },
  {
    id: "791224",
    text: "Mining - Underground - Mine deputy/manager",
  },
  {
    id: "791112",
    text: "Mining - Underground - Miner/Driller",
  },
  {
    id: "791117",
    text: "Mining - Underground - Plant operator",
  },
  {
    id: "791225",
    text: "Mining - Underground - Plumber",
  },
  {
    id: "791226",
    text: "Mining - Underground - Sandblaster",
  },
  {
    id: "791227",
    text: "Mining - Underground - Shotfirer",
  },
  {
    id: "791119",
    text: "Mining - Underground - Supervisor",
  },
  {
    id: "791158",
    text: "Mining - Underground - Train driver",
  },
  {
    id: "791228",
    text: "Mining - Underground - Welder",
  },
  {
    id: "791115",
    text: "Mining - Welder",
  },
  {
    id: "251511",
    text: "Minister of Religion",
  },
  {
    id: "829513",
    text: "Model",
  },
  {
    id: "321220",
    text: "Mortgage Broker",
  },
  {
    id: "499219",
    text: "Motion Picture Projectionist",
  },
  {
    id: "421111",
    text: "Motor Mechanic",
  },
  {
    id: "621211",
    text: "Motor Vehicle and Caravan Salesperson",
  },
  {
    id: "619417",
    text: "Motor Vehicle Licence Examiner",
  },
  {
    id: "900068",
    text: "Moulder",
  },
  {
    id: "900069",
    text: "Muffler Fitter",
  },
  {
    id: "639911",
    text: "Museum or Gallery Attendant",
  },
  {
    id: "254921",
    text: "Museum or Gallery Curator",
  },
  {
    id: "253711",
    text: "Music Director",
  },
  {
    id: "249113",
    text: "Music Teacher",
  },
  {
    id: "253780",
    text: "Musician",
  },
  {
    id: "253779",
    text: "Musician - Symphony Orchestra",
  },
  {
    id: "349413",
    text: "Myotherapist",
  },
  {
    id: "631215",
    text: "Nanny",
  },
  {
    id: "239479",
    text: "Natural Therapy Professional (Homeopath/Herbalist)",
  },
  {
    id: "239411",
    text: "Naturopath",
  },
  {
    id: "499114",
    text: "Navy, Seagoing Officer",
  },
  {
    id: "499116",
    text: "Navy, Submariner",
  },
  {
    id: "231242",
    text: "Neurologist",
  },
  {
    id: "731416",
    text: "Newsagent",
  },
  {
    id: "731417",
    text: "Newsagent (deliveries)",
  },
  {
    id: "232111",
    text: "Nurse Manager",
  },
  {
    id: "462111",
    text: "Nurseryperson",
  },
  {
    id: "631413",
    text: "Nursing Assistant",
  },
  {
    id: "231217",
    text: "Obstetrician and Gynaecologist",
  },
  {
    id: "254311",
    text: "Occupational Health and Safety Officer",
  },
  {
    id: "238311",
    text: "Occupational Therapist",
  },
  {
    id: "829113",
    text: "Office Cashier",
  },
  {
    id: "329111",
    text: "Office Manager",
  },
  {
    id: "329112",
    text: "Office Manager - Senior",
  },
  {
    id: "610111",
    text: "Office Worker",
  },
  {
    id: "791174",
    text: "Oil and gas - Offshore - Crane Operator",
  },
  {
    id: "791175",
    text: "Oil and gas - Offshore - Derrick Operator",
  },
  {
    id: "791177",
    text: "Oil and gas - Offshore - Driller",
  },
  {
    id: "791179",
    text: "Oil and gas - Offshore - Engineer",
  },
  {
    id: "791178",
    text: "Oil and gas - Offshore - Geologist",
  },
  {
    id: "791180",
    text: "Oil and gas - Offshore - Laboratory Technician",
  },
  {
    id: "791172",
    text: "Oil and gas - Offshore - Labourer",
  },
  {
    id: "791182",
    text: "Oil and gas - Offshore - Mechanic",
  },
  {
    id: "791183",
    text: "Oil and gas - Offshore - Rigger",
  },
  {
    id: "791173",
    text: "Oil and gas - Offshore - Supervisor",
  },
  {
    id: "791181",
    text: "Oil and gas - Offshore - Tool Pusher",
  },
  {
    id: "791184",
    text: "Oil and gas - Offshore - Welder",
  },
  {
    id: "791159",
    text: "Oil and gas - Onshore - Clerical/Admin",
  },
  {
    id: "791161",
    text: "Oil and gas - Onshore - Crane Operator",
  },
  {
    id: "791162",
    text: "Oil and gas - Onshore - Derrick Operator",
  },
  {
    id: "791163",
    text: "Oil and gas - Onshore - Distributor",
  },
  {
    id: "791164",
    text: "Oil and gas - Onshore - Driller",
  },
  {
    id: "791166",
    text: "Oil and gas - Onshore - Engineer",
  },
  {
    id: "791165",
    text: "Oil and gas - Onshore - Geologist",
  },
  {
    id: "791167",
    text: "Oil and gas - Onshore - Laboratory Technician",
  },
  {
    id: "791168",
    text: "Oil and gas - Onshore - Machine Operator",
  },
  {
    id: "791169",
    text: "Oil and gas - Onshore - Mechanic",
  },
  {
    id: "791170",
    text: "Oil and gas - Onshore - Rigger",
  },
  {
    id: "791160",
    text: "Oil and gas - Onshore - Supervisor",
  },
  {
    id: "791171",
    text: "Oil and gas - Onshore - Welder",
  },
  {
    id: "791186",
    text: "Oil and gas - Pipeline worker",
  },
  {
    id: "791185",
    text: "Oil and gas - Refinery worker",
  },
  {
    id: "900070",
    text: "Oncologist",
  },
  {
    id: "231219",
    text: "Ophthalmologist",
  },
  {
    id: "499912",
    text: "Optical Technician",
  },
  {
    id: "499911",
    text: "Optician",
  },
  {
    id: "238411",
    text: "Optometrist",
  },
  {
    id: "900071",
    text: "Orchardist",
  },
  {
    id: "900072",
    text: "Orthodontist",
  },
  {
    id: "231244",
    text: "Orthopaedic Surgeon",
  },
  {
    id: "239913",
    text: "Orthoptist",
  },
  {
    id: "239915",
    text: "Orthotist/Prosthetist",
  },
  {
    id: "238713",
    text: "Osteopath",
  },
  {
    id: "900073",
    text: "Oyster Farmer",
  },
  {
    id: "900074",
    text: "Packer",
  },
  {
    id: "231221",
    text: "Paediatrician",
  },
  {
    id: "253111",
    text: "Painter - Visual Arts",
  },
  {
    id: "442112",
    text: "Painter and Decorator",
  },
  {
    id: "442111",
    text: "Painter and Decorator (qualified)",
  },
  {
    id: "900104",
    text: "Painter and Decorator (qualified) above 10m",
  },
  {
    id: "900136",
    text: "Painter and Decorator above 10m",
  },
  {
    id: "831932",
    text: "Pallbearer",
  },
  {
    id: "421312",
    text: "Panel Beater",
  },
  {
    id: "421311",
    text: "Panel Beater (qualified)",
  },
  {
    id: "729511",
    text: "Paper Products Machine Operator",
  },
  {
    id: "599212",
    text: "Paralegal",
  },
  {
    id: "211415",
    text: "Park Ranger",
  },
  {
    id: "811917",
    text: "Parking Inspector",
  },
  {
    id: "831924",
    text: "Parking Station Attendant",
  },
  {
    id: "111111",
    text: "Parliamentarian or Councillor",
  },
  {
    id: "342111",
    text: "Parole or Probation Officer",
  },
  {
    id: "451213",
    text: "Pastrycook",
  },
  {
    id: "231223",
    text: "Pathologist",
  },
  {
    id: "991920",
    text: "Paver",
  },
  {
    id: "614211",
    text: "Payroll Clerk",
  },
  {
    id: "34",
    text: "Pensioner",
  },
  {
    id: "900075",
    text: "Periodontist",
  },
  {
    id: "511113",
    text: "Personal Assistant",
  },
  {
    id: "511114",
    text: "Personal Trainer",
  },
  {
    id: "229111",
    text: "Personnel Officer or Consultant",
  },
  {
    id: "639917",
    text: "Pest and Weed Controller",
  },
  {
    id: "498713",
    text: "Petroleum and Gas Plant Operator",
  },
  {
    id: "238215",
    text: "Pharmacist",
  },
  {
    id: "900076",
    text: "Photoengraver",
  },
  {
    id: "253211",
    text: "Photographer",
  },
  {
    id: "241312",
    text: "Physical Education Teacher",
  },
  {
    id: "211917",
    text: "Physical Metallurgist",
  },
  {
    id: "211911",
    text: "Physicist",
  },
  {
    id: "238511",
    text: "Physiotherapist",
  },
  {
    id: "499917",
    text: "Piano Tuner",
  },
  {
    id: "492911",
    text: "Picture Framer",
  },
  {
    id: "131219",
    text: "Pig Farmer (Owner/Manager)",
  },
  {
    id: "498811",
    text: "Plant Operator",
  },
  {
    id: "441212",
    text: "Plasterer",
  },
  {
    id: "441211",
    text: "Plasterer (qualified)",
  },
  {
    id: "231252",
    text: "Plastic Surgeon",
  },
  {
    id: "443111",
    text: "Plumber",
  },
  {
    id: "900108",
    text: "Plumber (final year apprenticeship)",
  },
  {
    id: "900107",
    text: "Plumber (first year apprenticeship)",
  },
  {
    id: "900109",
    text: "Plumber (intermediate year apprenticeship)",
  },
  {
    id: "238811",
    text: "Podiatrist",
  },
  {
    id: "391111",
    text: "Police Officer",
  },
  {
    id: "391120",
    text: "Police Officer, Air Wing",
  },
  {
    id: "391124",
    text: "Police Officer, Bomb Disposal",
  },
  {
    id: "391114",
    text: "Police Officer, Dog Squad",
  },
  {
    id: "391116",
    text: "Police Officer, Motorcyclist",
  },
  {
    id: "391118",
    text: "Police Officer, Rescue",
  },
  {
    id: "391122",
    text: "Police Officer, Special Weapons",
  },
  {
    id: "339911",
    text: "Post Office Manager",
  },
  {
    id: "811413",
    text: "Postal Delivery Officer",
  },
  {
    id: "811213",
    text: "Postal Sorting Officer",
  },
  {
    id: "253115",
    text: "Potter or Ceramic Artist",
  },
  {
    id: "131221",
    text: "Poultry Farmer (Owner/Manager)",
  },
  {
    id: "411511",
    text: "Precision Instrument Maker and Repairer",
  },
  {
    id: "631111",
    text: "Preschool Aide",
  },
  {
    id: "241111",
    text: "Preschool Teacher",
  },
  {
    id: "900077",
    text: "Priest",
  },
  {
    id: "399111",
    text: "Primary Products Inspector",
  },
  {
    id: "253413",
    text: "Print Journalist",
  },
  {
    id: "799613",
    text: "Printer",
  },
  {
    id: "639312",
    text: "Prison Governor",
  },
  {
    id: "639311",
    text: "Prison Officer",
  },
  {
    id: "399917",
    text: "Private Investigator",
  },
  {
    id: "921979",
    text: "Process Worker",
  },
  {
    id: "921211",
    text: "Product Assembler",
  },
  {
    id: "499223",
    text: "Production Assistant (Film, Television, Radio or Stage)",
  },
  {
    id: "122211",
    text: "Production Manager (Manufacturing)",
  },
  {
    id: "122213",
    text: "Production Manager (Mining)",
  },
  {
    id: "212613",
    text: "Production or Plant Engineer",
  },
  {
    id: "900078",
    text: "Professor",
  },
  {
    id: "329211",
    text: "Project Manager",
  },
  {
    id: "619911",
    text: "Proof Reader",
  },
  {
    id: "329314",
    text: "Property Developer",
  },
  {
    id: "329313",
    text: "Property Manager",
  },
  {
    id: "831927",
    text: "Prostitute or Escort",
  },
  {
    id: "231227",
    text: "Psychiatrist",
  },
  {
    id: "251479",
    text: "Psychologist",
  },
  {
    id: "222111",
    text: "Public Relations Officer",
  },
  {
    id: "222112",
    text: "Public Servant",
  },
  {
    id: "632216",
    text: "Publican",
  },
  {
    id: "599511",
    text: "Publisher",
  },
  {
    id: "615313",
    text: "Purchasing Officer",
  },
  {
    id: "229415",
    text: "Quality Assurance Manager",
  },
  {
    id: "212211",
    text: "Quantity Surveyor",
  },
  {
    id: "619412",
    text: "Quarantine Officer",
  },
  {
    id: "900079",
    text: "Quarry Worker",
  },
  {
    id: "499120",
    text: "RAAF, Regular Flying",
  },
  {
    id: "253417",
    text: "Radio Journalist",
  },
  {
    id: "253911",
    text: "Radio Presenter",
  },
  {
    id: "231229",
    text: "Radiologist",
  },
  {
    id: "831116",
    text: "Railway Guard",
  },
  {
    id: "991514",
    text: "Railway Shunter",
  },
  {
    id: "712911",
    text: "Railway Signal Operator",
  },
  {
    id: "339913",
    text: "Railway Station Manager",
  },
  {
    id: "711913",
    text: "Railway Track Worker",
  },
  {
    id: "831911",
    text: "Railways Assistant",
  },
  {
    id: "329311",
    text: "Real Estate Agency Manager",
  },
  {
    id: "329315",
    text: "Real Estate Salesperson",
  },
  {
    id: "613111",
    text: "Receptionist",
  },
  {
    id: "229913",
    text: "Records Manager",
  },
  {
    id: "900080",
    text: "Recruitment Consultant",
  },
  {
    id: "900081",
    text: "Reflexologist",
  },
  {
    id: "431212",
    text: "Refrigeration and Airconditioning Mechanic",
  },
  {
    id: "431211",
    text: "Refrigeration and Airconditioning Mechanic (qualified)",
  },
  {
    id: "232511",
    text: "Registered Mental Health Nurse",
  },
  {
    id: "232411",
    text: "Registered Midwife",
  },
  {
    id: "232311",
    text: "Registered Nurse",
  },
  {
    id: "251311",
    text: "Rehabilitation Counsellor",
  },
  {
    id: "399306",
    text: "Reinsman, Trotting",
  },
  {
    id: "900082",
    text: "Repairperson",
  },
  {
    id: "619914",
    text: "Repossessor",
  },
  {
    id: "129911",
    text: "Research and Development Manager",
  },
  {
    id: "129912",
    text: "Researcher",
  },
  {
    id: "332111",
    text: "Restaurant and Catering Manager",
  },
  {
    id: "399611",
    text: "Retail Buyer",
  },
  {
    id: "621311",
    text: "Retail Supervisor",
  },
  {
    id: "35",
    text: "Retired",
  },
  {
    id: "231226",
    text: "Rheumatologist",
  },
  {
    id: "711126",
    text: "Road Maintenance and Construction",
  },
  {
    id: "711125",
    text: "Road Roller Operator (Asphalt Layer)",
  },
  {
    id: "443117",
    text: "Roof Plumber",
  },
  {
    id: "441311",
    text: "Roof Slater and Tiler",
  },
  {
    id: "900083",
    text: "Rubbish Collector",
  },
  {
    id: "331190",
    text: "Saddle Maker",
  },
  {
    id: "399211",
    text: "Safety Inspector",
  },
  {
    id: "494415",
    text: "Sail Maker",
  },
  {
    id: "123111",
    text: "Sales and Marketing Manager - degree qualified",
  },
  {
    id: "123112",
    text: "Sales and Marketing Manager - not qualified",
  },
  {
    id: "821179",
    text: "Sales Assistant",
  },
  {
    id: "222211",
    text: "Sales Representative",
  },
  {
    id: "222212",
    text: "Sales Representative (Travelling)",
  },
  {
    id: "900084",
    text: "Sandblaster",
  },
  {
    id: "921511",
    text: "Sawmill Labourer",
  },
  {
    id: "791311",
    text: "Scaffolder - 10 metre and below",
  },
  {
    id: "899999",
    text: "Scaffolder - above 10 metres",
  },
  {
    id: "129311",
    text: "School Principal",
  },
  {
    id: "241311",
    text: "School Teacher (Primary or Secondary)",
  },
  {
    id: "211979",
    text: "Scientist",
  },
  {
    id: "211418",
    text: "Scientist, degree qualified, field work",
  },
  {
    id: "491411",
    text: "Screen Printer",
  },
  {
    id: "253515",
    text: "Script Editor/Writer",
  },
  {
    id: "253113",
    text: "Sculptor",
  },
  {
    id: "254279",
    text: "Sea Transport Crew",
  },
  {
    id: "799411",
    text: "Seafarer",
  },
  {
    id: "399924",
    text: "Search and Rescue Worker",
  },
  {
    id: "511111",
    text: "Secretary",
  },
  {
    id: "831111",
    text: "Security Guard (Armed)",
  },
  {
    id: "831112",
    text: "Security Guard (Unarmed)",
  },
  {
    id: "791415",
    text: "Security System Installer",
  },
  {
    id: "399511",
    text: "Senior Fire Fighter",
  },
  {
    id: "829611",
    text: "Service Station Attendant",
  },
  {
    id: "461212",
    text: "Sewage Plant Worker",
  },
  {
    id: "461211",
    text: "Shearer",
  },
  {
    id: "131217",
    text: "Sheep Farmer (Owner/Manager)",
  },
  {
    id: "412211",
    text: "Sheet Metal Worker",
  },
  {
    id: "254215",
    text: "Ship's Engineer",
  },
  {
    id: "254211",
    text: "Ship's Master",
  },
  {
    id: "254219",
    text: "Ship's Officer",
  },
  {
    id: "498111",
    text: "Shipwright",
  },
  {
    id: "498112",
    text: "Shipyard Worker",
  },
  {
    id: "494311",
    text: "Shoemaker",
  },
  {
    id: "992911",
    text: "Shooter-Trapper",
  },
  {
    id: "331111",
    text: "Shop Manager",
  },
  {
    id: "900085",
    text: "Shopfitter",
  },
  {
    id: "331118",
    text: "Shopkeeper/Proprietor - Adult Books/Goods",
  },
  {
    id: "331119",
    text: "Shopkeeper/Proprietor - Antiques",
  },
  {
    id: "331120",
    text: "Shopkeeper/Proprietor - Aquarium",
  },
  {
    id: "331121",
    text: "Shopkeeper/Proprietor - Art Supplies",
  },
  {
    id: "331122",
    text: "Shopkeeper/Proprietor - Baby Goods",
  },
  {
    id: "331123",
    text: "Shopkeeper/Proprietor - Bedding",
  },
  {
    id: "331124",
    text: "Shopkeeper/Proprietor - Bicycles",
  },
  {
    id: "331125",
    text: "Shopkeeper/Proprietor - Books",
  },
  {
    id: "331126",
    text: "Shopkeeper/Proprietor - Bootmaker",
  },
  {
    id: "331127",
    text: "Shopkeeper/Proprietor - Bread/Cakes",
  },
  {
    id: "331128",
    text: "Shopkeeper/Proprietor - Butcher",
  },
  {
    id: "331129",
    text: "Shopkeeper/Proprietor - Camping Equipment",
  },
  {
    id: "331130",
    text: "Shopkeeper/Proprietor - Cane Goods",
  },
  {
    id: "331131",
    text: "Shopkeeper/Proprietor - Cards",
  },
  {
    id: "331132",
    text: "Shopkeeper/Proprietor - Carpets/Floor Coverings",
  },
  {
    id: "331133",
    text: "Shopkeeper/Proprietor - China/Glassware",
  },
  {
    id: "331134",
    text: "Shopkeeper/Proprietor - Clothing",
  },
  {
    id: "331135",
    text: "Shopkeeper/Proprietor - Coffee Lounge",
  },
  {
    id: "331136",
    text: "Shopkeeper/Proprietor - Computers",
  },
  {
    id: "331137",
    text: "Shopkeeper/Proprietor - Confectionery",
  },
  {
    id: "331138",
    text: "Shopkeeper/Proprietor - Curtains/Blinds",
  },
  {
    id: "331139",
    text: "Shopkeeper/Proprietor - Delicatessen",
  },
  {
    id: "331140",
    text: "Shopkeeper/Proprietor - Department Store",
  },
  {
    id: "331141",
    text: "Shopkeeper/Proprietor - Disposal",
  },
  {
    id: "331142",
    text: "Shopkeeper/Proprietor - Dry Cleaning",
  },
  {
    id: "331143",
    text: "Shopkeeper/Proprietor - Duty Free",
  },
  {
    id: "331144",
    text: "Shopkeeper/Proprietor - Electrical Goods",
  },
  {
    id: "331145",
    text: "Shopkeeper/Proprietor - Fast Food/Takeaway",
  },
  {
    id: "331146",
    text: "Shopkeeper/Proprietor - Fish and Chips",
  },
  {
    id: "331147",
    text: "Shopkeeper/Proprietor - Florist",
  },
  {
    id: "331148",
    text: "Shopkeeper/Proprietor - Footwear",
  },
  {
    id: "331149",
    text: "Shopkeeper/Proprietor - Furniture",
  },
  {
    id: "331150",
    text: "Shopkeeper/Proprietor - General Store",
  },
  {
    id: "331151",
    text: "Shopkeeper/Proprietor - Gift Shop",
  },
  {
    id: "331152",
    text: "Shopkeeper/Proprietor - Greengrocer",
  },
  {
    id: "331153",
    text: "Shopkeeper/Proprietor - Gunsmith",
  },
  {
    id: "331154",
    text: "Shopkeeper/Proprietor - Haberdashery/Drapery",
  },
  {
    id: "331155",
    text: "Shopkeeper/Proprietor - Hardware",
  },
  {
    id: "331156",
    text: "Shopkeeper/Proprietor - Health Foods",
  },
  {
    id: "331157",
    text: "Shopkeeper/Proprietor - Ice Cream",
  },
  {
    id: "331158",
    text: "Shopkeeper/Proprietor - Jewellery",
  },
  {
    id: "331159",
    text: "Shopkeeper/Proprietor - Lawnmower",
  },
  {
    id: "331160",
    text: "Shopkeeper/Proprietor - Light Fittings",
  },
  {
    id: "331161",
    text: "Shopkeeper/Proprietor - Lingerie",
  },
  {
    id: "331162",
    text: "Shopkeeper/Proprietor - Liquor Store",
  },
  {
    id: "331163",
    text: "Shopkeeper/Proprietor - Locksmith",
  },
  {
    id: "331164",
    text: "Shopkeeper/Proprietor - Milk Bar",
  },
  {
    id: "331165",
    text: "Shopkeeper/Proprietor - Motor Vehicle Spares/Accessories",
  },
  {
    id: "331166",
    text: "Shopkeeper/Proprietor - Musical Equipment",
  },
  {
    id: "331167",
    text: "Shopkeeper/Proprietor - Nursery/Garden",
  },
  {
    id: "331168",
    text: "Shopkeeper/Proprietor - Office Equipment",
  },
  {
    id: "331169",
    text: "Shopkeeper/Proprietor - Office Supplies",
  },
  {
    id: "331170",
    text: "Shopkeeper/Proprietor - Outdoor Supplies",
  },
  {
    id: "331171",
    text: "Shopkeeper/Proprietor - Paint/Wallpaper",
  },
  {
    id: "331116",
    text: "Shopkeeper/Proprietor - Pawnbroker",
  },
  {
    id: "331114",
    text: "Shopkeeper/Proprietor - Petshop",
  },
  {
    id: "331172",
    text: "Shopkeeper/Proprietor - Photographic",
  },
  {
    id: "331173",
    text: "Shopkeeper/Proprietor - Produce Merchant",
  },
  {
    id: "331174",
    text: "Shopkeeper/Proprietor - Records/Music/CDs/DVDs",
  },
  {
    id: "331175",
    text: "Shopkeeper/Proprietor - Second Hand Goods",
  },
  {
    id: "331177",
    text: "Shopkeeper/Proprietor - Skin, Hide and Leather Goods",
  },
  {
    id: "331178",
    text: "Shopkeeper/Proprietor - Sporting Goods",
  },
  {
    id: "331179",
    text: "Shopkeeper/Proprietor - Stationery",
  },
  {
    id: "331180",
    text: "Shopkeeper/Proprietor - Supermarket",
  },
  {
    id: "331181",
    text: "Shopkeeper/Proprietor - Swimming Pool Supplies",
  },
  {
    id: "331182",
    text: "Shopkeeper/Proprietor - Telephones",
  },
  {
    id: "331183",
    text: "Shopkeeper/Proprietor - Tobacconist",
  },
  {
    id: "331184",
    text: "Shopkeeper/Proprietor - Toys",
  },
  {
    id: "331185",
    text: "Shopkeeper/Proprietor - Video Hire",
  },
  {
    id: "999913",
    text: "Sign Erector",
  },
  {
    id: "442212",
    text: "Signwriter (over 10m)",
  },
  {
    id: "442211",
    text: "Signwriter (under 10m)",
  },
  {
    id: "253122",
    text: "Silversmith",
  },
  {
    id: "253713",
    text: "Singer",
  },
  {
    id: "911121",
    text: "Skylight Fitter",
  },
  {
    id: "451115",
    text: "Slaughterperson",
  },
  {
    id: "251111",
    text: "Social Worker",
  },
  {
    id: "211417",
    text: "Soil Scientist",
  },
  {
    id: "252113",
    text: "Solicitor",
  },
  {
    id: "239117",
    text: "Sonographer",
  },
  {
    id: "499211",
    text: "Sound Technician",
  },
  {
    id: "241479",
    text: "Special Education Teacher",
  },
  {
    id: "231279",
    text: "Specialist Medical Practitioner",
  },
  {
    id: "231225",
    text: "Specialist Physician",
  },
  {
    id: "238611",
    text: "Speech Pathologist",
  },
  {
    id: "129919",
    text: "Sports Administrator",
  },
  {
    id: "339113",
    text: "Sports Centre Manager",
  },
  {
    id: "399327",
    text: "Sports Coach",
  },
  {
    id: "399331",
    text: "Sports Umpire",
  },
  {
    id: "399317",
    text: "Sportsperson",
  },
  {
    id: "131226",
    text: "Stablehand/Strapper",
  },
  {
    id: "253619",
    text: "Stage Manager",
  },
  {
    id: "229313",
    text: "Statistician",
  },
  {
    id: "791316",
    text: "Steel Erector, Heights over 10 metres",
  },
  {
    id: "441314",
    text: "Steeplejack",
  },
  {
    id: "511112",
    text: "Stenographer",
  },
  {
    id: "900086",
    text: "Stevedore",
  },
  {
    id: "339923",
    text: "Stock and Station Agent",
  },
  {
    id: "321215",
    text: "Stockbroker/Financial Market Dealer",
  },
  {
    id: "321211",
    text: "Stockbroking Dealer",
  },
  {
    id: "992124",
    text: "Stockman",
  },
  {
    id: "729713",
    text: "Stone Processing Machine Operator",
  },
  {
    id: "441613",
    text: "Stonemason",
  },
  {
    id: "799312",
    text: "Storeperson - Admin/Light Manual Only",
  },
  {
    id: "799311",
    text: "Storeperson (manual work) work",
  },
  {
    id: "711915",
    text: "Streetsweeper Operator",
  },
  {
    id: "791315",
    text: "Structural Steel Erector and Fixer",
  },
  {
    id: "36",
    text: "Student",
  },
  {
    id: "251319",
    text: "Student Counsellor",
  },
  {
    id: "253820",
    text: "Stuntman",
  },
  {
    id: "131313",
    text: "Sugar Cane Grower (Owner/Manager)",
  },
  {
    id: "799501",
    text: "Supervisor, Forestry and Logging Workers",
  },
  {
    id: "391101",
    text: "Supervisor, Police Officers",
  },
  {
    id: "411501",
    text: "Supervisor, Precision Metal Tradespersons",
  },
  {
    id: "632301",
    text: "Supervisor, Waiters",
  },
  {
    id: "122311",
    text: "Supply and Distribution Manager",
  },
  {
    id: "331191",
    text: "Surfboard Shaper/Manufacturer/Reshaper",
  },
  {
    id: "231231",
    text: "Surgeon",
  },
  {
    id: "212313",
    text: "Surveyor",
  },
  {
    id: "212314",
    text: "Surveyor (field work)",
  },
  {
    id: "399323",
    text: "Swimming Coach",
  },
  {
    id: "831931",
    text: "Swimming Pool - Manager/Proprietor",
  },
  {
    id: "831930",
    text: "Swimming Pool Attendant",
  },
  {
    id: "900087",
    text: "Swimming Pool Builder",
  },
  {
    id: "494113",
    text: "Tailor",
  },
  {
    id: "731114",
    text: "Tanker Driver",
  },
  {
    id: "731116",
    text: "Tanker Driver (long distance)",
  },
  {
    id: "721219",
    text: "Tanner",
  },
  {
    id: "900088",
    text: "Tattooist",
  },
  {
    id: "900137",
    text: "Tax Consultant",
  },
  {
    id: "900089",
    text: "Tax Consultant (qualified)",
  },
  {
    id: "731314",
    text: "Taxi Driver",
  },
  {
    id: "731312",
    text: "Taxi Driver (Owner/Driver)",
  },
  {
    id: "254924",
    text: "Taxidermist",
  },
  {
    id: "631115",
    text: "Teacher's Aide",
  },
  {
    id: "829411",
    text: "Telemarketer",
  },
  {
    id: "811312",
    text: "Telephone Technician",
  },
  {
    id: "811311",
    text: "Telephonist (Switchboard Operator)",
  },
  {
    id: "499215",
    text: "Television Equipment Operator",
  },
  {
    id: "253415",
    text: "Television Journalist",
  },
  {
    id: "253913",
    text: "Television Presenter",
  },
  {
    id: "399321",
    text: "Tennis Coach",
  },
  {
    id: "399310",
    text: "Tennis Player",
  },
  {
    id: "254128",
    text: "Test Pilot",
  },
  {
    id: "411215",
    text: "Textile, Clothing or Footwear Machinist",
  },
  {
    id: "232320",
    text: "Theatre Nurse",
  },
  {
    id: "339927",
    text: "Theatre or Cinema Manager",
  },
  {
    id: "499225",
    text: "Theatre or Cinema Technician",
  },
  {
    id: "831211",
    text: "Ticket Collector or Usher",
  },
  {
    id: "829211",
    text: "Ticket Seller (Theatre or Cinema)",
  },
  {
    id: "799514",
    text: "Timber Merchant",
  },
  {
    id: "799515",
    text: "Timber Merchant -  Manual work",
  },
  {
    id: "131315",
    text: "Tobacco Grower (Owner/Manager)",
  },
  {
    id: "411312",
    text: "Toolmaker",
  },
  {
    id: "411311",
    text: "Toolmaker (qualified)",
  },
  {
    id: "639715",
    text: "Tour Guide",
  },
  {
    id: "639713",
    text: "Tourist Information Officer",
  },
  {
    id: "711916",
    text: "Tow Truck Operator",
  },
  {
    id: "252312",
    text: "Town Planner",
  },
  {
    id: "252313",
    text: "Town Planner (qualified)",
  },
  {
    id: "211326",
    text: "Toxicologist",
  },
  {
    id: "712913",
    text: "Train Controller",
  },
  {
    id: "731511",
    text: "Train Driver",
  },
  {
    id: "731512",
    text: "Train Driver (long distance)",
  },
  {
    id: "229117",
    text: "Training Officer",
  },
  {
    id: "731213",
    text: "Tram Driver",
  },
  {
    id: "252915",
    text: "Translator",
  },
  {
    id: "339311",
    text: "Transport Company Manager",
  },
  {
    id: "829213",
    text: "Transport Conductor",
  },
  {
    id: "619419",
    text: "Transport Inspector",
  },
  {
    id: "339925",
    text: "Travel Agency Manager",
  },
  {
    id: "639711",
    text: "Travel Agent",
  },
  {
    id: "799511",
    text: "Tree Feller",
  },
  {
    id: "462315",
    text: "Tree Surgeon",
  },
  {
    id: "900139",
    text: "Trench Digger",
  },
  {
    id: "731111",
    text: "Truck Driver",
  },
  {
    id: "731112",
    text: "Truck Driver (long distance)",
  },
  {
    id: "900090",
    text: "Tugboat Operator",
  },
  {
    id: "991112",
    text: "Tunneller",
  },
  {
    id: "242114",
    text: "Tutor - Full Time",
  },
  {
    id: "900091",
    text: "Typesetter",
  },
  {
    id: "612111",
    text: "Typist and Word Processing Operator",
  },
  {
    id: "729211",
    text: "Tyre and Battery Fitter",
  },
  {
    id: "900092",
    text: "Undertaker",
  },
  {
    id: "900093",
    text: "Underwriter",
  },
  {
    id: "32",
    text: "Unemployed",
  },
  {
    id: "242111",
    text: "University Lecturer",
  },
  {
    id: "242113",
    text: "University Tutor",
  },
  {
    id: "494212",
    text: "Upholsterer",
  },
  {
    id: "494211",
    text: "Upholsterer (qualified)",
  },
  {
    id: "252311",
    text: "Urban and Regional Planner",
  },
  {
    id: "231250",
    text: "Urologist",
  },
  {
    id: "900094",
    text: "Valet",
  },
  {
    id: "229511",
    text: "Valuer",
  },
  {
    id: "229512",
    text: "Valuer - Livestock",
  },
  {
    id: "229513",
    text: "Valuer - Property",
  },
  {
    id: "131319",
    text: "Vegetable Grower",
  },
  {
    id: "421511",
    text: "Vehicle Body Maker",
  },
  {
    id: "911117",
    text: "Vehicle Cleaner/Detailer",
  },
  {
    id: "421411",
    text: "Vehicle Spray Painter",
  },
  {
    id: "421611",
    text: "Vehicle Trimmer/Upholsterer",
  },
  {
    id: "999911",
    text: "Vending Machine Attendant or Serviceman",
  },
  {
    id: "239211",
    text: "Veterinarian",
  },
  {
    id: "239212",
    text: "Veterinarian, Large Animals",
  },
  {
    id: "639211",
    text: "Veterinary Nurse",
  },
  {
    id: "253214",
    text: "Videographer",
  },
  {
    id: "254919",
    text: "Vineyard (Owner/Manager)",
  },
  {
    id: "253179",
    text: "Visual Arts and Crafts Professionals",
  },
  {
    id: "599915",
    text: "Visual Merchandiser",
  },
  {
    id: "242211",
    text: "Vocational Education Teacher",
  },
  {
    id: "632311",
    text: "Waiter",
  },
  {
    id: "441611",
    text: "Wall and Floor Tiler",
  },
  {
    id: "900095",
    text: "Wallpaper Hanger",
  },
  {
    id: "900096",
    text: "Wardsperson",
  },
  {
    id: "900097",
    text: "Washing Machine Mechanic",
  },
  {
    id: "411513",
    text: "Watch and Clock Maker and Repairer",
  },
  {
    id: "900098",
    text: "Waterproofer",
  },
  {
    id: "999213",
    text: "Waterside Worker",
  },
  {
    id: "211420",
    text: "Weather Forecaster",
  },
  {
    id: "900099",
    text: "Weaver",
  },
  {
    id: "721213",
    text: "Weaving Machine Operator",
  },
  {
    id: "223118",
    text: "Web Designer/Developer",
  },
  {
    id: "412217",
    text: "Welder",
  },
  {
    id: "412215",
    text: "Welder (qualified)",
  },
  {
    id: "129915",
    text: "Welfare Centre Manager",
  },
  {
    id: "251211",
    text: "Welfare Worker",
  },
  {
    id: "900100",
    text: "Wharf Worker",
  },
  {
    id: "911119",
    text: "Window Cleaner",
  },
  {
    id: "911120",
    text: "Window Cleaner, Outdoors, Above Ground Floor",
  },
  {
    id: "599917",
    text: "Window Dresser",
  },
  {
    id: "900101",
    text: "Window Tinter",
  },
  {
    id: "900102",
    text: "Windscreen Fitter",
  },
  {
    id: "900103",
    text: "Wine Merchant",
  },
  {
    id: "254918",
    text: "Winemaker",
  },
  {
    id: "492111",
    text: "Wood Machinist",
  },
  {
    id: "729411",
    text: "Wood Processing Machine Operator",
  },
  {
    id: "615314",
    text: "Wool Buyer",
  },
  {
    id: "461311",
    text: "Wool Classer",
  },
  {
    id: "253512",
    text: "Writer",
  },
  {
    id: "239120",
    text: "Xray Technician",
  },
  {
    id: "342113",
    text: "Youth Worker",
  },
  {
    id: "211318",
    text: "Zoo Attendant",
  },
  {
    id: "211315",
    text: "Zoologist",
  },
  {
    id: "211316",
    text: "Zoologist (field work)",
  },
];

export default originArray.map((item) => item.text);

export const getIdWithText = (text) => {
  const result = originArray.find((item) => item.text === text);
  return result !== undefined ? result.id : "";
};
