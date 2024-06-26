import styles from './ButtonStyle.module.css'

function Button(){

  let count =0;
  const handleClick=(name)=>{
    if(count < 3){
      count++;
      console.log(`${name} you clicked me ${count} times `);
    }else{
      console.log(`${name} stopp clicking me`)
    }
  };

  const handleClick2 = (e) => e.target.textContent="OUCH😏"
  
    return (
       <>
         <button className={styles.button} onClick={()=>
        handleClick("zesty")}>
      Click me</button>
        

        <button onDoubleClick={(e)=> handleClick2(e)}>Clickme</button>
       </>
    
    )
}

export default Button;