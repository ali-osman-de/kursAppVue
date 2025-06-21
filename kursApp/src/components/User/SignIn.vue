<template>
    <div class="signinContainer" @click="isLoggedScreen = !isLoggedScreen">
        <Form>
            <h3> {{ isLoggedScreen ? 'Eğitmen Girişi' : 'Kaydol' }}</h3>
            <div class="form-group">
                <Field name="email" v-slot="{ field, errors, errorMessage }">
                    <input type="email" class="form-control" placeholder="E-mail Girin" v-bind="{ field }" />
                    <div class="alert" v-if="errors !== null">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="form-group">
                <Field name="password" v-slot="{ field, errors, errorMessage }">
                    <input type="password" class="form-control" placeholder="Şifre Girin" v-bind="{ field }" />
                    <div class="alert" v-if="errors !== null">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div>
                <button class="btn btn-warning">{{ isLoggedScreen ? 'Giriş Yap' : 'Kaydol' }}</button>
                <div>
                    <button class="btn btn-block" v-if="isLoggedScreen">Kaydol</button>
                    <button class="btn btn-block" v-else="isLoggedScreen">Giriş Yap</button>
                </div>
            </div>
        </Form>

    </div>
</template>

<script setup>
import { Field, Form } from 'vee-validate';
import * as yup from "yup";
import {ref} from "vue";

const isLoggedScreen = ref(true);

</script>