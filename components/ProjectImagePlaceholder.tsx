type ProjectImagePlaceholderProps = {
  label: string;
  aspectRatio?: string;
  compact?: boolean;
};

export function ProjectImagePlaceholder({ label, aspectRatio = '16 / 9', compact = false }: ProjectImagePlaceholderProps) {
  return (
    <div className={`project-image-placeholder${compact ? ' compact' : ''}`} style={{ aspectRatio }} role="img" aria-label={`${label} placeholder`}>
      <span className="placeholder-kicker">Project visual</span>
      <strong>{label}</strong>
      <span className="placeholder-note">Replace with project screenshot</span>
    </div>
  );
}
