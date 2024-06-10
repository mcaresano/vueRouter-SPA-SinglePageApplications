import isAuthenticatedGuard from '@/modules/auth/guads/is-authenticated.guards';
import type { RouteLocationNormalized } from 'vue-router';

describe('is-authenticated.guard', () => {
  const to: RouteLocationNormalized = {
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    name: undefined,
    path: '/home-screen',
    params: {},
    meta: {},
  };
  const from: any = {};
  const next = vi.fn();

  beforeEach(()=>{
    localStorage.clear()
  })


  test('should block is not authenticated', async () => {
    await isAuthenticatedGuard(from, to, next);
    expect(next).toHaveBeenCalledWith({ 
        name: 'login' 
    });
  });
/*  test('should call localStorage set item lastPath', async () => {
    //await isAuthenticatedGuard(from, to, next);
    const lastPath = localStorage.getItem('lastPath');
    expect(lastPath).toBe(to.path);
  });

  test('should block if not authenticated with spies', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')
    await isAuthenticatedGuard(from, to, next);
    expect(setItemSpy).toHaveBeenCalledWith('lastPath', to.path)
  })

  test('should pass authenticated', async() => {
    vi.spyOn(Storage.prototype,'getIgem').mockReturnValue('ABC-123456')
    await isAuthenticatedGuard(from, to, next);
    expect(next).toHaveBeenCalledWith()
})
*/  
  
});
