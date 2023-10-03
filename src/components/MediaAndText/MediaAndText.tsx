import React from 'react'
import styles from './MediaAndText.module.scss'
import Link from 'next/link'
import { LazyImage } from '../LazyImage/LazyImage'

type Props = {
	title?: any
	content?: any
	image?: {},
	flipped?: boolean
}

// setting type for component as well as assigning props
const MediaAndText: React.FC<Props> = ({
	title,
	content,
	image,
	flipped
}) => {

	return (
		<section
			className={`${styles.container} ${flipped ? styles.flipped : ``}`}
		>
			<div>
				<h3>Nuneaton Lacrosse Club</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus tellus vitae leo pretium efficitur. Quisque aliquam vestibulum sem, a mollis arcu semper a. Phasellus quis ultrices nulla. Nullam ut egestas sapien. In et imperdiet est, vitae vehicula nibh. Quisque tellus tortor, rutrum ut cursus vel, interdum quis orci. Donec lacinia nisl tortor, sed consequat sapien mattis ut. Ut viverra lobortis magna, a venenatis ex laoreet ac.</p>
			</div>
			<div className={styles.media_wrap}>
				<div className={styles.media}>
					<LazyImage
						image={{
							src: '/hero-2nd.jpeg',
							alt: 'nuneaton lacrosse club logo'
						}}
						width={704}
						height={704}
						sizes={[100, 50, 50]}
						priority={false}
						intrinsic={true}
					/>
				</div>
			</div>
		</section>
	)
}

export { MediaAndText }