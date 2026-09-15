import "./globals.css";

export const metadata = {
  title: "WebDev 2 Demos",
  description: "Demo code for WebDev 2",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>{children}</body> {/* /*Children will represent every page*/}
    </html>
  );
}
