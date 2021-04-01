import { useState, memo } from "react";
import classNames from "classnames";
import styles, { bar, button } from "./sidebar.module.css";
import Link from "next/link";

const SIDE_BAR_TABS = ["Software", "Make Appoinment"];

const SidebarButton = ({ children, setActive, isActive }) => {
	return (
		<button
			onClick={setActive}
			className={classNames(button, { [styles["button--active"]]: isActive })}
		>
			{children}
		</button>
	);
};

const Sidebar = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<aside className={bar}>
				<nav>
					{/* <SidebarButton setActive={() => setActiveTab()} isActive={activeTab} className="software">
					Software
				</SidebarButton> */}
					{SIDE_BAR_TABS.map((tab, idx) =>
						idx === 1 ? (
							<Link href="/make-appoinment">
								<span>Make Appoinment</span>
							</Link>
						) : (
							<SidebarButton
								key={idx}
								setActive={() => setActiveTab(idx)}
								isActive={idx === activeTab}
							>
								Software
							</SidebarButton>
						),
					)}
				</nav>
			</aside>

			<style jsx>
				{`
					span {
						padding: 10px;
						color: #9e9e9e;
						font-weight: bold;
						cursor: pointer;
					}
				`}
			</style>
		</>
	);
};

export default memo(Sidebar);
