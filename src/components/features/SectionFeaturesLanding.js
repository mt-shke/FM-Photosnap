import ImgComponent from "../UI/image/ImgComponent";

const SectionFeaturesLanding = (props) => {
	return (
		<section>
			<article className="grid grid-flow-row md:grid-cols-7">
				<ImgComponent
					className="aspect-[5/4] w-full relative md:hidden"
					src="/assets/features/mobile/hero.jpg"
					alt="adventure picture"
					priority="true"
				/>
				<ImgComponent
					className="hidden md:block md:col-start-4 md:col-end-8 aspect-[830/490] w-full relative"
					src="/assets/features/desktop/hero.jpg"
					alt="adventure picture"
					priority="true"
				/>

				<div
					className="relative flex flex-col justify-center items-start gap-8 px-8 py-16 text-left bg-black text-white md:col-start-1 md:col-end-4 md:row-start-1 md:gap-4 md:py-6
				lg:gap-10 xl:px-32
				"
				>
					<div className="absolute top-0 left-8 md:left-0 md:gridc h-full">
						<span className="h-2 w-32 md:h-32 md:w-2 lg:h-40 block bg-gradient-to-tr from-blue via-red to-orange"></span>
					</div>
					<h1 className="text-3xl md:text-base lg:text-xl xl:text-4xl 2xl:text-6xl">Features</h1>

					<p className="text-grey md:text-sm lg:text-lg lg:leading-10">
						We make sure all of our features are designed to be loved by every aspiring and even professional
						photograpers who wanted to share their stories.
					</p>
				</div>
			</article>
		</section>
	);
};

export default SectionFeaturesLanding;
