import { Hero } from "@/components/home/Hero";
import { GlobalSearch } from "@/components/home/GlobalSearch";
import { CategoryCards } from "@/components/home/CategoryCards";
import { EducationPopular } from "@/components/home/EducationPopular";
import { TargetAudiences } from "@/components/home/TargetAudiences";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Global Search */}
      <GlobalSearch />

      {/* 3. Main Category Cards (Education, Business, Professional, Custom) */}
      <CategoryCards />

      {/* 4. Popular Education Subjects */}
      <EducationPopular />

      {/* 5. Teachers, Students & Businesses Sections */}
      <TargetAudiences />

      {/* 6. How It Works (5 Steps) */}
      <HowItWorks />

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. FAQ Section */}
      <FAQSection />

      {/* 9. Final Strategic CTA */}
      <FinalCTA />
    </div>
  );
}
