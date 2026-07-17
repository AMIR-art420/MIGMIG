import "./globals.css";

export const metadata = {
  title: "MIGMIG Gaming",
  description: "تیم MIGMIG games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/templatemo-lugx-gaming.css" />
        <link rel="stylesheet" href="/assets/css/owl.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/fonts.css" />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
