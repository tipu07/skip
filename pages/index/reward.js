import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"

export default function Reward() {
	return (
		<>
			<section id={style.reward}>
				<div className={style.contain}>
					<div className={`${style.wrapper} text-center`}>
						<h4>
							<span>¿TE GUSTARÍA SER UN SKINCARE NERD?</span>
						</h4>
						<h2>
							Obten cada vez que
							<span>
								compres en <strong>SkipTheDealers</strong>
							</span>
						</h2>
						<p className="h3 fw_300">Productos gratis, descuentos exclusivos y más.</p>
						<div className={`${style.btn_blk} justify-content-center mt-5`}>
							<Link href="?" className={`${style.site_btn} ${style.lg}`}>
								SUBSCRIBE NOW - 10%OFF
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
