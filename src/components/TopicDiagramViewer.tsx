import React, { useState } from 'react';
import { TopicDiagram, DiagramNode, DiagramType } from '../types';
import { 
  GitBranch, 
  Layers, 
  Workflow, 
  RefreshCw, 
  Columns, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  Info,
  Sparkles,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface TopicDiagramViewerProps {
  diagrams: TopicDiagram[];
  language: 'en' | 'te' | 'hi';
}

export const TopicDiagramViewer: React.FC<TopicDiagramViewerProps> = ({ diagrams, language }) => {
  const [selectedDiagramIndex, setSelectedDiagramIndex] = useState(0);
  const [activeStepHover, setActiveStepHover] = useState<number | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({});

  if (!diagrams || diagrams.length === 0) return null;

  const currentDiagram = diagrams[selectedDiagramIndex] || diagrams[0];

  const getDiagramIcon = (type: DiagramType) => {
    switch (type) {
      case 'hierarchy': return <Layers className="w-4 h-4 text-emerald-400" />;
      case 'mindmap': return <GitBranch className="w-4 h-4 text-violet-400" />;
      case 'cycle': return <RefreshCw className="w-4 h-4 text-amber-400" />;
      case 'matrix': return <Columns className="w-4 h-4 text-indigo-400" />;
      default: return <Layers className="w-4 h-4 text-blue-400" />;
    }
  };

  const getDiagramTypeLabel = (type: DiagramType) => {
    switch (type) {
      case 'hierarchy': return language === 'te' ? 'అధికార క్రమచిత్రం' : 'Hierarchy Tree';
      case 'mindmap': return language === 'te' ? 'కాన్సెప్ట్ మ్యాప్' : 'Concept Mind Map';
      case 'cycle': return language === 'te' ? 'చక్రీయ ప్రక్రియ' : 'Cyclical Process';
      case 'matrix': return language === 'te' ? 'తులనాత్మక మ్యాట్రిక్స్' : 'Comparison Matrix';
      default: return 'Visual Diagram';
    }
  };

  const toggleNodeExpand = (nodeId: string) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };

  const getNodeColorStyles = (category?: string) => {
    switch (category) {
      case 'primary':
        return 'bg-blue-950/80 border-blue-600 text-blue-200 ring-blue-500/20';
      case 'secondary':
        return 'bg-slate-900 border-slate-700 text-slate-200 ring-slate-500/20';
      case 'accent':
        return 'bg-violet-950/80 border-violet-600 text-violet-200 ring-violet-500/20';
      case 'warning':
        return 'bg-amber-950/80 border-amber-600 text-amber-200 ring-amber-500/20';
      case 'success':
        return 'bg-emerald-950/80 border-emerald-600 text-emerald-200 ring-emerald-500/20';
      case 'info':
        return 'bg-cyan-950/80 border-cyan-600 text-cyan-200 ring-cyan-500/20';
      default:
        return 'bg-slate-900 border-slate-700 text-slate-200 ring-slate-500/20';
    }
  };

  const renderHierarchyNode = (node: DiagramNode, depth: number = 0) => {
    const isExpanded = expandedNodes[node.id] !== false; // default expanded
    const label = language === 'te' && node.labelTe ? node.labelTe : node.label;
    const desc = language === 'te' && node.descriptionTe ? node.descriptionTe : node.description;
    const badge = language === 'te' && node.badgeTe ? node.badgeTe : node.badge;
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className="relative flex flex-col items-center">
        {/* Node Box */}
        <div 
          onClick={() => hasChildren && toggleNodeExpand(node.id)}
          className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all duration-200 shadow-lg ${
            hasChildren ? 'cursor-pointer hover:scale-[1.02]' : ''
          } ${getNodeColorStyles(node.category)} max-w-sm w-full text-center relative z-10`}
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 border border-white/10 text-slate-300">
              {badge || `Level ${depth + 1}`}
            </span>
            {hasChildren && (
              <span className="text-xs text-slate-400">
                {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
              </span>
            )}
          </div>
          <h4 className="text-xs sm:text-sm font-bold tracking-tight text-white mb-1">
            {label}
          </h4>
          {desc && (
            <p className="text-[11px] sm:text-xs text-slate-300/90 leading-relaxed">
              {desc}
            </p>
          )}
        </div>

        {/* Connector Line to Children */}
        {hasChildren && isExpanded && (
          <div className="w-full flex flex-col items-center">
            {/* Vertical stem down */}
            <div className="w-0.5 h-6 bg-slate-700"></div>

            {/* Sub-children container with horizontal branch bar if multiple */}
            <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 w-full pt-2">
              {node.children!.map((child) => renderHierarchyNode(child, depth + 1))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl space-y-6">
      
      {/* Header with Diagram Type Badges & Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-950 border border-blue-800 text-blue-400">
            {getDiagramIcon(currentDiagram.type)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                {getDiagramTypeLabel(currentDiagram.type)}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/80 font-mono">
                Visual Concept Aid
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {language === 'te' && currentDiagram.titleTe ? currentDiagram.titleTe : currentDiagram.title}
            </h3>
          </div>
        </div>

        {/* Diagram Switcher Pills (if multiple diagrams exist) */}
        {diagrams.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none bg-slate-950 p-1 rounded-xl border border-slate-800">
            {diagrams.map((diag, idx) => (
              <button
                key={diag.id}
                onClick={() => setSelectedDiagramIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedDiagramIndex === idx
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {getDiagramIcon(diag.type)}
                <span>{language === 'te' && diag.titleTe ? diag.titleTe : diag.title}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Caption Description */}
      {currentDiagram.caption && (
        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <span>
            {language === 'te' && currentDiagram.captionTe ? currentDiagram.captionTe : currentDiagram.caption}
          </span>
        </div>
      )}

      {/* DIAGRAM TYPE 1: HIERARCHY TREE */}
      {currentDiagram.type === 'hierarchy' && currentDiagram.nodes && (
        <div className="overflow-x-auto py-4 px-2 scrollbar-none flex justify-center min-w-full">
          <div className="inline-block space-y-4">
            {currentDiagram.nodes.map(rootNode => renderHierarchyNode(rootNode))}
          </div>
        </div>
      )}

      {/* DIAGRAM TYPE 3: MIND MAP / CONCEPT RADIAL NODES */}
      {currentDiagram.type === 'mindmap' && currentDiagram.nodes && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentDiagram.nodes.map((node) => {
              const label = language === 'te' && node.labelTe ? node.labelTe : node.label;
              const desc = language === 'te' && node.descriptionTe ? node.descriptionTe : node.description;
              const badge = language === 'te' && node.badgeTe ? node.badgeTe : node.badge;

              return (
                <div 
                  key={node.id}
                  className={`p-4 rounded-2xl border-2 space-y-3 ${getNodeColorStyles(node.category)}`}
                >
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                      {label}
                    </h4>
                    {badge && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/40 text-slate-200">
                        {badge}
                      </span>
                    )}
                  </div>
                  
                  {desc && (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {desc}
                    </p>
                  )}

                  {/* Sub-branches */}
                  {node.children && node.children.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Core Pillars:
                      </span>
                      <div className="space-y-1.5">
                        {node.children.map(child => {
                          const cLabel = language === 'te' && child.labelTe ? child.labelTe : child.label;
                          const cDesc = language === 'te' && child.descriptionTe ? child.descriptionTe : child.description;

                          return (
                            <div key={child.id} className="p-2 rounded-xl bg-black/30 border border-white/5 text-xs">
                              <span className="font-semibold text-white block">{cLabel}</span>
                              {cDesc && <span className="text-[11px] text-slate-300 leading-normal">{cDesc}</span>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* DIAGRAM TYPE 4: CYCLICAL PROCESS */}
      {currentDiagram.type === 'cycle' && currentDiagram.cycleItems && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {currentDiagram.cycleItems.map((item, idx) => {
              const phase = language === 'te' && item.phaseTe ? item.phaseTe : item.phase;
              const title = language === 'te' && item.titleTe ? item.titleTe : item.title;
              const detail = language === 'te' && item.detailTe ? item.detailTe : item.detail;

              return (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 relative overflow-hidden group hover:border-amber-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/80 text-amber-300">
                      {phase}
                    </span>
                    <RefreshCw className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* DIAGRAM TYPE 5: COMPARISON MATRIX */}
      {currentDiagram.type === 'matrix' && currentDiagram.matrixColumns && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentDiagram.matrixColumns.map((col, cIdx) => {
              const header = language === 'te' && col.headerTe ? col.headerTe : col.header;

              return (
                <div key={cIdx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="border-b border-slate-800 pb-2">
                    <h4 className="text-xs sm:text-sm font-bold text-blue-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      {header}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {col.items.map((item, iIdx) => {
                      const itemTitle = language === 'te' && item.titleTe ? item.titleTe : item.title;
                      const points = language === 'te' && item.pointsTe ? item.pointsTe : item.points;

                      return (
                        <div key={iIdx} className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 space-y-1.5">
                          <span className="text-xs font-bold text-white block">
                            {itemTitle}
                          </span>
                          <ul className="space-y-1 text-xs text-slate-300 list-disc pl-4">
                            {points.map((p, pIdx) => (
                              <li key={pIdx} className="leading-relaxed">{p}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
