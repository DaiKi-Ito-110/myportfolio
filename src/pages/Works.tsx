import Thumbnail from "../components/Thumbnail"
import waterDropletsSculptureThumbnail from '../assets/images/waterDropletSculpture/thumbnail.webp'

const works = [
  {
    imgAdd: waterDropletsSculptureThumbnail,
    title: '水滴の彫刻',
  },
  {
    imgAdd: waterDropletsSculptureThumbnail,
    title: '水滴の彫刻',
  },
  {
    imgAdd: waterDropletsSculptureThumbnail,
    title: '水滴の彫刻',
  },
  {
    imgAdd: waterDropletsSculptureThumbnail,
    title: '水滴の彫刻',
  },
  {
    imgAdd: waterDropletsSculptureThumbnail,
    title: '水滴の彫刻',
  },
]

const Works:React.FC = () => {
  return (
    <div>
      {works.map((work, i) =>
        <Thumbnail image={work.imgAdd} title={work.title} delay={i*0.1} />
      )}
    </div>
  )
}

export default Works