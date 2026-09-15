export type Credential = {
  name: string;
  issuer: string;
  status: 'completed' | 'in_progress';
  dateEarned: string | null;
  credentialId: string | null;
  verificationUrl: string | null;
  certificateImage: string | null;
  visible: boolean;
};

export type Recognition = {
  title: string;
  organization: string;
  dateReceived: string | null;
  description: string;
  image: string | null;
};

// Keep unprovided credential details null rather than inferring them.
export const credentials: Credential[] = [
  { name: 'Foundations of Project Management', issuer: 'Google / Coursera', status: 'completed', dateEarned: 'September 2026', credentialId: null, verificationUrl: null, certificateImage: null, visible: true },
  { name: 'Onshape Certification', issuer: 'Onshape', status: 'in_progress', dateEarned: null, credentialId: null, verificationUrl: null, certificateImage: null, visible: true },
  { name: 'CompTIA Network+', issuer: 'CompTIA', status: 'in_progress', dateEarned: null, credentialId: null, verificationUrl: null, certificateImage: null, visible: false },
];

export const recognitions: Recognition[] = [
  {
    title: 'Certificate of Appreciation',
    organization: 'Nurses of the Future',
    dateReceived: 'July 2025',
    description: 'Recognized for dedication and contributions to the Media/Web Design Team.',
    image: '/nurses-of-the-future-recognition.png',
  },
];
