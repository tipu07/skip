import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"
import { PlayIcon } from "@/components/images"

export default function Banner() {
	return (
		<>
			<section id={style.banner}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.content}>
							<h1>Choose & Chill, As Simple As Ordering Dinner.</h1>
							<p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with SkipTheDealers. </p>
							<form action="" method="POST">
								<div className={style.input_form_blk}>
									<div className={`${style.from_blk} flex-grow-1`}>
										<input type="text" name="" id="" className={style.input} placeholder="Enter Email Address" />
									</div>
									<div className={`${style.btn_blk} ms-4`}>
										<button type="submit" className={style.site_btn}>
											Sign up now
										</button>
									</div>
								</div>
							</form>
							<button type="button" className={style.watch_btn}>
								Watch video
								<Image width={100} height={100} src={PlayIcon} alt="" />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
