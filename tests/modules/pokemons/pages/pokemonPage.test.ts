import PokemonPage from '@/modules/pokemons/pages/PokemonPage.vue';
import { RouterLinkStub, mount } from '@vue/test-utils';

describe('<PokemonPage/>', () => {
  const wrapper = mount(PokemonPage, {
    props: {
      id: 25,
    },
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });
  test('should render the component correctly', () => {
    const imgSrc =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg';
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(imgSrc);
  });

  test('should redirect to the next pokemon', () => {
    const link = wrapper.findComponent(RouterLinkStub);
    const linkTo = { name: 'pokemon', params: { id: 26 } };
    //console.log(link.props())
    expect(link.props().to).toEqual(linkTo);
  });
});
