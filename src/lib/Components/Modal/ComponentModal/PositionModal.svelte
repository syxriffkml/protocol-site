<script lang="ts">
	import Button from '$lib/Components/Button/Button.svelte';
	import ComboBox from '$lib/Components/ComboBox/ComboBox.svelte';
	import HoverPopup from '$lib/Components/Popups/HoverPopup.svelte';
    import Icon from "@iconify/svelte";
	import { fade, slide } from 'svelte/transition';

    import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
    import { initializeStores } from '@skeletonlabs/skeleton';

    import Modal from '$lib/Components/Modal/Index/Modal.svelte';
    import LoginModal from "$lib/Components/Modal/WalletModal/loginModal.svelte";
    import LogoutModal from "$lib/Components/Modal/WalletModal/logoutModal.svelte";
    
    let headSelect: string = 'BUCK'

    let inputBalance:string = ''

    $: inputBalance = inputBalance.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

    let inputBorrow:string = ''

    $: inputBorrow = inputBorrow.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    
    let showTank : boolean = false;
    
    let imgBUCK:string = 'https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbuck-icon.png&w=32&q=75'
    let imgTANK:string = 'https://app.bucketprotocol.io/images/vsui-icon.svg'
    
    let imgSelect: string = imgBUCK;
    /**
	 * @var pool will be temporarily used until API ready
	 */
	let pool = [
		{ header: 'SUI', totalDepo: 6.19, depo: 0, earn: 0, img: "https://app.bucketprotocol.io/images/vsui-icon.svg" },
		{ header: 'afSUI', totalDepo: 6.19, depo: 0, earn: 0, img: "https://app.bucketprotocol.io/images/afsui-icon.svg" },
		{ header: 'vSUI', totalDepo: 6.19, depo: 0, earn: 0, img: "https://app.bucketprotocol.io/images/vsui-icon.svg" },
		{ header: 'haSUI', totalDepo: 6.19, depo: 0, earn: 0, img: "https://app.bucketprotocol.io/images/vsui-icon.svg" },
		{ header: 'afSUI/SUI', totalDepo: 6.19, depo: 0, earn: 0, img: "https://app.bucketprotocol.io/images/vsui-icon.svg" },
		{ header: 'WETH', totalDepo: 6.19, depo: 0, earn: 0, img: "https://app.bucketprotocol.io/images/vsui-icon.svg" },
		{ header: 'USDC', totalDepo: 6.19, depo: 0, earn: 0, img: "https://app.bucketprotocol.io/images/vsui-icon.svg" },
		{ header: 'USDT', totalDepo: 6.19, depo: 0, earn: 0, img: "https://app.bucketprotocol.io/images/vsui-icon.svg" },
		{ header: 'USDY', totalDepo: 6.19, depo: 0, earn: 0, img: "https://app.bucketprotocol.io/images/vsui-icon.svg" }
	];

	let contentPosition = [
		{ title: 'Your Collateral Ratio', data: 0.00 },
		{ title: 'Your debt', data: 0.00 },
		{ title: 'Liquidation price', data: 0.00 },
		{ title: 'Mind borrowed debt', data: 10.00 },
		{ title: 'Borrow fee', data: 0.5, dataRate: 0.00 },
		{ title: 'Min Collateral ratio', data: 110 },
		{ title: 'Recovery mode threshold', data: 150 }
	];


    
    //Start of Connect Wallet part
    initializeStores();
    const drawerStore = getDrawerStore();

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

<div class="flex flex-col gap-y-6 p-2">
	<div class="space-y-1">
        <div class="flex justify-between text-sm">
            <p class="font-semibold">Amount of collateral</p>
            <div class="flex items-center gap-2">
                <div class="text-[#aeecff]">{headSelect} Balance: </div>
                <div>0</div>
            </div>
        </div>
        <div class="flex w-full gap-x-2 bg-[#aee]/10 backdrop-blur-sm rounded-lg p-1 relative">
            <input bind:value={inputBalance} class="w-full bg-transparent rounded-l-lg !border-none focus:ring-0" placeholder="0.00"/>
            <ComboBox {headSelect} {imgSelect} bind:showCombo={showTank}>
                <div class="z-[9999]">
                    {#each pool as tank}
                        <button class="flex justify-start items-center gap-x-2 p-2 z-20 w-full" 
                        on:click={(()=>{
                            headSelect = tank.header; 
                            imgSelect = imgTANK; 
                            console.log(headSelect,imgSelect);
                            })}>
                            <div class="w-4 h-4 my-auto">
                                <img src={tank.img} alt="">
                            </div>
                            <div>
                                {tank.header}
                            </div>
    
                        </button>
                    {/each}
                </div>
            </ComboBox>
        </div>
    </div>
    
    <div class="space-y-1 {showTank? 'z-[-1]': 'z-[0]'}"> 
        <div class="flex justify-between text-sm font-semibold">
            <p>Borrow $BUCK</p>
            <div class="flex gap-2 text-[#aeecff]">
                <div class="text-[#aeecff]">Auto safe borrow</div>
                <HoverPopup
                content="Auto set collateral ratio as 120% for stable collateral or 180% for volatile assets.">
                    <div class="mt-1">
                        <Icon icon="material-symbols:help-rounded" />
                    </div>
                </HoverPopup>
            </div>
        </div>
        <div class="flex w-full gap-x-2 bg-[#aee]/10 backdrop-blur-sm rounded-lg p-1">
            <input bind:value={inputBorrow} class="w-full border bg-transparent rounded-l-lg z-10 !border-none focus:ring-0" placeholder="0.00"/>
            <div class="flex justify-center items-center gap-2 bg-[#232f33] rounded-md px-2">
                <div class="w-9 h-9 flex justify-center items-center">
                    <img
                        src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbuck-icon.png&w=32&q=75"
                        alt=""
                    />
                </div>
                <div class="font-bold text-center w-full">BUCK</div>
            </div>
        </div>
    </div>
    
    <div class="mx-auto">
        <Button customClass="w-[150px]" handler={(()=>{ ProvideSession(); })}>Connect</Button>
    </div>

	<div class="border border-gray-500/20 rounded-lg p-4 space-y-3">
        {#each contentPosition as positiondetails}
            <div class="flex justify-between font-semibold text-xs md:text-[13px]">
                <div class="text-[#aeecff]">
                    {positiondetails.title}
                </div>
                <div>
                    {#if positiondetails.title === 'Borrow fee'}
                    {positiondetails.data + "% (~" + positiondetails.dataRate?.toFixed(4) + " BUCK)"}
                    {:else if  positiondetails.title === 'Borrow fee' || positiondetails.title === 'Your Collateral Ratio' || positiondetails.title === 'Min Collateral ratio' || positiondetails.title === 'Recovery mode threshold'}
                        {positiondetails.data.toFixed(2)}%
                    {:else if  positiondetails.title === 'Liquidation price' }
                        $ {positiondetails.data.toFixed(2)}
                    {:else}
                        {positiondetails.data.toFixed(2)}
                    {/if}
                    
                </div>
            </div>
        {/each}
       
    </div>
</div>

<!--Wallet Drawer-->
<Drawer>
    {#if !isConnectAddress}
        <LoginModal bind:isConnectAddress LoginModal={_loginModal} />
    {:else}
        <LogoutModal logoutModal={_logoutModal}></LogoutModal>
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