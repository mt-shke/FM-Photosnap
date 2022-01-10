import ImgComponent from "../UI/image/ImgComponent";

const FeaturesItem = (props) => {
	return (
		<div>
			<h4 className="block md:hidden">{props.title}</h4>
			<ul className=" grid grid-cols-3 py-4 md:grid-cols-6">
				<li className="hidden md:block md:row-start-1 md:col-start-1 md:col-span-3">
					<h4>{props.title}</h4>
				</li>
				<li className="flex flex-col gap-1 font-bold uppercase text-[10px] leading-[16px] tracking-[2px] opacity-70 md:row-start-1 md:col-span-1">
					<span className="block md:hidden">BASIC</span>
					{props.basic ? <ImgComponent className="w-4 h-4" src="/assets/pricing/desktop/check.svg" /> : ""}
				</li>
				<li className="flex flex-col gap-1 font-bold uppercase text-[10px] leading-[16px] tracking-[2px] opacity-70 md:row-start-1 md:col-span-1">
					<span className="block md:hidden">PRO</span>
					{props.pro ? <ImgComponent className="w-4 h-4" src="/assets/pricing/desktop/check.svg" /> : ""}
				</li>
				<li className="flex flex-col gap-1 font-bold uppercase text-[10px] leading-[16px] tracking-[2px] opacity-70 md:row-start-1 md:col-span-1">
					<span className="block md:hidden">BUSINESS</span>
					{props.business ? <ImgComponent className="w-4 h-4" src="/assets/pricing/desktop/check.svg" /> : ""}
				</li>
			</ul>
		</div>
	);
};
export default FeaturesItem;
