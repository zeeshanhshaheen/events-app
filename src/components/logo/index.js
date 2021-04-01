import Link from "next/link";

import { link } from "./logo.module.css";

const Logo = ({ ...props }) => {
	return (
		<Link href="/" passHref>
			<a className={link} {...props}>
				<img src="/icons/logo.png" alt="logo" />
			</a>
		</Link>
	);
};

export default Logo;
