/* ══════════════════════════════════════════════════════════════ */
/* AAGMAN OVERSEAS - MAIN JAVASCRIPT                             */
/* ══════════════════════════════════════════════════════════════ */

// ══ COUNTRY DATA - DETAILED VISA INFORMATION ══
const COUNTRY_DATA = {
  canada: {
    name: 'Canada',
    flag: '🇨🇦',
    tagline: 'Express Entry pathway to permanent residency',
    headerBg: 'linear-gradient(135deg, #ff0000, #ff6b6b)',
    study: {
      title: 'Canada Student Visa (Study Permit)',
      overview: 'Study at world-class institutions with part-time work opportunities and clear path to permanent residency.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Up to course duration' },
        { icon: '📝', label: 'IELTS Required', val: '6.0 bands (varies)' },
        { icon: '💰', label: 'Funds Needed', val: 'CAD 20,000-30,000/yr + tuition' },
        { icon: '💵', label: 'Visa Fee', val: 'CAD 150 (~₹9,000)' },
        { icon: '⏳', label: 'Processing', val: '4-16 weeks' },
        { icon: '🎯', label: 'Post-Study Work', val: 'PGWP up to 3 years' }
      ],
      process: [
        'Receive acceptance letter from DLI (Designated Learning Institution)',
        'Arrange proof of funds (CAD 20,000-30,000)',
        'Apply for study permit online via IRCC portal',
        'Complete medical exam (if required)',
        'Provide biometrics at IRCC office',
        'Receive study permit approval',
        'Arrive in Canada and activate permit'
      ],
      documents: [
        'Valid Passport',
        'Acceptance letter from Canadian institution',
        'Proof of funds (bank statements, GIC)',
        'IELTS/TOEFL scorecard',
        'Academic transcripts & certificates',
        'CV and study plan (SOP)',
        'Medical examination report',
        'Police clearance certificate',
        'Proof of ties to India',
        'Travel insurance'
      ],
      tips: '🇨🇦 Post-Study Work Permit (PGWP) = key to PR! Study 2 years → work 3 years → qualify for PR. Work experience on PGWP counts towards Express Entry points. Popular institutions: UBC, McGill, University of Toronto!'
    },
    work: {
      title: 'Canada Work Permit (Employer-Sponsored)',
      overview: 'Work in Canada with employer sponsorship. Pathways: LMIA (Labour Market Impact Assessment) or International Mobility Program.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: '1-4 years' },
        { icon: '📝', label: 'English', val: 'IELTS 5.5+ (CLB 5)' },
        { icon: '💰', label: 'Min Salary', val: 'Prevailing wage of role' },
        { icon: '💵', label: 'Visa Fee', val: 'CAD 100' },
        { icon: '⏳', label: 'Processing', val: '4-12 months' },
        { icon: '🎯', label: 'PR Path', val: 'Express Entry (CEC)' }
      ],
      process: [
        'Find Canadian employer willing to sponsor',
        'Employer obtains LMIA from ESDC (or IMP exemption)',
        'Employer files job offer with LMIA',
        'You apply for work permit with job offer + LMIA',
        'Complete medical exam',
        'Provide biometrics',
        'Work permit approval',
        'Begin employment in Canada'
      ],
      documents: [
        'Valid Passport',
        'Job offer letter (permanent position)',
        'LMIA or IMP document',
        'Educational qualifications',
        'Work experience letters',
        'IELTS/TOEFL scorecard',
        'Medical examination',
        'Police clearance certificate',
        'CV/Resume',
        'Proof of funds'
      ],
      tips: '💼 Canadian Experience Class (CEC) fastest PR route: 1 year skilled work → apply Express Entry → PR in 6 months! Tech, healthcare, skilled trades are in high demand.'
    },
    pr: {
      title: 'Canada Permanent Residency (Express Entry)',
      overview: 'Canada\'s fast-track PR system. Points-based: age, language, education, work experience. 480+ CRS points recommended. Processing: 6 months.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Permanent' },
        { icon: '📝', label: 'Language', val: 'IELTS 7.0+ (CLB 7) recommended' },
        { icon: '💰', label: 'Points', val: '470-480+ CRS recommended' },
        { icon: '💵', label: 'Application Fee', val: 'CAD 550 (~₹33,000)' },
        { icon: '⏳', label: 'Processing', val: '6 months (IRCC targets)' },
        { icon: '🎯', label: 'Citizenship', val: '3 years residence' }
      ],
      process: [
        'Take IELTS (7.0+ for better points)',
        'Get educational credential evaluation (ECA)',
        'Calculate CRS score (1-1200 points)',
        'Create Express Entry profile',
        'Receive Invitation to Apply (ITA)',
        'Submit complete PR application',
        'Medical exam + police clearance',
        'Receive Permanent Residency approval'
      ],
      documents: [
        'Valid Passport',
        'IELTS scorecard',
        'ECA (educational credential assessment)',
        'Work experience letters',
        'NOC (National Occupation Classification) alignment',
        'Tax returns (last 5 years)',
        'Medical examination',
        'Police clearance certificate',
        'Birth certificate',
        'Marriage certificate (if applicable)'
      ],
      tips: '🏆 CRS above 480 gives high chance. PNP (Provincial Nomination) adds 600 CRS points — instant PR invitation! Top provinces: Ontario, BC, Alberta. Aagman Overseas can maximize your CRS score!'
    }
  },

  australia: {
    name: 'Australia',
    flag: '🇦🇺',
    tagline: 'Top destination for skilled migrants & students',
    headerBg: 'linear-gradient(135deg, #00264d, #00843d)',
    study: {
      title: 'Australia Student Visa (Subclass 500)',
      overview: 'Australia offers globally ranked universities, vibrant student life, and excellent post-study work rights.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Course duration' },
        { icon: '📝', label: 'IELTS Required', val: '5.5–6.5' },
        { icon: '💰', label: 'Funds Needed', val: 'AUD 21,041/yr + tuition' },
        { icon: '💵', label: 'Visa Fee', val: 'AUD 710' },
        { icon: '⏳', label: 'Processing', val: '4–6 weeks' },
        { icon: '🎯', label: 'Post-Study Work', val: '485 Graduate Visa: 2–4 years' }
      ],
      process: [
        'Choose CRICOS-registered institution & get CoE',
        'Arrange OSHC (health cover)',
        'Write GTE statement',
        'Apply via ImmiAccount',
        'Complete health examination',
        'Provide biometrics',
        'Receive visa grant'
      ],
      documents: [
        'Valid Passport',
        'CoE from institution',
        'IELTS/PTE scorecard',
        'GTE statement',
        'Bank statements (6 months)',
        'Academic certificates',
        'OSHC insurance',
        'Health exam report',
        'Proof of accommodation',
        'Passport photographs'
      ],
      tips: '🎯 GTE statement is critical. Show clear study plan & strong ties to India. Aagman Overseas writes professional GTEs with 98% success rate!'
    },
    work: {
      title: 'Australia Work Visa (TSS Subclass 482)',
      overview: 'Temporary Skill Shortage visa for skilled workers. Up to 4 years with PR pathway.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: '2–4 years' },
        { icon: '📝', label: 'English', val: 'IELTS 5.0+' },
        { icon: '💰', label: 'Min Salary', val: 'AUD 70,000+/yr' },
        { icon: '💵', label: 'Visa Fee', val: 'AUD 3,115' },
        { icon: '⏳', label: 'Processing', val: '3–6 months' },
        { icon: '🎯', label: 'PR Pathway', val: 'Subclass 186 after 2–3 years' }
      ],
      process: [
        'Employer approved 482 sponsor',
        'Occupation on MLTSSL/STSOL',
        'Skills assessment',
        'Employer lodges sponsorship',
        'Apply for 482 visa',
        'Health exam & police clearance',
        'Visa grant'
      ],
      documents: [
        'Valid Passport',
        'Job offer letter',
        'Skills assessment',
        'Educational certificates',
        'Work experience letters',
        'IELTS scorecard',
        'Health exam report',
        'Police clearance',
        'CV/Resume',
        'Photographs'
      ],
      tips: '💼 Healthcare, IT, Engineering, Accounting on shortage list — faster approval! STEM workers can get 4-year visa with PR pathway!'
    },
    pr: {
      title: 'Australia PR — Skilled Independent (Subclass 189)',
      overview: 'Points-based Skilled Migration. 65+ points required. Age, English, skills assessment and experience contribute to score.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Permanent' },
        { icon: '📝', label: 'IELTS', val: 'IELTS 6.0+' },
        { icon: '💰', label: 'Points', val: '65+ points' },
        { icon: '💵', label: 'Visa Fee', val: 'AUD 4,640' },
        { icon: '⏳', label: 'Processing', val: '12–24 months' },
        { icon: '🎯', label: 'Citizenship', val: 'After 4 years PR' }
      ],
      process: [
        'Complete skills assessment',
        'Get IELTS 6.0+ (8.0 = more points)',
        'Submit EOI on SkillSelect',
        'Receive invitation in points draw',
        'Lodge PR application',
        'Health exam + police clearance',
        'Receive PR grant'
      ],
      documents: [
        'Valid Passport',
        'Skills assessment',
        'IELTS/PTE scorecard',
        'Academic certificates',
        'Work experience letters',
        'Tax returns (5 years)',
        'Health exam report',
        'Police clearance',
        'Birth certificate',
        'Marriage certificate'
      ],
      tips: '⭐ 65 points = minimum. Scoring 70+ increases chances. Age under 35 = maximum points. Partner skills assessment can add bonus points!'
    }
  },

  uk: {
    name: 'United Kingdom',
    flag: '🇬🇧',
    tagline: 'Skilled Worker visas and world-class education',
    headerBg: 'linear-gradient(135deg, #012169, #003478)',
    study: {
      title: 'UK Student Visa (Subclass 4)',
      overview: 'Study at Russell Group universities. Part-time work allowed during studies. Post-study work visa (up to 3 years) for graduates.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Course duration' },
        { icon: '📝', label: 'IELTS', val: '5.5–6.5' },
        { icon: '💰', label: 'Tuition', val: 'GBP 9,000-25,000+/yr' },
        { icon: '💵', label: 'Visa Fee', val: 'GBP 719' },
        { icon: '⏳', label: 'Processing', val: '3 weeks (fast-track)' },
        { icon: '🎯', label: 'Post-Study', val: 'Graduate Visa: 2-3 years work' }
      ],
      process: [
        'Get offer from UK UKPRP registered university',
        'Arrange proof of funds',
        'Apply for student visa online',
        'Complete biometric appointment',
        'Health check (if from high-TB countries)',
        'Provide documents at visa center',
        'Receive visa decision'
      ],
      documents: [
        'Valid Passport',
        'Offer letter & CAS (Confirmation of Acceptance)',
        'IELTS/Duolingo scorecard',
        'Proof of funds (tuition + living costs)',
        'Bank statements (bank statement letter)',
        'Academic transcripts',
        'CV/Resume',
        'Tuberculosis test (if required)',
        'Travel insurance',
        'Proof of accommodation'
      ],
      tips: '🎓 Post-Study Work Visa = 2-3 years work rights! Earn 80% of UK average salary during studies (part-time). Russell Group universities (Oxford, Cambridge, Imperial) most prestigious!'
    },
    work: {
      title: 'UK Skilled Worker Visa (Subclass 2)',
      overview: 'Work for UK employer. Points-based: salary points + job offer. Minimum £30,960/year. Indefinite leave to remain (ILR) after 5 years.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: '1-5 years' },
        { icon: '📝', label: 'English', val: 'IELTS B1 recommended' },
        { icon: '💰', label: 'Min Salary', val: 'GBP 30,960/yr' },
        { icon: '💵', label: 'Visa Fee', val: 'GBP 719' },
        { icon: '⏳', label: 'Processing', val: '4-8 weeks' },
        { icon: '🎯', label: 'ILR Path', val: '5 years work' }
      ],
      process: [
        'Find UK employer to sponsor',
        'Employer gets A-rated sponsor license',
        'Employer sponsors you with job offer',
        'You apply online with CoS (Certificate of Sponsorship)',
        'Complete biometric appointment',
        'Health check (if required)',
        'Visa decision in 4-8 weeks'
      ],
      documents: [
        'Valid Passport',
        'Job offer letter',
        'CoS (Certificate of Sponsorship)',
        'Educational qualifications',
        'Work experience certificates',
        'IELTS/Duolingo scorecard',
        'TB test (if applicable)',
        'Proof of funds',
        'CV/Resume',
        'Professional licenses'
      ],
      tips: '💼 Healthcare workers, IT, Engineering in high demand! Salary of GBP 40,000+ = easier approval. 5 years work → ILR → British citizenship! London, Manchester, Edinburgh popular destinations.'
    },
    pr: {
      title: 'UK Indefinite Leave to Remain (ILR) / Citizenship',
      overview: 'After 5 years of continuous work on Skilled Worker visa, apply for Indefinite Leave to Remain (ILR). After 1-3 years of ILR, eligible for British citizenship.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Permanent (ILR)' },
        { icon: '📝', label: 'Language', val: 'English (Life in UK test)' },
        { icon: '💰', label: 'Requirement', val: '5 years continuous work' },
        { icon: '💵', label: 'ILR Fee', val: 'GBP 2,414' },
        { icon: '⏳', label: 'Processing', val: '4-6 months' },
        { icon: '🎯', label: 'Citizenship', val: '1-3 years after ILR' }
      ],
      process: [
        'Work on Skilled Worker visa for 5 years',
        'Maintain continuous UK residence',
        'Pass Life in the UK test',
        'Obtain English language certificate',
        'Apply for ILR (no time limit)',
        'Receive ILR status',
        'After 1-3 years, apply for British citizenship',
        'Pass citizenship ceremony & receive passport'
      ],
      documents: [
        'Valid Passport',
        'All previous UK visas',
        'Proof of 5 years work',
        'TB test (if from high-risk countries)',
        'Life in UK test certificate',
        'English language certificate (B1)',
        'Tax returns & payslips',
        'Proof of UK residence (councils tax, utilities)',
        'No criminal convictions declaration',
        'Professional fees paid to relevant bodies'
      ],
      tips: '🇬🇧 5 years continuous = automatic right to ILR. After ILR, 1-3 years work → British citizenship! British passport = visa-free access to 185+ countries! London is financial hub, Edinburgh for tech.'
    }
  },

  usa: {
    name: 'United States',
    flag: '🇺🇸',
    tagline: 'F-1 Student visa and employment-based immigration',
    headerBg: 'linear-gradient(135deg, #002868, #3c3b6b)',
    study: {
      title: 'USA F-1 Student Visa',
      overview: 'Study at top US universities (Harvard, MIT, Stanford). Part-time on-campus work allowed. OPT work after graduation (1-3 years).',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Course + 12-60 months OPT' },
        { icon: '📝', label: 'IELTS/TOEFL', val: '80 TOEFL / 6.5 IELTS' },
        { icon: '💰', label: 'Tuition', val: 'USD 20,000-60,000+/yr' },
        { icon: '💵', label: 'Visa Fee', val: 'USD 160' },
        { icon: '⏳', label: 'Processing', val: '1-2 weeks (after I-20)' },
        { icon: '🎯', label: 'Post-Study', val: 'OPT: 12-36 months work' }
      ],
      process: [
        'Get acceptance & I-20 from US SEVP university',
        'Apply for F-1 visa at US embassy',
        'Schedule visa interview',
        'Visa approval (typically same day)',
        'Arrive in US before I-20 start date',
        'Enroll at university',
        'After graduation, apply for OPT (Optional Practical Training)'
      ],
      documents: [
        'Valid Passport',
        'I-20 form from university',
        'Acceptance letter',
        'TOEFL/SAT scores',
        'Proof of funds (I-864 Affidavit)',
        'Bank statements',
        'Educational transcripts',
        'Proof of ties to India',
        'Medical records & vaccination history',
        'CV/Resume'
      ],
      tips: '🎓 OPT allows 12-36 months work in US after graduation! STEM fields get 24-month OPT extension. Top universities: MIT, Stanford, Harvard, Cornell, UC Berkeley. H-1B sponsorship possible after OPT!'
    },
    work: {
      title: 'USA H-1B Work Visa',
      overview: 'Specialty occupation work visa. Requires US employer sponsorship. Lottery-based selection. Pathway to green card (permanent residency).',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: '3 years (renewable to 6)' },
        { icon: '📝', label: 'English', val: 'IELTS 6.0+' },
        { icon: '💰', label: 'Min Salary', val: 'Prevailing wage (varies)' },
        { icon: '💵', label: 'Visa Fee', val: 'USD 460' },
        { icon: '⏳', label: 'Processing', val: '4-6 months' },
        { icon: '🎯', label: 'Green Card', val: '5-8 years PERM + EB' }
      ],
      process: [
        'Find US employer willing to sponsor',
        'Employer files H-1B petition',
        'Approved in lottery (annual cap: 85,000)',
        'Receive H-1B approval notice',
        'Apply at US embassy for visa',
        'H-1B visa interview',
        'Visa approval & travel to US',
        'Begin H-1B employment'
      ],
      documents: [
        'Valid Passport',
        'H-1B petition approval',
        'Job offer letter',
        'Educational credentials',
        'Work experience certificates',
        'CV/Resume',
        'IELTS/TOEFL scorecard',
        'Medical examination',
        'Police clearance certificate',
        'Birth certificate'
      ],
      tips: '💼 Tech companies (Google, Microsoft, Amazon, Apple) major H-1B sponsors. STEM fields: IT, Software Engineering, Data Science, Finance. Salary USD 100,000-200,000+ common! Green card sponsorship possible.'
    },
    pr: {
      title: 'USA Green Card (Employment-Based EB-3)',
      overview: 'Permanent Residency through employer sponsorship. EB-3: Skilled Workers. Process: PERM Labor Certification → I-140 → I-485. Takes 5-8 years.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Permanent Residency' },
        { icon: '📝', label: 'Language', val: 'IELTS 6.0+' },
        { icon: '💰', label: 'Requirement', val: 'Bachelor\'s + experience' },
        { icon: '💵', label: 'Process Cost', val: 'USD 5,000-15,000' },
        { icon: '⏳', label: 'Timeline', val: '5-8 years (India nationals)' },
        { icon: '🎯', label: 'Citizenship', val: '5 years after green card' }
      ],
      process: [
        'Employer sponsors PERM Labor Certification',
        'PERM approval (6-24 months)',
        'Employer files I-140 petition',
        'I-140 approval (6-12 months)',
        'I-485 priority date becomes current',
        'Adjust status to green card',
        'Medical exam & biometrics',
        'Green card approval & receipt'
      ],
      documents: [
        'Valid Passport',
        'PERM approval notice',
        'I-140 approval notice',
        'Educational credentials',
        'Work experience letters',
        'Form I-485 application',
        'Medical examination (Form I-693)',
        'Police clearance certificate',
        'Birth certificate',
        'Affidavit of support'
      ],
      tips: '🇺🇸 India nationals face 5-8 year wait due to per-country caps. EB-2 faster than EB-3 but requires Master\'s degree. H-1B → Green Card common pathway. Once green card → visa-free access to 190+ countries!'
    }
  },

  germany: {
    name: 'Germany',
    flag: '🇩🇪',
    tagline: 'Exceptional education & job seeker visa opportunities',
    headerBg: 'linear-gradient(135deg, #000000, #333333)',
    study: {
      title: 'Germany Student Visa (Blocked Account)',
      overview: 'Study tuition-free (or minimal fees) at German universities. Excellent technical education. Part-time work allowed (120 full days/year).',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Course length' },
        { icon: '📝', label: 'Language', val: 'German B1 or English (Masters)' },
        { icon: '💰', label: 'Tuition', val: 'EUR 0-500/semester' },
        { icon: '💵', label: 'Blocked Account', val: 'EUR 10,332/year' },
        { icon: '⏳', label: 'Processing', val: '4-12 weeks' },
        { icon: '🎯', label: 'Post-Study', val: 'Job seeker: 18 months' }
      ],
      process: [
        'German university acceptance letter',
        'Open blocked account (EUR 10,332)',
        'Medical exam & TB test',
        'Apply for student visa at German embassy',
        'Health insurance proof',
        'Visa interview',
        'Visa approval in 4-8 weeks'
      ],
      documents: [
        'Valid Passport',
        'University acceptance letter',
        'Blocked account proof (EUR 10,332)',
        'Health insurance certificate',
        'Medical exam report',
        'TB test certificate',
        'German language certificate (B1)',
        'CV/Resume',
        'Academic transcripts',
        'Birth certificate'
      ],
      tips: '📚 FREE tuition at most public universities! After graduation, 18-month job seeker visa to find work = pathway to permanent residency! Learn German (B1 takes 6-12 months). TU Munich, Heidelberg, Berlin universities excellent!'
    },
    work: {
      title: 'Germany Job Seeker Visa / Work Permit',
      overview: 'Job Seeker Visa (6 months) to find skilled work. Skilled Worker Visa after job offer. Pathway to permanent residency (PR) after 5 years.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: '6-12 months + work visa' },
        { icon: '📝', label: 'German', val: 'B1 recommended' },
        { icon: '💰', label: 'Min Salary', val: 'EUR 55,200+/yr' },
        { icon: '💵', label: 'Visa Fee', val: 'EUR 100-280' },
        { icon: '⏳', label: 'Processing', val: '2-4 weeks' },
        { icon: '🎯', label: 'PR', val: '5 years Skilled Worker' }
      ],
      process: [
        'Apply for Job Seeker Visa (6 months extendable)',
        'Search for qualified job in Germany',
        'Receive job offer',
        'Apply for Skilled Worker Visa',
        'Health insurance + biometrics',
        'Visa approval',
        'Begin employment in Germany'
      ],
      documents: [
        'Valid Passport',
        'Job offer letter (EUR 55,200+ salary)',
        'Educational certificates (Bachelor\'s+)',
        'Work experience letters',
        'CV/Resume',
        'German language certificate',
        'Health insurance proof',
        'Medical examination',
        'Police clearance',
        'Proof of accommodation'
      ],
      tips: '💼 Germany faces labor shortage in IT, Engineering, Healthcare! Job Seeker Visa = 6 months to find work risk-free! After 5 years work → permanent residency (Niederlassungserlaubnis)! Berlin, Munich, Frankfurt major hubs.'
    },
    pr: {
      title: 'Germany Permanent Residence (Niederlassungserlaubnis)',
      overview: 'After 5 years work on Skilled Worker visa, apply for permanent residency. B1 German language required. After 8 years residence, eligible for German citizenship.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Permanent' },
        { icon: '📝', label: 'Language', val: 'German B1' },
        { icon: '💰', label: 'Requirement', val: '5 years Skilled Worker' },
        { icon: '💵', label: 'Application Fee', val: 'EUR 100' },
        { icon: '⏳', label: 'Processing', val: '2-4 weeks' },
        { icon: '🎯', label: 'Citizenship', val: '8 years residence total' }
      ],
      process: [
        'Work 5 years on Skilled Worker Visa',
        'Pass German language B1 test',
        'Apply for permanent residency',
        'Submit application at immigration office',
        'Interview & document review',
        'Approval of permanent residence',
        'After 8 years total residence → German citizenship eligible'
      ],
      documents: [
        'Valid Passport',
        'All previous residence permits',
        'German language B1 certificate',
        'Work contracts (5 years)',
        'Tax returns & payslips',
        'Proof of accommodation',
        'Health insurance (5 years)',
        'Police clearance certificate',
        'No criminal record declaration',
        'Integration course certificate'
      ],
      tips: '🇩🇪 EU Blue Card: IT/STEM workers → PR eligible after 33 months (with B1 German) or 21 months (with B2 German)! After permanent residency, can access German health/education freely. German citizenship = Schengen freedom!'
    }
  },

  newzealand: {
    name: 'New Zealand',
    flag: '🇳🇿',
    tagline: 'Skilled migration & study opportunities in paradise',
    headerBg: 'linear-gradient(135deg, #002856, #00467f)',
    study: {
      title: 'New Zealand Student Visa',
      overview: 'Study at world-class universities (Auckland, Otago, Victoria). Work part-time during studies (up to 20 hours/week). Post-study work visa available.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Course length' },
        { icon: '📝', label: 'IELTS', val: '6.0-6.5 (varies by course)' },
        { icon: '💰', label: 'Tuition', val: 'NZD 15,000-30,000/yr' },
        { icon: '💵', label: 'Visa Fee', val: 'Free (included in processing)' },
        { icon: '⏳', label: 'Processing', val: '2-4 weeks' },
        { icon: '🎯', label: 'Post-Study', val: 'Open to Residence (pathway)' }
      ],
      process: [
        'Get acceptance from NZ educational institution',
        'Arrange proof of funds',
        'Apply for student visa online',
        'Health examination (if required)',
        'Police clearance (if required)',
        'Provide biometrics',
        'Visa decision in 2-4 weeks'
      ],
      documents: [
        'Valid Passport',
        'Offer letter from NZ institution',
        'IELTS/TOEFL scorecard',
        'Proof of funds (tuition + living)',
        'Bank statements',
        'Academic transcripts',
        'Medical examination (if required)',
        'Police clearance (if from high-risk countries)',
        'Proof of accommodation',
        'Travel insurance'
      ],
      tips: '🎓 Post-study work visa = 1-3 years after graduation! Quality of life excellent. Tuition cheaper than Australia/Canada. University of Auckland, Otago University highly ranked! Can transition to residence visa.'
    },
    work: {
      title: 'New Zealand Work Visa (Essential Skills)',
      overview: 'Employer-sponsored work visa. Long-term visa pathway to permanent residence (skilled occupations list).',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: '1-3 years' },
        { icon: '📝', label: 'English', val: 'IELTS 5.0+' },
        { icon: '💰', label: 'Min Salary', val: 'NZD 60,000/yr' },
        { icon: '💵', label: 'Visa Fee', val: 'NZD 3,000-4,000' },
        { icon: '⏳', label: 'Processing', val: '2-6 weeks' },
        { icon: '🎯', label: 'Residence', val: 'Long-term pathway' }
      ],
      process: [
        'Secure job offer from NZ employer',
        'Employer arranges visa sponsorship',
        'Employer applies for work visa',
        'Background check & health exam',
        'Visa approval',
        'Relocate to NZ',
        'Begin employment'
      ],
      documents: [
        'Valid Passport',
        'Job offer letter',
        'Educational qualifications',
        'Work experience letters',
        'IELTS/TOEFL scorecard',
        'Medical examination',
        'Police clearance',
        'CV/Resume',
        'Proof of funds',
        'Character references'
      ],
      tips: '💼 Healthcare, IT, Engineering, Construction on demand! After 2 years work visa, can apply for Long-Term Residence (pathway to PR). NZ offers excellent work-life balance. Auckland, Wellington major cities.'
    },
    pr: {
      title: 'New Zealand Permanent Residence (Skilled Migrant)',
      overview: 'Points-based residence visa. 160+ points required. Jobs on essential skills shortage list preferred. Processing: 3-6 months.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Permanent' },
        { icon: '📝', label: 'English', val: 'IELTS 6.5+ (NZQA)' },
        { icon: '💰', label: 'Points', val: '160+ points' },
        { icon: '💵', label: 'Visa Fee', val: 'NZD 4,290' },
        { icon: '⏳', label: 'Processing', val: '3-6 months' },
        { icon: '🎯', label: 'Citizenship', val: '3 years residence' }
      ],
      process: [
        'Calculate points (age, experience, qualifications, job offer)',
        'Create Expression of Interest (EOI)',
        'Receive invitation to apply if points sufficient',
        'Submit complete residence visa application',
        'Medical examination (New Zealand doctor)',
        'Police clearance certificate',
        'Permanent Residence approval',
        'Land in New Zealand to activate PR'
      ],
      documents: [
        'Valid Passport',
        'IELTS/TOEFL 6.5+ certificate',
        'Educational qualifications (NZ-assessed)',
        'Work experience letters (5 years)',
        'Proof of funds (NZD 50,000)',
        'Medical examination (NZ doctor)',
        'Police clearance certificate',
        'Birth certificate',
        'Marriage certificate (if applicable)',
        'CV/Resume'
      ],
      tips: '⭐ Job offer adds 20-50 points! Occupations on essential skills shortage list easier to get PR. 160+ points = invitation likely. After 3 years PR → NZ citizenship. Quality of life excellent, stunning landscapes!'
    }
  },

  europe: {
    name: 'Europe',
    flag: '🇪🇺',
    tagline: 'Schengen freedom & global opportunities',
    headerBg: 'linear-gradient(135deg, #004b87, #0066cc)',
    study: {
      title: 'Europe Student Visa (Schengen Student)',
      overview: 'Study across 26 Schengen countries. Many universities offer tuition-free education. Free movement across EU. Post-study work visa available.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Course duration' },
        { icon: '📝', label: 'English', val: 'IELTS 6.0+ (varies)' },
        { icon: '💰', label: 'Tuition', val: 'Free-EUR 10,000/yr' },
        { icon: '💵', label: 'Schengen Fee', val: 'EUR 80 (Schengen visa)' },
        { icon: '⏳', label: 'Processing', val: '4-6 weeks' },
        { icon: '🎯', label: 'Post-Study', val: 'Job seeker/residence' }
      ],
      process: [
        'University acceptance from Schengen country',
        'Arrange proof of funds (EUR 12,000-20,000/yr)',
        'Apply for Schengen student visa',
        'Health insurance proof',
        'Visa interview at Schengen embassy',
        'Biometrics & document verification',
        'Visa approval in 4-6 weeks'
      ],
      documents: [
        'Valid Passport',
        'University acceptance letter',
        'IELTS/TOEFL 6.0+ certificate',
        'Proof of funds (bank statements)',
        'Health insurance policy',
        'Accommodation proof',
        'Academic transcripts',
        'CV/Resume',
        'Birth certificate',
        'Police clearance (if required)'
      ],
      tips: '🎓 Schengen = travel 26 countries visa-free! Many German/Nordic universities free tuition. Post-study visa = job search + work permit pathway. Study in Germany, work in Netherlands! Erasmus+ exchange programs!'
    },
    work: {
      title: 'Europe Skilled Worker / Blue Card',
      overview: 'EU Blue Card: Fast-track residence permit for skilled workers. Germany Chancenkarte & Job Seeker visas. 5+ years work → permanent residency.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: '2-4 years + permanent' },
        { icon: '📝', label: 'Language', val: 'English + local language B1' },
        { icon: '💰', label: 'Min Salary', val: 'EUR 55,200+/yr (varies)' },
        { icon: '💵', label: 'Application Fee', val: 'EUR 100-280' },
        { icon: '⏳', label: 'Processing', val: '2-4 weeks' },
        { icon: '🎯', label: 'PR', val: '5 years work → permanent' }
      ],
      process: [
        'Secure job offer from EU employer',
        'Employer initiates work permit',
        'Apply for Skilled Worker / Blue Card visa',
        'Health exam + police clearance',
        'Health insurance proof',
        'Biometrics & document submission',
        'Visa approval',
        'Begin work in EU country'
      ],
      documents: [
        'Valid Passport',
        'Job offer letter (EUR 55,200+ salary)',
        'Educational degrees (Bachelor\'s+)',
        'Work experience letters',
        'IELTS/TOEFL certificate',
        'Medical examination',
        'Police clearance certificate',
        'CV/Resume',
        'Proof of accommodation',
        'Health insurance proof'
      ],
      tips: '💼 EU Blue Card in Germany → after 21–33 months, eligible for German PR! Netherlands, Denmark, Sweden have fastest EU Blue Card processing. IT, Engineering, Healthcare are most in-demand across all EU countries!'
    },
    pr: {
      title: 'EU Long-term Residence Permit / Citizenship',
      overview: 'After 5 years of legal residence in most EU countries, apply for EU Long-term Residence Permit — covers 26 EU countries. Citizenship in 5–8 years.',
      keyFacts: [
        { icon: '⏱', label: 'Duration', val: 'Permanent (EU-wide)' },
        { icon: '📝', label: 'Language', val: 'B1 local language' },
        { icon: '💰', label: 'Income', val: 'Stable above minimum' },
        { icon: '💵', label: 'Fee', val: 'EUR 100–300' },
        { icon: '⏳', label: 'Processing', val: '3–12 months' },
        { icon: '🎯', label: 'Citizenship', val: '5–8 years residence' }
      ],
      process: [
        'Complete 5 years of legal, continuous residence',
        'Pass language test (B1 local language)',
        'Demonstrate stable income & accommodation',
        'Apply for EU Long-term Residence Permit',
        'After citizenship eligibility → apply for naturalization',
        'Receive EU passport'
      ],
      documents: [
        'Valid Passport',
        'All previous residence permits',
        'Language test certificate (B1)',
        'Tax returns (all 5 years)',
        'Employment contracts & payslips',
        'Proof of accommodation',
        'Health insurance (5 years)',
        'Police clearance certificate',
        'Integration course certificate',
        'No criminal record declaration'
      ],
      tips: '🇪🇺 EU citizenship = visa-free access to 185+ countries including USA (ESTA), UK, Canada, Australia! Best countries for Indian PR: Germany (fast-track 21 months), Netherlands (5 yrs), Ireland (5 yrs, English-speaking). Aagman Overseas specialists guide you step by step!'
    }
  }
};

