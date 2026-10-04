import { repository } from "../lib/db/repository";
import { siteConfig, buildWhatsAppLink } from "../lib/config/site";
import { translations } from "../lib/i18n/translations";

console.log("=================================================");
console.log("MAKE YOUR PRESENTATION (MYP) — AUTOMATED FLOW TESTS");
console.log("=================================================");

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passed++;
  } else {
    console.error(`[FAIL] ${testName}`);
    failed++;
  }
}

// ------------------------------------------------------------------
// Test 1 — School: Home -> Education -> Primary -> Class 5 -> Science -> Human Body -> Order -> 15 slides -> Bangla -> Submit
// ------------------------------------------------------------------
console.log("\n--- TEST 1: School Order Flow ---");
const primaryLevels = repository.getEducationLevels().filter((l) => l.category === "primary");
assert(primaryLevels.length > 0, "Primary education level exists in catalogue");

const class5 = repository.getClasses("lvl-primary").find((c) => c.slug === "class-5");
assert(!!class5, "Class 5 exists under Primary School");

const sciSub = repository.getSubjects("cls-5").find((s) => s.code === "SCI-5");
assert(!!sciSub, "Class 5 Elementary Science subject exists");

const humanBodyChap = repository.getChapters(sciSub!.id).find((c) => c.id.includes("humanbody"));
assert(!!humanBodyChap, "Human Body chapter exists under Class 5 Science");

const humanBodyTopic = repository.getTopics(humanBodyChap!.id)[0];
assert(!!humanBodyTopic, "Human Body organs topic exists");

const schoolOrder = repository.createOrder({
  customer_name: "Md. Rafiqul Islam",
  customer_phone: "01711223344",
  customer_whatsapp: "01711223344",
  category: "education",
  level_name: "Primary School",
  class_name: "Class 5",
  subject_name: sciSub!.name,
  topic_name: humanBodyTopic.name,
  slide_count: 15,
  language: "Bangla",
  design_style: "Modern Educational",
});
assert(schoolOrder.order_number.startsWith("MYP-"), "School order generated human-readable Order ID");
assert(schoolOrder.slide_count === 15, "Slide count is 15");
assert(schoolOrder.language === "Bangla", "Language is Bangla");

const waLink1 = buildWhatsAppLink({
  orderId: schoolOrder.order_number,
  category: schoolOrder.category,
  className: schoolOrder.class_name,
  subject: schoolOrder.subject_name,
  topic: schoolOrder.topic_name,
  slides: schoolOrder.slide_count,
  language: schoolOrder.language,
});
assert(waLink1.includes("01410967505") && waLink1.includes("Human%20Body"), "WhatsApp link generated with order context");

// ------------------------------------------------------------------
// Test 2 — Madrasa: Home -> Madrasa -> Qawmi -> Takhassus -> Ifta -> Custom Topic -> Order
// ------------------------------------------------------------------
console.log("\n--- TEST 2: Madrasa Qawmi Takhassus Flow ---");
const qawmiLevel = repository.getEducationLevels().find((l) => l.category === "madrasa_qawmi");
assert(!!qawmiLevel, "Qawmi Madrasa level exists");

const takhassusClass = repository.getClasses(qawmiLevel!.id).find((c) => c.slug === "takhassus");
assert(!!takhassusClass, "Takhassus (Ifta) class exists");

const iftaSub = repository.getSubjects("cls-qawmi-takhassus").find((s) => s.code === "IFTA-01");
assert(!!iftaSub, "Takhassus Fil Ifta subject exists");

const madrasaOrder = repository.createOrder({
  customer_name: "Mufti Abdullah",
  customer_phone: "01933445566",
  category: "education",
  level_name: "Qawmi Madrasa",
  class_name: "Takhassus (Ifta)",
  subject_name: iftaSub!.name,
  topic_name: "Contemporary Fiqh Issues in Digital Finance",
  slide_count: 25,
  language: "Bangla & Arabic",
  design_style: "Islamic Academic",
});
assert(madrasaOrder.status === "request_received", "Madrasa order initialized at request_received");
assert(madrasaOrder.slide_count === 25, "Slide count is 25 slides");

// ------------------------------------------------------------------
// Test 3 — University: Home -> University -> Engineering -> CSE -> Database Systems -> Topic -> Order
// ------------------------------------------------------------------
console.log("\n--- TEST 3: University Engineering Flow ---");
const engFac = repository.getUniversityFaculties().find((f) => f.slug === "engineering");
assert(!!engFac, "Faculty of Engineering & Technology exists");

const cseDept = repository.getUniversityDepartments(engFac!.id).find((d) => d.slug === "cse");
assert(!!cseDept, "Department of CSE exists");

