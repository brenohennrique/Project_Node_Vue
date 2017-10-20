<template>
  <div>
    <h1>Cadastro de Usuário</h1>
    <form v-on:submit.prevent="addUser">
      <div class="row">
        <div class="col-md-6">
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
        </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Cadastrar Perfil</button>
        </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return{
        profiles: [],
        user: {}
      }
    },
    created: function(){
        this.fetchProfiles();
    },
    methods: {
      addUser(){
        let uri = 'http://localhost:4000/users/add';
        this.axios.post(uri, this.user).then((response) => {
          this.$router.push({name: 'DisplayUser'})
        })
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
