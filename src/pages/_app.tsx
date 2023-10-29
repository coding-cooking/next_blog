import { AppProps } from "next/app";
import Nav from "../components/Nav/Nav";
import "../styles/index.scss";
import { useState } from "react";
import ThemeContext from "@/context/theme";
import { Footer } from "@/components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Nav />
			<main className='app_warpper'>
				<Component {...pageProps} />
				<Footer />
			</main>
		</ThemeContext.Provider>
	);
}
export default MyApp;
