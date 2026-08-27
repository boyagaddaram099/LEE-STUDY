import { 
  Topic, 
  TopicContent, 
  NoteTable, 
  NoteCaseLawOrAct, 
  NoteMnemonic, 
  NoteTimelineItem, 
  NotePyqInsight, 
  NoteFaq, 
  TopicSection,
  TopicDiagram
} from '../types';

/**
 * High-Yield Topic Notes Enrichment Engine
 * Transforms any topic into comprehensive, in-depth, textbook-grade chapter notes.
 * Removes brief or shallow snippets and provides exhaustive, multi-dimensional academic coverage.
 */

// Helper to determine subject domain
function getTopicDomain(topic: Topic): 'polity' | 'history' | 'economy' | 'geography' | 'science' | 'law' | 'education' | 'reasoning' | 'sachivalayam' | 'highcourt' | 'general' {
  const text = `${topic.title} ${topic.shortDesc} ${topic.subjectId} ${topic.id} ${topic.courseId}`.toLowerCase();
  
  if (text.includes('sachivalayam') || text.includes('panchayat') || text.includes('grama') || text.includes('ward') || text.includes('village secretariat')) {
    return 'sachivalayam';
  }
  if (text.includes('high court') || text.includes('civil rules') || text.includes('criminal rules of practice') || text.includes('registry') || text.includes('judicial')) {
    return 'highcourt';
  }
  if (text.includes('police') || text.includes('ipc') || text.includes('crpc') || text.includes('evidence act') || text.includes('bns') || text.includes('bnss') || text.includes('bsa') || text.includes('criminal law') || text.includes('disha') || text.includes('forensic')) {
    return 'law';
  }
  if (text.includes('psychology') || text.includes('pedagogy') || text.includes('child development') || text.includes('teaching') || text.includes('learning') || text.includes('piaget') || text.includes('curriculum') || text.includes('rte') || text.includes('nep')) {
    return 'education';
  }
  if (text.includes('constitution') || text.includes('article') || text.includes('amendment') || text.includes('governor') || text.includes('president') || text.includes('polity') || text.includes('fundamental rights') || text.includes('parliament') || text.includes('reorganisation')) {
    return 'polity';
  }
  if (text.includes('satavahana') || text.includes('ikshvaku') || text.includes('chalukya') || text.includes('kakatiya') || text.includes('vijayanagara') || text.includes('revolt') || text.includes('veeresalingam') || text.includes('alluri') || text.includes('movement') || text.includes('history') || text.includes('dynasty') || text.includes('british') || text.includes('sri bagh')) {
    return 'history';
  }
  if (text.includes('economy') || text.includes('gdp') || text.includes('budget') || text.includes('inflation') || text.includes('banking') || text.includes('agriculture') || text.includes('industry') || text.includes('navaratnalu') || text.includes('tax') || text.includes('poverty') || text.includes('fiscal')) {
    return 'economy';
  }
  if (text.includes('geography') || text.includes('river') || text.includes('district') || text.includes('climate') || text.includes('soil') || text.includes('forest') || text.includes('mineral') || text.includes('polavaram') || text.includes('census') || text.includes('plateau')) {
    return 'geography';
  }
  if (text.includes('science') || text.includes('technology') || text.includes('isro') || text.includes('space') || text.includes('energy') || text.includes('environment') || text.includes('pollution') || text.includes('biology') || text.includes('physics') || text.includes('biotechnology')) {
    return 'science';
  }
  if (text.includes('reasoning') || text.includes('mental ability') || text.includes('arithmetic') || text.includes('data interpretation') || text.includes('coding') || text.includes('series') || text.includes('quantitative') || text.includes('aptitude')) {
    return 'reasoning';
  }
  return 'general';
}

export function enrichTopicContent(topic: Topic): TopicContent {
  const content = topic.content;
  const domain = getTopicDomain(topic);

  // Generate comprehensive, deeply technical sections that replace small/shallow notes
  const generatedSections = generateInDepthSections(topic, domain, content.sections);

  return {
    ...content,
    overview: generateDeepOverview(topic, domain, content.overview),
    overviewTe: generateDeepOverviewTe(topic, domain, content.overviewTe),
    sections: generatedSections,
    diagrams: content.diagrams && content.diagrams.length > 0 ? content.diagrams : generateDomainDiagrams(topic, domain),
    tables: content.tables && content.tables.length > 0 ? content.tables : generateDomainTables(topic, domain),
    caseLaws: content.caseLaws && content.caseLaws.length > 0 ? content.caseLaws : generateDomainCaseLaws(topic, domain),
    mnemonics: content.mnemonics && content.mnemonics.length > 0 ? content.mnemonics : generateDomainMnemonics(topic, domain),
    timeline: content.timeline && content.timeline.length > 0 ? content.timeline : generateDomainTimeline(topic, domain),
    pyqInsights: content.pyqInsights && content.pyqInsights.length > 0 ? content.pyqInsights : generateDomainPyqInsights(topic, domain),
    faqs: content.faqs && content.faqs.length > 0 ? content.faqs : generateDomainFaqs(topic, domain),
  };
}

function generateDeepOverview(topic: Topic, domain: string, existingOverview?: string): string {
  const title = topic.title;
  if (existingOverview && existingOverview.length > 250) {
    return existingOverview;
  }

  switch (domain) {
    case 'polity':
      return `This chapter provides an exhaustive, constitutional, and institutional analysis of ${title}. It examines foundational Articles under the Constitution of India, parliamentary statutory enactments, federal distribution of legislative and executive powers, and judicial interpretations by the Supreme Court and High Court of Andhra Pradesh. Candidates will master procedural subtleties, amendment histories, constitutional safeguards, and district-level governance frameworks required for APPSC Group 1, Group 2, and Allied state competitive examinations.`;
    case 'history':
      return `An in-depth historical, epigraphical, and socio-cultural investigation of ${title}. This chapter synthesizes primary epigraphs (inscriptions), numismatic evidence, architectural styles, administrative divisions, agrarian structures, and literary masterpieces. Special emphasis is given to Andhra's pivotal role in the freedom struggle, social reform renaissance movements, regional agreements (Sri Bagh Pact, Gentlemen's Agreement), and post-independence state reorganizations (1953, 1956, and 2014).`;
    case 'economy':
      return `A rigorous macroeconomic and state-specific analysis of ${title}. Covers national accounting aggregates, monetary policy mechanisms, fiscal federalism, and the structural transformation of Andhra Pradesh's economy. Detailed metrics include Gross State Domestic Product (GSDP) contributions, sectoral growth (Aquaculture, Horticulture, Industrial Corridors), Fiscal Responsibility and Budget Management (FRBM) benchmarks, and the implementation architecture of state flagship welfare initiatives.`;
    case 'geography':
      return `A comprehensive physical, administrative, and economic geographic treatise on ${title}. Encompasses Andhra Pradesh's 974 km coastline, physiographic divisions (Eastern Ghats, Coastal Plains, Rayalaseema Plateau), major river basins (Godavari, Krishna, Pennar), agro-climatic zones, soil distribution, mineral wealth (Barytes, Limestone, Mica), and the 26 reorganized administrative districts.`;
    case 'law':
      return `A precise, statutory, and procedural exploration of ${title}. Focuses on core substantive definitions under the Indian Penal Code 1860 / Bharatiya Nyaya Sanhita 2023, procedural safeguards under CrPC 1973 / BNSS 2023, and evidentiary rules under the Indian Evidence Act 1872 / BSA 2023. Detailed protocols cover cognizable offences, FIR drafting under Section 154, search and seizure mandates, police hierarchy, forensic investigation standards, and the Andhra Pradesh Disha emergency ecosystem.`;
    case 'education':
      return `An advanced theoretical and pedagogical framework of ${title} for DSC and TET aspirants. Integrates classical and contemporary child development models (Piaget, Vygotsky, Kohlberg, Erikson), behavioral and constructivist learning theories, intelligence paradigms (Gardner Multiple Intelligences), inclusive education practices, RTE Act 2009 statutory mandates, and National Education Policy (NEP 2020) curricular transformations.`;
    case 'sachivalayam':
      return `A frontline administrative manual on ${title} within Andhra Pradesh's grassroots governance architecture. Explores the 73rd and 74th Constitutional Amendments, AP Panchayat Raj Act 1994, the operational matrix of 15,004 Grama and Ward Secretariats, cadre-specific responsibilities, citizen charter timeframes, and single-desk grievance redressal portals (Spandana).`;
    case 'highcourt':
      return `An exhaustive judicial administration reference for ${title}. Details the constitutional jurisdiction of the High Court of Andhra Pradesh under Articles 214–231, writ powers under Article 226, Civil Rules of Practice, Criminal Rules of Practice, judicial registry administration, service conditions of subordinate judiciary, and apex court precedents.`;
    case 'reasoning':
      return `A comprehensive analytical, mathematical, and logical reasoning framework for ${title}. Delivers rigorous step-by-step algorithmic shortcuts, formula derivations, algebraic identities, geometric properties, tabular deductions, and pattern recognition matrices tailored for high-speed calculation and zero-error accuracy in state screening and mains exams.`;
    default:
      return `A thorough, multidimensional study chapter on ${title}. Synthesizes conceptual definitions, statutory provisions, operational guidelines, comparative metrics, and state-specific contemporary applications designed for maximum retention and top percentile scoring in Andhra Pradesh competitive examinations.`;
  }
}

function generateDeepOverviewTe(topic: Topic, domain: string, existingOverviewTe?: string): string {
  const titleTe = topic.titleTe || topic.title;
  if (existingOverviewTe && existingOverviewTe.length > 250) {
    return existingOverviewTe;
  }

  switch (domain) {
    case 'polity':
      return `${titleTe} పై సమగ్రమైన, లోతైన రాజ్యాంగ మరియు పరిపాలనా విశ్లేషణ. భారత రాజ్యాంగంలోని ప్రాథమిక ఆర్టికల్స్, పార్లమెంటరీ చట్టాలు, కేంద్ర-రాష్ట్ర శాసన మరియు కార్యనిర్వాహక అధికారాల పంపిణీ, సుప్రీంకోర్టు మరియు ఆంధ్రప్రదేశ్ హైకోర్టు కీలక తీర్పులను ఈ అధ్యాయం వివరంగా చర్చిస్తుంది. ఏపీపీఎస్సీ గ్రూప్ 1, గ్రూప్ 2 మరియు ఇతర పోటీ పరీక్షలకు అవసరమైన నిబంధనలు, సవరణల చరిత్ర, రాజ్యాంగ రక్షణలు మరియు జిల్లా స్థాయి పరిపాలనా యంత్రాంగంపై సంపూర్ణ పట్టును అందిస్తుంది.`;
    case 'history':
      return `${titleTe} పై చారిత్రక, శాసనపరమైన మరియు సామాజిక-సాంస్కృతిక సమగ్ర విశ్లేషణ. ప్రాచీన శాసనాలు, నాణేల ఆధారాలు, వాస్తు శిల్పకళా రీతులు, పరిపాలనా విభాగాలు మరియు సాహిత్య గ్రంథాల ఆధారంగా ఈ అధ్యాయం రూపొందించబడింది. జాతీయోద్యమంలో ఆంధ్రుల పాత్ర, సంఘ సంస్కరణోద్యమాలు (కందుకూరి, గురజాడ), చారిత్రక ఒప్పందాలు (శ్రీబాగ్ ఒడంబడిక, పెద్దమనుషుల ఒప్పందం) మరియు భాషా ప్రయుక్త రాష్ట్ర ఆవిర్భావ ఘట్టాలను సమగ్రంగా వివరిస్తుంది.`;
    case 'economy':
      return `${titleTe} పై లోతైన స్థూల ఆర్థిక మరియు ఆంధ్రప్రదేశ్ రాష్ట్ర ఆర్థిక విశ్లేషణ. జాతీయ ఆదాయ గణాంకాలు, ద్రవ్య విధానం, ద్రవ్యోల్బణ సూచికలు, ఆర్థిక సమాఖ్య వ్యవస్థ మరియు ఆంధ్రప్రదేశ్ ఆర్థిక వ్యవస్థ స్వరూపం ఇందులో పొందుపరచబడ్డాయి. రాష్ట్ర స్థూల ఉత్పత్తి (GSDP) వాటాలు, ఆక్వాకల్చర్, ఉద్యానవన రంగాలు, పారిశ్రామిక కారిడార్లు, ఎఫ్‌ఆర్‌బీఎం (FRBM) పరిమితులు మరియు రాష్ట్ర ప్రభుత్వ నవరత్నాల సంక్షేమ పథకాల సమగ్ర అమలు తీరును వివరిస్తుంది.`;
    case 'geography':
      return `${titleTe} పై సమగ్ర భౌగోళిక, నైసర్గిక మరియు వనరుల విశ్లేషణ. ఆంధ్రప్రదేశ్ 974 కిలోమీటర్ల తీరరేఖ, తూర్పు కనుమలు, తీర మైదానాలు, రాయలసీమ పీఠభూమి, గోదావరి, కృష్ణా, పెన్నా నదీ పరివాహక ప్రాంతాలు, వ్యవసాయ-శీతోష్ణస్థితి మండలాలు, నేలల వర్గీకరణ, ఖనిజ సంపద మరియు 26 పునర్వ్యవస్థీకృత జిల్లాల సరిహద్దులు మరియు ప్రత్యేకతలను చర్చిస్తుంది.`;
    case 'law':
      return `${titleTe} పై చట్టబద్ధమైన మరియు న్యాయపరమైన సమగ్ర అధ్యయనం. భారతీయ శిక్షా స్మృతి (IPC 1860) / భారతీయ న్యాయ సంహిత (BNS 2023), క్రిమినల్ ప్రొసీజర్ కోడ్ (CrPC 1973) / BNSS 2023, మరియు భారతీయ సాక్ష్య చట్టం 1872 / BSA 2023 లోని కీలక సెక్షన్లు, ఎఫ్‌ఐఆర్ (FIR 154) నమోదు, అరెస్టు నిబంధనలు, సోదాలు, పోలీస్ స్టేషన్ల అధికార పరిధి మరియు ఏపీ దిశ వ్యవస్థను వివరిస్తుంది.`;
    case 'education':
      return `${titleTe} పై డీఎస్సీ మరియు టెట్ అభ్యర్థుల కోసం లోతైన విద్యా మనోవిజ్ఞాన శాస్త్ర మరియు బోధనా పద్ధతుల విశ్లేషణ. పియాజే, వైగోట్స్కీ, కోల్‌బర్గ్, ఎరిక్సన్ వికాస సిద్ధాంతాలు, అభ్యాసన సిద్ధాంతాలు (పావ్‌లోవ్, స్కిన్నర్, థార్న్‌డైక్), బహుళ ప్రజ్ఞా సిద్ధాంతం, విద్యా హక్కు చట్టం 2009 (RTE), మరియు జాతీయ విద్యా విధానం 2020 (NEP) మార్గదర్శకాలను వివరిస్తుంది.`;
    default:
      return `${titleTe} పై అత్యంత లోతైన మరియు సమగ్రమైన అధ్యాయ సమాచారం. ప్రాథమిక భావనలు, చట్టబద్ధమైన నిబంధనలు, కార్యాచరణ మార్గదర్శకాలు, పోలిక పట్టికలు మరియు ఆంధ్రప్రదేశ్ పోటీ పరీక్షలకు అవసరమైన అన్ని అంశాలను స్పష్టంగా వివరిస్తుంది.`;
  }
}

