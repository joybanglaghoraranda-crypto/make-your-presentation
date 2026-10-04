import {
  Country,
  EducationSystem,
  EducationLevel,
  ClassGrade,
  AcademicGroup,
  SubjectCourse,
  Chapter,
  Topic,
  UniversityFaculty,
  UniversityDepartment,
  UniversityCourse,
  BusinessCategory,
  BusinessService,
  ProfessionalCategory,
  ProfessionalService,
  Order,
  RevisionRequest,
  OrderMessage,
  PaymentTransaction,
  PricingRule,
} from "../types/database";

import {
  initialCountries,
  initialEducationSystems,
  initialEducationLevels,
  initialClasses,
  initialAcademicGroups,
  initialSubjects,
  initialChapters,
  initialTopics,
  initialFaculties,
  initialDepartments,
  initialUniversityCourses,
  initialBusinessCategories,
  initialBusinessServices,
  initialProfessionalCategories,
  initialProfessionalServices,
  initialPricingRules,
} from "../data/seed-data";

// In-memory / browser fallback store
class DataRepository {
  private countries: Country[] = [...initialCountries];
  private educationSystems: EducationSystem[] = [...initialEducationSystems];
  private educationLevels: EducationLevel[] = [...initialEducationLevels];
  private classes: ClassGrade[] = [...initialClasses];
  private groups: AcademicGroup[] = [...initialAcademicGroups];
  private subjects: SubjectCourse[] = [...initialSubjects];
  private chapters: Chapter[] = [...initialChapters];
  private topics: Topic[] = [...initialTopics];
  private faculties: UniversityFaculty[] = [...initialFaculties];
  private departments: UniversityDepartment[] = [...initialDepartments];
  private universityCourses: UniversityCourse[] = [...initialUniversityCourses];
  private businessCategories: BusinessCategory[] = [...initialBusinessCategories];
  private businessServices: BusinessService[] = [...initialBusinessServices];
  private professionalCategories: ProfessionalCategory[] = [...initialProfessionalCategories];
  private professionalServices: ProfessionalService[] = [...initialProfessionalServices];
  private pricingRules: PricingRule[] = [...initialPricingRules];

