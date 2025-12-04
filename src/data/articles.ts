export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "fundamentals" | "specialty" | "skills" | "reference";
  icon: string;
  readTime: string;
  content: ArticleSection[];
  tags: string[];
}

export interface ArticleSection {
  heading: string;
  content: string;
  type?: "text" | "list" | "tip" | "warning" | "example";
  items?: string[];
}

export const articleCategories = [
  { id: "fundamentals", name: "Fundamentals", icon: "📘", description: "Core documentation concepts" },
  { id: "specialty", name: "Specialty Guides", icon: "🏥", description: "Documentation by clinical area" },
  { id: "skills", name: "Clinical Skills", icon: "🎯", description: "Assessment and reasoning" },
  { id: "reference", name: "Quick Reference", icon: "📋", description: "Checklists and templates" },
];

export const articles: Article[] = [
  // ============================================
  // 1. HOW TO WRITE A SOAP NOTE
  // ============================================
  {
    id: "how-to-write-soap-note",
    slug: "how-to-write-soap-note",
    title: "How to Write a SOAP Note",
    description: "Complete guide to writing clear, accurate, and professional SOAP notes for any clinical encounter.",
    category: "fundamentals",
    icon: "📝",
    readTime: "8 min read",
    tags: ["soap", "documentation", "basics", "nursing"],
    content: [
      {
        heading: "What is a SOAP Note?",
        type: "text",
        content: "A SOAP note is a standardized method of clinical documentation used by healthcare providers to record patient encounters. The acronym stands for Subjective, Objective, Assessment, and Plan — four distinct sections that organize clinical information in a logical, consistent format.\n\nSOAP notes create a clear record of the patient's condition, your clinical findings, your professional judgment, and the care plan. They facilitate communication between providers, support continuity of care, and serve as legal documentation of the encounter."
      },
      {
        heading: "S — Subjective",
        type: "text",
        content: "The Subjective section captures information reported by the patient (or caregiver). This is their story in their words — what they're experiencing, how they feel, and what brought them in.\n\n**Key Components:**\n• **Chief Complaint (CC)**: The main reason for the visit in the patient's own words\n• **History of Present Illness (HPI)**: Detailed description using OLDCARTS (Onset, Location, Duration, Character, Aggravating factors, Relieving factors, Timing, Severity)\n• **Review of Systems (ROS)**: Relevant positive and negative symptoms\n• **Past Medical History (PMH)**: Relevant conditions, surgeries, allergies\n• **Medications**: Current medications and compliance\n• **Social/Family History**: When relevant to the complaint"
      },
      {
        heading: "Subjective Section Tips",
        type: "tip",
        content: "Always document the chief complaint in the patient's own words using quotation marks. For example: CC: \"My chest feels tight and I can't catch my breath.\" This preserves the patient's voice and provides context for your assessment."
      },
      {
        heading: "O — Objective",
        type: "text",
        content: "The Objective section contains measurable, observable data that you or other clinicians have gathered. This is factual information — what you can see, hear, measure, and verify.\n\n**Key Components:**\n• **Vital Signs**: BP, HR, RR, Temp, SpO2, Pain scale\n• **Physical Exam Findings**: Systematic examination results\n• **Lab Results**: Relevant laboratory values\n• **Diagnostic Results**: Imaging, ECG, other test results\n• **Observations**: General appearance, behavior, affect"
      },
      {
        heading: "Objective Documentation Standards",
        type: "list",
        content: "Follow these standards for objective documentation:",
        items: [
          "Document all vital signs with units and context (e.g., 'BP 142/88 sitting, left arm')",
          "Use specific, measurable terms (avoid vague words like 'normal' without context)",
          "Include pertinent negatives (e.g., 'no edema, no JVD')",
          "Document what you actually assessed, not assumptions",
          "Include time stamps for critical values or changes"
        ]
      },
      {
        heading: "A — Assessment",
        type: "text",
        content: "The Assessment is your clinical judgment — your professional interpretation of the subjective and objective data. This is where you synthesize information and identify the problem(s).\n\n**Key Components:**\n• **Primary Diagnosis**: Most likely diagnosis based on evidence\n• **Differential Diagnoses**: Other conditions being considered\n• **Clinical Reasoning**: Brief explanation of your thinking\n• **Risk Stratification**: Severity, acuity, stability\n• **Problem List**: For complex patients with multiple issues"
      },
      {
        heading: "Assessment Best Practices",
        type: "warning",
        content: "Never copy-paste assessments from previous notes without updating them. Each assessment should reflect the current encounter and your current clinical judgment. Outdated assessments can lead to missed diagnoses and patient harm."
      },
      {
        heading: "P — Plan",
        type: "text",
        content: "The Plan outlines the next steps — what you're going to do about the assessment. This should be specific, actionable, and tied to each problem identified.\n\n**Key Components:**\n• **Diagnostic Plan**: Tests, labs, imaging ordered\n• **Therapeutic Plan**: Medications, treatments, interventions\n• **Patient Education**: Instructions, counseling provided\n• **Disposition**: Discharge, admit, transfer, follow-up\n• **Contingency Plans**: When to return, warning signs"
      },
      {
        heading: "Plan Documentation Example",
        type: "example",
        content: "**Good Plan:**\n1. CBC, CMP, UA — results pending\n2. Acetaminophen 650mg PO q6h PRN pain\n3. IV NS 1L bolus for dehydration\n4. Patient educated on signs of worsening infection\n5. Follow-up in 48 hours or sooner if fever >101°F\n\n**Poor Plan:**\n\"Continue current management, follow up as needed.\"\n\nThe good plan is specific, actionable, and includes contingencies. The poor plan is vague and doesn't guide care."
      },
      {
        heading: "Common SOAP Note Mistakes",
        type: "list",
        content: "Avoid these common documentation errors:",
        items: [
          "Mixing subjective and objective information",
          "Using vague terms like 'WNL' without specifying what was assessed",
          "Failing to document pertinent negatives",
          "Assessment that doesn't match the S and O data",
          "Plan that doesn't address all problems in the assessment",
          "Copy-pasting from previous notes without updating",
          "Missing time stamps on critical findings",
          "Incomplete medication reconciliation"
        ]
      }
    ]
  },

  // ============================================
  // 2. MASTERING THE SUBJECTIVE SECTION
  // ============================================
  {
    id: "mastering-subjective-section",
    slug: "mastering-subjective-section",
    title: "Mastering the Subjective Section",
    description: "Learn to capture patient history effectively using OLDCARTS, HPI techniques, and patient-centered documentation.",
    category: "fundamentals",
    icon: "🗣️",
    readTime: "6 min read",
    tags: ["subjective", "hpi", "oldcarts", "patient history"],
    content: [
      {
        heading: "The Art of the Subjective",
        type: "text",
        content: "The Subjective section is where you tell the patient's story. It's more than just recording symptoms — it's capturing the context, impact, and nuance of their experience. A well-written Subjective helps any reader understand why the patient sought care and what they're going through."
      },
      {
        heading: "OLDCARTS Framework",
        type: "text",
        content: "OLDCARTS is a systematic approach to gathering and documenting the History of Present Illness (HPI). Each letter represents a key aspect of the symptom:\n\n• **O — Onset**: When did it start? Sudden or gradual?\n• **L — Location**: Where is it? Does it radiate?\n• **D — Duration**: How long does it last? Constant or intermittent?\n• **C — Character**: What does it feel like? Sharp, dull, burning, pressure?\n• **A — Aggravating Factors**: What makes it worse?\n• **R — Relieving Factors**: What makes it better?\n• **T — Timing**: When does it occur? Pattern?\n• **S — Severity**: How bad is it? (0-10 scale)"
      },
      {
        heading: "OLDCARTS Example: Chest Pain",
        type: "example",
        content: "**CC**: \"My chest hurts\"\n\n**HPI using OLDCARTS**:\n• **Onset**: Started 2 hours ago while climbing stairs\n• **Location**: Substernal, radiates to left arm and jaw\n• **Duration**: Constant since onset\n• **Character**: Pressure, \"like an elephant sitting on my chest\"\n• **Aggravating**: Exertion, deep breathing\n• **Relieving**: Rest provides mild relief, nitro not tried\n• **Timing**: First episode of this severity\n• **Severity**: 8/10\n\n**Associated symptoms**: Diaphoresis, shortness of breath, nausea\n**Pertinent negatives**: No recent trauma, no fever, no cough"
      },
      {
        heading: "Chief Complaint Best Practices",
        type: "tip",
        content: "Document the chief complaint in the patient's exact words using quotation marks. This preserves important context and can reveal the patient's understanding of their condition.\n\n✓ CC: \"I feel like my heart is racing and I can't catch my breath\"\n✗ CC: Palpitations and dyspnea"
      },
      {
        heading: "What to Include in Subjective",
        type: "list",
        content: "A complete Subjective section includes:",
        items: [
          "Chief complaint in patient's words",
          "Complete HPI using OLDCARTS or similar framework",
          "Relevant past medical history",
          "Current medications and allergies",
          "Relevant social history (smoking, alcohol, drugs, occupation)",
          "Relevant family history",
          "Review of systems (pertinent positives and negatives)",
          "What the patient has already tried for relief"
        ]
      },
      {
        heading: "Pertinent Negatives",
        type: "text",
        content: "Pertinent negatives are symptoms the patient denies that are relevant to the differential diagnosis. They demonstrate your clinical reasoning and help rule out serious conditions.\n\n**Example for chest pain:**\n\"Patient denies fever, cough, leg swelling, recent immobility, or history of blood clots.\"\n\nThis documents that you considered pulmonary embolism and gathered information to help rule it out."
      },
      {
        heading: "Common Subjective Mistakes",
        type: "warning",
        content: "Avoid these errors:\n• Including objective data (vital signs, exam findings) in the Subjective\n• Paraphrasing the chief complaint instead of using patient's words\n• Omitting pertinent negatives\n• Failing to document medication compliance\n• Not asking about prior episodes or treatments\n• Missing red flag symptoms in the review of systems"
      }
    ]
  },

  // ============================================
  // 3. OBJECTIVE DOCUMENTATION EXCELLENCE
  // ============================================
  {
    id: "objective-documentation",
    slug: "objective-documentation",
    title: "Objective Documentation Excellence",
    description: "Document physical exam findings, vitals, and clinical observations with precision and clarity.",
    category: "fundamentals",
    icon: "🔬",
    readTime: "7 min read",
    tags: ["objective", "physical exam", "vitals", "documentation"],
    content: [
      {
        heading: "The Objective Section",
        type: "text",
        content: "The Objective section contains measurable, observable, and verifiable clinical data. Unlike the Subjective section which captures the patient's perspective, the Objective section documents what you and other clinicians can directly observe, measure, and confirm."
      },
      {
        heading: "Vital Signs Documentation",
        type: "text",
        content: "Vital signs are the foundation of objective data. Document them completely with context:\n\n**Complete vital signs include:**\n• Blood Pressure (with position and arm used)\n• Heart Rate (and rhythm if irregular)\n• Respiratory Rate (and effort)\n• Temperature (and route)\n• Oxygen Saturation (and supplemental O2 if any)\n• Pain Score (0-10 scale)\n• Weight (for medication dosing, fluid status)"
      },
      {
        heading: "Vital Signs Example",
        type: "example",
        content: "**Good documentation:**\nVitals: BP 142/88 sitting, left arm | HR 88 regular | RR 18 unlabored | Temp 98.6°F oral | SpO2 97% RA | Pain 6/10\n\n**Poor documentation:**\nVitals: WNL\n\nThe good example provides specific values with context. 'WNL' tells the reader nothing and doesn't demonstrate that vitals were actually assessed."
      },
      {
        heading: "Physical Exam Documentation",
        type: "text",
        content: "Document your physical exam systematically. Include what you assessed, what you found, and pertinent negatives.\n\n**Standard format:**\n• **General**: Appearance, distress level, positioning\n• **HEENT**: Head, eyes, ears, nose, throat findings\n• **Cardiovascular**: Heart sounds, rhythm, pulses, edema\n• **Respiratory**: Breath sounds, effort, symmetry\n• **Abdomen**: Inspection, auscultation, palpation findings\n• **Neurological**: Mental status, cranial nerves, motor, sensory\n• **Skin**: Color, temperature, lesions, wounds\n• **Musculoskeletal**: ROM, strength, tenderness"
      },
      {
        heading: "Be Specific, Not Vague",
        type: "list",
        content: "Replace vague terms with specific findings:",
        items: [
          "Instead of 'lungs clear' → 'Lungs CTA bilaterally, no wheezes, rhonchi, or rales'",
          "Instead of 'heart RRR' → 'Heart regular rate and rhythm, S1/S2 normal, no murmurs, rubs, or gallops'",
          "Instead of 'abdomen benign' → 'Abdomen soft, non-tender, non-distended, +BS all quadrants'",
          "Instead of 'neuro intact' → 'Alert and oriented x4, CN II-XII intact, strength 5/5 all extremities'",
          "Instead of 'skin normal' → 'Skin warm, dry, intact, no rashes or lesions'"
        ]
      },
      {
        heading: "Pertinent Negatives in Objective",
        type: "tip",
        content: "Include pertinent negatives that support your differential diagnosis. For a patient with chest pain, document: 'No JVD, no peripheral edema, no calf tenderness.' This shows you assessed for heart failure and DVT/PE."
      },
      {
        heading: "Lab and Diagnostic Results",
        type: "text",
        content: "Include relevant lab values and diagnostic results in the Objective section:\n\n• Document specific values, not just 'normal' or 'abnormal'\n• Flag critical or significantly abnormal values\n• Include pending results with 'pending' notation\n• Reference previous values for comparison when relevant\n\n**Example:**\nLabs: WBC 14.2 (↑), Hgb 12.1, Plt 245, BMP within normal limits, Troponin <0.01 (x2), BNP 89\nECG: Normal sinus rhythm, no ST changes, no Q waves"
      },
      {
        heading: "Common Objective Mistakes",
        type: "warning",
        content: "Avoid these documentation errors:\n• Including subjective information (patient complaints) in Objective\n• Using 'WNL' without specifying what was assessed\n• Documenting exams you didn't perform\n• Missing critical abnormal findings\n• Failing to document pertinent negatives\n• Not including units with lab values\n• Omitting the time of assessment for critical findings"
      }
    ]
  },

  // ============================================
  // 4. CLINICAL ASSESSMENT & DIFFERENTIAL DIAGNOSIS
  // ============================================
  {
    id: "clinical-assessment-differential",
    slug: "clinical-assessment-differential",
    title: "Clinical Assessment & Differential Diagnosis",
    description: "Develop strong clinical reasoning skills and document your assessment with confidence.",
    category: "skills",
    icon: "🧠",
    readTime: "9 min read",
    tags: ["assessment", "differential diagnosis", "clinical reasoning"],
    content: [
      {
        heading: "The Assessment Section",
        type: "text",
        content: "The Assessment is the heart of your clinical reasoning. It's where you synthesize the subjective and objective data into a coherent clinical picture. A strong assessment demonstrates your critical thinking, supports your plan, and guides other providers who may care for the patient."
      },
      {
        heading: "Components of a Strong Assessment",
        type: "list",
        content: "A complete assessment includes:",
        items: [
          "Primary/working diagnosis with supporting evidence",
          "Differential diagnoses ranked by likelihood",
          "Clinical reasoning explaining your thought process",
          "Risk stratification (severity, acuity, stability)",
          "Complications or concerns being monitored",
          "Response to treatment (for follow-up visits)"
        ]
      },
      {
        heading: "Building a Differential Diagnosis",
        type: "text",
        content: "A differential diagnosis is a list of possible conditions that could explain the patient's presentation. Build your differential systematically:\n\n**1. Start broad, then narrow**\nConsider all possibilities, then use your data to rule in/out\n\n**2. Think 'worst first'**\nAlways consider life-threatening conditions first\n\n**3. Use pattern recognition**\nClassic presentations suggest common diagnoses\n\n**4. Consider epidemiology**\nAge, sex, risk factors affect likelihood\n\n**5. Apply clinical evidence**\nUse your S and O data to support or refute each diagnosis"
      },
      {
        heading: "Differential Diagnosis Example: Chest Pain",
        type: "example",
        content: "**Assessment:**\nWorking Dx: Acute Coronary Syndrome — rule out STEMI\n\n**Clinical Reasoning:**\n58 y/o male with substernal chest pressure, diaphoresis, and radiation to left arm. Multiple cardiac risk factors (HTN, DM, smoking, family history). Presentation concerning for ACS.\n\n**Differential Diagnosis:**\n1. **Acute MI** — Most likely given classic presentation and risk factors\n2. **Unstable Angina** — If biomarkers negative\n3. **Pulmonary Embolism** — Less likely, no hypoxia, no leg symptoms\n4. **Aortic Dissection** — Less likely, no tearing pain, no BP differential\n5. **GERD/Esophageal spasm** — Possible but must rule out cardiac first\n\n**Risk Stratification:**\nHigh-risk presentation requiring emergent evaluation"
      },
      {
        heading: "The 'Aunt Minnie' Approach",
        type: "tip",
        content: "Some presentations are so classic they're immediately recognizable — like recognizing your Aunt Minnie in a crowd. Examples:\n• Crushing chest pain + diaphoresis + radiation = Think MI\n• Worst headache of life + sudden onset = Think SAH\n• RLQ pain + fever + migration from periumbilical = Think appendicitis\n\nBut always confirm with objective data — even Aunt Minnie can fool you."
      },
      {
        heading: "Documenting Clinical Reasoning",
        type: "text",
        content: "Show your work. Document why you believe your diagnosis is correct and why you've ruled out alternatives:\n\n**Good assessment:**\n\"Acute appendicitis suspected based on classic migration of periumbilical pain to RLQ, positive McBurney's point tenderness, rebound tenderness, fever, and elevated WBC. Alvarado score 8. Ovarian pathology less likely given negative pelvic exam and timing of LMP.\"\n\n**Poor assessment:**\n\"Abdominal pain, possible appendicitis.\"\n\nThe good assessment demonstrates reasoning. The poor assessment shows no thought process."
      },
      {
        heading: "Red Flags in Assessment",
        type: "warning",
        content: "Always document when you've considered and ruled out dangerous conditions:\n• Chest pain → Document ACS, PE, dissection considered\n• Headache → Document SAH, meningitis, mass considered\n• Abdominal pain → Document surgical emergencies considered\n• Shortness of breath → Document PE, MI, tension pneumo considered\n\nThis protects you legally and ensures critical diagnoses aren't missed."
      },
      {
        heading: "Assessment Pitfalls",
        type: "list",
        content: "Avoid these common assessment errors:",
        items: [
          "Anchoring bias — Locking onto first diagnosis without considering alternatives",
          "Premature closure — Stopping the diagnostic process too early",
          "Confirmation bias — Only seeing evidence that supports your diagnosis",
          "Diagnosis momentum — Accepting previous provider's diagnosis without question",
          "Failing to reassess — Not updating assessment when new data arrives",
          "Vague assessments — 'Abdominal pain' without differential or reasoning"
        ]
      }
    ]
  },

  // ============================================
  // 5. RED FLAGS & CRITICAL FINDINGS
  // ============================================
  {
    id: "red-flags-critical-findings",
    slug: "red-flags-critical-findings",
    title: "Red Flags & Critical Findings",
    description: "Recognize and document warning signs that require immediate attention across clinical specialties.",
    category: "skills",
    icon: "🚨",
    readTime: "10 min read",
    tags: ["red flags", "emergency", "critical", "safety"],
    content: [
      {
        heading: "What Are Red Flags?",
        type: "text",
        content: "Red flags are clinical findings that suggest a serious or life-threatening condition requiring immediate evaluation or intervention. Recognizing and documenting red flags is essential for patient safety and demonstrates clinical competence."
      },
      {
        heading: "Chest Pain Red Flags",
        type: "list",
        content: "Immediate evaluation required for:",
        items: [
          "Substernal pressure with radiation to arm, jaw, or back",
          "Associated diaphoresis, nausea, or shortness of breath",
          "New onset with exertion",
          "History of cardiac disease with changing pattern",
          "Hypotension or signs of shock",
          "Tearing or ripping pain (aortic dissection)",
          "Unequal blood pressures in arms",
          "Sudden onset with syncope"
        ]
      },
      {
        heading: "Headache Red Flags",
        type: "list",
        content: "The 'SNOOP' mnemonic for dangerous headaches:",
        items: [
          "S — Systemic symptoms (fever, weight loss) or Secondary risk factors (HIV, cancer)",
          "N — Neurologic symptoms (confusion, weakness, vision changes, seizure)",
          "O — Onset sudden ('thunderclap' — worst headache of life)",
          "O — Older age (new headache after age 50)",
          "P — Pattern change (progressive worsening, different from usual)",
          "Also: Papilledema, neck stiffness, post-trauma, positional"
        ]
      },
      {
        heading: "Abdominal Pain Red Flags",
        type: "list",
        content: "Surgical emergency indicators:",
        items: [
          "Rigid, board-like abdomen",
          "Rebound tenderness or guarding",
          "Absent bowel sounds",
          "Hemodynamic instability",
          "Fever with peritoneal signs",
          "Pulsatile abdominal mass (AAA)",
          "Severe pain out of proportion to exam (mesenteric ischemia)",
          "Bilious vomiting with distension (obstruction)"
        ]
      },
      {
        heading: "Respiratory Red Flags",
        type: "list",
        content: "Signs of respiratory emergency:",
        items: [
          "SpO2 <90% on room air",
          "Severe respiratory distress (accessory muscle use, tripod positioning)",
          "Inability to speak in full sentences",
          "Cyanosis",
          "Altered mental status with respiratory symptoms",
          "Stridor (upper airway obstruction)",
          "Unilateral absent breath sounds (pneumothorax)",
          "Hemoptysis (massive or new)"
        ]
      },
      {
        heading: "Neurologic Red Flags",
        type: "list",
        content: "Emergent neurologic findings:",
        items: [
          "Sudden focal weakness or numbness (stroke)",
          "Sudden speech difficulty (stroke)",
          "Sudden severe headache (SAH)",
          "Rapidly declining mental status",
          "New seizure in adult",
          "Signs of increased ICP (Cushing's triad: HTN, bradycardia, irregular respirations)",
          "Cauda equina syndrome (saddle anesthesia, urinary retention, bilateral leg weakness)"
        ]
      },
      {
        heading: "Pediatric Red Flags",
        type: "list",
        content: "Warning signs in children:",
        items: [
          "Fever in infant <3 months",
          "Bulging fontanelle",
          "Inconsolable crying or lethargy",
          "Petechial or purpuric rash with fever (meningococcemia)",
          "Signs of dehydration (no tears, no wet diapers, sunken fontanelle)",
          "Respiratory distress (nasal flaring, retractions, grunting)",
          "Bilious vomiting in neonate (malrotation)",
          "Non-blanching rash"
        ]
      },
      {
        heading: "Mental Health Red Flags",
        type: "list",
        content: "Psychiatric emergencies:",
        items: [
          "Active suicidal ideation with plan and means",
          "Homicidal ideation",
          "Command auditory hallucinations",
          "Acute psychosis with agitation",
          "Severe self-harm or recent attempt",
          "Inability to care for self",
          "Catatonia",
          "Neuroleptic malignant syndrome (fever, rigidity, AMS with antipsychotic use)"
        ]
      },
      {
        heading: "Documenting Red Flags",
        type: "tip",
        content: "When you identify a red flag, document:\n1. The specific finding\n2. Time identified\n3. Who was notified\n4. Actions taken\n5. Patient response\n\nExample: \"1420 — Patient developed sudden left-sided weakness. Dr. Smith notified immediately. Stroke alert called. CT head ordered STAT. Patient moved to resuscitation bay.\""
      },
      {
        heading: "When in Doubt",
        type: "warning",
        content: "If something feels wrong, trust your instincts. Document your concerns even if you can't pinpoint the exact problem:\n\n\"Patient appears acutely ill, out of proportion to vital signs. Concerned for early sepsis vs. occult bleeding. Escalating to provider for immediate evaluation.\"\n\nYour clinical intuition, combined with documentation, can save lives."
      }
    ]
  },

  // ============================================
  // 6. MENTAL HEALTH DOCUMENTATION
  // ============================================
  {
    id: "mental-health-documentation",
    slug: "mental-health-documentation",
    title: "Mental Health Documentation",
    description: "Document psychiatric assessments, mental status exams, and behavioral health encounters effectively.",
    category: "specialty",
    icon: "🧠",
    readTime: "8 min read",
    tags: ["mental health", "psychiatry", "mse", "behavioral health"],
    content: [
      {
        heading: "Mental Health Documentation Principles",
        type: "text",
        content: "Mental health documentation requires sensitivity, precision, and thoroughness. Your notes must capture the patient's mental state, support clinical decision-making, ensure safety, and meet legal requirements — all while maintaining the patient's dignity."
      },
      {
        heading: "The Mental Status Exam (MSE)",
        type: "text",
        content: "The MSE is the psychiatric equivalent of the physical exam. It provides an objective snapshot of the patient's mental functioning at the time of evaluation.\n\n**Components:**\n• **Appearance**: Grooming, hygiene, dress, age appearance\n• **Behavior**: Psychomotor activity, eye contact, cooperation\n• **Speech**: Rate, rhythm, volume, tone\n• **Mood**: Patient's subjective emotional state (in their words)\n• **Affect**: Observed emotional expression (range, congruence, stability)\n• **Thought Process**: Organization, coherence, logic\n• **Thought Content**: Delusions, obsessions, preoccupations\n• **Perceptions**: Hallucinations (auditory, visual, other)\n• **Cognition**: Orientation, attention, memory\n• **Insight**: Understanding of illness\n• **Judgment**: Decision-making ability"
      },
      {
        heading: "MSE Documentation Example",
        type: "example",
        content: "**Mental Status Exam:**\n• **Appearance**: 34 y/o female appearing stated age, disheveled, poor hygiene, wearing wrinkled clothing\n• **Behavior**: Psychomotor retardation, poor eye contact, cooperative but slow to respond\n• **Speech**: Soft, slow rate, monotone\n• **Mood**: \"Empty\" (patient's words)\n• **Affect**: Flat, constricted range, mood-congruent\n• **Thought Process**: Linear, goal-directed, impoverished content\n• **Thought Content**: Passive SI (\"I wish I wouldn't wake up\"), no active plan, no HI, no delusions\n• **Perceptions**: Denies AH/VH\n• **Cognition**: Alert, oriented x4, attention intact\n• **Insight**: Fair — recognizes depression has worsened\n• **Judgment**: Impaired — stopped medications 3 weeks ago"
      },
      {
        heading: "Suicide Risk Assessment",
        type: "text",
        content: "Every mental health encounter requires suicide risk assessment. Document thoroughly:\n\n**Key elements:**\n• Suicidal ideation (passive vs. active)\n• Plan (specific method, timeline)\n• Intent (desire to act on thoughts)\n• Means (access to method)\n• Protective factors (reasons for living, social support)\n• Risk factors (previous attempts, substance use, hopelessness)\n• Risk level determination (low, moderate, high)\n• Safety plan discussed"
      },
      {
        heading: "Suicide Assessment Documentation",
        type: "example",
        content: "**Suicide Risk Assessment:**\n• **Ideation**: Active SI x 2 weeks, \"I think about driving into traffic\"\n• **Plan**: Has thought about overdose, no specific plan\n• **Intent**: Ambivalent — \"Part of me wants to, part doesn't\"\n• **Means**: Has access to medications at home\n• **Previous attempts**: One overdose attempt 2 years ago\n• **Protective factors**: Two children, religious beliefs against suicide\n• **Risk factors**: Recent job loss, divorce pending, alcohol use\n• **Risk Level**: MODERATE-HIGH\n• **Safety Plan**: Discussed and documented, emergency contacts identified, means restriction counseled (remove medications from home)"
      },
      {
        heading: "Depression Screening Documentation",
        type: "tip",
        content: "Use standardized tools and document scores:\n• PHQ-9 score: 18 (moderately severe depression)\n• GAD-7 score: 12 (moderate anxiety)\n• Columbia Suicide Severity Rating Scale: Positive for ideation, negative for behavior\n\nScores provide objective data and track treatment response over time."
      },
      {
        heading: "Documenting Psychosis",
        type: "list",
        content: "When documenting psychotic symptoms:",
        items: [
          "Quote hallucination content exactly when possible",
          "Specify type: auditory, visual, tactile, olfactory",
          "Note if command hallucinations are present",
          "Document delusion type: paranoid, grandiose, somatic, etc.",
          "Assess insight into symptoms",
          "Document reality testing ability",
          "Note impact on functioning and safety"
        ]
      },
      {
        heading: "Capacity and Competency",
        type: "text",
        content: "Document decision-making capacity when relevant:\n\n**Four components of capacity:**\n1. **Understanding**: Can explain the condition and treatment options\n2. **Appreciation**: Recognizes how information applies to their situation\n3. **Reasoning**: Can weigh risks and benefits\n4. **Choice**: Can communicate a consistent decision\n\nDocument your assessment of each component when capacity is in question."
      },
      {
        heading: "Involuntary Hold Documentation",
        type: "warning",
        content: "When initiating an involuntary psychiatric hold, document:\n• Specific danger to self or others (with examples)\n• Inability to care for self due to mental illness\n• Less restrictive alternatives considered and why insufficient\n• Patient's statements supporting the hold\n• Time hold initiated and who was notified\n• Patient rights provided\n\nThis documentation has significant legal implications — be thorough and specific."
      }
    ]
  },

  // ============================================
  // 7. PEDIATRIC DOCUMENTATION
  // ============================================
  {
    id: "pediatric-documentation",
    slug: "pediatric-documentation",
    title: "Pediatric Documentation",
    description: "Special considerations for documenting infant, child, and adolescent encounters.",
    category: "specialty",
    icon: "👶",
    readTime: "7 min read",
    tags: ["pediatrics", "children", "infant", "adolescent"],
    content: [
      {
        heading: "Pediatric Documentation Principles",
        type: "text",
        content: "Pediatric documentation requires attention to developmental stages, growth parameters, immunization status, and family dynamics. Children are not small adults — their presentations, normal values, and documentation needs differ significantly by age."
      },
      {
        heading: "Age-Specific Vital Sign Norms",
        type: "text",
        content: "Always interpret vitals in context of age:\n\n**Heart Rate (normal ranges):**\n• Newborn: 100-160\n• Infant: 100-150\n• Toddler: 90-140\n• Preschool: 80-120\n• School age: 70-110\n• Adolescent: 60-100\n\n**Respiratory Rate:**\n• Newborn: 30-60\n• Infant: 25-40\n• Toddler: 20-30\n• Child: 18-25\n• Adolescent: 12-20\n\nDocument if values are normal or abnormal for age."
      },
      {
        heading: "Growth Parameters",
        type: "list",
        content: "Document growth at every well visit:",
        items: [
          "Weight (with percentile)",
          "Length/Height (with percentile)",
          "Head circumference (until age 2, with percentile)",
          "BMI (age 2+, with percentile)",
          "Growth velocity — crossing percentile lines is concerning",
          "Plot on growth chart and note trajectory"
        ]
      },
      {
        heading: "Developmental Assessment",
        type: "text",
        content: "Document developmental milestones by domain:\n\n• **Gross Motor**: Rolling, sitting, crawling, walking, running\n• **Fine Motor**: Grasping, pincer grip, drawing, writing\n• **Language**: Cooing, babbling, words, sentences\n• **Social**: Smiling, stranger anxiety, parallel play, cooperative play\n• **Cognitive**: Object permanence, problem-solving, school performance\n\nNote if milestones are met, delayed, or concerning. Use standardized screening tools (ASQ, M-CHAT) and document scores."
      },
      {
        heading: "Pediatric History Considerations",
        type: "list",
        content: "Additional history elements for pediatrics:",
        items: [
          "Birth history (gestational age, delivery, complications, NICU stay)",
          "Feeding history (breast/bottle, introduction of solids, current diet)",
          "Immunization status (up to date, delayed, refused)",
          "Developmental milestones",
          "School performance and behavior",
          "Family and social situation",
          "Childcare or school exposures",
          "Safety (car seats, helmets, water safety, firearms in home)"
        ]
      },
      {
        heading: "Documenting the Pediatric Exam",
        type: "example",
        content: "**Example: 18-month well visit**\n\n**Growth**: Wt 11.2 kg (50%), Ht 82 cm (55%), HC 47 cm (45%) — tracking along curve\n\n**Development**:\n• Gross motor: Walking independently, starting to run\n• Fine motor: Stacking 3 blocks, scribbling\n• Language: 10+ words, following simple commands\n• Social: Parallel play, points to wants\n\n**Physical Exam**:\n• General: Active, interactive toddler in NAD\n• HEENT: AF closed, TMs clear bilaterally, no dental caries\n• CV: RRR, no murmur\n• Resp: Clear bilaterally\n• Abdomen: Soft, NT, no HSM\n• GU: Normal external genitalia, testes descended bilaterally\n• Skin: No rashes\n• Neuro: Appropriate tone, gait steady"
      },
      {
        heading: "Adolescent Confidentiality",
        type: "warning",
        content: "Adolescent visits require special attention to confidentiality:\n\n• Interview adolescent alone for part of visit\n• Document sensitive topics (sexual activity, substance use, mental health) appropriately\n• Know your state's minor consent laws\n• Document what was discussed confidentially vs. with parent\n• HEADSS assessment: Home, Education, Activities, Drugs, Sexuality, Suicide/Safety"
      },
      {
        heading: "Fever in Infants",
        type: "tip",
        content: "Fever documentation in young infants is critical:\n\n• <28 days: Any fever (≥100.4°F/38°C) = full sepsis workup\n• 29-60 days: Low-risk criteria must be documented\n• Document: Temp, route, time, appearance, feeding, activity\n• Document: WBC, UA, blood culture results\n• Document: Disposition decision and reasoning"
      },
      {
        heading: "Child Abuse Documentation",
        type: "warning",
        content: "If abuse is suspected, document meticulously:\n\n• Exact quotes from child and caregiver (separately)\n• Detailed description of injuries (size, shape, color, location)\n• Photographs with ruler for scale (per protocol)\n• Developmental ability vs. stated mechanism\n• Caregiver behavior and affect\n• Document report to child protective services\n• Do NOT document 'suspected abuse' in chief complaint visible to family"
      }
    ]
  },

  // ============================================
  // 8. EMERGENCY DOCUMENTATION
  // ============================================
  {
    id: "emergency-documentation",
    slug: "emergency-documentation",
    title: "Emergency & Urgent Care Documentation",
    description: "Fast, accurate documentation for high-acuity and time-sensitive clinical situations.",
    category: "specialty",
    icon: "🚑",
    readTime: "8 min read",
    tags: ["emergency", "urgent care", "triage", "critical care"],
    content: [
      {
        heading: "Emergency Documentation Principles",
        type: "text",
        content: "Emergency documentation must be fast, accurate, and legally defensible. In high-acuity situations, your notes may be scrutinized in malpractice cases, quality reviews, and mortality conferences. Document in real-time when possible, and always prioritize patient care over documentation."
      },
      {
        heading: "Triage Documentation",
        type: "text",
        content: "Triage documentation sets the stage for the entire encounter:\n\n**Essential elements:**\n• Chief complaint in patient's words\n• Vital signs with time\n• Acuity level (ESI 1-5 or your system's scale)\n• Brief relevant history\n• Allergies\n• Initial interventions (if any)\n• Rationale for acuity assignment"
      },
      {
        heading: "ESI Triage Levels",
        type: "list",
        content: "Emergency Severity Index documentation:",
        items: [
          "ESI 1: Immediate life-saving intervention needed (cardiac arrest, respiratory failure)",
          "ESI 2: High risk, confused/lethargic, or severe pain (chest pain, stroke symptoms)",
          "ESI 3: Stable but needs multiple resources (labs, imaging, IV meds)",
          "ESI 4: Stable, needs one resource (X-ray OR labs OR simple procedure)",
          "ESI 5: Stable, needs no resources (prescription refill, simple wound check)"
        ]
      },
      {
        heading: "Time-Stamping Critical Events",
        type: "tip",
        content: "In emergencies, document times precisely:\n\n• Patient arrival time\n• Triage time\n• Provider evaluation time\n• Critical intervention times (intubation, medications, procedures)\n• Consultant notification and arrival times\n• Disposition decision time\n• Actual departure time\n\nExample: \"1423 — Chest pain onset per patient. 1445 — EMS arrival. 1448 — ED arrival. 1450 — ECG obtained showing STEMI. 1452 — Cardiology notified. 1455 — Cath lab activated.\""
      },
      {
        heading: "Resuscitation Documentation",
        type: "text",
        content: "Code documentation requires specific elements:\n\n• Time code called\n• Initial rhythm\n• CPR quality metrics (if available)\n• Medications given with times and doses\n• Defibrillation attempts with joules and response\n• Airway management (attempts, success, confirmation method)\n• IV/IO access\n• Rhythm checks and changes\n• ROSC time (if achieved)\n• Time of death (if applicable)\n• Family notification\n• Who was present"
      },
      {
        heading: "Code Documentation Example",
        type: "example",
        content: "**Code Blue — 1532**\n• 1532: Unresponsive, pulseless, apneic. Code blue called.\n• 1532: CPR initiated, monitor shows VFib\n• 1533: Defibrillation 200J biphasic — VFib continues\n• 1535: Epinephrine 1mg IV push\n• 1536: Defibrillation 200J — converted to PEA\n• 1538: Epinephrine 1mg IV push\n• 1540: Intubated by Dr. Smith, ETCO2 confirms placement\n• 1542: Rhythm check — sinus tachycardia with pulse\n• 1542: ROSC achieved\n• 1545: Post-arrest care initiated, targeted temp management discussed\n• Family notified at 1550 by Dr. Smith"
      },
      {
        heading: "Trauma Documentation",
        type: "list",
        content: "Trauma-specific documentation elements:",
        items: [
          "Mechanism of injury (detailed)",
          "Prehospital interventions and response",
          "Primary survey findings (ABCDE)",
          "Secondary survey (head-to-toe)",
          "GCS score with components (E_V_M_)",
          "All imaging results",
          "Procedures performed with times",
          "Consultant involvement",
          "Disposition and transport"
        ]
      },
      {
        heading: "Medical Decision Making (MDM)",
        type: "text",
        content: "Document your clinical reasoning, especially for:\n\n• Why you ordered specific tests\n• Why you ruled out serious diagnoses\n• Why the patient is safe for discharge\n• What instructions were given\n• What follow-up is planned\n• What return precautions were discussed\n\nThis protects you legally and demonstrates quality care."
      },
      {
        heading: "Against Medical Advice (AMA)",
        type: "warning",
        content: "AMA documentation must include:\n\n• Patient has capacity to make decision\n• Risks of leaving explained (be specific: \"You could die\")\n• Patient verbalized understanding of risks\n• Alternatives offered\n• Patient's stated reason for leaving\n• Offer to return if changes mind\n• Prescriptions/instructions provided despite AMA\n• Patient signature (if possible)\n• Witness signature"
      },
      {
        heading: "Discharge Documentation",
        type: "list",
        content: "Complete discharge documentation includes:",
        items: [
          "Final diagnosis",
          "Condition at discharge (stable, improved, etc.)",
          "Medications prescribed (with instructions)",
          "Activity restrictions",
          "Follow-up appointments",
          "Return precautions (specific symptoms to watch for)",
          "Patient education provided",
          "Patient verbalized understanding"
        ]
      }
    ]
  },

  // ============================================
  // 9. MEDICATION DOCUMENTATION
  // ============================================
  {
    id: "medication-documentation",
    slug: "medication-documentation",
    title: "Medication Documentation & Reconciliation",
    description: "Accurate medication documentation, reconciliation, and administration records.",
    category: "reference",
    icon: "💊",
    readTime: "6 min read",
    tags: ["medications", "reconciliation", "prescribing", "safety"],
    content: [
      {
        heading: "Medication Documentation Importance",
        type: "text",
        content: "Medication errors are a leading cause of preventable patient harm. Accurate medication documentation — including reconciliation, administration, and prescribing — is essential for patient safety. Every medication interaction with a patient should be documented completely."
      },
      {
        heading: "Medication Reconciliation",
        type: "text",
        content: "Medication reconciliation compares the patient's current medications against new orders at every transition of care.\n\n**When to reconcile:**\n• Admission\n• Transfer between units\n• Discharge\n• Outpatient visits\n\n**What to document:**\n• All current medications (including OTC, herbals, supplements)\n• Dose, route, frequency for each\n• Last dose taken\n• Allergies and reactions\n• Medications being continued, held, or discontinued\n• New medications being started"
      },
      {
        heading: "Complete Medication Entry",
        type: "example",
        content: "**Complete documentation:**\nMetoprolol succinate 50mg PO daily — last dose this morning, continue\n\n**Incomplete documentation:**\nMetoprolol — taking\n\nThe complete entry includes drug name, dose, route, frequency, and action. The incomplete entry is dangerous — which metoprolol? What dose? How often?"
      },
      {
        heading: "The Five Rights",
        type: "list",
        content: "Document verification of the five rights:",
        items: [
          "Right patient — verified by two identifiers",
          "Right medication — verified against order",
          "Right dose — calculated and verified",
          "Right route — appropriate for medication and patient",
          "Right time — given within acceptable window"
        ]
      },
      {
        heading: "High-Alert Medications",
        type: "warning",
        content: "High-alert medications require extra documentation:\n\n**Examples:** Insulin, anticoagulants, opioids, chemotherapy, concentrated electrolytes\n\n**Document:**\n• Independent double-check performed\n• Who verified\n• Patient weight (for weight-based dosing)\n• Indication for use\n• Monitoring parameters\n• Patient/family education provided"
      },
      {
        heading: "Allergy Documentation",
        type: "text",
        content: "Document allergies completely:\n\n**Required elements:**\n• Allergen (specific drug name, not class)\n• Reaction type (anaphylaxis, rash, GI upset, etc.)\n• Severity\n• When it occurred\n• How it was treated\n\n**Example:**\n✓ Penicillin — anaphylaxis (throat swelling, hypotension) 2019, required epinephrine\n✗ Penicillin — allergy"
      },
      {
        heading: "PRN Medication Documentation",
        type: "list",
        content: "PRN medications require additional documentation:",
        items: [
          "Indication for giving (pain level, symptom present)",
          "Time given",
          "Dose given",
          "Route",
          "Effectiveness assessment (with time)",
          "Any adverse effects",
          "Follow-up interventions if ineffective"
        ]
      },
      {
        heading: "PRN Documentation Example",
        type: "example",
        content: "**1400**: Patient reports pain 7/10, right knee, aching. Morphine 4mg IV given per order.\n**1430**: Pain reassessed — now 3/10. Patient comfortable, no adverse effects. Continues to rest."
      },
      {
        heading: "Controlled Substance Documentation",
        type: "warning",
        content: "Controlled substances require meticulous documentation:\n\n• Waste must be witnessed and co-signed\n• Document exact amount given and wasted\n• Count discrepancies must be reported immediately\n• Document patient response and effectiveness\n• Be alert for signs of diversion\n• Document any concerns about misuse"
      },
      {
        heading: "Medication Errors",
        type: "text",
        content: "If a medication error occurs, document:\n\n• What happened (factually, no blame)\n• Time discovered\n• Patient assessment after error\n• Interventions taken\n• Provider notification (who, when)\n• Patient/family notification\n• Incident report filed\n\nDo NOT document \"incident report filed\" in the medical record — just document the clinical facts."
      }
    ]
  },

  // ============================================
  // 10. LEGAL & PROFESSIONAL DOCUMENTATION
  // ============================================
  {
    id: "legal-professional-documentation",
    slug: "legal-professional-documentation",
    title: "Legal & Professional Documentation Standards",
    description: "Protect yourself and your patients with legally sound, professional documentation practices.",
    category: "reference",
    icon: "⚖️",
    readTime: "7 min read",
    tags: ["legal", "professional", "liability", "standards"],
    content: [
      {
        heading: "Documentation as Legal Record",
        type: "text",
        content: "Your clinical documentation is a legal document. In malpractice cases, the medical record is the primary evidence of what care was provided. The legal standard is: \"If it wasn't documented, it wasn't done.\" Thorough, accurate, timely documentation protects both patients and providers."
      },
      {
        heading: "Core Documentation Principles",
        type: "list",
        content: "Follow these principles for legally sound documentation:",
        items: [
          "Document in real-time or as close to it as possible",
          "Be factual and objective — avoid opinions and judgments",
          "Use quotes for patient statements",
          "Document what you observed, assessed, and did",
          "Include your clinical reasoning",
          "Never alter records after the fact (late entries are acceptable with proper notation)",
          "Sign and date all entries",
          "Use approved abbreviations only"
        ]
      },
      {
        heading: "What NOT to Document",
        type: "warning",
        content: "Avoid these documentation pitfalls:\n\n• Opinions about colleagues or their care\n• Blame or finger-pointing\n• \"Incident report filed\" (keep separate from medical record)\n• Speculation about what might have happened\n• Derogatory comments about patients\n• Assumptions not supported by evidence\n• Defensive language that suggests you're anticipating litigation"
      },
      {
        heading: "Late Entries",
        type: "text",
        content: "If you must add information after the fact:\n\n**Correct method:**\n\"Late entry for [date/time of original event]: [Documentation]. Entered on [current date] at [current time] by [your name].\"\n\n**Never:**\n• Backdate entries\n• Squeeze information into margins\n• Delete or white-out previous entries\n• Alter electronic timestamps"
      },
      {
        heading: "Corrections and Amendments",
        type: "text",
        content: "To correct an error:\n\n**Paper records:**\nDraw single line through error, write \"error,\" initial, date, and write correct information nearby.\n\n**Electronic records:**\nUse the system's amendment function. The original entry should remain visible with the correction appended.\n\n**Never:**\n• Obliterate the original entry\n• Use white-out or heavy black marker\n• Delete electronic entries without a trace"
      },
      {
        heading: "Informed Consent Documentation",
        type: "list",
        content: "Document informed consent discussions:",
        items: [
          "Procedure/treatment explained",
          "Risks discussed (be specific)",
          "Benefits explained",
          "Alternatives offered",
          "Patient's questions answered",
          "Patient verbalized understanding",
          "Consent form signed (if applicable)",
          "Interpreter used (if applicable)"
        ]
      },
      {
        heading: "Documenting Difficult Situations",
        type: "text",
        content: "When documenting challenging encounters:\n\n**Non-compliant patients:**\nDocument education provided, patient's stated reasons, risks explained, and that patient verbalized understanding of consequences.\n\n**Angry or threatening patients:**\nDocument specific behaviors objectively (\"Patient raised voice and stated 'I'll sue you'\"), not interpretations (\"Patient was hostile\").\n\n**Family conflicts:**\nDocument who said what, decisions made, and by whom. Note healthcare proxy or POA if applicable."
      },
      {
        heading: "Objective Language",
        type: "example",
        content: "**Objective (good):**\n\"Patient found on floor beside bed at 0300. Denies LOC. No visible injuries. Vital signs stable. Provider notified.\"\n\n**Subjective (avoid):**\n\"Patient fell out of bed because side rails were left down. Nurse Smith should have checked on him sooner.\"\n\nThe objective version documents facts. The subjective version assigns blame and creates liability."
      },
      {
        heading: "Communication Documentation",
        type: "list",
        content: "Document all significant communications:",
        items: [
          "Provider notifications (who, when, what was communicated, response)",
          "Family updates (who was told, what was said)",
          "Handoff communications (SBAR format recommended)",
          "Phone orders (read back and verify)",
          "Critical lab notifications",
          "Consultant recommendations"
        ]
      },
      {
        heading: "Professional Boundaries",
        type: "warning",
        content: "Maintain professional boundaries in documentation:\n\n• Don't document personal opinions about patients\n• Avoid documenting information unrelated to care\n• Don't use social media references\n• Keep documentation focused on clinical relevance\n• Respect patient privacy — document only what's necessary"
      },
      {
        heading: "Your Documentation Checklist",
        type: "list",
        content: "Before closing any note, verify:",
        items: [
          "Chief complaint documented",
          "Relevant history captured",
          "Physical exam findings recorded",
          "Assessment reflects clinical reasoning",
          "Plan addresses all problems identified",
          "Patient education documented",
          "Follow-up plan clear",
          "Signature and credentials included",
          "Date and time accurate",
          "No prohibited abbreviations used"
        ]
      }
    ]
  }
];

// Helper functions
export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: Article["category"]): Article[] {
  return articles.filter(a => a.category === category);
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter(a => a.tags.includes(tag.toLowerCase()));
}
