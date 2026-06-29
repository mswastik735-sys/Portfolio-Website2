export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  logoBg: string; // for inline style or styling class
}

export const officialExperiences: ExperienceItem[] = [
  {
    company: "Innovel Energy",
    role: "Human Resource Intern (Talent Acquisition & HR Operations)",
    period: "Oct 2025 - Dec 2025",
    logoBg: "bg-blue-600",
    description: [
      "Managed end-to-end recruitment lifecycle for technical & non-technical roles.",
      "Developed 30+ job descriptions and implemented recruitment tracking systems.",
      "Conducted interviews for 17 PGDM candidates, resulting in 8 intern selections."
    ]
  },
  {
    company: "Neiro Company",
    role: "Data Entry Operator (Part-Time)",
    period: "2023 - 2024",
    logoBg: "bg-teal-600",
    description: [
      "Entered, verified, and managed client records with high accuracy.",
      "Streamlined reporting by organizing data into structured forms."
    ]
  }
];
