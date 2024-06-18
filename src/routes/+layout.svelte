<script>
  import "../app.css";
  import Header from '../components/header.svelte';
</script>
<div class="flex flex-row items-start justify-between md:justify-normal ">
</div>
<!-- <div class="">
  <Login />
</div> -->

<slot />

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Reddit Sans', sans-serif;
  }

</style>