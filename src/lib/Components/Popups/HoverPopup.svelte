<!-- HoverPopup.svelte -->
<script lang="ts">
	import { fade } from "svelte/transition";

  export let content = '';
  export let header = '';

  let isVisible = false;

  function handleMouseEnter() {
    isVisible = true;
  }

  function handleMouseLeave() {
    isVisible = false;
  }
</script>
  
<div class="relative" 
  on:mouseenter={handleMouseEnter} 
  on:mouseleave={handleMouseLeave} 
  tabindex="0" 
  role="button" 
  aria-label="..."
>

  <slot />

  {#if isVisible}
    <div class="fixed z-10" >
      <div class="border border-gray-700 w-[10rem] xl:w-[20rem] bg-[#141b1d] rounded-lg p-2 absolute top-0 left-1/2 transform -translate-x-1/2" in:fade out:fade>
        <div class="text-sm font-semibold text-white">
          {header}
        </div>
        <div class="text-xs text-slate-400 ">
          {content}
        </div>
      </div>
    </div>
  {/if}

</div>
  
<style>
  .relative {
    position: relative;
  }

  .fixed {
    position: fixed;
  }
</style>