  // Seed sample real orders for instant demo and testing
  private orders: Order[] = [
    {
      id: "ord-1",
      order_number: "MYP-2026-000101",
      customer_name: "Md. Rafiqul Islam",
      customer_email: "rafiqul.teacher@gmail.com",
      customer_phone: "01711223344",
      customer_whatsapp: "01711223344",
      category: "education",
      level_name: "Primary School",
      class_name: "Class 5",
      subject_name: "Elementary Science",
      chapter_name: "Human Body & Healthy Life",
      topic_name: "Human Body Organs & Digestion",
      purpose: "Classroom teaching",
      slide_count: 15,
      language: "Bangla",
      design_style: "Modern Educational",
      content_requirements: "Include clear labeled diagram of human digestive system, simple Bengali terms, and a short 3-question quiz at the end.",
      additional_features: ["Diagrams", "Quiz", "Teacher notes", "Summary"],
      urgency: "standard",
      deadline: "2026-10-15",
      estimated_price: 1150,
      final_price: 1150,
      currency: "BDT",
      status: "in_production",
      payment_status: "paid",
      assigned_staff: "Senior Science Slide Specialist",
      revision_count: 0,
      created_at: "2026-10-01T09:30:00Z",
      updated_at: "2026-10-02T11:00:00Z",
    },
    {
      id: "ord-2",
      order_number: "MYP-2026-000102",
      customer_name: "Tanvir Ahmed",
      customer_email: "tanvir.cse@buet.ac.bd",
      customer_phone: "01822334455",
      customer_whatsapp: "01822334455",
      category: "education",
      faculty_name: "Engineering & Technology",
      department_name: "CSE",
      subject_name: "Database Management Systems",
      topic_name: "Normalization & Functional Dependencies",
      purpose: "Academic presentation",
      slide_count: 20,
      language: "English",
      design_style: "Academic",
      content_requirements: "Needs clear 1NF, 2NF, 3NF, BCNF decomposition examples with tables and ER relation mapping.",
      additional_features: ["Tables", "Diagrams", "References"],
      urgency: "urgent",
      deadline: "2026-10-08",
      estimated_price: 1680,
      final_price: 1680,
      currency: "BDT",
      status: "quality_check",
      payment_status: "paid",
      assigned_staff: "CS Academic Lead",
      revision_count: 0,
      created_at: "2026-10-02T14:15:00Z",
      updated_at: "2026-10-03T16:00:00Z",
    },
    {
      id: "ord-3",
      order_number: "MYP-2026-000103",
      customer_name: "Mufti Abdullah",
      customer_email: "abdullah.ifta@gmail.com",
      customer_phone: "01933445566",
      customer_whatsapp: "01933445566",
      category: "education",
      level_name: "Qawmi Madrasa",
      class_name: "Takhassus (Ifta)",
      subject_name: "Takhassus Fil Ifta",
      topic_name: "Contemporary Fiqh Issues in Digital Finance",
      purpose: "Seminar",
      slide_count: 25,
      language: "Bangla & Arabic",
      design_style: "Islamic Academic",
      content_requirements: "Classical Shariah references from Hidayah, Fatawa Hindiyyah, modern AAOIFI standards, and cryptocurrency rulings.",
      additional_features: ["Citations", "References", "Arabic calligraphy fonts"],
      urgency: "standard",
      deadline: "2026-10-20",
      estimated_price: 1900,
      final_price: 1900,
      currency: "BDT",
      status: "preview_ready",
      payment_status: "paid",
      assigned_staff: "Islamic Studies Editor",
      revision_count: 1,
      preview_url: "https://example.com/preview/myp-103.pdf",
      created_at: "2026-09-28T10:00:00Z",
      updated_at: "2026-10-03T18:20:00Z",
    },
    {
      id: "ord-4",
      order_number: "MYP-2026-000104",
      customer_name: "Nasreen Sultana",
      customer_email: "nasreen@growtech.com.bd",
      customer_phone: "01644556677",
      customer_whatsapp: "01644556677",
      category: "business",
      sub_category: "Startup & Pitch Decks",
      topic_name: "Agritech Seed Stage Investor Pitch Deck",
      purpose: "Investor pitch",
      slide_count: 15,
      language: "English",
      design_style: "Modern Minimal Corporate",
      content_requirements: "Focus on Bangladeshi agricultural supply chain TAM, unit economics, current MRR traction, and expansion milestones.",
      additional_features: ["Charts", "Infographics", "Financial Models"],
      urgency: "standard",
      deadline: "2026-10-18",
      estimated_price: 2400,
      final_price: 2400,
      currency: "BDT",
      status: "price_confirmed",
      payment_status: "awaiting_verification",
      assigned_staff: "Senior Business Analyst",
      revision_count: 0,
      created_at: "2026-10-03T12:00:00Z",
      updated_at: "2026-10-03T13:30:00Z",
    },
  ];

  private revisions: RevisionRequest[] = [
    {
      id: "rev-1",
      order_id: "ord-3",
      revision_number: 1,
      slide_number: "Slide 12",
      issue_description: "Quotation text in Arabic needs diacritics (Harakat) checked.",
      requested_change: "Please adjust the tashkeel on the excerpt from Radd al-Muhtar.",
      status: "accepted",
      admin_response: "Verified and updated by Arabic calligraphy proofreader.",
      created_at: "2026-10-03T17:00:00Z",
    },
  ];

  private messages: OrderMessage[] = [
    {
      id: "msg-1",
      order_id: "ord-1",
      sender_name: "MYP Support Team",
      sender_role: "staff",
      message: "Hello Teacher Rafiqul, we have structured the Class 5 digestive system presentation with high-resolution labels and animations. Production is on track!",
      created_at: "2026-10-02T11:05:00Z",
    },
  ];

  private payments: PaymentTransaction[] = [
    {
      id: "pay-1",
      order_id: "ord-1",
      amount: 1150,
      currency: "BDT",
      method: "bKash",
      transaction_id: "BK8923489123",
      status: "paid",
      created_at: "2026-10-01T10:00:00Z",
    },
    {
      id: "pay-2",
      order_id: "ord-4",
      amount: 2400,
      currency: "BDT",
      method: "Nagad",
      transaction_id: "NG7823901234",
      status: "awaiting_verification",
      created_at: "2026-10-03T13:00:00Z",
    },
  ];

  // Queries
  getCountries(): Country[] {
    return this.countries;
  }

  getEducationSystems(countryId = "c-bd"): EducationSystem[] {
    return this.educationSystems.filter((s) => s.country_id === countryId && s.active);
  }

  getEducationLevels(): EducationLevel[] {
    return this.educationLevels.filter((l) => l.active).sort((a, b) => a.order - b.order);
  }