function generateInDepthSections(topic: Topic, domain: string, existingSections: TopicSection[]): TopicSection[] {
  // If user already has 3 or more rich sections with long content, enhance and return
  if (existingSections && existingSections.length >= 3 && existingSections[0].paragraphs.length >= 3) {
    return existingSections.map(s => ({
      ...s,
      examAlert: s.examAlert || 'Verify exact statutory wording: Examiners create traps around mandatory vs discretionary powers.',
      examAlertTe: s.examAlertTe || 'చట్టబద్ధమైన నిబంధనలను పరిశీలించండి: తప్పనిసరి అధికారాలు మరియు విచక్షణాధికారాల మధ్య తేడాను గమనించండి.'
    }));
  }

  const title = topic.title;
  const titleTe = topic.titleTe || topic.title;

  switch (domain) {
    case 'polity':
      return [
        {
          title: `Constitutional Genesis, Drafting History & Statutory Articles`,
          titleTe: `రాజ్యాంగ నేపథ్యం, ముసాయిదా చరిత్ర & చట్టబద్ధ అధికరణలు`,
          paragraphs: [
            `The constitutional foundation of ${title} is rooted in the structural framework adopted by the Constituent Assembly under the guidance of Dr. B.R. Ambedkar and the Drafting Committee. This domain is codified within specific Articles and Schedules of the Constitution of India, establishing unambiguous limits on state authority while securing fundamental rights, institutional checks and balances, and democratic accountability.`,
            `Key Constitutional Clauses & Sub-provisions: Under Part III, Part IV, Part V, and Part VI of the Constitution, detailed procedural mandates govern the relationship between the Executive, the Legislature, and the Judiciary. Special constitutional procedures differentiate ordinary legislative bills (passed by simple majority under Article 107/196) from Money Bills (Articles 110/199 requiring exclusive initiation in the Lower House) and Constitutional Amendments (Article 368 requiring special majorities).`,
            `Statutory & Administrative Alignment: State legislation enacted by the Andhra Pradesh Legislative Assembly functions within the constitutional boundaries set by the Seventh Schedule (List I Union List, List II State List, and List III Concurrent List), with Article 254 resolving repugnancy in favor of Parliamentary statutes unless Presidential assent has been explicitly granted under Article 254(2).`
          ],
          paragraphsTe: [
            `${titleTe} యొక్క రాజ్యాంగ ప్రాతిపదిక డాక్టర్ బి.ఆర్. అంబేద్కర్ గారి నేతృత్వంలోని ముసాయిదా కమిటీ చర్చల నుండి రూపొందించబడింది. భారత రాజ్యాంగంలోని నిర్దిష్ట భాగాలలో పొందుపరచబడిన నిబంధనలు కార్యనిర్వాహక వర్గం, శాసనసభ మరియు న్యాయవ్యవస్థల మధ్య స్పష్టమైన అధికారాల విభజనను మరియు సమతుల్యతను నిర్ధారిస్తాయి.`,
            `కీలక అధికరణలు & చట్టబద్ధమైన ఉప నిబంధనలు: రాజ్యాంగంలోని 3, 4, 5 మరియు 6వ భాగాలలో ఉన్న నిబంధనలు పరిపాలనా పద్ధతులను నిర్దేశిస్తాయి. సాధారణ బిల్లులు (ఆర్టికల్ 107/196 సాధారణ మెజారిటీ), మనీ బిల్లులు (ఆర్టికల్ 110/199 విధానసభలో మాత్రమే ప్రవేశపెట్టాలి), మరియు రాజ్యాంగ సవరణలు (ఆర్టికల్ 368 ప్రత్యేక మెజారిటీ) మధ్య స్పష్టమైన తేడాలు ఉన్నాయి.`,
            `కేంద్ర-రాష్ట్ర శాసన సంబంధాలు: 7వ షెడ్యూల్‌లోని యూనియన్ జాబితా (జాబితా I), రాష్ట్ర జాబితా (జాబితా II), మరియు ఉమ్మడి జాబితా (జాబితా III) పరిధిలో చట్టాలు రూపొందించబడతాయి. ఆర్టికల్ 254 ప్రకారం ఉమ్మడి జాబితాలోని అంశాలపై కేంద్ర చట్టం చెల్లుబాటు అవుతుంది (రాష్ట్రపతి ఆమోదం పొందిన సందర్భాలలో తప్ప).`
          ],
          keyPoints: [
            `Constitutional Classification: Exact Articles, Parts, and Schedules governing this domain.`,
            `Procedural Differences: Money Bills (Art 110/199), Financial Bills (Art 117/207), and Constitutional Amendments (Art 368).`,
            `Legislative Competence: 7th Schedule distribution and Article 254 conflict resolution principles.`
          ],
          keyPointsTe: [
            `రాజ్యాంగ వర్గీకరణ: సంబంధిత భాగాలు, అధికరణలు (Articles) మరియు షెడ్యూళ్లు.`,
            `బిల్లుల రకాలు: సాధారణ బిల్లులు, మనీ బిల్లులు (ఆర్టికల్ 199), మరియు రాజ్యాంగ సవరణలు (ఆర్టికల్ 368).`,
            `శాసన అధికారాల విభజన: 7వ షెడ్యూల్ మరియు ఆర్టికల్ 254 వివాద పరిష్కార సూత్రాలు.`
          ],
          examAlert: `Direct Exam Trap: Examiners frequently confuse Article 199 (Money Bill in State Assembly - certified solely by Speaker) with Article 202 (Annual Financial Statement). The Speaker's decision is final and non-justiciable.`,
          examAlertTe: `పరీక్ష హెచ్చరిక: ఆర్టికల్ 199 మనీ బిల్లుపై స్పీకర్ నిర్ణయమే అంతిమమైనది. దీనిని న్యాయస్థానాలలో సవాలు చేయలేరు.`
        }
      ];

    case 'history':
      return [
        {
          title: `1. Epigraphical Records, Dynastic Genealogy & Chronological Milestones`,
          titleTe: `1. శాసనాధారాలు, రాజవంశ వంశవృక్షం & కాలక్రమానుగత మైలురాళ్లు`,
          paragraphs: [
            `The historical narrative of ${title} is substantiated by authoritative lithic inscriptions (rock edicts), copper plate charters, and contemporary numismatic troves discovered across the Deccan. From the early Mauryan edicts at Erragudi and Rajula Mandagiri (Kurnool District) in Brahmi script and Prakrit language, Andhra established a sophisticated administrative, maritime, and agrarian civilisation.`,
            `Dynastic Sequences & Political Hegemony: The Satavahanas (230 BCE – 220 CE, 30 kings according to Puranas) unified the Deccan under rulers such as Simuka, Satakarni I (Nanaghat Inscription of Naganika), Hala (compiler of Gaha Sattasai in Maharashtri Prakrit), and Gautamiputra Satakarni (23rd king, celebrated in the Nasik Prashasti as 'Trisamudratoyapitavahana'). They were succeeded by the Ikshvakus of Vijayapuri (Nagarjunakonda), Vishnukundins (Vemulawada/Undavalli caves), Eastern Chalukyas of Vengi (Kubja Vishnuvardhana, 624 CE), Kakatiyas of Orugallu (Ganapati Deva, Rani Rudrama Devi), and the Vijayanagara Empire (1336–1565).`,
            `Agrarian Expansion & Feudal Formations: The establishment of Ghatika institutions (higher learning centers), Brahmadeya and Agrahara land grants, tank-based chain irrigation systems (Kakatiya Cheruvulu), and maritime trade charters (Motupalli Charter of Ganapati Deva 1244 CE) fueled continuous economic resilience.`
          ],
          paragraphsTe: [
            `${titleTe} యొక్క చారిత్రక పరిణామ క్రమం ప్రాచీన శిలా శాసనాలు, తామ్ర శాసనాలు మరియు నాణేల ఆధారాలతో ధ్రువీకరించబడింది. కర్నూలు జిల్లా ఎర్రగుడి మరియు రాజులమందగిరిలో లభించిన అశోకుని బ్రాహ్మీ లిపి ప్రాకృత శాసనాల నుండి ప్రారంభించి ఆంధ్ర దేశం గొప్ప నాగరికతను వికసింపజేసింది.`,
            `రాజవంశాల క్రమం & రాజ్య విస్తరణ: పురాణాల ప్రకారం 30 మంది శాతవాహన రాజులు (230 క్రీ.పూ - 220 క్రీ.శ) పాలించారు. శ్రీముఖుడు (స్థాపకుడు), మొదటి శాతకర్ణి (నానాఘాట్ శాసనం), హాలుడు (గాథాసప్తశతి కర్త), గౌతమీపుత్ర శాతకర్ణి (నాసిక్ ప్రశస్తి - త్రిసముద్రతోయపీతవాహన) ప్రసిద్ధులు. అనంతరం విజయపురి ఇక్ష్వాకులు, విష్ణుకుండినులు, వేంగి తూర్పు చాళుక్యులు, కాకతీయులు మరియు విజయనగర సామ్రాజ్యం ఆంధ్ర సంస్కృతిని అత్యున్నత స్థాయికి చేర్చాయి.`,
            `వ్యవసాయం & వాణిజ్య వికాసం: గొలుసుకట్టు చెరువుల నిర్మాణం (కాకతీయుల కాలం), ఘటికలు (ఉన్నత విద్యా కేంద్రాలు), బ్రహ్మదేయ గ్రామాలు మరియు విదేశీ వాణిజ్యాన్ని ప్రోత్సహించిన మోటుపల్లి అభయ శాసనం (గణపతి దేవుడు 1244 క్రీ.శ) ఆర్థిక స్థిరత్వాన్ని చేకూర్చాయి.`
          ],
          keyPoints: [
            `Key Inscriptions: Erragudi, Nanaghat (Naganika), Nasik Prashasti (Gautami Balashri), Motupalli Charter.`,
            `Satavahana Timeline: 30 Kings, Capitals at Kotilingala -> Dhanyakataka (Amaravati) -> Paithan.`,
            `Eastern Chalukyas: Kubja Vishnuvardhana (Founder, 624 CE), Rajaraja Narendra (Nannaya Bhattu patron).`
          ],
          keyPointsTe: [
            `ప్రసిద్ధ శాసనాలు: ఎర్రగుడి (అశోకుడు), నానాఘాట్ (నాగానిక), నాసిక్ (గౌతమీ బాలశ్రీ), మోటుపల్లి (గణపతి దేవుడు).`,
            `శాతవాహన యుగం: 30 మంది రాజులు, రాజధానులు (కోటిలింగాల -> ధాన్యకటకం/అమరావతి -> ప్రతిష్ఠానపురం).`,
            `వేంగి చాళుక్యులు: కుబ్జ విష్ణువర్ధనుడు (624 క్రీ.శ), రాజరాజ నరేంద్రుడు (నన్నయ భట్టారకుని పోషకుడు).`
          ],
          examAlert: `Direct APPSC Trap: The Nanaghat inscription was issued by Queen Naganika (wife of Satakarni I) and records the first epigraphical evidence of land grants with tax exemptions to priests.`,
          examAlertTe: `పరీక్ష హెచ్చరిక: నానాఘాట్ శాసనం నాగానిక చేత వేయించబడింది. భారతదేశంలో భూదానాల గురించిన మొట్టమొదటి లిఖితపూర్వక ఆధారం ఇదే.`
        },
        {
          title: `2. Social Reformers, Renaissance Literature & Freedom Struggle in Andhra`,
          titleTe: `2. సంఘ సంస్కరణోద్యమం, సాహితీ పునరుజ్జీవనం & ఆంధ్రాలో స్వాతంత్ర్య పోరాటం`,
          paragraphs: [
            `The 19th and early 20th centuries witnessed an unprecedented socio-cultural awakening led by Kandukuri Veeresalingam Panthulu (1848–1919), widely hailed as the Father of Renaissance in Telugu. Veeresalingam established the Hitakarini Samajam (1906), conducted the historic first widow remarriage in Rajahmundry on 11 December 1881, published the crusading journal 'Viveka Vardhani', and authored the first Telugu novel 'Rajasekhara Charitra' (1878).`,
            `Literary & Linguistic Pioneers: Gurazada Apparao shattered orthodox poetic conventions with his revolutionary play 'Kanyasulkam' (1892, exposing bride-price and child marriage) and immortal national poem 'Desamunu Preminchumanna'. Gidugu Venkata Ramamurthy championed the Spoken Telugu Movement (Vyavaharika Bhasha), democratizing literature away from archaic scholasticism (Grahya Bhasha).`,
            `Heroic Guerrilla Warfare & Tribal Movements: The 1922–1924 Rampa Rebellion in the Manyam agency forests of the Eastern Ghats was led by the legendary Alluri Sitarama Raju. Mobilizing tribal Koya and Konda Dora warriors against the oppressive Madras Forest Act of 1882, Alluri executed lightning attacks on police stations (Chintapalli, Rampachodavaram, Krishnadevipeta, Addateegala) before attaining martyrdom at Koyyuru on 7 May 1924.`
          ],
          paragraphsTe: [
            `19వ శతాబ్దంలో కందుకూరి వీరేశలింగం పంతులు (1848-1919) ఆంధ్రదేశంలో సంఘ సంస్కరణ ఉద్యమానికి నాంది పలికారు. 1881 డిసెంబర్ 11న రాజమండ్రిలో తొలి వితంతు పునర్వివాహం జరిపించారు. వివేకవర్ధని పత్రిక, హితకారిణి సమాజం (1906), మరియు తొలి తెలుగు నవల రాజశేఖర చరిత్ర (1878) రచించారు.`,
            `సాహిత్య విప్లవం: గురజాడ అప్పారావు గారు 'కన్యాశుల్కం' (1892) నాటకం ద్వారా బాల్య వివాహాలు, కన్యాశుల్కం దురాచారాన్ని ఎండగట్టారు. గిడుగు రామమూర్తి పంతులు గారు వాడుక భాషా ఉద్యమం (వ్యావహారిక భాష) ద్వారా విద్యావ్యాప్తికి కృషి చేశారు.`,
            `రంపా గిరిజన విప్లవం (1922-1924): అల్లూరి సీతారామరాజు నేతృత్వంలో మన్యం అడవులలో బ్రిటిష్ మద్రాస్ ఫారెస్ట్ చట్టం 1882 కు వ్యతిరేకంగా సాయుధ గెరిల్లా పోరాటం జరిగింది. చింతపల్లి, రంపచోడవరం, కృష్ణదేవిపేట ఠాణాలపై దాడి చేసి ఆయుధాలు స్వాధీనం చేసుకున్నారు. 1924 మే 7న కొయ్యూరు వద్ద అల్లూరి అమరులయ్యారు.`
          ],
          keyPoints: [
            `Kandukuri: 1st Widow Remarriage (11 Dec 1881), Viveka Vardhani, Rajasekhara Charitra, Hitakarini Samajam.`,
            `Gurazada Apparao: Kanyasulkam (1892), 'Desamunu Preminchumanna' anthem.`,
            `Alluri Sitarama Raju: 1922-1924 Rampa Rebellion against Madras Forest Act 1882; Martyrdom on 7 May 1924.`
          ],
          keyPointsTe: [
            `కందుకూరి: మొదటి వితంతు వివాహం (11 డిసెంబర్ 1881), వివేకవర్ధని, రాజశేఖర చరిత్ర, హితకారిణి సమాజం.`,
            `గురజాడ: కన్యాశుల్కం (1892), దేశమును ప్రేమించుమన్నా గీతం.`,
            `అల్లూరి: 1922-1924 రంపా తిరుగుబాటు, బ్రిటిష్ ఫారెస్ట్ చట్టం 1882 కు వ్యతిరేక పోరాటం; అమరత్వం 1924 మే 7.`
          ],
          examAlert: `Examiner Pattern: Chirala-Perala Movement (1921) led by Duggirala Gopalakrishnayya and his 'Rama Dandu' established 'Ramanagar' municipality boycott. Pedanandipadu No-Tax Campaign was led by Parvataneni Veerayya Chowdary.`,
          examAlertTe: `పరీక్ష సరళి: చీరాల-పేరాల ఉద్యమాన్ని దుగ్గిరాల గోపాలకృష్ణయ్య (రామదండు) నడిపించారు; పెదనందిపాడు పన్నుల నిరాకరణ ఉద్యమాన్ని పర్వతనేని వీరయ్య చౌదరి నడిపించారు.`
        },
        {
          title: `3. The Andhra Movement, Sri Bagh Pact & Linguistic State Formation`,
          titleTe: `3. ప్రత్యేక ఆంధ్ర ఉద్యమం, శ్రీబాగ్ ఒడంబడిక & భాషా ప్రయుక్త రాష్ట్ర ఆవిర్భావం`,
          paragraphs: [
            `The political struggle for separate Andhra State began with the 1st Andhra Conference at Bapatla (1913) presided over by Bayya Narasimheswara Sarma, culminating in the establishment of the Andhra Mahasabha. Tanguturi Prakasam Pantulu ('Andhra Kesari', who bared his chest to British bayonets during the 1928 Simon Commission protests in Madras) and Bhogaraju Pattabhi Sitaramayya led the mass agitation.`,
            `The Sri Bagh Pact (14 November 1937): Signed at the residence of Kasi Nageswara Rao (Sri Bagh, Madras) between Coastal Andhra and Rayalaseema leaders. Key agreements included: (1) Capital or High Court must be located in Rayalaseema; (2) Equal irrigation priority for Tungabhadra and Krishna waters; (3) University centers at Anantapur and Waltair.`,
            `Potti Sreeramulu's Martyrdom & Wanchoo Commission: Following Amarajeevi Potti Sreeramulu's heroic 58-day fast unto death (19 October 1952 – 15 December 1952) at Madras, Prime Minister Jawaharlal Nehru announced statehood. On 1 October 1953, Andhra State was born with Kurnool as Capital, Guntur as High Court, and Tanguturi Prakasam as first Chief Minister.`
          ],
          paragraphsTe: [
            `1913 లో బాపట్లలో జరిగిన ప్రథమ ఆంధ్ర మహాసభ (అధ్యక్షుడు: బయ్య నరసింహేశ్వర శర్మ) తో ప్రత్యేక ఆంధ్ర రాష్ట్ర ఉద్యమం ఊపందుకుంది. ఆంధ్రకేసరి టంగుటూరి ప్రకాశం పంతులు (1928 సైమన్ కమిషన్ వ్యతిరేక పోరాటం) మరియు భోగరాజు పట్టాభి సీతారామయ్య ఉద్యమాన్ని ముందుండి నడిపించారు.`,
            `శ్రీబాగ్ ఒడంబడిక (14 నవంబర్ 1937): మద్రాసులోని కాశీనాథుని నాగేశ్వరరావు గారి నివాసంలో కోస్తా మరియు రాయలసీమ నాయకుల మధ్య కుదిరిన చారిత్రక ఒప్పందం. దీని ప్రకారం: (1) రాజధాని లేదా హైకోర్టులో ఒకదానిని రాయలసీమలో ఏర్పాటు చేయాలి; (2) తుంగభద్ర, కృష్ణా జలాల్లో రాయలసీమకు ప్రాధాన్యత; (3) రాయలసీమలో విశ్వవిద్యాలయ కేంద్రం.`,
            `పొట్టి శ్రీరాములు గారి ఆమరణ నిరాహారదీక్ష: 58 రోజుల వీరోచిత దీక్ష (1952 అక్టోబర్ 19 - డిసెంబర్ 15) అనంతరం నెహ్రూ ఆంధ్ర రాష్ట్రాన్ని ప్రకటించారు. 1953 అక్టోబర్ 1న కర్నూలు రాజధానిగా, గుంటూరు హైకోర్టుగా ఆంధ్ర రాష్ట్రం ఆవిర్భవించింది. తొలి ముఖ్యమంత్రిగా టంగుటూరి ప్రకాశం పంతులు ప్రమాణం చేశారు.`
          ],
          keyPoints: [
            `1st Andhra Mahasabha: Bapatla, 1913 (Presided by B.N. Sarma).`,
            `Sri Bagh Pact: 14 Nov 1937 (Rayalaseema protections: Capital/High Court choice & Irrigation).`,
            `Andhra State (1953): Capital Kurnool, High Court Guntur, 1st CM Tanguturi Prakasam Pantulu.`
          ],
          keyPointsTe: [
            `మొదటి ఆంధ్ర మహాసభ: బాపట్ల, 1913 (అధ్యక్షుడు: బి.ఎన్. శర్మ).`,
            `శ్రీబాగ్ ఒడంబడిక: 14 నవంబర్ 1937 (రాయలసీమ రక్షణలు, రాజధాని/హైకోర్టు ఎంపిక, సాగునీటి కేటాయింపులు).`,
            `ఆంధ్ర రాష్ట్రం (1953 అక్టోబర్ 1): రాజధాని కర్నూలు, హైకోర్టు గుంటూరు, మొదటి సీఎం టంగుటూరి ప్రకాశం.`
          ],
          examAlert: `Examiner Warning: Do not confuse Andhra State (1 Oct 1953, Capital Kurnool, 11 districts) with Andhra Pradesh (1 Nov 1956, Capital Hyderabad, 20 districts following Gentlemen's Agreement).`,
          examAlertTe: `పరీక్ష హెచ్చరిక: ఆంధ్ర రాష్ట్రం (1953 అక్టోబర్ 1, రాజధాని కర్నూలు) మరియు ఆంధ్రప్రదేశ్ (1956 నవంబర్ 1, రాజధాని హైదరాబాద్) ల మధ్య వ్యత్యాసాన్ని స్పష్టంగా గుర్తుంచుకోండి.`
        }
      ];

    case 'economy':
      return [
        {
          title: `1. Macroeconomic Fundamentals, National Accounting & Monetary Instruments`,
          titleTe: `1. స్థూల ఆర్థిక సూచికలు, జాతీయ ఆదాయ గణాంకాలు & ద్రవ్య విధాన సాధనాలు`,
          paragraphs: [
            `A thorough grasp of ${title} requires mastery of national accounting aggregates including Gross Domestic Product (GDP), Gross Value Added (GVA at basic prices), Net National Income (NNI), and Per Capita Income (PCI). Real GDP measures physical output at constant base year prices (2011–12 series), insulating economic measurement against inflationary distortions captured by the GDP Deflator.`,
            `Monetary Policy Transmission Mechanisms: The Reserve Bank of India (RBI) regulates liquidity via quantitative tools (Repo Rate under Liquidity Adjustment Facility - LAF, Standing Deposit Facility - SDF, Marginal Standing Facility - MSF, Cash Reserve Ratio - CRR, Statutory Liquidity Ratio - SLR) and qualitative credit rationing. Inflation targeting is statutorily anchored to Consumer Price Index (CPI-Combined) at 4% with a tolerance band of +/- 2% under the RBI Act 1934 Section 45ZB.`,
            `Fiscal Federalism & Budget Dynamics: The Fiscal Responsibility and Budget Management (FRBM) Act prescribes fiscal deficit limits (targeted at 3% of GSDP) and revenue balance. State borrowing ceilings are governed under Article 293(3) subject to Union Ministry of Finance conditionalities.`
          ],
          paragraphsTe: [
            `${titleTe} ను అర్థం చేసుకోవడానికి స్థూల దేశీయోత్పత్తి (GDP), స్థూల విలువ జోడింపు (GVA), నికర జాతీయ ఆదాయం (NNI) మరియు తలసరి ఆదాయం (PCI) లపై స్పష్టమైన అవగాహన అవసరం. ప్రస్తుత ధరల వద్ద ఆదాయం (నామినల్) మరియు స్థిర ధరల వద్ద ఆదాయం (రియల్ - ఆధార సంవత్సరం 2011-12) మధ్య తేడా ద్రవ్యోల్బణాన్ని సూచిస్తుంది.`,
            `రిజర్వ్ బ్యాంక్ ద్రవ్య పరపతి విధానం: ఆర్బీఐ ద్రవ్యోల్బణ నియంత్రణ కోసం రెపో రేటు, ఎస్‌డీఎఫ్ (SDF), ఎంఎస్‌ఎఫ్ (MSF), నగదు నిల్వల నిష్పత్తి (CRR), మరియు చట్టబద్ధ ద్రవ్యత్వ నిష్పత్తి (SLR) లను ఉపయోగిస్తుంది. వినియోగదారుల ధరల సూచిక (CPI) ఆధారంగా ద్రవ్యోల్బణాన్ని 4% (+/- 2%) వద్ద నియంత్రించడం ఆర్బీఐ లక్ష్యం.`,
            `ఆర్థిక సమాఖ్య వ్యవస్థ & ఎఫ్‌ఆర్‌బీఎం: ఎఫ్‌ఆర్‌బీఎం (FRBM) చట్టం ప్రకారం ద్రవ్య లోటును జీఎస్‌డీపీలో 3% లోపు ఉంచాలి. ఆర్టికల్ 293(3) ప్రకారం రాష్ట్రాల బహిరంగ మార్కెట్ రుణాలపై కేంద్ర ఆర్థిక శాఖ అనుమతి అవసరం.`
          ],
          keyPoints: [
            `National Accounting Base Year: 2011-12 Series for GDP & GVA calculations.`,
            `RBI Monetary Framework: 4% CPI inflation target (+/- 2% tolerance band under Sec 45ZB).`,
            `State Borrowing Rules: Article 293(3) Union consent requirement and FRBM 3% GSDP ceiling.`
          ],
          keyPointsTe: [
            `ఆధార సంవత్సరం: జీడీపీ & జీవీఏ గణాంకాలకు 2011-12 ఆధార సంవత్సరం.`,
            `ఆర్బీఐ ద్రవ్య లక్ష్యం: 4% (+/- 2%) సీపీఐ ద్రవ్యోల్బణ లక్ష్యం.`,
            `రాష్ట్ర రుణ నిబంధనలు: ఆర్టికల్ 293(3) కేంద్ర అనుమతి మరియు ఎఫ్‌ఆర్‌బీఎం 3% జీఎస్‌డీపీ పరిమితి.`
          ],
          examAlert: `Direct Question: Repo Rate is the rate at which RBI lends short-term funds to commercial banks against government securities, whereas Reverse Repo / SDF absorbs excess liquidity from banks without collateral.`,
          examAlertTe: `పరీక్ష ప్రశ్న: రెపో రేటు వద్ద ఆర్బీఐ బ్యాంకులకు స్వల్పకాలిక రుణాలు ఇస్తుంది; ఎస్‌డీఎఫ్ (SDF) వద్ద బ్యాంకుల నుండి మిగులు నిధులను స్వీకరిస్తుంది.`
        },
        {
          title: `2. Andhra Pradesh GSDP Composition, Agriculture & Industrial Nodes`,
          titleTe: `2. ఆంధ్రప్రదేశ్ జీఎస్‌డీపీ స్వరూపం, వ్యవసాయ రంగం & పారిశ్రామిక నోడ్స్`,
          paragraphs: [
            `Andhra Pradesh possesses a unique structural economic composition where the Primary (Agriculture & Allied) sector contributes approximately 34–36% of GSDP, far surpassing the national average of ~18–20%. The state is recognized as the Aquaculture Capital of India (accounting for over 70% of India's cultured shrimp export output) and the Fruit Bowl of South India (leading in papaya, mango, sweet orange, and banana cultivation across Rayalaseema).`,
            `Industrial Corridors & Maritime Connectivity: AP leverages three major national industrial corridors: (1) Visakhapatnam-Chennai Industrial Corridor (VCIC); (2) Chennai-Bengaluru Industrial Corridor (CBIC - Krishnapatnam node); (3) Hyderabad-Bengaluru Industrial Corridor (HBIC - Orvakal node). With 974 km of coastline, major ports (Visakhapatnam Port Authority, Gangavaram, Krishnapatnam, Kakinada) and non-major greenfield ports (Ramayapatnam, Bhavanapadu/Mulapeta, Machilipatnam) create a powerhouse export infrastructure.`,
            `Tertiary & Service Sector Frontiers: Expansion in fintech, electronic hardware clusters (Tirupati and Sri City SEZ), and logistics corridors drives high-value service exports and skilled employment.`
          ],
          paragraphsTe: [
            `ఆంధ్రప్రదేశ్ ఆర్థిక వ్యవస్థలో ప్రాథమిక రంగం (వ్యవసాయం మరియు అనుబంధ రంగాలు) జీఎస్‌డీపీలో 34-36% వాటాను కలిగి ఉంది (జాతీయ సగటు 18-20% కంటే చాలా ఎక్కువ). ఆంధ్రప్రదేశ్ దేశంలోనే ఆక్వాకల్చర్ రాజధానిగా (రొయ్యల ఎగుమతుల్లో 70% పైగా వాటా) మరియు దక్షిణ భారతదేశ పండ్ల బుట్టగా ప్రసిద్ధి చెందింది.`,
            `పారిశ్రామిక కారిడార్లు & పోర్టుల నెట్‌వర్క్: రాష్ట్రంలో మూడు ప్రధాన పారిశ్రామిక కారిడార్లు ఉన్నాయి: (1) విశాఖపట్నం-చెన్నై (VCIC); (2) చెన్నై-బెంగళూరు (CBIC - కృష్ణపట్నం నోడ్); (3) హైదరాబాద్-బెంగళూరు (HBIC - ఓర్వకల్లు నోడ్). 974 కి.మీ తీరరేఖ మరియు విశాఖ, గంగవరం, కృష్ణపట్నం, కాకినాడ, రామాయపట్నం, మూలపేట, మచిలీపట్నం పోర్టులు ఎగుమతులకు కేంద్రాలుగా ఉన్నాయి.`,
            `సేవా రంగం & ఎలక్ట్రానిక్స్: తిరుపతి మరియు శ్రీసిటీ (Sri City) ఎలక్ట్రానిక్స్ క్లస్టర్లు మరియు లాజిస్టిక్స్ హబ్‌లు రాష్ట్రంలో ఉపాధి కల్పనలో కీలక పాత్ర పోషిస్తున్నాయి.`
          ],
          keyPoints: [
            `AP Primary Sector Share: ~34-36% of GSDP (National leader in Aquaculture & Horticulture).`,
            `Key Industrial Corridors: VCIC, CBIC (Krishnapatnam node), HBIC (Orvakal node).`,
            `Port Infrastructure: 974 km coastline, Visakhapatnam Major Port, plus Ramayapatnam, Machilipatnam, Mulapeta.`
          ],
          keyPointsTe: [
            `ప్రాథమిక రంగ వాటా: జీఎస్‌డీపీలో ~34-36% (ఆక్వా & ఉద్యానవన రంగంలో దేశంలో ప్రథమం).`,
            `పారిశ్రామిక కారిడార్లు: వీసీఐసీ (VCIC), సీబీఐసీ (కృష్ణపట్నం), హెచ్‌బీఐసీ (ఓర్వకల్లు).`,
            `తీరప్రాంత మౌలిక వసతులు: 974 కి.మీ తీరరేఖ, విశాఖ మేజర్ పోర్టు, రామాయపట్నం, మచిలీపట్నం, మూలపేట పోర్టులు.`
          ],
          examAlert: `Statistical Trap: Sri City SEZ is located in Tirupati District (formerly Chittoor) and operates on a multi-product export framework right on the Tamil Nadu border.`,
          examAlertTe: `గణాంక గమనిక: శ్రీసిటీ మల్టీ-ప్రొడక్ట్ సెజ్ తిరుపతి జిల్లాలో (గతంలో చిత్తూరు) విస్తరించి ఉంది.`
        },
        {
          title: `3. Flagship Welfare Architecture & Socio-Economic Transformation`,
          titleTe: `3. ప్రధాన సంక్షేమ పథకాల వ్యూహం & సామాజిక-ఆర్థిక మార్పులు`,
          paragraphs: [
            `Andhra Pradesh's public policy framework is anchored in direct beneficiary empowerment through the Navaratnalu suite of welfare schemes. Implemented through the Direct Benefit Transfer (DBT) model and managed via village/ward secretariats, this architecture has minimized intermediation leakages and established measurable impacts on human development indices.`,
            `Key Pillar Schemes & Coverage: (1) Jagananna Amma Vodi / Vidya Deevena (financial assistance incentivizing school enrollment and 100% tuition reimbursement for higher education); (2) YSR Rythu Bharosa - PM KISAN (annual income support of Rs 13,500 for tenant and landowner farmers); (3) YSR Cheyutha & Aasara (financial assistance and SHG loan relief empowering women aged 45–60 years); (4) Dr. YSR Aarogyasri (cashless tertiary healthcare coverage up to Rs 25 Lakhs across 3,000+ networked hospitals).`,
            `Socio-Economic Survey Insights: Multi-dimensional poverty index (MPI) in Andhra Pradesh dropped significantly due to sustained rural social safety nets, housing distribution (Navaratnalu - Pedalandariki Illu), and universal basic services.`
          ],
          paragraphsTe: [
            `ఆంధ్రప్రదేశ్ సంక్షేమ నమూనా డైరెక్ట్ బెనిఫిట్ ట్రాన్స్‌ఫర్ (DBT) మరియు గ్రామ/వార్డు సచివాలయాల ద్వారా అమలు చేయబడుతున్న నవరత్నాలు పథకాలపై ఆధారపడి ఉంది. ఇది లబ్ధిదారులకు నేరుగా ఖాతాల్లో నగదు జమ చేస్తూ దళారీ వ్యవస్థను పూర్తిగా నిర్మూలించింది.`,
            `ప్రధాన సంక్షేమ పథకాలు: (1) అమ్మఒడి & విద్యా దీవెన (పాఠశాల హాజరు ప్రోత్సాహం మరియు ఉన్నత విద్యా ఫీజు రీయింబర్స్‌మెంట్); (2) వైఎస్సార్ రైతు భరోసా (రైతులు & కౌలు రైతులకు ఏడాదికి రూ. 13,500 పెట్టుబడి సాయం); (3) వైఎస్సార్ చేయూత & ఆసరా (45-60 ఏళ్ల ఎస్సీ, ఎస్టీ, బీసీ, మైనారిటీ మహిళలకు ఆర్థిక స్వావలంబన); (4) వైఎస్సార్ ఆరోగ్యశ్రీ (రూ. 25 లక్షల వరకు ఉచిత వైద్య సేవలు).`,
            `సామాజిక-ఆర్థిక సర్వే ఫలితాలు: బహుముఖ పేదరిక సూచిక (MPI) లో ఏపీ గణనీయమైన మెరుగుదల సాధించింది. ఇళ్ల పట్టాల పంపిణీ మరియు ప్రాథమిక ఆరోగ్య, విద్యా పథకాలు గ్రామీణ జీవన ప్రమాణాలను పెంచాయి.`
          ],
          keyPoints: [
            `DBT Delivery: Transparent cash transfer directly to Aadhaar-linked bank accounts.`,
            `Education Schemes: Amma Vodi, Jagananna Vidya Deevena (Tuition), Vasathi Deevena (Mess/Hostel).`,
            `Healthcare Pillar: Aarogyasri cashless coverage limit up to Rs 25 Lakhs per family.`
          ],
          keyPointsTe: [
            `డీబీటీ పద్ధతి: ఆధార్ అనుసంధానిత బ్యాంకు ఖాతాలకు నేరుగా నిధుల బదిలీ.`,
            `విద్యా పథకాలు: అమ్మఒడి, జగనన్న విద్యా దీవెన (పూర్తి ఫీజు), వసతి దీవెన (హాస్టల్ ఖర్చులు).`,
            `ఆరోగ్య భద్రత: ఆరోగ్యశ్రీ ద్వారా ప్రతి కుటుంబానికి రూ. 25 లక్షల వరకు ఉచిత చికిత్స.`
          ],
          examAlert: `Eligibility Criteria Check: YSR Cheyutha is specifically aimed at women between 45 to 60 years belonging to SC, ST, BC, and Minority communities.`,
          examAlertTe: `అర్హతల పరిశీలన: వైఎస్సార్ చేయూత పథకం 45 నుండి 60 సంవత్సరాల మధ్య వయస్సు గల ఎస్సీ, ఎస్టీ, బీసీ, మైనారిటీ మహిళలకు మాత్రమే వర్తిస్తుంది.`
        }
      ];

    default:
      // Generic high-depth multi-section fallback
      return [
        {
          title: `1. Foundational Theory, Core Principles & Definitional Boundaries`,
          titleTe: `1. మౌలిక సిద్ధాంతాలు, ప్రాథమిక నిర్వచనాలు & భావనాత్మక పరిధి`,
          paragraphs: [
            `A rigorous academic analysis of ${title} begins with establishing clear definitional boundaries, classification hierarchies, and standard operating principles. In competitive state exams, examiners focus on identifying subtle conceptual distinctions, edge-case provisos, and exact statutory terminology.`,
            `Structural and Theoretical Breakdown: The operational components of this chapter function as an integrated system. Whether applied in administrative policymaking, judicial adjudication, or field execution, every parameter is governed by established rules, validated empirical frameworks, and legal standards.`,
            `Historical Evolution & Paradigm Shifts: Understanding how this domain transitioned from classical historical precedents to modern digitized workflows allows aspirants to quickly synthesize multi-statement assertion-reason questions with 100% accuracy.`
          ],
          paragraphsTe: [
            `${titleTe} పై పట్టు సాధించడానికి ప్రాథమిక సూత్రాలు, వర్గీకరణ పద్ధతులు మరియు చట్టబద్ధమైన నిర్వచనాలను క్షుణ్ణంగా అధ్యయనం చేయాలి. పోటీ పరీక్షల్లో సూక్ష్మమైన భావనాత్మక తేడాలు మరియు మినహాయింపులపై ప్రశ్నలు వస్తాయి.`,
            `నిర్మాణాత్మక మరియు సిద్ధాంతపరమైన విశ్లేషణ: ఈ అధ్యాయంలోని అంశాలు ఒకదానితో ఒకటి అనుసంధానమై ఉంటాయి. పరిపాలనా విధానాలు, న్యాయ సమీక్ష లేదా క్షేత్రస్థాయి అమలులో ప్రతి అంశానికి నిర్దిష్ట నిబంధనలు మరియు ప్రమాణాలు ఉంటాయి.`,
            `చారిత్రక పరిణామ క్రమం: ఈ వ్యవస్థ కాలక్రమేణా ఎలా అభివృద్ధి చెందిందో తెలుసుకోవడం ద్వారా స్టేట్‌మెంట్ ఆధారిత ప్రశ్నలను సులభంగా సాధించవచ్చు.`
          ],
          keyPoints: [
            `Definitional Precision: Core technical terminology and standard classification.`,
            `Operational Architecture: Interdependent components and statutory frameworks.`,
            `Analytical Scope: Common distractor traps in multi-statement questions.`
          ],
          keyPointsTe: [
            `ఖచ్చితమైన నిర్వచనాలు: సాంకేతిక పదజాలం మరియు ప్రామాణిక వర్గీకరణ.`,
            `కార్యాచరణ నిర్మాణం: పరస్పర ఆధారిత భాగాలు మరియు చట్టబద్ధ నిబంధనలు.`,
            `విశ్లేషణాత్మక దృక్పథం: స్టేట్‌మెంట్ ప్రశ్నలలో తప్పు ఆప్షన్లను గుర్తించే పద్ధతి.`
          ],
          examAlert: `Rule of Thumb: Always read the question stem carefully to detect negation terms like "NOT", "INCORRECT", "EXCEPT", or "ALL BUT ONE".`,
          examAlertTe: `పరీక్ష నియమం: ప్రశ్నలో "సరైనది కానిది", "తప్పు సమాధానం", "మినహాయించి" వంటి పదాలు ఉన్నాయో లేదో గమనించండి.`
        },
        {
          title: `2. Critical Provisions, Functional Mechanics & Execution Protocols`,
          titleTe: `2. కీలక నిబంధనలు, కార్యాచరణ పద్ధతులు & అమలు ప్రక్రియలు`,
          paragraphs: [
            `The functional execution of ${title} relies on precise chronological, legal, or procedural workflows. From initial requisition to final statutory compliance, each step is bound by strict timelines, documentation thresholds, and oversight safeguards.`,
            `Jurisdictional Demarcation & Institutional Coordination: Clear distribution of responsibilities between central directorates, district collectorates, and local grassroots cadres prevents administrative overlap and ensures transparent public service delivery.`,
            `Audit, Compliance & Performance Metrics: Quantitative performance indicators, social audits, and grievance redressal mechanisms are institutionalized to guarantee that prescribed standards are rigorously maintained.`
          ],
          paragraphsTe: [
            `${titleTe} యొక్క ఆచరణాత్మక అమలు నిర్దిష్ట కాలపరిమితులు, చట్టబద్ధమైన నిబంధనలు మరియు పర్యవేక్షణ విధానాలపై ఆధారపడి ఉంటుంది. ప్రతి ప్రక్రియకు స్పష్టమైన మార్గదర్శకాలు ఉంటాయి.`,
            `అధికార పరిధుల వర్గీకరణ & సమన్వయం: రాష్ట్ర స్థాయి విభాగాలు, జిల్లా కలెక్టరేట్లు మరియు క్షేత్రస్థాయి సిబ్బంది మధ్య బాధ్యతల విభజన సమర్థవంతమైన ప్రజా సేవలను అందిస్తుంది.`,
            `ఆడిటింగ్ & పారదర్శకత: సామాజిక తనిఖీలు, డిజిటల్ పర్యవేక్షణ మరియు ప్రజల ఫిర్యాదుల పరిష్కార వ్యవస్థలు జవాబుదారీతనాన్ని పెంచుతాయి.`
          ],
          keyPoints: [
            `Procedural Steps: Step-by-step statutory and functional workflows.`,
            `Role Allocations: Clear demarcation of powers across administrative hierarchies.`,
            `Compliance Measures: Internal review protocols and statutory audits.`
          ],
          keyPointsTe: [
            `కార్యాచరణ దశలు: చట్టబద్ధమైన మరియు పరిపాలనాపరమైన విధివిధానాలు.`,
            `అధికారాల విభజన: వివిధ హోదాల మధ్య బాధ్యతల స్పష్టత.`,
            `జవాబుదారీ ప్రమాణాలు: సమీక్ష విధానాలు మరియు ఆడిట్ మార్గదర్శకాలు.`
          ],
          examAlert: `Watch out for timeframes: Statutory deadlines (e.g. 15 days, 30 days, 90 days) are the most common source of factual distractors.`,
          examAlertTe: `గడువులపై దృష్టి: చట్టంలో నిర్దేశించిన కాలపరిమితులు (15 రోజులు, 30 రోజులు, 90 రోజులు) పరీక్షల్లో తరచుగా అడిగే అంశాలు.`
        },
        {
          title: `3. Andhra Pradesh State Context, Contemporary Case Laws & Exam Strategy`,
          titleTe: `3. ఆంధ్రప్రదేశ్ రాష్ట్ర నేపథ్యం, తాజా పరిణామాలు & పరీక్షా వ్యూహం`,
          paragraphs: [
            topic.content.apSpecificFocus || `In Andhra Pradesh, this subject is closely aligned with the restructured 26 districts administrative architecture, state welfare initiatives, and recent High Court precedents. Candidates must synthesize theoretical concepts with ground-level governance realities.`,
            `Contemporary Applications & Technology Integration: The deployment of real-time e-office systems, GIS mapping, and single-desk citizen service delivery through 15,004 Grama/Ward Secretariats exemplifies Andhra Pradesh's modernization drive.`,
            `High-Scoring Exam Strategy: Master candidates should memorize core numerical benchmarks, statutory section numbers, landmark legal judgments, and comparative tabular matrices to secure maximum marks in both screening and mains exams.`
          ],
          paragraphsTe: [
            topic.content.apSpecificFocusTe || `ఆంధ్రప్రదేశ్‌లో 26 జిల్లాల నూతన పరిపాలనా వ్యవస్థ, గ్రామ/వార్డు సచివాలయాల నెట్‌వర్క్ మరియు హైకోర్టు తాజా తీర్పుల ఆధారంగా ఈ అంశం ప్రాధాన్యతను సంతరించుకుంది.`,
            `సాంకేతిక అనుసంధానం: ఈ-ఆఫీస్ విధానాలు, జియో-ట్యాగింగ్ మరియు పారదర్శక సేవల ద్వారా ఆంధ్రప్రదేశ్ ప్రభుత్వం పరిపాలనను ప్రజల ముంగిటకు చేర్చింది.`,
            `అత్యధిక మార్కుల సాధన వ్యూహం: కీలక అధికరణలు, చట్టాలు, తీర్పులు మరియు పట్టికలలోని గణాంకాలను పదేపదే పునశ్చరణ చేసుకోవడం ద్వారా పూర్తి మార్కులు సాధించవచ్చు.`
          ],
          keyPoints: [
            `AP 26 Districts Relevance: Ground-level implementation parameters across the state.`,
            `E-Governance Initiatives: Digital dashboards, single-desk portals, and biometric authentication.`,
            `Winning Exam Technique: Elimination of numerical and absolute-word traps ("Always", "Never").`
          ],
          keyPointsTe: [
            `26 జిల్లాల ప్రాధాన్యత: రాష్ట్రవ్యాప్తంగా క్షేత్రస్థాయి అమలు తీరు.`,
            `ఈ-గవర్నెన్స్ సేవలు: డిజిటల్ పోర్టల్స్, సింగిల్ డెస్క్ సేవలు మరియు బయోమెట్రిక్ ప్రమాణీకరణ.`,
            `పరీక్షా పద్ధతి: సంపూర్ణ పదాలు ("ఎల్లప్పుడూ", "ఎప్పటికీ కాదు") ఉన్న ఆప్షన్లను జాగ్రత్తగా పరిశీలించండి.`
          ],
          examAlert: `Final Tip: In multi-statement options, if you can decisively eliminate just one wrong statement, you can often identify the correct answer choice immediately without reading all four options.`,
          examAlertTe: `చివరి చిట్కా: మల్టీ-స్టేట్‌మెంట్ ప్రశ్నలలో ఒక్క తప్పు వాక్యాన్ని గుర్తించగలిగితే, మిగిలిన ఆప్షన్లను ఎలిమినేట్ చేసి సరైన జవాబును వేగంగా ఎంచుకోవచ్చు.`
        }
      ];
  }
}

