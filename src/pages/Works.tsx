import Thumbnail from "../components/Thumbnail"
import { workInfo } from "../workInfo"

const Works:React.FC = () => {
  return (
    <div className="">
      {workInfo.map((work, i) =>
        <Thumbnail key={i} image={work.thumbnailImg} title={work.title} delay={i*0.1} pageLink={work.pageLink} />
      )}
    </div>
  )
}

export default Works