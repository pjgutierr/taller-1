let tempmedia = (temperaturas) => {

    let tempMaxima = Math.max(...temperaturas);
    let tempMinima = Math.min(...temperaturas);
    
    
    let tempmedia = (tempMaxima + tempMinima) / 2;
    
     console.log("La tempertura media es de  de: " + tempmedia);
    }
    
   tempmedia([28, 12, 39, 24])