function generateDomainTables(topic: Topic, domain: string): NoteTable[] {
  if (domain === 'polity') {
    return [
      {
        title: 'Constitutional Comparison & Functional Authority Matrix',
        titleTe: 'రాజ్యాంగ నిబంధనలు & అధికారాల విభజన పట్టిక',
        headers: ['Dimension / Parameter', 'Constitutional Basis', 'State of Andhra Pradesh Context', 'High-Yield Exam Focus'],
        headersTe: ['పరిమాణం / అంశం', 'రాజ్యాంగ ప్రాతిపదిక', 'ఆంధ్రప్రదేశ్ రాష్ట్ర సందర్భం', 'పరీక్షా ప్రాధాన్యత'],
        rows: [
          ['Executive Authority', 'Articles 153 to 167 (Part VI)', 'Governor & Council headed by CM', 'Discretionary powers under Art 163 (Aid & Advice)'],
          ['Legislative Powers', 'Articles 168 to 213', 'Bicameral (175 MLA + 58 MLC)', 'Article 169 (Legislative Council creation/abolition)'],
          ['Financial Oversight', 'Articles 198, 202-207', 'Consolidated Fund & PAC Scrutiny', 'Money Bill definition under Art 199 (Speaker certification)'],
          ['Judicial Hierarchy', 'Articles 214 to 237', 'High Court of AP at Nelapadu, Amaravati', 'Writ jurisdiction under Art 226 wider than Art 32'],
          ['Local Self-Governance', '73rd & 74th Amendments (Part IX & IXA)', 'AP PR Act 1994 & 15,004 Secretariats', '29 Subjects (11th Sched) / 18 Subjects (12th Sched)']
        ],
        rowsTe: [
          ['కార్యనిర్వాహక అధికారం', 'ఆర్టికల్స్ 153 నుండి 167 (6వ భాగం)', 'గవర్నర్ & ముఖ్యమంత్రి నేతృత్వంలోని మంత్రిమండలి', 'ఆర్టికల్ 163 విచక్షణాధికారాలు (సలహా & సహాయం)'],
          ['శాసన అధికారాలు', 'ఆర్టికల్స్ 168 నుండి 213', 'ద్విసభా విధానం (175 అసెంబ్లీ + 58 కౌన్సిల్)', 'ఆర్టికల్ 169 (శాసనమండలి ఏర్పాటు/రద్దు ప్రక్రియ)'],
          ['ఆర్థిక పర్యవేక్షణ', 'ఆర్టికల్స్ 198, 202-207', 'కన్సాలిడేటెడ్ ఫండ్ & పీఏసీ (PAC) పరిశీలన', 'ఆర్టికల్ 199 మనీ బిల్లు నిర్వచనం (స్పీకర్ ధ్రువీకరణ)'],
          ['న్యాయ వ్యవస్థ', 'ఆర్టికల్స్ 214 నుండి 237', 'ఆంధ్రప్రదేశ్ హైకోర్టు (నెలపాడు, అమరావతి)', 'ఆర్టికల్ 226 రిట్ పరిధి ఆర్టికల్ 32 కంటే విస్తృతమైనది'],
          ['స్థానిక స్వపరిపాలన', '73 & 74వ సవరణలు (9 & 9A భాగాలు)', 'ఏపీ పంచాయతీ రాజ్ చట్టం 1994 & 15,004 సచివాలయాలు', '11వ షెడ్యూల్ 29 విధులు / 12వ షెడ్యూల్ 18 విధులు']
        ]
      }
    ];
  }

  if (domain === 'history') {
    return [
      {
        title: 'Andhra Dynasties & Key Administrative Features',
        titleTe: 'ఆంధ్ర రాజవంశాలు & ముఖ్య పరిపాలనా విశేషాలు',
        headers: ['Dynasty / Era', 'Capital / Centers', 'Major Rulers', 'Architecture, Coins & Literary Legacy'],
        headersTe: ['రాజవంశం / యుగం', 'రాజధాని / కేంద్రాలు', 'ప్రముఖ పాలకులు', 'శిల్పకళ, నాణేలు & సాహిత్య విశేషాలు'],
        rows: [
          ['Satavahanas (230 BCE - 220 CE)', 'Kotilingala, Dhanyakataka (Amaravati)', 'Simuka, Satakarni I, Hala, Gautamiputra Satakarni', 'Amaravati Stupa, Roman coin hoards, Prakrit Gaha Sattasai'],
          ['Ikshvakus of Vijayapuri', 'Nagarjunakonda (Vijayapuri)', 'Vasishthiputra Santamula, Virapurushadatta', 'Mahachaitya, patronage to Buddhist nuns (Bhikshunis), Sanskrit inscriptions'],
          ['Eastern Chalukyas of Vengi', 'Vengi, Rajahmundry', 'Kubja Vishnuvardhana (624 CE), Rajaraja Narendra', 'Birth of Telugu Mahabharata (Nannaya Bhattu 1022 CE), Draksharamam temple'],
          ['Kakatiyas of Warangal', 'Orugallu (Warangal)', 'Ganapati Deva, Rani Rudrama Devi, Prataparudra', 'Chain-tank irrigation, Ramappa temple (UNESCO), Motupalli trade charter 1244 CE'],
          ['Vijayanagara Empire (1336-1565)', 'Hampi (Vijayanagara), Penukonda', 'Harihara I, Bukka I, Sri Krishnadevaraya (1509-1529)', 'Amuktamalyada, Ashtadiggajas (Bhuvana Vijayam), Lepakshi Veerabhadra temple']
        ],
        rowsTe: [
          ['శాతవాహనులు (230 క్రీ.పూ - 220 క్రీ.శ)', 'కోటిలింగాల, ధాన్యకటకం (అమరావతి)', 'శ్రీముఖుడు, మొదటి శాతకర్ణి, హాలుడు, గౌతమీపుత్ర శాతకర్ణి', 'అమరావతి స్తూపం, రోమన్ నాణేలు, ప్రాకృత గాథాసప్తశతి'],
          ['విజయపురి ఇక్ష్వాకులు', 'నాగార్జునకొండ (విజయపురి)', 'వాసిష్టీపుత్ర శాంతమూలుడు, వీరపురుషదత్తుడు', 'మహాచైత్యం, బౌద్ధ భిక్షుణులకు పోషణ, సంస్కృత శాసనాలు'],
          ['వేంగి తూర్పు చాళుక్యులు', 'వేంగి, రాజమహేంద్రవరం', 'కుబ్జ విష్ణువర్ధనుడు (624 క్రీ.శ), రాజరాజ నరేంద్రుడు', 'తెలుగు మహాభారతానువాదం (నన్నయ 1022 క్రీ.శ), ద్రాక్షారామం'],
          ['ఓరుగల్లు కాకతీయులు', 'ఓరుగల్లు (వరంగల్)', 'గణపతి దేవుడు, రాణీ రుద్రమదేవి, ప్రతాపరుద్రుడు', 'గొలుసుకట్టు చెరువులు, రామప్ప దేవాలయం (UNESCO), మోటుపల్లి అభయ శాసనం'],
          ['విజయనగర సామ్రాజ్యం (1336-1565)', 'హంపి (విజయనగరం), పెనుగొండ', 'హరిహర రాయలు, బుక్క రాయలు, శ్రీకృష్ణదేవరాయలు (1509-1529)', 'ఆముక్తమాల్యద, అష్టదిగ్గజాలు (భువనవిజయం), లేపాక్షి వీరభద్రాలయం']
        ]
      }
    ];
  }

  if (domain === 'economy' || domain === 'geography') {
    return [
      {
        title: 'Andhra Pradesh Socio-Economic Key Benchmark Data',
        titleTe: 'ఆంధ్రప్రదేశ్ సామాజిక-ఆర్థిక కీలక సూచికల పట్టిక',
        headers: ['Economic / Geographic Indicator', 'AP State Benchmark', 'All-India National Average', 'High-Yield Exam Takeaway'],
        headersTe: ['ఆర్థిక / భౌగోళిక సూచిక', 'ఆంధ్రప్రదేశ్ రాష్ట్ర స్థాయి', 'అఖిల భారత సగటు', 'పరీక్షకు కీలక గమనిక'],
        rows: [
          ['Coastline Length', '974 Km (2nd longest in mainland India)', '7,516.6 Km total mainland & islands', 'Highest on Eastern Seaboard of India'],
          ['Districts Count', '26 Districts (Post April 2022 reorganization)', '780+ across 28 States & 8 UTs', 'Reorganized from 13 into 26 units (aligned with Lok Sabha seats)'],
          ['Major River Basins', 'Godavari, Krishna, Pennar, Vamsadhara', 'Peninsular river systems', 'Polavaram National Project on Godavari (Sec 90 AP Reorg Act)'],
          ['GSDP Agriculture Sector Share', '~34-36% (Primary Sector dominance)', '~18-20% National share', 'Aquaculture and Horticulture capital of India'],
          ['Industrial Corridors', 'VCIC, CBIC (Krishnapatnam), HBIC (Orvakal)', '11 National Industrial Corridors', 'Direct multi-modal connectivity to 6 major ports']
        ],
        rowsTe: [
          ['తీరరేఖ పొడవు', '974 కి.మీ (భారతదేశంలో 2వ అతిపెద్దది)', '7,516.6 కి.మీ మొత్తం', 'భారతదేశ తూర్పు తీరంలో అత్యంత పొడవైన తీరరేఖ'],
          ['జిల్లాల సంఖ్య', '26 జిల్లాలు (2022 ఏప్రిల్ 4 నుండి)', '780+ దేశవ్యాప్తంగా', '13 జిల్లాల నుండి 26 పరిపాలనా విభాగాలుగా పునర్వ్యవస్థీకరణ'],
          ['ప్రధాన నదీ పరివాహకాలు', 'గోదావరి, కృష్ణా, పెన్నా, వంశధార', 'ద్వీపకల్ప నదీ వ్యవస్థలు', 'గోదావరిపై పోలవరం ప్రాజెక్టు (సెక్షన్ 90 విభజన చట్టం)'],
          ['వ్యవసాయ రంగ వాటా (GSDP)', '~34-36% (ప్రాథమిక రంగ బలం)', '~18-20% జాతీయ సగటు', 'భారతదేశ ఆక్వాకల్చర్ & ఉద్యానవన రాజధాని'],
          ['పారిశ్రామిక కారిడార్లు', 'వీసీఐసీ (VCIC), సీబీఐసీ (కృష్ణపట్నం), హెచ్‌బీఐసీ (ఓర్వకల్లు)', '11 జాతీయ కారిడార్లు', 'ప్రధాన పోర్టులతో నేరుగా మల్టీ-మోడల్ రవాణా అనుసంధానం']
        ]
      }
    ];
  }

  // Default Standard Table
  return [
    {
      title: 'Chapter Comprehensive Reference Matrix & Comparative Standards',
      titleTe: 'అధ్యాయ సమగ్ర సూచిక & విశ్లేషణాత్మక పట్టిక',
      headers: ['Core Component / Clause', 'Statutory / Theoretical Standard', 'Operating Rule & Exception', 'High-Yield Exam Application'],
      headersTe: ['ప్రధాన విభాగం / అంశం', 'చట్టబద్ధ / సిద్ధాంత ప్రామాణికం', 'నిబంధన & మినహాయింపులు', 'పరీక్ష అనువర్తనం'],
      rows: [
        ['Primary Codification', `${topic.title.split(':')[0]}`, 'Direct constitutional / statutory clause', 'Direct definition and multi-statement matching'],
        ['Executive Hierarchy', 'State Secretariat to Mandal / Village Cadres', 'Delegated statutory authority limits', 'Designation and jurisdictional questions'],
        ['Timeline & Compliance', 'Mandatory time-bound statutory targets', 'Grievance redressal & procedural rules', 'Numerical timeframe distractors'],
        ['Judicial / Audit Review', 'Periodic compliance and audit scrutiny', 'Constitutional remedies & CAG review', 'Assertion-Reason causality validation']
      ],
      rowsTe: [
        ['ప్రాథమిక వర్గీకరణ', `${(topic.titleTe || topic.title).split(':')[0]}`, 'ప్రత్యక్ష రాజ్యాంగ / చట్టబద్ధ నిబంధన', 'నిర్వచనాలు మరియు మ్యాచింగ్ ప్రశ్నలు'],
        ['అధికార యంత్రాంగం', 'రాష్ట్ర సచివాలయం నుండి క్షేత్రస్థాయి వరకు', 'చట్టబద్ధ అధికారాల వికేంద్రీకరణ', 'హోదాలు మరియు విధులలో తేడాలు'],
        ['కాలపరిమితి & నియమాలు', 'నిర్ణీత గడువుల ప్రకారం అమలు', 'ఫిర్యాదుల పరిష్కారం & నిబంధనలు', 'సంఖ్యలు మరియు గడువుల ప్రశ్నలు'],
        ['ఆడిట్ & న్యాయ సమీక్ష', 'కాలానుగుణ తనిఖీ & పరిశీలన', 'రాజ్యాంగ రక్షణలు & కాగ్ సమీక్ష', 'కారణం-ఫలితం ప్రశ్నల విశ్లేషణ']
      ]
    }
  ];
}

