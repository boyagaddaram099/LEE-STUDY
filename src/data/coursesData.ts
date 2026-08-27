import { Course } from '../types';
import { getAppscGroup2Subjects } from './courses/appscGroup2Data';
import { getApDscTetSubjects } from './courses/apDscTetData';
import { getApPoliceSiPcSubjects } from './courses/apPoliceSiPcData';
import { getApGramaSachivalayamSubjects } from './courses/apGramaSachivalayamData';
import { getApHighCourtSubjects } from './courses/apHighCourtData';
import { getCentralAlliedSubjects } from './courses/centralAlliedData';

export const COURSES_DATA: Course[] = [
  {
    id: 'appsc-group2',
    slug: 'appsc-group-2-officer-cadre',
    title: 'APPSC Group 2 (Executive & Non-Executive)',
    titleTe: 'ఏపీపీఎస్సీ గ్రూప్ 2 (ఎగ్జిక్యూటివ్ & నాన్-ఎగ్జిక్యూటివ్)',
    titleHi: 'एपीपीएससी ग्रुप 2 (कार्यकारी एवं गैर-कार्यकारी)',
    badge: 'Flagship Officer Cadre',
    badgeTe: 'టాప్ ఆఫీసర్ కేడర్',
    badgeHi: 'अधिकारी संवर्ग',
    shortDesc: 'Comprehensive master preparation for Deputy Tahsildar, Sub-Registrar, Municipal Commissioner, ACTO, and ASO with 80 comprehensive syllabus modules.',
    shortDescTe: 'డిప్యూటీ తహశీల్దార్, సబ్-రిజిస్ట్రార్, మున్సిపల్ కమిషనర్, ACTO ఉద్యోగాలకై 80 సమగ్ర పాఠ్యాంశాలతో కూడిన సంపూర్ణ కోర్సు.',
    shortDescHi: 'डिप्टी तहसीलदार एवं सब-रजिस्ट्रार पदों हेतु 80 संपूर्ण विषयों के साथ विस्तृत पाठ्यक्रम।',
    examCategory: 'State Services',
    totalTopics: 80,
    enrolledCount: 42350,
    rating: 4.95,
    difficulty: 'Advanced',
    durationWeeks: 24,
    syllabusOverview: 'Complete coverage of General Studies, AP History & Cultural Heritage, Indian Constitution & AP Governance, Indian & AP Economy, and Science & Technology.',
    syllabusOverviewTe: 'జనరల్ స్టడీస్, ఆంధ్రప్రదేశ్ చరిత్ర, భారత రాజ్యాంగం & పాలన, భారత & ఏపీ ఎకానమీ, మరియు సైన్స్ & టెక్నాలజీ విభాగాల సమగ్ర కవరేజ్.',
    icon: 'Landmark',
    accentColor: '#1e3a8a',
    targetPosts: [
      'Deputy Tahsildar (Revenue)',
      'Sub-Registrar Grade II',
      'Municipal Commissioner Gr-III',
      'Assistant Commercial Tax Officer (ACTO)',
      'Assistant Section Officer (ASO Secretariats)',
      'Extension Officer (PR & RD)'
    ],
    subjects: getAppscGroup2Subjects(),
  },
  {
    id: 'ap-dsc-tet',
    slug: 'ap-mega-dsc-teacher-recruitment',
    title: 'AP Mega DSC & AP TET (SGT & School Assistant)',
    titleTe: 'ఏపీ మెగా డీఎస్సీ & టెట్ (SGT & స్కూల్ అసిస్టెంట్)',
    titleHi: 'आंध्र प्रदेश मेगा डीएससी एवं टीईटी शिक्षक भर्ती',
    badge: 'Mega Recruitment Hub',
    badgeTe: 'మెగా నోటిఫికేషన్',
    badgeHi: 'विशाल शिक्षक भर्ती',
    shortDesc: 'Complete syllabus with 80 in-depth topics for Child Development, Perspectives in Education, Telugu, English, and Content Methodologies.',
    shortDescTe: 'శిశు వికాసం, విద్యా దృక్పథాలు, తెలుగు, ఆంగ్లం మరియు మెథడాలజీ విభాగాలలో 80 ప్రామాణిక పాఠ్యాంశాలు.',
    shortDescHi: 'बाल मनोविज्ञान, शिक्षा के दृष्टिकोण, तेलुगु, अंग्रेजी एवं शिक्षण शास्त्र हेतु 80 विस्तृत विषय।',
    examCategory: 'Teacher Recruitment',
    totalTopics: 80,
    enrolledCount: 56800,
    rating: 4.98,
    difficulty: 'Standard',
    durationWeeks: 20,
    syllabusOverview: 'Full SCERT/NCERT aligned pedagogy, psychological principles, educational policies (NEP 2020, RTE 2009), language grammar, and content methods.',
    syllabusOverviewTe: 'ఎస్సీఈఆర్టీ/ఎన్సీఈఆర్టీ ప్రామాణిక సైకాలజీ, విద్యా దృక్పథాలు, ఎన్ఈపీ 2020, ఉచిత విద్యా హక్కు చట్టం & బోధనా పద్ధతులు.',
    icon: 'GraduationCap',
    accentColor: '#047857',
    targetPosts: [
      'Secondary Grade Teacher (SGT)',
      'School Assistant (Mathematics)',
      'School Assistant (Biological Science)',
      'School Assistant (Social Studies)',
      'School Assistant (English / Telugu)',
      'Language Pandits'
    ],
    subjects: getApDscTetSubjects(),
  },
  {
    id: 'ap-police-si-pc',
    slug: 'ap-police-sub-inspector-constable',
    title: 'AP Police SI & Constable (Civil, AR, APSP, Fire, Warder)',
    titleTe: 'ఏపీ పోలీస్ ఎస్ఐ & కానిస్టేబుల్ (సివిల్, AR, APSP, జైల్ వార్డర్)',
    titleHi: 'आंध्र प्रदेश पुलिस उप-निरीक्षक एवं कांस्टेबल',
    badge: 'Uniform Cadre Elite',
    badgeTe: 'యూనిఫాం కొలువులు',
    badgeHi: 'वर्दीधारी संवर्ग',
    shortDesc: 'High-yield 80 topics spanning Arithmetic, Reasoning, General Science, Indian History & Criminal Law Basics (BNS, BNSS, BSA).',
    shortDescTe: 'అంకగణితం, రీజనింగ్, జనరల్ సైన్స్, భారతదేశ చరిత్ర మరియు నూతన క్రిమినల్ చట్టాలపై 80 ప్రాక్టీస్ పాఠ్యాంశాలు.',
    shortDescHi: 'अंकगणित, रीजनिंग, सामान्य विज्ञान, इतिहास एवं नए आपराधिक कानूनों पर 80 विषय।',
    examCategory: 'Police & Defense',
    totalTopics: 80,
    enrolledCount: 38900,
    rating: 4.92,
    difficulty: 'Intermediate',
    durationWeeks: 18,
    syllabusOverview: 'Complete physical standard guidance, arithmetic problem-solving tricks, logical reasoning, and essential criminal procedures for Sub-Inspector and Constable aspirants.',
    syllabusOverviewTe: 'పోలీస్ ప్రిలిమ్స్ మరియు మెయిన్స్ రాత పరీక్షల కొరకు క్వాంట్, రీజనింగ్, సైన్స్ మరియు శాంతిభద్రతల నిర్వహణపై సమగ్ర కంటెంట్.',
    icon: 'Shield',
    accentColor: '#b91c1c',
    targetPosts: [
      'Sub-Inspector of Police (Civil - Men & Women)',
      'Sub-Inspector (AR & APSP)',
      'Station Fire Officer',
      'Police Constable (Civil)',
      'Police Constable (AR / APSP)',
      'Jail Warder & Firemen'
    ],
    subjects: getApPoliceSiPcSubjects(),
  },
  {
    id: 'ap-grama-sachivalayam',
    slug: 'ap-grama-ward-sachivalayam-recruitment',
    title: 'AP Grama & Ward Sachivalayam (All Functionary Posts)',
    titleTe: 'ఏపీ గ్రామ & వార్డు సచివాలయం (అన్ని కేటగిరీల పోస్టులు)',
    titleHi: 'आंध्र प्रदेश ग्राम एवं वार्ड सचिवालय भर्ती',
    badge: 'Grassroots Governance',
    badgeTe: 'ప్రజా సేవలు',
    badgeHi: 'ग्राम प्रशासन',
    shortDesc: '80 practical topics covering AP Flagship Schemes, Panchayati Raj Act 1994, Spandana, Land Records & Digital Governance.',
    shortDescTe: 'ఏపీ సంక్షేమ పథకాలు, పంచాయతీ రాజ్ చట్టం 1994, స్పందన పోర్టల్, భూ రికార్డులు & డిజిటల్ సేవలపై 80 పాఠ్యాంశాలు.',
    shortDescHi: 'प्रमुख कल्याणकारी योजनाएं, पंचायती राज अधिनियम, स्पंदना पोर्टल एवं डिजिटल शासन हेतु 80 विषय।',
    examCategory: 'Local Governance',
    totalTopics: 80,
    enrolledCount: 51200,
    rating: 4.94,
    difficulty: 'Standard',
    durationWeeks: 16,
    syllabusOverview: 'Covers Category I (Panchayat Secretary Gr V, Digital Assistant, Welfare Assistant), Category II (VRO, Survey Assistant), and Category III (Agriculture, Horticulture, Fisheries Assistants).',
    syllabusOverviewTe: 'కేటగిరీ I, II, III పోస్టులన్నింటికీ అవసరమైన గ్రామీణ పరిపాలన, నవశకం పోర్టల్, సంక్షేమ పథకాలు మరియు సాధారణ విజ్ఞానం.',
    icon: 'Building2',
    accentColor: '#d97706',
    targetPosts: [
      'Panchayat Secretary (Grade V / VI)',
      'Village Digital Assistant (VDA)',
      'Welfare and Education Assistant (WEA)',
      'Village Revenue Officer (VRO Gr-II)',
      'Village Agriculture Assistant (VAA)',
      'Ward Administrative & Welfare Secretary'
    ],
    subjects: getApGramaSachivalayamSubjects(),
  },
  {
    id: 'ap-high-court',
    slug: 'ap-high-court-district-court-services',
    title: 'AP High Court & District Courts (Judicial Assistant Cadre)',
    titleTe: 'ఏపీ హైకోర్టు & జిల్లా కోర్టుల రిక్రూట్‌మెంట్ (అసిస్టెంట్ కేడర్)',
    titleHi: 'आंध्र प्रदेश उच्च न्यायालय एवं जिला न्यायालय',
    badge: 'Judiciary Services',
    badgeTe: 'న్యాయ సేవలు',
    badgeHi: 'न्यायिक सेवाएं',
    shortDesc: '75 topics covering Judicial Architecture, CPC, Criminal Procedure, Legal English, Latin Maxims & Court Automation (CIS, NJDG).',
    shortDescTe: 'న్యాయవ్యవస్థ నిర్మాణం, సివిల్/క్రిమినల్ చట్టాలు, లీగల్ ఇంగ్లీష్, లాటిన్ మ్యాగ్జిమ్స్ & ఈ-కోర్టుల సాఫ్ట్‌వేర్‌పై 75 పాఠ్యాంశాలు.',
    shortDescHi: 'न्यायिक संरचना, सिविल/आपराधिक कानून, विधिक शब्दावली एवं ई-कोर्ट स्वचालन पर 75 विषय।',
    examCategory: 'High Court',
    totalTopics: 75,
    enrolledCount: 29400,
    rating: 4.91,
    difficulty: 'Standard',
    durationWeeks: 16,
    syllabusOverview: 'Specialized syllabus covering the Constitution of India (Articles 214-237), procedural laws foundation, legal terminology, general studies, and computer proficiency.',
    syllabusOverviewTe: 'భారత రాజ్యాంగం, హైకోర్టు అధికారాలు, లీగల్ పదజాలం, కంప్యూటర్ ప్రావీణ్యత మరియు సాధారణ పరిజ్ఞానం.',
    icon: 'Scale',
    accentColor: '#4f46e5',
    targetPosts: [
      'Junior Assistant (High Court & Subordinate Courts)',
      'Field Assistant & Examiner',
      'Copyist & Typist',
      'Stenographer Grade III',
      'Record Assistant & Process Server',
      'Office Subordinate'
    ],
    subjects: getApHighCourtSubjects(),
  },
  {
    id: 'central-allied',
    slug: 'central-allied-ssc-rrb-ibps-exams',
    title: 'Central & Allied Exams (SSC CGL/CHSL, RRB NTPC, Banking)',
    titleTe: 'కేంద్ర ప్రభుత్వ ఉద్యోగాలు (SSC CGL/CHSL, RRB NTPC, బ్యాంకింగ్)',
    titleHi: 'केंद्रीय प्रतियोगी परीक्षाएं (एसएससी, रेलवे, बैंकिंग)',
    badge: 'All-India National Hub',
    badgeTe: 'కేంద్ర ఉద్యోగాలు',
    badgeHi: 'अखिल भारतीय स्तर',
    shortDesc: '80 topics covering Quantitative Aptitude, Deductive Reasoning, General Awareness, Banking Economics & Computer Aptitude.',
    shortDescTe: 'క్వాంటిటేటివ్ ఆప్టిట్యూడ్, రీజనింగ్, జనరల్ అవేర్‌నెస్, బ్యాంకింగ్ ఎకానమీ & కంప్యూటర్ పరిజ్ఞానంపై 80 సమగ్ర పాఠ్యాంశాలు.',
    shortDescHi: 'मात्रात्मक अभियोग्यता, तर्कशक्ति, सामान्य जागरूकता, बैंकिंग एवं कंप्यूटर पर 80 विषय।',
    examCategory: 'Central Government',
    totalTopics: 80,
    enrolledCount: 47600,
    rating: 4.93,
    difficulty: 'Intermediate',
    durationWeeks: 22,
    syllabusOverview: 'Complete national examination mastery for Staff Selection Commission (CGL, CHSL, MTS, GD), Railway Recruitment Board (NTPC, Group D, ALP), and Banking (IBPS, SBI, RBI).',
    syllabusOverviewTe: 'ఎస్సెస్సీ, రైల్వే రిక్రూట్‌మెంట్ బోర్డ్ మరియు బ్యాంకింగ్ పరీక్షల కొరకు జాతీయ స్థాయి సిలబస్ కవరేజ్.',
    icon: 'Compass',
    accentColor: '#0891b2',
    targetPosts: [
      'SSC CGL (Assistant Section Officer, Inspector, Tax Assistant)',
      'SSC CHSL (LDC, Postal Assistant, DEO)',
      'RRB NTPC (Station Master, Goods Guard, Senior Clerk)',
      'RRB ALP & Technician',
      'IBPS & SBI Probationary Officer (PO) & Clerk',
      'Central Armed Police Forces (CAPF / SSC GD)'
    ],
    subjects: getCentralAlliedSubjects(),
  }
];

// Helper functions for easy data access
export function getAllCourses(): Course[] {
  return COURSES_DATA;
}

export function getCourseById(courseId: string): Course | undefined {
  return COURSES_DATA.find(c => c.id === courseId);
}

export function getSubjectById(courseId: string, subjectId: string) {
  const course = getCourseById(courseId);
  return course?.subjects.find(s => s.id === subjectId);
}

export function getTopicById(courseId: string, subjectId: string, topicId: string) {
  const subject = getSubjectById(courseId, subjectId);
  return subject?.topics.find(t => t.id === topicId);
}

export function getAllTopicsForCourse(courseId: string) {
  const course = getCourseById(courseId);
  if (!course) return [];
  return course.subjects.flatMap(s => s.topics);
}

export function getGlobalTopicCount(): number {
  return COURSES_DATA.reduce((acc, c) => acc + c.subjects.reduce((sAcc, s) => sAcc + s.topics.length, 0), 0);
}
