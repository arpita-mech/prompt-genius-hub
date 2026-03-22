import { Prompt } from "./types";

export const prompts: Prompt[] = [
  {
    id: "1",
    slug: "market-research-analysis-framework",
    title: "Complete Market Research Analysis Framework",
    description: "Generate comprehensive market research reports for any industry or product category. Creates detailed competitive analysis, market sizing, trend identification, and strategic recommendations.",
    prompt: `Act as an expert market research analyst with 15+ years of experience. I need a comprehensive market research report for [INDUSTRY/PRODUCT].

Please structure your analysis as follows:

1. EXECUTIVE SUMMARY
- Market size and growth projections
- Key findings (top 3-5 insights)
- Strategic recommendations

2. MARKET OVERVIEW
- Total addressable market (TAM)
- Current market size and historical growth
- Market segmentation breakdown
- Geographic distribution

3. COMPETITIVE LANDSCAPE
- Top 10 players and their market share
- Competitive positioning matrix
- Key differentiators
- Emerging competitors

4. CUSTOMER ANALYSIS
- Primary customer segments
- Buying behavior and preferences
- Pain points and unmet needs
- Customer acquisition costs by segment

5. TRENDS & DRIVERS
- Major industry trends (next 3-5 years)
- Technology disruptions
- Regulatory changes
- Economic factors

6. OPPORTUNITIES & THREATS
- Growth opportunities (ranked by potential)
- Market entry barriers
- Risks and challenges
- White space analysis

7. STRATEGIC RECOMMENDATIONS
- Go-to-market strategy
- Product positioning
- Pricing strategy
- Partnership opportunities

Format as a professional consulting report with data-driven insights. Include specific numbers, percentages, and timeframes wherever possible.`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "business-strategy",
    subcategory: "Market Research",
    tags: ["market-research", "competitive-analysis", "strategy", "consulting"],
    complexity: "advanced",
    popularity: 5,
    exampleInput: `[INDUSTRY/PRODUCT]: "Plant-based protein market in North America"`,
    exampleOutput: `**EXECUTIVE SUMMARY**

The North American plant-based protein market is valued at approximately $7.4 billion in 2024, with a projected CAGR of 11.2% through 2030. Three key findings emerge: (1) Flexitarian consumers now represent 42% of all plant-protein purchases, overtaking dedicated vegans/vegetarians as the primary growth driver; (2) The pea protein segment is growing at 2.3x the overall market rate, signaling a shift away from soy-dominant formulations; (3) Foodservice channels remain underpenetrated at just 18% of sales versus 34% in conventional protein...

**MARKET OVERVIEW**

Total Addressable Market: $28.6B (all alternative proteins, North America)
Current Market Size: $7.4B (plant-based specifically)
5-Year Historical CAGR: 8.7% (2019-2024)...`,
    proTips: [
      "Be specific with your industry — 'plant-based protein in North America' beats 'food industry' for accuracy",
      "Add geographic constraints for more accurate market sizing",
      "Follow up with 'provide sources and methodology' for citation support",
      "Ask for SWOT analysis as a separate follow-up for deeper strategic depth",
      "Works best with ChatGPT-4 or Claude for complex multi-section analysis",
    ],
    relatedPromptIds: ["5", "4", "12"],
  },
  {
    id: "2",
    slug: "code-review-assistant",
    title: "Senior Code Review Assistant",
    description: "Get thorough, senior-level code reviews with actionable suggestions for improvement across quality, performance, security, and maintainability.",
    prompt: `Act as a senior software engineer conducting a thorough code review. You have deep expertise in [LANGUAGE] and follow industry best practices.

Review the following code and provide feedback organized into these sections:

## 1. CODE QUALITY & READABILITY
- Naming conventions and clarity
- Code organization and structure
- Adherence to [LANGUAGE] idioms and best practices
- DRY violations and refactoring opportunities

## 2. BUGS & EDGE CASES
- Potential runtime errors
- Null/undefined handling
- Boundary conditions
- Race conditions or concurrency issues

## 3. PERFORMANCE
- Time and space complexity analysis
- Unnecessary computations or allocations
- Database query optimization (if applicable)
- Caching opportunities

## 4. SECURITY CONCERNS
- Input validation gaps
- Injection vulnerabilities
- Authentication/authorization issues
- Data exposure risks

## 5. SUGGESTED IMPROVEMENTS
For each issue found, provide:
- The specific line or section
- Why it's a problem
- A concrete code example of the fix

Rate the overall code: ⭐ out of 5

Code to review:
\`\`\`
[PASTE_CODE_HERE]
\`\`\`

Context: [WHAT_THE_CODE_DOES]`,
    platforms: ["claude", "chatgpt", "copilot"],
    category: "development",
    subcategory: "Code Quality",
    tags: ["code-review", "quality", "debugging", "security"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `[LANGUAGE]: TypeScript/React
[PASTE_CODE_HERE]: (a React component with useEffect, state management, and API calls)
[WHAT_THE_CODE_DOES]: User authentication flow with session management`,
    exampleOutput: `## CODE QUALITY & READABILITY ⚠️

**Issue 1: Inconsistent error handling (Line 23-28)**
The catch block silently swallows errors. Users won't know authentication failed.

\`\`\`typescript
// Before
catch (e) { console.log(e); }

// After  
catch (error) {
  setAuthError(error instanceof AuthError ? error.message : 'Authentication failed');
  toast.error('Unable to sign in. Please try again.');
}
\`\`\`

**Issue 2: useEffect dependency array (Line 15)**
Missing \`userId\` dependency causes stale closure...

**Overall Rating: ⭐⭐⭐ (3/5)** — Functional but needs error handling, security hardening, and performance optimization before production.`,
    proTips: [
      "Always specify the language and framework for context-aware suggestions",
      "Include the broader context of what the code does — reviewers need business logic understanding",
      "For large codebases, break reviews into logical chunks (one file or function at a time)",
      "Claude excels at nuanced code reasoning; ChatGPT is faster for straightforward reviews",
    ],
    relatedPromptIds: ["8", "11", "7"],
  },
  {
    id: "3",
    slug: "academic-research-synthesizer",
    title: "Academic Research Synthesizer",
    description: "Synthesize research findings from multiple sources into a coherent, structured analysis with identified themes, consensus areas, and research gaps.",
    prompt: `Act as an academic research assistant with expertise in systematic literature reviews. I'm researching [TOPIC] for a [PURPOSE].

Please help me synthesize the following sources/findings:

[PASTE_SOURCES]

Structure your synthesis as follows:

## 1. THEMATIC ANALYSIS
- Identify 3-5 major themes across the sources
- Group findings under each theme
- Note the strength of evidence for each theme

## 2. CONSENSUS & DISAGREEMENT
- Areas where sources agree (with specific citations)
- Points of contradiction or debate
- Possible explanations for disagreements

## 3. METHODOLOGICAL ASSESSMENT
- Research methods used across studies
- Strengths of the collective methodology
- Limitations and potential biases
- Sample size and generalizability concerns

## 4. RESEARCH GAPS
- Questions left unanswered
- Populations or contexts not studied
- Methodological improvements needed
- Emerging areas for future research

## 5. STRUCTURED SYNTHESIS
- Integrated narrative connecting all findings
- Theoretical implications
- Practical implications
- Confidence level in conclusions (high/medium/low)

Format with academic citations where possible. Use hedging language appropriately.`,
    platforms: ["claude", "perplexity", "gemini"],
    category: "education",
    subcategory: "Research",
    tags: ["academic", "synthesis", "literature-review", "analysis"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `[TOPIC]: "Impact of remote work on employee productivity and well-being"
[PURPOSE]: "Master's thesis literature review"
[PASTE_SOURCES]: (3-5 key study summaries with authors and dates)`,
    exampleOutput: `## THEMATIC ANALYSIS

**Theme 1: Productivity Effects Are Non-Linear**
Bloom et al. (2023) found a 13% productivity increase in the first 6 months of remote work, but this plateaued and declined slightly by month 18. This aligns with Choudhury et al.'s (2022) finding of diminishing returns, though their threshold was earlier (month 12). The consensus suggests an initial productivity boost driven by reduced commute time and fewer interruptions, followed by erosion from collaboration friction...`,
    proTips: [
      "Provide full citations with authors and dates — the AI can reference them properly",
      "Perplexity is excellent for this because it can verify claims against current sources",
      "Ask for a 'citation matrix' as a follow-up to see which sources support which claims",
      "Specify your field's citation style (APA, MLA, Chicago) for properly formatted references",
    ],
    relatedPromptIds: ["9", "14"],
  },
  {
    id: "4",
    slug: "brand-story-narrative-generator",
    title: "Brand Story & Narrative Generator",
    description: "Create compelling brand narratives that resonate with target audiences, covering origin story, mission articulation, and customer transformation journey.",
    prompt: `Act as a brand strategist and storytelling expert who has built narratives for Fortune 500 companies and startups alike.

Create a comprehensive brand story for [BRAND_NAME]:

**Brand Context:**
- Industry: [INDUSTRY]
- Founded: [YEAR] (or "launching soon")
- Mission: [MISSION]
- Target audience: [AUDIENCE]
- Unique value proposition: [VALUE_PROP]
- Brand personality: [PERSONALITY_TRAITS]

**Deliver the following:**

## 1. ORIGIN NARRATIVE (The Why)
- The founder's moment of realization
- The personal connection to the problem
- Why this matters now (market timing)

## 2. THE PROBLEM WE SAW
- The status quo and its pain points
- Who suffers most and how
- Why existing solutions fall short
- The emotional cost of the problem

## 3. OUR PHILOSOPHY & APPROACH
- Core beliefs that drive the brand
- How we're fundamentally different
- The principles behind our solution
- What we refuse to compromise on

## 4. CUSTOMER TRANSFORMATION
- Before state (the struggle)
- The turning point (discovering the brand)
- After state (the transformation)
- Social proof narrative (composite story)

## 5. VISION FOR THE FUTURE
- Where we're heading
- The world we want to create
- How customers are part of this journey
- The movement beyond the product

**Tone:** [TONE]
**Length:** [LENGTH]
**Primary channel:** [CHANNEL - website/pitch deck/social media]`,
    platforms: ["chatgpt", "claude"],
    category: "marketing",
    subcategory: "Brand Strategy",
    tags: ["branding", "storytelling", "marketing", "narrative"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[BRAND_NAME]: "Terranova"
[INDUSTRY]: Sustainable home goods
[MISSION]: Make sustainable living effortless and beautiful
[AUDIENCE]: Millennials and Gen Z homeowners who care about the environment
[VALUE_PROP]: Premium home products made entirely from regenerative materials
[TONE]: Warm, aspirational but grounded
[LENGTH]: Full brand story (1000-1500 words)`,
    exampleOutput: `## THE ORIGIN

It started with a cabinet. In 2021, Maya Chen was renovating her first apartment and realized she couldn't find a single piece of furniture that was both beautiful and genuinely sustainable. Not "greenwashed" sustainable — actually, verifiably good for the planet...`,
    proTips: [
      "The more specific your brand personality traits, the more distinctive the narrative",
      "Include real founder anecdotes if you have them — AI will weave them in naturally",
      "Request 3 versions with different emotional tones to see what resonates",
      "Follow up with 'create a 60-second elevator pitch version' for investor contexts",
    ],
    relatedPromptIds: ["12", "1"],
  },
  {
    id: "5",
    slug: "swot-analysis-framework",
    title: "Strategic SWOT Analysis Framework",
    description: "Generate a comprehensive SWOT analysis for strategic business planning with prioritized, actionable recommendations.",
    prompt: `Act as a senior management consultant from a top-tier strategy firm. Conduct a detailed SWOT analysis for [COMPANY/PROJECT].

**Context:**
- Industry: [INDUSTRY]
- Company size: [SIZE]
- Current market position: [MARKET_POSITION]
- Key competitors: [COMPETITORS]
- Recent developments: [RECENT_NEWS]

**For each quadrant, provide:**

## STRENGTHS (Internal, Positive)
- 5-7 specific, evidence-based strengths
- Priority ranking (Critical / Important / Nice-to-have)
- How each can be leveraged strategically

## WEAKNESSES (Internal, Negative)
- 5-7 specific weaknesses with impact assessment
- Priority ranking (Urgent / Important / Monitor)
- Mitigation strategies for each

## OPPORTUNITIES (External, Positive)
- 5-7 market opportunities with timing
- Estimated impact (High / Medium / Low)
- Required capabilities to capture each

## THREATS (External, Negative)
- 5-7 threats with probability assessment
- Severity ranking (Existential / Significant / Manageable)
- Defensive strategies for each

## STRATEGIC SYNTHESIS
- SWOT interaction matrix (S+O strategies, W+T risks)
- Top 3 strategic priorities
- Quick wins (0-3 months) vs. long-term plays (1-3 years)
- Risk mitigation roadmap
- Resource allocation recommendations`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "business-strategy",
    subcategory: "Strategic Planning",
    tags: ["SWOT", "strategy", "analysis", "planning", "consulting"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `[COMPANY/PROJECT]: "A mid-size SaaS company (Series B, $12M ARR) in the project management space"
[INDUSTRY]: Enterprise SaaS / Productivity
[COMPETITORS]: Asana, Monday.com, Notion, ClickUp`,
    exampleOutput: `## STRENGTHS

**S1: Deep vertical expertise in construction project management** (Critical)
Unlike horizontal competitors, the company has built specialized workflows for construction, reducing onboarding time by 64% compared to adapting general-purpose tools. This creates a defensible niche with high switching costs...

**S2: Net Revenue Retention at 127%** (Critical)
Existing customers are expanding usage faster than churn, indicating strong product-market fit and upsell mechanics...`,
    proTips: [
      "Include recent company news or developments for the most current analysis",
      "Name specific competitors — vague context produces vague analysis",
      "Ask for a 'TOWS matrix' as a follow-up to get specific cross-quadrant strategies",
      "Request 'pessimistic scenario planning' based on the identified threats",
    ],
    relatedPromptIds: ["1", "12"],
  },
  {
    id: "6",
    slug: "interactive-lesson-plan-builder",
    title: "Interactive Lesson Plan Builder",
    description: "Design comprehensive, engaging lesson plans with differentiated activities, assessments, and inclusive learning strategies.",
    prompt: `Act as an experienced curriculum designer with expertise in Universal Design for Learning (UDL) and differentiated instruction.

Design a complete lesson plan for:

**Lesson Details:**
- Topic: [TOPIC]
- Grade level / Audience: [GRADE_LEVEL]
- Duration: [TIME]
- Subject area: [SUBJECT]
- Standards alignment: [STANDARDS] (if applicable)

**Prior knowledge assumed:** [PREREQUISITES]
**Learning objectives:** [OBJECTIVES]
**Available resources:** [RESOURCES]

**Structure the lesson as follows:**

## 1. WARM-UP / HOOK (5-10 min)
- Engaging opening activity
- Connection to prior knowledge
- Essential question for the lesson

## 2. DIRECT INSTRUCTION (15-20 min)
- Key concepts with multiple representations
- Visual aids and multimedia suggestions
- Check-for-understanding moments
- Think-aloud modeling

## 3. GUIDED PRACTICE (15-20 min)
- Collaborative activity with clear roles
- Scaffolded tasks (I do → We do → You do)
- Formative assessment checkpoints

## 4. INDEPENDENT PRACTICE (15-20 min)
- Tiered activities (3 levels of complexity)
- Choice board options
- Extension challenges for advanced learners

## 5. CLOSURE & ASSESSMENT (5-10 min)
- Exit ticket or reflection prompt
- Summary of key takeaways
- Preview of next lesson

## 6. DIFFERENTIATION STRATEGIES
- Supports for struggling learners
- Extensions for advanced learners
- ELL/ESL accommodations
- Accessibility considerations

## 7. MATERIALS & RESOURCES
- Required materials list
- Recommended digital tools
- Take-home extension activity
- Parent communication suggestion`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "education",
    subcategory: "Curriculum Design",
    tags: ["lesson-plan", "teaching", "curriculum", "differentiation"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[TOPIC]: "Introduction to Photosynthesis"
[GRADE_LEVEL]: 7th grade science
[TIME]: 50-minute class period
[OBJECTIVES]: Students can explain the process and identify inputs/outputs`,
    exampleOutput: `## WARM-UP / HOOK (7 min)

**"The Mystery Jar" Activity:** Present two sealed jars — one with a living plant that's been in sunlight for 24 hours, one with a plant kept in darkness. Ask: "Which jar has more oxygen? How do you know?" Students write predictions on sticky notes and place them on the board under "More O₂ in light" or "More O₂ in dark"...`,
    proTips: [
      "Specify your state/national standards for curriculum-aligned content",
      "Include available technology (iPads, Chromebooks, none) for realistic activity suggestions",
      "Request a 'student handout version' as a follow-up for ready-to-print materials",
      "Ask for 'assessment rubric' separately for detailed grading criteria",
    ],
    relatedPromptIds: ["14", "3"],
  },
  {
    id: "7",
    slug: "data-pipeline-architect",
    title: "Data Pipeline Architecture Designer",
    description: "Design production-ready data processing pipelines with clear specifications, technology choices, and operational considerations.",
    prompt: `Act as a senior data engineer with experience building pipelines at scale (petabyte-level) across cloud platforms.

Design a data pipeline for: [USE_CASE]

**Data Sources:**
- Source 1: [NAME] — Format: [FORMAT], Volume: [VOLUME], Frequency: [FREQUENCY]
- Source 2: [NAME] — Format: [FORMAT], Volume: [VOLUME], Frequency: [FREQUENCY]
- Source 3: [NAME] — Format: [FORMAT], Volume: [VOLUME], Frequency: [FREQUENCY]

**Requirements:**
- Latency target: [LATENCY]
- Data quality rules: [RULES]
- Output format: [OUTPUT_FORMAT]
- Output destination: [DESTINATION]
- Scale: [SCALE]
- Cloud provider preference: [CLOUD]
- Budget constraints: [BUDGET]

**Provide:**

## 1. ARCHITECTURE DIAGRAM
- Text-based architecture diagram (ASCII or Mermaid)
- Component descriptions and responsibilities
- Data flow direction and transformation points

## 2. TECHNOLOGY STACK
- Recommended tools with justification
- Alternative options with trade-offs
- Version and compatibility notes

## 3. DATA TRANSFORMATION
- ETL/ELT steps in order
- Schema evolution strategy
- Data validation checkpoints
- Transformation logic for each stage

## 4. ERROR HANDLING & RECOVERY
- Retry strategies per component
- Dead letter queue design
- Data reconciliation approach
- Rollback procedures

## 5. MONITORING & OBSERVABILITY
- Key metrics to track
- Alerting thresholds and escalation
- Dashboard recommendations
- SLA definitions

## 6. COST & PERFORMANCE
- Estimated monthly cost breakdown
- Performance benchmarks
- Optimization recommendations
- Scaling triggers and strategies`,
    platforms: ["claude", "chatgpt", "copilot"],
    category: "data-analysis",
    subcategory: "Data Engineering",
    tags: ["pipeline", "architecture", "ETL", "data-engineering"],
    complexity: "advanced",
    popularity: 3,
    exampleInput: `[USE_CASE]: "Real-time fraud detection for an e-commerce platform"
[CLOUD]: AWS
[LATENCY]: Sub-second for scoring, hourly for batch model updates`,
    exampleOutput: `## ARCHITECTURE DIAGRAM

\`\`\`
[Payment Events] → [Kinesis Data Streams] → [Lambda Enrichment]
                                                    ↓
                                           [SageMaker Endpoint]
                                                    ↓
                                    [DynamoDB (decisions)] → [SNS Alerts]
                                                    ↓
                              [S3 (raw events)] → [Glue ETL] → [Redshift]
\`\`\`

**Component 1: Kinesis Data Streams** — Ingests payment events at ~2,000 TPS with 24-hour retention...`,
    proTips: [
      "Specify your cloud provider — architecture differs significantly between AWS, GCP, and Azure",
      "Include budget constraints to get cost-appropriate recommendations",
      "Ask for a 'migration plan' follow-up if replacing an existing pipeline",
      "Request Terraform/IaC templates as a follow-up for deployment automation",
    ],
    relatedPromptIds: ["13", "11"],
  },
  {
    id: "8",
    slug: "regex-pattern-crafter",
    title: "Regex Pattern Crafter & Explainer",
    description: "Generate and thoroughly explain regex patterns for complex text matching, with test cases and edge case analysis.",
    prompt: `Act as a regex expert. Create a production-ready regex pattern that matches:

[DESCRIPTION_OF_PATTERN]

**Examples that SHOULD match:**
- [EXAMPLE_1]
- [EXAMPLE_2]
- [EXAMPLE_3]

**Examples that should NOT match:**
- [COUNTER_1]
- [COUNTER_2]
- [COUNTER_3]

**Target language/engine:** [LANGUAGE] (PCRE/JavaScript/Python/etc.)

**Please provide:**

## 1. THE PATTERN
- The complete regex
- Flags needed (g, i, m, etc.)

## 2. COMPONENT BREAKDOWN
- Line-by-line explanation of each part
- Named groups identification
- Quantifier behavior (greedy vs. lazy)

## 3. EDGE CASES
- Cases it handles correctly
- Cases it might miss (with workarounds)
- Unicode considerations
- Performance implications for large inputs

## 4. TEST SUITE
- Complete test cases in [LANGUAGE]
- Positive matches with captured groups
- Negative matches
- Boundary cases

## 5. ALTERNATIVES
- Simpler pattern (if accuracy trade-off is acceptable)
- More strict pattern (if false positives are costly)
- Non-regex approach (if more appropriate)`,
    platforms: ["chatgpt", "claude", "copilot"],
    category: "development",
    subcategory: "Text Processing",
    tags: ["regex", "patterns", "text-processing", "validation"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[DESCRIPTION_OF_PATTERN]: "Match valid email addresses following RFC 5322, but exclude disposable email providers"
[LANGUAGE]: JavaScript`,
    exampleOutput: `## THE PATTERN

\`\`\`javascript
const emailRegex = /^(?!.*@(?:mailinator|guerrillamail|tempmail|throwaway)\\.\\w+$)[a-zA-Z0-9.!#$%&'*+\\/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
\`\`\`

## COMPONENT BREAKDOWN

**\`^(?!.*@(?:mailinator|...))\`** — Negative lookahead at the start. Before attempting to match the email, this checks that the domain portion doesn't contain any of the listed disposable providers...`,
    proTips: [
      "Always specify the regex engine — JavaScript and Python handle lookbehinds differently",
      "Provide 5+ examples of each (match/no-match) for precise pattern generation",
      "Ask for a 'performance analysis' if the regex will run on large text volumes",
      "For complex patterns, ask for the regex in verbose/commented mode for maintainability",
    ],
    relatedPromptIds: ["2", "11"],
  },
  {
    id: "9",
    slug: "fact-check-research-query",
    title: "Structured Fact-Check & Verification Query",
    description: "Verify claims with structured evidence from multiple angles, including confidence ratings and source quality assessment.",
    prompt: `Act as a research fact-checker with expertise in source evaluation and critical analysis.

Fact-check the following claim:
"[CLAIM]"

Context/source of claim: [CONTEXT]

**Provide a structured verification:**

## 1. VERDICT
- Confidence rating: Verified / Likely True / Uncertain / Likely False / False
- Confidence percentage: X%
- One-sentence summary

## 2. SUPPORTING EVIDENCE
- Evidence that supports the claim
- Source quality assessment for each piece
- How directly the evidence supports the claim

## 3. CONTRADICTING EVIDENCE
- Evidence that challenges the claim
- Source quality assessment
- Strength of contradiction

## 4. CRITICAL CONTEXT
- Important nuances or caveats
- How the claim might be misleading even if technically true
- Historical context that changes interpretation
- Common misconceptions related to this topic

## 5. VERIFICATION GAPS
- What additional information would be needed
- Suggested sources to check
- Expert domains that could provide definitive answers

## 6. RELATED CLAIMS
- Connected claims worth investigating
- Common claims in the same topic area that are false
- How this claim fits into broader narratives`,
    platforms: ["perplexity", "gemini", "claude"],
    category: "content-creation",
    subcategory: "Fact-Checking",
    tags: ["fact-check", "verification", "research", "sources"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[CLAIM]: "Remote workers are 13% more productive than office workers"
[CONTEXT]: Cited in a LinkedIn post about return-to-office policies`,
    exampleOutput: `## VERDICT
**Likely True — with significant caveats** (72% confidence)

This statistic originates from a specific, well-designed Stanford study (Bloom et al., 2015), but applying it as a universal truth is misleading.

## SUPPORTING EVIDENCE
**Primary source: Stanford/Ctrip Study (2015)** — Source quality: ⭐⭐⭐⭐⭐
Nicholas Bloom's randomized controlled trial with 16,000 Ctrip employees found a 13.5% performance increase for remote workers. 9% came from working more minutes per shift, 4% from handling more calls per minute...`,
    proTips: [
      "Include the original source of the claim for more targeted verification",
      "Perplexity is the strongest choice here — it searches real-time sources",
      "Ask for 'original study details' as a follow-up to trace claims to primary research",
      "For statistical claims, ask specifically about sample size and methodology",
    ],
    relatedPromptIds: ["3", "13"],
  },
  {
    id: "10",
    slug: "constrained-short-story-writer",
    title: "Creative Short Story from Constraints",
    description: "Generate literary short stories from specific creative constraints, producing publish-quality fiction with vivid prose and authentic dialogue.",
    prompt: `Act as an award-winning short fiction writer known for literary craftsmanship.

Write a short story with these precise constraints:

**Story Parameters:**
- Genre: [GENRE]
- Setting: [SETTING] (time and place)
- Point of view: [POV]
- Emotional arc: [ARC] (e.g., "hope → betrayal → acceptance")
- Word count: approximately [COUNT]

**Required Elements (must appear naturally):**
- [ELEMENT_1]
- [ELEMENT_2]
- [ELEMENT_3]

**Structural Rules:**
- Opening line must [OPENING_CONSTRAINT]
- Include exactly one plot twist that recontextualizes earlier events
- End with [ENDING_TYPE] (e.g., "ambiguous ending" / "circular callback" / "emotional gut-punch")

**Writing Guidelines:**
- Prioritize vivid sensory details (at least 3 senses per scene)
- Dialogue should reveal character, not just convey information
- Use subtext — what characters don't say matters
- Vary sentence rhythm (mix short punches with flowing passages)
- Avoid clichés and overused metaphors
- Show, don't tell, emotional states`,
    platforms: ["claude", "chatgpt"],
    category: "content-creation",
    subcategory: "Creative Writing",
    tags: ["fiction", "storytelling", "creative-writing", "short-story"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[GENRE]: Literary thriller
[SETTING]: A small fishing village in Portugal, present day
[POV]: Second person
[ARC]: Curiosity → obsession → devastating realization
[ELEMENT_1]: An untranslatable word
[ELEMENT_2]: The smell of sardines
[ELEMENT_3]: A photograph that changes meaning`,
    exampleOutput: `You find the word on a Tuesday, scratched into the windowsill of the rented cottage like someone had written it with a key. *Saudade.* The guidebook says it means a longing for something you've lost, or maybe never had. The guidebook is wrong, but you don't know that yet...`,
    proTips: [
      "Claude tends to produce more literary, nuanced prose; ChatGPT is stronger at plot mechanics",
      "Constraints breed creativity — the more specific your rules, the more original the output",
      "Ask for 'revision focusing on line-level prose quality' as a follow-up",
      "Request 'the same story from a different character's POV' for interesting narrative exercises",
    ],
    relatedPromptIds: ["16"],
  },
  {
    id: "11",
    slug: "api-endpoint-designer",
    title: "RESTful API Endpoint Designer",
    description: "Design production-ready API endpoints with full specifications, validation rules, error handling, and documentation.",
    prompt: `Act as a senior API architect. Design a comprehensive API specification for a [TYPE] service that handles [DOMAIN].

**Requirements:**
- API style: [REST/GraphQL]
- Authentication: [AUTH_METHOD]
- Key entities: [ENTITIES]
- Base URL: [BASE_URL]
- API versioning strategy: [VERSIONING]

**For each endpoint, provide:**

## ENDPOINT SPECIFICATION
| Property | Value |
|----------|-------|
| Method | GET/POST/PUT/PATCH/DELETE |
| Path | /api/v1/... |
| Auth | Required/Optional/None |
| Rate Limit | X req/min |

## REQUEST
- Headers (required and optional)
- Path parameters
- Query parameters (with defaults)
- Request body JSON schema
- Validation rules for each field

## RESPONSE
- Success response (200/201) with full schema
- Error responses (400, 401, 403, 404, 422, 500)
- Pagination format (cursor vs. offset)
- Response headers

## EXAMPLE
\`\`\`
// Request
curl -X POST ...

// Response
{ ... }
\`\`\`

## ADDITIONAL
- Idempotency considerations
- Caching headers
- Webhook events triggered
- Related endpoints

Follow [STANDARD] conventions. Include pagination, filtering, sorting, and field selection strategies.`,
    platforms: ["claude", "chatgpt", "copilot"],
    category: "development",
    subcategory: "API Design",
    tags: ["API", "REST", "backend", "architecture"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `[TYPE]: E-commerce
[DOMAIN]: Order management (create, update, track, refund)
[AUTH_METHOD]: JWT Bearer tokens
[ENTITIES]: Orders, OrderItems, Payments, Refunds`,
    exampleOutput: `## POST /api/v1/orders

**Create a new order**

| Property | Value |
|----------|-------|
| Auth | Required (Bearer token) |
| Rate Limit | 30 req/min per user |
| Idempotent | Yes (via Idempotency-Key header) |

### Request Body
\`\`\`json
{
  "items": [
    {
      "product_id": "prod_abc123",
      "quantity": 2,
      "price_cents": 2999
    }
  ],
  "shipping_address": { ... },
  "payment_method_id": "pm_xyz789"
}
\`\`\`...`,
    proTips: [
      "Specify whether you need REST or GraphQL — the design patterns differ substantially",
      "Include your authentication method for endpoint-specific authorization rules",
      "Ask for 'OpenAPI 3.0 spec' as a follow-up for auto-generated documentation",
      "Request 'database schema' separately to ensure API and DB align",
    ],
    relatedPromptIds: ["2", "7"],
  },
  {
    id: "12",
    slug: "email-campaign-sequence-builder",
    title: "Email Campaign Sequence Builder",
    description: "Create multi-email marketing sequences with personalization, A/B testing variants, and conversion optimization.",
    prompt: `Act as an email marketing strategist who has managed campaigns generating $50M+ in revenue.

Create a [NUMBER]-email sequence for [PRODUCT/SERVICE].

**Campaign Context:**
- Audience: [AUDIENCE]
- Conversion goal: [CONVERSION_GOAL]
- Current relationship: [COLD/WARM/EXISTING]
- Brand voice: [VOICE]
- Average order value: [AOV]
- Industry: [INDUSTRY]

**For each email, provide:**

## EMAIL [N] — [PURPOSE]
**Timing:** Day X after [TRIGGER]

### Subject Lines
- Primary: "..."
- A/B Variant 1: "..."
- A/B Variant 2: "..."

### Preview Text
"..."

### Email Body
[Complete email with personalization tokens like {{first_name}}, {{company}}]

### CTA
- Button text: "..."
- Placement: [above fold / mid-content / bottom]
- Landing page URL structure: /...

### Segmentation
- Send to: [criteria]
- Skip if: [exclusion criteria]
- Branch: [if opened → X, if not → Y]

### Metrics to Track
- Primary: [metric]
- Secondary: [metric]

---

**Sequence Architecture:**
- Awareness → Interest → Desire → Action flow
- Re-engagement branch for non-openers (Day X)
- Win-back sequence for non-converters
- Optimal send times by audience segment`,
    platforms: ["chatgpt", "claude"],
    category: "marketing",
    subcategory: "Email Marketing",
    tags: ["email", "marketing", "copywriting", "automation"],
    complexity: "intermediate",
    popularity: 3,
    exampleInput: `[NUMBER]: 5
[PRODUCT/SERVICE]: B2B SaaS project management tool
[AUDIENCE]: CTOs and Engineering Managers at companies with 50-500 employees
[CONVERSION_GOAL]: Free trial signup`,
    exampleOutput: `## EMAIL 1 — THE HOOK
**Timing:** Immediately after lead magnet download
**Subject:** "The spreadsheet your team secretly hates"
**A/B Variant:** "Why 73% of engineering teams miss deadlines (it's not talent)"

Hi {{first_name}},

You just grabbed our Engineering Velocity Report — nice. Here's the number that probably jumped out at you: teams using 4+ tools to manage projects ship 37% slower than those using one...`,
    proTips: [
      "Specify B2B vs B2C — the tone, length, and cadence differ dramatically",
      "Include your average order value for appropriate urgency and offer calibration",
      "Ask for 'subject line testing matrix' as a follow-up (20+ variants to test)",
      "Request mobile-optimized versions separately — 68% of emails are read on mobile",
    ],
    relatedPromptIds: ["4", "1"],
  },
  {
    id: "13",
    slug: "dataset-explorer-analyzer",
    title: "Dataset Explorer & Statistical Analyzer",
    description: "Analyze datasets with statistical insights, data quality assessment, pattern identification, and actionable recommendations.",
    prompt: `Act as a senior data scientist conducting exploratory data analysis (EDA).

Analyze this dataset and provide a comprehensive report:

**Dataset Information:**
- Description: [DESCRIPTION]
- Number of rows: [ROW_COUNT]
- Columns: [COLUMNS]
- Business context: [CONTEXT]
- Analysis goal: [GOAL]

**Sample data:**
[SAMPLE_DATA]

**Deliver:**

## 1. DATA OVERVIEW
- Column types and descriptions
- Data dictionary with inferred meanings
- Size and memory considerations

## 2. SUMMARY STATISTICS
- Descriptive stats for numeric columns
- Frequency distributions for categorical columns
- Unique value counts and cardinality

## 3. DATA QUALITY AUDIT
- Missing values (count, percentage, pattern — MCAR/MAR/MNAR)
- Outliers (IQR method and z-score)
- Duplicate records
- Inconsistencies and data entry errors
- Recommended cleaning steps

## 4. DISTRIBUTION ANALYSIS
- Shape of distributions (normal, skewed, bimodal)
- Recommended transformations
- Statistical test suggestions

## 5. RELATIONSHIP ANALYSIS
- Correlation matrix highlights
- Notable relationships and their strength
- Potential confounding variables
- Causation vs. correlation warnings

## 6. KEY INSIGHTS
- Three most interesting patterns
- Surprising findings
- Business implications
- Recommended visualizations (with chart type and axes)

## 7. NEXT STEPS
- Feature engineering suggestions
- Modeling approaches to consider
- Additional data to collect
- Questions for domain experts

Present findings in a clear executive summary followed by technical details.`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "data-analysis",
    subcategory: "Exploratory Analysis",
    tags: ["statistics", "EDA", "data-science", "analysis"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[DESCRIPTION]: "E-commerce transaction data from Q4 2024"
[COLUMNS]: order_id, customer_id, product_category, order_value, order_date, channel, is_returned
[GOAL]: "Identify factors driving high return rates"`,
    exampleOutput: `## DATA QUALITY AUDIT

**Missing Values:**
| Column | Missing | % | Pattern |
|--------|---------|---|---------|
| channel | 847 | 3.2% | MAR — concentrated in mobile orders before Oct 15 (likely a tracking bug) |
| is_returned | 0 | 0% | Complete |

**Outliers:**
- \`order_value\`: 23 records above $4,200 (IQR × 3). Investigation reveals 18 are B2B bulk orders miscategorized as B2C. Recommend: flag and separate for analysis...`,
    proTips: [
      "Paste actual sample data (5-10 rows) for the most relevant analysis",
      "Include your business question — 'explore everything' produces shallow results",
      "For large datasets, describe the schema and share summary stats instead of raw data",
      "Follow up with 'generate Python code for the recommended visualizations'",
    ],
    relatedPromptIds: ["7", "9"],
  },
  {
    id: "14",
    slug: "socratic-tutor",
    title: "Adaptive Socratic Tutor",
    description: "Learn through guided questioning rather than direct answers. The AI asks you questions to help you discover understanding on your own.",
    prompt: `Act as a Socratic tutor for [SUBJECT]. I want to deeply understand [CONCEPT].

**My current level:** [CURRENT_LEVEL]
**My learning goal:** [GOAL]
**Preferred learning style:** [VISUAL/VERBAL/HANDS-ON/ABSTRACT]

**Tutoring Rules (follow strictly):**
1. NEVER give the answer directly — always ask a guiding question first
2. Start with what I already know and build incrementally
3. If I'm stuck for 2+ attempts, provide a hint (not the answer)
4. Use analogies from everyday life to explain abstract concepts
5. After I reach a correct understanding, ask me to explain it back in my own words
6. Celebrate correct reasoning with specific praise ("Your connection between X and Y shows...")
7. If I have a misconception, don't say "wrong" — ask a question that reveals the contradiction
8. Adjust difficulty based on my responses (harder if I'm getting it, easier if I'm struggling)
9. Periodically summarize what we've established so far
10. End each exchange with a question that pushes slightly beyond my current understanding

**Session structure:**
- Opening: Assess my current understanding with 2-3 diagnostic questions
- Middle: Build understanding through guided discovery
- Closing: Have me synthesize and teach back the concept

Begin by asking me your first diagnostic question.`,
    platforms: ["claude", "chatgpt"],
    category: "education",
    subcategory: "Tutoring",
    tags: ["learning", "socratic-method", "tutoring", "teaching"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[SUBJECT]: Computer Science
[CONCEPT]: How recursion works and when to use it
[CURRENT_LEVEL]: I understand loops but recursion confuses me
[LEARNING_STYLE]: Hands-on with examples`,
    exampleOutput: `Great — let's figure out recursion together! Before we dive in, I want to understand where you're starting from.

**Diagnostic Question 1:** You mentioned you understand loops. Can you tell me — when you use a \`for\` loop to count from 1 to 10, what are the three things the loop needs to work? (Think about what makes it start, keep going, and eventually stop.)

Take your time with this — there's no wrong answer, and where you go with it will shape how we explore recursion.`,
    proTips: [
      "Be honest about your current level — the tutor calibrates based on your self-assessment",
      "If the AI breaks character and gives answers directly, remind it of the Socratic rules",
      "Claude tends to be more patient and nuanced in the Socratic style",
      "Ask for a 'summary of what I learned today' at the end of a session",
    ],
    relatedPromptIds: ["6", "3"],
  },
  {
    id: "15",
    slug: "meeting-notes-to-actions",
    title: "Meeting Notes to Structured Actions",
    description: "Transform raw, messy meeting notes into structured summaries with prioritized action items, decisions, and follow-up tracking.",
    prompt: `Act as an executive assistant who excels at extracting actionable intelligence from meetings.

Transform these meeting notes into a structured, shareable document:

[PASTE_NOTES]

**Meeting Context:**
- Meeting type: [TYPE] (standup/planning/review/all-hands/1:1)
- Attendees: [ATTENDEES]
- Date: [DATE]

**Produce the following:**

## 📋 MEETING SUMMARY
(3-4 sentences capturing the essential outcomes)

## ✅ DECISIONS MADE
| # | Decision | Rationale | Decided by |
|---|----------|-----------|------------|

## 🎯 ACTION ITEMS
| # | Action | Owner | Deadline | Priority | Dependencies |
|---|--------|-------|----------|----------|--------------|

## ❓ OPEN QUESTIONS
| # | Question | Who needs to answer | Deadline |
|---|----------|---------------------|----------|

## 📌 PARKING LOT
(Topics raised but deferred to future discussions)

## 🔗 FOLLOW-UP MEETINGS NEEDED
| Topic | Attendees | Suggested timing |
|-------|-----------|-----------------|

## 📊 KEY METRICS MENTIONED
(Any numbers, targets, or KPIs discussed)

Format for sharing via: [EMAIL/SLACK/NOTION/DOCUMENT]
Tone: [FORMAL/CONVERSATIONAL]`,
    platforms: ["chatgpt", "claude", "gemini", "copilot"],
    category: "business-strategy",
    subcategory: "Productivity",
    tags: ["meetings", "productivity", "organization", "project-management"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `[PASTE_NOTES]: "talked about Q2 roadmap, sarah wants to push auth feature to march, john disagrees thinks it should be april because of dependencies on the new db. budget is tight - only 120k left. need to hire 2 more devs..."
[TYPE]: Planning meeting
[FORMAT]: Slack`,
    exampleOutput: `## 📋 MEETING SUMMARY
Q2 roadmap planning session focused on three key areas: authentication feature timeline, remaining budget allocation ($120K), and engineering headcount needs. The main debate centered on auth feature timing (March vs. April), with a dependency on the database migration being the blocking factor.

## ✅ DECISIONS MADE
| # | Decision | Rationale | Decided by |
|---|----------|-----------|------------|
| 1 | Open 2 engineering roles immediately | Current team is at capacity for Q2 scope | Group consensus |

## 🎯 ACTION ITEMS
| # | Action | Owner | Deadline | Priority | Dependencies |
|---|--------|-------|----------|----------|--------------|
| 1 | Draft auth feature timeline with DB migration dependency map | John | Mar 8 | 🔴 High | DB migration plan from Sarah |
| 2 | Create job descriptions for 2 eng roles | [Unassigned] | Mar 10 | 🟡 Medium | Budget approval |...`,
    proTips: [
      "Messy notes are fine — the AI excels at finding structure in chaos",
      "Include attendee names so action items can be assigned automatically",
      "Specify your sharing format (Slack, email, Notion) for appropriate formatting",
      "Run it through Claude for the most accurate extraction of implicit decisions",
    ],
    relatedPromptIds: ["5", "12"],
  },
  {
    id: "16",
    slug: "world-building-framework",
    title: "Fictional World-Building Framework",
    description: "Create rich, internally consistent fictional worlds for novels, games, or RPG campaigns with detailed systems and story hooks.",
    prompt: `Act as a master world-builder who has designed settings for bestselling fantasy novels and AAA video games.

Build a complete fictional world with these parameters:

**World Foundation:**
- Genre: [GENRE]
- Technology level: [TECH_LEVEL]
- Core conflict driving the world: [CONFLICT]
- Unique element that defines this world: [UNIQUE_FEATURE]
- Tone: [TONE] (grimdark/hopeful/whimsical/etc.)

**Detail the following systems:**

## 1. GEOGRAPHY & CLIMATE
- Major regions with distinct characteristics
- Climate patterns and their effect on civilizations
- Text-based map description (cardinal directions)
- Natural resources and their distribution

## 2. PEOPLES & CULTURES
- 3-5 distinct cultures with unique values and customs
- Cultural tensions and alliances
- Languages or linguistic features
- Art, music, and cultural expressions

## 3. POLITICAL SYSTEMS
- Forms of government across regions
- Power structures and hierarchies
- Current political tensions
- Recent political upheavals (last 50 years)

## 4. ECONOMY & TRADE
- Primary industries per region
- Trade routes and commerce
- Currency systems
- Economic inequalities

## 5. MAGIC / TECHNOLOGY SYSTEM
- How it works (with clear rules and limitations)
- Cost of using it (nothing is free)
- Who has access and why
- How it shapes society
- What it absolutely cannot do

## 6. HISTORY TIMELINE
- 5-7 pivotal events that shaped the current world
- How each event's consequences are still felt today

## 7. STORY HOOKS
- 3 compelling story premises set in this world
- Character archetypes native to this world
- Mysteries waiting to be uncovered

**Internal consistency is paramount** — every element must connect logically.`,
    platforms: ["claude", "chatgpt"],
    category: "content-creation",
    subcategory: "World-Building",
    tags: ["worldbuilding", "fiction", "game-design", "RPG"],
    complexity: "advanced",
    popularity: 3,
    exampleInput: `[GENRE]: Science fantasy (tech + magic coexist)
[TECH_LEVEL]: Roughly Victorian-era with magitech
[CONFLICT]: Magic is a finite resource that's running out
[UNIQUE_FEATURE]: Magic is literally mined from the earth like ore`,
    exampleOutput: `## GEOGRAPHY & CLIMATE

**The Veined Continent** spans roughly 2,000 miles east-to-west, named for the luminous blue-white veins of raw *aethite* — crystallized magic — visible in exposed cliff faces and canyon walls. The continent splits into five distinct regions:

**The Corelands (Central):** Temperate forests and rolling hills sitting atop the richest aethite deposits. The mining city of Crucible (pop. 340,000) serves as the world's de facto capital, its skyline dominated by the Refinery Spires...`,
    proTips: [
      "Claude excels at maintaining internal consistency across complex world systems",
      "Start broad and deep-dive into specific regions or cultures in follow-up prompts",
      "Ask for 'internal contradiction check' to verify logical consistency",
      "Request a 'Session Zero guide' if building for a tabletop RPG campaign",
    ],
    relatedPromptIds: ["10"],
  },
  {
    id: "17",
    slug: "sales-objection-handler",
    title: "Sales Objection Response Framework",
    description: "Generate professional, empathetic responses to common sales objections with multiple response strategies for each.",
    prompt: `Act as a sales coach who has trained top-performing enterprise sales teams.

Generate response frameworks for handling this sales objection:

**Objection:** "[OBJECTION]"

**Sales Context:**
- Product/Service: [PRODUCT]
- Price point: [PRICE]
- Target buyer: [BUYER_PERSONA]
- Sales stage: [STAGE] (discovery/demo/negotiation/closing)
- Competitive alternative they're considering: [COMPETITOR]

**Provide 3 response strategies:**

## STRATEGY 1: EMPATHIZE & REDIRECT
- Acknowledge the concern genuinely
- Reframe the objection
- Bridge to value
- Closing question

## STRATEGY 2: QUESTION-LED DISCOVERY
- Questions to uncover the real concern beneath the stated objection
- Follow-up questions based on likely answers
- How to guide toward self-discovery of the solution

## STRATEGY 3: PROOF & SOCIAL PROOF
- Relevant case study or data point
- Similar customer who had the same objection
- Quantified outcome they achieved
- Testimonial language

**Also provide:**
- Warning signs this objection masks a deeper issue
- When to walk away (not every deal should be won)
- Email follow-up template if the objection comes up in writing`,
    platforms: ["chatgpt", "claude"],
    category: "sales",
    subcategory: "Objection Handling",
    tags: ["sales", "objections", "negotiation", "closing"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[OBJECTION]: "Your solution is too expensive compared to [competitor]"
[PRODUCT]: Enterprise CRM platform
[PRICE]: $85/user/month
[BUYER_PERSONA]: VP of Sales at mid-market company`,
    exampleOutput: `## STRATEGY 1: EMPATHIZE & REDIRECT

"I appreciate you being direct about that — price matters, and I'd never dismiss that concern. Can I ask you something though? When you say 'too expensive,' are you comparing the sticker price, or have you factored in the implementation time difference? The reason I ask is that [Competitor] typically requires 3-4 months of onboarding versus our 3-week guided setup. For a team of 50 reps, that's roughly 2.5 months of productivity difference..."`,
    proTips: [
      "Include the specific competitor for the most targeted counter-positioning",
      "Specify the buyer's role — a CFO objection needs different handling than a VP of Sales objection",
      "Practice the responses out loud — written-sounding responses fall flat in live sales calls",
      "Ask for 'objection prevention' follow-up — the best response is never hearing the objection",
    ],
    relatedPromptIds: ["12", "5"],
  },
  {
    id: "18",
    slug: "contract-review-analyzer",
    title: "Contract Review & Risk Analyzer",
    description: "Analyze contracts and legal documents for risks, unfavorable clauses, missing protections, and negotiation opportunities.",
    prompt: `Act as a corporate attorney with 20 years of contract review experience. This is for educational analysis only — not legal advice.

Review the following contract/clause and provide analysis:

[PASTE_CONTRACT_OR_CLAUSE]

**Contract Context:**
- Type: [TYPE] (SaaS agreement/NDA/employment/vendor/partnership)
- Your role: [PARTY_A or PARTY_B]
- Industry: [INDUSTRY]
- Contract value: [VALUE]
- Your leverage level: [HIGH/MEDIUM/LOW]

**Provide:**

## 1. CLAUSE-BY-CLAUSE ANALYSIS
For each major clause:
- Plain-English explanation
- Risk level (🔴 High / 🟡 Medium / 🟢 Low)
- What this means for you practically
- Industry standard comparison

## 2. RED FLAGS
- Clauses that are unusually aggressive
- Missing protections you should have
- Ambiguous language that could be exploited
- Unusual or non-standard terms

## 3. NEGOTIATION RECOMMENDATIONS
- Specific language changes (with redlines)
- Priority ranking for negotiations
- Compromise positions for each issue
- Walk-away points

## 4. MISSING CLAUSES
- Standard protections not included
- Recommended additions with template language

## 5. RISK SUMMARY
- Overall risk rating
- Top 3 risks to address before signing
- Estimated exposure

**Disclaimer:** This is an AI analysis for educational purposes. Consult qualified legal counsel before making decisions.`,
    platforms: ["claude", "chatgpt"],
    category: "legal",
    subcategory: "Contract Review",
    tags: ["contract", "legal", "risk-analysis", "negotiation"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `[TYPE]: SaaS vendor agreement
[YOUR ROLE]: The customer (Party B)
[PASTE_CONTRACT_OR_CLAUSE]: "Limitation of liability: In no event shall Provider's aggregate liability exceed the fees paid by Customer in the 3-month period preceding the claim..."`,
    exampleOutput: `## CLAUSE ANALYSIS

**Limitation of Liability** — Risk: 🔴 HIGH

**Plain English:** If something goes wrong (data breach, downtime, lost data), the maximum they'll pay you is 3 months of fees. If you're paying $10K/month, your maximum recovery is $30K regardless of actual damages.

**Industry Standard:** Most enterprise SaaS agreements cap liability at 12 months of fees, not 3. This is significantly below market standard and heavily favors the provider.

**Negotiation Recommendation:**
\`\`\`
CURRENT: "...fees paid in the 3-month period preceding the claim"
PROPOSED: "...fees paid in the 12-month period preceding the claim, provided that this limitation shall not apply to Provider's indemnification obligations, breaches of confidentiality, or gross negligence"
\`\`\`...`,
    proTips: [
      "Claude is the strongest choice for nuanced legal language analysis",
      "Always include which party you are — the analysis flips based on perspective",
      "For long contracts, analyze section by section rather than all at once",
      "This is educational analysis — always have a real lawyer review before signing",
    ],
    relatedPromptIds: ["5", "17"],
  },
  {
    id: "19",
    slug: "financial-model-builder",
    title: "Financial Model & Projection Builder",
    description: "Generate structured financial models with revenue projections, cost structures, and scenario analysis for business planning.",
    prompt: `Act as a financial analyst with experience in FP&A at high-growth companies.

Build a financial model for [COMPANY/PROJECT]:

**Business Details:**
- Business type: [TYPE] (SaaS/E-commerce/Marketplace/Agency/etc.)
- Stage: [STAGE] (pre-revenue/early/growth/mature)
- Current MRR/Revenue: [CURRENT_REVENUE]
- Team size: [TEAM_SIZE]
- Funding status: [FUNDING]
- Key metrics: [METRICS]

**Build the following:**

## 1. REVENUE MODEL
- Revenue streams breakdown
- Pricing tiers and assumptions
- Growth rate assumptions (justified)
- Customer acquisition projections
- Churn/retention modeling
- Net Revenue Retention (NRR) targets

## 2. COST STRUCTURE
- Fixed costs (rent, salaries, tools)
- Variable costs (COGS, hosting, support)
- Unit economics (CAC, LTV, LTV:CAC ratio)
- Hiring plan by department

## 3. THREE-YEAR PROJECTIONS
| Metric | Year 1 | Year 2 | Year 3 |
- Revenue, COGS, Gross Margin
- Operating expenses by category
- EBITDA and net income
- Cash flow
- Key ratios

## 4. SCENARIO ANALYSIS
- Base case (most likely)
- Bull case (everything goes right)
- Bear case (conservative)
- Break-even analysis

## 5. KEY ASSUMPTIONS TABLE
- Every assumption listed with source/justification
- Sensitivity analysis on top 3 assumptions

## 6. FUNDRAISING IMPLICATIONS
- Runway calculation
- Burn rate trajectory
- Suggested raise amount and timing
- Valuation framework`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "finance",
    subcategory: "Financial Planning",
    tags: ["financial-model", "projections", "FP&A", "startup"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `[TYPE]: B2B SaaS
[STAGE]: Early (6 months post-launch)
[CURRENT_REVENUE]: $18K MRR
[TEAM_SIZE]: 8
[FUNDING]: $1.5M seed round (12 months ago)`,
    exampleOutput: `## REVENUE MODEL

**Primary Revenue Stream: Subscription SaaS**

| Tier | Price/mo | Current Customers | Growth Assumption |
|------|----------|-------------------|-------------------|
| Starter | $49 | 120 | +15 net new/month |
| Pro | $149 | 68 | +8 net new/month |
| Enterprise | $499 | 4 | +1 net new/month |

**Current MRR Breakdown:** $18,000
- Starter: $5,880 (33%)
- Pro: $10,132 (56%)
- Enterprise: $1,996 (11%)

**Monthly Churn Assumption:** 4.2% (logo), 2.8% (revenue) — above SaaS median, expected at this stage...`,
    proTips: [
      "Include current revenue numbers for realistic projections rather than aspirational ones",
      "Specify your business model precisely — SaaS, marketplace, and e-commerce have different structures",
      "Ask for 'Excel formulas' as a follow-up to build a working spreadsheet model",
      "Request 'investor deck financial slides' for presentation-ready formats",
    ],
    relatedPromptIds: ["5", "1"],
  },
  {
    id: "20",
    slug: "hr-job-description-writer",
    title: "Inclusive Job Description Writer",
    description: "Create compelling, bias-free job descriptions that attract diverse talent with clear expectations and authentic employer branding.",
    prompt: `Act as a talent acquisition specialist who has written job descriptions that increased qualified applicant pools by 3x.

Write a job description for: [JOB_TITLE]

**Role Details:**
- Department: [DEPARTMENT]
- Level: [LEVEL] (entry/mid/senior/lead/director)
- Location: [LOCATION] (remote/hybrid/on-site)
- Salary range: [RANGE]
- Reports to: [MANAGER_TITLE]
- Team size: [TEAM_SIZE]

**Company Context:**
- Company: [COMPANY_NAME]
- Industry: [INDUSTRY]
- Stage: [STAGE]
- Culture keywords: [CULTURE]
- Mission: [MISSION]

**Generate:**

## JOB TITLE
(Clear, searchable, no inflated titles)

## ABOUT THE ROLE
(3-4 sentences — what makes this role exciting and impactful)

## WHAT YOU'LL DO
(8-10 specific responsibilities using action verbs)

## WHAT SUCCESS LOOKS LIKE
- 30-day milestone
- 90-day milestone
- 6-month milestone

## WHAT YOU BRING
- Required qualifications (only true must-haves)
- Nice-to-have qualifications (clearly labeled as optional)
- Traits we value (not proxies for demographics)

## WHAT WE OFFER
- Compensation details
- Benefits highlights
- Growth and development
- Culture and team

## INCLUSIVE LANGUAGE CHECK
- Flag any gendered language
- Remove unnecessary jargon
- Ensure requirements don't create artificial barriers
- Check for bias in "culture fit" language

**Rules:** No "rockstar/ninja/guru." No requirements that proxy for age or background. Focus on skills and outcomes, not credentials.`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "hr",
    subcategory: "Recruiting",
    tags: ["hiring", "job-description", "recruiting", "DEI"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `[JOB_TITLE]: Senior Frontend Engineer
[LEVEL]: Senior (IC)
[LOCATION]: Remote (US timezone overlap required)
[RANGE]: $160K-$195K + equity`,
    exampleOutput: `## Senior Frontend Engineer

**About the Role**
We're looking for a Senior Frontend Engineer to own the user experience layer of our platform, used daily by 12,000+ professionals. You'll work closely with design and backend teams to ship features that are fast, accessible, and delightful. This isn't a "build what we tell you" role — you'll influence architecture decisions, mentor junior engineers, and shape our frontend standards.

## What You'll Do
- Architect and implement complex UI features using React and TypeScript
- Champion web accessibility (WCAG 2.1 AA) and performance optimization
- Lead technical design reviews for frontend projects...`,
    proTips: [
      "Studies show listings with 6-8 requirements get 34% more applicants than those with 12+",
      "Include salary range — listings without it get 40% fewer applications",
      "Ask for a 'structured interview scorecard' as a follow-up for this role",
      "Request 'LinkedIn outreach message' variants for active sourcing",
    ],
    relatedPromptIds: ["15", "4"],
  },
  {
    id: "21",
    slug: "content-repurposing-machine",
    title: "Content Repurposing Machine",
    description: "Transform one piece of content into 10+ formats optimized for different platforms and audiences.",
    prompt: `Act as a content strategist who manages multi-platform content operations.

Take this source content and repurpose it into multiple formats:

**Source Content:**
[PASTE_CONTENT]

**Content Details:**
- Original format: [FORMAT] (blog post/video transcript/podcast/whitepaper)
- Topic: [TOPIC]
- Target audience: [AUDIENCE]
- Brand voice: [VOICE]
- Key message: [KEY_MESSAGE]

**Transform into ALL of the following:**

## 1. TWITTER/X THREAD (8-12 tweets)
- Hook tweet (must be scroll-stopping)
- Key insights as individual tweets
- Thread closer with CTA

## 2. LINKEDIN POST (1 long-form)
- Professional angle
- Personal storytelling hook
- Data or insight highlight
- Engagement question at the end

## 3. INSTAGRAM CAROUSEL (8-10 slides)
- Slide-by-slide text content
- Visual direction for each slide
- Caption with hashtags

## 4. EMAIL NEWSLETTER SECTION (200 words)
- Punchy subject line
- Key takeaway
- Link back to full content

## 5. SHORT-FORM VIDEO SCRIPT (60 seconds)
- Hook (first 3 seconds)
- Core message
- Visual suggestions
- CTA

## 6. PODCAST TALKING POINTS (5 min segment)
- Introduction framing
- 3-4 discussion points
- Audience takeaway

## 7. PULL QUOTES (5 options)
- Designed for social sharing
- Each under 280 characters

## 8. SEO META DESCRIPTION
- Under 160 characters
- Keyword-optimized`,
    platforms: ["chatgpt", "claude"],
    category: "content-creation",
    subcategory: "Content Strategy",
    tags: ["repurposing", "social-media", "content-strategy", "multi-platform"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `[PASTE_CONTENT]: (a 1500-word blog post about the future of remote work)
[AUDIENCE]: Startup founders and tech leaders
[KEY_MESSAGE]: Hybrid work isn't a compromise — it's the optimal model when done intentionally`,
    exampleOutput: `## TWITTER/X THREAD

**Tweet 1 (Hook):**
"Hybrid work" isn't a dirty word.

After analyzing 47 companies that went fully hybrid in 2024, here's what actually happened to their productivity, retention, and revenue:

🧵 A thread with real numbers →

**Tweet 2:**
First, let's kill the myth: "Hybrid = 3 days in office, 2 at home."

That's not hybrid. That's a compressed commute schedule.

Real hybrid means optimizing WHERE each type of work happens best...`,
    proTips: [
      "The longer and richer your source content, the better the repurposed outputs",
      "Specify your brand voice — professional LinkedIn posts need a different tone than Twitter threads",
      "Ask for 'content calendar' as a follow-up to schedule the repurposed content across 2 weeks",
      "Request platform-specific hashtag research for Instagram and LinkedIn",
    ],
    relatedPromptIds: ["4", "12"],
  },
  {
    id: "22",
    slug: "user-persona-development",
    title: "User Persona Development Framework",
    description: "Create detailed, research-backed user personas for product development, marketing, and UX design decisions.",
    prompt: `Act as a UX researcher with experience building personas for products with millions of users.

Develop a comprehensive user persona for [PRODUCT/SERVICE]:

**Product Context:**
- Product: [PRODUCT]
- Industry: [INDUSTRY]
- Key feature: [FEATURE]
- Current user base: [USER_BASE_INFO]
- Target market: [MARKET]

**Known user data (if available):**
[PASTE_ANY_RESEARCH_DATA]

**Create a detailed persona including:**

## PERSONA PROFILE
- Name, age, location (realistic, not generic)
- Job title and career trajectory
- Household and life situation
- Income range
- Tech savviness (1-10)
- Quote that captures their worldview

## BEHAVIORAL PATTERNS
- Daily routine relevant to your product
- How they currently solve the problem your product addresses
- Tools and platforms they use daily
- Content consumption habits
- Decision-making style (impulsive/deliberate/research-heavy)

## GOALS & MOTIVATIONS
- Primary goal (what they're trying to achieve)
- Secondary goals
- Emotional drivers (why this matters to them personally)
- Success metrics (how they measure progress)

## PAIN POINTS & FRUSTRATIONS
- Top 3 frustrations with current solutions
- Hidden pain points they may not articulate
- What makes them abandon a product
- Trust barriers

## PRODUCT INTERACTION MODEL
- How they'd discover your product
- First-use expectations
- Features they'd use most/least
- Willingness to pay
- Referral likelihood

## ANTI-PERSONA
- Who this persona is NOT
- Common assumptions that are wrong about this user
- Mistakes in designing for this persona`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "design",
    subcategory: "UX Research",
    tags: ["persona", "UX", "user-research", "product-design"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `[PRODUCT]: A meal planning app that reduces food waste
[INDUSTRY]: Consumer health/food tech
[TARGET MARKET]: Health-conscious millennials in urban areas`,
    exampleOutput: `## PERSONA PROFILE

**Priya Sharma, 31** — Product Marketing Manager, Chicago, IL

"I want to eat well and feel good about my choices, but I'm tired of throwing away half my groceries every week."

- Lives with partner in a 1BR apartment, no kids
- HHI: $142K combined
- Tech savviness: 8/10 (early adopter, uses 4+ apps daily for life management)
- Currently uses: Instacart, MyFitnessPal (sporadically), Notes app for grocery lists...`,
    proTips: [
      "Include any real user data you have — survey results, analytics, support tickets",
      "Create 3-4 personas to cover your key user segments",
      "Ask for 'jobs-to-be-done framework' as a follow-up for product strategy",
      "Request 'empathy map' format for UX team workshops",
    ],
    relatedPromptIds: ["20", "4"],
  },

  // ========== CAREER & STUDENT PROMPTS ==========
  {
    id: "23",
    slug: "professional-cv-builder",
    title: "Professional CV / Resume Builder",
    description: "Create a polished, ATS-optimized CV tailored to a specific job posting. Includes formatting guidance, keyword optimization, and achievement-focused bullet points.",
    prompt: `Act as a senior career coach and professional resume writer with 12+ years of experience placing candidates at top companies.\n\nI need you to create a professional CV/resume for the following:\n\n**My background:**\n- Current/most recent role: [JOB TITLE at COMPANY]\n- Years of experience: [NUMBER]\n- Industry: [INDUSTRY]\n- Key skills: [LIST 5-8 SKILLS]\n- Education: [DEGREE, INSTITUTION, YEAR]\n- Target role: [JOB TITLE I'M APPLYING FOR]\n- Target company (optional): [COMPANY NAME]\n\n**Job description I'm targeting:**\n[PASTE JOB DESCRIPTION HERE]\n\nPlease create my CV with:\n\n1. PROFESSIONAL SUMMARY (3-4 lines)\n- Lead with strongest qualification relevant to target role\n- Include quantified achievements\n- Mirror key phrases from the job description naturally\n\n2. WORK EXPERIENCE (for each role)\n- Use the CAR format: Challenge → Action → Result\n- Start every bullet with a strong action verb\n- Include metrics and numbers wherever possible (%, $, time saved)\n- 4-6 bullets per recent role, 2-3 for older roles\n- Tailor emphasis to match target job requirements\n\n3. SKILLS SECTION\n- Separate into Technical Skills and Soft Skills\n- Prioritize skills mentioned in the job description\n\n4. EDUCATION & CERTIFICATIONS\n\n5. ATS OPTIMIZATION NOTES\n- List keywords from the job description that are naturally incorporated\n- Formatting tips to pass ATS scanners`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Resume & CV",
    tags: ["cv", "resume", "ats", "job-search", "student", "career"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `Current role: Marketing Intern at StartupXYZ\nYears of experience: 1\nIndustry: Digital Marketing\nKey skills: Social media management, Google Analytics, Canva, copywriting, SEO, email marketing\nEducation: BA Marketing, University of Manchester, 2024\nTarget role: Junior Digital Marketing Executive`,
    exampleOutput: `SARAH CHEN\nLondon, UK | sarah.chen@email.com | linkedin.com/in/sarahchen\n\nPROFESSIONAL SUMMARY\nResults-driven marketing graduate with hands-on experience managing social media campaigns reaching 50K+ followers and improving engagement rates by 34%. Skilled in data analysis, content creation, and cross-platform strategy.\n\nEXPERIENCE\nMarketing Intern | StartupXYZ | Jun 2023 – Aug 2024\n• Managed social media across 4 platforms, growing following from 12K to 52K (+333%)\n• Analyzed campaign performance using Google Analytics, reducing cost-per-click by 22%...`,
    proTips: [
      "Always tailor your CV for each application — generic CVs get filtered out by ATS",
      "Quantify everything: 'increased sales' becomes 'increased sales by 23% over 6 months'",
      "For students: include relevant coursework, projects, volunteer work, and society leadership",
      "Ask the AI to review your existing CV against a specific job description for gap analysis",
    ],
    relatedPromptIds: ["24", "25", "26"],
  },
  {
    id: "24",
    slug: "cover-letter-writer",
    title: "Compelling Cover Letter Generator",
    description: "Write personalized, engaging cover letters that connect your experience to specific job requirements with genuine storytelling.",
    prompt: `Act as a career strategist who specializes in writing cover letters that get interviews.\n\nWrite a cover letter using:\n\n**About me:**\n- Name: [YOUR NAME]\n- Current situation: [Student/Graduate/Career changer/Employed]\n- Relevant experience: [BRIEF SUMMARY]\n- Biggest achievement: [ONE STANDOUT ACCOMPLISHMENT]\n- Why this company: [GENUINE INTEREST]\n- Why this role: [WHAT EXCITES YOU]\n\n**The role:**\n- Job title: [TITLE]\n- Company: [COMPANY NAME]\n- Key requirements: [LIST 3-5 MAIN REQUIREMENTS]\n\n**Instructions:**\n1. OPENING — Hook immediately, no "I am writing to apply for..."\n2. BODY — Two paragraphs with STAR-format stories connecting to requirements\n3. CLOSING — Genuine enthusiasm + confident call to action\n\n**Style:** Conversational but professional, max 350 words, no clichés, show personality.`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Cover Letters",
    tags: ["cover-letter", "job-application", "student", "career", "writing"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `Name: Alex Rivera\nSituation: Final-year CS student\nExperience: Built campus lost-and-found app (2,000 users), fintech internship\nAchievement: App reduced lost item reports to campus security by 60%\nCompany: Spotify — love their engineering blog\nRole: Junior Backend Engineer\nRequirements: Python, microservices, collaborative team`,
    exampleOutput: `Dear Spotify Engineering Team,\n\nWhen I read about your recent migration to a microservices architecture on the Spotify Engineering blog, I spent three hours going down a rabbit hole — then immediately refactored a monolithic project I'd been struggling with. That curiosity and drive to apply what I learn is exactly what I'd bring to the Junior Backend Engineer role.\n\nAt university, I built "FoundIt," a campus lost-and-found platform that 2,000 students now rely on daily...`,
    proTips: [
      "Research the company's recent news or blog posts to reference specifically",
      "Never restate your CV — the cover letter should add context and personality",
      "For students: focus on projects, coursework, and transferable skills",
      "Ask the AI to generate 3 different opening hooks so you can pick the strongest",
    ],
    relatedPromptIds: ["23", "25", "26"],
  },
  {
    id: "25",
    slug: "linkedin-profile-optimizer",
    title: "LinkedIn Profile Optimizer",
    description: "Transform your LinkedIn profile into a powerful personal brand that attracts recruiters. Covers headline, about section, experience, and engagement strategy.",
    prompt: `Act as a LinkedIn personal branding expert and recruiter who reviews 200+ profiles weekly.\n\n**My details:**\n- Name: [YOUR NAME]\n- Current role/status: [e.g., "CS Student at NYU" or "Marketing Manager at Acme Corp"]\n- Target audience: [Recruiters, clients, collaborators?]\n- Industry: [YOUR INDUSTRY]\n- Top 5 skills: [LIST THEM]\n- Career goal: [WHAT OPPORTUNITY ARE YOU LOOKING FOR]\n- Unique angle: [WHAT MAKES YOU DIFFERENT]\n- Achievements: [LIST 3-5 KEY ACCOMPLISHMENTS]\n\nOptimize each section:\n\n1. HEADLINE (220 chars max) — 5 options, beyond "Job Title at Company"\n2. ABOUT SECTION (2,600 chars max) — First-person, hook in first 3 lines\n3. EXPERIENCE — Impact stories, not job descriptions\n4. FEATURED SECTION — What content to pin\n5. SKILLS & ENDORSEMENTS — Top 10 prioritized by search volume\n6. ENGAGEMENT STRATEGY — Post types, frequency, comment strategy\n7. SEARCH OPTIMIZATION — Keywords recruiters search for`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "LinkedIn & Networking",
    tags: ["linkedin", "personal-branding", "networking", "student", "career", "profile"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `Name: Priya Sharma\nRole: Third-year Data Science student at Imperial College London\nTarget: Tech recruiters and data science hiring managers\nSkills: Python, SQL, TensorFlow, Data Visualization, Statistical Analysis\nGoal: Graduate data scientist role\nUnique: Combined psychology and data science — behavioral analytics\nAchievements: Published research on ML bias, Kaggle top 5%, NHS dashboard project`,
    exampleOutput: `HEADLINE OPTIONS:\n1. Data Science Student | Psychology × ML | Researching Bias in AI | Imperial College London\n2. Aspiring Data Scientist | NLP Enthusiast | Kaggle Top 5% | Building Ethical AI\n3. Data Science @ Imperial | Published Researcher | Turning Behavioral Data into Product Insights\n\nABOUT SECTION:\nI got into data science because I wanted to understand people — not just numbers.\n\nMy psychology background taught me to ask "why do humans do what they do?" Data science gives me tools to find answers at scale...`,
    proTips: [
      "Your headline is the most important SEO element — recruiters search by keywords in headlines",
      "The first 3 lines of your About section appear in search results — front-load your value",
      "For students: list projects and research as Experience entries with your university as the org",
      "Post 2-3x/week to boost profile visibility in recruiter searches",
    ],
    relatedPromptIds: ["23", "24", "26"],
  },
  {
    id: "26",
    slug: "job-interview-prep-coach",
    title: "Job Interview Preparation Coach",
    description: "Prepare for job interviews with tailored questions, STAR-format answers, and strategies for tough questions. Works for any role and experience level.",
    prompt: `Act as an experienced interview coach. Help me prepare for an upcoming interview.\n\n**Interview details:**\n- Role: [JOB TITLE]\n- Company: [COMPANY NAME]\n- Interview type: [Phone screen / Technical / Behavioral / Panel]\n- My experience level: [Student/Junior/Mid/Senior]\n\n**My background:**\n- Relevant experience: [BRIEF SUMMARY]\n- Key strengths: [LIST 3-4]\n- Potential weaknesses: [BE HONEST]\n\n**Job description highlights:**\n[PASTE KEY REQUIREMENTS]\n\nProvide:\n1. LIKELY QUESTIONS (15) — behavioral, technical, situational, curveball\n2. STRUCTURED ANSWERS (top 5) — STAR format with metrics\n3. "TELL ME ABOUT YOURSELF" — 90-second script (Present → Past → Future)\n4. QUESTIONS TO ASK — 5 thoughtful questions showing research\n5. WEAKNESS STRATEGY — Reframing techniques\n6. SALARY NEGOTIATION PREP — Market rate framework`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Interview Prep",
    tags: ["interview", "job-search", "student", "career", "preparation"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `Role: Graduate Software Engineer\nCompany: Revolut\nType: Technical + Behavioral\nLevel: Student (final year)\nExperience: 3 full-stack projects, 1 internship\nStrengths: Fast learner, strong problem-solving\nWeaknesses: Limited production experience, no fintech background`,
    exampleOutput: `BEHAVIORAL QUESTIONS:\n1. "Tell me about a time you had to learn a new technology quickly under pressure."\n2. "Describe a project where you made a difficult technical trade-off."\n\nSTAR ANSWER — Learning quickly:\nSituation: During my internship, the team needed an API integration with a payment provider.\nTask: 5 days to research, build, and test before client demo.\nAction: Daily milestones, studied API docs, pair-programmed with senior dev.\nResult: Delivered 1 day early, merged with minimal changes.`,
    proTips: [
      "Practice answers out loud — reading silently doesn't build the same confidence",
      "For students: reframe university projects as professional experience",
      "Research your interviewers on LinkedIn and prepare personalized conversation points",
      "Ask the AI to role-play as the interviewer for a mock interview session",
    ],
    relatedPromptIds: ["23", "24", "25"],
  },
  {
    id: "27",
    slug: "personal-statement-writer",
    title: "University Personal Statement Writer",
    description: "Craft compelling personal statements for university applications (UCAS, Common App, graduate school) that showcase your unique story and potential.",
    prompt: `Act as a university admissions consultant with 15 years of experience.\n\n**Application details:**\n- University/Program: [UNIVERSITY AND COURSE]\n- Application system: [UCAS / Common App / Graduate]\n- Word/character limit: [LIMIT]\n\n**About me:**\n- Academic interests: [WHAT FASCINATES YOU]\n- Relevant grades: [KEY ACHIEVEMENTS]\n- Extracurriculars: [CLUBS, SPORTS, VOLUNTEERING]\n- Formative experience: [A MOMENT THAT SHAPED YOUR INTEREST]\n- Books/resources that influenced you: [RELEVANT READING]\n- Career aspiration: [WHAT YOU HOPE TO DO]\n- What makes you unique: [YOUR ANGLE]\n\nWrite a personal statement that:\n1. Opens with a compelling hook (not "I have always been passionate about...")\n2. Weaves academic interest with personal experience\n3. Shows genuine intellectual curiosity\n4. Uses specific, vivid details\n5. Connects past → this course → future goals\n\nAlso provide: 3 alternative opening hooks, paragraph-by-paragraph outline, clichés to avoid.`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Academic Applications",
    tags: ["personal-statement", "university", "ucas", "admissions", "student"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `University: Edinburgh — BSc Computer Science\nSystem: UCAS (4,000 characters)\nInterests: AI and NLP\nGrades: A* Maths, A* Further Maths, A CS\nExtracurriculars: Coding club president, built school chatbot, taught coding to primary kids\nFormative: Watching GPT-3 demos in 2020\nUnique: Bilingual (English/Urdu) — fascinated by how language structure affects AI translation`,
    exampleOutput: `The first time I saw a machine misunderstand sarcasm, I was hooked — not because the technology failed, but because I wanted to understand why. That GPT-3 demo in 2020 didn't just show me what AI could do; it showed me the gap between processing language and understanding it. As someone who thinks in two languages daily, switching between English and Urdu, I experience that gap firsthand...`,
    proTips: [
      "Write your statement, then ask the AI to critique it as an admissions tutor would",
      "Never fabricate experiences — admissions teams can tell, and interviews will expose them",
      "For UCAS: 80% academic, 20% extracurricular. For Common App: more personal narrative",
      "Ask for subject-specific advice from admissions tutors at your target university type",
    ],
    relatedPromptIds: ["23", "14"],
  },
  {
    id: "28",
    slug: "networking-email-templates",
    title: "Professional Networking Email Templates",
    description: "Write effective cold outreach, informational interview requests, and follow-up emails for professional networking.",
    prompt: `Act as a networking and professional communication expert.\n\n**My situation:**\n- Who I am: [YOUR ROLE/STATUS]\n- Who I'm contacting: [THEIR ROLE]\n- How I found them: [LinkedIn / Event / Article]\n- My goal: [Informational interview / Mentorship / Referral / Advice]\n- Connection point: [Shared university, mutual contact, their recent post]\n\nGenerate:\n1. COLD OUTREACH EMAIL — Under 150 words, show research, small specific ask, graceful exit\n2. LINKEDIN CONNECTION REQUEST — Under 300 characters, personal, clear reason\n3. FOLLOW-UP EMAIL (7 days later) — Even shorter, add new value\n4. THANK YOU EMAIL — Reference something specific they said, one action you're taking\n5. INFORMATIONAL INTERVIEW REQUEST — Suggest 20 mins, include 2-3 sample questions`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "LinkedIn & Networking",
    tags: ["networking", "email", "linkedin", "cold-outreach", "student", "career"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `Who I am: Second-year UX Design student at Parsons\nContacting: Lead UX Researcher at Airbnb\nFound them: Conference talk on "Designing for Trust"\nGoal: Informational interview about design-to-research transition\nConnection: Their conference talk changed my thesis approach`,
    exampleOutput: `Subject: "Your 'Designing for Trust' talk changed how I approach user research"\n\nHi [Name],\n\nI watched your "Designing for Trust in Shared Spaces" talk at [Conference] last month, and your point about quantifying emotional responses completely shifted how I'm approaching my thesis project.\n\nI'm a second-year UX Design student at Parsons, increasingly drawn to the research side. Would you have 15-20 minutes for a virtual coffee? I'd love to ask about the skills that mattered most in making the design-to-research transition.\n\nI completely understand if your schedule doesn't allow it.\n\nBest,\n[Name]`,
    proTips: [
      "The best subject lines reference something specific — never use 'Quick question' alone",
      "Keep cold emails under 150 words — busy people scan, they don't read essays",
      "For students: lead with curiosity, not desperation",
      "Follow up exactly once. If no response, move on gracefully",
    ],
    relatedPromptIds: ["25", "24", "26"],
  },
  {
    id: "29",
    slug: "scholarship-essay-framework",
    title: "Scholarship Essay Framework",
    description: "Write winning scholarship essays that stand out from thousands of applications with structured approaches for merit, need, and identity-based scholarships.",
    prompt: `Act as a scholarship reviewer who has read 10,000+ applications.\n\n**Scholarship details:**\n- Name: [SCHOLARSHIP NAME]\n- Essay prompt: [THE ACTUAL QUESTION]\n- Word limit: [LIMIT]\n- Criteria: [Merit / Need / Identity / Field-specific]\n\n**About me:**\n- Academic achievements: [GPA, HONORS]\n- Community involvement: [VOLUNTEERING, LEADERSHIP]\n- Challenges overcome: [OBSTACLES]\n- Career goals: [WHAT AND WHY]\n- Why this scholarship: [GENUINE REASON]\n\nWrite an essay that:\n1. Answers the prompt directly\n2. Opens with a specific, vivid moment\n3. Shows impact through numbers\n4. Demonstrates growth\n5. Connects past to future goals\n6. Shows how this scholarship enables your plan\n\nAlso provide: What makes it stand out, 3 things reviewers look for that most miss, self-review checklist.`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Academic Applications",
    tags: ["scholarship", "essay", "student", "financial-aid", "writing"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `Scholarship: STEM Women in Leadership Award\nPrompt: "Describe a time you demonstrated leadership in STEM"\nWord limit: 500\nAchievements: 3.8 GPA, published research on water filtration\nCommunity: Founded coding workshop for girls (60 participants)\nChallenge: First-generation college student\nGoal: Environmental engineer`,
    exampleOutput: `The first girl who showed up to my coding workshop couldn't look me in the eye. Thirteen years old, dragged there by her mother, convinced she wasn't "a math person." By session eight, she was debugging my code.\n\nThat moment — watching Lily trace a logic error I'd missed — crystallized something I'd been feeling since my family first moved to the U.S.: the difference between having potential and having someone who sees it...`,
    proTips: [
      "Answer the prompt in your first paragraph — reviewers appreciate directness",
      "Use the 'So What?' test: after every statement, push toward deeper significance",
      "Specific > general: '47 students' beats 'dozens of students' every time",
      "Ask the AI to role-play as a scholarship reviewer and critique your draft",
    ],
    relatedPromptIds: ["27", "23"],
  },
  {
    id: "30",
    slug: "student-internship-finder",
    title: "Internship Application Strategy",
    description: "Create a comprehensive internship search and application strategy for students, including where to look, how to apply, and how to stand out.",
    prompt: `Act as a university career advisor who places 200+ students into internships annually.\n\n**My profile:**\n- Year of study: [YEAR]\n- Degree: [SUBJECT AND UNIVERSITY]\n- Skills: [TECHNICAL AND SOFT SKILLS]\n- Interests: [WHAT EXCITES YOU]\n- Previous experience: [ANY WORK, EVEN PART-TIME]\n- Location: [PREFERENCE]\n- Timing: [SUMMER / SEMESTER / GAP YEAR]\n- Dream companies: [LIST 3-5]\n\nCreate:\n1. SEARCH STRATEGY — Types to target, where to find (beyond LinkedIn), hidden opportunities, timeline\n2. APPLICATION MATERIALS — CV positioning, cover letter angles, portfolio recs\n3. STANDING OUT — Cold-emailing hiring managers, leveraging professors/alumni, pre-application projects\n4. INTERVIEW PREP — Common questions, technical prep, questions to ask\n5. MAKING THE MOST OF IT — First-week strategy, turning it into full-time, building network`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Internships",
    tags: ["internship", "student", "job-search", "career", "application"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `Year: 2nd year\nDegree: BSc Economics, University of Warwick\nSkills: Excel, basic Python, research, writing\nInterests: Consulting, financial analysis, sustainability\nExperience: Part-time retail, economics society committee\nLocation: London\nTiming: Summer 2025\nDream companies: McKinsey, Deloitte, Unilever`,
    exampleOutput: `TIER 1 — Dream Companies (Apply Oct-Dec, highly competitive):\n• McKinsey, Deloitte: Formal programs, November deadlines\n• <5% acceptance rate — apply but don't depend on these alone\n\nTIER 2 — Strong Alternatives (Nov-Feb):\n• Mid-tier consulting: Kearney, Roland Berger, FTI Consulting\n• ESG-focused: Sustainalytics, S&P Global ESG, EY Climate Change team\n\nTIER 3 — Hidden Gems (Jan-Apr):\n• Sustainability startups, research internships via professors, think tanks...`,
    proTips: [
      "Start applying 4-6 months before — top internships fill early",
      "Apply to 30-50 positions across all tiers — it's a numbers game",
      "Ask the AI to write a cold email to a specific company about internships",
      "Request case interview practice questions for consulting prep",
    ],
    relatedPromptIds: ["23", "24", "26"],
  },

  // ========== MORE MARKETING ==========
  {
    id: "31",
    slug: "social-media-content-calendar",
    title: "Social Media Content Calendar Generator",
    description: "Create a month-long content calendar with post ideas, captions, hashtags, and optimal posting times for any platform.",
    prompt: `Act as a social media strategist managing 100K+ follower accounts. Create a 30-day content calendar.\n\n**Brand:**\n- Business: [NAME AND WHAT YOU DO]\n- Audience: [WHO]\n- Platforms: [Instagram / TikTok / LinkedIn / X]\n- Voice: [Fun / Professional / Educational]\n- Content pillars: [3-4 THEMES]\n- Upcoming events: [DATES TO PLAN AROUND]\n- Monthly goal: [Awareness / Engagement / Leads]\n\nFor each day provide:\n1. Platform(s)\n2. Content type (carousel, reel, story, text post)\n3. Topic + scroll-stopping hook\n4. Full caption with emojis and line breaks\n5. Hashtag set (10-15)\n6. Best posting time\n7. Engagement CTA`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "marketing",
    subcategory: "Social Media",
    tags: ["social-media", "content-calendar", "marketing", "strategy"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `Brand: "GreenBrew" — organic cold brew coffee subscription\nAudience: Health-conscious millennials, 25-35\nPlatforms: Instagram + TikTok\nVoice: Fun, slightly cheeky, wellness-focused\nPillars: Health benefits, Behind the brew, Customer stories, Sustainability\nGoal: Grow Instagram to 10K`,
    exampleOutput: `WEEK 1 — AWARENESS & EDUCATION\n\nDay 1 (Monday) — Instagram Carousel\nHook: "Your coffee habit is lying to you. 🫣"\nCaption: "We hate to break it to you, but that triple-shot latte at 3pm isn't helping...\n[Slide 1] The caffeine crash cycle, explained\n[Slide 2] Why cold brew hits different (67% less acid)..."\nHashtags: #coldbrewcoffee #morningroutine #healthycoffee...`,
    proTips: [
      "Batch-create content weekly for consistency",
      "Ask the AI to generate 5 hooks for each post and pick the best",
      "80/20 rule: 80% value, 20% promotional",
      "Request platform-specific adaptations — LinkedIn ≠ TikTok",
    ],
    relatedPromptIds: ["4", "21", "12"],
  },
  {
    id: "32",
    slug: "seo-content-brief",
    title: "SEO Content Brief Generator",
    description: "Create detailed content briefs for SEO-optimized articles with keyword strategy, outline, and competitor analysis.",
    prompt: `Act as an SEO content strategist who has ranked 500+ articles on page 1.\n\n**Target keyword:** [PRIMARY KEYWORD]\n**Secondary keywords:** [3-5 RELATED]\n**Content type:** [Blog / Landing page / Pillar page]\n**Audience:** [WHO READS THIS]\n**Goal:** [Traffic / Leads / Authority]\n\nGenerate:\n1. KEYWORD ANALYSIS — Search intent, title tag (<60 chars), meta description (<160 chars), URL slug\n2. CONTENT OUTLINE — H1, H2s, H3s, key points, word count target, internal links\n3. COMPETITOR INSIGHTS — What top 3 articles cover, content gaps, People Also Ask\n4. SPECIFICATIONS — Tone, media needs, featured snippet format, E-E-A-T signals\n5. DISTRIBUTION — Social angles, email hook, repurposing ideas`,
    platforms: ["chatgpt", "claude", "gemini", "perplexity"],
    category: "marketing",
    subcategory: "SEO",
    tags: ["seo", "content-strategy", "blogging", "marketing"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `Keyword: "how to start a podcast in 2025"\nSecondary: "podcast equipment beginners", "podcast hosting", "podcast launch checklist"\nType: Pillar page\nAudience: Aspiring podcasters, creators\nGoal: Organic traffic + lead gen for podcast course`,
    exampleOutput: `KEYWORD ANALYSIS:\nIntent: Informational (how-to guide)\nTitle: "How to Start a Podcast in 2025: Complete Beginner's Guide"\nMeta: "Learn how to start a podcast from scratch — equipment, hosting, recording, editing, and launch strategy. Free checklist included."\nURL: /how-to-start-a-podcast\n\nOUTLINE:\nH1: How to Start a Podcast in 2025: The Complete Step-by-Step Guide\nH2: Why Start a Podcast in 2025?\n  H3: Podcast industry growth statistics\n  H3: Why podcasting beats blogging for certain niches...`,
    proTips: [
      "Use Perplexity for competitor analysis — it cites sources directly",
      "Ask for 'People Also Ask' questions for an FAQ section",
      "Request the brief in table format for writer handoff",
      "Follow up with 'generate the full article from this brief'",
    ],
    relatedPromptIds: ["21", "31"],
  },

  // ========== MORE DEVELOPMENT ==========
  {
    id: "33",
    slug: "debug-assistant",
    title: "Systematic Debugging Assistant",
    description: "Methodically debug code issues by analyzing error messages, identifying root causes, and providing fixes with explanations.",
    prompt: `Act as a senior software engineer with deep debugging expertise.\n\n**Context:**\n- Language/Framework: [e.g., "React + TypeScript"]\n- Expected behavior: [WHAT SHOULD HAPPEN]\n- Actual behavior: [WHAT HAPPENS]\n- Error message: [PASTE ERROR]\n- When it started: [AFTER WHAT CHANGE]\n\n**The code:**\n\`\`\`\n[PASTE RELEVANT CODE]\n\`\`\`\n\nPlease:\n1. DIAGNOSE — Root cause, possible causes ranked by likelihood\n2. FIX — Corrected code with inline comments\n3. EXPLAIN — Why it occurred, how to prevent similar issues\n4. VERIFY — Test cases to confirm the fix, edge cases to check`,
    platforms: ["chatgpt", "claude", "gemini", "copilot"],
    category: "development",
    subcategory: "Debugging",
    tags: ["debugging", "code", "error-fixing", "programming"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `Language: TypeScript + React\nExpected: Component re-renders when state changes\nActual: Stale state in event handler inside useEffect\nError: No error, just wrong behavior`,
    exampleOutput: `DIAGNOSIS:\nThis is a classic "stale closure" problem. The event listener created in useEffect captures the initial state value. When state updates, the listener still references the old value.\n\nFIX:\nUse a ref to track current state, or the functional updater: setState(prev => prev + 1) instead of setState(count + 1)...`,
    proTips: [
      "Always include the full error message — the stack trace is critical",
      "Describe what changed right before the bug appeared",
      "Ask 'explain as if I'm a junior developer' for learning-focused explanations",
      "Follow up with 'write a test that would have caught this bug'",
    ],
    relatedPromptIds: ["2", "8"],
  },
  {
    id: "34",
    slug: "database-schema-designer",
    title: "Database Schema Designer",
    description: "Design normalized, efficient database schemas with relationships, indexes, and migration plans for any application.",
    prompt: `Act as a database architect. Design a database schema for my application.\n\n**Details:**\n- App description: [WHAT IT DOES]\n- Expected users: [SCALE]\n- Key entities: [MAIN DATA OBJECTS]\n- Key relationships: [HOW THEY RELATE]\n- Read/write ratio: [Read-heavy / Write-heavy / Balanced]\n- Database: [PostgreSQL / MySQL / MongoDB / No preference]\n\nProvide:\n1. ENTITY-RELATIONSHIP DIAGRAM (text-based) — Tables, columns, types, keys, indexes\n2. SCHEMA SQL — CREATE TABLE statements with best practices\n3. RELATIONSHIPS — One-to-one, one-to-many, many-to-many, cascade rules\n4. PERFORMANCE — Indexes, query patterns, caching\n5. MIGRATION PLAN — Creation order, seed data, extensibility notes`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "development",
    subcategory: "Database Design",
    tags: ["database", "schema", "sql", "architecture"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `App: Online course platform (mini Udemy)\nUsers: 50,000 first year\nEntities: Users, Courses, Lessons, Enrollments, Reviews, Payments\nRelationships: Users create courses, users enroll, courses have lessons\nRead/write: Read-heavy\nDatabase: PostgreSQL`,
    exampleOutput: `users\n├── id (UUID, PK)\n├── email (VARCHAR(255), UNIQUE, NOT NULL)\n├── display_name (VARCHAR(100), NOT NULL)\n├── role (ENUM: 'student', 'instructor', 'admin')\n├── created_at (TIMESTAMPTZ, DEFAULT NOW())\n└── INDEX: idx_users_email\n\ncourses\n├── id (UUID, PK)\n├── instructor_id (UUID, FK → users.id)\n├── title (VARCHAR(200), NOT NULL)\n├── slug (VARCHAR(200), UNIQUE)...`,
    proTips: [
      "Start with the queries you need, then design the schema to support them",
      "Ask for 'query examples for common operations' to validate the design",
      "Request a 'schema evolution plan' for anticipated features",
      "Follow up with 'write the RLS policies for this schema' for security",
    ],
    relatedPromptIds: ["7", "11"],
  },

  // ========== MORE BUSINESS ==========
  {
    id: "35",
    slug: "business-model-canvas",
    title: "Business Model Canvas Generator",
    description: "Create a comprehensive Business Model Canvas with all 9 building blocks, strategic insights, and actionable next steps.",
    prompt: `Act as a startup advisor. Create a complete Business Model Canvas.\n\n**Business idea:**\n- Description: [2-3 SENTENCES]\n- Industry: [SECTOR]\n- Stage: [Idea / Pre-launch / Early revenue / Growth]\n- Target market: [WHO]\n\nCover all 9 blocks:\n1. CUSTOMER SEGMENTS — Primary/secondary with demographics\n2. VALUE PROPOSITIONS — Core value per segment, differentiation\n3. CHANNELS — Discovery → Purchase → Delivery\n4. CUSTOMER RELATIONSHIPS — Type per segment, acquisition vs. retention\n5. REVENUE STREAMS — Pricing model options with recommendations\n6. KEY RESOURCES — Physical, intellectual, human, financial\n7. KEY ACTIVITIES — Critical activities prioritized\n8. KEY PARTNERSHIPS — Alliances, suppliers, build vs. buy\n9. COST STRUCTURE — Fixed vs. variable, biggest drivers\n\nAlso: Top 3 risks + mitigations, first 90-day action plan, key assumptions to validate.`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "business-strategy",
    subcategory: "Business Planning",
    tags: ["business-model", "startup", "strategy", "canvas"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `Business: AI meal planning app with personalized plans based on dietary restrictions, budget, and local grocery prices\nIndustry: HealthTech / FoodTech\nStage: Idea (have prototype)\nTarget: Busy parents wanting healthy eating without the planning stress`,
    exampleOutput: `CUSTOMER SEGMENTS:\nPrimary: Busy parents (dual income, 1-3 kids, 28-42)\n- Cook 3-5x/week but find planning stressful\n- Spend $600-900/month on groceries\n- Currently use: Pinterest recipes, Notes app, or nothing (impulse shop)\nSecondary: Health-focused millennials with dietary restrictions...`,
    proTips: [
      "Fill what you know, mark unknowns — the gaps ARE your research priorities",
      "Ask for a 'Lean Canvas' variation for early-stage startups",
      "Follow up with 'identify the riskiest assumption and design a test'",
      "Request a comparison canvas for your top competitor",
    ],
    relatedPromptIds: ["1", "5"],
  },

  // ========== MORE FINANCE ==========
  {
    id: "36",
    slug: "personal-budget-planner",
    title: "Personal Budget & Financial Plan Creator",
    description: "Create a personalized budget with savings strategies, debt payoff plans, and financial goal tracking. Great for students and young professionals.",
    prompt: `Act as a certified financial planner helping someone build their first budget.\n\n**My finances:**\n- Monthly income (after tax): [AMOUNT]\n- Income sources: [Salary / Freelance / Part-time / Student loan]\n- Fixed expenses: [LIST WITH AMOUNTS]\n- Variable expenses: [ESTIMATES]\n- Current savings: [TOTAL]\n- Debts: [BALANCES AND INTEREST RATES]\n- Financial goals: [e.g., emergency fund, pay off card, save for trip]\n- Timeline: [WHEN TO ACHIEVE]\n\nCreate:\n1. BUDGET BREAKDOWN — 50/30/20 framework adapted to your situation\n2. SAVINGS PLAN — Emergency fund target, goal-specific accounts\n3. DEBT PAYOFF — Avalanche vs. Snowball comparison for your debts\n4. SPENDING OPTIMIZATION — 5 specific, actionable cuts\n5. MONTHLY TRACKING — Categories, weekly check-ins, red flags\n6. NEXT STEPS — This week, 30-day milestones, 6-month review`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "finance",
    subcategory: "Personal Finance",
    tags: ["budget", "personal-finance", "savings", "student"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `Income: $2,800/month (TA + freelance tutoring)\nFixed: Rent $950, utilities $80, phone $45, Spotify $11, gym $30, loan min $150\nVariable: Groceries ~$300, dining ~$200, transport ~$100, entertainment ~$150\nSavings: $1,200\nDebts: Student loan $28K at 5.5%, credit card $2,100 at 19.9%\nGoals: $5K emergency fund, pay off card, save $2K for trip\nTimeline: 12 months`,
    exampleOutput: `YOUR BUDGET ANALYSIS:\nIncome: $2,800 | Current spending: ~$2,916 — you're $116 OVER budget.\n\nPRIORITY 1: Close the gap\nOPTIMIZED BUDGET:\nNeeds (55%=$1,540): Rent $950, utilities $80, phone $45, groceries $250, transport $80, loan $135\nWants (20%=$560): Dining $100, entertainment $80, gym $30, Spotify $11, clothing $40\nSavings/Debt (25%=$700): Credit card $400 (aggressive), emergency $200, trip $100...`,
    proTips: [
      "Be brutally honest about spending — the AI can only help with accurate numbers",
      "For students: include seasonal income changes (summer vs. term-time)",
      "Ask for a 'bare bones budget' to see your absolute minimum",
      "Follow up with 'create a spending tracker spreadsheet format'",
    ],
    relatedPromptIds: ["19"],
  },

  // ========== MORE EDUCATION ==========
  {
    id: "37",
    slug: "study-guide-creator",
    title: "Exam Study Guide Creator",
    description: "Create comprehensive study guides with key concepts, practice questions, mnemonics, and spaced repetition schedules for any subject.",
    prompt: `Act as an expert educator and learning scientist. Create a study guide for an upcoming exam.\n\n**Exam details:**\n- Subject: [COURSE]\n- Topics: [LIST MAIN TOPICS]\n- Format: [Multiple choice / Essay / Problem-solving / Mixed]\n- Difficulty: [Introductory / Intermediate / Advanced]\n- Time until exam: [DAYS/WEEKS]\n- My understanding: [Weak vs. strong areas]\n\nCreate:\n1. TOPIC BREAKDOWN — Key concepts, definitions, formulas per topic\n2. MEMORY AIDS — Mnemonics, analogies, connection maps\n3. PRACTICE QUESTIONS (20) — Mix matching exam format, with detailed explanations\n4. STUDY SCHEDULE — Day-by-day plan with spaced repetition\n5. EXAM STRATEGIES — Time management, approach for uncertain questions, last-minute checklist`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "education",
    subcategory: "Study & Exams",
    tags: ["study-guide", "exam-prep", "student", "education"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `Subject: PSY 101\nTopics: Memory, Learning theories, Developmental psychology, Social psychology, Research methods\nFormat: 60 MCQ + 2 essays\nDifficulty: Introductory\nTime: 10 days\nStrong: Memory/cognition. Weak: Research methods, developmental`,
    exampleOutput: `TOPIC 1: MEMORY & COGNITION (Your strength — review, don't re-learn)\n\nKey Concepts:\n• Atkinson-Shiffrin: Sensory → Short-term → Long-term\n• Working Memory (Baddeley): Central executive + phonological loop + visuospatial sketchpad\n• Encoding: Structural (shallow) → Phonemic → Semantic (deepest)\n\nMnemonic: "Some Students Love" = Sensory → Short-term → Long-term\n\nSTUDY SCHEDULE:\nDay 1-2: Research methods deep dive (weakest, 3 hrs/day)\nDay 3-4: Developmental psychology (2.5 hrs/day)...`,
    proTips: [
      "Study weakest topics first when motivation is highest",
      "Ask the AI to quiz you interactively after each topic",
      "Use the Feynman Technique: 'Explain this as if teaching a 12-year-old'",
      "Request essay answer frameworks for each potential essay topic",
    ],
    relatedPromptIds: ["14", "3"],
  },
  {
    id: "38",
    slug: "essay-outline-builder",
    title: "Academic Essay Outline Builder",
    description: "Create structured, well-argued essay outlines with thesis development, evidence mapping, and paragraph-level planning.",
    prompt: `Act as a university writing center tutor. Build a strong essay outline.\n\n**Essay details:**\n- Topic/Question: [THE ESSAY QUESTION]\n- Subject: [DISCIPLINE]\n- Type: [Argumentative / Analytical / Compare-contrast / Research]\n- Word count: [TARGET]\n- Sources required: [NUMBER AND TYPE]\n- Preliminary thesis: [YOUR INITIAL ARGUMENT]\n\nCreate:\n1. THESIS — Refined statement, 3 alternatives, counter-argument to address\n2. ESSAY STRUCTURE — Introduction, body paragraphs (topic sentence, evidence, analysis, transitions), conclusion\n3. ARGUMENT MAP — Claims, evidence, counter-arguments, logical flow\n4. RESEARCH GUIDANCE — Search terms, source types, credibility evaluation\n5. WRITING TIPS — Academic verbs, logical fallacies to avoid, quote integration, submission checklist`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "education",
    subcategory: "Academic Writing",
    tags: ["essay", "academic-writing", "student", "outline", "thesis"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `Topic: "To what extent has social media changed political participation among young people?"\nSubject: Political Science\nType: Argumentative\nWord count: 2,500\nSources: 8-10 academic\nThesis: "Social media has increased awareness but not meaningful participation"`,
    exampleOutput: `REFINED THESIS:\n"While social media has increased political awareness among 18-25 year olds, its impact on substantive participation — voting, organizing, and policy engagement — remains limited and unevenly distributed across socioeconomic lines."\n\nBODY 1 — "The Awareness Boom" (500 words)\nTopic: "Social media has transformed how young people encounter political information."\nEvidence: Pew Research data on news consumption via social media\nAnalysis: Distinguish passive exposure from active information-seeking...`,
    proTips: [
      "Write your thesis AFTER the outline — research should shape your argument",
      "Ask the AI to 'steelman the counter-argument' to strengthen your rebuttal",
      "Use the outline as a living document — update as you find sources",
      "Request transition phrases for academic writing to improve flow",
    ],
    relatedPromptIds: ["3", "14", "37"],
  },

  // ========== MORE SALES ==========
  {
    id: "39",
    slug: "cold-email-sequence",
    title: "B2B Cold Email Sequence Builder",
    description: "Create multi-touch cold email sequences for B2B outreach with personalization, follow-up cadences, and A/B testing variants.",
    prompt: `Act as a B2B sales development expert with 35%+ open rates. Build a cold email sequence.\n\n**Campaign:**\n- Product/Service: [WHAT YOU SELL]\n- Target persona: [JOB TITLE AND COMPANY TYPE]\n- Pain point: [THE PROBLEM]\n- Differentiator: [WHY YOU]\n- Social proof: [CLIENTS, RESULTS]\n- CTA: [Demo / Trial / Download / Reply]\n\nCreate 5 emails:\n1. The Opener (Day 0)\n2. The Value Add (Day 3)\n3. The Social Proof (Day 7)\n4. The Breakup Warning (Day 14)\n5. The Breakup (Day 21)\n\nEach email: 2 subject lines for A/B test, preview text, body (<100 words), personalization variables, CTA, timing.\n\nAlso: LinkedIn touchpoints between emails, phone script for warm prospects, response templates.`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "sales",
    subcategory: "Outreach",
    tags: ["cold-email", "b2b-sales", "outreach", "email-sequence"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `Product: AI proposal software (80% faster proposal creation)\nTarget: VP Sales at mid-market SaaS (50-500 employees)\nPain: Teams spend 5+ hours per proposal\nDifferentiator: Auto-pulls CRM data + learns from winning proposals\nProof: 200+ SaaS companies, "Saved Acme Corp 15 hrs/week per rep"\nCTA: 15-min demo`,
    exampleOutput: `EMAIL 1 — THE OPENER (Tuesday 8:30 AM)\n\nSubject A: "[Company] proposals taking too long?"\nSubject B: "Quick question about [Company]'s sales cycle"\n\nHi [First Name],\n\nI noticed [Company] is hiring 3 new SDRs — congrats on the growth.\n\nQuick question: how many hours does your team spend on each proposal?\n\nAt companies like [Similar Company], reps were spending 5+ hours per proposal. After switching to [Product], that dropped to under 45 minutes — with 28% higher win rate.\n\nWorth a 15-minute look? [Calendar link]\n\n[Your name]`,
    proTips: [
      "Personalization in line 1 is the biggest driver of reply rates",
      "Under 100 words — every extra sentence loses ~2% engagement",
      "Generate 10 subject line variants and A/B test the top 2",
      "Request objection handling responses for common replies",
    ],
    relatedPromptIds: ["17", "12"],
  },

  // ========== MORE CONTENT CREATION ==========
  {
    id: "40",
    slug: "youtube-script-writer",
    title: "YouTube Video Script Writer",
    description: "Write engaging YouTube scripts with hook formulas, retention strategies, and SEO-optimized titles and descriptions.",
    prompt: `Act as a YouTube strategist for 100K+ subscriber channels. Write a retention-optimized script.\n\n**Video:**\n- Topic: [WHAT THE VIDEO IS ABOUT]\n- Niche: [CHANNEL FOCUS]\n- Length: [5 / 10 / 15 / 20+ min]\n- Audience: [WHO WATCHES]\n- Style: [Educational / Entertaining / Tutorial]\n- Key takeaway: [WHAT VIEWERS LEARN OR FEEL]\n\nProvide:\n1. TITLES (5 variants) — Curiosity, number, how-to, each under 60 chars\n2. THUMBNAIL CONCEPT — Visual, text overlay (3-4 words), emotion\n3. SCRIPT — Hook (30s), intro (30-60s), body with retention bumps every 2-3 min, outro with CTA\n4. DESCRIPTION & TAGS — SEO-optimized, timestamps, 15-20 tags`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "content-creation",
    subcategory: "Video Content",
    tags: ["youtube", "video-script", "content-creation", "seo"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `Topic: "5 Python projects that will actually get you hired"\nNiche: Programming tutorials for career changers\nLength: 12 minutes\nAudience: Self-taught devs, bootcamp grads (25-35)\nStyle: Educational + motivational`,
    exampleOutput: `TITLES:\n1. "5 Python Projects That Actually Get You Hired (Not ToDo Apps)"\n2. "I Reviewed 200 Dev Portfolios — These 5 Projects Stand Out"\n3. "Stop Building ToDo Apps — Make These Instead"\n\nHOOK:\n"I've reviewed over 200 junior developer portfolios in the last year, and I can tell you exactly what makes hiring managers stop scrolling. It's not another weather app. [PAUSE] The developers who get callbacks build projects that solve real problems..."`,
    proTips: [
      "First 30 seconds determine if 70% of viewers stay — obsess over the hook",
      "Generate 10 hook variations and pick the most surprising",
      "Include [VISUAL CUE] markers for B-roll and screen recording switches",
      "Request a community post teaser to build anticipation",
    ],
    relatedPromptIds: ["21", "31"],
  },

  // ========== MORE CAREER ==========
  {
    id: "41",
    slug: "linkedin-post-writer",
    title: "LinkedIn Post & Thought Leadership Writer",
    description: "Write engaging LinkedIn posts that build your professional brand, from story posts to carousel formats that drive engagement.",
    prompt: `Act as a LinkedIn creator with 50K+ followers. Help me write content.\n\n**Profile:**\n- Role: [CURRENT ROLE]\n- Industry: [INDUSTRY]\n- Expertise: [WHAT YOU KNOW]\n- Audience: [WHO SHOULD SEE THIS]\n- Goal: [Authority / Job search / Leads / Community]\n\n**Post:**\n- Topic: [WHAT TO POST ABOUT]\n- Format: [Story / Listicle / Hot take / Carousel / Poll]\n- Tone: [Inspirational / Educational / Contrarian / Vulnerable]\n\nGenerate:\n1. THE POST — Strong opener, line breaks, storytelling, engagement CTA, 3-5 hashtags\n2. CAROUSEL VERSION — Slide-by-slide content (10 slides max)\n3. ENGAGEMENT STRATEGY — Best time, comment strategy, who to tag, follow-up post idea`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "LinkedIn & Networking",
    tags: ["linkedin", "thought-leadership", "personal-brand", "career"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `Role: Junior Data Analyst (first job after bootcamp)\nIndustry: Tech / Data\nTopic: Lessons from first 90 days\nFormat: Story post\nTone: Vulnerable + educational\nGoal: Community building`,
    exampleOutput: `90 days ago, I walked into my first data analyst role terrified I'd be exposed as a fraud.\n\nHere's what actually happened:\n\nWeek 1: I couldn't understand a single SQL query in the codebase. Stayed late every night, too embarrassed to ask for help.\n\nWeek 3: I finally asked a senior analyst to explain a query. She said: "I wrote that 2 years ago and I also don't understand it anymore."\n\nThat was the moment everything changed.\n\n5 things I wish someone told me before Day 1:\n\n1. Nobody expects you to know everything\n→ They expect you to learn and ask questions...`,
    proTips: [
      "First line is everything — 2 lines before 'see more'. Make them count",
      "Post 7-9 AM Tuesday-Thursday for maximum reach",
      "Engage with 10-15 posts before and after publishing",
      "Ask for a '5-post content series' for sustained visibility",
    ],
    relatedPromptIds: ["25", "28", "31"],
  },
  {
    id: "42",
    slug: "career-pivot-strategy",
    title: "Career Pivot Strategy Planner",
    description: "Create a structured plan for changing careers with skill gap analysis, transition timeline, and positioning strategy.",
    prompt: `Act as a career transition coach.\n\n**My situation:**\n- Current role/field: [WHERE I AM]\n- Target role/field: [WHERE I WANT TO GO]\n- Years in current career: [NUMBER]\n- Transferable skills: [SKILLS THAT APPLY TO BOTH]\n- Why I want to change: [MOTIVATION]\n- Timeline: [WHEN TO SWITCH]\n- Constraints: [Financial, location, education]\n\nCreate:\n1. SKILL GAP ANALYSIS — What transfers, what to develop, what differentiates\n2. BRIDGE EXPERIENCES — Freelance, volunteer, side projects, internal transfers\n3. POSITIONING — Resume framing, LinkedIn rewrite, elevator pitch, cover letter angle\n4. TIMELINE — Month-by-month plan with milestones and decision points\n5. NETWORKING PLAN — Communities, informational interview targets, warm introductions`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Career Development",
    tags: ["career-change", "career-pivot", "transition", "professional-development"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `Current: High school English teacher (5 years)\nTarget: UX Writer / Content Designer at tech company\nTransferable: Writing, communication, user empathy, curriculum design, simplifying complexity\nWhy: More creative challenge, better pay, tech interest\nTimeline: 6 months\nConstraints: Need to maintain income, can't do full-time bootcamp`,
    exampleOutput: `ALREADY HAVE (Teacher Superpowers):\n✅ User empathy — designing for "users" (students) with varying needs for 5 years\n✅ Information architecture — curriculum design IS content structuring\n✅ Simplifying complexity — explaining Shakespeare to 15-year-olds > writing button copy\n\nNEED TO BUILD:\n🔧 UX writing fundamentals (2-3 months)\n   → Google UX Design Certificate (Coursera, $39/month)\n   → Book: "Strategic Writing for UX" by Torrey Podmajersky\n🔧 Design thinking (1 month)\n   → Free: IDEO's "Introduction to Design Thinking"...`,
    proTips: [
      "Career changers who articulate WHY they're switching outperform those who can't",
      "Build 3 portfolio projects in your target field before applying",
      "Ask the AI to rewrite your teaching experience as UX-relevant",
      "Request 'day-in-the-life of [target role]' to validate your interest",
    ],
    relatedPromptIds: ["23", "25", "26"],
  },
  {
    id: "43",
    slug: "portfolio-project-ideas",
    title: "Portfolio Project Ideas Generator",
    description: "Generate recruiter-approved portfolio project ideas tailored to your target role, with scope definitions and implementation guidance.",
    prompt: `Act as a hiring manager who reviews 100+ portfolios monthly. Generate standout project ideas.\n\n**My details:**\n- Target role: [WHAT JOB]\n- Skill level: [Beginner / Intermediate / Advanced]\n- Technologies I know: [LIST]\n- Technologies I'm learning: [LIST]\n- Time per project: [HOURS/WEEK]\n- Portfolio gaps: [WHAT'S MISSING]\n\nFor each idea (generate 5):\n1. NAME & CONCEPT — Why it impresses, which job requirements it demonstrates\n2. SCOPE — MVP (1-2 weeks), V2 (stretch goals), out of scope\n3. TECHNICAL — Architecture, key tech, APIs, deployment\n4. STANDOUT FACTOR — How it differs from tutorial projects, interview talking points\n5. README TEMPLATE — Professional structure, demo gif, lessons learned`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Portfolio & Projects",
    tags: ["portfolio", "projects", "student", "career", "programming"],
    complexity: "intermediate",
    popularity: 5,
    exampleInput: `Target: Frontend Developer (React)\nLevel: Intermediate\nKnow: React, TypeScript, Tailwind, REST APIs\nLearning: Next.js, testing, state management\nTime: 10 hrs/week\nGaps: No real-world data integration, no responsive complex UI`,
    exampleOutput: `PROJECT 1: "AirQuality Dashboard"\nConcept: Real-time air quality monitoring with EPA/OpenAQ APIs, location alerts, trend charts.\nWhy it impresses: Shows API integration, data viz, responsive design, real-world utility.\n\nMVP (Week 1-2):\n• Location search with autocomplete\n• Current AQI with health recommendations\n• 7-day chart (Recharts)\n• Mobile-first responsive\n\nV2 (Week 3):\n• Push notifications for alerts\n• Compare multiple cities\n• Dark mode\n\nInterview talking point: "The hardest part was normalizing data from two API providers with inconsistent timestamp formats..."`,
    proTips: [
      "One polished project beats five half-finished ones",
      "Include a live demo link AND a 30-second GIF in your README",
      "Ask for 'interview questions about this project' to prepare",
      "Request 'how to present this in a 2-minute walkthrough'",
    ],
    relatedPromptIds: ["23", "26", "33"],
  },
  {
    id: "44",
    slug: "skill-learning-roadmap",
    title: "Skill Learning Roadmap Creator",
    description: "Create a structured learning plan for any skill with curated resources, milestones, projects, and accountability strategies.",
    prompt: `Act as a learning strategist. Create a personalized learning roadmap.\n\n**What I want to learn:**\n- Skill: [WHAT]\n- Current level: [Beginner / Some basics / Intermediate]\n- Goal: [WHAT I WANT TO DO WHEN DONE]\n- Time: [HOURS/WEEK]\n- Learning style: [Video / Reading / Hands-on / Mix]\n- Budget: [Free only / Up to $X]\n- Deadline: [WHEN I NEED THIS]\n\nCreate:\n1. LEARNING PATH — 4 phases: Foundations → Core → Applied → Advanced\n2. RESOURCES — Free + paid per phase, community resources\n3. MILESTONE PROJECTS — One per phase, increasingly challenging\n4. WEEKLY SCHEDULE — Theory vs. practice balance (70% practice)\n5. ACCOUNTABILITY — Progress tracking, self-assessment, plateau strategies\n6. WHAT TO SKIP — Overrated resources, time-wasting traps`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "education",
    subcategory: "Self-Learning",
    tags: ["learning", "roadmap", "self-study", "student", "skill-development"],
    complexity: "beginner",
    popularity: 5,
    exampleInput: `Skill: Web development (frontend)\nLevel: Complete beginner (basic HTML from school)\nGoal: Build professional websites, get a junior dev job\nTime: 15 hrs/week\nStyle: Hands-on + video tutorials\nBudget: Under $50/month\nDeadline: 6 months`,
    exampleOutput: `PHASE 1: FOUNDATIONS (Weeks 1-4)\n\nWeek 1-2: HTML & CSS Fundamentals\n• freeCodeCamp Responsive Web Design (FREE, ~30 hours)\n• Kevin Powell YouTube for CSS tricks\n• Daily: Build one small thing (button, card, nav)\n\nWeek 3-4: CSS Layout Mastery\n• CSS Grid + Flexbox (Wes Bos — FREE)\n• Project: Rebuild Apple.com or Stripe.com homepage\n\nMILESTONE 1: Personal portfolio (HTML + CSS only)\nDeploy on Netlify. Must be responsive. Must look professional...`,
    proTips: [
      "Learn in public — share progress on LinkedIn for accountability",
      "The best resource is the one you'll finish — don't optimize endlessly",
      "Ask the AI to quiz you after each phase",
      "Request 'common beginner mistakes for [skill]' to avoid pitfalls",
    ],
    relatedPromptIds: ["14", "43"],
  },

  // ========== ADDITIONAL TO HIT 55 ==========
  {
    id: "45",
    slug: "resignation-letter-writer",
    title: "Professional Resignation Letter Writer",
    description: "Write a professional, graceful resignation letter that maintains relationships and leaves on good terms.",
    prompt: `Act as an HR consultant. Help me write a resignation letter.\n\n**Situation:**\n- Current role: [JOB TITLE]\n- Company: [COMPANY]\n- Manager: [NAME]\n- Duration: [HOW LONG]\n- Last day: [DATE]\n- Reason: [NEW JOB / CAREER CHANGE / PERSONAL / STUDIES]\n- Relationship with manager: [GOOD / NEUTRAL / DIFFICULT]\n\nWrite:\n1. FORMAL LETTER — Under 200 words, clear resignation date, positive note, transition offer\n2. EMAIL VERSION — Slightly less formal, same key info\n3. VERBAL SCRIPT — How to open the conversation, handle counter-offers, what NOT to say\n4. TRANSITION PLAN — Knowledge transfer checklist, handover structure`,
    platforms: ["chatgpt", "claude"],
    category: "career",
    subcategory: "Career Transitions",
    tags: ["resignation", "career", "professional-communication", "letter"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `Role: Marketing Coordinator\nCompany: BrightMedia Agency\nManager: Sarah Thompson\nDuration: 2 years\nLast day: April 30, 2025\nReason: Accepted Senior Marketing role elsewhere\nRelationship: Good — Sarah has been a great mentor`,
    exampleOutput: `Dear Sarah,\n\nI'm writing to formally resign from my position as Marketing Coordinator at BrightMedia Agency, with my last working day being April 30, 2025.\n\nThese two years have genuinely shaped my career — from learning campaign strategy to managing client accounts independently. Your mentorship has been a significant part of my growth.\n\nI'm committed to a smooth transition and happy to help train my replacement during my remaining time.\n\nThank you for everything, Sarah. I hope we stay in touch.\n\nWarm regards,\n[Your Name]`,
    proTips: [
      "Always resign verbally FIRST, then follow up with the written letter",
      "Never badmouth the company — it lives forever in HR files",
      "Keep it short and positive — save detailed feedback for the exit interview",
      "Ask for an 'exit interview preparation guide' as a follow-up",
    ],
    relatedPromptIds: ["24", "28"],
  },
  {
    id: "46",
    slug: "ux-audit-framework",
    title: "UX Audit & Heuristic Evaluation Framework",
    description: "Conduct a thorough UX audit using Nielsen's heuristics, accessibility standards, and modern UX best practices.",
    prompt: `Act as a senior UX researcher conducting a professional UX audit.\n\n**Product:**\n- Name: [NAME AND URL]\n- Type: [Website / Mobile app / SaaS / E-commerce]\n- Users: [WHO USES IT]\n- Key flows: [e.g., "Signup, checkout, search"]\n- Known pain points: [COMPLAINTS]\n\nAudit across:\n1. NIELSEN'S 10 HEURISTICS — Rate 1-5 each with examples and severity\n2. ACCESSIBILITY (WCAG 2.1 AA) — Contrast, keyboard, screen reader, touch targets\n3. INFORMATION ARCHITECTURE — Navigation, hierarchy, search, labeling\n4. VISUAL DESIGN — Consistency, hierarchy, responsive, loading states\n5. INTERACTION DESIGN — Forms, error handling, feedback, micro-interactions\n6. PRIORITIZED RECOMMENDATIONS — Quick wins, strategic improvements, nice-to-haves\n7. COMPETITIVE COMPARISON — vs. 2-3 competitors on key UX metrics`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "design",
    subcategory: "UX Research",
    tags: ["ux-audit", "usability", "heuristic-evaluation", "accessibility", "design"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `Product: University course registration system\nType: Web application\nUsers: Undergrads (18-22, varying tech skills)\nFlows: Course search, schedule building, prerequisites, enrollment\nPain points: "Can't see conflicts until checkout", "prerequisite errors are confusing"`,
    exampleOutput: `HEURISTIC 1: Visibility of System Status — 2/5\n• MAJOR: No conflict indicator during browsing — students discover conflicts only at enrollment\n• MINOR: Missing loading states when fetching availability\nRecommendation: Add real-time conflict detection with calendar overlay during browsing...`,
    proTips: [
      "Focus on the top 3 most critical user flows rather than auditing everything",
      "Ask for 'before/after wireframe descriptions' for each recommendation",
      "Follow up with 'create a usability test script to validate findings'",
      "Provide the URL if possible for the AI to browse and audit specific pages",
    ],
    relatedPromptIds: ["22", "20"],
  },
  {
    id: "47",
    slug: "performance-review-writer",
    title: "Performance Review Writer",
    description: "Write balanced, constructive performance reviews with specific feedback, development goals, and growth plans.",
    prompt: `Act as an HR professional and people manager. Help me write a performance review.\n\n**Employee:**\n- Name: [NAME]\n- Role: [TITLE]\n- Review period: [DATES]\n- Time in role: [DURATION]\n\n**Assessment:**\n- Achievements: [3-5 ACCOMPLISHMENTS]\n- Strengths: [WHAT THEY DO WELL]\n- Improvements: [WHERE TO GROW — BE SPECIFIC]\n- Previous goals: [WHAT WAS SET AND WHETHER ACHIEVED]\n- Overall rating: [Exceeds / Meets / Partially meets / Below]\n\nWrite:\n1. OVERALL SUMMARY — Balanced, professional (2-3 sentences)\n2. ACHIEVEMENTS & STRENGTHS — Specific examples with impact\n3. DEVELOPMENT AREAS — SBI format (Situation → Behavior → Impact), constructive\n4. NEXT PERIOD GOALS — 3-4 SMART goals\n5. DEVELOPMENT PLAN — Skills, resources, check-in cadence`,
    platforms: ["chatgpt", "claude"],
    category: "hr",
    subcategory: "Performance Management",
    tags: ["performance-review", "hr", "management", "feedback"],
    complexity: "intermediate",
    popularity: 3,
    exampleInput: `Name: Jordan\nRole: Junior Software Engineer\nPeriod: H1 2025\nAchievements: Shipped auth feature solo, reduced bug backlog 30%, mentored intern\nStrengths: Fast learner, excellent code quality, great communication\nImprovements: Speak up more in planning meetings, sometimes over-engineers\nPrevious goal: "Own one feature end-to-end" — achieved`,
    exampleOutput: `OVERALL SUMMARY:\nJordan has had a strong H1 2025, demonstrating growing technical ownership and a collaborative mindset. The independently managed authentication feature represents a significant development step...\n\nDEVELOPMENT AREA:\nSituation: During sprint planning meetings in March and April\nBehavior: Jordan tended to listen without sharing technical concerns that later surfaced during implementation\nImpact: This led to two mid-sprint scope changes that could have been caught earlier...`,
    proTips: [
      "Replace 'you should' with 'an opportunity to' for better reception",
      "Include 2x more positive examples than improvement areas",
      "Generate a self-review template for the employee to fill first",
      "For difficult conversations: request a 'script with empathy checkpoints'",
    ],
    relatedPromptIds: ["20", "15"],
  },
  {
    id: "48",
    slug: "privacy-policy-generator",
    title: "Privacy Policy & Terms Generator",
    description: "Generate GDPR and CCPA-compliant privacy policies and terms of service tailored to your product's data practices.",
    prompt: `Act as a technology lawyer specializing in data privacy. Generate a privacy policy.\n\n**Product:**\n- Name: [NAME]\n- Type: [Website / App / SaaS / E-commerce]\n- URL: [URL]\n- Regions: [US / EU / UK / Global]\n- Company: [NAME AND COUNTRY]\n\n**Data collection:**\n- Personal data: [WHAT YOU COLLECT]\n- How collected: [Forms, cookies, analytics, third-party login]\n- Why: [Account creation, analytics, marketing]\n- Third parties: [Analytics, payments, email services]\n- Retention: [HOW LONG]\n- Sell data? [Yes/No]\n- Cookies/tracking? [Yes/No — list tools]\n- Age restriction: [MINIMUM AGE]\n\nGenerate:\n1. PRIVACY POLICY — Data collection, legal bases, user rights, cookies, third parties, security, children's privacy\n2. TERMS OF SERVICE — Acceptable use, IP, liability, termination, governing law\n\nClear language, not legalese. Include disclaimer to review with an attorney.`,
    platforms: ["chatgpt", "claude"],
    category: "legal",
    subcategory: "Compliance",
    tags: ["privacy-policy", "terms-of-service", "gdpr", "legal"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `Product: TaskFlow — project management SaaS\nType: Web app\nRegions: US + EU\nCompany: TaskFlow Inc., Delaware\nData: Name, email, photo, project data, analytics\nThird parties: Stripe, Google Analytics, Intercom\nCookies: Yes — essential + analytics\nAge: 16+`,
    exampleOutput: `PRIVACY POLICY — TaskFlow\nLast updated: March 2025\n\n1. Who We Are\nTaskFlow Inc. operates taskflow.app. For GDPR purposes, we are the data controller.\n\n2. Information We Collect\n2.1 Directly provided: name, email, profile photo\n2.2 Project data: tasks, comments, files, team members\n2.3 Automatically collected: IP address, browser type, usage analytics via Google Analytics...`,
    proTips: [
      "Always have a lawyer review before publishing",
      "Update when you add new third-party tools",
      "Ask for 'cookie consent banner copy' for GDPR compliance",
      "Request a 'DSAR response template' for handling data requests",
    ],
    relatedPromptIds: ["18"],
  },
  {
    id: "49",
    slug: "survey-analysis-framework",
    title: "Survey Data Analysis Framework",
    description: "Analyze survey results with statistical insights, visualization recommendations, and actionable findings.",
    prompt: `Act as a research analyst specializing in survey data. Analyze my survey.\n\n**Survey:**\n- Purpose: [WHAT YOU WANTED TO LEARN]\n- Population: [WHO WAS SURVEYED]\n- Sample size: [RESPONSES]\n- Method: [Online / Phone / In-person]\n- Key questions: [MAIN QUESTIONS AND OPTIONS]\n- Results: [PASTE KEY DATA]\n\nProvide:\n1. DATA QUALITY — Response rate, biases, representativeness\n2. DESCRIPTIVE STATS — Findings per question, cross-tabs, segmentation\n3. VISUALIZATIONS — Best chart type per finding, dashboard layout\n4. INSIGHTS — Top 5 findings ranked, surprising results, correlations\n5. RECOMMENDATIONS — Actions, further investigation, limitations, follow-up questions`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "data-analysis",
    subcategory: "Survey Analysis",
    tags: ["survey", "data-analysis", "research", "statistics"],
    complexity: "intermediate",
    popularity: 3,
    exampleInput: `Survey: Employee satisfaction at 200-person tech company\nSample: 156 responses (78%)\nResults: Satisfaction 3.6/5, Career growth 2.8/5, Management 4.1/5, Work-life balance 3.2/5, Comp 2.9/5\nSegments: Engineering (n=80) vs Non-engineering (n=76)\nNotable: Engineering satisfaction dropped 0.8 points YoY`,
    exampleOutput: `78% response rate is excellent (benchmark: 50-60%). The 22% non-respondents may skew results.\n\nTOP FINDINGS:\n1. CRITICAL: Career growth (2.8/5) is in the "flight risk" zone — scores below 3.0 predict 40% higher turnover\n2. Engineering dropped 0.8 YoY while non-eng rose 0.3 — suggests an engineering-specific issue...`,
    proTips: [
      "Check for response bias before drawing conclusions",
      "Ask for an 'executive summary' version for leadership (1 page, 5 bullets)",
      "Request specific statistical significance tests",
      "Follow up with 'design a follow-up survey to dig deeper into [finding]'",
    ],
    relatedPromptIds: ["13", "1"],
  },
  {
    id: "50",
    slug: "product-requirements-document",
    title: "Product Requirements Document (PRD) Writer",
    description: "Create comprehensive PRDs that align engineering, design, and business teams on what to build and how to measure success.",
    prompt: `Act as a senior product manager. Write a PRD for a new feature.\n\n**Feature:**\n- Name: [NAME]\n- Product: [WHAT PRODUCT]\n- Problem: [USER PROBLEM]\n- Users: [WHO NEEDS THIS]\n- Business impact: [WHY BUILD THIS]\n\nCover:\n1. OVERVIEW — Summary, goals/KPIs, non-goals\n2. BACKGROUND — User research, competitive analysis, technical feasibility\n3. REQUIREMENTS — User stories, functional/non-functional, edge cases\n4. DESIGN — User flows, key screens, interaction patterns\n5. TECHNICAL — Architecture impact, APIs, data model, dependencies\n6. LAUNCH — Rollout strategy, feature flags, rollback, monitoring\n7. TIMELINE — Phases, dependencies, decision points`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "development",
    subcategory: "Product Management",
    tags: ["prd", "product-management", "requirements", "planning"],
    complexity: "advanced",
    popularity: 3,
    exampleInput: `Feature: In-app collaborative whiteboard\nProduct: TeamSync (project management tool)\nProblem: Teams switch to Miro/FigJam for visual planning, losing context\nUsers: PMs, designers, engineering leads\nImpact: Reduce churn by 15% (exit surveys cite "lack of visual tools")`,
    exampleOutput: `OVERVIEW:\nA real-time collaborative whiteboard embedded in TeamSync project spaces. Supports sticky notes, shapes, connectors, text, images with multiplayer editing.\n\nGoals:\n• Reduce feature-related churn by 15% within 6 months\n• Increase session duration by 20%\n\nNon-Goals:\n• Not a Figma replacement — no design-grade tools\n• No offline editing in V1...`,
    proTips: [
      "Write success metrics BEFORE requirements — if you can't measure it, don't build it",
      "Include non-goals to prevent scope creep",
      "Ask for a 'one-pager version' for executives",
      "Request 'user interview questions to validate requirements'",
    ],
    relatedPromptIds: ["7", "11", "34"],
  },
  {
    id: "51",
    slug: "presentation-slide-outliner",
    title: "Presentation & Slide Deck Outliner",
    description: "Create structured presentation outlines with slide-by-slide content, speaker notes, and visual design recommendations.",
    prompt: `Act as a presentation coach and slide designer.\n\n**Presentation:**\n- Topic: [SUBJECT]\n- Audience: [WHO]\n- Context: [Class / Conference / Meeting / Pitch]\n- Duration: [MINUTES]\n- Goal: [Inform / Persuade / Inspire / Teach]\n- Key message: [ONE THING TO REMEMBER]\n\nCreate:\n1. SLIDE-BY-SLIDE OUTLINE — Title, content, speaker notes, visual recommendation, transition\n2. OPENING — 3 options (story, statistic, question), credibility builder\n3. CLOSING — Summary, CTA, memorable final statement, Q&A prep\n4. DESIGN — Color scheme, fonts, text vs. visual ratio, common mistakes\n5. DELIVERY — Pacing, pauses, engagement moments, handling nervousness`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "education",
    subcategory: "Presentations",
    tags: ["presentation", "slides", "public-speaking", "student"],
    complexity: "beginner",
    popularity: 4,
    exampleInput: `Topic: "The Impact of AI on Employment in Creative Industries"\nAudience: University classmates + professor (Media Studies)\nContext: 15-min class presentation (20% of grade)\nGoal: Present balanced argument, spark discussion\nKey message: "AI will transform creative jobs, not eliminate them — but only for those who adapt"`,
    exampleOutput: `SLIDE 1 — TITLE\n"Will AI Replace Creatives? (It's Complicated)"\nVisual: Split image — artist at easel / AI-generated art\nSpeaker notes: "Quick show of hands — who's used an AI tool for coursework this month?"\n\nSLIDE 2 — THE FEAR\n"The Headlines Say We're Doomed"\nContent: 3-4 alarming real headlines\nSpeaker notes: "If you only read these, you'd think every creative should retrain as a plumber..."`,
    proTips: [
      "Put on slides what you SHOW, say out loud what you TELL. Never read slides",
      "15-minute talk = 12-15 slides maximum",
      "Ask for 'Q&A prep: 10 likely audience questions'",
      "Request a 3-minute version for elevator-pitch practice",
    ],
    relatedPromptIds: ["38", "37"],
  },
  {
    id: "52",
    slug: "thesis-research-question",
    title: "Thesis Research Question Developer",
    description: "Develop strong research questions for dissertations with methodology suggestions and literature review starting points.",
    prompt: `Act as a research supervisor who has guided 100+ thesis projects.\n\n**My situation:**\n- Degree: [Undergrad / Masters / PhD]\n- Subject: [DISCIPLINE]\n- Broad interest: [GENERAL AREA]\n- Specific angle: [NARROWER FOCUS IF ANY]\n- Methodology preference: [Quantitative / Qualitative / Mixed / No preference]\n- Timeframe: [MONTHS]\n- Resources: [DATASETS, PARTICIPANTS, EQUIPMENT]\n\nProvide:\n1. RESEARCH QUESTIONS (5) — Rated for feasibility, originality, significance with methodology\n2. DEVELOPMENT — Sub-questions, hypothesis, variables, scope, limitations\n3. LITERATURE STARTER — 5 key themes, search terms, seminal works, research gaps\n4. METHODOLOGY — Design, data collection, sample, analysis, ethics\n5. THESIS STRUCTURE — Chapter outline, word counts, timeline with milestones`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "education",
    subcategory: "Research & Thesis",
    tags: ["thesis", "research", "dissertation", "student", "academic"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `Degree: Masters Environmental Science\nSubject: Environmental policy\nBroad: Plastic pollution regulation\nAngle: How effective are single-use plastic bans?\nMethodology: Mixed methods\nTimeframe: 12 months\nResources: Government policy docs, can survey consumers and businesses locally`,
    exampleOutput: `RESEARCH QUESTIONS:\n\n1. "To what extent have single-use plastic bans reduced waste generation, and what factors mediate effectiveness?"\n   Feasibility: ★★★★☆ | Originality: ★★★☆☆ | Significance: ★★★★☆\n   Method: Mixed — quantitative waste data + qualitative stakeholder interviews\n\n2. "How do consumer adaptations to plastic bans differ across socioeconomic groups?"\n   Feasibility: ★★★★★ | Originality: ★★★★☆ | Significance: ★★★★☆\n   Method: Survey + interviews, local scope = very feasible...`,
    proTips: [
      "A good question is specific enough to answer but broad enough to matter",
      "Run it past your supervisor BEFORE the literature review",
      "Ask the AI to identify methodological weaknesses in your design",
      "Request sample interview questions for stakeholder groups",
    ],
    relatedPromptIds: ["3", "38"],
  },
  {
    id: "53",
    slug: "freelance-proposal-writer",
    title: "Freelance Project Proposal Writer",
    description: "Write winning freelance proposals for Upwork, Fiverr, or direct client outreach that demonstrate understanding and inspire confidence.",
    prompt: `Act as a top-rated freelancer with $500K+ earnings and 90% acceptance rate.\n\n**Project:**\n- Platform: [Upwork / Fiverr / Direct]\n- Job posting: [PASTE DESCRIPTION]\n- My skills: [RELEVANT SKILLS]\n- My experience: [PAST PROJECTS]\n- My rate: [HOURLY OR FIXED]\n\nWrite a proposal (<200 words):\n1. OPENING — Reference something specific from their posting\n2. UNDERSTANDING — Restate their problem, show deeper insight\n3. APPROACH — Step-by-step plan, tools, timeline with milestones\n4. PROOF — One relevant past project with measurable result\n5. CLOSE — Clear next step, availability`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "career",
    subcategory: "Freelancing",
    tags: ["freelance", "proposal", "upwork", "client", "career"],
    complexity: "intermediate",
    popularity: 4,
    exampleInput: `Platform: Upwork\nPosting: "Need React developer for SaaS analytics dashboard. Charts, responsive, API integration. $3-5K."\nSkills: React, TypeScript, D3.js, Recharts, REST APIs\nExperience: Built 3 SaaS dashboards, one for Series A startup (10K users)\nRate: $4,500 fixed`,
    exampleOutput: `Hi [Name],\n\nYour analytics dashboard caught my attention — I recently built a similar one for a Series A startup (10K users).\n\nHere's what I'd deliver:\n• Interactive charts with Recharts/D3.js\n• Clean API layer with loading states and error handling\n• Mobile-first, sub-2s load times\n\nTimeline: 3 weeks (wireframes → build → polish + testing)\n\nThe dashboard I built reduced support tickets by 35% — users could self-serve data. Happy to share a demo.\n\nCan start Monday. 15-min call to discuss your data structure?\n\n— [Name]`,
    proTips: [
      "Read the posting three times before writing — most freelancers clearly don't",
      "Lead with understanding their problem, not listing your skills",
      "Include a question in your close — increases response rate by 40%",
      "For new freelancers: offer a small paid test task to reduce risk",
    ],
    relatedPromptIds: ["24", "17"],
  },
  {
    id: "54",
    slug: "email-newsletter-writer",
    title: "Email Newsletter Content Writer",
    description: "Write engaging newsletters that subscribers actually open and read, with subject lines, content structure, and growth strategies.",
    prompt: `Act as a newsletter expert with 50K+ subscribers and 40%+ open rates.\n\n**Newsletter:**\n- Name: [NAME]\n- Niche: [TOPIC]\n- Audience: [WHO READS IT]\n- Frequency: [DAILY / WEEKLY / MONTHLY]\n- Subscribers: [NUMBER]\n- Tone: [Professional / Casual / Witty]\n\n**This edition:**\n- Topic: [WHAT THIS ISSUE COVERS]\n- Key insights: [3-5 POINTS]\n- Links/resources: [URLS OR DESCRIPTIONS]\n- CTA: [WHAT SHOULD READERS DO]\n\nGenerate:\n1. SUBJECT LINES (5) — Under 50 chars, with preview text\n2. BODY — Hook, sections with subheadings, callout boxes, curated links, sign-off\n3. GROWTH — Cross-promotion, referral copy, social teaser post`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "content-creation",
    subcategory: "Email Marketing",
    tags: ["newsletter", "email", "content-creation", "marketing"],
    complexity: "intermediate",
    popularity: 3,
    exampleInput: `Name: "Data Bites" — weekly data science insights\nAudience: Aspiring data scientists, career changers\nFrequency: Weekly (Sunday evening)\nSubscribers: 2,400\nTone: Friendly, educational, nerdy\nTopic: "Why your first project should NOT be a Kaggle competition"\nInsights: Portfolio projects > competitions, real-world data is messy, storytelling > accuracy`,
    exampleOutput: `SUBJECT LINES:\n1. "Stop doing Kaggle competitions (do this instead)"\n2. "The portfolio mistake 90% of beginners make"\n3. "Real talk: Kaggle won't get you hired"\n\nHey data nerds 👋\n\nLast week, I reviewed 30 junior data scientist portfolios.\n\nEvery single one had a Kaggle competition.\nOnly 3 had a project with real-world messy data.\n\nGuess which 3 got interview callbacks?...`,
    proTips: [
      "Write the subject line LAST — after you know the best hook",
      "Short paragraphs, bold key phrases, bullet points for scannability",
      "Ask for tone adjustments: 'rewrite for a more [tone] audience'",
      "Request a '4-week content calendar' for consistency",
    ],
    relatedPromptIds: ["12", "21", "31"],
  },
  {
    id: "55",
    slug: "pitch-deck-content",
    title: "Startup Pitch Deck Content Writer",
    description: "Generate compelling content for each slide of a pitch deck, following structures used by successful fundraising rounds.",
    prompt: `Act as a pitch deck consultant who has helped startups raise $100M+.\n\n**Startup:**\n- Name: [NAME]\n- One-liner: [WHAT YOU DO]\n- Stage: [Pre-seed / Seed / Series A]\n- Ask: [HOW MUCH]\n- Traction: [KEY METRICS]\n- Team: [FOUNDERS + KEY HIRES]\n- Market: [INDUSTRY AND TARGET]\n\nWrite content for 12 slides:\n1. TITLE — Name + powerful one-liner\n2. PROBLEM — Make the pain visceral\n3. SOLUTION — How you solve it\n4. MARKET — TAM/SAM/SOM\n5. PRODUCT — Features + demo points\n6. BUSINESS MODEL — Revenue strategy\n7. TRACTION — Metrics + growth\n8. COMPETITION — Positioning matrix\n9. TEAM — Why this team executes\n10. FINANCIALS — Projections + assumptions\n11. THE ASK — Amount, use of funds, milestones\n12. CLOSING — Memorable ending\n\nEach slide: Headline (≤7 words), talking points, visual suggestion, one thing NOT to say.`,
    platforms: ["chatgpt", "claude", "gemini"],
    category: "business-strategy",
    subcategory: "Fundraising",
    tags: ["pitch-deck", "startup", "fundraising", "investor"],
    complexity: "advanced",
    popularity: 4,
    exampleInput: `Name: FocusFlow\nOne-liner: AI study companion adapting to your learning style\nStage: Seed\nAsk: $2M\nTraction: 15K students, 40% WoW growth, 4.8 App Store rating\nTeam: CEO (ex-Google PM), CTO (ML PhD Stanford), Head of Ed (former Coursera)\nMarket: EdTech, targeting university students globally`,
    exampleOutput: `SLIDE 2 — PROBLEM\nHeadline: "Students Study Hard, Not Smart"\nTalking points:\n• 73% use study techniques research proves ineffective\n• Average student wastes 4.2 hrs/week on low-retention methods\n• Existing tools are one-size-fits-all\nVisual: Split screen — highlighting entire pages vs. targeted recall\nDon't say: Don't bash specific competitors — investors may know their founders`,
    proTips: [
      "Investors spend 3 minutes on a deck — every word must earn its place",
      "Lead with the problem, not your solution",
      "Ask for a '5-slide version' for quick-pitch contexts",
      "Follow up with 'write the email to send with this deck'",
    ],
    relatedPromptIds: ["35", "1", "5"],
  },
];
