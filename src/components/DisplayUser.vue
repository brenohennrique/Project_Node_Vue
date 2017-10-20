<template>
    <div>
        <h1>Usuáros</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'DisplayProfile' }" class="btn btn-primary">Perfil</router-link>
            <router-link :to="{ name: 'CreateUser' }" class="btn btn-primary">Adicionar Usuário</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>Nome</td>
                <td>Idade</td>
                <td>Perfil</td>
                <td>Ações</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="(user, users) in sortedUsers" class="user" :key="users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.profile }}</td>
                    <td><router-link :to="{name: 'EditUser', params: { id: profile._id }}" class="btn btn-primary">Editar</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteUser(profile._id)">Deletar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                users: []
            }
        },
        created: function()
        {
            this.fetchUsers();
        },
        computed: {
          sortedUsers: function() {
            let sorted = this.users
            return sorted.sort(function (a,b) {
              if (a.name < b.name) return -1
              if (a.name > b.name) return 1
              return 0
            })
          }
        },
        methods: {
            fetchUsers()
            {
              let uri = 'http://localhost:4000/users';
              this.axios.get(uri).then((response) => {
                  this.users = response.data;
              });
            },
            deleteUser(id)
            {
              let uri = 'http://localhost:4000/users/delete/'+id;
              this.profiles.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
