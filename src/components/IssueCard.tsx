
import { Issue } from "@/types/issue";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MapPin, Clock, Tag } from "lucide-react";

interface IssueCardProps {
  issue: Issue;
}

const statusColors = {
  pending: "bg-amber-500",
  "in-progress": "bg-blue-500",
  resolved: "bg-green-500",
};

export function IssueCard({ issue }: IssueCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img
          src={issue.imageUrl}
          alt={issue.title}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold">{issue.title}</h3>
          <Badge className={statusColors[issue.status]}>
            {issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
          </Badge>
        </div>
        <p className="text-gray-600 mb-4">{issue.description}</p>
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{issue.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>{issue.category}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Reported on {new Date(issue.createdAt).toLocaleDateString()}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
