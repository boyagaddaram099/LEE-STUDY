import { Subject, Topic } from '../../types';

export function getApPoliceSiPcSubjects(): Subject[] {
  // Subject 1: Arithmetic & Quantitative Aptitude (16 Topics)
  const quantTopicsData = [
    { num: 1, en: 'Number Systems: Divisibility Rules, Prime Numbers & Unit Digit Tricks', te: 'సంఖ్యా వ్యవస్థ: భాజనీయతా సూత్రాలు, ప్రధాన సంఖ్యలు & ఒకట్ల స్థానం కనుగొనుట', hi: 'संख्या पद्धति एवं विभाज्यता' },
    { num: 2, en: 'HCF and LCM: Real-World Applications, Bells Ringing & Remainder Theorems', te: 'గ.సా.భా & క.సా.గు: గంటల మోత సమస్యలు & శేష సిద్ధాంతాలు', hi: 'महत्तम एवं लघुत्तम समापवर्त्य (HCF & LCM)' },
    { num: 3, en: 'Simplification, BODMAS Rules, Fractions & Square/Cube Roots', te: 'సూక్ష్మీకరణ: BODMAS నియమాలు, భిన్నాలు & వర్గమూలాలు/ఘనమూలాలు', hi: 'सरलीकरण एवं बॉडमास (BODMAS)' },
    { num: 4, en: 'Percentages: Price-Consumption-Expenditure & Population Growth Models', te: 'శాతాలు: ధర-వినియోగం-వ్యయం & జనాభా వృద్ధి లెక్కలు', hi: 'प्रतिशतता' },
    { num: 5, en: 'Profit, Loss, Marked Price & Successive Discount Calculations', te: 'లాభ-నష్టాలు, ప్రకటన వెల & వరుస తగ్గింపులు (డిస్కౌంట్)', hi: 'लाभ, हानि एवं बट्टा' },
    { num: 6, en: 'Simple Interest & Compound Interest (Annual, Half-Yearly & Difference Formulas)', te: 'బారువడ్డీ & చక్రవడ్డీ (వార్షిక, అర్ధవార్షిక & వ్యత్యాస సూత్రాలు)', hi: 'साधारण एवं चक्रवृद्धि ब्याज' },
    { num: 7, en: 'Ratio, Proportion, Third/Fourth Proportional & Direct-Inverse Variation', te: 'నిష్పత్తి - అనుపాతం & అనులోమ-విలోమానుపాతాలు', hi: 'अनुपात एवं समानुपात' },
    { num: 8, en: 'Partnership: Active vs Sleeping Partners & Investment-Time Profit Ratio', te: 'భాగస్వామ్యం: పెట్టుబడి-కాలం నిష్పత్తి & లాభాల పంపకం', hi: 'साझेदारी' },
    { num: 9, en: 'Averages & Weighted Mean: Age Replacement & Batting/Bowling Averages', te: 'సగటులు & వయస్సుల సమస్యలు (క్రికెట్ బ్యాటింగ్/బౌలింగ్ సగటులు)', hi: 'औसत एवं आयु संबंधी प्रश्न' },
    { num: 10, en: 'Time and Work & Negative Work: Pipes and Cisterns Efficiency Method', te: 'కాలము - పని & పైపులు - తొట్టెలు (ల.సా.గు సామర్థ్య పద్ధతి)', hi: 'समय और कार्य, नल और टंकी' },
    { num: 11, en: 'Time, Speed and Distance: Average Speed, Relative Speed & Races', te: 'కాలము - వేగము - దూరము: సగటు వేగం, సాపేక్ష వేగం & పరుగు పందాలు', hi: 'समय, चाल और दूरी' },
    { num: 12, en: 'Problems on Trains: Crossing Poles, Bridges, Moving Platforms & Opposing Trains', te: 'రైలు లెక్కలు: స్తంభాలు, ప్లాట్‌ఫారమ్‌లు దాటే కాలం & ఎదురెదురు రైళ్ళు', hi: 'रेलगाड़ी संबंधित प्रश्न' },
    { num: 13, en: 'Boats and Streams: Upstream, Downstream & Still Water Speed Formulas', te: 'పడవలు - ప్రవాహాలు: ఎదురు ప్రవాహం, అనుకూల ప్రవాహం & నిశ్చల నీటి వేగం', hi: 'नाव एवं धारा' },
    { num: 14, en: 'Alligation & Mixtures: Mean Price, Removal & Replacement Rules', te: 'మిశ్రమాలు & అలిగేషన్ పద్ధతి (పాలు-నీరు, రసాయనిక మిశ్రమాలు)', hi: 'मिश्रण और अनुपात' },
    { num: 15, en: 'Mensuration 2D: Triangles, Quadrilaterals, Rhombus, Trapezium & Circles', te: 'క్షేత్రమితి 2D: త్రిభుజాలు, చతుర్భుజాలు, సమలంబ చతుర్భుజం & వృత్తాలు', hi: 'क्षेत्रमिति 2D' },
    { num: 16, en: 'Mensuration 3D: Cylinders, Cones, Spheres, Hemispheres, Cubes & Cuboids', te: 'క్షేత్రమితి 3D: సిలిండర్, శంకువు, గోళం, ఘనం & దీర్ఘఘనం ఘనపరిమాణాలు', hi: 'क्षेत्रमिति 3D' }
  ];

  const quantTopics: Topic[] = quantTopicsData.map((item, idx) => ({
    id: `pol-quant-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'police-quant',
    courseId: 'ap-police-si-pc',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Formula shortcuts, time-saving tricks, and AP Police SI/Constable past models for ${item.en}.`,
    shortDescTe: `${item.te} పై పోలీస్ ఎస్ఐ మరియు కానిస్టేబుల్ పరీక్షల కొరకు షార్ట్‌కట్ పద్ధతులు & ప్రాక్టీస్.`,
    shortDescHi: `${item.en} - शॉर्टकट ट्रिक्स एवं प्रश्नोत्तर।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Questions in SI/PC)',
    content: {
      overview: `High-yield quantitative aptitude module for ${item.en} designed to solve problems in under 45 seconds for APSLPRB exams.`,
      overviewTe: `${item.te} అనేది పోలీస్ ప్రిలిమ్స్ మరియు మెయిన్స్ పరీక్షల్లో అత్యధిక మార్కులు సాధించడానికి అత్యంత కీలకమైన విభాగం.`,
      sections: [
        {
          title: `1. Core Formulas & Shortcut Methods: ${item.en}`,
          titleTe: `1. సూత్రాలు & సులభతర షార్ట్‌కట్ పద్ధతులు: ${item.te}`,
          paragraphs: [
            `Understanding the fundamentals of ${item.en} eliminates the need for long traditional calculations.`,
            `Mastering unit digit methods, percentage fraction equivalences, and ratio methods guarantees 100% accuracy.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో తక్కువ సమయంలో ఖచ్చితమైన సమాధానాలు రాబట్టే షార్ట్‌కట్ సూత్రాలు అందించబడ్డాయి.`
          ],
          keyPoints: [
            `Formula bank and step-by-step problem breakdown.`,
            `High-frequency models asked in APSLPRB SI and Constable exams.`
          ],
          keyPointsTe: [
            `ల.సా.గు సామర్థ్య పద్ధతులు మరియు నిష్పత్తి విధానాలు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Arithmetic & Quantitative' },
        { label: 'Exam Focus', val: 'AP Police SI / PC (100 Marks)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'అంకగణితం' },
        { label: 'పరీక్ష ప్రాధాన్యత', val: 'APSLPRB SI/PC' }
      ],
      revisionPoints: [
        `Memorize squares up to 30, cubes up to 20, and percentage fractions (1/2 to 1/16).`
      ],
      revisionPointsTe: [
        `వర్గాలు, ఘనాలు మరియు శాతాల భిన్న రూపాలను (1/2 నుండి 1/16 వరకు) కంఠస్థం చేయండి.`
      ]
    },
    questions: [
      {
        id: `pol-quant-q-${idx + 1}`,
        topicId: `pol-quant-${String(idx + 1).padStart(2, '0')}`,
        question: `What is the most efficient method to solve questions in ${item.en.split(':')[0]}?`,
        questionTe: `${item.te.split(':')[0]} లోని లెక్కలను తక్కువ సమయంలో సాధించేందుకు సరైన పద్ధతి ఏది?`,
        options: [
          `Unitary LCM efficiency & ratio conversion methods`,
          `Lengthy algebraic substitution with variables`,
          `Pure blind guessing`,
          `None of the above`
        ],
        optionsTe: [
          `ల.సా.గు సామర్థ్య పద్ధతి & నిష్పత్తి ఆధారిత షార్ట్‌కట్ విధానం`,
          `సుదీర్ఘమైన సమీకరణాల పద్ధతి`,
          `అంచనా వేయడం`,
          `పైవేవీ కావు`
        ],
        correctIndex: 0,
        explanation: `Using ratio and unitary LCM conversion saves up to 70% of exam time in competitive aptitude papers.`,
        referenceAct: 'APSLPRB Arithmetic Standard Guide'
      }
    ]
  }));

  // Subject 2: Reasoning & Mental Ability (16 Topics)
  const reasoningTopicsData = [
    { num: 1, en: 'Number Series, Alphabet Series & Mixed Alpha-Numeric Sequences', te: 'సంఖ్యా శ్రేణులు, అక్షర శ్రేణులు & ఆల్ఫా-న్యూమరిక్ సిరీస్', hi: 'संख्या एवं अक्षर श्रृंखला' },
    { num: 2, en: 'Analogies: Semantic, Number, Letter & Figural Relationships', te: 'పోలికలు (Analogy): పద, సంఖ్యా, అక్షర సంబంధాలు', hi: 'सादृश्यता (Analogy)' },
    { num: 3, en: 'Classification & Odd One Out (Word, Number & Symbol Pairs)', te: 'వర్గీకరణ: భిన్నమైన దానిని గుర్తించుట (Odd One Out)', hi: 'वर्गीकरण एवं भिन्न पद' },
    { num: 4, en: 'Coding-Decoding: Letter Shifting, Number Coding & Chinese Substitution', te: 'కోడింగ్ - డీకోడింగ్: అక్షర మార్పిడి, సంఖ్యా కోడింగ్ & సబ్‌స్టిట్యూషన్', hi: 'कोडिंग - डिकोडिंग' },
    { num: 5, en: 'Blood Relations: Family Tree Diagrams & Coded Symbol Relations', te: 'రక్త సంబంధాలు: వంశవృక్ష చిత్రాలు & సాంకేతిక సంబంధాలు', hi: 'रक्त संबंध' },
    { num: 6, en: 'Direction & Distance Sense: Angles of Turn, Pythagoras & Shadow Questions', te: 'దిశలు & దూరాలు: కోణాలు, పైథాగరస్ సిద్ధాంతం & నీడల సమస్యలు', hi: 'दिशा एवं दूरी ज्ञान' },
    { num: 7, en: 'Ranking, Order, Position from Left/Right & Total Strength Formulas', te: 'ర్యాంకింగ్ & క్రమ అమరిక: ఎడమ/కుడి నుండి స్థానాలు & మొత్తం వ్యక్తులు', hi: 'क्रम एवं रैंकिंग' },
    { num: 8, en: 'Linear & Circular Seating Arrangement (Facing Inward & Outward)', te: 'సీటింగ్ అమరిక: సరళరేఖా & వృత్తాకార కూర్చునే విధానాలు', hi: 'बैठक व्यवस्था' },
    { num: 9, en: 'Syllogism: Venn Diagram Method, All/Some/No Statements & Possibilities', te: 'సిలాగిజం (Syllogism): వెన్ చిత్రాల పద్ధతి & అనుమితులు', hi: 'न्याय निगमन (Syllogism)' },
    { num: 10, en: 'Mathematical Operations, Sign Interchanging & Coded Inequalities', te: 'గణిత గుర్తుల మార్పిడి & అసమానతలు (Inequalities)', hi: 'गणितीय संक्रियाएं एवं असमानताएं' },
    { num: 11, en: 'Clocks: Angle Between Hands, Reflex Angles, Coinciding & Gain/Loss', te: 'గడియారాలు: ముల్లుల మధ్య కోణాలు, ఏకీభవించే సమయం & వేగ/నెమ్మది గడియారాలు', hi: 'घड़ी संबंधित प्रश्न' },
    { num: 12, en: 'Calendars: Odd Days Concept, Leap Years, Day of the Week & Repetition', te: 'క్యాలెండర్లు: విషమ రోజుల (Odd Days) విధానం & లీపు సంవత్సరాలు', hi: 'कैलेंडर एवं विषम दिन' },
    { num: 13, en: 'Cubes, Dice & Open Box Folding Principles', te: 'పాచికలు (Dice), ఘనాలు & ఓపెన్ బాక్స్ మడతపెట్టే నియమాలు', hi: 'पासा एवं घन' },
    { num: 14, en: 'Non-Verbal Reasoning: Mirror Images, Water Images & Paper Folding', te: 'నాన్-వెర్బల్ రీజనింగ్: అద్దంలో ప్రతిబింబాలు, నీటిలో ప్రతిబింబాలు & పేపర్ కటింగ్', hi: 'दर्पण एवं जल प्रतिबिंब' },
    { num: 15, en: 'Figure Matrix, Embedded Figures & Pattern Completion', te: 'అంతర్లీన చిత్రాలు, చిత్రాల పూర్తి & ఫిగర్ మ్యాట్రిక్స్', hi: 'सन्निहित आकृतियां' },
    { num: 16, en: 'Logical Deductions: Statement & Arguments, Statement & Assumptions', te: 'లాజికల్ డిడక్షన్స్: ప్రవచనాలు - వాదనలు, నిర్ణయాలు', hi: 'कथन एवं तर्क' }
  ];

  const reasoningTopics: Topic[] = reasoningTopicsData.map((item, idx) => ({
    id: `pol-reas-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'police-reasoning',
    courseId: 'ap-police-si-pc',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Logical frameworks, diagrammatic tools, and trick patterns for ${item.en}.`,
    shortDescTe: `${item.te} పై రీజనింగ్ విభాగంలో పూర్తి మార్కులు సాధించేందుకు సులభతర పద్ధతులు.`,
    shortDescHi: `${item.en} - तार्किक क्षमता के महत्वपूर्ण नियम।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Questions)',
    content: {
      overview: `Systematic analytical guide for ${item.en} covering both verbal and non-verbal reasoning techniques for AP Police recruitment.`,
      overviewTe: `${item.te} అనేది రీజనింగ్ పేపర్‌లో ఖచ్చితమైన విశ్లేషణతో క్షణాల్లో సమాధానాలు రాబట్టేందుకు తోడ్పడుతుంది.`,
      sections: [
        {
          title: `1. Logical Rules & Elimination Strategies: ${item.en}`,
          titleTe: `1. లాజిక్ నియమాలు & ఎలిమినేషన్ వ్యూహాలు: ${item.te}`,
          paragraphs: [
            `Detailed rules, pattern identification methods, and diagram shortcuts for ${item.en}.`,
            `Special focus on Venn diagrams, coded relationships, and linear seating arrangements.`
          ],
          paragraphsTe: [
            `ఈ విభాగంలో వెన్ చిత్రాలు, రక్త సంబంధాలు మరియు పాచికల నియమాలను సమగ్రంగా వివరించాము.`
          ],
          keyPoints: [
            `Covers standard logic patterns and high-frequency model sets.`,
            `Equips candidates to solve reasoning puzzles with zero confusion.`
          ],
          keyPointsTe: [
            `వెన్ చిత్రాలు మరియు దిశల సమస్యలలో పైథాగరస్ సిద్ధాంతం వినియోగం.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Reasoning & Mental Ability' },
        { label: 'Target Exam', val: 'AP Police SI / PC' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'మెంటల్ ఎబిలిటీ & రీజనింగ్' },
        { label: 'పరీక్ష', val: 'APSLPRB SI/PC' }
      ],
      revisionPoints: [
        `Practice backward/forward letter positions (A=1 to Z=26, EJOTY formula) and leap year odd days.`
      ],
      revisionPointsTe: [
        `ఆల్ఫాబెట్ నంబర్లు (A=1 నుండి Z=26, EJOTY సూత్రం) మరియు విషమ రోజుల లెక్కింపును పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `pol-reas-q-${idx + 1}`,
        topicId: `pol-reas-${String(idx + 1).padStart(2, '0')}`,
        question: `In reasoning, what is the value of 100 years in terms of Odd Days in a Calendar?`,
        questionTe: `క్యాలెండర్ లెక్కింపులో సాధారణ 100 సంవత్సరాలలో ఉండే విషమ రోజుల (Odd Days) సంఖ్య ఎంత?`,
        options: [
          `5 Odd Days`,
          `3 Odd Days`,
          `1 Odd Day`,
          `0 Odd Days`
        ],
        optionsTe: [
          `5 విషమ రోజులు`,
          `3 విషమ రోజులు`,
          `1 విషమ రోజు`,
          `0 విషమ రోజులు`
        ],
        correctIndex: 0,
        explanation: `In 100 years (76 ordinary years + 24 leap years), total odd days = (76 * 1) + (24 * 2) = 124 days = 17 weeks + 5 odd days.`,
        referenceAct: 'Calendar Aptitude Standard Derivation'
      }
    ]
  }));

  // Subject 3: General Science & Environmental Ecology (16 Topics)
  const scienceTopicsData = [
    { num: 1, en: 'Units, Dimensions, Physical Quantities & Measuring Instruments (Vernier, Screw Gauge)', te: 'ప్రమాణాలు, కొలతలు & కొలిచే పరికరాలు (వర్నియర్ కాలిపర్స్, స్క్రూగేజ్, బారోమీటర్)', hi: 'मात्रक एवं मापन' },
    { num: 2, en: 'Motion, Velocity, Acceleration & Newton\'s Three Laws of Motion with Real-Life Examples', te: 'చలనము, వేగము & న్యూటన్ మూడు గమన నియమాలు (తుపాకీ రీకాయిల్, రాకెట్ సూత్రం)', hi: 'न्यूटन के गति नियम' },
    { num: 3, en: 'Gravitation, Weightlessness, Escape Velocity & Kepler\'s Laws of Planetary Motion', te: 'గురుత్వాకర్షణ, భారరాహిత్యం, పలాయన వేగం & గ్రహ గమన నియమాలు', hi: 'गुरुत्वाकर्षण एवं पलायन वेग' },
    { num: 4, en: 'Work, Power, Energy & Kinetic/Potential Energy Conservation Laws', te: 'పని, సామర్థ్యం, శక్తి & శక్తి నిత్యత్వ నియమం', hi: 'कार्य, ऊर्जा एवं शक्ति' },
    { num: 5, en: 'Light: Reflection, Spherical Mirrors, Refraction, Total Internal Reflection (Mirage, OFC) & Lenses', te: 'కాంతి: పరావర్తనం, వక్రీభవనం, సంపూర్ణ అంతర పరావర్తనం (ఎండమావులు, ఆప్టికల్ ఫైబర్)', hi: 'प्रकाशिकी एवं अपवर्तन' },
    { num: 6, en: 'Human Eye & Vision Defects: Myopia, Hypermetropia, Presbyopia & Corrective Lenses', te: 'మానవ నేత్రం & దృష్టి లోపాలు: హ్రస్వదృష్టి (మయోపియా), దూరదృష్టి & నివారణ కటకాలు', hi: 'मानव नेत्र एवं दृष्टि दोष' },
    { num: 7, en: 'Heat & Thermodynamics: Temperature Scales (C, F, K), Thermal Expansion & Specific Heat', te: 'ఉష్ణం & ఉష్ణోగ్రత స్కేళ్ళు (C, F, K), విశిష్టోష్ణం & వ్యాకోచం', hi: 'ऊष्मा एवं ताप' },
    { num: 8, en: 'Sound Waves: Frequency, Pitch, Loudness, Doppler Effect, SONAR & Ultrasound Uses', te: 'ధ్వని తరంగాలు: పౌనఃపున్యం, డాప్లర్ ప్రభావం, సోనార్ & అల్ట్రాసౌండ్ వినియోగం', hi: 'ध्वनि तरंगें एवं सोनार' },
    { num: 9, en: 'Electricity: Ohm\'s Law, Series-Parallel Resistors, Electric Power & Domestic Wiring Safety', te: 'విద్యుత్: ఓమ్ నియమం, నిరోధాల శ్రేణి-సమాంతర సంధానం, ఫ్యూజ్ వైర్ & సేఫ్టీ', hi: 'विद्युत एवं ओम का नियम' },
    { num: 10, en: 'Atomic Structure, Isotopes, Isobars, Periodic Table & Chemical Bonding', te: 'పరమాణు నిర్మాణం, ఐసోటోపులు, ఆవర్తన పట్టిక & రసాయన బంధాలు', hi: 'परमाणु संरचना एवं आवर्त सारणी' },
    { num: 11, en: 'Acids, Bases, Salts & pH Scale: Indicators, Plaster of Paris, Bleaching Powder & Baking Soda', te: 'ఆమ్లాలు, క్షారాలు, లవణాలు & pH స్కేలు: బ్లీచింగ్ పౌడర్, బేకింగ్ సోడా రసాయన సూత్రాలు', hi: 'अम्ल, क्षार एवं लवण' },
    { num: 12, en: 'Metals & Non-Metals: Metallurgy, Reactivity Series, Rusting of Iron & Alloys', te: 'లోహాలు & అలోహాలు: లోహ సంగ్రహణం, తుప్పు పట్టుట & మిశ్రమ లోహాలు (కంచు, ఇత్తడి)', hi: 'धातु एवं मिश्र धातु' },
    { num: 13, en: 'Human Body Systems: Circulatory (Heart, Blood Groups), Respiratory & Nervous Systems', te: 'మానవ శరీర నిర్మాణం: రక్త ప్రసరణ (గుండె, బ్లడ్ గ్రూపులు RH ఫ్యాక్టర్), నాడీ వ్యవస్థ', hi: 'मानव शरीर क्रिया विज्ञान' },
    { num: 14, en: 'Nutrition, Vitamins (Fat & Water Soluble), Minerals & Deficiency Diseases (Scurvy, Beriberi)', te: 'పోషకాహారం, విటమిన్లు (A, B, C, D, E, K), ఖనిజాలు & లోప వ్యాధులు', hi: 'विटामिन एवं पोषण' },
    { num: 15, en: 'Infectious Diseases: Viruses, Bacteria, Protozoa, Vectors & Vaccination Schedules', te: 'అంటువ్యాధులు: వైరస్‌లు, బ్యాక్టీరియా, దోమల ద్వారా వ్యాపించే రోగాలు & టీకాలు', hi: 'संक्रामक रोग एवं टीके' },
    { num: 16, en: 'Ecology, Food Chains, Environmental Pollution, Global Warming & Forest Conservation in AP', te: 'పర్యావరణం, ఆహారపు గొలుసు, గ్లోబల్ వార్మింగ్ & ఏపీ అటవీ విస్తీర్ణం', hi: 'पर्यावरण एवं पारिस्थितिकी' }
  ];

  const scienceTopics: Topic[] = scienceTopicsData.map((item, idx) => ({
    id: `pol-sci-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'police-science',
    courseId: 'ap-police-si-pc',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Physical laws, chemical compounds, biological systems, and everyday science for ${item.en}.`,
    shortDescTe: `${item.te} పై నిత్యజీవిత సైన్స్, సూత్రాలు & పరీక్షాంశాల వివరణ.`,
    shortDescHi: `${item.en} - सामान्य विज्ञान के महत्वपूर्ण तथ्य।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (2-3 Marks)',
    content: {
      overview: `Everyday application-oriented General Science notes tailored for AP Police Constable and Sub-Inspector examinations.`,
      overviewTe: `${item.te} అనేది సైన్స్ విభాగంలో ప్రత్యక్షంగా మార్కులు అందించే ప్రాథమిక పాఠ్యాంశం.`,
      sections: [
        {
          title: `1. Scientific Principles & Daily Life Phenomena: ${item.en}`,
          titleTe: `1. శాస్త్రీయ సూత్రాలు & నిత్యజీవిత అనువర్తనాలు: ${item.te}`,
          paragraphs: [
            `Detailed explanation of ${item.en} covering standard definitions, formula applications, and natural occurrences.`,
            `Special emphasis on human diseases, optical phenomena, and chemical common names.`
          ],
          paragraphsTe: [
            `ఈ పాఠ్యాంశంలో విటమిన్లు, న్యూటన్ నియమాలు, కాంతి పరావర్తనం మరియు నిత్యజీవితంలో రసాయనాల ప్రాముఖ్యత వివరించబడింది.`
          ],
          keyPoints: [
            `Focuses on chemical formulas, vitamin deficiency symptoms, and physics laws.`,
            `Includes high-yield exam alerts for APSLPRB questions.`
          ],
          keyPointsTe: [
            `రక్త వర్గాల ఆవిష్కరణ (కార్ల్ ల్యాండ్‌స్టీనర్) మరియు విటమిన్ల రసాయన నామాలు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'General Science' },
        { label: 'Target Exam', val: 'AP Police SI / PC' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'జనరల్ సైన్స్' },
        { label: 'పరీక్ష', val: 'APSLPRB' }
      ],
      revisionPoints: [
        `Memorize chemical formulas (e.g., Bleaching Powder CaOCl2, Baking Soda NaHCO3) and vitamin names.`
      ],
      revisionPointsTe: [
        `బ్లీచింగ్ పౌడర్ (CaOCl2), వాషింగ్ సోడా (Na2CO3) మరియు విటమిన్ల లోప వ్యాధులను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `pol-sci-q-${idx + 1}`,
        topicId: `pol-sci-${String(idx + 1).padStart(2, '0')}`,
        question: `Which lens is used to correct "Myopia" (Short-sightedness) in the human eye?`,
        questionTe: `మానవ కంటిలోని "హ్రస్వదృష్టి" (Myopia) లోపాన్ని సరిచేయడానికి ఏ కటకాన్ని ఉపయోగిస్తారు?`,
        options: [
          `Concave Lens (పుటాకార కటకం)`,
          `Convex Lens (కుంభాకార కటకం)`,
          `Bifocal Lens`,
          `Cylindrical Lens`
        ],
        optionsTe: [
          `పుటాకార కటకం (Concave Lens)`,
          `కుంభాకార కటకం (Convex Lens)`,
          `ద్వికేంద్రక కటకం`,
          `స్థూపాకార కటకం`
        ],
        correctIndex: 0,
        explanation: `A Concave (diverging) lens is used to correct Myopia by diverging light rays before they reach the cornea so they focus correctly on the retina.`,
        referenceAct: 'NCERT Physics Standard Optics'
      }
    ]
  }));

  // Subject 4: Indian History & Andhra Pradesh Heritage (16 Topics)
  const historyTopicsData = [
    { num: 1, en: 'Indus Valley Civilization: Town Planning, Great Bath, Harappa, Mohenjo-daro & Lothal Dockyard', te: 'సింధు నాగరికత: పట్టణ ప్రణాళిక, మహా స్నానవాటిక, హరప్పా, మొహెంజొదారో & లోథాల్ ఓడరేవు', hi: 'सिंधु घाटी सभ्यता' },
    { num: 2, en: 'Vedic Period: Early vs Later Vedic Society, Epics, Upanishads & Varna System', te: 'వైదిక కాలం: తొలి & మలి వేద సంస్కృతి, ఉపనిషత్తులు, సమాజం & వర్ణ వ్యవస్థ', hi: 'वैदिक सभ्यता' },
    { num: 3, en: 'Buddhism and Jainism: Gautama Buddha, Mahavira, Doctrines, Councils & Buddhist Heritage in AP', te: 'బౌద్ధ & జైన మతాలు: బుద్ధుడు, మహావీరుడు, త్రిపీటకాలు & ఆంధ్రలో బౌద్ధ క్షేత్రాలు', hi: 'बौद्ध एवं जैन धर्म' },
    { num: 4, en: 'Mauryan Empire: Chandragupta Maurya, Ashoka\'s Dhamma, Edicts (Erragudi) & Arthashastra', te: 'మౌర్య సామ్రాజ్యం: చంద్రగుప్తుడు, అశోకుని ధర్మం, శాసనాలు (ఎర్రగుడి) & అర్థశాస్త్రం', hi: 'मौर्य साम्राज्य एवं अशोक' },
    { num: 5, en: 'Gupta Golden Age: Samudragupta, Chandragupta Vikramaditya, Art, Literature & Navaratnas', te: 'గుప్తుల స్వర్ణయుగం: సముద్రగుప్తుడు, నవరత్నాలు, కాళిదాసు & శిల్పకళ', hi: 'गुप्त साम्राज्य' },
    { num: 6, en: 'Delhi Sultanate: Slave Dynasty, Alauddin Khilji Market Reforms & Muhammad bin Tughlaq', te: 'ఢిల్లీ సుల్తానులు: బానిస వంశం, అల్లావుద్దీన్ ఖిల్జీ మార్కెట్ సంస్కరణలు & తుగ్లక్', hi: 'दिल्ली सल्तनत' },
    { num: 7, en: 'Mughal Empire: Akbar Administration (Mansabdari, Din-i-Ilahi) to Aurangzeb & Architecture', te: 'మొఘల్ సామ్రాజ్యం: అక్బర్ మన్సబ్దారీ విధానం, దీన్-ఇ-ఇలాహీ & వాస్తుశిల్పం', hi: 'मुगल साम्राज्य' },
    { num: 8, en: 'Maratha Empire: Chhatrapati Shivaji Administration, Ashta Pradhan & Guerrilla Warfare', te: 'మరాఠా సామ్రాజ్యం: ఛత్రపతి శివాజీ పరిపాలన, అష్టప్రధానులు & గెరిల్లా యుద్ధ తంత్రం', hi: 'मराठा साम्राज्य एवं छत्रपति शिवाजी' },
    { num: 9, en: 'British Colonial Expansion: Battle of Plassey (1757), Buxar (1764) & Subsidiary Alliance / Doctrine of Lapse', te: 'బ్రిటిష్ విస్తరణ: ప్లాసీ, బక్సార్ యుద్ధాలు, సైన్యసహకార పద్ధతి & రాజ్యసంక్రమణ సిద్ధాంతం', hi: 'ब्रिटिश विस्तार' },
    { num: 10, en: '1857 Sepoy Mutiny: Causes, Leaders (Mangal Pandey, Rani Lakshmibai) & Queen\'s Proclamation 1858', te: '1857 ప్రథమ స్వాతంత్ర్య సంగ్రామం: కారణాలు, నాయకులు & 1858 విక్టోరియా మహారాణి ప్రకటన', hi: '1857 का महासंग्राम' },
    { num: 11, en: 'Socio-Religious Reform Movements: Raja Ram Mohan Roy, Dayananda Saraswati, Swami Vivekananda', te: 'సాంఘిక మత సంస్కరణోద్యమాలు: రాజా రామ్మోహన్ రాయ్, దయానంద సరస్వతి, వివేకానంద', hi: 'सामाजिक-धार्मिक सुधार आंदोलन' },
    { num: 12, en: 'Indian National Congress (1885): Moderate & Extremist Eras, Partition of Bengal & Surat Split (1907)', te: 'జాతీయ కాంగ్రెస్ ఆవిర్భావం: మితవాద, అతివాద యుగాలు, వంగభంగం & సూరత్ చీలిక', hi: 'भारतीय राष्ट्रीय कांग्रेस' },
    { num: 13, en: 'Gandhian Mass Movements: Non-Cooperation (1920), Civil Disobedience (1930) & Quit India Movement (1942)', te: 'గాంధీజీ జాతీయోద్యమాలు: సహాయ నిరాకరణ, శాసనోల్లంఘన & క్విట్ ఇండియా ఉద్యమం', hi: 'गांधीवादी जन आंदोलन' },
    { num: 14, en: 'Revolutionary Freedom Fighters: Bhagat Singh, Chandrashekhar Azad & Subhash Chandra Bose (INA)', te: 'విప్లవ వీరులు: భగత్ సింగ్, చంద్రశేఖర్ ఆజాద్ & సుభాష్ చంద్రబోస్ (ఆజాద్ హింద్ ఫౌజ్)', hi: 'क्रांतिकारी आंदोलन' },
    { num: 15, en: 'Andhra Freedom Struggle: Alluri Sitarama Raju, Tanguturi Prakasam Pantulu & Duggirala Gopalakrishnayya', te: 'ఆంధ్ర స్వాతంత్ర్యోద్యమం: అల్లూరి, టంగుటూరి ప్రకాశం పంతులు (ఆంధ్రకేసరి), దుగ్గిరాల', hi: 'आंध्र प्रदेश का स्वतंत्रता संग्राम' },
    { num: 16, en: 'Statehood Movements: Potti Sreeramulu Sacrifice, Andhra State 1953 & AP Bifurcation Milestones', te: 'ఆంధ్ర రాష్ట్ర సాధన: పొట్టి శ్రీరాములు త్యాగం, కర్నూలు రాజధాని & 26 జిల్లాల పునర్వ్యవస్థీకరణ', hi: 'आंध्र राज्य गठन एवं जिले' }
  ];

  const historyTopics: Topic[] = historyTopicsData.map((item, idx) => ({
    id: `pol-hist-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'police-history',
    courseId: 'ap-police-si-pc',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Chronological landmarks, freedom struggle battles, and Andhra heritage for ${item.en}.`,
    shortDescTe: `${item.te} పై పోలీస్ రిక్రూట్‌మెంట్ పరీక్షల కొరకు చారిత్రక అంశాలు & బిట్స్.`,
    shortDescHi: `${item.en} - भारतीय एवं आंध्र प्रदेश का इतिहास।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (2-3 Marks)',
    content: {
      overview: `Detailed historical analysis of ${item.en} aligned with standard UPSC/APPSC police examination syllabi.`,
      overviewTe: `${item.te} అనేది భారతదేశ మరియు ఆంధ్రప్రదేశ్ చరిత్ర విభాగంలో అత్యంత ప్రాధాన్యత గల అధ్యాయం.`,
      sections: [
        {
          title: `1. Historical Events & Chronology: ${item.en}`,
          titleTe: `1. చారిత్రక పరిణామాలు & ప్రాముఖ్యత: ${item.te}`,
          paragraphs: [
            `Detailed factual narrative of ${item.en} covering key personalities, major battles, peace pacts, and social impacts.`,
            `Follows authentic national and state history curriculum.`
          ],
          paragraphsTe: [
            `ఈ విభాగంలో జాతీయోద్యమ ఘట్టాలు, ప్రముఖ నాయకుల పాత్ర మరియు ఆంధ్రప్రదేశ్ చారిత్రక మైలురాళ్లు వివరించబడ్డాయి.`
          ],
          keyPoints: [
            `Covers prominent dates, historical treaties, and freedom struggle leaders.`,
            `Highlights Andhra-specific regional contributions.`
          ],
          keyPointsTe: [
            `ఆంధ్రకేసరి టంగుటూరి ప్రకాశం పంతులు మరియు అల్లూరి సీతారామరాజు విప్లవ పోరాటాలు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'History & AP Heritage' },
        { label: 'Target Exam', val: 'AP Police SI / PC' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'చరిత్ర & సంస్కృతి' },
        { label: 'పరీక్ష', val: 'APSLPRB SI/PC' }
      ],
      revisionPoints: [
        `Memorize battle years (Plassey 1757, Buxar 1764, 1857 Revolt) and Andhra State formation dates.`
      ],
      revisionPointsTe: [
        `ముఖ్య యుద్ధాల సంవత్సరాలు మరియు ఆంధ్ర రాష్ట్రం ఏర్పడిన తేదీ (1953 అక్టోబర్ 1) పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `pol-hist-q-${idx + 1}`,
        topicId: `pol-hist-${String(idx + 1).padStart(2, '0')}`,
        question: `Who earned the title "Andhra Kesari" (Lion of Andhra) during the Simon Commission protests in Madras?`,
        questionTe: `మద్రాసులో సైమన్ కమిషన్ వ్యతిరేక నిరసనలలో ధైర్యంగా తుపాకీ గుండెలకు ఎదురొడ్డి "ఆంధ్రకేసరి" బిరుదు పొందిన మహనీయుడు ఎవరు?`,
        options: [
          `Tanguturi Prakasam Pantulu`,
          `Potti Sreeramulu`,
          `Kandukuri Veeresalingam`,
          `Alluri Sitarama Raju`
        ],
        optionsTe: [
          `టంగుటూరి ప్రకాశం పంతులు`,
          `పొట్టి శ్రీరాములు`,
          `కందుకూరి వీరేశలింగం`,
          `అల్లూరి సీతారామరాజు`
        ],
        correctIndex: 0,
        explanation: `Tanguturi Prakasam Pantulu defied British bayonets during the Simon Commission boycott in 1928, earning the title "Andhra Kesari". He became the first Chief Minister of Andhra State in 1953.`,
        referenceAct: 'AP Freedom Struggle Standard Biography'
      }
    ]
  }));

  // Subject 5: Indian Polity, Criminal Law Basics & Police Administration (16 Topics)
  const lawTopicsData = [
    { num: 1, en: 'Indian Constitution: Preamble, Fundamental Rights (Art 12-35) & Fundamental Duties (Art 51A)', te: 'భారత రాజ్యాంగం: ప్రవేశిక, ప్రాథమిక హక్కులు & ప్రాథమిక విధులు', hi: 'भारतीय संविधान एवं मूल अधिकार' },
    { num: 2, en: 'Union & State Judiciary: Supreme Court, High Court of AP & Writ Jurisdiction (Art 32 & 226)', te: 'న్యాయవ్యవస్థ: సుప్రీంకోర్టు, ఏపీ హైకోర్టు & రిట్ అధికారాలు', hi: 'सर्वोच्च न्यायालय एवं उच्च न्यायालय' },
    { num: 3, en: 'Bharatiya Nyaya Sanhita (BNS) / IPC: General Exceptions (Private Defence, Insanity, Infancy)', te: 'భారతీయ న్యాయ సంహిత (BNS) / IPC: సాధారణ మినహాయింపులు (ఆత్మరక్షణ హక్కు, మతిస్థిమితం లేకపోవుట)', hi: 'भारतीय न्याय संहिता (BNS) एवं अपवाद' },
    { num: 4, en: 'BNS / IPC Offenses Against Human Body: Culpable Homicide, Murder, Kidnapping & Hurt', te: 'మానవ శరీరంపై నేరాలు: ఉద్దేశపూర్వక నరహత్య, హత్య, కిడ్నాపింగ్ & గాయపరచుట', hi: 'मानव शरीर के विरुद्ध अपराध' },
    { num: 5, en: 'BNS / IPC Offenses Against Property: Theft, Extortion, Robbery, Dacoity & Cheating', te: 'ఆస్తి సంబంధిత నేరాలు: దొంగతనం, బలవంతపు వసూలు (Extortion), దోపిడీ, దరోడా & మోసం', hi: 'सम्पत्ति के विरुद्ध अपराध (चोरी, डकैती)' },
    { num: 6, en: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) / CrPC: Cognizable vs Non-Cognizable Offenses & FIR', te: 'BNSS / CrPC: కాగ్నిజబుల్ & నాన్-కాగ్నిజబుల్ నేరాలు, ప్రథమ సమాచార నివేదిక (FIR నమోదు)', hi: 'एफआईआर एवं संज्ञेय अपराध' },
    { num: 7, en: 'Arrest of Persons, Rights of Arrested Persons, Search Warrants & Seizure Rules', te: 'వ్యక్తుల అరెస్టు నియమాలు, అరెస్టయిన వ్యక్తి హక్కులు (ఆర్టికల్ 22) & సెర్చ్ వారెంట్లు', hi: 'गिरफ्तारी एवं तलाशी के नियम' },
    { num: 8, en: 'Bail Provisions: Bailable Offenses, Non-Bailable Offenses & Anticipatory Bail Procedures', te: 'బెయిల్ నిబంధనలు: బెయిలబుల్, నాన్-బెయిలబుల్ నేరాలు & ముందస్తు బెయిల్ (Anticipatory Bail)', hi: 'जमानत एवं अग्रिम जमानत' },
    { num: 9, en: 'Bharatiya Sakshya Adhiniyam (BSA) / Evidence Act: Relevant Facts, Confessions & Section 65B Electronic Evidence', te: 'భారతీయ సాక్ష్య అధినియమం (BSA): సాక్ష్యాల ప్రామాణికత, ఒప్పుకోలు & ఎలక్ట్రానిక్ సాక్ష్యాలు', hi: 'साक्ष्य अधिनियम एवं डिजिटल साक्ष्य' },
    { num: 10, en: 'Protection of Children from Sexual Offences (POCSO Act, 2012): Key Mandatory Provisions', te: 'పోక్సో (POCSO) చట్టం 2012: బాలల లైంగిక వేధింపుల నిరోధం & పోలీసుల బాధ్యతలు', hi: 'पॉक्सो अधिनियम 2012' },
    { num: 11, en: 'Protection of Women from Domestic Violence Act 2005 & Section 498A Protections', te: 'గృహహింస నిరోధక చట్టం 2005 & మహిళా సంరక్షణ చట్టాలు', hi: 'घरेलू हिंसा अधिनियम' },
    { num: 12, en: 'Information Technology Act, 2000: Cyber Crimes, Phishing, Identity Theft & Digital Forensic Basics', te: 'సమాచార సాంకేతిక చట్టం (IT Act 2000): సైబర్ నేరాలు, ఫిషింగ్, గుర్తింపు దొంగతనం & డిజిటల్ ఫోరెన్సిక్స్', hi: 'साइबर अपराध एवं आईटी एक्ट' },
    { num: 13, en: 'Motor Vehicles (Amendment) Act: Traffic Violations, Drunk Driving, Penalties & Golden Hour Care', te: 'మోటారు వాహనాల చట్టం: ట్రాఫిక్ నిబంధనలు, డ్రంక్ అండ్ డ్రైవ్, జరిమానాలు & రోడ్డు భద్రత', hi: 'मोटर वाहन अधिनियम एवं यातायात नियम' },
    { num: 14, en: 'Police Hierarchy & Administration: DGP to Constable Ranks, Police Station Registers & Case Diary', te: 'పోలీస్ పాలనా వ్యవస్థ: హోదాలు (DGP నుండి కానిస్టేబుల్ వరకు), స్టేషన్ రికార్డులు & కేస్ డైరీ', hi: 'पुलिस प्रशासनिक संरचना' },
    { num: 15, en: 'Community Policing, Disha App, Cyber Mithra & AP Police Modernisation Initiatives', te: 'కమ్యూనిటీ పోలీసింగ్, దిశ యాప్, సైబర్ మిత్ర & ఏపీ పోలీస్ ఆధునికీకరణ', hi: 'दिशा ऐप एवं आधुनिक पुलिसिंग' },
    { num: 16, en: 'Human Rights in Police Procedures, Custodial Violence Guidelines (D.K. Basu Judgment)', te: 'పోలీస్ విధుల్లో మానవ హక్కులు, లాకప్ మరణాల నివారణ & డి.కె. బసు సుప్రీంకోర్టు మార్గదర్శకాలు', hi: 'मानवाधिकार एवं डी.के. बसु दिशानिर्देश' }
  ];

  const lawTopics: Topic[] = lawTopicsData.map((item, idx) => ({
    id: `pol-law-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'police-law',
    courseId: 'ap-police-si-pc',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Statutory sections, Supreme Court custodial guidelines, and police administration procedures for ${item.en}.`,
    shortDescTe: `${item.te} పై పోలీస్ రిక్రూట్‌మెంట్ కొరకు చట్టాలు, శాంతిభద్రతల నిర్వహణ & పోలీస్ ప్రొసీజర్ నోట్స్.`,
    shortDescHi: `${item.en} - कानून एवं पुलिस प्रशासन संबंधी नियम।`,
    readTimeMinutes: 12,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks in SI/PC)',
    content: {
      overview: `Practical police operational legal guide for ${item.en} covering constitutional rights, criminal procedural laws, and landmark Supreme Court verdicts.`,
      overviewTe: `${item.te} అనేది పోలీస్ ఉద్యోగార్థులకు అత్యంత అవసరమైన న్యాయ, పరిపాలనా విభాగం.`,
      sections: [
        {
          title: `1. Legal Sections & Police Operational Procedures: ${item.en}`,
          titleTe: `1. చట్ట నిబంధనలు & పోలీస్ విధి నిర్వహణ విధానం: ${item.te}`,
          paragraphs: [
            `Detailed analysis of ${item.en} in accordance with new criminal laws (BNS, BNSS, BSA) and constitutional safeguards.`,
            `Examines FIR registration protocols, search and seizure rules, and human rights compliance.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో ఎఫ్ఐఆర్ (FIR) నమోదు, అరెస్ట్ నియమాలు, బెయిల్ విధానాలు మరియు సుప్రీంకోర్టు తీర్పుల మార్గదర్శకాలు స్పష్టంగా అందించబడ్డాయి.`
          ],
          keyPoints: [
            `Examines landmark D.K. Basu custodial guidelines.`,
            `Covers women and child safety statutes (POCSO, Domestic Violence, Disha).`
          ],
          keyPointsTe: [
            `డి.కె. బసు వర్సెస్ స్టేట్ ఆఫ్ వెస్ట్ బెంగాల్ (1997) అరెస్ట్ మార్గదర్శకాలు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Criminal Law & Police Admin' },
        { label: 'Target Exam', val: 'AP Police SI / PC' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'పోలీస్ పాలన & చట్టాలు' },
        { label: 'పరీక్ష', val: 'APSLPRB SI/PC' }
      ],
      revisionPoints: [
        `Review FIR filing section, rights of arrested persons under Article 22, and D.K. Basu memo requirements.`
      ],
      revisionPointsTe: [
        `అరెస్ట్ మెమో తయారీ, బంధువులకు సమాచారం అందించడం మరియు 24 గంటల్లో మేజిస్ట్రేట్ ముందు హాజరుపరచడం పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `pol-law-q-${idx + 1}`,
        topicId: `pol-law-${String(idx + 1).padStart(2, '0')}`,
        question: `In which landmark judgment did the Supreme Court lay down mandatory guidelines for police regarding the arrest and detention of persons?`,
        questionTe: `పోలీసులు వ్యక్తులను అరెస్టు చేసే సమయంలో పాటించవలసిన తప్పనిసరి నిబంధనలను సుప్రీంకోర్టు ఏ చారిత్రాత్మక కేసులో నిర్దేశించింది?`,
        options: [
          `D.K. Basu vs State of West Bengal (1997)`,
          `Maneka Gandhi vs Union of India (1978)`,
          `Kesavananda Bharati vs State of Kerala (1973)`,
          `Vishaka vs State of Rajasthan (1997)`
        ],
        optionsTe: [
          `డి.కె. బసు వర్సెస్ స్టేట్ ఆఫ్ వెస్ట్ బెంగాల్ (1997)`,
          `మేనకా గాంధీ వర్సెస్ యూనియన్ ఆఫ్ ఇండియా (1978)`,
          `కేశవానంద భారతి వర్సెస్ కేరళ (1973)`,
          `విశాఖ వర్సెస్ రాజస్థాన్ (1997)`
        ],
        correctIndex: 0,
        explanation: `In D.K. Basu vs State of West Bengal (1997), the Supreme Court laid down 11 mandatory guidelines including displaying identification tags, preparing an arrest memo, and medical examination of the arrestee.`,
        referenceAct: 'Supreme Court Landmark Custodial Ruling 1997'
      }
    ]
  }));

  // Total topics = 16 (Quant) + 16 (Reasoning) + 16 (Science) + 16 (History) + 16 (Law & Polity) = 80 Topics!
  return [
    {
      id: 'police-quant',
      courseId: 'ap-police-si-pc',
      name: 'Arithmetic & Quantitative Aptitude',
      nameTe: 'అంకగణితం & క్వాంటిటేటివ్ ఆప్టిట్యూడ్',
      nameHi: 'अंकगणित एवं संख्यात्मक अभियोग्यता',
      icon: 'Calculator',
      totalHours: 25,
      topics: quantTopics
    },
    {
      id: 'police-reasoning',
      courseId: 'ap-police-si-pc',
      name: 'Reasoning & Mental Ability',
      nameTe: 'రీజనింగ్ & మానసిక సామర్థ్యం',
      nameHi: 'तार्किक क्षमता एवं मानसिक योग्यता',
      icon: 'Brain',
      totalHours: 25,
      topics: reasoningTopics
    },
    {
      id: 'police-science',
      courseId: 'ap-police-si-pc',
      name: 'General Science & Environmental Ecology',
      nameTe: 'జనరల్ సైన్స్ & పర్యావరణ పరిరక్షణ',
      nameHi: 'सामान्य विज्ञान एवं पर्यावरण',
      icon: 'Atom',
      totalHours: 20,
      topics: scienceTopics
    },
    {
      id: 'police-history',
      courseId: 'ap-police-si-pc',
      name: 'Indian History & AP Heritage',
      nameTe: 'భారతదేశ చరిత్ర & ఆంధ్రప్రదేశ్ వారసత్వం',
      nameHi: 'भारतीय इतिहास एवं आंध्र प्रदेश विरासत',
      icon: 'Landmark',
      totalHours: 20,
      topics: historyTopics
    },
    {
      id: 'police-law',
      courseId: 'ap-police-si-pc',
      name: 'Polity, Criminal Law Basics & Police Administration',
      nameTe: 'రాజ్యాంగం, క్రిమినల్ చట్టాలు & పోలీస్ పాలన',
      nameHi: 'संविधान, आपराधिक कानून एवं पुलिस प्रशासन',
      icon: 'Shield',
      totalHours: 25,
      topics: lawTopics
    }
  ];
}
