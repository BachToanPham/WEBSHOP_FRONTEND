import React from 'react'
import { Logomark } from '../common/Logo'
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Return Policy', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Shipping Policy', href: '#' },
  ],
  bottomLinks: [
    { name: 'Accessibility', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function AlFooter() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200">
          <div className="pt-16 pb-20">
            <div className="md:flex md:justify-center">
              <div className="flex items-center text-gray-900">
                <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
                <div className="ml-4">
                  <p className="text-base font-semibold">Handee</p>
                  <p className="mt-1 text-sm">Shop the whole world.</p>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Products
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.products.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Customer Service
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.customerService.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Company
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Legal</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.legal.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
            <div className="flex items-center rounded-lg bg-gray-100 p-6 sm:p-10">
              <div className="mx-auto max-w-sm">
                <h3 className="font-semibold text-gray-900">
                  Sign up for our newsletter
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <form className="mt-4 sm:mt-6 sm:flex">
                  <input
                    id="email-address"
                    type="text"
                    required
                    autoComplete="email"
                    aria-label="Email address"
                    className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-600"
                  />
                  <div className="mt-3 sm:mt-0 sm:ml-4 sm:shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-base font-medium text-white shadow-xs hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-hidden"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="relative mt-6 flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:mt-0">
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/ecommerce-images/footer-02-exclusive-sale.jpg"
                  className="size-full object-cover saturate-0 filter"
                />
                <div className="absolute inset-0 bg-cyan-600/90" />
              </div>
              <div className="relative mx-auto max-w-sm text-center">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Get early access
                </h3>
                <p className="mt-2 text-gray-200">
                  Did you sign up to the newsletter? If so, use the keyword we
                  sent you to get access.{' '}
                  <a
                    href="#"
                    className="font-bold whitespace-nowrap text-white hover:text-gray-200"
                  >
                    Go now<span aria-hidden="true"> &rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; 2025 All Rights Reserved
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              {footerNavigation.bottomLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-500 hover:text-gray-600"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="ml-6 border-l border-gray-200 pl-6">
              <a
                href="#"
                className="flex items-center text-gray-500 hover:text-gray-600"
              >
                <img
                  alt=""
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1599px-Flag_of_Vietnam.svg.png"
                  className="h-auto w-5 shrink-0"
                />
                <span className="ml-3 text-sm">Change</span>
                <span className="sr-only">location and currency</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
