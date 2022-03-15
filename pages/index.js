import SectionArticle from "../src/components/home/SectionArticle";
import SectionFunctionalities from "../src/components/home/SectionFunctionalities";
import SectionGallery from "../src/components/home/SectionGallery";

const HomePage = () => {
	return (
		<>
			<SectionArticle />
			<SectionGallery />
			<SectionFunctionalities />
		</>
	);
};

export async function getStaticProps() {
	try {
		return {
			props: {},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
}

export default HomePage;
