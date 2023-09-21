import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"
import { VectorIconCompass, VectorIconPricing, VectorIconSolutions } from "@/components/images"

export default function Step() {
	return (
		<>
			<section id={style.step}>
				<div className={style.contain}>
					<div class={style.contain_inner}>
						<div class="row">
							<div class="col-lg-4">
								<div class={style.step_detail}>
									<div class={style.image}>
										<Image width={200} height={200} src={VectorIconPricing} alt="" />
									</div>
									<div class={style.txt}>
										<h4>See SkipTheDealers pricing</h4>
										<p>Whether you&lsquo;re a team of 2 or 2,000, SkipTheDealers can be customized for your organization. Explore which option is best for you.</p>
										<div class={style.btn_blk}>
											<Link href="?" class={style.link_btn}>
												Compare Pricing
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class={style.step_detail}>
									<div class={style.image}>
										<Image width={200} height={200} src={VectorIconCompass} alt="" />
									</div>
									<div class={style.txt}>
										<h4>See SkipTheDealers pricing</h4>
										<p>SkipTheDealers is the visual tool that empowers your team to manage any type of project, workflow, or task tracking.</p>
										<div class={style.btn_blk}>
											<Link href="?" class={style.link_btn}>
												Tour SkipTheDealers
											</Link>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class={style.step_detail}>
									<div class={style.image}>
										<Image width={200} height={200} src={VectorIconSolutions} alt="" />
									</div>
									<div class={style.txt}>
										<h4>See SkipTheDealers pricing</h4>
										<p>The productivity tool teams love, paired with the features and security needed for scale.</p>
										<div class={style.btn_blk}>
											<Link href="?" class={style.link_btn}>
												Learn More
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
