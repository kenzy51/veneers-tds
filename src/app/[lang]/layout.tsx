/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import "../globals.css";
import Header from "@/components/Header";
import { Metadata } from "next";
import { getDictionary } from "./dictionaries";
import { brandonGrotesque } from "../fonts";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang || "en";
  const isEs = lang === "es";

  return {
    title: isEs
      ? "Carillas Dentales en NYC | Diseño de Sonrisa Cosmética | Tribeca Dental Studio"
      : "Porcelain Veneers NYC | Cosmetic Smile Design Specialists | Tribeca Dental Studio",
    description: isEs
      ? "Transforme su sonrisa con carillas dentales personalizadas en Tribeca. Especialistas en carillas de porcelana naturales, diseño de sonrisa y estética dental de lujo."
      : "Transform your smile with custom porcelain veneers in Tribeca. Specialists in natural-looking, high-end smile makeovers and cosmetic dentistry.",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: "FvXb6KDkt8yxyo6HnbW1yLiHs9YrgSWnt0xbQ2cag0I",
    },
    alternates: {
      // Updated URLs to reflect veneers
      canonical: `https://veneers.tribecadentalstudio.com/${lang}`,
      languages: {
        "en-US": "https://veneers.tribecadentalstudio.com/en",
        "es-ES": "https://veneers.tribecadentalstudio.com/es",
      },
    },
    openGraph: {
      title: isEs
        ? "Carillas Dentales de Lujo en NYC | Tribeca Dental Studio"
        : "Luxury Porcelain Veneers NYC | Tribeca Dental Studio",
      description: isEs
        ? "Diseño de sonrisa avanzado y carillas de porcelana personalizadas en Manhattan. Consiga una sonrisa perfecta y natural."
        : "Advanced smile design and custom porcelain veneers in Manhattan. Achieve your perfect, natural-looking dream smile.",
      url: `https://veneers.tribecadentalstudio.com/${lang}`,
      siteName: "Tribeca Dental Studio",
      images: [
        {
          // Updated image path string reference
          url: "/veneer-og-image.png",
          width: 1200,
          height: 630,
          alt: isEs
            ? "Carillas Dentales en Tribeca Dental Studio"
            : "Porcelain Veneers at Tribeca Dental Studio",
        },
      ],
      locale: isEs ? "es_ES" : "en_US",
      type: "website",
    },
    keywords: isEs
      ? [
          "Carillas dentales NYC",
          "Carillas de porcelana Manhattan",
          "Diseño de sonrisa Tribeca",
          "Especialista en carillas estéticas",
          "Dentista cosmético NYC carillas",
        ]
      : [
          "Porcelain Veneers NYC",
          "Cosmetic Dentist Manhattan",
          "Veneers smile design Tribeca",
          "Best dental veneers NYC",
          "Smile makeover Manhattan",
          "Natural looking veneers NYC",
        ],
  };
}
// Update 2: Correcting the LayoutProps for Next.js 15
export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const params = await props.params;
  const children = props.children;

  const lang = params.lang === "es" ? "es" : "en";
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`
      ${brandonGrotesque.variable} 
    `}
      style={{ fontFamily: "var(--font-brandon)" }}
    >
      <body className="bg-white text-foreground antialiased selection:bg-luxury-gold selection:text-white">
        {/* @ts-ignore */}
        <Header lang={lang} dict={dict} />
        {children}
        <script
          src="https://leadpipe.aws53.cloud/p/f9f96ecd-40b1-4b48-8f3d-c08e31828078.js"
          async
        ></script>
      </body>
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>

      <script
        // @ts-ignore
        theme='{"primary":"#fffffff","background":"#ffffff"}'
        src="https://chatbot.seeb.ai/embed.js"
        access-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OGUwYTgyMjE3NWJmMTdiNzY2YzdhMCIsInJvbGUiOiJQVUJMSUMiLCJlbWFpbCI6InByQE55dGRzLmNvbSIsImZ1bGxOYW1lIjoiVHJpYmVjYSBEZW50YWwgU3R1ZGlvIiwiaWF0IjoxNzcyNjUyNjEyLCJleHAiOjIwODgyMjg2MTJ9.YHlLlDWIWNcxc7-0hQdoTAFnZFI1w6ln5jgVyBNuMiw"
        chat-id="9264a102-5a9b-4701-850e-ec2527893562"
      ></script>
      {/* @ts-ignore */}
      {/* OpenAI Pixel Integration */}
      <Script id="openai-pixel" strategy="afterInteractive">
        {`
            !function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
            oaiq("init",{pixelId:"3hTF3XEmhCECsmHrHVJihm",debug:true});
          `}
      </Script>
    </html>
  );
}
