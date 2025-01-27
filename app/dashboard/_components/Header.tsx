import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

const Header = () => {
  return (
    <div className='flex justify-between items-center px-3 py-5 shadow-md'>
        <div className='flex items-center gap-3'>
            <h1>Logo</h1>
            <h2 className='font-bold text-xl'>Clip Flick</h2>
        </div>
        <div className='flex gap-3'>
            <Button>Dashboard</Button>
            <UserButton />
        </div>
    </div>
  )
}

export default Header