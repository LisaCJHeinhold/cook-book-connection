<script>
  import Header from '../../components/header.svelte';
  import Navigation from "../../components/navigation.svelte";
</script>
<div class="flex flex-row items-start justify-between md:justify-normal ">
  <Navigation />
  <Header />
</div>
<!-- <div class="">
  <Login />
</div> -->

<slot />

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap');

  :root {
    --primary-color: #51212B;
    --secondary-color: #8A112B;
    --tertiary-color: #C6655F;
    --light-pink: #FFD0CD;
    --header1-text: 32px;
    --header2-text: 28px;
    --header3-text: 24px;
    --body-text: 18px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Reddit Sans', sans-serif;
  }

</style>