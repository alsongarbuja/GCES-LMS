import '../../styles/layout/crud/list.css'

const TableLayout = ({ children, theads }: {
    children: JSX.Element,
    theads: string[],
}) => {
  return (
    <div className="content-section">
        <table className="table">
            <thead>
                <tr>
                    {
                        theads.map((theader, i) => (
                            <th key={i}>{theader}</th>
                        ))
                    }
                    <th>Actions</th>
                </tr>
            </thead>
            {children}
        </table>
    </div>
  )
}

export default TableLayout