
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CreateIssueForm } from "./CreateIssueForm";

export function CreateIssueButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className="gap-2 bg-indigo-600 hover:bg-indigo-700"
      >
        <Plus className="w-4 h-4" />
        Report Issue
      </Button>
      <CreateIssueForm open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
