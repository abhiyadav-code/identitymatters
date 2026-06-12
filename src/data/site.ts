// Content for Abhi Yadav's personal site — single source of truth.
// Ported from the Claude Design handoff (data.js).

export interface Article {
  title: string;
  date: string;
  year: string;
  cat: string;
  kind: 'article' | 'audio' | 'pdf';
  img: string;
  url: string;
  source: string;
  excerpt: string;
  // true → a bespoke standalone page at src/pages/writing/<slug>.astro
  // (not the generic content-driven [slug] reader).
  customPage?: boolean;
}

export const person = {
  name: 'Abhi Yadav',
  first: 'Abhi',
  title: 'Product Manager, Google',
  field: 'Identity & Access Management',
  tagline:
    'Building the systems that decide who gets access to what — and proving they can be trusted.',
  intro:
    "For over twenty years I've worked at the intersection of identity, access, and security — from an early access-control startup to Sun Microsystems, and today as a Product Manager at Google working on Cloud IAM. I write, speak, and teach about digital identity because I believe the best way to understand something is to explain it to someone else.",
  location: 'San Francisco, CA',
  email: 'abhimanyu.yadav@gmail.com',
  headshot: '/images/abhi-headshot.jpg',
  pullquote: 'I believe in the Feynman technique — to learn by teaching others.',
  social: {
    linkedin: 'https://www.linkedin.com/in/abhiyadav/',
    x: 'https://twitter.com/abhimanyu_yadav',
    github: 'https://github.com/abhiyadav-code',
  },
  affiliations: [
    { name: 'DIACC', full: 'Digital ID & Authentication Council of Canada', url: 'https://diacc.ca/' },
    { name: 'IDPro', full: 'The Home for Digital Identity Professionals', url: 'https://idpro.org/' },
  ],
};

// Narrative in Abhi's own words (see the site edit spec).
export const story = [
  'My love for cybersecurity began during idle and harmless teenage years, at a time when the Internet was starting to come into its own. What a delight it was to use simple parlor tricks to show my friends that I could “guess” their passwords.',
  'The turning point was the Mars Pathfinder mission in 1997. I still remember the scratchy tones of the modem running through the night as I downloaded pictures from Mars. That, I think, is when I fell in love with technology.',
  'My first job was at an enterprising startup that developed a novel way to solve access-control problems. Our success came not just from the quality of what we shipped, but from the close friendships that let us rely on each other and perform. In time we were acquired, and I found myself at Sun Microsystems — one of the best things that ever happened to me.',
  'After Sun and Oracle, a few of us took a chance: we missed working with customers, so we joined a small team out to grow its identity business in Europe. I founded its international arms and spent those years on the road, building country by country until we’d become the largest identity-services shop around. A private equity acquisition followed, I made the leap into product, and then one day Google came knocking.',
  'Google has been the longest and most defining chapter of my career — the one that shaped me most as a product leader. Working across Cloud, Ads, and the frameworks now shaping how AI is built, alongside some of the sharpest minds in the field: engineers, architects, and product leaders who’ve stretched my thinking and shared their vision for identity.',
  'I try to pass some of it along here, sprinkled with my own opinions.',
];

export const timeline = [
  { year: 'Now', role: 'Product Manager', org: 'Google', note: 'Workforce IAM & Secure AI Framework · planet-scale identity for people and AI agents' },
  { year: '', role: 'Product Manager', org: 'Google', note: 'Identity verification and trust-based customer experiences' },
  { year: '', role: 'Product Manager', org: 'Google', note: 'Cloud IAM · ML-powered recommendations & least-privilege policies at scale' },
  { year: '', role: 'Product Leadership', org: 'Identity & Access', note: 'IDaaS, privileged access, and managed identity services' },
  { year: '', role: 'Engineer → Architect', org: 'Sun Microsystems', note: 'Role management, access governance, identity standards' },
  { year: 'Start', role: 'Early career', org: 'Access-control startup', note: 'A novel approach to access control — later acquired' },
];

