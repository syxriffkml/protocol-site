<script lang="ts">
	import '../app.postcss';
	import NavBar from '$lib/Components/NavBar/Navbar.svelte';
	import SideBar from '$lib/Components/SideBar/SideBar.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="bg-slate-900">
	<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10" slotSidebarLeft="w-[18rem] hidden xl:block">
		
		<svelte:fragment slot="sidebarLeft">
			<SideBar/>
		</svelte:fragment>

		<svelte:fragment slot="pageHeader">
			<NavBar/>
		</svelte:fragment>

	
		<slot />
	
	</AppShell>
</div>