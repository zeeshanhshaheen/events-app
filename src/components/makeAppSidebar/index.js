import { useState, memo } from "react";
import classNames from "classnames";
import { Router, useRouter } from "next/router";
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
							<div
								key={idx}
								setActive={() => setActiveTab(idx)}
								isActive={idx === activeTab}
								className="app-btn"
							>
								Make Appoinment
							</div>
						) : (
							<Link href="/help-desk">
								<span>Software</span>
							</Link>
						),
					)}
				</nav>
			</aside>

			<style jsx>
				{`
					span {
						padding: 1rem 2rem;
						color: #9e9e9e;
						font-weight: bold;
						cursor: pointer;
					}

					.app-btn {
						padding: 1rem 2rem;
						color: #799ff3;
						font-weight: bold;
						cursor: pointer;
						background-color: white;
						border-top-right-radius: 1000rem;
						border-bottom-right-radius: 1000rem;
						box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.05);
						width: 100%;
					}
				`}
			</style>
		</>
	);
};

export default memo(Sidebar);
