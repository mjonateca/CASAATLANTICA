export default function FeatureBadge({ children, tone = 'light' }) {
  const variants = {
    light: 'border-white/30 bg-white/15 text-white backdrop-blur-md',
    dark: 'border-night/10 bg-white/65 text-night shadow-soft',
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold ${variants[tone]}`}>
      {children}
    </span>
  );
}
