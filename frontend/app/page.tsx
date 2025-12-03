"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import HighlightSection from "../components/HightlightSection";
import GallerySection from "../components/GallerySection";
import StaySection from "@/components/StaySection";
import ReasonSection from "@/components/ReasonSection";
import InspirationSection from "@/components/InspirationSection";
import WhereToGoSection from "@/components/WheretogoSection";
import TravelTimeSection from "@/components/TraveltimeSection"; 
import FeedbackSection from "@/components/Feedback";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <HighlightSection />
      <GallerySection />
      <StaySection />
      <ReasonSection />
      <InspirationSection />
      <WhereToGoSection />
      <TravelTimeSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
}
