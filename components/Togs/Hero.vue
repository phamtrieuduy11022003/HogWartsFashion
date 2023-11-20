<script setup>
    const route = useRoute();
    definePageMeta({
    layout: "default",
    });
</script>
<template>
  <div class="">
    
    <slot>
        <BodyTrangChu/>    
    </slot>
    
  </div>
</template>
