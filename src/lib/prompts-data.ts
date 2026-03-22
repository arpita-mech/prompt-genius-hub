import { Prompt } from "./types";

export const prompts: Prompt[] = [
  // ═══════════════════════════════════════════════════════════════
  // CAREER & JOBS (10 prompts)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "1",
    slug: "masters-cv-resume-builder",
    title: "Master's Student CV / Resume Builder",
    description: "Create a polished, ATS-optimized CV or resume tailored for master's graduates entering the job market. Highlights academic projects, internships, and transferable skills.",
    prompt: `Act as a professional CV writer who specializes in helping master's graduates land their first industry roles.

Create a tailored CV/resume for me based on the following details:

**My Background:**
- Degree: [DEGREE] from [UNIVERSITY]
- Graduation date: [DATE]
- Relevant coursework: [COURSES]
- Thesis/capstone topic: [THESIS_TOPIC]
- Internships/work experience: [EXPERIENCE]
- Technical skills: [SKILLS]
- Soft skills: [SOFT_SKILLS]
- Languages: [LANGUAGES]
- Target role: [TARGET_ROLE]
- Target industry: [INDUSTRY]

**Please provide:**

## 1. PROFESSIONAL SUMMARY
- 3-4 sentences that position me as a strong candidate
- Incorporate keywords from typical job descriptions for [TARGET_ROLE]
- Balance academic achievements with practical capabilities

## 2. EDUCATION SECTION
- Optimized formatting for my degree
- Relevant coursework selection (most impactful 4-6 courses)
- GPA presentation strategy (when to include, when to omit)
- Thesis/project as a highlight

## 3. EXPERIENCE SECTION
- Transform academic projects into professional achievements
- Use STAR-format bullet points with quantified results
- Action verbs appropriate for entry-level/early-career
- Bridge gaps between academic work and industry needs

## 4. SKILLS SECTION
- Categorized technical and soft skills
- ATS-friendly keyword integration
- Proficiency levels where appropriate

## 5. ADDITIONAL SECTIONS
- Relevant certifications or online courses
- Conference presentations or publications
- Volunteer work or leadership roles
- Professional memberships

## 6. ATS OPTIMIZATION TIPS
- Keywords to include for [TARGET_ROLE]
- Formatting do's and don'ts
- Common ATS pitfalls to avoid

Format the CV in a clean, professional layout. Use consistent formatting throughout.`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "CV & Resume",
    tags: ["CV", "resume", "job-search", "ATS", "career"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[DEGREE]: MSc Data Science from University of Edinburgh
[TARGET_ROLE]: Junior Data Scientist
[THESIS_TOPIC]: "Predicting student dropout using ensemble methods on longitudinal education data"
[SKILLS]: Python, R, SQL, TensorFlow, Tableau`,
    exampleOutput: `## PROFESSIONAL SUMMARY

Data Science graduate from the University of Edinburgh with hands-on experience building predictive models on real-world datasets. Thesis research achieved 89% accuracy in student dropout prediction using ensemble methods, processing 120K+ records. Proficient in Python, R, and SQL with a strong foundation in statistical analysis, machine learning, and data visualization. Seeking a Junior Data Scientist role where I can apply analytical rigor to drive business decisions.

## EXPERIENCE

**Research Assistant — School of Informatics, University of Edinburgh** (Sep 2023 – Aug 2024)
• Built an ensemble ML pipeline (Random Forest + XGBoost) that improved dropout prediction accuracy by 14% over baseline logistic regression
• Cleaned and processed 120,000+ student records from 5 data sources, reducing missing data impact by 23%
• Presented findings at the Scottish Data Science Symposium to an audience of 80+ researchers...`,
    proTips: [
      "Tailor the CV for each application — swap keywords to match the specific job description",
      "Keep it to 1–2 pages maximum; recruiters spend ~7 seconds on initial screening",
      "Quantify everything: 'Analysed data' → 'Analysed 50K+ records reducing processing time by 30%'",
      "Ask the AI to 'rewrite this CV targeting [specific company]' for laser-focused applications",
    ],
    relatedPromptIds: ["2", "3", "22"],
  },
  {
    id: "2",
    slug: "cover-letter-generator",
    title: "Targeted Cover Letter Generator",
    description: "Generate personalised cover letters that connect your academic background to specific job requirements, with the right balance of enthusiasm and professionalism.",
    prompt: `Act as a career coach who helps master's graduates write compelling cover letters that get interviews.

Write a tailored cover letter for this position:

**Job Details:**
- Job title: [JOB_TITLE]
- Company: [COMPANY]
- Key requirements from job description: [REQUIREMENTS]
- Company values/mission: [VALUES]

**My Background:**
- Degree: [DEGREE]
- University: [UNIVERSITY]
- Relevant experience: [EXPERIENCE]
- Key achievements: [ACHIEVEMENTS]
- Why I want this role: [MOTIVATION]

**Structure the letter as follows:**

## OPENING PARAGRAPH
- Hook that shows genuine knowledge of the company
- Clear statement of the role you're applying for
- One compelling reason you're a strong fit

## BODY PARAGRAPH 1 — ACADEMIC RELEVANCE
- Connect your master's research/coursework directly to the role
- Show how your academic work prepared you for this specific position
- Include one concrete achievement with numbers

## BODY PARAGRAPH 2 — PRACTICAL EXPERIENCE
- Highlight internship, project, or relevant work experience
- Demonstrate skills that match the job requirements
- Show problem-solving ability with a specific example

## BODY PARAGRAPH 3 — CULTURAL FIT & MOTIVATION
- Demonstrate knowledge of the company's mission/values
- Explain genuine motivation beyond "I need a job"
- Show long-term thinking and growth mindset

## CLOSING
- Confident but not arrogant call to action
- Availability for interview
- Professional sign-off

**Tone:** Professional but personable. Confident but not boastful. Enthusiastic but genuine.
**Length:** 350–450 words (one page).`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Cover Letters",
    tags: ["cover-letter", "job-application", "career", "writing"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[JOB_TITLE]: Graduate Marketing Analyst
[COMPANY]: Spotify
[DEGREE]: MSc Marketing Analytics, University of Bath
[MOTIVATION]: Passionate about how data drives music discovery`,
    exampleOutput: `Dear Hiring Team,

When Spotify's Discover Weekly recommended an obscure Malian guitarist who became my most-played artist of 2024, I didn't just enjoy the music — I wanted to understand the algorithm behind the magic. As an MSc Marketing Analytics graduate from the University of Bath, I've spent the past year studying exactly these kinds of recommendation systems, and I'd love to bring that analytical curiosity to the Graduate Marketing Analyst role.

My dissertation, "Predicting Playlist Engagement Using Collaborative Filtering on Streaming Data," gave me hands-on experience with the intersection of consumer behaviour and algorithmic recommendation. Using a dataset of 2.3M listening sessions, I identified that playlist diversity — not just preference matching — increased 28-day retention by 18%. This insight mirrors Spotify's own approach to balancing familiarity with discovery...`,
    proTips: [
      "Research the company extensively — mention a specific project, product, or initiative they'll recognise",
      "Never start with 'I am writing to apply for...' — it wastes your opening hook",
      "Match the tone of the company's careers page and social media presence",
      "Ask the AI to 'make this more specific to [company]' if the first draft feels generic",
    ],
    relatedPromptIds: ["1", "3", "22"],
  },
  {
    id: "3",
    slug: "linkedin-profile-optimizer",
    title: "LinkedIn Profile Optimizer for Graduates",
    description: "Transform your LinkedIn profile into a recruiter-magnet with optimised headline, about section, and experience descriptions that showcase your master's expertise.",
    prompt: `Act as a LinkedIn personal branding specialist who helps master's graduates get noticed by recruiters.

Optimise my LinkedIn profile based on:

**Current Situation:**
- Degree: [DEGREE] from [UNIVERSITY]
- Target roles: [TARGET_ROLES]
- Target industries: [INDUSTRIES]
- Current headline: [CURRENT_HEADLINE]
- Key skills: [SKILLS]
- Notable projects/thesis: [PROJECTS]

**Optimise these sections:**

## 1. HEADLINE (120 characters max)
- 3 variations: keyword-focused, value-focused, personality-focused
- Include target role keywords recruiters search for
- Avoid "Seeking opportunities" or "Open to work" in the headline itself

## 2. ABOUT SECTION (2,600 characters max)
- Hook in the first 2 lines (visible before "see more")
- Story arc: background → expertise → what you bring → what you're looking for
- Naturally embed 10-15 keywords for search visibility
- End with a clear call to action
- Include line breaks for readability

## 3. EXPERIENCE DESCRIPTIONS
- Transform each role/project into achievement-focused bullets
- Use metrics and outcomes wherever possible
- Bridge academic experience to industry value

## 4. FEATURED SECTION STRATEGY
- What to showcase (thesis, projects, articles, presentations)
- How to frame academic work for a professional audience

## 5. SKILLS & ENDORSEMENTS STRATEGY
- Top 5 skills to prioritise for [TARGET_ROLES]
- Skills ordering for maximum visibility
- Related skills to add for broader search coverage

## 6. ACTIVITY & CONTENT STRATEGY
- 5 post ideas to establish thought leadership
- Commenting strategy for visibility
- Connection request templates for networking`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "LinkedIn",
    tags: ["LinkedIn", "personal-branding", "networking", "profile"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[DEGREE]: MSc Computer Science from ETH Zurich
[TARGET_ROLES]: ML Engineer, Data Scientist
[CURRENT_HEADLINE]: "MSc Student at ETH Zurich"
[SKILLS]: PyTorch, NLP, computer vision, MLOps`,
    exampleOutput: `## HEADLINE OPTIONS

1. **Keyword-focused:** "ML Engineer | NLP & Computer Vision | MSc CS @ ETH Zurich | PyTorch · MLOps"
2. **Value-focused:** "Building ML systems that scale | NLP + Vision | ETH Zurich CS Graduate"
3. **Personality-focused:** "Teaching machines to see and read — ML Engineer from ETH Zurich"

## ABOUT SECTION

I taught a neural network to detect diabetic retinopathy from fundus images with 94% sensitivity — and that single project at ETH Zurich convinced me that applied ML can genuinely change lives.

Over the past two years, I've gone deep on the entire ML pipeline: from research and prototyping (PyTorch, Hugging Face) to deployment and monitoring (Docker, MLflow, AWS SageMaker). My thesis on few-shot learning for medical imaging was accepted at MICCAI 2024's workshop track...`,
    proTips: [
      "Your headline is searchable — include exact job title keywords recruiters use",
      "The first 2 lines of your About section must hook readers before they click 'see more'",
      "Post or engage 2-3 times per week for the algorithm to boost your profile visibility",
      "Ask the AI to 'analyse this job description and update my profile to match' for each application",
    ],
    relatedPromptIds: ["1", "4", "5"],
  },
  {
    id: "4",
    slug: "linkedin-post-creator",
    title: "LinkedIn Post Creator for Students",
    description: "Write engaging LinkedIn posts that showcase your expertise, share learnings, and build your professional network while still in your master's programme.",
    prompt: `Act as a LinkedIn content strategist. Write an engaging LinkedIn post for a master's student.

**Post Details:**
- Topic: [TOPIC]
- Goal: [GOAL — engagement/thought leadership/networking/job search]
- My background: [BACKGROUND]
- Key insight or story: [INSIGHT]
- Target audience: [AUDIENCE]

**Write the post following these principles:**

## STRUCTURE
1. **Hook (Line 1-2):** Stop the scroll. Use a surprising stat, bold statement, or relatable frustration. Must work before the "...see more" cutoff.
2. **Story/Context (3-5 lines):** Brief narrative that makes the insight personal and credible
3. **Key Insight (3-5 lines):** The actual value — what you learned, discovered, or realised
4. **Takeaway/Framework (3-5 bullet points):** Actionable advice the reader can use immediately
5. **Engagement closer (1-2 lines):** Question or call to action that invites comments

## RULES
- Use line breaks between every 1-2 sentences (LinkedIn mobile formatting)
- No hashtag spam — max 3-5 relevant hashtags at the end
- Write like a human, not a press release
- Avoid cringe phrases: "I'm humbled," "Thrilled to announce," "Let that sink in"
- Keep total length between 150-250 words
- Use emojis sparingly (max 2-3, as visual markers not decoration)

Provide 2 versions: one more personal/story-driven, one more insight/data-driven.`,
    platforms: ["chatgpt", "claude"],
    category: "career",
    subcategory: "LinkedIn",
    tags: ["LinkedIn", "content", "personal-branding", "networking"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[TOPIC]: What I learned from failing my first technical interview
[GOAL]: Engagement + helping other students
[BACKGROUND]: MSc Software Engineering student
[INSIGHT]: The interview exposed gaps between academic knowledge and practical problem-solving`,
    exampleOutput: `**VERSION 1 (Story-driven):**

I bombed my first technical interview so badly the interviewer said "let's stop here."

Not "let's move on." Let's stop.

I could write a binary search tree on a whiteboard. I could explain Big O notation. But when they asked me to debug a real production issue with incomplete logs and time pressure?

Blank.

That's when I realised: university teaches you computer science. It doesn't teach you engineering.

Here's what I changed after that interview:

→ Started contributing to open source (real codebases, real bugs)
→ Built 3 side projects with messy, imperfect code
→ Practised with mock interviews (the pressure is the skill)
→ Read production post-mortems instead of textbooks

6 weeks later, I got an offer from my second-choice company.

What was your worst interview experience — and what did it teach you?

#SoftwareEngineering #GraduateJobs #CareerAdvice`,
    proTips: [
      "Posts with personal stories get 3-5x more engagement than generic advice",
      "The best time to post: Tuesday–Thursday, 7–9am in your target market's timezone",
      "Respond to every comment in the first hour — the algorithm rewards engagement velocity",
      "Vulnerability works, but always pair it with a lesson or actionable insight",
    ],
    relatedPromptIds: ["3", "5"],
  },
  {
    id: "5",
    slug: "networking-email-templates",
    title: "Professional Networking Email Templates",
    description: "Write compelling cold outreach and networking emails to professionals, alumni, and potential mentors that actually get responses.",
    prompt: `Act as a career networking expert. Write a networking email for this situation:

**Context:**
- Who I'm contacting: [PERSON — role, company, connection type]
- How I found them: [SOURCE — alumni network, LinkedIn, conference, mutual connection]
- My background: [BACKGROUND]
- What I want: [GOAL — informational interview, mentorship, job referral, advice]
- Shared connection/interest: [COMMON_GROUND]

**Provide 3 email versions:**

## VERSION 1: WARM & PERSONAL
- Leads with the human connection
- Feels like reaching out to a friend-of-a-friend
- ~100 words

## VERSION 2: VALUE-FIRST
- Leads with what you can offer or a shared interest
- Shows you've done research on them
- ~120 words

## VERSION 3: DIRECT & RESPECTFUL
- Gets to the point quickly
- Acknowledges their time is valuable
- Specific, bounded ask (not "can I pick your brain?")
- ~80 words

**For each version include:**
- Subject line (compelling, not clickbait)
- Email body
- Clear, specific call to action
- Professional signature

**Rules:**
- Never say "pick your brain" — be specific about what you want to learn
- Reference something specific about their work (shows genuine research)
- Make the ask small and time-bounded ("15 minutes" not "whenever you're free")
- No flattery that sounds copy-pasted
- Don't apologise for reaching out`,
    platforms: ["chatgpt", "claude"],
    category: "career",
    subcategory: "Networking",
    tags: ["networking", "email", "outreach", "mentorship"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[PERSON]: Senior Product Manager at Google, University of Manchester alumni
[SOURCE]: Alumni LinkedIn group
[BACKGROUND]: MSc Human-Computer Interaction student
[GOAL]: Informational interview about transitioning from UX research to product management`,
    exampleOutput: `## VERSION 3: DIRECT & RESPECTFUL

**Subject:** Quick question from a fellow Manchester grad (HCI → PM path)

Hi Sarah,

I'm an MSc HCI student at Manchester exploring the transition from UX research to product management — a path I noticed you've navigated successfully.

I'd love to ask you two specific questions about how your UX background shaped your PM approach. Would you have 15 minutes for a call in the next two weeks?

Either way, your talk at ProductCon on "Research-Driven Roadmaps" was excellent — the prioritisation framework is now pinned on my wall.

Best,
[Name]
MSc Human-Computer Interaction, University of Manchester
[LinkedIn URL]`,
    proTips: [
      "Follow up exactly once after 5-7 business days if no response — then stop",
      "Morning emails (7-9am) get higher response rates than afternoon ones",
      "Reference their specific work, not just their title — shows real research effort",
      "After the meeting, send a thank-you within 24 hours and share something relevant within a month",
    ],
    relatedPromptIds: ["3", "6"],
  },
  {
    id: "6",
    slug: "thank-you-email-after-interview",
    title: "Post-Interview Thank You Email",
    description: "Write memorable thank-you emails after job interviews that reinforce your candidacy and address any concerns that came up during the conversation.",
    prompt: `Act as a career strategist. Write a thank-you email after a job interview.

**Interview Details:**
- Position: [POSITION]
- Company: [COMPANY]
- Interviewer(s): [NAMES_AND_ROLES]
- Key topics discussed: [TOPICS]
- Questions I struggled with: [WEAK_POINTS]
- Strong moments: [STRONG_POINTS]
- Something personal we connected on: [PERSONAL_NOTE]
- Next steps mentioned: [NEXT_STEPS]

**The email should:**

1. **Thank them genuinely** (not generic — reference a specific moment)
2. **Reinforce your strongest point** from the interview
3. **Address any weak spots** — briefly clarify or strengthen an answer you weren't happy with
4. **Add value** — share a relevant article, idea, or resource related to something you discussed
5. **Reaffirm enthusiasm** without being desperate
6. **Reference next steps** they mentioned

**Rules:**
- Send-ready (no placeholders)
- Under 200 words
- Professional but warm
- No over-the-top flattery
- One email per interviewer (personalised)

Provide the email plus a brief strategy note on timing and follow-up cadence.`,
    platforms: ["chatgpt", "claude"],
    category: "career",
    subcategory: "Job Search",
    tags: ["interview", "thank-you", "email", "job-search"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[POSITION]: Junior Data Analyst at McKinsey
[INTERVIEWER]: James Park, Associate Partner
[TOPICS]: Case study on retail market sizing, Python skills, team collaboration
[WEAK_POINTS]: Stumbled on the market sizing estimation
[STRONG_POINTS]: Strong Python portfolio discussion`,
    exampleOutput: `**Subject:** Thank you — enjoyed our conversation about retail analytics

Hi James,

Thank you for the engaging conversation today. The retail market sizing case was genuinely challenging — I've been thinking about it since we finished, and I realise I should have anchored the top-down estimate on household spending data rather than population alone. That's the kind of analytical pressure-testing I'm excited to do daily.

I particularly enjoyed discussing how McKinsey's analytics practice bridges traditional consulting with ML-driven insights. It aligns closely with my thesis work on predictive modelling for consumer behaviour.

You mentioned the team uses Python + dbt for their data pipeline — I recently came across a great article on testing strategies for dbt models that your team might find useful: [link].

I'm very enthusiastic about this opportunity and look forward to the next steps you mentioned.

Best regards,
[Name]

---
**Strategy:** Send within 3-4 hours of the interview. If you interviewed with multiple people, send individual emails (not a group CC) within the same day.`,
    proTips: [
      "Send within 2-4 hours — same day is critical, next day is too late for competitive roles",
      "Address your weakest answer briefly but confidently — shows self-awareness and persistence",
      "Never copy-paste the same email to multiple interviewers; they compare notes",
      "If they mentioned a book, podcast, or tool — reference it to show you were listening",
    ],
    relatedPromptIds: ["2", "22", "23"],
  },
  {
    id: "7",
    slug: "career-pivot-strategy",
    title: "Career Pivot Strategy for Graduates",
    description: "Develop a strategic plan to transition into a new field after your master's, identifying transferable skills and mapping a realistic timeline.",
    prompt: `Act as a career transition coach specialising in helping master's graduates pivot into new industries.

**My Situation:**
- Current/recent degree: [DEGREE]
- Previous background: [PREVIOUS_BACKGROUND]
- Target career: [TARGET_CAREER]
- Target industry: [TARGET_INDUSTRY]
- Timeline: [TIMELINE]
- Location/market: [LOCATION]
- Constraints: [CONSTRAINTS — visa, financial, etc.]

**Create a comprehensive pivot strategy:**

## 1. SKILLS BRIDGE ANALYSIS
- Transferable skills from your degree → target role
- Skills gaps to fill (ranked by importance)
- How to frame your background as an advantage, not a detour

## 2. KNOWLEDGE GAPS & UPSKILLING PLAN
- Must-have skills (blocking without them)
- Nice-to-have skills (competitive advantage)
- Recommended courses, certifications, or projects for each
- Realistic time investment for each

## 3. EXPERIENCE BUILDING (0-6 months)
- Micro-projects you can start this week
- Volunteer/freelance opportunities
- Open-source or community contributions
- Portfolio pieces that demonstrate capability

## 4. NETWORK STRATEGY
- Communities and groups to join
- Events and conferences to attend
- 5 types of people to connect with
- Conversation starters for each

## 5. APPLICATION STRATEGY
- How to position yourself in CVs and cover letters
- Companies known for hiring career-changers
- Alternative entry points (contract, internship, adjacent role)
- Timeline with milestones

## 6. NARRATIVE DEVELOPMENT
- Your "career story" that makes the pivot logical
- Elevator pitch (30 seconds)
- Interview answer for "why the change?"`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Career Planning",
    tags: ["career-change", "strategy", "planning", "transition"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[DEGREE]: MSc Biology
[TARGET_CAREER]: UX Researcher
[TIMELINE]: 6 months
[CONSTRAINTS]: Need a visa-sponsoring employer in the UK`,
    exampleOutput: `## SKILLS BRIDGE ANALYSIS

Your biology MSc gives you a surprisingly strong foundation for UX research:

| Biology Skill | → UX Research Equivalent |
|---|---|
| Experimental design | A/B testing, usability study design |
| Statistical analysis (R, SPSS) | Quantitative UX metrics |
| Literature reviews | Desk research, competitive analysis |
| Lab observation & note-taking | User observation & contextual inquiry |
| Thesis writing | Research reports & insight documentation |

**Key gaps to fill:**
1. 🔴 **Critical:** User interview techniques, usability testing methods
2. 🟡 **Important:** Figma prototyping basics, information architecture
3. 🟢 **Nice-to-have:** Survey design tools (Typeform, Maze), accessibility standards...`,
    proTips: [
      "Lead with curiosity, not apology — 'I chose to pivot because...' not 'I know my background is different...'",
      "One strong portfolio case study beats five certificates on your CV",
      "Find companies that value diverse backgrounds — startups and consultancies are often more open",
      "Reach out to people who've made the same pivot — they're usually happy to share their path",
    ],
    relatedPromptIds: ["1", "3", "22"],
  },
  {
    id: "8",
    slug: "portfolio-project-description-writer",
    title: "Portfolio Project Description Writer",
    description: "Transform your academic or side projects into compelling portfolio pieces that impress recruiters and hiring managers.",
    prompt: `Act as a portfolio consultant who helps graduates present their work professionally.

Write a compelling portfolio description for my project:

**Project Details:**
- Project name: [NAME]
- What it does: [DESCRIPTION]
- Tech stack / tools: [TECH]
- My role: [ROLE]
- Duration: [DURATION]
- Context: [CONTEXT — coursework, thesis, hackathon, personal]
- Key challenge: [CHALLENGE]
- Results/outcome: [RESULTS]
- Link (if applicable): [LINK]

**Structure the description as:**

## 1. ONE-LINE HOOK
- Attention-grabbing summary (what problem it solves)

## 2. THE PROBLEM
- Why this project matters (2-3 sentences)
- Who has this problem and how it affects them

## 3. MY APPROACH
- Key decisions and why I made them
- Technology choices with reasoning
- Architecture or methodology overview

## 4. KEY FEATURES / HIGHLIGHTS
- 3-5 bullet points of the most impressive aspects
- Focus on complexity, creativity, or impact

## 5. CHALLENGES & SOLUTIONS
- The hardest problem I solved
- My thought process and how I overcame it
- What I learned from the struggle

## 6. RESULTS & IMPACT
- Quantified outcomes where possible
- User feedback or academic grade
- What I would do differently

## 7. TECHNICAL DETAILS
- Architecture diagram description
- Key algorithms or patterns used
- Performance metrics

Write in first person. Balance technical depth with accessibility — a non-technical hiring manager should understand the value, while a technical reviewer should see the rigour.`,
    platforms: ["chatgpt", "claude"],
    category: "career",
    subcategory: "Portfolio",
    tags: ["portfolio", "projects", "showcase", "career"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[NAME]: CampusPlate
[DESCRIPTION]: A food waste reduction app connecting university cafeterias with students for end-of-day surplus meals at 70% off
[TECH]: React Native, Node.js, PostgreSQL, Stripe
[CONTEXT]: 48-hour hackathon, won 2nd place
[RESULTS]: 200+ downloads during pilot, reduced cafeteria waste by 34% in test week`,
    exampleOutput: `## CampusPlate — Turning campus food waste into affordable meals

**The Problem:** UK universities waste an estimated 26,000 tonnes of food annually. Meanwhile, 1 in 4 students skip meals due to cost. CampusPlate connects these two problems: cafeterias list surplus meals at 70% off, students grab affordable food, and nothing goes to the bin.

**My Role:** Full-stack developer in a team of 3 during a 48-hour hackathon. I built the real-time inventory API and payment integration.

**The Hard Part:** Cafeteria staff needed to list items in under 15 seconds or they wouldn't use it. I built a one-tap listing system using pre-configured meal templates — staff just selected the item, adjusted quantity, and hit publish. Average listing time: 8 seconds...`,
    proTips: [
      "Lead with impact, not technology — 'reduced food waste by 34%' beats 'built a React Native app'",
      "Include screenshots or a demo video link — visual proof is 10x more convincing",
      "Show your decision-making process, not just the outcome — interviewers want to see how you think",
      "If it was a team project, be specific about YOUR contribution",
    ],
    relatedPromptIds: ["1", "3", "30"],
  },
  {
    id: "9",
    slug: "salary-negotiation-script",
    title: "Salary Negotiation Script for New Graduates",
    description: "Prepare confident, data-backed salary negotiation scripts for your first professional role after completing your master's degree.",
    prompt: `Act as a salary negotiation coach who has helped 500+ early-career professionals negotiate their compensation.

Prepare a negotiation strategy for:

**Offer Details:**
- Role: [ROLE]
- Company: [COMPANY]
- Offered salary: [SALARY]
- Other benefits: [BENEFITS]
- Location: [LOCATION]
- Market rate for this role: [MARKET_RATE] (or say "unknown")

**My Leverage:**
- Competing offers: [OTHER_OFFERS]
- Unique qualifications: [QUALIFICATIONS]
- Start date flexibility: [FLEXIBILITY]

**Provide:**

## 1. MARKET RESEARCH FRAMEWORK
- How to find accurate salary data for [ROLE] in [LOCATION]
- Sites and sources to reference
- How to adjust for company size, industry, and experience level

## 2. NEGOTIATION SCRIPT
- Exact words to say when receiving the offer
- How to express enthusiasm while opening negotiation
- 3 responses to common pushback phrases
- How to negotiate non-salary benefits if salary is fixed

## 3. EMAIL TEMPLATE
- Written counter-offer email (professional, confident)
- How to present your case with data

## 4. WHAT TO NEGOTIATE BEYOND SALARY
- Signing bonus, equity, relocation
- Remote work flexibility
- Professional development budget
- Start date, holiday days
- Title adjustments

## 5. RED LINES & WALK-AWAY STRATEGY
- How to determine your minimum acceptable offer
- How to decline gracefully if they can't meet your needs
- Timeline and decision framework`,
    platforms: ["chatgpt", "claude"],
    category: "career",
    subcategory: "Negotiation",
    tags: ["salary", "negotiation", "compensation", "job-offer"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[ROLE]: Graduate Software Engineer
[COMPANY]: Large fintech startup (Series C)
[SALARY]: £38,000
[LOCATION]: London
[MARKET_RATE]: Unknown
[QUALIFICATIONS]: MSc CS + one relevant internship`,
    exampleOutput: `## NEGOTIATION SCRIPT

**When they make the offer (phone call):**
"Thank you so much — I'm genuinely excited about this role and the team. I'd like to take a day to review the full package carefully. Could you send the details in writing?"

*(Never negotiate on the spot. Buying time is always the right move.)*

**When you counter (email, 24-48 hours later):**

"Hi [Name],

Thank you again for the offer to join [Company] as a Graduate Software Engineer. I'm very enthusiastic about the role, particularly the opportunity to work on [specific project/team].

After researching market data for graduate software engineering roles in London fintech (Glassdoor, Levels.fyi, and the Hired State of Salaries report), the typical range is £40,000–£48,000 for candidates with a master's degree and internship experience.

Given my MSc specialisation in [area] and my internship experience at [company], I'd like to discuss a base salary of £44,000. I'm also open to discussing how this could be structured with a signing bonus or performance review timeline..."`,
    proTips: [
      "Never give a number first — always ask 'What's the budget range for this role?'",
      "Frame everything as collaborative, not adversarial: 'I'd like to find something that works for both of us'",
      "Research on Glassdoor, Levels.fyi, and LinkedIn Salary Insights before any negotiation",
      "If they say the salary is fixed, negotiate benefits: remote days, training budget, equipment, early review",
    ],
    relatedPromptIds: ["6", "22", "7"],
  },
  {
    id: "10",
    slug: "job-application-tracker-system",
    title: "Job Application Tracking System Design",
    description: "Create a structured job application tracking system to organise your job search, follow up on time, and maintain momentum during the hunt.",
    prompt: `Act as a career coach and productivity expert. Design a job application tracking system for a master's student entering the job market.

**My Situation:**
- Target roles: [TARGET_ROLES]
- Target companies (if any): [COMPANIES]
- Applications per week goal: [WEEKLY_GOAL]
- Timeline: [TIMELINE]

**Create a comprehensive tracking system with:**

## 1. SPREADSHEET/NOTION TEMPLATE
- Columns: Company, Role, Date Applied, Source, Status, Contact, Next Action, Deadline, Notes, Salary Range
- Status stages: Researching → Applied → Phone Screen → Interview 1 → Interview 2 → Offer → Accepted/Rejected
- Colour-coding system

## 2. WEEKLY WORKFLOW
- Monday: Research and identify 10 target roles
- Tuesday-Thursday: Customise CV + cover letter, apply
- Friday: Follow up on pending applications
- Weekend: Network, update LinkedIn, skill-building

## 3. FOLLOW-UP TEMPLATES
- After applying (1 week, no response)
- After interview (thank you + follow up)
- After rejection (graceful, keeping the door open)
- Reconnecting with a contact

## 4. METRICS TO TRACK
- Application-to-interview conversion rate
- Response rate by application method (direct vs. portal vs. referral)
- Average time to hear back
- Weekly activity targets

## 5. MENTAL HEALTH SAFEGUARDS
- How to handle rejection without spiralling
- When to take a break from applications
- Signs you need to adjust your strategy
- Accountability buddy system`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Job Search",
    tags: ["job-search", "organisation", "tracking", "productivity"],
    complexity: "beginner",
    popularity: 3,
    exampleInput: `[TARGET_ROLES]: UX Designer, Product Designer
[WEEKLY_GOAL]: 8 tailored applications
[TIMELINE]: 3 months before graduation`,
    exampleOutput: `## TRACKING TEMPLATE

| Company | Role | Applied | Source | Status | Contact | Next Action | Deadline |
|---------|------|---------|--------|--------|---------|-------------|----------|
| Monzo | Junior UX Designer | 14 Mar | LinkedIn | 📞 Phone Screen | Sarah L. (Recruiter) | Prep case study | 18 Mar |
| Deliveroo | Product Designer | 12 Mar | Careers page | ✅ Applied | — | Follow up | 19 Mar |
| Figma | UX Researcher | — | Referral (Tom) | 🔍 Researching | Tom A. (eng) | Ask for referral | 15 Mar |

## FOLLOW-UP EMAIL (1 week, no response)

Subject: Following up — [Role] application

Hi [Name],

I applied for the [Role] position last week and wanted to reiterate my enthusiasm. My background in [relevant skill] and [specific project] aligns closely with the role's requirements.

Is there any additional information I can provide to support my application?

Best regards,
[Name]...`,
    proTips: [
      "Referrals get interviews 10x more often than cold applications — prioritise networking",
      "Track your conversion rate: if you're applying to 50+ roles with 0 interviews, your CV needs work",
      "Quality over quantity: 5 tailored applications beat 20 generic ones every time",
      "Set a 'no applications' day each week to prevent burnout",
    ],
    relatedPromptIds: ["1", "2", "5"],
  },

  // ═══════════════════════════════════════════════════════════════
  // ACADEMIC WRITING (8 prompts)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "11",
    slug: "thesis-introduction-writer",
    title: "Thesis Introduction Chapter Framework",
    description: "Structure and draft the introduction chapter of your master's thesis with proper academic flow, research questions, and scope definition.",
    prompt: `Act as an academic writing mentor with expertise in supervising master's dissertations.

Help me draft the introduction chapter for my thesis:

**Thesis Details:**
- Title: [THESIS_TITLE]
- Field/discipline: [FIELD]
- Research question(s): [RESEARCH_QUESTIONS]
- Methodology: [METHODOLOGY]
- Key theories/frameworks: [THEORIES]
- Gap in literature: [GAP]
- Significance: [SIGNIFICANCE]

**Structure the introduction as:**

## 1. OPENING HOOK (1-2 paragraphs)
- Contextualise the broader topic
- Why this matters in the real world
- Engaging opening that draws the reader in

## 2. BACKGROUND & CONTEXT (2-3 paragraphs)
- Establish the academic landscape
- Key developments that led to your research
- Define essential terms

## 3. PROBLEM STATEMENT (1-2 paragraphs)
- Clear articulation of the gap or problem
- Why existing research is insufficient
- What remains unknown or unresolved

## 4. RESEARCH AIM & OBJECTIVES
- Overall aim (one sentence)
- 3-5 specific objectives
- Research questions (clearly numbered)

## 5. SCOPE & LIMITATIONS
- What the thesis covers and what it doesn't
- Geographical/temporal boundaries
- Methodological boundaries

## 6. SIGNIFICANCE & CONTRIBUTION
- Theoretical contribution
- Practical implications
- Who benefits from this research

## 7. THESIS STRUCTURE
- Brief overview of each chapter (2-3 sentences each)
- How chapters connect logically

**Tone:** Academic but clear. Avoid unnecessarily complex language.
**Citation style:** [STYLE — APA, Harvard, MLA, etc.]
**Target length:** [WORD_COUNT]`,
    platforms: ["claude", "chatgpt", "gemini"],
    category: "academic-writing",
    subcategory: "Thesis",
    tags: ["thesis", "introduction", "academic-writing", "dissertation"],
    complexity: "advanced",
    popularity: 5,
    exampleInput: `[THESIS_TITLE]: "The Impact of Remote Work on Employee Well-being in the UK Tech Sector: A Mixed-Methods Study"
[FIELD]: Organisational Psychology
[RESEARCH_QUESTIONS]: 1. How does remote work frequency relate to self-reported well-being? 2. What organisational factors moderate this relationship?
[GAP]: Most studies examine remote work productivity but not psychological well-being, and few focus on the UK context post-pandemic`,
    exampleOutput: `## 1. OPENING

The global shift to remote work triggered by the COVID-19 pandemic has been described as "the largest work-from-home experiment in history" (Bloom, 2020). While initial research focused primarily on productivity outcomes — with Stanford's landmark study reporting a 13% performance increase (Bloom et al., 2015) — a more nuanced question has emerged: what is the psychological cost of this transformation?

In the United Kingdom, where 44% of workers reported working remotely at least part-time in 2023 (ONS, 2023), the technology sector has been at the forefront of flexible work adoption. Yet the impact of sustained remote work on employee well-being remains poorly understood, particularly as the initial novelty has given way to established practice...

## 3. PROBLEM STATEMENT

Despite a growing body of literature on remote work, significant gaps persist. First, the majority of studies examine productivity as the primary outcome variable, treating well-being as a secondary consideration or confounding factor (Bailey & Kurland, 2022). Second, research has disproportionately focused on the American context...`,
    proTips: [
      "Write the introduction last (or rewrite it after finishing other chapters) — you'll understand your contribution better",
      "Your research questions should be answerable — avoid 'why' questions unless you have qualitative data",
      "Use the AI output as a structural skeleton, then add your own voice and citations",
      "Ask your supervisor what introduction style they prefer — some fields favour short intros, others expect comprehensive ones",
    ],
    relatedPromptIds: ["12", "13", "17"],
  },
  {
    id: "12",
    slug: "literature-review-synthesizer",
    title: "Literature Review Synthesizer & Organiser",
    description: "Synthesise research findings into a structured literature review with thematic organisation, critical analysis, and identified research gaps.",
    prompt: `Act as an academic research assistant specialising in systematic literature reviews.

I'm writing a literature review for my [THESIS/PAPER] on [TOPIC].

**Sources to synthesise:**
[PASTE_SOURCES — titles, authors, key findings, or abstracts]

**Review Parameters:**
- Field: [FIELD]
- Scope: [SCOPE — last 5 years, specific journals, etc.]
- Structure preference: [THEMATIC/CHRONOLOGICAL/METHODOLOGICAL]
- Target length: [WORD_COUNT]
- Citation style: [STYLE]

**Organise the review as:**

## 1. THEMATIC MAPPING
- Identify 3-5 major themes across the literature
- Sub-themes within each
- Key debates and tensions

## 2. FOR EACH THEME:
### Theme Name
- What the literature says (synthesis, not summary)
- Points of agreement across studies
- Contradictions and debates
- Methodological approaches used
- Strength of evidence
- Critical analysis (limitations, biases)

## 3. THEORETICAL FRAMEWORK
- Dominant theories in this area
- How theories have evolved
- Which framework your research aligns with and why

## 4. RESEARCH GAPS
- What hasn't been studied
- Which populations/contexts are missing
- Methodological gaps
- How YOUR research addresses these gaps

## 5. SUMMARY TABLE
| Author(s) | Year | Method | Sample | Key Findings | Limitations |

## 6. TRANSITIONAL STATEMENT
- How the literature review leads into your methodology chapter

**Critical rules:**
- Synthesise, don't summarise (compare across sources, don't describe one at a time)
- Use academic hedging language ("suggests," "indicates," "appears to")
- Every paragraph should compare or contrast at least 2 sources
- Flag where evidence is strong vs. weak`,
    platforms: ["claude", "chatgpt", "perplexity"],
    category: "academic-writing",
    subcategory: "Literature Review",
    tags: ["literature-review", "synthesis", "academic", "research"],
    complexity: "advanced",
    popularity: 5,
    exampleInput: `[TOPIC]: "Gamification in higher education"
[FIELD]: Education Technology
[STRUCTURE]: Thematic
[SCOPE]: 2019-2024 peer-reviewed journals`,
    exampleOutput: `## THEME 1: MOTIVATION AND ENGAGEMENT OUTCOMES

The relationship between gamification and student motivation emerges as the most extensively studied theme, though findings remain inconsistent. Deterding et al. (2020) and Hamari et al. (2021) both report significant increases in intrinsic motivation when gamification elements include autonomy-supporting features such as choice of learning paths and self-paced progression. However, Hanus and Fox (2019) found that certain gamification mechanics — particularly leaderboards and competitive point systems — actually *decreased* intrinsic motivation over a 16-week semester, suggesting that the type of game element matters more than its mere presence.

This tension aligns with Self-Determination Theory (Ryan & Deci, 2000), which predicts that extrinsic rewards can undermine intrinsic motivation when they feel controlling. Notably, studies reporting positive outcomes (Deterding et al., 2020; Sailer et al., 2022) tend to employ collaborative rather than competitive mechanics...`,
    proTips: [
      "Never summarise one paper at a time — every paragraph should synthesise across at least 2-3 sources",
      "Use Perplexity to find additional sources on specific sub-themes you've identified",
      "Create a synthesis matrix (theme × source) before writing — it makes the structure obvious",
      "Your supervisor wants to see critical thinking: 'X found Y, but this is limited because Z'",
    ],
    relatedPromptIds: ["11", "17", "18"],
  },
  {
    id: "13",
    slug: "methodology-section-writer",
    title: "Research Methodology Section Writer",
    description: "Draft a rigorous methodology section that justifies your research design, methods, and analytical approach with proper academic framing.",
    prompt: `Act as a research methods expert. Help me write the methodology section for my master's thesis.

**Research Details:**
- Research questions: [QUESTIONS]
- Paradigm: [POSITIVIST/INTERPRETIVIST/PRAGMATIST/CRITICAL]
- Approach: [QUALITATIVE/QUANTITATIVE/MIXED-METHODS]
- Method: [METHOD — survey, interviews, experiment, case study, etc.]
- Sample: [SAMPLE — size, characteristics, selection criteria]
- Data collection: [TOOLS — questionnaire, interview guide, etc.]
- Analysis method: [ANALYSIS — thematic, statistical, content, etc.]
- Ethics: [ETHICS_CONSIDERATIONS]

**Structure:**

## 1. RESEARCH PHILOSOPHY & PARADIGM
- Justify your philosophical position
- Connect paradigm to research questions
- Ontological and epistemological assumptions

## 2. RESEARCH DESIGN
- Why this design suits your questions
- Alternatives considered and why rejected
- Design diagram/flowchart description

## 3. SAMPLING STRATEGY
- Population definition
- Sampling method and justification
- Sample size rationale (with citations)
- Inclusion/exclusion criteria
- Recruitment strategy

## 4. DATA COLLECTION
- Instrument design and description
- Pilot testing (if applicable)
- Procedure step-by-step
- Timeline

## 5. DATA ANALYSIS
- Analytical framework
- Step-by-step analysis process
- Software tools used
- How you ensure rigour/validity

## 6. ETHICAL CONSIDERATIONS
- Informed consent process
- Confidentiality and anonymity
- Data storage and protection (GDPR if applicable)
- Ethics approval details

## 7. LIMITATIONS OF THE METHODOLOGY
- Honest assessment of methodological limitations
- How you mitigate them
- Impact on generalisability`,
    platforms: ["claude", "chatgpt"],
    category: "academic-writing",
    subcategory: "Methodology",
    tags: ["methodology", "research-design", "thesis", "academic"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `[QUESTIONS]: How do international students experience academic culture shock in UK universities?
[PARADIGM]: Interpretivist
[APPROACH]: Qualitative
[METHOD]: Semi-structured interviews
[SAMPLE]: 15 international master's students from non-Western backgrounds
[ANALYSIS]: Reflexive thematic analysis (Braun & Clarke, 2019)`,
    exampleOutput: `## RESEARCH PHILOSOPHY

This study adopts an interpretivist philosophical position, grounded in the ontological assumption that reality is socially constructed and experienced subjectively (Creswell & Creswell, 2018). Given that the research aims to understand how international students *experience* and *make meaning of* academic culture shock — an inherently subjective phenomenon — a positivist approach seeking objective, generalisable truths would be epistemologically incongruent with the research questions...

## SAMPLING STRATEGY

Participants were selected using purposive sampling with maximum variation (Patton, 2015) to capture diverse experiences across nationalities, disciplines, and prior educational systems. The target sample of 15 participants aligns with recommendations for reflexive thematic analysis, where Braun and Clarke (2021) suggest that "quality and richness of data per participant" matters more than sample size, with 12-20 participants typically achieving "information power" (Malterud et al., 2016)...`,
    proTips: [
      "Justify every choice — 'I chose interviews because...' not just 'I used interviews'",
      "Cite methodology textbooks (Creswell, Bryman, Saunders) to support your design decisions",
      "Your supervisor will check if paradigm, approach, and method are internally consistent",
      "Write this chapter early — it guides your entire data collection process",
    ],
    relatedPromptIds: ["11", "12", "18"],
  },
  {
    id: "14",
    slug: "academic-email-to-supervisor",
    title: "Academic Email to Supervisor / Professor",
    description: "Write clear, professional emails to your thesis supervisor, professors, or academic contacts for various situations.",
    prompt: `Act as an academic communication coach. Write a professional email to my supervisor/professor.

**Situation:**
- Recipient: [NAME_AND_ROLE]
- Relationship: [RELATIONSHIP — thesis supervisor, course professor, potential supervisor, external examiner]
- Purpose: [PURPOSE — see options below]
- Context: [CONTEXT]
- Urgency: [URGENCY]

**Purpose options:**
- Requesting a meeting
- Sharing thesis progress update
- Asking for feedback on a draft
- Requesting a deadline extension
- Asking for a reference/recommendation letter
- Following up on unanswered email
- Introducing yourself to a potential supervisor
- Asking about research opportunities

**The email should:**
1. Appropriate greeting for the relationship level
2. Clear purpose in the first sentence
3. Relevant context (brief, not life story)
4. Specific ask (not vague)
5. Proposed solutions or options (don't just present problems)
6. Professional closing

**Rules:**
- Under 150 words for simple requests, under 250 for complex ones
- Match formality to the relationship (first email = formal, established relationship = warmer)
- Never be apologetic about reasonable requests
- Always suggest times/options to make it easy for them to respond

Provide 2 versions: formal and semi-formal.`,
    platforms: ["chatgpt", "claude"],
    category: "academic-writing",
    subcategory: "Communication",
    tags: ["email", "supervisor", "academic", "communication"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[RECIPIENT]: Dr. Sarah Chen, thesis supervisor
[PURPOSE]: Requesting a deadline extension for my draft chapter
[CONTEXT]: Struggling with data analysis, need 1 more week
[RELATIONSHIP]: Established (meeting bi-weekly for 3 months)`,
    exampleOutput: `## SEMI-FORMAL VERSION

Subject: Chapter 3 draft — request for 1-week extension

Hi Dr. Chen,

I hope you're well. I wanted to flag that I'm running behind on the Chapter 3 draft (due this Friday). The thematic analysis is taking longer than expected — I've identified 6 themes but I'm still working through the second round of coding to refine them.

I'd like to request an extension to next Friday (22 March). This would give me time to complete the analysis properly and submit a draft I'm confident in, rather than rushing something incomplete.

I've adjusted my timeline for the remaining chapters to ensure this doesn't create a knock-on delay — I can share the updated schedule in our next meeting.

Would that work for you?

Best,
[Name]

---
*Note: She'll appreciate that you (a) flagged it early, (b) have a plan, and (c) asked rather than just missed the deadline.*`,
    proTips: [
      "Flag problems early — supervisors hate surprises at the deadline",
      "Always propose a solution alongside the problem",
      "For recommendation letters: give at least 3-4 weeks notice and provide your CV + the opportunity details",
      "If they don't respond within a week, one polite follow-up is fine — forward the original with 'just checking this didn't get buried'",
    ],
    relatedPromptIds: ["5", "15"],
  },
  {
    id: "15",
    slug: "research-paper-abstract-generator",
    title: "Research Paper Abstract Generator",
    description: "Write concise, structured abstracts for journal submissions, conference papers, or thesis chapters that follow academic conventions.",
    prompt: `Act as an academic editor specialising in research paper submissions.

Write an abstract for my paper/thesis:

**Paper Details:**
- Title: [TITLE]
- Field: [FIELD]
- Type: [JOURNAL_PAPER/CONFERENCE/THESIS]
- Target journal/conference: [TARGET]
- Word limit: [LIMIT — typically 150-300 words]

**Content to summarise:**
- Background/context: [BACKGROUND]
- Research gap: [GAP]
- Aim/objective: [AIM]
- Method: [METHOD]
- Key findings: [FINDINGS]
- Implications: [IMPLICATIONS]
- Keywords: [KEYWORDS]

**Structure (IMRaD for empirical; structured differently for theoretical):**

## STRUCTURED ABSTRACT
1. **Background** (1-2 sentences): Context and importance
2. **Aim** (1 sentence): What this study investigates
3. **Method** (2-3 sentences): Design, sample, analysis
4. **Results** (2-3 sentences): Key findings with data
5. **Conclusion** (1-2 sentences): Implications and contribution

## ALSO PROVIDE:
- 5-7 keywords (ordered by relevance)
- Suggested running title (under 50 characters)
- One-sentence "tweet" summary for social media

**Rules:**
- No citations in the abstract
- No acronyms without definition
- Use past tense for methods and results
- Use present tense for conclusions
- Avoid vague claims — include specific numbers/findings`,
    platforms: ["claude", "chatgpt"],
    category: "academic-writing",
    subcategory: "Papers",
    tags: ["abstract", "paper", "journal", "academic-writing"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[TITLE]: "Predicting Student Dropout Using Ensemble Learning: A Longitudinal Study"
[FIELD]: Education Data Science
[FINDINGS]: XGBoost model achieved 89% accuracy, early engagement metrics were strongest predictors
[WORD_LIMIT]: 250`,
    exampleOutput: `**Abstract**

Student dropout remains a persistent challenge in higher education, with UK universities reporting an average non-completion rate of 6.3% (HESA, 2023). Early identification of at-risk students enables timely intervention, yet existing predictive models predominantly rely on demographic data, overlooking behavioural indicators. This study developed and evaluated an ensemble learning approach to predict student dropout using longitudinal engagement data from a UK university (N = 12,847 students, 2018–2023). Four models were compared: logistic regression, random forest, gradient boosting, and XGBoost. Results indicated that XGBoost achieved the highest predictive accuracy (89.2%, AUC = 0.94), outperforming logistic regression by 14 percentage points. Crucially, early engagement metrics — specifically VLE login frequency in weeks 2–4 and assignment submission timing — emerged as the strongest predictors (feature importance: 0.31 and 0.24 respectively), surpassing traditional demographic variables. These findings suggest that institutions can identify at-risk students within the first month of enrolment, enabling targeted support before disengagement becomes entrenched. The model has been deployed as a pilot dashboard for personal tutors at the participating institution.

**Keywords:** student dropout, ensemble learning, XGBoost, learning analytics, early warning systems, higher education, predictive modelling

**Running title:** Predicting Dropout with Ensemble Learning

**Tweet:** Our XGBoost model predicts student dropout with 89% accuracy — and the strongest signal comes from the first 4 weeks of engagement, not demographics. 📊`,
    proTips: [
      "Write the abstract LAST — after you know your actual results",
      "Match the structure to your target journal's requirements (some require structured, others allow unstructured)",
      "Include at least one specific number in your results sentence — vague results feel unconvincing",
      "Read 5 abstracts from your target journal to match their style and tone",
    ],
    relatedPromptIds: ["11", "12", "16"],
  },
  {
    id: "16",
    slug: "thesis-defense-preparation",
    title: "Thesis Defence / Viva Preparation",
    description: "Prepare for your thesis defence or viva voce with anticipated questions, structured answers, and strategies for handling tough challenges.",
    prompt: `Act as a thesis examiner and academic coach. Help me prepare for my viva/thesis defence.

**Thesis Details:**
- Title: [TITLE]
- Field: [FIELD]
- Methodology: [METHODOLOGY]
- Key findings: [FINDINGS]
- Main theoretical framework: [THEORY]
- Known weaknesses: [WEAKNESSES]

**Provide:**

## 1. LIKELY QUESTIONS (20 questions, categorised)

### Opening Questions
- "Can you summarise your thesis in 3 minutes?"
- "What is the original contribution of your work?"

### Theoretical Questions
- Questions about your framework choice
- Alternative theories they might suggest

### Methodological Questions
- Justification for method choice
- Sample size and generalisability challenges
- Validity and reliability concerns

### Findings Questions
- Questions about unexpected results
- How findings relate to existing literature
- Alternative interpretations

### Critical Questions
- "What would you do differently?"
- "What are the main limitations?"
- "Why should we care about this research?"

## 2. MODEL ANSWERS
- For each question, provide a structured answer framework
- Use the "Acknowledge → Address → Advance" format

## 3. DEFENCE STRATEGIES
- How to handle questions you don't know the answer to
- How to handle hostile or aggressive questioning
- Body language and presentation tips
- Common mistakes to avoid

## 4. OPENING PRESENTATION
- Structure for a 10-15 minute thesis summary
- What to include and what to skip
- Slide suggestions`,
    platforms: ["claude", "chatgpt"],
    category: "academic-writing",
    subcategory: "Thesis Defence",
    tags: ["viva", "thesis-defence", "presentation", "academic"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `[TITLE]: "Social Media's Role in Political Polarisation Among UK Young Adults"
[FIELD]: Political Communication
[METHODOLOGY]: Mixed methods (survey + focus groups)
[WEAKNESSES]: Small focus group sample, self-reported social media use`,
    exampleOutput: `## CRITICAL QUESTIONS

**Q: "Your focus groups had only 18 participants. How can you claim these findings are meaningful?"**

**Model Answer (Acknowledge → Address → Advance):**

*Acknowledge:* "That's an important methodological consideration. You're right that 18 participants limits the generalisability of the qualitative findings in isolation."

*Address:* "However, the focus groups were designed to complement and deepen the survey data from 847 respondents — not to stand alone. Following Creswell's (2018) sequential explanatory design, the qualitative phase aimed to explore the *mechanisms* behind the statistical patterns, not to establish prevalence. The focus groups achieved thematic saturation by participant 14, with the final two groups producing no new themes."

*Advance:* "That said, if I were to extend this research, I would increase the focus group sample and consider including participants from outside university settings to capture a broader range of political engagement..."`,
    proTips: [
      "Practise your 3-minute thesis summary until it's effortless — it's almost always the first question",
      "Know your weaknesses better than the examiners — if you can articulate limitations honestly, they trust you more",
      "It's OK to say 'I don't know, but here's how I'd investigate that' — it shows research maturity",
      "Do at least 2 mock vivas with your supervisor and a peer before the real thing",
    ],
    relatedPromptIds: ["11", "13", "38"],
  },
  {
    id: "17",
    slug: "research-question-refiner",
    title: "Research Question Refiner & Evaluator",
    description: "Refine vague research ideas into focused, researchable questions with proper scope, feasibility assessment, and alignment to methodology.",
    prompt: `Act as a research methodology advisor. Help me refine my research question.

**My Initial Idea:**
- Broad topic: [TOPIC]
- What interests me about it: [INTEREST]
- My discipline: [DISCIPLINE]
- Degree level: [MASTERS/PHD]
- Available time: [TIME]
- Access to data/participants: [ACCESS]

**Please:**

## 1. EVALUATE MY INITIAL IDEA
- Is it too broad, too narrow, or just right?
- Is it researchable within my constraints?
- Is it original enough for [DEGREE] level?

## 2. GENERATE 5 REFINED RESEARCH QUESTIONS
For each question:
- The question itself
- Type (descriptive, exploratory, explanatory, evaluative)
- Implied methodology
- Feasibility rating (1-5) given my constraints
- Originality rating (1-5)
- Why it works

## 3. QUESTION QUALITY CHECKLIST
Test each question against:
- [ ] Focused (not trying to do too much)
- [ ] Researchable (can be answered with available methods)
- [ ] Original (contributes something new)
- [ ] Relevant (matters to the field)
- [ ] Feasible (achievable in the timeframe)
- [ ] Ethical (no harm to participants)

## 4. RECOMMENDED QUESTION + RATIONALE
- Which question I should pursue and why
- Suggested sub-questions
- Potential pitfalls to watch for`,
    platforms: ["claude", "chatgpt", "gemini"],
    category: "research",
    subcategory: "Research Design",
    tags: ["research-question", "thesis", "methodology", "planning"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `[TOPIC]: "AI in education"
[INTEREST]: How students feel about AI-generated feedback
[DISCIPLINE]: Education Technology
[TIME]: 6 months
[ACCESS]: Can survey students at my university`,
    exampleOutput: `## EVALUATION

Your initial topic "AI in education" is **far too broad** for a master's thesis. However, your specific interest — student perceptions of AI-generated feedback — is a strong starting point. Let's narrow it further.

## REFINED RESEARCH QUESTIONS

**RQ1:** "How do undergraduate students perceive the credibility and usefulness of AI-generated feedback compared to human tutor feedback on written assignments?" 
- Type: Comparative/evaluative
- Method: Experimental (blind comparison) + survey
- Feasibility: ⭐⭐⭐⭐ (4/5) — requires ethical approval for experiment
- Originality: ⭐⭐⭐⭐ (4/5) — most studies examine tutor perceptions, not student perceptions

**RQ2:** "What factors influence master's students' willingness to act on AI-generated formative feedback?"
- Type: Exploratory
- Method: Mixed methods (survey + interviews)
- Feasibility: ⭐⭐⭐⭐⭐ (5/5) — straightforward access
- Originality: ⭐⭐⭐⭐⭐ (5/5) — 'willingness to act' is understudied...`,
    proTips: [
      "A good research question should make you slightly nervous — too comfortable means it's been done",
      "Check your question against 5 recent papers in the field: does it ask something they haven't answered?",
      "Ask your supervisor early — nothing wastes more time than refining a question they'll redirect",
      "Your question will evolve during your research — that's normal and expected",
    ],
    relatedPromptIds: ["11", "18", "12"],
  },
  {
    id: "18",
    slug: "research-gap-identifier",
    title: "Research Gap Identifier",
    description: "Systematically identify gaps in existing research literature that could form the basis of your thesis or research paper.",
    prompt: `Act as a senior researcher who specialises in identifying promising research gaps.

**My Area:**
- Field: [FIELD]
- Specific topic: [TOPIC]
- Key papers I've read: [PAPERS]
- Current understanding: [UNDERSTANDING]

**Help me identify research gaps by:**

## 1. LITERATURE LANDSCAPE MAP
- What has been extensively studied (saturated areas)
- What has been moderately studied (opportunities to deepen)
- What is emerging (cutting-edge, few papers)
- What is virtually unstudied (white spaces)

## 2. GAP TYPES TO LOOK FOR
- **Population gaps:** Which groups haven't been studied?
- **Context gaps:** Which settings, industries, or countries are missing?
- **Methodology gaps:** What methods haven't been applied to this question?
- **Temporal gaps:** Has the phenomenon changed since the last major study?
- **Theoretical gaps:** Which frameworks haven't been applied?
- **Contradictory findings:** Where do studies disagree? Why?

## 3. TOP 5 PROMISING GAPS
For each gap:
- Description of the gap
- Why it matters
- Feasibility for a master's student
- Suggested research question
- Potential contribution to the field

## 4. VALIDATION STRATEGY
- How to confirm the gap is real (not just my limited reading)
- Search strings to use in databases
- Key journals to check
- Researchers to follow`,
    platforms: ["perplexity", "claude", "gemini"],
    category: "research",
    subcategory: "Literature Analysis",
    tags: ["research-gap", "literature", "thesis", "analysis"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[FIELD]: Environmental Psychology
[TOPIC]: Pro-environmental behaviour among young adults
[PAPERS]: Steg & Vlek (2009), Kollmuss & Agyeman (2002), recent TPB applications
[UNDERSTANDING]: Most studies use Theory of Planned Behaviour, focus on Western populations`,
    exampleOutput: `## LITERATURE LANDSCAPE MAP

### 🟢 Saturated Areas (well-studied, diminishing returns)
- TPB applications to recycling behaviour in Western contexts
- Attitude-behaviour gap explanations
- Knowledge → behaviour pathways

### 🟡 Moderate Coverage (room to deepen)
- Social identity and pro-environmental behaviour
- Digital nudges for sustainability
- Role of emotions (guilt, pride, eco-anxiety) in environmental action

### 🔴 Emerging / Under-studied
- **Pro-environmental behaviour in non-Western developing countries** — most literature is WEIRD-biased
- **Social media's role in shaping environmental identities** among Gen Z
- **Eco-anxiety as a motivator vs. paralysing force** — the evidence is contradictory
- **Intersectionality in environmental behaviour** — how race, class, and gender interact...`,
    proTips: [
      "Use Perplexity to search for recent systematic reviews in your area — they literally list gaps in their conclusions",
      "A real gap isn't just 'nobody has studied X' — it's 'studying X would meaningfully advance our understanding because...'",
      "Check the 'future research' sections of the 10 most-cited papers in your area — they'll point you to gaps",
      "Validate with your supervisor before committing — they know what's been submitted recently but not yet published",
    ],
    relatedPromptIds: ["12", "17", "19"],
  },

  // ═══════════════════════════════════════════════════════════════
  // RESEARCH (4 prompts)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "19",
    slug: "research-proposal-writer",
    title: "Research Proposal Writer",
    description: "Draft a compelling research proposal for thesis approval, grant applications, or PhD programme admissions.",
    prompt: `Act as a research supervisor who has reviewed hundreds of proposals. Help me write a strong research proposal.

**Proposal Details:**
- Purpose: [PURPOSE — thesis approval, PhD application, grant, conference]
- Title: [TITLE]
- Field: [FIELD]
- Word limit: [LIMIT]

**My Research Idea:**
- Topic: [TOPIC]
- Research questions: [QUESTIONS]
- Proposed methodology: [METHOD]
- Expected contribution: [CONTRIBUTION]
- Timeline: [TIMELINE]

**Structure:**

## 1. TITLE & ABSTRACT
- Working title (clear, specific, under 20 words)
- 200-word abstract summarising the proposal

## 2. INTRODUCTION & RATIONALE
- Why this research matters NOW
- Real-world significance
- Academic significance

## 3. LITERATURE REVIEW (brief)
- Key studies and their findings
- The gap your research fills
- Theoretical framework

## 4. RESEARCH QUESTIONS & OBJECTIVES
- 1 primary question, 2-3 sub-questions
- Specific, measurable objectives

## 5. METHODOLOGY
- Research design and justification
- Data collection plan
- Analysis approach
- Ethical considerations

## 6. TIMELINE & MILESTONES
- Gantt chart description
- Key deliverables at each stage

## 7. EXPECTED OUTCOMES & IMPACT
- What you expect to find
- Theoretical contribution
- Practical implications

## 8. BUDGET (if applicable)
- Itemised costs with justification`,
    platforms: ["claude", "chatgpt"],
    category: "research",
    subcategory: "Proposals",
    tags: ["proposal", "thesis", "grant", "research-planning"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `[PURPOSE]: PhD application
[TOPIC]: Using NLP to detect early signs of depression in student social media posts
[FIELD]: Computational Linguistics / Digital Health
[QUESTIONS]: Can transformer-based models identify linguistic markers of depression onset in anonymised student forum data?`,
    exampleOutput: `## TITLE
"Early Detection of Depressive Language Patterns in University Student Online Forums: A Transformer-Based Approach"

## ABSTRACT
Depression affects 1 in 4 university students globally, yet most cases remain undiagnosed until crisis point. This research proposes developing a transformer-based NLP system to identify early linguistic markers of depression in anonymised student forum data. Building on recent advances in mental health NLP (Coppersmith et al., 2018; Losada et al., 2020), the study will fine-tune a BERT model on a corpus of 50,000+ anonymised forum posts from a UK university, annotated for temporal proximity to student wellbeing service referrals. The research addresses a critical gap: existing models focus on social media (Twitter/Reddit) and use binary classification, whereas this study targets university-specific discourse and models depression as a trajectory rather than a state...`,
    proTips: [
      "For PhD applications, show you understand the research landscape but have your own direction",
      "Name specific supervisors you want to work with and explain why your interests align",
      "Be honest about limitations — reviewers trust applicants who can think critically about their own ideas",
      "Include a realistic timeline — overambitious plans signal inexperience",
    ],
    relatedPromptIds: ["17", "18", "11"],
  },
  {
    id: "20",
    slug: "survey-questionnaire-designer",
    title: "Survey & Questionnaire Designer",
    description: "Design rigorous academic surveys with validated question formats, proper scaling, and bias-minimising structure for your research.",
    prompt: `Act as a survey methodology expert. Design a research questionnaire for my study.

**Research Context:**
- Research question: [QUESTION]
- Target population: [POPULATION]
- Sample size target: [SAMPLE_SIZE]
- Distribution method: [METHOD — online, paper, in-person]
- Estimated completion time: [TIME]

**Design a questionnaire with:**

## 1. INTRODUCTION TEXT
- Informed consent information
- Estimated time to complete
- Data protection statement
- Incentive details (if applicable)

## 2. SCREENING QUESTIONS
- Eligibility criteria questions
- Demographics needed for analysis

## 3. MAIN QUESTIONS (organised by theme)
For each question:
- Question text (clear, unbiased)
- Response format (Likert, multiple choice, open-ended, ranking)
- Scale details (if Likert: anchors and number of points)
- Whether it's adapted from a validated instrument (cite source)
- Skip logic (if applicable)

## 4. QUESTION QUALITY CHECKLIST
For each question, verify:
- [ ] No double-barrelled questions
- [ ] No leading questions
- [ ] No jargon or ambiguous terms
- [ ] Appropriate response options (including "prefer not to say")
- [ ] No acquiescence bias in scaling

## 5. SURVEY FLOW
- Logical ordering of sections
- Attention check questions placement
- Sensitive questions near the end
- Closing / thank you message

## 6. PILOT TESTING PLAN
- How to test the questionnaire
- What to look for in pilot results`,
    platforms: ["chatgpt", "claude"],
    category: "research",
    subcategory: "Data Collection",
    tags: ["survey", "questionnaire", "research-methods", "data-collection"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[QUESTION]: How does perceived employability affect career anxiety among final-year master's students?
[POPULATION]: Final-year master's students in the UK
[SAMPLE_SIZE]: 300
[METHOD]: Online (Qualtrics)`,
    exampleOutput: `## SECTION 2: PERCEIVED EMPLOYABILITY (Adapted from Rothwell & Arnold, 2007)

*"Please indicate how much you agree or disagree with each statement about your employment prospects."*

**Scale:** 5-point Likert (1 = Strongly Disagree → 5 = Strongly Agree)

| # | Item | Source |
|---|------|--------|
| PE1 | "The skills I have gained during my master's are relevant to my target career" | Adapted: Rothwell & Arnold (2007), Item 3 |
| PE2 | "I am confident that I could get a graduate-level job within 6 months of graduating" | New item |
| PE3 | "My university's reputation will help me in the job market" | Adapted: Rothwell & Arnold (2007), Item 7 |
| PE4 | "I have enough work experience to compete with other candidates" | New item |

**Attention check:** "Please select 'Agree' for this question" (placed after Item PE3)

## SECTION 3: CAREER ANXIETY (Adapted from Pisarik et al., 2017)...`,
    proTips: [
      "Always use or adapt validated scales where they exist — don't reinvent the wheel",
      "Include at least 1-2 attention check questions for online surveys",
      "Pilot test with 5-10 people and ask them to think aloud — you'll catch confusing wording",
      "Put demographic questions at the end unless they're needed for skip logic",
    ],
    relatedPromptIds: ["13", "17", "41"],
  },
  {
    id: "21",
    slug: "citation-reference-formatter",
    title: "Citation & Reference List Formatter",
    description: "Format your references correctly in any citation style, catch common errors, and ensure consistency across your thesis or paper.",
    prompt: `Act as an academic editor specialising in citation formatting.

**Task:** [TASK — format references, check existing list, convert between styles]

**Citation style:** [STYLE — APA 7th, Harvard, Chicago, MLA, Vancouver, IEEE]

**References to format:**
[PASTE_REFERENCES — raw notes, messy citations, or unformatted entries]

**Please:**

## 1. FORMATTED REFERENCE LIST
- Each reference in perfect [STYLE] format
- Alphabetical order (or numbered for Vancouver/IEEE)
- Proper italicisation, capitalisation, DOIs, URLs
- Hanging indent notation

## 2. IN-TEXT CITATION FORMAT
- For each reference, show the correct in-text format
- First use vs. subsequent use (if different)
- Multiple authors rules
- Page number format for direct quotes

## 3. COMMON ERRORS CHECK
- Flag any references that seem incomplete
- Missing information (year, publisher, volume, pages)
- Incorrect capitalisation patterns
- URL vs. DOI preference

## 4. SPECIAL CASES
- How to cite: websites, reports, datasets, social media, AI tools
- Secondary citations (citing a source you found in another source)
- Multiple works by the same author in the same year

## 5. QUICK REFERENCE CARD
- The 5 most common citation formats for [STYLE]
- Journal article, book, chapter, website, thesis`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "research",
    subcategory: "Citation",
    tags: ["citation", "references", "APA", "formatting"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[STYLE]: APA 7th Edition
[REFERENCES]:
- bloom 2015 stanford remote work study working from home journal of quarterly economics
- creswell and creswell 2018 research design qualitative quantitative mixed methods approaches sage
- a website from ONS about remote work statistics 2023`,
    exampleOutput: `## FORMATTED REFERENCE LIST

Bloom, N., Liang, J., Roberts, J., & Ying, Z. J. (2015). Does working from home work? Evidence from a Chinese experiment. *The Quarterly Journal of Economics*, *130*(1), 165–218. https://doi.org/10.1093/qje/qju032

Creswell, J. W., & Creswell, J. D. (2018). *Research design: Qualitative, quantitative, and mixed methods approaches* (5th ed.). SAGE Publications.

Office for National Statistics. (2023). *Is hybrid working here to stay?* ONS. https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/articles/ishybridworkingheretostay/2022-05-23

## IN-TEXT CITATIONS

- Bloom et al. (2015) — *first use:* (Bloom et al., 2015) — *Note: 3+ authors = "et al." from first use in APA 7th*
- Creswell and Creswell (2018) — *first use:* (Creswell & Creswell, 2018)
- Office for National Statistics (2023) — *first use:* (Office for National Statistics [ONS], 2023) — *subsequent:* (ONS, 2023)

## ⚠️ FLAGS
- Bloom reference: verified full citation — your notes had "journal of quarterly economics" which is actually "The Quarterly Journal of Economics"...`,
    proTips: [
      "Use Zotero or Mendeley for reference management — manual formatting invites errors",
      "APA 7th changed several rules from 6th edition — make sure you're using the right version",
      "Always verify AI-generated citations against the actual source — AI can hallucinate DOIs",
      "For citing AI tools (ChatGPT, Claude): APA 7th has a specific format — check the APA blog",
    ],
    relatedPromptIds: ["12", "15"],
  },

  // ═══════════════════════════════════════════════════════════════
  // INTERVIEW PREP (5 prompts)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "22",
    slug: "behavioral-interview-star-method",
    title: "Behavioural Interview Answer Builder (STAR)",
    description: "Craft compelling STAR-format answers for behavioural interview questions using your academic and project experiences.",
    prompt: `Act as an interview coach specialising in helping master's graduates nail behavioural interviews.

**The Question:**
"[INTERVIEW_QUESTION]"

**My Experience to Draw From:**
- Situation: [SITUATION — academic project, internship, group work, thesis]
- What happened: [WHAT_HAPPENED]
- What I did: [MY_ACTIONS]
- The result: [OUTCOME]

**Build a STAR-format answer:**

## SITUATION (2-3 sentences)
- Set the scene concisely
- Include enough context but don't over-explain
- Make it specific (when, where, who)

## TASK (1-2 sentences)
- What was your specific responsibility?
- What was at stake?

## ACTION (3-5 sentences)
- What YOU did (not the team — use "I", not "we")
- Show your thought process and decision-making
- Include specific skills you applied
- Show initiative and leadership

## RESULT (2-3 sentences)
- Quantified outcome where possible
- What you learned
- How it applies to the role you're interviewing for

**Also provide:**
- A stronger version that emphasises leadership
- A more concise version (60 seconds)
- Red flags to avoid in this type of question
- Follow-up questions the interviewer might ask`,
    platforms: ["chatgpt", "claude"],
    category: "interview-prep",
    subcategory: "Behavioural",
    tags: ["interview", "STAR", "behavioural", "preparation"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[INTERVIEW_QUESTION]: "Tell me about a time you dealt with a difficult team member"
[SITUATION]: Group thesis project, one member wasn't contributing
[MY_ACTIONS]: Had a private conversation, restructured task allocation
[OUTCOME]: Project got a distinction, team dynamics improved`,
    exampleOutput: `## FULL STAR ANSWER

**Situation:** During my master's programme, I was part of a four-person group project developing a market analysis for a real client — a Birmingham-based fintech startup. Three weeks in, one team member had missed two meetings and hadn't delivered their competitive analysis section.

**Task:** As the informally elected project lead, I needed to address this without creating conflict — we had 5 weeks left and a client presentation deadline.

**Action:** I scheduled a private coffee meeting rather than calling them out in the group chat. I learned they were overwhelmed by their dissertation deadline and felt the project was lower priority. Instead of escalating to our professor, I proposed restructuring: I shifted them to a smaller, self-contained task (data visualisation) that played to their strengths and had a clear 1-week deadline. I also set up a shared Trello board with weekly check-ins so no one could fall behind silently again.

**Result:** The project received a Distinction (78%), and the client adopted two of our recommendations. More importantly, the team member thanked me privately — they said the restructured role helped them contribute meaningfully without the overwhelm. I learned that addressing problems directly but empathetically is more effective than waiting for them to escalate.

---

**60-SECOND VERSION:** "In a group master's project with a real client, one team member stopped contributing after two weeks. Instead of escalating, I met with them privately, learned they were overloaded, and restructured their role to a smaller task that matched their strengths. I also introduced weekly Trello check-ins for accountability. The project scored a Distinction, and the client implemented our recommendations."`,
    proTips: [
      "Use 'I' not 'we' — interviewers want YOUR contribution, not the team's",
      "Always include what you LEARNED — it shows self-awareness and growth mindset",
      "Prepare 5-7 STAR stories that can flex across different question types",
      "Academic projects absolutely count — frame them professionally",
    ],
    relatedPromptIds: ["23", "24", "1"],
  },
  {
    id: "23",
    slug: "technical-interview-practice",
    title: "Technical Interview Practice Questions",
    description: "Generate realistic technical interview questions with detailed solutions, time complexity analysis, and interviewer expectations for your target role.",
    prompt: `Act as a technical interviewer at a top tech company. Create a practice interview session.

**Interview Details:**
- Target role: [ROLE]
- Company type: [COMPANY_TYPE — FAANG, startup, consultancy, etc.]
- Technical areas: [AREAS — algorithms, system design, language-specific, etc.]
- My level: [LEVEL — new grad, junior, mid]
- Duration: [DURATION — 30/45/60 min]

**Generate a realistic interview with:**

## WARM-UP QUESTION (5 min)
- Easy problem to build confidence
- Full solution with explanation
- What the interviewer is looking for

## MAIN CODING QUESTION (20-25 min)
- Medium-difficulty problem
- Hints the interviewer would give (progressive)
- Optimal solution with code
- Time and space complexity analysis
- Common mistakes to avoid
- Follow-up questions to expect

## SYSTEM DESIGN / CONCEPTUAL QUESTION (15-20 min)
- Relevant to the role
- Expected answer structure
- Key concepts to mention
- Common pitfalls

## BEHAVIOURAL QUESTION (5-10 min)
- Role-specific behavioural question
- What they're really assessing
- Strong vs. weak answer comparison

## SCORING RUBRIC
- What gets a "Strong Hire" signal
- What gets a "No Hire" signal
- Key differentiators between candidates`,
    platforms: ["chatgpt", "claude", "copilot"],
    category: "interview-prep",
    subcategory: "Technical",
    tags: ["technical-interview", "coding", "practice", "preparation"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[ROLE]: Junior Backend Developer
[COMPANY_TYPE]: Mid-size SaaS startup
[AREAS]: Python, REST APIs, SQL, basic system design
[LEVEL]: New grad (MSc Computer Science)`,
    exampleOutput: `## MAIN CODING QUESTION

**"Design a function that takes a list of meeting times (start, end) and returns the minimum number of conference rooms needed."**

*Interviewer context: This tests sorting, heap usage, and edge case thinking.*

### Progressive Hints:
1. "What if you sorted the meetings?" (if stuck after 3 min)
2. "Think about what happens at each start time and end time independently" (if still stuck)
3. "Could a min-heap help track when rooms become free?" (final hint)

### Optimal Solution:
\`\`\`python
import heapq

def min_rooms(meetings: list[tuple[int, int]]) -> int:
    if not meetings:
        return 0
    
    meetings.sort(key=lambda x: x[0])
    heap = []  # tracks end times of ongoing meetings
    
    for start, end in meetings:
        if heap and heap[0] <= start:
            heapq.heappop(heap)  # room freed up
        heapq.heappush(heap, end)
    
    return len(heap)
\`\`\`

**Time:** O(n log n) — sorting dominates
**Space:** O(n) — worst case all meetings overlap

**Common mistakes:**
- Not handling empty input
- Using <= vs < for end time comparison (edge case: meeting ends at 10, next starts at 10)...`,
    proTips: [
      "Think out loud — interviewers want to see your problem-solving process, not just the solution",
      "Always clarify constraints before coding: 'Are the times integers? Can meetings overlap?'",
      "Start with the brute force approach, then optimise — it shows structured thinking",
      "Practice with a timer — 20 minutes for a medium problem feels very different from unlimited time",
    ],
    relatedPromptIds: ["22", "24", "30"],
  },
  {
    id: "24",
    slug: "case-study-interview-framework",
    title: "Case Study Interview Framework",
    description: "Practice consulting-style case study interviews with structured frameworks, market sizing exercises, and profitability analyses.",
    prompt: `Act as a management consulting interviewer. Present a case study interview.

**Interview Context:**
- Firm type: [TYPE — MBB, Big 4, boutique, in-house strategy]
- Role: [ROLE]
- My background: [BACKGROUND]
- Focus area: [FOCUS — market entry, profitability, M&A, pricing, growth strategy]

**Present:**

## THE CASE
- Client description (industry, size, situation)
- The problem or question they're facing
- Key data points (market size, financials, competitive info)

## FRAMEWORK TO APPLY
- Recommended framework for this case type
- How to structure your approach (not a cookie-cutter framework)
- Key questions to ask the interviewer

## GUIDED WALKTHROUGH
- Question 1 → data provided → analysis expected
- Question 2 → calculation required → expected answer
- Question 3 → synthesis → recommendation
- Curveball question → how to handle it

## MARKET SIZING EXERCISE
- A related estimation question
- Step-by-step approach
- Sanity checks for your numbers

## MODEL ANSWER
- Strong candidate response (what "great" looks like)
- Weak candidate response (common mistakes)
- Key differentiators

## SYNTHESIS & RECOMMENDATION
- How to structure your final recommendation
- The "elevator pitch" format (30 seconds)`,
    platforms: ["chatgpt", "claude"],
    category: "interview-prep",
    subcategory: "Case Study",
    tags: ["case-study", "consulting", "interview", "strategy"],
    complexity: "advanced",
    popularity: 3,
    exampleInput: `[TYPE]: Big 4 (Deloitte/PwC)
[ROLE]: Graduate Strategy Consultant
[BACKGROUND]: MSc Business Analytics
[FOCUS]: Market entry`,
    exampleOutput: `## THE CASE

**Client:** FreshRoots, a UK-based organic meal kit delivery company (£15M revenue, 3 years old)
**Situation:** They've saturated the London market (42% of their target demographic are customers) and are considering expanding into Germany.
**Question:** Should FreshRoots enter the German market, and if so, how?

## FRAMEWORK

Don't use a generic "3C" or "4P" framework. Structure your analysis around the decision:

1. **Market Attractiveness** — Is Germany worth entering?
   - Market size and growth for meal kits in Germany
   - Competitive landscape (HelloFresh is German!)
   - Regulatory/cultural barriers
   
2. **Company Readiness** — Can FreshRoots compete?
   - Core competencies that transfer
   - Capabilities gaps
   - Financial runway for international expansion

3. **Entry Strategy** — If yes, how?
   - Organic growth vs. acquisition vs. partnership
   - City-by-city rollout vs. national launch
   - Localisation requirements

## GUIDED WALKTHROUGH

**Interviewer:** "Let's start with market size. How would you estimate the German meal kit market?"...`,
    proTips: [
      "Never jump into a framework without first clarifying the question and asking for key data",
      "Use round numbers and show your math clearly — precision matters less than structure",
      "It's OK to ask 'Is this the right direction?' midway through — interviewers prefer dialogue to monologue",
      "End with a clear, actionable recommendation: 'I recommend X because of Y, with the key risk being Z'",
    ],
    relatedPromptIds: ["22", "25", "39"],
  },
  {
    id: "25",
    slug: "graduate-school-interview-prep",
    title: "Graduate School / PhD Interview Prep",
    description: "Prepare for master's or PhD programme interviews with likely questions, research discussion frameworks, and fit assessment strategies.",
    prompt: `Act as a graduate admissions committee member. Help me prepare for a programme interview.

**Programme Details:**
- Programme: [PROGRAMME — PhD, specific master's]
- University: [UNIVERSITY]
- Department: [DEPARTMENT]
- Potential supervisor: [SUPERVISOR]
- Research interests: [INTERESTS]
- My background: [BACKGROUND]

**Prepare me for:**

## 1. COMMON QUESTIONS (with model answers)
- "Why this programme/university?"
- "Why this specific research area?"
- "What's your research experience?"
- "Where do you see yourself in 5 years?"
- "What will you bring to the department?"
- "Tell us about a research challenge you've faced"

## 2. RESEARCH DISCUSSION PREP
- How to discuss your previous research confidently
- How to connect your interests to the department's work
- Questions to ask about their research groups
- How to discuss potential supervisors' work without sounding like you've just skimmed their abstracts

## 3. QUESTIONS YOU SHOULD ASK
- 5 impressive questions that show genuine engagement
- 3 practical questions about funding, resources, and support
- Questions to AVOID (red flags)

## 4. FIT ASSESSMENT
- How to evaluate whether this programme is right for YOU
- Cultural fit signals to look for
- Warning signs

## 5. LOGISTICS
- What to wear
- How to follow up after the interview
- Timeline expectations`,
    platforms: ["chatgpt", "claude"],
    category: "interview-prep",
    subcategory: "Academic",
    tags: ["graduate-school", "PhD", "interview", "admissions"],
    complexity: "intermediate",
    popularity: 3,
    exampleInput: `[PROGRAMME]: PhD Computer Science
[UNIVERSITY]: University of Oxford
[DEPARTMENT]: Department of Computer Science
[SUPERVISOR]: Prof. working on fairness in machine learning
[INTERESTS]: Algorithmic fairness, bias detection in LLMs`,
    exampleOutput: `## "WHY THIS PROGRAMME?"

**Strong Answer Framework:**

"My interest in algorithmic fairness started during my master's thesis at [University], where I discovered that [specific finding]. Reading Professor [Name]'s work on [specific paper] — particularly the framework for [concept] — I realised that Oxford's approach to fairness research aligns closely with where I want to contribute.

Specifically, three things attract me: First, Professor [Name]'s group is one of the few that combines theoretical fairness guarantees with real-world auditing — which is the intersection I want to work in. Second, Oxford's partnership with the Alan Turing Institute gives access to policy-level impact that few programmes can offer. Third, the department's collaboration across philosophy and social science means I'd be pushed to think about fairness beyond the purely technical — which I believe is essential for meaningful progress in this area."

**What makes this strong:**
- Shows genuine knowledge of the supervisor's work (not just their title)
- References specific institutional advantages
- Demonstrates intellectual maturity...`,
    proTips: [
      "Read 3-5 of your potential supervisor's recent papers — be ready to discuss them intelligently",
      "It's OK to say 'I'm not sure yet, but I'm interested in exploring...' — PhD interviews value intellectual curiosity",
      "Prepare a 2-minute summary of your master's thesis that a non-specialist could follow",
      "Ask about the lab culture and PhD student well-being — good supervisors appreciate this question",
    ],
    relatedPromptIds: ["22", "19", "16"],
  },
  {
    id: "26",
    slug: "mock-interview-simulator",
    title: "Mock Interview Simulator",
    description: "Run a full mock interview session with realistic questions, real-time feedback, and scoring for any role or programme you're preparing for.",
    prompt: `Act as an interviewer conducting a realistic mock interview. This should feel like a real interview, not a Q&A exercise.

**Interview Setup:**
- Position: [POSITION]
- Company/Programme: [COMPANY]
- Interview type: [TYPE — behavioural, technical, case, panel, PhD]
- Duration: [DURATION]
- My CV highlights: [HIGHLIGHTS]

**Conduct the interview as follows:**

## ROUND 1: INTRODUCTION (2 min)
- Brief introduction and rapport-building
- "Tell me about yourself" (evaluate my answer)

## ROUND 2: CORE QUESTIONS (20-30 min)
- Ask me 5-7 questions appropriate for [POSITION]
- After EACH of my answers, provide:
  - What was strong about my answer
  - What was missing or could be improved
  - How the best candidates typically answer this
  - Score: 1-5

## ROUND 3: CURVEBALL (5 min)
- One unexpected or challenging question
- Assess how I handle pressure and ambiguity

## ROUND 4: MY QUESTIONS (5 min)
- Let me ask questions
- Rate the quality of my questions
- Suggest better alternatives

## POST-INTERVIEW SCORECARD
- Overall score: /10
- Strongest area
- Biggest area for improvement
- One specific thing to practice before the real interview
- Whether I would progress to the next round (honest assessment)

**Rules:**
- Be realistic — don't go easy on me
- Give honest, constructive feedback
- Simulate the pace and pressure of a real interview`,
    platforms: ["chatgpt", "claude"],
    category: "interview-prep",
    subcategory: "Practice",
    tags: ["mock-interview", "practice", "feedback", "preparation"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[POSITION]: Graduate Data Analyst
[COMPANY]: BBC
[TYPE]: Behavioural + light technical
[HIGHLIGHTS]: MSc Data Science, internship at a media startup, thesis on audience analytics`,
    exampleOutput: `**[Interviewer settles in, smiles]**

"Hi, thanks for coming in today. I'm Alex, I lead the Data & Insights team here at BBC. Before we start — did you find the office alright?"

*[Small talk to settle nerves — this is normal and deliberate]*

"Great. So let's jump in. **Can you tell me a bit about yourself and why you're interested in the data analyst role at BBC?**"

*[Waiting for your answer...]*

---

**After your answer, I'll provide:**

✅ **Strong:** You connected your media startup internship to BBC's mission — shows genuine interest
⚠️ **Improve:** You spent too long on your academic background. Lead with what you've DONE, not what you've studied.
💡 **Best practice:** Strong candidates use a "Present → Past → Future" structure: what you do now, how you got here, why this role is next.

**Score: 3/5** — Solid content but needs tighter structure.

**Next question: "Tell me about a time you used data to influence a decision."**`,
    proTips: [
      "Record yourself answering and listen back — you'll catch filler words and rambling immediately",
      "Keep answers to 2 minutes max unless asked to elaborate",
      "Prepare 5-7 versatile stories that can answer multiple question types",
      "Ask a friend to interview you over video call — practising with a real human builds different muscles",
    ],
    relatedPromptIds: ["22", "23", "24"],
  },

  // ═══════════════════════════════════════════════════════════════
  // DEVELOPMENT (5 prompts)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "27",
    slug: "code-review-assistant",
    title: "Senior Code Review Assistant",
    description: "Get thorough, senior-level code reviews with actionable suggestions across quality, performance, security, and maintainability.",
    prompt: `Act as a senior software engineer conducting a thorough code review. You have deep expertise in [LANGUAGE].

Review the following code:

\`\`\`
[PASTE_CODE_HERE]
\`\`\`

Context: [WHAT_THE_CODE_DOES]

**Provide feedback on:**

## 1. CODE QUALITY & READABILITY
- Naming conventions and clarity
- Code organisation and structure
- DRY violations and refactoring opportunities

## 2. BUGS & EDGE CASES
- Potential runtime errors
- Null/undefined handling
- Boundary conditions

## 3. PERFORMANCE
- Time and space complexity
- Unnecessary computations
- Optimisation opportunities

## 4. SECURITY CONCERNS
- Input validation gaps
- Injection vulnerabilities
- Data exposure risks

## 5. SUGGESTED IMPROVEMENTS
For each issue:
- The specific line or section
- Why it's a problem
- A concrete code example of the fix

Rate the overall code: ⭐ out of 5`,
    platforms: ["claude", "chatgpt", "copilot"],
    category: "development",
    subcategory: "Code Quality",
    tags: ["code-review", "quality", "debugging", "security"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `[LANGUAGE]: TypeScript/React
[PASTE_CODE_HERE]: (a React component with useEffect and API calls)
[WHAT_THE_CODE_DOES]: User authentication flow`,
    exampleOutput: `## CODE QUALITY ⚠️

**Issue 1: Silent error handling (Line 23)**
\`\`\`typescript
// Before
catch (e) { console.log(e); }
// After  
catch (error) {
  setAuthError(error instanceof AuthError ? error.message : 'Authentication failed');
  toast.error('Unable to sign in.');
}
\`\`\`

**Overall: ⭐⭐⭐ (3/5)** — Functional but needs error handling and security hardening.`,
    proTips: [
      "Always specify the language and framework for context-aware suggestions",
      "Include the broader context of what the code does",
      "For large codebases, review one file or function at a time",
      "Claude excels at nuanced reasoning; ChatGPT is faster for straightforward reviews",
    ],
    relatedPromptIds: ["28", "30"],
  },
  {
    id: "28",
    slug: "debugging-assistant",
    title: "Debugging Assistant & Error Resolver",
    description: "Diagnose and fix bugs systematically with root cause analysis, solution steps, and prevention strategies.",
    prompt: `Act as a senior debugging specialist. Help me fix this bug.

**The Problem:**
- Error message: [ERROR]
- When it happens: [WHEN]
- Expected behaviour: [EXPECTED]
- Actual behaviour: [ACTUAL]
- Language/framework: [TECH]
- What I've already tried: [ATTEMPTS]

**The Code:**
\`\`\`
[PASTE_CODE]
\`\`\`

**Please provide:**

## 1. ROOT CAUSE ANALYSIS
- What's actually happening and why
- The specific line(s) causing the issue

## 2. THE FIX
- Exact code change needed
- Explanation of why this fixes it

## 3. RELATED ISSUES
- Other places this bug pattern might exist in my code
- Similar bugs to watch for

## 4. PREVENTION
- How to prevent this type of bug in the future
- Testing strategies to catch it earlier
- Linting rules or type safety measures

## 5. LEARNING MOMENT
- The underlying concept I should understand better
- Resources to learn more about this pattern`,
    platforms: ["chatgpt", "claude", "copilot"],
    category: "development",
    subcategory: "Debugging",
    tags: ["debugging", "errors", "troubleshooting", "code"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[ERROR]: "TypeError: Cannot read properties of undefined (reading 'map')"
[WHEN]: When the component first renders
[TECH]: React + TypeScript
[ATTEMPTS]: Added optional chaining but it broke the list rendering`,
    exampleOutput: `## ROOT CAUSE

The error occurs because your \`data\` state is initialized as \`undefined\`, and the component renders before the API call completes.

\`\`\`typescript
// Problem: initial state is undefined
const [data, setData] = useState(); // ← undefined!

// Fix: initialize with empty array
const [data, setData] = useState<Item[]>([]); // ← empty array

// Alternative: guard the render
{data && data.map(item => ...)}
// or
{data?.map(item => ...) ?? <LoadingState />}
\`\`\`

## PREVENTION
- Always initialise state with a sensible default value
- Use TypeScript strict mode to catch uninitialised variables
- Add a loading state pattern: loading/data/error...`,
    proTips: [
      "Include the EXACT error message — paraphrasing loses critical debug info",
      "Mention what you've already tried so the AI doesn't repeat failed solutions",
      "Paste the minimal reproducible code, not your entire file",
      "Ask 'what tests would catch this?' to build regression prevention",
    ],
    relatedPromptIds: ["27", "29"],
  },
  {
    id: "29",
    slug: "github-readme-generator",
    title: "GitHub README Generator",
    description: "Create professional README files for your projects that impress recruiters and clearly communicate your work's value.",
    prompt: `Act as a developer advocate who writes compelling open-source documentation.

Create a professional README.md for my project:

**Project Details:**
- Name: [NAME]
- Description: [DESCRIPTION]
- Tech stack: [TECH]
- My role: [ROLE]
- Status: [STATUS — complete, in progress, maintained]
- Live demo: [DEMO_URL]
- Purpose: [PURPOSE — coursework, portfolio, production, learning]

**Generate a README with:**

## Structure
1. **Title + badge row** (build status, license, tech stack badges)
2. **One-paragraph description** (what it does, why it matters)
3. **Screenshot or demo GIF placeholder** with formatting
4. **Features list** (bullet points, grouped logically)
5. **Tech stack table** (with version numbers)
6. **Getting started** (prerequisites, install, run — copy-paste ready)
7. **Project structure** (key files/folders explained)
8. **API documentation** (if applicable)
9. **Contributing guidelines** (if open source)
10. **License**
11. **Acknowledgments**

**Make it:**
- Scannable (use headers, bullet points, code blocks)
- Copy-paste ready (all commands should work)
- Recruiter-friendly (explains impact, not just technology)
- Professional but not over-engineered for a student project`,
    platforms: ["chatgpt", "claude", "copilot"],
    category: "development",
    subcategory: "Documentation",
    tags: ["README", "GitHub", "documentation", "portfolio"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[NAME]: StudySync
[DESCRIPTION]: A Pomodoro-based study timer with Spotify integration that creates focus playlists
[TECH]: React, TypeScript, Spotify API, Firebase
[PURPOSE]: Portfolio project`,
    exampleOutput: `# 🎧 StudySync

> A Pomodoro study timer that syncs with Spotify to create the perfect focus soundtrack.

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![License](https://img.shields.io/badge/license-MIT-green)

[Live Demo](https://studysync.app) · [Report Bug](../../issues) · [Request Feature](../../issues)

## ✨ What it does

StudySync combines the Pomodoro Technique with personalised Spotify playlists. Start a 25-minute focus session, and StudySync automatically plays concentration-optimised music from your library. During breaks, it switches to upbeat tracks to recharge.

**Why I built this:** As a master's student, I noticed I spent more time choosing "study music" than actually studying. StudySync removes that friction.

## 🚀 Features

- ⏱️ Customisable Pomodoro timer (25/5 default, adjustable)
- 🎵 Spotify integration — auto-generates focus playlists
- 📊 Study analytics dashboard (daily/weekly streaks)
- 🌙 Dark mode with ambient sound mixer...`,
    proTips: [
      "Add a screenshot or GIF at the top — visual proof makes people stay on your repo",
      "Keep the 'Getting Started' section copy-paste ready — test it yourself on a fresh machine",
      "For portfolio projects, add a 'What I Learned' section — it shows growth mindset",
      "Use shields.io badges for a professional look — they take 2 minutes to add",
    ],
    relatedPromptIds: ["8", "27", "30"],
  },
  {
    id: "30",
    slug: "project-architecture-planner",
    title: "Project Architecture Planner",
    description: "Plan the technical architecture of your coursework or portfolio project before writing code, with technology choices and milestone breakdown.",
    prompt: `Act as a senior software architect mentoring a master's student on project planning.

Help me plan the architecture for:

**Project Overview:**
- What it does: [DESCRIPTION]
- Type: [TYPE — web app, mobile app, data pipeline, ML model, API]
- Users: [USERS — who will use it]
- Scale: [SCALE — coursework demo, portfolio piece, production MVP]
- Timeline: [TIMELINE]
- My experience level: [LEVEL]

**Please provide:**

## 1. ARCHITECTURE OVERVIEW
- High-level system diagram (text-based)
- Component responsibilities
- Data flow description

## 2. TECHNOLOGY STACK RECOMMENDATION
| Layer | Technology | Why This Choice |
- Frontend, backend, database, hosting, CI/CD
- Justify each choice for MY context (student, timeline, learning goals)

## 3. DATABASE DESIGN
- Entity relationship overview
- Key tables/collections with fields
- Relationships and constraints

## 4. API DESIGN (if applicable)
- Key endpoints
- Authentication approach
- Request/response format

## 5. PROJECT STRUCTURE
- Folder structure with explanations
- Key files and their purposes

## 6. MILESTONE BREAKDOWN
- Week-by-week plan
- MVP features vs. stretch goals
- What to build first (dependency order)

## 7. POTENTIAL PITFALLS
- Common mistakes for this type of project
- Over-engineering risks
- Where to keep it simple`,
    platforms: ["claude", "chatgpt", "copilot"],
    category: "development",
    subcategory: "Architecture",
    tags: ["architecture", "planning", "project", "design"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[DESCRIPTION]: A peer tutoring platform where students can offer and book study sessions
[TYPE]: Full-stack web app
[TIMELINE]: 8 weeks (coursework)
[LEVEL]: Intermediate (comfortable with React, learning backend)`,
    exampleOutput: `## ARCHITECTURE OVERVIEW

\`\`\`
[Browser] → [React SPA] → [Express API] → [PostgreSQL]
                                ↓
                        [Auth (JWT/Supabase)]
                                ↓
                      [Email notifications]
\`\`\`

## TECHNOLOGY STACK

| Layer | Choice | Why |
|-------|--------|-----|
| Frontend | React + TypeScript | You know it; TypeScript prevents bugs |
| Styling | Tailwind CSS | Fast iteration, no CSS architecture needed |
| Backend | Supabase | Auth + DB + API in one — saves 2 weeks vs Express |
| Database | PostgreSQL (via Supabase) | Relational data, strong for bookings |
| Hosting | Vercel (FE) | Free, auto-deploy from GitHub |

## MILESTONE BREAKDOWN

**Week 1-2:** Auth + user profiles + database schema
**Week 3-4:** Session creation + listing + search
**Week 5-6:** Booking system + calendar view
**Week 7:** Notifications + reviews
**Week 8:** Polish, testing, documentation

**MVP (must have):** Auth, create/browse sessions, book a session
**Stretch:** Reviews, calendar integration, real-time chat...`,
    proTips: [
      "Build the smallest possible working version first — you can always add features",
      "Choose boring technology for coursework — your grade depends on it working, not being clever",
      "Set up CI/CD on day 1 — deploying continuously prevents last-minute disasters",
      "Document architectural decisions as you go — it shows examiners your thought process",
    ],
    relatedPromptIds: ["27", "29", "31"],
  },
  {
    id: "31",
    slug: "regex-pattern-crafter",
    title: "Regex Pattern Crafter & Explainer",
    description: "Generate and explain regex patterns for text matching, with test cases and edge case analysis.",
    prompt: `Act as a regex expert. Create a production-ready regex pattern for:

[DESCRIPTION_OF_PATTERN]

**Examples that SHOULD match:**
- [EXAMPLE_1]
- [EXAMPLE_2]

**Examples that should NOT match:**
- [COUNTER_1]
- [COUNTER_2]

**Target language:** [LANGUAGE]

**Provide:**
1. The complete regex with flags
2. Component-by-component breakdown
3. Edge cases it handles and might miss
4. Test suite in [LANGUAGE]
5. Simpler alternative (if accuracy trade-off is OK)`,
    platforms: ["chatgpt", "claude", "copilot"],
    category: "development",
    subcategory: "Text Processing",
    tags: ["regex", "patterns", "text-processing", "validation"],
    complexity: "intermediate",
    popularity: 3,
    exampleInput: `[DESCRIPTION]: Match valid UK postcodes
[LANGUAGE]: JavaScript`,
    exampleOutput: `## THE PATTERN

\`\`\`javascript
const ukPostcode = /^([A-Z]{1,2}\\d[A-Z\\d]?)\\s*(\\d[A-Z]{2})$/i;
\`\`\`

## BREAKDOWN
- \`[A-Z]{1,2}\` — Area: 1-2 letters (e.g., "SW", "M", "EC")
- \`\\d[A-Z\\d]?\` — District: digit + optional letter/digit
- \`\\s*\` — Optional space separator
- \`\\d[A-Z]{2}\` — Sector + unit: digit + 2 letters...`,
    proTips: [
      "Always specify the regex engine — JavaScript and Python handle lookbehinds differently",
      "Provide 5+ examples for precise pattern generation",
      "For complex patterns, ask for verbose/commented mode",
    ],
    relatedPromptIds: ["27", "28"],
  },

  // ═══════════════════════════════════════════════════════════════
  // EDUCATION & STUDY (6 prompts)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "32",
    slug: "study-plan-generator",
    title: "Exam Study Plan Generator",
    description: "Create a structured, realistic study plan for your exams or assessments with spaced repetition, active recall, and time blocking.",
    prompt: `Act as a learning science expert. Create a personalised study plan for my exams.

**My Situation:**
- Exams/assessments: [EXAMS — subject, date, format]
- Current knowledge level per subject: [LEVELS]
- Available study hours per day: [HOURS]
- Start date: [START_DATE]
- Learning style preference: [STYLE — visual, reading, practice problems, discussion]
- Other commitments: [COMMITMENTS]

**Create a plan with:**

## 1. PRIORITY MATRIX
- Which subjects need the most time and why
- Difficulty × importance ranking
- Time allocation percentages

## 2. WEEKLY SCHEDULE
- Day-by-day breakdown
- Specific topics for each study block
- Built-in breaks and rest days
- Active recall sessions scheduled

## 3. STUDY TECHNIQUES PER SUBJECT
- Best method for each subject type
- Spaced repetition schedule
- Practice problem sources
- Active recall strategies

## 4. DAILY ROUTINE TEMPLATE
- Morning: [hardest material]
- Afternoon: [practice/review]
- Evening: [light review/flashcards]
- 25-minute Pomodoro blocks

## 5. PROGRESS CHECKPOINTS
- Weekly self-tests
- "Red flag" indicators that you're falling behind
- How to adjust the plan if needed

## 6. EXAM WEEK STRATEGY
- Final review approach
- Night-before protocol
- Exam day routine`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "education",
    subcategory: "Study Skills",
    tags: ["study-plan", "exams", "revision", "time-management"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[EXAMS]: 1) Machine Learning (15 Jan, written exam) 2) NLP (18 Jan, project + oral) 3) Statistics (22 Jan, written)
[HOURS]: 6 hours/day
[LEVELS]: ML - intermediate, NLP - strong, Statistics - weak`,
    exampleOutput: `## PRIORITY MATRIX

| Subject | Knowledge | Difficulty | Exam Date | Priority | Time % |
|---------|-----------|-----------|-----------|----------|--------|
| Statistics | Weak | High | 22 Jan | 🔴 Highest | 40% |
| Machine Learning | Medium | Medium | 15 Jan | 🟡 High (earliest!) | 35% |
| NLP | Strong | Low | 18 Jan | 🟢 Maintain | 25% |

⚠️ **Critical:** ML is your earliest exam but not your weakest subject. Front-load ML for the first week, then shift to Statistics.

## WEEK 1 (1-7 Jan) — "Foundation Week"

**Monday:** ML — Linear regression, gradient descent (3h) | Statistics — Probability review (2h) | NLP — Project work (1h)
**Tuesday:** ML — Decision trees, random forests (3h) | Statistics — Distributions (2h) | NLP — Light review (1h)
**Wednesday:** 🔄 Active Recall Day — Practice problems only, no new material...`,
    proTips: [
      "Study your weakest subject when you have the most energy (usually morning)",
      "Active recall (testing yourself) is 3x more effective than re-reading notes",
      "Plan rest days — burnout before exams is worse than losing one study day",
      "If you're behind schedule by week 2, drop the least important 20% of material and focus on core concepts",
    ],
    relatedPromptIds: ["33", "34", "44"],
  },
  {
    id: "33",
    slug: "concept-explainer-feynman",
    title: "Concept Explainer (Feynman Technique)",
    description: "Break down complex academic concepts into simple, intuitive explanations using analogies, examples, and progressive complexity.",
    prompt: `Act as an expert educator who uses the Feynman Technique to explain complex ideas simply.

Explain this concept:

**Concept:** [CONCEPT]
**Field:** [FIELD]
**My current understanding:** [CURRENT_LEVEL]
**Why I need to understand it:** [CONTEXT — exam, thesis, project]

**Explain at three levels:**

## LEVEL 1: EXPLAIN LIKE I'M 12
- Core idea in 2-3 sentences
- Real-world analogy
- No jargon

## LEVEL 2: UNDERGRADUATE LEVEL
- Proper terminology introduced
- How it connects to related concepts
- A worked example
- Common misconceptions addressed

## LEVEL 3: MASTER'S LEVEL
- Formal definition with nuance
- Mathematical notation (if applicable)
- Edge cases and limitations
- How experts actually think about this
- Key debates in the field

## MEMORY AIDS
- A memorable analogy or metaphor
- A mnemonic if applicable
- A simple diagram description
- 3 exam-style questions to test understanding

## FURTHER CONNECTIONS
- How this connects to 3 related concepts
- Why it matters in practice
- Common exam/interview questions about this topic`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "education",
    subcategory: "Learning",
    tags: ["learning", "explanation", "Feynman", "understanding"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[CONCEPT]: Gradient Descent
[FIELD]: Machine Learning
[CURRENT_LEVEL]: I know it's an optimisation algorithm but don't understand the math
[CONTEXT]: ML exam in 2 weeks`,
    exampleOutput: `## LEVEL 1: EXPLAIN LIKE I'M 12

Imagine you're blindfolded on a hilly landscape and you need to find the lowest valley. You can't see, but you can feel which direction the ground slopes downward under your feet. So you take a step downhill. Then feel the slope again. Take another step downhill. Keep going until the ground feels flat — you've found the valley.

That's gradient descent. The "landscape" is all the possible mistakes your model could make, and you're trying to find the combination of settings that makes the fewest mistakes.

## LEVEL 2: UNDERGRADUATE

**Formally:** Gradient descent is an iterative optimisation algorithm that minimises a function by moving in the direction of the steepest decrease (the negative gradient).

**The Update Rule:**
θ_new = θ_old - α · ∇J(θ)

Where:
- θ = model parameters (the "position on the hill")
- α = learning rate (step size)
- ∇J(θ) = gradient of the loss function (which direction is "downhill")

**Analogy upgrade:** The learning rate α is like your stride length. Too big, and you overshoot the valley and bounce around. Too small, and you'll reach the valley eventually but it'll take forever...`,
    proTips: [
      "If you can't explain it simply, you don't understand it well enough — use Level 1 as a self-test",
      "Ask the AI to 'now quiz me on this concept' as a follow-up for active recall",
      "The analogies are great for remembering, but make sure you can also express the formal definition",
      "Use Level 3 for exam preparation — that's the depth your examiner expects",
    ],
    relatedPromptIds: ["32", "34", "35"],
  },
  {
    id: "34",
    slug: "flashcard-generator",
    title: "Anki / Flashcard Set Generator",
    description: "Generate high-quality flashcards from your lecture notes or textbook chapters, following evidence-based principles for effective spaced repetition.",
    prompt: `Act as a spaced repetition expert who designs flashcards based on learning science principles.

Create flashcards from this material:

**Source Material:**
[PASTE_NOTES_OR_TOPICS]

**Context:**
- Subject: [SUBJECT]
- Exam type: [TYPE — multiple choice, essay, oral, problem-solving]
- Number of cards needed: [NUMBER — or "as many as needed"]

**Flashcard Design Rules:**
1. **Atomic:** One fact per card (never combine multiple concepts)
2. **Active recall:** Question should require retrieval, not recognition
3. **No orphan cards:** Each card should connect to a broader concept
4. **Cloze deletions** for definitions and formulas
5. **Application cards** that require using the concept, not just defining it

**For each card, provide:**
- **Front:** Clear question or cloze deletion
- **Back:** Concise answer + brief explanation
- **Tags:** [subject, topic, difficulty]
- **Card type:** Definition / Application / Comparison / Process

**Also include:**
- 5 "high-yield" cards (most likely to appear on exams)
- 3 "tricky" cards (common misconceptions)
- Connection map showing how cards relate to each other`,
    platforms: ["chatgpt", "claude"],
    category: "education",
    subcategory: "Study Tools",
    tags: ["flashcards", "Anki", "spaced-repetition", "revision"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[SUBJECT]: Research Methods
[TOPICS]: Qualitative vs quantitative, validity, reliability, sampling methods
[EXAM_TYPE]: Written exam with short-answer questions`,
    exampleOutput: `## HIGH-YIELD CARDS

**Card 1** [Definition]
Front: What is the difference between **validity** and **reliability** in research?
Back: **Validity** = Are you measuring what you intend to measure? (accuracy)
**Reliability** = Would you get the same results if you repeated the study? (consistency)
💡 A bathroom scale can be reliable (same reading every time) but not valid (if it's always 2kg off).
Tags: #research-methods #validity #reliability #high-yield

**Card 2** [Application]
Front: A researcher surveys 500 university students about political views and claims the results represent "all young adults in the UK." What validity concern does this raise?
Back: **External validity / generalisability.** University students are not representative of all young adults — they skew higher-income, more educated, and more urban. This is a **sampling bias** issue.
Tags: #research-methods #validity #sampling #application

**Card 3** [Comparison]
Front: Name 3 differences between probability and non-probability sampling.
Back:
| Probability | Non-Probability |
|---|---|
| Random selection | Researcher's judgment |
| Generalisable | Not generalisable |
| More expensive/slow | Cheaper/faster |
| Examples: simple random, stratified | Examples: convenience, snowball |
Tags: #research-methods #sampling #comparison...`,
    proTips: [
      "Import into Anki using the tab-separated format — paste front/back separated by tabs",
      "Review new cards the same day you create them — first review is the most impactful",
      "Application cards (using concepts) are harder but far more effective than definition cards",
      "Limit new cards to 20-30 per day — too many leads to review pile-up",
    ],
    relatedPromptIds: ["32", "33", "35"],
  },
  {
    id: "35",
    slug: "presentation-script-writer",
    title: "Academic Presentation Script & Slides",
    description: "Create engaging presentation scripts and slide content for conference talks, thesis presentations, or class seminars.",
    prompt: `Act as a presentation coach who helps researchers communicate effectively.

Create a presentation for:

**Presentation Details:**
- Topic: [TOPIC]
- Context: [CONTEXT — class seminar, conference, thesis defence, project pitch]
- Duration: [DURATION]
- Audience: [AUDIENCE]
- Key message: [KEY_MESSAGE]

**Provide:**

## 1. SLIDE-BY-SLIDE CONTENT
For each slide:
- **Slide title**
- **Key visual/content** (what goes on the slide — minimal text)
- **Speaker notes** (what I actually say — full script)
- **Timing** (how long to spend on this slide)

## 2. STRUCTURE
- Hook/opening (grab attention in first 30 seconds)
- Context/background (why this matters)
- Core content (main argument/findings)
- Evidence/data (supporting points)
- Implications (so what?)
- Conclusion & call to action
- Q&A preparation

## 3. DESIGN GUIDELINES
- Recommended colour scheme
- Font suggestions
- When to use charts vs. text vs. images
- Maximum words per slide rule

## 4. Q&A PREPARATION
- 5 likely questions and prepared answers
- How to handle "I don't know" gracefully
- Bridge phrases for redirecting

## 5. DELIVERY TIPS
- Pace and timing markers
- Where to pause for emphasis
- Audience engagement moments (questions, polls)
- Body language reminders`,
    platforms: ["chatgpt", "claude"],
    category: "education",
    subcategory: "Presentations",
    tags: ["presentation", "slides", "public-speaking", "academic"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[TOPIC]: My thesis findings on remote work and well-being
[CONTEXT]: 15-minute thesis defence presentation
[AUDIENCE]: Examination panel (2 professors + external examiner)
[KEY_MESSAGE]: Remote work improves well-being only when organisational support is present`,
    exampleOutput: `## SLIDE 1: TITLE SLIDE (30 seconds)

**On slide:** Title, your name, university, date
**Say:** "Good morning. My thesis explores a question that affects millions of workers: does remote work actually improve well-being? The short answer is — it depends. And the 'what it depends on' is what I spent the past year investigating."

*💡 Note: Don't read the title. Use the opening to set up tension.*

## SLIDE 2: THE PUZZLE (1.5 minutes)

**On slide:** Two contrasting statistics (side by side)
- "Remote workers report 23% higher job satisfaction" (Buffer, 2023)
- "Remote workers report 67% higher loneliness" (Cigna, 2023)

**Say:** "Here's the puzzle that motivated this research. We have robust data showing that remote workers are simultaneously happier AND lonelier. These aren't contradictory findings — they're incomplete ones. Something is mediating this relationship, and existing literature hasn't adequately identified what."

*💡 Pause after this slide. Let the contradiction sink in.*...`,
    proTips: [
      "Put your key message on slide 2, not slide 15 — front-load the important stuff",
      "Maximum 6 words per bullet point on slides — you are the presentation, not the slides",
      "Practice with a timer 3 times minimum — if you're over time, cut content, don't talk faster",
      "Record yourself presenting and watch it back — painful but invaluable",
    ],
    relatedPromptIds: ["16", "38", "33"],
  },
  {
    id: "36",
    slug: "group-project-coordinator",
    title: "Group Project Coordinator & Manager",
    description: "Plan, organise, and manage group projects with clear task delegation, communication protocols, and conflict resolution strategies.",
    prompt: `Act as a project management coach. Help me coordinate a group project effectively.

**Project Details:**
- Assignment: [ASSIGNMENT]
- Team size: [SIZE]
- Duration: [DURATION]
- Deliverables: [DELIVERABLES]
- Grading: [GRADING — individual, group, mixed]
- Known challenges: [CHALLENGES — remote team, different schedules, free riders, etc.]

**Create:**

## 1. PROJECT KICKOFF PLAN
- First meeting agenda (30 minutes max)
- Team skills audit template
- Role assignment framework
- Communication channel setup

## 2. TASK BREAKDOWN
- Work breakdown structure (WBS)
- Task assignments based on skills/interests
- Dependencies and critical path
- Individual vs. collaborative tasks

## 3. TIMELINE & MILESTONES
- Week-by-week plan with specific deliverables
- Internal deadlines (before the real ones)
- Integration/review sessions
- Buffer time for revisions

## 4. COMMUNICATION PROTOCOL
- Which tool for what (WhatsApp for quick questions, Google Docs for drafts, etc.)
- Meeting frequency and format
- How to flag issues early
- Decision-making process

## 5. QUALITY CONTROL
- Peer review process for each section
- Consistency checklist (formatting, tone, citations)
- Final integration plan
- Proofreading workflow

## 6. HANDLING PROBLEMS
- What to do when someone isn't contributing
- How to resolve disagreements
- When to escalate to the professor
- Scripts for difficult conversations`,
    platforms: ["chatgpt", "claude"],
    category: "education",
    subcategory: "Group Work",
    tags: ["group-project", "teamwork", "management", "collaboration"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[ASSIGNMENT]: 5,000-word group report on digital transformation in healthcare
[SIZE]: 4 people
[DURATION]: 6 weeks
[CHALLENGES]: 2 team members are in different time zones, one person consistently does less work`,
    exampleOutput: `## KICKOFF MEETING AGENDA (30 min)

1. **Introductions & strengths audit** (5 min)
   - Each person: "I'm strongest at ___ and weakest at ___"
   
2. **Understand the brief** (5 min)
   - Read marking criteria together
   - Clarify ambiguities before starting

3. **Role assignment** (10 min)
   | Role | Person | Responsibility |
   |------|--------|---------------|
   | Project Lead | [Name] | Timeline, meetings, integration |
   | Research Lead | [Name] | Source quality, literature search |
   | Editor | [Name] | Consistency, formatting, proofread |
   | Analyst | [Name] | Data, charts, evidence |

4. **Communication & tools** (5 min)
   - WhatsApp group: quick questions only
   - Google Docs: all writing (suggest mode, comment don't delete)
   - Weekly 30-min check-in: [day/time that works for all time zones]

5. **Timeline agreement** (5 min)
   - Internal deadline: 3 days before submission
   - "If you'll miss a deadline, flag it 48 hours early — no judgment"

## HANDLING THE FREE RIDER

**Week 2 — soft accountability:**
"Hey [Name], just checking in — are you on track for [task] by Friday?"

**Week 3 — direct conversation:**
"I've noticed [task] isn't progressing. Is everything OK? Do you need support or a different task?"

**Week 4 — formal flag:**
If no improvement, email the professor: "We've attempted to resolve this within the team through [actions taken]..."`,
    proTips: [
      "Set internal deadlines 3 days before the real one — someone will always be late",
      "Use Google Docs with 'suggesting' mode so nothing gets deleted without discussion",
      "Document individual contributions from day 1 — essential if grading disputes arise",
      "The project lead role isn't about doing the most work — it's about keeping everyone unblocked",
    ],
    relatedPromptIds: ["35", "44", "37"],
  },
  {
    id: "37",
    slug: "essay-structure-builder",
    title: "Academic Essay Structure Builder",
    description: "Build a clear, well-argued essay structure with thesis statement, topic sentences, and logical flow before you start writing.",
    prompt: `Act as an academic writing tutor. Help me structure a strong essay.

**Essay Details:**
- Topic/question: [TOPIC]
- Type: [TYPE — argumentative, analytical, comparative, reflective]
- Word count: [WORD_COUNT]
- Level: [LEVEL — undergraduate, master's, PhD]
- Field: [FIELD]
- Key sources: [SOURCES] (if any)

**Provide:**

## 1. THESIS STATEMENT
- 3 versions: safe, moderate, bold
- Which one to choose and why
- How to refine it after research

## 2. ESSAY OUTLINE
For each section:
- **Topic sentence** (first sentence of each paragraph)
- **Key argument** (what this paragraph proves)
- **Evidence needed** (type of support required)
- **Transition to next paragraph**

## 3. ARGUMENT MAP
- Main claim → supporting claims → evidence
- Counter-arguments and how to address them
- Logical flow diagram (text-based)

## 4. INTRODUCTION TEMPLATE
- Hook → context → problem → thesis → roadmap

## 5. CONCLUSION TEMPLATE
- Restate thesis (different words) → synthesise → implications → final thought

## 6. COMMON PITFALLS FOR THIS ESSAY TYPE
- What markers typically penalise
- How to show critical thinking, not just description
- Word count distribution (intro 10%, body 80%, conclusion 10%)`,
    platforms: ["chatgpt", "claude"],
    category: "academic-writing",
    subcategory: "Essays",
    tags: ["essay", "structure", "argument", "academic-writing"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[TOPIC]: "To what extent has social media changed political participation among young adults?"
[TYPE]: Argumentative
[WORD_COUNT]: 3,000
[LEVEL]: Master's
[FIELD]: Political Science`,
    exampleOutput: `## THESIS STATEMENTS

**Safe:** "Social media has significantly changed political participation among young adults by lowering barriers to engagement while simultaneously raising questions about the depth and impact of that participation."

**Moderate:** "While social media has democratised access to political participation, its primary impact has been to shift the *form* rather than the *depth* of young adult engagement — creating a new category of low-cost, high-visibility 'slacktivism' that supplements rather than replaces traditional political action."

**Bold:** "Social media has fundamentally restructured political participation among young adults, creating a new political repertoire where online and offline actions are inseparable — rendering the 'slacktivism' critique obsolete."

💡 **Recommendation:** Go with the **moderate** thesis. It makes a clear argument (form over depth) that you can support with evidence, while acknowledging complexity. The bold thesis requires empirical evidence that may be hard to source for a 3,000-word essay.

## ESSAY OUTLINE

**Para 1: Introduction** (300 words)
Topic sentence: "The Arab Spring of 2011 marked the moment political commentators could no longer dismiss social media as trivial to democratic processes..."
→ Hook with specific event → define key terms → state thesis → preview argument structure...`,
    proTips: [
      "Write your thesis statement BEFORE you start reading — it gives your reading direction and purpose",
      "Every paragraph should begin with a topic sentence that could stand alone as a mini-argument",
      "The 'so what?' test: after every paragraph, ask 'why does this matter to my thesis?'",
      "Don't just describe what scholars say — analyse, compare, and evaluate their arguments",
    ],
    relatedPromptIds: ["11", "12", "15"],
  },

  // ═══════════════════════════════════════════════════════════════
  // CONTENT CREATION (3 prompts)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "38",
    slug: "academic-blog-post-writer",
    title: "Academic Blog Post & Thought Leadership",
    description: "Transform your research or academic expertise into engaging blog posts for personal websites, Medium, or academic blogs.",
    prompt: `Act as a science communicator who translates academic research into engaging public content.

Write a blog post based on:

**Content Details:**
- Topic: [TOPIC]
- Source: [SOURCE — my thesis, a paper I read, course content, personal experience]
- Target audience: [AUDIENCE — general public, industry professionals, fellow students]
- Platform: [PLATFORM — personal blog, Medium, LinkedIn, academic blog]
- Length: [LENGTH — 500, 1000, 1500 words]

**Structure:**

## 1. HEADLINE OPTIONS (5 versions)
- Curiosity-driven
- Data-driven
- Contrarian
- Question-based
- "How-to" format

## 2. THE POST
- **Hook** (first 2 sentences — must make reader continue)
- **The Problem/Question** (why should anyone care?)
- **Background** (accessible context — no jargon without explanation)
- **Key Insight** (the actual value of the post)
- **Evidence** (simplified but accurate data/examples)
- **Practical Takeaway** (what the reader can do with this information)
- **Call to Action** (engage, share, discuss)

## 3. SEO ELEMENTS
- Meta description (160 characters)
- 5-7 tags/keywords
- Internal link opportunities
- Suggested social media snippet

**Rules:**
- No academic jargon without immediate plain-English translation
- Use "you" and "we" — not "one" or "the reader"
- Include at least one surprising fact or counterintuitive insight
- Every paragraph earns the next paragraph`,
    platforms: ["chatgpt", "claude"],
    category: "content-creation",
    subcategory: "Blogging",
    tags: ["blog", "writing", "thought-leadership", "communication"],
    complexity: "beginner",
    popularity: 3,
    exampleInput: `[TOPIC]: My thesis finding that video lecture speed doesn't affect learning outcomes
[AUDIENCE]: Fellow students and educators
[PLATFORM]: Medium
[LENGTH]: 1000 words`,
    exampleOutput: `## HEADLINE OPTIONS

1. "I Watched 200 Hours of Lectures at 2x Speed for My Thesis. Here's What the Data Actually Shows."
2. "Playback Speed Doesn't Affect Your Grades — But Something Else Does"
3. "The 2x Speed Debate Is Missing the Point Entirely"

## THE POST

**I Watched 200 Hours of Lectures at 2x Speed for My Thesis. Here's What the Data Actually Shows.**

If you watch lectures at 2x speed, your professor probably thinks you're not learning anything. If you watch at 1x speed, your friends think you're wasting time. Both are wrong — but for interesting reasons.

For my MSc thesis at [University], I ran a controlled experiment with 347 students watching the same lecture content at 1x, 1.5x, and 2x speed. They took the same comprehension test afterward. The result? No significant difference in scores across all three groups (p = 0.43).

Before you feel vindicated, there's a catch...`,
    proTips: [
      "The headline does 80% of the work — spend real time on it",
      "Lead with your most surprising finding, not your methodology",
      "Write at a reading level 2-3 grades below your audience — clarity is not dumbing down",
      "Post on LinkedIn and Medium simultaneously — different audiences, double the reach",
    ],
    relatedPromptIds: ["4", "35"],
  },
  {
    id: "39",
    slug: "personal-statement-writer",
    title: "Personal Statement & Motivation Letter",
    description: "Write compelling personal statements for master's, PhD, or scholarship applications that stand out from the stack.",
    prompt: `Act as a graduate admissions consultant. Write a personal statement for:

**Application Details:**
- Applying to: [PROGRAMME]
- University: [UNIVERSITY]
- Word limit: [LIMIT]
- Specific prompts/questions: [QUESTIONS]

**My Background:**
- Current education: [EDUCATION]
- Relevant experience: [EXPERIENCE]
- Research interests: [INTERESTS]
- Why this programme: [MOTIVATION]
- Career goals: [GOALS]
- Unique aspects of my story: [UNIQUE]
- Challenges overcome: [CHALLENGES]

**Structure:**

## 1. OPENING (Hook)
- A moment, experience, or question that sparked your interest
- NOT "I have always been passionate about..."

## 2. ACADEMIC JOURNEY
- How your studies led you to this field
- Key courses, projects, or moments that shaped your direction
- Intellectual growth arc

## 3. PRACTICAL EXPERIENCE
- Relevant work, research, or extracurricular experience
- What you learned and how it prepared you
- Specific contributions and achievements

## 4. WHY THIS PROGRAMME
- Specific features that attract you (courses, faculty, research groups)
- How it fits your trajectory
- What you'll bring to the cohort

## 5. FUTURE VISION
- Career goals (realistic and specific)
- How this programme is the bridge
- Long-term impact you want to make

**Rules:**
- Show, don't tell: "I led a team of 5" not "I have strong leadership skills"
- No clichés: no "passion," "dream," "since childhood"
- Specific > generic: name courses, professors, projects
- Honest about challenges but focused on growth`,
    platforms: ["chatgpt", "claude"],
    category: "content-creation",
    subcategory: "Applications",
    tags: ["personal-statement", "application", "motivation", "admissions"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `[PROGRAMME]: MSc Artificial Intelligence
[UNIVERSITY]: University of Amsterdam
[LIMIT]: 1000 words
[MOTIVATION]: Want to work on AI safety research
[UNIQUE]: Self-taught programmer from a humanities background`,
    exampleOutput: `## OPENING

The first line of code I ever wrote was a Python script to count metaphors in Shakespeare's sonnets. I was a third-year English Literature student who'd just discovered that the "distant reading" approach Franco Moretti described — using computation to analyse thousands of texts simultaneously — could answer questions I'd been wrestling with using only close reading and intuition. That script was terrible. It miscounted "winter" as a metaphor every time. But it changed the trajectory of my career.

## ACADEMIC JOURNEY

My unconventional path from literature to computer science wasn't a pivot — it was an expansion. My BA in English Literature at the University of Leeds taught me to think critically about language, meaning, and interpretation. When I encountered natural language processing through an elective module, I realised these were precisely the challenges that computational linguistics was trying to formalise...`,
    proTips: [
      "Open with a specific moment, not a general statement — admissions readers process hundreds of essays",
      "Name specific courses, professors, or research groups at the target university — it shows real research",
      "Your 'weakness' (non-traditional background, gap year, career change) is often your strongest differentiator",
      "Have 3 different people read your draft — an academic, a friend, and someone who doesn't know you",
    ],
    relatedPromptIds: ["25", "1", "19"],
  },
  {
    id: "40",
    slug: "creative-short-story-writer",
    title: "Creative Short Story from Constraints",
    description: "Generate literary short stories from specific creative constraints for creative writing courses or personal projects.",
    prompt: `Act as an award-winning short fiction writer.

Write a short story with these constraints:

**Parameters:**
- Genre: [GENRE]
- Setting: [SETTING]
- Point of view: [POV]
- Emotional arc: [ARC]
- Word count: ~[COUNT]

**Required elements:**
- [ELEMENT_1]
- [ELEMENT_2]
- [ELEMENT_3]

**Rules:**
- Opening line must [CONSTRAINT]
- Include one plot twist
- End with [ENDING_TYPE]
- Vivid sensory details (3+ senses per scene)
- Dialogue reveals character
- Show, don't tell emotions
- No clichés`,
    platforms: ["claude", "chatgpt"],
    category: "content-creation",
    subcategory: "Creative Writing",
    tags: ["fiction", "storytelling", "creative-writing", "short-story"],
    complexity: "beginner",
    popularity: 3,
    exampleInput: `[GENRE]: Literary thriller
[SETTING]: A university library at closing time
[POV]: Second person
[ARC]: Curiosity → obsession → devastating realization
[ELEMENT_1]: A handwritten margin note
[ELEMENT_2]: The smell of old paper
[ELEMENT_3]: A deadline`,
    exampleOutput: `You find the note on a Tuesday, scratched in pencil on page 247 of a book nobody has checked out since 2011. The handwriting is cramped, urgent — someone leaning hard into the page. "If you're reading this," it says, "check the card catalogue. Third drawer. Before they digitise it."

The library smells the way it always does at closing time — old paper and floor polish and the faint metallic tang of the heating system kicking on. The overhead lights flicker their five-minute warning...`,
    proTips: [
      "Constraints breed creativity — the more specific your rules, the more original the output",
      "Claude tends to produce more literary prose; ChatGPT is stronger at plot",
      "Ask for 'revision focusing on prose quality' as a follow-up",
      "Try 'the same story from a different POV' for interesting exercises",
    ],
    relatedPromptIds: ["38"],
  },

  // ═══════════════════════════════════════════════════════════════
  // DATA ANALYSIS (4 prompts)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "41",
    slug: "statistical-test-selector",
    title: "Statistical Test Selector & Guide",
    description: "Determine the right statistical test for your research data, with step-by-step instructions and interpretation guidance.",
    prompt: `Act as a statistics professor. Help me choose and run the right statistical test.

**My Data:**
- Research question: [QUESTION]
- Variables:
  - Independent variable(s): [IV] — type: [NOMINAL/ORDINAL/INTERVAL/RATIO]
  - Dependent variable(s): [DV] — type: [NOMINAL/ORDINAL/INTERVAL/RATIO]
- Sample size: [N]
- Number of groups: [GROUPS]
- Paired or independent: [PAIRED/INDEPENDENT]
- Data distribution: [NORMAL/NON-NORMAL/UNKNOWN]

**Provide:**

## 1. RECOMMENDED TEST
- Name of the test
- Why it's appropriate for your data
- Assumptions to check first

## 2. ASSUMPTION CHECKS
- Step-by-step for each assumption
- What to do if assumptions are violated
- Alternative tests if they are

## 3. HOW TO RUN IT
- In SPSS: Click-by-click instructions
- In R: Complete code with comments
- In Python: Complete code with comments

## 4. HOW TO INTERPRET RESULTS
- What each number in the output means
- How to determine significance
- Effect size calculation and interpretation
- Confidence intervals

## 5. HOW TO REPORT IT
- APA format reporting template
- Example write-up paragraph
- Table format for results

## 6. DECISION TREE
- Visual decision tree for related tests
- When to use parametric vs. non-parametric
- Common mistakes for this test`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "data-analysis",
    subcategory: "Statistics",
    tags: ["statistics", "hypothesis-testing", "data-analysis", "research"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `[QUESTION]: Is there a difference in exam scores between students who used flashcards vs. those who didn't?
[IV]: Study method (flashcards vs. no flashcards) — nominal
[DV]: Exam score — ratio
[N]: 60 (30 per group)
[PAIRED]: Independent`,
    exampleOutput: `## RECOMMENDED TEST: Independent Samples t-test

**Why:** You're comparing means of one continuous DV between two independent groups. Classic t-test territory.

## ASSUMPTION CHECKS

1. **Independence:** ✅ Different students in each group
2. **Normality:** Run Shapiro-Wilk test for each group
   - R: \`shapiro.test(group1$score)\`
   - If p > 0.05 → normal ✅
   - If p < 0.05 → use Mann-Whitney U instead
3. **Homogeneity of variance:** Levene's test
   - R: \`leveneTest(score ~ method, data = df)\`
   - If violated → use Welch's t-test (default in R)

## R CODE
\`\`\`r
# Run independent samples t-test (Welch's by default)
result <- t.test(score ~ study_method, data = df)
print(result)

# Effect size (Cohen's d)
library(effectsize)
cohens_d(score ~ study_method, data = df)
\`\`\`

## APA REPORTING
"An independent samples t-test revealed a significant difference in exam scores between the flashcard group (M = 74.2, SD = 8.3) and the control group (M = 68.7, SD = 9.1), t(58) = 2.41, p = .019, d = 0.62, 95% CI [0.92, 10.08]."...`,
    proTips: [
      "Always check assumptions BEFORE running the test — violated assumptions = invalid results",
      "Report effect size, not just p-values — a significant result can still be trivially small",
      "With n < 30 per group, consider non-parametric alternatives as a sensitivity check",
      "If you're unsure, run both parametric and non-parametric — if they agree, you're fine",
    ],
    relatedPromptIds: ["42", "20", "13"],
  },
  {
    id: "42",
    slug: "data-visualization-recommender",
    title: "Data Visualisation Recommender & Creator",
    description: "Choose the right chart type for your data and get code to create publication-quality visualisations for your thesis or presentation.",
    prompt: `Act as a data visualisation expert. Help me visualise my data effectively.

**My Data:**
- What I'm showing: [MESSAGE — the story or comparison]
- Data type: [TYPE — time series, comparison, distribution, correlation, composition, geographic]
- Variables: [VARIABLES]
- Audience: [AUDIENCE — thesis examiner, conference, stakeholder presentation]
- Tool preference: [TOOL — Python/R/Excel/Tableau]

**Provide:**

## 1. CHART RECOMMENDATION
- Best chart type and why
- 2 alternative options with trade-offs
- What NOT to use (and why it would mislead)

## 2. DESIGN SPECIFICATIONS
- Colour palette (accessible, print-friendly)
- Axis labels and formatting
- Title and subtitle text
- Legend placement
- Annotation suggestions

## 3. COMPLETE CODE
- Production-ready code in [TOOL]
- Publication-quality settings (DPI, font sizes, margins)
- Colour-blind friendly palette
- Export instructions

## 4. COMMON MISTAKES
- Chart junk to avoid
- Misleading scale issues
- Overplotting solutions
- When to use log scale

## 5. INTERPRETATION GUIDE
- What to say about this chart in your thesis/paper
- How to describe trends, patterns, and outliers
- APA/academic reporting standards for figures`,
    platforms: ["chatgpt", "claude", "copilot"],
    category: "data-analysis",
    subcategory: "Visualisation",
    tags: ["visualisation", "charts", "data", "matplotlib"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[MESSAGE]: Show how student satisfaction scores differ across 5 departments
[TYPE]: Comparison
[VARIABLES]: Department (categorical), satisfaction score (1-7 Likert)
[AUDIENCE]: Thesis examiner
[TOOL]: Python (matplotlib + seaborn)`,
    exampleOutput: `## RECOMMENDATION: Box Plot with Overlaid Strip Plot

**Why:** Shows distribution shape, median, outliers, AND individual data points. For 5 groups with Likert data, this gives the examiner everything in one glance.

**Not a bar chart:** Bar charts hide the distribution — your examiner will ask "what about variance?"

## PYTHON CODE

\`\`\`python
import matplotlib.pyplot as plt
import seaborn as sns

fig, ax = plt.subplots(figsize=(8, 5), dpi=300)

# Colour-blind friendly palette
palette = ['#4477AA', '#EE6677', '#228833', '#CCBB44', '#66CCEE']

sns.boxplot(data=df, x='department', y='satisfaction', 
            palette=palette, width=0.5, ax=ax)
sns.stripplot(data=df, x='department', y='satisfaction',
              color='black', alpha=0.3, size=3, jitter=True, ax=ax)

ax.set_xlabel('Department', fontsize=12)
ax.set_ylabel('Satisfaction Score (1-7)', fontsize=12)
ax.set_title('Student Satisfaction by Department', fontsize=14, fontweight='bold')

plt.tight_layout()
plt.savefig('satisfaction_boxplot.png', dpi=300, bbox_inches='tight')
\`\`\`...`,
    proTips: [
      "Always label your axes — no exceptions, even in drafts",
      "Use a maximum of 5-7 colours in any single chart — more than that is noise",
      "Test your chart in greyscale (print-friendly) and with a colour-blindness simulator",
      "The title should state the FINDING, not just the topic: 'Engineering students report lower satisfaction' not 'Satisfaction by department'",
    ],
    relatedPromptIds: ["41", "43"],
  },
  {
    id: "43",
    slug: "dataset-explorer-analyzer",
    title: "Dataset Explorer & EDA Guide",
    description: "Conduct exploratory data analysis on your dataset with data quality checks, pattern identification, and statistical summaries.",
    prompt: `Act as a senior data scientist. Guide me through exploratory data analysis.

**Dataset:**
- Description: [DESCRIPTION]
- Columns: [COLUMNS]
- Row count: [ROWS]
- Analysis goal: [GOAL]
- Tool: [TOOL — Python/R]

**Sample data:**
[PASTE_SAMPLE]

**Provide a step-by-step EDA:**

## 1. DATA QUALITY AUDIT
- Missing values per column
- Duplicates check
- Data type validation
- Outlier detection method

## 2. UNIVARIATE ANALYSIS
- Summary statistics for each variable
- Distribution shape (skewness, kurtosis)
- Appropriate visualisation for each

## 3. BIVARIATE ANALYSIS
- Key relationships to explore
- Correlation matrix
- Cross-tabulations for categorical variables

## 4. KEY FINDINGS
- Top 5 insights from the data
- Surprising patterns
- Data quality concerns

## 5. COMPLETE CODE
- End-to-end EDA code
- With comments explaining each step
- Publication-quality visualisations

## 6. NEXT STEPS
- What analysis should follow EDA
- Feature engineering suggestions
- Hypothesis recommendations`,
    platforms: ["chatgpt", "claude", "copilot"],
    category: "data-analysis",
    subcategory: "Exploratory Analysis",
    tags: ["EDA", "data-analysis", "statistics", "Python"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[DESCRIPTION]: Survey responses about study habits and academic performance
[COLUMNS]: student_id, age, gender, study_hours_weekly, sleep_hours, gpa, anxiety_level, social_media_hours
[ROWS]: 500
[GOAL]: Identify factors most strongly associated with GPA`,
    exampleOutput: `## 1. DATA QUALITY AUDIT

\`\`\`python
import pandas as pd
import numpy as np

# Quick overview
print(f"Shape: {df.shape}")
print(f"\\nMissing values:\\n{df.isnull().sum()}")
print(f"\\nDuplicates: {df.duplicated().sum()}")
print(f"\\nData types:\\n{df.dtypes}")

# Outlier detection (IQR method)
for col in df.select_dtypes(include=[np.number]):
    Q1, Q3 = df[col].quantile([0.25, 0.75])
    IQR = Q3 - Q1
    outliers = ((df[col] < Q1 - 1.5*IQR) | (df[col] > Q3 + 1.5*IQR)).sum()
    if outliers > 0:
        print(f"⚠️ {col}: {outliers} outliers detected")
\`\`\`

## KEY FINDINGS (example)

1. 📊 **Study hours and GPA** show a moderate positive correlation (r = 0.47, p < .001), but with diminishing returns above 25 hours/week
2. 😴 **Sleep hours** has a stronger relationship with GPA (r = 0.52) than study hours — students sleeping 7-8 hours outperform those sleeping 5-6 hours by 0.4 GPA points on average
3. 📱 **Social media usage** shows a weak negative correlation (r = -0.21), suggesting it's not the productivity killer many assume...`,
    proTips: [
      "Always start with data quality — 'garbage in, garbage out' applies to every analysis",
      "Don't just compute correlations — visualise them. A scatter plot reveals what r can't",
      "Report both statistical significance AND practical significance (effect size)",
      "Document your EDA decisions — your thesis examiner will ask why you handled outliers a certain way",
    ],
    relatedPromptIds: ["41", "42"],
  },
  {
    id: "44",
    slug: "excel-formula-solver",
    title: "Excel / Google Sheets Formula Builder",
    description: "Get the right formula for any spreadsheet task with step-by-step explanations, from basic lookups to complex data analysis.",
    prompt: `Act as an Excel/Sheets expert. Help me build a formula.

**What I need to do:**
[DESCRIBE_TASK]

**My data looks like:**
[DESCRIBE_DATA_STRUCTURE]

**Tool:** [EXCEL/GOOGLE_SHEETS]

**Provide:**

## 1. THE FORMULA
- The exact formula to paste
- Which cell to put it in
- How to apply it to other cells

## 2. BREAKDOWN
- Explain each function in the formula
- What each argument does
- Why this approach (vs. alternatives)

## 3. COMMON ERRORS
- #REF!, #N/A, #VALUE! explanations
- How to debug if it doesn't work
- Edge cases to watch for

## 4. ALTERNATIVE APPROACHES
- Simpler version (if accuracy trade-off is OK)
- More robust version
- Pivot table approach (if applicable)

## 5. TIPS
- Keyboard shortcuts for this workflow
- How to make it dynamic (auto-update)
- How to make it look professional (formatting)`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "data-analysis",
    subcategory: "Spreadsheets",
    tags: ["Excel", "Google-Sheets", "formulas", "spreadsheets"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[TASK]: Calculate the average grade for each student across multiple assignments, but skip any cells marked "N/A" or left blank
[DATA]: Columns A (student name), B-F (5 assignment grades, some empty or "N/A")
[TOOL]: Google Sheets`,
    exampleOutput: `## THE FORMULA (put in cell G2)

\`\`\`
=AVERAGEIF(B2:F2,"<>"&"N/A")
\`\`\`

Wait — this won't handle blank cells properly. Use this instead:

\`\`\`
=AVERAGEIFS(B2:F2,B2:F2,"<>",B2:F2,"<>N/A")
\`\`\`

## BREAKDOWN
- \`AVERAGEIFS\` — averages cells that meet multiple criteria
- \`B2:F2\` (first argument) — the range to average
- \`B2:F2,"<>"\` — criterion 1: cell is not blank
- \`B2:F2,"<>N/A"\` — criterion 2: cell doesn't contain "N/A"

## DRAG DOWN
Select G2, drag the fill handle down to G[last row]. The row references auto-adjust.

## COMMON ERROR
If you see \`#DIV/0!\` — that student has NO valid grades (all blank or N/A). Wrap it:
\`\`\`
=IFERROR(AVERAGEIFS(B2:F2,B2:F2,"<>",B2:F2,"<>N/A"), "No grades")
\`\`\``,
    proTips: [
      "Always wrap complex formulas in IFERROR() for clean output",
      "Use named ranges instead of cell references for readable formulas",
      "XLOOKUP has replaced VLOOKUP in modern Excel — use it",
      "For complex analysis, consider whether a pivot table would be simpler than a formula",
    ],
    relatedPromptIds: ["43", "41"],
  },

  // ═══════════════════════════════════════════════════════════════
  // BUSINESS STRATEGY (3 prompts)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "45",
    slug: "business-plan-student-startup",
    title: "Student Startup Business Plan",
    description: "Create a lean business plan for a student startup idea, covering market validation, business model, and pitch-ready financials.",
    prompt: `Act as a startup mentor at a university incubator. Help me create a business plan for my student startup.

**My Idea:**
- What it does: [IDEA]
- Problem it solves: [PROBLEM]
- Target customer: [CUSTOMER]
- How I'll make money: [REVENUE_MODEL]
- My background: [BACKGROUND]
- Resources available: [RESOURCES — university support, funding, team]

**Create a lean business plan:**

## 1. EXECUTIVE SUMMARY (1 page)
- The problem, solution, and opportunity in plain English

## 2. PROBLEM VALIDATION
- Evidence the problem exists
- How to validate before building
- 5 customer interview questions to ask

## 3. SOLUTION & VALUE PROPOSITION
- What you're building (MVP scope)
- Why customers would pay for this
- Competitive advantage

## 4. MARKET ANALYSIS
- Target market size (TAM, SAM, SOM)
- Competitor overview
- Your positioning

## 5. BUSINESS MODEL CANVAS
- All 9 blocks filled in
- Revenue streams with pricing strategy

## 6. GO-TO-MARKET STRATEGY
- First 100 customers plan
- Marketing channels (student budget)
- Partnership opportunities

## 7. FINANCIAL PROJECTIONS (12 months)
- Revenue forecast (conservative)
- Cost structure
- Break-even analysis
- Funding needed

## 8. TEAM & NEXT STEPS
- What roles you need
- 90-day action plan
- Key milestones`,
    platforms: ["chatgpt", "claude"],
    category: "business-strategy",
    subcategory: "Startups",
    tags: ["startup", "business-plan", "entrepreneurship", "student"],
    complexity: "intermediate",
    popularity: 3,
    exampleInput: `[IDEA]: An app connecting international students with local families for weekend meals (cultural exchange + home-cooked food)
[PROBLEM]: International students are lonely and miss home cooking; local families want cultural exchange
[REVENUE_MODEL]: Subscription (students) + listing fee (families)`,
    exampleOutput: `## EXECUTIVE SUMMARY

HomePlate connects international university students craving home-cooked meals with local families seeking cultural exchange. For £15/month, students access weekend dinner invitations; families list for free and receive £8 per guest to cover food costs. The platform solves two problems simultaneously: student isolation (affecting 42% of international students, UKCISA 2023) and the growing desire for authentic cross-cultural connection.

## PROBLEM VALIDATION

Before building anything, validate these assumptions:
1. **Students will pay for this** → Survey 50 international students: "Would you pay £15/month for weekly home-cooked dinners with a local family?"
2. **Families will host** → Interview 20 families near campus: "Would you host 2 international students for dinner once a month?"
3. **It's not just a nice idea** → Run a manual pilot: organise 5 dinners via WhatsApp, measure satisfaction

## 5 CUSTOMER INTERVIEW QUESTIONS
1. "Tell me about the last time you felt homesick. What triggered it?"
2. "How often do you eat a home-cooked meal? Where do you get it?"...`,
    proTips: [
      "Validate before building — talk to 20 potential customers before writing a line of code",
      "Your university probably has a startup incubator with free mentoring and small grants — use it",
      "A good pitch deck is 10-12 slides, not 30. Focus on problem, solution, market, traction",
      "Start with the smallest possible version — a WhatsApp group can be your MVP",
    ],
    relatedPromptIds: ["46", "24"],
  },
  {
    id: "46",
    slug: "swot-analysis-coursework",
    title: "SWOT Analysis for Coursework",
    description: "Generate structured SWOT analyses for business courses, case studies, and strategic management assignments.",
    prompt: `Act as a management consultant. Create a SWOT analysis for my coursework.

**Case Details:**
- Company/organisation: [COMPANY]
- Industry: [INDUSTRY]
- Context: [CONTEXT — assignment question or case study brief]
- Focus area: [FOCUS — overall strategy, market entry, product launch, etc.]

**Provide:**

## STRENGTHS (5-7, ranked)
- Specific, evidence-based points
- How each can be leveraged

## WEAKNESSES (5-7, ranked)
- Impact assessment for each
- Mitigation strategies

## OPPORTUNITIES (5-7)
- External market opportunities
- Timing and feasibility

## THREATS (5-7)
- Probability and severity rating
- Defensive strategies

## STRATEGIC SYNTHESIS
- S-O strategies (use strengths to capture opportunities)
- W-T risks (weaknesses that amplify threats)
- Top 3 strategic recommendations
- Implementation priorities`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "business-strategy",
    subcategory: "Strategic Analysis",
    tags: ["SWOT", "strategy", "analysis", "coursework"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[COMPANY]: Netflix
[INDUSTRY]: Streaming entertainment
[CONTEXT]: Strategic management assignment — analyse Netflix's position in 2024
[FOCUS]: Competitive strategy amid increasing competition`,
    exampleOutput: `## STRENGTHS

**S1: Unmatched global subscriber base — 260M+ subscribers (Critical)**
Netflix's first-mover advantage in streaming has created the largest global content distribution network. This scale enables content investment that competitors cannot match on a per-subscriber cost basis.

**S2: Data-driven content commissioning (Critical)**
Netflix's recommendation algorithm and viewing data inform content decisions — "House of Cards" was greenlit based on data showing overlap between Kevin Spacey fans, David Fincher fans, and political drama viewers. This reduces the hit-or-miss nature of traditional entertainment commissioning.

**S3: Brand recognition as the verb for streaming (Important)**
"Netflix and chill" entered the cultural lexicon — the brand IS the category. Similar to "Google" for search.

## WEAKNESSES

**W1: Rising content costs with diminishing subscriber growth (Urgent)**
Content spending reached $17B in 2023, but net subscriber additions have slowed from 37M (2020) to 13M (2023)...`,
    proTips: [
      "Use specific numbers and dates — 'strong brand' is weak; '260M subscribers and 93% brand recognition' is strong",
      "Strengths and weaknesses are INTERNAL (the company controls them); opportunities and threats are EXTERNAL",
      "Your marker wants analysis, not just lists — explain WHY each point matters strategically",
      "Follow up with a TOWS matrix to show sophisticated cross-quadrant thinking",
    ],
    relatedPromptIds: ["45", "24"],
  },
  {
    id: "47",
    slug: "market-research-course-project",
    title: "Market Research Framework for Course Projects",
    description: "Conduct structured market research for business courses, feasibility studies, or entrepreneurship assignments.",
    prompt: `Act as a market research analyst. Help me conduct research for my course project.

**Project Details:**
- What I'm researching: [TOPIC]
- Course: [COURSE]
- Deliverable: [DELIVERABLE — report, presentation, business plan]
- Constraints: [CONSTRAINTS — budget, time, access]

**Provide a research framework:**

## 1. SECONDARY RESEARCH GUIDE
- Free data sources relevant to [TOPIC]
- Government databases (ONS, Eurostat, BLS)
- Industry reports (how to access free versions)
- Academic databases to search
- Key search terms to use

## 2. PRIMARY RESEARCH PLAN
- Survey design suggestions (5-10 key questions)
- Interview guide (if applicable)
- Sample size recommendations
- Distribution strategy (free tools)

## 3. COMPETITOR ANALYSIS TEMPLATE
- Who to analyse (direct, indirect, potential)
- What to compare (pricing, features, positioning)
- How to present findings

## 4. MARKET SIZING
- Top-down and bottom-up approaches
- Step-by-step estimation
- How to present with appropriate caveats

## 5. PRESENTATION FORMAT
- How to structure findings for [DELIVERABLE]
- Key charts and visualisations needed
- Executive summary template`,
    platforms: ["chatgpt", "perplexity", "gemini"],
    category: "business-strategy",
    subcategory: "Market Research",
    tags: ["market-research", "analysis", "coursework", "business"],
    complexity: "beginner",
    popularity: 3,
    exampleInput: `[TOPIC]: Feasibility of a student-focused meal prep delivery service in Manchester
[COURSE]: MSc Entrepreneurship
[DELIVERABLE]: 3,000-word feasibility report + 10-minute presentation`,
    exampleOutput: `## FREE DATA SOURCES

| Source | What You'll Find | URL |
|--------|-----------------|-----|
| ONS | Manchester demographics, student population, spending data | ons.gov.uk |
| HESA | University enrollment numbers by city | hesa.ac.uk |
| Mintel (via university library) | UK meal kit market reports | Ask your librarian |
| Statista (free tier) | Food delivery market size, trends | statista.com |
| Companies House | Competitor financial data | companieshouse.gov.uk |
| Just Eat/Deliveroo blogs | Industry trend articles | Various |

## MARKET SIZING (Bottom-up)

1. Manchester student population: ~100,000
2. % who live independently (not with parents): ~65% = 65,000
3. % who would consider meal prep delivery: ~25% (based on similar services) = 16,250
4. % in your price range (£30-50/week): ~40% = 6,500
5. Realistic market capture in Year 1: 3-5% = 195-325 customers
6. Average revenue per customer: £35/week × 40 weeks = £1,400/year
7. Year 1 revenue estimate: £273K - £455K...`,
    proTips: [
      "Your university library gives you free access to Mintel, IBISWorld, and Statista — use them",
      "Always present market size with your assumptions visible — markers want to see your logic",
      "Primary research (even a 50-person survey) massively strengthens a feasibility study",
      "Use Perplexity to find recent market data — it searches real-time sources",
    ],
    relatedPromptIds: ["45", "46"],
  },

  // ═══════════════════════════════════════════════════════════════
  // DESIGN (3 prompts)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "48",
    slug: "ux-research-interview-guide",
    title: "UX Research Interview Guide",
    description: "Design structured user research interview guides with proper question types, probing techniques, and analysis frameworks.",
    prompt: `Act as a UX researcher with 10+ years of experience. Create an interview guide for user research.

**Research Context:**
- Product/service: [PRODUCT]
- Research goal: [GOAL]
- Target users: [USERS]
- Number of interviews: [NUMBER]
- Duration per interview: [DURATION]

**Create:**

## 1. INTERVIEW GUIDE
- Welcome script and consent
- Warm-up questions (build rapport)
- Core questions (10-15, grouped by theme)
- Probing follow-ups for each
- Closing and thank you

## 2. QUESTION TYPES MIX
- Open-ended exploration questions
- Task-based scenario questions
- Comparison questions
- Emotional/feeling questions
- Future-state questions

## 3. DO's AND DON'Ts
- Questions to NEVER ask (leading, loaded, hypothetical)
- How to handle silence
- How to probe without leading
- Body language tips

## 4. ANALYSIS FRAMEWORK
- Note-taking template
- Affinity mapping structure
- How to identify themes
- How to present findings`,
    platforms: ["chatgpt", "claude"],
    category: "design",
    subcategory: "UX Research",
    tags: ["UX", "research", "interviews", "user-research"],
    complexity: "intermediate",
    popularity: 3,
    exampleInput: `[PRODUCT]: A university library booking system
[GOAL]: Understand pain points in finding and booking study spaces
[USERS]: Undergraduate and master's students
[NUMBER]: 8 interviews
[DURATION]: 30 minutes`,
    exampleOutput: `## INTERVIEW GUIDE

### Welcome (2 min)
"Hi [Name], thanks for taking the time. I'm researching how students find and book study spaces. There are no right or wrong answers — I'm interested in YOUR experience. This will take about 30 minutes. May I record the audio for my notes? Your responses will be anonymised."

### Warm-up (3 min)
1. "Can you tell me about your typical study routine? Where do you usually study?"
2. "How often do you study in the library versus other places?"

### Core Questions — Finding Spaces (8 min)
3. "Walk me through what happens when you want to study in the library. What's the first thing you do?"
   → Probe: "What information do you look for before going?"
   → Probe: "Has there been a time you went to the library and couldn't find a space?"

4. "How do you currently check if a study space is available?"
   → Probe: "What works well about that? What's frustrating?"

5. "Tell me about the last time you had a really frustrating experience trying to find a study space."
   → Probe: "What did you end up doing?"
   → Probe: "How did that make you feel?"...`,
    proTips: [
      "Never ask 'Would you use X?' — people are terrible at predicting their own behaviour",
      "Ask about past behaviour, not hypothetical future behaviour",
      "Silence is OK — count to 5 before jumping in with another question. People often add the best insights after a pause",
      "Record and transcribe — you'll miss nuance if you're only taking notes",
    ],
    relatedPromptIds: ["49", "20"],
  },
  {
    id: "49",
    slug: "design-portfolio-case-study",
    title: "Design Portfolio Case Study Writer",
    description: "Structure and write compelling portfolio case studies that showcase your design process, decisions, and impact.",
    prompt: `Act as a design portfolio consultant. Help me write a case study for my portfolio.

**Project Details:**
- Project name: [NAME]
- Type: [TYPE — UX, UI, product, service, graphic design]
- Duration: [DURATION]
- My role: [ROLE]
- Team: [TEAM]
- Tools: [TOOLS]

**The Project:**
- The problem: [PROBLEM]
- The user: [USER]
- My process: [PROCESS]
- Key decisions: [DECISIONS]
- Outcome: [OUTCOME]

**Structure the case study:**

## 1. HERO SECTION
- One-line hook
- Key visual/mockup description
- Role, timeline, tools

## 2. THE CHALLENGE
- What problem needed solving
- Business goals
- User needs
- Constraints

## 3. RESEARCH & DISCOVERY
- What I learned about users
- Key insights (with evidence)
- Personas or journey maps

## 4. DESIGN PROCESS
- Ideation approach
- Key design decisions and WHY
- Iterations (before → after with reasoning)
- Trade-offs I navigated

## 5. THE SOLUTION
- Final design walkthrough
- How it addresses the original problem
- Key interactions/features

## 6. IMPACT & RESULTS
- Metrics (quantified where possible)
- User feedback
- Business outcomes

## 7. REFLECTION
- What I learned
- What I'd do differently
- How this shaped my growth as a designer`,
    platforms: ["chatgpt", "claude"],
    category: "design",
    subcategory: "Portfolio",
    tags: ["portfolio", "case-study", "UX", "design"],
    complexity: "intermediate",
    popularity: 3,
    exampleInput: `[NAME]: CampusMind — a mental health check-in app for students
[TYPE]: UX/UI Design
[ROLE]: Solo designer (master's project)
[PROBLEM]: Students don't seek mental health support until crisis point
[OUTCOME]: Prototype tested with 25 students, 84% said they'd use it regularly`,
    exampleOutput: `## THE CHALLENGE

1 in 4 university students experience mental health difficulties, but only 13% access campus support services (Student Minds, 2023). The gap isn't awareness — it's friction. Booking a counselling appointment requires navigating a 5-page form, waiting 3-6 weeks, and committing to a 50-minute session. For a student who's "not sure if it's serious enough," that barrier is too high.

**The question:** How might we create a low-friction entry point that helps students check in with their mental health before reaching crisis?

## RESEARCH & DISCOVERY

I conducted 12 semi-structured interviews with students across 3 universities. Three key insights emerged:

**Insight 1: Students normalise struggling.**
"I thought everyone felt like this during exams" (P4, 2nd year). Students lack a baseline — they don't know when "normal stress" becomes something more.

**Insight 2: The label matters.**
"I don't need therapy, I just need someone to tell me if I should be worried" (P7). Students want validation, not diagnosis.

**Insight 3: Privacy is non-negotiable.**
Every participant mentioned fear of it "going on their record" or friends seeing them at the counselling centre...`,
    proTips: [
      "Lead with the problem, not the solution — hiring managers want to see how you THINK",
      "Show your messy process (sketches, failed ideas) — it's more convincing than polished finals only",
      "Include real user quotes — they add authenticity that mockup annotations can't",
      "Quantify impact wherever possible: '84% would use it regularly' beats 'users liked it'",
    ],
    relatedPromptIds: ["8", "48"],
  },
  {
    id: "50",
    slug: "ui-wireframe-specification",
    title: "UI Wireframe & Specification Writer",
    description: "Create detailed UI specifications from rough ideas, with layout descriptions, interaction patterns, and component definitions.",
    prompt: `Act as a UI/UX designer. Create a detailed specification for a screen or feature.

**Feature Details:**
- Product: [PRODUCT]
- Screen/feature: [SCREEN]
- User goal: [GOAL]
- Platform: [PLATFORM — web, iOS, Android, responsive]
- Design system: [SYSTEM — Material, iOS HIG, custom, none]

**Provide:**

## 1. LAYOUT SPECIFICATION
- Page/screen structure (header, body, footer)
- Grid system and breakpoints
- Component hierarchy
- Spacing and alignment rules

## 2. COMPONENT LIST
For each UI component:
- Component type and purpose
- Content (label text, placeholder text)
- States (default, hover, active, disabled, error, loading)
- Responsive behaviour

## 3. INTERACTION SPECIFICATION
- User flows (step by step)
- Micro-interactions (button press, form validation)
- Transitions and animations
- Error handling UX

## 4. CONTENT SPECIFICATION
- Copy for all text elements
- Error messages (helpful, not technical)
- Empty states
- Loading states

## 5. ACCESSIBILITY
- WCAG compliance notes
- Keyboard navigation
- Screen reader considerations
- Colour contrast requirements`,
    platforms: ["chatgpt", "claude", "copilot"],
    category: "design",
    subcategory: "UI Design",
    tags: ["UI", "wireframe", "specification", "design"],
    complexity: "intermediate",
    popularity: 3,
    exampleInput: `[PRODUCT]: Student peer tutoring platform
[SCREEN]: Search and book a tutoring session
[GOAL]: Find a tutor for a specific subject and book a 1-hour session
[PLATFORM]: Responsive web`,
    exampleOutput: `## LAYOUT SPECIFICATION

### Desktop (1200px+)
\`\`\`
┌─────────────────────────────────────────┐
│ Nav: Logo | Search | Profile avatar     │
├────────────┬────────────────────────────┤
│ Filters    │ Results grid (3 columns)    │
│ sidebar    │                            │
│ (240px)    │ [Tutor Card] [Tutor Card]  │
│            │ [Tutor Card] [Tutor Card]  │
│ - Subject  │                            │
│ - Day/Time │ Load more (button)         │
│ - Price    │                            │
│ - Rating   │                            │
└────────────┴────────────────────────────┘
\`\`\`

### Mobile (<768px)
- Filters collapse into a bottom sheet (triggered by filter icon)
- Results stack to single column
- Tutor cards show condensed info (name, rating, price, next available)

## TUTOR CARD COMPONENT

**Default state:**
- Profile photo (48x48, rounded)
- Name + verified badge
- Subject tags (max 3 visible)
- Rating (stars + count)
- Price per hour
- Next available slot
- "Book" button (primary)

**Hover state (desktop):**
- Subtle elevation increase (shadow)
- "Book" button transitions to filled...`,
    proTips: [
      "Specify ALL states — a button without a loading state is an incomplete design",
      "Write real copy, not 'Lorem ipsum' — content drives layout decisions",
      "Design mobile-first, then expand — it's easier to add than to remove",
      "Include error and empty states — they're where users spend more time than you think",
    ],
    relatedPromptIds: ["48", "49", "30"],
  },

  // ═══════════════════════════════════════════════════════════════
  // PRODUCTIVITY (4 prompts)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "51",
    slug: "weekly-schedule-optimizer",
    title: "Weekly Schedule Optimizer for Students",
    description: "Design an optimal weekly schedule that balances lectures, study time, part-time work, exercise, and social life.",
    prompt: `Act as a productivity coach specialising in student time management.

Create an optimised weekly schedule:

**My Commitments:**
- Lectures/classes: [SCHEDULE — days and times]
- Part-time work: [WORK — hours and flexibility]
- Thesis/research time needed: [RESEARCH_HOURS]
- Coursework deadlines: [DEADLINES]
- Exercise routine: [EXERCISE]
- Social/personal time: [SOCIAL]
- Sleep target: [SLEEP]
- Commute time: [COMMUTE]

**Constraints:**
- [CONSTRAINT_1]
- [CONSTRAINT_2]

**Create:**

## 1. IDEAL WEEKLY SCHEDULE
- Hour-by-hour Monday-Sunday
- Colour-coded by activity type
- Built-in flexibility windows

## 2. TIME BLOCKING STRATEGY
- Deep work blocks (thesis/study) — when and how long
- Shallow work blocks (emails, admin) — batched
- Transition time between activities
- Energy management (hard tasks when alert, easy tasks when tired)

## 3. RULES & SYSTEMS
- Morning routine (anchoring habit)
- End-of-day shutdown ritual
- Weekly review process (15 min Sunday)
- How to handle schedule disruptions

## 4. PRODUCTIVITY TECHNIQUES
- Pomodoro timing recommendations per task type
- Batch processing for small tasks
- Two-minute rule for quick items
- Energy audit (track when you're most productive)

## 5. SELF-CARE GUARDRAILS
- Non-negotiable rest time
- Social connection minimum
- Exercise as productivity tool, not luxury
- Warning signs you're overcommitting`,
    platforms: ["chatgpt", "claude"],
    category: "productivity",
    subcategory: "Time Management",
    tags: ["schedule", "time-management", "productivity", "planning"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[LECTURES]: Mon/Wed 9-12, Tue/Thu 14-16
[WORK]: Café job, 12 hours/week, flexible scheduling
[RESEARCH]: 15 hours/week needed for thesis
[SLEEP]: 7.5 hours minimum`,
    exampleOutput: `## OPTIMISED WEEKLY SCHEDULE

### MONDAY
| Time | Activity | Energy |
|------|----------|--------|
| 7:00 | Wake + morning routine | 🔋 Charging |
| 8:00 | Commute + podcast/audiobook | |
| 9:00-12:00 | **Lectures** | |
| 12:00-12:30 | Lunch (away from desk) | |
| 12:30-14:30 | 🔴 **Deep work: Thesis** (2 Pomodoros) | ⚡ Peak |
| 14:30-15:00 | Break + walk | |
| 15:00-17:00 | 🟡 **Study: Coursework** | ⚡ Good |
| 17:00-17:30 | 🟢 Admin batch (emails, planning) | 🔋 Winding down |
| 17:30-18:30 | Exercise | |
| 18:30-20:00 | Dinner + free time | |
| 20:00-21:00 | Light reading / lecture review | |
| 21:00 | Shutdown routine | |

### KEY RULES

1. **Thesis time is sacred** — treat it like a lecture you can't skip
2. **Work shifts:** Tue evening (17-21) + Sat (10-16) + Sun (10-14) = 12 hours ✅
3. **No work after 21:00** — diminishing returns + poor sleep
4. **Friday afternoon = buffer** — catch up on anything that slipped during the week...`,
    proTips: [
      "Schedule your most important work (thesis) RIGHT AFTER lectures — your brain is already in 'work mode'",
      "Protect 2-hour deep work blocks — a 30-minute study session is barely enough to get into flow",
      "Build in 'buffer blocks' — no plan survives the week perfectly, and that's OK",
      "Track your actual time for one week before optimising — you'll be surprised where it goes",
    ],
    relatedPromptIds: ["32", "52", "53"],
  },
  {
    id: "52",
    slug: "goal-setting-framework",
    title: "Goal Setting Framework (OKR for Students)",
    description: "Set structured academic and personal goals with measurable outcomes, weekly check-ins, and accountability systems.",
    prompt: `Act as a goal-setting coach. Help me set structured goals for the semester.

**My Situation:**
- Current semester: [SEMESTER]
- Academic goals: [ACADEMIC]
- Career goals: [CAREER]
- Personal goals: [PERSONAL]
- Time horizon: [TIMELINE]
- Past challenges: [CHALLENGES — procrastination, overcommitting, etc.]

**Create an OKR-style goal system:**

## 1. OBJECTIVES (3-5 big goals)
For each objective:
- Clear, inspiring objective statement
- 3-4 key results (measurable, time-bound)
- Why this matters to you

## 2. QUARTERLY MILESTONES
- Month 1: Foundation
- Month 2: Progress
- Month 3: Achievement
- Specific deliverables for each

## 3. WEEKLY CHECK-IN TEMPLATE
- 5 questions to ask yourself every Sunday (15 min)
- Progress scoring system (1-10)
- What to do when you're falling behind
- When to adjust goals vs. push harder

## 4. HABIT STACKING
- Daily micro-habits that support each goal
- Triggers and routines
- Minimum viable habit (when motivation is low)

## 5. ACCOUNTABILITY SYSTEM
- Who to share goals with
- How to track progress (simple, not over-engineered)
- Reward system for milestones
- Recovery protocol for bad weeks`,
    platforms: ["chatgpt", "claude"],
    category: "productivity",
    subcategory: "Goal Setting",
    tags: ["goals", "OKR", "planning", "motivation"],
    complexity: "beginner",
    popularity: 3,
    exampleInput: `[ACADEMIC]: Submit thesis by April, get distinction-level grades
[CAREER]: Secure a graduate job by June
[PERSONAL]: Exercise 3x/week, read 1 book/month
[CHALLENGES]: Procrastination, spending too long on "easy" tasks, neglecting job search`,
    exampleOutput: `## OBJECTIVE 1: Complete a distinction-level thesis

**Key Results:**
- KR1: Submit complete first draft to supervisor by 15 Feb ✅
- KR2: Receive and incorporate feedback by 1 Mar
- KR3: Submit final thesis by 1 Apr with zero formatting errors
- KR4: Achieve 70%+ grade (distinction threshold)

**Why:** This is the single highest-impact deliverable of your entire degree.

## OBJECTIVE 2: Land a graduate role I'm excited about

**Key Results:**
- KR1: Submit 5 tailored applications per week (total: 60 by June)
- KR2: Get 8+ first-round interviews (13% conversion rate)
- KR3: Complete 3 networking coffees per month
- KR4: Accept an offer by 30 June

## WEEKLY CHECK-IN (Every Sunday, 15 min)

1. "What were my 3 biggest wins this week?" (celebrate progress)
2. "What did I avoid or procrastinate on?" (be honest)
3. "Am I on track for this month's milestone?" (yes/no + why)
4. "What's the ONE thing that would make next week great?" (focus)
5. "Score each objective 1-10. Anything below 5 = needs a new approach, not more effort."...`,
    proTips: [
      "3-5 objectives maximum — more than that and nothing gets real attention",
      "Key results must be measurable: 'submit 5 applications' not 'apply to more jobs'",
      "If you're consistently scoring below 5, the goal needs adjusting, not your willpower",
      "Share your goals with one accountability partner — social commitment doubles follow-through",
    ],
    relatedPromptIds: ["51", "53", "32"],
  },
  {
    id: "53",
    slug: "procrastination-action-plan",
    title: "Procrastination Buster Action Plan",
    description: "Identify your procrastination patterns and build evidence-based strategies to start, maintain, and complete academic tasks.",
    prompt: `Act as a cognitive behavioural coach specialising in academic procrastination.

**My Situation:**
- Task I'm avoiding: [TASK]
- Why I think I'm avoiding it: [REASON]
- Deadline: [DEADLINE]
- How I usually procrastinate: [PATTERNS — scrolling, cleaning, "research", starting easy tasks]
- What's at stake: [STAKES]
- Past attempts to fix this: [ATTEMPTS]

**Create a personalised action plan:**

## 1. PROCRASTINATION DIAGNOSIS
- Which type of procrastinator you are (perfectionist, avoider, dreamer, rebel, crisis-maker)
- The emotional root cause (fear, overwhelm, boredom, perfectionism)
- Why "just start" advice doesn't work

## 2. IMMEDIATE UNBLOCK (Next 10 minutes)
- The smallest possible first step (literally 2 minutes of work)
- Environment design (remove friction, add cues)
- "Implementation intention": "At [TIME], I will [SPECIFIC ACTION] at [PLACE]"

## 3. SESSION STRATEGY (First working session)
- Start-up ritual (same every time, 3 minutes)
- Pomodoro structure tailored to this task
- Permission to produce bad work (first draft privilege)
- Reward after the session (immediate, specific)

## 4. SUSTAINED MOMENTUM (This week)
- Daily minimum (so low it's impossible to fail)
- Progress tracking (visible, satisfying)
- Pre-commitment devices (accountability, deadlines)
- How to handle "I don't feel like it" days

## 5. PATTERN BREAKING (Long-term)
- Identify your procrastination triggers
- Replacement behaviours
- Cognitive reframes for common thoughts
- When to seek professional support

## 6. EMERGENCY PROTOCOL
- "It's the night before the deadline" crisis plan
- Triage: what to focus on for maximum marks
- How to submit something imperfect vs. nothing`,
    platforms: ["chatgpt", "claude"],
    category: "productivity",
    subcategory: "Motivation",
    tags: ["procrastination", "motivation", "productivity", "habits"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[TASK]: Start writing my thesis methodology chapter
[REASON]: I don't know where to begin, it feels overwhelming
[DEADLINE]: 3 weeks
[PATTERNS]: I "research more" instead of writing, reorganise my notes, check email`,
    exampleOutput: `## PROCRASTINATION DIAGNOSIS

You're a **perfectionist-overwhelm hybrid**. You procrastinate not because you don't care, but because you care too much. The gap between "I should write a brilliant methodology chapter" and "I don't know what to type first" creates paralysis. Your "research more" habit is productive procrastination — it FEELS like work but avoids the scary part: putting your own words on paper.

## IMMEDIATE UNBLOCK (Start now — literally)

**Your 2-minute task:** Open a blank document. Type this sentence:

*"In this chapter, I will explain how I collected and analysed data. The approach I chose was [method] because [reason]."*

That's it. You've started. The chapter now exists. Everything else is revision.

**Implementation intention:**
"At 9:00 AM tomorrow, I will sit at the library (3rd floor, no WiFi section), open my thesis document, and write for 25 minutes without stopping. I don't need it to be good."

## SESSION STRATEGY

**Start-up ritual (every time):**
1. Phone in bag (not on desk, not "face down" — IN the bag)
2. Open thesis document
3. Read the last paragraph you wrote
4. Set timer for 25 minutes
5. Write. Not research. WRITE.

**The "Terrible First Draft" rule:**
You have explicit permission to write badly. "The methodology followed a qualitative approach because I thought it was the right one" is a valid first sentence. You WILL rewrite it. But you can't edit a blank page...`,
    proTips: [
      "The hardest part is always the first 5 minutes — after that, momentum kicks in",
      "'I'll just do 10 minutes' is more effective than 'I'll work for 3 hours' — you'll usually keep going",
      "Remove ALL distractions: phone in another room, website blockers on, library not bedroom",
      "If you're procrastinating on everything, not just one task — talk to someone. It might be anxiety, not laziness",
    ],
    relatedPromptIds: ["51", "52", "32"],
  },
  {
    id: "54",
    slug: "fact-check-verification",
    title: "Fact-Check & Source Verification",
    description: "Verify claims, statistics, and research findings with structured evidence evaluation and confidence ratings.",
    prompt: `Act as a research fact-checker. Verify this claim:

"[CLAIM]"

Context: [CONTEXT]

**Provide:**

## 1. VERDICT
- Confidence: Verified / Likely True / Uncertain / Likely False / False
- One-sentence summary

## 2. SUPPORTING EVIDENCE
- Sources that support the claim
- Source quality assessment

## 3. CONTRADICTING EVIDENCE
- Sources that challenge it
- Strength of contradiction

## 4. CRITICAL CONTEXT
- Important nuances
- How the claim might mislead even if true
- Common misconceptions

## 5. VERIFICATION GAPS
- What additional info is needed
- Where to check further`,
    platforms: ["perplexity", "gemini", "claude"],
    category: "research",
    subcategory: "Fact-Checking",
    tags: ["fact-check", "verification", "research", "sources"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[CLAIM]: "Only 30% of master's graduates work in a field directly related to their degree"
[CONTEXT]: Cited in a LinkedIn post about the value of postgraduate education`,
    exampleOutput: `## VERDICT: Uncertain (55% confidence)

The 30% figure doesn't come from a single reliable source. Various studies report different numbers depending on how "directly related" is defined.

## SUPPORTING EVIDENCE
- HESA Graduate Outcomes Survey (2023): 62% of postgraduates are in "highly skilled employment" — but this doesn't measure field relevance
- A PayScale survey (2019) found 45% of all degree holders feel their job is unrelated to their degree — but this includes bachelor's and all fields

## CRITICAL CONTEXT
The claim conflates "directly related" with "using my degree." Many master's skills (analysis, research, critical thinking) transfer across fields. A data science MSc graduate working in finance IS using their degree, even if the field seems unrelated...`,
    proTips: [
      "Perplexity is the strongest tool here — it searches real-time sources",
      "Always trace statistics to their original study, not secondhand citations",
      "Ask for 'original study details' to check sample size and methodology",
    ],
    relatedPromptIds: ["12", "18"],
  },
  {
    id: "55",
    slug: "email-writing-professional",
    title: "Professional Email Writer for Any Situation",
    description: "Write clear, effective professional emails for any situation — from internship applications to complaint resolution to collaboration requests.",
    prompt: `Act as a professional communication expert. Write an email for this situation:

**Situation:** [SITUATION]
**Recipient:** [RECIPIENT]
**Tone needed:** [TONE — formal, semi-formal, friendly professional]
**Goal:** [GOAL]
**Key points to include:** [POINTS]
**Any constraints:** [CONSTRAINTS — word limit, urgency, sensitivity]

**Provide:**
- Subject line (clear, actionable)
- Email body (structured, scannable)
- Call to action (specific)
- 2 versions if tone is ambiguous

**Rules:**
- Under 200 words unless complex
- One idea per paragraph
- Clear ask in the final paragraph
- Professional signature format`,
    platforms: ["chatgpt", "claude"],
    category: "productivity",
    subcategory: "Communication",
    tags: ["email", "communication", "professional", "writing"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[SITUATION]: Asking a company if they offer internships (they don't advertise any)
[RECIPIENT]: HR department at a mid-size tech startup
[TONE]: Friendly professional
[GOAL]: Get a meeting or application opportunity`,
    exampleOutput: `**Subject:** Internship inquiry — MSc Computer Science student with [relevant skill] background

Hi,

I'm a master's student in Computer Science at [University], graduating in [Month Year]. I've been following [Company]'s work on [specific project/product] — particularly [specific detail that shows research].

I'm reaching out because I'm looking for a 3-month summer internship in [area], and your team's approach to [specific thing] aligns closely with my experience in [skill/project].

I'd love to explore whether there's an opportunity to contribute — even if you don't have a formal internship programme. I'm flexible on timing and format.

I've attached my CV. Would you have 10 minutes for a brief call to discuss possibilities?

Best regards,
[Name]
MSc Computer Science, [University]
[LinkedIn] | [Portfolio]

---
*Tip: Find a specific person's name (LinkedIn → Company → People → filter by HR/Engineering). Addressed emails get 2x higher response rates than "Dear HR Department."*`,
    proTips: [
      "Find a specific person's name on LinkedIn — 'Dear Hiring Manager' gets ignored more often",
      "Lead with what's in it for THEM, not your life story",
      "One email, one ask. Multiple asks = no response",
      "Follow up once after 5 business days, then move on",
    ],
    relatedPromptIds: ["5", "14", "4"],
  },
];
