import { ModeToggle } from "@/components/mode-toggle"



function Header() {
  return (
    <>

    <header className="">
      <div className="flex justify-end mx-auto max-w-7xl px-4 py-1 sm:px-2 lg:px-8">
        {/* <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ChallEase</h1> */}
        <ModeToggle />
      </div>
    </header>
    
    </>
  )
}

export default Header