// Product data for the Products page
export const products = [
  {
    id: 1,
    name: "QuizMaster Pro",
    desc: "Create, manage, and analyze interactive quizzes with our AI-powered assessment platform. Perfect for educators and trainers.",
    url: "https://quizoq.netlify.app",
    iconType: "quiz",
    category: "Education"
  },
  {
    id: 2,
    name: "Chatgpt Prompt Templates",
    url: "/assets/chatgpt_prompts.pdf",
    iconType: "ai",
    category: "Productivity"
  }
  // {
  //   id: 2,
  //   name: "EmailFlow",
  //   desc: "Automate your email marketing campaigns with our intuitive platform. Design, schedule, and track performance in one place.",
  //   url: "https://emailflow.weegen.com",
  //   iconType: "email",
  //   category: "Marketing"
  // },
  // {
  //   id: 3,
  //   name: "Analytics360",
  //   desc: "Comprehensive business intelligence dashboard with real-time data visualization and custom reporting tools.",
  //   url: "https://analytics360.weegen.com",
  //   iconType: "analytics",
  //   category: "Analytics"
  // },
  // {
  //   id: 4,
  //   name: "TaskFlow",
  //   desc: "Streamline team collaboration with our project management solution. Track tasks, deadlines, and team productivity.",
  //   url: "https://taskflow.weegen.com",
  //   iconType: "productivity",
  //   category: "Productivity"
  // },
  // {
  //   id: 5,
  //   name: "CloudSecure",
  //   desc: "Enterprise-grade security solution to protect your cloud infrastructure and sensitive business data.",
  //   url: "https://cloudsecure.weegen.com",
  //   iconType: "security",
  //   category: "Security"
  // },
  // {
  //   id: 6,
  //   name: "DataInsight",
  //   desc: "Transform raw data into actionable insights with our advanced data visualization and analysis tools.",
  //   url: "https://datainsight.weegen.com",
  //   iconType: "chart",
  //   category: "Analytics"
  // },
  // {
  //   id: 7,
  //   name: "ChatConnect",
  //   desc: "Seamless team communication platform with channels, direct messaging, and file sharing capabilities.",
  //   url: "https://chatconnect.weegen.com",
  //   iconType: "chat",
  //   category: "Communication"
  // },
  // {
  //   id: 8,
  //   name: "StoragePro",
  //   desc: "Secure and scalable cloud storage solution with advanced sharing and collaboration features.",
  //   url: "https://storagepro.weegen.com",
  //   iconType: "storage",
  //   category: "Storage"
  // }
];

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Get all unique categories
export const categories = [...new Set(products.map(product => product.category))];

// // SVG icons for services (used in Services page)
// export const serviceIcons = {
//   ai: (
//     <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#e3f6f5"/><path d="M14 27c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#2ec4b6" strokeWidth="2.2" strokeLinecap="round"/><circle cx="20" cy="17" r="4" fill="#4f8cff"/></svg>
//   ),
//   web: (
//     <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#e3f6f5"/><rect x="12" y="15" width="16" height="10" rx="2" fill="#4f8cff"/><rect x="16" y="19" width="8" height="2" rx="1" fill="#fff"/></svg>
//   ),
//   mobile: (
//     <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#e3f6f5"/><rect x="15" y="12" width="10" height="16" rx="2" fill="#2ec4b6"/><rect x="18" y="25" width="4" height="2" rx="1" fill="#fff"/></svg>
//   ),
//   desktop: (
//     <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#e3f6f5"/><rect x="13" y="15" width="14" height="10" rx="2" fill="#4f8cff"/><rect x="17" y="26" width="6" height="2" rx="1" fill="#2ec4b6"/></svg>
//   ),
//   cloud: (
//     <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#e3f6f5"/><ellipse cx="20" cy="24" rx="8" ry="5" fill="#2ec4b6"/><ellipse cx="16" cy="22" rx="4" ry="3" fill="#4f8cff"/></svg>
//   ),
//   email: (
//     <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#e3f6f5"/><path d="M14 27c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#2ec4b6" strokeWidth="2.2" strokeLinecap="round"/><circle cx="20" cy="17" r="4" fill="#4f8cff"/></svg>
//   ),
//   productivity: (
//     <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#e3f6f5"/><rect x="12" y="15" width="16" height="10" rx="2" fill="#4f8cff"/><rect x="16" y="19" width="8" height="2" rx="1" fill="#fff"/></svg>
//   ),
//   security: (
//     <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#e3f6f5"/><ellipse cx="20" cy="24" rx="8" ry="5" fill="#2ec4b6"/><ellipse cx="16" cy="22" rx="4" ry="3" fill="#4f8cff"/></svg>
//   ),
//   chart: (
//     <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#e3f6f5"/><path d="M14 27c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#2ec4b6" strokeWidth="2.2" strokeLinecap="round"/><circle cx="20" cy="17" r="4" fill="#4f8cff"/></svg>
//   ),
//   chat: (
//     <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#e3f6f5"/><rect x="15" y="12" width="10" height="16" rx="2" fill="#2ec4b6"/><rect x="18" y="25" width="4" height="2" rx="1" fill="#fff"/></svg>
//   ),
//   storage: (
//     <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#e3f6f5"/><rect x="13" y="15" width="14" height="10" rx="2" fill="#4f8cff"/><rect x="17" y="26" width="6" height="2" rx="1" fill="#2ec4b6"/></svg>
//   )
// };