const dbCourse = repository.getUniversityCourses(cseDept!.id).find((c) => c.code === "CSE-301");
assert(!!dbCourse, "Database Management Systems course exists");

const uniOrder = repository.createOrder({
  customer_name: "Tanvir Ahmed",
  customer_phone: "01822334455",
  category: "education",
  faculty_name: engFac!.name,
  department_name: cseDept!.name,
  subject_name: dbCourse!.name,
  topic_name: "Normalization & Functional Dependencies",
  slide_count: 20,
  language: "English",
  design_style: "Academic & Research",
});
assert(!!uniOrder.subject_name?.includes("Database"), "University course correctly mapped");

// ------------------------------------------------------------------
// Test 4 — Business: Home -> Business -> Marketing -> Marketing Plan -> Order
// ------------------------------------------------------------------
console.log("\n--- TEST 4: Business Marketing Presentation Flow ---");
const mktCat = repository.getBusinessCategories().find((c) => c.slug === "marketing");
assert(!!mktCat, "Business Marketing category exists");

const mktSrv = repository.getBusinessServices(mktCat!.id)[0];
assert(!!mktSrv, "Marketing service strategy exists");

const bizOrder = repository.createOrder({
  customer_name: "Nasreen Sultana",
  customer_phone: "01644556677",
  category: "business",
  sub_category: mktCat!.name,
  topic_name: mktSrv.name,
  slide_count: 18,
  language: "English",
  design_style: "Minimal Corporate",
});
assert(bizOrder.category === "business", "Business order categorized");

// ------------------------------------------------------------------
// Test 5 — Custom: Home -> Custom -> Write requirements -> Upload file -> Submit
// ------------------------------------------------------------------
console.log("\n--- TEST 5: Custom Freeform Request Flow ---");
const customOrder = repository.createOrder({
  customer_name: "Farhan Hossain",
  customer_phone: "01511223344",
  category: "custom",
  topic_name: "Renewable Solar Microgrid in Rural Bangladesh",
  content_requirements: "I need 20 slides in Bangla with diagrams, economic cost-benefit analysis, and battery storage models.",
  slide_count: 20,
  language: "Bangla",
  reference_files: [{ name: "solar_feasibility.pdf", url: "#", size: "4.5 MB" }],
});
assert(customOrder.category === "custom", "Freeform custom request submitted successfully");
assert(customOrder.reference_files!.length === 1, "Uploaded file metadata attached to order");

// ------------------------------------------------------------------
// Test 6 — Search: Search “Photosynthesis” -> Search result must lead to relevant subject/topic
// ------------------------------------------------------------------
console.log("\n--- TEST 6: Search Engine Query ---");
const searchResults = repository.search("Photosynthesis");
assert(searchResults.length > 0, "Search for 'Photosynthesis' returns results");
assert(searchResults.some((r) => r.title.includes("Photosynthesis")), "Result contains Photosynthesis topic");

const searchResultsBangla = repository.search("পদার্থবিজ্ঞান");
assert(searchResultsBangla.length > 0, "Search in Bengali 'পদার্থবিজ্ঞান' returns results");

// ------------------------------------------------------------------
// Test 7 — Arabic & RTL Multi-language Architecture
// ------------------------------------------------------------------
console.log("\n--- TEST 7: Multilingual & RTL Support ---");
assert(translations.ar.siteName === "Make Your Presentation", "Arabic dictionary loaded");
assert(translations.ar.tagline.includes("موضوعك"), "Arabic tagline is localized");
assert(translations.bn.tagline.includes("আপনার বিষয়"), "Bengali default tagline is localized");
assert(translations.ru.tagline.includes("Ваша тема"), "Russian tagline is localized");
assert(translations.ja.tagline.includes("あなたのテーマ"), "Japanese tagline is localized");
assert(translations.zh.tagline.includes("您的主题"), "Chinese tagline is localized");

// ------------------------------------------------------------------
// Test 8 — Order Lifecycle & Revisions
// ------------------------------------------------------------------
console.log("\n--- TEST 8: Order Lifecycle & Revision State Transitions ---");
const testOrd = repository.getOrders()[0];
repository.updateOrderStatus(testOrd.id, "preview_ready");
assert(repository.getOrderById(testOrd.id)?.status === "preview_ready", "Status transitioned to preview_ready");

const rev = repository.createRevision(testOrd.id, {
  slide_number: "Slide 3",
  issue_description: "Chart needs percentage labels",
  requested_change: "Add 25% and 75% labels to pie slices",
});
assert(rev.status === "pending", "Revision requested with pending status");
assert(repository.getOrderById(testOrd.id)?.revision_count! > 0, "Order revision count incremented");

console.log("\n=================================================");
console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`);
console.log("=================================================");

if (failed > 0) {
  process.exit(1);
}
