<template>
<div>
  <section class="hero is-pink is-medium is-bold">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">


      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-center">
      <span class="title has-text-center">
        For Rent:
      </span>
      <span class="subtitle">532 N. Mariposa Ave., Los Angeles, CA 90004</span>
      </span>

    </div>
  </div>

  <div class="hero-foot">

  </div>
</section>


  <section class="container">
 <div>
   <h1 class="pt-3 mb-5">Patient Sign-Up 2</h1>
   <hr>
   <div class="row">

<div class="col-md-12">
 <form-wizard        @on-complete="onComplete"
                     color="gray"
                     error-color="#a94442"
                     title="Submit your application online."
                     subtitle="Fill out the form completely"
                     shape="tab"
                     >
            <tab-content title="Name and Contact Info"
                         icon="ti-user"

                         >
               <vue-form-generator :model="modelstate"
                                   :schema="firstTabSchema"
                                   :options="formOptions"
                                   ref="firstTabForm"
                                   >

               </vue-form-generator>
            </tab-content>
            <tab-content title="Your Address"
                         icon="ti-settings"
                        >
             <vue-form-generator :model="modelstate"
                                   :schema="secondTabSchema"
                                   :options="formOptions"
                                   ref="secondTabForm"
                                   >
               </vue-form-generator>

            </tab-content>
             <tab-content title="Identity Upload"
                         icon="ti-settings" >
             <vue-form-generator :model="modelstate"
                                   :schema="thirdTabSchema"
                                   :options="formOptions"
                                   ref="thirdTabForm"
                                   >
               </vue-form-generator>

            </tab-content>
             <tab-content title="Doctor's Info"
                         icon="ti-settings" :before-change="validateFourthTab">
             <vue-form-generator :model="modelstate"
                                   :schema="fourthTabSchema"
                                   :options="formOptions"
                                   ref="fourthTabForm"
                                   >
               </vue-form-generator>

            </tab-content>
            <tab-content title="Last step"
                         icon="ti-check">
              <h4>Your json is ready!</h4>
              <div class="panel-body">
                <pre v-if="modelstate" v-html="modelstate"></pre>
              </div>
            </tab-content>
        </form-wizard>
</div>

   </div>
 </div>
  </section>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import VueFormWizard from 'vue-form-wizard'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import  Cleave from 'cleave.js'
import 'cleave.js/dist/addons/cleave-phone.us'

