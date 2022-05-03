import ShowLayout from "../../../layouts/crud/ShowLayout"

const UserShow = () => {
  return (
    <ShowLayout title='User'>
        <div className='row'>
            <div className='col-6'>
                <p>
                    <b>Name : </b> Alson Garbuja
                </p>
                <p>
                    <b>Semester : </b> 6
                </p>
                <p>
                    <b>Batch : </b> 2018
                </p>
                <p>
                    <b>Registration number : </b> GCS 06
                </p>
                <p>
                    <b>Email : </b> be2018se607@gces.edu.np
                </p>
            </div>
            <div className="col-6">
                <p>
                    <b>Faculty : </b> Software
                </p>
                <p>
                    <b>Phone number : </b> 9825140801
                </p>
                <p>
                    <b>Current Borrow : </b> 4
                </p>
                <p>
                    <b>Fine : </b> Rs. 120
                </p>
                <p>
                    <b>Current Requests : </b> 2
                </p>
            </div>
        </div>
    </ShowLayout>
  )
}

export default UserShow