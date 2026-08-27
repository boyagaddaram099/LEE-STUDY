import { Topic, Question, TopicSection } from '../../types';

export interface TopicDef {
  id: string;
  order: number;
  title: string;
  titleTe: string;
  titleHi: string;
  shortDesc: string;
  shortDescTe: string;
  shortDescHi: string;
  readTimeMinutes: number;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Standard' | 'Foundation';
  highYieldWeightage: string;
  overview: string;
  overviewTe?: string;
  overviewHi?: string;
  sections: TopicSection[];
  quickFacts?: Array<{ label: string; val: string }>;
  quickFactsTe?: Array<{ label: string; val: string }>;
  revisionPoints: string[];
  revisionPointsTe?: string[];
  apSpecificFocus?: string;
  apSpecificFocusTe?: string;
  questions: Question[];
}

export function buildTopic(
  courseId: string,
  subjectId: string,
  def: TopicDef
): Topic {
  return {
    id: def.id,
    subjectId,
    courseId,
    order: def.order,
    title: def.title,
    titleTe: def.titleTe,
    titleHi: def.titleHi,
    shortDesc: def.shortDesc,
    shortDescTe: def.shortDescTe,
    shortDescHi: def.shortDescHi,
    readTimeMinutes: def.readTimeMinutes || 10,
    difficulty: def.difficulty || 'Standard',
    highYieldWeightage: def.highYieldWeightage || 'High Yield',
    content: {
      overview: def.overview,
      overviewTe: def.overviewTe,
      overviewHi: def.overviewHi,
      sections: def.sections,
      quickFacts: def.quickFacts,
      quickFactsTe: def.quickFactsTe,
      revisionPoints: def.revisionPoints,
      revisionPointsTe: def.revisionPointsTe,
      apSpecificFocus: def.apSpecificFocus,
      apSpecificFocusTe: def.apSpecificFocusTe,
    },
    questions: def.questions.map((q, idx) => ({
      ...q,
      id: q.id || `${def.id}-q${idx + 1}`,
      topicId: def.id,
      difficulty: q.difficulty || 'medium',
    })),
  };
}
