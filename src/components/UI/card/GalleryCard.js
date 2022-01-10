import Link from "next/link";
import IconArrow from "../icon/IconArrow";
import ImgComponent from "../image/ImgComponent";
import Background from "../background/Background";

const GalleryCard = (props) => {
	return (
		<figure className={`${props.className} grid grid-flow-row relative`}>
			<ImgComponent
				className="w-full aspect-square md:aspect-[7/10]"
				src={props.src}
				alt={`${props.title} by ${props.author}`}
			/>
			<figcaption className="w-full absolute z-10 p-8 bottom-0 text-white">
				{props.date && <span className="text-sm opacity-90"> {props.date}</span>}
				<span className="block my-1">{props.title}</span>
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
