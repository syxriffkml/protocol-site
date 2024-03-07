<script lang="ts">
	import '../app.postcss';
	import NavBar from '$lib/Components/NavBar/Navbar.svelte';
	import SideBar from '$lib/Components/SideBar/SideBar.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="flex flex-row">
	<div class="w-[18rem] hidden xl:block fixed h-screen">
		<SideBar />
	</div>
	<div class="w-full pl-0 xl:pl-[18rem]">
		<NavBar />
		<slot />
	</div>
</div>
