import type { ReactNode } from "react";
import facebookLogo from "../assets/facebookLogo.svg";
import featureOne from "../assets/featureOne.png";
import featureThree from "../assets/featureThree.png";
import featureTwo from "../assets/featureTwo.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import stepOne from "../assets/stepOne.png";
import stepThree from "../assets/stepThree.png";
import stepTwo from "../assets/stepTwo.png";
import tiktokLogo from "../assets/tiktokLogo.png";
import xLogo from "../assets/xLogo.png";
import youtubeLogo from "../assets/youtubeLogo.png";

type JourneyStep = {
  image: string;
  text: ReactNode;
};

export const headerNavItems = [
  { label: "Your Journey", href: "#your-journey" },
  { label: "The Advantage", href: "#the-advantage" },
] as const;

export const featureCards = [
  { title: "Global Account", image: featureOne },
  { title: "Market-Leading Rates", image: featureTwo },
  { title: "Fast and Secure", image: featureThree },
] as const;

export const journeySteps: readonly JourneyStep[] = [
  {
    image: stepOne,
    text: (
      <>
        Banking That <span> Grows</span> With You <br />
        <br />
        Financial life doesn't begin at 18, it begins with the first lesson. Our model was built to support every
        stage of the journey - responsibility at the start, autonomy in the middle, and strategy for the future.
        <br />
        <br />
        An account designed to introduce financial education early, with full parental control, real-time
        monitoring, and a strong focus on habit building.
      </>
    ),
  },
  {
    image: stepTwo,
    text: (
      <>
        Independence begins to take shape at 15, with guided limits that build confidence and smart financial
        habits, and when you turn 18, the experience evolves with you, unlocking student benefits and opportunities
        that support your next chapter.
      </>
    ),
  },
  {
    image: stepThree,
    text: (
      <>
        After graduation, the journey continues with more structured investment options, long-term planning, and
        conscious wealth building, turning early financial education into a clear and confident strategy.
      </>
    ),
  },
] as const;

export const benefitCards = [
  {
    title: "Supervised Start",
    description:
      "Start building financial confidence from day one. With parental supervision and guided tools, young users learn how to save, spend, and grow responsibly.",
    items: [
      "Supervised account with parental controls",
      "Digital savings jar for early habits",
      "Gamified financial education",
      "Automatic yield on savings",
    ],
  },
  {
    title: "Independent Growth",
    description:
      "As independence begins, so does responsibility. Teens gain access to their own card, rewards, and smart tools designed to prepare them for university life.",
    items: [
      "Personal debit card",
      "Educational cashback rewards",
      "Accumulated StudyPoints",
      "Savings goals and progress tracking",
    ],
    highlight: true,
  },
  {
    title: "University & Beyond",
    description:
      "When it's time for higher education, your financial journey evolves with you. StudyPoints turn into real advantages - from tuition discounts to learning resources.",
    items: [
      "StudyPoints redeemable for tuition discounts",
      "Book and course rewards",
      "Special student rates",
      "Reduced-interest student credit",
    ],
  },
] as const;

export const footerLinks = ["Legal", "Licenses", "Security", "Careers", "Support", "Status"] as const;

export const socialLinks = [
  { label: "YouTube", icon: youtubeLogo },
  { label: "X (Twitter)", icon: xLogo },
  { label: "Facebook", icon: facebookLogo },
  { label: "LinkedIn", icon: linkedinLogo },
  { label: "TikTok", icon: tiktokLogo },
] as const;
