<script lang="ts">
	import Button from "$lib/Components/Button/Button.svelte";

    let claimdiscount: boolean = false;

    let inputWithdraw:string = ""

    $: inputWithdraw = inputWithdraw.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    
    let discount = [0,20,50,100];

	function handleClickDiscount(disc: number) {
		if (disc === 0) {
            claimdiscount = false;
        } else {
            claimdiscount = true;

        }
	}


</script>
<div class="flex flex-col gap-y-6 p-4">
    <div class="space-y-2">
        <div class="flex justify-between text-sm">
            <p>
                Withdraw
            </p>
            <div class="flex gap-2">
                <div>
                    Your BUCK in Tank :
                </div>
                <div>
                    0
                </div>
            </div>
    
        </div>
        <div class="flex w-full bg-[#aee]/10 backdrop-blur-sm rounded-lg gap-x-2 p-1">
            <input bind:value={inputWithdraw} class="w-full bg-transparent  rounded-l-lg !border-transparent focus:ring-0" placeholder="0.00"/>
            <div class="flex justify-center items-center gap-2 bg-[#232f33] rounded-md px-2">
                <div class="w-9 h-9 flex justify-center items-center">
                    <img src="assets/img/coins/buck.png" alt="">
                </div>
                <div class="font-bold text-center w-full">
                    BUCK
                </div>
    
            </div>    
        </div>
        <div class="flex justify-end gap-x-3 text-slate-500 font-bold">
            {#each discount as disc }
                <button on:click={(()=>{
                    handleClickDiscount(disc);
                })}>
                    {disc} %
                </button>
            {/each}
        </div>
    </div>

    <div>
        <div>
            Earned
        </div>
        <div class="flex justify-between">
            <div class="text-2xl font-semibold">
                0
            </div>
            <div class="flex justify-center items-center gap-x-3">
                <div class="w-10 h-10">
                    <img src="assets/img/coins/vsui.png" alt="">
                </div>
                <div class="text-xl font-semibold">
                    vSUI
                </div>
            </div>
        </div>
    </div>

    <Button rounded='rounded-lg text-md'>
        {claimdiscount?'Withdraw and Claim': 'Withdraw'}
    </Button>
</div>
