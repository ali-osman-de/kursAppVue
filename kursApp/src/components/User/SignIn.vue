<template>
    <div class="signinContainer">

        <div class="progressBar" v-if="userStore.loading">
            <v-progress-circular indeterminate color="danger" :size="50" />
        </div>

        <Form :validation-schema="formSchema" @submit="onSubmit" v-if="!userStore.loading">
            <h3> {{ isLoggedScreen ? 'Eğitmen Girişi' : 'Kaydol' }}</h3>
            <div class="form-group">
                <Field name="email" v-slot="{ field, errors, errorMessage }">
                    <input type="email" class="form-control" placeholder="E-mail Girin" v-bind="field"
                        :class="{ 'is-invalid': errorMessage }" />
                    <div class="alert" v-if="errors !== null">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="form-group">
                <Field name="password" v-slot="{ field, errors, errorMessage }">
                    <input type="password" class="form-control" placeholder="Şifre Girin" v-bind="field"
                        :class="{ 'is-invalid': errorMessage }" />
                    <div class="alert" v-if="errors !== null">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div>
                <button class="btn btn-warning">
                    {{
                        isLoggedScreen ? 'Giriş Yap' : 'Kaydol'
                    }}
                </button>

                <div @click="isLoggedScreen = !isLoggedScreen">
                    <button class="btn btn-block" v-if="isLoggedScreen">Kaydol</button>
                    <button class="btn btn-block" v-else>Giriş Yap</button>
                </div>
            </div>
        </Form>

    </div>
</template>

<script setup>
import { Field, Form } from 'vee-validate';
import * as yup from "yup";
import { ref } from "vue";
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore();


let formSchema = yup.object({
    email: yup.string().required("email girmek zorunlu!").email('kontrol edin!'),
    password: yup.string().required("şifre girmek zorunlu!")
});

const isLoggedScreen = ref(true);

function onSubmit(values, resetForm) {
    isLoggedScreen.value === true ? userStore.signIn(values) : userStore.register(values);

}

</script>