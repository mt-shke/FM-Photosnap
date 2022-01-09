import ImgComponent from "../UI/image/ImgComponent";
import IconArrow from "../UI/icon/IconArrow";

const SectionArticle = (props) => {
	return (
		<section>
			<article className="grid grid-flow-row">
				<ImgComponent className="aspect-[5/4] relative" src="/assets/home/mobile/create-and-share.jpg" />
				<div className="grid grid-flow-row gap-8 px-8 py-16 text-left bg-black text-white">
					<h2 className="text-3xl">
						Create and <br /> share your <br /> photo Stories.
					</h2>
					<p className="text-grey opacity-70">
						Photosnap is a platform for photographers and visual storytellers. We make it easy to share
						photos, tell stories and connect with others.
					</p>
					<div className="flex justify-start gap-6">
						<h4>GET AN INVITE</h4>

						<IconArrow />
					</div>
				</div>
			</article>

			<article className="grid grid-flow-row">
				<ImgComponent className="aspect-[5/4] relative" src="/assets/home/mobile/beautiful-stories.jpg" />
				<div className="grid grid-flow-row gap-8 px-8 py-16 text-left bg-white text-black">
					<h2 className="text-3xl">
						Beautiful
						<br />
						stories
						<br />
						every time
					</h2>
					<p className="text-black opacity-70">
						We provide design templates to ensure your stories look terrific. Easily add photos, text, embed
						maps and media from other networks. Then share your story with everyone.
					</p>
					<div className="flex justify-start gap-6">
						<h4> View the stories</h4>
						<IconArrow black="true" />
					</div>
				</div>
			</article>
			<article className="grid grid-flow-row">
				<ImgComponent className="aspect-[5/4] relative" src="/assets/home/mobile/designed-for-everyone.jpg" />
				<div className="grid grid-flow-row gap-8 px-8 py-16 text-left bg-white text-black">
					<h2 className="text-3xl">
						Designed for
						<br />
						everyone
					</h2>
					<p className="text-black opacity-70">
						Photosnap can help you create stories that resonate with your audience. Our tool is designed for
						photographers of all levels, brands, businesses you name it.
					</p>
					<div className="flex justify-start gap-6">
						<h4> View the stories</h4>
						<IconArrow black="true" />
					</div>
				</div>
			</article>
		</section>
	);
};
export default SectionArticle;
