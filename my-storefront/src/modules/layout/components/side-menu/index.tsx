"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
}

const SideMenu = ({ regions }: { regions: HttpTypes.StoreRegion[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="relative inline-block text-left">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              data-testid="nav-menu-button"
              className={clx(
                "text-base font-medium text-ui-fg-base hover:text-ui-fg-muted focus:outline-none",
                open && "text-ui-fg-muted"
              )}
            >
              Menu
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel
                className="absolute left-0 mt-2 w-48 z-30 bg-white rounded-md shadow border border-gray-200 py-3 px-4"
              >
                <ul className="flex flex-col gap-3">
                  {Object.entries(SideMenuItems).map(([name, href]) => (
                    <li key={name}>
                      <LocalizedClientLink
                        href={href}
                        className="block text-sm text-ui-fg-base hover:text-ui-fg-muted transition-colors"
                        data-testid={`${name.toLowerCase()}-link`}
                      >
                        {name}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>

                {regions && (
                  <div
                    className="mt-4 flex items-center justify-between"
                    onMouseEnter={toggleState.open}
                    onMouseLeave={toggleState.close}
                  >
                    <CountrySelect
                      toggleState={toggleState}
                      regions={regions}
                    />
                    <ArrowRightMini
                      className={clx(
                        "transition-transform duration-150",
                        toggleState.state ? "-rotate-90" : ""
                      )}
                    />
                  </div>
                )}

                <Text className="txt-compact-small mt-4 text-gray-400">
                  © {new Date().getFullYear()} Kristen Store. All rights reserved.
                </Text>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default SideMenu
