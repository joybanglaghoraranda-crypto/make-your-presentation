import { Hero } from "@/components/home/Hero";
import { GlobalSearch } from "@/components/home/GlobalSearch";
import { CategoryCards } from "@/components/home/CategoryCards";
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

      {/* 3. Categories (Education, Business, Professional) */}
      <CategoryCards />

      {/* 4. How It Works (4 Simple Steps) */}
      <HowItWorks />

      {/* 5. Why Choose Us (4 Core Highlights) */}
      <WhyChooseUs />

      {/* 6. FAQ Section (Top 4 Questions) */}
      <FAQSection />

      {/* 7. Final Strategic CTA */}
      <FinalCTA />
    </div>
  );
}
