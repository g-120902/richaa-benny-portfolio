import "@/css/globals.css";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}): JSX.Element {

  return (
    <html lang={params.locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/images/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true} className='font-primary-normal overflow-x-clip'>

          <main>
            <div>
              {children}
            </div>
          </main>


      </body>

    </html>
  );
}
