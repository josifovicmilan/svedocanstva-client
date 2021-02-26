<template>
    <div class="flex justify-center my-6">
        <nuxt-link to="/" class="px-2">
          <svg class="pagination__button pagination__button-left w-6 h-6">
            <use xlink:href="~/assets/img/stripe.svg#icon-arrow-up"></use>
          </svg>
        </nuxt-link>

      <nuxt-link to="/" class="px-2">
        <svg class="pagination__button pagination__button-right w-6 h-6">
          <use xlink:href="~/assets/img/stripe.svg#icon-arrow-up"></use>
        </svg>
      </nuxt-link>
    </div>
</template>

<script>
    export default {
        name: "StudentPagination"
    }
</script>

<style scoped lang="scss">
.pagination__button{
  &-left{
    transform: rotate(-90deg);
    fill: #7f828b;
    cursor: pointer;
    &:hover{
      fill: #c1c1c1;
    }
  }
  &-right{
    transform: rotate(90deg);
    fill: #7f828b;
    cursor: pointer;
    &:hover{
      fill: #c1c1c1;
    }
  }
}
</style>
