<template>
    <div>
        <div class="post-list"> 
            <PostCard 
                v-for="post in posts"
                :key="post.id"
                :owner="post.owner"
                :message="post.message"
                :avatar="post.avatar"
            ></PostCard>
        </div>
        <md-dialog :md-active.sync="showDialog">
            <PostDialogForm v-on:post="post($event)"/>
        </md-dialog>
        <md-button class="md-fab md-primary fob-add" @click="showDialog=true">
            <md-icon>add</md-icon>
        </md-button>
    </div>
</template>


<script>
    
    export default {
        components: {
            PostCard: require('../components/PostCard.vue').default,
            PostDialogForm: require('../components/PostDialogForm.vue').default
        },
        data: function() {
            return {
                showDialog: false,
                posts: [
                    {
                        id: 1,
                        owner: 'Jonathan',
                        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                        avatar: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-9/11751781_991551364199344_2631183325914175577_n.jpg?_nc_cat=0&oh=e57f47904bf79fa58eeb293d705f9659&oe=5BA13E8D'
                    }
                ]
            }
        },
        methods: {
            post: function(data) {
                this.posts.push(data);
                this.showDialog = false;
            }
        }
    }

</script>


<style lang="scss" scoped>
    .post-list {
        margin: auto;
        width: 500px;
    }
    .fob-add {
        position: fixed;
        bottom: 10px;
        right: 10px;
    }
    .md-dialog {
        max-width: 768px;
    }
</style>