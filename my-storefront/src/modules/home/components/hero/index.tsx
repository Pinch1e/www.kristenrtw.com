import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div
      className="h-[75vh] w-full border-b border-ui-border-base relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Text content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-5xl leading-20 text-white font-normal signature-font"
          >
            Kristen Signature
          </Heading>
          <Heading
            level="h2"
            className="text-2xl leading-20 text-yellow-400 font-normal"
          >
            Contemporary African Fashion for the Bold & Elegant
          </Heading>
        </span>
        <a href="/store" target="_blank" rel="noopener noreferrer">
          <Button
            variant="secondary"
            className="hover:bg-yellow-400 hover:text-ui-fg-base transition-colors duration-300"
          >
            Shop Now
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
