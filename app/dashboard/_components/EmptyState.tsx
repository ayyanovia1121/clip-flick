import { Button } from "@/components/ui/button"
import Link from "next/link"

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center mt-10 border-2 border-dashed p-5 py-24">
      <h1>You dont have any video created</h1>
      <Link href={"/dashboard/create-new"}>
        <Button>Create New Short Video</Button>
      </Link>
    </div>
  );
}

export default EmptyState