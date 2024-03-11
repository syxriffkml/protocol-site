<script lang="ts">
    import Modal from "$lib/Components/Modal/Index/Modal.svelte";
    import Button from  "$lib/Components/Button/Button.svelte";
    import HoverPopup from '$lib/Components/Popups/HoverPopup.svelte';
    import Icon from '@iconify/svelte';
    import {unselectedNetwork} from "$lib/Components/SVG/unselectedNetwork"
    import {unselectedAsset} from "$lib/Components/SVG/unselectedAsset"


    let networkSelection = [
        {title:'Solana', img: 'assets/img/networks/solana.png'},
        {title:'Optimism Goerli', img: 'assets/img/networks/optimism.png'},
        {title:'Solana', img: 'assets/img/networks/solana.png'},
        {title:'Optimism Sepolia', img: 'assets/img/networks/optimism.png'},
        {title:'Solana', img: 'assets/img/networks/solana.png'},
        {title:'Arbitrum Goerli', img: 'assets/img/networks/arbitrum.png'},
        {title:'Arbitrum Sepolia', img: 'assets/img/networks/arbitrum.png'},
        {title:'Fantom', img: 'assets/img/networks/fantom.png'},
    ];

    let selectAsset: Modal;

    let tabAsset:string[] = ['AVAILABLE TOKES', 'ALL TOKENS'];
    let tabActive: string = tabAsset[0]; 
    let isActive:boolean = false;
    function istabActive(selected:string) {
        tabActive = selected;
        isActive = true;
    }


    //Start of From part////////////////////////////////////////////////////////////////
    let selectNetwork1: Modal

    let searchNetwork1 = '';
    $: filteredNetworks1 = networkSelection.filter(network => 
        network.title.toLowerCase().includes(searchNetwork1.toLowerCase())
    );

    //Selected network1 (from)
    let selectedNetwork1 = { img: unselectedNetwork, title: 'Select Network' };  //selectedNetwork1 will be the data used for network1 (from)

    function functionSelectNetwork1(network: any) {
        selectedNetwork1 = network;
        console.log(network);
        selectNetwork1.closeModal();
    }
    //End of From part////////////////////////////////////////////////////////////////



    //Start of To part
    //End of To part
</script>

