import type { V2_MetaFunction } from "@remix-run/node"

export const meta: V2_MetaFunction = () => {
	return [{ title: "Test task" }, { name: "description", content: "Welcome" }]
}

export default function Index() {
	return <p id="index-page">Please choose category</p>
}
