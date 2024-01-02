    const course ={
        courseName: "js",
        courseInstructor : "hitesh",
        courseFee:"5555"
    }

    console.log(course.courseInstructor);

    //Destructring syntax

    // const {object keyname or you can modify keyname : xyz like this} = objectName

    const {courseInstructor:teacher} = course
    console.log(teacher);