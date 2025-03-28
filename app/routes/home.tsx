import Products from "~/components/Products/Products";
import type { Route } from "./+types/home";
import Hero from "~/components/Hero/Hero";
import Gallery from "~/components/Gallery/Gallery";
import CTA from "~/components/CTA/CTA";
import Categories from "~/components/Categories/Categories";
import Cards from "~/components/Cards/Cards";
import Footer from "~/components/Footer/Footer";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Monks | Gabriel Pelincel" },
		{ name: "description", content: "Processo seletivo Monks 2025" },
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
				<Categories></Categories>
				<Cards></Cards>
			</main>
			<Footer></Footer>
		</>
	);
}