function generateDomainCaseLaws(topic: Topic, domain: string): NoteCaseLawOrAct[] {
  if (domain === 'polity') {
    return [
      {
        title: 'Kesavananda Bharati v. State of Kerala',
        titleTe: 'కేశవానంద భారతి వర్సెస్ స్టేట్ ఆఫ్ కేరళ',
        year: '1973',
        verdictOrProvision: '13-Judge Bench established the "Basic Structure Doctrine", ruling that Parliament cannot alter the basic framework of the Constitution under Article 368.',
        verdictOrProvisionTe: '13 మంది న్యాయమూర్తుల ధర్మాసనం "మౌలిక స్వరూప సిద్ధాంతాన్ని" ప్రతిపాదించింది. ఆర్టికల్ 368 కింద పార్లమెంట్ రాజ్యాంగ మౌలిక నిర్మాణాన్ని మార్చలేదని స్పష్టం చేసింది.',
        examSignificance: 'Most cited constitutional case; basic structure includes judicial review, federalism, secularism, and democratic rule.',
        examSignificanceTe: 'అత్యంత ప్రముఖ రాజ్యాంగ తీర్పు; న్యాయ సమీక్ష, సమాఖ్య వ్యవస్థ మరియు లౌకికవాదం మౌలిక స్వరూపంలో భాగం.'
      },
      {
        title: 'S.R. Bommai v. Union of India',
        titleTe: 'ఎస్.ఆర్. బొమ్మై వర్సెస్ యూనియన్ ఆఫ్ ఇండియా',
        year: '1994',
        verdictOrProvision: 'Strictly circumscribed arbitrary imposition of President\'s Rule under Article 356 and placed proclamations under judicial review.',
        verdictOrProvisionTe: 'ఆర్టికల్ 356 కింద రాష్ట్రపతి పాలన విధింపుపై కఠిన పరిమితులు విధించింది మరియు న్యాయ సమీక్షకు లోబడి ఉంటుందని తీర్పునిచ్చింది.',
        examSignificance: 'Floor test on the Legislative Assembly floor is the sole valid test of majority; federalism declared basic structure.',
        examSignificanceTe: 'అసెంబ్లీలో ఫ్లోర్ టెస్ట్ మాత్రమే మెజారిటీని నిరూపించే ఏకైక మార్గం; సమాఖ్య వ్యవస్థ రాజ్యాంగ మౌలిక స్వరూపమని స్పష్టీకరణ.'
      },
      {
        title: 'AP Reorganisation Act, 2014 (Central Act 6 of 2014)',
        titleTe: 'ఆంధ్రప్రదేశ్ పునర్వ్యవస్థీకరణ చట్టం, 2014',
        year: '2014',
        verdictOrProvision: 'Enacted under Article 3, containing 108 Sections & 13 Schedules. Section 90 declared Polavaram a National Project with 100% central funding.',
        verdictOrProvisionTe: 'ఆర్టికల్ 3 కింద రూపొందించబడిన ఈ చట్టంలో 108 సెక్షన్లు, 13 షెడ్యూళ్లు ఉన్నాయి. సెక్షన్ 90 పోలవరానికి జాతీయ హోదా కల్పించింది.',
        examSignificance: 'Guaranteed 4-6 questions in all APPSC exams; covers asset sharing (58.32 : 41.68 ratio) and Schedule IX/X institution division.',
        examSignificanceTe: 'ఏపీపీఎస్సీ పరీక్షల్లో 4-6 మార్కులు ఖాయం; ఆస్తుల విభజన (58.32 : 41.68 నిష్పత్తి) మరియు 9, 10వ షెడ్యూల్ సంస్థల పంపిణీ.'
      }
    ];
  }

  if (domain === 'history') {
    return [
      {
        title: 'Gentlemen\'s Agreement (Pedda Manushula Oppandam)',
        titleTe: 'పెద్దమనుషుల ఒప్పందం',
        year: '1956 (Feb 20)',
        verdictOrProvision: '14-point agreement signed at Hyderabad House, New Delhi between Andhra and Telangana leaders paving the way for Andhra Pradesh on 1 Nov 1956.',
        verdictOrProvisionTe: '1956 ఫిబ్రవరి 20న ఢిల్లీలోని హైదరాబాద్ హౌస్‌లో ఆంధ్ర మరియు తెలంగాణ నాయకుల మధ్య కుదిరిన 14 సూత్రాల ఒప్పందం. దీని ఫలితంగా 1956 నవంబర్ 1న విశాలాంధ్ర ఏర్పడింది.',
        examSignificance: 'Regional Committee provisions, educational protections, and revenue allocation formulas tested repeatedly in APPSC.',
        examSignificanceTe: 'ప్రాంతీయ మండలి ఏర్పాటు, విద్యా ఉద్యోగ రక్షణలు మరియు ఆదాయ కేటాయింపులపై నిరంతరం ప్రశ్నలు అడుగుతారు.'
      },
      {
        title: 'Six-Point Formula & 32nd Amendment (Article 371D)',
        titleTe: 'ఆరు సూత్రాల పథకం & ఆర్టికల్ 371D (32వ సవరణ)',
        year: '1973',
        verdictOrProvision: 'Formulated to resolve Jai Andhra agitation; inserted Article 371D via the 32nd Constitutional Amendment Act providing local reservation in public employment and education.',
        verdictOrProvisionTe: 'జై ఆంధ్ర ఉద్యమ పరిష్కారానికి రూపొందించబడింది; 32వ రాజ్యాంగ సవరణ ద్వారా ఆర్టికల్ 371D చేర్చి ఉద్యోగ, విద్యా రంగాల్లో స్థానిక రక్షణలు కల్పించారు.',
        examSignificance: 'Governs local reservation and recruitment zones across Andhra Pradesh government departments.',
        examSignificanceTe: 'ఆంధ్రప్రదేశ్‌లోని ప్రభుత్వ ఉద్యోగాల నియామకాలు మరియు జోనల్ రిజర్వేషన్లకు ఇదే ప్రాథమిక రాజ్యాంగ ఆధారం.'
      }
    ];
  }

  // Default Standard References
  return [
    {
      title: 'Standard Statutory Reference & Legal Benchmarks',
      titleTe: 'చట్టబద్ధమైన ప్రామాణిక సూచనలు & న్యాయ సూత్రాలు',
      year: 'Contemporary Framework',
      verdictOrProvision: `Comprehensive statutory rules and Government Orders (G.O.s) governing ${topic.title} across Andhra Pradesh state departments.`,
      verdictOrProvisionTe: `${topic.titleTe || topic.title} కు సంబంధించి ఆంధ్రప్రదేశ్ ప్రభుత్వం జారీ చేసిన ప్రామాణిక నిబంధనలు మరియు జీవోలు.`,
      examSignificance: 'Direct questions on apex judicial interpretations, statutory timeframes, and official notifications.',
      examSignificanceTe: 'అత్యున్నత న్యాయస్థాన తీర్పులు, చట్టబద్ధ గడువులు మరియు నోటిఫికేషన్లపై ప్రత్యక్ష ప్రశ్నలు.'
    }
  ];
}

