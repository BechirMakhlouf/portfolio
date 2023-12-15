import React from "react";

const letters: string[] = [
  `
    /$$
   /$$/
  /$$/ 
 /$$/  
|  $$  
 \\  $$ 
  \\  $$
   \\__/
  `,
  `
 /$$      
| $$      
| $$$$$$$ 
| $$__  $$
| $$  \\ $$
| $$  | $$
| $$$$$$$/
|_______/ 

`,
  `


  /$$$$$$ 
 /$$__  $$
| $$$$$$$$
| $$_____/
|  $$$$$$$
 \\_______/
`,
  `          

           
   /$$$$$$$
  /$$_____/
 | $$      
 | $$      
 |  $$$$$$$
 \\_______/
`,
  `
 /$$      
| $$      
| $$$$$$$ 
| $$__  $$
| $$  \\ $$
| $$  | $$
| $$  | $$
|__/  |__/
`,
  `
 /$$
|__/
 /$$
| $$
| $$
| $$
| $$
|__/
`,
  `
          
          
  /$$$$$$ 
 /$$__  $$
| $$  \\__/
| $$      
| $$      
|__/      
`,
  `
 /$$      /$$
| $$$    /$$$
| $$$$  /$$$$
| $$ $$/$$ $$
| $$  $$$| $$
| $$\\  $ | $$
| $$ \\/  | $$
|__/     |__/
`,
  `
          
          
  /$$$$$$ 
 |____  $$
  /$$$$$$$
 /$$__  $$
|  $$$$$$$
 \\_______/
`,
  `
 /$$      
| $$      
| $$   /$$
| $$  /$$/
| $$$$$$/ 
| $$_  $$ 
| $$ \\  $$
|__/  \\__/
`,
  `
 /$$      
| $$      
| $$$$$$$ 
| $$__  $$
| $$  \\ $$
| $$  | $$
| $$  | $$
|__/  |__/
`,
  `
 /$$
| $$
| $$
| $$
| $$
| $$
| $$
|__/
`,
  `
          
          
  /$$$$$$ 
 /$$__  $$
| $$  \\ $$
| $$  | $$
|  $$$$$$/
 \\______/ 
`,
  `
          
          
 /$$   /$$
| $$  | $$
| $$  | $$
| $$  | $$
|  $$$$$$/
 \\______/ 
`,
  `
  /$$$$$$ 
 /$$__  $$
| $$  \\__/
| $$$$    
| $$_/    
| $$      
| $$      
|__/      
`,
  `
       /$$
      /$$/
     /$$/ 
    /$$/  
   /$$/   
  /$$/    
 /$$/     
|__/      
`,
  `
 /$$   
|  $$  
 \\  $$ 
  \\  $$
   /$$/
  /$$/ 
 /$$/  
|__/   
`,
];
const NameASCIIArt = () => {
  return (
    <>
      {letters.map((letter, i) => {
        return (
          <pre key={i}>
                    {letter}
          </pre>
        );
      })}
    </>
  );
};

export default NameASCIIArt;
