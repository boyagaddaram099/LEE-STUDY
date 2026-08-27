import { Topic, Question } from '../types';
import { COMPREHENSIVE_MOCK_QUESTION_BANK } from '../data/mockQuestionBank';

/**
 * Intelligent Topic Practice Question Engine
 * Provides 10 to 15 high-yield, topic-specific MCQs for any course topic.
 * Combines topic-specific seed questions, section-derived questions, and domain knowledge.
 */

// Helper to generate a question from a section or quick fact
function generateSectionQuestion(
  topic: Topic,
  sectionTitle: string,
  sectionTitleTe: string,
  sectionTitleHi: string,
  paraText: string,
  paraTextTe: string,
  index: number
): Question {
  const cleanTitle = sectionTitle.replace(/^[0-9]+\.\s*/, '');
  const cleanTitleTe = sectionTitleTe.replace(/^[0-9]+\.\s*/, '');
  const cleanTitleHi = sectionTitleHi.replace(/^[0-9]+\.\s*/, '');

  // Extract key concept or sentence
  const firstSentence = paraText.split('.')[0] || paraText;
  const firstSentenceTe = paraTextTe.split('.')[0] || paraTextTe;

  return {
    id: `${topic.id}-gen-sec-${index + 1}`,
    topicId: topic.id,
    subjectName: topic.subjectId,
    question: `With reference to "${cleanTitle}" in ${topic.title}, which of the following statements is conceptually correct?`,
    questionTe: `${topic.titleTe || topic.title} లోని "${cleanTitleTe || cleanTitle}" కు సంబంధించి క్రింది వాటిలో సరైన వివరణ ఏది?`,
    questionHi: `${topic.titleHi || topic.title} के अंतर्गत "${cleanTitleHi || cleanTitle}" के संबंध में कौन सा कथन सही है?`,
    options: [
      `${firstSentence.trim()}.`,
      `It is purely optional and has no statutory or constitutional bearing in state governance.`,
      `It was completely repealed by the 44th Constitutional Amendment Act.`,
      `It applies exclusively to Union Territories and not to the State of Andhra Pradesh.`
    ],
    optionsTe: [
      `${firstSentenceTe.trim()}.`,
      `ఇది కేవలం స్వచ్ఛందమైనది మరియు దీనికి ఎలాంటి చట్టపరమైన లేదా రాజ్యాంగపరమైన ప్రాముఖ్యత లేదు.`,
      `ఇది 44వ రాజ్యాంగ సవరణ చట్టం ద్వారా పూర్తిగా రద్దు చేయబడింది.`,
      `ఇది కేవలం కేంద్రపాలిత ప్రాంతాలకు మాత్రమే వర్తిస్తుంది, ఆంధ్రప్రదేశ్‌కు వర్తించదు.`
    ],
    optionsHi: [
      `${firstSentence.trim()}.`,
      `यह केवल स्वैच्छिक है और इसका कोई संवैधानिक महत्व नहीं है।`,
      `इसे 44वें संविधान संशोधन द्वारा पूर्णतः निरस्त कर दिया गया था।`,
      `यह केवल केंद्र शासित प्रदेशों पर लागू होता है, राज्यों पर नहीं।`
    ],
    correctIndex: 0,
    explanation: `As detailed in the syllabus: ${paraText.slice(0, 220)}... This is an essential high-yield concept frequently examined in AP State competitive exams.`,
    explanationTe: `సిలబస్ వివరణ ప్రకారం: ${paraTextTe.slice(0, 220)}... ఇది ఆంధ్రప్రదేశ్ పోటీ పరీక్షలలో తరచుగా అడిగే కీలకమైన అంశం.`,
    explanationHi: `पाठ्यक्रम के अनुसार: ${paraText.slice(0, 220)}... यह परीक्षा के दृष्टिकोण से अत्यंत महत्वपूर्ण तथ्य है।`,
    referenceAct: topic.content.apSpecificFocus ? 'AP State Syllabus Benchmark' : 'Standard Exam Reference',
    difficulty: 'medium'
  };
}

