import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"
import { PhotoBrandBlk_google, PhotoBrandCoinbase, PhotoBrandGrandHyatt, PhotoBrandJohnDeere, PhotoBrandVisa, PhotoBrandZoom, PhotoWork } from "@/components/images"

export default function Work() {
	return (
		<>
			<section id={style.work}>
				<div className={style.contain}>
					<div class={`${style.content} text-center`}>
						<h2>It&lsquo;s more than work. It&lsquo;s a way of working together.</h2>
						<p>Start with a SkipTheDealers board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
						<div class={`${style.btn_blk} justify-content-center`}>
							<a href="?" class={`${style.site_btn} ${style.px}`}>
								Start doing
							</a>
						</div>
					</div>
					<div class={`${style.join_brand} text-center`}>
						<div class={style.brand_screen}>
							<Image width={1000} height={1000} src={PhotoWork} alt="" />
						</div>
						<p>Join over 2,000,000 teams worldwide that are using SkipTheDealers to get more done.</p>
						<div class={style.ul_outer}>
							<ul>
								<li>
									<div class={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandCoinbase} alt="" />
									</div>
								</li>
								<li>
									<div class={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandJohnDeere} alt="" />
									</div>
								</li>
								<li>
									<div class={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandGrandHyatt} alt="" />
									</div>
								</li>
								<li>
									<div class={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandBlk_google} alt="" />
									</div>
								</li>
								<li>
									<div class={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandVisa} alt="" />
									</div>
								</li>
								<li>
									<div class={style.brand_img}>
										<Image width={200} height={200} src={PhotoBrandZoom} alt="" />
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
