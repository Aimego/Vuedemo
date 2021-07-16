<template>
		 <div class="nav-item">
		 		<div class="nav-icon">
		 			<slot name="icon"></slot>
		 		</div>
		 		<div class="nav-text">
					<slot name="text"></slot>
				</div>
		 	</div>
		
</template>

<script>
</script>

<style>
	
	.nav-item{
		font-size: 12px;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
	}
	.nav-icon img{
		margin-top: 3px;
		width: 24px;
	}
</style>
