import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>RABT — Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Tailwind CDN — no global.css required */}
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>

            <Component {...pageProps} />
        </>
    );
}
