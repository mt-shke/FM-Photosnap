import SectionStoriesGallery from "../src/components/stories/SectionStoriesGallery";
import SectionStoriesLanding from "../src/components/stories/SectionStoriesLanding";

const StoriesPage = () => {
	return (
		<>
			<SectionStoriesLanding />
			<SectionStoriesGallery />
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

export default StoriesPage;
