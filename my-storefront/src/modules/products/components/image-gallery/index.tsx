"use client"

import React, { useState } from "react"
import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <Container className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle rounded-rounded">
        {!!images[currentIndex].url && (
          <Image
            src={images[currentIndex].url}
            priority={true}
            className="absolute inset-0 rounded-rounded"
            alt={`Product image ${currentIndex + 1}`}
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            style={{
              objectFit: "cover",
            }}
          />
        )}
      </Container>
      <button
        aria-label="Previous image"
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-ui-bg-subtle bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
      >
        &#8592;
      </button>
      <button
        aria-label="Next image"
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-ui-bg-subtle bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
      >
        &#8594;
      </button>
    </div>
  )
}

export default ImageGallery
