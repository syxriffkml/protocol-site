<script lang="ts">
	import Button from "$lib/Components/Button/Button.svelte";
	import Icon from '@iconify/svelte';
	import CardImg from "$lib/Components/Box/BoxImage.svelte";
	import SectionOverflow from "$lib/Components/Box/BoxOverFlow.svelte";
	import Section from "$lib/Components/Box/Box.svelte";
	
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
		{ 
            message: 'Button 7 clicked', 
            collateralRatio: '185.24%', 
            mintedBuck: '50.59k / 1.50m', 
            mcr: '110%', 
            mintFee: '0.50%', 
            borrowInterestRate: '5.5%', 
            stakedSuiApy: '3.38%' 
        },
    ];
</script>

<div class="h-auto w-full flex flex-col xl:max-w-[90rem] items-start mx-auto p-6 gap-y-6">

	<div class="flex flex-col w-full gap-y-6">
		<div class="flex flex-row w-full gap-x-6">
			<CardImg customClass="">
				<div class="flex flex-col w-full h-full gap-y-8">
					<p class="text-3xl font-semibold">Earn up to 67.37%<br>APR of $SUI</p>
					<Button width="w-[200px]" mode="blue" customClass="flex items-center justify-center gap-x-2 hover:gap-x-6 !transition-all !duration-200">
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
					<Button width="w-[200px]" mode="blue" customClass="flex items-center justify-center gap-x-2 hover:gap-x-6 !transition-all !duration-200">
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
						<Icon icon="ep:question-filled" class="text-white/50 w-5 h-5"/>
					</p>
					<p class="text-xl lg:text-3xl font-semibold whitespace-nowrap">$ 21,982,096</p>
				</Section>


				<div class="order-1 xl:order-2 flex flex-row xl:flex-col w-full xl:w-[50%] gap-2 lg:gap-4 justify-between grow">
					<Section customClass="p-4 lg:p-8 flex flex-col items-center justify-center w-full">
						<p class="flex flex-row items-center gap-x-2 whitespace-nowrap">
							<span class="text-xs lg:text-sm font-semibold text-white/50">BUCK Liquidity</span>
							<Icon icon="ep:question-filled" class="text-white/50 w-5 h-5"/>
						</p>
						<p class="text-xl lg:text-3xl font-semibold whitespace-nowrap">$ 19,132,228</p>
					</Section>
					<Section customClass="p-4 lg:p-8 flex flex-col items-center justify-center w-full">
						<p class="flex flex-row items-center gap-x-2 whitespace-nowrap">
							<span class="text-xs lg:text-sm font-semibold text-white/50">Circulation BUCK</span>
							<Icon icon="ep:question-filled" class="text-white/50 w-5 h-5"/>
						</p>
						<p class="text-xl lg:text-3xl font-semibold whitespace-nowrap">$ 9,824,529</p>
					</Section>
				</div>
			</div>

			<Section customClass="!p-8 w-full md:w-[50%] h-[267px] overflow-auto">
				testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestteststtet<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>test<br>
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
							<p class="text-[#aeecff] text-sm font-semibold flex items-center gap-x-1">
								Minted BUCK
								<Icon icon="ep:question-filled" class="text-white/50 w-4 h-4"/>
							</p>
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


