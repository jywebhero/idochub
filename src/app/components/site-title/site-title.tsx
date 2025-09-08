import { SITE_TITLE, SITE_DESCRIPTION } from "@/app/config/meta";

export const SiteTitle = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <a href="/" className="flex items-center">
        <img src="/logo.svg" alt="logo" className="w-8 h-8" />
        <h1 className="text-2xl font-bold ml-2">{SITE_TITLE}</h1>
      </a>
      <p className="mt-4 text-center text-gray-500">
        {SITE_DESCRIPTION}
      </p>
    </section>
  );
};