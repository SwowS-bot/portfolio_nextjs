import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tran Huynh Minh Thu — Junior Account | Media Producer",
  description: "Tran Huynh Minh Thu is a Media Producer based in Vietnam. Producing films, TVCs, music videos, and social media content for brands & events.",
  openGraph: {
    type: 'website',
  title: 'Tran Huynh Minh Thu — Junior Account | Media Producer',
  description: 'Tran Huynh Minh Thu is a Media Producer based in Vietnam. Producing films, TVCs, music videos, and social media content for brands & events.',
  },
  twitter: {
    card: 'summary_large_image',
  title: 'Tran Huynh Minh Thu — Junior Account | Media Producer',
  description: 'Tran Huynh Minh Thu is a Media Producer based in Vietnam. Producing films, TVCs, music videos, and social media content for brands & events.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
