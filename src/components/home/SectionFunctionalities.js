import FunctionalityCard from "../UI/card/FunctionalityCard";

const SectionFunctionalities = (props) => {
	return (
		<section className="gap-12 px-10 py-20">
			<FunctionalityCard
				title="100% Responsive"
				description="No matter which the device you’re on, our site is fully responsive and stories 
  look beautiful on any screen."
				src="/assets/features/desktop/responsive.svg"
			/>
			<FunctionalityCard
				title="No Photo Upload Limit"
				description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and 
  share all of your stories in one go."
				src="/assets/features/desktop/no-limit.svg"
			/>
			<FunctionalityCard
				title="Available to Embed"
				description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, 
  Google Maps, and more."
				src="/assets/features/desktop/embed.svg"
			/>
		</section>
	);
};
export default SectionFunctionalities;
