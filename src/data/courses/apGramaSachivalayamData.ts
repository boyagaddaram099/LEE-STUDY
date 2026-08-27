import { Subject, Topic } from '../../types';

export function getApGramaSachivalayamSubjects(): Subject[] {
  // Subject 1: AP Government Flagship Schemes & Welfare Architecture (16 Topics)
  const welfareSchemesTopicsData = [
    { num: 1, en: 'Rythu Bharosa Kendras (RBKs) & Free Crop Insurance Architecture in AP', te: 'రైతు భరోసా కేంద్రాలు (RBKs) & ఉచిత పంటల బీమా పథకం', hi: 'रायथू भरोसा केंद्र (RBK) एवं फसल बीमा' },
    { num: 2, en: 'Jagananna Amma Vodi, Vidya Deevena & Vasathi Deevena Education Schemes', te: 'జగనన్న అమ్మ ఒడి, జగనన్న విద్యా దీవెన & వసతి దీవెన పథకాలు', hi: 'अम्मा वोडी एवं विद्या दीवेना' },
    { num: 3, en: 'YSR Cheyutha & YSR Aasara: Sustainable Livelihoods for Women Self-Help Groups', te: 'వైఎస్సార్ చేయూత & వైఎస్సార్ ఆసరా: మహిళా సాధికారత మరియు జీవనోపాధి', hi: 'वाईएसआर चेयूता एवं आसरा' },
    { num: 4, en: 'YSR Aarogyasri, Aarogya Asara & Family Doctor Village Healthcare Model', te: 'వైఎస్సార్ ఆరోగ్యశ్రీ, ఆరోగ్య ఆసరా & ఫ్యామిలీ డాక్టర్ గ్రామ వైద్య విధానం', hi: 'आरोग्यश्री एवं फैमिली डॉक्टर योजना' },
    { num: 5, en: 'YSR Pension Kanuka: Types of Pensions & 1st of Every Month Doorstep Delivery Mechanism', te: 'వైఎస్సార్ పింఛన్ కానుక: పింఛన్ల రకాలు & ఒకటో తేదీనే గుమ్మం వద్దకే పింఛన్ పంపిణీ', hi: 'वाईएसआर पेंशन कानुका' },
    { num: 6, en: 'Jagananna Thodu, Netanna Nestham & Matsyakara Bharosa Financial Support', te: 'జగనన్న తోడు, నేతన్న నేస్తం & మత్స్యకార భరోసా పథకాలు', hi: 'जगनान्ना तोडू एवं नेस्तम' },
    { num: 7, en: 'Jagananna Sampoorna Gruha Hakku & Pedalandariki Illu Housing Mission', te: 'జగనన్న సంపూర్ణ గృహ హక్కు & పేదలందరికీ ఇళ్లు పథకం', hi: 'सभी गरीबों के लिए आवास योजना' },
    { num: 8, en: 'Jagananna Chedodu (Tailors, Barbers, Washermen) & YSR Vahana Mitra (Auto/Taxi Drivers)', te: 'జగనన్న చేదోడు (టైలర్లు, రజకులు, నాయిబ్రాహ్మణులు) & వైఎస్సార్ వాహన మిత్ర', hi: 'जगनान्ना चेदोडू एवं वाहन मित्रा' },
    { num: 9, en: 'AP Disha Scheme, Disha Police Stations, SOS App & Special Court Infrastructure', te: 'ఆంధ్రప్రదేశ్ దిశ చట్టం, దిశ పోలీస్ స్టేషన్లు, దిశ SOS యాప్ & ప్రత్యేక కోర్టులు', hi: 'दिशा योजना एवं महिला सुरक्षा' },
    { num: 10, en: 'Mana Badi Nadu-Nedu & Health Nadu-Nedu Transformation Programs', te: 'మన బడి నాడు-నేడు & ఆసుపత్రుల నాడు-నేడు మౌలిక వసతుల ఆధునికీకరణ', hi: 'नाडु-नेडू योजना' },
    { num: 11, en: 'YSR Bima: Accidental & Natural Death Financial Assistance for Unorganized Workers', te: 'వైఎస్సార్ బీమా: అసంఘటిత రంగ కార్మికులకు ప్రమాద & సహజ మరణ బీమా పరిహారం', hi: 'वाईएसआर बीमा योजना' },
    { num: 12, en: 'AP Free Power Supply for Agriculture, Feeder Solarisation & Drip Irrigation Subsidies', te: 'వ్యవసాయానికి 9 గంటల ఉచిత విద్యుత్ & సోలార్ ఫీడర్ల ప్రాజెక్టు', hi: 'मुफ्त कृषि बिजली एवं सौर फीडर' },
    { num: 13, en: 'Direct Benefit Transfer (DBT) Architecture & Social Audit System in Andhra Pradesh', te: 'ప్రత్యక్ష నగదు బదిలీ (DBT) విధానం & సోషల్ ఆడిట్ (సామాజిక తనిఖీ) పద్ధతి', hi: 'प्रत्यक्ष लाभ अंतरण (DBT) एवं सोशल ऑडिट' },
    { num: 14, en: 'Public Distribution System (PDS) & Mobile Dispensing Units (Doorstep Rice Delivery)', te: 'ప్రజా పంపిణీ వ్యవస్థ (PDS) & మొబైల్ డెలివరీ యూనిట్ల (MDUs) ద్వారా నాణ్యమైన బియ్యం పంపిణీ', hi: 'सार्वजनिक वितरण प्रणाली (PDS)' },
    { num: 15, en: 'AP Milk Mission (Amul Partnership) & Livestock Veterinary Services at Village Level', te: 'ఏపీ పాల వెల్లువ (అమూల్ భాగస్వామ్యం) & గ్రామాల్లో పశువైద్య సేవలు', hi: 'आंध्र प्रदेश दुग्ध मिशन' },
    { num: 16, en: 'AP State Skill Development Corporation (APSSDC) & Yuva Galam Training Programs', te: 'ఆంధ్రప్రదేశ్ స్కిల్ డెవలప్‌మెంట్ కార్పొరేషన్ (APSSDC) & యువతకు నైపుణ్య శిక్షణ', hi: 'कौशल विकास निगम (APSSDC)' }
  ];

  const welfareSchemesTopics: Topic[] = welfareSchemesTopicsData.map((item, idx) => ({
    id: `sach-welf-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'sach-schemes',
    courseId: 'ap-grama-sachivalayam',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Eligibility criteria, financial assistance amounts, departmental procedures, and field implementation for ${item.en}.`,
    shortDescTe: `${item.te} పై అర్హతలు, ఆర్థిక సహాయం & సచివాలయాల ద్వారా అమలు చేసే విధానం.`,
    shortDescHi: `${item.en} - सरकारी योजनाएं एवं पात्रता मानदंड।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks in Sachivalayam)',
    content: {
      overview: `Field implementation and examination guide for ${item.en} covering beneficiary criteria, application pathways, and verification protocols in Grama/Ward Sachivalayams.`,
      overviewTe: `${item.te} అనేది గ్రామ/వార్డు సచివాలయ ఉద్యోగుల పరీక్షలో అత్యంత ఎక్కువ ప్రశ్నలు వచ్చే విభాగం.`,
      sections: [
        {
          title: `1. Scheme Guidelines & Implementation Workflow: ${item.en}`,
          titleTe: `1. పథకం మార్గదర్శకాలు & క్షేత్రస్థాయి అమలు విధానం: ${item.te}`,
          paragraphs: [
            `Detailed analysis of eligibility parameters, income ceilings, landholding criteria, and disbursal dates for ${item.en}.`,
            `Covers role of Village Secretariat functionaries and social audit display lists.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో అర్హుల ఎంపిక ప్రక్రియ, నవశకం పోర్టల్ ద్వారా వెరిఫికేషన్ మరియు నిధుల పంపిణీ వివరాలు సమగ్రంగా అందించబడ్డాయి.`
          ],
          keyPoints: [
            `Covers precise annual financial amounts and beneficiary qualification rules.`,
            `Highlights grievance redressal timelines.`
          ],
          keyPointsTe: [
            `పథకాల ఆర్థిక సహాయ మొత్తం మరియు అర్హత ప్రమాణాలు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'AP Flagship Welfare Schemes' },
        { label: 'Target Exam', val: 'AP Grama/Ward Sachivalayam' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'ఏపీ సంక్షేమ పథకాలు' },
        { label: 'పరీక్ష', val: 'గ్రామ సచివాలయం' }
      ],
      revisionPoints: [
        `Memorize financial benefit amounts (e.g. Amma Vodi Rs 15,000, Rythu Bharosa Rs 13,500 total, Netanna Nestham Rs 24,000).`
      ],
      revisionPointsTe: [
        `పథకాలవారీగా అందించే ఆర్థిక సహాయం మొత్తాలను గుర్తుంచుకోండి.`
      ]
    },
    questions: [
      {
        id: `sach-welf-q-${idx + 1}`,
        topicId: `sach-welf-${String(idx + 1).padStart(2, '0')}`,
        question: `Which institution at the village level acts as a one-stop-shop for all farmer services including seed testing, e-Crop booking, and input distribution in Andhra Pradesh?`,
        questionTe: `ఆంధ్రప్రదేశ్‌లో విత్తనాల పరీక్ష, ఈ-క్రాప్ నమోదు మరియు ఎరువుల పంపిణీ కోసం రైతులకు అన్ని సేవలు అందించే గ్రామస్థాయి కేంద్రం ఏది?`,
        options: [
          `Rythu Bharosa Kendra (RBK)`,
          `Primary Agricultural Credit Society (PACS)`,
          `Village Revenue Office`,
          `District Collectorate Camp`
        ],
        optionsTe: [
          `రైతు భరోసా కేంద్రం (RBK)`,
          `ప్రాథమిక వ్యవసాయ పరపతి సంఘం (PACS)`,
          `గ్రామ రెవెన్యూ కార్యాలయం`,
          `జిల్లా కలెక్టరేట్ క్యాంపు`
        ],
        correctIndex: 0,
        explanation: `Rythu Bharosa Kendras (RBKs) in every village provide certified quality inputs, testing, e-Crop booking, CMAPP price monitoring, and extension services to farmers at their doorstep.`,
        referenceAct: 'AP Agriculture Department Official Manual'
      }
    ]
  }));

  // Subject 2: Panchayati Raj & Village Administration (16 Topics)
  const panchayatiRajTopicsData = [
    { num: 1, en: '73rd Constitutional Amendment Act 1992: Mandatory vs Voluntary Provisions & 11th Schedule (29 Subjects)', te: '73వ రాజ్యాంగ సవరణ చట్టం 1992: తప్పనిసరి/ఐచ్ఛిక నిబంధనలు & 11వ షెడ్యూల్ (29 అంశాలు)', hi: '73वां संविधान संशोधन एवं 11वीं अनुसूची' },
    { num: 2, en: '74th Constitutional Amendment Act 1992: Urban Local Bodies (ULBs) & 12th Schedule (18 Subjects)', te: '74వ రాజ్యాంగ సవరణ చట్టం 1992: పట్టణ స్థానిక సంస్థలు & 12వ షెడ్యూల్ (18 అంశాలు)', hi: '74वां संविधान संशोधन एवं 12वीं अनुसूची' },
    { num: 3, en: 'Andhra Pradesh Panchayat Raj Act, 1994: Key Sections, Functions & Amendments', te: 'ఆంధ్రప్రదేశ్ పంచాయతీ రాజ్ చట్టం 1994: ముఖ్య సెక్షన్లు, అధికారాలు & సవరణలు', hi: 'आंध्र प्रदेश पंचायती राज अधिनियम 1994' },
    { num: 4, en: 'Role and Statutory Responsibilities of Panchayat Secretary (Grade V / VI) in AP', te: 'ఆంధ్రప్రదేశ్‌లో పంచాయతీ కార్యదర్శి (గ్రేడ్ V/VI) చట్టబద్ధమైన అధికారాలు & బాధ్యతలు', hi: 'पंचायत सचिव के कार्य एवं दायित्व' },
    { num: 5, en: 'Grama Sabha: Frequency, Quorum Rules, Powers, Social Audit & Citizen Decision-Making', te: 'గ్రామసభ: నిర్వహణ గడువు, కోరం నిబంధనలు, అధికారాలు & సోషల్ ఆడిట్ ఆమోదం', hi: 'ग्राम सभा एवं सामाजिक अंकेक्षण' },
    { num: 6, en: 'Grama & Ward Sachivalayam Structure: Roles of 11 Functional Village/Ward Assistants', te: 'గ్రామ & వార్డు సచివాలయాల నిర్మాణం: 11 మంది కార్యదర్శుల బాధ్యతలు & అధికారాలు', hi: 'ग्राम एवं वार्ड सचिवालय संरचना' },
    { num: 7, en: 'Land Revenue Administration: Village Records (Adangal / Pahani, ROR 1B, 10-1 Register)', te: 'భూ రెవెన్యూ పరిపాలన: గ్రామ రికార్డులు (అడంగల్ / పహాణీ, ROR 1B, 10-1 రికార్డులు)', hi: 'भू-राजस्व एवं ग्राम रिकॉर्ड (अडंगल, 1B)' },
    { num: 8, en: 'YSR Jagananna Saswatha Bhoo Hakku & Bhoo Raksha Pathakam (Comprehensive Resurvey using Drones)', te: 'వైఎస్సార్ జగనన్న శాశ్వత భూ హక్కు - భూ రక్ష పథకం (డ్రోన్ల సమగ్ర భూ రీసర్వే)', hi: 'डिजिटल भू-सर्वेक्षण एवं स्वामित्व' },
    { num: 9, en: 'Mutation, Encumbrance Certificate (EC), Adangal Rectification & Village Registration', te: 'మ్యుటేషన్, ఈసీ (EC), అడంగల్ సవరణలు & గ్రామ సచివాలయాల్లో రిజిస్ట్రేషన్ సేవలు', hi: 'नामांतरण एवं ई-रजिस्ट्रेशन' },
    { num: 10, en: 'Property Tax Assessment, Trade Licences, Water Taxes & Panchayat Budget Preparation', te: 'ఆస్తి పన్ను మదింపు, ట్రేడ్ లైసెన్సులు, నీటి పన్నులు & పంచాయతీ బడ్జెట్ తయారీ', hi: 'संपत्ति कर एवं पंचायत बजट' },
    { num: 11, en: 'Gram Panchayat Funds: Own Source Revenue (OSR), 15th Finance Commission Grants & State FC', te: 'గ్రామ పంచాయతీ నిధులు: స్వయం సమకూర్పు ఆదాయం (OSR) & 15వ కేంద్ర ఆర్థిక సంఘ నిధులు', hi: 'पंचायत वित्त एवं 15वां वित्त आयोग' },
    { num: 12, en: 'Solid Waste Management & "Manam Mana Parisubhratha" (Swachha Sankalpam) in AP Villages', te: 'ఘన వ్యర్థాల నిర్వహణ & "మనం మన పరిశుభ్రత" (స్వచ్ఛ సంకల్పం) - చెత్త నుండి సంపద కేంద్రాలు', hi: 'ठोस अपशिष्ट प्रबंधन' },
    { num: 13, en: 'Drinking Water Supply: Jal Jeevan Mission, AP Rural Water Supply (RWS) & Water Quality Testing', te: 'తాగునీటి సరఫరా: జల్ జీవన్ మిషన్, గ్రామీణ తాగునీటి సరఫరా (RWS) & క్లోరినేషన్', hi: 'जल जीवन मिशन एवं ग्रामीण जलापूर्ति' },
    { num: 14, en: 'Rural Sanitation: ODF Plus Villages, Individual Household Latrines (IHHL) & Soak Pits', te: 'గ్రామీణ పారిశుధ్యం: ODF ప్లస్ గ్రామాలు, వ్యక్తిగత మరుగుదొడ్లు & ఇంకుడు గుంతల నిర్మాణం', hi: 'ग्रामीण स्वच्छता एवं ओडीएफ प्लस' },
    { num: 15, en: 'Disaster Management at Village Level: Early Warnings, Cyclone Shelters & Relief Camps', te: 'గ్రామస్థాయిలో విపత్తు నిర్వహణ: తుఫాను హెచ్చరికలు, పునరావాస కేంద్రాలు & సహాయక చర్యలు', hi: 'ग्राम स्तर पर आपदा प्रबंधन' },
    { num: 16, en: 'Asset Registers, Birth & Death Registration Act 1969 & Issue of Digital Certificates', te: 'గ్రామ ఆస్తుల రిజిస్టర్, జనన-మరణాల నమోదు చట్టం 1969 & డిజిటల్ సర్టిఫికెట్ల జారీ', hi: 'जन्म-मृत्यु पंजीकरण अधिनियम 1969' }
  ];

  const panchayatiRajTopics: Topic[] = panchayatiRajTopicsData.map((item, idx) => ({
    id: `sach-pr-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'sach-panchayati',
    courseId: 'ap-grama-sachivalayam',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Administrative acts, village registers, tax rules, and secretariat duties for ${item.en}.`,
    shortDescTe: `${item.te} పై పంచాయతీ రాజ్ చట్టాలు, రికార్డులు & పాలనా నియమాలు.`,
    shortDescHi: `${item.en} - पंचायती राज एवं ग्राम प्रशासन।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3-4 Marks)',
    content: {
      overview: `Complete legal and administrative module for ${item.en} covering the AP Panchayat Raj Act 1994 and modern Secretariat protocols.`,
      overviewTe: `${item.te} అనేది గ్రామ/వార్డు సచివాలయ పరీక్షల్లో పంచాయతీ కార్యదర్శి మరియు ఇతర పోస్టులకు అత్యంత ప్రధానమైన అధ్యాయం.`,
      sections: [
        {
          title: `1. Administrative Framework & Statutory Powers: ${item.en}`,
          titleTe: `1. పరిపాలనా విధానం & చట్టబద్ధ అధికారాలు: ${item.te}`,
          paragraphs: [
            `Detailed explanation of ${item.en} based on the AP Panchayat Raj Act and government gazette orders.`,
            `Covers role of Grama Sabha, maintenance of Adangal/1B records, and tax collection procedures.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో పంచాయతీ కార్యదర్శి విధులు, గ్రామ రికార్డుల నిర్వహణ మరియు పన్నుల వసూలు విధానం సమగ్రంగా అందించబడింది.`
          ],
          keyPoints: [
            `Covers statutory sections of APPR Act 1994 and Birth & Death Registration rules.`,
            `Details the functioning of 11 functional assistants in Secretariats.`
          ],
          keyPointsTe: [
            `జనన-మరణాల నమోదు చట్టం 1969 ప్రకారం 21 రోజుల్లో ఉచిత నమోదు విధానం.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Panchayati Raj & Administration' },
        { label: 'Target Exam', val: 'AP Grama Sachivalayam (All Posts)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'పంచాయతీ రాజ్ & గ్రామ పాలన' },
        { label: 'పరీక్ష', val: 'గ్రామ సచివాలయం' }
      ],
      revisionPoints: [
        `Review 21-day timeline for Birth/Death registration and Grama Sabha minimum meetings per year (at least 2 to 4).`
      ],
      revisionPointsTe: [
        `జనన మరణాల నమోదుకు 21 రోజుల గడువు మరియు గ్రామసభ సమావేశాల కనీస సంఖ్యను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `sach-pr-q-${idx + 1}`,
        topicId: `sach-pr-${String(idx + 1).padStart(2, '0')}`,
        question: `Within how many days from the date of occurrence must a Birth or Death be registered without any late fee under the Registration of Births and Deaths Act, 1969?`,
        questionTe: `జనన మరియు మరణాల నమోదు చట్టం 1969 ప్రకారం ఎటువంటి ఆలస్య రుసుము లేకుండా జననం లేదా మరణాన్ని ఎన్ని రోజులలోగా నమోదు చేయాలి?`,
        options: [
          `21 Days`,
          `30 Days`,
          `15 Days`,
          `7 Days`
        ],
        optionsTe: [
          `21 రోజులు`,
          `30 రోజులు`,
          `15 రోజులు`,
          `7 రోజులు`
        ],
        correctIndex: 0,
        explanation: `Under Section 8 & 9 of the Registration of Births and Deaths Act 1969, reporting of births and deaths within 21 days of occurrence is free of charge.`,
        referenceAct: 'Registration of Births and Deaths Act, 1969'
      }
    ]
  }));

  // Subject 3: General Studies, Current Affairs & AP Geography (16 Topics)
  const gsGeoTopicsData = [
    { num: 1, en: 'Physical Geography of Andhra Pradesh: Coastline (974 km), Eastern Ghats, Rivers (Godavari, Krishna, Penna)', te: 'ఆంధ్రప్రదేశ్ భౌగోళిక స్వరూపం: తీరరేఖ (974 కి.మీ), తూర్పు కనుమలు & నదీ వ్యవస్థ', hi: 'आंध्र प्रदेश का भूगोल एवं नदियां' },
    { num: 2, en: 'Reorganised 26 Districts of Andhra Pradesh: Capitals, Headquarters, Boundaries & Features', te: 'ఆంధ్రప్రదేశ్‌లోని 26 పునర్వ్యవస్థీకరించిన జిల్లాలు: సరిహద్దులు & ప్రత్యేకతలు', hi: '26 जिले एवं मुख्यालय' },
    { num: 3, en: 'Forests, Flora, Fauna & Minerals in Andhra Pradesh (Barytes Mangampeta, Beach Sands, Granite)', te: 'అడవులు, జీవసంపద & ఖనిజ వనరులు (మంగంపేట బైరైటీస్, బీచ్ ఇసుక ఖనిజాలు)', hi: 'वन एवं खनिज संसाधन' },
    { num: 4, en: 'Major Irrigation Projects of AP: Polavaram, Veligonda, Handri-Neeva, Galeru-Nagari & Thotapalli', te: 'ప్రధాన నీటిపారుదల ప్రాజెక్టులు: పోలవరం, వెలిగొండ, హంద్రీ-నీవా, తోటపల్లి', hi: 'सिंचाई परियोजनाएं (पोलावरम)' },
    { num: 5, en: 'Ports & Maritime Economy: Visakhapatnam, Kakinada, Krishnapatnam, Machilipatnam & Bhavanapadu', te: 'ఓడరేవులు & తీరప్రాంత ఆర్థిక వ్యవస్థ: విశాఖ, కాకినాడ, కృష్ణపట్నం, మచిలీపట్నం', hi: 'बंदरगाह एवं समुद्री व्यापार' },
    { num: 6, en: 'Census 2011 & Socio-Economic Indicators of Andhra Pradesh (Sex Ratio, Literacy, Urbanization)', te: '2011 జనాభా లెక్కలు & సామాజిక-ఆర్థిక సూచికలు (లింగ నిష్పత్తి, అక్షరాస్యత)', hi: 'जनगणना 2011 एवं जनसांख्यिकी' },
    { num: 7, en: 'Current Affairs of Andhra Pradesh: State Awards, Welfare Milestones & New Initiatives', te: 'ఆంధ్రప్రదేశ్ సమకాలీన పరిణామాలు: అవార్డులు, పథకాలు & ప్రభుత్వ ప్రాజెక్టులు', hi: 'आंध्र प्रदेश समसामयिकी' },
    { num: 8, en: 'National & International Current Affairs: Summits, G20/BRICS, Treaties & Sports Honors', te: 'జాతీయ & అంతర్జాతీయ కరెంట్ అఫైర్స్: సదస్సులు, ఒప్పందాలు & క్రీడా విశేషాలు', hi: 'राष्ट्रीय एवं अंतर्राष्ट्रीय घटनाएं' },
    { num: 9, en: 'Indian National Movement Highlights: Important Events from 1857 to 1947', te: 'భారత జాతీయోద్యమ ముఖ్య ఘట్టాలు: 1857 నుండి 1947 వరకు', hi: 'भारतीय राष्ट्रीय आंदोलन' },
    { num: 10, en: 'General Science in Everyday Life: Basic Biology, First Aid, Hygiene & Nutrition', te: 'నిత్యజీవితంలో సైన్స్: ప్రాథమిక జీవశాస్త్రం, ప్రథమ చికిత్స, పరిశుభ్రత & ఆరోగ్యం', hi: 'दैनिक जीवन में विज्ञान' },
    { num: 11, en: 'Environmental Conservation, Global Warming & Green Energy Projects in AP', te: 'పర్యావరణ పరిరక్షణ, గ్లోబల్ వార్మింగ్ & హరిత ఇంధన ప్రాజెక్టులు', hi: 'पर्यावरण संरक्षण एवं हरित ऊर्जा' },
    { num: 12, en: 'Consumer Protection Act, 2019: Consumer Rights, E-Commerce Protections & Redressal Forums', te: 'వినియోగదారుల పరిరక్షణ చట్టం 2019: వినియోగదారుల హక్కులు & వివాద పరిష్కార ఫోరమ్‌లు', hi: 'उपभोक्ता संरक्षण अधिनियम 2019' },
    { num: 13, en: 'Right to Information (RTI) Act 2005: PIO Roles, Applications & Timelines', te: 'సమాచార హక్కు చట్టం (RTI) 2005: పౌర సమాచార అధికారి విధులు & గడువులు', hi: 'सूचना का अधिकार (RTI 2005)' },
    { num: 14, en: 'Right to Public Services & Citizen Service Delivery Timelines in Secretariats', te: 'ప్రజా సేవల హక్కు చట్టం & సచివాలయాల్లో సేవల గడువు పట్టిక (SLA)', hi: 'लोक सेवा गारंटी अधिनियम' },
    { num: 15, en: 'Disaster Management: Cyclones, Floods, Drought Monitoring & SDMA Protocols', te: 'విపత్తు నిర్వహణ: తుఫానులు, వరదలు, కరవు పర్యవేక్షణ & APSDMA మార్గదర్శకాలు', hi: 'आपदा प्रबंधन एवं चेतावनी' },
    { num: 16, en: 'Ethics, Integrity & Professional Conduct in Public Administration', te: 'ప్రజా పాలనలో నైతిక విలువలు, సమగ్రత & ప్రజా సేవకుల ప్రవర్తనా నియమావళి', hi: 'प्रशासनिक नैतिकता एवं सत्यनिष्ठा' }
  ];

  const gsGeoTopics: Topic[] = gsGeoTopicsData.map((item, idx) => ({
    id: `sach-gs-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'sach-gs',
    courseId: 'ap-grama-sachivalayam',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Core general studies, AP geography, and current developments for ${item.en}.`,
    shortDescTe: `${item.te} పై సాధారణ అవగాహన, ఏపీ భౌగోళిక అంశాలు & కరెంట్ అఫైర్స్.`,
    shortDescHi: `${item.en} - सामान्य अध्ययन एवं आंध्र प्रदेश का भूगोल।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (2-3 Marks)',
    content: {
      overview: `Structured study module on ${item.en} covering AP state profile, physical features, and statutory public service laws.`,
      overviewTe: `${item.te} అనేది సచివాలయ పరీక్షల్లో జనరల్ స్టడీస్ పేపర్‌లో గరిష్ట మార్కులు సాధించడానికి అవసరమైన అధ్యాయం.`,
      sections: [
        {
          title: `1. Factual Summary & Exam Pointers: ${item.en}`,
          titleTe: `1. ముఖ్యాంశాలు & పరీక్షాంశాలు: ${item.te}`,
          paragraphs: [
            `Detailed coverage of ${item.en} including geographical facts, recent current affairs, and legislative provisions.`,
            `Special attention is paid to the reorganized 26 districts and major river projects.`
          ],
          paragraphsTe: [
            `ఈ విభాగంలో 26 జిల్లాల భౌగోళిక సరిహద్దులు, ప్రాజెక్టులు మరియు తాజా కరెంట్ అఫైర్స్ సమగ్రంగా విశ్లేషించబడ్డాయి.`
          ],
          keyPoints: [
            `Covers coastline length (974 km, 2nd longest in India after Gujarat).`,
            `Covers major ports, mineral deposits, and RTI provisions.`
          ],
          keyPointsTe: [
            `ఆంధ్రప్రదేశ్ తీరరేఖ పొడవు 974 కి.మీ (భారతదేశంలో గుజరాత్ తర్వాత రెండవ అతిపెద్ద తీరరేఖ).`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'General Studies & AP Geography' },
        { label: 'Target Exam', val: 'AP Grama Sachivalayam' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'జనరల్ స్టడీస్ & ఏపీ జాగ్రఫీ' },
        { label: 'పరీక్ష', val: 'గ్రామ సచివాలయం' }
      ],
      revisionPoints: [
        `Memorize 26 district headquarters and major irrigation dam river locations (Polavaram on Godavari, Srisailam/Nagarjuna Sagar on Krishna).`
      ],
      revisionPointsTe: [
        `26 జిల్లాల కేంద్రాలు మరియు నదులపై ఉన్న ప్రాజెక్టులను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `sach-gs-q-${idx + 1}`,
        topicId: `sach-gs-${String(idx + 1).padStart(2, '0')}`,
        question: `What is the total coastline length of Andhra Pradesh, which makes it the second longest coastline in mainland India?`,
        questionTe: `భారతదేశ ప్రధాన భూభాగంలో గుజరాత్ తర్వాత రెండవ పొడవైన తీరరేఖ గల ఆంధ్రప్రదేశ్ తీరరేఖ పొడవు ఎంత?`,
        options: [
          `974 Kilometers`,
          `1,214 Kilometers`,
          `750 Kilometers`,
          `580 Kilometers`
        ],
        optionsTe: [
          `974 కిలోమీటర్లు`,
          `1,214 కిలోమీటర్లు`,
          `750 కిలోమీటర్లు`,
          `580 కిలోమీటర్లు`
        ],
        correctIndex: 0,
        explanation: `Andhra Pradesh has a coastline of 974 km along the Bay of Bengal, making it the second-longest coastline state in India after Gujarat.`,
        referenceAct: 'Survey of India / AP Statistical Abstract'
      }
    ]
  }));

  // Subject 4: Quantitative Aptitude, Mental Ability & Comprehension (16 Topics)
  const aptitudeTopicsData = [
    { num: 1, en: 'Basic Number Operations, Decimals, Fractions & BODMAS Calculations', te: 'ప్రాథమిక సంఖ్యా పరిక్రియలు, దశాంశాలు, భిన్నాలు & BODMAS నియమాలు', hi: 'आधारभूत अंकगणित एवं भिन्न' },
    { num: 2, en: 'Ratios, Proportions & Percentages applied in Village Records & Land Areas', te: 'నిష్పత్తులు & శాతాలు (గ్రామ రికార్డులు & విస్తీర్ణం లెక్కింపులో వినియోగం)', hi: 'अनुपात एवं प्रतिशत' },
    { num: 3, en: 'Profit, Loss & Simple Interest for Microfinance and Crop Loans', te: 'లాభ-నష్టాలు & బారువడ్డీ (పంట రుణాలు & స్వయం సహాయక సంఘాల లెక్కలు)', hi: 'लाभ, हानि एवं साधारण ब्याज' },
    { num: 4, en: 'Averages, Weighted Means & Time and Distance in Daily Field Visits', te: 'సగటులు, దూరము - వేగము - కాలము లెక్కలు', hi: 'औसत, चाल एवं समय' },
    { num: 5, en: 'Data Interpretation: Tabular Village Data, Bar Graphs & Pie Charts of Beneficiaries', te: 'దత్తాంశ విశ్లేషణ: లబ్ధిదారుల పట్టికలు, బార్ గ్రాఫ్‌లు & పై చార్టులు', hi: 'आंकड़ा विश्लेषण (Data Interpretation)' },
    { num: 6, en: 'Alphabetical and Number Series Completion & Missing Term Patterns', te: 'ఆల్ఫాబెటికల్ & సంఖ్యా శ్రేణులు: లోపించిన పదాలను గుర్తించుట', hi: 'अक्षर एवं संख्या श्रृंखला' },
    { num: 7, en: 'Coding-Decoding, Direction Sense & Distance Calculations', te: 'కోడింగ్-డీకోడింగ్, దిశలు & దూరాల గుర్తింపు', hi: 'कोडिंग-डिकोडिंग एवं दिशा ज्ञान' },
    { num: 8, en: 'Blood Relations & Logical Venn Diagrams for Demographic Classification', te: 'రక్త సంబంధాలు & జనాభా వర్గీకరణ వెన్ చిత్రాలు', hi: 'रक्त संबंध एवं वेन आरेख' },
    { num: 9, en: 'Telugu Bhasha Comprehension & Official Terminology Usage', te: 'తెలుగు భాషా కాంప్రహెన్షన్ (గద్యాంశ పఠనం) & అధికారిక పదజాలం', hi: 'तेलुगु भाषा गद्यांश' },
    { num: 10, en: 'Official Letter Writing, Drafting & File Noting in Telugu and English', te: 'అధికారిక ఉత్తర ప్రత్యుత్తరాలు, నోట్ ఫైల్ రాయడం & ముసాయిదా తయారీ', hi: 'कार्यालयी पत्र लेखन एवं प्रारूपण' },
    { num: 11, en: 'English Reading Comprehension & Synonyms/Antonyms in Official Contexts', te: 'ఇంగ్లీష్ రీడింగ్ కాంప్రహెన్షన్ & కార్యాలయ పదజాలం', hi: 'अंग्रेजी गद्यांश एवं शब्दावली' },
    { num: 12, en: 'Spotting Grammatical Errors & Sentence Improvement for Office Drafting', te: 'వ్యాకరణ దోషాల గుర్తింపు & వాక్యాల సవరణ', hi: 'व्याकरण त्रुटि सुधार' },
    { num: 13, en: 'General Mental Ability: Puzzles, Seating Arrangements & Ranking', te: 'జనరల్ మెంటల్ ఎబిలిటీ: పజిల్స్, ర్యాంకింగ్ & క్రమ అమరిక', hi: 'तार्किक पहेलियां एवं रैंकिंग' },
    { num: 14, en: 'Tabulation of Field Survey Data & Statistical Averages', te: 'ఫీల్డ్ సర్వే దత్తాంశాల పట్టికీకరణ & గణాంక సగటులు', hi: 'सर्वेक्षण डेटा सारणीकरण' },
    { num: 15, en: 'Logical Reasoning: Statement & Conclusions, Course of Action in Village Disputes', te: 'లాజికల్ రీజనింగ్: ప్రవచనాలు - ముగింపులు, గ్రామ సమస్యల పరిష్కార చర్యలు', hi: 'कथन एवं निष्कर्ष' },
    { num: 16, en: 'Communication Skills & Public Grievance Interaction Etiquette', te: 'కమ్యూనికేషన్ నైపుణ్యాలు & ప్రజల సమస్యల విచారణ సంభాషణ మర్యాదలు', hi: 'सम्प्रेषण कौशल एवं शिष्टाचार' }
  ];

  const aptitudeTopics: Topic[] = aptitudeTopicsData.map((item, idx) => ({
    id: `sach-apt-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'sach-aptitude',
    courseId: 'ap-grama-sachivalayam',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Aptitude shortcuts, reasoning logic, and official language drafting for ${item.en}.`,
    shortDescTe: `${item.te} పై సులభతర లెక్కింపు పద్ధతులు & అధికారిక లేఖారచన.`,
    shortDescHi: `${item.en} - संख्यात्मक योग्यता एवं कार्यालयी प्रारूपण।`,
    readTimeMinutes: 10,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (2-3 Marks)',
    content: {
      overview: `Practical problem-solving and official language aptitude guide for ${item.en} tailored to Grama/Ward Sachivalayam examinations.`,
      overviewTe: `${item.te} అనేది పరీక్షల్లో వేగంగా మరియు ఖచ్చితంగా లెక్కలు పరిష్కరించేందుకు తోడ్పడుతుంది.`,
      sections: [
        {
          title: `1. Practical Methods & Office Drafting Rules: ${item.en}`,
          titleTe: `1. లెక్కింపు పద్ధతులు & కార్యాలయ డ్రాఫ్టింగ్ సూత్రాలు: ${item.te}`,
          paragraphs: [
            `Detailed methods for ${item.en} focusing on daily administrative applications, speed calculations, and clear comprehension.`,
            `Provides sample questions and drafting templates for official village communications.`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో క్షేత్రస్థాయి సర్వేలు, పట్టికల విశ్లేషణ మరియు అధికారిక ఉత్తరాల రచన విధానం వివరించబడింది.`
          ],
          keyPoints: [
            `Formula shortcuts for percentage and ratio computations.`,
            `Standard guidelines for official Telugu and English note drafting.`
          ],
          keyPointsTe: [
            `శాతాలు మరియు నిష్పత్తుల లెక్కింపులో వేగవంతమైన పద్ధతులు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Aptitude & Drafting Skills' },
        { label: 'Target Exam', val: 'AP Grama Sachivalayam' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'ఆప్టిట్యూడ్ & లేఖారచన' },
        { label: 'పరీక్ష', val: 'గ్రామ సచివాలయం' }
      ],
      revisionPoints: [
        `Review calculation tables, official letter formats, and comprehension strategies.`
      ],
      revisionPointsTe: [
        `అధికారిక లేఖల నిర్మాణం మరియు శాతాల సూత్రాలను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `sach-apt-q-${idx + 1}`,
        topicId: `sach-apt-${String(idx + 1).padStart(2, '0')}`,
        question: `What is the primary objective of concise file noting and drafting in government secretariat administration?`,
        questionTe: `ప్రభుత్వ సచివాలయ పాలనలో ఫైల్ నోటింగ్ మరియు అధికారిక ముసాయిదా రచన యొక్క ముఖ్య ఉద్దేశం ఏమిటి?`,
        options: [
          `Clear, factual presentation of rules and recommendations for speedy decision-making`,
          `Writing extensive decorative essays without facts`,
          `Avoiding any references to previous government orders`,
          `None of the above`
        ],
        optionsTe: [
          `సమస్యను స్పష్టంగా, నిబంధనలకు అనుగుణంగా వివరించి సత్వర నిర్ణయం తీసుకునేలా చేయడం`,
          `నిబంధనలతో సంబంధం లేకుండా సుదీర్ఘ వ్యాసాలు రాయడం`,
          `గత ప్రభుత్వ ఆదేశాలను ప్రస్తావించకపోవడం`,
          `పైవేవీ కావు`
        ],
        correctIndex: 0,
        explanation: `Government secretariat file noting aims to provide a crisp, accurate, rule-grounded briefing enabling competent authorities to take legally sound administrative decisions.`,
        referenceAct: 'AP Secretariat Manual of Office Procedure'
      }
    ]
  }));

  // Subject 5: Digital Governance, Spandana & Citizen Doorstep Services (16 Topics)
  const digitalGovTopicsData = [
    { num: 1, en: 'Spandana Public Grievance Redressal Portal: Registration, Endorsement, Redressal Timelines & SLA Monitoring', te: 'స్పందన ప్రజా సమస్యల పరిష్కార వేదిక: నమోదు, పరిష్కార గడువులు (SLA) & పర్యవేక్షణ', hi: 'स्पंदना लोक शिकायत निवारण' },
    { num: 2, en: 'Navasakam Citizen Database: Household Mapping, Social Security Verification & Dynamic Updation', te: 'నవశకం పోర్టల్: కుటుంబాల మ్యాపింగ్, సంక్షేమ పథకాల అర్హుల గుర్తింపు', hi: 'नवशकम डेटाबेस एवं परिवार मैपिंग' },
    { num: 3, en: 'e-Crop Booking & Village Agri Kiosks: Geo-Tagging, VAA Verification & Crop Insurance Integration', te: 'ఈ-క్రాప్ బుకింగ్: జియో ట్యాగింగ్, VAA ధృవీకరణ & పంట నష్ట పరిహార అనుసంధానం', hi: 'ई-क्रॉप बुकिंग एवं जियो-टैगिंग' },
    { num: 4, en: 'MeeSeva 2.0 & Village Digital Assistant (VDA) Online Operations: 540+ G2C Citizen Services', te: 'మీసేవ 2.0 & డిజిటల్ అసిస్టెంట్ ఆన్‌లైన్ సేవలు: 540+ పౌర సేవలు', hi: 'मीसेवा 2.0 एवं डिजिटल सेवाएं' },
    { num: 5, en: 'Aadhaar Authentication, Face Recognition e-KYC & Biometric Iris Verification Protocols', te: 'ఆధార్ ప్రామాణీకరణ, ఫేస్ రికగ్నిషన్ ఈ-కేవైసీ (e-KYC) & బయోమెట్రిక్ వెరిఫికేషన్', hi: 'आधार प्रमाणीकरण एवं बायोमेट्रिक' },
    { num: 6, en: 'DigiLocker & Digital Certificate Vaults: Citizen Access to Caste, Income & Land Records', te: 'డిజిలాకర్ & డిజిటల్ సర్టిఫికెట్లు: కుల, ఆదాయ & భూ ధృవీకరణ పత్రాలు', hi: 'डिजीलॉकर एवं डिजिटल प्रमाणपत्र' },
    { num: 7, en: 'Direct Benefit Transfer (DBT) Portal, NPCI Aadhaar Seeding & Bank Account Linkage Verification', te: 'DBT పోర్టల్, NPCI ఆధార్ సీడింగ్ & బ్యాంక్ ఖాతాల లింకేజీ వెరిఫికేషన్', hi: 'डीबीटी पोर्टल एवं आधार सीडिंग' },
    { num: 8, en: '1902 Toll-Free Grievance Call Centre & Citizen Feedback Loop Mechanism', te: '1902 టోల్ ఫ్రీ ప్రజా సమస్యల కాల్ సెంటర్ & ఫీడ్‌బ్యాక్ యంత్రాంగం', hi: '1902 कॉल सेंटर एवं फीडबैक' },
    { num: 9, en: 'Ward Secretariat System: Urban Local Body (ULB) Service Delivery Architecture in AP', te: 'వార్డు సచివాలయ వ్యవస్థ: మున్సిపాలిటీలు & కార్పొరేషన్లలో పట్టణ పౌర సేవలు', hi: 'वार्ड सचिवालय प्रणाली' },
    { num: 10, en: 'Urban Sanitation, Source Waste Segregation & Swachha Andhra Corporation Framework', te: 'పట్టణ పారిశుధ్యం, తడి-పొడి చెత్త వేరుచేయుట & స్వచ్ఛ ఆంధ్ర కార్పొరేషన్', hi: 'शहरी स्वच्छता एवं कचरा पृथक्करण' },
    { num: 11, en: 'Town Planning & Building Permissions: Village/Ward Secretariat Approvals & Auto DCR', te: 'టౌన్ ప్లానింగ్ & భవన నిర్మాణ అనుమతులు: సచివాలయాల ద్వారా అప్రూవల్స్', hi: 'टाउन प्लानिंग एवं भवन निर्माण अनुमति' },
    { num: 12, en: 'Non-Agricultural Property Registration at Village Secretariats (Gram Panchayats)', te: 'గ్రామ సచివాలయాలలో వ్యవసాయేతర ఆస్తుల రిజిస్ట్రేషన్ల ప్రక్రియ', hi: 'गैर-कृषि संपत्ति पंजीकरण' },
    { num: 13, en: 'Digital Payment Ecosystem: UPI, Micro-ATMs, BC Points & Cashless Villages in AP', te: 'డిజిటల్ చెల్లింపుల వ్యవస్థ: UPI, మైక్రో-ATMs, బ్యాంకింగ్ కరస్పాండెంట్ (BC) కేంద్రాలు', hi: 'डिजिटल भुगतान एवं माइक्रो एटीएम' },
    { num: 14, en: 'Cyber Safety, Phishing Prevention & Secure Handling of Citizen Personal Data in Secretariats', te: 'సైబర్ భద్రత, ఫిషింగ్ నివారణ & పౌరుల వ్యక్తిగత డేటా రక్షణ మార్గదర్శకాలు', hi: 'साइबर सुरक्षा एवं नागरिक डेटा सुरक्षा' },
    { num: 15, en: 'Village Volunteer Hierarchy, Monthly Honorarium & 50 Household Clustering System', te: 'గ్రామ వాలంటీర్ల వ్యవస్థ, విధులు & 50 కుటుంబాల సమూహ (క్లస్టర్) మ్యాపింగ్', hi: 'ग्राम वालंटियर प्रणाली' },
    { num: 16, en: 'Social Audit for MGNREGS, PDS & YSR Housing Schemes at Village Secretariat Level', te: 'గ్రామ సచివాలయాల్లో ఉపాధి హామీ (MGNREGS), PDS & గృహ నిర్మాణ సామాజిక తనిఖీ (Social Audit)', hi: 'सोशल ऑडिट एवं पारदर्शिता' }
  ];

  const digitalGovTopics: Topic[] = digitalGovTopicsData.map((item, idx) => ({
    id: `sach-digi-${String(idx + 1).padStart(2, '0')}`,
    subjectId: 'sach-digital',
    courseId: 'ap-grama-sachivalayam',
    order: idx + 1,
    title: item.en,
    titleTe: item.te,
    titleHi: item.hi,
    shortDesc: `Online portal operations, biometric workflows, and citizen service delivery for ${item.en}.`,
    shortDescTe: `${item.te} పై డిజిటల్ పాలన, ఆన్‌లైన్ పోర్టల్స్ & పౌర సేవల వివరాలు.`,
    shortDescHi: `${item.en} - डिजिटल गवर्नेंस एवं ऑनलाइन सेवाएं।`,
    readTimeMinutes: 11,
    difficulty: 'Standard',
    highYieldWeightage: 'Core (3 Marks)',
    content: {
      overview: `Detailed technical and operational guide on ${item.en} covering portals, biometric e-KYC, and citizen grievance resolution in Andhra Pradesh.`,
      overviewTe: `${item.te} అనేది డిజిటల్ గవర్నెన్స్ విభాగంలో సచివాలయ సిబ్బందికి అత్యంత కీలకమైన అంశం.`,
      sections: [
        {
          title: `1. Digital Architecture & Operational Protocols: ${item.en}`,
          titleTe: `1. డిజిటల్ వేదికలు & విధి నిర్వహణ నిబంధనలు: ${item.te}`,
          paragraphs: [
            `Comprehensive technical breakdown of ${item.en} covering Aadhaar-based authentication, Spandana SLA timelines, and doorstep services.`,
            `Follows the latest digital workflow instructions issued by the Department of Gram Volunteers/Ward Volunteers and Village Secretariats (GVWV&VSWS).`
          ],
          paragraphsTe: [
            `ఈ అధ్యాయంలో మీసేవ పోర్టల్, స్పందన గ్రీవెన్స్ పరిష్కారం మరియు ఫేస్ రికగ్నిషన్ ఈ-కేవైసీ విధానాలు వివరించబడ్డాయి.`
          ],
          keyPoints: [
            `Examines Spandana redressal SLA (7 to 14 days depending on service type).`,
            `Covers secure handling of citizen demographic data.`
          ],
          keyPointsTe: [
            `స్పందన గ్రీవెన్స్ పరిష్కారానికి నిర్దేశించిన నిర్దిష్ట సేవా కాలపరిమితులు.`
          ]
        }
      ],
      quickFacts: [
        { label: 'Subject', val: 'Digital Governance & Doorstep Services' },
        { label: 'Target Exam', val: 'AP Grama Sachivalayam (All Posts)' }
      ],
      quickFactsTe: [
        { label: 'విభాగం', val: 'డిజిటల్ పాలన & గుమ్మం వద్దకే సేవలు' },
        { label: 'పరీక్ష', val: 'గ్రామ సచివాలయం' }
      ],
      revisionPoints: [
        `Memorize 1902 toll-free helpline and Spandana redressed application verification stages.`
      ],
      revisionPointsTe: [
        `1902 టోల్ ఫ్రీ నంబర్ మరియు స్పందన పోర్టల్ పరిష్కార విధానాలను పునశ్చరణ చేయండి.`
      ]
    },
    questions: [
      {
        id: `sach-digi-q-${idx + 1}`,
        topicId: `sach-digi-${String(idx + 1).padStart(2, '0')}`,
        question: `What is the dedicated toll-free helpline number in Andhra Pradesh for citizens to register public grievances under the Spandana platform?`,
        questionTe: `ఆంధ్రప్రదేశ్‌లో స్పందన వేదిక ద్వారా ప్రజా సమస్యలను నమోదు చేసుకునేందుకు కేటాయించిన ఉచిత టోల్ ఫ్రీ నంబర్ ఏది?`,
        options: [
          `1902`,
          `108`,
          `104`,
          `100`
        ],
        optionsTe: [
          `1902`,
          `108`,
          `104`,
          `100`
        ],
        correctIndex: 0,
        explanation: `1902 is the statewide dedicated toll-free helpline for the Spandana Public Grievance Redressal platform in Andhra Pradesh.`,
        referenceAct: 'GVWV & VSWS Department Official Portal'
      }
    ]
  }));

  // Total topics = 16 (Welfare) + 16 (Panchayati Raj) + 16 (GS/Geo) + 16 (Aptitude) + 16 (Digital Gov) = 80 Topics!
  return [
    {
      id: 'sach-schemes',
      courseId: 'ap-grama-sachivalayam',
      name: 'AP Government Flagship Schemes & Welfare Architecture',
      nameTe: 'ఆంధ్రప్రదేశ్ సంక్షేమ పథకాలు & నవరత్నాలు',
      nameHi: 'आंध्र प्रदेश प्रमुख कल्याणकारी योजनाएं',
      icon: 'HeartHandshake',
      totalHours: 25,
      topics: welfareSchemesTopics
    },
    {
      id: 'sach-panchayati',
      courseId: 'ap-grama-sachivalayam',
      name: 'Panchayati Raj & Village Administration',
      nameTe: 'పంచాయతీ రాజ్ చట్టం & గ్రామ పరిపాలన',
      nameHi: 'पंचायती राज एवं ग्राम प्रशासन',
      icon: 'Home',
      totalHours: 25,
      topics: panchayatiRajTopics
    },
    {
      id: 'sach-gs',
      courseId: 'ap-grama-sachivalayam',
      name: 'General Studies, Current Affairs & AP Geography',
      nameTe: 'జనరల్ స్టడీస్, కరెంట్ అఫైర్స్ & ఏపీ జాగ్రఫీ',
      nameHi: 'सामान्य अध्ययन एवं आंध्र प्रदेश का भूगोल',
      icon: 'Globe',
      totalHours: 20,
      topics: gsGeoTopics
    },
    {
      id: 'sach-aptitude',
      courseId: 'ap-grama-sachivalayam',
      name: 'Aptitude, Mental Ability & Drafting Skills',
      nameTe: 'అంకగణితం, రీజనింగ్ & అధికారిక లేఖారచన',
      nameHi: 'अंकगणित, तार्किक क्षमता एवं प्रारूपण',
      icon: 'Calculator',
      totalHours: 20,
      topics: aptitudeTopics
    },
    {
      id: 'sach-digital',
      courseId: 'ap-grama-sachivalayam',
      name: 'Digital Governance, Spandana & Doorstep Services',
      nameTe: 'డిజిటల్ పాలన, స్పందన & గుమ్మం వద్దకే పౌర సేవలు',
      nameHi: 'डिजिटल शासन एवं नागरिक द्वार सेवाएं',
      icon: 'Cpu',
      totalHours: 20,
      topics: digitalGovTopics
    }
  ];
}
