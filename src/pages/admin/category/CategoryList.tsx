import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { universalAPI } from "../../../api/api"
import { deleteObj } from "../../../helper/delete"
import TableLayout from "../../../layouts/crud/TableLayout"
import { CategoryModel } from "../../../types/models"

const CategoryList = () => {

    const [categories, setCategories] = useState<CategoryModel[]>([])
    const fetchCategories = async () => {
        const { data, status, message } = await universalAPI('GET', '/category')
        if(status === 'success'){
            setCategories(data)
        }else{
            console.error(message);
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

  return (
    <main>
        <div className="flex justify-space-between">
            <h2>Categories</h2>
            {/* <Link to={'add'}><button className="btn btn-success">Create</button></Link> */}
        </div>
        <TableLayout theads={['SN', 'Name', 'Level']} >
            <tbody>
                {   
                    categories.map((category, i) => (

                        <tr key={i}>
                            <th>{i+1}</th>
                            <td>{category.name}</td>
                            <td>{category.level}</td>
                            <td className="action-col">
                                <button className="btn btn-danger" onClick={() => deleteObj('category', `/category/${category._id}`)} >Delete</button>
                                <Link to={`edit/${category._id}`}><button className="btn btn-accent">Edit</button></Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </TableLayout>
    </main>
  )
}

export default CategoryList