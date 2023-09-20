import React from "react"
import style from "@/styles/scss/web.module.scss"
import ReviewCard from "./reviewCard"
import Slider from "react-slick"
import { PhotoUser_01, PhotoUser_02, PhotoUser_03, PhotoUser_04 } from "./images"

const REVIEWS = [
	{
		id: 1,
		name: "BHARATH SUNDAR",
		sub_name: "Finance, eBay",
		work: "Industry",
		designation: "eCommerce",
		text: "Everyone loves it; it has democratized our finance function. In some ways SkipTheDealers shattered hierarchy and brought us together.",
		image: PhotoUser_01,
	},
	{
		id: 2,
		name: "KERRY PARKER-EVANS",
		sub_name: "IT Project Manager, Egencia",
		work: "Industry",
		designation: "Travel",
		text: "Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others.",
		image: PhotoUser_02,
	},
	{
		id: 3,
		name: "HAYDON DOTSON",
		sub_name: "Sales Manager, Detroit Red Wings",
		work: "Industry",
		designation: "Sport",
		text: "SkipTheDealers makes it easy to keep everyone on the same page. As changes happen, the real-time updates with email notifications have been key.",
		image: PhotoUser_03,
	},
	{
		id: 4,
		name: "HALEY ENNES",
		sub_name: "HR Manager, Sprout Social",
		work: "Industry",
		designation: "Marketing",
		text: "Now that we've switched to a remote environment, with the use of SkipTheDealers, we can now limit the number of meetings we have regarding specific projects and turn to SkipTheDealers for updates instead.",
		image: PhotoUser_04,
	},
]
export default function SlickReviews() {
	var settings = {
		// dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		adaptiveHeight: true,
	}
	return (
		<>
			<Slider {...settings} className={`${style.slick_reviews} slick-reviews slick-carousel`}>
				{REVIEWS.map((data) => {
					return <ReviewCard {...data} key={data.id} />
				})}
			</Slider>
		</>
	)
}
