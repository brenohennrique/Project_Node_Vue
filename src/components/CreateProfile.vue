<template>
  <div>
    <h1>Cadastro de Perfil</h1>
    <form v-on:submit.prevent="validateBeforeSubmit">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Perfil:</label>
            <p>
              <input name="name" type="text" class="form-control" v-model="profile.name"  v-validate="'required|alpha'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('name') }" placeholder="Perfil">
              <i v-show="errors.has('name')" class="fa fa-warning"></i>
              <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
            </p>
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
        profile: {}
      }
    },
    methods: {
      validateBeforeSubmit(){
        this.$validator.validateAll().then((result) =>{
          if (result) {
            let uri = 'http://localhost:4000/profiles/add';
            this.axios.post(uri, this.profile).then((response) => {
              this.$router.push({name: 'DisplayProfile'})
            })
            return;
          }
          alert('Correct them errors!');
        });
      }
    }
  }
</script>
