// One-off generator for speaking + publication seed entries (migrated from the
// existing Events page). Run once; safe to delete afterwards.
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const speakDir = resolve(here, '../src/content/speaking');
const pubDir = resolve(here, '../src/content/publications');
mkdirSync(speakDir, { recursive: true });
mkdirSync(pubDir, { recursive: true });

const yaml = (obj) =>
  Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== '')
    .map(([k, v]) => (typeof v === 'boolean' ? `${k}: ${v}` : `${k}: ${JSON.stringify(v)}`))
    .join('\n');

const writeEntry = (dir, slug, data) =>
  writeFileSync(resolve(dir, `${slug}.md`), `---\n${yaml(data)}\n---\n`, 'utf8');

// --- Speaking engagements (from identitymatters.blog/events) ---
const speaking = [
  {
    slug: 'internet-identity-workshop-xxvi',
    event: 'Internet Identity Workshop XXVI',
    date: '2018-04-03',
    dateLabel: 'April 3–5, 2018',
    location: 'Computer History Museum, Mountain View, CA',
  },
  {
    slug: 'gartner-iam-summit-2017',
    event: 'Gartner IAM Summit',
    title: 'Improving customer engagement with innovations in consumer identity systems (including blockchain identity)',
    date: '2017-11-28',
    dateLabel: 'November 28–30, 2017',
    location: 'Las Vegas, NV',
  },
  {
    slug: 'cupertino-iam-user-group-2017',
    event: 'Cupertino IAM User Group Meetup',
    title: 'Recent developments in trust frameworks and identity proofing',
    date: '2017-10-16',
    dateLabel: 'October 16, 2017',
    location: 'Cupertino, CA',
  },
  {
    slug: 'ibm-interconnect-2017',
    event: 'IBM InterConnect 2017',
    title: 'Digital Customer Engagement in an Untrusted World',
    date: '2017-03-19',
    dateLabel: 'March 19, 2017',
    location: 'Las Vegas, NV',
  },
  {
    slug: 'sf-iam-user-group-2017',
    event: 'San Francisco IAM User Group Meetup',
    date: '2017-05-09',
    dateLabel: 'May 9, 2017',
    location: 'San Francisco, CA',
  },
  {
    slug: 'rsa-conference-2017',
    event: 'RSA Conference 2017',
    title: 'Identity Assurance',
    date: '2017-02-13',
    dateLabel: 'February 2017',
    location: 'San Francisco, CA',
  },
  {
    slug: 'oracle-openworld-2016',
    event: 'Oracle OpenWorld 2016',
    title: 'A modern approach to an identity-based security operations center',
    date: '2016-09-18',
    dateLabel: 'September 2016',
    location: 'San Francisco, CA',
  },
  {
    slug: 'european-identity-conference-2016',
    event: 'European Identity & Cloud Conference',
    title: 'Access Intelligence: The New Standard Feature of Access Governance?',
    date: '2016-05-10',
    dateLabel: 'May 2016',
    location: 'Munich, Germany',
  },
  {
    slug: 'sun-cec-2008',
    event: 'Sun Customer Engineering Conference (CEC) 2008',
    title: 'Achieving Access Control Compliance',
    date: '2008-10-01',
    dateLabel: '2008',
  },
  {
    slug: 'sun-americas-conference',
    event: 'Sun Americas Conference',
    title: 'Understanding Roles and Identity Management',
    date: '2008-04-01',
    dateLabel: '2008',
  },
  {
    slug: 'immersion-week-2007',
    event: 'Immersion Week 2007',
    title: 'Best Practices for Role Management',
    date: '2007-06-01',
    dateLabel: '2007',
  },
];

speaking.forEach(({ slug, ...data }) => writeEntry(speakDir, slug, { upcoming: false, ...data }));

// --- Publications (placeholder; Abhi to supply the real list) ---
const publications = [
  {
    slug: 'example-publication',
    title: 'Add your published articles & papers here',
    outlet: 'Outlet / Publisher',
    date: '2021-01-01',
    dateLabel: '2021',
    description:
      'Placeholder entry — replace with the publications not currently listed on the site (guest articles, whitepapers, standards contributions, podcast features, etc.).',
  },
];

publications.forEach(({ slug, ...data }) => writeEntry(pubDir, slug, data));

console.log(`Wrote ${speaking.length} speaking + ${publications.length} publication entries.`);
