import Link from "next/link";
import IconArrow from "../icon/IconArrow";
import ImgComponent from "../image/ImgComponent";
import Background from "../background/Background";

const GalleryCard = (props) => {
	return (
		<figure className="grid grid-flow-row relative">
			<ImgComponent
				className="w-full aspect-square"
				src={props.src}
				alt={`${props.title} by ${props.author}`}
			/>
			<figcaption className="w-full absolute z-10 p-8 bottom-0 text-white">
				{props.title}
				<span className="block opacity-70 text-sm">{`by ${props.author}`}</span>
				<hr className="my-4" />

				<Link href="/">
					<a className="flex justify-between gap-6 text-grey">
						<h4> Read Story</h4>
						<IconArrow />
					</a>
				</Link>
			</figcaption>
			<Background className="absolute opacity-50 inset-0 bg-gradient-to-t from-black  to-transparent" />
		</figure>
	);
};
export default GalleryCard;
