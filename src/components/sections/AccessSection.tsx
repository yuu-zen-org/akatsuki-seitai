import { siteConfig } from "@/lib/site-config";

export function AccessSection() {
  return (
    <section className="py-20 md:py-28" id="access">
      <div data-reveal className="mx-auto w-[min(calc(100%-2rem),1260px)]">
        <header className="mb-10 text-center">
          <p className="font-bold tracking-[.18em] text-primary">ACCESS</p>
          <h2 className="mt-3 font-mincho text-4xl md:text-5xl">アクセス</h2>
          <div className="mx-auto mt-5 h-0.5 w-14 bg-primary" />
          <p className="mt-5 text-text-light">
            泉中央駅から徒歩6分。無料駐車場もございます。
          </p>
        </header>

        <div className="card-glass grid gap-8 rounded-[2rem] p-6 md:p-9 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h3 className="font-mincho text-3xl">
              {siteConfig.name} {siteConfig.branch}
            </h3>
            <dl className="mt-6 divide-y divide-black/10 border-y border-black/10">
              <div className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr]">
                <dt className="font-bold">住所</dt>
                <dd className="text-text-light">
                  〒{siteConfig.address.postalCode} {siteConfig.address.prefecture}
                  {siteConfig.address.city}
                  <br />
                  {siteConfig.address.street}
                </dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr]">
                <dt className="font-bold">電話番号</dt>
                <dd className="text-text-light">
                  <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
                </dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr]">
                <dt className="font-bold">営業時間</dt>
                <dd className="text-text-light">10:00〜19:00</dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr]">
                <dt className="font-bold">定休日</dt>
                <dd className="text-text-light">{siteConfig.business.closedDay}</dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr]">
                <dt className="font-bold">アクセス</dt>
                <dd className="text-text-light">
                  「泉中央駅」より徒歩6分
                  <br />
                  「八乙女駅」より徒歩15分
                  <br />
                  {siteConfig.business.parking}
                </dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.2085477812293!2d140.88529359999998!3d38.3210012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f89819233ea5735%3A0x4202747f79f6a083!2z5pW05L2T6Zmi5qWT5pyILUFrYXRzdWtpLSDms4nkuK3lpK7pmaI!5e0!3m2!1sja!2sjp!4v1784552544007!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="整体院 楓月 泉中央院の地図"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