<div class="h-auto w-full flex items-center justify-center xl:max-w-[90rem] mx-auto p-6 gap-y-6">
    <div class="flex flex-col items-center justify-center p-6 rounded-lg w-[450px] border border-[#a8e4f6] gap-y-8">

        <div class="w-full space-y-2">
            <div class="w-full flex flex-row items-center justify-between">
                <div class="text-lg font-semibold">From</div>
                <button class="bg-white/10 px-3 py-1 rounded-lg flex flex-row items-center gap-x-2">
                    <Icon icon="fluent:wallet-28-regular" class="w-6 h-6"/>
                    <span class="text-lg ">Connect Wallet</span>
                </button>
            </div>


            <div class="flex flex-row gap-x-2 w-full bg-white/10 p-2 rounded-lg">

                <button class="flex flex-col items-center gap-y-3 bg-white/10 rounded-lg px-4 {selectedNetwork1.img === unselectedNetwork ? 'py-8' : 'py-4'} w-[65%]" on:click={selectNetwork1.openModal}>
                    <p class="text-gray-400 {selectedNetwork1.img === unselectedNetwork ? 'hidden' : ''}">Network</p>
                    <img src={selectedNetwork1.img} alt="img" class="w-12 h-12"/>
                    {selectedNetwork1.title}
                </button>

                <div class="flex flex-col w-full gap-y-2">
                    <button 
                        class="flex flex-col justify-center gap-y-1 bg-white/10 rounded-lg px-2 py-1 w-full h-[50%]" 
                        on:click={() => {
                            if (selectedNetwork1.img !== unselectedNetwork) {
                                selectAsset.openModal();
                            }
                        }}
                    >
                        <p class="text-gray-400">Asset</p>
                        <p class="flex flex-row items-center gap-x-2">
                            {#if selectedNetwork1.img === unselectedNetwork}
                                —
                            {:else}
                                <img src={unselectedAsset} alt="img" class="w-6 h-6"/>
                                Select
                            {/if}
                        </p>
                    </button>

                    <div class="flex flex-row items-center gap-x-2 h-[50%]">
                        <div class="flex flex-col gap-y-1 bg-white/10 rounded-lg px-2 py-1 w-full">
                            <p class="text-gray-400">Amount</p>
                            <p>—</p>
                        </div>
                        <div class="flex flex-col gap-y-1rounded-lg px-2 py-1 w-full">
                            <p class="text-gray-400">Balance</p>
                            <p>—</p>
                        </div>

                    </div>
                </div>




            </div>
        </div>

        <div class="w-full flex items-center justify-center">
            <button class="bg-white/10 p-2 rounded-full">
                <Icon icon="uil:exchange" class="w-6 h-6  rotate-90"/>
            </button>
        </div>
        <div class="">
            select network 2
        </div>
        <div class="flex flex-row items-center justify-center gap-x-8 w-full">
            <button class="hover:underline">Resume Transaction</button>
            <button class="hover:underline">FAQs</button>
            <button class="hover:underline">Terms of Use</button>
        </div>
        <div class="">
            <span class="text-[#7b7b7b]">Powered By</span>&nbsp;Wormhole
        </div>
    </div>

</div>


<Modal bind:this={selectNetwork1} type="dark" title="Sending From">
    <p class="text-gray-300 text-center text-lg">Select Network</p>
    <div class="flex flex-col items-center justify-center p-4">
        <div class="relative flex w-full h-12 items-center justify-between rounded-lg border border-white/5 bg-white/5 px-2 ">
            <input type="text" placeholder="Search Network" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="searchNetwork1" bind:value={searchNetwork1}/>
            <div class="flex flex-row gap-x-2">
                <Icon icon="ic:round-search" class="w-6 h-6"/>
            </div>
        </div>
        <div class="overflow-auto w-full h-[300px] mt-4 grid grid-cols-2 sm:grid-cols-3 gap-y-1">
            {#each filteredNetworks1 as network1}
                <div class="flex items-center justify-center h-[100px] sm:h-[130px]">
                    <button 
                        class="flex flex-col items-center justify-center py-4 px-8 rounded-lg hover:bg-white/10 gap-y-2 w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]" 
                        on:click={() => { functionSelectNetwork1(network1) }}
                    >
                        <img src={network1.img} alt={network1.title} class="w-10 h-10 sm:w-14 sm:h-14"/>
                        <p class="whitespace-pre-wrap">{network1.title}</p>
                    </button>
                </div>
            {/each}
        </div>
    </div>
</Modal>


<Modal bind:this={selectAsset} type="dark" title="Select Asset">
    <div class="flex flex-col items-center justify-center p-4 gap-y-4">

        <div class="flex flex-row gap-4 w-full p-4 border border-gray-200 rounded-lg">
            <Icon icon="fluent:info-12-regular" class="w-8 h-8 text-[#4069a1]"/>
            <p class="text-sm">
                You should always check for markets and liquidity before sending tokens.
                <a href="https://portalbridge.com/docs/faqs/liquid-markets/" target="_blank" class="text-gray-400 underline">Click here to see available markets for wrapped tokens.</a>
            </p>
        </div>

        <div class="relative flex w-full h-12 items-center justify-between rounded-lg border border-white/5 bg-white/5 px-2 ">
            <input type="text" placeholder="Search by name or contract address" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="searchAsset"/>
            <div class="flex flex-row gap-x-2">
                <Icon icon="ic:round-search" class="w-6 h-6"/>
            </div>
        </div>

        <div class="">

        </div>




        <!-- <div class="overflow-auto w-full h-[300px] mt-4 grid grid-cols-2 sm:grid-cols-3 gap-y-1">
            {#each filteredNetworks1 as network1}
                <div class="flex items-center justify-center">
                    <button 
                        class="flex flex-col items-center justify-center py-4 px-8 rounded-lg hover:bg-white/10 gap-y-2 w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]" 
                        on:click={() => { functionSelectNetwork1(network1) }}
                    >
                        <img src={network1.img} alt={network1.title} class="w-10 h-10 sm:w-14 sm:h-14"/>
                        <p class="whitespace-pre-wrap">{network1.title}</p>
                    </button>
                </div>
            {/each}
        </div> -->



    </div>
</Modal>