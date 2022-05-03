import ShowLayout from '../../../layouts/crud/ShowLayout'

const BookShow = () => {
  return (
    <ShowLayout title='Book'>
        <div className='row'>
            <div className='col-6'>
                <p>
                    <b>Title : </b> OOD
                </p>
                <p>
                    <b>Secondary title : </b> Design System
                </p>
                <p>
                    <b>Author : </b> Bidur Devkota
                </p>
                <p>
                    <b>Publisher : </b> Sukunda
                </p>
                <p>
                    <b>Year : </b> 1998
                </p>
                <p>
                    <b>Edition : </b> 2
                </p>
            </div>
            <div className="col-6">
                <p>
                    <b>ISBN number : </b> 1238747-2283-23Na3
                </p>
                <p>
                    <b>Barcode number : </b> -
                </p>
                <p>
                    <b>Total Copies : </b> 3 [12w, 4y6, t35]
                </p>
                <p>
                    <b>Type : </b> Text Book
                </p>
                <p>
                    <b>Semeseter : </b> 5th Semester
                </p>
            </div>
        </div>
    </ShowLayout>
  )
}

export default BookShow