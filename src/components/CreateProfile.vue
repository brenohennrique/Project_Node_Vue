<template>
  <div>
    <h1>Cadastro de Perfil</h1>
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Perfil Descição:</label>
            <input type="text" class="form-control" v-model="profile.title">
          </div>
        </div>
      </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Adicionar Perfil</button>
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
      addProfile(){
        let uri = 'http://localhost:4000/profiles/add';
        this.axios.post(uri, this.profile).then((response) => {
          this.$router.push({name: 'DisplayProfile'})
        })
      }
    }    
  }
</script>