  getClasses(levelId: string): ClassGrade[] {
    return this.classes.filter((c) => c.education_level_id === levelId && c.active).sort((a, b) => a.order - b.order);
  }

  getGroups(classId: string): AcademicGroup[] {
    return this.groups.filter((g) => g.class_id === classId && g.active);
  }

  getSubjects(parentId: string): SubjectCourse[] {
    return this.subjects.filter((s) => s.parent_id === parentId && s.active).sort((a, b) => a.order - b.order);
  }

  getAllSubjects(): SubjectCourse[] {
    return this.subjects.filter((s) => s.active);
  }

  getChapters(subjectId: string): Chapter[] {
    return this.chapters.filter((c) => c.subject_id === subjectId && c.active).sort((a, b) => a.order - b.order);
  }

  getTopics(chapterId: string): Topic[] {
    return this.topics.filter((t) => t.chapter_id === chapterId && t.active);
  }

  getUniversityFaculties(): UniversityFaculty[] {
    return this.faculties.filter((f) => f.active);
  }

  getUniversityDepartments(facultyId?: string): UniversityDepartment[] {
    if (!facultyId) return this.departments.filter((d) => d.active);
    return this.departments.filter((d) => d.faculty_id === facultyId && d.active);
  }

  getUniversityCourses(departmentId?: string): UniversityCourse[] {
    if (!departmentId) return this.universityCourses.filter((c) => c.active);
    return this.universityCourses.filter((c) => c.department_id === departmentId && c.active);
  }

  getBusinessCategories(): BusinessCategory[] {
    return this.businessCategories;
  }

  getBusinessServices(categoryId?: string): BusinessService[] {
    if (!categoryId) return this.businessServices;
    return this.businessServices.filter((s) => s.category_id === categoryId);
  }

  getProfessionalCategories(): ProfessionalCategory[] {
    return this.professionalCategories;
  }

  getProfessionalServices(categoryId?: string): ProfessionalService[] {
    if (!categoryId) return this.professionalServices;
    return this.professionalServices.filter((s) => s.category_id === categoryId);
  }

  // Global search method
  search(query: string) {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const results: {
      type: "subject" | "topic" | "chapter" | "business" | "professional" | "university";
      title: string;
      titleBn?: string;
      hierarchy: string;
      link: string;
      description?: string;
    }[] = [];

    // Search topics
    for (const top of this.topics) {
      if (top.name.toLowerCase().includes(q) || top.name_bn.toLowerCase().includes(q)) {
        const chap = this.chapters.find((c) => c.id === top.chapter_id);
        const subj = this.subjects.find((s) => s.id === chap?.subject_id);
        results.push({
          type: "topic",
          title: top.name,
          titleBn: top.name_bn,
          hierarchy: `${subj?.name || "Education"} → ${chap?.name || "Chapter"}`,
          link: `/order?topic=${encodeURIComponent(top.name)}&subject=${encodeURIComponent(subj?.name || "")}`,
          description: top.description,
        });
      }
    }

    // Search subjects
    for (const sub of this.subjects) {
      if (sub.name.toLowerCase().includes(q) || sub.name_bn.toLowerCase().includes(q) || sub.code?.toLowerCase().includes(q)) {
        results.push({
          type: "subject",
          title: sub.name,
          titleBn: sub.name_bn,
          hierarchy: `Education Catalogue → ${sub.code || ""}`,
          link: `/order?subject=${encodeURIComponent(sub.name)}`,
          description: sub.description,
        });
      }
    }

    // Search business
    for (const bs of this.businessServices) {
      if (bs.name.toLowerCase().includes(q) || bs.name_bn.toLowerCase().includes(q)) {
        const cat = this.businessCategories.find((c) => c.id === bs.category_id);
        results.push({
          type: "business",
          title: bs.name,
          titleBn: bs.name_bn,
          hierarchy: `Business → ${cat?.name || "Strategy"}`,
          link: `/order?category=business&service=${encodeURIComponent(bs.name)}`,
          description: bs.description,
        });
      }
    }

    // Search professional
    for (const ps of this.professionalServices) {
      if (ps.name.toLowerCase().includes(q) || ps.name_bn.toLowerCase().includes(q)) {
        const cat = this.professionalCategories.find((c) => c.id === ps.category_id);
        results.push({
          type: "professional",
          title: ps.name,
          titleBn: ps.name_bn,
          hierarchy: `Professional → ${cat?.name || "Research"}`,
          link: `/order?category=professional&service=${encodeURIComponent(ps.name)}`,
          description: ps.description,
        });
      }
    }

    // Search university courses
    for (const uc of this.universityCourses) {
      if (uc.name.toLowerCase().includes(q) || uc.code.toLowerCase().includes(q)) {
        const dept = this.departments.find((d) => d.id === uc.department_id);
        results.push({
          type: "university",
          title: uc.name,
          hierarchy: `University → ${dept?.name || "Department"}`,
          link: `/order?category=education&subject=${encodeURIComponent(uc.name)}`,
        });
      }
    }

    return results.slice(0, 12);
  }

