import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router"

const isAuthenticatedGuard = (to:RouteLocationNormalized, from:RouteLocationNormalized, next:NavigationGuardNext) => {
    console.log(to)
    const userId = localStorage.getItem('userId')
    localStorage.setItem('lastPath',to.path);
    if (!userId) { 
        return next({name:'login'})
    }
    return next()
}

export default isAuthenticatedGuard