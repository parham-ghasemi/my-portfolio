

const MacTerminal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-neutral-950 min-h-screen w-11/12 flex flex-col items-center inset-0 rounded-2xl overflow-hidden outline outline-1 outline-neutral-500">
      <div className="mac-titlebar">
        <div className="h-full w-32 flex items-center justify-center gap-4">
          <div className="rounded-full bg-red-400 h-[0.85rem] w-[0.85rem] glow-red" />
          <div className="rounded-full bg-yellow-200 h-[0.85rem] w-[0.85rem] glow-yellow" />
          <div className="rounded-full bg-green-300 h-[0.85rem] w-[0.85rem] glow-green" />
        </div>
        <div className=" h-full w-14 flex items-center justify-center">
          <div className="w-8 h-8">
            <img src="/assets/plus-icon.svg" alt="plus-icon" className="w-full h-full" />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default MacTerminal