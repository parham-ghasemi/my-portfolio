import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = ({ position }: { position: number[] }) => {
  const targetRef = useRef();
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

  useGSAP(() => {
    //@ts-ignore
    gsap.to(targetRef.current.position, {
      //@ts-ignore
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true
    })
  })

  return (
    // @ts-ignore
    <mesh position={position} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.7}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Target