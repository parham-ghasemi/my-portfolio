import { useState } from "react";
import GlobeComponent from "../../components/GlobeComponent"
import Button from "../../components/Button"

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false)
    }, 1000);
  }

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Parham.</p>
              <p className="grid-subtext">With 2 years of experience in front-end web development.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px]" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">I specialize in JS/TS with a focus on React and Next.Js</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <GlobeComponent />
            </div>
            <div className="">
              <p className="grid-headtext">I work remotely across most timezones!</p>
              <p className="grid-subtext">I'm based in Iran, with remote work available</p>
              <Button text="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">I love sloving problems and building apps through code. Programming isn't justmy profession, it is my passion</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid4" className="w-full md:h-[126px] sm:h-[276px] min-h-fit object-cover sm:object-top" />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={() => handleCopy('parham.ghasemi.1388@gmail.com')}>
                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy-email" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">parham.ghasemi.1388@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About