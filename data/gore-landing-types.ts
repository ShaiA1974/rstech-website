export interface GoreLandingContent {
  tagline: string;
  headline: string;
  subheadline: string;
  problemStatement: string;
  benefits: Array<{ title: string; body: string }>;
  keySpecs: Array<{ label: string; value: string }>;
  applications: string[];
  faq: Array<{ q: string; a: string }>;
  ctaPrimary?: string;
}
