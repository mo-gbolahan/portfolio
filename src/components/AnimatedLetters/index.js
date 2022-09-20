import "./animatedLettes.styles.scss";

const AnimatedLetters = (props) => {
	return (
		<span>
			{props.strArr.map((char, i) => (
				<span
					key={char + i}
					className={`${props.letterClass} _${i + props.idx}`}
				>
					{char}
				</span>
			))}
		</span>
	);
};

export default AnimatedLetters;
