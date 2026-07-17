import "./globals.css";

export const metadata = {
  title: "MIGMIG Gaming",
  description: "تیم MIGMIG games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
