import { Main, Cards, Footer, Navbar } from '../../components'
import StarfieldAnimation from "react-starfield-animation";
import styles from "./styles.module.css";

const Home = (): JSX.Element => {
	return (
		<>
			<div className={styles.section} >
				<StarfieldAnimation
					style={{
						position: "absolute",
						width: "100%",
						height: "100%"
					}}
					numParticles={800}
					particleSpeed={0}
					dx={0.000000001} // x speed of stars in px/frame, default 0.05
					dy={0.000000001}
				/>
				<Navbar />
				<Main />
				<Cards />
				<Footer />
			</div>
		</>
	);
};

export default Home;