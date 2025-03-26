import Products from "~/components/Products/Products";
import type { Route } from "./+types/home";
import Hero from "~/components/Hero/Hero";
import Gallery from "~/components/Gallery/Gallery";
import CTA from "~/components/CTA/CTA";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<>
			<Hero></Hero>
			<main>
				<Products></Products>
				<Gallery></Gallery>
				<CTA></CTA>
			</main>
		</>
	);
}