export default {
  data () {
    return {
      title: 'Submit your application',
      DL_Uploadraw: '',
      Rec_Uploadraw: '',
  //    model:{
  //   First_Name:'',
  //   Last_Name:'',
  //   Email:'',
  //   Phone:'',
  //   Address:'',
  //   City:'',
  //   State:'',
  //   ZIPCode:'',
  //   DL_Upload: '',
  //   Drivers_License_No: '',
  //   Rec_Upload: '',
  //   Rec_ID_No: '',
  //   Verification_Website: '',
  //   Rec_Expiration_Date: '',
  //   Doctors_Name: '',
  //   Doc_Address: '',
  //   Doc_Phone: '',
  //   HowDidYou: '',
  //   AdultCheck: false,
  //   Agree: false,
  //   True: false,
  //   OK_To_Email: true,
  //   OK_To_Text: true
  //  },
   formOptions: {
    validationErrorClass: "has-error",
    validationSuccessClass: "has-success",
    validateAfterChanged: true
   },
   firstTabSchema:{

     fields:[{
        type: "input",
				inputType: "text",
        label: "First name",
        model: "First_Name",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-6'
     },
     {
        type: "input",
				inputType: "text",
        label: "Last name",
        model: "Last_Name",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-6'
     },
      {
        type: "input",
				inputType: "text",
        label: "Email",
        model: "Email",
        required:true,
        validator:VueFormGenerator.validators.email,
        styleClasses:'col-xs-12'
     },
       {
        type: "cleave",
  label: "Phone",
  model: "Phone",
  cleaveOptions: {
    phone: true,
    phoneRegionCode: 'US',
  },
        styleClasses:'col-xs-6'
     },
            {
        type: "cleave",
  label: "Social Security",
  model: "SSN",
  cleaveOptions: {
     blocks: [3, 2, 4],
     stripLeadingZeroes: false,
    delimiter: '-'
  },
        styleClasses:'col-xs-6'
     },
       {
        type: "input",
				inputType: "text",
        label: "Driver's License #",
        model: "DLnumber",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-10'
     },
      {
        type: "cleave",
  label: "State",
  model: "DLstate",
  cleaveOptions: {
     blocks: [2],
  },
        styleClasses:'col-xs-2'
     }
     ]
   },
   secondTabSchema:{
     groups:[
       {
      legend: 'Current Address',
     fields:[
     {
        type: "googleAddress",
        autocomplete: true,
        model: "CurrentAddress",
        required:true,
        styleClasses:'col-xs-12'
     },

            {
        type: "input",
        inputType: "string",
        label: "How Long at address",
        model: "CurrentLivingTime",
        required:true,
        styleClasses:'col-xs-3'
      },
       {
        type: "cleave",
        label: "Rent Paid (Monthly)",
          cleaveOptions: {
     prefix: '$',
     numeral: 'true'
  },
        model: "CurrentRent",
        required:true,
        styleClasses:'col-xs-3'
      },
     ]
     },{
      legend: 'Previous Address',
        fields:[
     {
        type: "googleAddress",
        autocomplete: true,
        model: "PreviousAddress",
        required:true,
        styleClasses:'col-xs-12'
     },

            {
        type: "input",
        inputType: "string",
        label: "How Long at address",
        model: "PreviousLivingTime",
        required:true,
        styleClasses:'col-xs-3'
      },
       {
        type: "cleave",
        label: "Rent Paid (Monthly)",
          cleaveOptions: {
     prefix: '$',
     numeral: 'true'
  },
        model: "PreviousRent",
        required:true,
        styleClasses:'col-xs-3'
      },
     ]
     }]
   },
   thirdTabSchema:{
    groups:[{
      legend: '1st Personal Reference',
      fields:[

      {
        type: "input",
        inputType: "text",
        label: "Reference Name",
        model: "Ref1",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-3'
      },
         {
        type: "googleAddress",
        inputType: "text",
        label: "Address",
        model: "Ref1Address",
        required:true,
        styleClasses:'col-xs-6'
      },      {
        type: "input",
        inputType: "text",
        label: "Relationship",
        model: "Ref1Relationship",
        required:true,
        styleClasses:'col-xs-3'
      },
           {
        type: "cleave",
      label: "Phone",
      model: "Ref1Phone",
      cleaveOptions: {
       phone: true,
       phoneRegionCode: 'US',
      },
        styleClasses:'col-xs-3'
      },
                {
        type: "input",
        inputType: "text",
        label: "Time Known",
        model: "Ref1Relationship",
        required:true,
        styleClasses:'col-xs-3'
      }]},{
      legend: '2nd Personal Reference',
       fields:[
      {
        type: "input",
        inputType: "text",
        label: "Reference Name",
        model: "Ref2",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-3'
      },
         {
        type: "googleAddress",
        inputType: "text",
        label: "Address",
        model: "Ref2Address",
        required:true,
        styleClasses:'col-xs-6'
      },
      {
        type: "input",
        inputType: "text",
        label: "Relationship",
        model: "Ref2Relationship",
        required:true,
        styleClasses:'col-xs-3'
      },
           {
        type: "cleave",
      label: "Phone",
      model: "Ref2Phone",
      cleaveOptions: {
      phone: true,
      phoneRegionCode: 'US',
       },
        styleClasses:'col-xs-3'
     },
          {
        type: "input",
        inputType: "text",
        label: "Time Known",
        model: "Ref2Relationship",
        required:true,
        styleClasses:'col-xs-3'
      },
     ]



   }
    ]},
    fourthTabSchema:{
     fields:[
     {
        type: "input",
				inputType: "text",
        label: "Doctor's Name",
        model: "Doctors_Name",
        required:true,
        styleClasses:'col-xs-12'
     },
      {
        type: "input",
				inputType: "text",
        label: "Doctor's Address",
        model: "Doc_Address",
        required:true,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-6'
      },
      {
        type: "input",
				inputType: "text",
        label: "Doctor's Phone Number",
        model: "Doc_Phone",
        required:true,
        styleClasses:'col-xs-6'
      },
      {
        type: "input",
        inputType: "textarea",
        label: "How Did You Hear About Us?",
        model: "HowDidYou",
        required:false,
        validator:VueFormGenerator.validators.string,
        styleClasses:'col-xs-12'
      },

     ]
   }


   }
  },
    head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Submit a rental application' }
      ],
      script: [      {src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAU7W0Omt3v6h9c5tKNo73UvASsYtjCZ8c&libraries=places" }
],
      link: [
      { rel: 'stylesheet', href: 'https://rawgit.com/lykmapipo/themify-icons/master/css/themify-icons.css' },
    ]
    }
  },
  components: {

  },
  computed: {
    modelstate: {
    get () {
      return this.$store.state.modelstate.fields
    },
    set (value) {
      this.$store.commit('updateModelState', value)
    }
  },

  },
  methods: {

  onComplete: function(){
    this.$store.commit('updateModelState', this.modelstate)
      this.modelstate["form-name"] = "rental-app";
      this.$axios.setHeader(
        "Content-Type",
        "application/x-www-form-url-encoded",
        ["post"]
      );
      this.$axios.$post("https://rentalmariposa.netlify.com/thanks", JSON.stringify(this.modelstate)).then(
        function(response) {
          // success
          response => console.log(response);
        },
        function(errors) {
          // error
          errors => console.log(errors);
        }
      );

},
   validateFirstTab: function(value){
     return this.$refs.firstTabForm.validate();
      this.$store.commit('updateModelState', value)
   },
   validateSecondTab: function(value){
      return this.$refs.secondTabForm.validate();
      this.$store.commit('updateModelState', value)
   },
     validateThirdTab: function(value){
      return this.$refs.thirdTabForm.validate();
      this.$store.commit('updateModelState', value)
   },
        validateFourthTab: function(value){
      return this.$refs.fourthTabForm.validate();
      this.$store.commit('updateModelState', value)
   },

    onSubmit (evt) {
      this.formmail["form-name"] = 'application'
      console.log(this.formmail)
   },
  }
}
</script>

<style scoped>
span.stepTitle.active {min-height: 10px;}
</style>
