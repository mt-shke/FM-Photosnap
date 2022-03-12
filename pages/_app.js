import "../styles/globals.css";
import Head from "next/head";
import Layout from "../src/components/layout/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>PhotoSnap</title>
				<meta title="description" content="Photosnap - A front-end mentor challenge by Michel TCHA" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
