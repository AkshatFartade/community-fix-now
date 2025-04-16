
export interface Issue {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  status: 'pending' | 'in-progress' | 'resolved';
  createdAt: string;
  category: string;
}
