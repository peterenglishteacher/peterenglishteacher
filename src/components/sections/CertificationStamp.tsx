import Image from "next/image";

export default function CertificationStamp() {
  return (
    <section
      aria-label="Recognized English language certifications"
      className="border-y border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 md:py-6 lg:px-8">
        <Image
          src="/certification-stamp.png"
          alt="OPTIS, Trinity College London, Cambridge Assessment English, LanguageCert and Linguaskill"
          width={2015}
          height={210}
          className="h-auto w-full"
          sizes="(max-width: 1280px) 100vw, 1216px"
        />
      </div>
    </section>
  );
}