  // Dynamic price calculation
  calculatePrice(params: {
    category: string;
    slides: number;
    urgency: "standard" | "urgent" | "custom";
    features: string[];
  }): { estimatedPrice: number; breakdown: { base: number; urgencyFee: number; featuresFee: number } } {
    const rule = this.pricingRules.find((r) => r.category === params.category) || this.pricingRules[0];
    const slideCount = Math.max(params.slides || 10, 5);
    const base = slideCount * rule.base_price_per_slide;

    let urgencyFee = 0;
    if (params.urgency === "urgent") {
      urgencyFee = Math.round(base * (rule.urgent_multiplier - 1));
    }

    let featuresFee = 0;
    if (params.features.includes("Quiz") || params.features.includes("Interactive Questions")) {
      featuresFee += 150;
    }
    if (params.features.includes("Speaker notes") || params.features.includes("Teacher notes")) {
      featuresFee += rule.speaker_notes_fee;
    }
    if (params.features.includes("Infographics") || params.features.includes("Custom graphics")) {
      featuresFee += rule.custom_graphics_fee;
    }

    const estimatedPrice = base + urgencyFee + featuresFee;
    return {
      estimatedPrice,
      breakdown: { base, urgencyFee, featuresFee },
    };
  }

  // Order operations
  getOrders(): Order[] {
    return this.orders.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  }

  getOrderById(id: string): Order | undefined {
    return this.orders.find((o) => o.id === id || o.order_number.toLowerCase() === id.toLowerCase());
  }

