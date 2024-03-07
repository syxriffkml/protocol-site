<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade, scale } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { cubicInOut, cubicOut } from 'svelte/easing';

	//Scripts for opening/closing Modal
	let isOpen = false;
	const dispatch = createEventDispatcher();

	export function openModal() {
		isOpen = true;
		dispatch('open'); // Dispatch an 'open' event
	}

	// export async function openModalAndWaitForLogin() {
	// 	openModal();

	// 	// Wait for isConnected to become true
	// 	while (!isConnected) {
	// 		await new Promise((resolve) => setTimeout(resolve, 100));
	// 	}
	// }

	export function closeModal() {
		isOpen = false;
		dispatch('close'); // Dispatch a 'close' event
	}

	export function handleOutsideClick(event: any) {
		if (!closeDisabled) {
			if (event.target === event.currentTarget) {
				closeModal();
			}
		}
	}

	export function handleKeyDown(event: any) {
		if (!closeDisabled) {
			if (event.key === 'Escape') {
				closeModal();
			}
		}
	}

	//Start of Default Modal "settings"
	export let type: 'light' | 'dark' = 'dark';
	export let z_index = 'z-[99]';

	export let title = '';

	export let mobileWidth = 'w-4/5';
	export let desktopWidth = 'md:max-w-[600px]';
	export let modalHeight = 'h-auto';

	export let closeDisabled: boolean = false;
	function setCloseDisabled(value: boolean) {
		closeDisabled = value;
	}
	//End of Default Modal "settings"
</script>

{#if isOpen}
	<div class="bg-black/40 backdrop-blur-sm fixed inset-0  flex items-center justify-center z-20" in:fade out:fade>
		<div class="fixed inset-0 {z_index} flex items-center justify-center overflow-auto {closeDisabled ? 'cursor-not-allowed' : 'cursor-default'}"
         on:click={handleOutsideClick} on:keydown={handleKeyDown} tabindex="0" role="button" transition:scale={{ duration: 300, delay: 100, easing: cubicInOut }}>
			<div
				class="{mobileWidth} {modalHeight} {desktopWidth} p-2 overflow-y-auto custom-scrollbar
				{type === 'dark'
					? 'banner text-white'
					: 'bg-white border-none rounded-xl text-black'}"
			>
				{#if type === 'light'}
					<header class="flex items-center justify-between px-4 pt-2 pb-0 mb-4">
						<h2 class="text-xl md:text-2xl leading-7 font-titanOne text-stroke whitespace-nowrap">
							{title}
						</h2>
						<button on:click={closeModal}>
							<Icon icon="mingcute:close-fill" class="w-5 h-5" />
						</button>
					</header>
                    {:else if type === 'dark'}
                    <header class="flex items-center justify-between px-4 pt-2 pb-0 mb-4">
						<h2 class="text-xl md:text-2xl leading-7 font-titanOne text-stroke whitespace-nowrap">
							{title}
						</h2>
						<button on:click={closeModal}>
							<Icon icon="mingcute:close-fill" class="w-5 h-5" />
						</button>
					</header>
				{/if}
                <div class="">
                    <slot />
                </div>


			</div>
		</div>
	</div>
{/if}

<style>
    
    .banner {
        @apply relative bg-cover bg-center rounded-lg z-[-1];
        background: conic-gradient(from 202deg at 50% 50%, #202f34 42.57809400558472deg, #65e0fc 94.842449426651deg, #a7edfd 106.2618899345398deg, #65e0fc 119.4994604587555deg, #202f34 187.49999284744263deg, #202f34 260.7220673561096deg, #9beeff 286.23008966445923deg, #202f34 308.08024406433105deg);
    }

    .banner::before {
        content: "";
        @apply absolute inset-px bg-[#141b1d] rounded-lg z-[-1];
    }
</style>