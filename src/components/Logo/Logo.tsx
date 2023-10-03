import { LazyImage } from './../LazyImage/LazyImage'

const Logo = () => {
	return (
		<LazyImage
			image={{
				src: '/logo.png',
				alt: 'nuneaton lacrosse club logo'
			}}
			width={80}
			height={80}
			sizes={[100, 100, 100]}
			priority={true}
			intrinsic={false}
		/>
	)
}

export { Logo }