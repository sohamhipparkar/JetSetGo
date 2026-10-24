// JetSetGo knowledge base for the chatbot.
// Everything here is taken from the content already shown on the website's pages.
// If you change a page (prices, phone numbers, policies...), update it here too
// so the chatbot keeps giving the same answers as the site.

export const SITE_KNOWLEDGE = `
# JetSetGo — website knowledge

## About
- JetSetGo is an airline / travel booking platform, operating since 2008. Started as a small regional carrier, now global.
- Fleet: 150+ aircraft. 200+ destinations. 15M+ passengers yearly. 12K+ team members.
- Mission: connect people and cultures through safe, sustainable, exceptional air travel. Goal: net-zero carbon emissions by 2050.
- Core values: Safety First, People Focused, Global Perspective, Excellence, Social Responsibility, Continuous Innovation.
- This website was built as a student project at MIT Art Design & Technology University (Dept. of Computer Science Engineering), guided by Prof. Rahul More. Team: Soham Hipparkar, Tanisha Sayil, Tanishq Sayil, Chirag Gandhi.

## Pages of the website (use these exact paths when linking)
- /home — Dashboard: airline overview (flight status, crew, revenue routes, maintenance).
- /flights — Search and compare flights.
- /passengers — Passenger details, payment and booking review (the booking checkout).
- /confirmation — Booking confirmation page with e-ticket.
- /bookings — "Your Bookings": view, manage, cancel bookings, download boarding pass.
- /reports — Analytics and reports.
- /crew — Crew management.
- /maintenance — Aircraft maintenance.
- /europe, /asia, /america, /africa — Destination pages with deals.
- /about, /careers, /partners, /press — Company pages.
- /help — Help Center. /faq — FAQs. /guide — Booking Guide. /contact — Contact Us.
- /privacy — Privacy Policy. /terms — Terms of Service.
- / — Login page.

## Login (demo app)
- The login page has a "use test credentials" option that fills in the demo account. Demo login: admin@jetsetgo.com / JetSetGo@123.

## Flights currently listed on /flights (New York NYC → London LDN, departure Apr 10, 2025, return Apr 17, 2025)
- FL1234 — JetSetGo Airways — 08:45 → 14:20 — 5h 35m — nonstop — Boeing 787 — $649 — 14 seats left.
- FL5678 — SkyWing Airlines — 10:30 → 16:45 — 6h 15m — 1 stop — Airbus A350 — $489 — 8 seats left.
- FL9012 — GlobalFly — 14:15 → 20:05 — 5h 50m — nonstop — Boeing 777 — $729 — 22 seats left.
- FL3456 — TransAtlantic — 16:40 → 05:10 — 6h 30m — 1 stop — Airbus A330 — $529 — 5 seats left.
- Cheapest: FL5678 ($489). Cheapest nonstop: FL1234 ($649). Flights can be sorted by price, duration or departure, and filtered to nonstop only. Price filters: under $500, $500–$700, $700+.
- Clicking a flight's price takes the user to /passengers to book it.

## Sample bookings shown on /bookings
- BK7823 — JetSetGo Airways FL1234 — New York → London — Apr 10, 2025 (return Apr 17, FL5433) — 2 passengers — $649 — Confirmed.
- BK4562 — SkyWing Airlines FL5678 — New York → Paris — May 15, 2025 (return May 22, FL8976) — 1 passenger — $729 — Confirmed.
- BK2290 — GlobalFly FL9012 — New York → Tokyo — Mar 5, 2025 (return Mar 15, FL9876) — 2 passengers — $1249 — Completed.
- BK9981 — TransAtlantic FL3456 — New York → Berlin — Feb 18, 2025 (return Feb 25, FL6543) — 3 passengers — $689 — Cancelled.
- Booking details include: Economy Class, checked baggage 1 × 23kg, seats (outbound 12A, 12B; return 15C, 15D), in-flight meals, travel insurance.
- On /bookings users can search by destination, flight number or booking ID, filter by status/airline/date, Manage, Cancel, Download boarding pass.

## How to book (from /guide)
1. Search flights (departure, destination, dates, passengers). Tip: use flexible dates for best fares.
2. Select a flight (compare times, layovers, total duration).
3. Enter passenger details on /passengers (title, first/last name, date of birth, nationality, passport number and expiry). Names must match the passport exactly. Adults and children (2–11) can be added.
4. Add services: Premium Seat (extra legroom, priority boarding) +$45, Travel Insurance (trip cancellation & medical) +$35, Extra Baggage (another 23kg checked bag) +$60. A promotion code can be applied.
5. Review & pay (credit card + billing address). All prices are in USD.
6. Confirmation: booking confirmation and e-ticket by email; options to download the e-ticket and add to calendar.
- Ways to book: website, mobile app (has mobile-only deals), 24/7 customer service.
- Average booking time ~3 minutes. Secure payment.
- Payment methods: Visa, Mastercard, American Express, Apple Pay, Google Pay, bank transfer, JetSetGo gift cards; some routes offer instalment plans.

## Fare types
- Economy — most affordable, essential services. Typically 1 carry-on (7kg); checked bags can be purchased.
- Economy Plus — extra legroom, priority boarding, more flexible changes/cancellation, includes 1 checked bag (23kg).
- Business — lounge access, gourmet meals, fully reclining seats, multiple checked bags.
- First Class — personalised service and exclusive amenities, multiple checked bags.

## Policies & FAQs
- Cancellation: depends on fare type and how close to departure. Cancelling at least 24 hours before departure is usually eligible for a refund or travel credit, minus a cancellation fee. Economy Basic fares are non-refundable but can be changed for a fee plus fare difference.
- Changing a flight/date: possible via Manage Booking (/bookings) or customer service; change fee plus fare difference. Economy Plus, Business and First have lower or waived change fees.
- Check-in: online via website/app — the FAQ says from 24 hours before departure; the Help Center check-in guide says from 48 hours before, until 1 hour before domestic / 2 hours before international flights. Needs booking reference and primary passenger's last name. Airport kiosks/counters also available.
- Arrive at the airport: 2 hours before domestic, 3 hours before international flights.
- Baggage: Economy usually 1 checked bag up to 23kg + 1 carry-on up to 7kg (international). Domestic flights: 1 carry-on up to 7kg and 1 checked bag up to 15kg. Business/First get more. Extra/overweight bags cost extra. Booking checkout shows "Checked 1 × 23kg, Cabin 1 × 7kg per person".
- Seat selection: during booking or later via Manage Booking. Standard seats free; premium seats (extra legroom, exit rows) cost extra.
- Special meals: vegetarian, vegan, gluten-free, kosher, halal, child meals. Request at least 24 hours before the flight via Manage Booking ("Manage Meals").
- Special assistance (wheelchair, visual/hearing impairment): request during booking or at least 48 hours before the flight. Special Assistance team: +91 800 555 0123.
- Pets: small pets in cabin in an approved carrier under the seat; larger animals in temperature-controlled cargo hold; service animals allowed in cabin. Notify Special Services at least 48 hours before departure.
- Loyalty: SkyMiles — earned on every flight with JetSetGo and partners; redeem for flights, upgrades, extra baggage, partner services.
- Entertainment: personal screens with movies, TV, music, games; free headphones on long-haul; Wi-Fi on most aircraft for a fee (free for Business and First).
- Prohibited in checked baggage: flammables, explosives, compressed gases, corrosives, poisons, magnetic materials, some lithium-battery devices. Keep valuables, medication and documents in carry-on.
- Missed flight / refunds: see the Help Center (/help) or contact support.
- Privacy: data is collected only to process bookings and support; users can request access, correction or deletion. privacy@jetsetgo.com. Typical response 48 hours.

## Booking tips (from /guide)
- Book 6–8 weeks ahead for the cheapest fares. Tuesday/Wednesday and early-morning or late-evening flights are often cheaper. Check nearby airports. Set price alerts. Join the loyalty programme. Travel carry-on only to avoid bag fees.

## Destinations and starting fares
Europe (/europe) — best time Apr–Oct, direct flights ~3h 25m. Deal: European Summer Special — 20% off flights, free cancellation, exclusive tours.
- Paris, France $514 (Cultural) · Santorini, Greece $591 (Island) · Barcelona, Spain $449 (Beach) · Venice, Italy $552 (Historical) · Amsterdam, Netherlands $488 (Urban) · Prague, Czech Republic $423 (Medieval)
Asia (/asia) — best time Nov–Apr, direct flights ~9h 45m. Deal: Asian Winter Escape — 25% off flights, free cancellation, cultural tours.
- Tokyo, Japan $678 (Urban) · Bali, Indonesia $612 (Tropical) · Bangkok, Thailand $543 (Cultural) · Kyoto, Japan $702 (Historical) · Singapore $594 (Modern) · Hoi An, Vietnam $487 (Heritage)
Americas (/america) — best time May–Oct, direct flights ~5h 30m. Deal: Family Adventure Package — 15% off for families, free cancellation, adventure tours.
- New York, USA $349 (Urban) · Rio de Janeiro, Brazil $598 (Beach) · Cancun, Mexico $428 (Resort) · Buenos Aires, Argentina $632 (Cultural) · Vancouver, Canada $389 (Outdoor) · Costa Rica $479 (Eco)
Africa (/africa) — best time Apr–Nov, direct flights ~8h 45m. Deal: Safari Adventure Package — 20% off safari packages, free cancellation, expert local guides.
- Cape Town, South Africa $649 (Scenic) · Marrakech, Morocco $498 (Cultural) · Zanzibar, Tanzania $528 (Beach) · Cairo, Egypt $432 (Historical) · Serengeti, Tanzania $789 (Safari) · Victoria Falls, Zimbabwe/Zambia $579 (Adventure)

## Contact (from /contact)
- 24/7 customer support: +91 800 123 4567. Corporate inquiries: +91 800 987 6543.
- Email: support@jetsetgo.com (replies within 24 hours); business@jetsetgo.com.
- Headquarters in Mumbai. Offices (Mon–Fri 9:00 AM–6:00 PM):
  - Mumbai — 240 Skyline Tower, Marine Drive, Mumbai 400001 — +91 22 1234 5678 — mumbai@jetsetgo.com
  - Delhi — 75 Airport Plaza, IGI Airport, New Delhi 110037 — +91 11 8765 4321 — delhi@jetsetgo.com
  - Bangalore — 421 Tech Park, Electronic City, Bangalore 560100 — +91 80 2468 1357 — bangalore@jetsetgo.com
  - Pune — 158 Koregaon Park, Pune 411001 — +91 20 1357 2468 — pune@jetsetgo.com

## Careers (/careers)
- 12K+ employees, 45+ countries, 70+ open positions. Areas: Flight Operations, Customer Experience, Engineering & Maintenance, Technology & Digital, Corporate Functions, Graduate Programs.
- Example openings: Senior Pilot – Boeing 787 (Mumbai), Cabin Crew Manager (Delhi), Customer Service Representative (Pune), Aircraft Maintenance Technician (Bengaluru), Senior React Developer (Remote), Finance Analyst, Engineering Graduate Program (multiple locations), UX/UI Designer (Hyderabad).
- Benefits: travel benefits, health & wellness, learning & development, work-life balance, recognition, global opportunities.

## Partners (/partners)
- 300+ partners in 50+ countries: SkyTeam Airways (airline), Global Hospitality Group and Horizon Hotels (hotels), WorldPay Financial (payments), TechFusion Systems (technology), SecureTravel Solutions (security), Pacific Cruise Lines (cruises), Corporate Travel Management (business travel).

## Dashboard sample data (/home)
- Total passengers 42,891 (+12.3%), average load factor 87.4%, on-time performance 84.2%, total revenue $24.6M.
- Today's flights: JG1024 New York→London 09:45, JG3872 Dubai→Singapore 10:15, JG2047 Paris→Tokyo 11:30, JG8734 Sydney→Los Angeles 14:00.
`;

export function buildSystemPrompt(currentPage) {
  return `You are "Jet", the friendly virtual travel assistant on the JetSetGo website.

Your job: help visitors with flights, bookings, baggage, check-in, policies, destinations, deals and contact details — using the JetSetGo knowledge below.

Rules:
- Answer from the knowledge below whenever it covers the question. Quote exact prices, flight numbers, phone numbers and emails from it; never invent new ones.
- If the knowledge doesn't cover something JetSetGo-specific (e.g. a live flight status, a route that isn't listed, a real refund), say you don't have that information and point the user to customer support (+91 800 123 4567, support@jetsetgo.com) or the right page.
- You may give general travel advice (packing, visas in general, what to see in a city) but make clear it's general advice.
- You cannot actually make, change or cancel bookings yourself. Explain the steps and link the right page.
- When pointing to a page, use a markdown link with the site path, e.g. [Flights](/flights) or [Contact Us](/contact).
- Keep answers short and friendly: 1–4 sentences or a short bullet list. Use **bold** for key facts. Ask a follow-up question if the request is unclear.
- Reply in the same language the user writes in.
- Politely decline topics unrelated to travel or JetSetGo.

The user is currently on page: ${currentPage || "unknown"}

${SITE_KNOWLEDGE}`;
}