function generateDomainMnemonics(topic: Topic, domain: string): NoteMnemonic[] {
  if (domain === 'polity') {
    return [
      {
        title: 'Mnemonic: 6 Fundamental Rights in Indian Constitution (Arts 14-32)',
        titleTe: 'షార్ట్‌కట్ ట్రిక్: భారత రాజ్యాంగంలోని 6 ప్రాథమిక హక్కులు',
        acronym: 'E - F - E - R - E - C',
        breakdown: [
          { letter: 'E', term: 'Equality before Law (Arts 14-18)', termTe: 'సమానత్వపు హక్కు (ఆర్టికల్స్ 14-18)' },
          { letter: 'F', term: 'Freedom of Speech & Expression (Arts 19-22)', termTe: 'స్వాతంత్ర్యపు హక్కు (ఆర్టికల్స్ 19-22)' },
          { letter: 'E', term: 'Exploitation Prohibition (Arts 23-24)', termTe: 'పీడనాన్ని నిరోధించే హక్కు (ఆర్టికల్స్ 23-24)' },
          { letter: 'R', term: 'Religion Freedom (Arts 25-28)', termTe: 'మత స్వాతంత్ర్యపు హక్కు (ఆర్టికల్స్ 25-28)' },
          { letter: 'E', term: 'Educational & Cultural Rights (Arts 29-30)', termTe: 'సాంస్కృతిక, విద్యా హక్కు (ఆర్టికల్స్ 29-30)' },
          { letter: 'C', term: 'Constitutional Remedies (Art 32 - Heart & Soul)', termTe: 'రాజ్యాంగ పరిహార హక్కు (ఆర్టికల్ 32)' }
        ],
        tip: 'Remember "Every Free Employee Receives Equal Compensation" to recall the exact chronological order of fundamental rights.',
        tipTe: 'ప్రాథమిక హక్కుల క్రమాన్ని ఎప్పటికీ మర్చిపోకుండా గుర్తుంచుకోవడానికి ఈ షార్ట్‌కట్ అద్భుతంగా పనిచేస్తుంది.'
      },
      {
        title: 'Mnemonic: 5 Prerogative Writs of Supreme & High Courts (Art 32 & 226)',
        titleTe: 'షార్ట్‌కట్ ట్రిక్: 5 రకాల రిట్స్ (ఆర్టికల్ 32 & 226)',
        acronym: 'H - M - P - C - Q',
        breakdown: [
          { letter: 'H', term: 'Habeas Corpus ("To produce the body")', termTe: 'హెబియస్ కార్పస్ (వ్యక్తిని కోర్టులో హాజరుపరచడం)' },
          { letter: 'M', term: 'Mandamus ("We Command public duty")', termTe: 'మాండమస్ (చట్టబద్ధ విధి నిర్వహణకు ఆదేశం)' },
          { letter: 'P', term: 'Prohibition ("To forbid lower judicial body")', termTe: 'ప్రొహిబిషన్ (దిగువ కోర్టుకు నిషేధం)' },
          { letter: 'C', term: 'Certiorari ("To quash illegal lower order")', termTe: 'సెర్షియోరరి (దిగువ కోర్టు అక్రమ ఉత్తర్వుల రద్దు)' },
          { letter: 'Q', term: 'Quo-Warranto ("By what legal warrant/authority?")', termTe: 'కో-వారంటో (ఏ అధికారంతో పదవి చేపట్టారు?)' }
        ],
        tip: 'Mnemonic: "Help Me Pass Civil Qualification". Note that Mandamus cannot be issued against the President or Governor.',
        tipTe: 'గుర్తుంచుకోండి: రాష్ట్రపతి లేదా గవర్నర్‌కు వ్యతిరేకంగా మాండమస్ రిట్‌ను జారీ చేయలేరు.'
      }
    ];
  }

  if (domain === 'history') {
    return [
      {
        title: 'Mnemonic: Chronology of Major Satavahana Kings & Inscriptions',
        titleTe: 'షార్ట్‌కట్ ట్రిక్: శాతవాహనుల ప్రముఖ రాజుల క్రమం',
        acronym: 'S - S - H - G - P',
        breakdown: [
          { letter: 'S', term: 'Simuka (Dynasty Founder, Kotilingala coins)', termTe: 'శ్రీముఖుడు / సిముక (వంశ స్థాపకుడు)' },
          { letter: 'S', term: 'Satakarni I (Nanaghat inscription by Naganika)', termTe: 'మొదటి శాతకర్ణి (నానాఘాట్ శాసనం)' },
          { letter: 'H', term: 'Hala (17th King, author of Gaha Sattasai in Prakrit)', termTe: 'హాలుడు (17వ రాజు, గాథాసప్తశతి కర్త)' },
          { letter: 'G', term: 'Gautamiputra Satakarni (23rd King, Nasik Prashasti)', termTe: 'గౌతమీపుత్ర శాతకర్ణి (23వ రాజు, నాసిక్ శాసనం)' },
          { letter: 'P', term: 'Pulumavi II / Yajna Sri Satakarni (Naval ship coins)', termTe: 'రెండవ పులోమావి / యజ్ఞశ్రీ శాతకర్ణి (ఓడ బొమ్మ నాణేలు)' }
        ],
        tip: 'Chronology questions are frequently asked in APPSC Group 1 & 2 exams.',
        tipTe: 'శాతవాహన రాజుల కాలక్రమంపై ఏపీపీఎస్సీ గ్రూప్ 2 లో తరచుగా ప్రశ్నలు వస్తాయి.'
      }
    ];
  }

  // Default Standard Mnemonic
  return [
    {
      title: 'High-Yield Memory Anchor for Quick Exam Recall',
      titleTe: 'పరీక్షలో వేగంగా గుర్తుచేసుకోవడానికి మెమరీ యాంకర్',
      acronym: 'P - R - E - P',
      breakdown: [
        { letter: 'P', term: 'Principle: Foundational constitutional/statutory definition', termTe: 'ప్రాథమిక నిర్వచనం & చట్టబద్ధ సూత్రం' },
        { letter: 'R', term: 'Rule: Operational parameters & critical legal exceptions', termTe: 'నిబంధనలు & మినహాయింపులు' },
        { letter: 'E', term: 'Evidence: Exact year, section, case law or census metric', termTe: 'ఆధారాలు, సంవత్సరాలు, సెక్షన్లు & గణాంకాలు' },
        { letter: 'P', term: 'Practice: Systematic elimination of tricky trap options', termTe: 'ఆప్షన్ ఎలిమినేషన్ సాధన' }
      ],
      tip: 'Use PREP formula to quickly dissect Assertion-Reason questions.',
      tipTe: 'స్టేట్‌మెంట్ ఆధారిత ప్రశ్నలను సులభంగా పరిష్కరించడానికి PREP పద్ధతిని వాడండి.'
    }
  ];
}

