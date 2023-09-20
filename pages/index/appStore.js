import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { IconAppStore, IconPlayStore } from "@/components/images"

export default function AppStore() {
	return (
		<>
			<section id={style.app_store}>
				<div className={style.contain}>
					<div className="row align-items-center p-4">
						<div className="col-md-8">
							<p>SkipTheDealers also works great on your smaller screen.</p>
						</div>
						<div className="col-md-4">
							<div className="row justify-content-between">
								<div className="col-6">
									<a href="?">
										<Image width={200} height={200} src={IconAppStore} alt="" />
									</a>
								</div>
								<div className="col-6">
									<a href="?">
										<Image width={200} height={200} src={IconPlayStore} alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
