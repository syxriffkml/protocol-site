<script>
	import Button from '$lib/Components/Button/Button.svelte';
    import Icon from "@iconify/svelte";

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
		<div class="flex w-full bg-[#aee]/10 backdrop-blur-sm rounded-lg p-1">
			<input class="w-full bg-transparent rounded-l-lg !border-none" />
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

	<div class="space-y-1">
		<div class="flex justify-between text-sm font-semibold">
			<p>Borrow $BUCK</p>
			<div class="flex gap-2">
				<div>Auto safe borrow</div>
				<div class="my-auto">
                    <Icon icon="material-symbols:help-rounded" width="15" height="15"  style="color: #aeecff" />
                </div>
			</div>
		</div>
		<div class="flex w-full bg-[#aee]/10 backdrop-blur-sm rounded-lg p-1">
			<input class="w-full bg-transparent rounded-l-lg !border-none" />
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

	<Button >Connect</Button>
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

