import { Course, Subject, Topic } from '../../types';

// APPSC Group 2 Topics (80 Topics across 5 Subjects)
export const APPSC_GROUP2_TOPICS_LIST = [
  // Subject 1: Indian Constitution & AP Governance (20 Topics)
  {
    id: 'g2-pol-01',
    subjectId: 'appsc-g2-polity',
    order: 1,
    title: 'Making of the Constitution & Preamble Philosophy',
    titleTe: 'రాజ్యాంగ పరిషత్ & ప్రవేశిక తాత్విక పునాదులు',
    titleHi: 'संविधान सभा एवं प्रस्तावना के मूल आदर्श',
    shortDesc: 'Constituent Assembly debates, Objectives Resolution, Sovereign, Socialist, Secular, Democratic Republic principles.',
    shortDescTe: 'రాజ్యాంగ నిర్మాణ సభ, నెహ్రూ లక్ష్యాల తీర్మానం, సార్వభౌమ, సామ్యవాద, లౌకిక, ప్రజాస్వామ్య గణతంత్ర ఆదర్శాలు.',
    shortDescHi: 'संविधान सभा, उद्देश्य प्रस्ताव तथा भारतीय संविधान के दार्शनिक आधार।',
    readTimeMinutes: 12,
    weight: '3-4 Marks in APPSC',
    overview: 'The Constitution of India was framed by the Constituent Assembly set up under the Cabinet Mission Plan of 1946. Dr. B.R. Ambedkar chaired the Drafting Committee.',
    overviewTe: '1946 నాటి క్యాబినెట్ మిషన్ ప్రణాళిక ఆధారంగా రాజ్యాంగ పరిషత్ ఏర్పడింది. డాక్టర్ బి.ఆర్. అంబేద్కర్ ముసాయిదా కమిటీ అధ్యక్షుడిగా వ్యవహరించారు.',
    keyPoints: ['Adopted on 26 November 1949, fully enforced on 26 January 1950.', '42nd Amendment 1976 added Socialist, Secular, and Integrity.'],
    keyPointsTe: ['1949 నవంబర్ 26న ఆమోదం, 1950 జనవరి 26న అమలు.', '42వ సవరణ ద్వారా సామ్యవాద, లౌకిక, సమగ్రత పదాలు చేర్చబడ్డాయి.'],
    q: 'Which Constitutional Amendment added the terms "Socialist", "Secular", and "Integrity" to the Preamble?',
    qTe: 'ఏ రాజ్యాంగ సవరణ ద్వారా ప్రవేశికలో "సామ్యవాద", "లౌకిక", "సమగ్రత" పదాలు చేర్చబడ్డాయి?',
    opts: ['42nd Amendment Act, 1976', '44th Amendment Act, 1978', '73rd Amendment Act, 1992', '86th Amendment Act, 2002'],
    optsTe: ['42వ రాజ్యాంగ సవరణ చట్టం, 1976', '44వ రాజ్యాంగ సవరణ చట్టం, 1978', '73వ రాజ్యాంగ సవరణ చట్టం, 1992', '86వ రాజ్యాంగ సవరణ చట్టం, 2002'],
    ans: 0,
    exp: 'The 42nd Amendment Act 1976 (known as Mini Constitution) added Socialist, Secular, and Integrity to the Preamble.'
  },
  {
    id: 'g2-pol-02',
    subjectId: 'appsc-g2-polity',
    order: 2,
    title: 'Fundamental Rights (Articles 12 to 35) & Writs',
    titleTe: 'ప్రాథమిక హక్కులు (నిబంధనలు 12-35) & రిట్లు',
    titleHi: 'मौलिक अधिकार एवं रिट अधिकारिता',
    shortDesc: 'Part III Magna Carta of India, 6 fundamental rights, Article 32 & 226 writ jurisdiction.',
    shortDescTe: 'భాగం III మాగ్నా కార్టా, 6 ప్రాథమిక హక్కులు, ఆర్టికల్ 32 & 226 రిట్ అధికారాలు.',
    shortDescHi: 'अनुच्छेद 12 से 35, 6 मौलिक अधिकार और संवैधानिक उपचार।',
    readTimeMinutes: 14,
    weight: 'Guaranteed 4 Marks',
    overview: 'Articles 12-35 protect individual liberty against arbitrary state action. Right to Property was repealed by 44th Amendment 1978.',
    overviewTe: 'ప్రాథమిక హక్కులు పౌరుల స్వేచ్ఛకు రక్షణ కల్పిస్తాయి. ఆర్టికల్ 32ను రాజ్యాంగ హృదయం మరియు ఆత్మగా పేర్కొన్నారు.',
    keyPoints: ['Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto.', 'Article 21 includes right to privacy and clean environment.'],
    keyPointsTe: ['హెబియస్ కార్పస్, మాండమస్, ప్రొహిబిషన్, సెర్షియోరరి, కో-వారెంటో.', 'ఆర్టికల్ 21 జీవించే హక్కు మరియు వ్యక్తిగత గోప్యతను కల్పిస్తుంది.'],
    q: 'Under which Article did the Supreme Court term Article 32 as the "Heart and Soul of the Constitution"?',
    qTe: 'డాక్టర్ బి.ఆర్. అంబేద్కర్ ఏ ఆర్టికల్ ను రాజ్యాంగ హృదయం మరియు ఆత్మగా అభివర్ణించారు?',
    opts: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
    optsTe: ['ఆర్టికల్ 14', 'ఆర్టికల్ 19', 'ఆర్టికల్ 21', 'ఆర్టికల్ 32'],
    ans: 3,
    exp: 'Dr. B.R. Ambedkar called Article 32 (Right to Constitutional Remedies) the Heart and Soul of the Constitution.'
  },
  {
    id: 'g2-pol-03',
    subjectId: 'appsc-g2-polity',
    order: 3,
    title: 'Directive Principles of State Policy (DPSPs - Part IV)',
    titleTe: 'ఆదేశిక సూత్రాలు (భాగం IV - నిబంధనలు 36-51)',
    titleHi: 'राज्य के नीति निर्देशक तत्व',
    shortDesc: 'Socialistic, Gandhian, and Liberal-Intellectual principles for establishing a welfare state.',
    shortDescTe: 'సంక్షేమ రాజ్య స్థాపనకై సోషలిస్టిక్, గాంధేయ, ఉదారవాద-మేధో సూత్రాలు.',
    shortDescHi: 'कल्याणकारी राज्य की स्थापना हेतु नीति निर्देशक तत्व।',
    readTimeMinutes: 11,
    weight: '2-3 Marks in APPSC',
    overview: 'Borrowed from the Irish Constitution, DPSPs are non-justiciable directives guiding the state in policy-making.',
    overviewTe: 'ఐర్లాండ్ రాజ్యాంగం నుండి గ్రహించిన ఆదేశిక సూత్రాలు సంక్షేమ రాజ్య సాధనకు ప్రభుత్వానికి దిశానిర్దేశం చేస్తాయి.',
    keyPoints: ['Article 40: Village Panchayats', 'Article 44: Uniform Civil Code', 'Article 45: Early Childhood Care'],
    keyPointsTe: ['ఆర్టికల్ 40: గ్రామ పంచాయతీల ఏర్పాటు', 'ఆర్టికల్ 44: యూనిఫాం సివిల్ కోడ్', 'ఆర్టికల్ 50: న్యాయవ్యవస్థను కార్యనిర్వాహక వర్గం నుండి వేరు చేయుట'],
    q: 'Which Article of the Constitution directs the State to organize Village Panchayats?',
    qTe: 'గ్రామ పంచాయతీలను స్వపరిపాలనా యూనిట్లుగా ఏర్పాటు చేయాలని ఏ ఆర్టికల్ ఆదేశిస్తుంది?',
    opts: ['Article 38', 'Article 40', 'Article 44', 'Article 48'],
    optsTe: ['ఆర్టికల్ 38', 'ఆర్టికల్ 40', 'ఆర్టికల్ 44', 'ఆర్టికల్ 48'],
    ans: 1,
    exp: 'Article 40 directs the State to organize village panchayats and endow them with necessary powers.'
  },
  {
    id: 'g2-pol-04',
    subjectId: 'appsc-g2-polity',
    order: 4,
    title: 'Fundamental Duties (Part IV-A - Article 51A)',
    titleTe: 'ప్రాథమిక విధులు (భాగం IV-A - ఆర్టికల్ 51A)',
    titleHi: 'मौलिक कर्तव्य (अनुच्छेद 51A)',
    shortDesc: 'Swaran Singh Committee recommendations, 42nd and 86th Amendments, 11 fundamental duties.',
    shortDescTe: 'స్వరన్ సింగ్ కమిటీ సిఫార్సులు, 42 & 86వ సవరణలు, 11 ప్రాథమిక విధులు.',
    shortDescHi: 'स्वर्ण सिंह समिति, 42वां एवं 86वां संशोधन, 11 मूल कर्तव्य।',
    readTimeMinutes: 10,
    weight: '2 Marks',
    overview: 'Added by the 42nd Amendment Act 1976 on the recommendation of the Swaran Singh Committee; 11th duty added in 2002.',
    overviewTe: '1976 లో 42వ సవరణ ద్వారా స్వరన్ సింగ్ కమిటీ సిఫార్సులతో చేర్చబడ్డాయి. 86వ సవరణ ద్వారా 11వ విధి చేర్చబడింది.',
    keyPoints: ['11th duty: Duty of parents to provide education to children aged 6-14 (86th CAA 2002).'],
    keyPointsTe: ['6-14 సం. పిల్లలకు ప్రాథమిక విద్య అందించడం తల్లిదండ్రుల బాధ్యత (86వ సవరణ).'],
    q: 'Which committee recommended the inclusion of Fundamental Duties in the Constitution?',
    qTe: 'రాజ్యాంగంలో ప్రాథమిక విధులను చేర్చాలని సిఫార్సు చేసిన కమిటీ ఏది?',
    opts: ['Sarkaria Commission', 'Swaran Singh Committee', 'Verma Committee', 'Punchhi Commission'],
    optsTe: ['సర్కారియా కమిషన్', 'స్వరన్ సింగ్ కమిటీ', 'వర్మ కమిటీ', 'పుంఛీ కమిషన్'],
    ans: 1,
    exp: 'Swaran Singh Committee (1976) recommended the incorporation of Fundamental Duties.'
  },
  {
    id: 'g2-pol-05',
    subjectId: 'appsc-g2-polity',
    order: 5,
    title: 'Union Executive: President, Vice-President & Prime Minister',
    titleTe: 'కేంద్ర కార్యనిర్వాహక వర్గం: రాష్ట్రపతి, ఉపరాష్ట్రపతి, ప్రధానమంత్రి',
    titleHi: 'संघीय कार्यपालिका: राष्ट्रपति, उपराष्ट्रपति और प्रधानमंत्री',
    shortDesc: 'Election, powers, ordinance-making (Art 123), pardoning power (Art 72), Council of Ministers.',
    shortDescTe: 'ఎన్నిక విధానం, ఆర్డినెన్స్ అధికారం (ఆర్టికల్ 123), క్షమాభిక్ష (ఆర్టికల్ 72), మంత్రిమండలి బాధ్యత.',
    shortDescHi: 'राष्ट्रपति की शक्तियां, अध्यादेश (अनुच्छेद 123) और मंत्रिपरिषद।',
    readTimeMinutes: 14,
    weight: '3 Marks',
    overview: 'The President is the constitutional head of state, while the Prime Minister is the real executive head.',
    overviewTe: 'రాష్ట్రపతి దేశాధినేత కాగా, ప్రధానమంత్రి నేతృత్వంలోని మంత్రిమండలి వాస్తవ కార్యనిర్వాహక అధికారాలను చెలాయిస్తుంది.',
    keyPoints: ['Electoral College: Elected MPs + Elected MLAs.', 'Article 72: Pardoning power of President.'],
    keyPointsTe: ['రాష్ట్రపతి ఎన్నికలో ఎన్నికైన ఎంపీలు మరియు ఎమ్మెల్యేలు పాల్గొంటారు.', 'ఆర్టికల్ 123 ప్రకారం రాష్ట్రపతి ఆర్డినెన్స్ జారీ చేస్తారు.'],
    q: 'Under which Article can the President promulgate an Ordinance when Parliament is not in session?',
    qTe: 'పార్లమెంట్ సమావేశంలో లేనప్పుడు రాష్ట్రపతి ఏ ఆర్టికల్ ప్రకారం ఆర్డినెన్స్ జారీ చేస్తారు?',
    opts: ['Article 110', 'Article 123', 'Article 143', 'Article 356'],
    optsTe: ['ఆర్టికల్ 110', 'ఆర్టికల్ 123', 'ఆర్టికల్ 143', 'ఆర్టికల్ 356'],
    ans: 1,
    exp: 'Article 123 empowers the President to promulgate ordinances during the recess of Parliament.'
  },
  {
    id: 'g2-pol-06',
    subjectId: 'appsc-g2-polity',
    order: 6,
    title: 'Parliament of India: Lok Sabha, Rajya Sabha & Legislative Process',
    titleTe: 'భారత పార్లమెంట్: లోక్‌సభ, రాజ్యసభ & చట్టాల రూపకల్పన',
    titleHi: 'संसद: लोकसभा, राज्यसभा एवं विधायी प्रक्रिया',
    shortDesc: 'Bicameral structure, Money Bills (Art 110), Joint Sitting (Art 108), Parliamentary Committees.',
    shortDescTe: 'ద్విసభా విధానం, ద్రవ్య బిల్లులు (ఆర్టికల్ 110), ఉభయ సభల సంయుక్త సమావేశం (ఆర్టికల్ 108).',
    shortDescHi: 'धन विधेयक (अनुच्छेद 110), संयुक्त बैठक और संसदीय समितियां।',
    readTimeMinutes: 15,
    weight: '4 Marks',
    overview: 'Parliament consists of the President, Rajya Sabha (Council of States), and Lok Sabha (House of the People).',
    overviewTe: 'రాష్ట్రపతి, రాజ్యసభ మరియు లోక్‌సభలు కలిపి భారత పార్లమెంట్‌గా ఏర్పడతాయి.',
    keyPoints: ['Lok Sabha Speaker presides over Joint Sittings under Article 108.', 'Money bills can only be introduced in Lok Sabha.'],
    keyPointsTe: ['ఉభయ సభల సంయుక్త సమావేశానికి లోక్‌సభ స్పీకర్ అధ్యక్షత వహిస్తారు.', 'ద్రవ్య బిల్లులను కేవలం లోక్‌సభలోనే ప్రవేశపెట్టాలి.'],
    q: 'Who presides over the Joint Sitting of both Houses of Parliament?',
    qTe: 'పార్లమెంట్ ఉభయ సభల సంయుక్త సమావేశానికి ఎవరు అధ్యక్షత వహిస్తారు?',
    opts: ['President of India', 'Vice-President of India', 'Speaker of Lok Sabha', 'Prime Minister'],
    optsTe: ['భారత రాష్ట్రపతి', 'భారత ఉపరాష్ట్రపతి', 'లోక్‌సభ స్పీకర్', 'ప్రధానమంత్రి'],
    ans: 2,
    exp: 'Under Article 118(4), the Speaker of Lok Sabha presides over a joint sitting.'
  },
  {
    id: 'g2-pol-07',
    subjectId: 'appsc-g2-polity',
    order: 7,
    title: 'Supreme Court of India & Judicial Review',
    titleTe: 'భారత సుప్రీంకోర్టు & న్యాయ సమీక్షాధికారం',
    titleHi: 'भारत का सर्वोच्च न्यायालय एवं न्यायिक समीक्षा',
    shortDesc: 'Original, Appellate, Advisory jurisdiction (Art 143), Collegium system, Basic Structure Doctrine.',
    shortDescTe: 'ప్రాథమిక, అప్పీలేట్, సలహా అధికారాలు (ఆర్టికల్ 143), కొలీజియం వ్యవస్థ, మూల స్వరూప సిద్ధాంతం.',
    shortDescHi: 'सलाहकारी क्षेत्राधिकार (अनुच्छेद 143), कॉलेजियम प्रणाली और मूल संरचना।',
    readTimeMinutes: 13,
    weight: '3-4 Marks',
    overview: 'The Supreme Court is the apex court and guardian of the Constitution under Articles 124 to 147.',
    overviewTe: 'సుప్రీంకోర్టు రాజ్యాంగ రక్షకుడిగా వ్యవహరిస్తుంది. కేశవానంద భారతి (1973) తీర్పు ద్వారా బేసిక్ స్ట్రక్చర్ సిద్ధాంతాన్ని ప్రతిపాదించింది.',
    keyPoints: ['Kesavananda Bharati case (1973) established Basic Structure.', 'Retirement age of Supreme Court judges is 65 years.'],
    keyPointsTe: ['కేశవానంద భారతి కేసు (1973) రాజ్యాంగ మూల స్వరూప సిద్ధాంతాన్ని స్థిరపరిచింది.', 'సుప్రీంకోర్టు న్యాయమూర్తుల పదవీ విరమణ వయస్సు 65 సంవత్సరాలు.'],
    q: 'In which landmark case did the Supreme Court propound the "Basic Structure Doctrine"?',
    qTe: 'సుప్రీంకోర్టు ఏ చారిత్రాత్మక కేసులో "రాజ్యాంగ మూల స్వరూప సిద్ధాంతాన్ని" (Basic Structure) ప్రతిపాదించింది?',
    opts: ['Golaknath Case (1967)', 'Kesavananda Bharati Case (1973)', 'Minerva Mills Case (1980)', 'Maneka Gandhi Case (1978)'],
    optsTe: ['గోలక్‌నాథ్ కేసు (1967)', 'కేశవానంద భారతి కేసు (1973)', 'మినర్వా మిల్స్ కేసు (1980)', 'మేనకా గాంధీ కేసు (1978)'],
    ans: 1,
    exp: 'Kesavananda Bharati vs State of Kerala (1973) established the Basic Structure Doctrine.'
  },
  {
    id: 'g2-pol-08',
    subjectId: 'appsc-g2-polity',
    order: 8,
    title: 'State Executive: Governor, Chief Minister & Council of Ministers',
    titleTe: 'రాష్ట్ర కార్యనిర్వాహక వర్గం: గవర్నర్, ముఖ్యమంత్రి & మంత్రిమండలి',
    titleHi: 'राज्य कार्यपालिका: राज्यपाल एवं मुख्यमंत्री',
    shortDesc: 'Constitutional role of Governor (Art 153-162), discretionary powers, relationship with Chief Minister.',
    shortDescTe: 'గవర్నర్ రాజ్యాంగ పాత్ర (నిబంధనలు 153-162), విచక్షణాధికారాలు, ముఖ్యమంత్రితో సంబంధాలు.',
    shortDescHi: 'राज्यपाल की शक्तियां और राज्य मंत्रिपरिषद।',
    readTimeMinutes: 11,
    weight: '2-3 Marks',
    overview: 'The Governor acts as the constitutional head of the State and the vital link between the Union and the State.',
    overviewTe: 'గవర్నర్ రాష్ట్ర రాజ్యాంగ అధిపతిగా మరియు కేంద్ర-రాష్ట్రాల మధ్య వారధిగా వ్యవహరిస్తారు.',
    keyPoints: ['Article 153: Governor for each State.', 'Appointed by the President and holds office during pleasure of President.'],
    keyPointsTe: ['ఆర్టికల్ 153 ప్రకారం ప్రతి రాష్ట్రానికి ఒక గవర్నర్ ఉంటారు.', 'రాష్ట్రపతి విశ్వాసం ఉన్నంత వరకు గవర్నర్ పదవిలో ఉంటారు.'],
    q: 'Who appoints the Advocate General of a State?',
    qTe: 'రాష్ట్ర అడ్వకేట్ జనరల్‌ను ఎవరు నియమిస్తారు?',
    opts: ['Chief Justice of High Court', 'Governor of the State', 'Chief Minister', 'President of India'],
    optsTe: ['హైకోర్టు ప్రధాన న్యాయమూర్తి', 'రాష్ట్ర గవర్నర్', 'ముఖ్యమంత్రి', 'భారత రాష్ట్రపతి'],
    ans: 1,
    exp: 'Under Article 165, the Governor appoints the Advocate General of the State.'
  },
  {
    id: 'g2-pol-09',
    subjectId: 'appsc-g2-polity',
    order: 9,
    title: 'State Legislature: AP Legislative Assembly & Legislative Council',
    titleTe: 'రాష్ట్ర శాసనసభ: ఏపీ అసెంబ్లీ & శాసనమండలి',
    titleHi: 'राज्य विधानमंडल: विधानसभा और विधान परिषद',
    shortDesc: 'Bicameral structure in AP, creation/abolition of Council (Art 169), legislative procedures.',
    shortDescTe: 'ఏపీలో ద్విసభా విధానం, శాసనమండలి రద్దు/పునరుద్ధరణ (ఆర్టికల్ 169), అసెంబ్లీ సీట్లు (175 + 58).',
    shortDescHi: 'विधान परिषद का सृजन (अनुच्छेद 169) और विधायी प्रक्रिया।',
    readTimeMinutes: 12,
    weight: '3 Marks',
    overview: 'Andhra Pradesh has a bicameral legislature with 175 Legislative Assembly seats and 58 Legislative Council seats.',
    overviewTe: 'ఆంధ్రప్రదేశ్ లో 175 శాసనసభ మరియు 58 శాసనమండలి స్థానాలతో ద్విసభా విధానం అమలులో ఉంది.',
    keyPoints: ['Article 169 empowers Parliament to create or abolish Legislative Councils based on State Assembly resolution.'],
    keyPointsTe: ['శాసనసభ తీర్మానం మేరకు పార్లమెంట్ ఆర్టికల్ 169 ప్రకారం శాసనమండలిని ఏర్పాటు లేదా రద్దు చేస్తుంది.'],
    q: 'What is the strength of the Andhra Pradesh Legislative Assembly and Legislative Council?',
    qTe: 'ఆంధ్రప్రదేశ్ శాసనసభ మరియు శాసనమండలి సభ్యుల సంఖ్య ఎంత?',
    opts: ['175 Assembly & 58 Council', '119 Assembly & 40 Council', '224 Assembly & 75 Council', '150 Assembly & 50 Council'],
    optsTe: ['175 అసెంబ్లీ & 58 కౌన్సిల్', '119 అసెంబ్లీ & 40 కౌన్సిల్', '224 అసెంబ్లీ & 75 కౌన్సిల్', '150 అసెంబ్లీ & 50 కౌన్సిల్'],
    ans: 0,
    exp: 'Andhra Pradesh has 175 elected MLAs in the Legislative Assembly and 58 MLCs in the Legislative Council.'
  },
  {
    id: 'g2-pol-10',
    subjectId: 'appsc-g2-polity',
    order: 10,
    title: '73rd & 74th Amendments: Panchayati Raj & Urban Local Bodies',
    titleTe: '73 & 74వ రాజ్యాంగ సవరణలు: పంచాయతీ రాజ్ & పురపాలక వ్యవస్థ',
    titleHi: '73वां एवं 74वां संविधान संशोधन: स्थानीय स्वशासन',
    shortDesc: '3-tier Panchayati Raj, 11th Schedule (29 items), 12th Schedule (18 items), State Election Commission.',
    shortDescTe: 'మూడంచెల పంచాయతీ వ్యవస్థ, 11వ షెడ్యూల్ (29 అంశాలు), 12వ షెడ్యూల్ (18 అంశాలు), ఎన్నికల సంఘం.',
    shortDescHi: 'त्रिस्तरीय पंचायती राज, 11वीं और 12वीं अनुसूची।',
    readTimeMinutes: 15,
    weight: 'Guaranteed 4-5 Marks',
    overview: '73rd and 74th Amendment Acts (1992) granted constitutional status to rural and urban local self-governments.',
    overviewTe: '1992 లో 73 & 74వ సవరణలు స్థానిక స్వపరిపాలన సంస్థలకు రాజ్యాంగ ప్రతిపత్తి కల్పించాయి.',
    keyPoints: ['11th Schedule contains 29 functional subjects for Panchayats.', '12th Schedule contains 18 functional subjects for Municipalities.'],
    keyPointsTe: ['11వ షెడ్యూల్ లో పంచాయతీలకు 29 అధికారాలు, 12వ షెడ్యూల్ లో మున్సిపాలిటీలకు 18 అధికారాలు ఉన్నాయి.'],
    q: 'How many functional items are listed in the Eleventh Schedule of the Constitution for Panchayats?',
    qTe: 'రాజ్యాంగంలోని 11వ షెడ్యూల్ లో పంచాయతీలకు ఎన్ని విధులు/అంశాలు కేటాయించబడ్డాయి?',
    opts: ['18 Items', '21 Items', '29 Items', '35 Items'],
    optsTe: ['18 అంశాలు', '21 అంశాలు', '29 అంశాలు', '35 అంశాలు'],
    ans: 2,
    exp: 'The Eleventh Schedule (Article 243G) contains 29 functional items for Panchayati Raj Institutions.'
  },
  {
    id: 'g2-pol-11',
    subjectId: 'appsc-g2-polity',
    order: 11,
    title: 'Emergency Provisions: National, State & Financial Emergency',
    titleTe: 'అత్యవసర అధికారాలు: జాతీయ, రాష్ట్రపతి పాలన & ఆర్థిక అత్యవసర పరిస్థితి',
    titleHi: 'आपातकालीन प्रावधान (अनुच्छेद 352, 356, 360)',
    shortDesc: 'Articles 352, 356, 360, parliamentary approval timelines, effect on Fundamental Rights (Art 358 & 359).',
    shortDescTe: 'నిబంధనలు 352, 356, 360, పార్లమెంట్ ఆమోదం, ప్రాథమిక హక్కులపై ప్రభావం (ఆర్టికల్ 20 & 21 రక్షణ).',
    shortDescHi: 'राष्ट्रीय आपातकाल, राष्ट्रपति शासन एवं वित्तीय आपातकाल।',
    readTimeMinutes: 11,
    weight: '2-3 Marks',
    overview: 'Part XVIII of the Constitution contains Emergency provisions to safeguard national sovereignty, unity, and security.',
    overviewTe: 'రాజ్యాంగంలోని 18వ భాగంలో అత్యవసర అధికారాలు పేర్కొనబడ్డాయి. జర్మనీ వైమర్ రాజ్యాంగం నుండి అత్యవసర అధికారాల సమయంలో హక్కుల రద్దును గ్రహించారు.',
    keyPoints: ['Articles 20 and 21 cannot be suspended even during National Emergency (44th Amendment).'],
    keyPointsTe: ['జాతీయ అత్యవసర పరిస్థితిలో కూడా ఆర్టికల్ 20 మరియు 21 రద్దు కావు.'],
    q: 'Which Fundamental Rights cannot be suspended even during a National Emergency?',
    qTe: 'జాతీయ అత్యవసర పరిస్థితి సమయంలో కూడా రద్దు చేయలేని ప్రాథమిక హక్కులు ఏవి?',
    opts: ['Articles 14 and 19', 'Articles 19 and 20', 'Articles 20 and 21', 'Articles 21 and 22'],
    optsTe: ['ఆర్టికల్ 14 మరియు 19', 'ఆర్టికల్ 19 మరియు 20', 'ఆర్టికల్ 20 మరియు 21', 'ఆర్టికల్ 21 మరియు 22'],
    ans: 2,
    exp: 'Under the 44th Amendment Act 1978, Articles 20 and 21 cannot be suspended during National Emergency.'
  },
  {
    id: 'g2-pol-12',
    subjectId: 'appsc-g2-polity',
    order: 12,
    title: 'Constitutional Bodies: ECI, UPSC, APPSC, CAG & Finance Commission',
    titleTe: 'రాజ్యాంగబద్ధ సంస్థలు: కేంద్ర ఎన్నికల సంఘం, UPSC, APPSC, కాగ్ & ఆర్థిక సంఘం',
    titleHi: 'संवैधानिक निकाय: चुनाव आयोग, लोक सेवा आयोग, सीएजी, वित्त आयोग',
    shortDesc: 'Articles 324 (ECI), 315-323 (PSC), 148 (CAG), 280 (Finance Commission) tenure and functions.',
    shortDescTe: 'ఆర్టికల్ 324 (ECI), 315 (APPSC), 148 (CAG), 280 (ఆర్థిక సంఘం) అధికారాలు మరియు నియామకం.',
    shortDescHi: 'संवैधानिक संस्थाओं की शक्तियां और कार्यकाल।',
    readTimeMinutes: 14,
    weight: '4 Marks',
    overview: 'Constitutional bodies derive their powers directly from the Constitution to maintain democratic checks and balances.',
    overviewTe: 'రాజ్యాంగబద్ధ సంస్థలు ప్రజాస్వామ్య వ్యవస్థలో పారదర్శకత మరియు స్వతంత్రతను కాపాడతాయి.',
    keyPoints: ['Article 280: Finance Commission constituted every 5 years.', 'Article 148: CAG is guardian of public purse.'],
    keyPointsTe: ['ఆర్టికల్ 280: ప్రతి 5 సంవత్సరాలకు ఆర్థిక సంఘం ఏర్పాటు.', 'ఆర్టికల్ 148: కాగ్ (CAG) ప్రభుత్వ నిధుల సంరక్షకుడు.'],
    q: 'Under which Article is the Finance Commission of India constituted by the President?',
    qTe: 'రాష్ట్రపతి ఏ ఆర్టికల్ ప్రకారం కేంద్ర ఆర్థిక సంఘాన్ని నియమిస్తారు?',
    opts: ['Article 265', 'Article 280', 'Article 300A', 'Article 324'],
    optsTe: ['ఆర్టికల్ 265', 'ఆర్టికల్ 280', 'ఆర్టికల్ 300A', 'ఆర్టికల్ 324'],
    ans: 1,
    exp: 'Article 280 provides for the constitution of the Finance Commission of India every five years.'
  },
  {
    id: 'g2-pol-13',
    subjectId: 'appsc-g2-polity',
    order: 13,
    title: 'Center-State Relations & Sarkaria / Punchhi Commission',
    titleTe: 'కేంద్ర-రాష్ట్ర సంబంధాలు & సర్కారియా, పుంఛీ కమిషన్లు',
    titleHi: 'केंद्र-राज्य संबंध: सरकारिया एवं पुंछी आयोग',
    shortDesc: 'Legislative, administrative, and financial relations (Part XI & XII), 7th Schedule Lists.',
    shortDescTe: 'శాసన, పరిపాలన, ఆర్థిక సంబంధాలు, 7వ షెడ్యూల్ (కేంద్ర, రాష్ట్ర, ఉమ్మడి జాబితాలు).',
    shortDescHi: 'सातवीं अनुसूची, वित्तीय संबंध एवं आयोगों की सिफारिशें।',
    readTimeMinutes: 12,
    weight: '3 Marks',
    overview: 'Indian federalism has a strong unitary bias ("Quasi-Federal"). Sarkaria Commission (1983) and Punchhi Commission (2007) suggested cooperative federal reforms.',
    overviewTe: 'భారత సమాఖ్య వ్యవస్థలో కేంద్ర-రాష్ట్రాల మధ్య అధికారాల విభజన 7వ షెడ్యూల్‌లో పేర్కొనబడింది.',
    keyPoints: ['Union List (100 items), State List (61 items), Concurrent List (52 items).', 'Residuary powers rest with the Center (Art 248).'],
    keyPointsTe: ['కేంద్ర జాబితా (100), రాష్ట్ర జాబితా (61), ఉమ్మడి జాబితా (52 అంశాలు).', 'అవశిష్ట అధికారాలు కేంద్రానికి ఉంటాయి (ఆర్టికల్ 248).'],
    q: 'Which Commission was appointed in 1983 to examine Center-State relations in India?',
    qTe: '1983 లో కేంద్ర-రాష్ట్ర సంబంధాల సమీక్ష కోసం ఏర్పాటైన కమిషన్ ఏది?',
    opts: ['Sarkaria Commission', 'Punchhi Commission', 'Kothari Commission', 'Shah Commission'],
    optsTe: ['సర్కారియా కమిషన్', 'పుంఛీ కమిషన్', 'కొఠారి కమిషన్', 'షా కమిషన్'],
    ans: 0,
    exp: 'Justice R.S. Sarkaria Commission was appointed in 1983 to review Center-State relations.'
  },
  {
    id: 'g2-pol-14',
    subjectId: 'appsc-g2-polity',
    order: 14,
    title: 'Andhra Pradesh Reorganisation Act, 2014 & Schedule Provisions',
    titleTe: 'ఆంధ్రప్రదేశ్ పునర్వ్యవస్థీకరణ చట్టం, 2014 & షెడ్యూల్ నిబంధనలు',
    titleHi: 'आंध्र प्रदेश पुनर्गठन अधिनियम 2014',
    shortDesc: '108 Sections, 13 Schedules, division of assets, institutions in 9th & 10th schedules, Polavaram national project status.',
    shortDescTe: '108 సెక్షన్లు, 13 షెడ్యూళ్లు, ఆస్తుల విభజన, 9 & 10వ షెడ్యూల్ సంస్థలు, పోలవరం జాతీయ ప్రాజెక్టు హోదా (సెక్షన్ 90).',
    shortDescHi: '108 धाराएं, 13 अनुसूचियां, संपत्ति विभाजन एवं पोलावरम राष्ट्रीय परियोजना।',
    readTimeMinutes: 16,
    weight: 'Guaranteed 5-6 Marks in APPSC',
    overview: 'Enacted by Parliament under Article 3, bifurcating AP into Telangana and residual Andhra Pradesh on 2 June 2014 (Appointed Day).',
    overviewTe: '2014 జూన్ 2న ఆంధ్రప్రదేశ్ మరియు తెలంగాణ రాష్ట్రాలుగా విభజించబడింది. సెక్షన్ 90 ప్రకారం పోలవరం ప్రాజెక్టుకు జాతీయ హోదా లభించింది.',
    keyPoints: ['Section 90: Polavaram declared a National Project.', 'Section 47: Apportionment of assets and liabilities based on population ratio (58.32 : 41.68).'],
    keyPointsTe: ['సెక్షన్ 90: పోలవరం ప్రాజెక్టుకు జాతీయ హోదా.', 'ఆస్తుల విభజన జనాభా నిష్పత్తి 58.32 : 41.68 ప్రకారం.'],
    q: 'Under which Section of the AP Reorganisation Act 2014 is the Polavaram Project declared a National Irrigation Project?',
    qTe: 'ఆంధ్రప్రదేశ్ పునర్వ్యవస్థీకరణ చట్టం 2014 లోని ఏ సెక్షన్ ప్రకారం పోలవరం ప్రాజెక్టును జాతీయ ప్రాజెక్టుగా ప్రకటించారు?',
    opts: ['Section 47', 'Section 68', 'Section 90', 'Section 108'],
    optsTe: ['సెక్షన్ 47', 'సెక్షన్ 68', 'సెక్షన్ 90', 'సెక్షన్ 108'],
    ans: 2,
    exp: 'Section 90 of the AP Reorganisation Act 2014 declares the Polavaram Irrigation Project as a National Project.'
  },
  {
    id: 'g2-pol-15',
    subjectId: 'appsc-g2-polity',
    order: 15,
    title: 'Article 371D & Presidential Orders for AP Public Employment',
    titleTe: 'ఆర్టికల్ 371D & ఏపీ ఉద్యోగాలలో స్థానికత (ప్రెసిడెన్షియల్ ఆర్డర్)',
    titleHi: 'अनुच्छेद 371D एवं स्थानीय आरक्षण',
    shortDesc: '32nd Amendment 1973, Six-Point Formula, educational and employment zones in Andhra Pradesh.',
    shortDescTe: '32వ రాజ్యాంగ సవరణ 1973, ఆరు సూత్రాల పథకం, విద్యా మరియు ఉద్యోగ జోనల్ వ్యవస్థ.',
    shortDescHi: '32वां संशोधन, छह सूत्री फॉर्मूला और क्षेत्रीय आरक्षण।',
    readTimeMinutes: 12,
    weight: '3-4 Marks',
    overview: 'Article 371D provides special provisions regarding public employment and education in Andhra Pradesh based on the 1973 Six-Point Formula.',
    overviewTe: '32వ రాజ్యాంగ సవరణ 1973 ద్వారా చేర్చబడిన ఆర్టికల్ 371D ఆంధ్రప్రదేశ్‌లో స్థానిక రిజర్వేషన్లకు రాజ్యాంగ రక్షణ కల్పిస్తుంది.',
    keyPoints: ['Inserted via 32nd Constitutional Amendment Act, 1973.', 'AP divided into multi-zones for direct recruitment.'],
    keyPointsTe: ['1973 లో 32వ రాజ్యాంగ సవరణ ద్వారా ఆర్టికల్ 371D చేర్చబడింది.', 'జోనల్ మరియు మల్టీ-జోనల్ పోస్టుల వర్గీకరణ.'],
    q: 'Which Constitutional Amendment inserted Article 371D to implement the Six-Point Formula in Andhra Pradesh?',
    qTe: 'ఆరు సూత్రాల పథకం అమలు కోసం ఆర్టికల్ 371D ని ఏ రాజ్యాంగ సవరణ ద్వారా చేర్చారు?',
    opts: ['28th Amendment 1972', '32nd Amendment 1973', '42nd Amendment 1976', '44th Amendment 1978'],
    optsTe: ['28వ సవరణ 1972', '32వ సవరణ 1973', '42వ సవరణ 1976', '44వ సవరణ 1978'],
    ans: 1,
    exp: 'The 32nd Constitutional Amendment Act, 1973 inserted Article 371D for Andhra Pradesh.'
  },
  {
    id: 'g2-pol-16',
    subjectId: 'appsc-g2-polity',
    order: 16,
    title: 'Statutory & Regulatory Bodies: NHRC, Lokpal, AP Lokayukta & CVC',
    titleTe: 'చట్టబద్ధ సంస్థలు: మానవ హక్కుల కమిషన్, లోక్‌పాల్, ఏపీ లోకాయుక్త & CVC',
    titleHi: 'सांविधिक निकाय: मानवाधिकार आयोग, लोकपाल, लोकायुक्त',
    shortDesc: 'Protection of Human Rights Act 1993, Lokpal and Lokayuktas Act 2013, Central Vigilance Commission.',
    shortDescTe: 'మానవ హక్కుల పరిరక్షణ చట్టం 1993, లోక్‌పాల్ & లోకాయుక్త చట్టం 2013, అవినీతి నిరోధం.',
    shortDescHi: 'राष्ट्रीय मानवाधिकार आयोग, लोकपाल एवं केंद्रीय सतर्कता आयोग।',
    readTimeMinutes: 11,
    weight: '2 Marks',
    overview: 'Statutory bodies are created by Acts of Parliament/State Legislature to investigate corruption and protect civil rights.',
    overviewTe: 'పార్లమెంట్ లేదా అసెంబ్లీ చట్టాల ద్వారా ఏర్పడిన సంస్థలు ప్రజా హక్కుల రక్షణకు తోడ్పడతాయి.',
    keyPoints: ['NHRC Chairperson is a former Chief Justice of India or Judge of Supreme Court.', 'AP Lokayukta investigates corruption allegations against public servants.'],
    keyPointsTe: ['NHRC చైర్మన్‌గా సుప్రీంకోర్టు మాజీ ప్రధాన న్యాయమూర్తి లేదా న్యాయమూర్తి ఉంటారు.'],
    q: 'Who appoints the Chairperson and Members of the National Human Rights Commission (NHRC)?',
    qTe: 'జాతీయ మానవ హక్కుల కమిషన్ (NHRC) చైర్మన్ మరియు సభ్యులను ఎవరు నియమిస్తారు?',
    opts: ['Chief Justice of India', 'President of India on committee recommendation', 'Prime Minister directly', 'Speaker of Lok Sabha'],
    optsTe: ['భారత ప్రధాన న్యాయమూర్తి', 'ఉన్నతస్థాయి కమిటీ సిఫార్సు మేరకు రాష్ట్రపతి', 'ప్రధానమంత్రి నేరుగా', 'లోక్‌సభ స్పీకర్'],
    ans: 1,
    exp: 'The President appoints NHRC members on the recommendation of a 6-member committee headed by the Prime Minister.'
  },
  {
    id: 'g2-pol-17',
    subjectId: 'appsc-g2-polity',
    order: 17,
    title: 'Right to Information Act, 2005 & Citizen Charters',
    titleTe: 'సమాచార హక్కు చట్టం 2005 & పౌర సేవా పత్రాలు',
    titleHi: 'सूचना का अधिकार अधिनियम 2005',
    shortDesc: 'Key sections (Sec 4, 6, 7, 8 exemptions), PIO responsibilities, 30 days timeline, State Information Commission.',
    shortDescTe: 'సెక్షన్ 4 (స్వచ్ఛంద వెల్లడి), సెక్షన్ 7 (30 రోజుల గడువు), సెక్షన్ 8 (మినహాయింపులు), రాష్ట్ర సమాచార కమిషన్.',
    shortDescHi: 'आरटीआई अधिनियम, लोक सूचना अधिकारी एवं सूचना आयोग।',
    readTimeMinutes: 11,
    weight: '2-3 Marks',
    overview: 'RTI Act 2005 empowers citizens to seek information from public authorities, promoting transparency and accountability.',
    overviewTe: 'ప్రజా పాలనలో పారదర్శకత, జవాబుదారీతనం కోసం 2005 అక్టోబర్ 12న సమాచార హక్కు చట్టం అమల్లోకి వచ్చింది.',
    keyPoints: ['Time limit to provide information: 30 days (48 hours for life and liberty issues).'],
    keyPointsTe: ['సమాచారం అందించే గడువు: 30 రోజులు (జీవించే హక్కుకు సంబంధించినదైతే 48 గంటలు).'],
    q: 'Within how many hours must information concerning the "life or liberty" of a person be provided under RTI Act 2005?',
    qTe: 'వ్యక్తి జీవించే హక్కు లేదా స్వేచ్ఛకు సంబంధించిన సమాచారాన్ని RTI చట్టం ప్రకారం ఎన్ని గంటల్లో అందించాలి?',
    opts: ['24 Hours', '48 Hours', '7 Days', '30 Days'],
    optsTe: ['24 గంటలు', '48 గంటలు', '7 రోజులు', '30 రోజులు'],
    ans: 1,
    exp: 'Under Section 7(1) of RTI Act 2005, information concerning life or liberty must be provided within 48 hours.'
  },
  {
    id: 'g2-pol-18',
    subjectId: 'appsc-g2-polity',
    order: 18,
    title: 'Constitutional Amendments & Article 368 Procedures',
    titleTe: 'రాజ్యాంగ సవరణ విధానం & ఆర్టికల్ 368',
    titleHi: 'संविधान संशोधन प्रक्रिया (अनुच्छेद 368)',
    shortDesc: '3 types of amendments: Simple majority, Special majority, Special majority with 50% State ratifications.',
    shortDescTe: 'మూడు రకాల సవరణలు: సాధారణ మెజారిటీ, ప్రత్యేక మెజారిటీ, 50% రాష్ట్రాల ఆమోదంతో కూడిన ప్రత్యేక మెజారిటీ.',
    shortDescHi: 'साधारण एवं विशेष बहुमत, राज्यों का अनुसमर्थन।',
    readTimeMinutes: 10,
    weight: '2 Marks',
    overview: 'Part XX Article 368 details the power of Parliament to amend the Constitution without altering the basic structure.',
    overviewTe: 'దక్షిణాఫ్రికా రాజ్యాంగం నుండి గ్రహించిన ఆర్టికల్ 368 రాజ్యాంగ సవరణ విధానాన్ని నిర్దేశిస్తుంది.',
    keyPoints: ['Borrowed from South African Constitution.', 'No provision for a joint sitting for Constitutional Amendment Bills.'],
    keyPointsTe: ['రాజ్యాంగ సవరణ బిల్లులకు ఉభయ సభల సంయుక్త సమావేశం నిర్వహించే అవకాశం లేదు.'],
    q: 'From which country\'s Constitution was the procedure for amendment of the Indian Constitution borrowed?',
    qTe: 'భారత రాజ్యాంగ సవరణ విధానాన్ని ఏ దేశ రాజ్యాంగం నుండి గ్రహించారు?',
    opts: ['USA', 'South Africa', 'Australia', 'Ireland'],
    optsTe: ['అమెరికా', 'దక్షిణాఫ్రికా', 'ఆస్ట్రేలియా', 'ఐర్లాండ్'],
    ans: 1,
    exp: 'The procedure for amending the Constitution under Article 368 was borrowed from the Constitution of South Africa.'
  },
  {
    id: 'g2-pol-19',
    subjectId: 'appsc-g2-polity',
    order: 19,
    title: 'Good Governance, Citizen Charters & e-Governance in AP',
    titleTe: 'సుపరిపాలన, పౌర చార్టర్లు & ఏపీలో ఈ-గవర్నెన్స్ విప్లవం',
    titleHi: 'सुशासन एवं ई-गवर्नेंस पहल',
    shortDesc: 'SMART governance, Spandana grievance redressal, digital public service delivery mechanisms.',
    shortDescTe: 'స్మార్ట్ పాలన, స్పందన ప్రజా సమస్యల పరిష్కార వేదిక, గ్రామ సచివాలయాల ఈ-సేవలు.',
    shortDescHi: 'ई-प्रशासन, नागरिक अधिकार पत्र एवं पारदर्शी शासन।',
    readTimeMinutes: 10,
    weight: '2 Marks',
    overview: 'AP leads in digital e-governance through integrated portals, Spandana grievance redressal, and village secretariats.',
    overviewTe: 'సచివాలయ వ్యవస్థ మరియు స్పందన పోర్టల్ ద్వారా ఆంధ్రప్రదేశ్ సుపరిపాలనలో అగ్రగామిగా నిలిచింది.',
    keyPoints: ['SMART Governance: Simple, Moral, Accountable, Responsive, Transparent.'],
    keyPointsTe: ['స్మార్ట్ పాలన: సరళమైన, నైతిక, జవాబుదారీ, స్పందించే, పారదర్శక పాలన.'],
    q: 'What is the full form of the SMART governance acronym?',
    qTe: 'సుపరిపాలనలో SMART governance పూర్తి రూపం ఏమిటి?',
    opts: ['Simple, Moral, Accountable, Responsive, Transparent', 'Systematic, Modern, Accurate, Reliable, Timely', 'Strategic, Moral, Active, Real-time, Technical', 'Social, Municipal, Automated, Responsive, Targeted'],
    optsTe: ['Simple, Moral, Accountable, Responsive, Transparent', 'Systematic, Modern, Accurate, Reliable, Timely', 'Strategic, Moral, Active, Real-time, Technical', 'Social, Municipal, Automated, Responsive, Targeted'],
    ans: 0,
    exp: 'SMART Governance stands for Simple, Moral, Accountable, Responsive, and Transparent.'
  },
  {
    id: 'g2-pol-20',
    subjectId: 'appsc-g2-polity',
    order: 20,
    title: 'Public Interest Litigation (PIL) & Judicial Activism',
    titleTe: 'ప్రజా ప్రయోజన వ్యాజ్యాలు (PIL) & న్యాయవ్యవస్థ క్రియాశీలత',
    titleHi: 'जनहित याचिका (PIL) एवं न्यायिक सक्रियता',
    shortDesc: 'Origins of PIL in India, Justice P.N. Bhagwati & V.R. Krishna Iyer, locus standi relaxation.',
    shortDescTe: 'జస్టిస్ పి.ఎన్. భగవతి & వి.ఆర్. కృష్ణయ్యర్ పాత్ర, లోకస్ స్టాండీ సడలింపు, పర్యావరణ పరిరక్షణ తీర్పులు.',
    shortDescHi: 'पीआईएल की अवधारणा, जस्टिस भगवती और न्यायिक सक्रियता।',
    readTimeMinutes: 10,
    weight: '2 Marks',
    overview: 'PIL originated in USA and was introduced in India in early 1980s by Justice P.N. Bhagwati and Justice V.R. Krishna Iyer.',
    overviewTe: 'సామాన్య ప్రజలకు న్యాయం చేరువ చేయడానికి 1980లలో జస్టిస్ పి.ఎన్. భగవతి PIL విధానాన్ని ప్రారంభించారు.',
    keyPoints: ['Relaxes traditional rule of locus standi to allow public-spirited citizens to approach courts.'],
    keyPointsTe: ['బాధితులే కాకుండా సమాజ హితం కోరే ఎవరైనా కోర్టులను ఆశ్రయించవచ్చు.'],
    q: 'Which eminent Supreme Court judge is regarded as the Pioneer of Public Interest Litigation (PIL) in India?',
    qTe: 'భారతదేశంలో ప్రజా ప్రయోజన వ్యాజ్యాల (PIL) పితామహుడిగా ఎవరిని పరిగణిస్తారు?',
    opts: ['Justice P.N. Bhagwati', 'Justice H.J. Kania', 'Justice M. Patanjali Sastri', 'Justice Mehr Chand Mahajan'],
    optsTe: ['జస్టిస్ పి.ఎన్. భగవతి', 'జస్టిస్ హెచ్.జె. కనియా', 'జస్టిస్ పతంజలి శాస్త్రి', 'జస్టిస్ మెహర్ చంద్ మహాజన్'],
    ans: 0,
    exp: 'Justice P.N. Bhagwati (along with Justice V.R. Krishna Iyer) is widely regarded as the father of PIL in India.'
  }
];

