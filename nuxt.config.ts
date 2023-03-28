// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        '@nuxtjs/supabase'
    ],
    app: {
        head: {
            link: [
                {rel:"stylesheet",href:'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'},
                {rel:"stylesheet",href:'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'}
            ]
        }
    },
})
