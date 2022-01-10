import Button from "../UI/button/Button";
import { useState } from "react";

const SectionSuscribe = (props) => {
	const [monthly, setMonthly] = useState(true);

	const buttons = (
		<div className="flex items-center gap-6 font-bold">
			<span className={monthly ? "" : "opacity-50"}>Monthly</span>
			<div
				onClick={() => setMonthly((o) => !o)}
				className={`${
					monthly ? "justify-start" : "justify-end"
				} w-14 h-7 flex items-center p-1 rounded-full bg-grey hover:cursor-pointer`}
			>
				<span className="h-5 aspect-square rounded-full bg-black"></span>
			</div>
			<span className={monthly ? "opacity-50" : ""}>Yearly</span>
		</div>
	);

	return (
		<section className="ctn flex flex-col gap-8 items-center px-6 py-12">
			{buttons}
			<div className="flex-c6 md:grid md:grid-cols-3 md:grid-flow-row">
				<article
					className="grid grid-flow-row gap-4 px-6 py-10 bg-gray text-center md:row-start-2 md:row-end-[11]
				md:gap-6 lg:px-12"
				>
					<h3 className="text-xl">Basic</h3>
					<p>{`Includes basic usage of our platform. Recommended for new and aspiring photographers.`}</p>
					<div className="my-6">
						<span className="text-4xl font-bold">${monthly ? "19.00" : "190.00"}</span>
						<p>per {monthly ? "month" : "year"}</p>
					</div>
					<Button className="w-full">Pick Plan</Button>
				</article>

				<article
					className="relative grid grid-flow-row gap-4 px-6 py-10 bg-black text-white text-center 
					md:row-start-1 md:row-end-[12]
					md:gap-6
					lg:px-12
				"
				>
					<span className="w-full h-1 absolute top-0 left-0 bg-gradient-to-r from-orange to-blue"></span>
					<h3 className="text-xl">Pro</h3>
					<p>{`More advanced features available. Recommended for photography veterans and professionals.`}</p>

					<div className="my-6">
						<span className="text-4xl font-bold">${monthly ? "39.00" : "390.00"}</span>
						<p>per {monthly ? "month" : "year"}</p>
					</div>
					<Button color="white" className="w-full">
						Pick Plan
					</Button>
				</article>

				<article
					className="grid grid-flow-row gap-4 px-6 py-10 bg-gray text-center md:row-start-2 md:row-end-[11]
				md:gap-6
				 lg:px-12"
				>
					<h3 className="text-xl">Business</h3>
					<p>{`Additional features available such as more detailed metrics. Recommended for business owners.`}</p>
					<div className="my-6">
						<span className="text-4xl font-bold">${monthly ? "99.00" : "990.00"}</span>
						<p>per {monthly ? "month" : "year"}</p>
					</div>
					<Button className="w-full">Pick Plan</Button>
				</article>
			</div>
		</section>
	);
};
export default SectionSuscribe;