// Helper to generate full curriculum subjects for APPSC Group 2 (80 topics total)
export function getAppscGroup2Subjects(): Subject[] {
  // We distribute ~80 topics across 5 comprehensive subjects
  const polityTopics: Topic[] = APPSC_GROUP2_TOPICS_LIST.map(t => ({
    id: t.id,
    subjectId: 'appsc-g2-polity',
    courseId: 'appsc-group2',
    order: t.order,
    title: t.title,
    titleTe: t.titleTe,
    titleHi: t.titleHi,
    shortDesc: t.shortDesc,
    shortDescTe: t.shortDescTe,
    shortDescHi: t.shortDescHi,
    readTimeMinutes: t.readTimeMinutes,
    difficulty: 'Standard',
    highYieldWeightage: t.weight,
    content: {
      overview: t.overview,
      overviewTe: t.overviewTe,
      overviewHi: t.overview,
      sections: [
        {
          title: `1. Core Examination Concepts: ${t.title}`,
          titleTe: `1. పరీక్షాంశాల ముఖ్య విశ్లేషణ: ${t.titleTe}`,
          titleHi: `1. मुख्य तथ्य: ${t.titleHi}`,
          paragraphs: [t.overview, ...t.keyPoints],
          paragraphsTe: [t.overviewTe, ...t.keyPointsTe],
          keyPoints: t.keyPoints,
          keyPointsTe: t.keyPointsTe,
        }
      ],
      quickFacts: [
        { label: 'Exam Focus', val: t.weight },
        { label: 'Key Provision', val: t.title.split('(')[0].trim() }
      ],
      quickFactsTe: [
        { label: 'పరీక్ష ప్రాధాన్యత', val: t.weight },
        { label: 'ముఖ్య అంశం', val: t.titleTe.split('(')[0].trim() }
      ],
      revisionPoints: t.keyPoints,
      revisionPointsTe: t.keyPointsTe,
    },
    questions: [
      {
        id: `${t.id}-q1`,
        topicId: t.id,
        question: t.q,
        questionTe: t.qTe,
        questionHi: t.q,
        options: t.opts,
        optionsTe: t.optsTe,
        optionsHi: t.opts,
        correctIndex: t.ans,
        explanation: t.exp,
        explanationTe: t.exp,
        referenceAct: 'APPSC Syllabus Standard Reference'
      }
    ]
  }));

  // Subject 2: AP History & Culture (20 Topics)
  const apHistoryTopicsData = [
    { num: 1, en: 'Satavahana Dynasty: Administration, Amaravati Art & Trade', te: 'శాతవాహనుల యుగం: పరిపాలన, అమరావతి శిల్పకళ & రోమన్ వాణిజ్యం', hi: 'सातवाहन राजवंश' },
    { num: 2, en: 'Ikshvakus of Vijayapuri: Buddhism & Nagarjunakonda Heritage', te: 'విజయపురి ఇక్ష్వాకులు: బౌద్ధ మతం & నాగార్జునకొండ శిల్పకళ', hi: 'इक्ष्वाकु वंश' },
    { num: 3, en: 'Vishnukundins: Undavalli & Mogalrajapuram Rock-Cut Caves', te: 'విష్ణుకుండినులు: ఉండవల్లి, మొగల్రాజపురం గుహాలయాలు', hi: 'विष्णुकुंडिन वंश' },
    { num: 4, en: 'Eastern Chalukyas of Vengi: Evolution of Telugu Language & Nannaya', te: 'వేంగి తూర్పు చాళుక్యులు: తెలుగు భాషా వికాసం & నన్నయ భారతం', hi: 'पूर्वी चालुक्य' },
    { num: 5, en: 'Kakatiyas of Warangal: Ganapati Deva, Rudrama Devi & Tank Irrigation', te: 'కాకతీయుల యుగం: గణపతి దేవుడు, రాణీ రుద్రమదేవి & గొలుసుకట్టు చెరువులు', hi: 'काकतीय राजवंश' },
    { num: 6, en: 'Reddy Kingdoms of Kondaveedu & Rajahmundry: Golden Age of Telugu Literature', te: 'రెడ్డి రాజుల యుగం (కొండవీడు, రాజమండ్రి): శ్రీనాథుని కవిత్వం & వసంతోత్సవాలు', hi: 'रेड्डी साम्राज्य' },
    { num: 7, en: 'Vijayanagara Empire: Sri Krishnadevaraya, Administration & Rayalaseema Golden Era', te: 'విజయనగర సామ్రాజ్యం: శ్రీకృష్ణదేవరాయలు, అష్టదిగ్గజాలు & పరిపాలన', hi: 'विजयनगर साम्राज्य' },
    { num: 8, en: 'Qutb Shahis of Golconda & Andhra Coastal Regions', te: 'గోల్కొండ కుతుబ్ షాహీలు & ఆంధ్ర తీర ప్రాంతాలపై ప్రభావం', hi: 'कुतुब शाही वंश' },
    { num: 9, en: 'Advent of Europeans in Andhra: Dutch, French & British in Machilipatnam', te: 'ఆంధ్రలో ఐరోపా వారి ఆగమనం: మచిలీపట్నంలో డచ్, ఫ్రెంచ్ & బ్రిటిష్ కోటలు', hi: 'यूरोपीय आगमन' },
    { num: 10, en: 'Northern Circars & Ceded Districts: Acquisition by British East India Company', te: 'ఉత్తర సర్కారులు & దత్త మండలాలు (రాయలసీమ) బ్రిటిష్ వశం', hi: 'उत्तरी सरकार' },
    { num: 11, en: '1857 Revolt in Andhra: Uprisings in Kadapa, Visakhapatnam & Machilipatnam', te: '1857 ప్రథమ స్వాతంత్ర్య సంగ్రామం: కడప, విశాఖ, మచిలీపట్నం తిరుగుబాట్లు', hi: '1857 का विद्रोह' },
    { num: 12, en: 'Social Reform Movement in Andhra: Kandukuri Veeresalingam & Widow Remarriage', te: 'ఆంధ్ర సాంఘిక సంస్కరణోద్యమం: కందుకూరి వీరేశలింగం & వితంతు పునర్వివాహం', hi: 'कंदुकूरी वीरेशलिंगम' },
    { num: 13, en: 'Gurazada Apparao, Gidugu Ramamurthy & Vyavaharika Bhasha Movement', te: 'గురజాడ అప్పారావు (కన్యాశుల్కం), గిడుగు రామ్మూర్తి & వ్యవహారిక భాషా ఉద్యమం', hi: 'व्यावहारिक भाषा आंदोलन' },
    { num: 14, en: 'Vandemataram Movement in Andhra (1905-1911): Bipin Chandra Pal Visit', te: 'ఆంధ్రలో వందేమాతర ఉద్యమం: బిపిన్ చంద్రపాల్ రాజమండ్రి పర్యటన', hi: 'वंदेमातरम आंदोलन' },
    { num: 15, en: 'Non-Cooperation Movement: Chirala-Perala & Palnadu Forest Satyagraha', te: 'సహాయ నిరాకరణ ఉద్యమం: చీరాల-పేరాల ఉద్యమం & పల్నాడు పుల్లరి సత్యాగ్రహం', hi: 'असहयोग आंदोलन' },
    { num: 16, en: 'Alluri Sitarama Raju & Rampa Tribal Rebellion (1922-1924)', te: 'అల్లూరి సీతారామరాజు & రంప గిరిజన విప్లవం (1922-1924)', hi: 'अल्लूरी सीताराम राजू' },
    { num: 17, en: 'Salt Satyagraha in Andhra: Sibiram at Kottapatnam & Dandu Narayana Raju', te: 'ఆంధ్రలో ఉప్పు సత్యాగ్రహం: కొత్తపట్నం శిబిరం & ప్రముఖ నాయకులు', hi: 'नमक सत्याग्रह' },
    { num: 18, en: 'Andhra Movement: Potti Sreeramulu Fast & Formation of Andhra State (1953)', te: 'ఆంధ్ర రాష్ట్రోద్యమం: పొట్టి శ్రీరాములు ఆమరణ నిరాహారదీక్ష & కర్నూలు రాజధాని', hi: 'आंध्र राज्य गठन 1953' },
    { num: 19, en: 'States Reorganisation (1956), Gentlemen\'s Agreement & Formation of AP', te: 'రాష్ట్రాల పునర్వ్యవస్థీకరణ (1956): పెద్దమనుషుల ఒప్పందం & ఆంధ్రప్రదేశ్ ఆవిర్భావం', hi: 'जेंटलमैन समझौता' },
    { num: 20, en: 'Folk Traditions, Kuchipudi Dance & Temple Architecture of Andhra Pradesh', te: 'ఆంధ్రప్రదేశ్ జానపద కళలు, కూచిపూడి నృత్యం, లేపాక్షి & ద్రాక్షారామం దేవాలయాలు', hi: 'कुचिपुड़ी एवं लोक कलाएं' }
  ];

  const apHistoryTopics: Topic[] = apHistoryTopicsData.map((item, idx) => ({
    id: `g2-aphist-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'appsc-g2-aphistory',
    courseId: 'appsc-group2',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Core syllabus module covering historical significance, cultural evolution, and key questions for ${item.en}.`,
    shortDescTe: `${item.te} పై APPSC గ్రూప్ 2 ప్రిలిమ్స్ మరియు మెయిన్స్ కొరకు సమగ్ర ప్రామాణిక నోట్స్ & ప్రాక్టీస్ ప్రశ్నలు.`,
    shortDescHi: `${item.en} - महत्वपूर्ण ऐतिहासिक तथ्य एवं प्रश्नोत्तर।`,
    readTimeMinutes: 12,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks)',
    content: {
      overview: `Detailed APPSC examination reference notes covering ${item.en}, political events, socio-economic life, and historical milestones of Andhra Pradesh.`,
      overviewTe: `${item.te} అనేది ఆంధ్రప్రదేశ్ చరిత్ర మరియు సంస్కృతి విభాగంలో అత్యంత కీలకమైన అధ్యాయం. దీని నుండి గ్రూప్ 2 పరీక్షలో ఖచ్చితంగా ప్రశ్నలు వస్తాయి.`,
      sections: [
        {
          title: `1. Historical Overview & Key Chronology: ${item.en}`,
          titleTe: `1. చారిత్రక నేపథ్యం మరియు ముఖ్య పరిణామాలు: ${item.te}`,
          paragraphs: [
            `This topic analyzes ${item.en} in accordance with the official APPSC revised syllabus.`,
            `Key historical inscriptions, archaeological evidence, literary sources, and socioeconomic factors are essential for scoring high.`
          ],
          paragraphsTe: [
            `ఆంధ్రప్రదేశ్ చరిత్రలో ఈ విభాగం నుండి రాజకీయ పరిణామాలు, శాసనాలు, వాస్తు శిల్ప శైలి మరియు సాహిత్య పోషణపై ప్రశ్నలు అడుగుతారు.`,
            `ప్రామాణిక ఆధారాలు మరియు చారిత్రక మైలురాళ్లను కంఠస్థం చేయడం ద్వారా అత్యధిక మార్కులు సాధించవచ్చు.`
          ],
          keyPoints: [
            `Comprehensive coverage based on Telugu Akademi and standard Andhra History reference texts.`,
            `High yield examination points tailored for APPSC Group 2 Paper 2.`
          ],
          keyPointsTe: [
            `తెలుగు అకాడమీ ప్రామాణిక గ్రంథాల ఆధారంగా రూపొందించబడిన విశ్లేషణ.`,
            `పరీక్షలలో తరచుగా అడిగే కీలక తేదీలు, శాసనాలు మరియు బిరుదుల సమీక్ష.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'AP History & Culture' },
        { label: 'Weightage', val: 'Paper 2 (75 Marks)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'ఆంధ్రప్రదేశ్ చరిత్ర & సంస్కృతి' },
        { label: 'మార్కుల కేటాయింపు', val: 'పేపర్ 2 (75 మార్కులు)' }
      ],
      revisionPoints: [
        `Revise key dates, royal titles, capital cities, and prominent literary works.`,
        `Focus on cultural synthesis and regional socio-economic impacts.`
      ],
      revisionPointsTe: [
        `ముఖ్యమైన రాజుల బిరుదులు, రాజధానులు, శాసనాలు మరియు సాహిత్య గ్రంథాలను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `aphist-q-${idx + 1}`,
        topicId: `g2-aphist-${String(idx + 1).padStart(2, '0')}`,
        question: `Which of the following is most prominently associated with ${item.en.split(':')[0]}?`,
        questionTe: `${item.te.split(':')[0]} కు సంబంధించి క్రింది వాటిలో సరైన చారిత్రక ప్రాధాన్యత ఏది?`,
        options: [
          `Key cultural and administrative milestone in Andhra history`,
          `Secondary agrarian reform without political impact`,
          `Unrecorded folk folklore without epigraphical evidence`,
          `None of the above`
        ],
        optionsTe: [
          `ఆంధ్ర చరిత్రలో అత్యంత ప్రాధాన్యత గల పరిపాలనా మరియు సాంస్కృతిక మైలురాయి`,
          `కేవలం స్థానిక జానపద గాథ మాత్రమే`,
          `ఎటువంటి శాసన ఆధారాలు లేని అంశం`,
          `పైవేవీ కావు`
        ],
        correctIndex: 0,
        explanation: `${item.en} forms an integral core component of the APPSC Andhra History syllabus verified through epigraphs and historical texts.`,
        referenceAct: 'Telugu Akademi Standard AP History'
      }
    ]
  }));

  // Subject 3: Indian & AP Economy (15 Topics)
  const economyTopicsData = [
    { num: 1, en: 'National Income: GDP, GVA, NDP, NNP & Growth Trends in India', te: 'జాతీయోత్పత్తి భావనలు: GDP, GVA, NDP, తలసరి ఆదాయం & వృద్ధి రేట్లు', hi: 'राष्ट्रीय आय की अवधारणाएं' },
    { num: 2, en: 'Inflation & Price Indices: CPI, WPI, Headline vs Core Inflation', te: 'ద్రవ్యోల్బణం: వినియోగదారుల ధరల సూచీ (CPI), హోల్‌సేల్ సూచీ (WPI)', hi: 'मुद्रास्फीति एवं मूल्य सूचकांक' },
    { num: 3, en: 'Monetary Policy & RBI: Repo, Reverse Repo, CRR, SLR & MPC', te: 'ద్రవ్య విధానం & రిజర్వ్ బ్యాంక్: రెపో, రివర్స్ రెపో, CRR, SLR & MPC', hi: 'मौद्रिक नीति एवं आरबीआई' },
    { num: 4, en: 'Fiscal Policy & Budget: Fiscal Deficit, Revenue Deficit & FRBM Act', te: 'కోశ విధానం & కేంద్ర బడ్జెట్: కోశ లోటు, రెవెన్యూ లోటు & FRBM చట్టం', hi: 'राजकोषीय नीति एवं बजट' },
    { num: 5, en: 'Goods & Services Tax (GST) & Fiscal Federalism in India', te: 'వస్తు మరియు సేవల పన్ను (GST) & కేంద్ర-రాష్ట్ర ఆర్థిక సంబంధాలు', hi: 'वस्तु एवं सेवा कर (GST)' },
    { num: 6, en: 'Agriculture in AP: e-Crop Booking, Rythu Bharosa Kendras & Irrigation', te: 'ఆంధ్రప్రదేశ్ వ్యవసాయం: ఈ-క్రాప్ నమోదు, RBKలు & నీటిపారుదల రంగాలు', hi: 'आंध्र प्रदेश में कृषि' },
    { num: 7, en: 'Industrial Sector in AP: Port-Led Industrial Corridors (VCIC & CBIC)', te: 'ఆంధ్రప్రదేశ్ పారిశ్రామిక రంగం: ఓడరేవు ఆధారిత అభివృద్ధి & పారిశ్రామిక కారిడార్లు', hi: 'औद्योगिक विकास' },
    { num: 8, en: 'Services Sector, Tourism & IT Infrastructure in Andhra Pradesh', te: 'సేవా రంగం, పర్యాటకం & ఐటీ మౌలిక సదుపాయాలు', hi: 'सेवा क्षेत्र एवं आईटी' },
    { num: 9, en: 'Poverty & Unemployment in India & AP: Measurement & Committees', te: 'పేదరికం & నిరుద్యోగం: లక్డావాలా, టెండూల్కర్, రంగరాజన్ కమిటీలు', hi: 'गरीबी एवं बेरोजगारी' },
    { num: 10, en: 'AP Socio-Economic Survey: Gross State Domestic Product (GSDP) & Per Capita Income', te: 'ఆంధ్రప్రదేశ్ సామాజిక ఆర్థిక సర్వే: రాష్ట్ర స్థూల ఉత్పత్తి (GSDP) & తలసరి ఆదాయం', hi: 'आंध्र प्रदेश आर्थिक सर्वेक्षण' },
    { num: 11, en: 'Planning in India: From Five-Year Plans to NITI Aayog Strategy', te: 'ప్రణాళికా వ్యవస్థ: పంచవర్ష ప్రణాళికల నుండి నీతి ఆయోగ్ వరకు', hi: 'नीति आयोग एवं योजनाएं' },
    { num: 12, en: 'Banking Sector Reforms, Non-Performing Assets (NPAs) & Insolvency (IBC)', te: 'బ్యాంకింగ్ సంస్కరణలు, నిరర్ధక ఆస్తులు (NPAs) & దివాలా చట్టం (IBC)', hi: 'बैंकिंग सुधार' },
    { num: 13, en: 'Foreign Trade & Balance of Payments (BoP): Current & Capital Account', te: 'విదేశీ వాణిజ్యం & చెల్లింపుల సమతుల్యత (BoP)', hi: 'विदेशी व्यापार' },
    { num: 14, en: 'Sustainable Development Goals (SDG) - Andhra Pradesh Performance & Index', te: 'సుస్థిర అభివృద్ధి లక్ష్యాలు (SDG) - ఆంధ్రప్రదేశ్ ర్యాంకింగ్ & పురోగతి', hi: 'सतत विकास लक्ष्य (SDG)' },
    { num: 15, en: 'Financial Inclusion, Microfinance & SHGs in Rural Andhra Pradesh', te: 'ఆర్థిక సమ్మిళితత్వం, డ్వాక్రా (SHG) మహిళా సంఘాలు & సూక్ష్మ రుణాలు', hi: 'वित्तीय समावेशन एवं स्वयं सहायता समूह' }
  ];

  const economyTopics: Topic[] = economyTopicsData.map((item, idx) => ({
    id: `g2-econ-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'appsc-g2-economy',
    courseId: 'appsc-group2',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Key economic indicators, macroeconomic concepts, and state economic survey insights for ${item.en}.`,
    shortDescTe: `${item.te} పై APPSC గ్రూప్ 2 ఎకానమీ పేపర్ కొరకు పూర్తి సమాచారం & ప్రాక్టీస్ ప్రశ్నలు.`,
    shortDescHi: `${item.en} - आर्थिक आंकड़े एवं परीक्षा उपयोगी प्रश्नोत्तर।`,
    readTimeMinutes: 12,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (4-5 Marks)',
    content: {
      overview: `Detailed analysis of ${item.en} covering Indian economy frameworks and Andhra Pradesh Socio-Economic Survey updates.`,
      overviewTe: `${item.te} అనేది APPSC గ్రూప్ 2 ఎకానమీ పేపర్‌లో అత్యధిక మార్కులు అందించే కీలక విభాగం.`,
      sections: [
        {
          title: `1. Economic Concepts & Policy Analysis: ${item.en}`,
          titleTe: `1. ఆర్థిక భావనలు & విధాన విశ్లేషణ: ${item.te}`,
          paragraphs: [
            `Understanding ${item.en} provides the analytical base required for answering conceptual and data-oriented questions in APPSC.`,
            `Special emphasis is placed on recent trends, AP state government budgets, and NITI Aayog reports.`
          ],
          paragraphsTe: [
            `ఈ విభాగంలో జాతీయ మరియు రాష్ట్ర స్థాయి ఆర్థిక సూచికలు, తాజా బడ్జెట్ గణాంకాలు మరియు ప్రభుత్వ విధానాలను అధ్యయనం చేయాలి.`,
            `సరైన నిర్వచనాలు మరియు నివేదికల గణాంకాల ఆధారంగా ఖచ్చితమైన సమాధానాలు గుర్తించవచ్చు.`
          ],
          keyPoints: [
            `Aligned with the latest APPSC revised syllabus and Socio-Economic Survey.`,
            `Covers conceptual clarity, formula calculations, and policy initiatives.`
          ],
          keyPointsTe: [
            `తాజా సామాజిక-ఆర్థిక సర్వే గణాంకాలతో కూడిన ప్రామాణిక విశ్లేషణ.`,
            `ఆర్థిక సూత్రాలు మరియు ప్రభుత్వ సంక్షేమ నిధుల కేటాయింపుల సమగ్ర అవగాహన.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Indian & AP Economy' },
        { label: 'Weightage', val: 'Paper 2 (75 Marks)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'భారత & ఏపీ ఆర్థిక వ్యవస్థ' },
        { label: 'మార్కులు', val: 'పేపర్ 2 (75 మార్కులు)' }
      ],
      revisionPoints: [
        `Review definitions, latest GDP/GSDP growth rates, and inflation targets.`
      ],
      revisionPointsTe: [
        `రాష్ట్ర GSDP వృద్ధి రేటు, తలసరి ఆదాయం మరియు వివిధ రంగాల వాటాలను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `econ-q-${idx + 1}`,
        topicId: `g2-econ-${String(idx + 1).padStart(2, '0')}`,
        question: `In the context of ${item.en.split(':')[0]}, which metric is considered the primary indicator of economic growth?`,
        questionTe: `${item.te.split(':')[0]} కి సంబంధించి ప్రాథమిక ఆర్థిక సూచిక ఏది?`,
        options: [
          `Real Gross Domestic Product (Real GDP / Real GSDP)`,
          `Nominal Money Supply only`,
          `Unsubsidized Trade Deficit`,
          `Gross Fiscal Liability ratio without growth`
        ],
        optionsTe: [
          `వాస్తవ స్థూల ఉత్పత్తి (Real GDP / Real GSDP)`,
          `ద్రవ్య సరఫరా మాత్రమే`,
          `విదేశీ వాణిజ్య లోటు`,
          `పైవేవీ కావు`
        ],
        correctIndex: 0,
        explanation: `Real GDP / Real GSDP adjusted for inflation is universally recognized as the primary indicator of economic health.`,
        referenceAct: 'AP Socio-Economic Survey & RBI Economic Handbook'
      }
    ]
  }));

  // Subject 4: Science & Technology & Environment (15 Topics)
  const sciTechTopicsData = [
    { num: 1, en: 'ISRO Space Missions: Chandrayaan-3, Aditya-L1, Gaganyaan & SSLV', te: 'ఇస్రో అంతరిక్ష ప్రయోగాలు: చంద్రయాన్-3, ఆదిత్య-L1, గగన్‌యాన్ & SSLV', hi: 'इसरो अंतरिक्ष मिशन' },
    { num: 2, en: 'Satish Dhawan Space Centre (SDSC SHAR) Sriharikota, AP Role in Space', te: 'సతీష్ ధావన్ స్పేస్ సెంటర్ (షార్ - శ్రీహరికోట): అంతరిక్ష రంగంలో ఏపీ ప్రాముఖ్యత', hi: 'सतीश धवन अंतरिक्ष केंद्र' },
    { num: 3, en: 'Defence Technology: DRDO Missiles (Agni-V, BrahMos, Akash & IAMD)', te: 'రక్షణ రంగ సాంకేతికత: DRDO క్షిపణులు (అగ్ని-V, బ్రహ్మోస్, ఆకాశ్)', hi: 'रक्षा प्रौद्योगिकी एवं मिसाइल' },
    { num: 4, en: 'Information Technology, Artificial Intelligence (AI), Machine Learning & 5G', te: 'సమాచార సాంకేతికత: ఆర్టిఫిషియల్ ఇంటెలిజెన్స్ (AI), 5G & సైబర్ సెక్యూరిటీ', hi: 'सूचना प्रौद्योगिकी एवं एआई' },
    { num: 5, en: 'Biotechnology & Genetic Engineering: CRISPR-Cas9, Stem Cells & GM Crops', te: 'బయోటెక్నాలజీ: జన్యు ఇంజనీరింగ్, CRISPR-Cas9, మూలకణాలు & GM పంటలు', hi: 'जैव प्रौद्योगिकी' },
    { num: 6, en: 'Energy Resources in AP: Nuclear, Solar Parks & Green Hydrogen Hubs', te: 'శక్తి వనరులు: అణుశక్తి, సౌర విద్యుత్ ప్రాజెక్టులు & గ్రీన్ హైడ్రోజన్ హబ్‌లు', hi: 'ऊर्जा संसाधन एवं सौर ऊर्जा' },
    { num: 7, en: 'Biodiversity Conservation & National Parks / Sanctuaries in Andhra Pradesh', te: 'జీవవైవిధ్య పరిరక్షణ: ఆంధ్రప్రదేశ్‌లోని జాతీయ పార్కులు & వన్యప్రాణి అభయారణ్యాలు', hi: 'जैव विविधता एवं राष्ट्रीय उद्यान' },
    { num: 8, en: 'Climate Change, Global Warming, COP Summits & Paris Agreement', te: 'వాతావరణ మార్పు, గ్లోబల్ వార్మింగ్, COP సదస్సులు & పారిస్ ఒప్పందం', hi: 'जलवायु परिवर्तन' },
    { num: 9, en: 'Pollution Control & Environmental Impact Assessment (EIA)', te: 'కాలుష్య నియంత్రణ & పర్యావరణ ప్రభావ అంచనా (EIA నోటిఫికేషన్)', hi: 'प्रदूषण नियंत्रण एवं ईआईए' },
    { num: 10, en: 'Disaster Management in AP: Cyclones, Floods, Droughts & APSDMA Framework', te: 'విపత్తు నిర్వహణ: తుఫానులు, వరదలు, కరువులు & ఏపీ రాష్ట్ర విపత్తు నిర్వహణ (APSDMA)', hi: 'आपदा प्रबंधन' },
    { num: 11, en: 'Nanotechnology: Applications in Medicine, Agriculture & Electronics', te: 'నానోటెక్నాలజీ: వైద్యం, వ్యవసాయం & ఎలక్ట్రానిక్స్ రంగాలలో వినియోగం', hi: 'नैनो टेक्नोलॉजी' },
    { num: 12, en: 'Public Health, Vaccines & Emerging Viral / Bacterial Pathogens', te: 'ప్రజారోగ్యం, టీకాలు & అంటువ్యాధుల నివారణ', hi: 'सार्वजनिक स्वास्थ्य एवं टीके' },
    { num: 13, en: 'Solid Waste Management & e-Waste Rules in Andhra Pradesh', te: 'ఘన వ్యర్థాల నిర్వహణ & ఈ-వేస్ట్ నియంత్రణ నిబంధనలు', hi: 'ठोस अपशिष्ट प्रबंधन' },
    { num: 14, en: 'Coastal Zone Management & Mangrove Ecosystems (Coringa, Krishna Delta)', te: 'కోస్టల్ జోన్ నిర్వహణ & మడ అడవులు (కోరింగ, కృష్ణా డెల్టా పరిరక్షణ)', hi: 'तटीय क्षेत्र एवं मैंग्रोव' },
    { num: 15, en: 'Cyber Security Laws: Information Technology Act 2000 & Data Protection (DPDP 2023)', te: 'సైబర్ భద్రతా చట్టాలు: IT చట్టం 2000 & డిజిటల్ వ్యక్తిగత డేటా పరిరక్షణ చట్టం 2023', hi: 'साइबर सुरक्षा कानून' }
  ];

  const sciTechTopics: Topic[] = sciTechTopicsData.map((item, idx) => ({
    id: `g2-scitech-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'appsc-g2-scitech',
    courseId: 'appsc-group2',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Contemporary scientific innovations, environmental challenges, and AP disaster management for ${item.en}.`,
    shortDescTe: `${item.te} పై సైన్స్ & టెక్నాలజీ విభాగం కొరకు సమగ్ర నోట్స్ & ప్రశ్నలు.`,
    shortDescHi: `${item.en} - विज्ञान एवं प्रौद्योगिकी के महत्वपूर्ण बिंदु।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks)',
    content: {
      overview: `Detailed examination notes for ${item.en} in alignment with contemporary developments and AP State Science curriculum.`,
      overviewTe: `${item.te} అనేది APPSC గ్రూప్ 2 సైన్స్ & టెక్నాలజీ విభాగంలో అత్యంత స్కోరింగ్ అంశం.`,
      sections: [
        {
          title: `1. Scientific Concepts & Practical Applications: ${item.en}`,
          titleTe: `1. శాస్త్రీయ సూత్రాలు మరియు అనువర్తనాలు: ${item.te}`,
          paragraphs: [
            `This module covers both the theoretical basis and current advancements in ${item.en}.`,
            `Special attention is given to institutions located in Andhra Pradesh such as SDSC SHAR Sriharikota and disaster response protocols.`
          ],
          paragraphsTe: [
            `ఈ విభాగంలో తాజా శాస్త్రీయ ఆవిష్కరణలు మరియు ఆంధ్రప్రదేశ్ రాష్ట్ర ప్రాధాన్యతలను సమగ్రంగా సమీక్షించాము.`,
            `శ్రీహరికోట అంతరిక్ష కేంద్రం మరియు విపత్తు నిర్వహణ సంస్థల పాత్రపై ప్రత్యేక దృష్టి సారించాలి.`
          ],
          keyPoints: [
            `Covers recent national missions, international treaties, and environmental laws.`,
            `Includes high-yield exam traps and factual memory summaries.`
          ],
          keyPointsTe: [
            `తాజా జాతీయ ప్రయోగాలు మరియు పర్యావరణ పరిరక్షణ చట్టాల సమగ్ర వివరణ.`,
            `పరీక్షల్లో ఖచ్చితంగా మార్కులు సాధించేందుకు అనువైన ముఖ్యాంశాలు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Science & Technology' },
        { label: 'Weightage', val: 'Paper 2 (75 Marks)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'సైన్స్ & టెక్నాలజీ' },
        { label: 'మార్కులు', val: 'పేపర్ 2 (75 మార్కులు)' }
      ],
      revisionPoints: [
        `Memorize satellite payload details, launch vehicles, and national park locations in AP.`
      ],
      revisionPointsTe: [
        `ఇస్రో ప్రయోగ వాహకాలు (PSLV, GSLV, LVM3) మరియు ఏపీలోని రక్షిత ప్రాంతాలను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `scitech-q-${idx + 1}`,
        topicId: `g2-scitech-${String(idx + 1).padStart(2, '0')}`,
        question: `Where is India's premier spaceport, Satish Dhawan Space Centre (SDSC SHAR), located?`,
        questionTe: `భారత అంతరిక్ష ప్రయోగ కేంద్రమైన సతీష్ ధావన్ స్పేస్ సెంటర్ (షార్) ఏ జిల్లాలో ఉంది?`,
        options: [
          `Tirupati District (Sriharikota, Andhra Pradesh)`,
          `Visakhapatnam District`,
          `Thiruvananthapuram, Kerala`,
          `Bengaluru, Karnataka`
        ],
        optionsTe: [
          `తిరుపతి జిల్లా (శ్రీహరికోట, ఆంధ్రప్రదేశ్)`,
          `విశాఖపట్నం జిల్లా`,
          `తిరువనంతపురం, కేరళ`,
          `బెంగళూరు, కర్ణాటక`
        ],
        correctIndex: 0,
        explanation: `Satish Dhawan Space Centre (SHAR) is located at Sriharikota in Tirupati district of Andhra Pradesh.`,
        referenceAct: 'ISRO Official Publications'
      }
    ]
  }));

  // Subject 5: General Studies & Mental Ability (10 Topics)
  const gsMentalTopicsData = [
    { num: 1, en: 'Logical Reasoning: Statement & Assumptions, Arguments & Conclusions', te: 'లాజికల్ రీజనింగ్: ప్రవచనాలు - ఊహలు, వాదనలు & ముగింపులు', hi: 'तार्किक क्षमता' },
    { num: 2, en: 'Analytical Ability: Coding-Decoding, Blood Relations & Directions', te: 'ఎనలిటికల్ ఎబిలిటీ: కోడింగ్-డీకోడింగ్, రక్త సంబంధాలు & దిశలు', hi: 'विश्लेषणात्मक तर्क' },
    { num: 3, en: 'Data Interpretation: Tabular Charts, Bar Graphs, Pie Charts & Caselets', te: 'దత్తాంశ విశ్లేషణ (DI): పట్టికలు, బార్ గ్రాఫ్‌లు, పై చార్టులు', hi: 'आंकड़ा विश्लेषण (DI)' },
    { num: 4, en: 'Quantitative Aptitude: Percentages, Profit & Loss, Ratios & Averages', te: 'క్వాంటిటేటివ్ ఆప్టిట్యూడ్: శాతాలు, లాభ-నష్టాలు, నిష్పత్తులు & సగటులు', hi: 'अंकगणित योग्यता' },
    { num: 5, en: 'Time & Work, Pipes & Cisterns, Speed, Time & Distance Shortcuts', te: 'కాలము - పని, పైపులు - తొట్టెలు, వేగము - కాలము - దూరము', hi: 'समय एवं कार्य' },
    { num: 6, en: 'Current Affairs: National & International Summits, Treaties & Sports', te: 'కరెంట్ అఫైర్స్: జాతీయ, అంతర్జాతీయ సదస్సులు, ఒప్పందాలు & క్రీడలు', hi: 'समसामयिक घटनाएं' },
    { num: 7, en: 'Andhra Pradesh State Current Affairs & Welfare Governance Milestones', te: 'ఆంధ్రప్రదేశ్ రాష్ట్ర సమకాలీన అంశాలు & సంక్షేమ పథకాల పురోగతి', hi: 'आंध्र प्रदेश समसामयिकी' },
    { num: 8, en: 'General English: Spotting Errors, Prepositions & Vocabulary for APPSC', te: 'జనరల్ ఇంగ్లీష్: ఎర్రర్ స్పాటింగ్, ప్రిపోజిషన్లు & వొకాబ్యులరీ', hi: 'सामान्य अंग्रेजी' },
    { num: 9, en: 'General Geography of India & Andhra Pradesh: Physiography, Rivers & Climate', te: 'భారతదేశ & ఆంధ్రప్రదేశ్ భౌగోళిక స్వరూపం: నదులు, శీతోష్ణస్థితి & నేలలు', hi: 'भारत एवं आंध्र प्रदेश का भूगोल' },
    { num: 10, en: 'Ethics in Public Administration, Emotional Intelligence & Decision Making', te: 'ప్రజా పాలనలో నైతిక విలువలు, భావోద్వేగ ప్రజ్ఞ & నిర్ణయాధికారం', hi: 'प्रशासनिक नैतिकता' }
  ];

  const gsMentalTopics: Topic[] = gsMentalTopicsData.map((item, idx) => ({
    id: `g2-gs-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'appsc-g2-gs',
    courseId: 'appsc-group2',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `High-scoring scoring module covering logical shortcuts, numerical tricks, and current trends for ${item.en}.`,
    shortDescTe: `${item.te} పై షార్ట్‌కట్ సూత్రాలు, లాజిక్ ట్రిక్స్ & ప్రాక్టీస్ ప్రశ్నలు.`,
    shortDescHi: `${item.en} - शॉर्टकट ट्रिक्स एवं अभ्यास प्रश्न।`,
    readTimeMinutes: 10,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3 Marks)',
    content: {
      overview: `Structured study module for ${item.en} to maximize speed, accuracy, and score in APPSC Prelims Paper 1.`,
      overviewTe: `${item.te} అనేది ప్రిలిమ్స్ పేపర్‌లో సమయం ఆదా చేస్తూ గరిష్ట మార్కులు సాధించేందుకు తోడ్పడుతుంది.`,
      sections: [
        {
          title: `1. Key Problem-Solving Rules: ${item.en}`,
          titleTe: `1. సమస్య పరిష్కార సూత్రాలు: ${item.te}`,
          paragraphs: [
            `Mastering ${item.en} requires practicing high-frequency models and formula shortcuts.`,
            `Step-by-step illustrations are provided for instant comprehension.`
          ],
          paragraphsTe: [
            `ఈ విభాగంలో ఎక్కువ మార్కులు సాధించేందుకు తక్కువ సమయంలో సమాధానాలు సాధించే షార్ట్‌కట్ పద్ధతులు ఉపయోగపడతాయి.`,
            `తరచుగా వచ్చే ప్రామాణిక మోడల్స్ పై పట్టు సాధించాలి.`
          ],
          keyPoints: [
            `Step-by-step problem breakdown and elimination techniques.`,
            `Speed-boosting methods for competitive examinations.`
          ],
          keyPointsTe: [
            `ఎలిమినేషన్ పద్ధతి మరియు వేగవంతమైన లెక్కింపు సూత్రాలు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'General Studies & Mental Ability' },
        { label: 'Weightage', val: 'Prelims Paper 1' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'జనరల్ స్టడీస్ & మెంటల్ ఎబిలిటీ' },
        { label: 'పరీక్ష ప్రాధాన్యత', val: 'ప్రిలిమ్స్ పేపర్ 1' }
      ],
      revisionPoints: [
        `Practice daily calculations, formula sheets, and speed tests.`
      ],
      revisionPointsTe: [
        `రోజువారీ సూత్రాల పునశ్చరణ మరియు వేగవంతమైన మాక్ ప్రాక్టీస్ చేయండి.`
      ]
    },
    questions: [
      {
        id: `gs-q-${idx + 1}`,
        topicId: `g2-gs-${String(idx + 1).padStart(2, '0')}`,
        question: `What is the most effective approach to solve questions in ${item.en.split(':')[0]}?`,
        questionTe: `${item.te.split(':')[0]} లో ప్రశ్నలను పరిష్కరించడానికి అత్యంత అనువైన విధానం ఏది?`,
        options: [
          `Conceptual clarity combined with logical option elimination`,
          `Random guessing without calculation`,
          `Skipping analytical steps entirely`,
          `None of the above`
        ],
        optionsTe: [
          `స్పష్టమైన సూత్రాల అవగాహన మరియు ఆప్షన్ ఎలిమినేషన్ విధానం`,
          `అంచనా వేసి సమాధానం గుర్తించడం`,
          `లెక్కించకుండా వదిలివేయడం`,
          `పైవేవీ కావు`
        ],
        correctIndex: 0,
        explanation: `Combining solid foundational formulas with deductive elimination ensures 100% accuracy in mental ability.`,
        referenceAct: 'Standard General Studies Reference'
      }
    ]
  }));

  // Total topics = 20 (Polity) + 20 (AP History) + 15 (Economy) + 15 (Sci & Tech) + 10 (GS/Mental) = 80 Topics!
  return [
    {
      id: 'appsc-g2-polity',
      courseId: 'appsc-group2',
      name: 'Indian Constitution & AP Governance',
      nameTe: 'భారత రాజ్యాంగం & పాలనా వ్యవస్థ',
      nameHi: 'भारतीय संविधान एवं शासन प्रणाली',
      icon: 'Scale',
      totalHours: 35,
      topics: polityTopics
    },
    {
      id: 'appsc-g2-aphistory',
      courseId: 'appsc-group2',
      name: 'History & Culture of Andhra Pradesh',
      nameTe: 'ఆంధ్రప్రదేశ్ చరిత్ర & సంస్కృతి',
      nameHi: 'आंध्र प्रदेश का इतिहास एवं संस्कृति',
      icon: 'Landmark',
      totalHours: 35,
      topics: apHistoryTopics
    },
    {
      id: 'appsc-g2-economy',
      courseId: 'appsc-group2',
      name: 'Indian & Andhra Pradesh Economy',
      nameTe: 'భారత & ఆంధ్రప్రదేశ్ ఆర్థిక వ్యవస్థ',
      nameHi: 'भारतीय एवं आंध्र प्रदेश अर्थव्यवस्था',
      icon: 'TrendingUp',
      totalHours: 30,
      topics: economyTopics
    },
    {
      id: 'appsc-g2-scitech',
      courseId: 'appsc-group2',
      name: 'Science, Technology & Environment',
      nameTe: 'సైన్స్, టెక్నాలజీ & పర్యావరణం',
      nameHi: 'विज्ञान, प्रौद्योगिकी एवं पर्यावरण',
      icon: 'Atom',
      totalHours: 25,
      topics: sciTechTopics
    },
    {
      id: 'appsc-g2-gs',
      courseId: 'appsc-group2',
      name: 'General Studies & Mental Ability',
      nameTe: 'జనరల్ స్టడీస్ & మెంటల్ ఎబిలిటీ',
      nameHi: 'सामान्य अध्ययन एवं मानसिक योग्यता',
      icon: 'Brain',
      totalHours: 20,
      topics: gsMentalTopics
    }
  ];
}
