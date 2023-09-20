import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoSolutionHighlight, PhotoVector_01, PlayBtnIcon } from "@/components/images"

export default function Highlight() {
	return (
		<>
			<section id={style.highlight}>
				<div className={style.fig}>
					<Image width={1000} height={1000} src={PhotoVector_01} alt="" />
				</div>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.image}>
							<Image width={1000} height={1000} src={PhotoSolutionHighlight} alt="" />
						</div>
						<div className={style.content}>
							<h2>Solution Highlight</h2>
							<p>With a strong foundation in procurement and sourcing expertise, our company brings years of industry experience and deep understanding of the challenges faced by organizations.</p>
							<button type="button" className={style.play_btn}>
								<Image width={100} height={100} src={PlayBtnIcon} alt="" />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
