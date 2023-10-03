import Link from "next/link"
import styles from "./SocialLinks.module.scss"

type Props = {
	longFormat?: boolean
	darkMode?: boolean
}

const SocialLinks: React.FC<Props> = ({
	longFormat,
	darkMode
}) => {

	const FaLabel = longFormat ? `Facebook` : `Fa`
	const InstagramLabel = longFormat ? `Instagram` : `In`
	const TikTokLabel = longFormat ? `TikTok` : `Tk`

	return (
		<div className={`${styles.container} ${longFormat ? styles.long_format : ``} ${darkMode ? styles.dark_mode : ``}`}>
			<ul>
					<li>
						<Link href="/">{FaLabel}</Link>
					</li>
					<li>
						<Link href="/">{InstagramLabel}</Link>
					</li>
					<li>
						<Link href="/">{TikTokLabel}</Link>
					</li>
				</ul>
		</div>
	)
}
export { SocialLinks }