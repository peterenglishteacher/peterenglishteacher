interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-red-100 transition-all duration-300">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-red-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
