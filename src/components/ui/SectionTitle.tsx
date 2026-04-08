interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-blue-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto ${
            light ? "text-blue-100" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 mx-auto w-16 h-1 rounded-full ${
          light ? "bg-red-400" : "bg-red-600"
        }`}
      />
    </div>
  );
}
