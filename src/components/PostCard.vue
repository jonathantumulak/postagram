<template>
    <md-card>
        <md-card-header>
            <md-avatar>
                <img :src="avatar" alt="Avatar">
            </md-avatar>
            <div class="md-title">{{ owner }}</div>
            <div class="md-subhead">This is my subhead</div>
        </md-card-header>
        <md-card-content>
            {{ message }}
        </md-card-content>
    </md-card>
</template>


<script>

    export default {
        props: {
            owner: String,
            message: String,
            avatar: String
        }
    }

</script>

<style lang="scss" scoped>
  .md-card {
    width: 500px;
    margin: 4px;
    display: inline-block;
  }
</style>