import Image from "next/image"
import Link from "next/link"
import React from "react"
import style from "@/styles/scss/web.module.scss"
import { LogoImage } from "./images"

export default function Logo() {
	return (
		<>
			<div className={style.logo}>
				<Link href="/">
					<Image width={1000} height={1000} src={LogoImage} alt="Logo" />
				</Link>
			</div>
		</>
	)
}