function generateDomainTimeline(topic: Topic, domain: string): NoteTimelineItem[] {
  if (domain === 'polity' || topic.title.includes('Reorganisation') || topic.title.includes('Andhra')) {
    return [
      {
        yearOrEra: '1953 Oct 1',
        event: 'Formation of Andhra State (Capital: Kurnool, High Court: Guntur)',
        eventTe: 'ఆంధ్ర రాష్ట్రం ఆవిర్భావం (రాజధాని: కర్నూలు, హైకోర్టు: గుంటూరు)',
        impact: 'First linguistic state in India carved out of Madras State following Potti Sreeramulu\'s 58-day martyrdom.',
        impactTe: 'పొట్టి శ్రీరాములు గారి 58 రోజుల ఆమరణ నిరాహారదీక్ష ఫలితంగా ఏర్పడిన తొలి భాషా ప్రయుక్త రాష్ట్రం.'
      },
      {
        yearOrEra: '1956 Nov 1',
        event: 'Formation of Andhra Pradesh (Gentlemen\'s Agreement)',
        eventTe: 'విశాలాంధ్ర / ఆంధ్రప్రదేశ్ ఆవిర్భావం (పెద్దమనుషుల ఒప్పందం)',
        impact: 'Merged Andhra State with 9 Telugu-speaking districts of Hyderabad State based on Fazal Ali States Reorganisation Commission.',
        impactTe: 'ఫజల్ అలీ కమిషన్ నివేదిక ఆధారంగా హైదరాబాద్ రాష్ట్రంలోని తెలుగు ప్రాంతాలు మరియు ఆంధ్ర రాష్ట్రం విలీనం.'
      },
      {
        yearOrEra: '1973',
        event: '32nd Constitutional Amendment Act (Article 371D)',
        eventTe: '32వ రాజ్యాంగ సవరణ చట్టం (ఆర్టికల్ 371D చేరిక)',
        impact: 'Enacted Six-Point Formula to safeguard equitable opportunities in public employment and education.',
        impactTe: 'ఆరు సూత్రాల పథకం అమలు ద్వారా ఆంధ్రప్రదేశ్‌లో స్థానిక రిజర్వేషన్లకు రాజ్యాంగ రక్షణ.'
      },
      {
        yearOrEra: '2014 Jun 2',
        event: 'AP Reorganisation Act 2014 (Appointed Day)',
        eventTe: 'ఆంధ్రప్రదేశ్ విభజన చట్టం 2014 (అపాయింటెడ్ డే)',
        impact: 'Bifurcated residual Andhra Pradesh into 13 districts with Polavaram declared a National Project (Sec 90).',
        impactTe: 'రాష్ట్ర విభజన; పోలవరం ప్రాజెక్టుకు జాతీయ హోదా (సెక్షన్ 90) మరియు రాజధాని నిధుల కేటాయింపు నిబంధన.'
      },
      {
        yearOrEra: '2022 Apr 4',
        event: 'AP District Reorganisation (13 to 26 Districts)',
        eventTe: 'ఆంధ్రప్రదేశ్ జిల్లాల పునర్వ్యవస్థీకరణ (13 నుండి 26 జిల్లాలు)',
        impact: 'Created 26 administrative districts aligned with parliamentary constituencies for decentralized governance.',
        impactTe: 'వికేంద్రీకృత పాలన కోసం పార్లమెంట్ నియోజకవర్గాల ప్రాతిపదికన 26 కొత్త జిల్లాల ఏర్పాటు.'
      }
    ];
  }

  if (domain === 'history') {
    return [
      {
        yearOrEra: '3rd Cent BCE',
        event: 'Rise of Satavahana Empire',
        eventTe: 'శాతవాహన సామ్రాజ్య ఆవిర్భావం',
        impact: 'First great empire of the Deccan; patronized Prakrit and maritime trade with Roman empire.',
        impactTe: 'దక్షిణాపథంలో మొదటి మహా సామ్రాజ్యం; రోమన్ వాణిజ్యం మరియు అమరావతి శిల్పకళ వికాసం.'
      },
      {
        yearOrEra: '1022 CE',
        event: 'Coronation of Rajaraja Narendra & Nannaya Bhattu',
        eventTe: 'రాజరాజ నరేంద్రుని పట్టాభిషేకం & నన్నయ భారతానువాదం',
        impact: 'Commencement of Andhra Mahabharata at Rajahmundry; dawn of classical Telugu literature.',
        impactTe: 'రాజమండ్రిలో నన్నయ భట్టారకుని చేతుల మీదుగా తెలుగు భారత రచన ప్రారంభం; ఆదికావ్య యుగారంభం.'
      },
      {
        yearOrEra: '1509 - 1529',
        event: 'Golden Reign of Sri Krishnadevaraya',
        eventTe: 'శ్రీకృష్ణదేవరాయల స్వర్ణయుగం',
        impact: 'Vijayanagara pinnacle; Amuktamalyada composition, Ashtadiggajas literary assembly (Bhuvana Vijayam).',
        impactTe: 'ఆముక్తమాల్యద రచన, అష్టదిగ్గజ కవుల భువనవిజయం, రాయలసీమలో గరిష్ట సాంస్కృతిక వైభవం.'
      },
      {
        yearOrEra: '1922 - 1924',
        event: 'Rampa Rebellion led by Alluri Sitarama Raju',
        eventTe: 'అల్లూరి సీతారామరాజు నేతృత్వంలో రంప గిరిజన విప్లవం',
        impact: 'Fierce armed tribal guerrilla warfare against British Madras Forest Act 1882 in Manyam forests.',
        impactTe: 'బ్రిటిష్ ఫారెస్ట్ చట్టం 1882 కు వ్యతిరేకంగా మన్యం గిరిజనుల గెరిల్లా పోరాటం; చింతపల్లి, కృష్ణదేవిపేట పోరాటాలు.'
      }
    ];
  }

  return [
    {
      yearOrEra: 'Genesis Phase',
      event: `Statutory Genesis & Codification of ${topic.title.split(':')[0]}`,
      eventTe: `ప్రాథమిక చట్టబద్ధమైన ఆమోదం & వ్యవస్థాగత నిర్మాణం`,
      impact: 'Established foundational criteria, executive responsibilities, and procedural baselines.',
      impactTe: 'ప్రాథమిక ప్రమాణాలు, కార్యనిర్వాహక బాధ్యతలు మరియు విధివిధానాల రూపకల్పన.'
    },
    {
      yearOrEra: 'Standardization',
      event: 'Structural Standardization & Apex Court Precedents',
      eventTe: 'నిర్మాణాత్మక ప్రమాణాల క్రమబద్ధీకరణ & న్యాయస్థాన తీర్పులు',
      impact: 'Clarified constitutional parameters and eliminated administrative ambiguity across state departments.',
      impactTe: 'రాజ్యాంగ పరిమితుల స్పష్టీకరణ మరియు పరిపాలనా సందిగ్ధతల తొలగింపు.'
    },
    {
      yearOrEra: 'Contemporary Era',
      event: 'Modernization, Digitization & AP 26 Districts Decentralization',
      eventTe: 'ఆధునీకరణ, డిజిటలైజేషన్ & జిల్లా స్థాయి వికేంద్రీకరణ',
      impact: 'Integrated real-time e-governance dashboards, citizen charter timeframes, and single-desk delivery.',
      impactTe: 'రియల్ టైమ్ డాష్‌బోర్డులు, పౌర సేవా పత్రాలు మరియు పారదర్శక సేవల అనుసంధానం.'
    }
  ];
}

function generateDomainPyqInsights(topic: Topic, domain: string): NotePyqInsight[] {
  return [
    {
      exam: 'APPSC Group 2 (Screening & Mains)',
      year: '2019-2024 Exam Trend',
      topicTested: `${topic.title.split(':')[0]} - Analytical Statements & Articles`,
      topicTestedTe: `${(topic.titleTe || topic.title).split(':')[0]} - సూత్రాలు & నిబంధనలు`,
      examinerTrap: 'Examiners frequently switch "Mandatory" provisions with "Discretionary" powers, or change simple numerical limits (e.g. changing 30 days to 60 days).',
      examinerTrapTe: 'కచ్చితంగా పాటించాల్సిన నిబంధనలకు బదులుగా విచక్షణాధికారాలు అని ఇవ్వడం లేదా సంఖ్యలు/గడువులను మార్చి అడగడం ప్రధాన ట్రాప్.',
      winningTip: 'Always verify if the question contains words like "NOT correct", "INCORRECT", or "EXCEPT" before locking your final answer choice.',
      winningTipTe: 'ప్రశ్నలో "సరైనది కానిది ఏది?", "తప్పు సమాధానాన్ని గుర్తించండి" వంటి నెగెటివ్ పదాలు ఉన్నాయో లేదో గమనించండి.'
    },
    {
      exam: 'AP Police SI & PC Mains',
      year: 'Recent Recruitment Cycles',
      topicTested: 'Statutory Timelines, Section Nuances & Administrative Hierarchy',
      topicTestedTe: 'చట్టబద్ధ గడువులు, సెక్షన్లు & హోదాల క్రమం',
      examinerTrap: 'Setting options where three statements are 100% correct and the fourth statement has a minor factual discrepancy in the year or appointing authority.',
      examinerTrapTe: 'మూడు వాక్యాలు సరైనవిగా ఇచ్చి, నాలుగో వాక్యంలోని నియామక అధికారి పేరును తప్పుగా ఇవ్వడం.',
      winningTip: 'Focus strictly on Appointing Authority vs Removal Authority (e.g., Governor appoints, but only President can remove PSC members under Art 317).',
      winningTipTe: 'నియామకం ఎవరు చేస్తారు మరియు తొలగించే అధికారం ఎవరికి ఉంటుంది అనే తేడాను స్పష్టంగా గుర్తుంచుకోండి (ఉదా: పీఎస్‌సీ సభ్యులను గవర్నర్ నియమిస్తారు, కానీ రాష్ట్రపతి మాత్రమే తొలగిస్తారు).'
    },
    {
      exam: 'AP DSC / TET & Grama Sachivalayam',
      year: 'Standard Exam Framework',
      topicTested: 'Application in Grassroots Governance & Child Pedagogy',
      topicTestedTe: 'క్షేత్రస్థాయి పాలన & బోధనా పద్ధతుల అనువర్తనం',
      examinerTrap: 'Mixing up eligibility criteria, stages of development, and statutory portal names with central equivalents.',
      examinerTrapTe: 'వికాస దశల క్రమాన్ని లేదా రాష్ట్ర ప్రభుత్వ పథకాల నిబంధనలను కేంద్ర పథకాల నిబంధనలతో గందరగోళపరచడం.',
      winningTip: 'Memorize the exact stage age-brackets (e.g. Sensorimotor 0-2 yrs, Pre-operational 2-7 yrs) and nodal implementing agencies.',
      winningTipTe: 'వికాస దశల వయస్సు పరిమితులు (ఉదా: సంవేదన ప్రచాలక దశ 0-2 సం||) మరియు నోడల్ ఏజెన్సీలను కచ్చితంగా గుర్తుంచుకోండి.'
    }
  ];
}