export const expertise = [
  { title: 'Identity & Access Management', desc: 'Core IAM architecture — authentication, authorization, lifecycle, and governance across the enterprise.' },
  { title: 'Cloud Security & IAM', desc: 'Least-privilege at cloud scale, including Google Cloud IAM recommendations and policy intelligence.' },
  { title: 'ML & Security Analytics', desc: 'The machine-learning models that turn access logs into actionable, risk-aware recommendations.' },
  { title: 'Privileged Access (PIM/PAM)', desc: 'Securing elevated accounts and the unique challenges they pose beyond traditional IAM.' },
  { title: 'Identity-as-a-Service', desc: 'The evolution of IDaaS — from hosting to full-service, orchestrated, managed identity.' },
  { title: 'Trust Frameworks & Proofing', desc: 'Identity proofing, assurance levels, and the trust frameworks that make federation work.' },
  { title: 'Consumer Identity (CIAM)', desc: 'Customer engagement and innovation in consumer identity — including blockchain identity.' },
  { title: 'Access Governance', desc: 'Access intelligence and governance as a standard feature, not an afterthought.' },
];

export const videos = [
  { id: '0MUaNoyGgNw', title: 'Featured Talk — Identity & Access', tag: 'Conference Talk' },
  { id: 'F45e9Nle0oU', title: 'Featured Talk — Cloud & Trust', tag: 'Conference Talk' },
  { id: 'LYUVnvRovIM', title: 'Featured Talk — The Future of Identity', tag: 'Conference Talk' },
];

export const upcoming = {
  name: 'Internet Identity Workshop XXVI',
  when: '3–5 April · Mountain View',
  url: 'https://www.internetidentityworkshop.com/',
};

export const talks = [
  { event: 'Gartner IAM Summit', place: 'Las Vegas', topic: 'Improving customer engagement with innovations in consumer identity systems, including blockchain identity.', url: 'http://www.gartner.com/events/na/identity-access-management' },
  { event: 'IBM InterConnect', place: 'Las Vegas', topic: 'Digital Customer Engagement in an Untrusted World.', url: 'https://myibm.ibm.com/events/interconnect/all-sessions/session/7525A' },
  { event: 'RSA Conference', place: 'San Francisco', topic: 'On the topic of Identity Assurance.', url: '' },
  { event: 'Oracle OpenWorld', place: 'San Francisco', topic: 'A modern approach to an identity-based security operations center.', url: '' },
  { event: 'European Identity Conference', place: 'Munich', topic: 'Access Intelligence: The New Standard Feature of Access Governance?', url: 'https://www.kuppingercole.com/watch/eic13_session_aipanel_15051500' },
  { event: 'Cupertino IAM User Group', place: 'Cupertino', topic: 'Recent developments of trust frameworks and identity proofing.', url: 'https://www.meetup.com/Cupertino-IAM-User-Group-Meetup/' },
  { event: 'San Francisco IAM User Group', place: 'San Francisco', topic: 'Identity & access community meetup.', url: '' },
  { event: 'Sun CEC Conference', place: 'Las Vegas', topic: 'Achieving Access Control Compliance.', url: '' },
  { event: 'Sun Americas Conference', place: 'USA', topic: 'Understanding Roles and Identity Management.', url: '' },
  { event: 'Immersion Week', place: 'USA', topic: 'Best Practices for Role Management.', url: '' },
];

