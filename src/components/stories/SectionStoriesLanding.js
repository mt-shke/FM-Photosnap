import ImgComponent from "../UI/image/ImgComponent";
import IconArrow from "../UI/icon/IconArrow";

const SectionStoriesLanding = (props) => {
	return (
		<section>
			<article className="relative grid grid-flow-row md:gridc md:aspect-[1440/660]">
				<ImgComponent
					className="aspect-square relative md:hidden"
					src="/assets/stories/mobile/moon-of-appalacia.jpg"
					alt="moon of appalacia"
				/>
				<ImgComponent
					className="hidden relative md:block"
					src="/assets/stories/desktop/moon-of-appalacia.jpg"
					alt="moon of appalacia"
				/>
				<div className="grid grid-flow-row gap-8 px-8 py-16 text-left bg-black text-white md:absolute md:w-2/4 md:left-0 md:gap-3 md:bg-inherit lg:w-2/5 xl:gap-8">
					<h4>{`Last month's featured story`}</h4>
					<h2 className="text-3xl md:text-base lg:text-3xl">
						Hazy full
						<br />
						moon of
						<br />
						Appalachia
					</h2>
					<span className="text-sm md:text-xs lg:text-base">
						<span className="opacity-70">March 2nd 2020</span> by John Appleseed
					</span>
					<p className="text-grey md:text-xs lg:text-base">
						{`The dissected plateau area, while not actually made up of geological mountains, is popularly
						called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not
						high, the terrain is extremely rugged.`}
					</p>
					<div className="flex justify-start gap-6">
						<h4>Read the story</h4>

						<IconArrow />
					</div>
				</div>
			</article>
		</section>
	);
};

export default SectionStoriesLanding;
