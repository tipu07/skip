import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { LineIconBriefcase, LineIconCurrent, LineIconUpward, PhotoAboutBlock } from "@/components/images"

export default function Intro() {
	return (
		<>
			<section id={style.intro}>
				<div className={style.contain}>
					<div className={`${style.content} text-center`}>
						<h6 className={style.subheading}>ABOUT US</h6>
						<h1>At Bridge Axis, we believe in the transformative power of intelligent procurement</h1>
						<p>At Bridge Axis, we believe in the transformative power of intelligent procurement. Founded with a passion for simplifying complex sourcing processes, our journey is driven by innovation, user experience, and a commitment to forging meaningful business connections. Dive into our world and discover a holistic approach to procurement that resonates with the needs of modern businesses.</p>
					</div>
					<div className={style.wrapper}>
						<div className={style.column}>
							<div className={style.inner} style={{ backgroundImage: "url(" + PhotoAboutBlock.src + ")" }}>
								<div className={style.title}>
									<div className={style.ico}>
										<Image width={100} height={100} src={LineIconBriefcase} alt="" />
									</div>
									<strong>BACKGROUND</strong>
								</div>
								<div className={style.txt}>
									<p>With a strong foundation in procurement and sourcing expertise, our company brings years of industry experience and deep understanding of the challenges faced by organizations. We have witnessed the inefficiencies and complexities firsthand, inspiring us to develop Lynkaz, a revolutionary solution that transforms procurement operations.</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.inner} style={{ backgroundImage: "url(" + PhotoAboutBlock.src + ")" }}>
								<div className={style.title}>
									<div className={style.ico}>
										<Image width={100} height={100} src={LineIconUpward} alt="" />
									</div>
									<strong>MISSION</strong>
								</div>
								<div className={style.txt}>
									<p>Our mission is to empower businesses with advanced procurement solutions that streamline processes, drive efficiency, and foster collaboration. We aim to revolutionize the way organizations manage their vendor relationships, enhance operational control, and achieve sustainable success in an ever-evolving business landscape</p>
								</div>
							</div>
						</div>
						<div className={style.column}>
							<div className={style.inner} style={{ backgroundImage: "url(" + PhotoAboutBlock.src + ")" }}>
								<div className={style.title}>
									<div className={style.ico}>
										<Image width={100} height={100} src={LineIconCurrent} alt="" />
									</div>
									<strong>VALUES</strong>
								</div>
								<div className={style.txt}>
									<p>At the core of our company values lie innovation, transparency, and customer-centricity. We are dedicated to continuously innovating our solution, staying at the forefront of industry trends, and delivering exceptional user experiences. We believe in building transparent and trusted partnerships with our clients, ensuring their success is our priority at every step of the journey</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
