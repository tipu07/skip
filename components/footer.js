import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import Link from "next/link"
import { EnvelopeIcon, PhoneIcon, SocialFacebook, SocialInstagram, SocialLinkedin, SocialTwitter } from "./images"
import Logo from "./logo"

export default function Footer() {
	return (
		<>
			<footer id={style.footer}>
				<div className={style.contain}>
					<div className={style.top_blk}>
						<Logo />
						<div className="row">
							<div className="col">
								<h5>About Skip</h5>
								<p>What&lsquo;s behind the boards.</p>
							</div>
							<div className="col">
								<h5>Jobs</h5>
								<p>Learn about open roles on the Skip team.</p>
							</div>
							<div className="col">
								<h5>Apps</h5>
								<p>Download the Skip App for your Desktop or Mobile devices.</p>
							</div>
							<div className="col">
								<h5>Contact Us</h5>
								<p>Need anything? Get in touch and we can help.</p>
							</div>
						</div>
					</div>
					<div className={style.mid_blk}>
						<ul className={style.mini_list}>
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/about">About us</Link>
							</li>
							<li>
								<Link href="/contact">Contact us</Link>
							</li>
						</ul>
						<ul className={style.info_list}>
							<li>
								<a href="tel:347-919-5222">
									<Image width={60} height={60} src={PhoneIcon} alt="" />
									347-919-5222
								</a>
							</li>
							<li>
								<a href="mailto:info@skipthedealers.com">
									<Image width={60} height={60} src={EnvelopeIcon} alt="" />
									info@skipthedealers.com
								</a>
							</li>
						</ul>
						<ul className={style.social_list}>
							<li>
								<a href="?" target="_blank">
									<Image width={100} height={100} src={SocialTwitter} alt="" />
								</a>
							</li>
							<li>
								<a href="?" target="_blank">
									<Image width={100} height={100} src={SocialFacebook} alt="" />
								</a>
							</li>
							<li>
								<a href="?" target="_blank">
									<Image width={100} height={100} src={SocialLinkedin} alt="" />
								</a>
							</li>
							<li>
								<a href="?" target="_blank">
									<Image width={100} height={100} src={SocialInstagram} alt="" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={style.copyright}>
					<div className={style.contain}>
						<p>
							Copyrights 2023 <Link href="/">SkipTheDealers</Link>. All Rights Reserved.
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
