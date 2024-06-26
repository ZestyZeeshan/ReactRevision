function List(){

    const students = [{id: 1, name:'harry', age:20},
        {id:2, name: 'zesty', age: 21},
        {id:3, name:'seuu', age:34},
    ]

    const items= students.map(student => <li key={student.id}>{student.name}:
                                         &nbsp; {student.age}</li>)

    //Sort
    students.sort((a,b) => a.age - b.age)

    return(<ul>{items}</ul>);
}

export default List;