export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  provider?: string;
}

export interface AquacultureExp {
  title: string;
  role: string;
  period: string;
  description: string[];
}

export const educationTimeline: TimelineItem[] = [
  {
    year: "2023 - Present",
    title: "MBA (HR Major, Systems & Operations Minor)",
    institution: "West Bengal State University",
    details: "Currently pursuing, focusing on talent acquisition, analytics, and operations."
  },
  {
    year: "2023",
    title: "Bachelor of Fisheries Science (B.F.Sc.)",
    institution: "The Neotia University",
    details: "OGPA: 7.85 / 10. Focused on aquatic systems and biotechnology."
  },
  {
    year: "2019",
    title: "Higher Secondary",
    institution: "Madhyamgram Boys",
    details: "Science division."
  },
  {
    year: "2017",
    title: "Secondary",
    institution: "Madhyamgram Boys"
  }
];

export const aquacultureExperience: AquacultureExp = {
  title: "Tanushree Shrimp Farm",
  role: "Volunteer Fish Farm Assistant",
  period: "Feb 2021 - Mar 2021",
  description: [
    "Supervised feeding schedules and monitored shrimp health parameters.",
    "Assisted in diagnosing disease outbreaks and recommending preventive treatment measures.",
    "Acquired practical farm, hatchery, and water quality management experience."
  ]
};

export const academicCertifications: CertificationItem[] = [
  { title: "UNIT Attachment of Fishery Students Ready Program" },
  { title: "Innormal Fisheries Management (ICAR-CIFRI)" },
  { title: "Freshwater Aquaculture Practices (ICAR-CIFA)" },
  { title: "Brackishwater Aquaculture Program (ICAR-CIBA)" },
  { title: "Ornamental Fish Culture & Management" },
  { title: "Fish Breeding Course" },
  { title: "Laboratory Animal Handling & Advanced Techniques" }
];
