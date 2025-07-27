"use client"

import { useEffect, useState } from "react"
import CartDropdown from "../cart-dropdown"
import { retrieveCart } from "@lib/data/cart"
import type { StoreCart } from "@medusajs/types"

export default function CartButtonClient() {
  const [cart, setCart] = useState<StoreCart | null>(null)

  useEffect(() => {
    async function fetchCart() {
      const cartData = await retrieveCart().catch(() => null)
      setCart(cartData)
    }
    fetchCart()
  }, [])

  return <CartDropdown cart={cart} />
}
