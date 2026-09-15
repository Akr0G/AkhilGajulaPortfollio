export function HeroRibbon() {
  return (
    <div className="hero-ribbon" aria-hidden="true">
      <svg viewBox="0 0 1180 620" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ribbon-color" x1="0" x2="1">
            <stop stopColor="#166534" />
            <stop offset=".52" stopColor="#4d7c0f" />
            <stop offset="1" stopColor="#15803d" />
          </linearGradient>
        </defs>
        {Array.from({ length: 24 }, (_, index) => {
          const offset = (index - 11.5) * 7;
          return <path key={index} d={`M-80 ${445 + offset} C 175 ${225 + offset}, 305 ${635 - offset}, 550 ${388 + offset} S 855 ${-10 + offset}, 1260 ${180 + offset}`} />;
        })}
      </svg>
    </div>
  );
}