// Helper to generate a question from a revision point
function generateRevisionPointQuestion(
  topic: Topic,
  pointText: string,
  pointTextTe: string,
  index: number
): Question {
  return {
    id: `${topic.id}-gen-rev-${index + 1}`,
    topicId: topic.id,
    subjectName: topic.subjectId,
    question: `Which of the following key points is fundamental to "${topic.title}"?`,
    questionTe: `"${topic.titleTe || topic.title}" కు సంబంధించి అత్యంత ప్రాముఖ్యత కలిగిన ముఖ్యాంశం ఏది?`,
    questionHi: `"${topic.titleHi || topic.title}" के संबंध में कौन सा प्रमुख बिंदु सत्य है?`,
    options: [
      `${pointText.trim()}`,
      `It is contrary to standard state administrative guidelines and rejected by commissions.`,
      `It applies only to central administrative tribunals and has no state applicability.`,
      `It was replaced by the 2014 Andhra Pradesh Reorganisation Act provisions.`
    ],
    optionsTe: [
      `${pointTextTe ? pointTextTe.trim() : pointText.trim()}`,
      `ఇది ప్రామాణిక పరిపాలనా మార్గదర్శకాలకు విరుద్ధమైనది మరియు కమీషన్లచే తిరస్కరించబడింది.`,
      `ఇది కేవలం కేంద్ర ట్రిబ్యునళ్లకు మాత్రమే వర్తిస్తుంది.`,
      `ఇది 2014 ఏపీ పునర్వ్యవస్థీకరణ చట్టం ద్వారా తొలగించబడింది.`
    ],
    optionsHi: [
      `${pointText.trim()}`,
      `यह प्रशासनिक दिशानिर्देशों के विपरीत है।`,
      `यह केवल केंद्रीय स्तर पर लागू होता है।`,
      `इसे 2014 के अधिनियम द्वारा बदल दिया गया था।`
    ],
    correctIndex: 0,
    explanation: `Key revision takeaway: "${pointText}". This core concept forms the basis for analytical questions in state recruitment exams.`,
    explanationTe: `ముఖ్య పునర్విమర్శ అంశం: "${pointTextTe || pointText}". పోటీ పరీక్షల్లో దీనిపై నేరుగా లేదా విశ్లేషణాత్మకంగా ప్రశ్నలు వస్తాయి.`,
    explanationHi: `मुख्य बिंदु: "${pointText}". यह राज्य स्तरीय परीक्षाओं के लिए महत्वपूर्ण है।`,
    referenceAct: topic.highYieldWeightage || 'APPSC / AP State Reference',
    difficulty: index % 2 === 0 ? 'easy' : 'hard'
  };
}

// Helper to generate a question from Quick Facts
function generateFactQuestion(
  topic: Topic,
  fact: { label: string; val: string },
  factTe: { label: string; val: string } | undefined,
  index: number
): Question {
  return {
    id: `${topic.id}-gen-fact-${index + 1}`,
    topicId: topic.id,
    subjectName: topic.subjectId,
    question: `In the context of ${topic.title}, what is the exact factual value / status for "${fact.label}"?`,
    questionTe: `${topic.titleTe || topic.title} పరంగా "${factTe?.label || fact.label}" కు సంబంధించిన సరైన వాస్తవం ఏది?`,
    questionHi: `${topic.titleHi || topic.title} के संदर्भ में "${fact.label}" का सही तथ्य क्या है?`,
    options: [
      `${fact.val}`,
      `Nil / Not applicable in current fiscal year`,
      `Exclusively determined by District Collector discretionary powers`,
      `Superseded by 1956 SRC recommendations`
    ],
    optionsTe: [
      `${factTe?.val || fact.val}`,
      `వర్తించదు / ప్రస్తుత ఆర్థిక సంవత్సరంలో రద్దు చేయబడింది`,
      `పూర్తిగా జిల్లా కలెక్టర్ విచక్షణ అధికారాలపై మాత్రమే ఆధారపడి ఉంటుంది`,
      `1956 ఎస్సార్సీ సిఫార్సుల ద్వారా మార్చబడింది`
    ],
    optionsHi: [
      `${fact.val}`,
      `वर्तमान में लागू नहीं है`,
      `केवल जिला कलेक्टर के विवेक पर आधारित है`,
      `1956 के अधिनियम द्वारा बदल दिया गया`
    ],
    correctIndex: 0,
    explanation: `Direct Syllabus Fact: For "${fact.label}", the recognized standard value is "${fact.val}".`,
    explanationTe: `సిలబస్ ప్రామాణిక వాస్తవం: "${factTe?.label || fact.label}" విలువ "${factTe?.val || fact.val}".`,
    explanationHi: `तथ्य: "${fact.label}" का सही मान "${fact.val}" है।`,
    referenceAct: 'Official Syllabus Fact-Sheet',
    difficulty: 'easy'
  };
}

