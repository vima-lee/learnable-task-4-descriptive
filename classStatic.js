 // NO 1 Task 3 (HOW TO USE A CLASS THAT HAS CLASS/STATIC PROPERTIES AND METHODS)

    /* We will create a class "learnable" with its properties course track & mentors, then we instantiate an object "genesys".
   To call the static properties inside of the class, we use the keyword "static" and  also for the method/function "serious", we will craete a function
   or method inside of the class. Outside of the class, we call the method/function with the class name "learnable.serious" WHILE 
   */

   class learnable {
    courseTrack = 4
    mentors = 15

    static numberOfFrontEnd = 150

    serious () {
      console.log("Students in learnable are very serious")
    }

    static accessStatic() {
      console.log(learnable.numberOfFrontEnd)
    }
  };


  const genesys = new learnable(); 

  // the learnable in the console.log prints our static/class result
  console.log(genesys, learnable)

  //static method
  genesys.serious()

  // how to access static method. we use the keyword "static" inside of the class
  learnable.accessStatic()

