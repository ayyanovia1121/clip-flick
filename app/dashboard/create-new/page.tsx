'use client'
import StyleSelector from "./_components/StyleSelector";
import TopicSelector from "./_components/TopicSelector"
import { useState } from "react"

const CreateNewVideo = () => {

  const [formData, setFormData] = useState([]);

  const handleFormChange = (fieldName: any, fieldValue: any) => {
    console.log(fieldName, fieldValue);
  }
  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-2xl text-primary text-center'>Create New</h2>

      <div className="mt-10 shadow-md p-10">
      {/* Topic Selector */}
      <TopicSelector onUserSelect={handleFormChange}/>

      {/* Sytle Selector */}
      <StyleSelector />

      {/* Video Duration */}
      </div>
    </div>
  )
}

export default CreateNewVideo