<script lang="ts">
    import Button from "../Button/Button.svelte";
    import Icon from '@iconify/svelte';

    import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
    import { initializeStores } from '@skeletonlabs/skeleton';

    import SideBar from '$lib/Components/SideBar/SideBar.svelte';
    import Modal from '$lib/Components/Modal/Index/Modal.svelte';
    import LoginModal from "$lib/Components/Modal/WalletModal/loginModal.svelte";
    import LogoutModal from "$lib/Components/Modal/WalletModal/logoutModal.svelte";

    initializeStores();
    const drawerStore = getDrawerStore();

    function hideDrawer() {
		drawerStore.close();
	}

    const drawerSettings: DrawerSettings = {
		id: 'sidebar-drawer',
		// Provide your property overrides:
		bgDrawer: 'bg-[#0a0a0a] text-white z-[100]',
		bgBackdrop: 'bg-black/50 z-[100]',
		width: 'h-auto sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 w-full',
		padding: '',
		rounded: 'rounded-none',
		position: 'left'
	};


    //Start of Connect Wallet part
    let _loginModal: Modal;
    let _logoutModal: Modal;

    let isConnectAddress: boolean = false;

    const wallet_settings: DrawerSettings = {
		id: 'wallet-drawer',
		bgBackdrop: 'bg-black/40',
		bgDrawer: 'bg-white',
		width: 'w-full h-auto',
        position: 'bottom',
	};

    function ProvideSession() {
        drawerStore.close();
        if (window.innerWidth <= 640) {
            if (!isConnectAddress) {
                drawerStore.open(wallet_settings);
            } else {
                drawerStore.open(wallet_settings);
            }
        } else {
            if (!isConnectAddress) {
                _loginModal.openModal();
            } else {
                _logoutModal.openModal();
            }
        }
	}
    //End of Connect Wallet part
</script>

<div class="flex flex-row xl:justify-between p-4 h-[78px] backdrop-blur-md bg-transparent sticky top-0 z-10">
    <!--Desktop View-->
    <div class="hidden xl:flex flex-row bg-black/25 w-auto rounded-3xl py-2 px-4 gap-x-4">
        <div class="flex flex-row items-center justify-center gap-x-2">
            <img src="https://app.bucketprotocol.io/images/sui-icon.svg" alt="coins" class="w-[30px] h-auto">
            <p>$1.56</p>
        </div>
        <div class="flex flex-row items-center justify-center gap-x-2">
            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Feth-light.png&w=64&q=75" alt="coins" class="w-[30px] h-auto">
            <p>$3,697.73</p>
        </div>
    </div>
    <Button width="w-auto" mode="blue" customClass="hidden xl:block" handler={(event) => { ProvideSession(); }}>Connect Wallet</Button>
    <!--End of Desktop View-->

    <!--Mobile View-->
    <button class="flex xl:hidden items-center justify-center p-2 hover:bg-black/25 rounded-lg z-[1]" on:click={(()=>{ drawerStore.open(drawerSettings); })}>
        <Icon icon="solar:hamburger-menu-linear" class="w-8 h-8"/>
    </button>

    <p class="flex xl:hidden items-center justify-center w-full text-xl font-semibold -translate-x-6">Protocol</p>
    <!--End of Mobile View-->
</div>

<Drawer>
    {#if $drawerStore.id === 'sidebar-drawer'}
        <SideBar inDrawer={true}>
            <button slot="closeButton" on:click={hideDrawer}>
                <Icon icon="ic:round-close" class="w-8 h-8"/>
            </button>
            <div slot="navbar-items" class="my-20">
                <div class="flex flex-col items-center gap-y-4 ">
                    <div class="flex flex-row bg-white/10 w-fit rounded-3xl py-2 px-4 gap-x-4">
                        <div class="flex flex-row items-center justify-center gap-x-2">
                            <img src="https://app.bucketprotocol.io/images/sui-icon.svg" alt="coins" class="w-[30px] h-auto">
                            <p>$1.56</p>
                        </div>
                        <div class="flex flex-row items-center justify-center gap-x-2">
                            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Feth-light.png&w=64&q=75" alt="coins" class="w-[30px] h-auto">
                            <p>$3,697.73</p>
                        </div>
                    </div>
                    <Button width="w-fit" mode="blue" handler={(event) => { ProvideSession(); }}>Connect Wallet</Button>
                </div>
            </div>  
        </SideBar>
    {:else if $drawerStore.id === 'wallet-drawer'}
        {#if !isConnectAddress}
            <LoginModal bind:isConnectAddress LoginModal={_loginModal} />
        {:else}
            <LogoutModal logoutModal={_logoutModal}></LogoutModal>
        {/if}
    {/if}
</Drawer>


<!--Wallet Login Modal-->
<Modal
	bind:this={_loginModal}
	mobileWidth="w-auto sm:w-4/5"
	desktopWidth="max-w-auto md:max-w-[800px] "
	title="Connect a Wallet"
	type="light"
>
	<LoginModal bind:isConnectAddress LoginModal={_loginModal} />
</Modal>

<!--Wallet Logout Modal-->
<Modal
	bind:this={_logoutModal}
	mobileWidth="w-auto sm:w-4/5"
	desktopWidth="max-w-auto md:max-w-[400px] "
	type="light"
>
	<LogoutModal logoutModal={_logoutModal}></LogoutModal>
</Modal>