import { absoluteUrl, getSiteUrl } from "@/lib/site";

const DESCRIPTION =
  "Liam Coren is a Liferay Expert and Tinker. About, work, and contact.";

const EMAIL = "liamcorenxo@gmail.com";

export function PersonJsonLd() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Liam Coren",
    url: base,
    image: absoluteUrl("/liamcoren-profile-pic.png"),
    email: EMAIL,
    jobTitle: "Liferay Expert",
    description: DESCRIPTION,
    knowsAbout: [
      "Liferay",
      "Liferay DXP",
      "Java",
      "Enterprise portals",
      "OSGi",
      "REST APIs",
    ],
    sameAs: [
      "https://www.linkedin.com/in/liam-coren/",
      "https://github.com/liam-coren",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Liam Coren",
    url: base,
    description: DESCRIPTION,
    author: {
      "@type": "Person",
      name: "Liam Coren",
      url: base,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
