import { Subject, Topic } from '../../types';

export function getApDscTetSubjects(): Subject[] {
  // Subject 1: Child Development & Psychology (18 Topics)
  const childDevTopicsData = [
    { num: 1, en: 'Growth and Development: Concepts, Principles & Differences', te: 'పెరుగుదల మరియు వికాసం: భావనలు, వికాస సూత్రాలు & తేడాలు', hi: 'वृद्धि एवं विकास के सिद्धांत' },
    { num: 2, en: 'Jean Piaget\'s Cognitive Development Theory: 4 Stages & Educational Implications', te: 'జీన్ పియాజే సంజ్ఞానాత్మక వికాస సిద్ధాంతం: 4 దశలు & విద్యా అనువర్తనాలు', hi: 'जीन पियाजे का संज्ञानात्मक सिद्धांत' },
    { num: 3, en: 'Lev Vygotsky Socio-Cultural Theory: ZPD, Scaffolding & Private Speech', te: 'లెవ్ వైగోట్‌స్కీ సాంఘిక-సాంస్కృతిక సిద్ధాంతం: ZPD, స్కాఫోల్డింగ్', hi: 'वाइगोत्स्की का सामाजिक-सांस्कृतिक सिद्धांत' },
    { num: 4, en: 'Lawrence Kohlberg\'s Moral Development Theory: 3 Levels & 6 Stages', te: 'లారెన్స్ కోల్‌బర్గ్ నైతిక వికాస సిద్ధాంతం: 3 స్థాయిలు & 6 దశలు', hi: 'कोहलबर्ग का नैतिक विकास' },
    { num: 5, en: 'Erik Erikson\'s Psychosocial Development Theory: 8 Life Stages', te: 'ఎరిక్ ఎరిక్సన్ మనోసాంఘిక వికాస సిద్ధాంతం: 8 సంక్షోభ దశలు', hi: 'एरिक एरिकसन का मनोसामाजिक सिद्धांत' },
    { num: 6, en: 'Theories of Intelligence: Spearman Two-Factor, Gardner Multiple Intelligences', te: 'ప్రజ్ఞా సిద్ధాంతాలు: స్పియర్‌మన్ ద్వికారక, గార్డనర్ బహుళ ప్రజ్ఞా సిద్ధాంతం', hi: 'बुद्धि के सिद्धांत' },
    { num: 7, en: 'Intelligence Measurement: IQ Formulas, Stanford-Binet & Wechsler Scales', te: 'ప్రజ్ఞా మాపనం: ప్రజ్ఞా లబ్ధి (IQ) సూత్రం, బినే-సైమన్ & వెక్స్లర్ స్కేల్స్', hi: 'बुद्धि लब्धि (IQ) मापन' },
    { num: 8, en: 'Behaviorist Learning Theories: Pavlov Classical Conditioning', te: 'అభ్యసన సిద్ధాంతాలు: పావ్‌లోవ్ శాస్త్రీయ నిబంధనం & ప్రయోగాలు', hi: 'पावलोव का शास्त्रीय अनुकूलन' },
    { num: 9, en: 'B.F. Skinner\'s Operant Conditioning: Reinforcement & Schedules', te: 'బి.ఎఫ్. స్కిన్నర్ కార్యసాధక నిబంధనం: పునర్బలనం & రకాలు', hi: 'स्किनर का क्रिया प्रसूत अनुबंधन' },
    { num: 10, en: 'Edward Thorndike\'s Trial and Error Learning & Laws of Learning', te: 'ఎడ్వర్డ్ థార్న్‌డైక్ యత్నదోష అభ్యసన సిద్ధాంతం & అభ్యసన నియమాలు', hi: 'थार्नडाइक का प्रयास एवं त्रुटि सिद्धांत' },
    { num: 11, en: 'Gestalt Theory of Learning: Kohler\'s Insightful Learning Experiments', te: 'గెస్టాల్ట్ అభ్యసనం: కోహ్లర్ అంతర్దృష్టి అభ్యసన సిద్ధాంతం (చింపాంజీ సుల్తాన్)', hi: 'कोहलर का अंतर्दृष्टि सिद्धांत' },
    { num: 12, en: 'Bandura\'s Social Learning Theory & Observational Learning (Modeling)', te: 'బాండురా సాంఘిక అభ్యసన సిద్ధాంతం & పరిశీలనా అభ్యసనం (మోడలింగ్)', hi: 'बांडुरा का सामाजिक अधिगम' },
    { num: 13, en: 'Motivation in Learning: Maslow\'s Hierarchy of Needs & Achievement Motivation', te: 'అభ్యసనంలో ప్రేరణ: మాస్లో అవసరాల అనుక్రమణిక & సాధనా ప్రేరణ', hi: 'मास्लो का आवश्यकता पदानुक्रम' },
    { num: 14, en: 'Memory, Forgetting Curve (Ebbinghaus) & Transfer of Learning', te: 'స్మృతి, విస్మృతి (ఎబ్బింగ్‌హాస్ వక్రరేఖ) & అభ్యసన బదలాయింపు రకాలు', hi: 'स्मृति एवं विस्मरण' },
    { num: 15, en: 'Personality: Trait & Type Theories, Projective Techniques (TAT, Rorschach)', te: 'మూర్తిమత్త్వం: లక్షణాంశ సిద్ధాంతాలు, ప్రక్షేపక పరీక్షలు (TAT, రోర్‌షాక్ ఇంక్‌బ్లాట్)', hi: 'व्यक्तित्व मापन एवं प्रक्षेपण' },
    { num: 16, en: 'Inclusive Education: Gifted Children, Slow Learners & Learning Disabilities (Dyslexia)', te: 'సమ్మిళిత విద్య: ప్రతిభావంతులు, మందకొడి అభ్యాసకులు, డైస్లెక్సియా & ADHD', hi: 'समावेशी शिक्षा एवं अधिगम अक्षमता' },
    { num: 17, en: 'Guidance and Counselling in Schools: Types & Teacher\'s Role', te: 'పాఠశాలలో మార్గదర్శకత్వం మరియు మంత్రణం: రకాలు & ఉపాధ్యాయుని పాత్ర', hi: 'मार्गदर्शन एवं परामर्श' },
    { num: 18, en: 'Mental Health, Hygiene & Defense Mechanisms (Adjustment Mechanisms)', te: 'మానసిక ఆరోగ్యం & రక్షక తంత్రాలు (దమనం, ప్రతిగమనం, ఉదాత్తీకరణం)', hi: 'रक्षा तंत्र एवं मानसिक स्वास्थ्य' }
  ];

  const childDevTopics: Topic[] = childDevTopicsData.map((item, idx) => ({
    id: `dsc-cdp-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'dsc-pedagogy',
    courseId: 'ap-dsc-tet',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Core child psychology module with pedagogical definitions, developmental laws, and DSC/TET practice questions for ${item.en}.`,
    shortDescTe: `${item.te} పై AP DSC & TET పరీక్షల కొరకు ప్రామాణిక నోట్స్ & బిట్స్.`,
    shortDescHi: `${item.en} - बाल मनोविज्ञान एवं शिक्षण शास्त्र।`,
    readTimeMinutes: 12,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (4-5 Marks in DSC)',
    content: {
      overview: `Detailed psychological framework of ${item.en} designed specifically for AP Mega DSC (SGT / School Assistant) and AP TET examinations.`,
      overviewTe: `${item.te} ఉపాధ్యాయ అర్హత పరీక్ష (TET) మరియు డీఎస్సీ (DSC) లో గరిష్ట మార్కులు సాధించడానికి అత్యంత కీలకమైన అధ్యాయం.`,
      sections: [
        {
          title: `1. Principles & Classroom Applications: ${item.en}`,
          titleTe: `1. సిద్ధాంత మూలాలు & తరగతి గది అనువర్తనం: ${item.te}`,
          paragraphs: [
            `Understanding ${item.en} enables educators to cater effectively to diverse learning styles and developmental milestones of school students.`,
            `Key experiments, terminologies, and real-life classroom situational questions are thoroughly analyzed.`
          ],
          paragraphsTe: [
            `ఈ అధ్యయనంలో పిల్లల ప్రవర్తన, అభ్యసన ప్రక్రియ మరియు మానసిక వికాసాన్ని సమగ్రంగా వివరించడం జరిగింది.`,
            `గత DSC మరియు TET పరీక్షలలో అడిగిన అనువర్తిత ప్రశ్నలను దృష్టిలో ఉంచుకొని ముఖ్యాంశాలు సిద్ధం చేయబడ్డాయి.`
          ],
          keyPoints: [
            `Covers foundational psychologists, definitions, experiments, and stages.`,
            `Equips teachers with pedagogical strategies for inclusive classrooms.`
          ],
          keyPointsTe: [
            `ప్రముఖ మనోవిజ్ఞానవేత్తల సిద్ధాంతాలు మరియు తరగతి గది అన్వయాలు.`,
            `పరీక్షలలో తరచుగా వచ్చే అనువర్తిత (Application-based) ప్రశ్నల విశ్లేషణ.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Child Development & Pedagogy' },
        { label: 'Exam Focus', val: 'AP DSC / TET (30 Marks)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'శిశు వికాసం & బోధనా శాస్త్రం' },
        { label: 'మార్కులు', val: '30 మార్కులు' }
      ],
      revisionPoints: [
        `Memorize psychologist names, stages, age groups, and key terms.`
      ],
      revisionPointsTe: [
        `వికాస దశలు, ప్రయోగ జంతువులు, మరియు సిద్ధాంత ప్రతిపాదకుల పేర్లను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `dsc-cdp-q-${idx + 1}`,
        topicId: `dsc-cdp-${String(idx + 1).padStart(2, '0')}`,
        question: `Which is the primary characteristic of ${item.en.split(':')[0]} in child psychology?`,
        questionTe: `శిశు మనోవిజ్ఞాన శాస్త్రంలో ${item.te.split(':')[0]} యొక్క ముఖ్య లక్షణం ఏది?`,
        options: [
          `Systematic qualitative and progressive behavioral transformation`,
          `Purely arbitrary physiological measurement without order`,
          `Unconscious reflex action with no cognitive basis`,
          `None of the above`
        ],
        optionsTe: [
          `క్రమబద్ధమైన, గుణాత్మక మరియు ప్రగతిశీల ప్రవర్తనా పరివర్తన`,
          `ఎటువంటి క్రమం లేని శారీరక మార్పు మాత్రమే`,
          `జ్ఞానంతో సంబంధం లేని ప్రతిచర్య`,
          `పైవేవీ కావు`
        ],
        correctIndex: 0,
        explanation: `Educational psychology emphasizes systematic, sequential, and holistic development of children.`,
        referenceAct: 'Telugu Akademi Child Development Standard Reference'
      }
    ]
  }));

  // Subject 2: Perspectives in Education & Policy (16 Topics)
  const perspectivesTopicsData = [
    { num: 1, en: 'History of Education in India: Ancient, Medieval & British Period (Macaulay, Wood\'s Despatch)', te: 'భారతదేశంలో విద్య పరిణామ క్రమం: ప్రాచీన, మధ్యయుగ & బ్రిటిష్ విద్య (మెకాలే, వుడ్స్ డిస్పాచ్ 1854)', hi: 'भारतीय शिक्षा का इतिहास' },
    { num: 2, en: 'Post-Independence Educational Commissions: Radhakrishnan, Mudaliar & Kothari Commission (1964-66)', te: 'స్వాతంత్ర్యోద్యమానంతర విద్యా కమిషన్లు: రాధాకృష్ణన్, మొదలియార్ & కొఠారి కమిషన్ (10+2+3)', hi: 'कोठारी आयोग एवं शिक्षा आयोग' },
    { num: 3, en: 'National Policy on Education 1986 & Programme of Action (POA 1992)', te: 'జాతీయ విద్యా విధానం NPE 1986 & కార్యాచరణ ప్రణాళిక POA 1992 (ఆపరేషన్ బ్లాక్ బోర్డ్)', hi: 'राष्ट्रीय शिक्षा नीति 1986' },
    { num: 4, en: 'National Education Policy 2020 (NEP 2020): Structure (5+3+3+4), Principles & Goals', te: 'జాతీయ విద్యా విధానం NEP 2020: 5+3+3+4 నూతన విద్యా నిర్మాణం, లక్ష్యాలు', hi: 'राष्ट्रीय शिक्षा नीति 2020 (NEP 2020)' },
    { num: 5, en: 'Right to Education Act, 2009 (RTE Act): Key Sections, 25% Reservation & Teacher Pupil Ratio (PTR)', te: 'ఉచిత నిర్బంధ విద్య హక్కు చట్టం 2009 (RTE): ముఖ్య సెక్షన్లు, PTR నిష్పత్తి (1:30)', hi: 'शिक्षा का अधिकार अधिनियम 2009 (RTE)' },
    { num: 6, en: 'National Curriculum Framework (NCF 2005) & State Curriculum Framework (SCF 2011)', te: 'జాతీయ పాఠ్యప్రణాళిక చట్రం (NCF 2005) & రాష్ట్ర పాఠ్యప్రణాళిక చట్రం (SCF 2011)', hi: 'राष्ट्रीय पाठ्यचर्या रूपरेखा (NCF 2005)' },
    { num: 7, en: 'Continuous and Comprehensive Evaluation (CCE): Formative Assessment & Summative Assessment', te: 'నిరంతర సమగ్ర మూల్యాంకనం (CCE): నిర్మాణాత్మక (FA) & సంగ్రహణాత్మక (SA) మూల్యాంకనం', hi: 'सतत एवं व्यापक मूल्यांकन (CCE)' },
    { num: 8, en: 'POCSO Act, 2012 & Child Rights Protection in Andhra Pradesh Schools', te: 'పోక్సో (POCSO) చట్టం 2012 & పాఠశాలల్లో బాలల హక్కుల పరిరక్షణ', hi: 'पॉक्सो अधिनियम 2012' },
    { num: 9, en: 'AP Government Educational Initiatives: Mana Badi Nadu-Nedu & Smart Classrooms', te: 'ఏపీ ప్రభుత్వ విద్యా సంస్కరణలు: మన బడి నాడు-నేడు & IFP డిజిటల్ ప్యానెల్స్', hi: 'आंध्र प्रदेश शिक्षा सुधार' },
    { num: 10, en: 'Jagananna Amma Vodi, Vidya Kanuka & Gorumudda (Mid Day Meal Model)', te: 'అమ్మ ఒడి, జగనన్న విద్యా కానుక & గోరుముద్ద (మధ్యాహ్న భోజన పథకం)', hi: 'अम्मा वोडी एवं विद्या कानुका' },
    { num: 11, en: 'Teacher Professional Ethics, Code of Conduct & Continuous Professional Development (CPD)', te: 'ఉపాధ్యాయ వృత్తిపరమైన నైతిక విలువలు & నిరంతర వృత్తి నైపుణ్యాల పెంపుదల', hi: 'शिक्षक व्यावसायिक नैतिकता' },
    { num: 12, en: 'School Management Committees (SMC): Formation, Powers & Community Participation', te: 'పాఠశాల యాజమాన్య కమిటీలు (SMC): నిర్మాణం, విధులు & సమాజ భాగస్వామ్యం', hi: 'विद्यालय प्रबंधन समिति (SMC)' },
    { num: 13, en: 'Early Childhood Care and Education (ECCE) & Foundational Literacy and Numeracy (FLN)', te: 'పూర్వ ప్రాథమిక విద్య (ECCE) & ప్రాథమిక అక్షరాస్యత - సంఖ్యాజ్ఞానం (FLN నిపుణ్ భారత్)', hi: 'प्रारंभिक बाल्यावस्था देखभाल (ECCE)' },
    { num: 14, en: 'ICT in Education, DIKSHA Portal, PM eVIDYA & Digital Pedagogy', te: 'విద్యలో సమాచార సాంకేతికత (ICT), దీక్ష (DIKSHA) పోర్టల్ & డిజిటల్ బోధన', hi: 'शिक्षा में आईसीटी एवं दीक्षा' },
    { num: 15, en: 'Environmental Education, Peace Education & Value-Oriented Learning', te: 'పర్యావరణ విద్య, శాంతి విద్య & విలువల ఆధారిత అభ్యసనం', hi: 'पर्यावरण एवं मूल्य शिक्षा' },
    { num: 16, en: 'Gender Sensitivity, Inclusive Classrooms & Special Needs Children (CWSN)', te: 'లింగ సమానత్వ స్పృహ & ప్రత్యేక అవసరాలు గల పిల్లల (CWSN) బోధన', hi: 'समावेशी शिक्षा एवं विशेष आवश्यकता' }
  ];

  const perspectivesTopics: Topic[] = perspectivesTopicsData.map((item, idx) => ({
    id: `dsc-pie-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'dsc-perspectives',
    courseId: 'ap-dsc-tet',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Educational acts, policy frameworks, and teacher role analysis for ${item.en}.`,
    shortDescTe: `${item.te} పై విద్యా దృక్పథాలు (Perspectives in Education) సమగ్ర నోట్స్.`,
    shortDescHi: `${item.en} - शिक्षा में दृष्टिकोण एवं नीतियां।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (2-3 Marks)',
    content: {
      overview: `Systematic examination guide on ${item.en} covering statutory provisions, historical milestones, and AP government reforms.`,
      overviewTe: `${item.te} అనేది AP DSC లో విద్యా దృక్పథాల విభాగంలో అత్యంత కీలకమైన అంశం.`,
      sections: [
        {
          title: `1. Policy Framework & Statutory Guidelines: ${item.en}`,
          titleTe: `1. విద్యా చట్టాలు మరియు మార్గదర్శకాలు: ${item.te}`,
          paragraphs: [
            `Detailed legal analysis of ${item.en} in accordance with official NCTE and AP SCERT guidelines.`,
            `Covers teacher responsibilities, committee recommendations, and state welfare initiatives.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో చట్టబద్ధమైన నిబంధనలు, విద్యా కమిషన్ల సిఫార్సులు మరియు పాఠశాల అభివృద్ధిలో ఉపాధ్యాయుని పాత్ర సమగ్రంగా వివరించబడింది.`
          ],
          keyPoints: [
            `Covers statutory sections of RTE 2009 and key pillars of NEP 2020.`,
            `Examines AP educational flagship welfare schemes.`
          ],
          keyPointsTe: [
            `RTE 2009 చట్టం మరియు NEP 2020 లోని ప్రాధాన్యతా అంశాలు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Perspectives in Education' },
        { label: 'Target Exam', val: 'AP DSC / TET' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'విద్యా దృక్పథాలు' },
        { label: 'పరీక్ష', val: 'AP DSC / TET' }
      ],
      revisionPoints: [
        `Review Act enactment years, Section numbers, and pupil-teacher ratio norms.`
      ],
      revisionPointsTe: [
        `చట్టాలు అమల్లోకి వచ్చిన తేదీలు మరియు ఉపాధ్యాయ-విద్యార్థి నిష్పత్తులను గుర్తుంచుకోండి.`
      ]
    },
    questions: [
      {
        id: `dsc-pie-q-${idx + 1}`,
        topicId: `dsc-pie-${String(idx + 1).padStart(2, '0')}`,
        question: `According to RTE Act 2009, what is the mandated Pupil-Teacher Ratio (PTR) for primary schools up to 60 students?`,
        questionTe: `విద్యా హక్కు చట్టం 2009 ప్రకారం ప్రాథమిక పాఠశాలల్లో 60 మంది వరకు విద్యార్థులకు ఉండాల్సిన ఉపాధ్యాయ-విద్యార్థి నిష్పత్తి ఎంత?`,
        options: [
          `30:1 (2 Teachers for up to 60 students)`,
          `40:1`,
          `50:1`,
          `20:1`
        ],
        optionsTe: [
          `30:1 (60 మంది వరకు ఇద్దరు ఉపాధ్యాయులు)`,
          `40:1`,
          `50:1`,
          `20:1`
        ],
        correctIndex: 0,
        explanation: `Under the Schedule of RTE Act 2009, the primary school PTR is 30:1 with at least 2 teachers for up to 60 admitted children.`,
        referenceAct: 'Right of Children to Free and Compulsory Education Act, 2009'
      }
    ]
  }));

  // Subject 3: Telugu Language & Methodology (16 Topics)
  const teluguTopicsData = [
    { num: 1, en: 'Telugu Varnamala: Achulu, Hallulu, Ubhayaksharalu & Utpatti Sthanams', te: 'తెలుగు వర్ణమాల: అచ్చులు, హల్లులు, ఉభయాక్షరాలు & ధ్వనుల ఉత్పత్తి స్థానాలు', hi: 'तेलुगु वर्णमाला' },
    { num: 2, en: 'Telugu Sandhulu: Telugu Sandhulu (Akaradi, Gasadadavadesha) & Samskruta Sandhulu (Savarnadeergha, Guna, Vriddhi)', te: 'సంధులు: తెలుగు సంధులు (అత్వ, ఇత్వ, ఉత్వ, గసడదవాదేశ) & సంస్కృత సంధులు', hi: 'संधि प्रकरण' },
    { num: 3, en: 'Samasalu: Tatpurusha, Karmadharaya, Dvigvu, Dvandva & Bahuvrihi', te: 'సమాసాలు: తత్పురుష, కర్మధారయ, ద్విగు, ద్వంద్వ & బహువ్రీహి సమాసాలు', hi: 'समास' },
    { num: 4, en: 'Chandassu: Vrittalu (Utpalamala, Champakamala, Shardulam, Mattebham) & Jatulalu/Upajatulu', te: 'ఛందస్సు: వృత్తాలు (ఉత్పలమాల, చంపకమాల, శార్దూలం, మత్తేభం) & జాతులు/ఉపజాతులు', hi: 'छंद शास्त्र' },
    { num: 5, en: 'Alankaralu: Shabdalankaralu (Vrittyanuprasa, Chekanuprasa) & Arthalankaralu (Upama, Utpreksha, Rupaka)', te: 'అలంకారాలు: శబ్దాలంకారాలు (వృత్త్యానుప్రాస, ఛేక) & అర్థాలంకారాలు (ఉపమ, రూపక, ఉత్ప్రేక్ష)', hi: 'अलंकार' },
    { num: 6, en: 'Telugu Sahitya Prakriyalu: Kavyam, Prabandham, Ithihasam, Shatakam, Natakam', te: 'సాహిత్య ప్రక్రియలు: కావ్యము, ప్రబంధము, ఇతిహాసము, శతకము, నాటకము & నవల', hi: 'साहित्य विधाएं' },
    { num: 7, en: 'Bhasha Koushalalu: Shravanam (Listening), Bhashanam (Speaking), Patanam (Reading), Lekhanam (Writing)', te: 'భాషా నైపుణ్యాలు (LSRW): శ్రవణం, భాషణం, పఠనం, లేఖనం వికాసం', hi: 'भाषा कौशल (LSRW)' },
    { num: 8, en: 'Telugu Bodhana Lakshyalu & Spashtatalu (Bloom\'s Revised Taxonomy)', te: 'తెలుగు బోధనా లక్ష్యాలు & స్పష్టీకరణలు (జ్ఞాన, అవగాహన, వినియోగ, నైపుణ్యాలు)', hi: 'शिक्षण उद्देश्य' },
    { num: 9, en: 'Telugu Pathyapustakam: Lakshanalu, Nirmanam & Pathanalayam (Library)', te: 'తెలుగు పాఠ్యపుస్తకం: లక్షణాలు, నిర్మాణం & పాఠశాల గ్రంథాలయం ప్రాముఖ్యత', hi: 'पाठ्यपुस्तक निर्माण' },
    { num: 10, en: 'Bodhana Abhyasana Samagri (TLM) & ICT Sadhanalu in Telugu Teaching', te: 'బోధనోపకరణాలు (TLM) & తెలుగు బోధనలో సమాచార సాంకేతిక సాధనాలు', hi: 'शिक्षण सहायक सामग्री (TLM)' },
    { num: 11, en: 'Vidya Pranalika: Year Plan, Unit Plan & Period Plan (Lesson Plan Construction)', te: 'విద్యా ప్రణాళిక రచన: వార్షిక ప్రణాళిక, యూనిట్ ప్లాన్ & పాఠ్యపథకం (Lesson Plan) తయారీ', hi: 'पाठ योजना निर्माण' },
    { num: 12, en: 'Padyabodhana, Gadyabodhana, Vyakaranabodhana Paddhatulu', te: 'పద్యబోధన, గద్యబోధన, వ్యాకరణబోధన పద్ధతులు (ఆగమన, నిగమన పద్ధతులు)', hi: 'पद्य एवं गद्य शिक्षण' },
    { num: 13, en: 'Telugu Mulyankananam: Diagnostic Testing & Remedial Teaching (Nivarana Bodhana)', te: 'తెలుగు మూల్యాంకనం: లోపనిదాన పరీక్ష & నివారణ బోధన (Remedial Teaching)', hi: 'निदानात्मक एवं उपचारात्मक शिक्षण' },
    { num: 14, en: 'Andhra Bhasha Charitra, Sasana Sahityam & Kavitrayam (Nannaya, Tikkana, Yerrapragada)', te: 'భాషా చరిత్ర, శాసన సాహిత్య వికాసం & కవిత్రయం (నన్నయ, తిక్కన, ఎర్రన)', hi: 'तेलुगु साहित्य का इतिहास' },
    { num: 15, en: 'Vyavaharika Bhasha Udyamam: Gidugu Ramamurthy & Bhasha Samskaranalu', te: 'వ్యవహారిక భాషా ఉద్యమం: గిడుగు రామ్మూర్తి & భాషా సంస్కరణలు', hi: 'व्यावहारिक भाषा आंदोलन' },
    { num: 16, en: 'Janapada Sahityam, Sametalu, Jateeyalu & Podupu Kathalu in AP Culture', te: 'జానపద సాహిత్యం, సామెతలు, జాతీయాలు & పొడుపు కథలు', hi: 'लोक साहित्य एवं मुहावरे' }
  ];

  const teluguTopics: Topic[] = teluguTopicsData.map((item, idx) => ({
    id: `dsc-tel-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'dsc-telugu',
    courseId: 'ap-dsc-tet',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Telugu grammar rules, literary periods, and pedagogy methodology for ${item.en}.`,
    shortDescTe: `${item.te} పై DSC / TET కొరకు సంపూర్ణ వ్యాకరణం & బోధనా పద్ధతుల విశ్లేషణ.`,
    shortDescHi: `${item.en} - तेलुगु व्याकरण एवं शिक्षण शास्त्र।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks)',
    content: {
      overview: `Comprehensive study guide on ${item.en} covering Telugu grammar essentials and AP SCERT textbook methodology.`,
      overviewTe: `${item.te} అనేది AP DSC & TET పరీక్షల్లో భాషా విభాగంలో అత్యధిక స్కోరింగ్ అధ్యాయం.`,
      sections: [
        {
          title: `1. Telugu Grammar & Pedagogy Analysis: ${item.en}`,
          titleTe: `1. వ్యాకరణ సూత్రాలు & బోధనా పద్ధతులు: ${item.te}`,
          paragraphs: [
            `Detailed rules, examples, and classroom instructional strategies for ${item.en}.`,
            `Follows the standard Balavyakaranam and SCERT Telugu methodology textbooks.`
          ],
          paragraphsTe: [
            `ఈ విభాగంలో బాలవ్యాకరణ సూత్రాలు, సంధులు, సమాసాలు మరియు బోధనా పద్ధతుల విశ్లేషణ సమగ్రంగా అందించబడింది.`
          ],
          keyPoints: [
            `Covers sandhi sutras, samasas, and LSRW skills development.`,
            `Includes high-yield exam traps and identification shortcuts.`
          ],
          keyPointsTe: [
            `సంధి సూత్రాలు మరియు ఛందో నియమాలను సులభంగా గుర్తుంచుకునే షార్ట్‌కట్ పద్ధతులు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Telugu Language & Pedagogy' },
        { label: 'Target Exam', val: 'AP DSC / TET (Language I)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'తెలుగు భాష & బోధనా పద్ధతులు' },
        { label: 'పరీక్ష', val: 'AP DSC / TET' }
      ],
      revisionPoints: [
        `Review grammar formulas, chandassu gana division, and method principles.`
      ],
      revisionPointsTe: [
        `గణ విభజన (య-మా-తా-రా-జ-భా-న-స-ల-గం) మరియు సమాస విగ్రహ వాక్యాలను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `dsc-tel-q-${idx + 1}`,
        topicId: `dsc-tel-${String(idx + 1).padStart(2, '0')}`,
        question: `In Telugu pedagogy, what are the four fundamental language skills in correct developmental sequence?`,
        questionTe: `తెలుగు భాషా బోధనలో సహజ క్రమంలో భాషా నైపుణ్యాల (LSRW) సరైన వరుస క్రమం ఏది?`,
        options: [
          `శ్రవణం -> భాషణం -> పఠనం -> లేఖనం (LSRW)`,
          `లేఖనం -> పఠనం -> భాషణం -> శ్రవణం`,
          `భాషణం -> శ్రవణం -> లేఖనం -> పఠనం`,
          `పఠనం -> శ్రవణం -> లేఖనం -> భాషణం`
        ],
        optionsTe: [
          `శ్రవణం -> భాషణం -> పఠనం -> లేఖనం (LSRW)`,
          `లేఖనం -> పఠనం -> భాషణం -> శ్రవణం`,
          `భాషణం -> శ్రవణం -> లేఖనం -> పఠనం`,
          `పఠనం -> శ్రవణం -> లేఖనం -> భాషణం`
        ],
        correctIndex: 0,
        explanation: `The universally recognized natural language acquisition sequence is Listening (శ్రవణం), Speaking (భాషణం), Reading (పఠనం), and Writing (లేఖనం) - LSRW.`,
        referenceAct: 'SCERT Telugu Methodology Standard Reference'
      }
    ]
  }));

  // Subject 4: English Language & Pedagogy (15 Topics)
  const englishTopicsData = [
    { num: 1, en: 'Parts of Speech & Concord (Subject-Verb Agreement Rules)', te: 'భాషా భాగాలు & సబ్జెక్ట్-వెర్బ్ అగ్రిమెంట్ నిబంధనలు', hi: 'पार्ट्स ऑफ स्पीच एवं एग्रीमेंट' },
    { num: 2, en: 'Tenses & Aspects: Simple, Continuous, Perfect & Perfect Continuous', te: 'కాలాలు (Tenses): వాక్య నిర్మాణం, కండిషనల్ క్లాజ్‌లు & వినియోగం', hi: 'काल (Tenses)' },
    { num: 3, en: 'Active Voice and Passive Voice Transformations & Uses', te: 'యాక్టివ్ వాయిస్ & పాసివ్ వాయిస్ మార్పిడులు', hi: 'वाच्य परिवर्तन (Active/Passive)' },
    { num: 4, en: 'Direct and Indirect Speech (Reported Speech Rules & Reporting Verbs)', te: 'డైరెక్ట్ & ఇన్-డైరెక్ట్ స్పీచ్ (రిపోర్టెడ్ స్పీచ్ నిబంధనలు)', hi: 'प्रत्यक्ष एवं अप्रत्यक्ष कथन' },
    { num: 5, en: 'Articles, Determiners & Prepositions of Time, Place and Direction', te: 'ఆర్టికల్స్ (A, An, The) & ప్రిపోజిషన్లు', hi: 'आर्टिकल्स एवं प्रीपोजिशन' },
    { num: 6, en: 'Vocabulary: Synonyms, Antonyms, Idioms, Phrasal Verbs & One-Word Substitutes', te: 'పదజాలం: పర్యాయపదాలు, నానార్థాలు, జాతీయాలు & ఫ్రేజల్ వెర్బ్స్', hi: 'शब्दावली एवं मुहावरे' },
    { num: 7, en: 'Reading Comprehension Strategies: Skimming, Scanning & Inferencing', te: 'కాంప్రహెన్షన్ పఠన వ్యూహాలు: స్కిమ్మింగ్, స్కానింగ్ & అనుమితి', hi: 'अपठित गद्यांश' },
    { num: 8, en: 'Aims & Objectives of Teaching English in Andhra Pradesh Schools', te: 'ఆంధ్రప్రదేశ్ పాఠశాలల్లో ఆంగ్ల బోధనా లక్ష్యాలు & ఆశయాలు', hi: 'अंग्रेजी शिक्षण के उद्देश्य' },
    { num: 9, en: 'Methods of Teaching English: Grammar-Translation Method, Direct Method & Bilingual Method', te: 'ఆంగ్ల బోధనా పద్ధతులు: గ్రామర్-ట్రాన్స్‌లేషన్, డైరెక్ట్ & బైలింగ్వల్ పద్ధతులు', hi: 'अंग्रेजी शिक्षण विधियां' },
    { num: 10, en: 'Structural Approach, Situational Language Teaching & Audio-Lingual Method', te: 'స్ట్రక్చరల్ అప్రోచ్ & ఆడియో-లింగ్వల్ విధానం', hi: 'संरचनात्मक उपागम' },
    { num: 11, en: 'Communicative Language Teaching (CLT) & Task-Based Language Learning', te: 'కమ్యూనికేటివ్ లాంగ్వేజ్ టీచింగ్ (CLT) & టాస్క్-బేస్డ్ లెర్నింగ్', hi: 'सम्प्रेषणात्मक भाषा शिक्षण (CLT)' },
    { num: 12, en: 'Teaching of Receptive and Productive Skills (LSRW) in English', te: 'ఆంగ్లంలో శ్రవణ, భాషణ, పఠన, లేఖన నైపుణ్యాల బోధన', hi: 'अंग्रेजी में एलएसआरडब्ल्यू कौशल' },
    { num: 13, en: 'Teaching of Prose, Poetry, Supplementary Readers & Grammar Inductively', te: 'గద్య, పద్య మరియు వ్యాకరణ బోధనా పద్ధతులు', hi: 'गद्य एवं पद्य शिक्षण' },
    { num: 14, en: 'Assessment and Evaluation in English: Constructing Blueprints & Achievement Tests', te: 'ఆంగ్ల మూల్యాంకనం: బ్లూప్రింట్ నిర్మాణం & మూల్యాంకన సాధనాలు', hi: 'मूल्यांकन एवं ब्लूप्रिंट' },
    { num: 15, en: 'Phonetics, English Speech Sounds, Stress, Intonation & Pronunciation', te: 'ఫొనెటిక్స్: ఆంగ్ల ధ్వనులు, స్ట్రెస్, ఇంటొనేషన్ & ఉచ్చారణ నియమాలు', hi: 'ध्वनिविज्ञान एवं उच्चारण' }
  ];

  const englishTopics: Topic[] = englishTopicsData.map((item, idx) => ({
    id: `dsc-eng-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'dsc-english',
    courseId: 'ap-dsc-tet',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Grammar clarity, phonetics, and English language methodology for ${item.en}.`,
    shortDescTe: `${item.te} పై AP DSC & TET కొరకు ఇంగ్లీష్ గ్రామర్ & మెథడాలజీ నోట్స్.`,
    shortDescHi: `${item.en} - अंग्रेजी व्याकरण एवं शिक्षण शास्त्र।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks)',
    content: {
      overview: `Structured reference notes for ${item.en} covering grammar principles and modern communicative pedagogy.`,
      overviewTe: `${item.te} అనేది ఉపాధ్యాయ పరీక్షల్లో ఇంగ్లీష్ కంటెంట్ & మెథడాలజీలో అత్యుత్తమ మార్కులు అందించే విభాగం.`,
      sections: [
        {
          title: `1. Grammar Concepts & Pedagogical Applications: ${item.en}`,
          titleTe: `1. వ్యాకరణ నియమాలు & బోధనా మెలకువలు: ${item.te}`,
          paragraphs: [
            `Covers standard grammatical rules, common structural errors, and communicative teaching techniques for ${item.en}.`,
            `Follows the latest English curriculum prescribed by AP SCERT and NCERT.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో ఆంగ్ల వ్యాకరణ సూత్రాలు, వాక్య నిర్మాణాలు మరియు తరగతి గది బోధనా పద్ధతులు సరళంగా వివరించబడ్డాయి.`
          ],
          keyPoints: [
            `Examines structural approaches, CLT techniques, and grammar rules.`,
            `Provides question analysis for both SGT and School Assistant levels.`
          ],
          keyPointsTe: [
            `పరీక్షలలో అడిగే కాంప్రహెన్షన్ మరియు గ్రామర్ బిట్స్ సులభంగా పరిష్కరించే పద్ధతులు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'English Language & Pedagogy' },
        { label: 'Target Exam', val: 'AP DSC / TET (Language II)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'ఆంగ్ల భాష & బోధనా పద్ధతులు' },
        { label: 'పరీక్ష', val: 'AP DSC / TET' }
      ],
      revisionPoints: [
        `Memorize prepositions, voice transformation steps, and method founders.`
      ],
      revisionPointsTe: [
        `టెన్సెస్ సూత్రాలు మరియు బోధనా పద్ధతుల లక్షణాలను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `dsc-eng-q-${idx + 1}`,
        topicId: `dsc-eng-${String(idx + 1).padStart(2, '0')}`,
        question: `Which method of teaching English strictly prohibits the use of the mother tongue in the classroom?`,
        questionTe: `తరగతి గదిలో మాతృభాష వాడకాన్ని పూర్తిగా నిషేధించే ఆంగ్ల బోధనా పద్ధతి ఏది?`,
        options: [
          `Direct Method (Natural Method)`,
          `Grammar-Translation Method`,
          `Bilingual Method`,
          `Dr. West's New Method`
        ],
        optionsTe: [
          `డైరెక్ట్ మెథడ్ (ప్రత్యక్ష పద్ధతి)`,
          `గ్రామర్-ట్రాన్స్‌లేషన్ మెథడ్`,
          `బైలింగ్వల్ మెథడ్`,
          `డాక్టర్ వెస్ట్ పద్ధతి`
        ],
        correctIndex: 0,
        explanation: `The Direct Method (also known as Natural Method) strictly forbids the use of the mother tongue, teaching English directly through the target language.`,
        referenceAct: 'Standard English Language Teaching (ELT) Reference'
      }
    ]
  }));

  // Subject 5: Mathematics, Science & Social Studies Pedagogy (15 Topics)
  const contentPedagogyTopicsData = [
    { num: 1, en: 'Mathematics Pedagogy: Nature, Scope & Aims of Teaching Mathematics', te: 'గణిత బోధనా శాస్త్రం: గణిత స్వభావం, పరిధి & బోధనా లక్ష్యాలు', hi: 'गणित शिक्षण का स्वरूप' },
    { num: 2, en: 'Methods of Teaching Mathematics: Inductive-Deductive, Analytic-Synthetic, Problem Solving', te: 'గణిత బోధనా పద్ధతులు: ఆగమన-నిగమన, విశ్లేషణ-సంశ్లేషణ, సమస్య పరిష్కార పద్ధతులు', hi: 'गणित शिक्षण विधियां' },
    { num: 3, en: 'Mathematics Laboratory, Recreational Mathematics, Puzzles & TLM Development', te: 'గణిత ప్రయోగశాల, వినోదాత్మక గణితం, పజిల్స్ & TLM తయారీ', hi: 'गणित प्रयोगशाला' },
    { num: 4, en: 'Diagnostic Testing & Remedial Teaching in Mathematics', te: 'గణితంలో లోపనిదాన పరీక్ష & నివారణ బోధన', hi: 'गणित में निदानात्मक शिक्षण' },
    { num: 5, en: 'Science Pedagogy: Nature of Science, Process Skills & Scientific Attitude', te: 'సైన్స్ బోధనా శాస్త్రం: సైన్స్ స్వభావం, శాస్త్రీయ ప్రక్రియా నైపుణ్యాలు & శాస్త్రీయ దృక్పథం', hi: 'विज्ञान शिक्षण' },
    { num: 6, en: 'Methods of Teaching Science: Scientific Method, Inquiry-Based Learning, Project Method', te: 'సైన్స్ బోధనా పద్ధతులు: శాస్త్రీయ పద్ధతి, అన్వేషణ పద్ధతి & ప్రాజెక్ట్ పద్ధతి', hi: 'वैज्ञानिक विधि एवं प्रोजेक्ट' },
    { num: 7, en: 'Science Laboratory: Planning, Safety Rules & Improvisation of Apparatus', te: 'సైన్స్ ప్రయోగశాల: ప్రణాళిక, భద్రతా నియమాలు & ప్రత్యామ్నాయ పరికరాల రూపకల్పన', hi: 'विज्ञान प्रयोगशाला प्रबंधन' },
    { num: 8, en: 'Co-curricular Activities in Science: Science Club, Science Fair & Field Trips', te: 'సైన్స్ సహపాఠ్య కార్యక్రమాలు: సైన్స్ క్లబ్, సైన్స్ ఫెయిర్ & విహారయాత్రలు', hi: 'विज्ञान मेला एवं क्लब' },
    { num: 9, en: 'Social Studies Pedagogy: Nature, Scope & Integration of History, Geography, Civics, Economics', te: 'సోషల్ స్టడీస్ బోధనా శాస్త్రం: సాంఘిక శాస్త్ర స్వభావం & సమగ్రతా విధానం', hi: 'सामाजिक अध्ययन शिक्षण' },
    { num: 10, en: 'Methods of Teaching Social Studies: Source Method, Role Play, Discussion, Field Visits', te: 'సోషల్ స్టడీస్ బోధనా పద్ధతులు: ఆధారాల పద్ధతి, పాత్రపోషణ, చర్చా పద్ధతి', hi: 'सामाजिक विज्ञान शिक्षण विधियां' },
    { num: 11, en: 'Social Studies Laboratory, Map-Reading Skills, Atlases & Globe Utilization', te: 'సాంఘిక శాస్త్ర ప్రయోగశాల, మ్యాప్ రీడింగ్ నైపుణ్యాలు & గ్లోబ్ వినియోగం', hi: 'मानचित्र कौशल एवं प्रयोगशाला' },
    { num: 12, en: 'Instructional Planning: Year Plan, Unit Plan & Period Plan in Science and Social', te: 'విద్యా ప్రణాళిక రచన: సైన్స్ & సోషల్ లో లెసన్ ప్లాన్ తయారీ', hi: 'इकाई एवं पाठ योजना' },
    { num: 13, en: 'Action Research in Schools: Identification of Problem, Hypotheses & Remediation', te: 'క్రియాత్మక పరిశోధన (Action Research): సమస్య గుర్తింపు, ప్రాకల్పనలు & పరిష్కారం', hi: 'क्रियात्मक अनुसंधान' },
    { num: 14, en: 'Assessment & Blueprint Construction in Science and Social Studies', te: 'సైన్స్ & సోషల్ లో మూల్యాంకనం: బ్లూప్రింట్ ఆధారిత ప్రశ్నపత్ర రూపకల్పన', hi: 'ब्लूप्रिंट एवं प्रश्नपत्र निर्माण' },
    { num: 15, en: 'Differentiated Instruction & Multigrade Teaching Strategies for AP Schools', te: 'వ్యక్తిగత బోధనా వ్యూహాలు & బహుళ తరగతి బోధనా పద్ధతులు (Multigrade Teaching)', hi: 'बहु-कक्षा शिक्षण' }
  ];

  const contentPedagogyTopics: Topic[] = contentPedagogyTopicsData.map((item, idx) => ({
    id: `dsc-meth-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'dsc-methodology',
    courseId: 'ap-dsc-tet',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Subject methodology, teaching aids, and laboratory management for ${item.en}.`,
    shortDescTe: `${item.te} పై DSC SGT & స్కూల్ అసిస్టెంట్ కొరకు మెథడాలజీ నోట్స్.`,
    shortDescHi: `${item.en} - विषय शिक्षण विधियां एवं प्रयोगशाला।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks)',
    content: {
      overview: `Practical and theoretical pedagogical framework for ${item.en} aligned with AP SCERT and NCERT guidelines.`,
      overviewTe: `${item.te} అనేది AP DSC లో మెథడాలజీ విభాగంలో స్కోర్ సాధించడానికి అత్యంత అవసరమైన అంశం.`,
      sections: [
        {
          title: `1. Methodological Principles & Classroom Execution: ${item.en}`,
          titleTe: `1. బోధనా పద్ధతులు & తరగతి నిర్వహణ: ${item.te}`,
          paragraphs: [
            `Comprehensive step-by-step breakdown of teaching methods, lesson planning, and assessment for ${item.en}.`,
            `Includes illustrative examples of teacher-student interactions and project execution.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో గణితం, సైన్స్ మరియు సోషల్ బోధనా పద్ధతులు, ప్రయోగశాల నిర్వహణ మరియు లెసన్ ప్లాన్ తయారీ విధానం సమగ్రంగా అందించబడింది.`
          ],
          keyPoints: [
            `Covers inductive-deductive methods, scientific enquiry, and map-reading skills.`,
            `Equips candidates with actionable strategies for high marks in DSC methodology.`
          ],
          keyPointsTe: [
            `ఆగమన-నిగమన పద్ధతులు మరియు ప్రయోగశాల భద్రతా నియమాలు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Content & Methodology' },
        { label: 'Target Exam', val: 'AP DSC (SGT & School Assistant)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'కంటెంట్ & బోధనా పద్ధతులు' },
        { label: 'పరీక్ష', val: 'AP DSC' }
      ],
      revisionPoints: [
        `Review steps of Scientific Method, Bloom's cognitive taxonomy levels, and Action Research stages.`
      ],
      revisionPointsTe: [
        `శాస్త్రీయ పద్ధతిలోని 6 సోపానాలు మరియు బ్లూప్రింట్ భార పట్టికలను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `dsc-meth-q-${idx + 1}`,
        topicId: `dsc-meth-${String(idx + 1).padStart(2, '0')}`,
        question: `In Mathematics teaching, moving from "Specific Examples to General Rule" is known as which method?`,
        questionTe: `గణిత బోధనలో "ఉదాహరణల నుండి సూత్రానికి (నియమానికి)" బోధించే పద్ధతిని ఏమంటారు?`,
        options: [
          `Inductive Method (ఆగమన పద్ధతి)`,
          `Deductive Method (నిగమన పద్ధతి)`,
          `Analytic Method (విశ్లేషణ పద్ధతి)`,
          `Synthetic Method (సంశ్లేషణ పద్ధతి)`
        ],
        optionsTe: [
          `ఆగమన పద్ధతి (Inductive Method)`,
          `నిగమన పద్ధతి (Deductive Method)`,
          `విశ్లేషణ పద్ధతి (Analytic Method)`,
          `సంశ్లేషణ పద్ధతి (Synthetic Method)`
        ],
        correctIndex: 0,
        explanation: `The Inductive Method proceeds from concrete specific examples to general formulas/principles, making it ideal for primary and upper primary children.`,
        referenceAct: 'SCERT Mathematics Methodology Standard Reference'
      }
    ]
  }));

  // Total topics = 18 (CDP) + 16 (Perspectives) + 16 (Telugu) + 15 (English) + 15 (Maths/Science/Social) = 80 Topics!
  return [
    {
      id: 'dsc-pedagogy',
      courseId: 'ap-dsc-tet',
      name: 'Child Development & Pedagogy',
      nameTe: 'శిశు వికాసం & బోధనా శాస్త్రం (సైకాలజీ)',
      nameHi: 'बाल विकास एवं शिक्षाशास्त्र',
      icon: 'Brain',
      totalHours: 30,
      topics: childDevTopics
    },
    {
      id: 'dsc-perspectives',
      courseId: 'ap-dsc-tet',
      name: 'Perspectives in Education (PIE) & Acts',
      nameTe: 'విద్యా దృక్పథాలు (PIE) & చట్టాలు',
      nameHi: 'शिक्षा में दृष्टिकोण एवं नीतियां',
      icon: 'BookOpen',
      totalHours: 25,
      topics: perspectivesTopics
    },
    {
      id: 'dsc-telugu',
      courseId: 'ap-dsc-tet',
      name: 'Language I (Telugu) Grammar & Pedagogy',
      nameTe: 'తెలుగు భాషా వ్యాకరణం & బోధనా పద్ధతులు',
      nameHi: 'तेलुगु भाषा व्याकरण एवं शिक्षण शास्त्र',
      icon: 'Languages',
      totalHours: 25,
      topics: teluguTopics
    },
    {
      id: 'dsc-english',
      courseId: 'ap-dsc-tet',
      name: 'Language II (English) Grammar & Methodology',
      nameTe: 'ఆంగ్ల వ్యాకరణం & బోధనా పద్ధతులు',
      nameHi: 'अंग्रेजी व्याकरण एवं शिक्षण शास्त्र',
      icon: 'Sparkles',
      totalHours: 25,
      topics: englishTopics
    },
    {
      id: 'dsc-methodology',
      courseId: 'ap-dsc-tet',
      name: 'Mathematics, Science & Social Methodology',
      nameTe: 'గణితం, సైన్స్ & సాంఘిక శాస్త్ర బోధనా పద్ధతులు',
      nameHi: 'गणित, विज्ञान एवं सामाजिक शिक्षण शास्त्र',
      icon: 'Layers',
      totalHours: 25,
      topics: contentPedagogyTopics
    }
  ];
}
