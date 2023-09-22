import React from "react"
import style from "@/styles/scss/web.module.scss"
import Link from "next/link"

export default function Compare() {
	return (
		<>
			<section id={style.compare}>
				<div className={style.contain}>
					<div className={style.wrapper}>
						<div className={style.content}>
							<h2>Compare right here!</h2>
							<div className={style.text}>
								<p>Installation Process</p>
								<p>Invasiveness</p>
								<p>Treatment Time</p>
								<p>Reversibility</p>
								<p>Durability</p>
							</div>
						</div>
						<div className={style.outer}>
							<div className={style.inner}>
								<div className={style.title}>SkipTheDealers</div>
								<ul>
									<li>Removable and easy to snap on and off</li>
									<li>Non-invasive, no need for altering car structure</li>
									<li>Instant results</li>
									<li>Reversible, can be easily removed</li>
									<li>Moderate durability</li>
								</ul>
							</div>
							<div className={style.inner}>
								<div className={style.title}>Other Implants</div>
								<ul>
									<li>Permanent bonding to natural car</li>
									<li>Requires enamel removal for placement</li>
									<li>Multiple visits over a few weeks</li>
									<li>Irreversible, car structure alteration</li>
									<li>Long lasting (with proper care)</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