// Helper to generate an AP Focus question
function generateApFocusQuestion(topic: Topic, index: number): Question {
  const focusEn = topic.content.apSpecificFocus || 'Special emphasis on Andhra Pradesh state implementation, local governance bodies, and state government schemes.';
  const focusTe = topic.content.apSpecificFocusTe || 'ఆంధ్రప్రదేశ్ రాష్ట్ర అమలు, స్థానిక పాలనా సంస్థలు మరియు ప్రభుత్వ పథకాలపై ప్రత్యేక దృష్టి.';

  return {
    id: `${topic.id}-gen-ap-${index + 1}`,
    topicId: topic.id,
    subjectName: topic.subjectId,
    question: `Regarding the Andhra Pradesh State-specific application of "${topic.title}", which aspect is crucial for AP exam aspirants?`,
    questionTe: `"${topic.titleTe || topic.title}" ఆంధ్రప్రదేశ్ రాష్ట్రంలో అమలు మరియు ప్రత్యేక ప్రాధాన్యతకు సంబంధించి సరైనది ఏది?`,
    questionHi: `"${topic.titleHi || topic.title}" के आंध्र प्रदेश राज्य विशिष्ट अनुप्रयोग के संबंध में कौन सा पहलू महत्वपूर्ण है?`,
    options: [
      `${focusEn.split('.')[0] || focusEn}`,
      `AP State has completely exempted this topic from all public service recruitment examinations.`,
      `It is solely administered by the central government without any state department involvement.`,
      `There is no financial allocation or budget provision made in the AP State Budget.`
    ],
    optionsTe: [
      `${focusTe.split('.')[0] || focusTe}`,
      `ఆంధ్రప్రదేశ్ ప్రభుత్వం ఈ అంశాన్ని అన్ని పబ్లిక్ సర్వీస్ పరీక్షల నుండి మినహాయించింది.`,
      `రాష్ట్ర శాఖల ప్రమేయం లేకుండా ఇది కేవలం కేంద్ర ప్రభుత్వం ద్వారా మాత్రమే నిర్వహించబడుతుంది.`,
      `ఏపీ రాష్ట్ర బడ్జెట్‌లో దీనికి ఎలాంటి ఆర్థిక కేటాయింపులు లేవు.`
    ],
    optionsHi: [
      `${focusEn.split('.')[0] || focusEn}`,
      `इसे राज्य स्तरीय परीक्षाओं से छूट दी गई है।`,
      `यह केवल केंद्र सरकार द्वारा प्रशासित है।`,
      `राज्य बजट में इसके लिए कोई प्रावधान नहीं है।`
    ],
    correctIndex: 0,
    explanation: `AP Specific Focus: ${focusEn}. Candidates must prioritize state-specific implementation details for APPSC and State tests.`,
    explanationTe: `ఏపీ ప్రత్యేక ప్రాధాన్యత: ${focusTe}. ఏపీపీఎస్సీ మరియు రాష్ట్ర స్థాయి పరీక్షలకు ఈ నిర్దిష్ట అంశాలపై పట్టు అవసరం.`,
    explanationHi: `आंध्र प्रदेश विशेष संदर्भ: ${focusEn}.`,
    referenceAct: 'AP State Specific Syllabus Matrix',
    difficulty: 'medium'
  };
}

/**
 * Main Function: Retrieves 10 to 15 Topic-Specific Practice Questions
 * @param topic The target topic
 * @param targetCount Number of questions desired (between 10 and 15, defaults to 12)
 */
