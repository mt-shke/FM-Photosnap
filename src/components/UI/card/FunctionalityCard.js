import ImgComponent from "../image/ImgComponent";

const FunctionalityCard = (props) => {
	return (
		<article className="grid grid-flow-row gap-8 items-center text-center">
			<ImgComponent
				className="w-16 aspect-square mx-auto"
				fit="contain"
				src={props.src}
				alt={`${props.title} illustration`}
			/>
			<div className="flex flex-col gap-4">
				<span className="font-bold">{props.title}</span>
				<p className="text-sm opacity-70">{props.description}</p>
			</div>
		</article>
	);
};
export default FunctionalityCard;
