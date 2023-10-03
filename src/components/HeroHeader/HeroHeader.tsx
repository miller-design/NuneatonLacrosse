import { LazyImage } from '../LazyImage/LazyImage'
import styles from './HeroHeader.module.scss'

const HeroHeader = () => {
	return (
		<section className={styles.container}>
			<div className={styles.media_wrap}>
				<LazyImage
					image={{
						src: '/hero-header.jpeg',
						alt: 'nuneaton lacrosse club logo'
					}}
					width={2048}
					height={1152}
					sizes={[100, 100, 100]}
					priority={true}
					intrinsic={true}
				/>
			</div>
			<div className={styles.content_wrap}>
					<h1>Nuneaton Lacrosse Club</h1>
			</div>

		</section>
	)
}

export { HeroHeader }