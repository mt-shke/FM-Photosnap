import ImgComponent from "../UI/image/ImgComponent";
import IconArrow from "../UI/icon/IconArrow";
import Background from "../UI/background/Background";

const SectionBetaInvite = (props) => {
	return (
		<section>
			<article className="grid grid-flow-row relative md:aspect-[1440/280] ">
				<ImgComponent
					className="aspect-[7/5] w-full relative md:hidden"
					src="/assets/shared/mobile/bg-beta.jpg"
					alt="invitation picture"
				/>
				<ImgComponent
					className="hidden md:block relative"
					src="/assets/shared/desktop/bg-beta.jpg"
					alt="invitation picture"
				/>
				<div
					className="absolute h-full z-20 flex flex-col justify-center items-start gap-8 px-8 text-left text-white
					md:justify-between
					md:flex-row
					md:items-center
					md:w-full
					md:px-20
					xl:px-40
				"
				>
					<div className="absolute top-0 left-8 md:left-0 h-full">
						<span className="h-2 w-32 md:h-full md:w-2 block bg-gradient-to-tr from-blue via-red to-orange"></span>
					</div>

					<h2 className="md:text-lg lg:text-2xl xl:text-4xl">
						{`WE'RE IN BETA. `}
						<br />
						GET YOUR INVITE <br />
						TODAY!
					</h2>
					<div className="flex justify-start gap-6">
						<h4>Read the story</h4>
						<IconArrow />
					</div>
				</div>
				<Background className="absolute z-10 bg-gradient-to-t from-black to-transparent opacity-30" />
			</article>
		</section>
	);
};
export default SectionBetaInvite;
