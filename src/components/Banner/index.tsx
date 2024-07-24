import { Image, Description, Title } from './styles'

import bannerImg from '../../assets/images/italiana.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Description>Italiana</Description>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </Image>
)

export default Banner
