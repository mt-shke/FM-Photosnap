import GalleryCard from "../UI/card/GalleryCard";
import IconArrow from "../UI/icon/IconArrow";
import ImgComponent from "../UI/image/ImgComponent";

const SectionGallery = (props) => {
	return (
		<section>
			<GalleryCard src="/assets/stories/mobile/mountains.jpg" title="The Mountains" author="John Appleseed" />
			<GalleryCard
				src="/assets/stories/mobile/cityscapes.jpg"
				title="Sunset Cityscapes"
				author="Benjamin Cruz"
			/>
			<GalleryCard
				src="/assets/stories/mobile/18-days-voyage.jpg"
				title="18 Days Voyage"
				author="Alexei Borodin"
			/>
			<GalleryCard
				src="/assets/stories/mobile/architecturals.jpg"
				title="Architecturals"
				author="Samantha Brooke"
			/>
		</section>
	);
};
export default SectionGallery;
