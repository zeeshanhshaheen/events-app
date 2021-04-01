import { cloneElement } from "react";
import classNames from "classnames";
import React, { useState } from 'react';

import User from '../icons/User'

import styles, { btn, icon } from "./button.module.css";

const Button = ({ Icon, children }) => {
	const clonedIcon = Icon ? cloneElement(Icon, { className: icon }) : undefined;
	const [active, setActive] = useState(false);
	//const clonedIcon = active ? <User /> : Icon;
	return (
		<button
			className={`${styles.btn} ${styles['btn--both']}  ${active ? styles.active : ''}`}
			onClick={() => setActive(true)}
		>
			{clonedIcon && clonedIcon}
			{children}
		</button>
	);
};

export default Button;
