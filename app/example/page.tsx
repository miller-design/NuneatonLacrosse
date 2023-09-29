import Link from 'next/link'
import styles from './page.module.scss'

const Page = () => {
	return (
		<div className={styles.container}>
			<h1>Example Page</h1>
			<Link href="/">Back Home</Link>
		</div>
	)
}

export default Page