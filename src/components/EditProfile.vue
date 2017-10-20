<template>
    <div>
        <h1>Atualizar Perfil</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayProfile' }" class="btn btn-success">Retornar para Perfils</router-link></div>
        </div>

        <form v-on:submit.prevent="updateProfile">
            <div class="form-group">
                <label>Perfil</label>
                <input type="text" class="form-control" v-model="profile.name">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Atualizar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                profile:{}
            }
        },
        created: function(){
            this.getProfile();
        },
        methods: {
            getProfile()
            {
              let uri = 'http://localhost:4000/profiles/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.profile = response.data;
                });
            },
            updateProfile()
            {
              let uri = 'http://localhost:4000/profiles/update/' + this.$route.params.id;
                this.axios.post(uri, this.profile).then((response) => {
                  this.$router.push({name: 'DisplayProfile'});
                });
            }
        }
    }
</script>
