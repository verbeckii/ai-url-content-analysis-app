import { type LinksFunction } from "@remix-run/node"
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import stylesheet from "~/tailwind.css"
import Header from "~/shared/components/header"
import ContentExplorer from "~/features/content-explorer/content-explorer"

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }]

export default function App() {
	return (
		<html lang="en" className="bg-neutral-50">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<div className="flex flex-col w-full h-full space-y-3">
					<Header />
					<div className="flex grow space-x-3 w-full h-[calc(100%_-_92px)]">
						<ContentExplorer />
						<Outlet />
					</div>
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
