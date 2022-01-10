import ImgComponent from "../UI/image/ImgComponent";

const SectionPricingLanding = (props) => {
	return (
		<section>
			<article className="grid grid-flow-row md:grid-cols-7">
				<ImgComponent
					className="aspect-[5/4] w-full relative md:hidden"
					src="/assets/pricing/mobile/hero.jpg"
					alt="nice sunset camerawoman"
				/>
				<ImgComponent
					className="hidden md:block md:col-start-4 md:col-end-8 aspect-[830/490] w-full relative"
					src="/assets/pricing/desktop/hero.jpg"
					alt="nice sunset camerawoman"
				/>

				<div
					className="relative flex flex-col justify-center items-start gap-8 px-8 py-16 text-left bg-black text-white md:col-start-1 md:col-end-4 md:row-start-1 md:gap-4 md:py-6
				lg:gap-10 xl:px-32
				"
				>
					<div className="absolute top-0 left-8 md:left-0 md:gridc h-full">
						<span className="h-2 w-32 md:h-32 md:w-2 lg:h-40 block bg-gradient-to-tr from-blue via-red to-orange"></span>
					</div>
					<h1 className="text-3xl md:text-base lg:text-xl xl:text-4xl 2xl:text-6xl">Pricing</h1>
					<p className="text-grey md:text-sm lg:text-lg lg:leading-10">
						Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the
						simple way to create and share your photos.
					</p>
				</div>
			</article>
		</section>
	);
};

export default SectionPricingLanding;
