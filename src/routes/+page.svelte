<script lang="ts">
	import Button from "$lib/Components/Button/Button.svelte";
	import Icon from '@iconify/svelte';

</script>

<div class="h-full w-full flex justify-center items-center">
	
	<Button width="w-[200px]" mode="blue" customClass="">
		<div class="flex items-center justify-center gap-x-2">
			<p class="text-xl">Explore</p>
			<div class="bg-black rounded-full w-auto p-1">
				<Icon icon="mingcute:arrow-right-line" class="w-6 h-6 text-white"/>
			</div>
		</div>
	</Button>

</div>