let currentCountry = null;
let currentTab = 'study';

/* ══════════════════════════════════════════════ */
/* INITIALIZATION                                 */
/* ══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  renderCountries();
  renderServices();
  renderHowItWorks();
  renderStories();
  setupEventListeners();
  initializeTheme();
  startHeroCarousel();
});

/* ══════════════════════════════════════════════ */
/* RENDER FUNCTIONS                               */
/* ══════════════════════════════════════════════ */
function renderCountries() {
  const grid = document.getElementById('countriesGrid');
  grid.innerHTML = Object.entries(COUNTRY_DATA).map(([key, data]) => `
    <div class="country-card" onclick="openCountryModal('${key}')">
      <div class="country-flag-overlay">${data.flag}</div>
      <div class="country-name">${data.name}</div>
      <div class="country-visas">${data.tagline}</div>
    </div>
  `).join('');
}

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  const services = [
    { num: '01', icon: '🎓', title: 'Student Visa Assistance', desc: 'Comprehensive guidance for students seeking admissions and visas for universities in Canada, UK, Australia, USA, Germany, and New Zealand.', tags: ['IELTS/TOEFL', 'SOP Writing', 'University Selection', 'Visa Filing'] },
    { num: '02', icon: '💼', title: 'Work Permit & Visa', desc: 'Expert assistance in securing work permits and employment-based visas — from job search support to offer letter assessment and documentation.', tags: ['Skilled Worker', 'H1-B Guidance', 'Employer Liaison'] },
    { num: '03', icon: '🏡', title: 'Permanent Residency (PR)', desc: 'End-to-end PR application support for Express Entry Canada, Australian Points-Test, UK Skilled Worker ILR, and New Zealand Resident Visa.', tags: ['Express Entry', 'Points Assessment', 'ILR UK'] },
    { num: '04', icon: '👨‍👩‍👧', title: 'Family Sponsorship & Reunion', desc: 'Helping families reunite abroad. We handle spousal visas, parent & sibling sponsorship, and dependent permits with care and speed.', tags: ['Spouse Visa', 'Dependent Pass', 'Parent PR'] },
    { num: '05', icon: '🏢', title: 'Business & Investor Visa', desc: 'Tailored solutions for entrepreneurs seeking business immigration, investor visas, and start-up pathways in Canada, UAE, Portugal and Singapore.', tags: ['Startup Visa', 'Golden Visa', 'Investor PR'] },
    { num: '06', icon: '✈️', title: 'Visitor & Tourist Visa', desc: 'Quick and efficient processing for tourist, visitor, and short-stay visas. Perfect for families visiting loved ones or exploring before migrating.', tags: ['Schengen', 'Super Visa Canada', 'UK Visitor'] }
  ];
  
  grid.innerHTML = services.map(s => `
    <div class="service-card reveal">
      <div class="service-num">${s.num}</div>
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <div class="service-tags">
        ${s.tags.map(tag => `<span class="stag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderHowItWorks() {
  const grid = document.getElementById('hiwSteps');
  const steps = [
    { num: '1', title: 'Free Consultation', desc: 'Book a free 30-minute session with our experts. We assess your profile, eligibility and best visa pathway.' },
    { num: '2', title: 'Document Checklist', desc: 'We provide a customized document checklist and help you gather, verify and prepare everything needed.' },
    { num: '3', title: 'Application Filing', desc: 'Our team prepares and files your visa application with precision — ensuring no errors or missing documents.' },
    { num: '4', title: 'Visa Approval', desc: 'We track your application and keep you updated. Once approved, we help you plan your move abroad!' }
  ];
  
  grid.innerHTML = steps.map(s => `
    <div class="hiw-step">
      <div class="hiw-num">${s.num}</div>
      <h4>${s.title}</h4>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

function renderStories() {
  const grid = document.getElementById('storiesGrid');
  const stories = [
    { name: 'Priya Sharma', country: '🇨🇦 Canada', text: 'Aagman Overseas helped me get my Canada PR within 8 months! Their expert guidance on Express Entry and document preparation made all the difference. Highly recommended!', rating: '⭐⭐⭐⭐⭐' },
    { name: 'Rajesh Patel', country: '🇦🇺 Australia', text: 'From student visa to PR, Aagman Overseas has been with me every step. Their knowledge of Australian immigration is unmatched. Very professional and supportive team.', rating: '⭐⭐⭐⭐⭐' },
    { name: 'Anjali Verma', country: '🇬🇧 UK', text: 'Got my UK work visa approved in just 4 weeks! The team at Aagman was incredibly helpful and responsive. Worth every penny for their expert guidance.', rating: '⭐⭐⭐⭐⭐' },
    { name: 'Nikhil Singh', country: '🇩🇪 Germany', text: 'I got my Germany student visa and then job seeker visa with Aagman\'s help. Their expertise in German immigration laws is excellent. Highly professional!', rating: '⭐⭐⭐⭐⭐' },
    { name: 'Divya Desai', country: '🇺🇸 USA', text: 'Aagman helped me secure my F-1 visa for MIT. Their guidance on document preparation and visa interview coaching was fantastic. Exceeded expectations!', rating: '⭐⭐⭐⭐⭐' },
    { name: 'Amit Kumar', country: '🇳🇿 NZ', text: 'My whole family got NZ residence visa through Aagman Overseas! They handled everything professionally. Best immigration consultants in Mumbai!', rating: '⭐⭐⭐⭐⭐' }
  ];
  
  grid.innerHTML = stories.map(s => `
    <div class="story-card reveal">
      <div class="story-header">
        <div class="story-avatar">${s.name[0]}</div>
        <div>
          <div class="story-name">${s.name}</div>
          <div class="story-country">${s.country}</div>
        </div>
      </div>
      <div class="story-text">"${s.text}"</div>
      <div class="story-rating">${s.rating}</div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════ */
/* MODAL FUNCTIONS                                */
/* ══════════════════════════════════════════════ */
function openCountryModal(key) {
  const d = COUNTRY_DATA[key];
  if (!d) return;
  currentCountry = key;
  currentTab = 'study';

  document.getElementById('cmFlag').textContent = d.flag;
  document.getElementById('cmName').textContent = d.name;
  document.getElementById('cmTagline').textContent = d.tagline;
  document.getElementById('cmCtaCountry').textContent = d.name;
  document.getElementById('cmHeader').style.background = d.headerBg;
  document.getElementById('countryModal').classList.add('active');
  document.body.style.overflow = 'hidden';

  showTab('study');
}

function closeCountryModal() {
  document.getElementById('countryModal').classList.remove('active');
  document.body.style.overflow = '';
}

function showTab(tab) {
  currentTab = tab;
  const d = COUNTRY_DATA[currentCountry];
  if (!d) return;

  // Update tab buttons
  ['study', 'work', 'pr'].forEach(t => {
    const btn = document.getElementById('tab-' + t);
    if (t === tab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const info = d[tab];
  const facts = info.keyFacts.map(f => `
    <div style="background:#faf7f2;border:1px solid rgba(174,135,86,0.2);border-radius:10px;padding:0.9rem 1rem;">
      <div style="font-size:1.3rem;margin-bottom:4px;">${f.icon}</div>
      <div style="font-size:10px;color:#ae8756;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:2px;">${f.label}</div>
      <div style="font-size:13px;font-weight:600;color:#1e3040;">${f.val}</div>
    </div>
  `).join('');

  const steps = info.process.map((s, i) => `
    <div style="display:flex;gap:12px;align-items:flex-start;margin-bottom:0.6rem;">
      <div style="min-width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#ae8756,#debd8f);color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${i+1}</div>
      <div style="font-size:13.5px;color:#2a3a4a;line-height:1.5;padding-top:4px;">${s}</div>
    </div>
  `).join('');

  const docs = info.documents.map(doc => `
    <div style="display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid rgba(174,135,86,0.1);">
      <span style="color:#16a34a;font-size:14px;flex-shrink:0;margin-top:1px;">✅</span>
      <span style="font-size:13px;color:#2a3a4a;">${doc}</span>
    </div>
  `).join('');

  document.getElementById('cmBody').innerHTML = `
    <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;color:#1e3040;margin:0 0 0.5rem;">${info.title}</h3>
    <p style="font-size:13.5px;color:#555;line-height:1.7;margin-bottom:1.5rem;">${info.overview}</p>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:0.7rem;margin-bottom:1.8rem;">
      ${facts}
    </div>

    <div style="margin-bottom:1.8rem;">
      <h4 style="font-family:'Cormorant Garamond',serif;font-size:1.15rem;color:#1e3040;margin:0 0 1rem;display:flex;align-items:center;gap:8px;">
        <span style="background:linear-gradient(135deg,#ae8756,#debd8f);color:#fff;width:28px;height:28px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font-size:14px;">📋</span>
        Step-by-Step Process
      </h4>
      ${steps}
    </div>

    <div style="margin-bottom:1.5rem;">
      <h4 style="font-family:'Cormorant Garamond',serif;font-size:1.15rem;color:#1e3040;margin:0 0 1rem;display:flex;align-items:center;gap:8px;">
        <span style="background:linear-gradient(135deg,#1e3040,#385160);color:#fff;width:28px;height:28px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font-size:14px;">📁</span>
        Required Documents
      </h4>
      ${docs}
    </div>

    <div style="background:#faf7f2;padding:1rem;border-radius:8px;border-left:4px solid #ae8756;">
      <strong style="color:#1e3040;">💡 Pro Tip:</strong>
      <p style="margin:0.5rem 0 0;font-size:13px;color:#2a3a4a;line-height:1.6;">${info.tips}</p>
    </div>
  `;
}

/* ══════════════════════════════════════════════ */
/* CHAT & FORM FUNCTIONS                          */
/* ══════════════════════════════════════════════ */
function toggleChat() {
  document.getElementById('chatBox').classList.toggle('active');
  document.getElementById('chatToggle').classList.toggle('active');
}

function askChip(question) {
  document.getElementById('chatInput').value = question;
  sendAIChat();
}

function sendAIChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = 'chat-msg-user';
  msgDiv.textContent = msg;
  document.getElementById('chatMessages').appendChild(msgDiv);

  input.value = '';

  setTimeout(() => {
    const reply = document.createElement('div');
    reply.className = 'chat-msg-bot';
    reply.textContent = '🤖 Our team will provide detailed information shortly. Please also visit our countries section for complete visa details!';
    document.getElementById('chatMessages').appendChild(reply);
    document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
  }, 500);
}

function submitForm() {
  const form = document.getElementById('contactForm');
  const fname = document.getElementById('fname').value.trim();
  const fphone = document.getElementById('fphone').value.trim();

  if (!fname || !fphone) {
    alert('Please fill in required fields');
    return;
  }

  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';

  setTimeout(() => {
    form.reset();
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('formSuccess').style.display = 'none';
  }, 3000);
}

function submitPopup() {
  const name = document.getElementById('popupName').value.trim();
  const phone = document.getElementById('popupPhone').value.trim();

  if (!name || !phone) {
    alert('Please fill in all fields');
    return;
  }

  alert(`Thank you ${name}! We'll contact you at ${phone} within 24 hours.`);
  document.getElementById('leadPopup').style.display = 'none';
}

/* ══════════════════════════════════════════════ */
/* UTILITY FUNCTIONS                              */
/* ══════════════════════════════════════════════ */
function setupEventListeners() {
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('active');
  });

  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('active');
    });
  });

  document.getElementById('themeSwitch').addEventListener('change', (e) => {
    switchTheme(e.target.value);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
      document.getElementById('mobileMenu').classList.remove('active');
    }
  });
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'default';
  switchTheme(savedTheme);
}

