import SectionPricingLanding from "../src/components/pricing/SectionPricingLanding";
import SectionSuscribe from "../src/components/pricing/SectionSuscribe";
import SectionBetaInvite from "../src/components/features/SectionBetaInvite";
import SectionCompare from "../src/components/pricing/SectionCompare";

const PricingPage = () => {
	return (
		<>
			<SectionPricingLanding />
			<SectionSuscribe />
			<SectionCompare />
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

export default PricingPage;
