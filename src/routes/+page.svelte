<script lang="ts">
	import Button from "$lib/Components/Button/Button.svelte";
	import Icon from '@iconify/svelte';
	import CardImg from "$lib/Components/Box/BoxImage.svelte";
	import SectionOverflow from "$lib/Components/Box/BoxOverFlow.svelte";
	import Section from "$lib/Components/Box/Box.svelte";
	import HoverPopup from '$lib/Components/Popups/HoverPopup.svelte';
	
	let buttons = [
        { 
            message: 'Button 1 clicked', 
            collateralRatio: '185.24%', 
            mintedBuck: '50.59k / 1.50m', 
            mcr: '110%', 
            mintFee: '0.50%', 
            borrowInterestRate: '5.5%', 
            stakedSuiApy: '3.38%' 
        },
        { 
            message: 'Button 2 clicked', 
            collateralRatio: '185.24%', 
            mintedBuck: '50.59k / 1.50m', 
            mcr: '110%', 
            mintFee: '0.50%', 
            borrowInterestRate: '5.5%', 
            stakedSuiApy: '3.38%' 
        },
		{ 
            message: 'Button 3 clicked', 
            collateralRatio: '185.24%', 
            mintedBuck: '50.59k / 1.50m', 
            mcr: '110%', 
            mintFee: '0.50%', 
            borrowInterestRate: '5.5%', 
            stakedSuiApy: '3.38%' 
        },
		{ 
            message: 'Button 4 clicked', 
            collateralRatio: '185.24%', 
            mintedBuck: '50.59k / 1.50m', 
            mcr: '110%', 
            mintFee: '0.50%', 
            borrowInterestRate: '5.5%', 
            stakedSuiApy: '3.38%' 
        },
		{ 
            message: 'Button 5 clicked', 
            collateralRatio: '185.24%', 
            mintedBuck: '50.59k / 1.50m', 
            mcr: '110%', 
            mintFee: '0.50%', 
            borrowInterestRate: '5.5%', 
            stakedSuiApy: '3.38%' 
        },
		{ 
            message: 'Button 6 clicked', 
            collateralRatio: '185.24%', 
            mintedBuck: '50.59k / 1.50m', 
            mcr: '110%', 
            mintFee: '0.50%', 
            borrowInterestRate: '5.5%', 
            stakedSuiApy: '3.38%' 
        },
    ];

	let table = [
        { name: 'BUCKETUS', value: '5,807,693 ($6M)', percentage: '56,33%', color: 'text-[#BF9CEE]'},
        { name: 'CETABLE', value: '3,000,002 ($3M)', percentage: '29.09%', color: 'text-[#9CEEFF]'},
        { name: 'USDC', value: '839,146 ($839K)', percentage: '8.14%', color: 'text-[#9CEEFF]'},
		{ name: 'USDC', value: '839,146 ($839K)', percentage: '8.14%', color: 'text-[#BF9CEE]' },
		{ name: 'USDC', value: '839,146 ($839K)', percentage: '8.14%', color: 'text-[#9CEEFF]' },
		{ name: 'USDC', value: '839,146 ($839K)', percentage: '8.14%', color: 'text-[#E75555]' },
		{ name: 'USDC', value: '839,146 ($839K)', percentage: '8.14%', color: 'text-[#BF9CEE]' },
		{ name: 'USDC', value: '839,146 ($839K)', percentage: '8.14%', color: 'text-[#E75555]' },
		{ name: 'USDC', value: '839,146 ($839K)', percentage: '8.14%', color: 'text-[#E75555]' },
	];
</script>

