
import { CreateIssueButton } from "@/components/CreateIssueButton";
import { IssueFeed } from "@/components/IssueFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">CivicConnect</h1>
            <CreateIssueButton />
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Community Issues</h2>
          <p className="text-gray-600">Help improve our community by reporting issues that need attention.</p>
        </div>
        <IssueFeed />
      </main>
    </div>
  );
};

export default Index;
