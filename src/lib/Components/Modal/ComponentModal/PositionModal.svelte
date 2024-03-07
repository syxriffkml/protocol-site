<script lang="ts">
	import Button from '$lib/Components/Button/Button.svelte';
	import HoverPopup from '$lib/Components/Popups/HoverPopup.svelte';
    import Icon from "@iconify/svelte";
	import { fade, slide } from 'svelte/transition';
    
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
		{ header: 'SUI', totalDepo: 6.19, depo: 0, earn: 0 },
		{ header: 'afSUI', totalDepo: 6.19, depo: 0, earn: 0 },
		{ header: 'vSUI', totalDepo: 6.19, depo: 0, earn: 0 },
		{ header: 'haSUI', totalDepo: 6.19, depo: 0, earn: 0 },
		{ header: 'afSUI/SUI', totalDepo: 6.19, depo: 0, earn: 0 },
		{ header: 'WETH', totalDepo: 6.19, depo: 0, earn: 0 },
		{ header: 'USDC', totalDepo: 6.19, depo: 0, earn: 0 },
		{ header: 'USDT', totalDepo: 6.19, depo: 0, earn: 0 },
		{ header: 'USDY', totalDepo: 6.19, depo: 0, earn: 0 }
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
</script>

<div class="flex flex-col gap-y-6 p-2">
	<div class="space-y-1">
        <div class="flex justify-between text-sm font-semibold">
            <p class="">Amount of collateral</p>
            <div class="flex gap-2">
                <div>SUI Balance: </div>
                <div>0</div>
            </div>
        </div>
        <div class="flex w-full gap-x-2 bg-[#aee]/10 backdrop-blur-sm rounded-lg p-1 relative">
            <input bind:value={inputBalance} class="w-full bg-transparent rounded-l-lg !border-none" placeholder="0.00"/>
            <button class=" flex justify-center items-center gap-2 bg-[#213035] rounded-md px-2" on:click={(()=>{showTank = !showTank})}>
                <div class="w-9 h-9 flex justify-center items-center">
                    <img
                        src={imgSelect}
                        alt=""
                    />
                </div>
                <div class="flex justify-end items-center font-bold text-center w-full" >
                    <div>
                        {headSelect}
                    </div>    
                    <div>
                        <Icon icon="iconamoon:arrow-left-2" class="w-6 h-6" rotate={3} />
                    </div>
                </div>
                {#if showTank}
                    <div class="absolute z-9999 top-[100%] right-0 flex flex-col h-[100px] overflow-y-scroll w-[140px] bg-[#213035] border border-gray-600 rounded-lg " in:slide out:slide>
                        {#each pool as tank}
                                <button class="flex justify-start items-center gap-x-2 p-2 z-20" on:click={(()=>{
                                    console.log(tank);
                                    
                                    headSelect = tank.header;
                                    imgSelect = imgTANK;
                                    
                                })}>
                                    <div class="w-4 h-4 my-auto">
                                        <img src="https://app.bucketprotocol.io/images/vsui-icon.svg" alt="">
                                    </div>
                                    <div>
                                        {tank.header}
                                    </div>
            
                                </button>
                        {/each}
                    </div>
                {/if}
                
            </button>
        </div>
    </div>
    
    <div class="space-y-1 {showTank? 'z-[-1]': 'z-[0]'}"> 
        <div class="flex justify-between text-sm font-semibold">
            <p>Borrow $BUCK</p>
            <div class="flex gap-2">
                <div>Auto safe borrow</div>
                <HoverPopup
                content="Auto set collateral ratio as 120% for stable collateral or 180% for volatile assets."
                >
                    <div class="my-auto">
                        <Icon icon="material-symbols:help-rounded" width="15" height="15"  style="color: #aeecff" />
                    </div>
                </HoverPopup>
            </div>
        </div>
        <div class="flex w-full gap-x-2 bg-[#aee]/10 backdrop-blur-sm rounded-lg p-1">
            <input bind:value={inputBorrow} class="w-full border bg-transparent rounded-l-lg z-10 !border-none" placeholder="0.00"/>
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
    

	<Button handler={(()=>{
        console.log('Click Connect Button');
        
    })}>Connect</Button>
	<div class="border border-gray-500 rounded-lg p-4 space-y-2">
        {#each contentPosition as positiondetails}
        <div class="flex justify-between font-semibold text-sm md:text-md">
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

