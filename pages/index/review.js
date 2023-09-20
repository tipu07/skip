import React from "react"
import style from "@/styles/scss/web.module.scss"
import SlickReviews from "@/components/slickReviews"

export default function Review() {
	return (
		<>
			<section id={style.review}>
				<div class={style.contain}>
					<SlickReviews />
				</div>
			</section>
		</>
	)
}
