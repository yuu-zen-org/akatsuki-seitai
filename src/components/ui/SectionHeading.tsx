interface SectionHeadingProps {
  children: React.ReactNode;
  sub?: string;
}

export function SectionHeading({ children, sub }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
        <h2 className="font-mincho text-xl font-bold text-text sm:text-2xl lg:text-[1.7rem]">
          {children}
        </h2>
        <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
      </div>
      {sub && <p className="text-sm text-text-muted">{sub}</p>}
    </div>
  );
}
