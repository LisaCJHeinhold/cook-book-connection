<script>
  import { onMount } from 'svelte';
  
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<!-- Navigation for small screens -->
<div>
  <button class="absolute m-5 md:hidden" on:click={toggleMenu}>
    <span>
      <div class:hidden={isOpen} class="bg-pink h-1 w-10 rounded-md mb-1"></div>
      <div class:hidden={isOpen} class="bg-pink h-1 w-10 rounded-md mb-1"></div>
      <div class:hidden={isOpen} class="bg-pink h-1 w-10 rounded-md mb-1"></div>
      <div class:hidden={!isOpen} class="text-white bg-pink font-bold text-4xl">&#10006;</div>
    </span>
  </button>
  <div class:hidden={!isOpen} class="bg-pink pl-14 pr-20 py-8 h-screen md:hidden">
    <div class="img-div">
      <img class="w-20 pb-3 pt-8" src="cbc-logo.png" alt="Cook Book Connection">
    </div>
    <ul>
      <li class="text-xl py-5 text-white"><a href="/">Dashboard</a></li>
      <!-- <li class="text-xl py-5 text-white"><a href="/">Profile</a></li> -->
      <li class="text-xl py-5 text-white"><a href="/">Global</a></li>
      <li class="text-xl py-5 text-white"><a href="/">Favorites</a></li> <!-- only shown when logged in -->
      <li class="text-xl py-5 text-white"><a href="/">Settings</a></li>
      <li class="text-xl py-5 text-white"><a href="/logout">Logout</a></li> <!-- only shown when logged in -->
    </ul>
  </div>
  <!-- Navigation for large screens -->
  <div class="hidden md:block border-r-2 border-light-pink pl-14 pr-20 py-8 h-screen">
    <div class="img-div">
      <img class="w-32 pb-10 pt-0" src="cbc-logo.png" alt="Cook Book Connection">
    </div>
    <ul>
      <li class="text-2xl py-5"><a href="/">Dashboard</a></li>
      <!-- <li class="text-2xl py-5"><a href="/">Profile</a></li> -->
      <li class="text-2xl py-5"><a href="/">Global</a></li>
      <li class="text-2xl py-5"><a href="/">Favorites</a></li> <!-- only shown when logged in -->
      <li class="text-2xl py-5"><a href="/">Settings</a></li>
      <li class="text-2xl py-5"><a href="/logout">Logout</a></li> <!-- only shown when logged in -->
    </ul>
  </div>
</div>
