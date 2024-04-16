import "@/styles/globals.css";

interface IRootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout(props: IRootLayoutProps) {
	const { children } = props;

	return (
		<>
			<html lang="en" className="text-gray-900 antialiased leading-tight">
				<head></head>
				<body className="min-h-screen bg-gray-100">
					<div className="md:container md:mx-auto px-8">
						{children}
						<div id="modal" />
					</div>
				</body>
			</html>
		</>
	)
}