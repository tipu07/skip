import Link from "next/link"
import style from "@/styles/scss/web.module.scss"
import { useRouter } from "next/router"

export default function Navigation(props) {
	const { navActive } = props
	const router = useRouter()
	return (
		<>
			<nav id={style.nav}>
				<ul id={style.nav_list} className={`${navActive ? style.active : ""}`}>
					<li>
						<Link href="/" className={router.pathname === "/" ? style.active : ""}>
							Home
						</Link>
					</li>
					<li>
						<Link href="/get-pre-approved" className={router.pathname === "/get-pre-approved" ? style.active : ""}>
							Get Pre-Approved
						</Link>
					</li>
					<li>
						<Link href="/sell-my-car" className={router.pathname === "/sell-my-car" ? style.active : ""}>
							Sell My Car
						</Link>
					</li>
					<li>
						<Link href="/resources" className={router.pathname === "/resources" ? style.active : ""}>
							Resources
						</Link>
					</li>
					<li>
						<Link href="/inventory" className={router.pathname === "/inventory" ? style.active : ""}>
							Inventory
						</Link>
					</li>
				</ul>
				<ul id={style.cta_list}>
					<li>
						<Link href="/signin" className={router.pathname === "/signin" ? style.active : ""}>
							Sign in
						</Link>
					</li>
					<li>
						<Link href="/signup" className={`${style.site_btn} ${style.md}`}>
							Sign up
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
