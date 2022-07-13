import { Formik } from 'formik';
const Addpodcast = () => {

    const uploadAudio = (e)=> {
        const file =e.target.files[0];
        const fd = new FormData();

        fetch()

    }

  return (
    <div>
      <div className="container">
        <h1>Add your podcast here</h1>
        <Formik initialValues={{
            title: "",
            description: "",
            thumbnail: "",
            file: "",
           createdAt : new Date(),
        }}>

        </Formik>
        <form>
          <div class="mb-3">
            <label for="title" class="form-label">
              Title
            </label>
            <input type="text" class="form-control" id="title" />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">
              Description
            </label>
            <textarea class="form-control" id="description" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label for="Created at" class="form-label">
              Date
            </label>
            <input type="date" class="form-control" id="date" />
          </div>
          <div className="mb-3">
            <label for="formfile" className="form-label">
              Upload your file here
            </label>
            <input className="form=control" type="file" id="formfile" />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Addpodcast;
