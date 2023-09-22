import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoMainBanner, PhotoMainBannerVector, PlayIcon } from "@/components/images"

export default function Banner() {
	return (
		<>
			<section id={style.banner} style={{ backgroundImage: "url(" + PhotoMainBannerVector.src + ")" }}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.content}>
							<h1>
								Choose & Chill, <strong>As Simple As Ordering Dinner.</strong>
							</h1>
							<p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with SkipTheDealers. </p>
							<form action="" method="POST">
								<div className={style.input_form_blk}>
									<div className={`${style.from_blk} flex-grow-1`}>
										<input type="text" name="" id="" className={style.input} placeholder="Enter Email Address" />
									</div>
									<div className={`${style.btn_blk} ms-4`}>
										<button type="submit" className={style.site_btn}>
											Sign up
										</button>
									</div>
								</div>
							</form>
							<button type="button" className={style.watch_btn}>
								Watch video
								<Image width={100} height={100} src={PlayIcon} alt="" />
							</button>
						</div>
						<div className={style.image}>
							<Image width={1000} height={1000} src={PhotoMainBanner} alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
