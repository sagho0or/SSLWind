import React from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import ReduxProvider from './reduxProvider';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import IToastNotif from '@/app/utils/toast-notif';
import ClientWrapper from "./clientWrapper";
import 'react-tooltip/dist/react-tooltip.css'
import { ShowInnerComponentProvider } from "./ShowInnerComponentContext";

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

                <link rel="manifest" href="/manifest.webmanifest" />

            </head>
            <body>
                <ReduxProvider>
                    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
                        <IToastNotif />
                        <ShowInnerComponentProvider>
                            <ClientWrapper>{children}</ClientWrapper>
                        </ShowInnerComponentProvider>
                    </ReCaptchaProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}
