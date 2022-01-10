import FeaturesItem from "./FeaturesItem";

const SectionCompare = (props) => {
	return (
		<section className="ctn max-w-[1080px] px-6 py-12 lg:py-28">
			<h4 className="block md:hidden">The Features</h4>
			<h2 className="hidden text-center my-16 md:block">COMPARE</h2>
			<ul className="hidden md:grid grid-col-6">
				<li className="row-start-1 col-start-1 col-span-3">
					<h4>the features</h4>
				</li>
				<li className="row-start-1 col-span-1">
					<h4>basic</h4>
				</li>
				<li className="row-start-1 col-span-1">
					<h4>pro</h4>
				</li>
				<li className="row-start-1 col-span-1">
					<h4>business</h4>
				</li>
			</ul>
			<hr className="my-6 border-black" />
			<FeaturesItem title="Unlimited Story Posting" basic="true" pro="true" business="true" />
			<hr className="my-4 opacity-20" />
			<FeaturesItem title="Unlimited Photo Upload" basic="true" pro="true" business="true" />
			<hr className="my-4 opacity-20" />
			<FeaturesItem title="Embedding Custom Content" pro="true" business="true" />
			<hr className="my-4 opacity-20" />

			<FeaturesItem title="Customize Metadata" pro="true" business="true" />
			<hr className="my-4 opacity-20" />

			<FeaturesItem title="Advanced Metrics" business="true" />
			<hr className="my-4 opacity-20" />

			<FeaturesItem title="Photo Downloads" business="true" />
			<hr className="my-4 opacity-20" />

			<FeaturesItem title="Search Engine Indexing" business="true" />
			<hr className="my-4 opacity-20" />

			<FeaturesItem title="Custom Analytics" business="true" />
		</section>
	);
};
export default SectionCompare;
