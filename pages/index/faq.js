import React from "react"
import style from "@/styles/scss/web.module.scss"
import FaqBlock from "@/components/faqBlock"
import Image from "next/image"
import { FaqIcon } from "@/components/images"

const FAQS = [
	{
		id: 1,
		heading: "Comment ouvrir un compte SkipTheDealers ?",
		text: "Pour ouvrir un compte SkipTheDealers il vous suffit de télécharger l'application sur Google Play ou App Store et s'inscrire en fournissant un numéro de téléphone ou un email et des informations sur son identité. Pour valider la création du compte une pièce d'indentité sera demandé.",
	},
	{
		id: 2,
		heading: "Est ce que mon argent est sécurisé ?",
		text: "Pour ouvrir un compte SkipTheDealers il vous suffit de télécharger l'application sur Google Play ou App Store et s'inscrire en fournissant un numéro de téléphone ou un email et des informations sur son identité. Pour valider la création du compte une pièce d'indentité sera demandé.",
	},
	{
		id: 3,
		heading: "Comment rajouter une devise dans SkipTheDealers ?",
		text: "Pour ouvrir un compte SkipTheDealers il vous suffit de télécharger l'application sur Google Play ou App Store et s'inscrire en fournissant un numéro de téléphone ou un email et des informations sur son identité. Pour valider la création du compte une pièce d'indentité sera demandé.",
	},
	{
		id: 4,
		heading: "Comment générer une CB Virtuelle ?",
		text: "Pour ouvrir un compte SkipTheDealers il vous suffit de télécharger l'application sur Google Play ou App Store et s'inscrire en fournissant un numéro de téléphone ou un email et des informations sur son identité. Pour valider la création du compte une pièce d'indentité sera demandé.",
	},
]
export default function Faq() {
	return (
		<>
			<section id={style.faq}>
				<div className={style.contain}>
					<div className={style.icon}>
						<Image width={100} height={100} src={FaqIcon} alt="" />
					</div>
					<h2 className="text-center">Frequently Asked Questions</h2>
					<div class={style.faq_wrapper}>
						{FAQS.map((data) => {
							return <FaqBlock {...data} key={data.id} />
						})}
					</div>
				</div>
			</section>
		</>
	)
}
