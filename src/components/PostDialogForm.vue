<template>
    <div>
        <md-dialog-title>What's on your mind?</md-dialog-title>
        <md-field>
            <label>Message</label>
            <md-textarea v-model="message" md-counter="180"></md-textarea>
        </md-field>
        <md-dialog-actions>
            <md-button class="md-primary" @click="post()">Post</md-button>
        </md-dialog-actions>
    </div>
</template>

<script>
    
    export default {
        
        data: function() {
            return {
                id: 2,
                message: '',
            }
        },

        methods: {
            post: function() {
                this.$emit('post', {
                    id: this.id++, owner: 'Jonathan', message: this.message,
                    avatar: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-9/11751781_991551364199344_2631183325914175577_n.jpg?_nc_cat=0&oh=e57f47904bf79fa58eeb293d705f9659&oe=5BA13E8D'
                });
            }
        }
    }

</script>

<style lang="scss" scoped>
</style>