function generateDomainFaqs(topic: Topic, domain: string): NoteFaq[] {
  if (domain === 'polity') {
    return [
      {
        q: 'What is the key distinction between Constitutional, Statutory, and Extra-Constitutional bodies in India?',
        qTe: 'రాజ్యాంగబద్ధ, చట్టబద్ధ మరియు రాజ్యాంగేతర సంస్థల మధ్య ముఖ్యమైన తేడా ఏమిటి?',
        a: 'Constitutional bodies (e.g., Election Commission Art 324, UPSC/APPSC Art 315, Finance Commission Art 280) derive power directly from the Constitution. Statutory bodies (e.g., NHRC, SEBI, CVC) are created by Acts of Parliament/State Assembly. Extra-Constitutional bodies (e.g., NITI Aayog) are created by an Executive Resolution of the Cabinet.',
        aTe: 'రాజ్యాంగబద్ధ సంస్థలు (ఉదా: ఎన్నికల సంఘం 324, ఏపీపీఎస్సీ 315, ఆర్థిక సంఘం 280) నేరుగా రాజ్యాంగ నిబంధనల నుండి అధికారం పొందుతాయి. చట్టబద్ధ సంస్థలు (ఉదా: మానవ హక్కుల కమిషన్, సెబీ) చట్టసభ ఆమోదించిన చట్టం ద్వారా ఏర్పడతాయి. రాజ్యాంగేతర సంస్థలు (ఉదా: నీతి ఆయోగ్) కేంద్ర క్యాబినెట్ తీర్మానం ద్వారా ఏర్పడతాయి.',
        caution: 'Examiners often ask "Which of the following is NOT a constitutional body?" and insert NITI Aayog or NHRC in the options.',
        cautionTe: 'పరీక్షల్లో "క్రింది వాటిలో రాజ్యాంగబద్ధ సంస్థ కానిది ఏది?" అని అడిగి నీతి ఆయోగ్ లేదా ఎన్‌హెచ్‌ఆర్‌సి ని ఆప్షన్లలో ఇస్తారు.'
      },
      {
        q: 'Can Fundamental Rights be amended by Parliament under Article 368?',
        qTe: 'పార్లమెంట్ ఆర్టికల్ 368 కింద ప్రాథమిక హక్కులను సవరించవచ్చా?',
        a: 'Yes, Parliament can amend Fundamental Rights under Article 368, but subject to the "Basic Structure Doctrine" laid down in the 1973 Kesavananda Bharati case. An amendment cannot abrogate the core principles of democracy, secularism, judicial review, or federalism.',
        aTe: 'అవును, కేశవానంద భారతి (1973) తీర్పు ప్రకారం పార్లమెంట్ ప్రాథమిక హక్కులను సవరించవచ్చు. అయితే ఈ సవరణ రాజ్యాంగ మౌలిక స్వరూపానికి (Basic Structure) భంగం కలిగించకూడదు.',
        caution: 'Remember that Golaknath (1967) initially forbade FR amendments, but the 24th Amendment and Kesavananda Bharati established Parliament\'s amending power subject to basic structure limits.',
        cautionTe: 'గోలక్‌నాథ్ (1967) తీర్పు ప్రాథమిక హక్కుల సవరణ కుదరదని చెప్పినప్పటికీ, 24వ సవరణ మరియు కేశవానంద భారతి తీర్పు సవరణకు అనుమతి ఇచ్చాయి.'
      }
    ];
  }

  return [
    {
      q: `What is the most frequently tested dimension of ${topic.title.split(':')[0]} in AP state competitive exams?`,
      qTe: `ఆంధ్రప్రదేశ్ పోటీ పరీక్షలలో ${topic.titleTe || topic.title} పై అత్యధికంగా అడిగే ప్రశ్నల తీరు ఏమిటి?`,
      a: `Questions primarily test conceptual definitions, numerical parameters, chronological milestones, and AP state specific policy applications. Assertion and Multi-statement format dominates recent APPSC papers.`,
      aTe: `ప్రాథమిక సూత్రాలు, చట్టబద్ధమైన గడువులు, కాలక్రమం మరియు ఆంధ్రప్రదేశ్ రాష్ట్ర ప్రత్యేక అనువర్తనాలపై ప్రశ్నలు ఎక్కువగా వస్తాయి. ప్రస్తుతం స్టేట్‌మెంట్ ఆధారిత ప్రశ్నలు ఎక్కువగా వస్తున్నాయి.`,
      caution: 'Do not rely solely on one-liner factual memory; practice multi-statement elimination technique.',
      cautionTe: 'కేవలం వన్-లైనర్ వాస్తవాలపై మాత్రమే ఆధారపడకుండా, స్టేట్‌మెంట్ ఆధారిత ప్రశ్నల సాధన చేయండి.'
    },
    {
      q: 'How can I ensure 100% accuracy in Assertion-Reason questions from this chapter?',
      qTe: 'ఈ అధ్యాయం నుండి వచ్చే అస్సర్షన్-రీజన్ ప్రశ్నలలో పూర్తి మార్కులు సాధించడం ఎలా?',
      a: 'First, evaluate Statement A independently (True or False). Next, evaluate Statement R independently (True or False). If both are true, join them with the conjunction "BECAUSE" to verify if R is indeed the correct causal explanation for A.',
      aTe: 'మొదట స్టేట్‌మెంట్ A సరైనదో కాదో స్వతంత్రంగా పరిశీలించండి. తరువాత స్టేట్‌మెంట్ R సరైనదో కాదో చూడండి. రెండూ సరైనవైతే "ఎందుకంటే (BECAUSE)" అనే పదాన్ని మధ్యలో చేర్చి చదవండి. అప్పుడు R అనేది A కి సరైన వివరణ అవుతుందో లేదో సులభంగా అర్థమవుతుంది.',
      caution: 'Never jump to "Both A and R are true and R is correct explanation" without testing the causal link.',
      cautionTe: 'కారణం మరియు ఫలితం మధ్య ప్రత్యక్ష సంబంధం ఉందో లేదో పరీక్షించకుండా సమాధానాన్ని ఖరారు చేయవద్దు.'
    }
  ];
}

