import type { BreadcrumbItem } from "@/types";
import { Breadcrumb } from "./Breadcrumb";

type Props = {
  en: string;
  ja: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
};

export function PageHeader({ en, ja, description, breadcrumbs }: Props) {
  return (
    <div className="pt-6 pb-10">
      <Breadcrumb items={breadcrumbs} />
      <header className="ak-section-head mt-2">
        <p className="mb-[10px] text-[13px] font-bold tracking-[.18em] text-primary">{en}</p>
        <h1 className="font-mincho text-[clamp(34px,3.6vw,54px)] font-normal leading-[1.45] tracking-[.14em]">
          {ja}
        </h1>
        <span className="ak-head-line" />
        {description && (
          <p className="text-base leading-8 text-text-light">{description}</p>
        )}
      </header>
    </div>
  );
}
