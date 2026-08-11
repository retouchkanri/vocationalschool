import Image from "next/image";
import Link from "next/link";
import { NAV, SCHOOL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="relative block h-[3.85rem] w-[18.15rem] brightness-0 invert md:h-[4.4rem] md:w-[20.9rem]">
              <Image
                src={SCHOOL.logo}
                alt={SCHOOL.name}
                fill
                sizes="(min-width: 768px) 334px, 290px"
                className="object-contain object-left"
              />
            </span>
            <p className="mt-6 text-base leading-relaxed text-white md:text-[17px]">
              JRA厩務員・牧場就職・乗馬クラブへ。
              <br />
              約118頭の馬とともに、未経験から馬のプロを育てる馬の専門学校。
            </p>
            <address className="mt-6 text-base not-italic leading-relaxed text-white md:text-[17px]">
              {SCHOOL.zip} {SCHOOL.address}
              <br />
              ご相談・お問合せ：
              <a
                href={`tel:${SCHOOL.tel}`}
                className="text-tan underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {SCHOOL.tel}
              </a>
            </address>
            <p className="mt-2 text-sm text-white md:text-base">運営：{SCHOOL.operator}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SCHOOL.sns.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
                </svg>
              </a>
              <a
                href={SCHOOL.sns.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 0 1-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 2c-3.1 0-3.5 0-4.7.1-1.1.1-1.5.2-1.7.3-.4.2-.7.3-.9.6-.3.2-.5.5-.6.9-.1.2-.2.6-.3 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.5.3 1.7.2.4.3.7.6.9.2.3.5.5.9.6.2.1.6.2 1.7.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.5-.2 1.7-.3.4-.2.7-.3.9-.6.3-.2.5-.5.6-.9.1-.2.2-.6.3-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.5-.3-1.7a2 2 0 0 0-.6-.9 2 2 0 0 0-.9-.6c-.2-.1-.6-.2-1.7-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.4a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                </svg>
              </a>
              <a
                href={SCHOOL.sns.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.7-9.9L0 1.2h7.7l5.3 7 6-7zm-1.3 19.4h2L6.6 3.3h-2.2l13.2 17.3z" />
                </svg>
              </a>
              <a
                href={SCHOOL.sns.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center rounded-full bg-white/10 px-4 text-xs font-bold tracking-wider transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
              >
                BLOG
              </a>
              <a
                href={SCHOOL.related.highSchool}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="東関東馬事高等学院"
                title="東関東馬事高等学院"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10.5 12 4l9 6.5M5 9.5V20h14V9.5M9 20v-5h6v5"
                  />
                </svg>
              </a>
              <a
                href={SCHOOL.related.corporate}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="馬事学院（運営会社）"
                title="馬事学院（運営会社）"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 21h16M6 21V7l6-3 6 3v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-3h4v3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 content-start gap-x-6 gap-y-3.5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-2 text-base text-white transition-colors hover:text-accent md:text-[17px]"
              >
                <span className="h-px w-3 bg-tan/70 transition-all duration-300 group-hover:w-5 group-hover:bg-accent" />
                {item.label}
              </Link>
            ))}
            <a
              href={SCHOOL.related.highSchool}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 flex items-center gap-2 text-base text-white transition-colors hover:text-accent md:text-[17px]"
            >
              <span className="h-px w-3 bg-tan/70 transition-all duration-300 group-hover:w-5 group-hover:bg-accent" />
              東関東馬事高等学院
            </a>
            <a
              href={SCHOOL.related.corporate}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 flex items-center gap-2 text-base text-white transition-colors hover:text-accent md:text-[17px]"
            >
              <span className="h-px w-3 bg-tan/70 transition-all duration-300 group-hover:w-5 group-hover:bg-accent" />
              馬事学院（運営会社）
            </a>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 text-center text-sm text-white">
        © {new Date().getFullYear()} {SCHOOL.name} All Rights Reserved.
      </div>
    </footer>
  );
}
