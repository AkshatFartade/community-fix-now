
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CreateIssueButton() {
  return (
    <Button className="gap-2 bg-indigo-600 hover:bg-indigo-700">
      <Plus className="w-4 h-4" />
      Report Issue
    </Button>
  );
}
