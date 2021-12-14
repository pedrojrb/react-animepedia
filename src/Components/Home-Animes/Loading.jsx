function Loading(){

    const styles ={

        spinner:{

            marginTop: "200px",
            backgroundColor: "red"
            
        },
        spinnerLetter:{
            color: "red"
        }
    }

    return(
        <>
    
        
            <div class="spinner-grow text-danger" role="status" style={styles.spinner}>
                
             <span class="visually-hidden"></span>


            </div>

            <div>
                <span style={styles.spinnerLetter}>Loading...</span>
            </div>
        </>

    );


}export default Loading;