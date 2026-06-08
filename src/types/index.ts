export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: string;
  codeExample?: string;
  output?: string;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  levelLabel: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
  tags: string[];
  prerequisites: string[];
  objectives: string[];
  targetAudience: string[];
  chapters: Chapter[];
  dataset?: {
    name: string;
    description: string;
    size: string;
    format: string;
    sampleData: string;
  };
  caseStudy?: {
    title: string;
    problem: string;
    solution: string;
    results: string;
    visualization: string;
  };
}

export interface Exercise {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  difficultyLabel: string;
  description: string;
  starterCode: string;
  expectedOutput: string;
  hints: string[];
  solution: string;
  relatedCourseId?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  rarityLabel: string;
  condition: string;
}