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
];
