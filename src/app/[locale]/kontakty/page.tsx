import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { site, departmentContacts, teamPortraits } from "@/lib/site";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactsPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ContactsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactsContent />;
}

type DeptMember = { name: string; role: string };
type Department = {
  title: string;
  description?: string;
  members: DeptMember[];
};

function ContactsContent() {
  const t = useTranslations("contactsPage");
  const tc = useTranslations("common");
  const tf = useTranslations("contactForm");
  const departments = t.raw("departments") as Department[];

  return (
    <>
      <PageHero
        eyebrow={t("heroEyebrow")}
        title={
          <>
            {t("heroTitleLine1")}
            <br />
            <span className="text-white/70">{t("heroTitleLine2")}</span>
          </>
        }
      />

      <section className="-mt-12 md:-mt-16 pb-16 relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title={t("phoneLabel")} subtitle={t("phoneSub")}>
              <a
                href={`tel:${site.phones.mainHref}`}
                className="text-[26px] font-semibold tnum text-ink hover:text-brand-red"
              >
                {site.phones.main}
              </a>
            </Card>
            <Card title={t("emailLabel")} subtitle={t("emailSub")}>
              <a
                href={`mailto:${site.emails.main}`}
                className="text-[20px] md:text-[22px] font-semibold text-ink hover:text-brand-red"
              >
                {site.emails.main}
              </a>
            </Card>
            <Card title={t("addressLabel")} subtitle={t("addressSub")}>
              <p className="text-[16px] leading-relaxed text-ink">
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
                <br />
                {site.address.country}
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          {departments.map((dept, deptIdx) => (
            <div key={dept.title} className="mb-16 last:mb-0">
              <header className="mb-8 max-w-2xl">
                <p className="eyebrow">{dept.title}</p>
                {dept.description && (
                  <p className="mt-3 text-[16px] text-ink-muted">
                    {dept.description}
                  </p>
                )}
              </header>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {dept.members.map((m, memberIdx) => {
                  const contact = departmentContacts[deptIdx]?.[memberIdx];
                  const portrait = teamPortraits[m.name];
                  return (
                    <article
                      key={m.name}
                      className="border border-line rounded-2xl p-6 bg-white hover:shadow-soft transition-shadow"
                    >
                      {portrait && (
                        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-surface-2 mb-4">
                          <Image
                            src={portrait}
                            alt={m.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <h3 className="text-[17px] font-semibold tracking-tight">
                        {m.name}
                      </h3>
                      <p className="text-[13px] text-ink-muted mt-0.5">
                        {m.role}
                      </p>
                      {contact && (
                        <dl className="mt-4 space-y-1.5 text-[14px]">
                          <div className="flex gap-2">
                            <dt className="w-14 shrink-0 text-ink-muted text-[12px] uppercase tracking-wider pt-0.5">
                              {tc("email")}
                            </dt>
                            <dd>
                              <a
                                href={`mailto:${contact.email}`}
                                className="text-ink hover:text-brand-red break-all"
                              >
                                {contact.email}
                              </a>
                            </dd>
                          </div>
                          {contact.phone && (
                            <div className="flex gap-2">
                              <dt className="w-14 shrink-0 text-ink-muted text-[12px] uppercase tracking-wider pt-0.5">
                                {tc("phone")}
                              </dt>
                              <dd>
                                <a
                                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                                  className="text-ink hover:text-brand-red tnum"
                                >
                                  {contact.phone}
                                </a>
                              </dd>
                            </div>
                          )}
                          {contact.mobile && (
                            <div className="flex gap-2">
                              <dt className="w-14 shrink-0 text-ink-muted text-[12px] uppercase tracking-wider pt-0.5">
                                {tc("mobile")}
                              </dt>
                              <dd>
                                <a
                                  href={`tel:${contact.mobile.replace(/\s/g, "")}`}
                                  className="text-ink hover:text-brand-red tnum"
                                >
                                  {contact.mobile}
                                </a>
                              </dd>
                            </div>
                          )}
                        </dl>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-24 border-t border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="eyebrow">{tf("eyebrow")}</p>
              <h2 className="mt-4 text-[32px] md:text-[40px] font-semibold tracking-tight leading-[1.05]">
                {tf("title")}
              </h2>
              <p className="mt-5 text-[16px] text-ink-muted leading-relaxed max-w-md">
                {tf("body")}
              </p>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="eyebrow">{t("officeEyebrow")}</p>
              <h2 className="mt-4 text-[28px] md:text-[34px] font-semibold tracking-tight">
                {site.address.street}
                <br />
                <span className="text-ink/70">
                  {site.address.zip} {site.address.city}
                </span>
              </h2>
              <dl className="mt-6 space-y-2 text-[15px]">
                <div className="flex gap-3">
                  <dt className="w-20 text-ink-muted">IČ</dt>
                  <dd className="tnum">{site.ico}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 text-ink-muted">DIČ</dt>
                  <dd className="tnum">{site.dic}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 text-ink-muted">GPS</dt>
                  <dd className="tnum">{site.gps.label}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 text-ink-muted">{tc("fax")}</dt>
                  <dd className="tnum">{site.phones.fax}</dd>
                </div>
              </dl>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${site.gps.lat},${site.gps.lng}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-red hover:gap-3 transition-all"
              >
                {tc("openInMaps")}
                <span aria-hidden>→</span>
              </a>
            </div>
            <div className="lg:col-span-7">
              <iframe
                src={`https://www.google.com/maps?q=${site.gps.lat},${site.gps.lng}&z=15&output=embed`}
                className="w-full aspect-[4/3] rounded-2xl border-0 shadow-soft"
                loading="lazy"
                title="J.M.I.T. a.s. — Hlubočky"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-line rounded-2xl p-7 shadow-soft">
      <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-brand-red">
        {title}
      </p>
      <p className="mt-1 text-[12px] text-ink-muted">{subtitle}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}
