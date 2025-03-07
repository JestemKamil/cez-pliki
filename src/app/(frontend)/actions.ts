"use server"

import { getPayload } from "payload"
import config from "@payload-config"
export async function getClassFiles(classId: string) {
	const payload = await getPayload({ config })
	const schoolClass = await payload.findByID({
		collection: "classes",
		id: classId,
	})
	return schoolClass.relatedFiles?.docs ?? []
}
