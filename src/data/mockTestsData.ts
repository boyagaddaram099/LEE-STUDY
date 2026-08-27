import { MockTest } from '../types';

export const MOCK_TESTS_DATA: MockTest[] = [
  {
    id: 'mock-appsc-g2-prelims-1',
    title: 'APPSC Group 2 Prelims All-AP Grand Mock Test 2026',
    titleTe: 'APPSC గ్రూప్ 2 ప్రిలిమ్స్ రాష్ట్ర స్థాయి గ్రాండ్ మాక్ టెస్ట్ 2026',
    titleHi: 'APPSC ग्रुप 2 प्रारंभिक राज्य स्तरीय ग्रैंड मॉक टेस्ट 2026',
    category: 'appsc',
    targetExam: 'APPSC Group 2 Executive & Non-Executive',
    questionsCount: 15,
    durationMinutes: 20,
    totalMarks: 15,
    negativeMarking: 0.33,
    passingMarks: 6,
    difficulty: 'Challenging',
    featured: true,
    subjectsCovered: [
      'Indian History & AP Heritage',
      'Geography of India & AP',
      'Indian Society & Polity',
      'Current Affairs (National & AP State)',
      'Mental Ability & Logical Reasoning'
    ],
    questions: [
      {
        id: 'appsc-m1-q1',
        subjectName: 'Indian History & AP Heritage',
        question: 'Under whose patronage was the famous Buddhist philosopher Acharya Nagarjuna provided residence at Sriparvata (Nagarjunakonda)?',
        questionTe: 'ప్రసిద్ధ బౌద్ధ తత్వవేత్త ఆచార్య నాగార్జునుడికి శ్రీపర్వతం (నాగార్జునకొండ) వద్ద ఎవరి ఆదరణలో విహార నివాసం నిర్మించబడింది?',
        questionHi: 'प्रसिद्ध बौद्ध दार्शनिक आचार्य नागार्जुन को श्रीपर्वत (नागार्जुनकोंडा) में किसके संरक्षण में निवास प्रदान किया गया था?',
        options: [
          'Gautamiputra Satakarni',
          'Yajna Sri Satakarni',
          'Vasishtiputra Pulumavi',
          'King Hala'
        ],
        optionsTe: [
          'గౌతమీపుత్ర శాతకర్ణి',
          'యజ్ఞశ్రీ శాతకర్ణి',
          'వాసిష్ఠీపుత్ర పులోమావి',
          'హాల చక్రవర్తి'
        ],
        optionsHi: [
          'गौतमीपुत्र शातकर्णी',
          'यज्ञश्री शातकर्णी',
          'वाशिष्ठीपुत्र पुलुमावी',
          'राजा हाल'
        ],
        correctIndex: 1,
        explanation: 'Yajna Sri Satakarni (the 27th Satavahana ruler) was a patron of Buddhism and built the Mahachaitya and multi-storeyed monastery for Acharya Nagarjuna at Sriparvata.',
        explanationTe: 'యజ్ఞశ్రీ శాతకర్ణి ఆచార్య నాగార్జునుడికి గొప్ప సమకాలికుడు మరియు పోషకుడు. ఆయన కోసం శ్రీపర్వతం వద్ద మహావిహారాన్ని నిర్మించాడు.',
        explanationHi: 'यज्ञश्री शातकर्णी बौद्ध धर्म के संरक्षक थे और उन्होंने नागार्जुन के लिए श्रीपर्वत पर विहार बनवाया।',
        referenceAct: 'APPSC AP History Paper 2'
      },
      {
        id: 'appsc-m1-q2',
        subjectName: 'Indian Society & Polity',
        question: 'Article 371-D of the Indian Constitution, which provides special provisions with respect to the State of Andhra Pradesh, was inserted by which Constitutional Amendment?',
        questionTe: 'ఆంధ్రప్రదేశ్ రాష్ట్రానికి సంబంధించి స్థానిక కేడర్ ప్రత్యేక రక్షణలను కల్పించే ఆర్టికల్ 371-D ని ఏ రాజ్యాంగ సవరణ ద్వారా చేర్చారు?',
        questionHi: 'आंध्र प्रदेश राज्य के संबंध में विशेष प्रावधान करने वाले अनुच्छेद 371-D को किस संविधान संशोधन द्वारा जोड़ा गया था?',
        options: [
          '31st Amendment Act, 1973',
          '32nd Amendment Act, 1973',
          '42nd Amendment Act, 1976',
          '44th Amendment Act, 1978'
        ],
        optionsTe: [
          '31వ రాజ్యాంగ సవరణ చట్టం, 1973',
          '32వ రాజ్యాంగ సవరణ చట్టం, 1973',
          '42వ రాజ్యాంగ సవరణ చట్టం, 1976',
          '44వ రాజ్యాంగ సవరణ చట్టం, 1978'
        ],
        optionsHi: [
          '31वां संशोधन अधिनियम, 1973',
          '32वां संशोधन अधिनियम, 1973',
          '42वां संशोधन अधिनियम, 1976',
          '44वां संशोधन अधिनियम, 1978'
        ],
        correctIndex: 1,
        explanation: 'The 32nd Constitutional Amendment Act, 1973 inserted Articles 371-D and 371-E to implement the Six-Point Formula to satisfy the aspirations of people of Andhra Pradesh regarding employment and education.',
        explanationTe: 'ఆరు సూత్రాల పథకం అమలు కొరకు 1973 లో చేసిన 32వ రాజ్యాంగ సవరణ ద్వారా ఆర్టికల్ 371-D మరియు 371-E లను భారత రాజ్యాంగంలో చేర్చారు.',
        explanationHi: '32वें संविधान संशोधन 1973 द्वारा 6-सूत्रीय फॉर्मूले को लागू करने के लिए अनुच्छेद 371-D जोड़ा गया।',
        referenceAct: '32nd Constitutional Amendment Act, 1973'
      },
      {
        id: 'appsc-m1-q3',
        subjectName: 'Geography of India & AP',
        question: 'Which is the highest peak in the Eastern Ghats located in Andhra Pradesh?',
        questionTe: 'ఆంధ్రప్రదేశ్‌లో ఉన్న తూర్పు కనుమలలో అత్యంత ఎత్తైన శిఖరం ఏది?',
        questionHi: 'आंध्र प्रदेश में स्थित पूर्वी घाट की सबसे ऊंची चोटी कौन सी है?',
        options: [
          'Mahendragiri',
          'Arma Konda (Jindhagada Peak)',
          'Ananthagiri',
          'Horsley Hills'
        ],
        optionsTe: [
          'మహేంద్రగిరి',
          'అర్మకొండ / జిందగడ శిఖరం (1690 మీ.)',
          'అనంతగిరి',
          'హార్సిలీ హిల్స్'
        ],
        optionsHi: [
          'महेंद्रगिरि',
          'अरमा कोंडा / जिंदागड़ा चोटी (1690 मी.)',
          'अनंतगिरि',
          'हॉर्सले हिल्स'
        ],
        correctIndex: 1,
        explanation: 'Arma Konda (or Jindhagada Peak) located in the Alluri Sitharama Raju district (Araku valley region) with an elevation of 1,690 metres (5,545 ft) is the highest peak in the Eastern Ghats.',
        explanationTe: 'అల్లూరి సీతారామరాజు జిల్లాలోని అరకు లోయ ప్రాంతంలో గల అర్మకొండ (జిందగడ) 1690 మీటర్ల ఎత్తుతో తూర్పు కనుమలలోనే అత్యంత ఎత్తైన శిఖరంగా గుర్తింపు పొందింది.',
        explanationHi: 'अरमा कोंडा (जिंदागड़ा) 1690 मीटर ऊंचाई के साथ पूर्वी घाट की सबसे ऊंची चोटी है।',
        referenceAct: 'AP Physical Geography Records'
      },
      {
        id: 'appsc-m1-q4',
        subjectName: 'Current Affairs (National & AP State)',
        question: 'What is the length of the coastline of Andhra Pradesh, which ranks second among all Indian states?',
        questionTe: 'భారతదేశంలో రెండవ అతిపెద్ద తీరరేఖ కలిగిన ఆంధ్రప్రదేశ్ తీరప్రాంత పొడవు సుమారు ఎంత?',
        questionHi: 'आंध्र प्रदेश की तटरेखा की कुल लंबाई लगभग कितनी है (गुजरात के बाद भारत में दूसरा)?',
        options: [
          '7516.6 km',
          '974 km',
          '820 km',
          '1050 km'
        ],
        optionsTe: [
          '7516.6 కి.మీ.',
          '974 కి.మీ.',
          '820 కి.మీ.',
          '1050 కి.మీ.'
        ],
        optionsHi: [
          '7516.6 किमी',
          '974 किमी',
          '820 किमी',
          '1050 किमी'
        ],
        correctIndex: 1,
        explanation: 'Andhra Pradesh has the second-longest coastline in India after Gujarat, spanning approximately 974 km along the Bay of Bengal.',
        explanationTe: 'గుజరాత్ తర్వాత భారతదేశంలో రెండవ అతి పొడవైన సముద్ర తీరరేఖ ఆంధ్రప్రదేశ్‌కు ఉంది. దీని పొడవు దాదాపు 974 కిలోమీటర్లు.',
        explanationHi: 'गुजरात के बाद आंध्र प्रदेश की तटरेखा 974 किमी के साथ देश में दूसरी सबसे लंबी है।',
        referenceAct: 'Survey of India / AP Socio-Economic Survey'
      },
      {
        id: 'appsc-m1-q5',
        subjectName: 'Mental Ability & Logical Reasoning',
        question: 'Find the missing number in the series: 3, 7, 15, 31, 63, ?',
        questionTe: 'శ్రేణిలోని తదుపరి సంఖ్యను గుర్తించండి: 3, 7, 15, 31, 63, ?',
        questionHi: 'श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 3, 7, 15, 31, 63, ?',
        options: [
          '125',
          '127',
          '129',
          '131'
        ],
        optionsTe: [
          '125',
          '127',
          '129',
          '131'
        ],
        optionsHi: [
          '125',
          '127',
          '129',
          '131'
        ],
        correctIndex: 1,
        explanation: 'Pattern: (3×2)+1=7, (7×2)+1=15, (15×2)+1=31, (31×2)+1=63, (63×2)+1=127. Alternatively: +4, +8, +16, +32, +64 (63+64=127).',
        explanationTe: 'సూత్రం: ప్రతి సంఖ్యను 2 తో గుణించి 1 కలపడం (63 × 2 + 1 = 127). లేదా +4, +8, +16, +32, +64 వ్యత్యాసం.',
        explanationHi: 'पैटर्न: (63 × 2) + 1 = 127।',
        referenceAct: 'Logical Number Series'
      }
    ]
  },
  {
    id: 'mock-ap-dsc-sgt-1',
    title: 'AP DSC Mega SGT & SA Pedagogy Mock Test',
    titleTe: 'AP మెగా DSC ఎస్జీటీ & స్కూల్ అసిస్టెంట్ సైకాలజీ మాక్ టెస్ట్',
    titleHi: 'AP DSC शिक्षक भर्ती मनोविज्ञान एवं शिक्षाशास्त्र मॉक टेस्ट',
    category: 'dsc',
    targetExam: 'AP DSC Teacher Recruitment 2026',
    questionsCount: 10,
    durationMinutes: 15,
    totalMarks: 10,
    negativeMarking: 0,
    passingMarks: 5,
    difficulty: 'Moderate',
    featured: true,
    subjectsCovered: [
      'Child Development & Pedagogy',
      'Perspectives in Education',
      'Classroom Management',
      'Continuous and Comprehensive Evaluation (CCE)'
    ],
    questions: [
      {
        id: 'dsc-m1-q1',
        subjectName: 'Child Development & Pedagogy',
        question: 'According to RTE Act 2009, what is the mandatory Pupil-Teacher Ratio (PTR) prescribed for Primary Schools (Classes I to V) with up to 60 students?',
        questionTe: 'విద్యా హక్కు చట్టం (RTE 2009) ప్రకారం 60 మంది విద్యార్థుల వరకు గల ప్రాథమిక పాఠశాలలకు నిర్దేశించిన ఉపాధ్యాయ-విద్యార్థి నిష్పత్తి (PTR) ఎంత?',
        questionHi: 'आरटीई अधिनियम 2009 के अनुसार 60 छात्रों तक के प्राथमिक विद्यालयों के लिए अनिवार्य छात्र-शिक्षक अनुपात क्या है?',
        options: [
          '20:1',
          '30:1 (2 Teachers up to 60 students)',
          '35:1',
          '40:1'
        ],
        optionsTe: [
          '20:1',
          '30:1 (60 మంది వరకు ఇద్దరు ఉపాధ్యాయులు)',
          '35:1',
          '40:1'
        ],
        optionsHi: [
          '20:1',
          '30:1 (60 छात्रों तक 2 शिक्षक)',
          '35:1',
          '40:1'
        ],
        correctIndex: 1,
        explanation: 'Under Schedule to the RTE Act 2009, for Primary Schools (1 to 5), PTR is 30:1 (up to 60 students = 2 teachers). For Upper Primary (6 to 8), PTR is 35:1.',
        explanationTe: 'RTE 2009 చట్టం ప్రకారం ప్రాథమిక పాఠశాలల్లో (1-5 తరగతులు) 60 మంది పిల్లల వరకు 30:1 నిష్పత్తిలో ఇద్దరు ఉపాధ్యాయులు ఉండాలి. ప్రాథమికోన్నత పాఠశాలల్లో 35:1 నిష్పత్తి ఉంటుంది.',
        explanationHi: 'आरटीई 2009 की अनुसूची के तहत प्राथमिक स्तर पर 30:1 और उच्च प्राथमिक स्तर पर 35:1 का अनुपात निर्धारित है।',
        referenceAct: 'Right of Children to Free and Compulsory Education Act, 2009'
      },
      {
        id: 'dsc-m1-q2',
        subjectName: 'Perspectives in Education',
        question: 'Who chaired the National Education Policy 2020 (NEP 2020) drafting committee?',
        questionTe: 'జాతీయ విద్యా విధానం 2020 (NEP 2020) ముసాయిదా కమిటీ చైర్మన్ ఎవరు?',
        questionHi: 'राष्ट्रीय शिक्षा नीति 2020 (NEP 2020) मसौदा समिति के अध्यक्ष कौन थे?',
        options: [
          'Dr. K. Kasturirangan',
          'Prof. Yashpal',
          'Dr. D.S. Kothari',
          'Prof. Krishna Kumar'
        ],
        optionsTe: [
          'డాక్టర్ కె. కస్తూరిరంగన్ (మాజీ ఇస్రో చైర్మన్)',
          'ప్రొఫెసర్ యశ్‌పాల్',
          'డాక్టర్ డి.ఎస్. కొఠారి',
          'ప్రొఫెసర్ కృష్ణ కుమార్'
        ],
        optionsHi: [
          'डॉ. के. कस्तूरीरंगन',
          'प्रोफेसर यशपाल',
          'डॉ. डी.एस. कोठारी',
          'प्रोफेसर कृष्ण कुमार'
        ],
        correctIndex: 0,
        explanation: 'Dr. K. Kasturirangan, eminent scientist and former ISRO chief, chaired the Committee for the Draft National Education Policy (NEP 2020) which introduced the 5+3+3+4 pedagogical structure.',
        explanationTe: 'ప్రముఖ శాస్త్రవేత్త డాక్టర్ కె. కస్తూరిరంగన్ అధ్యక్షతన NEP 2020 కమిటీ 5+3+3+4 విద్యా విధానాన్ని రూపొందించింది.',
        explanationHi: 'डॉ. के. कस्तूरीरंगन समिति ने 5+3+3+4 ढांचे वाली नई राष्ट्रीय शिक्षा नीति का मसौदा तैयार किया।',
        referenceAct: 'NEP 2020 Policy Document'
      }
    ]
  },
  {
    id: 'mock-police-si-pc-1',
    title: 'AP Police SI & Constable Prelims Speed Marathon Test',
    titleTe: 'AP పోలీస్ SI & కానిస్టేబుల్ ప్రిలిమ్స్ స్పీడ్ మారథాన్ టెస్ట్',
    titleHi: 'AP पुलिस SI और कांस्टेबल प्रारंभिक गति टेस्ट',
    category: 'police',
    targetExam: 'APSLPRB Sub-Inspector & Constable',
    questionsCount: 10,
    durationMinutes: 12,
    totalMarks: 10,
    negativeMarking: 0,
    passingMarks: 4,
    difficulty: 'Moderate',
    featured: true,
    subjectsCovered: [
      'Arithmetic & Quantitative Aptitude',
      'Reasoning & Analytical Ability',
      'Indian Constitution & General Science'
    ],
    questions: [
      {
        id: 'pol-m1-q1',
        subjectName: 'Arithmetic & Quantitative Aptitude',
        question: 'A train 180 meters long is running at a speed of 54 km/h. How much time will it take to cross a platform 270 meters long?',
        questionTe: '180 మీటర్ల పొడవు గల రైలు గంటకు 54 కి.మీ. వేగంతో ప్రయాణిస్తూ 270 మీటర్ల పొడవు గల ప్లాట్‌ఫారమ్‌ను దాటడానికి ఎంత సమయం తీసుకుంటుంది?',
        questionHi: '180 मीटर लंबी ट्रेन 54 किमी/घंटा की गति से 270 मीटर लंबे प्लेटफॉर्म को कितने समय में पार करेगी?',
        options: [
          '25 seconds',
          '30 seconds',
          '35 seconds',
          '40 seconds'
        ],
        optionsTe: [
          '25 సెకన్లు',
          '30 సెకన్లు',
          '35 సెకన్లు',
          '40 సెకన్లు'
        ],
        optionsHi: [
          '25 सेकंड',
          '30 सेकंड',
          '35 सेकंड',
          '40 सेकंड'
        ],
        correctIndex: 1,
        explanation: 'Total distance = Train length + Platform length = 180 + 270 = 450 m. Speed in m/s = 54 × (5/18) = 15 m/s. Time = Distance / Speed = 450 / 15 = 30 seconds.',
        explanationTe: 'మొత్తం దూరం = రైలు పొడవు + ప్లాట్‌ఫారమ్ = 180 + 270 = 450 మీటర్లు. వేగం m/s లో = 54 × 5/18 = 15 మీ/సె. కాలం = 450/15 = 30 సెకన్లు.',
        explanationHi: 'कुल दूरी = 180 + 270 = 450 मी। गति = 54 × (5/18) = 15 मी/से। समय = 450 / 15 = 30 सेकंड।',
        referenceAct: 'Quantitative Aptitude Speed Formulas'
      }
    ]
  }
];
