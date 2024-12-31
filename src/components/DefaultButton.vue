<template>
	<button :class="[
		'custom-button',
		`custom-button--${size}`,
		`custom-button--${color}`,
		]" 
		@click="handleClick" 
		:href="href"
		:is="buttonTag"
		>
			<slot>
				<i :class="['icon', `icon-${icon}`]"></i>
				<span>{{ label }}</span>
			</slot>
	</button>
</template>

<script setup>


const props = defineProps({
	tag: {
		type: String,
		default: 'button',
		validator: value => ['button', 'a'].includes(value),
  	},
	label: {
		type: String,
		default: 'Button',
	},
	href: {
		type: String,
		default: '',
	},
	icon: {
		type: String,
		default: '',
	},
	color: {
		type: String,
		default: 'primary',
	},
	size: {
		type: String,
		default: 'medium',
	},
	clickHandler: {
		type: Function,
		default: () => { },
	},
	methods: {
		handleClick() {
			this.clickHandler();
		},
	},
});
</script>

<style scoped>
.custom-button {
	/* Base button styles */
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-weight: bold;
}

.custom-button--primary {
	background-color: #007bff;
	color: #fff;
}

.custom-button--secondary {
	background-color: #6c757d;
	color: #fff;
}

.custom-button--small {
	padding: 5px 10px;
	font-size: 0.8em;
}

.custom-button--large {
	padding: 15px 30px;
	font-size: 1.2em;
}

.icon {
	margin-right: 5px;
}
</style>