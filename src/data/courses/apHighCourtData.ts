import { Subject, Topic } from '../../types';

export function getApHighCourtSubjects(): Subject[] {
  // Subject 1: Judicial Architecture, Constitution & Legal Framework (15 Topics)
  const judicialTopicsData = [
    { num: 1, en: 'Structure of Indian Judiciary: Supreme Court, High Courts & Subordinate Courts Hierarchy', te: 'భారత న్యాయవ్యవస్థ నిర్మాణం: సుప్రీంకోర్టు, హైకోర్టులు & సబార్డినేట్ కోర్టుల వ్యవస్థ', hi: 'भारतीय न्यायपालिका की संरचना' },
    { num: 2, en: 'High Court of Andhra Pradesh: Establishment at Amaravati, Territorial & Bench Jurisdictions', te: 'ఆంధ్రప్రదేశ్ హైకోర్టు: అమరావతిలో ఏర్పాటు, ప్రాదేశిక & ధర్మాసన అధికార పరిధి', hi: 'आंध्र प्रदेश उच्च न्यायालय' },
    { num: 3, en: 'Articles 214 to 231: Constitutional Mandate, Court of Record (Art 215) & Powers of High Courts', te: 'ఆర్టికల్స్ 214-231: హైకోర్టుల రాజ్యాంగ విధులు, కోర్ట్ ఆఫ్ రికార్డ్ (ఆర్టికల్ 215)', hi: 'उच्च न्यायालय के संवैधानिक अधिकार' },
    { num: 4, en: 'High Court Writ Jurisdiction: Article 226 vs Article 32 (Scope, Differences & Enforcement)', te: 'హైకోర్టు రిట్ అధికార పరిధి: ఆర్టికల్ 226 vs ఆర్టికల్ 32 (పరిధి & తేడాలు)', hi: 'रिट अधिकारिता (अनुच्छेद 226 बनाम 32)' },
    { num: 5, en: 'Subordinate Judiciary: District Courts, Senior Civil Judges & Junior Civil Judges / Judicial Magistrates', te: 'సబార్డినేట్ న్యాయవ్యవస్థ: జిల్లా కోర్టులు, సీనియర్/జూనియర్ సివిల్ జడ్జిల అధికారాలు', hi: 'अधीनस्थ न्यायालय' },
    { num: 6, en: 'Appointment, Transfer & Removal of Judges: Collegium System & National Judicial Appointments Commission (NJAC)', te: 'న్యాయమూర్తుల నియామకం, బదిలీ & తొలగింపు: కొలీజియం వ్యవస్థ', hi: 'न्यायाधीशों की नियुक्ति एवं कॉलेजियम' },
    { num: 7, en: 'Contempt of Courts Act, 1971: Civil vs Criminal Contempt, Defences & Supreme/High Court Powers', te: 'కోర్టు ధిక్కార చట్టం 1971: సివిల్ & క్రిమినల్ కంటెంప్ట్ తేడాలు', hi: 'न्यायालय अवमानना अधिनियम 1971' },
    { num: 8, en: 'Legal Services Authorities Act, 1987: National (NALSA), State (APSLSA), District (DLSA) & Lok Adalat Mechanism', te: 'లీగల్ సర్వీసెస్ అథారిటీ చట్టం 1987: ఉచిత న్యాయ సహాయం (NALSA, DLSA) & లోక్ అదాలత్', hi: 'विधिक सेवा प्राधिकरण एवं लोक अदालत' },
    { num: 9, en: 'Public Interest Litigation (PIL) & Epistolary Jurisdiction: Landmark Judgments & Guidelines', te: 'ప్రజా ప్రయోజన వ్యాజ్యాలు (PIL): చారిత్రక తీర్పులు & మార్గదర్శకాలు', hi: 'जनहित याचिका (PIL)' },
    { num: 10, en: 'Independence of Judiciary, Separation of Powers (Article 50) & Basic Structure Doctrine', te: 'న్యాయవ్యవస్థ స్వతంత్రత, అధికార పృథక్కరణ సిద్ధాంతం (ఆర్టికల్ 50) & బేసిక్ స్ట్రక్చర్', hi: 'न्यायपालिका की स्वतंत्रता' },
    { num: 11, en: 'Alternative Dispute Resolution (ADR): Mediation, Conciliation, Arbitration & Section 89 CPC', te: 'ప్రత్యామ్నాయ వివాద పరిష్కార పద్ధతులు (ADR): మధ్యవర్తిత్వం, రాజీ & సెక్షన్ 89 CPC', hi: 'वैकल्पिक विवाद समाधान (ADR)' },
    { num: 12, en: 'Family Courts Act, 1984 & Protection of Women from Domestic Violence Act Jurisdictions', te: 'ఫ్యామిలీ కోర్టుల చట్టం 1984 & మహిళా సంరక్షణ న్యాయ పరిధి', hi: 'पारिवारिक न्यायालय अधिनियम 1984' },
    { num: 13, en: 'Commercial Courts Act, 2015 & Fast Track Special Courts (POCSO Courts) in AP', te: 'వాణిజ్య న్యాయస్థానాల చట్టం 2015 & ఫాస్ట్ ట్రాక్ ప్రత్యేక కోర్టులు', hi: 'वाणिज्यिक न्यायालय' },
    { num: 14, en: 'Motor Accidents Claims Tribunal (MACT) & Labour Courts / Industrial Tribunals', te: 'మోటారు ప్రమాదాల క్లెయిమ్స్ ట్రిబ్యునల్ (MACT) & లేబర్ కోర్టులు', hi: 'मोटर दुर्घटना दावा अधिकरण (MACT)' },
    { num: 15, en: 'Juvenile Justice (Care and Protection of Children) Act, 2015 & Child Welfare Committees', te: 'బాలల న్యాయ చట్టం 2015 (JJ Act) & బాలల సంక్షేమ కమిటీలు', hi: 'किशोर न्याय अधिनियम 2015' }
  ];

  const judicialTopics: Topic[] = judicialTopicsData.map((item, idx) => ({
    id: `hc-jud-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'hc-constitutional',
    courseId: 'ap-high-court',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Constitutional provisions, judicial powers, and court hierarchy for ${item.en}.`,
    shortDescTe: `${item.te} పై హైకోర్టు & జిల్లా కోర్టుల రిక్రూట్‌మెంట్ కొరకు న్యాయ శాస్త్ర నోట్స్.`,
    shortDescHi: `${item.en} - संवैधानिक कानून एवं न्यायिक प्रणाली।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks in HC Exam)',
    content: {
      overview: `Detailed legal analysis of ${item.en} covering constitutional provisions (Articles 214-237), statutory frameworks, and AP High Court structure.`,
      overviewTe: `${item.te} అనేది హైకోర్టు మరియు జిల్లా న్యాయస్థానాల ఉద్యోగ పరీక్షల్లో అత్యంత కీలకమైన విభాగం.`,
      sections: [
        {
          title: `1. Constitutional Provisions & Judicial Mandate: ${item.en}`,
          titleTe: `1. రాజ్యాంగ నిబంధనలు & న్యాయ అధికారాలు: ${item.te}`,
          paragraphs: [
            `Comprehensive legal examination of ${item.en} covering hierarchy, writ jurisdiction, and appointment procedures.`,
            `Follows the standard High Court of Andhra Pradesh Recruitment and Judicial Academy syllabus.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో హైకోర్టు అధికార పరిధి, రిట్లు, కోర్టు ధిక్కార చట్టం మరియు లోక్ అదాలత్ విధానాలు సమగ్రంగా వివరించబడ్డాయి.`
          ],
          keyPoints: [
            `Examines difference between Article 32 (Fundamental Rights only) and Article 226 (Fundamental Rights + Other Legal Rights).`,
            `Covers Lok Adalat awards which are final and non-appealable.`
          ],
          keyPointsTe: [
            `ఆర్టికల్ 226 పరిధి ఆర్టికల్ 32 కంటే విస్తృతమైనది.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Judicial Architecture & Constitution' },
        { label: 'Target Exam', val: 'AP High Court & District Courts' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'న్యాయవ్యవస్థ & రాజ్యాంగం' },
        { label: 'పరీక్ష', val: 'ఏపీ హైకోర్టు రిక్రూట్‌మెంట్' }
      ],
      revisionPoints: [
        `Review Article numbers for High Courts (Art 214 - 231) and Subordinate Courts (Art 233 - 237).`
      ],
      revisionPointsTe: [
        `హైకోర్టులకు సంబంధించిన ఆర్టికల్స్ (214 నుండి 231) మరియు సబార్డినేట్ కోర్టులు (233 నుండి 237) పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `hc-jud-q-${idx + 1}`,
        topicId: `hc-jud-${String(idx + 1).padStart(2, '0')}`,
        question: `Under which Article of the Constitution of India is every High Court designated as a "Court of Record" having power to punish for contempt of itself?`,
        questionTe: `భారత రాజ్యాంగంలోని ఏ ఆర్టికల్ ప్రకారం ప్రతి హైకోర్టును "కోర్ట్ ఆఫ్ రికార్డ్" గా గుర్తించి కోర్టు ధిక్కారానికి శిక్షించే అధికారం కల్పించారు?`,
        options: [
          `Article 215`,
          `Article 226`,
          `Article 129`,
          `Article 214`
        ],
        optionsTe: [
          `ఆర్టికల్ 215`,
          `ఆర్టికల్ 226`,
          `ఆర్టికల్ 129`,
          `ఆర్టికల్ 214`
        ],
        correctIndex: 0,
        explanation: `Under Article 215 of the Constitution of India, every High Court shall be a court of record and shall have all the powers of such a court including the power to punish for contempt of itself. (Article 129 is for Supreme Court).`,
        referenceAct: 'Constitution of India, Article 215'
      }
    ]
  }));

  // Subject 2: Civil, Criminal & Procedural Laws Foundation (15 Topics)
  const proceduralLawsTopicsData = [
    { num: 1, en: 'Code of Civil Procedure (CPC): Plaint, Written Statement, Summons & Service Rules', te: 'సివిల్ ప్రొసీజర్ కోడ్ (CPC): వాజ్యం (Plaint), లిఖితపూర్వక సమాధానం (WS) & సమన్లు', hi: 'दीवानी प्रक्रिया संहिता (CPC)' },
    { num: 2, en: 'Stages of a Civil Suit: Framing of Issues, Examination of Witnesses, Arguments, Judgment & Decree', te: 'సివిల్ దావా వివిధ దశలు: వివాదాంశాల గుర్తింపు, సాక్ష్యాల విచారణ, తీర్పు & డిక్రీ', hi: 'दीवानी वाद के विभिन्न चरण' },
    { num: 3, en: 'Execution of Decrees (Order XXI CPC), Stay Orders & Temporary Injunctions (Order XXXIX CPC)', te: 'డిక్రీల అమలు (ఆర్డర్ 21) & తాత్కాలిక స్టే ఉత్తర్వులు (ఆర్డర్ 39 CPC)', hi: 'डिक्री का निष्पादन एवं स्थगनादेश' },
    { num: 4, en: 'Limitation Act, 1963: Periods of Limitation, Section 5 (Condonation of Delay) & Exclusions', te: 'పరిమితి చట్టం 1963 (Limitation Act): సెక్షన్ 5 ఆలస్య క్షమాపణ & గడువు నియమాలు', hi: 'परिसीमा अधिनियम 1963' },
    { num: 5, en: 'Bharatiya Nyaya Sanhita (BNS) / IPC: Definition of Offence, Mens Rea, Actus Reus & Abetment', te: 'భారతీయ న్యాయ సంహిత (BNS): నేరం నిర్వచనం, దురుద్దేశం (Mens Rea) & ప్రేరేపణ', hi: 'अपराध की परिभाषा एवं मेंस रिया' },
    { num: 6, en: 'BNS Offenses: Murder (Sec 103), Culpable Homicide, Grievous Hurt & Negligent Act', te: 'BNS నేరాలు: హత్య, ఉద్దేశపూర్వక నరహత్య, తీవ్ర గాయపరచుట & నిర్లక్ష్యపు చర్యలు', hi: 'हत्या एवं गंभीर चोट संबंधी अपराध' },
    { num: 7, en: 'BNS Offenses: Theft, Extortion, Robbery, Dacoity, Criminal Breach of Trust & Cheating', te: 'ఆస్తి నేరాలు: దొంగతనం, బలవంతపు వసూలు, దరోడా, నమ్మకద్రోహం & చీటింగ్', hi: 'सम्पत्ति संबंधी अपराध (चोरी, धोखा)' },
    { num: 8, en: 'BNS Offenses: Rape, Dowry Death, Cruelty by Husband (Sec 85/86) & Sexual Harassment', te: 'మహిళలపై నేరాలు: వరకట్న వేధింపులు, అత్యాచారం & లైంగిక వేధింపుల నిరోధం', hi: 'महिलाओं के विरुद्ध अपराध' },
    { num: 9, en: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) / CrPC: Cognizable / Non-Cognizable, Compoundable Offenses', te: 'BNSS / CrPC: కాగ్నిజబుల్, రాజీపడదగిన నేరాలు (Compoundable) & పోలీసుల విచారణ', hi: 'संज्ञेय एवं शमनीय अपराध' },
    { num: 10, en: 'First Information Report (FIR), Police Investigation, Inquest & Final Charge Sheet', te: 'ప్రథమ సమాచార నివేదిక (FIR), పంచనామా, దర్యాప్తు & తుది ఛార్జ్ షీట్ దాఖలు', hi: 'एफआईआर एवं चार्जशीट दाखिल करना' },
    { num: 11, en: 'Bail Laws: Regular Bail, Anticipatory Bail, Default / Statutory Bail (Sec 187 BNSS)', te: 'బెయిల్ చట్టాలు: రెగ్యులర్ బెయిల్, ముందస్తు బెయిల్ & డిఫాల్ట్ బెయిల్ నిబంధనలు', hi: 'जमानत एवं डिफ़ॉल्ट जमानत' },
    { num: 12, en: 'Stages of Criminal Trial: Sessions Trial, Warrant Trial on Police Report & Summary Trials', te: 'క్రిమినల్ విచారణ దశలు: సెషన్స్ కోర్టు విచారణ, వారెంట్ కేసులు & సమ్మరీ ట్రయల్స్', hi: 'आपराधिक विचारण के चरण' },
    { num: 13, en: 'Bharatiya Sakshya Adhiniyam (BSA) / Evidence Act: Relevant Facts, Res Gestae & Admissions/Confessions', te: 'భారతీయ సాక్ష్య అధినియమం (BSA): ప్రాసంగిక వాస్తవాలు (Res Gestae), ఒప్పుకోలు', hi: 'प्रासंगिक तथ्य एवं संस्वीकृति' },
    { num: 14, en: 'Documentary Evidence, Primary vs Secondary Evidence & Electronic Records Admissibility (Sec 65B/Sec 63)', te: 'పత్ర సాక్ష్యాలు: ప్రాథమిక, ద్వితీయ సాక్ష్యాలు & ఎలక్ట్రానిక్ రికార్డుల ప్రామాణికత', hi: 'दस्तावेजी एवं इलेक्ट्रॉनिक साक्ष्य' },
    { num: 15, en: 'Burden of Proof (Sec 101), Presumptions & Examination of Witnesses (Chief, Cross, Re-examination)', te: 'రుజువు భారం (Burden of Proof), సాక్షుల విచారణ (చీఫ్, క్రాస్, రీ-ఎగ్జామినేషన్)', hi: 'सबूत का भार एवं गवाहों की जिरह' }
  ];

  const proceduralLawsTopics: Topic[] = proceduralLawsTopicsData.map((item, idx) => ({
    id: `hc-proc-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'hc-procedural',
    courseId: 'ap-high-court',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Core procedural steps, court trial stages, and evidentiary rules for ${item.en}.`,
    shortDescTe: `${item.te} పై న్యాయస్థాన విచారణ ప్రక్రియలు & చట్టాల వివరణ.`,
    shortDescHi: `${item.en} - सिविल एवं आपराधिक प्रक्रिया कानून।`,
    readTimeMinutes: 12,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks)',
    content: {
      overview: `Practical court procedure manual on ${item.en} detailing civil suits, criminal trials, and rules of evidence for court staff and judicial aspirants.`,
      overviewTe: `${item.te} అనేది కోర్టుల్లో పనిచేసే ఉద్యోగులకు మరియు న్యాయ పరీక్షార్థులకు అత్యంత ప్రాముఖ్యమైన పాఠ్యాంశం.`,
      sections: [
        {
          title: `1. Procedural Rules & Evidentiary Standards: ${item.en}`,
          titleTe: `1. విచారణ నిబంధనలు & సాక్ష్యాల ప్రామాణికత: ${item.te}`,
          paragraphs: [
            `Detailed explanation of ${item.en} covering trial stages, plaint requirements, and examination of witnesses.`,
            `Follows the Code of Civil Procedure, Bharatiya Nagarik Suraksha Sanhita, and Bharatiya Sakshya Adhiniyam.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో సివిల్ మరియు క్రిమినల్ కేసుల విచారణ విధానం, సాక్షుల క్రాస్ ఎగ్జామినేషన్ మరియు ఎలక్ట్రానిక్ సాక్ష్యాల నమోదు వివరాలు అందించబడ్డాయి.`
          ],
          keyPoints: [
            `Covers stages of Examination of Witnesses (Examination-in-Chief, Cross-Examination, Re-Examination).`,
            `Details difference between Decree, Order, and Judgment.`
          ],
          keyPointsTe: [
            `సాక్షుల విచారణలో చీఫ్ ఎగ్జామినేషన్, క్రాస్ ఎగ్జామినేషన్ మరియు రీ-ఎగ్జామినేషన్ల క్రమం.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Procedural & Criminal Laws' },
        { label: 'Target Exam', val: 'AP High Court & District Courts' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'సివిల్ & క్రిమినల్ విచారణ చట్టాలు' },
        { label: 'పరీక్ష', val: 'కోర్టు పరీక్షలు' }
      ],
      revisionPoints: [
        `Review the 3 stages of witness examination in correct legal order.`
      ],
      revisionPointsTe: [
        `సాక్షుల విచారణ క్రమం: 1. చీఫ్ ఎగ్జామినేషన్, 2. క్రాస్ ఎగ్జామినేషన్, 3. రీ-ఎగ్జామినేషన్.`
      ]
    },
    questions: [
      {
        id: `hc-proc-q-${idx + 1}`,
        topicId: `hc-proc-${String(idx + 1).padStart(2, '0')}`,
        question: `What is the correct legal order of examination of a witness in a court of law under the Law of Evidence?`,
        questionTe: `సాక్ష్య చట్టం ప్రకారం న్యాయస్థానంలో సాక్షిని విచారించే సరైన వరుస క్రమం ఏది?`,
        options: [
          `Examination-in-chief, Cross-examination, Re-examination`,
          `Cross-examination, Examination-in-chief, Re-examination`,
          `Re-examination, Examination-in-chief, Cross-examination`,
          `Cross-examination, Re-examination, Examination-in-chief`
        ],
        optionsTe: [
          `చీఫ్ ఎగ్జామినేషన్ -> క్రాస్ ఎగ్జామినేషన్ -> రీ-ఎగ్జామినేషన్`,
          `క్రాస్ ఎగ్జామినేషన్ -> చీఫ్ ఎగ్జామినేషన్ -> రీ-ఎగ్జామినేషన్`,
          `రీ-ఎగ్జామినేషన్ -> చీఫ్ ఎగ్జామినేషన్ -> క్రాస్ ఎగ్జామినేషన్`,
          `క్రాస్ ఎగ్జామినేషన్ -> రీ-ఎగ్జామినేషన్ -> చీఫ్ ఎగ్జామినేషన్`
        ],
        correctIndex: 0,
        explanation: `Under Section 137/138 of the Evidence Act (and corresponding BSA sections), the examination sequence is first Examination-in-chief by the party calling the witness, followed by Cross-examination by the adverse party, and lastly Re-examination.`,
        referenceAct: 'Law of Evidence - Witness Examination Order'
      }
    ]
  }));

  // Subject 3: General English & Legal Vocabulary (15 Topics)
  const englishLegalTopicsData = [
    { num: 1, en: 'Legal Maxims & Latin Terms: Mens Rea, Habeas Corpus, Res Judicata, Audi Alteram Partem, Sub Judice', te: 'లీగల్ మ్యాగ్జిమ్స్ & లాటిన్ పదాలు: Mens Rea, Res Judicata, Audi Alteram Partem', hi: 'विधिक सूत्र एवं लैटिन शब्दावली' },
    { num: 2, en: 'Legal Glossary & Terminology: Deposition, Affidavit, Injunction, Bailiff, Appellant, Respondent, Amicus Curiae', te: 'న్యాయ పరిభాష: అఫిడవిట్, ఇంజంక్షన్, అమిఖస్ క్యూరీ, అప్పిలెంట్, రెస్పాండెంట్', hi: 'न्यायिक शब्दावली एवं परिभाषा' },
    { num: 3, en: 'Reading Comprehension of Judicial Judgments, Headnotes & Legal Passages', te: 'న్యాయ తీర్పుల కాంప్రహెన్షన్ పఠనం & విశ్లేషణ', hi: 'न्यायिक गद्यांश का बोध' },
    { num: 4, en: 'Direct and Indirect Speech in Court Depositions & Witness Statements', te: 'డైరెక్ట్ & ఇన్-డైరెక్ట్ స్పీచ్ (కోర్టు వాంగ్మూలాల నమోదులో వినియోగం)', hi: 'प्रत्यक्ष एवं अप्रत्यक्ष कथन' },
    { num: 5, en: 'Active and Passive Voice Transformations for Official Court Orders & Decrees', te: 'యాక్టివ్ & పాసివ్ వాయిస్ (కోర్టు ఆర్డర్లు & తీర్పుల రచనలో)', hi: 'वाच्य परिवर्तन (न्यायिक आदेश)' },
    { num: 6, en: 'Spotting Errors & Subject-Verb Agreement in Legal Drafting & Pleadings', te: 'వ్యాకరణ దోషాల గుర్తింపు & సబ్జెక్ట్-వెర్బ్ అగ్రిమెంట్', hi: 'व्याकरण अशुद्धि सुधार' },
    { num: 7, en: 'Prepositions, Conjunctions & Modals in Judicial Orders & Affidavits', te: 'ప్రిపోజిషన్లు, కంజంక్షన్లు & మోడల్ వెర్బ్స్ వినియోగం', hi: 'प्रीपोजिशन एवं संयोजक' },
    { num: 8, en: 'Idioms, Phrasal Verbs & Formal English Expressions for Court Correspondence', te: 'జాతీయాలు, ఫ్రేజల్ వెర్బ్స్ & అధికారిక ఆంగ్ల పదజాలం', hi: 'मुहावरे एवं औपचारिक अभिव्यक्ति' },
    { num: 9, en: 'Synonyms & Antonyms for High Court Typist, Junior Assistant & Copyist Exams', te: 'పర్యాయపదాలు & వ్యతిరేక పదాలు (కోర్టు ఉద్యోగ పరీక్షల స్థాయి)', hi: 'समानार्थी एवं विलोम शब्द' },
    { num: 10, en: 'One-Word Substitutions for Administrative, Judicial & Legal Terms', te: 'ఏకపద ప్రత్యామ్నాయాలు (One-Word Substitutes)', hi: 'अनेक शब्दों के लिए एक शब्द' },
    { num: 11, en: 'Sentence Improvement, Sentence Completion & Para Jumbles in Court Context', te: 'వాక్యాల మెరుగుదల & పేరా జంబుల్స్ అమరిక', hi: 'वाक्य सुधार एवं क्रमबद्धता' },
    { num: 12, en: 'Official Judicial Correspondence, Memo Drafting, Cause Title & Order Sheet Layout', te: 'కోర్టు ఆర్డర్ షీట్ నిర్మాణం, కాజ్ టైటిల్ & మెమో డ్రాఫ్టింగ్', hi: 'न्यायिक पत्राचार एवं प्रारूपण' },
    { num: 13, en: 'Precis Writing: Summarizing Lengthy Legal Arguments & Cross-Examinations', te: 'సంక్షిప్తీకరణ (Precis Writing): సుదీర్ఘ న్యాయ వాదనల సారాంశం', hi: 'संक्षेपण (Precis Writing)' },
    { num: 14, en: 'Punctuation, Capitalization & Spelling Accuracy for Steno/Typist Practical Tests', te: 'విరామ చిహ్నాలు, క్యాపిటలైజేషన్ & స్పెల్లింగ్ ఖచ్చితత్వం', hi: 'विराम चिह्न एवं वर्तनी शुद्धि' },
    { num: 15, en: 'Translation Skills: English to Telugu & Telugu to English for Court Depositions', te: 'అనువాద నైపుణ్యాలు: ఇంగ్లీష్ నుండి తెలుగు & తెలుగు నుండి ఇంగ్లీష్', hi: 'न्यायिक अनुवाद कौशल' }
  ];

  const englishLegalTopics: Topic[] = englishLegalTopicsData.map((item, idx) => ({
    id: `hc-eng-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'hc-english',
    courseId: 'ap-high-court',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Legal terminology, Latin maxims, grammar rules, and drafting for ${item.en}.`,
    shortDescTe: `${item.te} పై లీగల్ మ్యాగ్జిమ్స్, ఇంగ్లీష్ గ్రామర్ & అనువాద నైపుణ్యాలు.`,
    shortDescHi: `${item.en} - विधिक शब्दावली एवं अंग्रेजी व्याकरण।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks)',
    content: {
      overview: `Comprehensive legal vocabulary and general English module for ${item.en} covering essential Latin maxims and precise court language drafting.`,
      overviewTe: `${item.te} అనేది హైకోర్టు మరియు జిల్లా కోర్టు పరీక్షల్లో ఇంగ్లీష్ విభాగంలో అత్యధిక స్కోర్ సాధించేందుకు నిర్దేశించబడింది.`,
      sections: [
        {
          title: `1. Legal Meanings & Grammatical Precision: ${item.en}`,
          titleTe: `1. న్యాయ పదాల అర్థాలు & వ్యాకరణ ఖచ్చితత్వం: ${item.te}`,
          paragraphs: [
            `Detailed definitions and illustrations of ${item.en} commonly tested in High Court recruitment examinations.`,
            `Examines natural justice doctrines, court order formatting, and precise vocabulary.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో సహజ న్యాయ సూత్రాలు (Audi Alteram Partem), లాటిన్ పదాల అర్థాలు మరియు ఖచ్చితమైన వ్యాకరణ నియమాలు వివరించబడ్డాయి.`
          ],
          keyPoints: [
            `Covers famous Latin maxim "Audi Alteram Partem" (Listen to the other side / No one should be condemned unheard).`,
            `Covers "Res Judicata" (Matter once decided cannot be reopened between same parties).`
          ],
          keyPointsTe: [
            `ఆడి ఆల్ట్రమ్ పార్టమ్ (Audi Alteram Partem) అంటే "ఎవరినీ విచారించకుండా శిక్షించరాదు / రెండో వైపు వాదన కూడా వినాలి".`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Legal English & Vocabulary' },
        { label: 'Target Exam', val: 'AP High Court (All Posts)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'లీగల్ ఇంగ్లీష్ & వొకాబ్యులరీ' },
        { label: 'పరీక్ష', val: 'హైకోర్టు పరీక్షలు' }
      ],
      revisionPoints: [
        `Memorize Latin maxims and their precise English definitions.`
      ],
      revisionPointsTe: [
        `ముఖ్యమైన లాటిన్ న్యాయ సూత్రాలు మరియు వాటి అర్థాలను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `hc-eng-q-${idx + 1}`,
        topicId: `hc-eng-${String(idx + 1).padStart(2, '0')}`,
        question: `What is the legal meaning of the Latin maxim "Audi Alteram Partem"?`,
        questionTe: `"ఆడి ఆల్ట్రమ్ పార్టమ్" (Audi Alteram Partem) అనే లాటిన్ న్యాయ సూత్రం యొక్క ఖచ్చితమైన అర్థం ఏమిటి?`,
        options: [
          `No person should be condemned unheard / Hear the other side`,
          `A matter already judged cannot be relitigated`,
          `Guilty mind is necessary for a crime`,
          `To produce the body before court`
        ],
        optionsTe: [
          `రెండో వైపు వాదన వినకుండా ఎవరినీ శిక్షించరాదు (సహజ న్యాయ సూత్రం)`,
          `ఇప్పటికే తీర్పు ఇచ్చిన విషయాన్ని మళ్లీ విచారించరాదు`,
          `నేరం జరగడానికి నేరపూరిత మనస్సు ఉండాలి`,
          `వ్యక్తిని కోర్టు ముందు హాజరుపరచడం`
        ],
        correctIndex: 0,
        explanation: `"Audi Alteram Partem" is a fundamental principle of Natural Justice which literally means "Listen to the other side" or "No person should be condemned unheard".`,
        referenceAct: 'Principles of Natural Justice & Legal Maxims'
      }
    ]
  }));

  // Subject 4: General Knowledge, Indian Polity & Current Affairs (15 Topics)
  const gkPolityTopicsData = [
    { num: 1, en: 'Indian Constitution: Salient Features, Preamble, Fundamental Rights & Duties Overview', te: 'భారత రాజ్యాంగం: ముఖ్య లక్షణాలు, ప్రవేశిక & ప్రాథమిక హక్కులు', hi: 'भारतीय संविधान की मुख्य विशेषताएं' },
    { num: 2, en: 'Directive Principles of State Policy & Uniform Civil Code (Article 44) Debates', te: 'ఆదేశిక సూత్రాలు & యూనిఫాం సివిల్ కోడ్ (ఆర్టికల్ 44)', hi: 'नीति निर्देशक तत्व एवं समान नागरिक संहिता' },
    { num: 3, en: 'Union Executive & Parliament: Powers of President, Speaker & Parliamentary Privileges', te: 'కేంద్ర కార్యనిర్వాహక వర్గం, పార్లమెంట్ & సభా హక్కులు', hi: 'संघीय कार्यपालिका एवं संसद' },
    { num: 4, en: 'State Government: Governor Discretionary Powers, Chief Minister & State Legislature in AP', te: 'రాష్ట్ర ప్రభుత్వం: గవర్నర్ అధికారాలు, ముఖ్యమంత్రి & ఏపీ అసెంబ్లీ', hi: 'राज्य सरकार एवं राज्यपाल' },
    { num: 5, en: 'Landmark Judgments of Supreme Court & AP High Court on Civil Liberties and Governance', te: 'పౌర హక్కులపై సుప్రీంకోర్టు & ఏపీ హైకోర్టు చారిత్రాత్మక తీర్పులు', hi: 'सर्वोच्च एवं उच्च न्यायालय के ऐतिहासिक निर्णय' },
    { num: 6, en: 'High Court of Andhra Pradesh Landmark Rulings on Local Elections and Capital Region', te: 'ఆంధ్రప్రదేశ్ హైకోర్టు ఇచ్చిన ప్రముఖ తీర్పులు', hi: 'आंध्र प्रदेश उच्च न्यायालय के प्रमुख फैसले' },
    { num: 7, en: 'Indian National Movement: Freedom Fighters, Important Sessions & Independence 1947', te: 'భారత స్వాతంత్ర్యోద్యమం: జాతీయ కాంగ్రెస్ సదస్సులు & స్వాతంత్ర్య సాధన', hi: 'भारतीय राष्ट्रीय आंदोलन' },
    { num: 8, en: 'Physical & Economic Geography of Andhra Pradesh: Coastline, Ports, Rivers & Resources', te: 'ఆంధ్రప్రదేశ్ భౌగోళిక & ఆర్థిక స్వరూపం: నదులు, ఓడరేవులు & వనరులు', hi: 'आंध्र प्रदेश का भूगोल' },
    { num: 9, en: 'Major Socio-Economic Initiatives, Welfare Programs & Infrastructure Projects in AP', te: 'ఆంధ్రప్రదేశ్ ప్రధాన సంక్షేమ పథకాలు & మౌలిక ప్రాజెక్టులు', hi: 'प्रमुख सामाजिक-आर्थिक योजनाएं' },
    { num: 10, en: 'Environmental Laws: Wildlife Protection Act 1972, EPA 1986 & National Green Tribunal (NGT)', te: 'పర్యావరణ చట్టాలు: వన్యప్రాణి సంరక్షణ చట్టం 1972 & నేషనల్ గ్రీన్ ట్రిబ్యునల్ (NGT)', hi: 'पर्यावरण कानून एवं एनजीटी' },
    { num: 11, en: 'Everyday Science: Human Health, Disease Prevention, Nutrition & Discoveries', te: 'నిత్యజీవిత సైన్స్: మానవ ఆరోగ్యం, వ్యాధుల నివారణ & శాస్త్రీయ ఆవిష్కరణలు', hi: 'दैनिक विज्ञान एवं स्वास्थ्य' },
    { num: 12, en: 'Current Affairs: National, International, Judicial Appointments & Legal Developments', te: 'సమకాలీన అంశాలు: జాతీయ, అంతర్జాతీయ పరిణామాలు & న్యాయ నియామకాలు', hi: 'समसामयिकी एवं विधिक विकास' },
    { num: 13, en: 'Books, Authors, Prominent Jurists, Nobel Prizes & National Honors', te: 'పుస్తకాలు, రచయితలు, ప్రముఖ న్యాయకోవిదులు & జాతీయ పురస్కారాలు', hi: 'पुस्तकें, लेखक एवं प्रमुख न्यायविद' },
    { num: 14, en: 'Cyber Laws, Digital Personal Data Protection Act 2023 & Cyber Crime Awareness', te: 'సైబర్ చట్టాలు, డిజిటల్ వ్యక్తిగత డేటా రక్షణ చట్టం 2023 & అవగాహన', hi: 'साइबर कानून एवं डेटा सुरक्षा' },
    { num: 15, en: 'Right to Information Act, 2005 & State Information Commission Powers', te: 'సమాచార హక్కు చట్టం 2005 & రాష్ట్ర సమాచార కమిషన్ అధికారాలు', hi: 'सूचना का अधिकार 2005' }
  ];

  const gkPolityTopics: Topic[] = gkPolityTopicsData.map((item, idx) => ({
    id: `hc-gk-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'hc-gk',
    courseId: 'ap-high-court',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Core general knowledge, constitution essentials, and contemporary affairs for ${item.en}.`,
    shortDescTe: `${item.te} పై సాధారణ పరిజ్ఞానం, రాజ్యాంగం & కరెంట్ అఫైర్స్.`,
    shortDescHi: `${item.en} - सामान्य ज्ञान एवं संविधान।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (2-3 Marks)',
    content: {
      overview: `Comprehensive General Knowledge and Indian Polity guide on ${item.en} tailored for High Court staff competitive examinations.`,
      overviewTe: `${item.te} అనేది కోర్టు రిక్రూట్‌మెంట్ పరీక్షల్లో జనరల్ నాలెడ్జ్ విభాగంలో అత్యధిక మార్కులు అందించే విభాగం.`,
      sections: [
        {
          title: `1. Fact Bank & Legal Insights: ${item.en}`,
          titleTe: `1. వాస్తవ సమాచారం & న్యాయ పరిజ్ఞానం: ${item.te}`,
          paragraphs: [
            `Detailed coverage of ${item.en} highlighting constitutional provisions, historical milestones, and landmark Supreme Court rulings.`,
            `Follows standard high court examination patterns.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో రాజ్యాంగ ముఖ్య ప్రకరణలు, చారిత్రక తీర్పులు మరియు తాజా జాతీయ పరిణామాలు విశ్లేషించబడ్డాయి.`
          ],
          keyPoints: [
            `Covers constitutional protections and major national environmental laws (EPA 1986, NGT Act 2010).`,
            `Includes latest judicial appointments and Chief Justice tenures.`
          ],
          keyPointsTe: [
            `పర్యావరణ పరిరక్షణ చట్టం 1986 మరియు ఎన్జీటీ (NGT) అధికారాలు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'GK & Indian Polity' },
        { label: 'Target Exam', val: 'AP High Court & District Courts' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'జనరల్ నాలెడ్జ్ & పాలిటీ' },
        { label: 'పరీక్ష', val: 'కోర్టు పరీక్షలు' }
      ],
      revisionPoints: [
        `Review Chief Justice of High Court appointment under Article 217.`
      ],
      revisionPointsTe: [
        `హైకోర్టు ప్రధాన న్యాయమూర్తి నియామక నిబంధనలు (ఆర్టికల్ 217) పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `hc-gk-q-${idx + 1}`,
        topicId: `hc-gk-${String(idx + 1).padStart(2, '0')}`,
        question: `Under which Article of the Constitution does the President appoint the Chief Justice and Judges of a High Court?`,
        questionTe: `భారత రాజ్యాంగంలోని ఏ ఆర్టికల్ ప్రకారం రాష్ట్రపతి హైకోర్టు ప్రధాన న్యాయమూర్తి మరియు ఇతర న్యాయమూర్తులను నియమిస్తారు?`,
        options: [
          `Article 217`,
          `Article 124`,
          `Article 226`,
          `Article 233`
        ],
        optionsTe: [
          `ఆర్టికల్ 217`,
          `ఆర్టికల్ 124`,
          `ఆర్టికల్ 226`,
          `ఆర్టికల్ 233`
        ],
        correctIndex: 0,
        explanation: `Under Article 217 of the Constitution, every Judge of a High Court is appointed by the President by warrant under his hand and seal after consultation with the Chief Justice of India, the Governor of the State, and the Chief Justice of the High Court.`,
        referenceAct: 'Constitution of India, Article 217'
      }
    ]
  }));

  // Subject 5: Computer Fundamentals & Court Automation (15 Topics)
  const computerTopicsData = [
    { num: 1, en: 'Computer Hardware Fundamentals: CPU, Memory (RAM, ROM, Cache), Motherboard & Input/Output Devices', te: 'కంప్యూటర్ హార్డ్‌వేర్: CPU, మెమరీ (RAM, ROM), మదర్‌బోర్డ్ & ఇన్‌పుట్/అవుట్‌పుట్ పరికరాలు', hi: 'कंप्यूटर हार्डवेयर एवं मेमोरी' },
    { num: 2, en: 'Software & Operating Systems: Windows, Linux, System Software vs Application Software', te: 'సాఫ్ట్‌వేర్ & ఆపరేటింగ్ సిస్టమ్స్: విండోస్, లైనక్స్, సిస్టమ్ సాఫ్ట్‌వేర్', hi: 'सॉफ्टवेयर एवं ऑपरेटिंग सिस्टम' },
    { num: 3, en: 'Computer Networks: LAN, WAN, MAN, VPN, IP Addressing, DNS & Court Intranets', te: 'కంప్యూటర్ నెట్‌వర్క్‌లు: LAN, WAN, VPN, IP అడ్రస్ & కోర్టు ఇంట్రానెట్', hi: 'कंप्यूटर नेटवर्किंग' },
    { num: 4, en: 'MS Word Mastery: Legal Document Formatting, Margins, Headers/Footers, Tables & Shortcut Keys', te: 'ఎంఎస్ వర్డ్ (MS Word): లీగల్ డాక్యుమెంట్ ఫార్మాటింగ్, హెడర్/ఫూటర్ & షార్ట్‌కట్ కీలు', hi: 'एमएस वर्ड एवं शॉर्टकट कुंजियां' },
    { num: 5, en: 'MS Excel Mastery: Spreadsheets, Formulas (SUM, AVERAGE, VLOOKUP), Sorting & Data Filtering', te: 'ఎంఎస్ ఎక్సెల్ (MS Excel): స్ప్రెడ్‌షీట్ సూత్రాలు, ఫార్ములాలు & డేటా సార్టింగ్', hi: 'एमएस एक्सेल एवं सूत्र' },
    { num: 6, en: 'MS PowerPoint & Outlook: Slides, Email Protocols (SMTP, POP3, IMAP) & Calendar Scheduling', te: 'ఎంఎస్ పవర్‌పాయింట్ & ఔట్‌లుక్: ఈమెయిల్ ప్రోటోకాల్స్ & ప్రెజెంటేషన్లు', hi: 'पावरपॉइंट एवं ईमेल' },
    { num: 7, en: 'e-Courts Integrated Mission Mode Project: Objectives, Phases I, II & Phase III Vision', te: 'ఈ-కోర్టుల ప్రాజెక్టు (e-Courts Project): లక్ష్యాలు, దశలు I, II & III', hi: 'ई-कोर्ट मिशन मोड प्रोजेक्ट' },
    { num: 8, en: 'Case Information System (CIS 3.2): Case Entry, Cause List Generation, Process Service & Orders Upload', te: 'కేస్ ఇన్ఫర్మేషన్ సిస్టమ్ (CIS 3.2): కేసుల నమోదు, కాజ్ లిస్ట్ & ఆర్డర్ల అప్‌లోడ్', hi: 'केस इंफॉर्मेशन सिस्टम (CIS)' },
    { num: 9, en: 'e-Filing 3.0 & Digital Signatures: Digital Signature Certificates (DSC) & Electronic Case Filing', te: 'ఈ-ఫైలింగ్ 3.0 & డిజిటల్ సంతకాలు (DSC) - ఆన్‌లైన్ కేసుల దాఖలు', hi: 'ई-फाइलिंग एवं डिजिटल हस्ताक्षर' },
    { num: 10, en: 'Virtual Courts & Video Conferencing Rules: Hybrid Hearings & Electronic Evidence Recording', te: 'వర్చువల్ కోర్టులు & వీడియో కాన్ఫరెన్సింగ్ నిబంధనలు: హైబ్రిడ్ విచారణలు', hi: 'वर्चुअल कोर्ट एवं वीडियो कॉन्फ्रेंसिंग' },
    { num: 11, en: 'National Judicial Data Grid (NJDG): Real-Time Case Status, Case Pendency Tracking & Transparency', te: 'నేషనల్ జ్యుడీషియల్ డేటా గ్రిడ్ (NJDG): కేసుల స్థితిగతులు & పెండెన్సీ పర్యవేక్షణ', hi: 'राष्ट्रीय न्यायिक डेटा ग्रिड (NJDG)' },
    { num: 12, en: 'Cyber Security in Courts: Anti-Virus, Phishing Protection, Firewall & Secure Password Practices', te: 'కోర్టుల్లో సైబర్ భద్రత: యాంటీ-వైరస్, ఫిషింగ్ రక్షణ, ఫైర్‌వాల్ & పాస్‌వర్డ్ నిబంధనలు', hi: 'साइबर सुरक्षा एवं डेटा संरक्षण' },
    { num: 13, en: 'Cloud Computing, Judicial Cloud (MeghRaj) & Backup / Disaster Recovery Protocols for Court Records', te: 'క్లౌడ్ కంప్యూటింగ్ (మేఘ్‌రాజ్) & కోర్టు రికార్డుల బ్యాకప్ విధానాలు', hi: 'क्लाउड कंप्यूटिंग एवं बैकअप' },
    { num: 14, en: 'Keyboard Typing Speed & Accuracy Techniques for Steno/Typist/Copyist Practical Examinations', te: 'టైపింగ్ వేగం & ఖచ్చితత్వ మెలకువలు (స్టెనో/టైపిస్ట్ ప్రాక్టికల్ పరీక్షల కొరకు)', hi: 'टाइपिंग गति एवं सटीकता तकनीक' },
    { num: 15, en: 'Optical Character Recognition (OCR), Digitization of Legacy Court Records & Metadata Indexing', te: 'OCR సాంకేతికత & ప్రాచీన కోర్టు రికార్డుల డిజిటలైజేషన్ విధానం', hi: 'दस्तावेज़ डिजिटलीकरण एवं ओसीआर' },
  ];

  const computerTopics: Topic[] = computerTopicsData.map((item, idx) => ({
    id: `hc-comp-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'hc-computer',
    courseId: 'ap-high-court',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Office software mastery, e-Courts project tools (CIS, NJDG), and typing skills for ${item.en}.`,
    shortDescTe: `${item.te} పై కంప్యూటర్ పరిజ్ఞానం, ఈ-కోర్టుల సాఫ్ట్‌వేర్ & టైపింగ్ మెలకువలు.`,
    shortDescHi: `${item.en} - कंप्यूटर ज्ञान एवं न्यायालय स्वचालन।`,
    readTimeMinutes: 10,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3 Marks in HC Exam)',
    content: {
      overview: `Comprehensive practical computer fundamentals and court automation guide for ${item.en} covering MS Office and the e-Courts Project.`,
      overviewTe: `${item.te} అనేది హైకోర్టు జూనియర్ అసిస్టెంట్, టైపిస్ట్, స్టెనోగ్రాఫర్ పరీక్షల్లో కంప్యూటర్ విభాగంలో గరిష్ట మార్కులు సాధించేందుకు నిర్దేశించబడింది.`,
      sections: [
        {
          title: `1. Computer Skills & Court Automation Tools: ${item.en}`,
          titleTe: `1. కంప్యూటర్ నైపుణ్యాలు & ఈ-కోర్టుల సాఫ్ట్‌వేర్: ${item.te}`,
          paragraphs: [
            `Detailed explanation of ${item.en} covering keyboard shortcuts, MS Word document formatting, and CIS 3.2 portal operations.`,
            `Follows standard High Court of AP Computer Proficiency test requirements.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో ఎంఎస్ ఆఫీస్ షార్ట్‌కట్ కీలు, కేస్ ఇన్ఫర్మేషన్ సిస్టమ్ (CIS) మరియు నేషనల్ జ్యుడీషియల్ డేటా గ్రిడ్ (NJDG) వివరాలు సమగ్రంగా అందించబడ్డాయి.`
          ],
          keyPoints: [
            `Covers e-Courts Mission Mode Project and Case Information System (CIS 3.2).`,
            `Details key MS Word shortcut combinations (Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+Y, Ctrl+J).`
          ],
          keyPointsTe: [
            `నేషనల్ జ్యుడీషియల్ డేటా గ్రిడ్ (NJDG) ద్వారా దేశవ్యాప్తంగా కేసుల స్థితిగతులను పారదర్శకంగా తెలుసుకోవచ్చు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Computer Fundamentals & Court IT' },
        { label: 'Target Exam', val: 'AP High Court (All Posts)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'కంప్యూటర్ & ఈ-కోర్టుల ఐటీ' },
        { label: 'పరీక్ష', val: 'కోర్టు పరీక్షలు' }
      ],
      revisionPoints: [
        `Memorize shortcut keys (Justify: Ctrl+J, Find: Ctrl+F, Replace: Ctrl+H) and full form of NJDG.`
      ],
      revisionPointsTe: [
        `NJDG పూర్తి రూపం: National Judicial Data Grid.`
      ]
    },
    questions: [
      {
        id: `hc-comp-q-${idx + 1}`,
        topicId: `hc-comp-${String(idx + 1).padStart(2, '0')}`,
        question: `What is the national database portal developed under the e-Courts Project that provides real-time information on pending and disposed cases across Indian courts?`,
        questionTe: `భారతదేశ న్యాయస్థానాల్లో పెండింగ్‌లో ఉన్న మరియు పరిష్కారమైన కేసుల సమాచారాన్ని నిజసమయంలో అందించే ఈ-కోర్టుల జాతీయ పోర్టల్ ఏది?`,
        options: [
          `National Judicial Data Grid (NJDG)`,
          `e-SamikSha Portal`,
          `National Portal of India`,
          `Bharat Kosh Portal`
        ],
        optionsTe: [
          `నేషనల్ జ్యుడీషియల్ డేటా గ్రిడ్ (NJDG)`,
          `ఈ-సమీక్ష పోర్టల్`,
          `నేషనల్ పోర్టల్ ఆఫ్ ఇండియా`,
          `భారత్ కోష్ పోర్టల్`
        ],
        correctIndex: 0,
        explanation: `The National Judicial Data Grid (NJDG) is the flagship comprehensive database portal of orders, judgments, and cases created under the e-Courts Project of the Supreme Court of India.`,
        referenceAct: 'e-Courts Mission Mode Project Official Documentation'
      }
    ]
  }));

  // Total topics = 15 (Judicial) + 15 (Procedural) + 15 (English) + 15 (GK/Polity) + 15 (Computer) = 75 Topics!
  return [
    {
      id: 'hc-constitutional',
      courseId: 'ap-high-court',
      name: 'Judicial Architecture & Constitutional Mandate',
      nameTe: 'న్యాయవ్యవస్థ నిర్మాణం & రాజ్యాంగ అధికారాలు',
      nameHi: 'न्यायिक संरचना एवं संवैधानिक अधिकार',
      icon: 'Scale',
      totalHours: 25,
      topics: judicialTopics
    },
    {
      id: 'hc-procedural',
      courseId: 'ap-high-court',
      name: 'Civil, Criminal & Procedural Laws Foundation',
      nameTe: 'సివిల్, క్రిమినల్ & విచారణ ప్రక్రియా చట్టాలు',
      nameHi: 'दीवानी, आपराधिक एवं प्रक्रिया कानून',
      icon: 'BookOpen',
      totalHours: 25,
      topics: proceduralLawsTopics
    },
    {
      id: 'hc-english',
      courseId: 'ap-high-court',
      name: 'General English & Legal Vocabulary',
      nameTe: 'జనరల్ ఇంగ్లీష్ & లీగల్ పదజాలం',
      nameHi: 'सामान्य अंग्रेजी एवं विधिक शब्दावली',
      icon: 'Sparkles',
      totalHours: 20,
      topics: englishLegalTopics
    },
    {
      id: 'hc-gk',
      courseId: 'ap-high-court',
      name: 'General Knowledge, Polity & Current Affairs',
      nameTe: 'జనరల్ నాలెడ్జ్, పాలిటీ & కరెంట్ అఫైర్స్',
      nameHi: 'सामान्य ज्ञान एवं समसामयिकी',
      icon: 'Globe',
      totalHours: 20,
      topics: gkPolityTopics
    },
    {
      id: 'hc-computer',
      courseId: 'ap-high-court',
      name: 'Computer Fundamentals & Court Automation',
      nameTe: 'కంప్యూటర్ నైపుణ్యాలు & ఈ-కోర్టుల వ్యవస్థ',
      nameHi: 'कंप्यूटर ज्ञान एवं न्यायालय स्वचालन',
      icon: 'Laptop',
      totalHours: 20,
      topics: computerTopics
    }
  ];
}
