import styles from './Header.module.scss'
import { Logo } from '@/components/Logo/Logo'
import { SocialLinks } from '@/components/SocialLinks/SocialLinks'
import Link from 'next/link'

const Header = () => {
	return (
		<header className={styles.container}>
			<div>
				<p>E: <Link href="mailto:email@email.com">email@email.com</Link></p>
			</div>
			<div className={styles.logo_wrapper}>
				<Logo />
			</div>
			<div>
				<SocialLinks />
			</div>
		</header>
	)
}

export { Header }