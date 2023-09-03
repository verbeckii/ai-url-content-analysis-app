import type { LoaderArgs } from "@remix-run/node"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { json } from "@remix-run/node"
import { useLocation } from "@remix-run/react"

export const loader = async ({ params }: LoaderArgs) => {
	console.log("params: ", params)
	// params doesn't contain the domain only templateId
	return null
}

export default function TemplateDomain() {
	const location = useLocation()
	const domain = location.search?.replace(/^\?/, "")
	console.log("domain: ", domain)

	return (
		<div className="basis-4/5 relative z-10 transition-all max-w-[calc(40%_-_24px)]">
			<div className="bg-white flex flex-row  p-0 space-x-0 justify-start rounded-xl w-full h-full">
				<div className="bg-white flex flex-col  p-5 space-y-6 justify-start rounded-xl grow h-full w-full max-w-[calc(100%_-_44px)]">
					<div className="pt-3 pb-5 border-b border-neutral-200 max-h-[95px] min-h-[95px]">
						<div className="p-1 rounded-md border border-white text-2xl font-semibold text-neutral-900 outline-none bg-white min-w-0">
							Document
						</div>
					</div>
					<div className="space-y-4 grow flex flex-col justify-center items-center h-full w-full">
						<div className="text-center font-semibold text-xl text-neutral-900">
							Your results will be shown here
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
