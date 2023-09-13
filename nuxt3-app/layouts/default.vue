<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt3 App</NuxtLink>
        <div class="flex gap-4">
          <p class="mr-4">Cart ({{ cart.length }})</p>
          <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn">Merch</NuxtLink></li>
          </ul>
          <div v-if="auth.isAuthenticated">
            <NuxtLink to="/profile">Profile</NuxtLink>
            <button class="ml-4" @click="logout">Logout</button>
          </div>
          <NuxtLink v-else to="/login">Login</NuxtLink>
        </div>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>
<script setup>
const cart = useCart();
const auth = useAuth();

function logout() {
  auth.value.isAuthenticated = false;
}
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
