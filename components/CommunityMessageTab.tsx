import { ScrollView } from "react-native";
import CommunityMessage from "./CommunityMessage";

export default function CommunityMessageTab() {
  const messages = [
    {
      message: `Hello, we want to give you StartUp tips!\n\n1. 💡 Validate your idea! Market
      research is key. #StartupTips #EntrepreneurLife\n\n2. 📋 Create a solid
      business plan with clear goals and projections. #BusinessPlan
      #StartupSuccess\n\n3. 👥 Build a strong, diverse team. Your people are your
      greatest asset! #TeamBuilding #StartupJourney\n\n4. 🚀 Develop an MVP. Focus
      on core features and iterate quickly. #ProductDevelopment #LeanStartup\n\n5. 💰 Keep an eye on your finances. Budget wisely and monitor cash flow.
      #FinancialTips #StartupFinance`,
      date: "June 2, 2024",
    },
    {
      message: `Hello, we want to give you StartUp tips!\n\n1. 💡 Validate your idea! Market
      research is key. #StartupTips #EntrepreneurLife\n\n2. 📋 Create a solid
      business plan with clear goals and projections. #BusinessPlan
      #StartupSuccess\n\n3. 👥 Build a strong, diverse team. Your people are your
      greatest asset! #TeamBuilding #StartupJourney\n\n4. 🚀 Develop an MVP. Focus
      on core features and iterate quickly. #ProductDevelopment #LeanStartup\n\n5. 💰 Keep an eye on your finances. Budget wisely and monitor cash flow.
      #FinancialTips #StartupFinance`,
      date: "May 2, 2024",
    },
    {
      message: `Hello, we want to give you StartUp tips!\n\n1. 💡 Validate your idea! Market
      research is key. #StartupTips #EntrepreneurLife\n\n2. 📋 Create a solid
      business plan with clear goals and projections. #BusinessPlan
      #StartupSuccess\n\n3. 👥 Build a strong, diverse team. Your people are your
      greatest asset! #TeamBuilding #StartupJourney\n\n4. 🚀 Develop an MVP. Focus
      on core features and iterate quickly. #ProductDevelopment #LeanStartup\n\n5. 💰 Keep an eye on your finances. Budget wisely and monitor cash flow.
      #FinancialTips #StartupFinance`,
      date: "Apr 2, 2024",
    },
    {
      message: `Hello, we want to give you StartUp tips!\n\n1. 💡 Validate your idea! Market
      research is key. #StartupTips #EntrepreneurLife\n\n2. 📋 Create a solid
      business plan with clear goals and projections. #BusinessPlan
      #StartupSuccess\n\n3. 👥 Build a strong, diverse team. Your people are your
      greatest asset! #TeamBuilding #StartupJourney\n\n4. 🚀 Develop an MVP. Focus
      on core features and iterate quickly. #ProductDevelopment #LeanStartup\n\n5. 💰 Keep an eye on your finances. Budget wisely and monitor cash flow.
      #FinancialTips #StartupFinance`,
      date: "Mar 2, 2024",
    },
  ];

  return (
    <ScrollView>
      {messages.map((data) => (
        <CommunityMessage
          key={data.date}
          message={data.message}
          date={data.date}
        />
      ))}
    </ScrollView>
  );
}
