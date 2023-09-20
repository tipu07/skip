import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { PhotoSpotlight_01, PhotoSpotlight_02, PhotoSpotlight_03, PhotoVector_02, PhotoVector_03 } from "@/components/images"

export default function Spotlight() {
	return (
		<>
			<section id={style.spotlight}>
				<div className={style.fig}>
					<Image width={1000} height={1000} src={PhotoVector_02} alt="" />
				</div>
				<div className={style.fig}>
					<Image width={1000} height={1000} src={PhotoVector_03} alt="" />
				</div>
				<div className={style.contain}>
					<h1 className="text-center">Features Spotlight</h1>
					<div className={style.wrapper}>
						<div className={style.block}>
							<div className={style.image}>
								<Image width={1000} height={1000} src={PhotoSpotlight_01} alt="" />
							</div>
							<div className={style.content}>
								<h2>Vendor Portal for Streamlined Collaboration</h2>
								<div className={style.line}></div>
								<h4 className={style.text_prime}>Redefine Collaboration: Lynkaz Vendor Portal Strengthens Connections and Amplifies Results</h4>
								<p>Experience the transformative power of Lynkaz Vendor Portal - a tool designed to redefine collaboration. Our portal strengthens connections, enabling you to establish deeper relationships with vendors, thus driving better outcomes. Enjoy effortless communication, streamlined negotiation, and seamless transaction processing. The result? Amplified efficiency and tangible results. Embrace Lynkaz to make vendor collaboration not just a necessity, but a strategic advantage for your business.</p>
							</div>
						</div>
						<div className={style.block}>
							<div className={style.image}>
								<Image width={1000} height={1000} src={PhotoSpotlight_02} alt="" />
							</div>
							<div className={style.content}>
								<h2>Mobile Application for On-the-Go Procurement</h2>
								<div className={style.line}></div>
								<h4 className={style.text_prime}>Streamline Processes with Lynkaz: Master Operational Control through our Robust Workflow Solutions.</h4>
								<p>Lynkaz transforms your operations, providing a highly configurable, robust workflow solution that empowers users. By effectively aligning tasks, reducing errors, and enhancing visibility, our platform optimizes process efficiency. Experience unmatched operational control, enabling swift, decisive action. Master procurement and sourcing, and drive business performance with Lynkaz, your trusted partner for streamlined processes.</p>
							</div>
						</div>
						<div className={style.block}>
							<div className={style.image}>
								<Image width={1000} height={1000} src={PhotoSpotlight_03} alt="" />
							</div>
							<div className={style.content}>
								<h2>Workflow Management for Efficient Operations</h2>
								<div className={style.line}></div>
								<h4 className={style.text_prime}>Embrace Convenience with Lynkaz Mobile App: Procurement Power at Your Fingertips, Anytime, Anywhere</h4>
								<p>With the Lynkaz Mobile App, procurement isn&lsquo;t confined to your desk - it travels with you. Offering the full functionality of our platform in a sleek, intuitive mobile design, our app empowers you to manage vendor relations, review documents, approve purchases, and more, right from your device. Experience a procurement revolution that is not just powerful but accessible anytime, anywhere. The future of procurement management is here; it&lsquo;s on your fingertips.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
