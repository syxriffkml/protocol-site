<script lang="ts">
	import Button from "$lib/Components/Button/Button.svelte";

    let inputDeposit:string = ''

    $: inputDeposit = inputDeposit.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

</script>
<div class="flex flex-col gap-y-6 p-4">
    <div class="space-y-1">
        <div class="flex justify-between text-sm">
            <p>
                Amount
            </p>
            <div class="flex gap-2">
                <div>
                    Max Deposit: 0.00
                </div>
                <div>
                    BUCK
                </div>
            </div>
    
        </div>
        <div class="flex w-full bg-[#aee]/10 backdrop-blur-sm rounded-lg p-1">
            <input bind:value={inputDeposit} class="w-full bg-transparent  rounded-l-lg !border-none focus:ring-0" placeholder="0.00"/>
            <button class="px-4 text-slate-500 font-bold">
                MAX
            </button>
            <div class="flex justify-center items-center gap-2 bg-[#232f33] rounded-md px-2">
                <div class="w-9 h-9 flex justify-center items-center">
                    <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbuck-icon.png&w=32&q=75" alt="">
                </div>
                <div class="font-bold text-center w-full">
                    BUCK
                </div>
    
            </div>    
        </div>
    </div>

    <p class="text-xs text-slate-500 font-semibold text-justify">
        Tank is a pools for liquidation. When user’s CR ( collateral ratio ) lower than 110%,
        their position will be liquidated. Liquidated collateral will be sold to tank and get 
        BUCK to repay its debt.
    </p>
    <button class="text-sm blink" on:click={(()=>{
        window.open('/', '_blank');
    })}>
        Purchase BUCK
    </button>
    <Button rounded='rounded-lg'>
        Deposit
    </Button>
</div>

<style>
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0.2; }
        100% { opacity: 1; }
    }

    /* Apply the blinking animation to the text */
    .blink {
        animation: blink 3s infinite; /* Adjust the duration (1s) as needed */
    }
</style>
