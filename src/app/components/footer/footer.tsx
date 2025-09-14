import { SITE_TITLE } from "@/app/config/meta";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-sm text-gray-500">&copy; 2025. {SITE_TITLE} All rights reserved.</p>
             <p className="text-sm text-gray-500">Contact: <a href="mailto:support@idochub.dev" className="text-gray-500 transition hover:opacity-75">support@idochub.dev</a></p>

            {
                false
                &&
                <ul className="mt-8 flex flex-wrap justify-start gap-4 text-sm sm:mt-0 lg:justify-end">
                <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                </li>

                <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                </li>
                </ul>
            }
        </div>
      </div>
    </footer>
  )
}