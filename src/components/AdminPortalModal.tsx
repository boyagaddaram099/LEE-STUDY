import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  PlusCircle, 
  X, 
  Check, 
  Layers, 
  BookOpen, 
  Bell, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useApp();
  const [activeTab, setActiveTab] = useState<'topics' | 'questions' | 'notifications'>('topics');
  const [title, setTitle] = useState('');
  const [titleTe, setTitleTe] = useState('');
  const [category, setCategory] = useState('APPSC Group 2');

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Item draft successfully created in LEE STUDY CMS!');
    setTitle('');
    setTitleTe('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">LEE STUDY Faculty & Content Management</h3>
              <p className="text-xs text-slate-400">Manage syllabus, add questions & AP job notifications</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('topics')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'topics' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Add Study Topic
          </button>
          <button
            onClick={() => setActiveTab('questions')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'questions' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Add Practice MCQ
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'notifications' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Publish Job Notification
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Target Exam / Department</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
            >
              <option>APPSC Group 2 (Executive/Non-Executive)</option>
              <option>AP Mega DSC 2026 (SGT/SA)</option>
              <option>AP Police SI & Constable</option>
              <option>Grama / Ward Sachivalayam</option>
              <option>AP High Court & District Courts</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Title (English)</label>
            <input
              type="text"
              required
              placeholder="e.g. Directive Principles of State Policy (DPSP)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Title (Telugu)</label>
            <input
              type="text"
              required
              placeholder="ఉదా: ఆదేశిక సూత్రాలు (DPSP - నిబంధనలు 36 నుండి 51)"
              value={titleTe}
              onChange={(e) => setTitleTe(e.target.value)}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-md shadow-blue-600/30"
            >
              Save to Platform
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
