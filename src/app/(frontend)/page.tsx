import { getPayload } from "payload"
import config from "@payload-config"
import {
	TypographyH1,
	TypographyH2,
	TypographyLead,
	TypographyList,
} from "@/components/ui/typography"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function HomePage() {
	const payload = await getPayload({ config })
	const classes = await payload.find({
		collection: "classes",
		pagination: false,
	})

	return (
		<div className="flex flex-col gap-12">
			<div className="space-y-2 text-center">
				<TypographyH1>Materiały dla uczniów CEZ</TypographyH1>
				<TypographyLead>
					Wybierz swoją klasę aby pobrać materiały
				</TypographyLead>
			</div>
			<div className="mx-auto grid max-w-6xl grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle className="inline-flex items-center gap-2">
							<GraduationCap />
							<span>3P</span>
						</CardTitle>
						<CardContent>
							<TypographyList>
								<li>Programowanie obiektowe: 3 pliki</li>
								<li>Aplikacje mobilne: 2 pliki</li>
								<li>Aplikacje desktopowe: 4 pliki</li>
							</TypographyList>
							<Button className="w-full">Zobacz pliki</Button>
						</CardContent>
					</CardHeader>
				</Card>
			</div>
		</div>
	)
}
