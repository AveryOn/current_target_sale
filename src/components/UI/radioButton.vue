<template>
  <div class="radio-button-layout">
    <label class="radio-button-title">{{ value }}
  
        <input 
        type="radio" 
        :disabled="disabled"
        :name="name" 
        :value="value"
        @input="log" 
        :checked="(radioData === value)? true : false"
        >
        <span class="radio-button"></span>
        
    </label>
  </div>

</template>
<script>
export default {
  name: 'radio-button',
  props: {

    modelValue: {
      type: String,
      default: false,
    },

    name: {
      type: String,
      required: true,
    },

    value: {
      type: String,
      required: true
    },
    // Поле с которым сравнивается value инпута, и если они равны то checked === true
    radioData: {
      type: String,
      required: true
    },

    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },

  },
  methods: {
    log(e){
      this.$emit('update:modelValue', e.target.value)
      console.log(e.target.value);
    },
    // e => $emit('update:modelValue', e.target.value)
  }
  
}
</script>
<style lang="scss" scoped>
.radio-button-title{
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 2px;
}
/* Customize the label (the container) */
.radio-button-title {
display: flex;
position: relative;
padding-left: 25px;
// margin-bottom: 12px;
cursor: pointer;
font-size: 22px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

/* Hide the browser's default radio button */
.radio-button-title input {
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
}

/* Create a custom radio button */
.radio-button {
position: absolute;
display: flex;
align-items: center;
justify-content: center;
left: 0;
height: 18px;
width: 18px;
background-color: #eee;
border: $border;
border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.radio-button-title:hover input ~ .radio-button {
background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.radio-button-title input:checked ~ .radio-button {
background-color: #faad27;
}

.radio-button-title input:disabled ~ .radio-button {
background-color: #81858a97;
border: #81858a97;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.radio-button:after {
content: "";
position: absolute;
display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-button-title input:checked ~ .radio-button:after {
display: block;
}

/* Style the indicator (dot/circle) */
.radio-button-title .radio-button:after {
width: 8px;
height: 8px;
border-radius: 50%;
background: rgb(43, 43, 42);
}
</style>


