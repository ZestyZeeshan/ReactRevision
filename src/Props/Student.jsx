import styles from './prop.module.css'

function Student(props){
     return(
        <div className={styles}>

         <p>Name: {props.name}</p>   
         <p>Age : {props.age}</p>
         <p>Student:{props.isStudent ? "yes" : "No"}</p> 
         <p>College: {props.college}</p>  
         <hr></hr>  
        
        </div>
        
     )
}
export default Student;