  createOrder(data: Partial<Order>): Order {
    const nextNumber = this.orders.length + 101;
    const year = new Date().getFullYear();
    const order_number = `MYP-${year}-${String(nextNumber).padStart(6, "0")}`;

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      order_number,
      customer_name: data.customer_name || "Valued Client",
      customer_email: data.customer_email || "",
      customer_phone: data.customer_phone || "",
      customer_whatsapp: data.customer_whatsapp || data.customer_phone || "",
      category: data.category || "custom",
      sub_category: data.sub_category,
      level_name: data.level_name,
      class_name: data.class_name,
      group_name: data.group_name,
      faculty_name: data.faculty_name,
      department_name: data.department_name,
      subject_name: data.subject_name,
      chapter_name: data.chapter_name,
      topic_name: data.topic_name || "Custom Presentation Topic",
      purpose: data.purpose || "Presentation",
      slide_count: data.slide_count || 15,
      language: data.language || "Bangla",
      design_style: data.design_style || "Modern",
      content_requirements: data.content_requirements || "",
      additional_features: data.additional_features || [],
      urgency: data.urgency || "standard",
      deadline: data.deadline || "Within 3-5 days",
      estimated_price: data.estimated_price || 1200,
      final_price: data.final_price || data.estimated_price || 1200,
      currency: "BDT",
      status: "request_received",
      payment_status: data.payment_status || "pending",
      revision_count: 0,
      reference_files: data.reference_files || [],
      final_delivery_files: data.final_delivery_files || [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    this.orders.unshift(newOrder);
    return newOrder;
  }

  updateOrderStatus(orderId: string, status: Order["status"], internalNote?: string): Order | null {
    const order = this.getOrderById(orderId);
    if (!order) return null;
    order.status = status;
    order.updated_at = new Date().toISOString();
    if (internalNote) {
      order.internal_notes = order.internal_notes
        ? `${order.internal_notes}\n[${new Date().toISOString()}] ${internalNote}`
        : `[${new Date().toISOString()}] ${internalNote}`;
    }
    return order;
  }

  updateOrderPrice(orderId: string, price: number): Order | null {
    const order = this.getOrderById(orderId);
    if (!order) return null;
    order.final_price = price;
    order.status = "price_confirmed";
    order.updated_at = new Date().toISOString();
    return order;
  }

  assignStaff(orderId: string, staffName: string): Order | null {
    const order = this.getOrderById(orderId);
    if (!order) return null;
    order.assigned_staff = staffName;
    order.updated_at = new Date().toISOString();
    return order;
  }

  // Revisions
  getRevisions(orderId: string): RevisionRequest[] {
    return this.revisions.filter((r) => r.order_id === orderId);
  }

  createRevision(orderId: string, data: { slide_number?: string; issue_description: string; requested_change: string }): RevisionRequest {
    const order = this.getOrderById(orderId);
    if (order) {
      order.revision_count += 1;
      order.status = "revision_requested";
      order.updated_at = new Date().toISOString();
    }

    const newRev: RevisionRequest = {
      id: `rev-${Date.now()}`,
      order_id: orderId,
      revision_number: (order?.revision_count || 1),
      slide_number: data.slide_number,
      issue_description: data.issue_description,
      requested_change: data.requested_change,
      status: "pending",
      created_at: new Date().toISOString(),
    };

    this.revisions.push(newRev);
    return newRev;
  }

  // Messages
  getMessages(orderId: string): OrderMessage[] {
    return this.messages.filter((m) => m.order_id === orderId);
  }

  addMessage(orderId: string, sender_name: string, sender_role: "customer" | "staff" | "admin", message: string): OrderMessage {
    const newMsg: OrderMessage = {
      id: `msg-${Date.now()}`,
      order_id: orderId,
      sender_name,
      sender_role,
      message,
      created_at: new Date().toISOString(),
    };
    this.messages.push(newMsg);
    return newMsg;
  }

  // Payments
  getPayments(orderId?: string): PaymentTransaction[] {
    if (!orderId) return this.payments;
    return this.payments.filter((p) => p.order_id === orderId);
  }

  addPayment(data: {
    order_id: string;
    amount: number;
    method: "bKash" | "Nagad" | "Bank Transfer" | "Card" | "Other";
    transaction_id?: string;
  }): PaymentTransaction {
    const newPay: PaymentTransaction = {
      id: `pay-${Date.now()}`,
      order_id: data.order_id,
      amount: data.amount,
      currency: "BDT",
      method: data.method,
      transaction_id: data.transaction_id,
      status: "awaiting_verification",
      created_at: new Date().toISOString(),
    };
    this.payments.unshift(newPay);

    const order = this.getOrderById(data.order_id);
    if (order) {
      order.payment_status = "awaiting_verification";
      order.updated_at = new Date().toISOString();
    }
    return newPay;
  }

  verifyPayment(paymentId: string, status: "paid" | "cancelled"): PaymentTransaction | null {
    const pay = this.payments.find((p) => p.id === paymentId);
    if (!pay) return null;
    pay.status = status;
    const order = this.getOrderById(pay.order_id);
    if (order && status === "paid") {
      order.payment_status = "paid";
      order.status = "payment_received";
      order.updated_at = new Date().toISOString();
    }
    return pay;
  }

  // Curriculum Management (Admin)
  addSubject(subject: Partial<SubjectCourse>): SubjectCourse {
    const newSub: SubjectCourse = {
      id: `sub-${Date.now()}`,
      parent_type: subject.parent_type || "class",
      parent_id: subject.parent_id || "cls-5",
      name: subject.name || "New Subject",
      name_bn: subject.name_bn || subject.name || "নতুন বিষয়",
      code: subject.code,
      description: subject.description,
      subject_type: subject.subject_type || "compulsory",
      active: true,
      order: this.subjects.length + 1,
      category: subject.category || "general",
    };
    this.subjects.push(newSub);
    return newSub;
  }

  addChapter(chapter: Partial<Chapter>): Chapter {
    const newCh: Chapter = {
      id: `ch-${Date.now()}`,
      subject_id: chapter.subject_id || "sub-cls5-sci",
      name: chapter.name || "New Chapter",
      name_bn: chapter.name_bn || chapter.name || "নতুন অধ্যায়",
      description: chapter.description,
      order: this.chapters.length + 1,
      active: true,
    };
    this.chapters.push(newCh);
    return newCh;
  }

  addTopic(topic: Partial<Topic>): Topic {
    const newTop: Topic = {
      id: `top-${Date.now()}`,
      chapter_id: topic.chapter_id || "ch-cls5-sci-humanbody",
      name: topic.name || "New Topic",
      name_bn: topic.name_bn || topic.name || "নতুন টপিক",
      description: topic.description,
      suggested_slides: topic.suggested_slides || 15,
      active: true,
    };
    this.topics.push(newTop);
    return newTop;
  }
}

// Export singleton instance
export const repository = new DataRepository();
