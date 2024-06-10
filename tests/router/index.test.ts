import App from '@/App.vue';
import router from '@/router';
import { mount } from '@vue/test-utils';
import type { RouteLocationNormalized } from 'vue-router';

describe('Router', () => {
  let wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  // aca volvemos a montarlo cuando va pasando por cada prueba
  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
  });

  test('renders HomePage when visiting /', async () => {
    await router.replace('/');
    await router.isReady();

    const title = 'Bienvenido a nuestro sitio web';
    expect(wrapper.html()).toContain(title);
  });

  test('should renders Features when visiting /features', async () => {
    await router.replace('/features');
    //await router.push({name:'features'}) // esta es otra forma de navegar al mismo link

    const title = 'Master Cleanse Reliac Heirloom';
    expect(wrapper.html()).toContain(title);
  });

  test('should renders Pricing when visiting /pricing', async () => {
    await router.replace('/pricing');
    const title = 'Startup';
    expect(wrapper.html()).toContain(title);
  });

  test('should renders login Page when visiting /pokemon/:id with no authentication', async () => {
    localStorage.clear()
    await router.replace('/pokemon/150');
    await router.isReady()

    expect(wrapper.find('h1').text()).toContain('Login');
  });

  test('should renders pokemonPage when visiting /pokemon/:id with authentication', async () => {
    localStorage.setItem('userId', 'ABC-123')
    await router.replace('/pokemon/150');
    await router.isReady()

    expect(wrapper.find('h1').text()).toContain('Pokemon #150');
  });

  test('should renders pokemonPage when visiting /pokemon/:id with authentication', async () => {
    localStorage.setItem('userId', 'ABC-123')
    await router.replace('/pokemon/150');
    await router.isReady()
    const imgSrc = "/src/assets/logo.svg"
    expect(wrapper.find('img').attributes('src')).toContain(imgSrc);
  });

  test('should convert the egment into numbers', () => {
    
    const route:RouteLocationNormalized = {
        matched: [],
        fullPath: '/pokemon/2',
        query: {},
        hash: '',
        redirectedFrom: undefined,
        name: undefined,
        meta: {},
        path: '',
        params: {id:'2'}
    }
    const pokemonRoute = router.getRoutes().find((route)=>route.name === 'pokemon')
    expect(pokemonRoute).toBeTruthy()

    const {id} = (pokemonRoute?.props as any).default(route)
    expect(id).toBe(2)
  })
  

});
