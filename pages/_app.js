import "../styles/globals.css";
import Head from "next/head";
import Layout from "../src/components/layout/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Starter Nextjs with TailwindCss</title>
				<meta title="description" content="Nextjs Tailwind" />
				{/* font  */}
				{/* <link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet" /> */}
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