export const articles: Article[] = [
  {
    title: 'Five Principles for Agent Identity',
    date: 'Jun 12, 2026', year: '2026', cat: 'Agentic Identity', kind: 'article',
    img: '/images/articles/five-principles-for-agent-identity.jpg',
    url: '',
    source: 'Identity Matters',
    excerpt: 'The IAM industry is moving fast on agent identity — new architectures, new vendors, plenty of standards work. Underneath the noise, a small set of principles keeps surfacing. Whatever stack you build or buy, the good designs share these five.',
    customPage: true,
  },
  {
    title: 'Under the hood: The security analytics that drive IAM recommendations on Google Cloud',
    date: 'Aug 14, 2020', year: '2020', cat: 'Cloud Security', kind: 'article',
    img: '/images/articles/under-the-hood.png',
    url: 'https://identitymatters.blog/2020/08/14/under-the-hood-the-security-analytics-that-drive-iam-recommendations-on-google-cloud/',
    source: 'Google Cloud Blog',
    excerpt: 'IAM Recommender helps security professionals enforce the principle of least privilege by identifying and removing unwanted access to Google Cloud Platform resources. A look under the hood at the security analytics — and the machine-learning models — that make those recommendations possible.',
  },
  {
    title: 'Achieve least privilege with less effort',
    date: 'Aug 4, 2020', year: '2020', cat: 'IAM', kind: 'article',
    img: '/images/articles/least-privilege.png',
    url: 'https://identitymatters.blog/2020/08/04/achieve-least-privilege-with-less-effort/',
    source: 'Google Cloud Blog',
    excerpt: "As cloud adoption grows, we're seeing exponential growth in cloud resources — and in the permissions granted to humans and workloads to access them. That introduces real risk. Here's how IAM Recommender helps you reach least privilege without the manual grind.",
  },
  {
    title: 'Exploring the machine learning models behind Cloud IAM Recommender',
    date: 'Nov 11, 2019', year: '2019', cat: 'Cloud Security', kind: 'article',
    img: '/images/articles/ml-models.png',
    url: 'https://identitymatters.blog/2019/11/11/exploring-the-machine-learning-models-behind-cloud-iam-recommender/',
    source: 'Google Cloud Blog',
    excerpt: 'Unlike many recommendation engines that rely on policy-based rules, some Google Cloud recommenders use machine learning. This piece explores the models behind the Cloud IAM Recommender and how they help fine-tune your environment.',
  },
  {
    title: 'PIM, PAM, or Perish?',
    date: 'Aug 2, 2017', year: '2017', cat: 'Privileged Access', kind: 'audio',
    img: '/images/articles/pim-pam.png',
    url: 'https://identitymatters.blog/2017/08/02/pim-pam-or-perish/',
    source: 'The State of Identity · Podcast',
    excerpt: "OneWorld Identity's Cameron D'Ambrosi sat down with Shawn Keve and me to discuss the unique challenges of Privileged Identity Management compared to traditional IAM — aired on the August edition of his “The State of Identity” podcast.",
  },
  {
    title: 'The Next Generation IDaaS Solutions',
    date: 'Dec 7, 2016', year: '2016', cat: 'IDaaS', kind: 'article',
    img: '/images/articles/next-gen-idaas.jpg',
    url: 'https://identitymatters.blog/2016/12/07/the-next-generation-of-idaas-platforms/',
    source: 'Identity Matters',
    excerpt: 'The third and final post in a series on the five growing expectations driving transformation in the Identity-as-a-Service industry — what I’ve called “next-generation IDaaS” — and how vendors are rising to meet them.',
  },
  {
    title: 'Managed Identity Services: the next generation of IDaaS',
    date: 'Aug 30, 2016', year: '2016', cat: 'IDaaS', kind: 'article',
    img: '/images/articles/managed-identity.jpg',
    url: 'https://identitymatters.blog/2016/08/30/managed-identity-services-the-next-generation-of-idaas/',
    source: 'Identity Matters',
    excerpt: 'The “Service” in Identity as a Service means very different things to different companies. To us it means full service — a stark contrast to firms where “Service” only means they host and maintain the identity platform for you.',
  },
  {
    title: 'Identity, The Wall, and the Future of CyberSecurity',
    date: 'Mar 1, 2017', year: '2017', cat: 'Security', kind: 'article',
    img: '/images/articles/identity-wall.jpeg',
    url: 'https://identitymatters.blog/2017/03/01/identity-the-wall-and-the-future-of-cybersecurity/',
    source: 'Identity Matters',
    excerpt: 'Perimeters are dissolving. As the old “wall” around the enterprise gives way, identity becomes the new control plane — and the future of cybersecurity is increasingly a story about who, not where.',
  },
  {
    title: 'Putting the “Service” in Identity as a Service (IDaaS)',
    date: 'Jun 29, 2016', year: '2016', cat: 'IDaaS', kind: 'article',
    img: '/images/articles/service-idaas.jpg',
    url: 'https://identitymatters.blog/2016/06/29/putting-the-service-in-identity-as-a-service/',
    source: 'Identity Matters',
    excerpt: 'The first in a series unpacking what “Service” really should mean in Identity as a Service — and why the distinction matters for organizations choosing how to run identity.',
  },
  {
    title: 'WAVE: A New Approach to Access Control',
    date: 'White Paper', year: 'Paper', cat: 'White Paper', kind: 'pdf',
    img: '',
    url: 'https://www.oracle.com/a/tech/docs/wave-access-control-wp.pdf',
    source: 'Oracle · Technical White Paper',
    excerpt: 'A technical white paper published via Oracle examining a modern, wave-based approach to access control. Opens the original PDF.',
  },
];

// --- Article routing helpers ----------------------------------------------
// The local thumbnail filename doubles as the slug (e.g. under-the-hood).
export const articleSlug = (a: Article): string =>
  a.img ? a.img.split('/').pop()!.replace(/\.[^.]+$/, '') : '';

// Every article except the external PDF gets a native page on this site.
export const hasNativePage = (a: Article): boolean =>
  a.kind !== 'pdf' && !!articleSlug(a);
