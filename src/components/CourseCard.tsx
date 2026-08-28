import React from 'react';
import { Course } from '../types';
import { useApp } from '../context/AppContext';
import { 
  Building2, 
  GraduationCap, 
  Shield, 
  Users, 
  Gavel, 
  Briefcase, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  CheckCircle2,
  Landmark,
  Scale,
  Compass
} from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { openCourse, userProgress, language, t } = useApp();

  const getIcon = (name?: string) => {
    switch (name) {
      case 'Landmark':
      case 'Building2': return <Landmark className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      case 'Scale':
      case 'Gavel': return <Scale className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      default: return <Briefcase className="w-6 h-6" />;
    }
  };

  // Calculate completed topics in this course
  let completedCount = 0;
  let totalTopics = 0;
  if (course.subjects && Array.isArray(course.subjects)) {
    for (const s of course.subjects) {
      if (s.topics && Array.isArray(s.topics)) {
        totalTopics += s.topics.length;
        for (const t of s.topics) {
          if (userProgress?.completedTopicIds?.includes(t.id)) {
            completedCount++;
          }
        }
      }
    }
  }

  if (totalTopics === 0 && course.totalTopics) {
    totalTopics = course.totalTopics;
  }

  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const title = language === 'te' ? (course.titleTe || course.title) : language === 'hi' ? (course.titleHi || course.title) : course.title;
  const description = language === 'te' ? (course.shortDescTe || course.descriptionTe || course.shortDesc || course.description) : language === 'hi' ? (course.shortDescHi || course.descriptionHi || course.shortDesc || course.description) : (course.shortDesc || course.description);
  const badge = language === 'te' ? (course.badgeTe || course.badge) : language === 'hi' ? (course.badgeHi || course.badge) : course.badge;
  const category = course.examCategory || course.category || 'AP Exam';

  const buttonLabel = language === 'te' ? 'ఓపెన్ (OPEN)' : language === 'hi' ? 'खोलें (OPEN)' : 'OPEN';

  return (
    <div className="flex flex-col justify-between bg-slate-900/90 backdrop-blur-md border border-slate-800/90 hover:border-blue-500/60 rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-600/40 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform shadow-inner">
            {getIcon(course.icon || course.iconName)}
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-end">
            <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 font-bold text-xs">
              {badge}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold">
              {category}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 group-hover:text-blue-300 transition-colors leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Meta Stats */}
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 py-3 border-y border-slate-800/80 mb-4 bg-slate-950/40 rounded-2xl px-3">
          <div className="flex items-center gap-1.5 font-medium">
            <BookOpen className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>{course.subjects?.length || 5} Subjects ({totalTopics} Ch)</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>~{course.durationWeeks ? `${course.durationWeeks} Weeks` : '20 Weeks'}</span>
          </div>
        </div>

        {/* Progress Bar */}
        {progressPercent > 0 && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
              <span className="text-slate-300 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your Progress</span>
              </span>
              <span className="text-emerald-400">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* CTA OPEN Button */}
      <button
        onClick={() => openCourse(course.id)}
        className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 group-hover:shadow-blue-500/40 transition-all cursor-pointer"
      >
        <span>{buttonLabel}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

