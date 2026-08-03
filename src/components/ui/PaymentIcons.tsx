/** 各決済ブランドのSVGアイコン。後から本物の画像に差し替え可能。 */

function CardShell({ children, bg = "#1a1a2e" }: { children: React.ReactNode; bg?: string }) {
  return (
    <svg viewBox="0 0 56 36" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
      <rect width="56" height="36" rx="5" fill={bg} />
      {children}
    </svg>
  );
}

export function IconVisa() {
  return (
    <CardShell bg="#1a1f71">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="14" fontFamily="Arial, sans-serif" fontStyle="italic" fontWeight="bold"
        letterSpacing="-0.5">
        VISA
      </text>
    </CardShell>
  );
}

export function IconMastercard() {
  return (
    <CardShell bg="#252525">
      <circle cx="21" cy="18" r="10" fill="#eb001b" />
      <circle cx="35" cy="18" r="10" fill="#f79e1b" />
      <path d="M28 10.5a10 10 0 0 1 0 15 10 10 0 0 1 0-15Z" fill="#ff5f00" />
    </CardShell>
  );
}

export function IconJcb() {
  return (
    <CardShell bg="#ffffff">
      <rect x="6" y="6" width="12" height="24" rx="4" fill="#003087" />
      <rect x="22" y="6" width="12" height="24" rx="4" fill="#cc0000" />
      <rect x="38" y="6" width="12" height="24" rx="4" fill="#007b40" />
      <text x="12" y="22" dominantBaseline="middle" textAnchor="middle"
        fill="#fff" fontSize="9" fontFamily="Arial" fontWeight="bold">J</text>
      <text x="28" y="22" dominantBaseline="middle" textAnchor="middle"
        fill="#fff" fontSize="9" fontFamily="Arial" fontWeight="bold">C</text>
      <text x="44" y="22" dominantBaseline="middle" textAnchor="middle"
        fill="#fff" fontSize="9" fontFamily="Arial" fontWeight="bold">B</text>
    </CardShell>
  );
}

export function IconAmex() {
  return (
    <CardShell bg="#007bc1">
      <text x="50%" y="46%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="9" fontFamily="Arial" fontWeight="bold" letterSpacing="0.5">
        AMERICAN
      </text>
      <text x="50%" y="68%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="9" fontFamily="Arial" fontWeight="bold" letterSpacing="0.5">
        EXPRESS
      </text>
    </CardShell>
  );
}

export function IconPaypay() {
  return (
    <svg viewBox="0 0 56 36" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
      <rect width="56" height="36" rx="5" fill="#ff0033" />
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="11" fontFamily="Arial" fontWeight="bold" letterSpacing="-0.3">
        PayPay
      </text>
    </svg>
  );
}

export function IconLinepay() {
  return (
    <svg viewBox="0 0 56 36" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
      <rect width="56" height="36" rx="5" fill="#00b900" />
      <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="8.5" fontFamily="Arial" fontWeight="bold">
        LINE
      </text>
      <text x="50%" y="68%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="8.5" fontFamily="Arial" fontWeight="bold">
        Pay
      </text>
    </svg>
  );
}

export function IconDbarai() {
  return (
    <svg viewBox="0 0 56 36" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
      <rect width="56" height="36" rx="5" fill="#ea0029" />
      <text x="50%" y="42%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="8" fontFamily="Arial" fontWeight="bold">
        d払い
      </text>
      <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="7" fontFamily="Arial">
        docomo
      </text>
    </svg>
  );
}

export function IconAupay() {
  return (
    <svg viewBox="0 0 56 36" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
      <rect width="56" height="36" rx="5" fill="#f60" />
      <text x="50%" y="42%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="10" fontFamily="Arial" fontWeight="bold">
        au PAY
      </text>
      <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="7" fontFamily="Arial">
        KDDI
      </text>
    </svg>
  );
}

export function IconRakutenpay() {
  return (
    <svg viewBox="0 0 56 36" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
      <rect width="56" height="36" rx="5" fill="#bf0000" />
      <text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="7.5" fontFamily="Arial" fontWeight="bold">
        楽天ペイ
      </text>
      <text x="50%" y="68%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="7" fontFamily="Arial">
        Rakuten Pay
      </text>
    </svg>
  );
}

export function IconSuica() {
  return (
    <svg viewBox="0 0 56 36" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
      <rect width="56" height="36" rx="5" fill="#45b035" />
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="11" fontFamily="Arial" fontWeight="bold">
        Suica
      </text>
    </svg>
  );
}

export function IconNanaco() {
  return (
    <svg viewBox="0 0 56 36" xmlns="http://www.w3.org/2000/svg" className="h-9 w-auto">
      <rect width="56" height="36" rx="5" fill="#f5a500" />
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
        fill="#ffffff" fontSize="10" fontFamily="Arial" fontWeight="bold">
        nanaco
      </text>
    </svg>
  );
}
