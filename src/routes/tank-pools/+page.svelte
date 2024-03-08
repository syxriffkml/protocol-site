<script lang="ts">
	import Section from '$lib/Components/Box/Box.svelte';
	import Icon from '@iconify/svelte';
	import Button from '$lib/Components/Button/Button.svelte';
	import SectionOverflow from '$lib/Components/Box/BoxOverFlow.svelte';
	import SectionImage from '$lib/Components/Box/BoxImage.svelte';
	import Modal from '$lib/Components/Modal/Index/Modal.svelte';
	import DepositModal from '$lib/Components/Modal/ComponentModal/DepositModal.svelte';
    import WithdrawModal from '$lib/Components/Modal/ComponentModal/WithdrawModal.svelte'
	import HoverPopup from '$lib/Components/Popups/HoverPopup.svelte';

	let _depositModal: Modal;

	let _withdrawModal: Modal;

   

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
</script>

<div class=" flex flex-col xl:max-w-[90rem] items-start mx-auto w-full p-6 gap-y-4">
	<div class="p-2 w-full">
		<div class="flex flex-wrap xl:flex-nowrap justify-between gap-y-4 gap-x-2 p-10">
			<div class="w-1/3 text-center">
				<div class="flex justify-center items-center gap-2 text-sm text-slate-500 font-bold whitespace-nowrap">
					<div>
						TANK POOL TVL
					</div>
					<HoverPopup header="TANK POOL TVL" content="Total BUCK in all tank pools">
						<div class="my-auto ">
							<Icon icon="material-symbols:help-rounded" width="15" height="15" />
						</div>
					</HoverPopup>

				</div>
				<div class="text-4xl font-semibold">$ 0</div>
			</div>
			<div
				class="shrink-0 bg-border  h-28 w-[1px] bg-gradient-to-b from-[#86DDF8] to-[#86DDF800] xl:h-29.5"
			/>
			<div class="w-1/3 text-center">
				<div class="text-sm text-slate-500 font-bold whitespace-nowrap">Your BUCK in tank</div>
				<div class="text-4xl font-semibold">$ 0</div>
			</div>
			<div
				class="shrink-0 bg-border hidden h-28 w-[1px] bg-gradient-to-b from-[#86DDF8] to-[#86DDF800] xl:block xl:h-29.5"
			/>
            <div class="w-full xl:w-1/3 text-center">
				<div class="text-sm text-slate-500 font-bold">Your BUCK balance</div>
				<div class="text-4xl font-semibold">$ 0</div>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-10 w-full mb-10">
			<div class="flex col-span-1 xl:col-span-2">
				<div class="hidden xl:block min-w-[54px]" />
				<SectionImage height={'h-full'} margin={'mt-0'}>
					<div class="h-full flex justify-start items-end">
						<div class="flex flex-col gap-6">
							<div class="">
								<p class="xl:text-3xl font-semibold">Get some BUCK</p>
								<p class="text-xs xl:text-sm">Boost your reward by Create Position</p>
							</div>
							<div class="flex flex-wrap gap-2">
								<Button
									handler={() => {
										window.location.href = '/position';
									}}
								>
									Add Position
								</Button>
								<Button
									mode={'blue-inverted'}
								>
									Buy
								</Button>
								<Button 
                                    mode={'blue-inverted'}
                                    handler={(()=>{
                                        window.location.href = '/peg'
                                    })}
                                >
                                    PSM
                                </Button>
							</div>
						</div>
					</div>
				</SectionImage>
			</div>

			{#each pool as head}
				<SectionOverflow header={head.header} animate={'floating'}>
					<div class="w-[90%]">
						<div class="text-[#aeecff] font-semibold text-sm ">Total deposited</div>
						<div class="text-2xl">
							{head.totalDepo} k
						</div>
						<div class="flex justify-between gap-4">
							<div class="w-full">
								<p class="text-sm whitespace-nowrap text-[#aeecff] font-semibold">Deposited $BUCK</p>
								<div class="text-xl">
									{head.depo}
								</div>
							</div>
							<div class="w-full">
								<p class="text-[#aeecff] font-semibold text-sm whitespace-nowrap">
									Earned {head.header}
								</p>
								<div class="text-xl">
									{head.earn}
								</div>
							</div>
						</div>
					</div>

					<div class="flex gap-2 w-full">

						<Button customClass={'w-full'} 
                        handler={(()=>{
                            _depositModal.openModal();
                        })}>
                            Deposit
                        </Button>

						<Button mode={'blue-inverted'} customClass={'w-full'} 
                        handler={(()=>{
                            _withdrawModal.openModal();
                        })}>
                            Withdraw
                        </Button>

					</div>
				</SectionOverflow>
			{/each}
		</div>
	</div>
</div>

<Modal
	bind:this={_depositModal}
	mobileWidth="w-4/5"
	desktopWidth="max-w-auto md:max-w-[450px] "
	title="Deposit"
	type="dark"
>

    <DepositModal/>
</Modal>
<Modal
	bind:this={_withdrawModal}
	mobileWidth="w-4/5"
	desktopWidth="max-w-auto md:max-w-[450px] "
	title="Withdraw"
	type="dark"
>
    <WithdrawModal/>
</Modal>
