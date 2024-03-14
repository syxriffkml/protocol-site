<script lang="ts">
    import Button from "$lib/Components/Button/Button.svelte";
	import Icon from '@iconify/svelte';
	import Section from "$lib/Components/Box/Box.svelte";
    import Modal from "$lib/Components/Modal/Index/Modal.svelte";
    import { fade } from 'svelte/transition';
	import HoverPopup from "$lib/Components/Popups/HoverPopup.svelte";

    import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import type { DrawerSettings, DrawerStore } from '@skeletonlabs/skeleton';
    import { initializeStores } from '@skeletonlabs/skeleton';

    import LoginModal from "$lib/Components/Modal/WalletModal/loginModal.svelte";
    import LogoutModal from "$lib/Components/Modal/WalletModal/logoutModal.svelte";


    //Modal declaration
    let stakeModal1: Modal;
    let stakeModal2: Modal;

    //text input declaration
    let inputUSDC: string = '';
    let inputUSDC_BUCK: string = '';

    function handleInput(event: any) {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        if (event.target.name === 'stakeUSDC') {
            inputUSDC = event.target.value;
        }
        else if (event.target.name === 'stakeUSDC_BUCK') {
            inputUSDC_BUCK = event.target.value;
        }
    }

    let supplyBtn: "USDC" | "USDC + BUCK" = "USDC";

    let isDown = true;

    function toggleIcon() {
        isDown = !isDown;
        console.log("KriyaDex");
    }

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



