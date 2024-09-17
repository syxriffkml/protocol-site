<script lang="ts">
    import Section from "$lib/Components/Box/Box.svelte"
    import Button from "$lib/Components/Button/Button.svelte"
	import ComboBox from "$lib/Components/ComboBox/ComboBox.svelte";
	import Icon from '@iconify/svelte';

    import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
    import { initializeStores } from '@skeletonlabs/skeleton';

    import Modal from '$lib/Components/Modal/Index/Modal.svelte';
    import LoginModal from "$lib/Components/Modal/WalletModal/loginModal.svelte";
    import LogoutModal from "$lib/Components/Modal/WalletModal/logoutModal.svelte";

    let tab:string[] = ['PSM', 'Redeem'];
    
    let tabActive: string = tab[0]; 

    let isActive:boolean = false;

    let swap:boolean = false;

    let headSelect: string = 'vSUI';

    let imgBUCK:string = 'assets/img/coins/buck.png';

    let imgTANK:string = 'assets/img/coins/vsui.png';
    
    let imgSelect: string = imgTANK;

    let showDiv: boolean = false;

    let inputPrimary:string ='';

    let inputSecondary:string ='';

    function istabActive(selected:string) {
        tabActive = selected;
        isActive = true;
    }

    $: inputPrimary = inputPrimary.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    $: inputSecondary = inputSecondary.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

    let infoPSM = [
        {title:'Rate', data: 1, dataRate:0.999},
        {title:'Balance', data: 0.00},
        {title:'Mint fee', data: 0.10},
        {title:'Switch fee', data: 1},
    ]

    let infoRedeem = [
        {title:'Collateral Price', data: 1.57, dataRate:0.999},
        {title:'Redemption Fee', data: 0.5},
        {title:'Redemption Fee Amount', data: 0.00000},
        {title:'Expected Collateral Received', data: 0.0000},
    ]

    let collateral = [
        {name:'sui', img:`assets/img/coins/sui.png`, selected: true},
        {name:'weth', img:`assets/img/coins/eth2.png`, selected: false},
        {name:'usdc', img:`assets/img/coins/usdc.png`, selected: false},
        {name:'usdt', img:`assets/img/coins/usdt.png`, selected: false},
    ];

    function selectCollateral(selectedCollateral: any) {
        for (let coll of collateral) {
            coll.selected = (coll === selectedCollateral);
        }
        collateral = collateral; // This line tells Svelte to re-render the component
    }

     /**
	 * @var pool will be temporarily used until API is ready
	 */
	let pool = [
		{ header: 'SUI', totalDepo: 6.19, depo: 0, earn: 0, img: "assets/img/coins/vsui.png" },
		{ header: 'afSUI', totalDepo: 6.19, depo: 0, earn: 0, img: "assets/img/coins/vsui.png" },
		{ header: 'vSUI', totalDepo: 6.19, depo: 0, earn: 0, img: "assets/img/coins/vsui.png" },
		{ header: 'haSUI', totalDepo: 6.19, depo: 0, earn: 0, img: "assets/img/coins/vsui.png" },
		{ header: 'afSUI/SUI', totalDepo: 6.19, depo: 0, earn: 0, img: "assets/img/coins/vsui.png" },
		{ header: 'WETH', totalDepo: 6.19, depo: 0, earn: 0, img: "assets/img/coins/vsui.png" },
		{ header: 'USDC', totalDepo: 6.19, depo: 0, earn: 0, img: "assets/img/coins/vsui.png" },
		{ header: 'USDT', totalDepo: 6.19, depo: 0, earn: 0, img: "assets/img/coins/vsui.png" },
		{ header: 'USDY', totalDepo: 6.19, depo: 0, earn: 0, img: "assets/img/coins/vsui.png" }
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

<div class="mx-auto flex flex-col justify-center items-center h-full p-6">
    <div class="xl:hidden text-4xl font-semibold p-10">
        Peg
    </div>
    <Section customClass="xl:w-[600px]">
        <div class="flex gap-6 mb-4">
            {#each tab as tab}
                <div>
                    <button class="flex gap-2 p-1 text-[#aeecff]  {tabActive === tab?'text-opacity-100':'text-opacity-20 '} !transition-all !duration-700" on:click={(()=>{
                        istabActive(tab)
                    })}>
                        <div class="font-semibold">
                            {tab}
                        </div>
                        <div class="my-auto">
                            {#if tab === 'PSM'}
                            <Icon icon="tabler:arrows-cross" width="20" height="20" />
                            {:else}
                                <Icon icon="cil:transfer" width="20" height="20" />
                            {/if}
                        </div>
                    </button>

                    {#if tabActive === tab}
                    <div class="border-b-2 border-[#aeecff]" />
                    {/if}
                </div>
            {/each}
        </div>

        {#if tabActive === 'PSM'}
             <div>
                <div class="flex flex-col md:flex-row md:space-y-0 md:gap-4 gap-y-4 justify-between">
                    <!-- input 1 -->
                    <div class="flex w-full bg-[#aee]/10 backdrop-blur-sm rounded-lg p-1 {swap?'order-3':'order-1'}">
                        <input bind:value={inputPrimary} class="w-full bg-transparent focus:ring-0 rounded-l-lg !border-none" placeholder="0.00"/>
                        <ComboBox {headSelect} {imgSelect} bind:showCombo={showDiv}>
                            <div class="z-[9999]">
                                {#each pool as tank}
                                    <button class="flex justify-start items-center gap-x-2 p-2 w-full" 
                                    on:click={(()=>{
                                            headSelect = tank.header; 
                                            imgSelect = imgTANK;                                         
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

                    <!-- button swap -->
                    <div class="md:w-fit w-full flex justify-center items-center order-2">
                        <button class=" bg-gray-700 rounded-full h-fit my-auto text-[#aee]" on:click={(()=>{swap = !swap})}>
                            <div class="w-auto rounded-full p-1 flex items-center justify-center rotate-90 md:rotate-0">
                                <Icon icon="flowbite:arrow-right-solid" class="w-6 h-6"/>
                            </div>
                        </button>
                    </div>

                    <!-- input 2 -->
                    <div class="flex w-full bg-[#aee]/10  rounded-lg p-1 order-1 {swap?'order-1':'order-3'} {showDiv? 'z-[-5]': 'z-[0]'}">
                        <input bind:value={inputSecondary} class="w-full bg-transparent focus:ring-0 rounded-l-lg !border-none" placeholder="0.00"/>
                        <button class="px-4 text-slate-500 font-bold text-lg">
                            MAX
                        </button>
                        <div class="flex justify-center items-center gap-2 bg-[#232f33] rounded-md px-2">
                            <div class="w-9 h-9 flex justify-center items-center">
                                <img src="assets/img/coins/buck.png" alt="">
                            </div>
                            <div class="font-bold text-center w-full">
                                BUCK 
                            </div>
                        </div>    
                    </div>
                </div>
                <div class="flex justify-center items-center my-8">
                    <Button customClass="w-[150px]" handler={(()=>{ ProvideSession(); })}>
                        Connect
                    </Button>
                </div>
                <Section customClass="p-2">
                    <div class="flex flex-col w-full text-sm font-semibold gap-y-2">
                        {#each infoPSM as info}
                            <div class="flex justify-between">
                                <div class="text-[#aeecff]">
                                    {#if info.title === 'Switch fee' && swap }
                                        {info.title}
                                    {:else if info.title !== 'Switch fee'}
                                        {info.title}
                                    {/if}
                                </div>
                                
                                <div>
                                    {#if info.title === 'Rate'}
                                        1 BUCK = {info.dataRate} {headSelect}
                                    {:else if info.title === 'Balance'}
                                        {(info.data).toFixed(2)} {headSelect}
                                    {:else if info.title === 'Mint fee'}
                                        {(info.data).toFixed(2)} %
                                    {:else if info.title === 'Switch fee' && swap }
                                        {info.data} %
                                    {/if}
                                </div>
                            </div>
                        {/each}
                    </div>
                </Section>
             </div>
        {:else if tabActive === 'Redeem'}
            <div class="flex flex-col justify-between max-w-[700px] min-h-[450px]">
                <div class="flex flex-col gap-y-2">
                    <p class="text-lg font-semibold">
                        Choose the collateral
                    </p>
                    <div class="flex gap-x-2 flex-wrap gap-y-2">
                        {#each collateral as coll}
                            <button class="border border-gray-500/30 flex gap-x-2 py-1.5 px-4 rounded-md hover:bg-white/10 {coll.selected ? 'bg-white/25 hover:bg-white/25' : ''}" on:click={() => selectCollateral(coll)}>
                                <div class="w-6 h-6">
                                    <img src={coll.img} alt="">
                                </div>
                                <div class="uppercase ">
                                    {coll.name}
                                </div>
                            </button>
                        {/each}
                    </div>
                </div>
                <div class="flex flex-col gap-y-2">
                    <div class="flex justify-between">
                        <p class="text-lg font-semibold">
                            Redeem
                        </p>
                        <div class="flex justify-end items-end gap-x-2 text-xs text-right">
                            <p>
                                BUCK Balance :
                            </p>

                            <div>
                                0
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full bg-[#aee]/10 backdrop-blur-sm rounded-lg p-1">
                        <input bind:value={inputPrimary} class="w-full bg-transparent focus:ring-0 rounded-l-lg !border-none" placeholder="0.00"/>
                        <div class="flex justify-center items-center gap-2 bg-[#232f33] rounded-md px-2">
                            <div class="w-9 h-9 flex justify-center items-center">
                                <img src="assets/img/coins/buck.png" alt="">
                            </div>
                            <div class="font-bold text-center w-full">
                                BUCK
                            </div>
                
                        </div>    
                    </div>
                    <div class="flex justify-center items-center mt-4">
                        <Button customClass="w-[150px]" handler={(()=>{ ProvideSession(); })}>
                            Connect
                        </Button>
                    </div>
                </div>
                <Section customClass="p-2">
                    <div class="flex flex-col w-full text-sm font-semibold gap-y-2">
                        {#each infoRedeem as info}
                            <div class="flex justify-between">
                                <div class="text-[#aeecff]">
                                    {info.title}
                                </div>
                                
                                <div>
                                    {#if info.title === 'Collateral Price'}
                                        ${info.data}
                                    {:else if  info.title === 'Redemption Fee'}
                                        {info.data}%
                                    {:else}
                                         {info.data.toFixed(4)}
                                    {/if}
                                </div>
                            </div>
                        {/each}
                    </div>
                </Section>
            </div>
        {:else}
            <div>
                loading<!-- Creating this div only for loading (or you can do another if) -->
            </div>
        {/if}
    </Section>
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