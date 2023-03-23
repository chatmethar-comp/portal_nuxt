// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase'
    ],
    app: {
        head: {
            link: [
                {rel:"stylesheet",href:'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'},
                {rel:"stylesheet",href:'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'}
            ]
        }
    }
})
