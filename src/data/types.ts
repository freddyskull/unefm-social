export type SocialIconName = 
  | 'instagram' 
  | 'facebook' 
  | 'twitter'
  | 'youtube'
  | 'radio'
  | 'academic' 
  | 'student' 
  | 'globe' 
  | 'link'
  | 'book'
  | 'atom'
  | 'headset';

export type CategoryType = 'all' | 'social' | 'academic' | 'student' | 'media';

export interface SocialLink {
  icon: SocialIconName;
  name: string;
  handle: string;
  url: string;
  description: string;
  category: CategoryType;
  badge?: string;
  color?: string;
}

export interface AcademicArea {
  id: string;
  name: string;
  code: string;
  description: string;
  icon: string;
  careers: string[];
}