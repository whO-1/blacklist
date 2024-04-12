<template>

  <header > 
      <NavBar />
  </header>

  <main >
    <router-view />
  </main>

</template>



<script setup>
    import NavBar from "@/components/NavBar.vue";
    
</script>





<style>
*{
  box-sizing: border-box;
}

a{
  text-decoration: none !important;
  cursor: pointer;
  color: inherit;
}

body{
  font-family:Arial, Helvetica, sans-serif;
}

button{
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

</style>

