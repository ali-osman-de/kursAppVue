<template>
    <div class="signinContainer">
        <Form>
            <h3>Eğitmen Girişi</h3>
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
                <button class="btn btn-warning">Giriş Yap</button>
                <button class="btn btn-block">Kaydol</button>
            </div>
        </Form>

    </div>
</template>

<script setup>
import { Field, Form } from 'vee-validate';
import * as yup from "yup";

</script>