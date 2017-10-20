<template>
  <div>
    <h1>Cadastro de Usuário</h1>
    <form @submit.prevent="validateBeforeSubmit">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nome:</label>
            <p>
              <input name="name" class="form-control" v-model="user.name" v-validate="'required|alpha'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Nome">
              <i v-show="errors.has('name')" class="fa fa-warning"></i>
              <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
            </p>
          </div>
          <div class="form-group">
            <label>Idade:</label>
            <p>
              <input name="age" class="form-control" v-model="user.age" v-validate="'required|numeric'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('age') }" type="number" placeholder="Idade">
              <i v-show="errors.has('age')" class="fa fa-warning"></i>
              <span v-show="errors.has('age')" class="help is-danger">{{ errors.first('age') }}</span>
            </p>
          </div>
          <div class="form-group">
            <label>Perfil:</label>
            <p>
              <select class="ui simple dropdown" v-model="user.profile" v-validate="'profile'">
                <option v-for="profile in profiles">
                  {{ profile.name }}
                </option>
              </select>
            </p>
          </div>
        </div>
        </div><br />
        <div class="form-group">
          <p>
            <button class="btn btn-primary" type="submit">Cadastrar Perfil</button>
          </p>

        </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'data-example',
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

      },
      fetchProfiles(){
        let uri = 'http://localhost:4000/profiles';
        this.axios.get(uri).then((response) => {
            this.profiles = response.data;
        });
      },
      validateBeforeSubmit(){
        this.$validator.validateAll().then((result) =>{
          if (result) {
            let uri = 'http://localhost:4000/users/add';
            this.axios.post(uri, this.user).then((response) => {
              this.$router.push({name: 'DisplayUser'})
            })
            return;
          }
          alert('Correct them errors!');
        });
      }
    }
  }
</script>
