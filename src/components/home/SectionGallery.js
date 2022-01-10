import GalleryCard from "../UI/card/GalleryCard";

const SectionGallery = (props) => {
	return (
		<section className="grid md:grid-cols-4">
			<GalleryCard
				className="block md:hidden"
				src="/assets/stories/mobile/mountains.jpg"
				title="The Mountains"
				author="John Appleseed"
			/>
			<GalleryCard
				className="block md:hidden"
				src="/assets/stories/mobile/cityscapes.jpg"
				title="Sunset Cityscapes"
				author="Benjamin Cruz"
			/>
			<GalleryCard
				className="block md:hidden"
				src="/assets/stories/mobile/18-days-voyage.jpg"
				title="18 Days Voyage"
				author="Alexei Borodin"
			/>
			<GalleryCard
				className="block md:hidden"
				src="/assets/stories/mobile/architecturals.jpg"
				title="Architecturals"
				author="Samantha Brooke"
			/>
			<GalleryCard
				className="hidden md:block"
				src="/assets/stories/desktop/mountains.jpg"
				title="The Mountains"
				author="John Appleseed"
			/>
			<GalleryCard
				className="hidden md:block"
				src="/assets/stories/desktop/cityscapes.jpg"
				title="Sunset Cityscapes"
				author="Benjamin Cruz"
			/>
			<GalleryCard
				className="hidden md:block"
				src="/assets/stories/desktop/18-days-voyage.jpg"
				title="18 Days Voyage"
				author="Alexei Borodin"
			/>
			<GalleryCard
				className="hidden md:block"
				src="/assets/stories/desktop/architecturals.jpg"
				title="Architecturals"
				author="Samantha Brooke"
			/>
		</section>
	);
};
export default SectionGallery;
