<script setup>
  import { onMounted, ref } from 'vue';
  import PocketBase from 'pocketbase';
  
  let pb = null;
  const currentUser = ref();
  const username = ref("");
  const password = ref("");
  const fullName = ref("");
  
  const loginMode = ref(true);
  
  onMounted(async () => {
    pb = new PocketBase('http://127.0.0.1:8090');
  
    pb.authStore.onChange(() => {
      currentUser.value = pb.authStore.model
    }, true)
  
  });
  
  const doLogout = () => {
    pb.authStore.clear();
    currentUser.value = null;
  }
  
  const doLogin = async () => {
    try {
      const authData = await pb.collection('users')
        .authWithPassword(username.value, password.value);
  
      // after the above you can also access the auth data from the authStore
      console.log(pb.authStore.isValid);
      console.log(pb.authStore.token);
      console.log(pb.authStore.model);
      // currentUser.value = pb.authStore.model
    } catch (error) {
      alert(error.message)
    }
  }
  
  const doCreateAccount = async () => {
    try {
      const data = {
        "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
        "email": username.value,
        "emailVisibility": true,
        "password": password.value,
        "passwordConfirm": password.value,
        "name": fullName.value
      };
  
      const record = await pb.collection('users').create(data);
  
      await doLogin();
    } catch (error) {
      alert(error.message)
    }
  }
  
  </script>
  
  <style scoped>
  </style>

<template>
    <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div v-if="currentUser">
          <h1>Welcome {{ currentUser.name }}</h1>
          <div>
            <button type="button" @click="doLogout"
              class="border-2 border-Pop w-3/4 h-8 rounded-x2l mx-auto mt-8 mb-16 flex items-center justify-center text-x2l hover:bg-Pop focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Pop">Déconnexion</button>
  
          </div>
        </div>
        <div v-else>
          <h1>{{ loginMode ? "LOGIN" : "CREATE ACCOUNT" }}</h1>
          <div class="sm:col-span-2 sm:col-start-1 mt-4">
            <label for="username" class="block text-x3l font-medium leading-6 text-black">Adresse Email</label>
            <div class="mt-2">
              <input v-model="username" type="text" name="email" id="email" autocomplete="none"
                placeholder="Enter Email Address "
                class=" px-2 block w-full rounded-xl border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-midGreen placeholder:text-grey focus:ring-2 focus:ring-inset focus:ring-darkGreen sm:text-lg sm:leading-6">
            </div>
          </div>
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <label for="password" class="block text-x3l font-medium leading-6 text-gray-900">Mot de passe</label>
            <div class="mt-2">
              <input v-model="password" type="password" name="mot de passe" id="mot de passe" autocomplete="none"
                placeholder="Enter Password "
                class=" px-2 block w-full rounded-xl border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-midGreen placeholder:text-grey focus:ring-2 focus:ring-inset focus:ring-darkGreen sm:text-lg sm:leading-6">
            </div>
          </div>
          <div v-if="loginMode">
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <button type="button" @click="doLogin"
                class="border-2 border-darkGreen w-3/4 h-8 rounded-x2l mx-auto mt-8 mb-16 flex items-center justify-center text-x2l">Se connecter</button>
  
              <button type="button" @click="loginMode = false"
                class="border-2 border-darkGreen w-3/4 h-8 rounded-x2l mx-auto mt-4 mb-16 flex items-center justify-center text-x2l">Créer un compte</button>
  
            </div>
          </div>
          <div v-else>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">Nom Prénom</label>
              <div class="mt-2">
                <input v-model="fullName" type="text" name="Nom prénom" id="Nom prénom" autocomplete="none"
                  placeholder="Enter Full Name "
                  class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <button type="button" @click="doCreateAccount"
                class="border-2 border-midGreen w-3/4 h-8 rounded-x2l mx-auto mt-8 mb-16 flex items-center justify-center text-x2l hover:bg-darkGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Enregistrer le compte</button>
  
              <button type="button" @click="loginMode = true"
                class="border-2 border-Pop w-3/4 h-8 rounded-x2l mx-auto mt-8 mb-16 flex items-center justify-center text-x2l hover:bg-Pop focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Pop">Annuler</button>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  