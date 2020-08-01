<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col sm:w-full md:w-full d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Login</h4>
                                    <p>Bora começar a gerenciar seu dinheiro?!</p>
                                </div>
                                <vs-input
                                    icon="icon icon-user"
                                    icon-pack="feather"
                                    label-placeholder="Username"
                                    v-model="username"
                                    class="w-full no-icon-border"/>

                                <vs-input
                                    type="password"
                                    icon="icon icon-lock"
                                    icon-pack="feather"
                                    label-placeholder="Senha"
                                    v-model="password"
                                    class="w-full mt-6 no-icon-border" />

                                <div class="flex flex-wrap justify-between my-5">
                                    <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Lembre-me</vs-checkbox>
                                    <router-link to="#">Esqueceu sua senha?</router-link>
                                </div>
                                <vs-button type="border">Cadastrar</vs-button>
                                <vs-button class="float-right">Login</vs-button>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            username: '',
            password: '',
            checkbox_remember_me: false
        }
    }
}
</script>

<style lang="scss">
</style>
