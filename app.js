console.log("hello");



function walkTheDog(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const walkDog = false;

            if(walkDog){
             resolve("Walked the dog");
            }else{
             reject("Didnt walk the dog");
            }


        }, 1500);
    });
}
    

async function doChores(){


    try{
        const walkDogResult = await walkTheDog();
        console.log(walkDogResult);

    }catch(error){
        console.error(error);
    }
    
}


doChores()