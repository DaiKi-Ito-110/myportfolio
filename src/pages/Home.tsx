import { HomeLinkToPage } from "../components/HomeLinkToPage.tsx"

//works
import wThumbnail from '../../src/assets/images/works/waterDropletSculpture/thumbnail.webp'

//profile
import pThumbnail from '../../src/assets/images/profile/thumbnail.webp'

//news
import nThumbnail from '../../src/assets/images/news/thumbnail.webp'

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
