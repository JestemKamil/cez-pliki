import { ReactNode } from "react"

export function TypographyH1({ children }: { children: ReactNode }) {
	return (
		<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
			{children}
		</h1>
	)
}

export function TypographyLead({ children }: { children: ReactNode }) {
	return <p className="text-muted-foreground text-xl">{children}</p>
}

export function TypographyH2({ children }: { children: ReactNode }) {
	return (
		<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
			{children}
		</h2>
	)
}

export function TypographyList({ children }: { children: ReactNode }) {
	return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
}
