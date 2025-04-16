
import { Issue } from "@/types/issue";
import { IssueCard } from "./IssueCard";

// Sample data - will be replaced with real data later
const sampleIssues: Issue[] = [
  {
    id: "1",
    title: "Large Pothole on Main Street",
    description: "Deep pothole causing vehicle damage near the intersection.",
    location: "123 Main St, Downtown",
    imageUrl: "https://picsum.photos/seed/pothole1/800/600",
    status: "pending",
    createdAt: "2024-04-15",
    category: "Road Damage",
  },
  {
    id: "2",
    title: "Broken Street Light",
    description: "Street light has been out for several days, creating safety concerns.",
    location: "456 Oak Avenue",
    imageUrl: "https://picsum.photos/seed/light2/800/600",
    status: "in-progress",
    createdAt: "2024-04-14",
    category: "Street Lighting",
  },
];

export function IssueFeed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleIssues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
}