function generateDomainDiagrams(topic: Topic, domain: string): TopicDiagram[] {
  const title = topic.title.split(':')[0].trim();
  const titleTe = (topic.titleTe || topic.title).split(':')[0].trim();

  if (domain === 'polity') {
    return [
      {
        id: 'polity-hierarchy-1',
        title: 'Constitutional Architecture & Separation of Powers',
        titleTe: 'భారత రాజ్యాంగ అధికారాల విభజన క్రమచిత్రం',
        type: 'hierarchy',
        caption: 'Three sovereign branches functioning under the Constitution of India with checks and balances.',
        captionTe: 'భారత రాజ్యాంగం క్రింద కార్యనిర్వాహక, శాసన మరియు న్యాయ వ్యవస్థల అధికారాల క్రమం.',
        nodes: [
          {
            id: 'const-apex',
            label: 'Constitution of India (Sovereign Supreme Law)',
            labelTe: 'భారత రాజ్యాంగం (సర్వోన్నత చట్టం)',
            description: 'Preamble, Fundamental Rights (Part III), Directive Principles (Part IV), Basic Structure Doctrine.',
            descriptionTe: 'పీఠిక, ప్రాథమిక హక్కులు (3వ భాగం), ఆదేశిక సూత్రాలు (4వ భాగం), మౌలిక స్వరూప సిద్ధాంతం.',
            badge: 'Apex Law',
            badgeTe: 'సర్వోన్నతం',
            category: 'primary',
            children: [
              {
                id: 'exec-branch',
                label: 'Executive (Art 52-78 / 153-167)',
                labelTe: 'కార్యనిర్వాహక వర్గం',
                description: 'President/Governor, Prime Minister/Chief Minister, Council of Ministers, Bureaucracy.',
                descriptionTe: 'రాష్ట్రపతి/గవర్నర్, ప్రధానమంత్రి/ముఖ్యమంత్రి, మంత్రిమండలి, పరిపాలనా యంత్రాంగం.',
                badge: 'Executive',
                badgeTe: 'కార్యనిర్వాహక',
                category: 'accent'
              },
              {
                id: 'leg-branch',
                label: 'Legislature (Art 79-122 / 168-212)',
                labelTe: 'శాసన నిర్మాణ శాఖ',
                description: 'Parliament (Lok Sabha + Rajya Sabha) / State Legislature (Assembly + Council).',
                descriptionTe: 'పార్లమెంట్ (లోక్‌సభ + రాజ్యసభ) / రాష్ట్ర శాసనసభ (విధానసభ + శాసనమండలి).',
                badge: 'Law Making',
                badgeTe: 'శాసన నిర్మాణం',
                category: 'warning'
              },
              {
                id: 'jud-branch',
                label: 'Independent Judiciary (Art 124-147 / 214-237)',
                labelTe: 'స్వతంత్ర న్యాయవ్యవస్థ',
                description: 'Supreme Court (Art 32) -> High Court (Art 226) -> District & Subordinate Courts.',
                descriptionTe: 'సుప్రీంకోర్టు (ఆర్టికల్ 32) -> హైకోర్టు (ఆర్టికల్ 226) -> జిల్లా & సబార్డినేట్ కోర్టులు.',
                badge: 'Guardian of Rights',
                badgeTe: 'హక్కుల రక్షకుడు',
                category: 'success'
              }
            ]
          }
        ]
      },
      {
        id: 'polity-matrix-1',
        title: 'Comparative Matrix: Types of Legislative Bills',
        titleTe: 'శాసన బిల్లుల తులనాత్మక మ్యాట్రిక్స్',
        type: 'matrix',
        caption: 'Key procedural distinctions between Ordinary Bills, Money Bills, and Constitutional Amendments.',
        captionTe: 'సాధారణ బిల్లులు, మనీ బిల్లులు మరియు రాజ్యాంగ సవరణ బిల్లుల మధ్య ముఖ్యమైన తేడాలు.',
        matrixColumns: [
          {
            header: 'Ordinary Bill (Art 107 / 196)',
            headerTe: 'సాధారణ బిల్లు (ఆర్టికల్ 196)',
            items: [
              {
                title: 'Introduction & Majority',
                titleTe: 'ప్రవేశపెట్టడం & మెజారిటీ',
                points: ['Can originate in either Assembly or Council', 'Passed by Simple Majority of members present and voting', 'Council can delay up to 4 months max in state'],
                pointsTe: ['ఏ సభలోనైనా ప్రవేశపెట్టవచ్చు', 'హాజరై ఓటు వేసిన వారిలో సాధారణ మెజారిటీ', 'శాసనమండలి గరిష్టంగా 4 నెలలు ఆలస్యం చేయగలదు']
              }
            ]
          },
          {
            header: 'Money Bill (Art 110 / 199)',
            headerTe: 'మనీ బిల్లు (ఆర్టికల్ 199)',
            items: [
              {
                title: 'Exclusive Lower House Power',
                titleTe: 'విధానసభ ప్రత్యేక అధికారాలు',
                points: ['Must originate strictly in Legislative Assembly', 'Requires Speaker\'s exclusive certification (non-justiciable)', 'Council must return within 14 days without amendment veto'],
                pointsTe: ['విధానసభలో మాత్రమే ప్రవేశపెట్టాలి', 'స్పీకర్ ధ్రువీకరణ తప్పనిసరి (కోర్టుల్లో సవాలు చేయలేరు)', 'కౌన్సిల్ 14 రోజుల్లో ఆమోదించాలి లేదా వెనక్కి పంపాలి']
              }
            ]
          },
          {
            header: 'Amendment Bill (Art 368)',
            headerTe: 'రాజ్యాంగ సవరణ (ఆర్టికల్ 368)',
            items: [
              {
                title: 'Special Majority Rigor',
                titleTe: 'ప్రత్యేక మెజారిటీ నిబంధన',
                points: ['Requires 2/3rd majority of present & voting + Total membership majority', 'Federal matters require 50% State Assemblies ratification', 'No provision for Joint Sitting under Article 108'],
                pointsTe: ['2/3 వంతు హాజరైన వారి మెజారిటీ + మొత్తం సభ్యుల సంఖ్యలో మెజారిటీ', 'సమాఖ్య అంశాలకు 50% రాష్ట్ర శాసనసభల ఆమోదం అవసరం', 'ఉభయ సభల సంయుక్త సమావేశానికి (Joint Sitting) అవకాశం లేదు']
              }
            ]
          }
        ]
      }
    ];
  }

  if (domain === 'history') {
    return [
      {
        id: 'hist-mindmap-1',
        title: 'Comprehensive Satavahana Imperial Civilization',
        titleTe: 'శాతవాహన సామ్రాజ్య సమగ్ర సాంస్కృతిక కాన్సెప్ట్ మ్యాప్',
        type: 'mindmap',
        caption: 'Administrative, architectural, numismatic, and literary foundations of ancient Andhra.',
        captionTe: 'ప్రాచీన శాతవాహనుల పరిపాలన, శిల్పకళ, నాణేలు మరియు సాహిత్య వికాస విభాగాలు.',
        nodes: [
          {
            id: 'sat-admin',
            label: 'Administration & Polity',
            labelTe: 'పరిపాలనా వ్యవస్థ',
            description: 'Aharas (Provinces governed by Amatyas), Grama under Goulmika, Mahatalavara military commanders.',
            descriptionTe: 'ఆహారాలు (అమాత్యుల పాలన), గ్రామానికి గౌల్మికుడు, మహాసేనాపతి సైనిక విభాగాలు.',
            badge: 'Cadre Structure',
            badgeTe: 'పరిపాలన',
            category: 'primary'
          },
          {
            id: 'sat-trade',
            label: 'Maritime & Coinage',
            labelTe: 'విదేశీ వాణిజ్యం & నాణేలు',
            description: 'Ship-motif coins of Yajna Sri Satakarni; Roman trade at Motupalli & Arikamedu; Potin and Lead coins.',
            descriptionTe: 'యజ్ఞశ్రీ శాతకర్ణి ఓడ గుర్తు నాణేలు, రోమన్ బంగారు నాణేల రాశులు, పోటిన్ మరియు సీసం నాణేలు.',
            badge: 'Economy',
            badgeTe: 'ఆర్థికం',
            category: 'accent'
          },
          {
            id: 'sat-art',
            label: 'Amaravati Art & Literature',
            labelTe: 'అమరావతి శిల్పకళ & సాహిత్యం',
            description: 'White marble limestone relief carvings; Gaha Sattasai in Prakrit by King Hala; Brihatkatha by Gunadhya.',
            descriptionTe: 'పాలరాతి చెక్కడాలతో కూడిన అమరావతి మహాస్తూపం, హాలుని గాథాసప్తశతి, గుణాఢ్యుని బృహత్కథ.',
            badge: 'Culture',
            badgeTe: 'సాహిత్యం',
            category: 'warning'
          }
        ]
      }
    ];
  }

  if (domain === 'economy') {
    return [
      {
        id: 'econ-cycle-1',
        title: 'AP Macroeconomic Investment & Growth Multiplier Cycle',
        titleTe: 'ఆంధ్రప్రదేశ్ స్థూల ఆర్థిక పెట్టుబడులు & వృద్ధి గుణక చక్రం',
        type: 'cycle',
        caption: 'How public capital expenditure and welfare DBT drive aggregate demand and state fiscal health.',
        captionTe: 'రాష్ట్ర మూలధన వ్యయం మరియు సంక్షేమ పథకాలు ఎలా స్థూల ఆర్థిక వృద్ధికి దోహదపడతాయో వివరించే చక్రం.',
        cycleItems: [
          {
            phase: 'Phase 1: Capital Inflow',
            phaseTe: 'దశ 1: మూలధన పెట్టుబడులు',
            title: 'Infrastructure & Port Corridors',
            titleTe: 'మౌలిక వసతులు & ఓడరేవు కారిడార్లు',
            detail: 'State investments in ports (Machilipatnam, Ramayapatnam, Bhavanapadu) and industrial water corridors.',
            detailTe: 'ఓడరేవులు, రహదారులు మరియు పారిశ్రామిక నోడ్లలో భారీ ప్రభుత్వ, ప్రైవేటు పెట్టుబడులు.'
          },
          {
            phase: 'Phase 2: Employment',
            phaseTe: 'దశ 2: ఉపాధి & ఆదాయాలు',
            title: 'Direct Benefit & Wage Surge',
            titleTe: 'ఉపాధి సృష్టి & ప్రత్యక్ష నగదు బదిలీ',
            detail: 'Agro-processing, MSME credit lines, and Navaratnalu DBT infusion boost disposable rural purchasing power.',
            detailTe: 'వ్యవసాయ అనుబంధ పరిశ్రమలు మరియు డీబీటీ ద్వారా గ్రామీణ ప్రజల కొనుగోలు శక్తి పెంపు.'
          },
          {
            phase: 'Phase 3: Consumption',
            phaseTe: 'దశ 3: వినియోగం & డిమాండ్',
            title: 'Market Demand Expansion',
            titleTe: 'స్థానిక మార్కెట్ డిమాండ్ విస్తరణ',
            detail: 'Surge in goods and services consumption generates high tax buoyancy and state own-tax revenue (SOTR).',
            detailTe: 'వస్తు సేవల వినియోగం పెరిగి రాష్ట్ర సొంత పన్ను ఆదాయం (SOTR) మరియు జీఎస్టీ రాబడులు పెరుగుతాయి.'
          },
          {
            phase: 'Phase 4: Consolidation',
            phaseTe: 'దశ 4: స్థిరీకరణ',
            title: 'Fiscal Health & FRBM Compliance',
            titleTe: 'ఆర్థిక స్థిరత్వం & ఎఫ్‌ఆర్‌బీఎం నిబంధనలు',
            detail: 'Lower fiscal deficit to GSDP ratio enables sustainable borrowing limits for future capital assets.',
            detailTe: 'జీఎస్‌డీపీలో ద్రవ్యలోటు తగ్గి భవిష్యత్ అభివృద్ధి ప్రాజెక్టులకు రుణ పరపతి స్థిరపడుతుంది.'
          }
        ]
      },
      {
        id: 'econ-mindmap-1',
        title: 'Andhra Pradesh Gross State Domestic Product (GSDP) Pillars',
        titleTe: 'ఆంధ్రప్రదేశ్ రాష్ట్ర స్థూల ఉత్పత్తి (GSDP) రంగాల విభజన',
        type: 'mindmap',
        caption: 'Sectoral contribution across Primary, Secondary, and Tertiary sectors in Andhra Pradesh economy.',
        captionTe: 'రాష్ట్ర ఆర్థిక వ్యవస్థలో ప్రాథమిక, ద్వితీయ మరియు తృతీయ సేవా రంగాల వాటా.',
        nodes: [
          {
            id: 'gspd-prim',
            label: 'Primary Sector (Agriculture & Allied)',
            labelTe: 'ప్రాథమిక రంగం (వ్యవసాయం & అనుబంధ)',
            description: 'Aqua capital of India (Shrimp/Fish exports), Horticulture (Mango, Banana, Chilli), Paddy delta basins.',
            descriptionTe: 'భారతదేశ ఆక్వా రాజధాని (రొయ్యలు, చేపల ఎగుమతులు), ఉద్యానవన పంటలు, వరి సాగు.',
            badge: 'Key Growth Driver',
            badgeTe: 'ప్రధాన ఇంజిన్',
            category: 'success'
          },
          {
            id: 'gspd-sec',
            label: 'Secondary Sector (Industries & Infra)',
            labelTe: 'ద్వితీయ రంగం (పరిశ్రమలు & తయారీ)',
            description: 'Visakhapatnam-Chennai Industrial Corridor (VCIC), Chennai-Bengaluru (CBIC), Pharma & Bulk Drugs.',
            descriptionTe: 'వైజాగ్-చెన్నై ఇండస్ట్రియల్ కారిడార్ (VCIC), ఫార్మా క్లస్టర్లు, ఆటోమొబైల్ & బల్క్ డ్రగ్ పార్కులు.',
            badge: 'Industrial Corridors',
            badgeTe: 'పారిశ్రామికం',
            category: 'accent'
          },
          {
            id: 'gspd-tert',
            label: 'Tertiary Sector (Services & Logistics)',
            labelTe: 'తృతీయ రంగం (సేవలు & లాజిస్టిక్స్)',
            description: '974 km maritime port network, cold chain logistics, software and IT hubs at Visakhapatnam.',
            descriptionTe: '974 కిమీ సముద్ర తీర ఓడరేవులు, లాజిస్టిక్స్ నెట్‌వర్క్, విశాఖపట్నం ఐటీ హబ్ మరియు పర్యాటకం.',
            badge: 'Logistics Gateway',
            badgeTe: 'లాజిస్టిక్స్',
            category: 'info'
          }
        ]
      }
    ];
  }

  if (domain === 'geography') {
    return [
      {
        id: 'geo-matrix-1',
        title: 'Physiographic Divisions & Resource Comparison',
        titleTe: 'ఆంధ్రప్రదేశ్ నైసర్గిక స్వరూపాలు & వనరుల పట్టిక',
        type: 'matrix',
        caption: 'Detailed geographic contrast between Coastal Plains, Eastern Ghats, and Rayalaseema Plateau.',
        captionTe: 'కోస్తా మైదానాలు, తూర్పు కనుమలు మరియు రాయలసీమ పీఠభూమిల మధ్య నైసర్గిక మరియు వనరుల తేడాలు.',
        matrixColumns: [
          {
            header: 'Coastal Plains (974 km Coastline)',
            headerTe: 'తీర మైదానాలు (974 కి.మీ తీరం)',
            items: [
              {
                title: 'Features & Soils',
                titleTe: 'లక్షణాలు & నేలలు',
                points: ['Alluvial fertile soil deltas (Krishna & Godavari)', 'Major ports: Visakhapatnam, Kakinada, Krishnapatnam', 'Vulnerable to cyclonic depressions from Bay of Bengal'],
                pointsTe: ['సారవంతమైన ఒండ్రు నేలలు మరియు డెల్టా వ్యవసాయం', 'ప్రధాన సహజ ఓడరేవులు (విశాఖపట్నం, కాకినాడ)', 'బంగాళాఖాత తుఫానుల ప్రభావం అధికం']
              }
            ]
          },
          {
            header: 'Eastern Ghats (Hill Ranges)',
            headerTe: 'తూర్పు కనుమలు (పర్వత శ్రేణులు)',
            items: [
              {
                title: 'Peaks & Biodiversity',
                titleTe: 'శిఖరాలు & జీవవైవిధ్యం',
                points: ['Highest peak: Arma Konda / Jindhagada (1690 m)', 'Coffee plantations in Araku Valley, Chintapalli', 'Red Sanders (Pterocarpus santalinus) in Seshachalam'],
                pointsTe: ['అత్యంత ఎత్తైన శిఖరం: జిందగడ / ఆర్మకొండ (1690 మీ)', 'అరకు లోయలో కాఫీ తోటలు మరియు గిరిజన జీవనం', 'శేషాచల అడవులలో మాత్రమే దొరికే అరుదైన ఎర్రచందనం']
              }
            ]
          },
          {
            header: 'Rayalaseema Plateau',
            headerTe: 'రాయలసీమ పీఠభూమి',
            items: [
              {
                title: 'Minerals & Climate',
                titleTe: 'ఖనిజాలు & శీతోష్ణస్థితి',
                points: ['Semi-arid rain-shadow plateau region', 'Mangampeta Barytes (Kadapa) - World class deposit', 'Granite, limestone (Cement cluster), groundnut crops'],
                pointsTe: ['వర్షాచ్ఛాయా ప్రాంతం, వర్షాభావ పీఠభూమి', 'కడప మంగంపేటలో ప్రపంచ ప్రసిద్ధ బైరటీస్ నిక్షేపాలు', 'సున్నపురాయి, గ్రానైట్ మరియు వేరుశనగ పంటలు']
              }
            ]
          }
        ]
      },
      {
        id: 'geo-mindmap-1',
        title: 'AP Major River Basins & Irrigation Infrastructure',
        titleTe: 'ఆంధ్రప్రదేశ్ నదీ పరివాహక ప్రాంతాలు & సాగునీటి మౌలిక వసతులు',
        type: 'mindmap',
        caption: 'Drainage systems, national irrigation projects, and delta barrage distribution.',
        captionTe: 'గోదావరి, కృష్ణా మరియు పెన్నా నదీ పరివాహక ప్రాంతాలు మరియు బ్యారేజీల వ్యవస్థ.',
        nodes: [
          {
            id: 'geo-godavari',
            label: 'Godavari River System',
            labelTe: 'గోదావరి నదీ వ్యవస్థ',
            description: 'Polavaram National Project, Sir Arthur Cotton Barrage at Dowleswaram, Sapta Godavari delta mouths.',
            descriptionTe: 'పోలవరం జాతీయ ప్రాజెక్టు, ధవళేశ్వరం కాటన్ బ్యారేజ్, సప్త గోదావరి సంగమ శాఖలు.',
            badge: 'Northern Delta',
            badgeTe: 'ఉత్తర డెల్టా',
            category: 'primary'
          },
          {
            id: 'geo-krishna',
            label: 'Krishna River System',
            labelTe: 'కృష్ణా నదీ వ్యవస్థ',
            description: 'Srisailam, Nagarjuna Sagar, and Prakasam Barrage at Vijayawada nourishing Krishna delta.',
            descriptionTe: 'శ్రీశైలం, నాగార్జునసాగర్ రిజర్వాయర్లు మరియు విజయవాడ ప్రకాశం బ్యారేజ్.',
            badge: 'Central Delta',
            badgeTe: 'మధ్య డెల్టా',
            category: 'accent'
          },
          {
            id: 'geo-penna',
            label: 'Penna & Southern Rivers',
            labelTe: 'పెన్నా & దక్షిణ నదులు',
            description: 'Penna, Vamsadhara, Nagavali rivers providing critical irrigation across Rayalaseema & North Andhra.',
            descriptionTe: 'పెన్నా, వంశధార, నాగావళి నదుల ద్వారా రాయలసీమ, ఉత్తరాంధ్ర సాగునీటి సరఫరా.',
            badge: 'Regional Basins',
            badgeTe: 'ప్రాంతీయ నదులు',
            category: 'info'
          }
        ]
      }
    ];
  }

  if (domain === 'law') {
    return [
      {
        id: 'law-hierarchy-1',
        title: 'State Police Command Structure & Cadre Hierarchy',
        titleTe: 'ఆంధ్రప్రదేశ్ పోలీస్ శాఖ అధికార హోదాల క్రమచిత్రం',
        type: 'hierarchy',
        caption: 'Cadre hierarchy from Director General of Police to field Station House Officers.',
        captionTe: 'డీజీపీ కార్యాలయం నుండి క్షేత్రస్థాయి పోలీస్ స్టేషన్ ఎస్‌హెచ్‌వో వరకు హోదాల విభజన.',
        nodes: [
          {
            id: 'pol-dgp',
            label: 'Director General of Police (DGP - HoPF)',
            labelTe: 'డైరెక్టర్ జనరల్ ఆఫ్ పోలీస్ (DGP / HoPF)',
            description: 'Apex operational commander of state police force; advises State Home Department.',
            descriptionTe: 'రాష్ట్ర పోలీస్ దళాల సర్వోన్నత అధికారి; శాంతిభద్రతల నిర్వహణలో ప్రభుత్వానికి ప్రధాన సలహాదారు.',
            badge: 'Apex Commander',
            badgeTe: 'రాష్ట్ర అధిపతి',
            category: 'primary',
            children: [
              {
                id: 'pol-range',
                label: 'Inspector General of Police (IGP Range)',
                labelTe: 'ఇన్‌స్పెక్టర్ జనరల్ ఆఫ్ పోలీస్ (రేంజ్ ఐజీ)',
                description: 'Supervises Police Ranges comprising 4-6 administrative districts.',
                descriptionTe: 'బహుళ జిల్లాలతో కూడిన పోలీస్ రేంజ్ పర్యవేక్షణ మరియు సమన్వయం.',
                badge: 'Range Head',
                badgeTe: 'రేంజ్ స్థాయి',
                category: 'accent'
              },
              {
                id: 'pol-dist',
                label: 'Superintendent of Police (SP / District Head)',
                labelTe: 'సూపరింటెండెంట్ ఆఫ్ పోలీస్ (ఎస్పీ / జిల్లా పోలీస్ బాస్)',
                description: 'Command of District Police, law & order, crime prevention, and special task forces.',
                descriptionTe: 'జిల్లా పోలీస్ యంత్రాంగం, నేర నియంత్రణ మరియు ప్రత్యేక బలగాల అధిపతి.',
                badge: 'District Head',
                badgeTe: 'జిల్లా అధిపతి',
                category: 'warning',
                children: [
                  {
                    id: 'pol-sho',
                    label: 'DSP -> Circle Inspector -> Sub-Inspector (SHO)',
                    labelTe: 'డీఎస్పీ -> సీఐ -> సబ్ ఇన్‌స్పెక్టర్ (ఎస్‌హెచ్‌వో)',
                    description: 'Station House Officer vested with statutory investigation powers under CrPC/BNSS.',
                    descriptionTe: 'పోలీస్ స్టేషన్ ఇంఛార్జ్, ఎఫ్‌ఐఆర్ నమోదు మరియు క్షేత్రస్థాయి కేసుల దర్యాప్తు అధికారి.',
                    badge: 'Station House Officer',
                    badgeTe: 'స్టేషన్ అధికారి',
                    category: 'success'
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }

  if (domain === 'education') {
    return [
      {
        id: 'edu-mindmap-1',
        title: 'Howard Gardner\'s Multiple Intelligences Framework',
        titleTe: 'హోవార్డ్ గార్డ్‌నర్ బహుళ ప్రజ్ఞా సిద్ధాంత విభాగాలు',
        type: 'mindmap',
        caption: '8 Distinct modalities of child intelligence applicable in differentiated classroom instruction.',
        captionTe: 'తరగతి గదిలో విద్యార్థుల వ్యక్తిగత భేదాలకు అనుగుణంగా బోధించడానికి ఉపయోగపడే 8 రకాల ప్రజ్ఞలు.',
        nodes: [
          {
            id: 'mi-ling',
            label: 'Linguistic & Logical-Mathematical',
            labelTe: 'భాషా ప్రజ్ఞ & గణిత-తార్కిక ప్రజ్ఞ',
            description: 'Verbal mastery, rhetoric, mathematical problem-solving, algorithmic thinking, and deduction.',
            descriptionTe: 'శబ్ద ప్రావీణ్యం, భాషా నైపుణ్యం, సంఖ్యాత్మక సమస్యల సాధన మరియు కారణ విశ్లేషణ.',
            badge: 'Academic Core',
            badgeTe: 'భాష & గణితం',
            category: 'primary'
          },
          {
            id: 'mi-spat',
            label: 'Spatial, Musical & Bodily-Kinesthetic',
            labelTe: 'దృశ్య-స్థానిక, సంగీత & శారీరక ప్రజ్ఞ',
            description: 'Visualizing mental maps, rhythm perception, athletics, dance, surgical coordination.',
            descriptionTe: 'చిత్రాలు, మ్యాపుల విశ్లేషణ, సంగీత లయ మరియు శారీరక కదలికలలో నైపుణ్యం (క్రీడలు/నృత్యం).',
            badge: 'Creative & Motor',
            badgeTe: 'సృజనాత్మక',
            category: 'accent'
          },
          {
            id: 'mi-soc',
            label: 'Interpersonal, Intrapersonal & Naturalistic',
            labelTe: 'వ్యక్త్యంతర, వ్యక్తిత్వ & సహజ ప్రజ్ఞ',
            description: 'Empathy & leadership, self-reflection & emotional control, understanding ecology & flora-fauna.',
            descriptionTe: 'ఇతరుల భావాలను అర్థం చేసుకోవడం (నాయకత్వం), ఆత్మపరిశీలన మరియు పర్యావరణ పరిజ్ఞానం.',
            badge: 'Social & Emotional',
            badgeTe: 'సామాజిక',
            category: 'success'
          }
        ]
      }
    ];
  }

  if (domain === 'sachivalayam') {
    return [
      {
        id: 'sach-hierarchy-1',
        title: 'Grama / Ward Secretariat Administrative & Service Delivery Matrix',
        titleTe: 'గ్రామ / వార్డు సచివాలయ పరిపాలనా యంత్రాంగం & సేవా వ్యవస్థ',
        type: 'hierarchy',
        caption: 'Grassroots administrative chain connecting District Collectorate to household clusters.',
        captionTe: 'జిల్లా కలెక్టరేట్ నుండి ప్రతి 50 కుటుంబాల క్లస్టర్ వరకు ప్రజా సేవల పంపిణీ క్రమచిత్రం.',
        nodes: [
          {
            id: 'sach-coll',
            label: 'District Collector & Joint Collector',
            labelTe: 'జిల్లా కలెక్టర్ & జాయింట్ కలెక్టర్',
            description: 'District nodal authority overseeing development, DBT welfare distribution, and revenue matters.',
            descriptionTe: 'జిల్లా స్థాయి నోడల్ అధికారి; సంక్షేమ పథకాలు, రెవెన్యూ మరియు అభివృద్ధి పనుల పర్యవేక్షణ.',
            badge: 'District Apex',
            badgeTe: 'జిల్లా స్థాయి',
            category: 'primary',
            children: [
              {
                id: 'sach-mandal',
                label: 'MPDO / Tahsildar / Municipal Commissioner',
                labelTe: 'ఎంపీడీవో / తహశీల్దార్ / మున్సిపల్ కమిషనర్',
                description: 'Mandal and municipal administrative tier supervising Secretariat functional staff.',
                descriptionTe: 'మండల మరియు పురపాలక స్థాయి అధికారులు; సచివాలయాల రోజువారీ విధులను పర్యవేక్షిస్తారు.',
                badge: 'Mandal Level',
                badgeTe: 'మండల స్థాయి',
                category: 'warning',
                children: [
                  {
                    id: 'sach-func',
                    label: 'Grama / Ward Secretariat (10-12 Functionaries)',
                    labelTe: 'సచివాలయ ఉద్యోగులు (10-12 శాఖల సిబ్బంది)',
                    description: 'VRO, Panchayat Sec, Digital Assistant, Welfare Asst, Mahila Police, ANM, Agriculture Asst.',
                    descriptionTe: 'విలేజ్ రెవెన్యూ అధికారి, పంచాయతీ కార్యదర్శి, డిజిటల్ అసిస్టెంట్, సంక్షేమ సహాయకుడు, మహిళా పోలీస్.',
                    badge: 'Grassroots Office',
                    badgeTe: 'సచివాలయ కార్యాలయం',
                    category: 'success'
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }

  // Default / General studies fallback diagrams
  return [
    {
      id: 'gen-mindmap-1',
      title: `${title} - Multi-Dimensional Concept Mind Map`,
      titleTe: `${titleTe} - సమగ్ర కాన్సెప్ట్ మైండ్ మ్యాప్`,
      type: 'mindmap',
      caption: 'Core theoretical pillars, administrative mechanisms, and exam-focused critical checkpoints.',
      captionTe: 'సిద్ధాంతపరమైన పునాదులు, పరిపాలనా యంత్రాంగం మరియు పరీక్షా ముఖ్యాంశాలు.',
      nodes: [
        {
          id: 'gen-node-1',
          label: 'Core Definitions & Principles',
          labelTe: 'ప్రాథమిక నిర్వచనాలు & సిద్ధాంతాలు',
          description: 'Fundamental doctrines, scientific definitions, and foundational concepts.',
          descriptionTe: 'మౌలిక సూత్రాలు, శాస్త్రీయ నిర్వచనాలు మరియు ప్రాథమిక భావనలు.',
          badge: 'Theory',
          badgeTe: 'సిద్ధాంతం',
          category: 'primary'
        },
        {
          id: 'gen-node-2',
          label: 'Statutory Provisions & Rules',
          labelTe: 'చట్టబద్ధ నిబంధనలు & మార్గదర్శకాలు',
          description: 'Exact articles, legislative acts, timelines, and administrative standard operating procedures.',
          descriptionTe: 'నిర్దిష్ట అధికరణలు, చట్టాలు, కాలపరిమితులు మరియు కార్యాచరణ నిబంధనలు.',
          badge: 'Statutory Matrix',
          badgeTe: 'చట్టబద్ధం',
          category: 'accent'
        },
        {
          id: 'gen-node-3',
          label: 'Andhra Pradesh Specific Applications',
          labelTe: 'ఆంధ్రప్రదేశ్ రాష్ట్ర ప్రత్యేక అనువర్తనాలు',
          description: '26 districts landscape, state schemes, institutional frameworks, and recent exam trends.',
          descriptionTe: '26 జిల్లాల వ్యవస్థ, రాష్ట్ర ప్రభుత్వ పథకాలు మరియు తాజా పరీక్షల సరళి.',
          badge: 'AP Focus',
          badgeTe: 'ఏపీ ప్రత్యేకం',
          category: 'success'
        }
      ]
    }
  ];
}
