<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" @add-product="addToCart" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

//  fetch the products
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: "Product not found" });
}

/* definePageMeta({
  layout: "products",
}); */
const route = useRoute();
const name = computed(() => {
  return route.params.name.replaceAll("-", " ");
});

const fullname = computed(() => {
  return `iphone-${route.params.name}`;
});

const cart = useCart();

function isInCart() {
  return !!cart.value.find(ct => ct.name === fullname.value);
}

function addToCart() {
  if (!isInCart()) {
    cart.value.push({ name: fullname });
  } else {
    cart.value = cart.value.filter(ct => ct.name !== fullname.value);
  }
}
</script>
