<template>
    <div>
        <h1>Perfils</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'DisplayUser' }" class="btn btn-success">Retornar para Usuários</router-link>
            <router-link :to="{ name: 'CreateProfile' }" class="btn btn-primary">Adicionar Perfil</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Descrição</td>
                <td>Ações</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="(profile, profiles) in sortedProfiles" class="profile" :key="profiles">
                    <td>{{ profile._id }}</td>
                    <td>{{ profile.name }}</td>
                    <td><router-link :to="{name: 'EditProfile', params: { id: profile._id }}" class="btn btn-primary">Editar</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteProfile(profile._id)">Deletar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                profiles: []
            }
        },
        created: function()
        {
            this.fetchProfiles();
        },
        computed: {
          sortedProfiles: function() {
            let sorted = this.profiles
            return sorted.sort(function (a,b) {
              if (a.name < b.name) return -1
              if (a.name > b.name) return 1
              return 0
            })
          }
        },
        methods: {
            fetchProfiles()
            {
              let uri = 'http://localhost:4000/profiles';
              this.axios.get(uri).then((response) => {
                  this.profiles = response.data;
              });
            },
            deleteProfile(id)
            {
              let uri = 'http://localhost:4000/profiles/delete/'+id;
              this.profiles.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