export function getTopicPracticeQuestions(topic: Topic, targetCount: number = 12): Question[] {
  if (!topic) return [];

  const count = Math.max(10, Math.min(15, targetCount));
  const pool: Question[] = [];
  const seenIds = new Set<string>();

  // 1. First priority: Existing seed questions defined on the topic
  if (topic.questions && topic.questions.length > 0) {
    topic.questions.forEach(q => {
      const qId = q.id || `${topic.id}-seed-${pool.length + 1}`;
      if (!seenIds.has(qId)) {
        seenIds.add(qId);
        pool.push({
          ...q,
          id: qId,
          topicId: topic.id,
          subjectName: q.subjectName || topic.subjectId || 'Topic Practice'
        });
      }
    });
  }

  // 2. Second priority: Questions derived from topic sections
  const sections = topic.content?.sections || [];
  sections.forEach((sec, sIdx) => {
    if (pool.length >= count) return;
    const para = sec.paragraphs && sec.paragraphs[0] ? sec.paragraphs[0] : sec.title;
    const paraTe = sec.paragraphsTe && sec.paragraphsTe[0] ? sec.paragraphsTe[0] : (sec.titleTe || sec.title);
    
    const genQ = generateSectionQuestion(
      topic,
      sec.title,
      sec.titleTe || sec.title,
      sec.titleHi || sec.title,
      para,
      paraTe,
      sIdx
    );
    
    if (!seenIds.has(genQ.id)) {
      seenIds.add(genQ.id);
      pool.push(genQ);
    }
  });

  // 3. Third priority: Questions derived from Quick Facts
  const quickFacts = topic.content?.quickFacts || [];
  const quickFactsTe = topic.content?.quickFactsTe || [];
  quickFacts.forEach((fact, fIdx) => {
    if (pool.length >= count) return;
    const factTe = quickFactsTe[fIdx];
    const genQ = generateFactQuestion(topic, fact, factTe, fIdx);
    if (!seenIds.has(genQ.id)) {
      seenIds.add(genQ.id);
      pool.push(genQ);
    }
  });

  // 4. Fourth priority: Questions derived from Revision Points
  const revPoints = topic.content?.revisionPoints || [];
  const revPointsTe = topic.content?.revisionPointsTe || [];
  revPoints.forEach((pt, pIdx) => {
    if (pool.length >= count) return;
    const ptTe = revPointsTe[pIdx] || pt;
    const genQ = generateRevisionPointQuestion(topic, pt, ptTe, pIdx);
    if (!seenIds.has(genQ.id)) {
      seenIds.add(genQ.id);
      pool.push(genQ);
    }
  });

  // 5. Fifth priority: AP Specific Focus Question
  if (pool.length < count && topic.content?.apSpecificFocus) {
    const genQ = generateApFocusQuestion(topic, pool.length);
    if (!seenIds.has(genQ.id)) {
      seenIds.add(genQ.id);
      pool.push(genQ);
    }
  }

  // 6. Sixth priority: Keyword & Domain matching from COMPREHENSIVE_MOCK_QUESTION_BANK
  if (pool.length < count) {
    const topicKeywords = `${topic.title} ${topic.shortDesc} ${topic.subjectId}`.toLowerCase().split(/\s+/);
    
    const matchedBankQuestions = COMPREHENSIVE_MOCK_QUESTION_BANK.filter(bq => {
      const qText = `${bq.question} ${bq.subjectName || ''} ${bq.explanation || ''}`.toLowerCase();
      return topicKeywords.some(kw => kw.length > 4 && qText.includes(kw));
    });

    for (const bq of matchedBankQuestions) {
      if (pool.length >= count) break;
      if (!seenIds.has(bq.id)) {
        seenIds.add(bq.id);
        pool.push({
          ...bq,
          id: `${topic.id}-matched-${bq.id}`,
          topicId: topic.id
        });
      }
    }
  }

  // 7. Seventh fallback: If still fewer than target count, generate analytical questions from overview
  let fallbackIdx = 1;
  while (pool.length < count) {
    const overview = topic.content?.overview || topic.shortDesc;
    const overviewTe = topic.content?.overviewTe || topic.shortDescTe;
    
    const fallbackQ: Question = {
      id: `${topic.id}-concept-${fallbackIdx}`,
      topicId: topic.id,
      subjectName: topic.subjectId,
      question: `Which of the following statements best encapsulates the exam significance of "${topic.title}"?`,
      questionTe: `"${topic.titleTe || topic.title}" కు సంబంధించి పోటీ పరీక్షల కోణంలో సరైన విశ్లేషణ ఏది?`,
      questionHi: `"${topic.titleHi || topic.title}" के संबंध में कौन सा विश्लेषण सत्य है?`,
      options: [
        `${overview.slice(0, 160)}.`,
        `It has been permanently omitted from all AP State civil service syllabi.`,
        `It requires only subjective descriptive essay writing without any multiple choice questions.`,
        `It is applicable solely to private corporate bodies and not state government institutions.`
      ],
      optionsTe: [
        `${overviewTe.slice(0, 160)}.`,
        `ఇది అన్ని ఏపీ రాష్ట్ర సివిల్ సర్వీస్ సిలబస్ ల నుండి శాశ్వతంగా తొలగించబడింది.`,
        `దీనిపై ఎలాంటి బహుళైచ్ఛిక (MCQ) ప్రశ్నలు రావు.`,
        `ఇది కేవలం ప్రైవేట్ సంస్థలకు మాత్రమే వర్తిస్తుంది, ప్రభుత్వ శాఖలకు కాదు.`
      ],
      optionsHi: [
        `${overview.slice(0, 160)}.`,
        `इसे पाठ्यक्रम से हटा दिया गया है।`,
        `इसमें कोई बहुविकल्पीय प्रश्न नहीं पूछे जाते।`,
        `यह केवल निजी संस्थाओं के लिए है।`
      ],
      correctIndex: 0,
      explanation: `Conceptual Analysis: "${topic.title}" is a cornerstone module in state recruitment. Master the key provisions, historical chronology, and administrative execution.`,
      explanationTe: `విశ్లేషణ: "${topic.titleTe || topic.title}" పరీక్షల్లో అత్యధిక మార్కులు సాధించేందుకు దోహదపడే కీలక విభాగం.`,
      explanationHi: `विश्लेषण: यह विषय राज्य स्तरीय प्रतियोगी परीक्षाओं के लिए महत्वपूर्ण है।`,
      referenceAct: topic.highYieldWeightage || 'Syllabus Core',
      difficulty: 'medium'
    };

    pool.push(fallbackQ);
    fallbackIdx++;
  }

  // Return exactly the target count of 10 to 15 questions
  return pool.slice(0, count);
}
