// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Favicon  */}
                <link rel="icon" type="icon" href="logo.svg" />
                {/* Fonts  */}
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@400;500;700;800&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
