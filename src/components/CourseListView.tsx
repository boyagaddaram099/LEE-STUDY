import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CourseCard } from './CourseCard';
import { ExamCategory } from '../types';
import { BookOpen, Search, Filter } from 'lucide-react';

export const CourseListView: React.FC = () => {
  const { courses, language, t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<ExamCategory>('all');
  const [filterQuery, setFilterQuery] = useState('');

  const categories: Array<{ id: ExamCategory; label: string }> = [
    { id: 'all', label: t('filterAll') },
    { id: 'appsc', label: t('filterAppsc') },
    { id: 'dsc', label: t('filterDsc') },
    { id: 'police', label: t('filterPolice') },
    { id: 'secretariat', label: t('filterSecretariat') },
    { id: 'court', label: t('filterCourt') },
    { id: 'central', label: t('filterCentral') },
  ];

  const filteredCourses = courses.filter(c => {
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    const q = filterQuery.toLowerCase().trim();
    const matchesQuery = !q || 
      c.title.toLowerCase().includes(q) ||
      c.titleTe.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="py-6 sm:py-10 pb-24 md:pb-12 max-w-7xl mx-auto px-3.5 sm:px-6">
      
      {/* Page Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
          <BookOpen className="w-4 h-4" />
          <span>Andhra Pradesh Examination Academy</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2 sm:mb-3 break-words">
          Explore Competitive Exam Courses
        </h1>
        <p className="text-xs sm:text-sm lg:text-base text-slate-400 max-w-3xl">
          Comprehensive, syllabus-aligned modules designed by AP State Rankers and subject experts. Study with voice notes, chapter breakdowns, and instant feedback practice questions.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick in-page search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter courses..."
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800/80">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No courses found</h3>
          <p className="text-sm text-slate-400 mb-4">Try choosing a different category or clearing search.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setFilterQuery(''); }}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};
