import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'

interface Props {
	children?: React.ReactNode
	className?: string
	title?: string
}

const MainLayout = ({ children, className = '', title }: Props) => {
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<div>
				<Header />
				<main className={className}>{children}</main>
				<Footer />
			</div>
		</>
	)
}

export default MainLayout
