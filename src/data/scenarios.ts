export interface TranscriptEntry {
  timestamp: string;
  speaker: string;
  text: string;
  role: "nurse" | "patient" | "provider" | "parent";
}

export interface SOAPNote {
  subjective: string;
  objective: string;
  assessment: string;
  plan: string;
}

export type CategoryId = "primary-care" | "pediatrics" | "mental-health" | "emergency" | "multilingual";

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
  description: string;
}

export interface Scenario {
  id: string;
  title: string;
  category: CategoryId;
  description: string;
  tags: string[];
  transcript: TranscriptEntry[];
  soap: SOAPNote;
}

export const categories: Category[] = [
  { id: "primary-care", name: "Primary Care", icon: "📘", description: "Family medicine and general practice scenarios" },
  { id: "pediatrics", name: "Pediatrics", icon: "👶", description: "Child and adolescent health encounters" },
  { id: "mental-health", name: "Mental Health", icon: "🧠", description: "Behavioral health and psychiatric assessments" },
  { id: "emergency", name: "Emergency", icon: "🚑", description: "Urgent care and ER triage scenarios" },
  { id: "multilingual", name: "Multilingual", icon: "🌍", description: "Non-English language encounters" },
];

export const scenarios: Record<string, Scenario> = {
  "chest-pain": {
    id: "chest-pain",
    title: "Chest Pain",
    category: "primary-care",
    description: "Tightness, left arm numbness, dizziness. High-acuity assessment.",
    tags: ["cardiac", "urgent"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Sarah", text: "Hi Maria, I'm Sarah. How are you feeling?", role: "nurse" },
      { timestamp: "00:05", speaker: "Maria", text: "It's my chest. Tight. Like someone sitting on it.", role: "patient" },
      { timestamp: "00:12", speaker: "Nurse Sarah", text: "Can you point to where you feel the tightness?", role: "nurse" },
      { timestamp: "00:18", speaker: "Maria", text: "Right here, center. Started an hour ago climbing stairs.", role: "patient" },
      { timestamp: "00:28", speaker: "Nurse Sarah", text: "On a scale of 1-10, how would you rate this?", role: "nurse" },
      { timestamp: "00:35", speaker: "Maria", text: "Maybe 6 or 7. It comes and goes. Rest helps a little.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Chest pain and tightness\n\nHPI: 58 y/o female with substernal chest tightness. Onset 1 hour ago while climbing stairs. Pressure-like, 6-7/10. Radiates to left arm. Associated SOB, diaphoresis. Rest provides mild relief.\n\nPMH: HTN (on lisinopril), FHx: Mother MI at 62",
      objective: "Vitals: BP 158/94, HR 102, RR 20, SpO2 95% RA\n\nGeneral: Anxious, mildly diaphoretic\nCV: Tachycardic, regular rhythm, no murmurs\nResp: Clear bilaterally\nExt: No edema, pulses intact",
      assessment: "Working Dx: Acute Coronary Syndrome - R/O MI\n\nClassic presentation with substernal pressure, left arm radiation, diaphoresis. Multiple cardiac risk factors.\n\nDifferential: 1. Acute MI 2. Unstable Angina 3. Stable Angina",
      plan: "1. 12-lead ECG STAT\n2. IV access\n3. Aspirin 325mg PO given\n4. Cardiac biomarkers\n5. Continuous monitoring\n\nPending: Cardiology consult, serial troponins, CXR",
    },
  },
  "abdominal-pain-rlq": {
    id: "abdominal-pain-rlq",
    title: "Abdominal Pain (RLQ)",
    category: "primary-care",
    description: "Sharp RLQ pain, nausea, guarding. Possible appendicitis.",
    tags: ["abdominal", "appendicitis"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Mike", text: "Hi, I'm Mike. What brings you in today?", role: "nurse" },
      { timestamp: "00:05", speaker: "James", text: "Really bad stomach pain since last night.", role: "patient" },
      { timestamp: "00:12", speaker: "Nurse Mike", text: "Can you show me where it hurts?", role: "nurse" },
      { timestamp: "00:16", speaker: "James", text: "Started around my belly button, now it's down here on the right.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Abdominal pain x 12 hours\n\nHPI: 24 y/o male with periumbilical pain migrating to RLQ. Sharp, constant, 8/10. Worse with movement/coughing. Associated nausea, 1x vomiting, subjective fever, anorexia.",
      objective: "Vitals: BP 128/78, HR 98, RR 18, Temp 100.8°F\n\nAbdomen: Flat, hypoactive BS, RLQ tenderness, +rebound, +guarding. McBurney's positive. Rovsing's positive.",
      assessment: "Primary Dx: Acute Appendicitis (suspected)\n\nClassic migration of pain, positive peritoneal signs, low-grade fever. Alvarado Score: 8",
      plan: "1. NPO\n2. IV fluids\n3. Labs: CBC, CMP, UA, lipase\n4. CT abdomen/pelvis\n\nSurgical consult notified",
    },
  },
  "headache-migraine": {
    id: "headache-migraine",
    title: "Headache / Migraine",
    category: "primary-care",
    description: "Long-term migraine sufferer with photophobia and nausea.",
    tags: ["headache", "migraine"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Lisa", text: "Hi Jennifer, tell me about your headache.", role: "nurse" },
      { timestamp: "00:06", speaker: "Jennifer", text: "I get migraines, but this one is really bad. Started yesterday.", role: "patient" },
      { timestamp: "00:14", speaker: "Nurse Lisa", text: "Where is the pain?", role: "nurse" },
      { timestamp: "00:18", speaker: "Jennifer", text: "Right side, behind my eye. Throbbing.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Severe headache x 24 hours\n\nHPI: 34 y/o female with known migraine history. Right-sided, retro-orbital, throbbing, 9/10. Visual aura preceded headache. Photophobia, phonophobia, nausea. Failed sumatriptan 100mg.",
      objective: "Vitals: BP 122/76, HR 72, RR 16\n\nGeneral: Lying in dark room, eyes closed\nNeuro: Alert, oriented x 4, CN II-XII intact, motor 5/5, no neck stiffness, negative Kernig's/Brudzinski's",
      assessment: "Primary Dx: Migraine with aura, intractable\n\nTypical migraine features, no red flags for secondary headache.",
      plan: "1. IV fluids NS 1L\n2. Prochlorperazine 10mg IV + Diphenhydramine 25mg IV\n3. Ketorolac 30mg IV\n\nDischarge: Rescue medication, headache diary\nFollow-up: Neurology 2 weeks",
    },
  },
  "sore-throat": {
    id: "sore-throat",
    title: "Sore Throat / Strep",
    category: "primary-care",
    description: "Fever, odynophagia, swollen tonsils. Strep pharyngitis evaluation.",
    tags: ["throat", "strep", "infection"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Amy", text: "Hi Tyler, what brings you in?", role: "nurse" },
      { timestamp: "00:04", speaker: "Tyler", text: "My throat has been killing me for two days. Hurts to swallow.", role: "patient" },
      { timestamp: "00:12", speaker: "Nurse Amy", text: "Any fever?", role: "nurse" },
      { timestamp: "00:15", speaker: "Tyler", text: "Yeah, 101.5 this morning.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Sore throat x 2 days\n\nHPI: 19 y/o male with acute pharyngitis. 7/10 pain with swallowing. Fever 101.5°F. Anterior cervical lymphadenopathy. Denies cough, rash.",
      objective: "Vitals: BP 118/72, HR 88, Temp 101.2°F\n\nPharynx: Erythematous, tonsillar exudates, tonsils 3+ bilaterally\nNeck: Tender anterior cervical LAD\n\nCentor Score: 4/4\nRapid Strep: POSITIVE",
      assessment: "Primary Dx: Acute Pharyngitis, Group A Strep\n\nHigh Centor score, classic presentation, positive rapid strep.",
      plan: "1. Amoxicillin 500mg TID x 10 days\n2. Ibuprofen 400mg q6h PRN\n\nEducation: Complete antibiotics, contagious until 24h on treatment\nReturn if: Difficulty breathing/swallowing",
    },
  },
  "back-pain": {
    id: "back-pain",
    title: "Back Pain (MSK)",
    category: "primary-care",
    description: "Lumbar strain after lifting. Common nursing documentation.",
    tags: ["back pain", "musculoskeletal"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Dan", text: "Hi Robert, what happened?", role: "nurse" },
      { timestamp: "00:06", speaker: "Robert", text: "Helping my buddy move furniture. Felt something pull in my lower back.", role: "patient" },
      { timestamp: "00:15", speaker: "Nurse Dan", text: "Does it go down your legs?", role: "nurse" },
      { timestamp: "00:20", speaker: "Robert", text: "No, stays in my back. Worse when I bend or twist.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Low back pain x 1 day\n\nHPI: 42 y/o male with acute LBP after lifting furniture. Left lumbar, aching, 6/10. Worse with bending/twisting. No radicular symptoms, no numbness/tingling, no bowel/bladder dysfunction.",
      objective: "Vitals: BP 132/82, HR 76\n\nSpine: L4-L5 paraspinal tenderness L>R, limited flexion\nNeuro: Strength 5/5 bilateral LE, sensation intact, DTRs 2+, SLR negative",
      assessment: "Primary Dx: Acute Lumbar Strain (M54.5)\n\nClear mechanical mechanism, localized pain, no neurological deficits, negative red flags.",
      plan: "1. Activity modification x 2 weeks\n2. Ice/heat\n3. Ibuprofen 600mg TID x 7 days\n4. Cyclobenzaprine 10mg TID PRN x 5 days\n\nReturn if: Leg weakness, numbness, bowel/bladder changes",
    },
  },
  "uri-viral": {
    id: "uri-viral",
    title: "URI / Viral Syndrome",
    category: "primary-care",
    description: "Congestion, cough, low fever, fatigue. Daily clinic scenario.",
    tags: ["cold", "viral", "respiratory"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Kim", text: "Hi Sandra, what's going on?", role: "nurse" },
      { timestamp: "00:04", speaker: "Sandra", text: "Had this cold for 4 days. Stuffy nose, coughing, feel awful.", role: "patient" },
      { timestamp: "00:14", speaker: "Nurse Kim", text: "Any fever?", role: "nurse" },
      { timestamp: "00:17", speaker: "Sandra", text: "Low grade, maybe 99 or 100.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Cold symptoms x 4 days\n\nHPI: 38 y/o female with nasal congestion, dry cough, mild sore throat, sinus pressure, fatigue. Low-grade fever 99-100°F. Denies SOB, chest pain.",
      objective: "Vitals: BP 118/74, HR 78, Temp 99.4°F, SpO2 98% RA\n\nNasal mucosa: Erythematous, clear discharge\nPharynx: Mild erythema, no exudates\nLungs: Clear bilaterally",
      assessment: "Primary Dx: Acute Viral URI (J06.9)\n\nClassic viral presentation, no bacterial features.",
      plan: "Symptomatic:\n1. Rest, fluids\n2. Pseudoephedrine PRN\n3. Guaifenesin PRN\n4. Acetaminophen PRN\n\nEducation: Viral illness, antibiotics not indicated\nReturn if: Fever >101.5°F, worsening after day 7",
    },
  },
  "fatigue-thyroid": {
    id: "fatigue-thyroid",
    title: "Fatigue + Thyroid",
    category: "primary-care",
    description: "Chronic fatigue, hair loss, weight change. Differential thinking.",
    tags: ["fatigue", "thyroid", "endocrine"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Beth", text: "Hi Patricia, tell me about your fatigue.", role: "nurse" },
      { timestamp: "00:06", speaker: "Patricia", text: "So tired for months. Sleep 8 hours but wake up exhausted.", role: "patient" },
      { timestamp: "00:16", speaker: "Nurse Beth", text: "Any other changes?", role: "nurse" },
      { timestamp: "00:20", speaker: "Patricia", text: "Hair falling out. Gained 10 pounds without changing anything.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Fatigue x 3 months\n\nHPI: 45 y/o female with progressive fatigue, hair loss, 10 lb weight gain, cold intolerance, dry skin, constipation, menorrhagia.\n\nFHx: Mother with hypothyroidism",
      objective: "Vitals: BP 124/80, HR 58 (bradycardia)\nWeight: 168 lbs (up from 158)\n\nSkin: Dry, cool\nHair: Coarse, thinning\nThyroid: Possibly enlarged\nNeuro: Delayed DTR relaxation",
      assessment: "Primary Dx: Hypothyroidism (suspected)\n\nClassic hypothyroid constellation with bradycardia, delayed DTRs, positive family history.",
      plan: "Labs:\n1. TSH\n2. Free T4\n3. CBC\n4. CMP\n\nIf TSH elevated → Start levothyroxine\nFollow-up: Phone call with results 2-3 days",
    },
  },
  "diabetes-followup": {
    id: "diabetes-followup",
    title: "Diabetes Follow-Up",
    category: "primary-care",
    description: "A1c concerns, medication review, poor diet. Patient education.",
    tags: ["diabetes", "chronic", "follow-up"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Mike", text: "How have you been managing your diabetes?", role: "nurse" },
      { timestamp: "00:08", speaker: "Robert", text: "Tough. Blood sugars still all over the place.", role: "patient" },
      { timestamp: "00:18", speaker: "Nurse Mike", text: "Taking metformin as prescribed?", role: "nurse" },
      { timestamp: "00:24", speaker: "Robert", text: "Sometimes forget evening dose. Stomach upset doesn't help.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Diabetes follow-up, uncontrolled\n\nHPI: 62 y/o male with Type 2 DM. Home glucose: Fasting 180, pre-dinner >200. Inconsistent metformin adherence, GI upset (not taking with food). Nocturia 2-3x/night.",
      objective: "Vitals: BP 142/88, HR 78\nWeight: 198 lbs (up 3 lbs), BMI 31.2\n\nFeet: Intact sensation\nLabs: HbA1c 8.4%, Cr 1.1, eGFR 72",
      assessment: "Primary Dx: Type 2 DM, uncontrolled (E11.65)\n\nContributing: Medication non-adherence, GI intolerance, suboptimal diet.",
      plan: "1. Continue Metformin - MUST take with meals\n2. Consider extended-release if GI persists\n3. Diabetes educator referral\n\nMonitoring: Home glucose BID, repeat A1c 3 months\nFollow-up: 3 months",
    },
  },
  "peds-fever": {
    id: "peds-fever",
    title: "Pediatric Fever",
    category: "pediatrics",
    description: "Fever, tugging ears, decreased appetite. Essential for new nurses.",
    tags: ["fever", "pediatric", "ear infection"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Lisa", text: "Hi! I'm Lisa. Who do we have here?", role: "nurse" },
      { timestamp: "00:05", speaker: "Mom", text: "This is Emma, she's 2. Fever since yesterday, keeps pulling at her ears.", role: "parent" },
      { timestamp: "00:15", speaker: "Nurse Lisa", text: "What was her highest temperature?", role: "nurse" },
      { timestamp: "00:20", speaker: "Mom", text: "102.8 last night. Tylenol helped but it keeps coming back.", role: "parent" },
    ],
    soap: {
      subjective: "CC: Fever and ear tugging x 1 day\n\nHPI: 2 y/o female with fever (Tmax 102.8°F), ear tugging bilateral, rhinorrhea x 3 days, decreased appetite, fussiness.\n\nImmunizations: Up to date",
      objective: "Vitals: Temp 101.4°F, HR 130, RR 28, SpO2 98% RA\n\nGeneral: Fussy but consolable, non-toxic\nTM Right: Erythematous, bulging, decreased mobility\nTM Left: Mild erythema, mobile",
      assessment: "Primary Dx: Acute Otitis Media, Right ear\n\nFever with ear tugging, bulging erythematous TM, preceded by URI.",
      plan: "1. Amoxicillin 80mg/kg/day BID x 10 days\n2. Acetaminophen 15mg/kg q4-6h PRN\n3. Ibuprofen 10mg/kg q6-8h PRN\n\nReturn if: Fever >104°F or >72h on antibiotics\nFollow-up: Recheck 2-3 weeks",
    },
  },
  "peds-cough-wheeze": {
    id: "peds-cough-wheeze",
    title: "Pediatric Cough/Wheeze",
    category: "pediatrics",
    description: "Possible viral bronchiolitis or asthma. Teaching example.",
    tags: ["cough", "wheeze", "respiratory", "pediatric"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Tom", text: "What's going on with Marcus today?", role: "nurse" },
      { timestamp: "00:06", speaker: "Dad", text: "Coughing a lot and sounds wheezy. Started a few days ago.", role: "parent" },
      { timestamp: "00:16", speaker: "Nurse Tom", text: "Any trouble breathing?", role: "nurse" },
      { timestamp: "00:22", speaker: "Dad", text: "A little. I can see his chest pulling in.", role: "parent" },
    ],
    soap: {
      subjective: "CC: Cough and wheezing x 3 days\n\nHPI: 3 y/o male with cough, audible wheeze, low-grade fever 100°F, increased work of breathing. Rhinorrhea preceded symptoms. Previous wheezing with viral illness, no asthma dx.",
      objective: "Vitals: Temp 100.2°F, HR 128, RR 36, SpO2 94% RA\n\nResp: Intercostal retractions, bilateral expiratory wheezes, prolonged expiratory phase, good air movement",
      assessment: "Primary Dx: Acute Viral-Induced Wheeze / Reactive Airway\n\nViral prodrome followed by wheezing, moderate respiratory distress, SpO2 94%.",
      plan: "1. Albuterol neb 2.5mg given\n2. Post-treatment: RR 28, SpO2 97%, improved\n\nDischarge:\n- Albuterol MDI 2 puffs q4-6h PRN\n- Prednisolone 1mg/kg/day x 3 days\n\nReturn if: Breathing worse, lips blue\nFollow-up: PCP 1 week",
    },
  },
  "sports-physical": {
    id: "sports-physical",
    title: "Sports Physical",
    category: "pediatrics",
    description: "Routine exam documentation. High traffic on Google.",
    tags: ["physical", "sports", "routine", "pediatric"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Kelly", text: "Hi Jake! Here for your sports physical?", role: "nurse" },
      { timestamp: "00:05", speaker: "Jake", text: "Yeah, for basketball tryouts.", role: "patient" },
      { timestamp: "00:12", speaker: "Nurse Kelly", text: "Any health problems?", role: "nurse" },
      { timestamp: "00:17", speaker: "Jake", text: "No, pretty healthy.", role: "patient" },
    ],
    soap: {
      subjective: "Reason: Pre-participation sports physical for basketball\n\n15 y/o male, no significant PMH. Medications: Albuterol PRN (seasonal allergies).\n\nCardiac Screening - All Negative: No syncope, chest pain, palpitations, FHx sudden cardiac death.",
      objective: "Vitals: BP 112/68, HR 68\nHeight: 5'10\", Weight: 145 lbs, BMI 20.8\nVision: 20/20\n\nCV: RRR, no murmurs\nMSK: Full ROM, no instability, no scoliosis",
      assessment: "Healthy 15 y/o male\n\nSports Clearance: CLEARED for full participation",
      plan: "1. Continue albuterol PRN\n2. Proper warm-up and hydration\n\nForm completed and signed\nFollow-up: Annual physical",
    },
  },
  "peds-vomiting": {
    id: "peds-vomiting",
    title: "Pediatric Vomiting",
    category: "pediatrics",
    description: "GI bug, poor intake, parental concerns. Red flag assessment.",
    tags: ["vomiting", "dehydration", "gastroenteritis", "pediatric"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Amy", text: "Tell me what's been going on with Sophie.", role: "nurse" },
      { timestamp: "00:05", speaker: "Mom", text: "Throwing up since last night. Can't keep anything down.", role: "parent" },
      { timestamp: "00:14", speaker: "Nurse Amy", text: "When did she last urinate?", role: "nurse" },
      { timestamp: "00:20", speaker: "Mom", text: "Not sure... her diaper has been dry.", role: "parent" },
    ],
    soap: {
      subjective: "CC: Vomiting and diarrhea x 12 hours\n\nHPI: 18-month-old female with 6-7 episodes vomiting, 4 watery stools, fever 101°F, unable to tolerate fluids, decreased urine output, lethargic.\n\nSick contacts: Sibling had stomach bug 3 days ago",
      objective: "Vitals: Temp 100.4°F, HR 140, RR 24\nWeight: 22 lbs (baseline 24 lbs)\nCap refill: 3 seconds\n\nEyes: Slightly sunken\nMucous membranes: Tacky/dry\nTears: Reduced\n\nDehydration: MODERATE (5-10%)",
      assessment: "Primary Dx: Acute Viral Gastroenteritis with Moderate Dehydration\n\nClassic viral GE, sick contact, signs of moderate dehydration.",
      plan: "1. Oral trial: Pedialyte 5mL q5min x 1 hour\n2. If fails: IV NS 20mL/kg bolus\n3. Ondansetron ODT 2mg given\n\nReturn if: Unable to keep fluids down, no wet diaper 8 hours, blood in vomit/stool",
    },
  },
  "depression-screening": {
    id: "depression-screening",
    title: "Depression Screening",
    category: "mental-health",
    description: "Low mood, insomnia, loss of interest. PHQ-9 summary style.",
    tags: ["depression", "mental health", "screening"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Rachel", text: "I understand you've been feeling down. Tell me more.", role: "nurse" },
      { timestamp: "00:08", speaker: "David", text: "I just don't feel like myself. Everything feels heavy.", role: "patient" },
      { timestamp: "00:18", speaker: "Nurse Rachel", text: "How long have you felt this way?", role: "nurse" },
      { timestamp: "00:22", speaker: "David", text: "Maybe 2-3 months. Getting worse.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Depressed mood x 2-3 months\n\nHPI: 34 y/o male with depressed mood, anhedonia, insomnia (early morning awakening), fatigue, decreased appetite (10 lb weight loss), difficulty concentrating, worthlessness.\n\nSafety: Passive SI (\"Everyone would be better off without me\"), denies plan/intent.\n\nPHQ-9: 18 (Moderately Severe)\n\nSocial: Recently divorced (6 months ago), lives alone",
      objective: "Weight: 168 lbs (down from 178)\n\nMSE: Disheveled, poor eye contact, psychomotor retardation, low volume speech, mood \"empty\", flat affect, linear thought process, passive SI, no HI/delusions/hallucinations, alert/oriented x 4",
      assessment: "Primary Dx: Major Depressive Disorder, Single Episode, Moderate-Severe (F32.2)\n\nMeets DSM-5 criteria, PHQ-9 = 18, identifiable stressor.\n\nRisk Level: MODERATE",
      plan: "Safety Plan:\n1. Safety plan completed\n2. Crisis line (988) provided\n\nTreatment:\n1. Sertraline 50mg daily\n2. Therapy referral (CBT)\n3. Labs: TSH, CBC\n\nFollow-up: Phone 1 week, office 2 weeks\nReturn/call 988 if SI worsens",
    },
  },
  "anxiety-panic": {
    id: "anxiety-panic",
    title: "Anxiety / Panic",
    category: "mental-health",
    description: "Racing heart, shortness of breath, fear episodes.",
    tags: ["anxiety", "panic", "mental health"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Maria", text: "What brings you in today?", role: "nurse" },
      { timestamp: "00:05", speaker: "Jessica", text: "I keep having episodes where my heart races and I can't breathe. Feel like I'm dying.", role: "patient" },
      { timestamp: "00:16", speaker: "Nurse Maria", text: "How often does this happen?", role: "nurse" },
      { timestamp: "00:22", speaker: "Jessica", text: "At least twice a week. Sometimes out of nowhere.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Recurrent episodes of racing heart and difficulty breathing\n\nHPI: 28 y/o female with panic-like episodes 2+/week x 2 months, lasting 10-15 minutes. Symptoms: palpitations, SOB, paresthesias, dizziness, sense of doom.\n\nAvoidance: Grocery stores, limiting driving\n\nMedical Hx: Recent ER visit - cardiac workup negative",
      objective: "Vitals: BP 118/76, HR 82, SpO2 99% RA\n\nGeneral: Anxious but cooperative\nCV: RRR, no murmurs\n\nMSE: Mood \"anxious\", anxious affect, linear thought process, no SI/HI",
      assessment: "Primary Dx: Panic Disorder with Agoraphobia (F40.01)\n\nRecurrent unexpected panic attacks, persistent worry, avoidance behavior, negative cardiac workup.",
      plan: "1. Sertraline 25mg daily (titrate to 50mg)\n2. Hydroxyzine 25mg PRN acute anxiety\n3. Therapy referral (CBT)\n4. Labs: TSH\n\nEducation: Panic attacks not dangerous, breathing techniques\nFollow-up: 2 weeks",
    },
  },
  "ptsd-followup": {
    id: "ptsd-followup",
    title: "PTSD Follow-Up",
    category: "mental-health",
    description: "Stress triggers after traumatic event. Sensitive language.",
    tags: ["ptsd", "trauma", "mental health"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse James", text: "Hi Marcus, how have you been since our last visit?", role: "nurse" },
      { timestamp: "00:06", speaker: "Marcus", text: "Still having the nightmares. Maybe 3-4 times a week.", role: "patient" },
      { timestamp: "00:16", speaker: "Nurse James", text: "Are you still having flashbacks?", role: "nurse" },
      { timestamp: "00:22", speaker: "Marcus", text: "Yeah. Loud noises set me off.", role: "patient" },
    ],
    soap: {
      subjective: "CC: PTSD follow-up\n\nHPI: 32 y/o male veteran with PTSD (combat-related). Nightmares 3-4x/week, flashbacks triggered by loud noises, hypervigilance, sleep ~4 hours/night, avoiding crowds.\n\nTreatment: Weekly EMDR (some improvement), Prazosin 2mg QHS, Sertraline 100mg daily\n\nSafety: Denies SI/HI, no access to weapons",
      objective: "Vitals: BP 134/82, HR 78\n\nMSE: Neat appearance, hypervigilant, mood \"on edge\", restricted affect, linear thought process, no SI/HI, flashbacks (not currently), intact cognition",
      assessment: "Diagnosis: PTSD, chronic (F43.12)\n\nNightmares persistent despite prazosin, flashbacks ongoing but less frequent, engaged in therapy.\n\nRisk: LOW",
      plan: "1. Increase Prazosin to 4mg QHS\n2. Continue Sertraline 100mg\n3. Add Trazodone 50mg PRN sleep\n4. Continue weekly EMDR\n\nFollow-up: 4 weeks\nCrisis resources: VA crisis line, 988",
    },
  },
  "er-chest-triage": {
    id: "er-chest-triage",
    title: "ER Triage - Chest Pain",
    category: "emergency",
    description: "Brief triage note with vitals emphasis. ER style.",
    tags: ["emergency", "triage", "chest pain"],
    transcript: [
      { timestamp: "00:00", speaker: "Triage Nurse", text: "What brings you to the ER today?", role: "nurse" },
      { timestamp: "00:04", speaker: "Patient", text: "Chest pain. Started about 30 minutes ago.", role: "patient" },
      { timestamp: "00:10", speaker: "Triage Nurse", text: "Scale of 1-10?", role: "nurse" },
      { timestamp: "00:14", speaker: "Patient", text: "8.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Chest pain x 30 minutes\n\nHPI: 62 y/o male with acute substernal chest pressure at rest, 8/10, radiates to left arm, associated diaphoresis. Denies SOB, nausea, syncope.\n\nPMH: HTN, hyperlipidemia, smoker",
      objective: "Vitals: BP 168/98, HR 104, RR 22, SpO2 94% RA\n\nAppearance: Diaphoretic, clutching chest, anxious\n\nTRIAGE LEVEL: ESI 2 (Emergent)",
      assessment: "Triage Assessment: Acute Chest Pain - High Risk for ACS\n\nRed Flags: Substernal pressure, left arm radiation, diaphoresis, cardiac risk factors, abnormal vitals",
      plan: "Immediate:\n1. Direct to resuscitation bay\n2. ECG within 10 minutes\n3. IV access x 2\n4. Cardiac monitor\n5. Aspirin 325mg given\n6. Provider notified STAT",
    },
  },
  "laceration": {
    id: "laceration",
    title: "Laceration / Wound Care",
    category: "emergency",
    description: "Minor cut, wound care discussion, dressing change.",
    tags: ["laceration", "wound", "urgent care"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Pat", text: "What happened to your hand?", role: "nurse" },
      { timestamp: "00:04", speaker: "Patient", text: "Cut it on a kitchen knife while cooking. About an hour ago.", role: "patient" },
      { timestamp: "00:12", speaker: "Nurse Pat", text: "Can you move all your fingers? Any numbness?", role: "nurse" },
      { timestamp: "00:18", speaker: "Patient", text: "Yeah, I can move them. No numbness.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Hand laceration x 1 hour\n\nHPI: 35 y/o female with laceration to left palm from kitchen knife. Bleeding controlled with pressure. Denies numbness, weakness.\n\nTetanus: ~5 years ago\nAllergies: NKDA",
      objective: "Wound: Left palm, 3 cm linear, partial thickness, clean sharp edges, minimal bleeding\n\nNeurovascular: Sensation intact, full finger movement, cap refill <2 sec, radial pulse 2+",
      assessment: "Diagnosis: Laceration, left palm, 3 cm (S61.412A)\n\nClean, sharp edges, no tendon/nerve involvement, appropriate for primary closure.",
      plan: "1. Irrigated with NS 500mL\n2. Lidocaine 1% local anesthesia\n3. Closure: 4-0 nylon, 6 simple interrupted sutures\n4. Tdap given (>5 years)\n\nDischarge: Keep dry 24-48h, daily dressing change, suture removal 10-14 days",
    },
  },
  "syncope": {
    id: "syncope",
    title: "Syncope Episode",
    category: "emergency",
    description: "Fainting episode at home, transient LOC. A&P training.",
    tags: ["syncope", "fainting", "emergency"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Chris", text: "Tell me what happened.", role: "nurse" },
      { timestamp: "00:04", speaker: "Patient", text: "I fainted at home. My wife said I was out for maybe 30 seconds.", role: "patient" },
      { timestamp: "00:14", speaker: "Nurse Chris", text: "What were you doing right before?", role: "nurse" },
      { timestamp: "00:18", speaker: "Patient", text: "Just standing up from the couch. Got dizzy and next thing I knew I was on the floor.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Syncope episode\n\nHPI: 68 y/o male with witnessed syncope at home, LOC ~30 seconds. Prodrome: lightheadedness, vision darkening. Position: standing from seated. Brief post-ictal confusion. No head trauma (wife caught him). Denies chest pain, palpitations.\n\nMedications: Lisinopril 20mg, tamsulosin 0.4mg",
      objective: "Vitals:\n- Supine: BP 138/82, HR 72\n- Standing: BP 112/68, HR 88 (orthostatic positive)\n\nGeneral: Alert, oriented\nCV: RRR, no murmurs\nNeuro: CN intact, strength 5/5, gait steady\n\nECG: NSR, no ischemic changes, QTc 440ms",
      assessment: "Diagnosis: Syncope, likely orthostatic (R55)\n\nClassic orthostatic presentation, positive orthostatic vitals, on tamsulosin (alpha-blocker), normal ECG.",
      plan: "1. IV fluids NS 1L bolus\n2. Recheck orthostatics after fluids\n3. Labs: CBC, BMP, glucose\n\nEducation: Rise slowly, increase fluids\nMedication review with PCP (tamsulosin may contribute)\n\nDisposition: Discharge if orthostatics improve\nFollow-up: PCP within 1 week",
    },
  },
  "spanish-encounter": {
    id: "spanish-encounter",
    title: "Spanish Encounter",
    category: "multilingual",
    description: "Mother describes child's symptoms in Spanish. Translation demo.",
    tags: ["spanish", "multilingual", "pediatric"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse Ana", text: "Hola, soy Ana. ¿Qué le pasa al niño?", role: "nurse" },
      { timestamp: "00:06", speaker: "Madre", text: "Mi hijo tiene fiebre desde ayer y le duele el oído.", role: "parent" },
      { timestamp: "00:14", speaker: "Nurse Ana", text: "¿Cuánto fue la temperatura más alta?", role: "nurse" },
      { timestamp: "00:20", speaker: "Madre", text: "Ciento dos punto cinco.", role: "parent" },
    ],
    soap: {
      subjective: "CC: Fiebre y dolor de oído (Fever and ear pain)\n\n[Encounter conducted in Spanish]\n\nHPI: 3 y/o male with fever since yesterday (Tmax 102.5°F), ear pain, pulling at right ear, decreased appetite, fussy.\n\nImmunizations: Up to date per mother",
      objective: "Vitals: Temp 101.8°F, HR 118, RR 24, SpO2 99% RA\n\nGeneral: Fussy, consolable with mother\nTM Right: Erythematous, bulging\nTM Left: Normal\nPharynx: Mild erythema",
      assessment: "Primary Dx: Acute Otitis Media, Right ear\n\nFever with ear pain, bulging TM. Classic presentation.",
      plan: "1. Amoxicillin 80mg/kg/day BID x 10 days\n2. Acetaminophen/Ibuprofen PRN fever\n\n[Instructions provided in Spanish]\n\nRegrese si: Fiebre >104°F, empeora después de 48 horas\n(Return if: Fever >104°F, worsens after 48 hours)",
    },
  },
  "somali-encounter": {
    id: "somali-encounter",
    title: "Somali Encounter",
    category: "multilingual",
    description: "Elderly patient describing chronic pain in Somali.",
    tags: ["somali", "multilingual", "chronic pain"],
    transcript: [
      { timestamp: "00:00", speaker: "Nurse", text: "[Via interpreter] Hello, I'm your nurse today. What brings you in?", role: "nurse" },
      { timestamp: "00:08", speaker: "Patient", text: "[Via interpreter] I have pain in my back and legs for many months.", role: "patient" },
      { timestamp: "00:18", speaker: "Nurse", text: "[Via interpreter] Can you show me where the pain is?", role: "nurse" },
      { timestamp: "00:24", speaker: "Patient", text: "[Via interpreter] Here in my lower back, and it goes down both legs.", role: "patient" },
    ],
    soap: {
      subjective: "CC: Chronic back and leg pain\n\n[Encounter conducted via Somali interpreter - phone interpretation service]\n\nHPI: 72 y/o female with chronic low back pain radiating to bilateral legs x 6 months. Worse with walking, better with rest. Associated numbness in feet. Difficulty walking long distances.\n\nPMH: Diabetes, hypertension\nMedications: Metformin, lisinopril",
      objective: "Vitals: BP 148/88, HR 76, RR 16\n\nGait: Slow, uses cane\nSpine: Tenderness L4-S1, limited ROM\nNeuro: Decreased sensation bilateral feet (stocking distribution), strength 4/5 bilateral LE, DTRs 1+ ankles",
      assessment: "Primary Dx: Lumbar Radiculopathy with Diabetic Neuropathy\n\nChronic LBP with radicular features, superimposed diabetic peripheral neuropathy.",
      plan: "1. X-ray lumbar spine\n2. Consider MRI if red flags\n3. Gabapentin 100mg TID (start low, titrate)\n4. Physical therapy referral\n5. Optimize diabetes control\n\n[Discharge instructions provided via interpreter]\n[Written instructions in Somali provided]\n\nFollow-up: 2 weeks",
    },
  },
};

export function getAllScenarios(): Scenario[] {
  return Object.values(scenarios);
}

export function getScenariosByCategory(categoryId: CategoryId): Scenario[] {
  return Object.values(scenarios).filter(s => s.category === categoryId);
}

export function getCategoryById(id: CategoryId): Category | undefined {
  return categories.find(c => c.id === id);
}
