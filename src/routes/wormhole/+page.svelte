<!-- prettier-ignore -->
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

    let assetSelection = [
        {token:'MATIC', network:'Mumbai', tokenType:'Native', address:'', img:'assets/img/coins/matic.png', available:true},
        {token:'WMATIC', network:'Mumbai', tokenType:'Native', address:'0x9c3C...2889', img:'assets/img/coins/matic.png', available:true},
        {token:'WETH', network:'Goerli', tokenType:'Wormhole Wrapped', address:'0x9c3C...2889', img:'assets/img/coins/eth.png', available:false},
        {token:'WETH', network:'Optimism Goerli', tokenType:'Wormhole Wrapped', address:'0x9c3C...2889', img:'assets/img/coins/eth.png', available:false},
        {token:'WETH', network:'Sepolia', tokenType:'Wormhole Wrapped', address:'0x9c3C...2889', img:'assets/img/coins/eth.png', available:true},
        {token:'WETH', network:'Base Sepolia', tokenType:'Wormhole Wrapped', address:'0x9c3C...2889', img:'assets/img/coins/eth.png', available:true},
        {token:'USDC', network:'Mumbai', tokenType:'Native', address:'0x9c3C...2889', img:'assets/img/coins/usdc.png', available:true},
        {token:'USDC', network:'Goerli', tokenType:'Wormhole Wrapped', address:'0x9c3C...2889', img:'assets/img/coins/usdc.png', available:false},
        {token:'USDC', network:'Solana', tokenType:'Wormhole Wrapped', address:'0x9c3C...2889', img:'assets/img/coins/usdc.png', available:true},
        {token:'USDT', network:'Goerli', tokenType:'Wormhole Wrapped', address:'0x9c3C...2889', img:'assets/img/coins/usdt.png', available:true},
    ];

    let selectAsset: Modal;

    let tabAsset:string[] = ['AVAILABLE TOKENS', 'ALL TOKENS'];
    let tabActive: string = tabAsset[0]; 
    let isActive:boolean = false;
    function istabActive(selected:string) {
        tabActive = selected;
        isActive = true;
    }

    let selectedAsset = {img:unselectedAsset, token:'USDT', network:'Goerli', tokenType:'Wormhole Wrapped', address:'0x9c3C...2889', available:false};  //selectedasset will be the data used for asset selection

    function functionSelectAsset(asset: any) {
        selectedAsset = asset;
        console.log(asset);
        selectAsset.closeModal();
    }

    //Search bar function for asset selection
    let searchAsset = '';
    $: filteredAssets = assetSelection.filter(asset => 
        asset.token.toLowerCase().includes(searchAsset.toLowerCase()) || 
        asset.address.toLowerCase().includes(searchAsset.toLowerCase())
    );

    //Start of From part////////////////////////////////////////////////////////////////
    let selectNetwork1: Modal

    let searchNetwork1 = '';
    $: filteredNetworks1 = networkSelection.filter(network => 
        network.title.toLowerCase().includes(searchNetwork1.toLowerCase())
    );

    //Selected network1 (from)
    let selectedNetwork1 = { img: unselectedNetwork, title: 'Select Network' };  //selectedNetwork1 will be the data used for network1 (from input)

    function functionSelectNetwork1(network: any) {
        selectedNetwork1 = network;
        console.log(network);
        selectNetwork1.closeModal();
    }
    //End of From part////////////////////////////////////////////////////////////////



    //Start of To part////////////////////////////////////////////////////////////////
    let selectNetwork2: Modal

    let searchNetwork2 = '';
    $: filteredNetworks2 = networkSelection.filter(network => 
        network.title.toLowerCase().includes(searchNetwork2.toLowerCase())
    );

    //Selected network2 (from)
    let selectedNetwork2 = { img: unselectedNetwork, title: 'Select Network' };  //selectedNetwork2 will be the data used for network2 (to input)

    function functionSelectNetwork2(network: any) {
        selectedNetwork2 = network;
        console.log(network);
        selectNetwork2.closeModal();
    }
    //End of To part////////////////////////////////////////////////////////////////


    //Swap function(Swap selectedNetwork1 -> selectedNetwork2, amount1 -> amount2, selectedAsset remains the same)
    function swap() {
        let tempNetwork = selectedNetwork1;
        selectedNetwork1 = selectedNetwork2;
        selectedNetwork2 = tempNetwork;
        console.log(selectedNetwork1, selectedNetwork2);
    }
</script>

