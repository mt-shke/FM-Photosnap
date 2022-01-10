import ImgComponent from "../UI/image/ImgComponent";
import IconArrow from "../UI/icon/IconArrow";

const SectionArticle = (props) => {
	return (
		<section>
			<article className="grid grid-flow-row md:grid-cols-7">
				<ImgComponent
					className="aspect-[5/4] w-full relative md:hidden"
					src="/assets/home/mobile/create-and-share.jpg"
					alt="lakeview"
					priority="true"
				/>
				<ImgComponent
					className="hidden aspect-[5/4] w-full relative md:block md:col-start-4 md:col-end-8 md:row-start-1"
					src="/assets/home/desktop/create-and-share.jpg"
					alt="lakeview"
					priority="true"
				/>
				<div
					className="flex flex-col justify-center items-start gap-8 px-8 py-16 text-left bg-black text-white md:col-start-1 md:col-end-4 md:row-start-1 md:gap-4 md:py-6
				lg:gap-10 xl:px-24
				"
				>
					<h2 className="text-3xl md:text-base lg:text-xl xl:text-4xl 2xl:text-6xl">
						Create and <br /> share your <br /> photo Stories.
					</h2>
					<p className="text-grey md:text-sm lg:text-lg xl:text-2xl">
						Photosnap is a platform for photographers and visual storytellers. We make it easy to share
						photos, tell stories and connect with others.
					</p>
					<div className="flex justify-start gap-6">
						<h4>GET AN INVITE</h4>
						<IconArrow />
					</div>
				</div>
			</article>

			<article className="grid grid-flow-row md:grid-cols-7">
				<ImgComponent
					className="aspect-[5/4] w-full relative md:hidden"
					src="/assets/home/mobile/beautiful-stories.jpg"
					alt="computer"
				/>
				<ImgComponent
					className="hidden aspect-[5/4] w-full relative md:block md:col-start-1 md:col-end-5 md:row-start-1"
					src="/assets/home/desktop/beautiful-stories.jpg"
					alt="computer"
				/>
				<div
					className="flex flex-col justify-center items-start gap-8 px-8 py-16 text-left bg-white text-black md:col-start-5 md:col-end-8 md:row-start-1 md:gap-4 md:py-6
				lg:gap-10 xl:px-24
				"
				>
					<h2 className="text-3xl md:text-base lg:text-xl xl:text-4xl 2xl:text-6xl">
						Beautiful
						<br />
						stories
						<br />
						every time
					</h2>
					<p className="text-black md:text-sm lg:text-lg xl:text-2xl">
						We provide design templates to ensure your stories look terrific. Easily add photos, text, embed
						maps and media from other networks. Then share your story with everyone.
					</p>
					<div className="flex justify-start gap-6">
						<h4> View the stories</h4>
						<IconArrow black="true" />
					</div>
				</div>
			</article>
			<article className="grid grid-flow-row md:grid-cols-7">
				<ImgComponent
					className="aspect-[5/4] w-full relative md:hidden"
					src="/assets/home/mobile/designed-for-everyone.jpg"
					alt="a cameraman"
				/>
				<ImgComponent
					className="hidden aspect-[5/4] w-full relative md:block md:col-start-4 md:col-end-8 md:row-start-1"
					src="/assets/home/desktop/designed-for-everyone.jpg"
					alt="a cameraman"
				/>
				<div
					className="flex flex-col justify-center items-start gap-8 px-8 py-16 text-left bg-black text-white md:col-start-1 md:col-end-4 md:row-start-1md:gap-4 md:py-6
				lg:gap-10 xl:px-24
				"
				>
					<h2 className="text-3xl md:text-base lg:text-xl xl:text-4xl 2xl:text-6xl">
						Designed for
						<br />
						everyone
					</h2>
					<p className="text-grey md:text-sm lg:text-lg xl:text-2xl">
						Photosnap can help you create stories that resonate with your audience. Our tool is designed for
						photographers of all levels, brands, businesses you name it.
					</p>
					<div className="flex justify-start gap-6">
						<h4> View the stories</h4>
						<IconArrow />
					</div>
				</div>
			</article>
		</section>
	);
};
export default SectionArticle;
