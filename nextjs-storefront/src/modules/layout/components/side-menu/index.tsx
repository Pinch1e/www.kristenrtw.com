"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import {
  ArrowRightMini,
  XMark,
  House,
  Bag,
  User,
  ShoppingCart,
} from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = [
  { name: "Home", href: "/", icon: <House className="w-5 h-5 mr-2" /> },
  { name: "Store", href: "/store", icon: <Bag className="w-5 h-5 mr-2" /> },
  { name: "Account", href: "/account", icon: <User className="w-5 h-5 mr-2" /> },
  { name: "Cart", href: "/cart", icon: <ShoppingCart className="w-5 h-5 mr-2" /> },
]

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
                >
                  Menu
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition transform ease-out duration-300"
                enterFrom="translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transition transform ease-in duration-200"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-full opacity-0"
              >
                <PopoverPanel className="fixed right-0 top-0 h-full w-[90%] max-w-sm z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-l-xl shadow-xl overflow-y-auto p-6 text-sm text-gray-900 dark:text-gray-100">
                  <div className="flex flex-col h-full relative">
                    {/* Close button */}
                    <div className="absolute top-4 right-4">
                      <button data-testid="close-menu-button" onClick={close}>
                        <XMark className="w-6 h-6 hover:text-red-500 transition" />
                      </button>
                    </div>

                    {/* Menu links */}
                    <ul className="flex flex-col gap-4 mt-12">
                      {SideMenuItems.map(({ name, href, icon }) => (
                        <li key={name}>
                          <LocalizedClientLink
                            href={href}
                            className="flex items-center text-lg font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={close}
                            data-testid={`${name.toLowerCase()}-link`}
                          >
                            {icon}
                            {name}
                          </LocalizedClientLink>
                        </li>
                      ))}
                    </ul>

                    {/* Region selector + footer */}
                    <div className="flex flex-col gap-y-6 mt-auto pt-10">
                      <div
                        className="flex justify-between items-center"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-gray-600 dark:text-gray-300",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        © {new Date().getFullYear()} Medusa Store. All rights reserved.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
