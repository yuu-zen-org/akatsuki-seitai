import Link from "next/link";
import type { BreadcrumbItem } from "@/types";
import { generateBreadcrumbJsonLd } from "@/lib/json-ld";
import { JsonLd } from "./JsonLd";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <>
      <JsonLd data={generateBreadcrumbJsonLd(items)} />
      <nav aria-label="パンくずリスト" className="py-3 text-sm text-text-muted">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === items.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-text-light hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
