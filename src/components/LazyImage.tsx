/*
  component is using next.js image comp (https://nextjs.org/docs/api-reference/next/image)
  The default way to display an image for a next.js project
  @param image: Object (contains image detail like src and alt text)
  @param sizes: array (eg. [100, 33, 25] = [mobile, tablet, desktop])
  @param priority: boolean (When true, the image will be considered high priority and preload.)
	@param q: number (the number provided will determine the output quality of the image during a build)
	@param intrinisic: boolean (help eliminate content reflow when images load in by creating a placeholder div)

*/
//import next components
import Image from 'next/image'
// importing component styles
import styles from './SixLazyImage.module.scss'
// import helper
import { createImageSrcSizes } from '@/../utils'

// defining prop types
type imgProps = {
	image: {
		src: string
		alt: string
	}
	width: number
	height: number
	sizes: number[]
	priority: boolean
	q?: number
	intrinsic?: boolean
}

// get the image ratio to allow us to prevent any lcs issues
const getImageRatio = (width: number, height: number) => {
	for (let num = height; num > 1; num--) {
		if (width % num == 0 && height % num == 0) {
			width = width / num
			height = height / num
		}
	}
	const ratio = width + `/` + height
	return ratio
}

// get fallback value for older browsers that dont support aspect ratio
const getRatioFallback = (width: number, height: number) => {
	return (height / width) * 100 + `%`
}

// setting type for component as well as assigning props
const SixLazyImage: React.FC<imgProps> = ({
	image,
	width,
	height,
	sizes,
	priority,
	q = 95,
	intrinsic = true
}) => {
	// create a readable sizes string
	const imgSizes = createImageSrcSizes(sizes)
	// get image ratio, this is used for preventing background layout shift
	const imgRatio = getImageRatio(width, height)
	// fallback value that is used incase aspect ratio is not supported
	const ratioFallback = getRatioFallback(width, height)

	if (intrinsic) {
		return (
			<div
				className={`${styles.container}`}
				style={{
					[`--img-ratio` as string]: imgRatio,
					[`--img-ratio-fallback` as string]: ratioFallback
				}}
			>
				<Image
					src={image?.src}
					alt={image?.alt}
					width={width}
					height={height}
					sizes={imgSizes}
					priority={priority}
					className={styles.img}
					quality={q}
				/>
			</div>
		)
	} else {
		return (
			<Image
				src={image?.src}
				alt={image?.alt}
				width={width}
				height={height}
				sizes={imgSizes}
				priority={priority}
				className={`${styles.img}`}
				quality={q}
			/>
		)
	}
}

export { SixLazyImage }
export type { imgProps }
