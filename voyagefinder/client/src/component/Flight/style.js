import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    color: 'white'
  },
  form: {
   background : "#0c7a79",

 },
 maincard:{
     marginTop: 40
 },
 container:{
   padding: "25px",
 },
 media:{
   width: '100%',
   height: 100
 },
 loading: {
   width: "100%",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   align : "center"
 }
}));
