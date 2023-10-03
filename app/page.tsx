import styles from './index.module.scss'
import type { Metadata } from 'next'
import { HeroHeader } from '@/components/HeroHeader/HeroHeader'
import { MediaAndText } from '@/components/MediaAndText/MediaAndText'

export const metadata: Metadata = {
  title: 'Nuneaton Lacrosse Club',
  description: 'Founded during the Summer of 2018, Nuneaton Lacrosse Club aims to bring lacrosse to midlands',
}

const Page = () => {
	return (
		<div className={styles.container}>
			<HeroHeader />
			<MediaAndText />
			<MediaAndText flipped={true}/>
		</div>
	)
}

export default Page