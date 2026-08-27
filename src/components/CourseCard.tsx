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
  Star,
  CheckCircle2
} from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { openCourse, userProgress, language, t } = useApp();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'Shield': return <Shield className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Gavel': return <Gavel className="w-6 h-6" />;
      default: return <Briefcase className="w-6 h-6" />;
    }
  };

  // Calculate completed topics in this course
  let completedCount = 0;
  let totalTopics = 0;
  for (const s of course.subjects) {
    totalTopics += s.topics.length;
    for (const t of s.topics) {
      if (userProgress.completedTopicIds.includes(t.id)) {
        completedCount++;
      }
    }
  }

  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const title = language === 'te' ? course.titleTe : language === 'hi' ? course.titleHi : course.title;
  const description = language === 'te' ? course.descriptionTe : language === 'hi' ? course.descriptionHi : course.description;
  const badge = language === 'te' ? course.badgeTe : language === 'hi' ? course.badgeHi : course.badge;

  return (
    <div className="flex flex-col justify-between bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
            {getIcon(course.iconName)}
          </div>
          <span className="px-2.5 py-1 rounded-full bg-blue-950 border border-blue-800/50 text-[11px] font-semibold text-blue-300">
            {badge}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-5 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Meta details */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 mb-4 text-center">
          <div>
            <div className="text-xs text-slate-400">{t('topicsCountLabel')}</div>
            <div className="text-sm font-bold text-slate-200">{course.totalTopics} Topics</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Duration</div>
            <div className="text-sm font-bold text-slate-200">{course.durationHours}h</div>
          </div>
          <div>
            <div className="text-xs text-slate-400">Rating</div>
            <div className="text-sm font-bold text-amber-400 flex items-center justify-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{course.rating}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-400">Preparation Progress</span>
            <span className="font-semibold text-blue-400">{progressPercent}%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-blue-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => openCourse(course.id)}
        className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 active:scale-98 transition-all"
      >
        <span>{t('btnOpenCourse')}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};
