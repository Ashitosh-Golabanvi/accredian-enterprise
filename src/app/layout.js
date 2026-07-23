import "./globals.css";

export const metadata = {
  title: "Accredian Enterprise | Upskill Your Teams",
  description: "Cultivate high-performance teams through expert learning. Elevate skills in GenAI, Data, Product, Tech, and Leadership with Accredian's tailored enterprise programs.",
  keywords: ["Accredian", "Enterprise Upskilling", "Corporate Training", "GenAI Mastery", "Leadership Programs", "Data Science Training"],
  authors: [{ name: "Accredian Development Team" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
