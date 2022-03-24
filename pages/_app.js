import "../styles/globals.css";
import Head from "next/head";
import Layout from "../src/components/layout/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>PhotoSnap</title>
				<meta title="description" content="Photosnap - A front-end mentor challenge by Michel TCHA" />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
