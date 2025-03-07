import { getPayload } from 'payload'
import config from '@payload-config'
import ClassSelector from '@/components/class-selector'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const classes = await payload.find({
    collection: 'classes',
    pagination: false,
  })

  return (
    <div>
      <h1 className="text-4xl text-center">Pliki</h1>
      <ClassSelector classes={classes.docs} />
    </div>
  )
}
