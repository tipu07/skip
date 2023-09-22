import React from "react"
import Head from "next/head"
import Header from "@/components/header/header"
import Banner from "./index/banner"
import Step from "./index/step"
import Work from "./index/work"
import Help from "./index/help"
import Compare from "./index/compare"
import Reward from "./index/reward"
import Faq from "./index/faq"
import Review from "./index/review"
import Subscribe from "./index/subscribe"
import AppStore from "./index/appStore"
import Footer from "@/components/footer"

export default function Index() {
	return (
		<>
			<Head>
				<title>Home — SkipTheDealers</title>
				<meta name="description" content="Choose & Chill, As Simple As Ordering Dinner." />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<Banner />
			<Step />
			<Work />
			<Help />
			<Compare />
			<Reward />
			<Faq />
			<Review />
			<Subscribe />
			<AppStore />
			<Footer />
		</>
	)
}
