import Thumbnail from "../components/Thumbnail"
import { workInfo } from "../workInfo"

const Works:React.FC = () => {
  return (
    <div>
      {workInfo.map((work, i) =>
        <Thumbnail image={work.thumbnailImg} title={work.title} delay={i*0.1} pageLink={work.pageLink} />
      )}
    </div>
  )
}

export default Works