import { DynaPuff, Roboto,Jua } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "@/components/customComponents/NavBar";
import { ThemeProvider } from "@/components/customComponents/ThemeProvider";
const fontTitle = DynaPuff({
  weight: "400",
  variable: "--font-title",
  subsets: ["latin"],
});

const fontBody = Roboto({
  weight: "400",
  variable: "--font-body",
  subsets: ["latin"],
});
const fontPara = Jua({
   weight: "400",
  variable: "--font-para",
  subsets: ["latin"],
});

export const metadata = {
  title: "Serik.io — Développeur Web Full Stack & Créateur de Contenu",
  description:
    "Portfolio de Curtis Dakouri, développeur full stack, photographe, vidéaste, créateur de contenu et publicitaire . Travaillons ensemble.",
  keywords: [
    "Serik",
    "portfolio développeur",
    "Curtis Dakouri",
    "agence web et digitale",
    "full stack developer",
    "photographe",
    "vidéaste",
    "montage video",
    "creation de clips videos",
    "web freelance Nouvelle-Calédonie",
    "web freelance",
    "création de contenu",
    "publicité digitale",
    "création de flyers",
    "création de site , d'application",
  ],
  authors: [{ name: "Curtis Dakouri", url: "https://serik.io" }],
  creator: "Curtis Dakouri",
  metadataBase: new URL("https://serik.io"),
  openGraph: {
    title: "Serik.io — Développeur Web & Créateur de Contenu",
    description:
      "Découvrez les services de Curtis Dakouri : développement web, création de contenu, montage de vidéos, photographie et publicité. Disponible à distance et en Nouvelle-Calédonie.",
    url: "https://serik.io",
    siteName: "Serik.io",
    images: [
      {
        url: "/serik.jpg", // Place your image in /public
        width: 1200,
        height: 630,
        alt: "Serik.io - Curtis Dakouri freelance",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serik.io — Portfolio de Curtis Dakouri",
    description:
      "Développeur web, créateur de contenu, monteur video, photographe et publicitaire. Contactez-moi pour booster votre image.",
    creator: "@curtisdakouri", // ← update if you have Twitter
    images: ["/og-image.jpg"],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontTitle.variable} ${fontBody.variable} ${fontPara.variable} antialiased`}
      >
        
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <div>{children}</div>
            <Toaster />
           
          </ThemeProvider>
      
      </body>
    </html>
  );
}
