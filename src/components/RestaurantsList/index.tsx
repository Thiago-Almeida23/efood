import Restaurant from '../Restaurant'

import { Container, List } from './styles'

const RestaurantsList = () => (
  <Container>
    <div className="container">
      <List>
        <Restaurant
          image={require('../../assets/images/japones.png')}
          title="Hioki Sushi"
          description="Peça já o melhor da culinária japonesa, no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          cuisine="Japonesa"
          isFeatured={true}
        />
        <Restaurant
          image={require('../../assets/images/italiana.png')}
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça Já!"
          cuisine="Italiana"
          isFeatured={false}
        />
        <Restaurant
          image={require('../../assets/images/italiana.png')}
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça Já!"
          cuisine="Italiana"
          isFeatured={false}
        />
        <Restaurant
          image={require('../../assets/images/italiana.png')}
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça Já!"
          cuisine="Italiana"
          isFeatured={false}
        />
        <Restaurant
          image={require('../../assets/images/italiana.png')}
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça Já!"
          cuisine="Italiana"
          isFeatured={false}
        />
        <Restaurant
          image={require('../../assets/images/italiana.png')}
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça Já!"
          cuisine="Italiana"
          isFeatured={false}
        />
      </List>
    </div>
  </Container>
)

export default RestaurantsList
