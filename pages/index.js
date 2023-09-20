import React from "react"
import Head from "next/head"
import Header from "@/components/header/header"
import Banner from "./index/banner"
import Intro from "./index/intro"
import Highlight from "./index/highlight"
import Spotlight from "./index/spotlight"
import Review from "./index/review"
import Subscribe from "./index/subscribe"
import AppStore from "./index/appStore"
import Footer from "@/components/footer"

export default function Index() {
	return (
		<>
			<Head>
				<title>Home — SkipTheDealers</title>
				<meta name="description" content="Bridge Axis" />
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes" />
				<link rel="icon" href="/images/favicon.png" />
			</Head>
			<Header />
			<Banner />
			{/* <Banner />
			<Intro />
			<Highlight />
			<Spotlight /> */}
			<Review />
			<Subscribe />
			<AppStore />
			<Footer />
		</>
	)
}
