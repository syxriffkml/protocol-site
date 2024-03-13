<script lang="ts">
	import Icon from '@iconify/svelte';
    import Modal from "$lib/Components/Modal/Index/Modal.svelte";
	import { getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	import { fade, slide } from 'svelte/transition';
	// import { walletConnect } from '$lib/wallet';
	// import { PUBLIC_API_BASE_URL } from '$env/static/public';
	// import { basicAuth } from '$lib/modules/basicAuth';


	let installWallet: boolean = false;

	export let isConnectAddress: boolean = false;

	let loadingRef = false;

	let rejectRequest = false;

	let acceptRequest = false;

	export let LoginModal: Modal;

	let walletType = ['Metamask'];

	initializeStores();
	const drawerStore = getDrawerStore();

	async function handleWalletLogin(w: string) {
		try {
			if (w === 'Metamask') {

				// await walletConnect.connectWallet();
				isConnectAddress = true;
				acceptRequest = true
				if (acceptRequest) {

					setTimeout(() => {
						drawerStore.close();
						LoginModal.closeModal();
					}, 2000);
				}
			} else if (w === 'WalletConnect') {
				//  null
			} else if (w === 'Coinbase Wallet') {
				//   null
			}

			// const responseUpline = await fetch(`${PUBLIC_API_BASE_URL}/dapp/user/getProfile`, {
			// 	headers: { Authorization: `Bearer ${basicAuth.accessToken}` }
			// });

		} catch (error) {
			rejectRequest = true;
			setTimeout(function () {
				LoginModal.closeModal();
				drawerStore.close();
			}, 2000);
		}
	}
</script>

{#if !loadingRef}
	<div class="md:flex md:p-4 pb-4">
		<div
			class="w-full md:w-[40%] md:border-r bg-[#f8f8f8] md:bg-white border-b md:border-b-transparent p-4 shadow-inner md:shadow-none"
		>
			<div class="text-black text-xl text-center font-bold p-6 block md:hidden">
				Connect a Wallet
			</div>
			<div class="p-2 lg:p-2">
				<div class="text-slate-500 font-bold p-2 hidden md:block">Popular</div>
				<div class="flex md:block">
					{#each walletType as w, i (w)}
						<div
							class="bg-opacity-0 scalehover hover:transition-opacity hover:bg-opacity-100 hover:shadow-lg bg-[#eeeeee] p-1 px-3 rounded"
						>
							<button class="flex flex-col md:flex-row w-full "
							on:click={async () => {
								loadingRef = true;
								handleWalletLogin(w);
							}}>
								<div
									class="flex justify-center items-center md:block mx-auto md:mx-0 bg-orange-200 md:bg-transparent p-3 rounded-lg shadow-xl md:shadow-none"
									
								>
									{#if w === 'Coinbase Wallet'}
										<Icon icon="tabler:brand-coinbase" color="#185cf4" width="30" />
									{:else if w === 'Rainbow'}
										<Icon icon="fluent-emoji-flat:rainbow" color="#3894fc" width="30" />
									{:else if w === 'WalletConnect'}
										<Icon icon="simple-icons:walletconnect" color="#3894fc" width="30" />
									{:else if w === 'Metamask'}
										<Icon icon="logos:metamask-icon" width="30" />
									{/if}
								</div>
								<div
									class="flex flex-col items-center justify-center whitespace-nowrap text-sm font-semibold text-black w-fit md:w-full my-auto"
								>
									{w}
									{#if i === 0}
										<div class="text-xs text-start text-blue-500 my-auto font-bold">Recent</div>
									{/if}
								</div>
							</button>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="w-full md:w-[60%] p-4">
			{#if !installWallet}
			<div in:fade>
				<h1 class="text-center text-lg text-black">What is Wallet?</h1>

				<div class="w-[80%] mx-auto p-4 space-y-4">
					<div class="flex gap-4">
						<img class="w-[40px]" src="/assets/Modal/ModalLogin1img.svg" alt="ML1" />
						<div>
							<div class="font-bold text-md text-black md:text-white">
								A Home for your Digital Assets
							</div>
							<div class="font-bold text-gray-500 text-sm text-justify">
								Wallets are used to send, receive, store, and display digital assets like Ethereum
								and NFTs.
							</div>
						</div>
					</div>
					<div class="flex gap-4">
						<img class="w-[40px]" src="/assets/Modal/ModalLogin2img.svg" alt="ML2" />
						<div>
							<div class="font-bold text-md text-black md:text-white">A New Way to Log In</div>
							<div class="font-bold text-gray-500 text-sm text-justify">
								Instead of creating new accounts and passwords on every website, just connect your
								wallet.
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col justify-center items-center gap-4">
					<button
						class="bg-blue-500 px-2 rounded-full"
						on:click={() => {
							installWallet = !installWallet;
						}}
						><span class="text-xs text-white font-bold"> Get a Wallet </span>
					</button>
					<button on:click={()=>{
						window.open('https://metamask.io/', '_blank')
					}}>
						<span class="text-xs text-blue-500 font-bold"> Learn more </span>
					</button>
				</div>
			</div>
			{:else}
				<div class="p-2 h-[350px]" in:fade>
					<div class="flex">
						<button
							on:click={() => {
								installWallet = false;
							}}
						>
							<Icon icon="ep:arrow-left-bold" width="25" height="25" style="color: #2882d7" />
						</button>
						<h1 class="w-full text-center text-lg text-black">Get A Wallet</h1>
					</div>
					{#each walletType as w}
						<div class="flex justify-between w-full p-4">
							<div class="flex gap-4">
								<div class="flex items-center justify-center">
									{#if w === 'Coinbase Wallet'}
										<Icon icon="tabler:brand-coinbase" color="#185cf4" width="30" />
									{:else if w === 'Rainbow'}
										<Icon icon="fluent-emoji-flat:rainbow" color="#3894fc" width="30" />
									{:else if w === 'WalletConnect'}
										<Icon icon="simple-icons:walletconnect" color="#3894fc" width="30" />
									{:else if w === 'Metamask'}
										<Icon icon="logos:metamask-icon" width="30" />
									{/if}
								</div>
								<div>
									<div class="text-sm font-bold text-black">{w}</div>
									<div class="text-sm font-bold text-gray-500">Mobile Wallet and Extension</div>
								</div>
							</div>
							<div class="my-auto">
								<button
									class="bg-gray-300 rounded-full px-4"
									on:click={() => {
										window.open('https://metamask.io/', '_blank')
									}}
								>
									<span class="font-bold text-xs text-black md:text-white"> GET </span>
								</button>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{:else}
	<div class="flex flex-col gap-y-6 justify-center items-center h-[60vh] md:h-[25vh]">
		{#if rejectRequest}
			<div class="font-bold text-black">User has rejected the Request</div>
			<div class="block md:hidden font-bold text-black">Please Close this and Try Again</div>
			<div>
				<Icon icon="line-md:cancel-twotone" width="85" height="85" style="color: #ce2c2c" />
			</div>
		{:else if acceptRequest}
			<div class="font-bold text-black">Login Session Complete</div>
			<div>
				<Icon icon="line-md:confirm" width="85" height="85"  style="color: #2cce54" />
			</div>
		{:else}
			<div class="font-semibold text-black">Processing Log in session</div>
			<div class="animate-spin">
				<Icon
					icon="icon-park-outline:loading-four"
					width="85"
					height="85"
					class="text-yellow-500"
				/>
			</div>
		{/if}
	</div>
{/if}

<style>
    @keyframes scales {
        0% {
            transform: scale(1);
        }
        50% {
			transform: scale(1.02);
        }
        100% {
			transform: scale(1);
        }
    }

    /* Apply the animation on hover */
    .scalehover:hover {
        animation: scales 0.5s ease-in-out;
    }
</style>