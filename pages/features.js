import SectionBetaInvite from "../src/components/features/SectionBetaInvite";
import SectionFeaturesLanding from "../src/components/features/SectionFeaturesLanding";
import SectionFunctionalities from "../src/components/home/SectionFunctionalities";

const FeaturesPage = () => {
	return (
		<>
			<SectionFeaturesLanding />
			<SectionFunctionalities plus="true" />
			<SectionBetaInvite />
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

export default FeaturesPage;
