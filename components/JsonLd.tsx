const JsonLd = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Integrated Hill Areas Upliftment Society",
    alternateName: "IHAUS",
    url: "https://ihausmanipur.org",
    logo: "https://ihausmanipur.org/images/logo.png",
    description:
      "Empowering Hill Communities for Sustainable Rural Development in Noney District, Manipur",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Duithanjang Village, Khoupum",
      addressLocality: "Noney District",
      addressRegion: "Manipur",
      postalCode: "795147",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      contactType: "customer service",
      email: "IHAUSDTZ@gmail.com",
    },
    foundingDate: "2014",
    registrationNumber: "MN/NON/2014/102",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IHAUS Manipur",
    url: "https://ihausmanipur.org",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ihausmanipur.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([organizationSchema, websiteSchema]),
      }}
    />
  );
};

export default JsonLd;
