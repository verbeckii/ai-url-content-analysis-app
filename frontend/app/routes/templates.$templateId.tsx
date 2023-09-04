import type { ActionArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { Form, Outlet } from "@remix-run/react"
import { removeHttpHttps } from "~/shared/helpers"

export const action = async ({ params, request }: ActionArgs) => {
	const choosenFeatures = params.templateId
	const formData = await request.formData()
	const body = Object.fromEntries(formData)
	const url = removeHttpHttps(body.url)
	return redirect(`/templates/${choosenFeatures}/${url}`)
}

export default function TemplateForm() {
	return (
		<>
			<Form method="post" className="basis-2/5 shrink-0 grow">
				<div className="bg-white flex flex-col p-5 space-y-6 justify-start rounded-xl h-full">
					<div className="pt-3 pb-5 border-b border-neutral-200 flex w-full space-x-4 max-h-[95px] min-h-[95px]">
						<div className="space-y-1.5">
							<div className="text-neutral-900 font-semibold text-2xl">URL Analyze topics</div>
							<div className="text-neutral-500 font-normal text-base">
								Get inspiration for AI content URL Analyze topics.
							</div>
						</div>
					</div>
					<div className="grow overflow-y-auto space-y-1.5 w-full">
						<div className="py-2 space-y-3">
							<div className="text-base font-medium">Enter URL</div>
						</div>
						<div className="w-full flex flex-wrap justify-between">
							<div
								className="
    flex rounded-lg border border-neutral-300 focus-within:border-primary-300 cursor-text box-content
    shadow-sm space-x-2 text-neutral-800 placeholder:text-neutral-500 bg-white px-3.5 py-2.5 basis-full
  "
							>
								<input
									name="url"
									type="text"
									placeholder="remix.run"
									className="outline-none w-full resize-none leading-6"
									required
									minLength={4}
								/>
							</div>
						</div>
					</div>
					<div className="flex space-x-3 bg-white w-full">
						<button
							className="rounded-lg font-semibold flex justify-center items-center text-base min-h-[46px] bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:ring-pink-500 focus:ring-opacity-50 focus:ring-2 text-white grow min-w-[90px]"
							type="submit"
						>
							Generate
						</button>
					</div>
				</div>
			</Form>
			<Outlet />
		</>
	)
}
