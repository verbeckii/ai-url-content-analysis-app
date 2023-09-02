import type { V2_MetaFunction } from "@remix-run/node"
import ContentExplorer from "~/features/content-explorer/content-explorer"
import DocumentExplorer from "~/features/document-explorer/document-explorer"
import FormExplorer from "~/features/form-explorer/form-explorer"
import Header from "~/shared/components/header"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Test task" }, { name: "description", content: "Welcome" }]
}

export default function Index() {
	return (
		<div className="flex flex-col w-full h-full space-y-3">
			<Header />
			<div className="flex grow space-x-3 w-full h-[calc(100%_-_92px)]">
				<ContentExplorer />
				<FormExplorer />
				<DocumentExplorer />
			</div>
		</div>
	)
}
