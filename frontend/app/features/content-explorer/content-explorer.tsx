import { NavLink } from "@remix-run/react"

const navlinkClass =
	"rounded-lg flex items-center py-1.5 pl-5 pr-6 space-x-2 text-neutral-900 whitespace-nowrap transition-all duration-200 [&>div.menu-icon]:text-primary-500 bg-primary-100 [&>div.menu-icon]:stroke-[2.5px] [&>div.menu-icon]:stroke-primary-500 [&>div.menu-icon]:fill-primary-500"
export default function ContentExplorer() {
	return (
		<div className="shrink max-w-[20%] h-full">
			<div className="bg-white flex flex-col  py-6 px-4 space-y-8 justify-start rounded-xl h-full">
				<div className="w-full h-full overflow-y-auto overflow-x-hidden">
					<div className="w-full">
						<div className="py-2 px-3 flex justify-between cursor-pointer select-none hover:bg-neutral-50 rounded-lg">
							<div className="text-base text-neutral-500 font-medium">URL analyzer</div>
						</div>
						<div>
							<NavLink
								className={({ isActive }) =>
									isActive ? `bg-pink-500 ${navlinkClass}` : navlinkClass
								}
								to={`templates/analyze-url-content`}
							>
								Analyze URL content
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									isActive ? `bg-pink-500 ${navlinkClass}` : navlinkClass
								}
								to={`templates/analyze-url-info`}
							>
								Analyze URL info
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
