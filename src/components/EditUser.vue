<template>
    <div>
        <h1>Atualizar Usuário</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayUser' }" class="btn btn-success">Retornar</router-link></div>
        </div>

        <form v-on:submit.prevent="updateUser">
          <div class="form-group">
            <label>Nome:</label>
            <input type="text" class="form-control" v-model="user.name">
          </div>
          <div class="form-group">
            <label>Idade:</label>
            <input type="number" class="form-control" v-model="user.age">
          </div>
          <div class="form-group">
            <label>Perfil:</label>
            <select v-model="user.profile">
              <option v-for="profile in profiles">
                {{ profile.name }}
              </option>
            </select>
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
                profiles: [],
                user:{}
            }
        },
        created: function(){
            this.getUser(),
            this.fetchProfiles();
        },
        methods: {
            getUser()
            {
              let uri = 'http://localhost:4000/users/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.user = response.data;
                });
            },
            updateUser()
            {
              let uri = 'http://localhost:4000/users/update/' + this.$route.params.id;
                this.axios.post(uri, this.user).then((response) => {
                  this.$router.push({name: 'DisplayUser'});
                });
            },
            fetchProfiles(){
              let uri = 'http://localhost:4000/profiles';
              this.axios.get(uri).then((response) => {
                  this.profiles = response.data;
              });
            }
        }
    }
</script>
