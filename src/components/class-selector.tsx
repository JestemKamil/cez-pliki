"use client"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import { Class } from "@/payload-types"
import { getClassFiles } from "@/app/(frontend)/actions"
import { File as FileCMS } from "@/payload-types"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

interface FileList {
	loading: boolean
	files: FileCMS[]
}
export default function ClassSelector({ classes }: { classes: Class[] }) {
	const [selectedClass, setSelectedClass] = useState("")
	const [files, setFiles] = useState<FileList>({
		loading: false,
		files: [],
	})
	useEffect(() => {
		if (selectedClass != "") {
			setFiles({
				loading: true,
				files: [],
			})
			async function getFiles() {
				const fetchedFiles = (await getClassFiles(
					selectedClass,
				)) as FileCMS[]

				setFiles({
					loading: false,
					files: fetchedFiles,
				})
			}
			getFiles()
		}
	}, [selectedClass])
	return (
		<div className="flex flex-col">
			<Select value={selectedClass} onValueChange={setSelectedClass}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Wybierz klase" />
				</SelectTrigger>
				<SelectContent>
					{classes.map((schoolClass) => (
						<SelectItem
							value={String(schoolClass.id)}
							key={schoolClass.id}
						>
							{schoolClass.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<div className="grid grid-cols-3">
				{files.files.map((file) => (
					<Card key={file.id}>
						<CardHeader>
							<CardTitle>Card Title</CardTitle>
							<CardDescription>Card Description</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Card Content</p>
						</CardContent>
						<CardFooter>
							<p>Card Footer</p>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}