function switchTheme(theme) {
  document.body.classList.remove('dark-theme', 'light-theme', 'gold-theme');
  if (theme !== 'default') {
    document.body.classList.add(theme + '-theme');
  }
  document.getElementById('themeSwitch').value = theme;
  localStorage.setItem('theme', theme);
}

function startHeroCarousel() {
  const images = document.querySelectorAll('.hero-carousel-img');
  let current = 0;

  setInterval(() => {
    images.forEach(img => img.classList.remove('active'));
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 5000);
}

// Show lead popup after 15 seconds
setTimeout(() => {
  document.getElementById('leadPopup').classList.add('show');
}, 15000);

// Initial chat message
window.addEventListener('DOMContentLoaded', () => {
  const chatMsg = document.createElement('div');
  chatMsg.className = 'chat-msg-bot';
  chatMsg.innerHTML = '👋 <strong>Namaste!</strong> Main hoon Aagman Overseas ka AI Visa Expert!<br><br>🤖 Main <strong>AI-powered</strong> hoon — aapko Canada PR, Australia PR/Study, UK, Germany, USA, New Zealand, UAE — <strong>sabhi countries ki puri detail</strong> Hindi ya English mein de sakta hoon!<br><br>✨ Neeche quick buttons click karein ya apna sawaal type karein!';
  if (document.getElementById('chatMessages').children.length === 0) {
    document.getElementById('chatMessages').appendChild(chatMsg);
  }
});
