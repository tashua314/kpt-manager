export type KPTType = 'keep' | 'problem' | 'try';

export interface KPTEntry {
  id: string;
  type: KPTType;
  content: string;
  userId: string;
  userName: string;
  category: string;
  tags: string[];
  createdAt: string;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: string;
}