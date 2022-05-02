import '../../styles/admin/card.css'

const DashboardCard = ({ total, title, icon }: {
    total: string,
    title: string,
    icon: JSX.Element
}) => {
  return (
    <section className="dashboard-card flex justify-space-between">
        <div className="card-detail">
            <p>{total}</p>
            <h3>{title}</h3>
        </div>
        {icon}
    </section>
  )
}

export default DashboardCard