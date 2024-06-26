function List(){

    const students = [{id: 1, name:'harry', age:20},
        {id:2, name: 'zesty', age: 21},
        {id:3, name:'seuu', age:34},
    ]

    const UnderAge = students.filter(student => student.age >25 )

    const items= UnderAge.map(UnderAge => <li key={UnderAge.id}>{UnderAge.name}:
                                         &nbsp; {UnderAge.age}</li>)
    
    //const items= students.map(student => <li key={student.id}>{student.name}:
    //                                      &nbsp; {student.age}</li>)
       

    //Sort
    //students.sort((a,b) => a.age - b.age)
    // For Reverse 
    //students.sort((a,b) => b.age - a.age)

    return(<ul>{items}</ul>);
}

export default List;