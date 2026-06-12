type SectionHeaderProps = {
  title: string;
  description: string;
};

function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="  md:items-end md:justify-between border-b border-slate-200/60 mb-4 dark:border-slate-800/50 pb-6 gap-4">
      <div>
        <h2 className="text-3xl sm:text-4xl font-display mb-2 font-bold text-slate-900 dark:text-white">
          {title}
        </h2>
        <p className="text-base text-slate-500">{description}</p>
      </div>
    </div>
  );
}

export default SectionHeader;
