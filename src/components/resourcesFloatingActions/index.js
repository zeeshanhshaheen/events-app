import { Add, Search } from "@/components/icons";
import { container } from "./floating-action.module.css";

const FloatingActions = () => {
	return (
		<div className={container}>
			<button>
				<Search />
			</button>
		</div>
	);
};

export default FloatingActions;
