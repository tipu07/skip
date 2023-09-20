import React from "react"
import style from "@/styles/scss/web.module.scss"
import Image from "next/image"
import { QuoteIcon } from "./images"

export default function ReviewCard(props) {
	const { text, name, sub_name, work, designation, image } = props

	return (
		<>
			<div className={style.folio_blk}>
				<div className={style.quote}>
					<Image width={100} height={100} src={QuoteIcon} alt="" />
				</div>
				<div className={`${style.content} h2 fw_400`}>
					<p>{text}</p>
				</div>
				<div className={style.bottom_blk}>
					<div className={style.txt}>
						<p>
							<strong>{name}</strong> - {sub_name}
						</p>
						<p>
							{work}: <strong>{designation}</strong>
						</p>
					</div>
					<div className={`${style.ico} ${style.fill} ${style.round}`}>
						<Image width={200} height={200} src={image} alt="" />
					</div>
				</div>
			</div>
		</>
	)
}
