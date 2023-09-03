import React from "react"
import { HomeLinkToPage } from "../components/HomeLinkToPage"

//works
const wThumbnail =  '/public/images/works/waterDropletSculpture/thumbnail.webp'

//profile
const pThumbnail = '/public/images/profile/thumbnail.webp'

//news
const nThumbnail = '/public/images/news/thumbnail.webp'

const Home:React.FC = () => {
  return (
    <div className="flex flex-col mt-10">
      <HomeLinkToPage image={wThumbnail} link="/works" title="WORKS" isTextWhite={true} />
      <HomeLinkToPage image={pThumbnail} link="/profile" title="PROFILE" isTextWhite={false} />
      <HomeLinkToPage image={nThumbnail} link="/news" title="NEWS" isTextWhite={true} />
    </div>
  )

}

export default Home
