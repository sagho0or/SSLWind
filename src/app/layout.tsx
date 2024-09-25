import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import ReduxProvider from './reduxProvider';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import IToastNotif from '@/app/utils/toast-notif';
import ClientWrapper from "./clientWrapper";
import 'react-tooltip/dist/react-tooltip.css'
import { ShowInnerComponentProvider } from "./ShowInnerComponentContext";
import Loading from '@/app/loading';

export const metadata: Metadata = {
    title: 'SafeLLM Wind',
    description: 'SafeLLM framework in the development of large language models for the provision of safe and trust-inducing responses in offshore wind maintenance',
};

export default function RootLayout({
    children,
}: {
    children: any;
}) {

    return (
        <html lang="en" dir={'rtl'}>
            <head>
                <meta charSet="UTF-8" />

                <meta name="theme-color" content="#000000" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="description" content="SafeLLM Interaction System is a secure and scalable interface for interacting with large language models (LLMs) in high-risk environments like wind turbine maintenance and healthcare. Built with Next.js, Redux, and JWT for secure communication." />
                <meta name="keywords" content="AI, LLM, SafeLLM, Next.js, Redux, secure login, real-time AI monitoring, JWT authentication, wind turbine maintenance, healthcare, chat interface, WebSocket, API" />
                <meta name="author" content="Saghar Fadaei" />
                <meta property="og:title" content="SafeLLM Interaction System" />
                <meta property="og:description" content="A secure, scalable system for interacting with large language models in high-risk environments, built using Next.js, Redux, and JWT." />
                <meta property="og:url" content="https://github.com/sagho0or/SSLWind" />
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
                {/* <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://apis.google.com; object-src 'none';" /> */}
                <meta name="referrer" content="no-referrer" />
                {/* <meta http-equiv="X-Content-Type-Options" content="nosniff" /> */}
                <meta name="robots" content="index, follow" />

                <link rel="manifest" href="/manifest.webmanifest" />

            </head>
            <body>
                <ReduxProvider>
                    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
                        <IToastNotif />
                        <ShowInnerComponentProvider>
                            <Suspense fallback={<Loading />}>
                                <ClientWrapper>{children}</ClientWrapper>
                            </Suspense>
                        </ShowInnerComponentProvider>
                    </ReCaptchaProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
