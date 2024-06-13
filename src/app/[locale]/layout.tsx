import "@/css/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}): JSX.Element {
  const messages = useMessages();

  return (
    <html lang={params.locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/images/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true} className='font-primary-normal overflow-x-clip'>
        <NextIntlClientProvider locale={params.locale} messages={messages}>

          {/* <!-- ===== Header Start ===== --> */}
          <Header />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div>
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}

          {/* <!-- ===== Footer Start ===== --> */}
          <Footer />
          {/* <!-- ===== Footer End ===== --> */}
        </NextIntlClientProvider>

      </body>

    </html>
  );
}