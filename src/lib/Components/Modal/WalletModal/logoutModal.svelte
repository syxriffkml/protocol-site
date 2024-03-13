<script lang="ts">
    import Modal from "$lib/Components/Modal/Index/Modal.svelte";
	import Icon from '@iconify/svelte';
	import { getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	// import { basicAuth } from '$lib/modules/basicAuth';
	// import { walletConnect } from '$lib/wallet';
	// import type { Address } from 'viem';

	initializeStores();
	const drawerStore = getDrawerStore();

	let loadingRef = false;

	let isConnectAddress: boolean = false;

	// let accountAddress: Address;

	let copyState: boolean = false;

	// walletConnect.walletStore.subscribe((walletDetails) => {
	// 	isConnectAddress = walletDetails.isConnectAddress;
	// 	accountAddress = walletDetails.account_address;
	// });

	function copyToClipboard() {
		copyState = true;
		// navigator.clipboard.writeText(accountAddress);
        navigator.clipboard.writeText("test");
	}

	async function logOut() {
		// walletConnect.disconnectWallet();
		// if (await basicAuth.isSignedIn) {
		// 	await basicAuth.terminateSession();
		// }
		setTimeout(function () {
			location.reload();
		}, 1000);
	}

	export let logoutModal: Modal;
</script>

{#if !loadingRef}
	<div class="flex flex-col items-center p-4 md:p-0">
		<div class="flex flex-col items-center text-center gap-2">
			<div class="rounded-full w-fit p-4 bg-orange-100 text-4xl">🍊</div>
			<div class="rounded-full text-black font-bold">
				<!-- {accountAddress.slice(0, 5) + '***' + accountAddress.slice(-5)} -->
			</div>
			<div class="rounded-full font-semibold text-slate-500 text-sm">0 BNB</div>
		</div>
		<div class="flex justify-center items-center gap-2 p-3 w-full text-black">
			<button
				class="flex flex-col justify-center items-center bg-[#f8f8f8] p-2 rounded-lg w-full"
				on:click={() => {
					copyToClipboard();
				}}
			>
				{#if !copyState}
					<Icon icon="solar:copy-bold-duotone" width="25" height="25"  />
				{:else}
				<Icon icon="line-md:check-all" width="25" height="25"  style="color: #2cce54" />
				{/if}

				<div class="font-semibold whitespace-nowrap ">Copy Address</div>
			</button>
			<button
				class="flex flex-col justify-center items-center bg-[#f8f8f8] p-2 rounded-lg w-full"
				on:click={() => {
					loadingRef = true;
					logOut();
					logoutModal.closeModal();
					drawerStore.close();
				}}
			>
				<Icon icon="solar:logout-3-bold" width="25" height="25"/>
				<div class="font-semibold">Disconnect</div>
			</button>
		</div>
	</div>
{:else}
	<div class="flex flex-col gap-y-6 justify-center items-center">
		<div class="font-semibold">Processing Log out session</div>
		<Icon icon="eos-icons:bubble-loading" width="85" height="85" style="color: black" />
	</div>
{/if}