<div class="h-full w-full flex flex-col xl:max-w-[90rem] items-start mx-auto xl:mt-16 p-6 gap-y-12">
    <p class="text-3xl font-medium">Stake LP token to earn</p>

    <div class="flex flex-col gap-y-8 w-full">
        <!--Aftermath-->
        <div class="flex flex-col gap-y-4 w-full">
            <p class="flex items-center gap-x-2">
                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Faftermath-icon.png&w=32&q=75" alt="img" class="w-[30px] h-auto">
                <span class="text-xl font-semibold">Aftermath</span>
            </p>
            <button class="text-left" on:click={stakeModal1.openModal}>
                <Section customClass="!py-4 !px-8 hover:bg-[#4a5052] group">
                    <div class="flex flex-col md:flex-row justify-between w-full gap-y-6 md:gap-y-0">
                        <div class="flex flex-col gap-y-2">
                            <p class="text-[#aeecff] font-medium">Pool</p>
                            <p class="flex flex-row">
                                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[40px] h-auto z-[0]">
                                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbuck-icon.png&w=48&q=75" alt="img" class="w-[40px] h-auto z-[1] -translate-x-4">
                                <span class="text-xl xl:text-2xl font-medium">USDC-BUCK</span>
                            </p>
                        </div>
    
    
                        <div class="flex flex-row gap-x-12 lg:gap-x-36">
                            <div class="flex flex-col gap-y-2">
                                <p class="text-[#aeecff] font-medium flex flex-row items-center gap-x-2">
                                    TVL
                                    <HoverPopup header="TVL" content="This is TVL in DEX, different from fountain" >
                                        <Icon icon="ep:question-filled" class="w-4 h-4"/>
                                    </HoverPopup>
                                </p>
                                <p class="text-xl xl:text-2xl font-medium">$ 5,748,252</p>
                            </div>
                            <div class="flex flex-col gap-y-2">
                                <p class="text-[#aeecff] font-medium flex flex-row items-center gap-x-2">
                                    APR
                                    <HoverPopup header="APR" content="Swap fee apr is 0.50%. Bonus 53338 SUI emission this week." >
                                        <Icon icon="ep:question-filled" class="w-4 h-4"/>
                                    </HoverPopup>
                                </p>
                                <p class="text-xl xl:text-2xl font-medium">73.59 %</p>
                            </div>
                        </div>
    
    
                        <div class="flex flex-col items-center justify-center">
                            <!-- <Button width="w-full md:min-w-[200px]" customClass="group-hover:scale-105 transition" handler={(()=>{stakeModal1.openModal();})}>Add and Stake</Button> -->
                            <div class="bg-[#aeecff] text-black py-2 px-4 group-hover:scale-105 transition w-full md:min-w-[200px] rounded-full flex justify-center items-center">Add and Stake</div>
                        </div>
                    </div>
                </Section>
            </button>
        </div>
        <!--Cetus-->
        <div class="flex flex-col gap-y-2 w-full">
            <p class="flex items-center gap-x-2">
                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fcetus-icon.png&w=32&q=75" alt="img" class="w-[30px] h-auto">
                <span class="text-xl font-semibold">Cetus</span>
            </p>
            <button class="text-left" on:click={stakeModal2.openModal}>
                <Section customClass="!py-4 !px-8 hover:bg-[#4a5052] group">
                    <div class="flex flex-col md:flex-row justify-between w-full gap-y-6 md:gap-y-0">
                        <div class="flex flex-col gap-y-2">
                            <p class="text-[#aeecff] font-medium">Pool</p>
                            <p class="flex flex-row">
                                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbuck-icon.png&w=48&q=75" alt="img" class="w-[40px] h-auto z-[0]"> 
                                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[40px] h-auto z-[1] -translate-x-4">
                                <span class="text-xl xl:text-2xl font-medium">BUCK-USDC</span>
                            </p>
                        </div>
    
    
                        <div class="flex flex-row gap-x-12 lg:gap-x-36">
                            <div class="flex flex-col gap-y-2">
                                <p class="text-[#aeecff] font-medium flex flex-row items-center gap-x-2">
                                    TVL
                                    <HoverPopup header="TVL" content="This is TVL in DEX, different from fountain" >
                                        <Icon icon="ep:question-filled" class="w-4 h-4"/>
                                    </HoverPopup>
                                </p>
                                <p class="text-xl xl:text-2xl font-medium">$ 9,652,448</p>
                            </div>
                            <div class="flex flex-col gap-y-2">
                                <p class="text-[#aeecff] font-medium flex flex-row items-center gap-x-2">
                                    APR
                                    <HoverPopup header="APR" content="Bonus 53338 SUI emission this week." >
                                        <Icon icon="ep:question-filled" class="w-4 h-4"/>
                                    </HoverPopup>
                                </p>
                                <p class="text-xl xl:text-2xl font-medium">72.97 %</p>
                            </div>
                        </div>
    
    
                        <div class="flex flex-col items-center justify-center">
                            <!-- <Button width="w-full md:min-w-[200px]" customClass="group-hover:scale-105 transition" handler={(()=>{stakeModal2.openModal();})}>Add and Stake</Button> -->
                            <div class="bg-[#aeecff] text-black py-2 px-4 group-hover:scale-105 transition w-full md:min-w-[200px] rounded-full flex justify-center items-center">Add and Stake</div>
                        </div>
                    </div>
                </Section>
            </button>
        </div>
        <!--KriyaDEX-->
        <div class="flex flex-col gap-y-2 w-full">
            <p class="flex items-center gap-x-2">
                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fkriya-icon.png&w=32&q=75" alt="img" class="w-[30px] h-[35px]">
                <span class="text-xl font-semibold">KriyaDEX</span>
            </p>
            <button class="text-left" on:click={toggleIcon}>
                <Section customClass="!py-4 !px-8 hover:bg-[#4a5052] group">
                    <div class="flex flex-col md:flex-row justify-between w-full gap-y-6 md:gap-y-0">
                        <div class="flex flex-col gap-y-2">
                            <p class="text-[#aeecff] font-medium">Pool</p>
                            <p class="flex flex-row">
                                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbuck-icon.png&w=48&q=75" alt="img" class="w-[40px] h-auto z-[0]"> 
                                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[40px] h-auto z-[1] -translate-x-4">
                                <span class="text-xl xl:text-2xl font-medium">BUCK-USDC</span>
                            </p>
                        </div>
    
    
                        <div class="flex flex-row gap-x-12 lg:gap-x-36">
                            <div class="flex flex-col gap-y-2">
                                <p class="text-[#aeecff] font-medium flex flex-row items-center gap-x-2">
                                    TVL
                                    <HoverPopup header="TVL" content="This is TVL in DEX, different from fountain" >
                                        <Icon icon="ep:question-filled" class="w-4 h-4"/>
                                    </HoverPopup>
                                </p>
                                <p class="text-xl xl:text-2xl font-medium">$ 9,652,448</p>
                            </div>
                            <div class="flex flex-col gap-y-2">
                                <p class="text-[#aeecff] font-medium flex flex-row items-center gap-x-2">
                                    APR
                                    <!-- <HoverPopup header="APR" content="Bonus 53338 SUI emission this week." >
                                        <Icon icon="ep:question-filled" class="w-4 h-4"/>
                                    </HoverPopup> -->
                                </p>
                                <p class="text-xl xl:text-2xl font-medium">72.97 %</p>
                            </div>
                        </div>
    
    
                        <div class="hidden md:flex flex-row items-center justify-end pr-6 w-[200px]">
                            {#if isDown}
                                <div in:fade={{ duration: 500 }}>
                                    <Icon icon="mingcute:down-line" class="w-8 h-8 text-[#aeecff]"/>
                                </div>
                            {:else}
                                <div in:fade={{ duration: 500 }}>
                                    <Icon icon="mingcute:up-line" class="w-8 h-8 text-[#aeecff]"/>
                                </div>
                            {/if}
                        </div>
                    </div>
                </Section>
            </button>
        </div>
    </div>

</div>


<Modal bind:this={stakeModal1} type="dark" mobileWidth="w-5/6" desktopWidth="sm:max-w-[452px]">
    <div class="px-4 flex flex-col gap-y-6 mb-6">
        <p class="font-bold text-2xl md:text-3xl">Provide Liquidity</p>

        <div class="flex flex-col gap-y-2">
            <p class="font-semibold text-lg">Choose method to supply</p>
            <div class="flex flex-row flex-wrap gap-4">
                <button on:click={() => supplyBtn = "USDC"} class="flex flex-row items-center gap-x-2 px-2 py-1 rounded-md {supplyBtn === 'USDC' ? 'bg-white/25' : 'bg-white/10'}">
                    <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[20px] h-auto">
                    <p class="text-md ">USDC</p>
                </button>
                <button on:click={() => supplyBtn = "USDC + BUCK"} class="flex flex-row items-center gap-x-2 px-2 py-1 rounded-md {supplyBtn === 'USDC' ? 'bg-white/10' : 'bg-white/25'}">
                    <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[20px] h-auto">
                    <p class="text-md ">USDC + BUCK</p>
                </button>
            </div>
        </div>

        <!--USDC-->
        <div class="flex flex-col w-full gap-y-1">
            <div class="flex flex-row justify-between items-center">
                <p class="font-semibold text-lg">USDC budget</p>
                <p class="text-sm"><span class="text-[#aeecff]">Balance:</span>&nbsp;0</p>
            </div>
            <div class="relative flex w-full h-12 items-center justify-between rounded-lg border border-white/5 bg-white/5 px-2 ">
                <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="stakeUSDC" on:input={handleInput}/>

                <div class="flex flex-row gap-x-2">
                    <button on:click={() => console.log("Max 1")} class="font-semibold text-[#7eb7cd]">Max</button>
                    <div class="flex flex-row w-auto items-center justify-center gap-x-2 bg-white/5 rounded-lg px-4 py-1">
                        <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[20px] h-auto">
                        <p>USDC</p>
                    </div>
                </div>
            </div>
        </div>

        {#if supplyBtn === "USDC + BUCK"}
            <!--BUCK-->
            <div class="flex flex-col w-full gap-y-1">
                <div class="flex flex-row justify-between items-center">
                    <p class="font-semibold text-lg">BUCK budget</p>
                    <p class="text-sm"><span class="text-[#aeecff]">Balance:</span>&nbsp;0</p>
                </div>
                <div class="relative flex w-full h-12 items-center justify-between rounded-lg border border-white/5 bg-white/5 px-2 ">
                    <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="stakeUSDC_BUCK" on:input={handleInput}/>

                    <div class="flex flex-row gap-x-2">
                        <button on:click={() => console.log("Max 2")} class="font-semibold text-[#7eb7cd]">Max</button>
                        <div class="flex flex-row w-auto items-center justify-center gap-x-2 bg-white/5 rounded-lg px-4 py-1">
                            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbuck-icon.png&w=48&q=75" alt="img" class="w-[20px] h-auto">
                            <p>BUCK</p>
                        </div>
                    </div>
                </div>
            </div>
        {/if}

        <div class="flex items-center justify-center">
            <Button mode="blue" handler={(()=>{ ProvideSession(); })}>
                <p class="text-lg">Connect Wallet</p>
            </Button>
        </div>

        <div class="border border-white/5 px-4 py-6 rounded-lg space-y-2">
            <p class="font-medium text-lg text-[#6c939f]">Liquidity added</p>
            <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-[#6c939f]">Total Value</p>
                <p class="text-sm font-medium text-white/50">~$ 0 USDC-BUCK</p>
            </div>
            <div class="border border-[#6c939f] mt-2"></div>
            <div class="flex items-center justify-between">
                <p class="text-lg font-medium text-[#aeecff] flex items-center gap-x-1">
                    Estimated APR
                    <HoverPopup header="Estimated APR" content="Your liquidity estimated APR is 0.13 % swap fee + 58.82 % in SUI token!" >
                        <Icon icon="ep:question-filled" class="w-4 h-4"/>
                    </HoverPopup>
                </p>
                <p class="text-lg font-medium">71.76%</p>
            </div>

        </div>

    </div>
</Modal>

<Modal bind:this={stakeModal2} type="dark" mobileWidth="w-5/6" desktopWidth="sm:max-w-[452px]">
    <div class="px-4 flex flex-col gap-y-6 mb-6">
        <p class="font-bold text-2xl md:text-3xl">Provide Liquidity</p>

        <div class="flex flex-col gap-y-2">
            <p class="font-semibold text-lg">Choose method to supply</p>
            <div class="flex flex-row flex-wrap gap-4">
                <button class="flex flex-row items-center gap-x-2 px-2 py-1 rounded-md bg-white/25">
                    <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[20px] h-auto">
                    <p class="text-md ">USDC</p>
                </button>
            </div>
        </div>

        <!--USDC-->
        <div class="flex flex-col w-full gap-y-1">
            <div class="flex flex-row justify-between items-center">
                <p class="font-semibold text-lg">USDC budget</p>
                <p class="text-sm"><span class="text-[#aeecff]">Balance:</span>&nbsp;0</p>
            </div>
            <div class="relative flex w-full h-12 items-center justify-between rounded-lg border border-white/5 bg-white/5 px-2 ">
                <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="stakeUSDC" on:input={handleInput}/>

                <div class="flex flex-row gap-x-2">
                    <button on:click={() => console.log("Max 3")} class="font-semibold text-[#7eb7cd]">Max</button>
                    <div class="flex flex-row w-auto items-center justify-center gap-x-2 bg-white/5 rounded-lg px-4 py-1">
                        <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[20px] h-auto">
                        <p>USDC</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center">
            <Button mode="blue" handler={(()=>{ ProvideSession(); })}>
                <p class="text-lg">Connect Wallet</p>
            </Button>
        </div>

        <div class="border border-white/5 px-4 py-6 rounded-lg space-y-2">
            <p class="font-medium text-lg text-[#6c939f]">Liquidity added</p>
            <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-[#6c939f]">Total Value</p>
                <p class="text-sm font-medium text-white/50">~$ 0 USDC-BUCK</p>
            </div>
            <div class="border border-[#6c939f] mt-2"></div>
            <div class="flex items-center justify-between">
                <p class="text-lg font-medium text-[#aeecff] flex items-center gap-x-1">
                    Estimated APR
                    <HoverPopup header="Estimated APR" content="Your liquidity estimated APR is 0.13 % swap fee + 58.82 % in SUI token!" >
                        <Icon icon="ep:question-filled" class="w-4 h-4"/>
                    </HoverPopup>
                </p>
                <p class="text-lg font-medium">71.76%</p>
            </div>

        </div>

    </div>
</Modal>


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

<!--Wallet Drawer-->
<Drawer>
    {#if !isConnectAddress}
        <LoginModal bind:isConnectAddress LoginModal={_loginModal} />
    {:else}
        <LogoutModal logoutModal={_logoutModal}></LogoutModal>
    {/if}
</Drawer>