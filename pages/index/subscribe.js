import React from "react"
import style from "@/styles/scss/web.module.scss"

export default function Subscribe() {
	return (
		<>
			<section id={style.subscribe}>
				<div className={style.contain}>
					<div className={style.subscribe__row}>
						<p className="h3 fw_400">Sign up and get started with SkipTheDealers today. A world of productive teamwork awaits!</p>
						<form action="" method="POST" className={style.input__blk}>
							<input type="text" name="" id="" className={style.input} placeholder="Enter Email Address" />
							<button type="submit" className={`${style.site_btn} ${style.simple} ms-4`}>
								Sign up
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}
