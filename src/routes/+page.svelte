<script lang="ts">
	import Button from "$lib/Components/Button/Button.svelte";
	import Icon from '@iconify/svelte';
	import CardImg from "$lib/Components/Box/BoxImage.svelte";
	import Section from "$lib/Components/Box/Box.svelte";
</script>

<div class="h-screen w-full flex flex-col xl:max-w-[90rem] items-start mx-auto p-6">

	<div class="flex flex-row w-full gap-x-6">
		<div class="flex flex-col w-full gap-y-6">
				
			<CardImg>
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

			<div class="flex flex-row w-full gap-x-4">


				<div class="w-[50%]">
					<Section customClass="!p-8">
						1
					</Section>
				</div>


				<div class="flex flex-col w-[50%] gap-y-4">
					<div class="w-full">
						<Section customClass="!p-8">
							2
						</Section>
					</div>
					<div class="">
						<Section customClass="!p-8">
							3
						</Section>
					</div>
				</div>


			</div>
		</div>



		<div class="flex flex-col w-full gap-y-6">

			<CardImg>
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

			<div class="">
				<Section customClass="!p-8">
					4
				</Section>
			</div>



		</div>
	</div>




</div>


