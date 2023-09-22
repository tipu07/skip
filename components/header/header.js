import React, { useState } from "react"
import style from "@/styles/scss/web.module.scss"
import Navigation from "./navigation"
import Logo from "../logo"

export default function Header(props) {
	// const { pageTitle } = props
	const [navActive, setNavActive] = useState(false)
	const navToggleHandle = () => {
		setNavActive(!navActive)
	}

	return (
		<>
			<header id={style.header}>
				<div className={style.contain_fluid}>
					<Logo />
					<button type="button" className={`${style.toggle} ${navActive ? style.active : ""}`} onClick={navToggleHandle}>
						<span></span>
					</button>
					<Navigation navActive={navActive} />
				</div>
			</header>
		</>
	)
}
