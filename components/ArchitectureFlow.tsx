export function ArchitectureFlow({ steps }: { steps: string[] }) {
  return <ol className="architecture-flow" aria-label="Project system flow">
    {steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>)}
  </ol>;
}