<div class="h-auto w-full flex items-center justify-center xl:max-w-[90rem] mx-auto p-2 gap-y-6">
    <div class="flex flex-col items-center justify-center p-6 rounded-lg w-[450px] border border-[#a8e4f6] gap-y-4">

        <!-- From input -->
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
                        <p class="text-gray-400 text-sm">Asset</p>
                        <p class="flex flex-row items-center justify-center gap-x-2">
                            {#if (selectedNetwork1.img === unselectedNetwork) && (selectedAsset.img === unselectedAsset) }
                                —
                            {:else if (selectedAsset.img === unselectedAsset) && (selectedNetwork1.img !== unselectedNetwork) }
                                <img src={selectedAsset.img} alt="img" class="w-6 h-6"/>
                                Select
                            {:else}
                                <img src={selectedAsset.img} alt="img" class="w-6 h-6"/>
                                {selectedAsset.token} <span class="text-xs text-gray-400 font-medium">({selectedAsset.network})</span>
                            {/if}
                        </p>
                    </button>

                    <div class="flex flex-row items-center gap-x-2 h-[50%]">
                        <div class="flex flex-col gap-y-1 bg-white/10 rounded-lg px-2 py-1 w-full">
                            <p class="text-gray-400 text-sm">Amount</p>
                            <p>
                                {#if (selectedNetwork1.img !== unselectedNetwork) && (selectedAsset.img !== unselectedAsset) }
                                    <input type="text" placeholder="0.00" class="w-full text-sm bg-transparent p-0 focus:outline-none border-none focus:ring-0" name="amount1"/>
                                    <div class="text-xs">($0.00)</div>
                                {:else}
                                    —
                                {/if}
                            </p>
                        </div>
                        <div class="flex flex-col gap-y-1rounded-lg px-2 py-1 w-full">
                            <p class="text-gray-400">Balance</p>
                            <p>—</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Swap Button -->
        <div class="w-full flex items-center justify-center">
            <button class="bg-white/10 p-2 rounded-full" on:click={() => { swap(); }}>
                <Icon icon="uil:exchange" class="w-6 h-6  rotate-90"/>
            </button>
        </div>

        <!-- To Input -->
        <div class="w-full space-y-2">
            <div class="w-full flex flex-row items-center justify-between">
                <div class="text-lg font-semibold">To</div>
                <button class="bg-white/10 px-3 py-1 rounded-lg flex flex-row items-center gap-x-2">
                    <Icon icon="fluent:wallet-28-regular" class="w-6 h-6"/>
                    <span class="text-lg ">Connect Wallet</span>
                </button>
            </div>
            <div class="flex flex-row gap-x-2 w-full bg-white/10 p-2 rounded-lg">
                <button class="flex flex-col items-center gap-y-3 bg-white/10 rounded-lg px-4 {selectedNetwork2.img === unselectedNetwork ? 'py-8' : 'py-4'} w-[65%]" on:click={selectNetwork2.openModal}>
                    <p class="text-gray-400 {selectedNetwork2.img === unselectedNetwork ? 'hidden' : ''}">Network</p>
                    <img src={selectedNetwork2.img} alt="img" class="w-12 h-12"/>
                    {selectedNetwork2.title}
                </button>

                <div class="flex flex-col w-full gap-y-2">
                    <button 
                        class="flex flex-col justify-center gap-y-1 bg-white/10 rounded-lg px-2 py-1 w-full h-[50%]" 
                        on:click={() => {
                            if (selectedNetwork2.img !== unselectedNetwork) {
                                selectAsset.openModal();
                            }
                        }}
                    >
                        <p class="text-gray-400 text-sm">Asset</p>
                        <p class="flex flex-row items-center justify-center gap-x-2">
                            {#if (selectedNetwork2.img === unselectedNetwork) && (selectedAsset.img === unselectedAsset) }
                                —
                            {:else if (selectedAsset.img === unselectedAsset) && (selectedNetwork2.img !== unselectedNetwork) }
                                <img src={selectedAsset.img} alt="img" class="w-6 h-6"/>
                                Select
                            {:else}
                                <img src={selectedAsset.img} alt="img" class="w-6 h-6"/>
                                {selectedAsset.token} <span class="text-xs text-gray-400 font-medium">({selectedAsset.network})</span>
                            {/if}
                        </p>
                    </button>
                    <div class="flex flex-row items-center gap-x-2 h-[50%]">
                        <div class="flex flex-col gap-y-1 bg-white/10 rounded-lg px-2 py-1 w-full">
                            <p class="text-gray-400 text-sm">Amount</p>
                            <p>
                                {#if (selectedNetwork2.img !== unselectedNetwork) && (selectedAsset.img !== unselectedAsset) }
                                    <input type="text" placeholder="0.00" class="w-full text-sm bg-transparent p-0 focus:outline-none border-none focus:ring-0" name="amount2"/>
                                    <div class="text-xs">($0.00)</div>
                                {:else}
                                    —
                                {/if}
                            </p>
                        </div>
                        <div class="flex flex-col gap-y-1rounded-lg px-2 py-1 w-full">
                            <p class="text-gray-400">Balance</p>
                            <p>—</p>
                        </div>
                    </div>
                </div>
            </div>
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

<Modal bind:this={selectNetwork2} type="dark" title="Sending From">
    <p class="text-gray-300 text-center text-lg">Select Network</p>
    <div class="flex flex-col items-center justify-center p-4">
        <div class="relative flex w-full h-12 items-center justify-between rounded-lg border border-white/5 bg-white/5 px-2 ">
            <input type="text" placeholder="Search Network" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="searchNetwork2" bind:value={searchNetwork2}/>
            <div class="flex flex-row gap-x-2">
                <Icon icon="ic:round-search" class="w-6 h-6"/>
            </div>
        </div>
        <div class="overflow-auto w-full h-[300px] mt-4 grid grid-cols-2 sm:grid-cols-3 gap-y-1">
            {#each filteredNetworks2 as network2}
                <div class="flex items-center justify-center h-[100px] sm:h-[130px]">
                    <button 
                        class="flex flex-col items-center justify-center py-4 px-8 rounded-lg hover:bg-white/10 gap-y-2 w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]" 
                        on:click={() => { functionSelectNetwork2(network2) }}
                    >
                        <img src={network2.img} alt={network2.title} class="w-10 h-10 sm:w-14 sm:h-14"/>
                        <p class="whitespace-pre-wrap">{network2.title}</p>
                    </button>
                </div>
            {/each}
        </div>
    </div>
</Modal>


<Modal bind:this={selectAsset} type="dark" title="Select Asset" mobileWidth="w-auto" desktopWidth="sm:max-w-[600px]">
    <div class="flex flex-col items-center justify-center p-2 sm:p-4 gap-y-4">
        <div class="flex flex-row gap-2 sm:gap-4 w-full p-4 border border-gray-700 rounded-lg">
            <div class="flex items-start">
                <Icon icon="fluent:info-12-regular" class="min-w-6 h-auto text-[#4069a1]"/>
            </div>
            <p class="text-sm">
                You should always check for markets and liquidity before sending tokens.
                <a href="https://portalbridge.com/docs/faqs/liquid-markets/" target="_blank" class="text-gray-400 underline">Click here to see available markets for wrapped tokens.</a>
            </p>
        </div>

        <div class="relative flex w-full h-12 items-center justify-between rounded-lg border border-white/5 bg-white/5 px-2 ">
            <input type="text" placeholder="Search by name or contract address" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="searchAsset" bind:value={searchAsset}/>
            <div class="flex flex-row gap-x-2">
                <Icon icon="ic:round-search" class="w-6 h-6"/>
            </div>
        </div>

        <div class="flex gap-6 mb-4">
            {#each tabAsset as tab}
                <div>
                    <button 
                        class="flex gap-2 p-1 text-[#aeecff]  {tabActive === tab?'text-opacity-100':'text-opacity-20 '} !transition-all !duration-700" 
                        on:click={(()=>{ istabActive(tab) })}
                    >
                        <div class="font-semibold">
                            {tab}
                        </div>
                    </button>

                    {#if tabActive === tab}
                    <div class="border-b-2 border-[#aeecff]" />
                    {/if}
                </div>
            {/each}
        </div>

        {#if tabActive === 'AVAILABLE TOKENS'}
            <div class="overflow-auto w-full h-[150px]">
                {#each filteredAssets.filter(asset => asset.available) as asset}
                    <button 
                        class="flex flex-row justify-between hover:bg-white/25 p-1 sm:p-2 transition-all duration-500 w-full text-left"
                        on:click={() => { functionSelectAsset(asset) }}
                    >
                        <div class="flex flex-row items-center gap-x-2 basis-1/3">
                            <img src={asset.img} alt="img" class="w-8 h-auto"/>
                            <div class="">
                                <p class="text-sm sm:text-md">{asset.token}</p>
                                <p class="text-gray-400 text-sm sm:text-md">{asset.network}</p>
                            </div>
                        </div>

                        <div class="flex flex-col justify-center basis-1/3">
                            <p class="text-gray-400 text-sm font-semibold">{asset.tokenType}</p>
                            <p class="text-gray-400 text-sm font-semibold">{asset.address}</p>
                        </div>
        
        
                        <div class="flex flex-col items-end justify-center basis-1/3">
                            <p class="text-sm text-gray-400 font-medium">Balance</p>
                            <p>—</p>
                        </div>
                    </button>
                {/each}
            </div>
        {:else if tabActive === 'ALL TOKENS'}
            <div class="overflow-auto w-full h-[150px]">
                {#each filteredAssets as asset}
                    <button 
                        class="flex flex-row justify-between hover:bg-white/25 p-1 sm:p-2 transition-all duration-500 w-full text-left"
                        on:click={() => { functionSelectAsset(asset) }}
                    >
                        <div class="flex flex-row items-center gap-x-2 basis-1/3">
                            <img src={asset.img} alt="img" class="w-8 h-auto"/>
                            <div class="">
                                <p class="text-sm sm:text-md">{asset.token}</p>
                                <p class="text-gray-400 text-sm sm:text-md">{asset.network}</p>
                            </div>
                        </div>

                        <div class="flex flex-col justify-center basis-1/3">
                            <p class="text-gray-400 text-sm font-semibold">{asset.tokenType}</p>
                            <p class="text-gray-400 text-sm font-semibold">{asset.address}</p>
                        </div>
        
        
                        <div class="flex flex-col items-end justify-center basis-1/3">
                            <p class="text-sm text-gray-400 font-medium">Balance</p>
                            <p>—</p>
                        </div>
                    </button>
                {/each}
            </div>
        {/if}
    </div>
</Modal>