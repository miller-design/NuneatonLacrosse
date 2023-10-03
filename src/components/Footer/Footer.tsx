import styles from './Footer.module.scss'
import { SocialLinks } from '@/components/SocialLinks/SocialLinks'
import { Logo } from '@/components/Logo/Logo'
import Link from 'next/link'

const Footer = () => {
	const date = new Date()
    const year = date.getFullYear()

	return (
		<footer className={styles.container}>
			<div>
				<div className={styles.logo_col}>
					<Logo />
				</div>
				<div className={styles.menu_col}>
					<p className={styles.col_header}>Social Media</p>
					<SocialLinks longFormat={true} darkMode={true} />
				</div>
				<div className={styles.menu_col}>
					<p className={styles.col_header}>Contact Us</p>
					<Link href="mailto:email@email.com">email@email.com</Link>
				</div>
				<div className={styles.menu_col}>
					<p className={styles.col_header}>Useful Links</p>
					<ul>
						<li><Link href="/">Link 1</Link></li>
						<li><Link href="/">Link 2</Link></li>
						<li><Link href="/">Link 3</Link></li>
						<li><Link href="/">Link 4</Link></li>
					</ul>
				</div>
			</div>
			<div>
				<p className={styles.copywrite}>© {year} Nuneaton Lacrosse Club</p>
			</div>
		</footer>
	)
}

export { Footer }