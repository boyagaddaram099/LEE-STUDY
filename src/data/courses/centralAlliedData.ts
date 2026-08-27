import { Subject, Topic } from '../../types';

export function getCentralAlliedSubjects(): Subject[] {
  // Subject 1: Quantitative Aptitude & Numerical Ability (16 Topics)
  const quantTopicsData = [
    { num: 1, en: 'Number Systems, Divisibility Rules, Prime Factors, Unit Digit & Remainder Theorems', te: 'సంఖ్యా వ్యవస్థ: భాజనీయతా సూత్రాలు, ప్రధాన కారణాంకాలు & శేష సిద్ధాంతాలు', hi: 'संख्या पद्धति एवं शेषफल प्रमेय' },
    { num: 2, en: 'LCM & HCF: Applications in Fractions, Decimals, Clock/Bell Intervals & Ratios', te: 'క.సా.గు & గ.సా.భా: భిన్నాలు, దశాంశాలు & గంటల మోత సమస్యలు', hi: 'ल.स.प. एवं म.स.प. (LCM & HCF)' },
    { num: 3, en: 'Simplification, Fractions, Decimals, Surds & Indices, BODMAS Hierarchy', te: 'సూక్ష్మీకరణ: కరణులు, ఘాతాంకాలు & BODMAS నియమాలు', hi: 'सरलीकरण एवं घातांक' },
    { num: 4, en: 'Percentage Concepts: Successive Percentage Changes, Population & Consumption', te: 'శాతాలు: వరుస మార్పులు, జనాభా లెక్కలు & వినియోగ సూత్రాలు', hi: 'प्रतिशतता के महत्वपूर्ण नियम' },
    { num: 5, en: 'Profit, Loss, Marked Price, Trade Discount, Cash Discount & Dishonest Dealer Problems', te: 'లాభ-నష్టాలు, ప్రకటన వెల, వ్యాపార తగ్గింపు & మోసపూరిత తూకాల లెక్కలు', hi: 'लाभ-हानि एवं बेईमान व्यापारी' },
    { num: 6, en: 'Simple Interest & Compound Interest: Annual, Semi-Annual Compounding & Difference Formulas', te: 'బారువడ్డీ & చక్రవడ్డీ: వార్షిక, అర్ధవార్షిక చక్రవడ్డీ & వ్యత్యాస సూత్రాలు', hi: 'साधारण एवं चक्रवृद्धि ब्याज' },
    { num: 7, en: 'Ratio, Proportion, Third & Fourth Proportional, Direct & Inverse Variation', te: 'నిష్పత్తి - అనుపాతం & అనులోమ-విలోమానుపాతాలు', hi: 'अनुपात एवं समानुपात' },
    { num: 8, en: 'Partnership: Capital-Time Ratios, Working vs Sleeping Partners & Profit Sharing', te: 'భాగస్వామ్యం: పెట్టుబడి-కాలం నిష్పత్తి & లాభాల పంపకం', hi: 'साझेदारी एवं लाभ विभाजन' },
    { num: 9, en: 'Averages, Weighted Averages, Replacement Problems & Age Calculations', te: 'సగటులు & వయస్సుల సమస్యలు', hi: 'औसत एवं आयु संबंधी प्रश्न' },
    { num: 10, en: 'Alligations & Mixtures: Mean Price, Successive Dilutions & Replacement Rules', te: 'మిశ్రమాలు & అలిగేషన్ పద్ధతి (పాలు-నీరు, రసాయనాల మిశ్రమాలు)', hi: 'मिश्रण एवं पृथक्करण' },
    { num: 11, en: 'Time and Work, Wages & Negative Work: Efficiency Method for SSC & Banking', te: 'కాలము - పని, కూలీల పంపకం (సామర్థ్య పద్ధతి)', hi: 'समय और कार्य, मजदूरी' },
    { num: 12, en: 'Pipes and Cisterns: Inlet and Outlet Rates, Alternating Taps & Leakage Problems', te: 'పైపులు - తొట్టెలు: ప్రవేశ/నిష్క్రమణ పైపులు & లీకేజీ సమస్యలు', hi: 'नल एवं हौज संबंधी प्रश्न' },
    { num: 13, en: 'Time, Speed and Distance, Average Speed, Relative Speed & Circular Track Races', te: 'కాలము - వేగము - దూరము: సాపేక్ష వేగం & ట్రాక్ పరుగు పందాలు', hi: 'चाल, समय और दूरी' },
    { num: 14, en: 'Problems on Trains: Passing Stationary/Moving Objects & Opposite/Same Direction Trains', te: 'రైలు లెక్కలు: స్తంభాలు, వంతెనలు దాటే సమయం & ఎదురెదురు రైళ్ళు', hi: 'रेलगाड़ी संबंधी प्रश्न' },
    { num: 15, en: 'Boats and Streams: Upstream, Downstream, River Current & Still Water Speed Calculations', te: 'పడవలు - ప్రవాహాలు: ఎదురు ప్రవాహం, అనుకూల ప్రవాహం & నిశ్చల నీటి వేగం', hi: 'नाव एवं धारा' },
    { num: 16, en: 'Mensuration 2D & 3D: Area, Perimeter, Surface Area & Volumes of Solids (Cylinder, Cone, Sphere)', te: 'క్షేత్రమితి 2D & 3D: వైశాల్యాలు, చుట్టుకొలతలు & ఘనపరిమాణాలు', hi: 'क्षेत्रमिति 2D एवं 3D' }
  ];

  const quantTopics: Topic[] = quantTopicsData.map((item, idx) => ({
    id: `cent-quant-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'cent-quant',
    courseId: 'central-allied',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `SSC CGL/CHSL, RRB NTPC, and IBPS PO standard arithmetic shortcuts and solutions for ${item.en}.`,
    shortDescTe: `${item.te} పై ఎస్సెస్సీ, రైల్వే & బ్యాంకింగ్ పరీక్షల కొరకు షార్ట్‌కట్ సూత్రాలు.`,
    shortDescHi: `${item.en} - एसएससी एवं बैंकिंग हेतु गणितीय ट्रिक्स।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks in SSC/RRB)',
    content: {
      overview: `Comprehensive Quantitative Aptitude module for ${item.en} covering SSC CGL, RRB NTPC, and IBPS PO examination techniques.`,
      overviewTe: `${item.te} అనేది సెంట్రల్ గవర్నమెంట్ పరీక్షల్లో క్వాంట్ విభాగంలో అత్యధిక మార్కులు సాధించడానికి అత్యవసరమైన అధ్యాయం.`,
      sections: [
        {
          title: `1. Formula Shortcuts & Problem Solving: ${item.en}`,
          titleTe: `1. సూత్రాలు & సులభతర పరిష్కార పద్ధతులు: ${item.te}`,
          paragraphs: [
            `Detailed explanation of ${item.en} covering unitary methods, formula derivation, and speed-boosting tricks.`,
            `Follows standard SSC and IBPS exam patterns.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో ల.సా.గు సామర్థ్య పద్ధతులు, శాతాల భిన్న రూపాలు మరియు నిష్పత్తి విధానాలు స్పష్టంగా వివరించబడ్డాయి.`
          ],
          keyPoints: [
            `Formula bank and step-by-step problem breakdown.`,
            `High-frequency models asked in SSC CGL, CHSL, and RRB NTPC.`
          ],
          keyPointsTe: [
            `తక్కువ సమయంలో ఖచ్చితమైన సమాధానాలు రాబట్టే షార్ట్‌కట్ పద్ధతులు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Quantitative Aptitude' },
        { label: 'Target Exam', val: 'SSC CGL, RRB NTPC, IBPS' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'క్వాంటిటేటివ్ ఆప్టిట్యూడ్' },
        { label: 'పరీక్ష', val: 'ఎస్సెస్సీ, రైల్వే, బ్యాంకింగ్' }
      ],
      revisionPoints: [
        `Memorize formula for difference between CI and SI for 2 years: D = P(R/100)^2.`
      ],
      revisionPointsTe: [
        `2 సంవత్సరాల చక్రవడ్డీ మరియు బారువడ్డీల మధ్య వ్యత్యాస సూత్రం: D = P(R/100)^2.`
      ]
    },
    questions: [
      {
        id: `cent-quant-q-${idx + 1}`,
        topicId: `cent-quant-${String(idx + 1).padStart(2, '0')}`,
        question: `What is the formula for the difference between Compound Interest (CI) and Simple Interest (SI) for 2 years on principal P at annual rate R%?`,
        questionTe: `అసలు P, వార్షిక వడ్డీ రేటు R% పై 2 సంవత్సరాలకు చక్రవడ్డీ మరియు బారువడ్డీల మధ్య వ్యత్యాసాన్ని కనుగొనే ఖచ్చితమైన సూత్రం ఏది?`,
        options: [
          `Difference = P * (R / 100)^2`,
          `Difference = P * (R / 100)`,
          `Difference = P * (R / 100)^3`,
          `Difference = 2 * P * R`
        ],
        optionsTe: [
          `వ్యత్యాసం = P * (R / 100)^2`,
          `వ్యత్యాసం = P * (R / 100)`,
          `వ్యత్యాసం = P * (R / 100)^3`,
          `వ్యత్యాసం = 2 * P * R`
        ],
        correctIndex: 0,
        explanation: `For 2 years, the difference between CI and SI is equal to the simple interest on the first year's interest, which simplifies algebraically to D = P * (R/100)^2.`,
        referenceAct: 'Standard Quantitative Aptitude Reference'
      }
    ]
  }));

  // Subject 2: Reasoning, Logic & Analytical Intelligence (16 Topics)
  const reasoningTopicsData = [
    { num: 1, en: 'Number, Alphabet & Continuous Pattern Series Completion', te: 'సంఖ్యా & అక్షర శ్రేణులు: లోపించిన పదాల గుర్తింపు', hi: 'संख्या एवं अक्षर श्रृंखला' },
    { num: 2, en: 'Analogy & Classification: Semantic, Symbolic & Number Pairs', te: 'పోలికలు (Analogy) & భిన్నమైన దానిని గుర్తించుట (Classification)', hi: 'सादृश्यता एवं वर्गीकरण' },
    { num: 3, en: 'Coding-Decoding: Letter Shifting, Number-Symbol Coding & Chinese Coding', te: 'కోడింగ్-డీకోడింగ్: అక్షర మార్పిడి, సంఖ్యా కోడింగ్ & సబ్‌స్టిట్యూషన్', hi: 'कोडिंग-डिकोडिंग' },
    { num: 4, en: 'Blood Relations: Family Tree Diagrams & Coded Symbol Operations', te: 'రక్త సంబంధాలు: వంశవృక్ష పద్ధతి & సాంకేతిక సంబంధాలు', hi: 'रक्त संबंध एवं पहेलियां' },
    { num: 5, en: 'Direction & Distance Sense: Angles of Turn, Pythagoras & Shadow Questions', te: 'దిశలు & దూరాలు: కోణాలు, పైథాగరస్ & నీడల లెక్కలు', hi: 'दिशा एवं दूरी परीक्षण' },
    { num: 6, en: 'Order, Ranking, Position from Left/Right & Total Capacity Calculations', te: 'ర్యాంకింగ్ & క్రమ అమరిక: ఎడమ/కుడి నుండి స్థానాలు & మొత్తం సంఖ్య', hi: 'क्रम एवं रैंकिंग' },
    { num: 7, en: 'Linear Seating Arrangement: Single Row & Dual Parallel Rows (Facing North/South)', te: 'సరళరేఖా సీటింగ్ అమరిక: సింగిల్ & డబుల్ లైన్ కూర్చునే విధానాలు', hi: 'रैखिक बैठक व्यवस्था' },
    { num: 8, en: 'Circular & Square Seating Arrangement: Facing Center & Facing Outside', te: 'వృత్తాకార & చతురస్రాకార సీటింగ్ అమరిక: కేంద్రం వైపు / వెలుపలి వైపు ముఖాలు', hi: 'वृत्ताकार बैठक व्यवस्था' },
    { num: 9, en: 'Syllogism: 100-50 Method & Venn Diagrams for Standard/Possibility Cases', te: 'సిలాగిజం: వెన్ చిత్రాల పద్ధతి & పాసిబిలిటీ కేసులు', hi: 'न्याय निगमन (Syllogism)' },
    { num: 10, en: 'Inequalities: Direct & Coded Statement Inequalities for Banking & SSC', te: 'అసమానతలు (Inequalities): డైరెక్ట్ & కోడెడ్ స్టేట్‌మెంట్స్', hi: 'असमानताएं (Inequalities)' },
    { num: 11, en: 'Puzzles: Floor Puzzles, Box Stacking, Scheduling Days/Months & Cross-Tabulation', te: 'పజిల్స్: ఫ్లోర్ పజిల్స్, బాక్స్ పజిల్స్ & డేస్/మంత్స్ షెడ్యూలింగ్', hi: 'पहेलियां (Floor & Box Puzzles)' },
    { num: 12, en: 'Clocks & Calendars: Angle Between Hands, Leap Years & Odd Days Logic', te: 'గడియారాలు & క్యాలెండర్లు: ముల్లుల కోణాలు & విషమ రోజుల విధానం', hi: 'घड़ी एवं कैलेंडर' },
    { num: 13, en: 'Statement and Assumptions, Arguments, Course of Action & Cause and Effect', te: 'ప్రవచనాలు - ఊహలు, వాదనలు, నిర్ణయాలు & కారణం-ఫలితం', hi: 'कथन, पूर्वधारणाएं एवं कारण' },
    { num: 14, en: 'Non-Verbal: Mirror Images, Water Images, Paper Folding & Paper Cutting', te: 'నాన్-వెర్బల్: అద్దంలో ప్రతిబింబాలు, నీటి ప్రతిబింబాలు & పేపర్ కటింగ్', hi: 'दर्पण एवं जल प्रतिबिंब' },
    { num: 15, en: 'Embedded Figures, Figure Matrix, Pattern Completion & Counting Figures (Triangles/Squares)', te: 'అంతర్లీన చిత్రాలు, ఫిగర్ మ్యాట్రిక్స్ & త్రిభుజాలు/చతురస్రాల లెక్కింపు', hi: 'आकृतियों की गणना' },
    { num: 16, en: 'Cubes, Dice & Unfolded Dice Principles for SSC CGL and Railways', te: 'పాచికలు (Dice), ఘనాలు & ఓపెన్ బాక్స్ సూత్రాలు', hi: 'पासा एवं घन' }
  ];

  const reasoningTopics: Topic[] = reasoningTopicsData.map((item, idx) => ({
    id: `cent-reas-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'cent-reasoning',
    courseId: 'central-allied',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Deductive logic, seating puzzles, and non-verbal reasoning techniques for ${item.en}.`,
    shortDescTe: `${item.te} పై లాజికల్ రీజనింగ్ & పజిల్స్ పరిష్కార పద్ధతులు.`,
    shortDescHi: `${item.en} - तार्किक योग्यता एवं पहेलियां।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks)',
    content: {
      overview: `Complete verbal and non-verbal reasoning manual for ${item.en} covering SSC CGL, RRB NTPC, and Banking preliminary and mains exams.`,
      overviewTe: `${item.te} అనేది రీజనింగ్ విభాగంలో గరిష్ట మార్కులు సాధించడానికి అత్యంత అనువైన పాఠ్యాంశం.`,
      sections: [
        {
          title: `1. Deductive Logic & Puzzle Frameworks: ${item.en}`,
          titleTe: `1. తార్కిక విశ్లేషణ & పజిల్స్ సూత్రాలు: ${item.te}`,
          paragraphs: [
            `Detailed explanation of ${item.en} covering logical elimination, matrix methods, and non-verbal rules.`,
            `Follows standard national examination patterns.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో సీటింగ్ అమరికలు, ఫ్లోర్ పజిల్స్ మరియు వెన్ చిత్రాల ద్వారా సిలాగిజం సాధించే పద్ధతులు వివరించబడ్డాయి.`
          ],
          keyPoints: [
            `Covers standard circular arrangement rules (Facing center: Right is anticlockwise, Left is clockwise).`,
            `Includes high-frequency question models.`
          ],
          keyPointsTe: [
            `వృత్తాకార సీటింగ్‌లో కేంద్రం వైపు చూస్తున్నప్పుడు కుడివైపు అంటే అపసవ్య దిశ, ఎడమవైపు అంటే సవ్య దిశ.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Reasoning & Intelligence' },
        { label: 'Target Exam', val: 'SSC CGL, RRB NTPC, Banking' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'రీజనింగ్ & లాజికల్ ఎబిలిటీ' },
        { label: 'పరీక్ష', val: 'సెంట్రల్ ఎగ్జామ్స్' }
      ],
      revisionPoints: [
        `Review circular seating direction conventions and triangle counting shortcut formulas.`
      ],
      revisionPointsTe: [
        `సీటింగ్ అమరిక నియమాలు మరియు త్రిభుజాల లెక్కింపు షార్ట్‌కట్ సూత్రాలను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `cent-reas-q-${idx + 1}`,
        topicId: `cent-reas-${String(idx + 1).padStart(2, '0')}`,
        question: `In a circular seating arrangement where all persons are facing towards the center, what is the direction of movement when moving to a person's "Immediate Right"?`,
        questionTe: `వ్యక్తులందరూ కేంద్రం వైపు ముఖం చేసి కూర్చున్న వృత్తాకార అమరికలో, ఒక వ్యక్తికి "వెంటనే కుడివైపుకు" (Immediate Right) వెళ్లే దిశ ఏది?`,
        options: [
          `Anti-clockwise direction`,
          `Clockwise direction`,
          `Straight outwards`,
          `None of the above`
        ],
        optionsTe: [
          `అపసవ్య దిశ (Anti-clockwise direction)`,
          `సవ్య దిశ (Clockwise direction)`,
          `వెలుపలి దిశ`,
          `పైవేవీ కావు`
        ],
        correctIndex: 0,
        explanation: `When facing towards the center of a circle, moving to the Right corresponds to the Anti-clockwise direction, while moving to the Left corresponds to the Clockwise direction.`,
        referenceAct: 'Logical Seating Arrangements Standard Convention'
      }
    ]
  }));

  // Subject 3: English Comprehension, Grammar & Verbal Ability (16 Topics)
  const englishTopicsData = [
    { num: 1, en: 'Nouns, Pronouns & Subject-Verb Agreement Rules (Concord) for SSC & Banking', te: 'నామవాచకాలు, సర్వనామాలు & సబ్జెక్ట్-వెర్బ్ అగ్రిమెంట్ నియమాలు', hi: 'संज्ञा, सर्वनाम एवं क्रिया समझौता' },
    { num: 2, en: 'Tenses & Conditionals: Zero, First, Second & Third Conditional Sentences', te: 'కాలాలు (Tenses) & కండిషనల్ వాక్యాల నిర్మాణం (If Clauses)', hi: 'काल एवं सशर्त वाक्य' },
    { num: 3, en: 'Active and Passive Voice Transformation Rules for Imperative, Interrogative & Complex Sentences', te: 'యాక్టివ్ & పాసివ్ వాయిస్ మార్పిడి నియమాలు', hi: 'वाच्य परिवर्तन (Active/Passive)' },
    { num: 4, en: 'Direct and Indirect Speech / Narration Rules for Questions, Exclamations & Orders', te: 'డైరెక్ట్ & ఇన్-డైరెక్ట్ స్పీచ్ (రిపోర్టెడ్ స్పీచ్ నిబంధనలు)', hi: 'प्रत्यक्ष एवं अप्रत्यक्ष कथन' },
    { num: 5, en: 'Prepositions, Phrasal Verbs & Fixed Preposition Collocations (Accused of, Refrain from, Congratulate on)', te: 'ప్రిపోజిషన్లు, ఫ్రేజల్ వెర్బ్స్ & ఫిక్స్‌డ్ ప్రిపోజిషన్లు', hi: 'प्रीपोजिशन एवं मुहावरेदार क्रियाएं' },
    { num: 6, en: 'Articles, Determiners & Quantifiers (Few/A Few/The Few, Little/A Little/The Little)', te: 'ఆర్టికల్స్ & క్వాంటిఫైయర్స్ నిబంధనలు', hi: 'आर्टिकल्स एवं निर्धारक' },
    { num: 7, en: 'Conjunctions, Inversion Rules (Scarcely...when, No sooner...than, Hardly...when)', te: 'కంజంక్షన్లు & ఇన్వర్షన్ రూల్స్ (No sooner...than, Hardly...when)', hi: 'संयोजक एवं इनवर्जन नियम' },
    { num: 8, en: 'Spotting the Error & Sentence Correction Rules in Competitive Examinations', te: 'ఎర్రర్ స్పాటింగ్ & వాక్య దోషాల గుర్తింపు నియమాలు', hi: 'वाक्य शुद्धि एवं त्रुटि निवारण' },
    { num: 9, en: 'Cloze Test Mastery: Contextual Vocabulary, Grammar Flow & Elimination Techniques', te: 'క్లోజ్ టెస్ట్ (Cloze Test) సాధించే మెలకువలు', hi: 'क्लोज टेस्ट तकनीक' },
    { num: 10, en: 'Sentence Rearrangement & Para Jumbles (PQRS Sequence Determination)', te: 'పేరా జంబుల్స్ & వాక్యాల క్రమ అమరిక (PQRS)', hi: 'पैरा जम्बल्स (PQRS)' },
    { num: 11, en: 'Reading Comprehension: Tone of Author, Factual, Inferential & Theme-Based Questions', te: 'రీడింగ్ కాంప్రహెన్షన్: రచయిత స్వరం, అనుమితి & ప్రశ్నల విశ్లేషణ', hi: 'अपठित गद्यांश एवं बोध' },
    { num: 12, en: 'Idioms and Phrases with Origins, Contextual Usage & High-Frequency Exam Lists', te: 'జాతీయాలు (Idioms & Phrases) & సందర్భోచిత వినియోగం', hi: 'मुहावरे एवं लोकोक्तियां' },
    { num: 13, en: 'Synonyms & Antonyms for SSC CGL, Banking & Allied Examinations', te: 'పర్యాయపదాలు & వ్యతిరేక పదాలు (ఎస్సెస్సీ/బ్యాంకింగ్ స్థాయి)', hi: 'समानार्थी एवं विलोम शब्द' },
    { num: 14, en: 'One-Word Substitutions: Persons, Places, Professions, Murder & Governance Terms', te: 'ఏకపద ప్రత్యామ్నాయాలు (One-Word Substitutions)', hi: 'अनेक शब्दों के लिए एक शब्द' },
    { num: 15, en: 'Spelling Rules & Commonly Misspelled Words in SSC & Banking Papers', te: 'స్పెల్లింగ్ నియమాలు & తరచుగా తప్పు రాసే పదాలు (Misspelled Words)', hi: 'वर्तनी शुद्धि नियम' },
    { num: 16, en: 'Fill in the Blanks (Single & Double Fillers) based on Vocabulary and Collocations', te: 'ఫిల్ ఇన్ ది బ్లాంక్స్ (సింగిల్ & డబుల్ ఫిల్లర్స్)', hi: 'रिक्त स्थान पूर्ति' }
  ];

  const englishTopics: Topic[] = englishTopicsData.map((item, idx) => ({
    id: `cent-eng-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'cent-english',
    courseId: 'central-allied',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Grammar rules, vocabulary banks, and cloze test strategies for ${item.en}.`,
    shortDescTe: `${item.te} పై ఇంగ్లీష్ గ్రామర్ సూత్రాలు & వొకాబ్యులరీ.`,
    shortDescHi: `${item.en} - अंग्रेजी व्याकरण एवं शब्दावली।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks)',
    content: {
      overview: `Complete General English and verbal ability masterclass on ${item.en} tailored for SSC, Banking, and Central Allied examinations.`,
      overviewTe: `${item.te} అనేది సెంట్రల్ ఉద్యోగ పరీక్షల్లో ఇంగ్లీష్ విభాగంలో టాప్ స్కోర్ సాధించేందుకు నిర్దేశించబడింది.`,
      sections: [
        {
          title: `1. Grammatical Framework & Practical Applications: ${item.en}`,
          titleTe: `1. వ్యాకరణ సూత్రాలు & ప్రాక్టికల్ వినియోగం: ${item.te}`,
          paragraphs: [
            `Detailed coverage of ${item.en} covering grammar exceptions, inversion rules, and cloze test tactics.`,
            `Follows standard SSC CGL and IBPS PO examination benchmarks.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో టెన్సెస్, వాయిస్, ఫిక్స్‌డ్ ప్రిపోజిషన్లు మరియు వొకాబ్యులరీ సమగ్రంగా అందించబడ్డాయి.`
          ],
          keyPoints: [
            `Examines standard pairing rules (No sooner...than, Scarcely...when, Not only...but also).`,
            `Covers fixed preposition usage (e.g. "Senior to", "Abide by", "Insist on").`
          ],
          keyPointsTe: [
            `నో సూనర్ (No sooner) తర్వాత 'than' మాత్రమే రావాలి ('when' లేదా 'then' రాకూడదు).`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'English Comprehension & Verbal' },
        { label: 'Target Exam', val: 'SSC CGL, RRB NTPC, IBPS' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'జనరల్ ఇంగ్లీష్' },
        { label: 'పరీక్ష', val: 'సెంట్రల్ ఎగ్జామ్స్' }
      ],
      revisionPoints: [
        `Review fixed correlative conjunctions: No sooner...than, Hardly/Scarcely...when, Although...yet.`
      ],
      revisionPointsTe: [
        `సంయోజక పదాల సరైన జతలు: No sooner...than, Hardly...when, Not only...but also పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `cent-eng-q-${idx + 1}`,
        topicId: `cent-eng-${String(idx + 1).padStart(2, '0')}`,
        question: `Which correlative conjunction is grammatically paired with the phrase "No sooner"?`,
        questionTe: `"No sooner" అనే పదబంధంతో వ్యాకరణపరంగా జతచేయబడే సరైన కంజంక్షన్ ఏది?`,
        options: [
          `than`,
          `when`,
          `then`,
          `that`
        ],
        optionsTe: [
          `than`,
          `when`,
          `then`,
          `that`
        ],
        correctIndex: 0,
        explanation: `In standard English grammar, "No sooner" is always paired with "than" (e.g., "No sooner had he arrived than the bell rang"). "Hardly/Scarcely" is paired with "when".`,
        referenceAct: 'Standard English Grammar Concord Rules'
      }
    ]
  }));

  // Subject 4: General Awareness & Static General Knowledge (16 Topics)
  const gaTopicsData = [
    { num: 1, en: 'Ancient Indian History: Indus Valley, Vedic Era, Mahajanapadas, Mauryan & Gupta Empires', te: 'ప్రాచీన భారతదేశ చరిత్ర: సింధు నాగరికత, వేదకాలం, మౌర్యులు & గుప్తులు', hi: 'प्राचीन भारतीय इतिहास' },
    { num: 2, en: 'Medieval Indian History: Delhi Sultanate, Mughal Administration & Bhakti/Sufi Movements', te: 'మధ్యయుగ భారతదేశ చరిత్ర: ఢిల్లీ సుల్తానులు, మొఘల్ పరిపాలన & భక్తి ఉద్యమం', hi: 'मध्यकालीन भारत का इतिहास' },
    { num: 3, en: 'Modern Indian History: British Expansion, 1857 Revolt & Indian National Movement (1885-1947)', te: 'ఆధునిక భారతదేశ చరిత్ర: బ్రిటిష్ పాలన, 1857 తిరుగుబాటు & స్వాతంత్ర్య పోరాటం', hi: 'आधुनिक भारत एवं स्वतंत्रता आंदोलन' },
    { num: 4, en: 'Indian Polity: Constitution, Preamble, Fundamental Rights, Parliament & Supreme Court', te: 'భారత రాజ్యాంగం: ప్రాథమిక హక్కులు, పార్లమెంట్ & సుప్రీంకోర్టు', hi: 'भारतीय संविधान एवं राजव्यवस्था' },
    { num: 5, en: 'Physical Geography: Solar System, Earth Layers, Rocks, Volcanoes, Earthquakes & Ocean Currents', te: 'భౌతిక భూగోళ శాస్త్రం: సౌర కుటుంబం, భూ అంతర్నిర్మాణం, భూకంపాలు & సముద్ర ప్రవాహాలు', hi: 'भौतिक भूगोल एवं सौरमंडल' },
    { num: 6, en: 'Indian Geography: Physiography, Himalayas, Rivers, Monsoons, Soils, Forests & Minerals', te: 'భారతదేశ భౌగోళిక స్వరూపం: హిమాలయాలు, నదులు, రుతుపవనాలు, నేలలు & అడవులు', hi: 'भारत का भूगोल एवं नदियां' },
    { num: 7, en: 'World Geography: Continents, Oceans, Straits, Major Canals (Suez, Panama) & Deserts', te: 'ప్రపంచ భూగోళ శాస్త్రం: ఖండాలు, మహాసముద్రాలు, జలసంధులు, సూయజ్/పనామా కాలువలు', hi: 'विश्व का भूगोल एवं प्रमुख जलसंधियां' },
    { num: 8, en: 'Indian Economy: National Income (GDP), Inflation (CPI/WPI), Five-Year Plans & NITI Aayog', te: 'భారత ఆర్థిక వ్యవస్థ: జాతీయోత్పత్తి (GDP), ద్రవ్యోల్బణం & నీతి ఆయోగ్', hi: 'भारतीय अर्थव्यवस्था एवं नीति आयोग' },
    { num: 9, en: 'General Physics: Laws of Motion, Work-Energy, Gravitation, Light Optics & Sound', te: 'జనరల్ ఫిజిక్స్: గమన నియమాలు, కాంతి, ధ్వని & విద్యుత్', hi: 'भौतिक विज्ञान' },
    { num: 10, en: 'General Chemistry: Atomic Structure, Periodic Table, Metals/Non-Metals & Daily Compounds', te: 'జనరల్ కెమిస్ట్రీ: పరమాణు నిర్మాణం, ఆవర్తన పట్టిక & నిత్యజీవిత రసాయనాలు', hi: 'रसायन विज्ञान' },
    { num: 11, en: 'General Biology: Human Organs, Blood Groups, Vitamins, Pathogens & Genetics', te: 'జనరల్ బయాలజీ: మానవ శరీర నిర్మాణం, రక్త వర్గాలు, విటమిన్లు & వ్యాధులు', hi: 'जीव विज्ञान एवं मानव शरीर' },
    { num: 12, en: 'Ecology & Environment: National Parks, Wildlife Sanctuaries, Biosphere Reserves & Ramsar Sites', te: 'పర్యావరణం: జాతీయ పార్కులు, అభయారణ్యాలు, బయోస్ఫియర్ రిజర్వులు & రామ్‌సర్ సైట్లు', hi: 'पर्यावरण एवं राष्ट्रीय उद्यान' },
    { num: 13, en: 'Static GK: Classical Dances, Folk Dances, Festivals & UNESCO World Heritage Sites in India', te: 'స్టాటిక్ జీకే: శాస్త్రీయ నృత్యాలు (8 నృత్యాలు), పండుగలు & యునెస్కో వారసత్వ ప్రదేశాలు', hi: 'शास्त्रीय नृत्य एवं यूनेस्को धरोहर' },
    { num: 14, en: 'Static GK: International Organizations (UN, WTO, IMF, WHO, World Bank) & Headquarters', te: 'అంతర్జాతీయ సంస్థలు (UN, WTO, IMF, WHO, వరల్డ్ బ్యాంక్) & వాటి ప్రధాన కార్యాలయాలు', hi: 'अंतर्राष्ट्रीय संगठन एवं मुख्यालय' },
    { num: 15, en: 'Sports, Tournaments, Trophies, Olympics & National / International Awards (Bharat Ratna, Nobel)', te: 'క్రీడలు, ట్రోఫీలు, ఒలింపిక్స్ & జాతీయ/అంతర్జాతీయ పురస్కారాలు (భారతరత్న, నోబెల్)', hi: 'खेलकूद एवं प्रमुख पुरस्कार' },
    { num: 16, en: 'Current Affairs: National Events, International Summits, Defense Exercises & Appointments', te: 'సమకాలీన పరిణామాలు: జాతీయ అంశాలు, అంతర్జాతీయ సదస్సులు & సైనిక విన్యాసాలు', hi: 'समसामयिक घटनाएं' }
  ];

  const gaTopics: Topic[] = gaTopicsData.map((item, idx) => ({
    id: `cent-ga-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'cent-ga',
    courseId: 'central-allied',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Core static GK fact bank, national geography, history, and science for ${item.en}.`,
    shortDescTe: `${item.te} పై స్టాటిక్ జీకే, చరిత్ర, భూగోళ శాస్త్రం & కరెంట్ అఫైర్స్.`,
    shortDescHi: `${item.en} - सामान्य जागरूकता एवं स्टेटिक जीके।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (2-3 Marks)',
    content: {
      overview: `Complete General Awareness and Static General Knowledge repository for ${item.en} covering SSC CGL, RRB NTPC, and Central Armed Police Forces exams.`,
      overviewTe: `${item.te} అనేది సెంట్రల్ ఉద్యోగ పరీక్షల్లో జనరల్ అవేర్‌నెస్ విభాగంలో అత్యధిక మార్కులు అందించే విభాగం.`,
      sections: [
        {
          title: `1. Key Facts & Static GK Repository: ${item.en}`,
          titleTe: `1. వాస్తవ సమాచారం & స్టాటిక్ జీకే నిధి: ${item.te}`,
          paragraphs: [
            `Detailed coverage of ${item.en} highlighting headquarters, classical dance states, UNESCO sites, and national parks.`,
            `Follows standard SSC and Railway recruitment syllabus.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో యునెస్కో వారసత్వ ప్రదేశాలు, అంతర్జాతీయ సంస్థల ప్రధాన కేంద్రాలు మరియు జాతీయ పార్కులు సమగ్రంగా అందించబడ్డాయి.`
          ],
          keyPoints: [
            `Covers 8 Classical Dances recognized by Sangeet Natak Akademi (Bharatanatyam-TN, Kathakali/Mohiniyattam-Kerala, Kuchipudi-AP, Odissi-Odisha, Kathak-UP, Manipuri-Manipur, Sattriya-Assam).`,
            `Covers UN agency headquarters (Geneva, Washington DC, New York, Paris, Rome).`
          ],
          keyPointsTe: [
            `భారతీయ 8 శాస్త్రీయ నృత్యాలు: కూచిపూడి (ఆంధ్రప్రదేశ్), భరతనాట్యం (తమిళనాడు), కథాకళి (కేరళ), సత్త్రియా (అస్సాం).`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'General Awareness & Static GK' },
        { label: 'Target Exam', val: 'SSC CGL, RRB NTPC' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'జనరల్ అవేర్‌నెస్ & స్టాటిక్ జీకే' },
        { label: 'పరీక్ష', val: 'సెంట్రల్ ఎగ్జామ్స్' }
      ],
      revisionPoints: [
        `Memorize 8 classical dances and headquarters of IMF/World Bank (Washington DC) vs WHO/WTO (Geneva).`
      ],
      revisionPointsTe: [
        `అంతర్జాతీయ ద్రవ్య నిధి (IMF) ప్రధాన కార్యాలయం వాషింగ్టన్ డీసీలో ఉంది.`
      ]
    },
    questions: [
      {
        id: `cent-ga-q-${idx + 1}`,
        topicId: `cent-ga-${String(idx + 1).padStart(2, '0')}`,
        question: `Where are the headquarters of both the International Monetary Fund (IMF) and the World Bank located?`,
        questionTe: `అంతర్జాతీయ ద్రవ్య నిధి (IMF) మరియు ప్రపంచ బ్యాంకు (World Bank) రెండింటి ప్రధాన కార్యాలయాలు ఎక్కడ ఉన్నాయి?`,
        options: [
          `Washington, D.C., USA`,
          `Geneva, Switzerland`,
          `New York, USA`,
          `Paris, France`
        ],
        optionsTe: [
          `వాషింగ్టన్, డి.సి., అమెరికా`,
          `జెనీవా, స్విట్జర్లాండ్`,
          `న్యూయార్క్, అమెరికా`,
          `పారిస్, ఫ్రాన్స్`
        ],
        correctIndex: 0,
        explanation: `Both Bretton Woods institutions, the International Monetary Fund (IMF) and the World Bank Group, are headquartered in Washington, D.C., United States.`,
        referenceAct: 'Bretton Woods Agreement 1944 Documentation'
      }
    ]
  }));

  // Subject 5: Banking, Financial Awareness & Computer Aptitude (16 Topics)
  const bankingTopicsData = [
    { num: 1, en: 'History & Structure of Indian Banking: Commercial Banks, RRBs, Small Finance & Payments Banks', te: 'భారతీయ బ్యాంకింగ్ చరిత్ర & నిర్మాణం: వాణిజ్య బ్యాంకులు, RRBs & పేమెంట్స్ బ్యాంకులు', hi: 'भारतीय बैंकिंग संरचना' },
    { num: 2, en: 'Reserve Bank of India (RBI): Functions, Monetary Policy Tools (Repo, Reverse Repo, CRR, SLR, MSF)', te: 'భారత రిజర్వ్ బ్యాంక్ (RBI): విధులు, ద్రవ్య విధాన సాధనాలు (రెపో, CRR, SLR)', hi: 'भारतीय रिजर्व बैंक (RBI) एवं मौद्रिक उपकरण' },
    { num: 3, en: 'Types of Bank Accounts (CASA, Fixed, Recurring) & Negotiable Instruments (Cheques, Promissory Notes)', te: 'బ్యాంక్ ఖాతాల రకాలు (CASA) & నెగోషియబుల్ ఇన్‌స్ట్రుమెంట్స్ (చెక్కులు, డిమాండ్ డ్రాఫ్ట్)', hi: 'बैंक खाते एवं चेक/ड्राफ्ट' },
    { num: 4, en: 'Digital Payment Systems: NEFT, RTGS, IMPS, UPI, AePS, CTS & NPCI Governance', te: 'డిజిటల్ చెల్లింపుల వ్యవస్థలు: NEFT, RTGS, IMPS, UPI & NPCI మార్గదర్శకాలు', hi: 'डिजिटल भुगतान (UPI, NEFT, RTGS)' },
    { num: 5, en: 'Non-Performing Assets (NPAs), SARFAESI Act 2002, Insolvency and Bankruptcy Code (IBC 2016) & DRTs', te: 'నిరర్ధక ఆస్తులు (NPAs), సర్ఫేసి చట్టం 2002 & దివాలా చట్టం (IBC 2016)', hi: 'एनपीए (NPA) एवं दिवालियापन संहिता (IBC)' },
    { num: 6, en: 'Priority Sector Lending (PSL) Targets, Sub-Targets & Financial Inclusion (PMJDY)', te: 'ప్రాధాన్యతా రంగా రుణాలు (PSL) & ప్రధానమంత్రి జన్ ధన్ యోజన (PMJDY)', hi: 'प्राथमिकता प्राप्त क्षेत्र को ऋण (PSL)' },
    { num: 7, en: 'Money Market (Call Money, Treasury Bills, Commercial Paper) vs Capital Market (Equity, Debentures)', te: 'ద్రవ్య మార్కెట్ (ట్రెజరీ బిల్లులు) vs మూలధన మార్కెట్ (ఈక్విటీ, బాండ్లు)', hi: 'मुद्रा बाजार बनाम पूंजी बाजार' },
    { num: 8, en: 'Financial Regulators in India: SEBI (Stock Markets), IRDAI (Insurance), PFRDA (Pensions), NABARD', te: 'భారత ఆర్థిక నియంత్రణ సంస్థలు: SEBI, IRDAI, PFRDA & నాబార్డ్', hi: 'वित्तीय नियामक संस्थाएं (SEBI, IRDAI)' },
    { num: 9, en: 'Inflation Types (Demand-Pull, Cost-Push), CPI vs WPI & Balance of Payments (BoP) Dynamics', te: 'ద్రవ్యోల్బణం రకాలు, వినియోగదారుల ధరల సూచీ (CPI) & విదేశీ చెల్లింపుల సమతుల్యత', hi: 'मुद्रास्फीति के प्रकार एवं भुगतान संतुलन' },
    { num: 10, en: 'Computer Fundamentals: Hardware (CPU, ALU, Registers, Cache), Motherboards & Input/Output Devices', te: 'కంప్యూటర్ ప్రాథమికాంశాలు: CPU, ALU, క్యాష్ మెమరీ & ఇన్‌పుట్/అవుట్‌పుట్ పరికరాలు', hi: 'कंप्यूटर आर्किटेक्चर एवं हार्डवेयर' },
    { num: 11, en: 'Computer Memory Units (Bit, Byte, KB, MB, GB, TB, PB) & Storage Technologies (SSD vs HDD)', te: 'కంప్యూటర్ మెమరీ కొలతలు (బిట్, బైట్, GB, TB) & స్టోరేజ్ సాంకేతికత', hi: 'मेमोरी इकाइयां एवं स्टोरेज' },
    { num: 12, en: 'Computer Software & Operating Systems: Types (System, Application, Utility), Windows, Linux Commands', te: 'సాఫ్ట్‌వేర్ & ఆపరేటింగ్ సిస్టమ్స్: సిస్టమ్ సాఫ్ట్‌వేర్, విండోస్, లైనక్స్ కమాండ్లు', hi: 'ऑपरेटिंग सिस्टम एवं लिनक्स' },
    { num: 13, en: 'Computer Networking: OSI 7-Layer Model, TCP/IP Suite, IP Addressing (IPv4 vs IPv6) & Network Topologies', te: 'కంప్యూటర్ నెట్‌వర్కింగ్: OSI 7 లేయర్లు, TCP/IP ప్రోటోకాల్ & IPv4/IPv6', hi: 'कंप्यूटर नेटवर्क एवं OSI मॉडल' },
    { num: 14, en: 'Internet & Web Technologies: DNS, HTTP/HTTPS, SSL/TLS, Search Engines, Browsers & Web Protocols', te: 'ఇంటర్నెట్ & వెబ్ టెక్నాలజీస్: DNS, HTTPS, బ్రౌజర్లు & వెబ్ ప్రోటోకాల్స్', hi: 'इंटरनेट एवं वेब प्रोटोकॉल' },
    { num: 15, en: 'Cyber Security & Threats: Malware, Viruses, Worms, Trojans, Ransomware, Phishing & Firewalls', te: 'సైబర్ భద్రత & ముప్పులు: మాల్‌వేర్, వైరస్‌లు, రాన్సమ్‌వేర్, ఫిషింగ్ & ఫైర్‌వాల్', hi: 'साइबर सुरक्षा एवं मालवेयर' },
    { num: 16, en: 'Database Management Systems (DBMS): RDBMS Concepts, SQL Basics (SELECT, INSERT, UPDATE) & Keys', te: 'డేటాబేస్ మేనేజ్‌మెంట్ (DBMS): RDBMS భావనలు & ప్రాథమిక SQL కమాండ్లు', hi: 'डेटाबेस प्रबंधन एवं एसक्यूएल (SQL)' }
  ];

  const bankingTopics: Topic[] = bankingTopicsData.map((item, idx) => ({
    id: `cent-bank-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'cent-banking',
    courseId: 'central-allied',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Banking instruments, monetary policy tools, network layers, and cybersecurity for ${item.en}.`,
    shortDescTe: `${item.te} పై బ్యాంకింగ్ పరిజ్ఞానం & కంప్యూటర్ ఆప్టిట్యూడ్.`,
    shortDescHi: `${item.en} - बैंकिंग जागरूकता एवं कंप्यूटर अभियोग्यता।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3 Marks)',
    content: {
      overview: `Complete Banking, Financial Awareness, and Computer Aptitude syllabus manual on ${item.en} for IBPS PO/Clerk, SBI PO, RBI Assistant, and SSC examinations.`,
      overviewTe: `${item.te} అనేది బ్యాంకింగ్ మరియు సెంట్రల్ పరీక్షల్లో అభ్యర్థులకు నిర్దేశించిన ప్రామాణిక అధ్యాయం.`,
      sections: [
        {
          title: `1. Financial Architecture & Computer Principles: ${item.en}`,
          titleTe: `1. ఆర్థిక సూత్రాలు & కంప్యూటర్ వ్యవస్థ: ${item.te}`,
          paragraphs: [
            `Detailed coverage of ${item.en} covering banking mechanisms, monetary policy rates, and network architectures.`,
            `Follows standard Reserve Bank of India and IBPS examination patterns.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో ఆర్బీఐ ద్రవ్య విధాన సాధనాలు (రెపో రేటు, రివర్స్ రెపో), డిజిటల్ చెల్లింపులు మరియు కంప్యూటర్ నెట్‌వర్క్ లేయర్లు వివరించబడ్డాయి.`
          ],
          keyPoints: [
            `Covers RBI Repo Rate definition (rate at which RBI lends short-term money to commercial banks against government securities).`,
            `Covers OSI 7-Layer Model (Physical, Data Link, Network, Transport, Session, Presentation, Application).`
          ],
          keyPointsTe: [
            `రెపో రేటు అంటే వాణిజ్య బ్యాంకులు తమ స్వల్పకాలిక నిధుల కోసం ఆర్బీఐ నుండి రుణాలు పొందే వడ్డీ రేటు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Banking & Computer Aptitude' },
        { label: 'Target Exam', val: 'IBPS, SBI, RBI, SSC' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'బ్యాంకింగ్ & కంప్యూటర్ పరిజ్ఞానం' },
        { label: 'పరీక్ష', val: 'బ్యాంకింగ్ & సెంట్రల్ ఎగ్జామ్స్' }
      ],
      revisionPoints: [
        `Memorize 7 layers of OSI model in correct order from Layer 1 (Physical) to Layer 7 (Application).`
      ],
      revisionPointsTe: [
        `OSI 7 లేయర్లు: Physical, Data Link, Network, Transport, Session, Presentation, Application.`
      ]
    },
    questions: [
      {
        id: `cent-bank-q-${idx + 1}`,
        topicId: `cent-bank-${String(idx + 1).padStart(2, '0')}`,
        question: `In banking economics, what does the "Repo Rate" represent?`,
        questionTe: `బ్యాంకింగ్ ఆర్థిక పరిభాషలో "రెపో రేటు" (Repo Rate) దేనిని సూచిస్తుంది?`,
        options: [
          `Rate at which RBI lends short-term funds to commercial banks against securities`,
          `Rate at which commercial banks lend to general public`,
          `Rate at which RBI borrows from foreign central banks`,
          `None of the above`
        ],
        optionsTe: [
          `ప్రభుత్వ సెక్యూరిటీల హామీపై వాణిజ్య బ్యాంకులకు ఆర్బీఐ స్వల్పకాలిక రుణాలు ఇచ్చే వడ్డీ రేటు`,
          `సామాన్య ప్రజలకు బ్యాంకులు ఇచ్చే రుణాల రేటు`,
          `విదేశీ బ్యాంకుల నుండి ఆర్బీఐ తీసుకునే రుణాల రేటు`,
          `పైవేవీ కావు`
        ],
        correctIndex: 0,
        explanation: `Repo Rate (Repurchase Option Rate) is the interest rate at which the Reserve Bank of India lends liquidity to commercial banks against eligible government securities.`,
        referenceAct: 'Reserve Bank of India Monetary Policy Handbook'
      }
    ]
  }));

  // Total topics = 16 (Quant) + 16 (Reasoning) + 16 (English) + 16 (GA) + 16 (Banking/Comp) = 80 Topics!
  return [
    {
      id: 'cent-quant',
      courseId: 'central-allied',
      name: 'Quantitative Aptitude & Numerical Ability',
      nameTe: 'క్వాంటిటేటివ్ ఆప్టిట్యూడ్ & సంఖ్యా సామర్థ్యం',
      nameHi: 'संख्यात्मक अभियोग्यता एवं अंकगणित',
      icon: 'Calculator',
      totalHours: 25,
      topics: quantTopics
    },
    {
      id: 'cent-reasoning',
      courseId: 'central-allied',
      name: 'Reasoning, Logic & Analytical Intelligence',
      nameTe: 'రీజనింగ్, లాజిక్ & విశ్లేషణాత్మక సామర్థ్యం',
      nameHi: 'तार्किक क्षमता एवं विश्लेषणात्मक तर्क',
      icon: 'Brain',
      totalHours: 25,
      topics: reasoningTopics
    },
    {
      id: 'cent-english',
      courseId: 'central-allied',
      name: 'English Comprehension, Grammar & Verbal Ability',
      nameTe: 'ఆంగ్ల వ్యాకరణం, కాంప్రహెన్షన్ & వొకాబ్యులరీ',
      nameHi: 'अंग्रेजी भाषा बोध एवं व्याकरण',
      icon: 'Sparkles',
      totalHours: 25,
      topics: englishTopics
    },
    {
      id: 'cent-ga',
      courseId: 'central-allied',
      name: 'General Awareness & Static General Knowledge',
      nameTe: 'జనరల్ అవేర్‌నెస్ & స్టాటిక్ జనరల్ నాలెడ్జ్',
      nameHi: 'सामान्य जागरूकता एवं स्टेटिक जीके',
      icon: 'Globe',
      totalHours: 25,
      topics: gaTopics
    },
    {
      id: 'cent-banking',
      courseId: 'central-allied',
      name: 'Banking, Financial Awareness & Computer Aptitude',
      nameTe: 'బ్యాంకింగ్, ఆర్థిక అవగాహన & కంప్యూటర్ ఆప్టిట్యూడ్',
      nameHi: 'बैंकिंग जागरूकता एवं कंप्यूटर अभियोग्यता',
      icon: 'TrendingUp',
      totalHours: 20,
      topics: bankingTopics
    }
  ];
}
