import Link from "next/link";

type ButtonProps = {
  url: string;
  title: string;
}

const buttonPrimary = ({ url, title }: ButtonProps) => {
  return (
    <Link href={url} className="px-4 py-2 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800 transition">
        {title}
    </Link>
  )
}

export default buttonPrimary
