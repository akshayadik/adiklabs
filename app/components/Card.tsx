import Link from 'next/link'

export default function Card({ title, description, href }) {
  return (
    <Link href={href} className="block">
      <div
        className="group p-6 rounded-2xl border border-gray-200 bg-white 
                   hover:shadow-2xl hover:-translate-y-1 
                   transition duration-300 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-blue-600">
          {title}
        </h3>

        <p className="text-gray-600">
          {description}
        </p>

        <div className="mt-4 text-blue-600 text-sm font-medium group-hover:underline">
          Read More →
        </div>
      </div>
    </Link>
  )
}