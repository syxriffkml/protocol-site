<script lang="ts">
	import Icon from "@iconify/svelte";
	import { slide } from "svelte/transition";
	import { onMount, onDestroy } from 'svelte';

	export let showCombo: boolean = false;
	export let imgSelect: string = '';
    export let headSelect:string= '';

    let comboElement: any;

    function handleClickOutside(event: any) {
        if (showCombo && !comboElement.contains(event.target)) {
            showCombo = false;
        }
    }

    if (typeof window !== 'undefined') {
        onMount(() => {
            window.addEventListener('click', handleClickOutside);
        });

        onDestroy(() => {
            window.removeEventListener('click', handleClickOutside);
        });
    }
</script>

<button
	class=" flex justify-center items-center gap-2 bg-[#213035] rounded-md px-2"
	on:click|stopPropagation={(event) => {
        showCombo = !showCombo;
    }}
    bind:this={comboElement}
>
	<div class="w-9 h-9 flex justify-center items-center">
		<img src={imgSelect} alt="" />
	</div>
	<div class="flex justify-end items-center font-bold text-center w-full">
		<div class="w-full">
			{headSelect}
		</div>
		<div class="{showCombo? 'rotate-90' : '-rotate-90'} !transition-all duration-1000">
			<Icon icon="iconamoon:arrow-left-2" class="w-6 h-6" />
		</div>
	</div>

	{#if showCombo}
		<div
			class="absolute z-9999 top-[100%] right-0 flex flex-col h-[100px] overflow-y-scroll w-[140px] bg-[#213035] border border-gray-600 rounded-lg"
			in:slide
			out:slide
		>
            <slot/>
		</div>
	{/if}

</button>
