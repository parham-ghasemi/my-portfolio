import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Room from "../../components/Room"
import { Suspense } from "react"
import CanvasLoader from "../../components/CanvasLoader"
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"

const Hero = () => {
  const isMobile = useMediaQuery({maxWidth: 768})

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi I'm Parham <span className="waving-hand">👋</span></p>
        <p className="hero_tag text-gray_gradient">Creating Products & brands</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />} >
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <Room
              // scale={0.05}
              // position={[0, 0, 0]}
              // rotation={[0, -Math.PI / 2, 0]}
              position={isMobile ? [1, -8, -2] : [0, -10, -2]}
              rotation={[0.3, -3.6, 0]}
              scale={isMobile ? 0.08 : 0.1}
            />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero