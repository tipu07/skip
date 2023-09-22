import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"
import Image from "next/image"
import { PhotoHelp } from "@/components/images"

export default function Help() {
	return (
		<>
			<section id={style.help}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div class={style.image}>
							<Image width={1000} height={1000} src={PhotoHelp} alt="" />
						</div>
						<div class={style.content}>
							<h2 className="mb-5">How we help you land a SkipTheDealer.</h2>
							<ol>
								<li>
									<h4>We have experts behind the scenes.</h4>
									<p>We&lsquo;ve done our research— on you, your profession, and your industry. Just share your job title and expertly written content (that you can personalize) is right there.</p>
								</li>
								<li>
									<h4>We get you past the robots.</h4>
									<p>Applicant Tracking Software is often the first set of “eyes” on your resume. All our designs are tested to ensure you get to the human behind the machine.</p>
								</li>
								<li>
									<h4>We ensure you look like a professional.</h4>
									<p>From start to finish, we provide the most current tips and guidance for your specific role, industry, and experience level.</p>
								</li>
							</ol>
							<div class={`${style.btn_blk} mt-5`}>
								<Link href="?" class={style.site_btn}>
									Get Started Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