<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto p-6 gap-y-6">

	<div class="flex flex-col w-full gap-y-6">
		<div class="flex flex-row w-full gap-x-6">
			<CardImg customClass="">
				<div class="flex flex-col w-full h-full gap-y-8">
					<p class="text-3xl font-semibold">Earn up to 67.37%<br>APR of $SUI</p>
					<Button width="w-[200px]" mode="blue" customClass="flex items-center justify-center gap-x-2 hover:gap-x-6 text-xl hover:text-[24px] !transition-all !duration-300" handler={()=>{ window.location.href='/fountain'; }}>
						<p class="text-xl">Explore</p>
						<div class="bg-black rounded-full w-auto p-1">
							<Icon icon="mingcute:arrow-right-line" class="w-5 h-5 text-white"/>
						</div>
					</Button>
				</div>
			</CardImg>

			<CardImg customClass="hidden md:block">
				<div class="flex flex-col w-full h-full gap-y-8">
					<p class="text-3xl font-semibold">Use BUCK<br>in Suilette!</p>
					<Button width="w-[200px]" mode="blue" customClass="flex items-center justify-center gap-x-2 hover:gap-x-6 text-xl hover:text-[24px] !transition-all !duration-300">
						<p class="text-xl">Try Out</p>
						<div class="bg-black rounded-full w-auto p-1">
							<Icon icon="mingcute:arrow-right-line" class="w-5 h-5 text-white"/>
						</div>
					</Button>
				</div>
			</CardImg>
		</div>

		<div class="flex flex-col md:flex-row w-full gap-6">
			<div class="flex flex-col xl:flex-row w-full md:w-[50%] gap-4 h-[267px]">

				<Section customClass="!p-8 flex flex-col items-center justify-center w-full xl:w-[50%] order-2 xl:order-1">
					<p class="flex flex-row items-center gap-x-2 whitespace-nowrap">
						<span class="text-xs lg:text-sm font-semibold text-white/50">Total value locked</span>
						<HoverPopup 
							header="Total value locked" 
							content="Total value locked in Bucket. Including collateral value, BUCK in tank pools, LP tokens locked in Bucket fountain and PSM tokens." 
						>
							<Icon icon="ep:question-filled" class="text-white/50 w-5 h-5"/>
						</HoverPopup>
					</p>
					<p class="text-md sm:text-xl lg:text-3xl font-semibold whitespace-nowrap text-[#b2d3f3]">$ 21,982,096</p>
				</Section>


				<div class="order-1 xl:order-2 flex flex-row xl:flex-col w-full xl:w-[50%] gap-2 lg:gap-4 justify-between grow">
					<Section customClass="p-4 lg:p-8 flex flex-col items-center justify-center w-full">
						<p class="flex flex-row items-center gap-x-2 whitespace-nowrap">
							<span class="text-xs lg:text-sm font-semibold text-white/50">BUCK Liquidity</span>
						</p>
						<p class="text-md sm:text-xl lg:text-3xl font-semibold whitespace-nowrap text-[#b2d3f3]">$ 19,132,228</p>
					</Section>
					<Section customClass="p-4 lg:p-8 flex flex-col items-center justify-center w-full">
						<p class="flex flex-row items-center gap-x-2 whitespace-nowrap">
							<span class="text-xs lg:text-sm font-semibold text-white/50">Circulation BUCK</span>
							<HoverPopup header="Circulation BUCK" content="Total BUCK in circulation">
								<Icon icon="ep:question-filled" class="text-white/50 w-5 h-5"/>
							</HoverPopup>
						</p>
						<p class="text-md sm:text-xl lg:text-3xl font-semibold whitespace-nowrap text-[#b2d3f3]">$ 9,824,529</p>
					</Section>
				</div>
			</div>

			<Section customClass="!px-8 !py-4 w-full md:w-[50%] h-[267px] flex flex-col xl:flex-row gap-4">
				<div class="flex flex-row xl:flex-col  gap-y-4 xl:gap-x-4 w-auto items-center justify-center">
					<div class="flex flex-col items-center">
						<span class="text-xs lg:text-sm font-semibold text-white/50 flex flex-row items-center gap-x-2 whitespace-nowrap">
							Collateral
							<HoverPopup header="Collateral" content="The amount of collaterals in Bucket and PSM tokens">
								<Icon icon="ep:question-filled" class="text-white/50 w-5 h-5"/>
							</HoverPopup>
						</span>
						<p class="text-md sm:text-xl lg:text-3xl font-semibold whitespace-nowrap text-[#b2d3f3]">$ 10,302,768</p>
					</div>
					<div class="flex flex-col items-center">
						<span class="text-xs lg:text-sm font-semibold text-white/50 flex flex-row items-center gap-x-2 whitespace-nowrap">
							Bucket TCR
							<HoverPopup header="Collateral Ratio" content="Collateral ratio of all the assets in Bucket Protocol. Stablecoin CR are adjusted to 1.6x due to their stability.">
								<Icon icon="ep:question-filled" class="text-white/50 w-5 h-5"/>
							</HoverPopup>
						</span>
						<p class="text-md sm:text-xl lg:text-3xl font-semibold whitespace-nowrap text-[#b2d3f3]">164%</p>
					</div>
				</div>

				<div class="grid grid-cols-3 px-2 overflow-auto bucket-scrollbar max-w-[350px] xl:w-full mx-auto">
					{#each table as row}
						<div class="text-sm">{row.name}</div>
						<div class="text-sm text-right text-white/50 whitespace-nowrap">{row.value}</div>
						<div class="text-sm text-right {row.color}">{row.percentage}</div> 
					{/each}
				</div>
			</Section>
		</div>
	</div>

	<div class="w-full">
		<p class="text-2xl xl:text-3xl font-medium mb-6">Market</p>

		<div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-8 w-full">
			{#each buttons as button (button.message)}
				<button class="text-left" on:click={() => console.log(button.message)}>
					<SectionOverflow animate="floating-shadow" width="w-[336px]">
						<div>
							<p class="text-[#aeecff] text-sm font-semibold">Collateral Ratio</p>
							<p class="text-2xl">{button.collateralRatio}</p>
						</div>
			
						<div>
							<div class="text-[#aeecff] text-sm font-semibold flex items-center gap-x-1">
								Minted BUCK
								<HoverPopup content="Mint Cap is 1.5M">
									<div class="my-auto">
										<Icon icon="ep:question-filled" class="text-white/50 w-4 h-4"/>
									</div>
								</HoverPopup>
							</div>
							<p class="text-2xl">{button.mintedBuck}</p>
						</div>
			
						<div class="flex flex-row w-full gap-x-4">
							<div class="w-[50%]">
								<p class="text-[#aeecff] text-sm font-semibold">MCR</p>
								<p class="text-2xl">{button.mcr}</p>
							</div>
			
							<div class="w-[50%]">
								<p class="text-[#aeecff] text-sm font-semibold">Mint fee</p>
								<p class="text-2xl">{button.mintFee}</p>
							</div>
						</div>
			
						<div class="flex flex-row w-full gap-x-4">
							<div class="w-[50%]">
								<p class="text-[#aeecff] text-sm font-semibold">Borrow interest rate</p>
								<p class="text-2xl">{button.borrowInterestRate}</p>
							</div>
			
							<div class="w-[50%]">
								<p class="text-[#aeecff] text-sm font-semibold">Staked SUI APY</p>
								<p class="text-2xl">{button.stakedSuiApy}</p>
							</div>
						</div>
					</SectionOverflow>
				</button>
			{/each}
		</div>

	</div>
</div>


<style scoped>
	.bucket-scrollbar {
		scrollbar-width: thin !important;
		/* "thin" or "auto" for auto-width, "none" to hide scrollbar */
		scrollbar-color: #f1f1f1 transparent !important;
		/* thumb color and track color */
	}

	.bucket-scrollbar::-webkit-scrollbar {
		width: 2px !important;
	}

	.bucket-scrollbar::-webkit-scrollbar-thumb {
		background: #f1f1f1 !important;
	}

	.bucket-scrollbar::-webkit-scrollbar-track {
		background: #888 !important;
	}
</style>